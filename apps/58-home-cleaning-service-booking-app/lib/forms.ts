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
        "name": "basePrice",
        "label": "Base Price",
        "type": "number"
      }
    ]
  },
  "Booking": {
    "delegate": "booking",
    "fields": [
      {
        "name": "customerId",
        "label": "Customer",
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
      },
      {
        "name": "total",
        "label": "Total",
        "type": "number"
      }
    ]
  },
  "Address": {
    "delegate": "address",
    "fields": [
      {
        "name": "line",
        "label": "Line",
        "type": "text",
        "required": true
      }
    ]
  },
  "Cleaner": {
    "delegate": "cleaner",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "JobChecklist": {
    "delegate": "jobChecklist",
    "fields": [
      {
        "name": "item",
        "label": "Item",
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
