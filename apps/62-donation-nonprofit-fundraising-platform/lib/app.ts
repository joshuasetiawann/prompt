import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "62",
  slug: "donation-nonprofit-fundraising-platform",
  appName: "OpenGive Donation & Nonprofit Fundraising Platform",
  tagline: "Let organizations run campaigns with goals and let donors give (mock) and receive receipts",
  category: "Nonprofit & Fundraising",
  kind: "dashboard",
  currency: "USD",
  primary: "Donation",
};

export const THEME: Theme = {
  "brand": "#c79a4b",
  "brandFg": "#ffffff",
  "brandSoft": "#f9f5ed",
  "accent": "#059669",
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
    "href": "/app/donations",
    "label": "Donations",
    "icon": "layers"
  },
  {
    "href": "/app/campaigns",
    "label": "Campaigns",
    "icon": "sparkles"
  },
  {
    "href": "/app/recurring-plans",
    "label": "Recurring Plans",
    "icon": "layers"
  },
  {
    "href": "/app/receipts",
    "label": "Receipts",
    "icon": "layers"
  },
  {
    "href": "/app/payments",
    "label": "Payments",
    "icon": "receipt"
  },
  {
    "href": "/app/organizations",
    "label": "Organizations",
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
    "label": "Donations",
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
export const MANAGED: string[] = ["Donation","Campaign","RecurringPlan","Receipt","Payment","Organization"];
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
  "Organization": {
    "name": "Organization",
    "label": "Organization",
    "labelPlural": "Organizations",
    "route": "/app/organizations",
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
        "name": "mission",
        "label": "Mission",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Campaign": {
    "name": "Campaign",
    "label": "Campaign",
    "labelPlural": "Campaigns",
    "route": "/app/campaigns",
    "icon": "sparkles",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
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
        "name": "orgId",
        "label": "Org",
        "kind": "text"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "story",
        "label": "Story",
        "kind": "text"
      },
      {
        "name": "goalAmount",
        "label": "Goal Amount",
        "kind": "number"
      },
      {
        "name": "raisedAmount",
        "label": "Raised Amount",
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
  "Donation": {
    "name": "Donation",
    "label": "Donation",
    "labelPlural": "Donations",
    "route": "/app/donations",
    "icon": "layers",
    "titleField": "donorId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "donorId",
        "header": "Donor",
        "kind": "text"
      },
      {
        "key": "campaign",
        "header": "Campaign",
        "kind": "relation",
        "titleField": "title"
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
        "name": "campaign",
        "label": "Campaign",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "donorId",
        "label": "Donor",
        "kind": "text"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "recurring",
        "label": "Recurring",
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
  "RecurringPlan": {
    "name": "RecurringPlan",
    "label": "Recurring Plan",
    "labelPlural": "Recurring Plans",
    "route": "/app/recurring-plans",
    "icon": "layers",
    "titleField": "donorId",
    "subtitleField": null,
    "statusField": null,
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "donorId",
        "header": "Donor",
        "kind": "text"
      },
      {
        "key": "campaign",
        "header": "Campaign",
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
        "name": "donorId",
        "label": "Donor",
        "kind": "text"
      },
      {
        "name": "campaign",
        "label": "Campaign",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "interval",
        "label": "Interval",
        "kind": "text"
      },
      {
        "name": "active",
        "label": "Active",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Receipt": {
    "name": "Receipt",
    "label": "Receipt",
    "labelPlural": "Receipts",
    "route": "/app/receipts",
    "icon": "layers",
    "titleField": "number",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "number",
        "header": "Number",
        "kind": "text"
      },
      {
        "key": "donation",
        "header": "Donation",
        "kind": "relation",
        "titleField": "donorId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "donation",
        "label": "Donation",
        "kind": "relation",
        "titleField": "donorId"
      },
      {
        "name": "number",
        "label": "Number",
        "kind": "text"
      },
      {
        "name": "issuedAt",
        "label": "Issued At",
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
        "key": "donation",
        "header": "Donation",
        "kind": "relation",
        "titleField": "donorId"
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
        "name": "donation",
        "label": "Donation",
        "kind": "relation",
        "titleField": "donorId"
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
