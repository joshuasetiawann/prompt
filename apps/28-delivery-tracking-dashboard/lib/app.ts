import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "28",
  slug: "delivery-tracking-dashboard",
  appName: "TrackR Delivery Tracking Dashboard",
  tagline: "Manage shipments through statuses, assign drivers, and provide a public tracking page",
  category: "Analytics & Dashboards",
  kind: "dashboard",
  currency: "USD",
  primary: "Driver",
};

export const THEME: Theme = {
  "brand": "#ea580c",
  "brandFg": "#ffffff",
  "brandSoft": "#fdeee7",
  "accent": "#334155",
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
    "href": "/app/drivers",
    "label": "Drivers",
    "icon": "layers"
  },
  {
    "href": "/app/shipments",
    "label": "Shipments",
    "icon": "truck"
  },
  {
    "href": "/app/routes",
    "label": "Routes",
    "icon": "layers"
  },
  {
    "href": "/app/customers",
    "label": "Customers",
    "icon": "users"
  },
  {
    "href": "/app/delivery-proofs",
    "label": "Delivery Proofs",
    "icon": "truck"
  },
  {
    "href": "/app/status-events",
    "label": "Status Events",
    "icon": "chart"
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
    "label": "Drivers",
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
export const MANAGED: string[] = ["Driver","Shipment","Route","Customer","DeliveryProof","StatusEvent"];
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
  "Driver": {
    "name": "Driver",
    "label": "Driver",
    "labelPlural": "Drivers",
    "route": "/app/drivers",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
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
  "Shipment": {
    "name": "Shipment",
    "label": "Shipment",
    "labelPlural": "Shipments",
    "route": "/app/shipments",
    "icon": "truck",
    "titleField": "trackingNumber",
    "subtitleField": "address",
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "trackingNumber",
        "header": "Tracking Number",
        "kind": "text"
      },
      {
        "key": "driver",
        "header": "Driver",
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
        "name": "trackingNumber",
        "label": "Tracking Number",
        "kind": "text"
      },
      {
        "name": "recipientName",
        "label": "Recipient Name",
        "kind": "text"
      },
      {
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "driver",
        "label": "Driver",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "customer",
        "label": "Customer",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "route",
        "label": "Route",
        "kind": "relation",
        "titleField": "name"
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
  "StatusEvent": {
    "name": "StatusEvent",
    "label": "Status Event",
    "labelPlural": "Status Events",
    "route": "/app/status-events",
    "icon": "chart",
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
        "key": "shipment",
        "header": "Shipment",
        "kind": "relation",
        "titleField": "trackingNumber"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "shipment",
        "label": "Shipment",
        "kind": "relation",
        "titleField": "trackingNumber"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "note",
        "label": "Note",
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
        "name": "address",
        "label": "Address",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Route": {
    "name": "Route",
    "label": "Route",
    "labelPlural": "Routes",
    "route": "/app/routes",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
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
        "key": "driver",
        "header": "Driver",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "stopCount",
        "header": "Stop Count",
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
        "name": "driver",
        "label": "Driver",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "stopCount",
        "label": "Stop Count",
        "kind": "number"
      },
      {
        "name": "scheduledFor",
        "label": "Scheduled For",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "DeliveryProof": {
    "name": "DeliveryProof",
    "label": "Delivery Proof",
    "labelPlural": "Delivery Proofs",
    "route": "/app/delivery-proofs",
    "icon": "truck",
    "titleField": "recipientName",
    "subtitleField": "notes",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "recipientName",
        "header": "Recipient Name",
        "kind": "text"
      },
      {
        "key": "shipment",
        "header": "Shipment",
        "kind": "relation",
        "titleField": "trackingNumber"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "shipment",
        "label": "Shipment",
        "kind": "relation",
        "titleField": "trackingNumber"
      },
      {
        "name": "recipientName",
        "label": "Recipient Name",
        "kind": "text"
      },
      {
        "name": "signatureUrl",
        "label": "Signature Url",
        "kind": "text"
      },
      {
        "name": "photoUrl",
        "label": "Photo Url",
        "kind": "text"
      },
      {
        "name": "notes",
        "label": "Notes",
        "kind": "text"
      },
      {
        "name": "deliveredAt",
        "label": "Delivered At",
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
