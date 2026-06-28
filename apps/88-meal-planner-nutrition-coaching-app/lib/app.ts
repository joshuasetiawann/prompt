import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "88",
  slug: "meal-planner-nutrition-coaching-app",
  appName: "NutriPlan Meal Planner & Nutrition Coaching App",
  tagline: "Let coaches build meal plans with targets and let clients log meals while coaches review progress",
  category: "Nutrition & Coaching",
  kind: "dashboard",
  currency: "USD",
  primary: "Client",
};

export const THEME: Theme = {
  "brand": "#ea580c",
  "brandFg": "#ffffff",
  "brandSoft": "#fdeee7",
  "accent": "#16a34a",
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
    "href": "/app/clients",
    "label": "Clients",
    "icon": "users"
  },
  {
    "href": "/app/recipes",
    "label": "Recipes",
    "icon": "layers"
  },
  {
    "href": "/app/meal-plans",
    "label": "Meal Plans",
    "icon": "layers"
  },
  {
    "href": "/app/meal-logs",
    "label": "Meal Logs",
    "icon": "layers"
  },
  {
    "href": "/app/plan-meals",
    "label": "Plan Meals",
    "icon": "layers"
  },
  {
    "href": "/app/feedbacks",
    "label": "Feedbacks",
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
    "label": "Clients",
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
export const MANAGED: string[] = ["Client","Recipe","MealPlan","MealLog","PlanMeal","Feedback"];
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
  "Client": {
    "name": "Client",
    "label": "Client",
    "labelPlural": "Clients",
    "route": "/app/clients",
    "icon": "users",
    "titleField": "coachId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "coachId",
        "header": "Coach",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "targetCalories",
        "header": "Target Calories",
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
        "name": "coachId",
        "label": "Coach",
        "kind": "text"
      },
      {
        "name": "targetCalories",
        "label": "Target Calories",
        "kind": "number"
      },
      {
        "name": "targetMacros",
        "label": "Target Macros",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "MealPlan": {
    "name": "MealPlan",
    "label": "Meal Plan",
    "labelPlural": "Meal Plans",
    "route": "/app/meal-plans",
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
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "startDate",
        "label": "Start Date",
        "kind": "date"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "PlanMeal": {
    "name": "PlanMeal",
    "label": "Plan Meal",
    "labelPlural": "Plan Meals",
    "route": "/app/plan-meals",
    "icon": "layers",
    "titleField": "day",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "day",
        "header": "Day",
        "kind": "text"
      },
      {
        "key": "mealPlan",
        "header": "Meal Plan",
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
        "name": "mealPlan",
        "label": "Meal Plan",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "day",
        "label": "Day",
        "kind": "text"
      },
      {
        "name": "mealType",
        "label": "Meal Type",
        "kind": "text"
      },
      {
        "name": "recipe",
        "label": "Recipe",
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
  "Recipe": {
    "name": "Recipe",
    "label": "Recipe",
    "labelPlural": "Recipes",
    "route": "/app/recipes",
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
        "key": "calories",
        "header": "Calories",
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
        "name": "calories",
        "label": "Calories",
        "kind": "number"
      },
      {
        "name": "macros",
        "label": "Macros",
        "kind": "text"
      },
      {
        "name": "ingredients",
        "label": "Ingredients",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "MealLog": {
    "name": "MealLog",
    "label": "Meal Log",
    "labelPlural": "Meal Logs",
    "route": "/app/meal-logs",
    "icon": "layers",
    "titleField": "mealType",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "mealType",
        "header": "Meal Type",
        "kind": "text"
      },
      {
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "key": "calories",
        "header": "Calories",
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
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "name": "date",
        "label": "Date",
        "kind": "date"
      },
      {
        "name": "mealType",
        "label": "Meal Type",
        "kind": "text"
      },
      {
        "name": "recipe",
        "label": "Recipe",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "calories",
        "label": "Calories",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Feedback": {
    "name": "Feedback",
    "label": "Feedback",
    "labelPlural": "Feedbacks",
    "route": "/app/feedbacks",
    "icon": "layers",
    "titleField": "coachId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "coachId",
        "header": "Coach",
        "kind": "text"
      },
      {
        "key": "client",
        "header": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "client",
        "label": "Client",
        "kind": "relation",
        "titleField": "coachId"
      },
      {
        "name": "coachId",
        "label": "Coach",
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
  }
};
