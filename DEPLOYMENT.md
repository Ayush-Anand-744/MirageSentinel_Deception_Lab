# Deployment

MirageSentinel Deception Lab is prepared for local development and live hosting without changing the core application structure.

## Recommended runtime

TypeScript API service plus Next.js control-plane frontend. Use PostgreSQL or the configured database backend for live state.

## Local run

`cd backend && npm install && npm run build && npm start`

`cd frontend && npm install && npm run build && npm start`

## Environment variables

Set database URL, JWT secret, and frontend API URL.

## Production notes

- Keep secrets in the hosting provider's environment settings, not in source control.
- Use the included `.env.example` files as a checklist only.
- For AI/model projects, choose a plan with enough memory for model loading and inference.
- For frontend/backend projects, deploy the backend first, then point the frontend API base URL to the live backend URL if the frontend is not served by the same process.
