import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "68",
  slug: "event-vendor-directory-platform",
  appName: "VendorVille Event Vendor Directory Platform",
  tagline: "Let customers browse vendors by category and request quotes, and let vendors manage listings and respond",
  category: "Directory & Lead Generation",
  kind: "landing",
  currency: "USD",
  primary: "Vendor",
};

export const THEME: Theme = {
  "brand": "#15803d",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f2ec",
  "accent": "#c8a45c",
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
    "href": "/app/vendors",
    "label": "Vendors",
    "icon": "layers"
  },
  {
    "href": "/app/quote-requests",
    "label": "Quote Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/reviews",
    "label": "Reviews",
    "icon": "layers"
  },
  {
    "href": "/app/favorites",
    "label": "Favorites",
    "icon": "layers"
  },
  {
    "href": "/app/categories",
    "label": "Categories",
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
    "label": "Overview",
    "href": "/#features"
  },
  {
    "label": "How it works",
    "href": "/#how"
  },
  {
    "label": "FAQ",
    "href": "/#faq"
  }
];
export const MANAGED: string[] = ["Vendor","QuoteRequest","Review","Favorite","Category"];
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
  "Vendor": {
    "name": "Vendor",
    "label": "Vendor",
    "labelPlural": "Vendors",
    "route": "/app/vendors",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "category",
    "statusField": "status",
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
        "key": "status",
        "header": "Status",
        "kind": "status"
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
        "name": "category",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "area",
        "label": "Area",
        "kind": "text"
      },
      {
        "name": "gallery",
        "label": "Gallery",
        "kind": "text"
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
  "Category": {
    "name": "Category",
    "label": "Category",
    "labelPlural": "Categories",
    "route": "/app/categories",
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
  "QuoteRequest": {
    "name": "QuoteRequest",
    "label": "Quote Request",
    "labelPlural": "Quote Requests",
    "route": "/app/quote-requests",
    "icon": "clipboard-check",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "vendor",
        "header": "Vendor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "vendor",
        "label": "Vendor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "eventDate",
        "label": "Event Date",
        "kind": "date"
      },
      {
        "name": "details",
        "label": "Details",
        "kind": "text"
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
  "Favorite": {
    "name": "Favorite",
    "label": "Favorite",
    "labelPlural": "Favorites",
    "route": "/app/favorites",
    "icon": "layers",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "vendor",
        "header": "Vendor",
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
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "vendor",
        "label": "Vendor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Review": {
    "name": "Review",
    "label": "Review",
    "labelPlural": "Reviews",
    "route": "/app/reviews",
    "icon": "layers",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "vendor",
        "header": "Vendor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "rating",
        "header": "Rating",
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
        "name": "vendor",
        "label": "Vendor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "rating",
        "label": "Rating",
        "kind": "number"
      },
      {
        "name": "comment",
        "label": "Comment",
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
