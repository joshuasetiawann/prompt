import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "92",
  slug: "lost-found-management-platform",
  appName: "FoundIt Lost & Found Management Platform",
  tagline: "Log lost and found items, suggest matches, and process verified claims to return items",
  category: "Operations & Tracking",
  kind: "dashboard",
  currency: "USD",
  primary: "Item",
};

export const THEME: Theme = {
  "brand": "#d97706",
  "brandFg": "#ffffff",
  "brandSoft": "#fbf1e6",
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
    "href": "/app/handovers",
    "label": "Handovers",
    "icon": "layers"
  },
  {
    "href": "/app/verification-questions",
    "label": "Verification Questions",
    "icon": "layers"
  },
  {
    "href": "/app/match-suggestions",
    "label": "Match Suggestions",
    "icon": "layers"
  },
  {
    "href": "/app/categories",
    "label": "Categories",
    "icon": "layers"
  },
  {
    "href": "/app/locations",
    "label": "Locations",
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
    "label": "Items",
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
export const MANAGED: string[] = ["Claim","Handover","VerificationQuestion","MatchSuggestion","Category","Location"];
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
  "Item": {
    "name": "Item",
    "label": "Item",
    "labelPlural": "Items",
    "route": "/app/items",
    "icon": "layers",
    "titleField": "kind",
    "subtitleField": "description",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "kind",
        "header": "Kind",
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
        "name": "kind",
        "label": "Kind",
        "kind": "text"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
      },
      {
        "name": "photoUrl",
        "label": "Photo Url",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "reporterId",
        "label": "Reporter",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "MatchSuggestion": {
    "name": "MatchSuggestion",
    "label": "Match Suggestion",
    "labelPlural": "Match Suggestions",
    "route": "/app/match-suggestions",
    "icon": "layers",
    "titleField": "lostItemId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "lostItemId",
        "header": "Lost Item",
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
        "name": "lostItemId",
        "label": "Lost Item",
        "kind": "text"
      },
      {
        "name": "foundItemId",
        "label": "Found Item",
        "kind": "text"
      },
      {
        "name": "score",
        "label": "Score",
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
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "claimantId",
        "header": "Claimant",
        "kind": "text"
      },
      {
        "key": "item",
        "header": "Item",
        "kind": "relation",
        "titleField": "kind"
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
        "name": "item",
        "label": "Item",
        "kind": "relation",
        "titleField": "kind"
      },
      {
        "name": "claimantId",
        "label": "Claimant",
        "kind": "text"
      },
      {
        "name": "answers",
        "label": "Answers",
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
  "Location": {
    "name": "Location",
    "label": "Location",
    "labelPlural": "Locations",
    "route": "/app/locations",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "VerificationQuestion": {
    "name": "VerificationQuestion",
    "label": "Verification Question",
    "labelPlural": "Verification Questions",
    "route": "/app/verification-questions",
    "icon": "layers",
    "titleField": "question",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "question",
        "header": "Question",
        "kind": "text"
      },
      {
        "key": "item",
        "header": "Item",
        "kind": "relation",
        "titleField": "kind"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "item",
        "label": "Item",
        "kind": "relation",
        "titleField": "kind"
      },
      {
        "name": "question",
        "label": "Question",
        "kind": "text"
      },
      {
        "name": "expectedAnswer",
        "label": "Expected Answer",
        "kind": "text"
      },
      {
        "name": "hint",
        "label": "Hint",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Handover": {
    "name": "Handover",
    "label": "Handover",
    "labelPlural": "Handovers",
    "route": "/app/handovers",
    "icon": "layers",
    "titleField": "recipientName",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "recipientName",
        "header": "Recipient Name",
        "kind": "text"
      },
      {
        "key": "item",
        "header": "Item",
        "kind": "relation",
        "titleField": "kind"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "item",
        "label": "Item",
        "kind": "relation",
        "titleField": "kind"
      },
      {
        "name": "claim",
        "label": "Claim",
        "kind": "relation",
        "titleField": "claimantId"
      },
      {
        "name": "staff",
        "label": "Staff",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "recipientName",
        "label": "Recipient Name",
        "kind": "text"
      },
      {
        "name": "isVerified",
        "label": "Is Verified",
        "kind": "bool"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
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
  "Category": {
    "name": "Category",
    "label": "Category",
    "labelPlural": "Categories",
    "route": "/app/categories",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "description",
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
        "name": "description",
        "label": "Description",
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
