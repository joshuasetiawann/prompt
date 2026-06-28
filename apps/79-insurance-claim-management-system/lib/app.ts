import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "79",
  slug: "insurance-claim-management-system",
  appName: "ClaimDesk Insurance Claim Management System",
  tagline: "Capture claims with documents and route them through review to a decision and mock payout",
  category: "Insurance & Claims",
  kind: "dashboard",
  currency: "USD",
  primary: "Claim",
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
    "href": "/app/claims",
    "label": "Claims",
    "icon": "sparkles"
  },
  {
    "href": "/app/policies",
    "label": "Policies",
    "icon": "layers"
  },
  {
    "href": "/app/decisions",
    "label": "Decisions",
    "icon": "layers"
  },
  {
    "href": "/app/claim-docs",
    "label": "Claim Docs",
    "icon": "sparkles"
  },
  {
    "href": "/app/payouts",
    "label": "Payouts",
    "icon": "credit-card"
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
    "label": "Claims",
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
export const MANAGED: string[] = ["Claim","Policy","Decision","ClaimDoc","Payout"];
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
  "Policy": {
    "name": "Policy",
    "label": "Policy",
    "labelPlural": "Policies",
    "route": "/app/policies",
    "icon": "layers",
    "titleField": "number",
    "subtitleField": "type",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "number",
        "header": "Number",
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
        "name": "holderId",
        "label": "Holder",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "number",
        "label": "Number",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Claim": {
    "name": "Claim",
    "label": "Claim",
    "labelPlural": "Claims",
    "route": "/app/claims",
    "icon": "sparkles",
    "titleField": "claimantId",
    "subtitleField": "type",
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "claimantId",
        "header": "Claimant",
        "kind": "text"
      },
      {
        "key": "policy",
        "header": "Policy",
        "kind": "relation",
        "titleField": "number"
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
        "name": "policy",
        "label": "Policy",
        "kind": "relation",
        "titleField": "number"
      },
      {
        "name": "claimantId",
        "label": "Claimant",
        "kind": "text"
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
  "ClaimDoc": {
    "name": "ClaimDoc",
    "label": "Claim Doc",
    "labelPlural": "Claim Docs",
    "route": "/app/claim-docs",
    "icon": "sparkles",
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
        "key": "claim",
        "header": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
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
        "name": "claim",
        "label": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
      },
      {
        "name": "name",
        "label": "Name",
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
  "Decision": {
    "name": "Decision",
    "label": "Decision",
    "labelPlural": "Decisions",
    "route": "/app/decisions",
    "icon": "layers",
    "titleField": "adjusterId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "adjusterId",
        "header": "Adjuster",
        "kind": "text"
      },
      {
        "key": "claim",
        "header": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "claim",
        "label": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
      },
      {
        "name": "adjusterId",
        "label": "Adjuster",
        "kind": "text"
      },
      {
        "name": "outcome",
        "label": "Outcome",
        "kind": "text"
      },
      {
        "name": "note",
        "label": "Note",
        "kind": "text"
      },
      {
        "name": "decidedAt",
        "label": "Decided At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payout": {
    "name": "Payout",
    "label": "Payout",
    "labelPlural": "Payouts",
    "route": "/app/payouts",
    "icon": "credit-card",
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
        "key": "claim",
        "header": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
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
        "name": "claim",
        "label": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
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
  "AuditLog": {
    "name": "AuditLog",
    "label": "Audit Log",
    "labelPlural": "Audit Logs",
    "route": "/app/audit-logs",
    "icon": "layers",
    "titleField": "action",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "action",
        "header": "Action",
        "kind": "text"
      },
      {
        "key": "claim",
        "header": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "claim",
        "label": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
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
