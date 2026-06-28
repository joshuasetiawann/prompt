import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "26",
  slug: "customer-complaint-ticketing-system",
  appName: "HelpTrack Customer Complaint Ticketing System",
  tagline: "Let customers submit and track tickets while agents triage, reply, and resolve them",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Ticket",
};

export const THEME: Theme = {
  "brand": "#334155",
  "brandFg": "#ffffff",
  "brandSoft": "#ebecee",
  "accent": "#ffffff",
  "neutral": "neutral",
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
    "href": "/app/tickets",
    "label": "Tickets",
    "icon": "ticket"
  },
  {
    "href": "/app/categories",
    "label": "Categories",
    "icon": "layers"
  },
  {
    "href": "/app/messages",
    "label": "Messages",
    "icon": "message"
  },
  {
    "href": "/app/sla-policies",
    "label": "Sla Policies",
    "icon": "layers"
  },
  {
    "href": "/app/canned-responses",
    "label": "Canned Responses",
    "icon": "layers"
  },
  {
    "href": "/app/attachments",
    "label": "Attachments",
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
export const MANAGED: string[] = ["Ticket","Category","Message","SlaPolicy","CannedResponse","Attachment"];
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
  "Ticket": {
    "name": "Ticket",
    "label": "Ticket",
    "labelPlural": "Tickets",
    "route": "/app/tickets",
    "icon": "ticket",
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
        "key": "category",
        "header": "Category",
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
        "name": "customerId",
        "label": "Customer",
        "kind": "text"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "subject",
        "label": "Subject",
        "kind": "text"
      },
      {
        "name": "priority",
        "label": "Priority",
        "kind": "status"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "assignee",
        "label": "Assignee",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      },
      {
        "name": "dueAt",
        "label": "Due At",
        "kind": "date"
      }
    ]
  },
  "Message": {
    "name": "Message",
    "label": "Message",
    "labelPlural": "Messages",
    "route": "/app/messages",
    "icon": "message",
    "titleField": "body",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "body",
        "header": "Body",
        "kind": "text"
      },
      {
        "key": "ticket",
        "header": "Ticket",
        "kind": "relation",
        "titleField": "subject"
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
        "titleField": "subject"
      },
      {
        "name": "author",
        "label": "Author",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "body",
        "label": "Body",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "AuditLog": {
    "name": "AuditLog",
    "label": "Audit Log",
    "labelPlural": "Audit Logs",
    "route": "/app/audit-logs",
    "icon": "layers",
    "titleField": "action",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "action",
        "header": "Action",
        "kind": "text"
      },
      {
        "key": "ticket",
        "header": "Ticket",
        "kind": "relation",
        "titleField": "subject"
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
        "titleField": "subject"
      },
      {
        "name": "action",
        "label": "Action",
        "kind": "text"
      },
      {
        "name": "actorId",
        "label": "Actor",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "CannedResponse": {
    "name": "CannedResponse",
    "label": "Canned Response",
    "labelPlural": "Canned Responses",
    "route": "/app/canned-responses",
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
        "key": "category",
        "header": "Category",
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
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "body",
        "label": "Body",
        "kind": "text"
      },
      {
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "createdBy",
        "label": "Created By",
        "kind": "relation",
        "titleField": "name"
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
  "Attachment": {
    "name": "Attachment",
    "label": "Attachment",
    "labelPlural": "Attachments",
    "route": "/app/attachments",
    "icon": "layers",
    "titleField": "fileName",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "fileName",
        "header": "File Name",
        "kind": "text"
      },
      {
        "key": "ticket",
        "header": "Ticket",
        "kind": "relation",
        "titleField": "subject"
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
        "titleField": "subject"
      },
      {
        "name": "message",
        "label": "Message",
        "kind": "relation",
        "titleField": "body"
      },
      {
        "name": "fileName",
        "label": "File Name",
        "kind": "text"
      },
      {
        "name": "fileUrl",
        "label": "File Url",
        "kind": "text"
      },
      {
        "name": "uploadedBy",
        "label": "Uploaded By",
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
  "SlaPolicy": {
    "name": "SlaPolicy",
    "label": "Sla Policy",
    "labelPlural": "Sla Policies",
    "route": "/app/sla-policies",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": null,
    "statusField": "priority",
    "priceField": null,
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
        "key": "priority",
        "header": "Priority",
        "kind": "status"
      },
      {
        "key": "responseMinutes",
        "header": "Response Minutes",
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
        "name": "category",
        "label": "Category",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "priority",
        "label": "Priority",
        "kind": "status"
      },
      {
        "name": "responseMinutes",
        "label": "Response Minutes",
        "kind": "number"
      },
      {
        "name": "resolutionMinutes",
        "label": "Resolution Minutes",
        "kind": "number"
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
