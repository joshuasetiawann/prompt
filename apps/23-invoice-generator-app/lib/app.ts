import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "23",
  slug: "invoice-generator-app",
  appName: "InvoiceMint Invoice Generator App",
  tagline: "Create professional invoices, track their status, and record payments",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Invoice",
};

export const THEME: Theme = {
  "brand": "#334155",
  "brandFg": "#ffffff",
  "brandSoft": "#ebecee",
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
    "href": "/app/invoices",
    "label": "Invoices",
    "icon": "receipt"
  },
  {
    "href": "/app/clients",
    "label": "Clients",
    "icon": "users"
  },
  {
    "href": "/app/business-profiles",
    "label": "Business Profiles",
    "icon": "file-text"
  },
  {
    "href": "/app/payment-records",
    "label": "Payment Records",
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
    "label": "Invoices",
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
export const MANAGED: string[] = ["Invoice","Client","BusinessProfile","PaymentRecord"];
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
  "BusinessProfile": {
    "name": "BusinessProfile",
    "label": "Business Profile",
    "labelPlural": "Business Profiles",
    "route": "/app/business-profiles",
    "icon": "file-text",
    "titleField": "name",
    "subtitleField": "address",
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
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "taxRate",
        "label": "Tax Rate",
        "kind": "number"
      },
      {
        "name": "currency",
        "label": "Currency",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Client": {
    "name": "Client",
    "label": "Client",
    "labelPlural": "Clients",
    "route": "/app/clients",
    "icon": "users",
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
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Invoice": {
    "name": "Invoice",
    "label": "Invoice",
    "labelPlural": "Invoices",
    "route": "/app/invoices",
    "icon": "receipt",
    "titleField": "number",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "number",
        "header": "Number",
        "kind": "text"
      },
      {
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "total",
        "header": "Total",
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
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "number",
        "label": "Number",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "issueDate",
        "label": "Issue Date",
        "kind": "date"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "subtotal",
        "label": "Subtotal",
        "kind": "number"
      },
      {
        "name": "tax",
        "label": "Tax",
        "kind": "number"
      },
      {
        "name": "total",
        "label": "Total",
        "kind": "price"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "InvoiceItem": {
    "name": "InvoiceItem",
    "label": "Invoice Item",
    "labelPlural": "Invoice Items",
    "route": "/app/invoice-items",
    "icon": "receipt",
    "titleField": "description",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "description",
        "header": "Description",
        "kind": "text"
      },
      {
        "key": "invoice",
        "header": "Invoice",
        "kind": "relation",
        "titleField": "number"
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
        "name": "invoice",
        "label": "Invoice",
        "kind": "relation",
        "titleField": "number"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "rate",
        "label": "Rate",
        "kind": "number"
      },
      {
        "name": "lineTotal",
        "label": "Line Total",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "PaymentRecord": {
    "name": "PaymentRecord",
    "label": "Payment Record",
    "labelPlural": "Payment Records",
    "route": "/app/payment-records",
    "icon": "receipt",
    "titleField": "method",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "method",
        "header": "Method",
        "kind": "text"
      },
      {
        "key": "invoice",
        "header": "Invoice",
        "kind": "relation",
        "titleField": "number"
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
        "name": "invoice",
        "label": "Invoice",
        "kind": "relation",
        "titleField": "number"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "method",
        "label": "Method",
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
