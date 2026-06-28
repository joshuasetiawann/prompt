export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Book": {
    "delegate": "book",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Member": {
    "delegate": "member",
    "fields": [
      {
        "name": "limit",
        "label": "Limit",
        "type": "text",
        "required": true
      }
    ]
  },
  "Loan": {
    "delegate": "loan",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "Copy": {
    "delegate": "copy",
    "fields": [
      {
        "name": "barcode",
        "label": "Barcode",
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
  "Hold": {
    "delegate": "hold",
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
  "Fine": {
    "delegate": "fine",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  }
};
