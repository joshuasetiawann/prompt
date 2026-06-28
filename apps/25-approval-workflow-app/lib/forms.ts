export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "WorkflowType": {
    "delegate": "workflowType",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Request": {
    "delegate": "request",
    "fields": [
      {
        "name": "typeId",
        "label": "Type",
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
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "ApprovalStep": {
    "delegate": "approvalStep",
    "fields": [
      {
        "name": "stepOrder",
        "label": "Step Order",
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
  "Attachment": {
    "delegate": "attachment",
    "fields": [
      {
        "name": "fileName",
        "label": "File Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Comment": {
    "delegate": "comment",
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
  }
};
