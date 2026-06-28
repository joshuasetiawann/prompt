export type WritableField = { name: string; label: string; type: "text" | "textarea" | "email" | "tel" | "number" | "date" | "select"; required?: boolean; options?: { value: string; label: string }[] };
export const WRITABLE: Record<string, { delegate: string; fields: WritableField[] }> = {
  "Vehicle": {
    "delegate": "vehicle",
    "fields": [
      {
        "name": "plate",
        "label": "Plate",
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
  "WorkOrder": {
    "delegate": "workOrder",
    "fields": [
      {
        "name": "mechanicId",
        "label": "Mechanic",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "Status",
        "type": "select",
        "options": [
          {
            "value": "pending",
            "label": "Pending"
          },
          {
            "value": "paid",
            "label": "Paid"
          },
          {
            "value": "processing",
            "label": "Processing"
          },
          {
            "value": "shipped",
            "label": "Shipped"
          },
          {
            "value": "completed",
            "label": "Completed"
          },
          {
            "value": "cancelled",
            "label": "Cancelled"
          }
        ]
      }
    ]
  },
  "Part": {
    "delegate": "part",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "price",
        "label": "Price",
        "type": "number"
      }
    ]
  },
  "MaintenanceSchedule": {
    "delegate": "maintenanceSchedule",
    "fields": [
      {
        "name": "type",
        "label": "Type",
        "type": "text",
        "required": true
      }
    ]
  },
  "Inspection": {
    "delegate": "inspection",
    "fields": [
      {
        "name": "driverId",
        "label": "Driver",
        "type": "text",
        "required": true
      }
    ]
  },
  "WorkOrderPart": {
    "delegate": "workOrderPart",
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
