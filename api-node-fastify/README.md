# API: Node Fastify

Minimal Fastify API service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
npm install
npm run start
```

The server starts on `http://localhost:3000`.

## Docker

```bash
docker build -t api-node-fastify .
docker run -p 3000:3000 api-node-fastify
```

## Project Structure

```
api-node-fastify/
  src/
    index.js
  package.json
  Dockerfile
```
