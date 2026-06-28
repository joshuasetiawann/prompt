import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "73",
  slug: "subscription-box-management-system",
  appName: "BoxCycle Subscription Box Management System",
  tagline: "Let customers subscribe to box plans with recurring (mock) billing and let the operator manage shipments",
  category: "Subscriptions & Recurring Commerce",
  kind: "dashboard",
  currency: "USD",
  primary: "Plan",
};

export const THEME: Theme = {
  "brand": "#f97362",
  "brandFg": "#ffffff",
  "brandSoft": "#fef1ef",
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
    "href": "/app/plans",
    "label": "Plans",
    "icon": "layers"
  },
  {
    "href": "/app/billing-cycles",
    "label": "Billing Cycles",
    "icon": "receipt"
  },
  {
    "href": "/app/subscriptions",
    "label": "Subscriptions",
    "icon": "badge-check"
  },
  {
    "href": "/app/products",
    "label": "Products",
    "icon": "bag"
  },
  {
    "href": "/app/shipments",
    "label": "Shipments",
    "icon": "truck"
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
    "label": "Plans",
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
export const MANAGED: string[] = ["Plan","BillingCycle","Subscription","Product","Shipment","Payment"];
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
  "Plan": {
    "name": "Plan",
    "label": "Plan",
    "labelPlural": "Plans",
    "route": "/app/plans",
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
        "name": "interval",
        "label": "Interval",
        "kind": "text"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Subscription": {
    "name": "Subscription",
    "label": "Subscription",
    "labelPlural": "Subscriptions",
    "route": "/app/subscriptions",
    "icon": "badge-check",
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
        "key": "plan",
        "header": "Plan",
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
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "plan",
        "label": "Plan",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "startedAt",
        "label": "Started At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "BillingCycle": {
    "name": "BillingCycle",
    "label": "Billing Cycle",
    "labelPlural": "Billing Cycles",
    "route": "/app/billing-cycles",
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
        "key": "subscription",
        "header": "Subscription",
        "kind": "relation",
        "titleField": "customerId"
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
        "name": "subscription",
        "label": "Subscription",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "name": "periodStart",
        "label": "Period Start",
        "kind": "date"
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
  },
  "Shipment": {
    "name": "Shipment",
    "label": "Shipment",
    "labelPlural": "Shipments",
    "route": "/app/shipments",
    "icon": "truck",
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
        "key": "billingCycle",
        "header": "Billing Cycle",
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
        "name": "billingCycle",
        "label": "Billing Cycle",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "shippedAt",
        "label": "Shipped At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Product": {
    "name": "Product",
    "label": "Product",
    "labelPlural": "Products",
    "route": "/app/products",
    "icon": "bag",
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
  "BoxItem": {
    "name": "BoxItem",
    "label": "Box Item",
    "labelPlural": "Box Items",
    "route": "/app/box-items",
    "icon": "layers",
    "titleField": "cycleLabel",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "cycleLabel",
        "header": "Cycle Label",
        "kind": "text"
      },
      {
        "key": "plan",
        "header": "Plan",
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
        "name": "plan",
        "label": "Plan",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "product",
        "label": "Product",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "cycleLabel",
        "label": "Cycle Label",
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
        "key": "billingCycle",
        "header": "Billing Cycle",
        "kind": "relation",
        "titleField": "status"
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
        "name": "billingCycle",
        "label": "Billing Cycle",
        "kind": "relation",
        "titleField": "status"
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
