#!/usr/bin/env python3
"""Module that sums integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return sum of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): mixed list

    Returns:
        float: sum of values
    """
    return float(sum(mxd_lst))