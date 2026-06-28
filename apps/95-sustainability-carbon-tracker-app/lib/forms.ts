export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Category": {
    "delegate": "category",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Team": {
    "delegate": "team",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Activity": {
    "delegate": "activity",
    "fields": [
      {
        "name": "emissions",
        "label": "Emissions",
        "type": "text",
        "required": true
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "Goal": {
    "delegate": "goal",
    "fields": [
      {
        "name": "targetReductionPct",
        "label": "Target Reduction Pct",
        "type": "text",
        "required": true
      }
    ]
  },
  "Offset": {
    "delegate": "offset",
    "fields": [
      {
        "name": "source",
        "label": "Source",
        "type": "text",
        "required": true
      },
      {
        "name": "amount",
        "label": "Amount",
        "type": "number"
      }
    ]
  },
  "Membership": {
    "delegate": "membership",
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
