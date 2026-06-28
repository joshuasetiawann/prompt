export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Course": {
    "delegate": "course",
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
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  },
  "Submission": {
    "delegate": "submission",
    "fields": [
      {
        "name": "studentId",
        "label": "Student",
        "type": "text",
        "required": true
      }
    ]
  },
  "ScheduleSlot": {
    "delegate": "scheduleSlot",
    "fields": [
      {
        "name": "day",
        "label": "Day",
        "type": "text",
        "required": true
      }
    ]
  },
  "Announcement": {
    "delegate": "announcement",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
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
  }
};
