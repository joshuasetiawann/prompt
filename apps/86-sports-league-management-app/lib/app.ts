import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "86",
  slug: "sports-league-management-app",
  appName: "LeagueHQ Sports League Management App",
  tagline: "Organize leagues with teams and players, schedule fixtures, record scores, and compute standings",
  category: "Sports League Management",
  kind: "dashboard",
  currency: "USD",
  primary: "League",
};

export const THEME: Theme = {
  "brand": "#16a34a",
  "brandFg": "#ffffff",
  "brandSoft": "#e8f6ed",
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
    "href": "/app/leagues",
    "label": "Leagues",
    "icon": "layers"
  },
  {
    "href": "/app/teams",
    "label": "Teams",
    "icon": "briefcase"
  },
  {
    "href": "/app/fixtures",
    "label": "Fixtures",
    "icon": "layers"
  },
  {
    "href": "/app/standings",
    "label": "Standings",
    "icon": "layers"
  },
  {
    "href": "/app/players",
    "label": "Players",
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
    "label": "Leagues",
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
export const MANAGED: string[] = ["League","Team","Fixture","Standing","Player"];
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
  "League": {
    "name": "League",
    "label": "League",
    "labelPlural": "Leagues",
    "route": "/app/leagues",
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
        "name": "season",
        "label": "Season",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Team": {
    "name": "Team",
    "label": "Team",
    "labelPlural": "Teams",
    "route": "/app/teams",
    "icon": "briefcase",
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
        "key": "league",
        "header": "League",
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
        "name": "league",
        "label": "League",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "manager",
        "label": "Manager",
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
  "Player": {
    "name": "Player",
    "label": "Player",
    "labelPlural": "Players",
    "route": "/app/players",
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
        "key": "team",
        "header": "Team",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "position",
        "header": "Position",
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
        "name": "team",
        "label": "Team",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "position",
        "label": "Position",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Fixture": {
    "name": "Fixture",
    "label": "Fixture",
    "labelPlural": "Fixtures",
    "route": "/app/fixtures",
    "icon": "layers",
    "titleField": "homeTeamId",
    "subtitleField": null,
    "statusField": "status",
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "homeTeamId",
        "header": "Home Team",
        "kind": "text"
      },
      {
        "key": "league",
        "header": "League",
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
        "name": "league",
        "label": "League",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "homeTeamId",
        "label": "Home Team",
        "kind": "text"
      },
      {
        "name": "awayTeamId",
        "label": "Away Team",
        "kind": "text"
      },
      {
        "name": "datetime",
        "label": "Datetime",
        "kind": "date"
      },
      {
        "name": "homeScore",
        "label": "Home Score",
        "kind": "text"
      },
      {
        "name": "awayScore",
        "label": "Away Score",
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
  "Standing": {
    "name": "Standing",
    "label": "Standing",
    "labelPlural": "Standings",
    "route": "/app/standings",
    "icon": "layers",
    "titleField": "played",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "played",
        "header": "Played",
        "kind": "text"
      },
      {
        "key": "league",
        "header": "League",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "points",
        "header": "Points",
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
        "name": "league",
        "label": "League",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "team",
        "label": "Team",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "played",
        "label": "Played",
        "kind": "text"
      },
      {
        "name": "won",
        "label": "Won",
        "kind": "text"
      },
      {
        "name": "drawn",
        "label": "Drawn",
        "kind": "text"
      },
      {
        "name": "lost",
        "label": "Lost",
        "kind": "text"
      },
      {
        "name": "points",
        "label": "Points",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
