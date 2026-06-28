import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "52",
  slug: "wedding-planner-client-portal",
  appName: "Knot & Co Wedding Planner Client Portal",
  tagline: "Give planners and couples one place to manage the wedding timeline, budget, vendors, guests, and documents",
  category: "Client Portal & Planning",
  kind: "dashboard",
  currency: "USD",
  primary: "Wedding",
};

export const THEME: Theme = {
  "brand": "#15803d",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f2ec",
  "accent": "#ca8a04",
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
    "href": "/app/weddings",
    "label": "Weddings",
    "icon": "layers"
  },
  {
    "href": "/app/vendors",
    "label": "Vendors",
    "icon": "layers"
  },
  {
    "href": "/app/guests",
    "label": "Guests",
    "icon": "users"
  },
  {
    "href": "/app/doc-files",
    "label": "Doc Files",
    "icon": "file-text"
  },
  {
    "href": "/app/client-links",
    "label": "Client Links",
    "icon": "users"
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
    "label": "Weddings",
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
export const MANAGED: string[] = ["Wedding","Vendor","Guest","DocFile","ClientLink"];
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
  "Wedding": {
    "name": "Wedding",
    "label": "Wedding",
    "labelPlural": "Weddings",
    "route": "/app/weddings",
    "icon": "layers",
    "titleField": "plannerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "plannerId",
        "header": "Planner",
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
        "name": "plannerId",
        "label": "Planner",
        "kind": "text"
      },
      {
        "name": "coupleNames",
        "label": "Couple Names",
        "kind": "text"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "venue",
        "label": "Venue",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ClientLink": {
    "name": "ClientLink",
    "label": "Client Link",
    "labelPlural": "Client Links",
    "route": "/app/client-links",
    "icon": "users",
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "name": "user",
        "label": "User",
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
  "TaskItem": {
    "name": "TaskItem",
    "label": "Task Item",
    "labelPlural": "Task Items",
    "route": "/app/task-items",
    "icon": "list-checks",
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "done",
        "label": "Done",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "BudgetItem": {
    "name": "BudgetItem",
    "label": "Budget Item",
    "labelPlural": "Budget Items",
    "route": "/app/budget-items",
    "icon": "wallet",
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "estimated",
        "label": "Estimated",
        "kind": "text"
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
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
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
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
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "contact",
        "label": "Contact",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Guest": {
    "name": "Guest",
    "label": "Guest",
    "labelPlural": "Guests",
    "route": "/app/guests",
    "icon": "users",
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "rsvp",
        "label": "Rsvp",
        "kind": "text"
      },
      {
        "name": "meal",
        "label": "Meal",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "DocFile": {
    "name": "DocFile",
    "label": "Doc File",
    "labelPlural": "Doc Files",
    "route": "/app/doc-files",
    "icon": "file-text",
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
        "key": "wedding",
        "header": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "wedding",
        "label": "Wedding",
        "kind": "relation",
        "titleField": "plannerId"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "kind",
        "label": "Kind",
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
