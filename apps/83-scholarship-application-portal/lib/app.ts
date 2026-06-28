import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "83",
  slug: "scholarship-application-portal",
  appName: "ScholarGate Scholarship Application Portal",
  tagline: "Let students apply with documents and let reviewers score and award scholarships fairly",
  category: "Education & Scholarships",
  kind: "dashboard",
  currency: "USD",
  primary: "Scholarship",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
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
    "href": "/app/scholarships",
    "label": "Scholarships",
    "icon": "layers"
  },
  {
    "href": "/app/applications",
    "label": "Applications",
    "icon": "layers"
  },
  {
    "href": "/app/scores",
    "label": "Scores",
    "icon": "layers"
  },
  {
    "href": "/app/awards",
    "label": "Awards",
    "icon": "layers"
  },
  {
    "href": "/app/app-docs",
    "label": "App Docs",
    "icon": "layers"
  },
  {
    "href": "/app/review-assignments",
    "label": "Review Assignments",
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
    "label": "Scholarships",
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
export const MANAGED: string[] = ["Scholarship","Application","Score","Award","AppDoc","ReviewAssignment"];
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
  "Scholarship": {
    "name": "Scholarship",
    "label": "Scholarship",
    "labelPlural": "Scholarships",
    "route": "/app/scholarships",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "deadline",
        "label": "Deadline",
        "kind": "date"
      },
      {
        "name": "eligibility",
        "label": "Eligibility",
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
        "key": "scholarship",
        "header": "Scholarship",
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
        "name": "scholarship",
        "label": "Scholarship",
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
  "ReviewAssignment": {
    "name": "ReviewAssignment",
    "label": "Review Assignment",
    "labelPlural": "Review Assignments",
    "route": "/app/review-assignments",
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
        "name": "reviewer",
        "label": "Reviewer",
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
  "Score": {
    "name": "Score",
    "label": "Score",
    "labelPlural": "Scores",
    "route": "/app/scores",
    "icon": "layers",
    "titleField": "notes",
    "subtitleField": null,
    "statusField": null,
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "notes",
        "header": "Notes",
        "kind": "text"
      },
      {
        "key": "application",
        "header": "Application",
        "kind": "relation",
        "titleField": "applicantId"
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
        "name": "application",
        "label": "Application",
        "kind": "relation",
        "titleField": "applicantId"
      },
      {
        "name": "reviewer",
        "label": "Reviewer",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "value",
        "label": "Value",
        "kind": "price"
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
  "Award": {
    "name": "Award",
    "label": "Award",
    "labelPlural": "Awards",
    "route": "/app/awards",
    "icon": "layers",
    "titleField": "id",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "id",
        "header": "Id",
        "kind": "text"
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
        "name": "awardedAt",
        "label": "Awarded At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
