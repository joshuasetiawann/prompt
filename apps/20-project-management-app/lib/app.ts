import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "20",
  slug: "project-management-app",
  appName: "TaskFlow Project Management App",
  tagline: "Plan projects, manage tasks on a board and list, assign owners, and track progress",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Project",
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
    "href": "/app/projects",
    "label": "Projects",
    "icon": "layers"
  },
  {
    "href": "/app/tasks",
    "label": "Tasks",
    "icon": "list-checks"
  },
  {
    "href": "/app/memberships",
    "label": "Memberships",
    "icon": "badge-check"
  },
  {
    "href": "/app/subtasks",
    "label": "Subtasks",
    "icon": "list-checks"
  },
  {
    "href": "/app/comments",
    "label": "Comments",
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
    "label": "Projects",
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
export const MANAGED: string[] = ["Project","Task","Membership","Subtask","Comment"];
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
  "Project": {
    "name": "Project",
    "label": "Project",
    "labelPlural": "Projects",
    "route": "/app/projects",
    "icon": "layers",
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
        "key": "owner",
        "header": "Owner",
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
        "name": "owner",
        "label": "Owner",
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
  "Membership": {
    "name": "Membership",
    "label": "Membership",
    "labelPlural": "Memberships",
    "route": "/app/memberships",
    "icon": "badge-check",
    "titleField": "role",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "role",
        "header": "Role",
        "kind": "text"
      },
      {
        "key": "project",
        "header": "Project",
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
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
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
  "Task": {
    "name": "Task",
    "label": "Task",
    "labelPlural": "Tasks",
    "route": "/app/tasks",
    "icon": "list-checks",
    "titleField": "title",
    "subtitleField": "description",
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
        "key": "project",
        "header": "Project",
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
        "name": "project",
        "label": "Project",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "priority",
        "label": "Priority",
        "kind": "status"
      },
      {
        "name": "assignee",
        "label": "Assignee",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Subtask": {
    "name": "Subtask",
    "label": "Subtask",
    "labelPlural": "Subtasks",
    "route": "/app/subtasks",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "done",
        "label": "Done",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Comment": {
    "name": "Comment",
    "label": "Comment",
    "labelPlural": "Comments",
    "route": "/app/comments",
    "icon": "layers",
    "titleField": "body",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "body",
        "header": "Body",
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
        "name": "author",
        "label": "Author",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "body",
        "label": "Body",
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
