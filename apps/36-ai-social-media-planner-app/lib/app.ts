import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "36",
  slug: "ai-social-media-planner-app",
  appName: "SocialPlan AI Social Media Planner App",
  tagline: "Plan posts on a calendar, generate captions and ideas with AI, and organize drafts by platform",
  category: "AI Tools",
  kind: "dashboard",
  currency: "USD",
  primary: "Post",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
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
    "href": "/app/posts",
    "label": "Posts",
    "icon": "megaphone"
  },
  {
    "href": "/app/campaigns",
    "label": "Campaigns",
    "icon": "sparkles"
  },
  {
    "href": "/app/media-assets",
    "label": "Media Assets",
    "icon": "layers"
  },
  {
    "href": "/app/post-metrics",
    "label": "Post Metrics",
    "icon": "chart"
  },
  {
    "href": "/app/usage-credits",
    "label": "Usage Credits",
    "icon": "layers"
  },
  {
    "href": "/app/ideas",
    "label": "Ideas",
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
    "label": "Posts",
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
export const MANAGED: string[] = ["Post","Campaign","MediaAsset","PostMetric","UsageCredit","Idea"];
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
  "Post": {
    "name": "Post",
    "label": "Post",
    "labelPlural": "Posts",
    "route": "/app/posts",
    "icon": "megaphone",
    "titleField": "platform",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "platform",
        "header": "Platform",
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
        "name": "platform",
        "label": "Platform",
        "kind": "text"
      },
      {
        "name": "caption",
        "label": "Caption",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Idea": {
    "name": "Idea",
    "label": "Idea",
    "labelPlural": "Ideas",
    "route": "/app/ideas",
    "icon": "layers",
    "titleField": "topic",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "topic",
        "header": "Topic",
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
        "name": "topic",
        "label": "Topic",
        "kind": "text"
      },
      {
        "name": "output",
        "label": "Output",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "BrandVoice": {
    "name": "BrandVoice",
    "label": "Brand Voice",
    "labelPlural": "Brand Voices",
    "route": "/app/brand-voices",
    "icon": "layers",
    "titleField": "tone",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "tone",
        "header": "Tone",
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
        "name": "tone",
        "label": "Tone",
        "kind": "text"
      },
      {
        "name": "keywords",
        "label": "Keywords",
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
  "Campaign": {
    "name": "Campaign",
    "label": "Campaign",
    "labelPlural": "Campaigns",
    "route": "/app/campaigns",
    "icon": "sparkles",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "MediaAsset": {
    "name": "MediaAsset",
    "label": "Media Asset",
    "labelPlural": "Media Assets",
    "route": "/app/media-assets",
    "icon": "layers",
    "titleField": "url",
    "subtitleField": "type",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "url",
        "header": "Url",
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
        "name": "post",
        "label": "Post",
        "kind": "relation",
        "titleField": "platform"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "altText",
        "label": "Alt Text",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "PostMetric": {
    "name": "PostMetric",
    "label": "Post Metric",
    "labelPlural": "Post Metrics",
    "route": "/app/post-metrics",
    "icon": "chart",
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
        "key": "post",
        "header": "Post",
        "kind": "relation",
        "titleField": "platform"
      },
      {
        "key": "views",
        "header": "Views",
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
        "name": "post",
        "label": "Post",
        "kind": "relation",
        "titleField": "platform"
      },
      {
        "name": "views",
        "label": "Views",
        "kind": "number"
      },
      {
        "name": "likeCount",
        "label": "Like Count",
        "kind": "number"
      },
      {
        "name": "shareCount",
        "label": "Share Count",
        "kind": "number"
      },
      {
        "name": "engagementRate",
        "label": "Engagement Rate",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
