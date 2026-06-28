export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Course": {
    "delegate": "course",
    "fields": [
      {
        "name": "title",
        "label": "Title",
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
      },
      {
        "name": "price",
        "label": "Price",
        "type": "number"
      }
    ]
  },
  "Lesson": {
    "delegate": "lesson",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      },
      {
        "name": "contentType",
        "label": "Content Type",
        "type": "textarea"
      }
    ]
  },
  "Enrollment": {
    "delegate": "enrollment",
    "fields": [
      {
        "name": "studentId",
        "label": "Student",
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
  "LessonProgress": {
    "delegate": "lessonProgress",
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
