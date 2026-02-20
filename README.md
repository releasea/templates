# Releasea Templates

Starter templates used by the Releasea platform to bootstrap new services. Each folder is a self-contained project with ready-to-deploy defaults for its stack.

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

1. When a service is created on Releasea, the platform copies the chosen template into a new repository.
2. The service root is set to the template folder.
3. You can customize the code freely after creation -- the template is just a starting point.

## Learn More

- [Releasea Docs](https://docs.releasea.io)
- [releasea.io](https://releasea.io)
