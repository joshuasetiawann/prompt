import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "81",
  slug: "school-admission-management-system",
  appName: "AdmitFlow School Admission Management System",
  tagline: "Capture applications with documents, route them through review and interviews, and manage decisions",
  category: "Education Admissions",
  kind: "dashboard",
  currency: "USD",
  primary: "Program",
};

export const THEME: Theme = {
  "brand": "#0d9488",
  "brandFg": "#ffffff",
  "brandSoft": "#e7f4f3",
  "accent": "#2563eb",
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
    "href": "/app/programs",
    "label": "Programs",
    "icon": "layers"
  },
  {
    "href": "/app/applications",
    "label": "Applications",
    "icon": "layers"
  },
  {
    "href": "/app/app-docs",
    "label": "App Docs",
    "icon": "layers"
  },
  {
    "href": "/app/interviews",
    "label": "Interviews",
    "icon": "layers"
  },
  {
    "href": "/app/decisions",
    "label": "Decisions",
    "icon": "layers"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
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
    "label": "Programs",
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
export const MANAGED: string[] = ["Program","Application","AppDoc","Interview","Decision","Payment"];
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
  "Program": {
    "name": "Program",
    "label": "Program",
    "labelPlural": "Programs",
    "route": "/app/programs",
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
        "name": "intakeTerm",
        "label": "Intake Term",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Application": {
    "name": "Application",
    "label": "Application",
    "labelPlural": "Applications",
    "route": "/app/applications",
    "icon": "layers",
    "titleField": "applicantId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "applicantId",
        "header": "Applicant",
        "kind": "text"
      },
      {
        "key": "program",
        "header": "Program",
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
        "name": "program",
        "label": "Program",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "applicantId",
        "label": "Applicant",
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
  "AppDoc": {
    "name": "AppDoc",
    "label": "App Doc",
    "labelPlural": "App Docs",
    "route": "/app/app-docs",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
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
        "key": "application",
        "header": "Application",
        "kind": "relation",
        "titleField": "applicantId"
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
        "name": "application",
        "label": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "name": "name",
        "label": "Name",
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
  "Interview": {
    "name": "Interview",
    "label": "Interview",
    "labelPlural": "Interviews",
    "route": "/app/interviews",
    "icon": "layers",
    "titleField": "score",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "score",
        "header": "Score",
        "kind": "text"
      },
      {
        "key": "application",
        "header": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "application",
        "label": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
        "kind": "date"
      },
      {
        "name": "score",
        "label": "Score",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Decision": {
    "name": "Decision",
    "label": "Decision",
    "labelPlural": "Decisions",
    "route": "/app/decisions",
    "icon": "layers",
    "titleField": "outcome",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "outcome",
        "header": "Outcome",
        "kind": "text"
      },
      {
        "key": "application",
        "header": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "application",
        "label": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "name": "outcome",
        "label": "Outcome",
        "kind": "text"
      },
      {
        "name": "decidedAt",
        "label": "Decided At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payment": {
    "name": "Payment",
    "label": "Payment",
    "labelPlural": "Payments",
    "route": "/app/payments",
    "icon": "receipt",
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "application",
        "header": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "key": "amount",
        "header": "Amount",
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
        "name": "application",
        "label": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
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
