#!/usr/bin/env python3
"""Module that creates multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float.

    Args:
        multiplier (float): multiplier value

    Returns:
        Callable[[float], float]: function that multiplies input
    """
    def multiply(x: float) -> float:
        return x * multiplier

    return multiply