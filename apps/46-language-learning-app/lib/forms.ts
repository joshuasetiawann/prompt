export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Lesson": {
    "delegate": "lesson",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Vocab": {
    "delegate": "vocab",
    "fields": [
      {
        "name": "term",
        "label": "Term",
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
  "ReviewState": {
    "delegate": "reviewState",
    "fields": [
      {
        "name": "ease",
        "label": "Ease",
        "type": "text",
        "required": true
      }
    ]
  },
  "Progress": {
    "delegate": "progress",
    "fields": [
      {
        "name": "xp",
        "label": "Xp",
        "type": "text",
        "required": true
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
