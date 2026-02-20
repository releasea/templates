# API: Go Gin

Minimal Go API service using Gin, ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
go mod tidy
go run main.go
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-go-gin .
docker run -p 8080:8080 api-go-gin
```

## Project Structure

```
api-go-gin/
  main.go
  go.mod
  Dockerfile
```
