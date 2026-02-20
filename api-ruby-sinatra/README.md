# API: Ruby Sinatra

Minimal Sinatra API service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
bundle install
ruby app.rb
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-ruby-sinatra .
docker run -p 8080:8080 api-ruby-sinatra
```

## Project Structure

```
api-ruby-sinatra/
  app.rb
  Gemfile
  Dockerfile
```
