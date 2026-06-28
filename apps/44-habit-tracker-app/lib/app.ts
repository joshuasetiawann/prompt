import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "44",
  slug: "habit-tracker-app",
  appName: "HabitLoop Habit Tracker App",
  tagline: "Let users define habits, check in daily, and see streaks and history clearly",
  category: "Productivity & Personal",
  kind: "dashboard",
  currency: "USD",
  primary: "Habit",
};

export const THEME: Theme = {
  "brand": "#059669",
  "brandFg": "#ffffff",
  "brandSoft": "#e6f5f0",
  "accent": "#334155",
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
    "href": "/app/habits",
    "label": "Habits",
    "icon": "repeat"
  },
  {
    "href": "/app/goals",
    "label": "Goals",
    "icon": "layers"
  },
  {
    "href": "/app/milestones",
    "label": "Milestones",
    "icon": "layers"
  },
  {
    "href": "/app/reminders",
    "label": "Reminders",
    "icon": "layers"
  },
  {
    "href": "/app/journal-entries",
    "label": "Journal Entries",
    "icon": "layers"
  },
  {
    "href": "/app/check-ins",
    "label": "Check Ins",
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
    "label": "Habits",
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
export const MANAGED: string[] = ["Habit","Goal","Milestone","Reminder","JournalEntry","CheckIn"];
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
  "Habit": {
    "name": "Habit",
    "label": "Habit",
    "labelPlural": "Habits",
    "route": "/app/habits",
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
        "name": "frequency",
        "label": "Frequency",
        "kind": "text"
      },
      {
        "name": "target",
        "label": "Target",
        "kind": "text"
      },
      {
        "name": "color",
        "label": "Color",
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
        "key": "habit",
        "header": "Habit",
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
        "name": "habit",
        "label": "Habit",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
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
  "Goal": {
    "name": "Goal",
    "label": "Goal",
    "labelPlural": "Goals",
    "route": "/app/goals",
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
        "key": "targetCount",
        "header": "Target Count",
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
        "name": "habit",
        "label": "Habit",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "targetCount",
        "label": "Target Count",
        "kind": "number"
      },
      {
        "name": "deadline",
        "label": "Deadline",
        "kind": "date"
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
  "Reminder": {
    "name": "Reminder",
    "label": "Reminder",
    "labelPlural": "Reminders",
    "route": "/app/reminders",
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
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "message",
        "header": "Message",
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
        "name": "habit",
        "label": "Habit",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "message",
        "label": "Message",
        "kind": "number"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
        "kind": "date"
      },
      {
        "name": "isActive",
        "label": "Is Active",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Milestone": {
    "name": "Milestone",
    "label": "Milestone",
    "labelPlural": "Milestones",
    "route": "/app/milestones",
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
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "points",
        "header": "Points",
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
        "name": "habit",
        "label": "Habit",
        "kind": "relation",
        "titleField": "name"
      },
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
        "name": "points",
        "label": "Points",
        "kind": "number"
      },
      {
        "name": "achievedAt",
        "label": "Achieved At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "JournalEntry": {
    "name": "JournalEntry",
    "label": "Journal Entry",
    "labelPlural": "Journal Entries",
    "route": "/app/journal-entries",
    "icon": "layers",
    "titleField": "mood",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "mood",
        "header": "Mood",
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
        "name": "habit",
        "label": "Habit",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "mood",
        "label": "Mood",
        "kind": "text"
      },
      {
        "name": "content",
        "label": "Content",
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
