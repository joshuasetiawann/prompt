export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Department": {
    "delegate": "department",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ]
  },
  "Employee": {
    "delegate": "employee",
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
      },
      {
        "name": "salary",
        "label": "Salary",
        "type": "number"
      }
    ]
  },
  "LeaveRequest": {
    "delegate": "leaveRequest",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "open",
            "label": "Open"
          },
          {
            "value": "pending",
            "label": "Pending"
          },
          {
            "value": "in_progress",
            "label": "In Progress"
          },
          {
            "value": "resolved",
            "label": "Resolved"
          },
          {
            "value": "closed",
            "label": "Closed"
          }
        ]
      }
    ]
  },
  "AttendanceSummary": {
    "delegate": "attendanceSummary",
    "fields": [
      {
        "name": "period",
        "label": "Period",
        "type": "text",
        "required": true
      }
    ]
  },
  "LeaveBalance": {
    "delegate": "leaveBalance",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      }
    ]
  },
  "OnboardingTask": {
    "delegate": "onboardingTask",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      }
    ]
  }
};
