# API: Python FastAPI

Minimal FastAPI service ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/health` | `{ "status": "healthy" }` |

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The server starts on `http://localhost:8000`.

## Docker

```bash
docker build -t api-python-fastapi .
docker run -p 8000:8000 api-python-fastapi
```

## Project Structure

```
api-python-fastapi/
  main.py
  requirements.txt
  Dockerfile
```
