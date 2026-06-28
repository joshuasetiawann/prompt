import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "15",
  slug: "online-course-platform",
  appName: "LearnLoop Online Course Platform",
  tagline: "Let creators build courses and students enroll, progress through lessons, and complete quizzes",
  category: "Education & E-learning",
  kind: "storefront",
  currency: "USD",
  primary: "Course",
};

export const THEME: Theme = {
  "brand": "#4f46e5",
  "brandFg": "#ffffff",
  "brandSoft": "#ededfc",
  "accent": "#16a34a",
  "neutral": "slate",
  "headingFont": '"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  "bodyFont": '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  "radius": "0.85rem"
};

export const NAV = [
  {
    "href": "/app",
    "label": "Dashboard",
    "icon": "dashboard"
  },
  {
    "href": "/app/courses",
    "label": "Courses",
    "icon": "book"
  },
  {
    "href": "/app/lessons",
    "label": "Lessons",
    "icon": "book"
  },
  {
    "href": "/app/enrollments",
    "label": "Enrollments",
    "icon": "graduation-cap"
  },
  {
    "href": "/app/modules",
    "label": "Modules",
    "icon": "book"
  },
  {
    "href": "/app/quizes",
    "label": "Quizes",
    "icon": "layers"
  },
  {
    "href": "/app/lesson-progresses",
    "label": "Lesson Progresses",
    "icon": "book"
  },
  {
    "href": "/app/reports",
    "label": "Reports",
    "icon": "chart"
  },
  {
    "href": "/app/settings",
    "label": "Settings",
    "icon": "settings"
  }
];
export const MARKETING_LINKS = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Courses",
    "href": "/browse"
  },
  {
    "label": "Features",
    "href": "/#features"
  },
  {
    "label": "Contact",
    "href": "/#contact"
  }
];
export const MANAGED: string[] = ["Course","Lesson","Enrollment","Module","Quiz","LessonProgress"];
export const MODELS: Record<string, ModelMeta> = {
  "User": {
    "name": "User",
    "label": "User",
    "labelPlural": "Users",
    "route": "/app/users",
    "icon": "layers",
    "titleField": "name",
    "subtitleField": "email",
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "name",
        "header": "Name",
        "kind": "text"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "email",
        "label": "Email",
        "kind": "text"
      },
      {
        "name": "name",
        "label": "Name",
        "kind": "text"
      },
      {
        "name": "role",
        "label": "Role",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Course": {
    "name": "Course",
    "label": "Course",
    "labelPlural": "Courses",
    "route": "/app/courses",
    "icon": "book",
    "titleField": "title",
    "subtitleField": "description",
    "statusField": "status",
    "priceField": "price",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "instructor",
        "header": "Instructor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "price",
        "header": "Price",
        "kind": "price"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "instructor",
        "label": "Instructor",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "description",
        "label": "Description",
        "kind": "text"
      },
      {
        "name": "price",
        "label": "Price",
        "kind": "price"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Module": {
    "name": "Module",
    "label": "Module",
    "labelPlural": "Modules",
    "route": "/app/modules",
    "icon": "book",
    "titleField": "title",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "course",
        "header": "Course",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "sortOrder",
        "header": "Sort Order",
        "kind": "number"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "sortOrder",
        "label": "Sort Order",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Lesson": {
    "name": "Lesson",
    "label": "Lesson",
    "labelPlural": "Lessons",
    "route": "/app/lessons",
    "icon": "book",
    "titleField": "title",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "title",
        "header": "Title",
        "kind": "text"
      },
      {
        "key": "module",
        "header": "Module",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "sortOrder",
        "header": "Sort Order",
        "kind": "number"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "module",
        "label": "Module",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "title",
        "label": "Title",
        "kind": "text"
      },
      {
        "name": "contentType",
        "label": "Content Type",
        "kind": "text"
      },
      {
        "name": "content",
        "label": "Content",
        "kind": "text"
      },
      {
        "name": "sortOrder",
        "label": "Sort Order",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Enrollment": {
    "name": "Enrollment",
    "label": "Enrollment",
    "labelPlural": "Enrollments",
    "route": "/app/enrollments",
    "icon": "graduation-cap",
    "titleField": "studentId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "studentId",
        "header": "Student",
        "kind": "text"
      },
      {
        "key": "course",
        "header": "Course",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "progress",
        "header": "Progress",
        "kind": "number"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "course",
        "label": "Course",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "studentId",
        "label": "Student",
        "kind": "text"
      },
      {
        "name": "progress",
        "label": "Progress",
        "kind": "number"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "LessonProgress": {
    "name": "LessonProgress",
    "label": "Lesson Progress",
    "labelPlural": "Lesson Progresses",
    "route": "/app/lesson-progresses",
    "icon": "book",
    "titleField": "id",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "id",
        "header": "Id",
        "kind": "text"
      },
      {
        "key": "enrollment",
        "header": "Enrollment",
        "kind": "relation",
        "titleField": "studentId"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "enrollment",
        "label": "Enrollment",
        "kind": "relation",
        "titleField": "studentId"
      },
      {
        "name": "lesson",
        "label": "Lesson",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "completed",
        "label": "Completed",
        "kind": "bool"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Quiz": {
    "name": "Quiz",
    "label": "Quiz",
    "labelPlural": "Quizes",
    "route": "/app/quizes",
    "icon": "layers",
    "titleField": "questions",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "questions",
        "header": "Questions",
        "kind": "text"
      },
      {
        "key": "lesson",
        "header": "Lesson",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "lesson",
        "label": "Lesson",
        "kind": "relation",
        "titleField": "title"
      },
      {
        "name": "questions",
        "label": "Questions",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "QuizAttempt": {
    "name": "QuizAttempt",
    "label": "Quiz Attempt",
    "labelPlural": "Quiz Attempts",
    "route": "/app/quiz-attempts",
    "icon": "layers",
    "titleField": "studentId",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "studentId",
        "header": "Student",
        "kind": "text"
      },
      {
        "key": "quiz",
        "header": "Quiz",
        "kind": "relation",
        "titleField": "questions"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "quiz",
        "label": "Quiz",
        "kind": "relation",
        "titleField": "questions"
      },
      {
        "name": "studentId",
        "label": "Student",
        "kind": "text"
      },
      {
        "name": "score",
        "label": "Score",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "Payment": {
    "name": "Payment",
    "label": "Payment",
    "labelPlural": "Payments",
    "route": "/app/payments",
    "icon": "receipt",
    "titleField": "status",
    "subtitleField": null,
    "statusField": "status",
    "priceField": "amount",
    "dateField": "createdAt",
    "columns": [
      {
        "key": "status",
        "header": "Status",
        "kind": "status"
      },
      {
        "key": "enrollment",
        "header": "Enrollment",
        "kind": "relation",
        "titleField": "studentId"
      },
      {
        "key": "amount",
        "header": "Amount",
        "kind": "price"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "enrollment",
        "label": "Enrollment",
        "kind": "relation",
        "titleField": "studentId"
      },
      {
        "name": "amount",
        "label": "Amount",
        "kind": "price"
      },
      {
        "name": "status",
        "label": "Status",
        "kind": "status"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
