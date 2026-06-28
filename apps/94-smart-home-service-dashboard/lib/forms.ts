export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Room": {
    "delegate": "room",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Device": {
    "delegate": "device",
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
  "Schedule": {
    "delegate": "schedule",
    "fields": [
      {
        "name": "action",
        "label": "Action",
        "type": "text",
        "required": true
      }
    ]
  },
  "EnergyReading": {
    "delegate": "energyReading",
    "fields": [
      {
        "name": "watts",
        "label": "Watts",
        "type": "text",
        "required": true
      }
    ]
  },
  "Scene": {
    "delegate": "scene",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Membership": {
    "delegate": "membership",
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
