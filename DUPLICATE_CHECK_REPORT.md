# Duplicate Check Report

Date: 2026-06-26

This report documents how the 50 Volume 2 prompts (51-100) were checked against the original 50 (1-50) to ensure none duplicate or closely overlap an existing app.

- Existing titles checked: 50
- New titles created: 50
- Exact title overlaps: 0
- Exact slug overlaps: 0
- Result: PASS — no duplicates

## Existing 50 prompt titles (1-50)

1. Hotel Booking App
2. Villa Booking Website
3. Restaurant POS System
4. Cafe Online Ordering Website
5. Clinic Appointment Booking App
6. Dentist Appointment Website
7. Beauty Salon Booking App
8. Gym Membership Management App
9. Real Estate Listing Website
10. Multi-Vendor Marketplace
11. General Online Store
12. Fashion E-commerce Store
13. Digital Product Store
14. AI Prompt Store Website
15. Online Course Platform
16. Membership Community Portal
17. Webinar Registration Page
18. Ebook Sales Page
19. CRM Dashboard App
20. Project Management App
21. Inventory Management System
22. Finance Dashboard App
23. Invoice Generator App
24. Employee Attendance App
25. Approval Workflow App
26. Customer Complaint Ticketing System
27. Document Management System
28. Delivery Tracking Dashboard
29. Car Rental Booking App
30. Coworking Space Booking App
31. AI Customer Support Chatbot App
32. AI Content Generator App
33. AI Resume Builder App
34. AI Document Analyzer App
35. AI Sales Assistant Dashboard
36. AI Social Media Planner App
37. Analytics Dashboard
38. HR Management System
39. Student Portal
40. Tutor Booking App
41. Community Mobile-First Web App
42. Event Ticketing App
43. Fitness Tracker App
44. Habit Tracker App
45. Personal Budgeting App
46. Language Learning App
47. Link-in-Bio Website Builder
48. Creative Agency Portfolio Website
49. Interior Design Lead Generation Website
50. Travel Package Booking Website

## New 50 prompt titles (51-100)

51. Pet Grooming & Veterinary Care Scheduler
52. Wedding Planner Client Portal
53. Legal Case Management System
54. Accounting Firm Client Portal
55. Construction Project Tracker
56. Property Maintenance Request Portal
57. Laundry Pickup & Delivery App
58. Home Cleaning Service Booking App
59. Repair Service Management System
60. Photography Studio Booking & Proofing Portal
61. Influencer Campaign Management Platform
62. Donation & Nonprofit Fundraising Platform
63. Community Organization Portal
64. Volunteer Management System
65. Farm Management Dashboard
66. Agriculture Marketplace for Farmers
67. Rental Equipment Booking System
68. Event Vendor Directory Platform
69. Job Board Platform
70. Applicant Tracking System
71. Freelance Client Portal
72. Proposal & Contract Generator App
73. Subscription Box Management System
74. Restaurant Table Reservation System
75. Food Catering Order Management App
76. Medical Lab Results Portal
77. Pharmacy Stock & Prescription Queue System
78. Telemedicine Consultation Portal
79. Insurance Claim Management System
80. Logistics Fleet Maintenance System
81. School Admission Management System
82. Parent-Teacher Communication Portal
83. Scholarship Application Portal
84. Library Management System
85. Museum / Gallery Ticketing & Collection Portal
86. Sports League Management App
87. Personal Trainer Client Coaching Portal
88. Meal Planner & Nutrition Coaching App
89. Recipe Sharing Community Platform
90. Neighborhood Security Reporting App
91. Disaster Relief Coordination Dashboard
92. Lost & Found Management Platform
93. Parking Lot Management System
94. Smart Home Service Dashboard
95. Sustainability / Carbon Tracker App
96. Waste Collection Scheduling App
97. B2B Supplier Ordering Portal
98. Wholesale Order Management System
99. Franchise Operations Dashboard
100. Business SOP & Training Manual Portal

## Title that was changed to avoid overlap / sensitivity

- #63 was generalized from "Church / Mosque / Community Organization Portal" to "Community Organization Portal" (slug `community-organization-portal`). The app is denomination-neutral and works for any congregation, club, or association; the data model and features are unchanged. No other titles were renamed.

## Why the new prompts are unique

Volume 2 deliberately avoids the categories the brief calls out as off-limits. Each group below explains how the new prompts stay distinct from the original 50:

- No new hotel / villa / travel booking. The booking-style entries are in clearly different verticals with their own domain models: pet care (51), laundry pickup-and-delivery (57), home cleaning with recurrence (58), photography sessions with proofing galleries (60), equipment rental with condition logs (67), restaurant table reservations and seating (74), catering quotes by headcount (75), telemedicine consultations (78), parking sessions (93), and museum timed-entry ticketing (85).
- No generic store or marketplace. Commerce entries are domain- or model-specific: a produce marketplace priced per unit with harvest dates (66), an event-vendor directory built around quote leads (68), subscription-box recurring billing (73), a B2B portal with account-specific pricing and approvals (97), and a wholesale back office with price tiers and MOQs (98) — none are a general consumer storefront.
- Not CRM / project / inventory / finance / invoice / HR / student / tutor. The closest-sounding entries are scoped differently: a freelance client-facing portal (71) and an accounting client portal (54) are external collaboration spaces, not an internal CRM; a construction tracker (55) is phase/daily-log specific; an ATS (70) is an internal hiring pipeline distinct from a public job board (69); a proposal/contract generator (72) is a sales-document tool; parent-teacher communication (82) is messaging, not a grades portal; a personal-trainer coaching portal (87) and a nutrition coaching app (88) are coach-client relationships, not a solo fitness or budget tracker.
- No generic AI chatbot / content / resume / document / sales / social planner. Volume 2 adds no general-purpose AI tool; influencer campaign management (61) is relationship and deliverable tracking, not a social-media content planner.
- No portfolio / interior agency page. None of the new entries are a marketing portfolio site.
- The remaining entries occupy their own verticals with no analogue in 1-50: legal case management (53), property maintenance (56), repair/field service (59), nonprofit fundraising (62), community-org (63) and volunteer (64) portals, farm management (65), medical lab results (76), pharmacy queue (77), insurance claims (79), fleet maintenance (80), school admissions (81), scholarships (83), libraries (84), sports leagues (86), recipe community (89), neighborhood safety (90), disaster relief (91), lost-and-found (92), smart home (94), sustainability (95), waste collection (96), franchise ops (99), and SOP/training (100).

## Method

Title and slug sets for 1-50 and 51-100 were compared programmatically; the intersection is empty for both. Categories were assigned per app and reviewed against the off-limits list above. Every Volume 2 app has its own distinct data models and primary workflow.
