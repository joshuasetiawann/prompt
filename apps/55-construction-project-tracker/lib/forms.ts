export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Project": {
    "delegate": "project",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "active",
            "label": "Active"
          },
          {
            "value": "draft",
            "label": "Draft"
          },
          {
            "value": "archived",
            "label": "Archived"
          }
        ]
      },
      {
        "name": "budget",
        "label": "Budget",
        "type": "number"
      }
    ]
  },
  "DailyLog": {
    "delegate": "dailyLog",
    "fields": [
      {
        "name": "weather",
        "label": "Weather",
        "type": "text",
        "required": true
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "Crew": {
    "delegate": "crew",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Phase": {
    "delegate": "phase",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Material": {
    "delegate": "material",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Assignment": {
    "delegate": "assignment",
    "fields": [
      {
        "name": "role",
        "label": "Role",
        "type": "text",
        "required": true
      }
    ]
  }
};
