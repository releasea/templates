# Job: Node Cron

Minimal Node.js scheduled job, ready for deployment on Releasea.

## What It Does

Executes a script, prints output, and exits. Designed to run as a Kubernetes CronJob.

## Local Development

```bash
npm install
npm run run
```

## Docker

```bash
docker build -t job-node-cron .
docker run job-node-cron
```

## Project Structure

```
job-node-cron/
  scripts/
    run.js
  package.json
  Dockerfile
```
