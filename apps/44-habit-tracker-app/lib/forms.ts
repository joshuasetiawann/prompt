export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Habit": {
    "delegate": "habit",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Goal": {
    "delegate": "goal",
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
      }
    ]
  },
  "Milestone": {
    "delegate": "milestone",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "description",
        "label": "Description",
        "type": "textarea"
      }
    ]
  },
  "Reminder": {
    "delegate": "reminder",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      },
      {
        "name": "message",
        "label": "Message",
        "type": "textarea"
      }
    ]
  },
  "JournalEntry": {
    "delegate": "journalEntry",
    "fields": [
      {
        "name": "mood",
        "label": "Mood",
        "type": "text",
        "required": true
      },
      {
        "name": "content",
        "label": "Content",
        "type": "textarea"
      }
    ]
  },
  "CheckIn": {
    "delegate": "checkIn",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  }
};
