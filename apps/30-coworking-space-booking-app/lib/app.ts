import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "30",
  slug: "coworking-space-booking-app",
  appName: "DeskHub Coworking Space Booking App",
  tagline: "Let users book desks/rooms for time slots and let managers manage spaces and bookings",
  category: "Booking & Reservation",
  kind: "storefront",
  currency: "USD",
  primary: "Space",
};

export const THEME: Theme = {
  "brand": "#0ea5e9",
  "brandFg": "#ffffff",
  "brandSoft": "#e7f6fd",
  "accent": "#0d9488",
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
    "href": "/app/spaces",
    "label": "Spaces",
    "icon": "building"
  },
  {
    "href": "/app/bookings",
    "label": "Bookings",
    "icon": "calendar"
  },
  {
    "href": "/app/waitlist-entries",
    "label": "Waitlist Entries",
    "icon": "sparkles"
  },
  {
    "href": "/app/check-ins",
    "label": "Check Ins",
    "icon": "layers"
  },
  {
    "href": "/app/reviews",
    "label": "Reviews",
    "icon": "layers"
  },
  {
    "href": "/app/memberships",
    "label": "Memberships",
    "icon": "badge-check"
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
    "label": "Spaces",
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
export const MANAGED: string[] = ["Space","Booking","WaitlistEntry","CheckIn","Review","Membership"];
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
  "Space": {
    "name": "Space",
    "label": "Space",
    "labelPlural": "Spaces",
    "route": "/app/spaces",
    "icon": "building",
    "titleField": "name",
    "subtitleField": "type",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "amenities",
        "label": "Amenities",
        "kind": "text"
      },
      {
        "name": "pricePerHour",
        "label": "Price Per Hour",
        "kind": "number"
      },
      {
        "name": "pricePerDay",
        "label": "Price Per Day",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Booking": {
    "name": "Booking",
    "label": "Booking",
    "labelPlural": "Bookings",
    "route": "/app/bookings",
    "icon": "calendar",
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "space",
        "header": "Space",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "total",
        "header": "Total",
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
        "name": "space",
        "label": "Space",
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
        "name": "date",
        "label": "Date",
        "kind": "date"
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
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "total",
        "label": "Total",
        "kind": "price"
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
    "titleField": "credits",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "credits",
        "header": "Credits",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "tier",
        "header": "Tier",
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
        "name": "credits",
        "label": "Credits",
        "kind": "text"
      },
      {
        "name": "tier",
        "label": "Tier",
        "kind": "number"
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
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "booking",
        "header": "Booking",
        "kind": "relation",
        "titleField": "status"
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
        "name": "booking",
        "label": "Booking",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "amount",
        "label": "Amount",
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
  "CheckIn": {
    "name": "CheckIn",
    "label": "Check In",
    "labelPlural": "Check Ins",
    "route": "/app/check-ins",
    "icon": "layers",
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
        "key": "booking",
        "header": "Booking",
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
        "name": "booking",
        "label": "Booking",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "checkInAt",
        "label": "Check In At",
        "kind": "date"
      },
      {
        "name": "checkOutAt",
        "label": "Check Out At",
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
  "WaitlistEntry": {
    "name": "WaitlistEntry",
    "label": "Waitlist Entry",
    "labelPlural": "Waitlist Entries",
    "route": "/app/waitlist-entries",
    "icon": "sparkles",
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
        "key": "space",
        "header": "Space",
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
        "name": "space",
        "label": "Space",
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
        "name": "date",
        "label": "Date",
        "kind": "date"
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
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "notifiedAt",
        "label": "Notified At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Review": {
    "name": "Review",
    "label": "Review",
    "labelPlural": "Reviews",
    "route": "/app/reviews",
    "icon": "layers",
    "titleField": "comment",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "comment",
        "header": "Comment",
        "kind": "text"
      },
      {
        "key": "space",
        "header": "Space",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "rating",
        "header": "Rating",
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
        "name": "space",
        "label": "Space",
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
        "name": "rating",
        "label": "Rating",
        "kind": "number"
      },
      {
        "name": "comment",
        "label": "Comment",
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
