import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "41",
  slug: "community-mobile-first-web-app",
  appName: "Hangout Community Mobile-First Web App",
  tagline: "Let members post in a feed, join groups, attend events, and connect via profiles, optimized for mobile",
  category: "Community & Social",
  kind: "dashboard",
  currency: "USD",
  primary: "Profile",
};

export const THEME: Theme = {
  "brand": "#f97362",
  "brandFg": "#ffffff",
  "brandSoft": "#fef1ef",
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
    "href": "/app/profiles",
    "label": "Profiles",
    "icon": "file-text"
  },
  {
    "href": "/app/groups",
    "label": "Groups",
    "icon": "layers"
  },
  {
    "href": "/app/posts",
    "label": "Posts",
    "icon": "megaphone"
  },
  {
    "href": "/app/events",
    "label": "Events",
    "icon": "ticket"
  },
  {
    "href": "/app/comments",
    "label": "Comments",
    "icon": "layers"
  },
  {
    "href": "/app/reactions",
    "label": "Reactions",
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
    "label": "Profiles",
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
export const MANAGED: string[] = ["Profile","Group","Post","Event","Comment","Reaction"];
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
  "Profile": {
    "name": "Profile",
    "label": "Profile",
    "labelPlural": "Profiles",
    "route": "/app/profiles",
    "icon": "file-text",
    "titleField": "bio",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "bio",
        "header": "Bio",
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
        "name": "bio",
        "label": "Bio",
        "kind": "text"
      },
      {
        "name": "avatar",
        "label": "Avatar",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Group": {
    "name": "Group",
    "label": "Group",
    "labelPlural": "Groups",
    "route": "/app/groups",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "description",
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
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "GroupMember": {
    "name": "GroupMember",
    "label": "Group Member",
    "labelPlural": "Group Members",
    "route": "/app/group-members",
    "icon": "badge-check",
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
        "key": "group",
        "header": "Group",
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
        "name": "group",
        "label": "Group",
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Post": {
    "name": "Post",
    "label": "Post",
    "labelPlural": "Posts",
    "route": "/app/posts",
    "icon": "megaphone",
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
        "key": "author",
        "header": "Author",
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
        "name": "author",
        "label": "Author",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "group",
        "label": "Group",
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
  "Comment": {
    "name": "Comment",
    "label": "Comment",
    "labelPlural": "Comments",
    "route": "/app/comments",
    "icon": "layers",
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
        "key": "post",
        "header": "Post",
        "kind": "relation",
        "titleField": "body"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "post",
        "label": "Post",
        "kind": "relation",
        "titleField": "body"
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
  "Reaction": {
    "name": "Reaction",
    "label": "Reaction",
    "labelPlural": "Reactions",
    "route": "/app/reactions",
    "icon": "layers",
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
        "key": "post",
        "header": "Post",
        "kind": "relation",
        "titleField": "body"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "post",
        "label": "Post",
        "kind": "relation",
        "titleField": "body"
      },
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
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Event": {
    "name": "Event",
    "label": "Event",
    "labelPlural": "Events",
    "route": "/app/events",
    "icon": "ticket",
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
        "key": "group",
        "header": "Group",
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
        "name": "group",
        "label": "Group",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "datetime",
        "label": "Datetime",
        "kind": "date"
      },
      {
        "name": "location",
        "label": "Location",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "RSVP": {
    "name": "RSVP",
    "label": "RSVP",
    "labelPlural": "RSVPs",
    "route": "/app/rsvps",
    "icon": "layers",
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
        "key": "event",
        "header": "Event",
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
        "name": "event",
        "label": "Event",
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
  "Notification": {
    "name": "Notification",
    "label": "Notification",
    "labelPlural": "Notifications",
    "route": "/app/notifications",
    "icon": "layers",
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
        "name": "type",
        "label": "Type",
        "kind": "text"
      },
      {
        "name": "refId",
        "label": "Ref",
        "kind": "text"
      },
      {
        "name": "read",
        "label": "Read",
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
