import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "34",
  slug: "ai-document-analyzer-app",
  appName: "DocLens AI Document Analyzer App",
  tagline: "Let users upload a document, get a summary and key points, and ask questions about it",
  category: "AI Tools",
  kind: "dashboard",
  currency: "USD",
  primary: "Document",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
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
    "href": "/app/documents",
    "label": "Documents",
    "icon": "file-text"
  },
  {
    "href": "/app/analysises",
    "label": "Analysises",
    "icon": "layers"
  },
  {
    "href": "/app/usage-credits",
    "label": "Usage Credits",
    "icon": "layers"
  },
  {
    "href": "/app/projects",
    "label": "Projects",
    "icon": "layers"
  },
  {
    "href": "/app/annotations",
    "label": "Annotations",
    "icon": "layers"
  },
  {
    "href": "/app/entities",
    "label": "Entities",
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
    "label": "Documents",
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
export const MANAGED: string[] = ["Document","Analysis","UsageCredit","Project","Annotation","Entity"];
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
  "Document": {
    "name": "Document",
    "label": "Document",
    "labelPlural": "Documents",
    "route": "/app/documents",
    "icon": "file-text",
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
        "name": "text",
        "label": "Text",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Analysis": {
    "name": "Analysis",
    "label": "Analysis",
    "labelPlural": "Analysises",
    "route": "/app/analysises",
    "icon": "layers",
    "titleField": "summary",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "summary",
        "header": "Summary",
        "kind": "text"
      },
      {
        "key": "document",
        "header": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "keyPoints",
        "header": "Key Points",
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
        "name": "document",
        "label": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "summary",
        "label": "Summary",
        "kind": "text"
      },
      {
        "name": "keyPoints",
        "label": "Key Points",
        "kind": "number"
      },
      {
        "name": "entities",
        "label": "Entities",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "QA": {
    "name": "QA",
    "label": "QA",
    "labelPlural": "QAs",
    "route": "/app/qas",
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
        "key": "document",
        "header": "Document",
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
        "name": "document",
        "label": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "question",
        "label": "Question",
        "kind": "text"
      },
      {
        "name": "answer",
        "label": "Answer",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "UsageCredit": {
    "name": "UsageCredit",
    "label": "Usage Credit",
    "labelPlural": "Usage Credits",
    "route": "/app/usage-credits",
    "icon": "layers",
    "titleField": "period",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "period",
        "header": "Period",
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
        "name": "period",
        "label": "Period",
        "kind": "text"
      },
      {
        "name": "used",
        "label": "Used",
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
  "Project": {
    "name": "Project",
    "label": "Project",
    "labelPlural": "Projects",
    "route": "/app/projects",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "description",
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
  "Annotation": {
    "name": "Annotation",
    "label": "Annotation",
    "labelPlural": "Annotations",
    "route": "/app/annotations",
    "icon": "layers",
    "titleField": "content",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "content",
        "header": "Content",
        "kind": "text"
      },
      {
        "key": "document",
        "header": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "page",
        "header": "Page",
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
        "name": "document",
        "label": "Document",
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
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "page",
        "label": "Page",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Entity": {
    "name": "Entity",
    "label": "Entity",
    "labelPlural": "Entities",
    "route": "/app/entities",
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
        "key": "document",
        "header": "Document",
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
        "name": "document",
        "label": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "analysis",
        "label": "Analysis",
        "kind": "relation",
        "titleField": "summary"
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
  }
};
