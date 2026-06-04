#!/usr/bin/env python3
"""Module that runs tasks concurrently using task_wait_random."""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Run task_wait_random n times concurrently.

    Args:
        n (int): number of tasks
        max_delay (int): max delay value

    Returns:
        List[float]: sorted results of delays
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = []

    for task in asyncio.as_completed(tasks):
        results.append(await task)

    return results
