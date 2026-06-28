import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "91",
  slug: "disaster-relief-coordination-dashboard",
  appName: "ReliefGrid Disaster Relief Coordination Dashboard",
  tagline: "Track incidents and needs, match resources and shelters, and assign volunteers during relief operations",
  category: "Crisis & Coordination",
  kind: "dashboard",
  currency: "USD",
  primary: "NeedRequest",
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
    "href": "/app/need-requests",
    "label": "Need Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/resources",
    "label": "Resources",
    "icon": "layers"
  },
  {
    "href": "/app/volunteers",
    "label": "Volunteers",
    "icon": "layers"
  },
  {
    "href": "/app/allocations",
    "label": "Allocations",
    "icon": "layers"
  },
  {
    "href": "/app/shelters",
    "label": "Shelters",
    "icon": "layers"
  },
  {
    "href": "/app/assignments",
    "label": "Assignments",
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
    "label": "Need Requests",
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
export const MANAGED: string[] = ["NeedRequest","Resource","Volunteer","Allocation","Shelter","Assignment"];
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
  "NeedRequest": {
    "name": "NeedRequest",
    "label": "Need Request",
    "labelPlural": "Need Requests",
    "route": "/app/need-requests",
    "icon": "clipboard-check",
    "titleField": "reporterId",
    "subtitleField": "type",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "priority",
        "label": "Priority",
        "kind": "status"
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
  "Resource": {
    "name": "Resource",
    "label": "Resource",
    "labelPlural": "Resources",
    "route": "/app/resources",
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
        "key": "quantity",
        "header": "Quantity",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "quantity",
        "label": "Quantity",
        "kind": "number"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Allocation": {
    "name": "Allocation",
    "label": "Allocation",
    "labelPlural": "Allocations",
    "route": "/app/allocations",
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
        "key": "resource",
        "header": "Resource",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "quantity",
        "header": "Quantity",
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
        "name": "resource",
        "label": "Resource",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "needRequest",
        "label": "Need Request",
        "kind": "relation",
        "titleField": "reporterId"
      },
      {
        "name": "quantity",
        "label": "Quantity",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Shelter": {
    "name": "Shelter",
    "label": "Shelter",
    "labelPlural": "Shelters",
    "route": "/app/shelters",
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
        "key": "capacity",
        "header": "Capacity",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "occupancy",
        "label": "Occupancy",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Volunteer": {
    "name": "Volunteer",
    "label": "Volunteer",
    "labelPlural": "Volunteers",
    "route": "/app/volunteers",
    "icon": "layers",
    "titleField": "skills",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "skills",
        "header": "Skills",
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
        "name": "skills",
        "label": "Skills",
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
  "Assignment": {
    "name": "Assignment",
    "label": "Assignment",
    "labelPlural": "Assignments",
    "route": "/app/assignments",
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
        "key": "volunteer",
        "header": "Volunteer",
        "kind": "relation",
        "titleField": "skills"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "volunteer",
        "label": "Volunteer",
        "kind": "relation",
        "titleField": "skills"
      },
      {
        "name": "needRequest",
        "label": "Need Request",
        "kind": "relation",
        "titleField": "reporterId"
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
  }
};
