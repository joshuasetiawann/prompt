import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "08",
  slug: "gym-membership-management-app",
  appName: "FlexGym Gym Membership Management App",
  tagline: "Manage memberships, track check-ins, schedule classes, and give members a simple portal",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Plan",
};

export const THEME: Theme = {
  "brand": "#2563eb",
  "brandFg": "#ffffff",
  "brandSoft": "#e9effd",
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
    "href": "/app/plans",
    "label": "Plans",
    "icon": "layers"
  },
  {
    "href": "/app/members",
    "label": "Members",
    "icon": "badge-check"
  },
  {
    "href": "/app/gym-classes",
    "label": "Gym Classes",
    "icon": "book"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
  },
  {
    "href": "/app/class-bookings",
    "label": "Class Bookings",
    "icon": "calendar"
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
    "label": "Plans",
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
export const MANAGED: string[] = ["Plan","Member","GymClass","Payment","ClassBooking","CheckIn"];
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
  "Plan": {
    "name": "Plan",
    "label": "Plan",
    "labelPlural": "Plans",
    "route": "/app/plans",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "price",
        "header": "Price",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "durationDays",
        "label": "Duration Days",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Member": {
    "name": "Member",
    "label": "Member",
    "labelPlural": "Members",
    "route": "/app/members",
    "icon": "badge-check",
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
        "name": "plan",
        "label": "Plan",
        "kind": "relation",
        "titleField": "name"
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
  "CheckIn": {
    "name": "CheckIn",
    "label": "Check In",
    "labelPlural": "Check Ins",
    "route": "/app/check-ins",
    "icon": "layers",
    "titleField": "timestamp",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "timestamp",
        "header": "Timestamp",
        "kind": "text"
      },
      {
        "key": "member",
        "header": "Member",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "timestamp",
        "label": "Timestamp",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "GymClass": {
    "name": "GymClass",
    "label": "Gym Class",
    "labelPlural": "Gym Classes",
    "route": "/app/gym-classes",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "trainerId",
        "label": "Trainer",
        "kind": "text"
      },
      {
        "name": "startTime",
        "label": "Start Time",
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
  "ClassBooking": {
    "name": "ClassBooking",
    "label": "Class Booking",
    "labelPlural": "Class Bookings",
    "route": "/app/class-bookings",
    "icon": "calendar",
    "titleField": "classId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "classId",
        "header": "Class",
        "kind": "text"
      },
      {
        "key": "member",
        "header": "Member",
        "kind": "relation",
        "titleField": "status"
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
        "name": "classId",
        "label": "Class",
        "kind": "text"
      },
      {
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "status"
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
  "Payment": {
    "name": "Payment",
    "label": "Payment",
    "labelPlural": "Payments",
    "route": "/app/payments",
    "icon": "receipt",
    "titleField": "period",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "period",
        "header": "Period",
        "kind": "text"
      },
      {
        "key": "member",
        "header": "Member",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "amount",
        "header": "Amount",
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
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "period",
        "label": "Period",
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
