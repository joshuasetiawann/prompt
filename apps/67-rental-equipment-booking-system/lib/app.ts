import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "67",
  slug: "rental-equipment-booking-system",
  appName: "GearRent Rental Equipment Booking System",
  tagline: "Let customers reserve equipment for date ranges with deposits and let staff track availability and condition",
  category: "Rental & Reservations",
  kind: "storefront",
  currency: "USD",
  primary: "Equipment",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
  "accent": "#ca8a04",
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
    "href": "/app/equipments",
    "label": "Equipments",
    "icon": "layers"
  },
  {
    "href": "/app/rentals",
    "label": "Rentals",
    "icon": "car"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
  },
  {
    "href": "/app/condition-logs",
    "label": "Condition Logs",
    "icon": "layers"
  },
  {
    "href": "/app/maintenances",
    "label": "Maintenances",
    "icon": "sparkles"
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
    "label": "Equipments",
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
export const MANAGED: string[] = ["Equipment","Rental","Payment","ConditionLog","Maintenance"];
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
  "Equipment": {
    "name": "Equipment",
    "label": "Equipment",
    "labelPlural": "Equipments",
    "route": "/app/equipments",
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
        "name": "dailyRate",
        "label": "Daily Rate",
        "kind": "number"
      },
      {
        "name": "deposit",
        "label": "Deposit",
        "kind": "number"
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
  "Rental": {
    "name": "Rental",
    "label": "Rental",
    "labelPlural": "Rentals",
    "route": "/app/rentals",
    "icon": "car",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "equipment",
        "header": "Equipment",
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
        "name": "equipment",
        "label": "Equipment",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "kind": "date"
      },
      {
        "name": "endDate",
        "label": "End Date",
        "kind": "date"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "total",
        "label": "Total",
        "kind": "price"
      },
      {
        "name": "depositPaid",
        "label": "Deposit Paid",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ConditionLog": {
    "name": "ConditionLog",
    "label": "Condition Log",
    "labelPlural": "Condition Logs",
    "route": "/app/condition-logs",
    "icon": "layers",
    "titleField": "phase",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "phase",
        "header": "Phase",
        "kind": "text"
      },
      {
        "key": "rental",
        "header": "Rental",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "rental",
        "label": "Rental",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "name": "phase",
        "label": "Phase",
        "kind": "text"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Maintenance": {
    "name": "Maintenance",
    "label": "Maintenance",
    "labelPlural": "Maintenances",
    "route": "/app/maintenances",
    "icon": "sparkles",
    "titleField": "reason",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "reason",
        "header": "Reason",
        "kind": "text"
      },
      {
        "key": "equipment",
        "header": "Equipment",
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
        "name": "equipment",
        "label": "Equipment",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "reason",
        "label": "Reason",
        "kind": "text"
      },
      {
        "name": "until",
        "label": "Until",
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
    "titleField": "type",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "rental",
        "header": "Rental",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
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
        "name": "rental",
        "label": "Rental",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "type",
        "label": "Type",
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
  }
};
