import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "47",
  slug: "link-in-bio-website-builder",
  appName: "BioLink Link-in-Bio Website Builder",
  tagline: "Let users build and customize a public bio page of links and see click analytics",
  category: "Builders & SaaS",
  kind: "dashboard",
  currency: "USD",
  primary: "Link",
};

export const THEME: Theme = {
  "brand": "#7c3aed",
  "brandFg": "#ffffff",
  "brandSoft": "#f2ebfd",
  "accent": "#ffffff",
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
    "href": "/app/links",
    "label": "Links",
    "icon": "link"
  },
  {
    "href": "/app/bio-pages",
    "label": "Bio Pages",
    "icon": "link"
  },
  {
    "href": "/app/social-links",
    "label": "Social Links",
    "icon": "link"
  },
  {
    "href": "/app/subscribers",
    "label": "Subscribers",
    "icon": "badge-check"
  },
  {
    "href": "/app/custom-themes",
    "label": "Custom Themes",
    "icon": "layers"
  },
  {
    "href": "/app/click-events",
    "label": "Click Events",
    "icon": "ticket"
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
    "label": "Links",
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
export const MANAGED: string[] = ["Link","BioPage","SocialLink","Subscriber","CustomTheme","ClickEvent"];
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
  "BioPage": {
    "name": "BioPage",
    "label": "Bio Page",
    "labelPlural": "Bio Pages",
    "route": "/app/bio-pages",
    "icon": "link",
    "titleField": "username",
    "subtitleField": "bio",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "username",
        "header": "Username",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "username",
        "label": "Username",
        "kind": "text"
      },
      {
        "name": "displayName",
        "label": "Display Name",
        "kind": "text"
      },
      {
        "name": "bio",
        "label": "Bio",
        "kind": "text"
      },
      {
        "name": "avatar",
        "label": "Avatar",
        "kind": "text"
      },
      {
        "name": "theme",
        "label": "Theme",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Link": {
    "name": "Link",
    "label": "Link",
    "labelPlural": "Links",
    "route": "/app/links",
    "icon": "link",
    "titleField": "title",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "bioPage",
        "header": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "key": "sortOrder",
        "header": "Sort Order",
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
        "name": "bioPage",
        "label": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "sortOrder",
        "label": "Sort Order",
        "kind": "number"
      },
      {
        "name": "visible",
        "label": "Visible",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ClickEvent": {
    "name": "ClickEvent",
    "label": "Click Event",
    "labelPlural": "Click Events",
    "route": "/app/click-events",
    "icon": "ticket",
    "titleField": "id",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "id",
        "header": "Id",
        "kind": "text"
      },
      {
        "key": "link",
        "header": "Link",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "link",
        "label": "Link",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "PageView": {
    "name": "PageView",
    "label": "Page View",
    "labelPlural": "Page Views",
    "route": "/app/page-views",
    "icon": "link",
    "titleField": "id",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "id",
        "header": "Id",
        "kind": "text"
      },
      {
        "key": "bioPage",
        "header": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "bioPage",
        "label": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "SocialLink": {
    "name": "SocialLink",
    "label": "Social Link",
    "labelPlural": "Social Links",
    "route": "/app/social-links",
    "icon": "link",
    "titleField": "platform",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "platform",
        "header": "Platform",
        "kind": "text"
      },
      {
        "key": "bioPage",
        "header": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "key": "sortOrder",
        "header": "Sort Order",
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
        "name": "bioPage",
        "label": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "name": "platform",
        "label": "Platform",
        "kind": "text"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "sortOrder",
        "label": "Sort Order",
        "kind": "number"
      },
      {
        "name": "visible",
        "label": "Visible",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Subscriber": {
    "name": "Subscriber",
    "label": "Subscriber",
    "labelPlural": "Subscribers",
    "route": "/app/subscribers",
    "icon": "badge-check",
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
        "key": "bioPage",
        "header": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "bioPage",
        "label": "Bio Page",
        "kind": "relation",
        "titleField": "username"
      },
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
        "name": "source",
        "label": "Source",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CustomTheme": {
    "name": "CustomTheme",
    "label": "Custom Theme",
    "labelPlural": "Custom Themes",
    "route": "/app/custom-themes",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "description",
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
        "key": "user",
        "header": "User",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "isDefault",
        "label": "Is Default",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
