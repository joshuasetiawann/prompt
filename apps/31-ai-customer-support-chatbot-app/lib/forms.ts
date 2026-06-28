export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Article": {
    "delegate": "article",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Conversation": {
    "delegate": "conversation",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      }
    ]
  },
  "Message": {
    "delegate": "message",
    "fields": [
      {
        "name": "role",
        "label": "Role",
        "type": "text",
        "required": true
      },
      {
        "name": "content",
        "label": "Content",
        "type": "textarea"
      }
    ]
  },
  "UsageCounter": {
    "delegate": "usageCounter",
    "fields": [
      {
        "name": "period",
        "label": "Period",
        "type": "text",
        "required": true
      }
    ]
  }
};
