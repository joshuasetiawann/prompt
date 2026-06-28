import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "80",
  slug: "logistics-fleet-maintenance-system",
  appName: "FleetCare Logistics Fleet Maintenance System",
  tagline: "Track vehicles, schedule preventive maintenance, manage work orders and parts, and log inspections",
  category: "Fleet & Maintenance",
  kind: "dashboard",
  currency: "USD",
  primary: "Vehicle",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
  "accent": "#d97706",
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
    "href": "/app/vehicles",
    "label": "Vehicles",
    "icon": "car"
  },
  {
    "href": "/app/work-orders",
    "label": "Work Orders",
    "icon": "cart"
  },
  {
    "href": "/app/parts",
    "label": "Parts",
    "icon": "layers"
  },
  {
    "href": "/app/maintenance-schedules",
    "label": "Maintenance Schedules",
    "icon": "calendar"
  },
  {
    "href": "/app/inspections",
    "label": "Inspections",
    "icon": "layers"
  },
  {
    "href": "/app/work-order-parts",
    "label": "Work Order Parts",
    "icon": "cart"
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
    "label": "Vehicles",
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
export const MANAGED: string[] = ["Vehicle","WorkOrder","Part","MaintenanceSchedule","Inspection","WorkOrderPart"];
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
  "Vehicle": {
    "name": "Vehicle",
    "label": "Vehicle",
    "labelPlural": "Vehicles",
    "route": "/app/vehicles",
    "icon": "car",
    "titleField": "plate",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "plate",
        "header": "Plate",
        "kind": "text"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "mileage",
        "header": "Mileage",
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
        "name": "plate",
        "label": "Plate",
        "kind": "text"
      },
      {
        "name": "model",
        "label": "Model",
        "kind": "text"
      },
      {
        "name": "mileage",
        "label": "Mileage",
        "kind": "number"
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
  "MaintenanceSchedule": {
    "name": "MaintenanceSchedule",
    "label": "Maintenance Schedule",
    "labelPlural": "Maintenance Schedules",
    "route": "/app/maintenance-schedules",
    "icon": "calendar",
    "titleField": "type",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "vehicle",
        "header": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "intervalKm",
        "label": "Interval Km",
        "kind": "text"
      },
      {
        "name": "lastServiceKm",
        "label": "Last Service Km",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "WorkOrder": {
    "name": "WorkOrder",
    "label": "Work Order",
    "labelPlural": "Work Orders",
    "route": "/app/work-orders",
    "icon": "cart",
    "titleField": "mechanicId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "mechanicId",
        "header": "Mechanic",
        "kind": "text"
      },
      {
        "key": "vehicle",
        "header": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
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
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
      },
      {
        "name": "mechanicId",
        "label": "Mechanic",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "cost",
        "label": "Cost",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Part": {
    "name": "Part",
    "label": "Part",
    "labelPlural": "Parts",
    "route": "/app/parts",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "price",
        "header": "Price",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "stock",
        "label": "Stock",
        "kind": "number"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "WorkOrderPart": {
    "name": "WorkOrderPart",
    "label": "Work Order Part",
    "labelPlural": "Work Order Parts",
    "route": "/app/work-order-parts",
    "icon": "cart",
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
        "key": "workOrder",
        "header": "Work Order",
        "kind": "relation",
        "titleField": "mechanicId"
      },
      {
        "key": "qty",
        "header": "Qty",
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
        "name": "workOrder",
        "label": "Work Order",
        "kind": "relation",
        "titleField": "mechanicId"
      },
      {
        "name": "part",
        "label": "Part",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Inspection": {
    "name": "Inspection",
    "label": "Inspection",
    "labelPlural": "Inspections",
    "route": "/app/inspections",
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
        "key": "vehicle",
        "header": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "plate"
      },
      {
        "name": "driverId",
        "label": "Driver",
        "kind": "text"
      },
      {
        "name": "passed",
        "label": "Passed",
        "kind": "text"
      },
      {
        "name": "defects",
        "label": "Defects",
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
