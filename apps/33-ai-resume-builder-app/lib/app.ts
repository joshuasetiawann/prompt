import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "33",
  slug: "ai-resume-builder-app",
  appName: "ResuMint AI Resume Builder App",
  tagline: "Help users build a polished resume with AI-suggested phrasing and export it",
  category: "AI Tools",
  kind: "dashboard",
  currency: "USD",
  primary: "Resume",
};

export const THEME: Theme = {
  "brand": "#0d9488",
  "brandFg": "#ffffff",
  "brandSoft": "#e7f4f3",
  "accent": "#1e3a5f",
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
    "href": "/app/resumes",
    "label": "Resumes",
    "icon": "file-text"
  },
  {
    "href": "/app/job-applications",
    "label": "Job Applications",
    "icon": "layers"
  },
  {
    "href": "/app/resume-templates",
    "label": "Resume Templates",
    "icon": "file-text"
  },
  {
    "href": "/app/cover-letters",
    "label": "Cover Letters",
    "icon": "layers"
  },
  {
    "href": "/app/suggestions",
    "label": "Suggestions",
    "icon": "layers"
  },
  {
    "href": "/app/resume-exports",
    "label": "Resume Exports",
    "icon": "file-text"
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
    "label": "Resumes",
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
export const MANAGED: string[] = ["Resume","JobApplication","ResumeTemplate","CoverLetter","Suggestion","ResumeExport"];
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
  "Resume": {
    "name": "Resume",
    "label": "Resume",
    "labelPlural": "Resumes",
    "route": "/app/resumes",
    "icon": "file-text",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "templateId",
        "label": "Template",
        "kind": "text"
      },
      {
        "name": "sections",
        "label": "Sections",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Suggestion": {
    "name": "Suggestion",
    "label": "Suggestion",
    "labelPlural": "Suggestions",
    "route": "/app/suggestions",
    "icon": "layers",
    "titleField": "sectionRef",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "sectionRef",
        "header": "Section Ref",
        "kind": "text"
      },
      {
        "key": "resume",
        "header": "Resume",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "resume",
        "label": "Resume",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "sectionRef",
        "label": "Section Ref",
        "kind": "text"
      },
      {
        "name": "input",
        "label": "Input",
        "kind": "text"
      },
      {
        "name": "output",
        "label": "Output",
        "kind": "text"
      },
      {
        "name": "accepted",
        "label": "Accepted",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "UsageCredit": {
    "name": "UsageCredit",
    "label": "Usage Credit",
    "labelPlural": "Usage Credits",
    "route": "/app/usage-credits",
    "icon": "layers",
    "titleField": "period",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "period",
        "header": "Period",
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
        "name": "period",
        "label": "Period",
        "kind": "text"
      },
      {
        "name": "used",
        "label": "Used",
        "kind": "text"
      },
      {
        "name": "limit",
        "label": "Limit",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ResumeTemplate": {
    "name": "ResumeTemplate",
    "label": "Resume Template",
    "labelPlural": "Resume Templates",
    "route": "/app/resume-templates",
    "icon": "file-text",
    "titleField": "name",
    "subtitleField": "description",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "text"
      },
      {
        "name": "layout",
        "label": "Layout",
        "kind": "text"
      },
      {
        "name": "colorScheme",
        "label": "Color Scheme",
        "kind": "text"
      },
      {
        "name": "isFeatured",
        "label": "Is Featured",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CoverLetter": {
    "name": "CoverLetter",
    "label": "Cover Letter",
    "labelPlural": "Cover Letters",
    "route": "/app/cover-letters",
    "icon": "layers",
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
        "name": "resume",
        "label": "Resume",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "tone",
        "label": "Tone",
        "kind": "text"
      },
      {
        "name": "isArchived",
        "label": "Is Archived",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "JobApplication": {
    "name": "JobApplication",
    "label": "Job Application",
    "labelPlural": "Job Applications",
    "route": "/app/job-applications",
    "icon": "layers",
    "titleField": "company",
    "subtitleField": "notes",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "company",
        "header": "Company",
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
        "name": "resume",
        "label": "Resume",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "company",
        "label": "Company",
        "kind": "text"
      },
      {
        "name": "jobTitle",
        "label": "Job Title",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "appliedDate",
        "label": "Applied Date",
        "kind": "date"
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
  "ResumeExport": {
    "name": "ResumeExport",
    "label": "Resume Export",
    "labelPlural": "Resume Exports",
    "route": "/app/resume-exports",
    "icon": "file-text",
    "titleField": "fileType",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fileType",
        "header": "File Type",
        "kind": "text"
      },
      {
        "key": "resume",
        "header": "Resume",
        "kind": "relation",
        "titleField": "title"
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
        "name": "resume",
        "label": "Resume",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "fileType",
        "label": "File Type",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "fileName",
        "label": "File Name",
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
