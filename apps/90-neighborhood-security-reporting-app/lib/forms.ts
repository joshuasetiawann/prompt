export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Area": {
    "delegate": "area",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Incident": {
    "delegate": "incident",
    "fields": [
      {
        "name": "reporterId",
        "label": "Reporter",
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
  "Update": {
    "delegate": "update",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  },
  "IncidentPhoto": {
    "delegate": "incidentPhoto",
    "fields": [
      {
        "name": "url",
        "label": "Url",
        "type": "text",
        "required": true
      }
    ]
  },
  "Follow": {
    "delegate": "follow",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  }
};
