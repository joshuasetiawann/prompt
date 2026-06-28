import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "43",
  slug: "fitness-tracker-app",
  appName: "FitTrack Fitness Tracker App",
  tagline: "Let users build routines, log workouts, and see progress charts and goals",
  category: "Productivity & Personal",
  kind: "dashboard",
  currency: "USD",
  primary: "Exercise",
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
    "href": "/app/exercises",
    "label": "Exercises",
    "icon": "dumbbell"
  },
  {
    "href": "/app/routines",
    "label": "Routines",
    "icon": "repeat"
  },
  {
    "href": "/app/workouts",
    "label": "Workouts",
    "icon": "dumbbell"
  },
  {
    "href": "/app/set-logs",
    "label": "Set Logs",
    "icon": "layers"
  },
  {
    "href": "/app/goals",
    "label": "Goals",
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
    "label": "Exercises",
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
export const MANAGED: string[] = ["Exercise","Routine","Workout","SetLog","Goal"];
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
  "Exercise": {
    "name": "Exercise",
    "label": "Exercise",
    "labelPlural": "Exercises",
    "route": "/app/exercises",
    "icon": "dumbbell",
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
        "name": "muscleGroup",
        "label": "Muscle Group",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Routine": {
    "name": "Routine",
    "label": "Routine",
    "labelPlural": "Routines",
    "route": "/app/routines",
    "icon": "repeat",
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
  "RoutineItem": {
    "name": "RoutineItem",
    "label": "Routine Item",
    "labelPlural": "Routine Items",
    "route": "/app/routine-items",
    "icon": "repeat",
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
        "key": "routine",
        "header": "Routine",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "targetSets",
        "header": "Target Sets",
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
        "name": "routine",
        "label": "Routine",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "exercise",
        "label": "Exercise",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "targetSets",
        "label": "Target Sets",
        "kind": "number"
      },
      {
        "name": "targetReps",
        "label": "Target Reps",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Workout": {
    "name": "Workout",
    "label": "Workout",
    "labelPlural": "Workouts",
    "route": "/app/workouts",
    "icon": "dumbbell",
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
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "routine",
        "label": "Routine",
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
  "SetLog": {
    "name": "SetLog",
    "label": "Set Log",
    "labelPlural": "Set Logs",
    "route": "/app/set-logs",
    "icon": "layers",
    "titleField": "setNumber",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "setNumber",
        "header": "Set Number",
        "kind": "text"
      },
      {
        "key": "workout",
        "header": "Workout",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "key": "reps",
        "header": "Reps",
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
        "name": "workout",
        "label": "Workout",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "exercise",
        "label": "Exercise",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "setNumber",
        "label": "Set Number",
        "kind": "text"
      },
      {
        "name": "reps",
        "label": "Reps",
        "kind": "number"
      },
      {
        "name": "weight",
        "label": "Weight",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Goal": {
    "name": "Goal",
    "label": "Goal",
    "labelPlural": "Goals",
    "route": "/app/goals",
    "icon": "layers",
    "titleField": "metric",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "metric",
        "header": "Metric",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "progress",
        "header": "Progress",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "metric",
        "label": "Metric",
        "kind": "text"
      },
      {
        "name": "target",
        "label": "Target",
        "kind": "text"
      },
      {
        "name": "progress",
        "label": "Progress",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
