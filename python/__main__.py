"""Run with python -m ingest. All 100 documents commit together."""

import json
import logging
import os
from dataclasses import asdict

import httpx
import psycopg
from dotenv import load_dotenv


def main() -> None:
    load_dotenv()
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")

    # api that accepts name and message and returns a response
    api_url = os.environ.get("API_URL", "http://localhost:8000/messages")



if __name__ == "__main__":
    main()
