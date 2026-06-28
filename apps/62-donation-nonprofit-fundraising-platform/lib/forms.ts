export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Donation": {
    "delegate": "donation",
    "fields": [
      {
        "name": "donorId",
        "label": "Donor",
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
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "Campaign": {
    "delegate": "campaign",
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
  "RecurringPlan": {
    "delegate": "recurringPlan",
    "fields": [
      {
        "name": "donorId",
        "label": "Donor",
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
  "Receipt": {
    "delegate": "receipt",
    "fields": [
      {
        "name": "number",
        "label": "Number",
        "type": "text",
        "required": true
      }
    ]
  },
  "Payment": {
    "delegate": "payment",
    "fields": [
      {
        "name": "status",
        "label": "Status",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "pending",
            "label": "Pending"
          },
          {
            "value": "paid",
            "label": "Paid"
          },
          {
            "value": "processing",
            "label": "Processing"
          },
          {
            "value": "shipped",
            "label": "Shipped"
          },
          {
            "value": "completed",
            "label": "Completed"
          },
          {
            "value": "cancelled",
            "label": "Cancelled"
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
  "Organization": {
    "delegate": "organization",
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
