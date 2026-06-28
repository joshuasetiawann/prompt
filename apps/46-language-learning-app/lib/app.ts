import type { Theme } from "@scaffold/engine";
import type { ModelMeta } from "@scaffold/engine";

export const APP = {
  id: "46",
  slug: "language-learning-app",
  appName: "LinguaGo Language Learning App",
  tagline: "Let learners progress through lessons, review vocab with spaced repetition, and take quizzes",
  category: "Education & E-learning",
  kind: "storefront",
  currency: "USD",
  primary: "Lesson",
};

export const THEME: Theme = {
  "brand": "#ea580c",
  "brandFg": "#ffffff",
  "brandSoft": "#fdeee7",
  "accent": "#4f46e5",
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
    "href": "/app/lessons",
    "label": "Lessons",
    "icon": "book"
  },
  {
    "href": "/app/vocabs",
    "label": "Vocabs",
    "icon": "layers"
  },
  {
    "href": "/app/quizes",
    "label": "Quizes",
    "icon": "layers"
  },
  {
    "href": "/app/review-states",
    "label": "Review States",
    "icon": "chart"
  },
  {
    "href": "/app/progresses",
    "label": "Progresses",
    "icon": "layers"
  },
  {
    "href": "/app/quiz-attempts",
    "label": "Quiz Attempts",
    "icon": "layers"
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
    "label": "Lessons",
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
export const MANAGED: string[] = ["Lesson","Vocab","Quiz","ReviewState","Progress","QuizAttempt"];
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
  "Vocab": {
    "name": "Vocab",
    "label": "Vocab",
    "labelPlural": "Vocabs",
    "route": "/app/vocabs",
    "icon": "layers",
    "titleField": "term",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "term",
        "header": "Term",
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
        "name": "term",
        "label": "Term",
        "kind": "text"
      },
      {
        "name": "translation",
        "label": "Translation",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  },
  "ReviewState": {
    "name": "ReviewState",
    "label": "Review State",
    "labelPlural": "Review States",
    "route": "/app/review-states",
    "icon": "chart",
    "titleField": "ease",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "ease",
        "header": "Ease",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "createdAt",
        "header": "Created At",
        "kind": "date"
      }
    ],
    "detailFields": [
      {
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "vocab",
        "label": "Vocab",
        "kind": "relation",
        "titleField": "term"
      },
      {
        "name": "ease",
        "label": "Ease",
        "kind": "text"
      },
      {
        "name": "dueDate",
        "label": "Due Date",
        "kind": "date"
      },
      {
        "name": "mastery",
        "label": "Mastery",
        "kind": "text"
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
    "titleField": "score",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "score",
        "header": "Score",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
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
  "Progress": {
    "name": "Progress",
    "label": "Progress",
    "labelPlural": "Progresses",
    "route": "/app/progresses",
    "icon": "layers",
    "titleField": "xp",
    "subtitleField": null,
    "statusField": null,
    "priceField": null,
    "dateField": "createdAt",
    "columns": [
      {
        "key": "xp",
        "header": "Xp",
        "kind": "text"
      },
      {
        "key": "user",
        "header": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "key": "streak",
        "header": "Streak",
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
        "name": "user",
        "label": "User",
        "kind": "relation",
        "titleField": "name"
      },
      {
        "name": "xp",
        "label": "Xp",
        "kind": "text"
      },
      {
        "name": "streak",
        "label": "Streak",
        "kind": "number"
      },
      {
        "name": "lastActive",
        "label": "Last Active",
        "kind": "text"
      },
      {
        "name": "createdAt",
        "label": "Created At",
        "kind": "date"
      }
    ]
  }
};
