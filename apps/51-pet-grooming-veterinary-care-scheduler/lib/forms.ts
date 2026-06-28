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
        "name": "price",
        "label": "Price",
        "type": "number"
      }
    ]
  },
  "Pet": {
    "delegate": "pet",
    "fields": [
      {
        "name": "name",
        "label": "Name",
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
  "Provider": {
    "delegate": "provider",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Reminder": {
    "delegate": "reminder",
    "fields": [
      {
        "name": "kind",
        "label": "Kind",
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
  }
};
