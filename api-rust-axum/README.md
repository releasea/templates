# API: Rust Axum

Minimal Axum API service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
cargo run
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-rust-axum .
docker run -p 8080:8080 api-rust-axum
```

## Project Structure

```
api-rust-axum/
  src/
  Cargo.toml
  Dockerfile
```
