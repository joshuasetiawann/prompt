import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "06",
  slug: "dentist-appointment-website",
  appName: "BrightDental Dentist Appointment Website",
  tagline: "Present services and let patients book a treatment slot, while staff manage the schedule",
  category: "Booking & Reservation",
  kind: "storefront",
  currency: "USD",
  primary: "Service",
};

export const THEME: Theme = {
  "brand": "#0ea5e9",
  "brandFg": "#ffffff",
  "brandSoft": "#e7f6fd",
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
    "href": "/app/services",
    "label": "Services",
    "icon": "layers"
  },
  {
    "href": "/app/appointments",
    "label": "Appointments",
    "icon": "calendar"
  },
  {
    "href": "/app/patients",
    "label": "Patients",
    "icon": "users"
  },
  {
    "href": "/app/dentists",
    "label": "Dentists",
    "icon": "layers"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
  },
  {
    "href": "/app/reminders",
    "label": "Reminders",
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
    "label": "Services",
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
export const MANAGED: string[] = ["Service","Appointment","Patient","Dentist","Payment","Reminder"];
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
  "Service": {
    "name": "Service",
    "label": "Service",
    "labelPlural": "Services",
    "route": "/app/services",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "description",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "durationMin",
        "label": "Duration Min",
        "kind": "number"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Dentist": {
    "name": "Dentist",
    "label": "Dentist",
    "labelPlural": "Dentists",
    "route": "/app/dentists",
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
        "key": "workingHours",
        "header": "Working Hours",
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
        "name": "workingHours",
        "label": "Working Hours",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Patient": {
    "name": "Patient",
    "label": "Patient",
    "labelPlural": "Patients",
    "route": "/app/patients",
    "icon": "users",
    "titleField": "fullName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fullName",
        "header": "Full Name",
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
        "name": "fullName",
        "label": "Full Name",
        "kind": "text"
      },
      {
        "name": "phone",
        "label": "Phone",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Appointment": {
    "name": "Appointment",
    "label": "Appointment",
    "labelPlural": "Appointments",
    "route": "/app/appointments",
    "icon": "calendar",
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
        "key": "service",
        "header": "Service",
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
        "name": "service",
        "label": "Service",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "dentist",
        "label": "Dentist",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
      },
      {
        "name": "startTime",
        "label": "Start Time",
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
  "Payment": {
    "name": "Payment",
    "label": "Payment",
    "labelPlural": "Payments",
    "route": "/app/payments",
    "icon": "receipt",
    "titleField": "method",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "method",
        "header": "Method",
        "kind": "text"
      },
      {
        "key": "appointment",
        "header": "Appointment",
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
        "name": "appointment",
        "label": "Appointment",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "method",
        "label": "Method",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "paidAt",
        "label": "Paid At",
        "kind": "date"
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
        "key": "appointment",
        "header": "Appointment",
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
        "name": "appointment",
        "label": "Appointment",
        "kind": "relation",
        "titleField": "status"
      },
      {
        "name": "channel",
        "label": "Channel",
        "kind": "text"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
        "kind": "date"
      },
      {
        "name": "sentAt",
        "label": "Sent At",
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
  "Testimonial": {
    "name": "Testimonial",
    "label": "Testimonial",
    "labelPlural": "Testimonials",
    "route": "/app/testimonials",
    "icon": "layers",
    "titleField": "authorName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "authorName",
        "header": "Author Name",
        "kind": "text"
      },
      {
        "key": "patient",
        "header": "Patient",
        "kind": "relation",
        "titleField": "fullName"
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
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
      },
      {
        "name": "authorName",
        "label": "Author Name",
        "kind": "text"
      },
      {
        "name": "rating",
        "label": "Rating",
        "kind": "number"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "isPublished",
        "label": "Is Published",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
