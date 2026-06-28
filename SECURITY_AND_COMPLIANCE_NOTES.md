# Security and Compliance Notes

## Auth and session security
Use a vetted auth library or securely hashed email/password. Use secure, http-only session cookies and a strong session secret from env.

## Password handling
Never store plaintext passwords. Hash with a strong algorithm (e.g. bcrypt/argon2). Never log credentials.

## Role access
Enforce role-based access control on the server for every protected action — not just by hiding UI. Deny by default.

## Rate limiting
Add rate limiting to public and auth endpoints to reduce abuse and brute-force attempts.

## File upload safety
Validate type and size, store outside the web root or in object storage, and never trust client-provided filenames or content types.

## Audit logs
Record who did what and when for sensitive actions (role changes, deletions, approvals, payments).

## Payment security
Never store raw card data. Delegate to the payment provider, verify webhooks, and reconcile statuses server-side.

## Privacy policy reminder
Publish a privacy policy describing what data you collect and why, and how users can request deletion.

## Terms of service reminder
Publish terms of service before accepting users or payments.

## Medical/finance/legal disclaimer
Apps in health, finance, or legal domains (for example clinic, dentist, finance, invoicing, or HR apps) may be subject to regulation. These scaffolds are starting points and are not compliance-certified; confirm the rules for your region and add the necessary safeguards before launch.
