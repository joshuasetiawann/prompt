import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "63",
  slug: "community-organization-portal",
  appName: "Congregate Community Organization Portal",
  tagline: "Give a community organization one place for members, events, groups, announcements, and volunteering",
  category: "Community & Organizations",
  kind: "dashboard",
  currency: "USD",
  primary: "Event",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
  "accent": "#d97706",
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
    "href": "/app/events",
    "label": "Events",
    "icon": "ticket"
  },
  {
    "href": "/app/members",
    "label": "Members",
    "icon": "badge-check"
  },
  {
    "href": "/app/groups",
    "label": "Groups",
    "icon": "layers"
  },
  {
    "href": "/app/volunteer-slots",
    "label": "Volunteer Slots",
    "icon": "layers"
  },
  {
    "href": "/app/announcements",
    "label": "Announcements",
    "icon": "layers"
  },
  {
    "href": "/app/rsvps",
    "label": "RSVPs",
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
    "label": "Events",
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
export const MANAGED: string[] = ["Event","Member","Group","VolunteerSlot","Announcement","RSVP"];
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
  "Member": {
    "name": "Member",
    "label": "Member",
    "labelPlural": "Members",
    "route": "/app/members",
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
        "name": "joinedAt",
        "label": "Joined At",
        "kind": "date"
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
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "id"
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
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "id"
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
  "Announcement": {
    "name": "Announcement",
    "label": "Announcement",
    "labelPlural": "Announcements",
    "route": "/app/announcements",
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
        "name": "scope",
        "label": "Scope",
        "kind": "text"
      },
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
  "VolunteerSlot": {
    "name": "VolunteerSlot",
    "label": "Volunteer Slot",
    "labelPlural": "Volunteer Slots",
    "route": "/app/volunteer-slots",
    "icon": "layers",
    "titleField": "role",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "role",
        "header": "Role",
        "kind": "text"
      },
      {
        "key": "event",
        "header": "Event",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "capacity",
        "header": "Capacity",
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
        "name": "event",
        "label": "Event",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "role",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "capacity",
        "label": "Capacity",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Signup": {
    "name": "Signup",
    "label": "Signup",
    "labelPlural": "Signups",
    "route": "/app/signups",
    "icon": "layers",
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
        "key": "volunteerSlot",
        "header": "Volunteer Slot",
        "kind": "relation",
        "titleField": "role"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "volunteerSlot",
        "label": "Volunteer Slot",
        "kind": "relation",
        "titleField": "role"
      },
      {
        "name": "member",
        "label": "Member",
        "kind": "relation",
        "titleField": "id"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
