import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "96",
  slug: "waste-collection-scheduling-app",
  appName: "BinCycle Waste Collection Scheduling App",
  tagline: "Publish collection schedules, handle special-pickup requests, manage routes, and update residents",
  category: "Municipal & Scheduling",
  kind: "dashboard",
  currency: "USD",
  primary: "Zone",
};

export const THEME: Theme = {
  "brand": "#16a34a",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f6ed",
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
    "href": "/app/zones",
    "label": "Zones",
    "icon": "layers"
  },
  {
    "href": "/app/households",
    "label": "Households",
    "icon": "layers"
  },
  {
    "href": "/app/routes",
    "label": "Routes",
    "icon": "layers"
  },
  {
    "href": "/app/special-pickups",
    "label": "Special Pickups",
    "icon": "layers"
  },
  {
    "href": "/app/stops",
    "label": "Stops",
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
    "label": "Zones",
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
export const MANAGED: string[] = ["Zone","Household","Route","SpecialPickup","Stop"];
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
  "Zone": {
    "name": "Zone",
    "label": "Zone",
    "labelPlural": "Zones",
    "route": "/app/zones",
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
        "name": "collectionDay",
        "label": "Collection Day",
        "kind": "text"
      },
      {
        "name": "wasteType",
        "label": "Waste Type",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Household": {
    "name": "Household",
    "label": "Household",
    "labelPlural": "Households",
    "route": "/app/households",
    "icon": "layers",
    "titleField": "address",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "address",
        "header": "Address",
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
        "name": "zone",
        "label": "Zone",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "SpecialPickup": {
    "name": "SpecialPickup",
    "label": "Special Pickup",
    "labelPlural": "Special Pickups",
    "route": "/app/special-pickups",
    "icon": "layers",
    "titleField": "type",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "household",
        "header": "Household",
        "kind": "relation",
        "titleField": "address"
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
        "name": "household",
        "label": "Household",
        "kind": "relation",
        "titleField": "address"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "requestedDate",
        "label": "Requested Date",
        "kind": "date"
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
  "Route": {
    "name": "Route",
    "label": "Route",
    "labelPlural": "Routes",
    "route": "/app/routes",
    "icon": "layers",
    "titleField": "driverId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "driverId",
        "header": "Driver",
        "kind": "text"
      },
      {
        "key": "zone",
        "header": "Zone",
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
        "name": "zone",
        "label": "Zone",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "driverId",
        "label": "Driver",
        "kind": "text"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Stop": {
    "name": "Stop",
    "label": "Stop",
    "labelPlural": "Stops",
    "route": "/app/stops",
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
        "key": "route",
        "header": "Route",
        "kind": "relation",
        "titleField": "driverId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "route",
        "label": "Route",
        "kind": "relation",
        "titleField": "driverId"
      },
      {
        "name": "household",
        "label": "Household",
        "kind": "relation",
        "titleField": "address"
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
