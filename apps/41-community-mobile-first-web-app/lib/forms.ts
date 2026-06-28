export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Profile": {
    "delegate": "profile",
    "fields": [
      {
        "name": "bio",
        "label": "Bio",
        "type": "text",
        "required": true
      }
    ]
  },
  "Group": {
    "delegate": "group",
    "fields": [
      {
        "name": "name",
        "label": "Name",
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
  "Post": {
    "delegate": "post",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  },
  "Event": {
    "delegate": "event",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Comment": {
    "delegate": "comment",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  },
  "Reaction": {
    "delegate": "reaction",
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
