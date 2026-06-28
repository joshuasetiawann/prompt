export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Ticket": {
    "delegate": "ticket",
    "fields": [
      {
        "name": "subject",
        "label": "Subject",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "open",
            "label": "Open"
          },
          {
            "value": "pending",
            "label": "Pending"
          },
          {
            "value": "in_progress",
            "label": "In Progress"
          },
          {
            "value": "resolved",
            "label": "Resolved"
          },
          {
            "value": "closed",
            "label": "Closed"
          }
        ]
      }
    ]
  },
  "Location": {
    "delegate": "location",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Task": {
    "delegate": "task",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "KPI": {
    "delegate": "kPI",
    "fields": [
      {
        "name": "metric",
        "label": "Metric",
        "type": "text",
        "required": true
      },
      {
        "name": "value",
        "label": "Value",
        "type": "number"
      }
    ]
  },
  "TaskCompletion": {
    "delegate": "taskCompletion",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "Compliance": {
    "delegate": "compliance",
    "fields": [
      {
        "name": "checklist",
        "label": "Checklist",
        "type": "text",
        "required": true
      }
    ]
  }
};
