import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "60",
  slug: "photography-studio-booking-proofing-portal",
  appName: "Shutterly Photography Studio Booking & Proofing Portal",
  tagline: "Let clients book sessions and select favorites from private galleries while photographers manage delivery",
  category: "Booking & Client Proofing",
  kind: "storefront",
  currency: "USD",
  primary: "Package",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
  "accent": "#f5efe2",
  "neutral": "slate",
  "headingFont": '"Georgia", "Times New Roman", ui-serif, serif',
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
    "href": "/app/packages",
    "label": "Packages",
    "icon": "layers"
  },
  {
    "href": "/app/galleries",
    "label": "Galleries",
    "icon": "layers"
  },
  {
    "href": "/app/photos",
    "label": "Photos",
    "icon": "layers"
  },
  {
    "href": "/app/selections",
    "label": "Selections",
    "icon": "layers"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
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
    "label": "Packages",
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
export const MANAGED: string[] = ["Package","Gallery","Photo","Selection","Payment"];
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
  "Package": {
    "name": "Package",
    "label": "Package",
    "labelPlural": "Packages",
    "route": "/app/packages",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "price",
        "header": "Price",
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
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "proofLimit",
        "label": "Proof Limit",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Session": {
    "name": "Session",
    "label": "Session",
    "labelPlural": "Sessions",
    "route": "/app/sessions",
    "icon": "layers",
    "titleField": "clientId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "clientId",
        "header": "Client",
        "kind": "text"
      },
      {
        "key": "package",
        "header": "Package",
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
        "name": "clientId",
        "label": "Client",
        "kind": "text"
      },
      {
        "name": "package",
        "label": "Package",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
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
  "Gallery": {
    "name": "Gallery",
    "label": "Gallery",
    "labelPlural": "Galleries",
    "route": "/app/galleries",
    "icon": "layers",
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "session",
        "header": "Session",
        "kind": "relation",
        "titleField": "clientId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "session",
        "label": "Session",
        "kind": "relation",
        "titleField": "clientId"
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
  "Photo": {
    "name": "Photo",
    "label": "Photo",
    "labelPlural": "Photos",
    "route": "/app/photos",
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
        "key": "gallery",
        "header": "Gallery",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "gallery",
        "label": "Gallery",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "isFinal",
        "label": "Is Final",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Selection": {
    "name": "Selection",
    "label": "Selection",
    "labelPlural": "Selections",
    "route": "/app/selections",
    "icon": "layers",
    "titleField": "favorite",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "favorite",
        "header": "Favorite",
        "kind": "text"
      },
      {
        "key": "gallery",
        "header": "Gallery",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "gallery",
        "label": "Gallery",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "photo",
        "label": "Photo",
        "kind": "relation",
        "titleField": "url"
      },
      {
        "name": "favorite",
        "label": "Favorite",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payment": {
    "name": "Payment",
    "label": "Payment",
    "labelPlural": "Payments",
    "route": "/app/payments",
    "icon": "receipt",
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "session",
        "header": "Session",
        "kind": "relation",
        "titleField": "clientId"
      },
      {
        "key": "amount",
        "header": "Amount",
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
        "name": "session",
        "label": "Session",
        "kind": "relation",
        "titleField": "clientId"
      },
      {
        "name": "amount",
        "label": "Amount",
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
  }
};
