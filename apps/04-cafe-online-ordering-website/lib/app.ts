import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "04",
  slug: "cafe-online-ordering-website",
  appName: "Brewline Cafe Online Ordering Website",
  tagline: "Let customers order and pay (mock) for pickup or delivery, and let staff manage orders and the menu",
  category: "E-commerce",
  kind: "storefront",
  currency: "USD",
  primary: "Item",
};

export const THEME: Theme = {
  "brand": "#92400e",
  "brandFg": "#ffffff",
  "brandSoft": "#f4ece7",
  "accent": "#f5efe2",
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
    "href": "/app/orders",
    "label": "Orders",
    "icon": "cart"
  },
  {
    "href": "/app/categories",
    "label": "Categories",
    "icon": "layers"
  },
  {
    "href": "/app/carts",
    "label": "Carts",
    "icon": "cart"
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
    "label": "Items",
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
export const MANAGED: string[] = ["Order","Category","Cart","Payment"];
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
  "Category": {
    "name": "Category",
    "label": "Category",
    "labelPlural": "Categories",
    "route": "/app/categories",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Item": {
    "name": "Item",
    "label": "Item",
    "labelPlural": "Items",
    "route": "/app/items",
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
        "key": "category",
        "header": "Category",
        "kind": "relation",
        "titleField": "name"
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
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
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
        "name": "options",
        "label": "Options",
        "kind": "text"
      },
      {
        "name": "isAvailable",
        "label": "Is Available",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Cart": {
    "name": "Cart",
    "label": "Cart",
    "labelPlural": "Carts",
    "route": "/app/carts",
    "icon": "cart",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CartItem": {
    "name": "CartItem",
    "label": "Cart Item",
    "labelPlural": "Cart Items",
    "route": "/app/cart-items",
    "icon": "cart",
    "titleField": "selectedOptions",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "selectedOptions",
        "header": "Selected Options",
        "kind": "text"
      },
      {
        "key": "cart",
        "header": "Cart",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "key": "qty",
        "header": "Qty",
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
        "name": "cart",
        "label": "Cart",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "item",
        "label": "Item",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "selectedOptions",
        "label": "Selected Options",
        "kind": "text"
      },
      {
        "name": "lineTotal",
        "label": "Line Total",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Order": {
    "name": "Order",
    "label": "Order",
    "labelPlural": "Orders",
    "route": "/app/orders",
    "icon": "cart",
    "titleField": "type",
    "subtitleField": "address",
    "statusField": "status",
    "priceField": "total",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "scheduledTime",
        "label": "Scheduled Time",
        "kind": "date"
      },
      {
        "name": "address",
        "label": "Address",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "OrderItem": {
    "name": "OrderItem",
    "label": "Order Item",
    "labelPlural": "Order Items",
    "route": "/app/order-items",
    "icon": "cart",
    "titleField": "options",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "options",
        "header": "Options",
        "kind": "text"
      },
      {
        "key": "order",
        "header": "Order",
        "kind": "relation",
        "titleField": "type"
      },
      {
        "key": "qty",
        "header": "Qty",
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
        "name": "order",
        "label": "Order",
        "kind": "relation",
        "titleField": "type"
      },
      {
        "name": "item",
        "label": "Item",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "options",
        "label": "Options",
        "kind": "text"
      },
      {
        "name": "lineTotal",
        "label": "Line Total",
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
        "key": "order",
        "header": "Order",
        "kind": "relation",
        "titleField": "type"
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
        "name": "order",
        "label": "Order",
        "kind": "relation",
        "titleField": "type"
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
