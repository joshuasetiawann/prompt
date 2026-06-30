# MediSlot Clinic Appointment Booking App

> Let patients book available slots with a doctor and let staff manage schedules and appointments

| Field | Value |
|---|---|
| **Prompt ID** | 05 |
| **Title** | Clinic Appointment Booking App |
| **Slug** | clinic-appointment-booking-app |
| **Category** | Booking & Reservations |
| **Domain** | Booking & Reservation |
| **App type** | Production-grade full-stack web app scaffold |
| **Difficulty** | Intermediate |
| **Target user** | Patient; Staff/Admin |
| **Recommended tools** | Claude Code, Cursor, Replit, Bolt, Lovable, v0 |

**Best for:** Developers building scheduling tools for clinics and private practices, and clinics wanting simple online booking.

**Production standard:** Production-grade scaffold with local development support, deployment readiness, security guidance, test guidance, and real-service integration readiness

## Tech stack

- **Frontend:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js Server Actions or API Routes, Prisma ORM, PostgreSQL for production, SQLite for local development
- **Auth:** Auth.js or secure email/password authentication
- **Validation:** Zod, React Hook Form
- **Deployment:** Vercel-ready, Docker-ready

**Local mode** (enabled)
- App must run locally without paid API keys
- Use mock payment mode when payment is needed
- Use mock notification log when email/SMS is needed

**Production mode** (enabled)
- .env.example included
- Production database setup (PostgreSQL)
- Deployment guide included
- Real provider integration readiness
- Production security checklist

## Files to generate

- Complete Next.js App Router structure
- Prisma schema and migrations
- Seed script with demo data
- .env.example
- README.md with setup and run commands
- Dockerfile
- docker-compose.yml when useful
- Unit and integration test examples

## Required pages

1. Home with service/department overview
2. Doctor list with specialties and availability
3. Slot selection (date + time)
4. Booking form (patient details, reason for visit)
5. Confirmation
6. Patient dashboard: upcoming and past appointments, reschedule/cancel
7. Auth
8. Admin: manage doctors and schedules
9. Admin: appointment calendar and management
10. Admin: departments and services
11. Patient: visit history and medical records

## Required features

- Per-doctor working hours generating bookable slots
- Slot booking that prevents double-booking
- Appointment status: booked, confirmed, completed, cancelled, no-show
- Reschedule and cancellation within a window
- Reminder concept (logged notifications)
- Admin schedule management and calendar
- Reports: appointments per doctor and per day
- Department/service catalog mapping doctors to specialties
- Visit records capturing diagnosis and follow-up notes per appointment
- Mock deposit/payment capture per appointment with status tracking

## Database models

### User
**Fields:** `id`, `email`, `passwordHash`, `name`, `role`, `createdAt`, `updatedAt`

**Relationships:**
- Standalone model (no outbound foreign keys)

### Doctor
**Fields:** `id`, `name`, `specialty`, `departmentId`, `workingHours`, `createdAt`, `updatedAt`

**Relationships:**
- departmentId -> references the related record

### Patient
**Fields:** `id`, `userId`, `fullName`, `phone`, `dob`, `createdAt`, `updatedAt`

**Relationships:**
- userId -> references the related record

### Appointment
**Fields:** `id`, `doctorId`, `patientId`, `startTime`, `endTime`, `status`, `reason`, `createdAt`, `updatedAt`

**Relationships:**
- doctorId -> references the related record
- patientId -> references the related record

### Notification
**Fields:** `id`, `appointmentId`, `type`, `sentAt`, `createdAt`, `updatedAt`

**Relationships:**
- appointmentId -> references the related record

### Department
**Fields:** `id`, `name`, `description`, `createdAt`, `updatedAt`

**Relationships:**
- Referenced by doctors via Doctor.departmentId

### MedicalRecord
**Fields:** `id`, `appointmentId`, `patientId`, `doctorId`, `diagnosis`, `notes`, `followUpDate`, `createdAt`, `updatedAt`

**Relationships:**
- appointmentId -> references the related record
- patientId -> references the related record
- doctorId -> references the related record

### Payment
**Fields:** `id`, `appointmentId`, `patientId`, `amount`, `status`, `method`, `paidAt`, `createdAt`, `updatedAt`

**Relationships:**
- appointmentId -> references the related record
- patientId -> references the related record

## Backend logic

- Generate available slots from doctor working hours minus booked appointments
- Transactional booking preventing slot conflicts
- Reschedule/cancel enforcing the time window
- Admin CRUD for doctors and schedules
- Reporting per doctor and day
- Record a mock Payment/deposit per appointment and update its status
- Create and view medical records (diagnosis, notes, follow-up) for appointments
- Admin CRUD for departments and services
- Server-side validation on every mutation with Zod
- Role-based authorization and protected routes for private pages
- Scope every query to the current user/tenant (no cross-user data access)

## Security requirements

- No hardcoded secrets — all secrets via environment variables
- Server-side validation on every mutation
- Role-based access control where roles exist
- Protected routes for all private pages
- Safe file-upload handling where uploads exist
- Rate-limiting guidance for public endpoints
- Audit logs for sensitive actions where relevant

## Testing requirements

- Unit test examples for key business logic
- Integration test examples for important flows where practical
- Manual QA checklist
- Production smoke-test checklist

## Deployment requirements

- Local development commands
- Production build command
- Database migration command
- Seed command
- Vercel deployment notes
- Docker deployment notes
- Post-deployment smoke test

## Acceptance checklist

- [ ] App installs successfully
- [ ] App runs locally with seed data
- [ ] App builds successfully
- [ ] Database migrates successfully
- [ ] Seed data loads successfully
- [ ] All navigation works
- [ ] Forms validate on client and server
- [ ] Protected routes are protected
- [ ] Role permissions work
- [ ] Admin pages work where included
- [ ] Mock mode works without paid keys
- [ ] Real provider setup is documented
- [ ] No unresolved template tokens or dummy filler remains
- [ ] No dead buttons or dead links remain
- [ ] Responsive layout works
- [ ] README setup steps are complete
- [ ] Production deployment steps are documented
- [ ] Only free slots for the chosen doctor are bookable
- [ ] Booked slots disappear from other patients' options
- [ ] Admin can see the full day's appointments per doctor

## Ready-to-use prompt

Copy everything in the block below and paste it into your AI coding tool.

```text
You are a senior full-stack engineer who builds healthcare scheduling apps, building a production-grade full-stack app scaffold with local run support and deployment readiness. Build the complete application now. Do not ask any questions — every detail below is already decided.

STANDARD
Deliver a production-grade full-stack app scaffold with local run support and deployment readiness: the app must run end-to-end locally on seed data with mock modes and no paid API keys, and be structured for deployment with security, testing, and real-service integration guidance. This is a scaffold — going live still requires your own credentials, provider setup, migrations on a real database, and a security review. Do not assume it is live without that setup.

APP
Name: MediSlot Clinic Appointment Booking App
Type: Clinic Appointment Booking App (Booking & Reservation)
Target users: patients booking visits and clinic staff managing doctors, schedules, and appointments.
Business goal: Let patients book available slots with a doctor and let staff manage schedules and appointments.

BRAND & DESIGN
Brand style: clean, reassuring, professional healthcare. Colors: teal, soft white, light grey. Clean, modern, calm layout, clear slot grid, and simple forms. Use Tailwind + shadcn/ui, consistent spacing, rounded cards, accessible contrast. Mobile-first and fully responsive across mobile, tablet, and desktop.

TECH STACK
- Next.js (App Router) with TypeScript, Tailwind CSS, and shadcn/ui
- Prisma ORM; PostgreSQL for production, with SQLite supported for local development
- Auth.js (or secure hashed email/password) wherever accounts and roles are needed
- Zod and React Hook Form for both client-side and server-side validation
- Vercel-ready and Docker-ready

PAGES / SCREENS
1. Home with service/department overview
2. Doctor list with specialties and availability
3. Slot selection (date + time)
4. Booking form (patient details, reason for visit)
5. Confirmation
6. Patient dashboard: upcoming and past appointments, reschedule/cancel
7. Auth
8. Admin: manage doctors and schedules
9. Admin: appointment calendar and management
10. Admin: departments and services
11. Patient: visit history and medical records

NAVIGATION
- Real, working navigation (a top bar or sidebar as fits the app); every item routes to one of the pages above with no dead links; show only menu items the current role may use; clear active state; collapse to a mobile menu on small screens.

USER ROLES
- Patient — book and manage own appointments
- Staff/Admin — manage doctors, schedules, and all appointments

CORE FEATURES
- Per-doctor working hours generating bookable slots
- Slot booking that prevents double-booking
- Appointment status: booked, confirmed, completed, cancelled, no-show
- Reschedule and cancellation within a window
- Reminder concept (logged notifications)
- Admin schedule management and calendar
- Reports: appointments per doctor and per day
- Department/service catalog mapping doctors to specialties
- Visit records capturing diagnosis and follow-up notes per appointment
- Mock deposit/payment capture per appointment with status tracking

DATABASE MODELS (Prisma — PostgreSQL in production, SQLite locally)
- User: id, email, passwordHash, name, role, createdAt, updatedAt
- Doctor: id, name, specialty, departmentId, workingHours, createdAt, updatedAt
- Patient: id, userId, fullName, phone, dob, createdAt, updatedAt
- Appointment: id, doctorId, patientId, startTime, endTime, status, reason, createdAt, updatedAt
- Notification: id, appointmentId, type, sentAt, createdAt, updatedAt
- Department: id, name, description, createdAt, updatedAt
- MedicalRecord: id, appointmentId, patientId, doctorId, diagnosis, notes, followUpDate, createdAt, updatedAt
- Payment: id, appointmentId, patientId, amount, status, method, paidAt, createdAt, updatedAt
- Define explicit Prisma relations between these models (one-to-many and many-to-one per the foreign keys), with sensible indexes and cascade rules; include createdAt and updatedAt; generate and commit migrations.

BACKEND / API LOGIC
- Generate available slots from doctor working hours minus booked appointments
- Transactional booking preventing slot conflicts
- Reschedule/cancel enforcing the time window
- Admin CRUD for doctors and schedules
- Reporting per doctor and day
- Record a mock Payment/deposit per appointment and update its status
- Create and view medical records (diagnosis, notes, follow-up) for appointments
- Admin CRUD for departments and services
- Validate every mutation on the server with Zod; enforce role-based authorization; protect all private routes; scope every query to the current user/tenant so no one can read or modify another user's records.

ENVIRONMENT & MODES
- Provide a complete .env.example documenting every variable.
- Local mode runs fully on seed data with mock modes and no paid keys.
- Payments: implement a mock checkout/deposit that records a Payment status; structure it to swap in a real gateway (e.g., Stripe) via env vars.
- Notifications: log mock email/SMS locally; structure the provider so a real one can be added via env vars without code changes elsewhere.

SEED DATA
- Seed realistic demo data: 3 doctors with hours, sample patients, appointments across past/future, 1 admin and 2 patients. Provide a seed script and list the demo login credentials in the README.

UX REQUIREMENTS
- Every data view has loading, empty, error, and success states.
- All forms validate on client and server with inline messages and clear success/error feedback.
- Realistic, human copywriting throughout — no dummy filler text.

SECURITY
- Keep all secrets in environment variables (never in code). Apply role-based access control where roles exist, protect private routes, handle any file uploads safely, add rate-limiting guidance for public endpoints, and write audit logs for sensitive actions where relevant.

TESTING
- Include unit test examples for the core logic and integration test examples for the most important flows, plus a manual QA checklist and a production smoke-test checklist.

DEPLOYMENT
- Include a Dockerfile (and docker-compose where useful), the production build and database-migration commands, Vercel deployment notes, and a post-deployment smoke test.

DELIVERABLES
- Create every file needed to run locally and to deploy: the full Next.js App Router structure, the Prisma schema and migrations, a seed script, .env.example, a README with exact copy-paste setup commands (install, prisma generate and migrate, seed, dev), a Dockerfile, and test examples.
- Build only real, working screens: functional navigation, working forms, no dead buttons, no unfinished screens, no dummy filler, no leftover task comments, and no unresolved template tokens.

ACCEPTANCE CHECKLIST — the app must pass all of these
- Installs and runs locally with the documented commands, on seed data, with no paid keys.
- Builds successfully and migrates the database successfully.
- Every page renders and is reachable from the navigation.
- Forms validate on client and server; protected routes are protected; role permissions work.
- Admin pages work where included; mock modes work without paid keys; real-provider setup is documented.
- Loading, empty, error, and success states are present; responsive layout works.
- No unresolved template tokens or dummy filler remains; no dead buttons or dead links remain.
- README setup steps and production deployment steps are complete.
```
