#!/usr/bin/env python3
"""Module that creates tuple from key and squared value."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return tuple (k, v squared).

    Args:
        k (str): key string
        v (int | float): number to square

    Returns:
        tuple: (k, v squared)
    """
    return (k, float(v * v))