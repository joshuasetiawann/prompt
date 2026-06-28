import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "77",
  slug: "pharmacy-stock-prescription-queue-system",
  appName: "RxQueue Pharmacy Stock & Prescription Queue System",
  tagline: "Track medicine stock and move prescriptions through a queue from received to dispensed",
  category: "Pharmacy & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Prescription",
};

export const THEME: Theme = {
  "brand": "#16a34a",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f6ed",
  "accent": "#334155",
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
    "href": "/app/prescriptions",
    "label": "Prescriptions",
    "icon": "layers"
  },
  {
    "href": "/app/medicines",
    "label": "Medicines",
    "icon": "layers"
  },
  {
    "href": "/app/patients",
    "label": "Patients",
    "icon": "users"
  },
  {
    "href": "/app/stock-movements",
    "label": "Stock Movements",
    "icon": "warehouse"
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
    "label": "Prescriptions",
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
export const MANAGED: string[] = ["Prescription","Medicine","Patient","StockMovement"];
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
  "Medicine": {
    "name": "Medicine",
    "label": "Medicine",
    "labelPlural": "Medicines",
    "route": "/app/medicines",
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
        "key": "stock",
        "header": "Stock",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "stock",
        "label": "Stock",
        "kind": "number"
      },
      {
        "name": "batch",
        "label": "Batch",
        "kind": "text"
      },
      {
        "name": "expiry",
        "label": "Expiry",
        "kind": "text"
      },
      {
        "name": "lowStockThreshold",
        "label": "Low Stock Threshold",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Patient": {
    "name": "Patient",
    "label": "Patient",
    "labelPlural": "Patients",
    "route": "/app/patients",
    "icon": "users",
    "titleField": "fullName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fullName",
        "header": "Full Name",
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
        "name": "fullName",
        "label": "Full Name",
        "kind": "text"
      },
      {
        "name": "phone",
        "label": "Phone",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Prescription": {
    "name": "Prescription",
    "label": "Prescription",
    "labelPlural": "Prescriptions",
    "route": "/app/prescriptions",
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
        "key": "patient",
        "header": "Patient",
        "kind": "relation",
        "titleField": "fullName"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
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
  "PrescriptionItem": {
    "name": "PrescriptionItem",
    "label": "Prescription Item",
    "labelPlural": "Prescription Items",
    "route": "/app/prescription-items",
    "icon": "layers",
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
        "key": "prescription",
        "header": "Prescription",
        "kind": "relation",
        "titleField": "status"
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
        "name": "prescription",
        "label": "Prescription",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "medicine",
        "label": "Medicine",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "StockMovement": {
    "name": "StockMovement",
    "label": "Stock Movement",
    "labelPlural": "Stock Movements",
    "route": "/app/stock-movements",
    "icon": "warehouse",
    "titleField": "type",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "medicine",
        "header": "Medicine",
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
        "name": "medicine",
        "label": "Medicine",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "reason",
        "label": "Reason",
        "kind": "text"
      },
      {
        "name": "actorId",
        "label": "Actor",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "AuditLog": {
    "name": "AuditLog",
    "label": "Audit Log",
    "labelPlural": "Audit Logs",
    "route": "/app/audit-logs",
    "icon": "layers",
    "titleField": "entity",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "entity",
        "header": "Entity",
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
        "name": "entity",
        "label": "Entity",
        "kind": "text"
      },
      {
        "name": "entityId",
        "label": "Entity",
        "kind": "text"
      },
      {
        "name": "action",
        "label": "Action",
        "kind": "text"
      },
      {
        "name": "actorId",
        "label": "Actor",
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
