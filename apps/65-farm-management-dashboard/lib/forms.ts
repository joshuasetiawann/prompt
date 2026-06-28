export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Field": {
    "delegate": "field",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Crop": {
    "delegate": "crop",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "stage",
        "label": "Stage",
        "type": "select",
        "options": [
          {
            "value": "Lead",
            "label": "Lead"
          },
          {
            "value": "Qualified",
            "label": "Qualified"
          },
          {
            "value": "Proposal",
            "label": "Proposal"
          },
          {
            "value": "Negotiation",
            "label": "Negotiation"
          },
          {
            "value": "Won",
            "label": "Won"
          },
          {
            "value": "Lost",
            "label": "Lost"
          }
        ]
      }
    ]
  },
  "Input": {
    "delegate": "input",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Task": {
    "delegate": "task",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "InputUsage": {
    "delegate": "inputUsage",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "Livestock": {
    "delegate": "livestock",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  }
};
