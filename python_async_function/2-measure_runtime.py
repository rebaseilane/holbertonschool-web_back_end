#!/usr/bin/env python3
"""Module that measures execution time of wait_n."""

import time
from typing import Callable

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure average runtime of wait_n.

    Args:
        n (int): number of tasks
        max_delay (int): max delay value

    Returns:
        float: average time per task
    """
    start = time.time()

    import asyncio
    asyncio.run(wait_n(n, max_delay))

    end = time.time()

    return (end - start) / n