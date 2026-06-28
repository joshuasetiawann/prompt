import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "84",
  slug: "library-management-system",
  appName: "BiblioHub Library Management System",
  tagline: "Manage a catalog with copies, handle loans/returns and holds, and track fines",
  category: "Library & Lending",
  kind: "dashboard",
  currency: "USD",
  primary: "Book",
};

export const THEME: Theme = {
  "brand": "#15803d",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f2ec",
  "accent": "#334155",
  "neutral": "neutral",
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
    "href": "/app/books",
    "label": "Books",
    "icon": "layers"
  },
  {
    "href": "/app/members",
    "label": "Members",
    "icon": "badge-check"
  },
  {
    "href": "/app/loans",
    "label": "Loans",
    "icon": "layers"
  },
  {
    "href": "/app/copies",
    "label": "Copies",
    "icon": "layers"
  },
  {
    "href": "/app/holds",
    "label": "Holds",
    "icon": "layers"
  },
  {
    "href": "/app/fines",
    "label": "Fines",
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
    "label": "Books",
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
export const MANAGED: string[] = ["Book","Member","Loan","Copy","Hold","Fine"];
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
  "Book": {
    "name": "Book",
    "label": "Book",
    "labelPlural": "Books",
    "route": "/app/books",
    "icon": "layers",
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
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "author",
        "label": "Author",
        "kind": "text"
      },
      {
        "name": "subject",
        "label": "Subject",
        "kind": "text"
      },
      {
        "name": "isbn",
        "label": "Isbn",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Copy": {
    "name": "Copy",
    "label": "Copy",
    "labelPlural": "Copies",
    "route": "/app/copies",
    "icon": "layers",
    "titleField": "barcode",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "barcode",
        "header": "Barcode",
        "kind": "text"
      },
      {
        "key": "book",
        "header": "Book",
        "kind": "relation",
        "titleField": "title"
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
        "name": "book",
        "label": "Book",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "barcode",
        "label": "Barcode",
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
  "Member": {
    "name": "Member",
    "label": "Member",
    "labelPlural": "Members",
    "route": "/app/members",
    "icon": "badge-check",
    "titleField": "limit",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "limit",
        "header": "Limit",
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
  "Loan": {
    "name": "Loan",
    "label": "Loan",
    "labelPlural": "Loans",
    "route": "/app/loans",
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
        "key": "copy",
        "header": "Copy",
        "kind": "relation",
        "titleField": "barcode"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "copy",
        "label": "Copy",
        "kind": "relation",
        "titleField": "barcode"
      },
      {
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "limit"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "returnedAt",
        "label": "Returned At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Hold": {
    "name": "Hold",
    "label": "Hold",
    "labelPlural": "Holds",
    "route": "/app/holds",
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
        "key": "book",
        "header": "Book",
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
        "name": "book",
        "label": "Book",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "limit"
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
  "Fine": {
    "name": "Fine",
    "label": "Fine",
    "labelPlural": "Fines",
    "route": "/app/fines",
    "icon": "layers",
    "titleField": "id",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "id",
        "header": "Id",
        "kind": "text"
      },
      {
        "key": "loan",
        "header": "Loan",
        "kind": "relation",
        "titleField": "id"
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
        "name": "loan",
        "label": "Loan",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "paid",
        "label": "Paid",
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
