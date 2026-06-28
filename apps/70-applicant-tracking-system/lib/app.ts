import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "70",
  slug: "applicant-tracking-system",
  appName: "TalentFlow Applicant Tracking System",
  tagline: "Track candidates per role through pipeline stages with interviews, scorecards, and offers",
  category: "Recruitment & ATS",
  kind: "dashboard",
  currency: "USD",
  primary: "JobRole",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
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
    "href": "/app/job-roles",
    "label": "Job Roles",
    "icon": "layers"
  },
  {
    "href": "/app/candidates",
    "label": "Candidates",
    "icon": "layers"
  },
  {
    "href": "/app/scorecards",
    "label": "Scorecards",
    "icon": "car"
  },
  {
    "href": "/app/activities",
    "label": "Activities",
    "icon": "list-checks"
  },
  {
    "href": "/app/interviews",
    "label": "Interviews",
    "icon": "layers"
  },
  {
    "href": "/app/offers",
    "label": "Offers",
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
    "label": "Job Roles",
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
export const MANAGED: string[] = ["JobRole","Candidate","Scorecard","Activity","Interview","Offer"];
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
  "JobRole": {
    "name": "JobRole",
    "label": "Job Role",
    "labelPlural": "Job Roles",
    "route": "/app/job-roles",
    "icon": "layers",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "department",
        "label": "Department",
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
  "Candidate": {
    "name": "Candidate",
    "label": "Candidate",
    "labelPlural": "Candidates",
    "route": "/app/candidates",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "email",
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
        "name": "roleId",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "resumeUrl",
        "label": "Resume Url",
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
  "Interview": {
    "name": "Interview",
    "label": "Interview",
    "labelPlural": "Interviews",
    "route": "/app/interviews",
    "icon": "layers",
    "titleField": "interviewerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "interviewerId",
        "header": "Interviewer",
        "kind": "text"
      },
      {
        "key": "candidate",
        "header": "Candidate",
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
        "name": "candidate",
        "label": "Candidate",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "interviewerId",
        "label": "Interviewer",
        "kind": "text"
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
  "Scorecard": {
    "name": "Scorecard",
    "label": "Scorecard",
    "labelPlural": "Scorecards",
    "route": "/app/scorecards",
    "icon": "car",
    "titleField": "interviewerId",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "interviewerId",
        "header": "Interviewer",
        "kind": "text"
      },
      {
        "key": "candidate",
        "header": "Candidate",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "rating",
        "header": "Rating",
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
        "name": "candidate",
        "label": "Candidate",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "interviewerId",
        "label": "Interviewer",
        "kind": "text"
      },
      {
        "name": "rating",
        "label": "Rating",
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
  "Offer": {
    "name": "Offer",
    "label": "Offer",
    "labelPlural": "Offers",
    "route": "/app/offers",
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
        "key": "candidate",
        "header": "Candidate",
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
        "name": "candidate",
        "label": "Candidate",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "details",
        "label": "Details",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Activity": {
    "name": "Activity",
    "label": "Activity",
    "labelPlural": "Activities",
    "route": "/app/activities",
    "icon": "list-checks",
    "titleField": "actorId",
    "subtitleField": "type",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "actorId",
        "header": "Actor",
        "kind": "text"
      },
      {
        "key": "candidate",
        "header": "Candidate",
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
        "name": "candidate",
        "label": "Candidate",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "actorId",
        "label": "Actor",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
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
