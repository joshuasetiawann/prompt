import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "38",
  slug: "hr-management-system",
  appName: "PeopleHub HR Management System",
  tagline: "Centralize employee records, leave, attendance, and onboarding with role-based access",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Department",
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
    "href": "/app/departments",
    "label": "Departments",
    "icon": "layers"
  },
  {
    "href": "/app/employees",
    "label": "Employees",
    "icon": "briefcase"
  },
  {
    "href": "/app/leave-requests",
    "label": "Leave Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/attendance-summaries",
    "label": "Attendance Summaries",
    "icon": "clock"
  },
  {
    "href": "/app/leave-balances",
    "label": "Leave Balances",
    "icon": "layers"
  },
  {
    "href": "/app/onboarding-tasks",
    "label": "Onboarding Tasks",
    "icon": "list-checks"
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
    "label": "Departments",
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
export const MANAGED: string[] = ["Department","Employee","LeaveRequest","AttendanceSummary","LeaveBalance","OnboardingTask"];
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
  "Department": {
    "name": "Department",
    "label": "Department",
    "labelPlural": "Departments",
    "route": "/app/departments",
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
        "key": "manager",
        "header": "Manager",
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
        "name": "manager",
        "label": "Manager",
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
  "Employee": {
    "name": "Employee",
    "label": "Employee",
    "labelPlural": "Employees",
    "route": "/app/employees",
    "icon": "briefcase",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "salary",
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
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "salary",
        "header": "Salary",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "department",
        "label": "Department",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "kind": "date"
      },
      {
        "name": "salary",
        "label": "Salary",
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
  },
  "LeaveRequest": {
    "name": "LeaveRequest",
    "label": "Leave Request",
    "labelPlural": "Leave Requests",
    "route": "/app/leave-requests",
    "icon": "clipboard-check",
    "titleField": "type",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "employee",
        "header": "Employee",
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
        "name": "employee",
        "label": "Employee",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "kind": "date"
      },
      {
        "name": "endDate",
        "label": "End Date",
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
  "LeaveBalance": {
    "name": "LeaveBalance",
    "label": "Leave Balance",
    "labelPlural": "Leave Balances",
    "route": "/app/leave-balances",
    "icon": "layers",
    "titleField": "type",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "employee",
        "header": "Employee",
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
        "name": "employee",
        "label": "Employee",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "remaining",
        "label": "Remaining",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "OnboardingTask": {
    "name": "OnboardingTask",
    "label": "Onboarding Task",
    "labelPlural": "Onboarding Tasks",
    "route": "/app/onboarding-tasks",
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
        "key": "employee",
        "header": "Employee",
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
        "name": "employee",
        "label": "Employee",
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
  "AttendanceSummary": {
    "name": "AttendanceSummary",
    "label": "Attendance Summary",
    "labelPlural": "Attendance Summaries",
    "route": "/app/attendance-summaries",
    "icon": "clock",
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
        "key": "employee",
        "header": "Employee",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "daysPresent",
        "header": "Days Present",
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
        "name": "employee",
        "label": "Employee",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "period",
        "label": "Period",
        "kind": "text"
      },
      {
        "name": "daysPresent",
        "label": "Days Present",
        "kind": "number"
      },
      {
        "name": "daysLate",
        "label": "Days Late",
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
