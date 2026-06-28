export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Claim": {
    "delegate": "claim",
    "fields": [
      {
        "name": "claimantId",
        "label": "Claimant",
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
  "Handover": {
    "delegate": "handover",
    "fields": [
      {
        "name": "recipientName",
        "label": "Recipient Name",
        "type": "text",
        "required": true
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "VerificationQuestion": {
    "delegate": "verificationQuestion",
    "fields": [
      {
        "name": "question",
        "label": "Question",
        "type": "text",
        "required": true
      }
    ]
  },
  "MatchSuggestion": {
    "delegate": "matchSuggestion",
    "fields": [
      {
        "name": "lostItemId",
        "label": "Lost Item",
        "type": "text",
        "required": true
      }
    ]
  },
  "Category": {
    "delegate": "category",
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
  "Location": {
    "delegate": "location",
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
