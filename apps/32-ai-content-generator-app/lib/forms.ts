export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Template": {
    "delegate": "template",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Generation": {
    "delegate": "generation",
    "fields": [
      {
        "name": "input",
        "label": "Input",
        "type": "text",
        "required": true
      }
    ]
  },
  "Project": {
    "delegate": "project",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "BrandVoice": {
    "delegate": "brandVoice",
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
  "Variation": {
    "delegate": "variation",
    "fields": [
      {
        "name": "content",
        "label": "Content",
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
  "UsageCredit": {
    "delegate": "usageCredit",
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
