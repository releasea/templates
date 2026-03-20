# Releasea Templates

Starter templates used by the Releasea platform to bootstrap new services. Each folder is a self-contained project with ready-to-deploy defaults for its stack.

> This README is primarily for template contributors and maintainers. For end-user guidance on how templates appear in the product, start with the public documentation linked below.

## Documentation

- Installation guide: [docs.releasea.io/?doc=installation](https://docs.releasea.io/?doc=installation)
- Installation modes: [docs.releasea.io/?doc=installation-modes](https://docs.releasea.io/?doc=installation-modes)
- Templates guide: [docs.releasea.io/?doc=templates](https://docs.releasea.io/?doc=templates)
- Public components: [docs.releasea.io/?doc=public-components](https://docs.releasea.io/?doc=public-components)

## Available Templates

### API Services

| Template | Stack | Port |
|---|---|---|
| `custom-service` | Custom source (Git or Docker) | 8080 |
| `api-node-express` | Node.js + Express | 3000 |
| `api-node-fastify` | Node.js + Fastify | 3000 |
| `api-python-fastapi` | Python + FastAPI | 8000 |
| `api-python-flask` | Python + Flask | 8000 |
| `api-java-springboot` | Java + Spring Boot | 8080 |
| `api-go-gin` | Go + Gin | 8080 |
| `api-dotnet-aspnet` | .NET + ASP.NET Core | 8080 |
| `api-ruby-sinatra` | Ruby + Sinatra | 8080 |
| `api-rust-axum` | Rust + Axum | 8080 |
| `api-php-slim` | PHP + Slim 4 | 8080 |

### Static Sites

| Template | Stack |
|---|---|
| `site-node-vite` | Node.js + Vite |
| `site-node-next` | Node.js + Next.js (static export) |
| `site-node-astro` | Node.js + Astro |
| `site-node-react-vite` | Node.js + React + Vite |
| `site-python-hugo` | Go/Python + Hugo |
| `site-python-mkdocs` | Python + MkDocs |
| `site-node-eleventy` | Node.js + 11ty |

### Scheduled Jobs

| Template | Stack |
|---|---|
| `job-node-cron` | Node.js |
| `job-python-cron` | Python |

## How It Works

1. When a service is created in Releasea, the platform copies the chosen template into a new repository.
2. The service root is set to the template folder.
3. You can customize the code freely after creation - the template is only the starting point.

## Learn More

- [Templates guide](https://docs.releasea.io/?doc=templates)
- [Public components](https://docs.releasea.io/?doc=public-components)
- [releasea.io](https://releasea.io)
