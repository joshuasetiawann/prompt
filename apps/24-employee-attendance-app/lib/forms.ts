export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Employee": {
    "delegate": "employee",
    "fields": [
      {
        "name": "department",
        "label": "Department",
        "type": "text",
        "required": true
      }
    ]
  },
  "Shift": {
    "delegate": "shift",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
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
  "Timesheet": {
    "delegate": "timesheet",
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
  "ShiftAssignment": {
    "delegate": "shiftAssignment",
    "fields": [
      {
        "name": "status",
        "label": "Status",
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
  }
};
