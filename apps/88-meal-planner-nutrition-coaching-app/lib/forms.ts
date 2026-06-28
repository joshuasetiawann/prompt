export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Client": {
    "delegate": "client",
    "fields": [
      {
        "name": "coachId",
        "label": "Coach",
        "type": "text",
        "required": true
      }
    ]
  },
  "Recipe": {
    "delegate": "recipe",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "MealPlan": {
    "delegate": "mealPlan",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "MealLog": {
    "delegate": "mealLog",
    "fields": [
      {
        "name": "mealType",
        "label": "Meal Type",
        "type": "text",
        "required": true
      }
    ]
  },
  "PlanMeal": {
    "delegate": "planMeal",
    "fields": [
      {
        "name": "day",
        "label": "Day",
        "type": "text",
        "required": true
      }
    ]
  },
  "Feedback": {
    "delegate": "feedback",
    "fields": [
      {
        "name": "coachId",
        "label": "Coach",
        "type": "text",
        "required": true
      }
    ]
  }
};
