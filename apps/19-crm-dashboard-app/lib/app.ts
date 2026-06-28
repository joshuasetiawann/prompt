import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "19",
  slug: "crm-dashboard-app",
  appName: "LeadDesk CRM Dashboard App",
  tagline: "Organize contacts, move deals through a pipeline, log activities, and report on performance",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Contact",
};

export const THEME: Theme = {
  "brand": "#059669",
  "brandFg": "#ffffff",
  "brandSoft": "#e6f5f0",
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
    "href": "/app/contacts",
    "label": "Contacts",
    "icon": "users"
  },
  {
    "href": "/app/deals",
    "label": "Deals",
    "icon": "kanban"
  },
  {
    "href": "/app/companies",
    "label": "Companies",
    "icon": "layers"
  },
  {
    "href": "/app/leads",
    "label": "Leads",
    "icon": "users"
  },
  {
    "href": "/app/activities",
    "label": "Activities",
    "icon": "list-checks"
  },
  {
    "href": "/app/notification-logs",
    "label": "Notification Logs",
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
    "label": "Contacts",
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
export const MANAGED: string[] = ["Contact","Deal","Company","Lead","Activity","NotificationLog"];
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
  "Contact": {
    "name": "Contact",
    "label": "Contact",
    "labelPlural": "Contacts",
    "route": "/app/contacts",
    "icon": "users",
    "titleField": "name",
    "subtitleField": "company",
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
        "key": "owner",
        "header": "Owner",
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
        "name": "owner",
        "label": "Owner",
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
        "name": "company",
        "label": "Company",
        "kind": "text"
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
  "Deal": {
    "name": "Deal",
    "label": "Deal",
    "labelPlural": "Deals",
    "route": "/app/deals",
    "icon": "kanban",
    "titleField": "title",
    "subtitleField": null,
    "statusField": "stage",
    "priceField": "value",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "contact",
        "header": "Contact",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "stage",
        "header": "Stage",
        "kind": "status"
      },
      {
        "key": "value",
        "header": "Value",
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
        "name": "contact",
        "label": "Contact",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "value",
        "label": "Value",
        "kind": "price"
      },
      {
        "name": "stage",
        "label": "Stage",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      },
      {
        "name": "closedAt",
        "label": "Closed At",
        "kind": "date"
      }
    ]
  },
  "Activity": {
    "name": "Activity",
    "label": "Activity",
    "labelPlural": "Activities",
    "route": "/app/activities",
    "icon": "list-checks",
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
        "key": "deal",
        "header": "Deal",
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
        "name": "deal",
        "label": "Deal",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "contact",
        "label": "Contact",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "done",
        "label": "Done",
        "kind": "bool"
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
  "Company": {
    "name": "Company",
    "label": "Company",
    "labelPlural": "Companies",
    "route": "/app/companies",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "notes",
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
        "key": "owner",
        "header": "Owner",
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
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "industry",
        "label": "Industry",
        "kind": "text"
      },
      {
        "name": "website",
        "label": "Website",
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
        "key": "owner",
        "header": "Owner",
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
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "company",
        "label": "Company",
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
        "name": "source",
        "label": "Source",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "estimatedValue",
        "label": "Estimated Value",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      },
      {
        "name": "convertedAt",
        "label": "Converted At",
        "kind": "date"
      }
    ]
  },
  "Note": {
    "name": "Note",
    "label": "Note",
    "labelPlural": "Notes",
    "route": "/app/notes",
    "icon": "layers",
    "titleField": "content",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "content",
        "header": "Content",
        "kind": "text"
      },
      {
        "key": "contact",
        "header": "Contact",
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
        "name": "contact",
        "label": "Contact",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "deal",
        "label": "Deal",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "NotificationLog": {
    "name": "NotificationLog",
    "label": "Notification Log",
    "labelPlural": "Notification Logs",
    "route": "/app/notification-logs",
    "icon": "layers",
    "titleField": "subject",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "subject",
        "header": "Subject",
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
        "name": "contact",
        "label": "Contact",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "channel",
        "label": "Channel",
        "kind": "text"
      },
      {
        "name": "subject",
        "label": "Subject",
        "kind": "text"
      },
      {
        "name": "body",
        "label": "Body",
        "kind": "text"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
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
  }
};
