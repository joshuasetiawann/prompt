export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Result": {
    "delegate": "result",
    "fields": [
      {
        "name": "released",
        "label": "Released",
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
  "TestType": {
    "delegate": "testType",
    "fields": [
      {
        "name": "name",
        "label": "Name",
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
  "LabOrder": {
    "delegate": "labOrder",
    "fields": [
      {
        "name": "doctorId",
        "label": "Doctor",
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
      }
    ]
  }
};
