export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Resume": {
    "delegate": "resume",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "JobApplication": {
    "delegate": "jobApplication",
    "fields": [
      {
        "name": "company",
        "label": "Company",
        "type": "text",
        "required": true
      },
      {
        "name": "notes",
        "label": "Notes",
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
  "ResumeTemplate": {
    "delegate": "resumeTemplate",
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
  "CoverLetter": {
    "delegate": "coverLetter",
    "fields": [
      {
        "name": "title",
        "label": "Title",
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
  "Suggestion": {
    "delegate": "suggestion",
    "fields": [
      {
        "name": "sectionRef",
        "label": "Section Ref",
        "type": "text",
        "required": true
      }
    ]
  },
  "ResumeExport": {
    "delegate": "resumeExport",
    "fields": [
      {
        "name": "fileType",
        "label": "File Type",
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
