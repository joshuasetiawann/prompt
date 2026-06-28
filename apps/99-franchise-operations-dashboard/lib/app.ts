import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "99",
  slug: "franchise-operations-dashboard",
  appName: "FranchiseIQ Franchise Operations Dashboard",
  tagline: "Roll up location KPIs, push tasks and compliance checklists to franchisees, and track support tickets",
  category: "Multi-Location Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Ticket",
};

export const THEME: Theme = {
  "brand": "#d97706",
  "brandFg": "#ffffff",
  "brandSoft": "#fbf1e6",
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
    "href": "/app/tickets",
    "label": "Tickets",
    "icon": "ticket"
  },
  {
    "href": "/app/locations",
    "label": "Locations",
    "icon": "layers"
  },
  {
    "href": "/app/tasks",
    "label": "Tasks",
    "icon": "list-checks"
  },
  {
    "href": "/app/kpis",
    "label": "KPIs",
    "icon": "layers"
  },
  {
    "href": "/app/task-completions",
    "label": "Task Completions",
    "icon": "list-checks"
  },
  {
    "href": "/app/compliances",
    "label": "Compliances",
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
    "label": "Tickets",
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
export const MANAGED: string[] = ["Ticket","Location","Task","KPI","TaskCompletion","Compliance"];
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
  "Location": {
    "name": "Location",
    "label": "Location",
    "labelPlural": "Locations",
    "route": "/app/locations",
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
        "name": "franchiseeId",
        "label": "Franchisee",
        "kind": "text"
      },
      {
        "name": "region",
        "label": "Region",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "KPI": {
    "name": "KPI",
    "label": "KPI",
    "labelPlural": "KPIs",
    "route": "/app/kpis",
    "icon": "layers",
    "titleField": "metric",
    "subtitleField": null,
    "statusField": null,
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "metric",
        "header": "Metric",
        "kind": "text"
      },
      {
        "key": "location",
        "header": "Location",
        "kind": "relation",
        "titleField": "name"
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
        "name": "location",
        "label": "Location",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "metric",
        "label": "Metric",
        "kind": "text"
      },
      {
        "name": "value",
        "label": "Value",
        "kind": "price"
      },
      {
        "name": "period",
        "label": "Period",
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
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "scope",
        "label": "Scope",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "TaskCompletion": {
    "name": "TaskCompletion",
    "label": "Task Completion",
    "labelPlural": "Task Completions",
    "route": "/app/task-completions",
    "icon": "list-checks",
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
        "key": "task",
        "header": "Task",
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
        "name": "task",
        "label": "Task",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "done",
        "label": "Done",
        "kind": "bool"
      },
      {
        "name": "completedAt",
        "label": "Completed At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Compliance": {
    "name": "Compliance",
    "label": "Compliance",
    "labelPlural": "Compliances",
    "route": "/app/compliances",
    "icon": "layers",
    "titleField": "checklist",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "checklist",
        "header": "Checklist",
        "kind": "text"
      },
      {
        "key": "location",
        "header": "Location",
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
        "name": "location",
        "label": "Location",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "checklist",
        "label": "Checklist",
        "kind": "text"
      },
      {
        "name": "score",
        "label": "Score",
        "kind": "text"
      },
      {
        "name": "auditedAt",
        "label": "Audited At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Ticket": {
    "name": "Ticket",
    "label": "Ticket",
    "labelPlural": "Tickets",
    "route": "/app/tickets",
    "icon": "ticket",
    "titleField": "subject",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "subject",
        "header": "Subject",
        "kind": "text"
      },
      {
        "key": "location",
        "header": "Location",
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
        "name": "location",
        "label": "Location",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "subject",
        "label": "Subject",
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
  }
};
