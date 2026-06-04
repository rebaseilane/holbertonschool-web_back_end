#!/usr/bin/env python3
"""Module that sums a list of floats."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return sum of a list of floats.

    Args:
        input_list (List[float]): list of floats

    Returns:
        float: sum of values
    """
    return sum(input_list)
