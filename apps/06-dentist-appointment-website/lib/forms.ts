export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Service": {
    "delegate": "service",
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
        "name": "price",
        "label": "Price",
        "type": "number"
      }
    ]
  },
  "Appointment": {
    "delegate": "appointment",
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
            "value": "confirmed",
            "label": "Confirmed"
          },
          {
            "value": "completed",
            "label": "Completed"
          },
          {
            "value": "cancelled",
            "label": "Cancelled"
          },
          {
            "value": "no-show",
            "label": "No-Show"
          }
        ]
      }
    ]
  },
  "Patient": {
    "delegate": "patient",
    "fields": [
      {
        "name": "fullName",
        "label": "Full Name",
        "type": "text",
        "required": true
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "tel"
      }
    ]
  },
  "Dentist": {
    "delegate": "dentist",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Payment": {
    "delegate": "payment",
    "fields": [
      {
        "name": "method",
        "label": "Method",
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
  "Reminder": {
    "delegate": "reminder",
    "fields": [
      {
        "name": "channel",
        "label": "Channel",
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
  }
};
