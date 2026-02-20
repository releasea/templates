from datetime import datetime, timezone


def main() -> None:
    now = datetime.now(timezone.utc).isoformat()
    print(f"[job-python-cron] executed at {now}")


if __name__ == "__main__":
    main()
