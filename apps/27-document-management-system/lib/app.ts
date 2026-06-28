import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "27",
  slug: "document-management-system",
  appName: "DocVault Document Management System",
  tagline: "Store and organize documents in folders with versioning, tagging, permissions, and search",
  category: "Business & Operations",
  kind: "dashboard",
  currency: "USD",
  primary: "Document",
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
    "href": "/app/documents",
    "label": "Documents",
    "icon": "file-text"
  },
  {
    "href": "/app/folders",
    "label": "Folders",
    "icon": "layers"
  },
  {
    "href": "/app/document-versions",
    "label": "Document Versions",
    "icon": "file-text"
  },
  {
    "href": "/app/permissions",
    "label": "Permissions",
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
    "label": "Documents",
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
export const MANAGED: string[] = ["Document","Folder","DocumentVersion","Permission"];
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
  "Folder": {
    "name": "Folder",
    "label": "Folder",
    "labelPlural": "Folders",
    "route": "/app/folders",
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
        "name": "parentId",
        "label": "Parent",
        "kind": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "owner",
        "label": "Owner",
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
  "Document": {
    "name": "Document",
    "label": "Document",
    "labelPlural": "Documents",
    "route": "/app/documents",
    "icon": "file-text",
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
        "key": "folder",
        "header": "Folder",
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
        "name": "folder",
        "label": "Folder",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "currentVersionId",
        "label": "Current Version",
        "kind": "text"
      },
      {
        "name": "owner",
        "label": "Owner",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "tags",
        "label": "Tags",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "DocumentVersion": {
    "name": "DocumentVersion",
    "label": "Document Version",
    "labelPlural": "Document Versions",
    "route": "/app/document-versions",
    "icon": "file-text",
    "titleField": "version",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "version",
        "header": "Version",
        "kind": "text"
      },
      {
        "key": "document",
        "header": "Document",
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
        "name": "document",
        "label": "Document",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "version",
        "label": "Version",
        "kind": "text"
      },
      {
        "name": "fileMeta",
        "label": "File Meta",
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
  "Permission": {
    "name": "Permission",
    "label": "Permission",
    "labelPlural": "Permissions",
    "route": "/app/permissions",
    "icon": "layers",
    "titleField": "resourceType",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "resourceType",
        "header": "Resource Type",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "level",
        "header": "Level",
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
        "name": "resourceType",
        "label": "Resource Type",
        "kind": "text"
      },
      {
        "name": "resourceId",
        "label": "Resource",
        "kind": "text"
      },
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "level",
        "label": "Level",
        "kind": "number"
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
    "titleField": "resourceType",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "resourceType",
        "header": "Resource Type",
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
        "name": "resourceType",
        "label": "Resource Type",
        "kind": "text"
      },
      {
        "name": "resourceId",
        "label": "Resource",
        "kind": "text"
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
  }
};
