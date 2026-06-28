import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "72",
  slug: "proposal-contract-generator-app",
  appName: "ProposalForge Proposal & Contract Generator App",
  tagline: "Create proposals and contracts from templates with line items and capture client approval/e-signature (mock)",
  category: "Sales Documents & Contracts",
  kind: "dashboard",
  currency: "USD",
  primary: "Template",
};

export const THEME: Theme = {
  "brand": "#1e3a5f",
  "brandFg": "#ffffff",
  "brandSoft": "#e9ebef",
  "accent": "#1e3a5f",
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
    "href": "/app/templates",
    "label": "Templates",
    "icon": "layers"
  },
  {
    "href": "/app/proposals",
    "label": "Proposals",
    "icon": "layers"
  },
  {
    "href": "/app/clients",
    "label": "Clients",
    "icon": "users"
  },
  {
    "href": "/app/signatures",
    "label": "Signatures",
    "icon": "layers"
  },
  {
    "href": "/app/contracts",
    "label": "Contracts",
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
    "label": "Templates",
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
export const MANAGED: string[] = ["Template","Proposal","Client","Signature","Contract"];
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
  "Template": {
    "name": "Template",
    "label": "Template",
    "labelPlural": "Templates",
    "route": "/app/templates",
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
        "name": "kind",
        "label": "Kind",
        "kind": "text"
      },
      {
        "name": "sections",
        "label": "Sections",
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
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Proposal": {
    "name": "Proposal",
    "label": "Proposal",
    "labelPlural": "Proposals",
    "route": "/app/proposals",
    "icon": "layers",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
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
        "name": "subtotal",
        "label": "Subtotal",
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
  "LineItem": {
    "name": "LineItem",
    "label": "Line Item",
    "labelPlural": "Line Items",
    "route": "/app/line-items",
    "icon": "layers",
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
        "key": "proposal",
        "header": "Proposal",
        "kind": "relation",
        "titleField": "title"
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
        "name": "proposal",
        "label": "Proposal",
        "kind": "relation",
        "titleField": "title"
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
  "Signature": {
    "name": "Signature",
    "label": "Signature",
    "labelPlural": "Signatures",
    "route": "/app/signatures",
    "icon": "layers",
    "titleField": "signerName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "signerName",
        "header": "Signer Name",
        "kind": "text"
      },
      {
        "key": "proposal",
        "header": "Proposal",
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
        "name": "proposal",
        "label": "Proposal",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "signerName",
        "label": "Signer Name",
        "kind": "text"
      },
      {
        "name": "signedAt",
        "label": "Signed At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Contract": {
    "name": "Contract",
    "label": "Contract",
    "labelPlural": "Contracts",
    "route": "/app/contracts",
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
        "key": "proposal",
        "header": "Proposal",
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
        "name": "proposal",
        "label": "Proposal",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "signedAt",
        "label": "Signed At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
