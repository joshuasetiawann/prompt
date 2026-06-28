import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "90",
  slug: "neighborhood-security-reporting-app",
  appName: "SafeStreet Neighborhood Security Reporting App",
  tagline: "Let residents report incidents with location and let neighbors view and follow updates and alerts",
  category: "Civic & Safety Reporting",
  kind: "dashboard",
  currency: "USD",
  primary: "Area",
};

export const THEME: Theme = {
  "brand": "#d97706",
  "brandFg": "#ffffff",
  "brandSoft": "#fbf1e6",
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
    "href": "/app/areas",
    "label": "Areas",
    "icon": "layers"
  },
  {
    "href": "/app/incidents",
    "label": "Incidents",
    "icon": "layers"
  },
  {
    "href": "/app/updates",
    "label": "Updates",
    "icon": "layers"
  },
  {
    "href": "/app/incident-photos",
    "label": "Incident Photos",
    "icon": "layers"
  },
  {
    "href": "/app/follows",
    "label": "Follows",
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
    "label": "Areas",
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
export const MANAGED: string[] = ["Area","Incident","Update","IncidentPhoto","Follow"];
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
  "Area": {
    "name": "Area",
    "label": "Area",
    "labelPlural": "Areas",
    "route": "/app/areas",
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
  "Incident": {
    "name": "Incident",
    "label": "Incident",
    "labelPlural": "Incidents",
    "route": "/app/incidents",
    "icon": "layers",
    "titleField": "reporterId",
    "subtitleField": "description",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "reporterId",
        "header": "Reporter",
        "kind": "text"
      },
      {
        "key": "area",
        "header": "Area",
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
        "name": "reporterId",
        "label": "Reporter",
        "kind": "text"
      },
      {
        "name": "area",
        "label": "Area",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "type",
        "label": "Type",
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
        "name": "lat",
        "label": "Lat",
        "kind": "date"
      },
      {
        "name": "lng",
        "label": "Lng",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "IncidentPhoto": {
    "name": "IncidentPhoto",
    "label": "Incident Photo",
    "labelPlural": "Incident Photos",
    "route": "/app/incident-photos",
    "icon": "layers",
    "titleField": "url",
    "subtitleField": null,
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
        "key": "incident",
        "header": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "incident",
        "label": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
      },
      {
        "name": "url",
        "label": "Url",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Update": {
    "name": "Update",
    "label": "Update",
    "labelPlural": "Updates",
    "route": "/app/updates",
    "icon": "layers",
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
        "key": "incident",
        "header": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "incident",
        "label": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
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
  },
  "Follow": {
    "name": "Follow",
    "label": "Follow",
    "labelPlural": "Follows",
    "route": "/app/follows",
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
        "key": "incident",
        "header": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "incident",
        "label": "Incident",
        "kind": "relation",
        "titleField": "reporterId"
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
