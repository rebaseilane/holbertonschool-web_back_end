#!/usr/bin/env python3
"""Module that defines an async coroutine that waits a random delay."""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay and return it.

    Args:
        max_delay (int): maximum delay value

    Returns:
        float: the random delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay