import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "85",
  slug: "museum-gallery-ticketing-collection-portal",
  appName: "Curate Museum / Gallery Ticketing & Collection Portal",
  tagline: "Sell timed-entry tickets to exhibitions and present a browsable collection, with staff check-in",
  category: "Culture & Ticketing",
  kind: "dashboard",
  currency: "USD",
  primary: "Ticket",
};

export const THEME: Theme = {
  "brand": "#1f2937",
  "brandFg": "#ffffff",
  "brandSoft": "#e9eaeb",
  "accent": "#f8f5ee",
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
    "href": "/app/tickets",
    "label": "Tickets",
    "icon": "ticket"
  },
  {
    "href": "/app/exhibitions",
    "label": "Exhibitions",
    "icon": "layers"
  },
  {
    "href": "/app/entry-slots",
    "label": "Entry Slots",
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
    "label": "Tickets",
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
export const MANAGED: string[] = ["Ticket","Exhibition","EntrySlot","Payment"];
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
  "Exhibition": {
    "name": "Exhibition",
    "label": "Exhibition",
    "labelPlural": "Exhibitions",
    "route": "/app/exhibitions",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "EntrySlot": {
    "name": "EntrySlot",
    "label": "Entry Slot",
    "labelPlural": "Entry Slots",
    "route": "/app/entry-slots",
    "icon": "layers",
    "titleField": "sold",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "sold",
        "header": "Sold",
        "kind": "text"
      },
      {
        "key": "exhibition",
        "header": "Exhibition",
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
        "name": "exhibition",
        "label": "Exhibition",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "datetime",
        "label": "Datetime",
        "kind": "date"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "sold",
        "label": "Sold",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Ticket": {
    "name": "Ticket",
    "label": "Ticket",
    "labelPlural": "Tickets",
    "route": "/app/tickets",
    "icon": "ticket",
    "titleField": "slotId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "slotId",
        "header": "Slot",
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
        "name": "slotId",
        "label": "Slot",
        "kind": "text"
      },
      {
        "name": "visitorId",
        "label": "Visitor",
        "kind": "text"
      },
      {
        "name": "code",
        "label": "Code",
        "kind": "text"
      },
      {
        "name": "checkedIn",
        "label": "Checked In",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CollectionItem": {
    "name": "CollectionItem",
    "label": "Collection Item",
    "labelPlural": "Collection Items",
    "route": "/app/collection-items",
    "icon": "layers",
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
        "key": "imageUrl",
        "header": "Image Url",
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
        "name": "artist",
        "label": "Artist",
        "kind": "text"
      },
      {
        "name": "year",
        "label": "Year",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "imageUrl",
        "label": "Image Url",
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
        "key": "ticket",
        "header": "Ticket",
        "kind": "relation",
        "titleField": "slotId"
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
        "name": "ticket",
        "label": "Ticket",
        "kind": "relation",
        "titleField": "slotId"
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
