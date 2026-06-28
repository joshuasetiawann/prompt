import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "39",
  slug: "student-portal",
  appName: "CampusOne Student Portal",
  tagline: "Give students one place for courses, grades, schedule, and assignments, with teacher and admin tools",
  category: "Education & Portals",
  kind: "dashboard",
  currency: "USD",
  primary: "Course",
};

export const THEME: Theme = {
  "brand": "#c2410c",
  "brandFg": "#ffffff",
  "brandSoft": "#f9ece7",
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
    "href": "/app/courses",
    "label": "Courses",
    "icon": "book"
  },
  {
    "href": "/app/assignments",
    "label": "Assignments",
    "icon": "layers"
  },
  {
    "href": "/app/submissions",
    "label": "Submissions",
    "icon": "layers"
  },
  {
    "href": "/app/schedule-slots",
    "label": "Schedule Slots",
    "icon": "calendar"
  },
  {
    "href": "/app/announcements",
    "label": "Announcements",
    "icon": "layers"
  },
  {
    "href": "/app/enrollments",
    "label": "Enrollments",
    "icon": "graduation-cap"
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
    "label": "Courses",
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
export const MANAGED: string[] = ["Course","Assignment","Submission","ScheduleSlot","Announcement","Enrollment"];
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
  "Course": {
    "name": "Course",
    "label": "Course",
    "labelPlural": "Courses",
    "route": "/app/courses",
    "icon": "book",
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
        "key": "teacher",
        "header": "Teacher",
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
        "name": "teacher",
        "label": "Teacher",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "term",
        "label": "Term",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Enrollment": {
    "name": "Enrollment",
    "label": "Enrollment",
    "labelPlural": "Enrollments",
    "route": "/app/enrollments",
    "icon": "graduation-cap",
    "titleField": "studentId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "studentId",
        "header": "Student",
        "kind": "text"
      },
      {
        "key": "course",
        "header": "Course",
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
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "studentId",
        "label": "Student",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Assignment": {
    "name": "Assignment",
    "label": "Assignment",
    "labelPlural": "Assignments",
    "route": "/app/assignments",
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
        "key": "course",
        "header": "Course",
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
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "name"
      },
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
        "name": "maxScore",
        "label": "Max Score",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Submission": {
    "name": "Submission",
    "label": "Submission",
    "labelPlural": "Submissions",
    "route": "/app/submissions",
    "icon": "layers",
    "titleField": "studentId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "studentId",
        "header": "Student",
        "kind": "text"
      },
      {
        "key": "assignment",
        "header": "Assignment",
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
        "name": "assignment",
        "label": "Assignment",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "studentId",
        "label": "Student",
        "kind": "text"
      },
      {
        "name": "score",
        "label": "Score",
        "kind": "text"
      },
      {
        "name": "submittedAt",
        "label": "Submitted At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ScheduleSlot": {
    "name": "ScheduleSlot",
    "label": "Schedule Slot",
    "labelPlural": "Schedule Slots",
    "route": "/app/schedule-slots",
    "icon": "calendar",
    "titleField": "day",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "day",
        "header": "Day",
        "kind": "text"
      },
      {
        "key": "course",
        "header": "Course",
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
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "day",
        "label": "Day",
        "kind": "text"
      },
      {
        "name": "startTime",
        "label": "Start Time",
        "kind": "date"
      },
      {
        "name": "endTime",
        "label": "End Time",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Announcement": {
    "name": "Announcement",
    "label": "Announcement",
    "labelPlural": "Announcements",
    "route": "/app/announcements",
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
        "key": "course",
        "header": "Course",
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
        "name": "scope",
        "label": "Scope",
        "kind": "text"
      },
      {
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
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
