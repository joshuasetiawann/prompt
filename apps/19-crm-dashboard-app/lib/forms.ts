export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
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
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
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
  "Deal": {
    "delegate": "deal",
    "fields": [
      {
        "name": "title",
        "label": "Title",
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
      },
      {
        "name": "value",
        "label": "Value",
        "type": "number"
      }
    ]
  },
  "Company": {
    "delegate": "company",
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
        "name": "phone",
        "label": "Phone",
        "type": "tel"
      }
    ]
  },
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
  "NotificationLog": {
    "delegate": "notificationLog",
    "fields": [
      {
        "name": "subject",
        "label": "Subject",
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
