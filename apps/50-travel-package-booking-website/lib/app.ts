import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "50",
  slug: "travel-package-booking-website",
  appName: "Wanderly Travel Package Booking Website",
  tagline: "Showcase tour packages and let customers book departures with a deposit, with agency management tools",
  category: "Booking & Reservation",
  kind: "storefront",
  currency: "USD",
  primary: "Package",
};

export const THEME: Theme = {
  "brand": "#f97362",
  "brandFg": "#ffffff",
  "brandSoft": "#fef1ef",
  "accent": "#0d9488",
  "neutral": "stone",
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
    "href": "/app/packages",
    "label": "Packages",
    "icon": "layers"
  },
  {
    "href": "/app/bookings",
    "label": "Bookings",
    "icon": "calendar"
  },
  {
    "href": "/app/departures",
    "label": "Departures",
    "icon": "layers"
  },
  {
    "href": "/app/reviews",
    "label": "Reviews",
    "icon": "layers"
  },
  {
    "href": "/app/travelers",
    "label": "Travelers",
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
    "label": "Packages",
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
export const MANAGED: string[] = ["Package","Booking","Departure","Review","Traveler","Payment"];
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
  "Package": {
    "name": "Package",
    "label": "Package",
    "labelPlural": "Packages",
    "route": "/app/packages",
    "icon": "layers",
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
        "key": "durationDays",
        "header": "Duration Days",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "destination",
        "label": "Destination",
        "kind": "text"
      },
      {
        "name": "durationDays",
        "label": "Duration Days",
        "kind": "number"
      },
      {
        "name": "pricePerPerson",
        "label": "Price Per Person",
        "kind": "number"
      },
      {
        "name": "itinerary",
        "label": "Itinerary",
        "kind": "text"
      },
      {
        "name": "inclusions",
        "label": "Inclusions",
        "kind": "text"
      },
      {
        "name": "photos",
        "label": "Photos",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Departure": {
    "name": "Departure",
    "label": "Departure",
    "labelPlural": "Departures",
    "route": "/app/departures",
    "icon": "layers",
    "titleField": "booked",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "booked",
        "header": "Booked",
        "kind": "text"
      },
      {
        "key": "package",
        "header": "Package",
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
        "name": "package",
        "label": "Package",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "booked",
        "label": "Booked",
        "kind": "text"
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
        "key": "departure",
        "header": "Departure",
        "kind": "relation",
        "titleField": "booked"
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
        "name": "departure",
        "label": "Departure",
        "kind": "relation",
        "titleField": "booked"
      },
      {
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "travelers",
        "label": "Travelers",
        "kind": "text"
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
  "Review": {
    "name": "Review",
    "label": "Review",
    "labelPlural": "Reviews",
    "route": "/app/reviews",
    "icon": "layers",
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
        "key": "package",
        "header": "Package",
        "kind": "relation",
        "titleField": "title"
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
        "name": "package",
        "label": "Package",
        "kind": "relation",
        "titleField": "title"
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "comment",
        "label": "Comment",
        "kind": "text"
      },
      {
        "name": "isVerified",
        "label": "Is Verified",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Traveler": {
    "name": "Traveler",
    "label": "Traveler",
    "labelPlural": "Travelers",
    "route": "/app/travelers",
    "icon": "layers",
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
        "key": "booking",
        "header": "Booking",
        "kind": "relation",
        "titleField": "customerId"
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
        "name": "fullName",
        "label": "Full Name",
        "kind": "text"
      },
      {
        "name": "birthDate",
        "label": "Birth Date",
        "kind": "date"
      },
      {
        "name": "passportNumber",
        "label": "Passport Number",
        "kind": "text"
      },
      {
        "name": "nationality",
        "label": "Nationality",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Wishlist": {
    "name": "Wishlist",
    "label": "Wishlist",
    "labelPlural": "Wishlists",
    "route": "/app/wishlists",
    "icon": "layers",
    "titleField": "customerId",
    "subtitleField": "notes",
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
        "key": "package",
        "header": "Package",
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
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "package",
        "label": "Package",
        "kind": "relation",
        "titleField": "title"
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
  }
};
