import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "65",
  slug: "farm-management-dashboard",
  appName: "AgriTrack Farm Management Dashboard",
  tagline: "Track fields and crops through planting and harvest, manage livestock and inputs, and log tasks and yields",
  category: "Agriculture & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Field",
};

export const THEME: Theme = {
  "brand": "#16a34a",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f6ed",
  "accent": "#92400e",
  "neutral": "stone",
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
    "href": "/app/fields",
    "label": "Fields",
    "icon": "layers"
  },
  {
    "href": "/app/crops",
    "label": "Crops",
    "icon": "layers"
  },
  {
    "href": "/app/inputs",
    "label": "Inputs",
    "icon": "layers"
  },
  {
    "href": "/app/tasks",
    "label": "Tasks",
    "icon": "list-checks"
  },
  {
    "href": "/app/input-usages",
    "label": "Input Usages",
    "icon": "layers"
  },
  {
    "href": "/app/livestocks",
    "label": "Livestocks",
    "icon": "warehouse"
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
    "label": "Fields",
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
export const MANAGED: string[] = ["Field","Crop","Input","Task","InputUsage","Livestock"];
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
  "Field": {
    "name": "Field",
    "label": "Field",
    "labelPlural": "Fields",
    "route": "/app/fields",
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
        "name": "areaHa",
        "label": "Area Ha",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Crop": {
    "name": "Crop",
    "label": "Crop",
    "labelPlural": "Crops",
    "route": "/app/crops",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": "stage",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "field",
        "header": "Field",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "stage",
        "header": "Stage",
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
        "name": "field",
        "label": "Field",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "plantedOn",
        "label": "Planted On",
        "kind": "text"
      },
      {
        "name": "expectedHarvest",
        "label": "Expected Harvest",
        "kind": "text"
      },
      {
        "name": "stage",
        "label": "Stage",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Livestock": {
    "name": "Livestock",
    "label": "Livestock",
    "labelPlural": "Livestocks",
    "route": "/app/livestocks",
    "icon": "warehouse",
    "titleField": "type",
    "subtitleField": "notes",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "count",
        "label": "Count",
        "kind": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Task": {
    "name": "Task",
    "label": "Task",
    "labelPlural": "Tasks",
    "route": "/app/tasks",
    "icon": "list-checks",
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
        "key": "field",
        "header": "Field",
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
        "name": "field",
        "label": "Field",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "done",
        "label": "Done",
        "kind": "bool"
      },
      {
        "name": "assignee",
        "label": "Assignee",
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
  "Input": {
    "name": "Input",
    "label": "Input",
    "labelPlural": "Inputs",
    "route": "/app/inputs",
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
        "key": "stock",
        "header": "Stock",
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
        "name": "unit",
        "label": "Unit",
        "kind": "text"
      },
      {
        "name": "stock",
        "label": "Stock",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "InputUsage": {
    "name": "InputUsage",
    "label": "Input Usage",
    "labelPlural": "Input Usages",
    "route": "/app/input-usages",
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
        "key": "input",
        "header": "Input",
        "kind": "relation",
        "titleField": "name"
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
        "name": "input",
        "label": "Input",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "field",
        "label": "Field",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
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
  "Yield": {
    "name": "Yield",
    "label": "Yield",
    "labelPlural": "Yields",
    "route": "/app/yields",
    "icon": "layers",
    "titleField": "harvestedOn",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "harvestedOn",
        "header": "Harvested On",
        "kind": "text"
      },
      {
        "key": "crop",
        "header": "Crop",
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
        "name": "crop",
        "label": "Crop",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "quantity",
        "label": "Quantity",
        "kind": "number"
      },
      {
        "name": "harvestedOn",
        "label": "Harvested On",
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
