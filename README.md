# MirageSentinel_Deception_Lab™

**Owner:** Ayush Anand  
**Copyright:** © 2026 Ayush Anand. All rights reserved.

MirageSentinel_Deception_Lab™ is a full-stack cyber deception laboratory for adversary simulation, honeypot-inspired telemetry, MITRE ATT&CK mapping, RL-assisted deception decisions, and real-time analyst dashboards.

This repository is published for portfolio demonstration, academic review, and professional evaluation only. Rebranding, redistribution, republication, or submission of this project under another identity is not permitted.

## What This Project Contains

- **Frontend:** Next.js dashboard with deception metrics, attacker profiles, telemetry panels, graph visualizations, RL decision panels, and system health status.
- **Backend:** Node.js + Express API with MongoDB models, WebSocket streaming, simulation routes, decoy orchestration routes, VM status routes, and seeded demo telemetry.
- **Realtime Layer:** WebSocket event channel for attacker updates, RL decisions, sync events, and simulation events.
- **Simulation Layer:** Scripts and documented workflows for safe local deception-lab simulation and testing.
- **Deployment Layer:** Dockerfiles, Docker Compose, Render configuration, environment examples, and deployment notes.

## Local Setup

### 1. Start with Docker Compose

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:3001
```

### 2. Run Backend Manually

```bash
cd backend
npm install
cp .env.example .env
npm run build
npm start
```

### 3. Run Frontend Manually

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

Backend:

```text
PORT=3001
MONGODB_URI=mongodb://localhost:27017/miragesentinel_deception
JWT_SECRET=replace_with_a_long_random_secret
SIMULATION_MODE=true
CORS_ORIGINS=http://localhost:3000
```

Frontend:

```text
NEXT_PUBLIC_API_URL=http://localhost:3001
```

For Render, replace `NEXT_PUBLIC_API_URL` with the deployed backend URL.

## Deployment Flow

```text
Render backend service = Node/Express API + WebSocket + MongoDB connection
Render frontend service = Next.js frontend connected to backend URL
MongoDB Atlas or Render-compatible MongoDB = production database
GitHub Pages = optional static portfolio landing page only
```

## Ownership Notice

MirageSentinel_Deception_Lab™ is owned by Ayush Anand. All rights reserved.
