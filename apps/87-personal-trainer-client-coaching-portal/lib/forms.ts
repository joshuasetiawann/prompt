export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Client": {
    "delegate": "client",
    "fields": [
      {
        "name": "trainerId",
        "label": "Trainer",
        "type": "text",
        "required": true
      }
    ]
  },
  "Program": {
    "delegate": "program",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "CheckIn": {
    "delegate": "checkIn",
    "fields": [
      {
        "name": "weight",
        "label": "Weight",
        "type": "text",
        "required": true
      }
    ]
  },
  "WorkoutLog": {
    "delegate": "workoutLog",
    "fields": [
      {
        "name": "notes",
        "label": "Notes",
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
  "Message": {
    "delegate": "message",
    "fields": [
      {
        "name": "fromId",
        "label": "From",
        "type": "text",
        "required": true
      }
    ]
  }
};
