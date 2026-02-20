# Site: Python MkDocs

Minimal documentation site using MkDocs, ready for deployment on Releasea.

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

The local server starts on `http://localhost:8000`.

## Build

```bash
mkdocs build --clean
```

Output is generated in the `site/` directory.

## Project Structure

```
site-python-mkdocs/
  docs/
    index.md
  mkdocs.yml
  requirements.txt
```
