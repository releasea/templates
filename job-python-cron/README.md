# Job: Python Cron

Minimal Python scheduled job, ready for deployment on Releasea.

## What It Does

Runs a script, logs execution details, and exits. Designed to run as a Kubernetes CronJob.

## Local Development

```bash
python -m venv .venv
source .venv/bin/activate
python scripts/run.py
```

## Docker

```bash
docker build -t job-python-cron .
docker run job-python-cron
```

## Project Structure

```
job-python-cron/
  scripts/
    run.py
  Dockerfile
```
