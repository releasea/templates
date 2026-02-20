# API: Java Spring Boot

Minimal Spring Boot service with Actuator, ready for deployment on Releasea.

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `{ "status": "ok" }` |
| GET | `/actuator/health` | `{ "status": "UP" }` |

## Local Development

```bash
mvn spring-boot:run
```

The server starts on `http://localhost:8080`.

## Docker

```bash
docker build -t api-java-springboot .
docker run -p 8080:8080 api-java-springboot
```

## Project Structure

```
api-java-springboot/
  src/
  pom.xml
  Dockerfile
```
