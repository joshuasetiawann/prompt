export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Consultation": {
    "delegate": "consultation",
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
  "Doctor": {
    "delegate": "doctor",
    "fields": [
      {
        "name": "specialty",
        "label": "Specialty",
        "type": "text",
        "required": true
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
  "VisitNote": {
    "delegate": "visitNote",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  },
  "Prescription": {
    "delegate": "prescription",
    "fields": [
      {
        "name": "items",
        "label": "Items",
        "type": "text",
        "required": true
      }
    ]
  }
};
