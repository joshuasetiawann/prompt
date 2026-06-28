import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "51",
  slug: "pet-grooming-veterinary-care-scheduler",
  appName: "PawCare Pro Pet Grooming & Veterinary Care Scheduler",
  tagline: "Let owners book grooming or veterinary appointments for their pets while staff manage availability, pet records, and reminders",
  category: "Service Booking & Operations",
  kind: "storefront",
  currency: "USD",
  primary: "Service",
};

export const THEME: Theme = {
  "brand": "#f97362",
  "brandFg": "#ffffff",
  "brandSoft": "#fef1ef",
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
    "href": "/app/pets",
    "label": "Pets",
    "icon": "layers"
  },
  {
    "href": "/app/appointments",
    "label": "Appointments",
    "icon": "calendar"
  },
  {
    "href": "/app/providers",
    "label": "Providers",
    "icon": "layers"
  },
  {
    "href": "/app/reminders",
    "label": "Reminders",
    "icon": "layers"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
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
export const MANAGED: string[] = ["Service","Pet","Appointment","Provider","Reminder","Payment"];
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
  "Pet": {
    "name": "Pet",
    "label": "Pet",
    "labelPlural": "Pets",
    "route": "/app/pets",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "notes",
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
        "key": "owner",
        "header": "Owner",
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
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "species",
        "label": "Species",
        "kind": "text"
      },
      {
        "name": "breed",
        "label": "Breed",
        "kind": "text"
      },
      {
        "name": "dob",
        "label": "Dob",
        "kind": "text"
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
  "Service": {
    "name": "Service",
    "label": "Service",
    "labelPlural": "Services",
    "route": "/app/services",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "type",
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
  "Provider": {
    "name": "Provider",
    "label": "Provider",
    "labelPlural": "Providers",
    "route": "/app/providers",
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
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
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
        "name": "role",
        "label": "Role",
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
        "key": "pet",
        "header": "Pet",
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
        "name": "pet",
        "label": "Pet",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "service",
        "label": "Service",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "provider",
        "label": "Provider",
        "kind": "relation",
        "titleField": "name"
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
  "VisitNote": {
    "name": "VisitNote",
    "label": "Visit Note",
    "labelPlural": "Visit Notes",
    "route": "/app/visit-notes",
    "icon": "layers",
    "titleField": "body",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "body",
        "header": "Body",
        "kind": "text"
      },
      {
        "key": "appointment",
        "header": "Appointment",
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
        "name": "appointment",
        "label": "Appointment",
        "kind": "relation",
        "titleField": "status"
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
  },
  "Reminder": {
    "name": "Reminder",
    "label": "Reminder",
    "labelPlural": "Reminders",
    "route": "/app/reminders",
    "icon": "layers",
    "titleField": "kind",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "kind",
        "header": "Kind",
        "kind": "text"
      },
      {
        "key": "pet",
        "header": "Pet",
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
        "name": "pet",
        "label": "Pet",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "kind",
        "label": "Kind",
        "kind": "text"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "sent",
        "label": "Sent",
        "kind": "text"
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
        "key": "appointment",
        "header": "Appointment",
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
