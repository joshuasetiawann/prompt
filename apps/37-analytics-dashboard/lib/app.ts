import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "37",
  slug: "analytics-dashboard",
  appName: "InsightBoard Analytics Dashboard",
  tagline: "Present KPIs and trends clearly with filtering and drill-down so users can make decisions",
  category: "Analytics & Dashboards",
  kind: "dashboard",
  currency: "USD",
  primary: "Dashboard",
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
    "href": "/app/dashboards",
    "label": "Dashboards",
    "icon": "dashboard"
  },
  {
    "href": "/app/segments",
    "label": "Segments",
    "icon": "layers"
  },
  {
    "href": "/app/channels",
    "label": "Channels",
    "icon": "layers"
  },
  {
    "href": "/app/widgets",
    "label": "Widgets",
    "icon": "layers"
  },
  {
    "href": "/app/reports",
    "label": "Reports",
    "icon": "chart"
  },
  {
    "href": "/app/saved-views",
    "label": "Saved Views",
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
    "label": "Dashboards",
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
export const MANAGED: string[] = ["Dashboard","Segment","Channel","Widget","Report","SavedView"];
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
  "MetricDaily": {
    "name": "MetricDaily",
    "label": "Metric Daily",
    "labelPlural": "Metric Dailies",
    "route": "/app/metric-dailies",
    "icon": "chart",
    "titleField": "segment",
    "subtitleField": null,
    "statusField": null,
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "segment",
        "header": "Segment",
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
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "segment",
        "label": "Segment",
        "kind": "text"
      },
      {
        "name": "channel",
        "label": "Channel",
        "kind": "text"
      },
      {
        "name": "metric",
        "label": "Metric",
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
  },
  "Segment": {
    "name": "Segment",
    "label": "Segment",
    "labelPlural": "Segments",
    "route": "/app/segments",
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
  "Channel": {
    "name": "Channel",
    "label": "Channel",
    "labelPlural": "Channels",
    "route": "/app/channels",
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
  "Dashboard": {
    "name": "Dashboard",
    "label": "Dashboard",
    "labelPlural": "Dashboards",
    "route": "/app/dashboards",
    "icon": "dashboard",
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
        "name": "isDefault",
        "label": "Is Default",
        "kind": "bool"
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
  "Widget": {
    "name": "Widget",
    "label": "Widget",
    "labelPlural": "Widgets",
    "route": "/app/widgets",
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
        "key": "dashboard",
        "header": "Dashboard",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "position",
        "header": "Position",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "chartType",
        "label": "Chart Type",
        "kind": "text"
      },
      {
        "name": "metric",
        "label": "Metric",
        "kind": "text"
      },
      {
        "name": "position",
        "label": "Position",
        "kind": "number"
      },
      {
        "name": "dashboard",
        "label": "Dashboard",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "segment",
        "label": "Segment",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "channel",
        "label": "Channel",
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
  "SavedView": {
    "name": "SavedView",
    "label": "Saved View",
    "labelPlural": "Saved Views",
    "route": "/app/saved-views",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "dateRange",
        "label": "Date Range",
        "kind": "text"
      },
      {
        "name": "isPinned",
        "label": "Is Pinned",
        "kind": "bool"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "segment",
        "label": "Segment",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "channel",
        "label": "Channel",
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
  "Report": {
    "name": "Report",
    "label": "Report",
    "labelPlural": "Reports",
    "route": "/app/reports",
    "icon": "chart",
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
        "key": "dashboard",
        "header": "Dashboard",
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
        "name": "fileType",
        "label": "File Type",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "lastRunAt",
        "label": "Last Run At",
        "kind": "date"
      },
      {
        "name": "dashboard",
        "label": "Dashboard",
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
  }
};
