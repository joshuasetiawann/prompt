import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "61",
  slug: "influencer-campaign-management-platform",
  appName: "CollabHub Influencer Campaign Management Platform",
  tagline: "Let brands create campaigns, recruit influencers, track deliverables and approvals, and handle payouts",
  category: "Marketing & Campaigns",
  kind: "landing",
  currency: "USD",
  primary: "Influencer",
};

export const THEME: Theme = {
  "brand": "#c026d3",
  "brandFg": "#ffffff",
  "brandSoft": "#f9e9fb",
  "accent": "#4f46e5",
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
    "href": "/app/influencers",
    "label": "Influencers",
    "icon": "layers"
  },
  {
    "href": "/app/campaigns",
    "label": "Campaigns",
    "icon": "sparkles"
  },
  {
    "href": "/app/deliverables",
    "label": "Deliverables",
    "icon": "layers"
  },
  {
    "href": "/app/brands",
    "label": "Brands",
    "icon": "layers"
  },
  {
    "href": "/app/campaign-invites",
    "label": "Campaign Invites",
    "icon": "sparkles"
  },
  {
    "href": "/app/payouts",
    "label": "Payouts",
    "icon": "credit-card"
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
    "label": "Overview",
    "href": "/#features"
  },
  {
    "label": "How it works",
    "href": "/#how"
  },
  {
    "label": "FAQ",
    "href": "/#faq"
  }
];
export const MANAGED: string[] = ["Influencer","Campaign","Deliverable","Brand","CampaignInvite","Payout"];
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
  "Brand": {
    "name": "Brand",
    "label": "Brand",
    "labelPlural": "Brands",
    "route": "/app/brands",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Influencer": {
    "name": "Influencer",
    "label": "Influencer",
    "labelPlural": "Influencers",
    "route": "/app/influencers",
    "icon": "layers",
    "titleField": "handle",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "handle",
        "header": "Handle",
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
        "name": "handle",
        "label": "Handle",
        "kind": "text"
      },
      {
        "name": "niche",
        "label": "Niche",
        "kind": "text"
      },
      {
        "name": "followers",
        "label": "Followers",
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
    "priceField": "budget",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "brand",
        "header": "Brand",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "budget",
        "header": "Budget",
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
        "name": "brand",
        "label": "Brand",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "brief",
        "label": "Brief",
        "kind": "text"
      },
      {
        "name": "budget",
        "label": "Budget",
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
  "CampaignInvite": {
    "name": "CampaignInvite",
    "label": "Campaign Invite",
    "labelPlural": "Campaign Invites",
    "route": "/app/campaign-invites",
    "icon": "sparkles",
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
        "key": "campaign",
        "header": "Campaign",
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
        "name": "campaign",
        "label": "Campaign",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "influencer",
        "label": "Influencer",
        "kind": "relation",
        "titleField": "handle"
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
  "Deliverable": {
    "name": "Deliverable",
    "label": "Deliverable",
    "labelPlural": "Deliverables",
    "route": "/app/deliverables",
    "icon": "layers",
    "titleField": "type",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "type",
        "header": "Type",
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
        "name": "influencer",
        "label": "Influencer",
        "kind": "relation",
        "titleField": "handle"
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
        "name": "submittedUrl",
        "label": "Submitted Url",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payout": {
    "name": "Payout",
    "label": "Payout",
    "labelPlural": "Payouts",
    "route": "/app/payouts",
    "icon": "credit-card",
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
        "key": "deliverable",
        "header": "Deliverable",
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
        "name": "deliverable",
        "label": "Deliverable",
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
