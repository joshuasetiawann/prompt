/* PromptKita — logika antarmuka (tanpa dependensi/bundler). */
(function () {
  "use strict";

  const { CATEGORIES, PROMPTS } = window.PROMPTKITA_DATA || { CATEGORIES: [], PROMPTS: [] };

  const STORAGE_KEYS = { theme: "promptkita:theme", favorites: "promptkita:favorites" };

  // ---- State ----------------------------------------------------------------
  const state = {
    query: "",
    category: "semua",
    favoritesOnly: false,
    favorites: loadFavorites(),
  };

  // ---- Elemen ---------------------------------------------------------------
  const el = {
    grid: document.getElementById("prompt-grid"),
    filters: document.getElementById("category-filters"),
    search: document.getElementById("search-input"),
    resultMeta: document.getElementById("result-meta"),
    emptyState: document.getElementById("empty-state"),
    resetBtn: document.getElementById("reset-filters"),
    favoritesOnly: document.getElementById("favorites-only"),
    statTotal: document.getElementById("stat-total"),
    statCategories: document.getElementById("stat-categories"),
    themeToggle: document.getElementById("theme-toggle"),
    toast: document.getElementById("toast"),
    cardTemplate: document.getElementById("card-template"),
  };

  const categoryLabel = (id) => {
    const c = CATEGORIES.find((x) => x.id === id);
    return c ? `${c.emoji} ${c.label}` : id;
  };

  // ---- Tema -----------------------------------------------------------------
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEYS.theme, next);
  }

  // ---- Favorit --------------------------------------------------------------
  function loadFavorites() {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]"));
    } catch {
      return new Set();
    }
  }

  function saveFavorites() {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify([...state.favorites]));
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    saveFavorites();
    render();
  }

  // ---- Filter & pencarian ---------------------------------------------------
  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    return PROMPTS.filter((p) => {
      if (state.favoritesOnly && !state.favorites.has(p.id)) return false;
      if (state.category !== "semua" && p.category !== state.category) return false;
      if (!q) return true;
      const haystack = [p.title, p.description, p.prompt, p.category, ...(p.tags || [])]
        .join(" ")
        .toLowerCase();
      return q.split(/\s+/).every((term) => haystack.includes(term));
    });
  }

  // ---- Render filter chips --------------------------------------------------
  function renderFilters() {
    const counts = PROMPTS.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});

    const chips = [{ id: "semua", label: "Semua", emoji: "🗂️", count: PROMPTS.length }].concat(
      CATEGORIES.map((c) => ({ ...c, count: counts[c.id] || 0 }))
    );

    el.filters.innerHTML = "";
    chips.forEach((chip) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.dataset.category = chip.id;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(chip.id === state.category));
      btn.innerHTML = `<span aria-hidden="true">${chip.emoji}</span> ${chip.label} <span class="chip-count">${chip.count}</span>`;
      btn.addEventListener("click", () => {
        state.category = chip.id;
        renderFilters();
        render();
      });
      el.filters.appendChild(btn);
    });
  }

  // ---- Render kartu ---------------------------------------------------------
  function highlight(text, q) {
    if (!q) return escapeHtml(text);
    const terms = q.trim().split(/\s+/).filter(Boolean).map(escapeRegex);
    if (!terms.length) return escapeHtml(text);
    const re = new RegExp(`(${terms.join("|")})`, "gi");
    return escapeHtml(text).replace(re, "<mark>$1</mark>");
  }

  function render() {
    const items = getFiltered();
    el.grid.innerHTML = "";

    el.emptyState.hidden = items.length !== 0;
    el.grid.hidden = items.length === 0;

    const q = state.query.trim().toLowerCase();
    el.resultMeta.textContent =
      items.length === 0
        ? ""
        : `Menampilkan ${items.length} dari ${PROMPTS.length} prompt` +
          (state.category !== "semua" ? ` · ${categoryLabel(state.category)}` : "") +
          (state.favoritesOnly ? " · favorit" : "");

    const frag = document.createDocumentFragment();
    items.forEach((p) => frag.appendChild(buildCard(p, q)));
    el.grid.appendChild(frag);
  }

  function buildCard(p, q) {
    const node = el.cardTemplate.content.firstElementChild.cloneNode(true);

    node.querySelector(".card-category").textContent = categoryLabel(p.category);
    node.querySelector(".card-title").innerHTML = highlight(p.title, q);
    node.querySelector(".card-desc").innerHTML = highlight(p.description, q);
    node.querySelector(".card-prompt code").textContent = p.prompt;

    const tagsWrap = node.querySelector(".card-tags");
    (p.tags || []).forEach((t) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = `#${t}`;
      tagsWrap.appendChild(span);
    });

    // Favorit
    const favBtn = node.querySelector(".fav-btn");
    const isFav = state.favorites.has(p.id);
    favBtn.classList.toggle("is-active", isFav);
    favBtn.setAttribute("aria-pressed", String(isFav));
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(p.id);
    });

    // Salin
    const copyBtn = node.querySelector(".btn-copy");
    copyBtn.addEventListener("click", () => copyPrompt(p.prompt, copyBtn));

    return node;
  }

  // ---- Salin ke clipboard ---------------------------------------------------
  async function copyPrompt(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback untuk browser/konteks tanpa Clipboard API
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        showToast("Gagal menyalin — salin manual ya 🙏");
        document.body.removeChild(ta);
        return;
      }
      document.body.removeChild(ta);
    }
    btn.classList.add("copied");
    showToast("Prompt tersalin ke clipboard ✓");
    setTimeout(() => btn.classList.remove("copied"), 1600);
  }

  // ---- Toast ----------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    el.toast.textContent = message;
    el.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2200);
  }

  // ---- Util -----------------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function debounce(fn, delay) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // ---- Inisialisasi ---------------------------------------------------------
  function init() {
    initTheme();

    el.statTotal.textContent = PROMPTS.length;
    el.statCategories.textContent = CATEGORIES.length;

    renderFilters();
    render();

    el.search.addEventListener(
      "input",
      debounce((e) => {
        state.query = e.target.value;
        render();
      }, 120)
    );

    el.favoritesOnly.addEventListener("change", (e) => {
      state.favoritesOnly = e.target.checked;
      render();
    });

    el.resetBtn.addEventListener("click", () => {
      state.query = "";
      state.category = "semua";
      state.favoritesOnly = false;
      el.search.value = "";
      el.favoritesOnly.checked = false;
      renderFilters();
      render();
    });

    el.themeToggle.addEventListener("click", toggleTheme);

    // Pintasan "/" untuk fokus ke pencarian
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== el.search) {
        e.preventDefault();
        el.search.focus();
      }
      if (e.key === "Escape" && document.activeElement === el.search) {
        el.search.blur();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
