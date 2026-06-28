import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "05",
  slug: "clinic-appointment-booking-app",
  appName: "MediSlot Clinic Appointment Booking App",
  tagline: "Let patients book available slots with a doctor and let staff manage schedules and appointments",
  category: "Booking & Reservation",
  kind: "storefront",
  currency: "USD",
  primary: "Appointment",
};

export const THEME: Theme = {
  "brand": "#15803d",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f2ec",
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
    "href": "/app/doctors",
    "label": "Doctors",
    "icon": "layers"
  },
  {
    "href": "/app/departments",
    "label": "Departments",
    "icon": "layers"
  },
  {
    "href": "/app/medical-records",
    "label": "Medical Records",
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
    "label": "Appointments",
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
export const MANAGED: string[] = ["Appointment","Patient","Doctor","Department","MedicalRecord","Payment"];
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
  "Doctor": {
    "name": "Doctor",
    "label": "Doctor",
    "labelPlural": "Doctors",
    "route": "/app/doctors",
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
        "key": "department",
        "header": "Department",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "specialty",
        "label": "Specialty",
        "kind": "text"
      },
      {
        "name": "department",
        "label": "Department",
        "kind": "relation",
        "titleField": "name"
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
        "name": "dob",
        "label": "Dob",
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
        "key": "doctor",
        "header": "Doctor",
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
        "name": "doctor",
        "label": "Doctor",
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
  "Notification": {
    "name": "Notification",
    "label": "Notification",
    "labelPlural": "Notifications",
    "route": "/app/notifications",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
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
  },
  "Department": {
    "name": "Department",
    "label": "Department",
    "labelPlural": "Departments",
    "route": "/app/departments",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "MedicalRecord": {
    "name": "MedicalRecord",
    "label": "Medical Record",
    "labelPlural": "Medical Records",
    "route": "/app/medical-records",
    "icon": "layers",
    "titleField": "diagnosis",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "diagnosis",
        "header": "Diagnosis",
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
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
      },
      {
        "name": "doctor",
        "label": "Doctor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "diagnosis",
        "label": "Diagnosis",
        "kind": "text"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
      },
      {
        "name": "followUpDate",
        "label": "Follow Up Date",
        "kind": "date"
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
        "name": "patient",
        "label": "Patient",
        "kind": "relation",
        "titleField": "fullName"
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
        "name": "method",
        "label": "Method",
        "kind": "text"
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
  }
};
