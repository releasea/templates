# API: PHP Slim

Minimal Slim 4 API service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
composer install
php -S 0.0.0.0:8080 -t public
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-php-slim .
docker run -p 8080:8080 api-php-slim
```

## Project Structure

```
api-php-slim/
  public/
  composer.json
  Dockerfile
```
