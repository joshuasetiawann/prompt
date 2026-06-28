export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
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
  "Payee": {
    "delegate": "payee",
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
  "RecurringTransaction": {
    "delegate": "recurringTransaction",
    "fields": [
      {
        "name": "name",
        "label": "Name",
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
  "SavingsGoal": {
    "delegate": "savingsGoal",
    "fields": [
      {
        "name": "name",
        "label": "Name",
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
  "Transaction": {
    "delegate": "transaction",
    "fields": [
      {
        "name": "type",
        "label": "Type",
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
  "Budget": {
    "delegate": "budget",
    "fields": [
      {
        "name": "month",
        "label": "Month",
        "type": "text",
        "required": true
      }
    ]
  }
};
