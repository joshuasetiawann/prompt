export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Link": {
    "delegate": "link",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "BioPage": {
    "delegate": "bioPage",
    "fields": [
      {
        "name": "username",
        "label": "Username",
        "type": "text",
        "required": true
      }
    ]
  },
  "SocialLink": {
    "delegate": "socialLink",
    "fields": [
      {
        "name": "platform",
        "label": "Platform",
        "type": "text",
        "required": true
      }
    ]
  },
  "Subscriber": {
    "delegate": "subscriber",
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
      }
    ]
  },
  "CustomTheme": {
    "delegate": "customTheme",
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
  "ClickEvent": {
    "delegate": "clickEvent",
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
