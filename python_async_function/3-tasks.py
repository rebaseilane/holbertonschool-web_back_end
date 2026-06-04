#!/usr/bin/env python3
"""Module that creates asyncio tasks."""

import asyncio
from typing import Any

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Create an asyncio Task for wait_random.

    Args:
        max_delay (int): maximum delay value

    Returns:
        asyncio.Task: task wrapping wait_random coroutine
    """
    return asyncio.create_task(wait_random(max_delay))
