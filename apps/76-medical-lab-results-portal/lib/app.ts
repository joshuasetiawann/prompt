import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "76",
  slug: "medical-lab-results-portal",
  appName: "LabLink Medical Lab Results Portal",
  tagline: "Let labs record test results and release them securely to patients with reference ranges and history",
  category: "Healthcare Portals",
  kind: "dashboard",
  currency: "USD",
  primary: "Result",
};

export const THEME: Theme = {
  "brand": "#334155",
  "brandFg": "#ffffff",
  "brandSoft": "#ebecee",
  "accent": "#ffffff",
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
    "href": "/app/results",
    "label": "Results",
    "icon": "layers"
  },
  {
    "href": "/app/test-types",
    "label": "Test Types",
    "icon": "layers"
  },
  {
    "href": "/app/patients",
    "label": "Patients",
    "icon": "users"
  },
  {
    "href": "/app/lab-orders",
    "label": "Lab Orders",
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
    "label": "Results",
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
export const MANAGED: string[] = ["Result","TestType","Patient","LabOrder"];
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
  "Patient": {
    "name": "Patient",
    "label": "Patient",
    "labelPlural": "Patients",
    "route": "/app/patients",
    "icon": "users",
    "titleField": "fullName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fullName",
        "header": "Full Name",
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
        "name": "fullName",
        "label": "Full Name",
        "kind": "text"
      },
      {
        "name": "dob",
        "label": "Dob",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "TestType": {
    "name": "TestType",
    "label": "Test Type",
    "labelPlural": "Test Types",
    "route": "/app/test-types",
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
        "name": "unit",
        "label": "Unit",
        "kind": "text"
      },
      {
        "name": "refLow",
        "label": "Ref Low",
        "kind": "text"
      },
      {
        "name": "refHigh",
        "label": "Ref High",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "LabOrder": {
    "name": "LabOrder",
    "label": "Lab Order",
    "labelPlural": "Lab Orders",
    "route": "/app/lab-orders",
    "icon": "cart",
    "titleField": "doctorId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "doctorId",
        "header": "Doctor",
        "kind": "text"
      },
      {
        "key": "patient",
        "header": "Patient",
        "kind": "relation",
        "titleField": "fullName"
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
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
      },
      {
        "name": "doctorId",
        "label": "Doctor",
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
  "Result": {
    "name": "Result",
    "label": "Result",
    "labelPlural": "Results",
    "route": "/app/results",
    "icon": "layers",
    "titleField": "released",
    "subtitleField": null,
    "statusField": null,
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "released",
        "header": "Released",
        "kind": "text"
      },
      {
        "key": "labOrder",
        "header": "Lab Order",
        "kind": "relation",
        "titleField": "doctorId"
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
        "name": "labOrder",
        "label": "Lab Order",
        "kind": "relation",
        "titleField": "doctorId"
      },
      {
        "name": "testType",
        "label": "Test Type",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "value",
        "label": "Value",
        "kind": "price"
      },
      {
        "name": "released",
        "label": "Released",
        "kind": "text"
      },
      {
        "name": "flag",
        "label": "Flag",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "AuditLog": {
    "name": "AuditLog",
    "label": "Audit Log",
    "labelPlural": "Audit Logs",
    "route": "/app/audit-logs",
    "icon": "layers",
    "titleField": "entity",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "entity",
        "header": "Entity",
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
        "name": "entity",
        "label": "Entity",
        "kind": "text"
      },
      {
        "name": "entityId",
        "label": "Entity",
        "kind": "text"
      },
      {
        "name": "action",
        "label": "Action",
        "kind": "text"
      },
      {
        "name": "actorId",
        "label": "Actor",
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
