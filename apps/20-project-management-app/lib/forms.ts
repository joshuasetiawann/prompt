export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Project": {
    "delegate": "project",
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
  "Task": {
    "delegate": "task",
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
            "value": "todo",
            "label": "Todo"
          },
          {
            "value": "in_progress",
            "label": "In Progress"
          },
          {
            "value": "done",
            "label": "Done"
          }
        ]
      }
    ]
  },
  "Membership": {
    "delegate": "membership",
    "fields": [
      {
        "name": "role",
        "label": "Role",
        "type": "text",
        "required": true
      }
    ]
  },
  "Subtask": {
    "delegate": "subtask",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Comment": {
    "delegate": "comment",
    "fields": [
      {
        "name": "body",
        "label": "Body",
        "type": "text",
        "required": true
      }
    ]
  }
};
