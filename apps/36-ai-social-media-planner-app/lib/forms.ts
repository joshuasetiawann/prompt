export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Post": {
    "delegate": "post",
    "fields": [
      {
        "name": "platform",
        "label": "Platform",
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
  "Campaign": {
    "delegate": "campaign",
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
  "MediaAsset": {
    "delegate": "mediaAsset",
    "fields": [
      {
        "name": "url",
        "label": "Url",
        "type": "text",
        "required": true
      }
    ]
  },
  "PostMetric": {
    "delegate": "postMetric",
    "fields": [
      {
        "name": "id",
        "label": "Id",
        "type": "text",
        "required": true
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
  },
  "Idea": {
    "delegate": "idea",
    "fields": [
      {
        "name": "topic",
        "label": "Topic",
        "type": "text",
        "required": true
      }
    ]
  }
};
