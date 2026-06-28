export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Document": {
    "delegate": "document",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Analysis": {
    "delegate": "analysis",
    "fields": [
      {
        "name": "summary",
        "label": "Summary",
        "type": "text",
        "required": true
      },
      {
        "name": "summary",
        "label": "Summary",
        "type": "textarea"
      }
    ]
  },
  "UsageCredit": {
    "delegate": "usageCredit",
    "fields": [
      {
        "name": "period",
        "label": "Period",
        "type": "text",
        "required": true
      }
    ]
  },
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
        "name": "description",
        "label": "Description",
        "type": "textarea"
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
  "Annotation": {
    "delegate": "annotation",
    "fields": [
      {
        "name": "content",
        "label": "Content",
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
  "Entity": {
    "delegate": "entity",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  }
};
