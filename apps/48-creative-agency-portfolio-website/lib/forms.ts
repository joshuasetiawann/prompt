export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Project": {
    "delegate": "project",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      },
      {
        "name": "summary",
        "label": "Summary",
        "type": "textarea"
      }
    ]
  },
  "Inquiry": {
    "delegate": "inquiry",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "message",
        "label": "Message",
        "type": "textarea"
      },
      {
        "name": "email",
        "label": "Email",
        "type": "email"
      }
    ]
  },
  "TeamMember": {
    "delegate": "teamMember",
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
