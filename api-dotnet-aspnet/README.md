# API: .NET ASP.NET

Minimal ASP.NET Core API ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/healthz` | `{ "status": "healthy" }` |

## Local Development

```bash
dotnet restore
dotnet run
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-dotnet-aspnet .
docker run -p 8080:8080 api-dotnet-aspnet
```

## Project Structure

```
api-dotnet-aspnet/
  Program.cs
  dotnet-webapi.csproj
  Dockerfile
```
