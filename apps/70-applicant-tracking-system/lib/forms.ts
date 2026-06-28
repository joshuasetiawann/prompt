export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "JobRole": {
    "delegate": "jobRole",
    "fields": [
      {
        "name": "title",
        "label": "Title",
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
  "Candidate": {
    "delegate": "candidate",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "stage",
        "label": "Stage",
        "type": "select",
        "options": [
          {
            "value": "Lead",
            "label": "Lead"
          },
          {
            "value": "Qualified",
            "label": "Qualified"
          },
          {
            "value": "Proposal",
            "label": "Proposal"
          },
          {
            "value": "Negotiation",
            "label": "Negotiation"
          },
          {
            "value": "Won",
            "label": "Won"
          },
          {
            "value": "Lost",
            "label": "Lost"
          }
        ]
      },
      {
        "name": "email",
        "label": "Email",
        "type": "email"
      }
    ]
  },
  "Scorecard": {
    "delegate": "scorecard",
    "fields": [
      {
        "name": "interviewerId",
        "label": "Interviewer",
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
  "Activity": {
    "delegate": "activity",
    "fields": [
      {
        "name": "actorId",
        "label": "Actor",
        "type": "text",
        "required": true
      }
    ]
  },
  "Interview": {
    "delegate": "interview",
    "fields": [
      {
        "name": "interviewerId",
        "label": "Interviewer",
        "type": "text",
        "required": true
      }
    ]
  },
  "Offer": {
    "delegate": "offer",
    "fields": [
      {
        "name": "status",
        "label": "Status",
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
  }
};
