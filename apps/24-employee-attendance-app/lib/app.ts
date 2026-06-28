import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "24",
  slug: "employee-attendance-app",
  appName: "ClockWise Employee Attendance App",
  tagline: "Record clock-ins and outs, manage shifts and leave requests, and report on attendance",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Employee",
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
    "href": "/app/employees",
    "label": "Employees",
    "icon": "briefcase"
  },
  {
    "href": "/app/shifts",
    "label": "Shifts",
    "icon": "layers"
  },
  {
    "href": "/app/leave-requests",
    "label": "Leave Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/timesheets",
    "label": "Timesheets",
    "icon": "clock"
  },
  {
    "href": "/app/shift-assignments",
    "label": "Shift Assignments",
    "icon": "layers"
  },
  {
    "href": "/app/leave-balances",
    "label": "Leave Balances",
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
    "label": "Employees",
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
export const MANAGED: string[] = ["Employee","Shift","LeaveRequest","Timesheet","ShiftAssignment","LeaveBalance"];
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
  "Employee": {
    "name": "Employee",
    "label": "Employee",
    "labelPlural": "Employees",
    "route": "/app/employees",
    "icon": "briefcase",
    "titleField": "department",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "department",
        "header": "Department",
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
        "name": "department",
        "label": "Department",
        "kind": "text"
      },
      {
        "name": "shift",
        "label": "Shift",
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
  "Shift": {
    "name": "Shift",
    "label": "Shift",
    "labelPlural": "Shifts",
    "route": "/app/shifts",
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
  "Attendance": {
    "name": "Attendance",
    "label": "Attendance",
    "labelPlural": "Attendances",
    "route": "/app/attendances",
    "icon": "clock",
    "titleField": "clockIn",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "clockIn",
        "header": "Clock In",
        "kind": "text"
      },
      {
        "key": "employee",
        "header": "Employee",
        "kind": "relation",
        "titleField": "department"
      },
      {
        "key": "hoursWorked",
        "header": "Hours Worked",
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
        "titleField": "department"
      },
      {
        "name": "clockIn",
        "label": "Clock In",
        "kind": "text"
      },
      {
        "name": "clockOut",
        "label": "Clock Out",
        "kind": "text"
      },
      {
        "name": "hoursWorked",
        "label": "Hours Worked",
        "kind": "number"
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
        "titleField": "department"
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
        "titleField": "department"
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
        "name": "reason",
        "label": "Reason",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ShiftAssignment": {
    "name": "ShiftAssignment",
    "label": "Shift Assignment",
    "labelPlural": "Shift Assignments",
    "route": "/app/shift-assignments",
    "icon": "layers",
    "titleField": "status",
    "subtitleField": "notes",
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
        "key": "employee",
        "header": "Employee",
        "kind": "relation",
        "titleField": "department"
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
        "titleField": "department"
      },
      {
        "name": "shift",
        "label": "Shift",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
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
        "titleField": "department"
      },
      {
        "key": "allocatedDays",
        "header": "Allocated Days",
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
        "titleField": "department"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "allocatedDays",
        "label": "Allocated Days",
        "kind": "number"
      },
      {
        "name": "usedDays",
        "label": "Used Days",
        "kind": "number"
      },
      {
        "name": "remainingDays",
        "label": "Remaining Days",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Timesheet": {
    "name": "Timesheet",
    "label": "Timesheet",
    "labelPlural": "Timesheets",
    "route": "/app/timesheets",
    "icon": "clock",
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
        "key": "employee",
        "header": "Employee",
        "kind": "relation",
        "titleField": "department"
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
        "titleField": "department"
      },
      {
        "name": "approver",
        "label": "Approver",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "periodStart",
        "label": "Period Start",
        "kind": "date"
      },
      {
        "name": "periodEnd",
        "label": "Period End",
        "kind": "date"
      },
      {
        "name": "totalHours",
        "label": "Total Hours",
        "kind": "number"
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
