import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "94",
  slug: "smart-home-service-dashboard",
  appName: "HomeHub Smart Home Service Dashboard",
  tagline: "Present devices by room with status and control, scenes and schedules, and mock energy usage",
  category: "Smart Home & Devices",
  kind: "dashboard",
  currency: "USD",
  primary: "Room",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
  "accent": "#0f172a",
  "neutral": "zinc",
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
    "href": "/app/rooms",
    "label": "Rooms",
    "icon": "building"
  },
  {
    "href": "/app/devices",
    "label": "Devices",
    "icon": "layers"
  },
  {
    "href": "/app/schedules",
    "label": "Schedules",
    "icon": "calendar"
  },
  {
    "href": "/app/energy-readings",
    "label": "Energy Readings",
    "icon": "layers"
  },
  {
    "href": "/app/scenes",
    "label": "Scenes",
    "icon": "layers"
  },
  {
    "href": "/app/memberships",
    "label": "Memberships",
    "icon": "badge-check"
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
    "label": "Rooms",
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
export const MANAGED: string[] = ["Room","Device","Schedule","EnergyReading","Scene","Membership"];
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
  "Room": {
    "name": "Room",
    "label": "Room",
    "labelPlural": "Rooms",
    "route": "/app/rooms",
    "icon": "building",
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
  "Device": {
    "name": "Device",
    "label": "Device",
    "labelPlural": "Devices",
    "route": "/app/devices",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "type",
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
        "key": "room",
        "header": "Room",
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
        "name": "room",
        "label": "Room",
        "kind": "relation",
        "titleField": "name"
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
  "Scene": {
    "name": "Scene",
    "label": "Scene",
    "labelPlural": "Scenes",
    "route": "/app/scenes",
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
        "name": "deviceStates",
        "label": "Device States",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Schedule": {
    "name": "Schedule",
    "label": "Schedule",
    "labelPlural": "Schedules",
    "route": "/app/schedules",
    "icon": "calendar",
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
        "key": "device",
        "header": "Device",
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
        "name": "device",
        "label": "Device",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "action",
        "label": "Action",
        "kind": "text"
      },
      {
        "name": "time",
        "label": "Time",
        "kind": "date"
      },
      {
        "name": "enabled",
        "label": "Enabled",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "EnergyReading": {
    "name": "EnergyReading",
    "label": "Energy Reading",
    "labelPlural": "Energy Readings",
    "route": "/app/energy-readings",
    "icon": "layers",
    "titleField": "watts",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "watts",
        "header": "Watts",
        "kind": "text"
      },
      {
        "key": "device",
        "header": "Device",
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
        "name": "device",
        "label": "Device",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "watts",
        "label": "Watts",
        "kind": "text"
      },
      {
        "name": "recordedAt",
        "label": "Recorded At",
        "kind": "date"
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
        "name": "room",
        "label": "Room",
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
