# Render Deployment Guide — MirageSentinel_Deception_Lab

## Recommended Render Setup

Create two Render Web Services from the same GitHub repository.

## Backend Service

```text
Name: miragesentinel-deception-api
Environment: Docker
Dockerfile Path: ./Dockerfile.backend
Root Directory: leave blank
```

Environment variables:

```text
PORT=3001
MONGODB_URI=<your MongoDB Atlas connection string>
JWT_SECRET=<long random secret>
NODE_ENV=production
SIMULATION_MODE=true
CRDT_SYNC_INTERVAL=10000
CORS_ORIGINS=https://<your-frontend-service>.onrender.com,http://localhost:3000
```

Health check URL:

```text
/health
```

## Frontend Service

```text
Name: miragesentinel-deception-web
Environment: Docker
Dockerfile Path: ./Dockerfile.frontend
Root Directory: leave blank
```

Environment variables:

```text
NEXT_PUBLIC_API_URL=https://<your-backend-service>.onrender.com
```

## After Deployment

1. Open the backend URL and confirm `/health` returns JSON.
2. Open the frontend URL.
3. Confirm the dashboard can load stats, attackers, VM status, and RL panels.
4. Confirm CORS allows the frontend domain.
5. Confirm WebSocket status changes from disconnected to connected when backend is reachable.

## GitHub Pages Note

This project is primarily a full-stack Next.js + Node backend application. GitHub Pages can host the static root landing page included in the repository, but live dashboard features require the Render frontend/backend services.
