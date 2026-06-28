export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Scholarship": {
    "delegate": "scholarship",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "Application": {
    "delegate": "application",
    "fields": [
      {
        "name": "applicantId",
        "label": "Applicant",
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
  "Score": {
    "delegate": "score",
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
      },
      {
        "name": "value",
        "label": "Value",
        "type": "number"
      }
    ]
  },
  "Award": {
    "delegate": "award",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "AppDoc": {
    "delegate": "appDoc",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "ReviewAssignment": {
    "delegate": "reviewAssignment",
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
