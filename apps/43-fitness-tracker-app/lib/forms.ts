export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Exercise": {
    "delegate": "exercise",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Routine": {
    "delegate": "routine",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Workout": {
    "delegate": "workout",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "SetLog": {
    "delegate": "setLog",
    "fields": [
      {
        "name": "setNumber",
        "label": "Set Number",
        "type": "text",
        "required": true
      }
    ]
  },
  "Goal": {
    "delegate": "goal",
    "fields": [
      {
        "name": "metric",
        "label": "Metric",
        "type": "text",
        "required": true
      }
    ]
  }
};
