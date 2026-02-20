# API: Node Express

Minimal Express API service ready for deployment on Releasea.

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
docker build -t api-node-express .
docker run -p 3000:3000 api-node-express
```

## Project Structure

```
api-node-express/
  src/
    index.js
  package.json
  Dockerfile
```
