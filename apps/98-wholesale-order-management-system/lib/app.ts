import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "98",
  slug: "wholesale-order-management-system",
  appName: "WholesaleOne Wholesale Order Management System",
  tagline: "Manage wholesale customers with price tiers, take orders with MOQ rules, and track fulfillment and invoices",
  category: "Wholesale & Order Management",
  kind: "dashboard",
  currency: "USD",
  primary: "Product",
};

export const THEME: Theme = {
  "brand": "#334155",
  "brandFg": "#ffffff",
  "brandSoft": "#ebecee",
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
    "href": "/app/products",
    "label": "Products",
    "icon": "bag"
  },
  {
    "href": "/app/orders",
    "label": "Orders",
    "icon": "cart"
  },
  {
    "href": "/app/customers",
    "label": "Customers",
    "icon": "users"
  },
  {
    "href": "/app/tier-prices",
    "label": "Tier Prices",
    "icon": "layers"
  },
  {
    "href": "/app/invoices",
    "label": "Invoices",
    "icon": "receipt"
  },
  {
    "href": "/app/price-tiers",
    "label": "Price Tiers",
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
    "label": "Products",
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
export const MANAGED: string[] = ["Product","Order","Customer","TierPrice","Invoice","PriceTier"];
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
  "Customer": {
    "name": "Customer",
    "label": "Customer",
    "labelPlural": "Customers",
    "route": "/app/customers",
    "icon": "users",
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
        "name": "tierId",
        "label": "Tier",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "PriceTier": {
    "name": "PriceTier",
    "label": "Price Tier",
    "labelPlural": "Price Tiers",
    "route": "/app/price-tiers",
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
  "Product": {
    "name": "Product",
    "label": "Product",
    "labelPlural": "Products",
    "route": "/app/products",
    "icon": "bag",
    "titleField": "name",
    "subtitleField": null,
    "statusField": null,
    "priceField": "basePrice",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "basePrice",
        "header": "Base Price",
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
        "name": "basePrice",
        "label": "Base Price",
        "kind": "price"
      },
      {
        "name": "stock",
        "label": "Stock",
        "kind": "number"
      },
      {
        "name": "moq",
        "label": "Moq",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "TierPrice": {
    "name": "TierPrice",
    "label": "Tier Price",
    "labelPlural": "Tier Prices",
    "route": "/app/tier-prices",
    "icon": "layers",
    "titleField": "tierId",
    "subtitleField": null,
    "statusField": null,
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "tierId",
        "header": "Tier",
        "kind": "text"
      },
      {
        "key": "product",
        "header": "Product",
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
        "name": "tierId",
        "label": "Tier",
        "kind": "text"
      },
      {
        "name": "product",
        "label": "Product",
        "kind": "relation",
        "titleField": "name"
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
  "Order": {
    "name": "Order",
    "label": "Order",
    "labelPlural": "Orders",
    "route": "/app/orders",
    "icon": "cart",
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
        "key": "customer",
        "header": "Customer",
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
        "name": "customer",
        "label": "Customer",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "total",
        "label": "Total",
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
  "OrderItem": {
    "name": "OrderItem",
    "label": "Order Item",
    "labelPlural": "Order Items",
    "route": "/app/order-items",
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
        "key": "order",
        "header": "Order",
        "kind": "relation",
        "titleField": "status"
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
        "titleField": "status"
      },
      {
        "name": "product",
        "label": "Product",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "qty",
        "label": "Qty",
        "kind": "number"
      },
      {
        "name": "unitPrice",
        "label": "Unit Price",
        "kind": "number"
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
  "Invoice": {
    "name": "Invoice",
    "label": "Invoice",
    "labelPlural": "Invoices",
    "route": "/app/invoices",
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
        "name": "order",
        "label": "Order",
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
