import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "25",
  slug: "approval-workflow-app",
  appName: "ApproveIt Approval Workflow App",
  tagline: "Let users submit requests that route to approvers step by step, with full status and audit logging",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "WorkflowType",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
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
    "href": "/app/workflow-types",
    "label": "Workflow Types",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/requests",
    "label": "Requests",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/approval-steps",
    "label": "Approval Steps",
    "icon": "clipboard-check"
  },
  {
    "href": "/app/attachments",
    "label": "Attachments",
    "icon": "layers"
  },
  {
    "href": "/app/comments",
    "label": "Comments",
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
    "label": "Workflow Types",
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
export const MANAGED: string[] = ["WorkflowType","Request","ApprovalStep","Attachment","Comment"];
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
  "WorkflowType": {
    "name": "WorkflowType",
    "label": "Workflow Type",
    "labelPlural": "Workflow Types",
    "route": "/app/workflow-types",
    "icon": "clipboard-check",
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
        "key": "steps",
        "header": "Steps",
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
        "name": "steps",
        "label": "Steps",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Request": {
    "name": "Request",
    "label": "Request",
    "labelPlural": "Requests",
    "route": "/app/requests",
    "icon": "clipboard-check",
    "titleField": "typeId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "typeId",
        "header": "Type",
        "kind": "text"
      },
      {
        "key": "requester",
        "header": "Requester",
        "kind": "relation",
        "titleField": "name"
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
        "name": "typeId",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "requester",
        "label": "Requester",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "details",
        "label": "Details",
        "kind": "text"
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
  },
  "ApprovalStep": {
    "name": "ApprovalStep",
    "label": "Approval Step",
    "labelPlural": "Approval Steps",
    "route": "/app/approval-steps",
    "icon": "clipboard-check",
    "titleField": "stepOrder",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "stepOrder",
        "header": "Step Order",
        "kind": "text"
      },
      {
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "typeId"
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
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "name": "stepOrder",
        "label": "Step Order",
        "kind": "text"
      },
      {
        "name": "approver",
        "label": "Approver",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "comment",
        "label": "Comment",
        "kind": "text"
      },
      {
        "name": "decidedAt",
        "label": "Decided At",
        "kind": "date"
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
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "typeId"
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
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "name": "uploadedBy",
        "label": "Uploaded By",
        "kind": "relation",
        "titleField": "name"
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
        "name": "fileType",
        "label": "File Type",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Comment": {
    "name": "Comment",
    "label": "Comment",
    "labelPlural": "Comments",
    "route": "/app/comments",
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
        "key": "request",
        "header": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "name": "author",
        "label": "Author",
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
  "Notification": {
    "name": "Notification",
    "label": "Notification",
    "labelPlural": "Notifications",
    "route": "/app/notifications",
    "icon": "layers",
    "titleField": "channel",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "channel",
        "header": "Channel",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "request",
        "label": "Request",
        "kind": "relation",
        "titleField": "typeId"
      },
      {
        "name": "channel",
        "label": "Channel",
        "kind": "text"
      },
      {
        "name": "message",
        "label": "Message",
        "kind": "number"
      },
      {
        "name": "isRead",
        "label": "Is Read",
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
