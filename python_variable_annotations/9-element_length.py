#!/usr/bin/env python3
"""Module that computes length of iterable elements."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return list of tuples (element, length).

    Args:
        lst (Iterable[Sequence]): iterable of sequences

    Returns:
        List[Tuple[Sequence, int]]: element and its length
    """
    return [(i, len(i)) for i in lst]
