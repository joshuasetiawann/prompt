import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "29",
  slug: "car-rental-booking-app",
  appName: "DriveNow Car Rental Booking App",
  tagline: "Let customers book available vehicles by date and let staff manage the fleet and rentals",
  category: "Booking & Reservation",
  kind: "storefront",
  currency: "USD",
  primary: "Vehicle",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
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
    "href": "/app/vehicles",
    "label": "Vehicles",
    "icon": "car"
  },
  {
    "href": "/app/bookings",
    "label": "Bookings",
    "icon": "calendar"
  },
  {
    "href": "/app/locations",
    "label": "Locations",
    "icon": "layers"
  },
  {
    "href": "/app/maintenance-logs",
    "label": "Maintenance Logs",
    "icon": "sparkles"
  },
  {
    "href": "/app/damage-reports",
    "label": "Damage Reports",
    "icon": "chart"
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
    "label": "Vehicles",
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
export const MANAGED: string[] = ["Vehicle","Booking","Location","MaintenanceLog","DamageReport","Payment"];
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
  "Vehicle": {
    "name": "Vehicle",
    "label": "Vehicle",
    "labelPlural": "Vehicles",
    "route": "/app/vehicles",
    "icon": "car",
    "titleField": "name",
    "subtitleField": "type",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "seats",
        "label": "Seats",
        "kind": "number"
      },
      {
        "name": "transmission",
        "label": "Transmission",
        "kind": "text"
      },
      {
        "name": "pricePerDay",
        "label": "Price Per Day",
        "kind": "number"
      },
      {
        "name": "photos",
        "label": "Photos",
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
  "Booking": {
    "name": "Booking",
    "label": "Booking",
    "labelPlural": "Bookings",
    "route": "/app/bookings",
    "icon": "calendar",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "vehicle",
        "header": "Vehicle",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
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
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "pickupDate",
        "label": "Pickup Date",
        "kind": "date"
      },
      {
        "name": "returnDate",
        "label": "Return Date",
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
        "name": "depositPaid",
        "label": "Deposit Paid",
        "kind": "bool"
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
    "titleField": "type",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "booking",
        "header": "Booking",
        "kind": "relation",
        "titleField": "customerId"
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
        "name": "booking",
        "label": "Booking",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "type",
        "label": "Type",
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
  "Location": {
    "name": "Location",
    "label": "Location",
    "labelPlural": "Locations",
    "route": "/app/locations",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "address",
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
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "city",
        "label": "City",
        "kind": "text"
      },
      {
        "name": "phone",
        "label": "Phone",
        "kind": "text"
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
  "Review": {
    "name": "Review",
    "label": "Review",
    "labelPlural": "Reviews",
    "route": "/app/reviews",
    "icon": "layers",
    "titleField": "customerId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "customerId",
        "header": "Customer",
        "kind": "text"
      },
      {
        "key": "vehicle",
        "header": "Vehicle",
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
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
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
  },
  "MaintenanceLog": {
    "name": "MaintenanceLog",
    "label": "Maintenance Log",
    "labelPlural": "Maintenance Logs",
    "route": "/app/maintenance-logs",
    "icon": "sparkles",
    "titleField": "description",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "description",
        "header": "Description",
        "kind": "text"
      },
      {
        "key": "vehicle",
        "header": "Vehicle",
        "kind": "relation",
        "titleField": "name"
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
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "cost",
        "label": "Cost",
        "kind": "number"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
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
  "DamageReport": {
    "name": "DamageReport",
    "label": "Damage Report",
    "labelPlural": "Damage Reports",
    "route": "/app/damage-reports",
    "icon": "chart",
    "titleField": "description",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "description",
        "header": "Description",
        "kind": "text"
      },
      {
        "key": "booking",
        "header": "Booking",
        "kind": "relation",
        "titleField": "customerId"
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
        "name": "booking",
        "label": "Booking",
        "kind": "relation",
        "titleField": "customerId"
      },
      {
        "name": "vehicle",
        "label": "Vehicle",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "repairCost",
        "label": "Repair Cost",
        "kind": "number"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "reportedAt",
        "label": "Reported At",
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
