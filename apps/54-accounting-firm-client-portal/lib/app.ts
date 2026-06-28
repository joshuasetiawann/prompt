import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "54",
  slug: "accounting-firm-client-portal",
  appName: "LedgerLink Accounting Firm Client Portal",
  tagline: "Streamline document collection, task tracking, messaging, and invoicing between a firm and its clients",
  category: "Client Portal & Accounting",
  kind: "dashboard",
  currency: "USD",
  primary: "ClientOrg",
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
    "href": "/app/client-orgs",
    "label": "Client Orgs",
    "icon": "users"
  },
  {
    "href": "/app/doc-requests",
    "label": "Doc Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/invoices",
    "label": "Invoices",
    "icon": "receipt"
  },
  {
    "href": "/app/tasks",
    "label": "Tasks",
    "icon": "list-checks"
  },
  {
    "href": "/app/uploads",
    "label": "Uploads",
    "icon": "layers"
  },
  {
    "href": "/app/messages",
    "label": "Messages",
    "icon": "message"
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
    "label": "Client Orgs",
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
export const MANAGED: string[] = ["ClientOrg","DocRequest","Invoice","Task","Upload","Message"];
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
  "ClientOrg": {
    "name": "ClientOrg",
    "label": "Client Org",
    "labelPlural": "Client Orgs",
    "route": "/app/client-orgs",
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
        "name": "contactEmail",
        "label": "Contact Email",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Membership": {
    "name": "Membership",
    "label": "Membership",
    "labelPlural": "Memberships",
    "route": "/app/memberships",
    "icon": "badge-check",
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
        "key": "clientOrg",
        "header": "Client Org",
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
        "name": "clientOrg",
        "label": "Client Org",
        "kind": "relation",
        "titleField": "name"
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
  "DocRequest": {
    "name": "DocRequest",
    "label": "Doc Request",
    "labelPlural": "Doc Requests",
    "route": "/app/doc-requests",
    "icon": "clipboard-check",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "clientOrg",
        "header": "Client Org",
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
        "name": "clientOrg",
        "label": "Client Org",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Upload": {
    "name": "Upload",
    "label": "Upload",
    "labelPlural": "Uploads",
    "route": "/app/uploads",
    "icon": "layers",
    "titleField": "fileName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fileName",
        "header": "File Name",
        "kind": "text"
      },
      {
        "key": "docRequest",
        "header": "Doc Request",
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
        "name": "docRequest",
        "label": "Doc Request",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "fileName",
        "label": "File Name",
        "kind": "text"
      },
      {
        "name": "uploadedAt",
        "label": "Uploaded At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Task": {
    "name": "Task",
    "label": "Task",
    "labelPlural": "Tasks",
    "route": "/app/tasks",
    "icon": "list-checks",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "clientOrg",
        "header": "Client Org",
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
        "name": "clientOrg",
        "label": "Client Org",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "assignee",
        "label": "Assignee",
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
  "Invoice": {
    "name": "Invoice",
    "label": "Invoice",
    "labelPlural": "Invoices",
    "route": "/app/invoices",
    "icon": "receipt",
    "titleField": "number",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "number",
        "header": "Number",
        "kind": "text"
      },
      {
        "key": "clientOrg",
        "header": "Client Org",
        "kind": "relation",
        "titleField": "name"
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
        "name": "clientOrg",
        "label": "Client Org",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "number",
        "label": "Number",
        "kind": "text"
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
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Message": {
    "name": "Message",
    "label": "Message",
    "labelPlural": "Messages",
    "route": "/app/messages",
    "icon": "message",
    "titleField": "body",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "body",
        "header": "Body",
        "kind": "text"
      },
      {
        "key": "clientOrg",
        "header": "Client Org",
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
        "name": "clientOrg",
        "label": "Client Org",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "author",
        "label": "Author",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "body",
        "label": "Body",
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
