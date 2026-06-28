import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "74",
  slug: "restaurant-table-reservation-system",
  appName: "TableTime Restaurant Table Reservation System",
  tagline: "Let guests reserve tables for a time and party size and let hosts manage the floor and waitlist",
  category: "Reservations & Hospitality",
  kind: "storefront",
  currency: "USD",
  primary: "Reservation",
};

export const THEME: Theme = {
  "brand": "#7b1e3b",
  "brandFg": "#ffffff",
  "brandSoft": "#f2e9eb",
  "accent": "#ffffff",
  "neutral": "slate",
  "headingFont": '"Georgia", "Times New Roman", ui-serif, serif',
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
    "href": "/app/reservations",
    "label": "Reservations",
    "icon": "layers"
  },
  {
    "href": "/app/reservation-policies",
    "label": "Reservation Policies",
    "icon": "layers"
  },
  {
    "href": "/app/notification-logs",
    "label": "Notification Logs",
    "icon": "layers"
  },
  {
    "href": "/app/waitlists",
    "label": "Waitlists",
    "icon": "sparkles"
  },
  {
    "href": "/app/dining-areas",
    "label": "Dining Areas",
    "icon": "layers"
  },
  {
    "href": "/app/hourses",
    "label": "Hourses",
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
    "label": "Reservations",
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
export const MANAGED: string[] = ["Reservation","ReservationPolicy","NotificationLog","Waitlist","DiningArea","Hours"];
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
  "RestaurantTable": {
    "name": "RestaurantTable",
    "label": "Restaurant Table",
    "labelPlural": "Restaurant Tables",
    "route": "/app/restaurant-tables",
    "icon": "utensils",
    "titleField": "label",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "label",
        "header": "Label",
        "kind": "text"
      },
      {
        "key": "seats",
        "header": "Seats",
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
        "name": "label",
        "label": "Label",
        "kind": "text"
      },
      {
        "name": "seats",
        "label": "Seats",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Reservation": {
    "name": "Reservation",
    "label": "Reservation",
    "labelPlural": "Reservations",
    "route": "/app/reservations",
    "icon": "layers",
    "titleField": "guestId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "guestId",
        "header": "Guest",
        "kind": "text"
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
        "name": "guestId",
        "label": "Guest",
        "kind": "text"
      },
      {
        "name": "datetime",
        "label": "Datetime",
        "kind": "date"
      },
      {
        "name": "partySize",
        "label": "Party Size",
        "kind": "text"
      },
      {
        "name": "tableId",
        "label": "Table",
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
  "Waitlist": {
    "name": "Waitlist",
    "label": "Waitlist",
    "labelPlural": "Waitlists",
    "route": "/app/waitlists",
    "icon": "sparkles",
    "titleField": "guestName",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "guestName",
        "header": "Guest Name",
        "kind": "text"
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
        "name": "guestName",
        "label": "Guest Name",
        "kind": "text"
      },
      {
        "name": "partySize",
        "label": "Party Size",
        "kind": "text"
      },
      {
        "name": "addedAt",
        "label": "Added At",
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
  "Hours": {
    "name": "Hours",
    "label": "Hours",
    "labelPlural": "Hourses",
    "route": "/app/hourses",
    "icon": "layers",
    "titleField": "dayOfWeek",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "dayOfWeek",
        "header": "Day Of Week",
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
        "name": "dayOfWeek",
        "label": "Day Of Week",
        "kind": "text"
      },
      {
        "name": "openTime",
        "label": "Open Time",
        "kind": "date"
      },
      {
        "name": "closeTime",
        "label": "Close Time",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "DiningArea": {
    "name": "DiningArea",
    "label": "Dining Area",
    "labelPlural": "Dining Areas",
    "route": "/app/dining-areas",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
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
  "ReservationPolicy": {
    "name": "ReservationPolicy",
    "label": "Reservation Policy",
    "labelPlural": "Reservation Policies",
    "route": "/app/reservation-policies",
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
        "key": "cancellationWindowHours",
        "header": "Cancellation Window Hours",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "cancellationWindowHours",
        "label": "Cancellation Window Hours",
        "kind": "number"
      },
      {
        "name": "depositAmount",
        "label": "Deposit Amount",
        "kind": "number"
      },
      {
        "name": "noShowFee",
        "label": "No Show Fee",
        "kind": "number"
      },
      {
        "name": "maxCapacity",
        "label": "Max Capacity",
        "kind": "number"
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
  "NotificationLog": {
    "name": "NotificationLog",
    "label": "Notification Log",
    "labelPlural": "Notification Logs",
    "route": "/app/notification-logs",
    "icon": "layers",
    "titleField": "channel",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "channel",
        "header": "Channel",
        "kind": "text"
      },
      {
        "key": "reservation",
        "header": "Reservation",
        "kind": "relation",
        "titleField": "guestId"
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
        "name": "reservation",
        "label": "Reservation",
        "kind": "relation",
        "titleField": "guestId"
      },
      {
        "name": "channel",
        "label": "Channel",
        "kind": "text"
      },
      {
        "name": "recipient",
        "label": "Recipient",
        "kind": "text"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "sentAt",
        "label": "Sent At",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
