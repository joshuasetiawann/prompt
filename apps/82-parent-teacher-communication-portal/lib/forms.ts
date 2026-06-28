export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
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
  "ClassRoom": {
    "delegate": "classRoom",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Student": {
    "delegate": "student",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Message": {
    "delegate": "message",
    "fields": [
      {
        "name": "fromId",
        "label": "From",
        "type": "text",
        "required": true
      }
    ]
  },
  "Announcement": {
    "delegate": "announcement",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Note": {
    "delegate": "note",
    "fields": [
      {
        "name": "kind",
        "label": "Kind",
        "type": "text",
        "required": true
      }
    ]
  }
};
