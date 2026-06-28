import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "87",
  slug: "personal-trainer-client-coaching-portal",
  appName: "CoachLink Personal Trainer Client Coaching Portal",
  tagline: "Let trainers build and assign workout programs and let clients log check-ins while trainers track progress",
  category: "Coaching Portals",
  kind: "dashboard",
  currency: "USD",
  primary: "Client",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
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
    "href": "/app/clients",
    "label": "Clients",
    "icon": "users"
  },
  {
    "href": "/app/programs",
    "label": "Programs",
    "icon": "layers"
  },
  {
    "href": "/app/check-ins",
    "label": "Check Ins",
    "icon": "layers"
  },
  {
    "href": "/app/workout-logs",
    "label": "Workout Logs",
    "icon": "dumbbell"
  },
  {
    "href": "/app/messages",
    "label": "Messages",
    "icon": "message"
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
    "label": "Clients",
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
export const MANAGED: string[] = ["Client","Program","CheckIn","WorkoutLog","Message"];
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
  "Client": {
    "name": "Client",
    "label": "Client",
    "labelPlural": "Clients",
    "route": "/app/clients",
    "icon": "users",
    "titleField": "trainerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "trainerId",
        "header": "Trainer",
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
        "name": "trainerId",
        "label": "Trainer",
        "kind": "text"
      },
      {
        "name": "goal",
        "label": "Goal",
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
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "weeks",
        "label": "Weeks",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Session": {
    "name": "Session",
    "label": "Session",
    "labelPlural": "Sessions",
    "route": "/app/sessions",
    "icon": "layers",
    "titleField": "week",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "week",
        "header": "Week",
        "kind": "text"
      },
      {
        "key": "program",
        "header": "Program",
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
        "name": "program",
        "label": "Program",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "week",
        "label": "Week",
        "kind": "text"
      },
      {
        "name": "day",
        "label": "Day",
        "kind": "text"
      },
      {
        "name": "exercises",
        "label": "Exercises",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "WorkoutLog": {
    "name": "WorkoutLog",
    "label": "Workout Log",
    "labelPlural": "Workout Logs",
    "route": "/app/workout-logs",
    "icon": "dumbbell",
    "titleField": "notes",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "notes",
        "header": "Notes",
        "kind": "text"
      },
      {
        "key": "session",
        "header": "Session",
        "kind": "relation",
        "titleField": "week"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "session",
        "label": "Session",
        "kind": "relation",
        "titleField": "week"
      },
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "name": "completedAt",
        "label": "Completed At",
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
  "CheckIn": {
    "name": "CheckIn",
    "label": "Check In",
    "labelPlural": "Check Ins",
    "route": "/app/check-ins",
    "icon": "layers",
    "titleField": "weight",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "weight",
        "header": "Weight",
        "kind": "text"
      },
      {
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "name": "weight",
        "label": "Weight",
        "kind": "text"
      },
      {
        "name": "measurements",
        "label": "Measurements",
        "kind": "text"
      },
      {
        "name": "photoUrl",
        "label": "Photo Url",
        "kind": "text"
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
  "Message": {
    "name": "Message",
    "label": "Message",
    "labelPlural": "Messages",
    "route": "/app/messages",
    "icon": "message",
    "titleField": "fromId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fromId",
        "header": "From",
        "kind": "text"
      },
      {
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "trainerId"
      },
      {
        "name": "fromId",
        "label": "From",
        "kind": "text"
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
