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
  "Category": {
    "delegate": "category",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Message": {
    "delegate": "message",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  },
  "SlaPolicy": {
    "delegate": "slaPolicy",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "priority",
        "label": "Priority",
        "type": "select",
        "options": [
          {
            "value": "low",
            "label": "Low"
          },
          {
            "value": "medium",
            "label": "Medium"
          },
          {
            "value": "high",
            "label": "High"
          },
          {
            "value": "urgent",
            "label": "Urgent"
          }
        ]
      }
    ]
  },
  "CannedResponse": {
    "delegate": "cannedResponse",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Attachment": {
    "delegate": "attachment",
    "fields": [
      {
        "name": "fileName",
        "label": "File Name",
        "type": "text",
        "required": true
      },
      {
        "name": "messageId",
        "label": "Message",
        "type": "textarea"
      }
    ]
  }
};
