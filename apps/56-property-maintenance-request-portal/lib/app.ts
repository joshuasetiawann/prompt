import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "56",
  slug: "property-maintenance-request-portal",
  appName: "FixFlow Property Maintenance Request Portal",
  tagline: "Let tenants report maintenance issues and let managers create, assign, and track work orders to completion",
  category: "Property & Facilities",
  kind: "dashboard",
  currency: "USD",
  primary: "Property",
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
    "href": "/app/properties",
    "label": "Properties",
    "icon": "building"
  },
  {
    "href": "/app/requests",
    "label": "Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/work-orders",
    "label": "Work Orders",
    "icon": "cart"
  },
  {
    "href": "/app/units",
    "label": "Units",
    "icon": "layers"
  },
  {
    "href": "/app/vendors",
    "label": "Vendors",
    "icon": "layers"
  },
  {
    "href": "/app/status-events",
    "label": "Status Events",
    "icon": "chart"
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
    "label": "Properties",
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
export const MANAGED: string[] = ["Property","Request","WorkOrder","Unit","Vendor","StatusEvent"];
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
  "Property": {
    "name": "Property",
    "label": "Property",
    "labelPlural": "Properties",
    "route": "/app/properties",
    "icon": "building",
    "titleField": "name",
    "subtitleField": "address",
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
  "Unit": {
    "name": "Unit",
    "label": "Unit",
    "labelPlural": "Units",
    "route": "/app/units",
    "icon": "layers",
    "titleField": "label",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "label",
        "header": "Label",
        "kind": "text"
      },
      {
        "key": "property",
        "header": "Property",
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
        "name": "property",
        "label": "Property",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "label",
        "label": "Label",
        "kind": "text"
      },
      {
        "name": "tenantId",
        "label": "Tenant",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Request": {
    "name": "Request",
    "label": "Request",
    "labelPlural": "Requests",
    "route": "/app/requests",
    "icon": "clipboard-check",
    "titleField": "tenantId",
    "subtitleField": "category",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "tenantId",
        "header": "Tenant",
        "kind": "text"
      },
      {
        "key": "unit",
        "header": "Unit",
        "kind": "relation",
        "titleField": "label"
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
        "name": "unit",
        "label": "Unit",
        "kind": "relation",
        "titleField": "label"
      },
      {
        "name": "tenantId",
        "label": "Tenant",
        "kind": "text"
      },
      {
        "name": "category",
        "label": "Category",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "RequestPhoto": {
    "name": "RequestPhoto",
    "label": "Request Photo",
    "labelPlural": "Request Photos",
    "route": "/app/request-photos",
    "icon": "clipboard-check",
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
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "tenantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "tenantId"
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
  "WorkOrder": {
    "name": "WorkOrder",
    "label": "Work Order",
    "labelPlural": "Work Orders",
    "route": "/app/work-orders",
    "icon": "cart",
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
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "tenantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "tenantId"
      },
      {
        "name": "vendor",
        "label": "Vendor",
        "kind": "relation",
        "titleField": "name"
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
  "Vendor": {
    "name": "Vendor",
    "label": "Vendor",
    "labelPlural": "Vendors",
    "route": "/app/vendors",
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
        "name": "trade",
        "label": "Trade",
        "kind": "text"
      },
      {
        "name": "contact",
        "label": "Contact",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "StatusEvent": {
    "name": "StatusEvent",
    "label": "Status Event",
    "labelPlural": "Status Events",
    "route": "/app/status-events",
    "icon": "chart",
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
        "key": "workOrder",
        "header": "Work Order",
        "kind": "relation",
        "titleField": "status"
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
        "titleField": "status"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "note",
        "label": "Note",
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
