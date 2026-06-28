import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "64",
  slug: "volunteer-management-system",
  appName: "HandsOn Volunteer Management System",
  tagline: "Let coordinators post opportunities with shifts and let volunteers sign up, attend, and log hours",
  category: "Volunteer & Community Ops",
  kind: "dashboard",
  currency: "USD",
  primary: "Opportunity",
};

export const THEME: Theme = {
  "brand": "#ea580c",
  "brandFg": "#ffffff",
  "brandSoft": "#fdeee7",
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
    "href": "/app/opportunities",
    "label": "Opportunities",
    "icon": "kanban"
  },
  {
    "href": "/app/shifts",
    "label": "Shifts",
    "icon": "layers"
  },
  {
    "href": "/app/signups",
    "label": "Signups",
    "icon": "layers"
  },
  {
    "href": "/app/attendances",
    "label": "Attendances",
    "icon": "clock"
  },
  {
    "href": "/app/organizations",
    "label": "Organizations",
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
    "label": "Opportunities",
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
export const MANAGED: string[] = ["Opportunity","Shift","Signup","Attendance","Organization"];
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
  "Opportunity": {
    "name": "Opportunity",
    "label": "Opportunity",
    "labelPlural": "Opportunities",
    "route": "/app/opportunities",
    "icon": "kanban",
    "titleField": "title",
    "subtitleField": "description",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
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
        "key": "opportunity",
        "header": "Opportunity",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "capacity",
        "header": "Capacity",
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
        "name": "opportunity",
        "label": "Opportunity",
        "kind": "relation",
        "titleField": "title"
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
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Signup": {
    "name": "Signup",
    "label": "Signup",
    "labelPlural": "Signups",
    "route": "/app/signups",
    "icon": "layers",
    "titleField": "volunteerId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "volunteerId",
        "header": "Volunteer",
        "kind": "text"
      },
      {
        "key": "shift",
        "header": "Shift",
        "kind": "relation",
        "titleField": "id"
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
        "name": "shift",
        "label": "Shift",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "volunteerId",
        "label": "Volunteer",
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
  "Attendance": {
    "name": "Attendance",
    "label": "Attendance",
    "labelPlural": "Attendances",
    "route": "/app/attendances",
    "icon": "clock",
    "titleField": "confirmed",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "confirmed",
        "header": "Confirmed",
        "kind": "text"
      },
      {
        "key": "signup",
        "header": "Signup",
        "kind": "relation",
        "titleField": "volunteerId"
      },
      {
        "key": "hoursLogged",
        "header": "Hours Logged",
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
        "name": "signup",
        "label": "Signup",
        "kind": "relation",
        "titleField": "volunteerId"
      },
      {
        "name": "hoursLogged",
        "label": "Hours Logged",
        "kind": "number"
      },
      {
        "name": "confirmed",
        "label": "Confirmed",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Organization": {
    "name": "Organization",
    "label": "Organization",
    "labelPlural": "Organizations",
    "route": "/app/organizations",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
