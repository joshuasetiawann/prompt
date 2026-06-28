export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Opportunity": {
    "delegate": "opportunity",
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
      }
    ]
  },
  "Shift": {
    "delegate": "shift",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "Signup": {
    "delegate": "signup",
    "fields": [
      {
        "name": "volunteerId",
        "label": "Volunteer",
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
  "Attendance": {
    "delegate": "attendance",
    "fields": [
      {
        "name": "confirmed",
        "label": "Confirmed",
        "type": "text",
        "required": true
      }
    ]
  },
  "Organization": {
    "delegate": "organization",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  }
};
