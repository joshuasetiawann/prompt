import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "22",
  slug: "finance-dashboard-app",
  appName: "FinanceIQ Finance Dashboard App",
  tagline: "Record transactions, categorize them, and see cash flow, budgets, and trends clearly",
  category: "Analytics & Dashboards",
  kind: "dashboard",
  currency: "USD",
  primary: "Category",
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
    "href": "/app/categories",
    "label": "Categories",
    "icon": "layers"
  },
  {
    "href": "/app/payees",
    "label": "Payees",
    "icon": "layers"
  },
  {
    "href": "/app/recurring-transactions",
    "label": "Recurring Transactions",
    "icon": "receipt"
  },
  {
    "href": "/app/savings-goals",
    "label": "Savings Goals",
    "icon": "layers"
  },
  {
    "href": "/app/transactions",
    "label": "Transactions",
    "icon": "receipt"
  },
  {
    "href": "/app/budgets",
    "label": "Budgets",
    "icon": "wallet"
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
    "label": "Categories",
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
export const MANAGED: string[] = ["Category","Payee","RecurringTransaction","SavingsGoal","Transaction","Budget"];
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
  "Account": {
    "name": "Account",
    "label": "Account",
    "labelPlural": "Accounts",
    "route": "/app/accounts",
    "icon": "settings",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "balance",
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
        "key": "balance",
        "header": "Balance",
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
        "name": "balance",
        "label": "Balance",
        "kind": "price"
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
    "subtitleField": "type",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Transaction": {
    "name": "Transaction",
    "label": "Transaction",
    "labelPlural": "Transactions",
    "route": "/app/transactions",
    "icon": "receipt",
    "titleField": "type",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "account",
        "header": "Account",
        "kind": "relation",
        "titleField": "name"
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
        "name": "account",
        "label": "Account",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
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
        "name": "note",
        "label": "Note",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Budget": {
    "name": "Budget",
    "label": "Budget",
    "labelPlural": "Budgets",
    "route": "/app/budgets",
    "icon": "wallet",
    "titleField": "month",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "month",
        "header": "Month",
        "kind": "text"
      },
      {
        "key": "category",
        "header": "Category",
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
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "month",
        "label": "Month",
        "kind": "text"
      },
      {
        "name": "limit",
        "label": "Limit",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payee": {
    "name": "Payee",
    "label": "Payee",
    "labelPlural": "Payees",
    "route": "/app/payees",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "type",
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
        "name": "type",
        "label": "Type",
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
  "RecurringTransaction": {
    "name": "RecurringTransaction",
    "label": "Recurring Transaction",
    "labelPlural": "Recurring Transactions",
    "route": "/app/recurring-transactions",
    "icon": "receipt",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "account",
        "header": "Account",
        "kind": "relation",
        "titleField": "name"
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
        "name": "account",
        "label": "Account",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "payee",
        "label": "Payee",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "frequency",
        "label": "Frequency",
        "kind": "text"
      },
      {
        "name": "nextDate",
        "label": "Next Date",
        "kind": "date"
      },
      {
        "name": "isActive",
        "label": "Is Active",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "SavingsGoal": {
    "name": "SavingsGoal",
    "label": "Savings Goal",
    "labelPlural": "Savings Goals",
    "route": "/app/savings-goals",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
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
        "name": "account",
        "label": "Account",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "targetAmount",
        "label": "Target Amount",
        "kind": "number"
      },
      {
        "name": "currentAmount",
        "label": "Current Amount",
        "kind": "number"
      },
      {
        "name": "deadline",
        "label": "Deadline",
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
  }
};
