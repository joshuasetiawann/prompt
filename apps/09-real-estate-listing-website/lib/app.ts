import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "09",
  slug: "real-estate-listing-website",
  appName: "Estatly Real Estate Listing Website",
  tagline: "Let visitors search and view properties and submit inquiries, and let agents manage listings and leads",
  category: "Marketplace & Listings",
  kind: "storefront",
  currency: "USD",
  primary: "Property",
};

export const THEME: Theme = {
  "brand": "#1e3a5f",
  "brandFg": "#ffffff",
  "brandSoft": "#e9ebef",
  "accent": "#2563eb",
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
    "href": "/app/properties",
    "label": "Properties",
    "icon": "building"
  },
  {
    "href": "/app/saved-searches",
    "label": "Saved Searches",
    "icon": "layers"
  },
  {
    "href": "/app/leads",
    "label": "Leads",
    "icon": "users"
  },
  {
    "href": "/app/viewings",
    "label": "Viewings",
    "icon": "layers"
  },
  {
    "href": "/app/offers",
    "label": "Offers",
    "icon": "layers"
  },
  {
    "href": "/app/reviews",
    "label": "Reviews",
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
    "label": "Properties",
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
export const MANAGED: string[] = ["Property","SavedSearch","Lead","Viewing","Offer","Review"];
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
  "Property": {
    "name": "Property",
    "label": "Property",
    "labelPlural": "Properties",
    "route": "/app/properties",
    "icon": "building",
    "titleField": "title",
    "subtitleField": "description",
    "statusField": "status",
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "agent",
        "header": "Agent",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
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
        "name": "agent",
        "label": "Agent",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "bedrooms",
        "label": "Bedrooms",
        "kind": "text"
      },
      {
        "name": "bathrooms",
        "label": "Bathrooms",
        "kind": "text"
      },
      {
        "name": "area",
        "label": "Area",
        "kind": "text"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
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
  "Favorite": {
    "name": "Favorite",
    "label": "Favorite",
    "labelPlural": "Favorites",
    "route": "/app/favorites",
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
        "name": "property",
        "label": "Property",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Lead": {
    "name": "Lead",
    "label": "Lead",
    "labelPlural": "Leads",
    "route": "/app/leads",
    "icon": "users",
    "titleField": "name",
    "subtitleField": "email",
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
        "key": "property",
        "header": "Property",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "message",
        "header": "Message",
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
        "name": "property",
        "label": "Property",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "agent",
        "label": "Agent",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "phone",
        "label": "Phone",
        "kind": "text"
      },
      {
        "name": "message",
        "label": "Message",
        "kind": "number"
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
  "Viewing": {
    "name": "Viewing",
    "label": "Viewing",
    "labelPlural": "Viewings",
    "route": "/app/viewings",
    "icon": "layers",
    "titleField": "status",
    "subtitleField": "notes",
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
        "key": "property",
        "header": "Property",
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
        "name": "property",
        "label": "Property",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "agent",
        "label": "Agent",
        "kind": "relation",
        "titleField": "name"
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
  "Offer": {
    "name": "Offer",
    "label": "Offer",
    "labelPlural": "Offers",
    "route": "/app/offers",
    "icon": "layers",
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
        "key": "property",
        "header": "Property",
        "kind": "relation",
        "titleField": "title"
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
        "name": "property",
        "label": "Property",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
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
        "name": "message",
        "label": "Message",
        "kind": "number"
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
        "key": "agent",
        "header": "Agent",
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
        "name": "agent",
        "label": "Agent",
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
  },
  "SavedSearch": {
    "name": "SavedSearch",
    "label": "Saved Search",
    "labelPlural": "Saved Searches",
    "route": "/app/saved-searches",
    "icon": "layers",
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
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "minPrice",
        "label": "Min Price",
        "kind": "number"
      },
      {
        "name": "maxPrice",
        "label": "Max Price",
        "kind": "number"
      },
      {
        "name": "bedrooms",
        "label": "Bedrooms",
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
  }
};
