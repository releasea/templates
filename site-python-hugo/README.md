# Site: Hugo

Minimal static site using Hugo, ready for deployment on Releasea.

## Local Development

```bash
hugo server
```

The dev server starts on `http://localhost:1313`.

## Build

```bash
hugo --minify
```

Output is generated in the `public/` directory.

## Preview

```bash
hugo server --environment production
```

## Project Structure

```
site-python-hugo/
  content/
  layouts/
  config.toml
```
