export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Case": {
    "delegate": "case",
    "fields": [
      {
        "name": "title",
        "label": "Title",
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
  "Client": {
    "delegate": "client",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "email",
        "label": "Email",
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "tel"
      }
    ]
  },
  "TimeEntry": {
    "delegate": "timeEntry",
    "fields": [
      {
        "name": "note",
        "label": "Note",
        "type": "text",
        "required": true
      }
    ]
  },
  "Deadline": {
    "delegate": "deadline",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "CaseDoc": {
    "delegate": "caseDoc",
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
