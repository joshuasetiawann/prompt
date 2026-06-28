export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Document": {
    "delegate": "document",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Folder": {
    "delegate": "folder",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "DocumentVersion": {
    "delegate": "documentVersion",
    "fields": [
      {
        "name": "version",
        "label": "Version",
        "type": "text",
        "required": true
      }
    ]
  },
  "Permission": {
    "delegate": "permission",
    "fields": [
      {
        "name": "resourceType",
        "label": "Resource Type",
        "type": "text",
        "required": true
      }
    ]
  }
};
