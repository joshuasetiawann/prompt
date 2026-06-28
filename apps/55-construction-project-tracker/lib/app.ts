import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "55",
  slug: "construction-project-tracker",
  appName: "BuildTrack Construction Project Tracker",
  tagline: "Track project phases, daily logs, materials, crews, and budget, with a client-facing progress view",
  category: "Construction & Project Ops",
  kind: "dashboard",
  currency: "USD",
  primary: "Project",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
  "accent": "#ea580c",
  "neutral": "slate",
  "headingFont": '"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  "bodyFont": '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  "radius": "0.85rem"
};

export const NAV = [
  {
    "href": "/app",
    "label": "Dashboard",
    "icon": "dashboard"
  },
  {
    "href": "/app/projects",
    "label": "Projects",
    "icon": "layers"
  },
  {
    "href": "/app/daily-logs",
    "label": "Daily Logs",
    "icon": "sparkles"
  },
  {
    "href": "/app/crews",
    "label": "Crews",
    "icon": "layers"
  },
  {
    "href": "/app/phases",
    "label": "Phases",
    "icon": "layers"
  },
  {
    "href": "/app/materials",
    "label": "Materials",
    "icon": "layers"
  },
  {
    "href": "/app/assignments",
    "label": "Assignments",
    "icon": "layers"
  },
  {
    "href": "/app/reports",
    "label": "Reports",
    "icon": "chart"
  },
  {
    "href": "/app/settings",
    "label": "Settings",
    "icon": "settings"
  }
];
export const MARKETING_LINKS = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Projects",
    "href": "/browse"
  },
  {
    "label": "Features",
    "href": "/#features"
  },
  {
    "label": "Contact",
    "href": "/#contact"
  }
];
export const MANAGED: string[] = ["Project","DailyLog","Crew","Phase","Material","Assignment"];
export const MODELS: Record<string, ModelMeta> = {
  "User": {
    "name": "User",
    "label": "User",
    "labelPlural": "Users",
    "route": "/app/users",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "email",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "role",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Project": {
    "name": "Project",
    "label": "Project",
    "labelPlural": "Projects",
    "route": "/app/projects",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "budget",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "budget",
        "header": "Budget",
        "kind": "price"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "client",
        "label": "Client",
        "kind": "text"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "kind": "date"
      },
      {
        "name": "budget",
        "label": "Budget",
        "kind": "price"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Phase": {
    "name": "Phase",
    "label": "Phase",
    "labelPlural": "Phases",
    "route": "/app/phases",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "percentComplete",
        "label": "Percent Complete",
        "kind": "text"
      },
      {
        "name": "order",
        "label": "Order",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "DailyLog": {
    "name": "DailyLog",
    "label": "Daily Log",
    "labelPlural": "Daily Logs",
    "route": "/app/daily-logs",
    "icon": "sparkles",
    "titleField": "weather",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "weather",
        "header": "Weather",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "crewCount",
        "header": "Crew Count",
        "kind": "number"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "weather",
        "label": "Weather",
        "kind": "text"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
      },
      {
        "name": "crewCount",
        "label": "Crew Count",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "LogPhoto": {
    "name": "LogPhoto",
    "label": "Log Photo",
    "labelPlural": "Log Photos",
    "route": "/app/log-photos",
    "icon": "layers",
    "titleField": "url",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "url",
        "header": "Url",
        "kind": "text"
      },
      {
        "key": "dailyLog",
        "header": "Daily Log",
        "kind": "relation",
        "titleField": "weather"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "dailyLog",
        "label": "Daily Log",
        "kind": "relation",
        "titleField": "weather"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Material": {
    "name": "Material",
    "label": "Material",
    "labelPlural": "Materials",
    "route": "/app/materials",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "qty",
        "header": "Qty",
        "kind": "number"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "delivered",
        "label": "Delivered",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Crew": {
    "name": "Crew",
    "label": "Crew",
    "labelPlural": "Crews",
    "route": "/app/crews",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Assignment": {
    "name": "Assignment",
    "label": "Assignment",
    "labelPlural": "Assignments",
    "route": "/app/assignments",
    "icon": "layers",
    "titleField": "role",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "role",
        "header": "Role",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "crew",
        "label": "Crew",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "role",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CostItem": {
    "name": "CostItem",
    "label": "Cost Item",
    "labelPlural": "Cost Items",
    "route": "/app/cost-items",
    "icon": "layers",
    "titleField": "category",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "category",
        "header": "Category",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "budgeted",
        "label": "Budgeted",
        "kind": "number"
      },
      {
        "name": "actual",
        "label": "Actual",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
