export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Recipe": {
    "delegate": "recipe",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Collection": {
    "delegate": "collection",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Rating": {
    "delegate": "rating",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
      },
      {
        "name": "value",
        "label": "Value",
        "type": "number"
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
  }
};
