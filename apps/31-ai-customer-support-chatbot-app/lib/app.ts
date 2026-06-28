import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "31",
  slug: "ai-customer-support-chatbot-app",
  appName: "SupportGenie AI Customer Support Chatbot App",
  tagline: "Answer customer questions from a knowledge base via chat, with history and admin management",
  category: "AI Tools",
  kind: "dashboard",
  currency: "USD",
  primary: "Article",
};

export const THEME: Theme = {
  "brand": "#c2410c",
  "brandFg": "#ffffff",
  "brandSoft": "#f9ece7",
  "accent": "#2563eb",
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
    "href": "/app/articles",
    "label": "Articles",
    "icon": "file-text"
  },
  {
    "href": "/app/conversations",
    "label": "Conversations",
    "icon": "message"
  },
  {
    "href": "/app/messages",
    "label": "Messages",
    "icon": "message"
  },
  {
    "href": "/app/usage-counters",
    "label": "Usage Counters",
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
    "label": "Articles",
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
export const MANAGED: string[] = ["Article","Conversation","Message","UsageCounter"];
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
  "Article": {
    "name": "Article",
    "label": "Article",
    "labelPlural": "Articles",
    "route": "/app/articles",
    "icon": "file-text",
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
        "name": "categoryId",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
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
  },
  "Conversation": {
    "name": "Conversation",
    "label": "Conversation",
    "labelPlural": "Conversations",
    "route": "/app/conversations",
    "icon": "message",
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
    "titleField": "role",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "role",
        "header": "Role",
        "kind": "text"
      },
      {
        "key": "conversation",
        "header": "Conversation",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "conversation",
        "label": "Conversation",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "role",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "UsageCounter": {
    "name": "UsageCounter",
    "label": "Usage Counter",
    "labelPlural": "Usage Counters",
    "route": "/app/usage-counters",
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
        "key": "count",
        "header": "Count",
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
        "name": "count",
        "label": "Count",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Setting": {
    "name": "Setting",
    "label": "Setting",
    "labelPlural": "Settings",
    "route": "/app/settings",
    "icon": "settings",
    "titleField": "key",
    "subtitleField": null,
    "statusField": null,
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "key",
        "header": "Key",
        "kind": "text"
      },
      {
        "key": "value",
        "header": "Value",
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
        "name": "key",
        "label": "Key",
        "kind": "text"
      },
      {
        "name": "value",
        "label": "Value",
        "kind": "price"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
