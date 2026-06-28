export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Lead": {
    "delegate": "lead",
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
      },
      {
        "name": "value",
        "label": "Value",
        "type": "number"
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
      },
      {
        "name": "description",
        "label": "Description",
        "type": "textarea"
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "todo",
            "label": "Todo"
          },
          {
            "value": "in_progress",
            "label": "In Progress"
          },
          {
            "value": "done",
            "label": "Done"
          }
        ]
      }
    ]
  },
  "Activity": {
    "delegate": "activity",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      }
    ]
  },
  "Contact": {
    "delegate": "contact",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "email",
        "label": "Email",
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "tel"
      }
    ]
  },
  "FollowUp": {
    "delegate": "followUp",
    "fields": [
      {
        "name": "suggestion",
        "label": "Suggestion",
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
  "Draft": {
    "delegate": "draft",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      }
    ]
  }
};
