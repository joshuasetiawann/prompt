export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "SOP": {
    "delegate": "sOP",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Module": {
    "delegate": "module",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Quiz": {
    "delegate": "quiz",
    "fields": [
      {
        "name": "questions",
        "label": "Questions",
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
      }
    ]
  },
  "Assignment": {
    "delegate": "assignment",
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
  },
  "QuizAttempt": {
    "delegate": "quizAttempt",
    "fields": [
      {
        "name": "score",
        "label": "Score",
        "type": "text",
        "required": true
      }
    ]
  }
};
