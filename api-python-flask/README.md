# API: Python Flask

Minimal Flask API service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

The server starts on `http://localhost:8000`.

## Docker

```bash
docker build -t api-python-flask .
docker run -p 8000:8000 api-python-flask
```

## Project Structure

```
api-python-flask/
  app.py
  requirements.txt
  Dockerfile
```
