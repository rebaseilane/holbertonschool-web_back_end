#!/usr/bin/env python3
"""
Simple pagination module.
"""

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns the start and end index for pagination.

    Args:
        page (int): page number (1-indexed)
        page_size (int): number of items per page

    Returns:
        tuple: (start_index, end_index)
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end


class Server:
    """
    Server class to paginate a dataset of popular baby names.
    """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        Initializes dataset cache.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Loads and caches dataset from CSV file.

        Returns:
            list: dataset rows without header
        """
        if self.__dataset is None:
            with open(self.DATA_FILE, "r", encoding="utf-8") as f:
                reader = csv.reader(f)
                dataset = list(reader)
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns a page of the dataset.

        Args:
            page (int): page number (1-indexed)
            page_size (int): number of rows per page

        Returns:
            list: paginated dataset
        """
        assert isinstance(page, int), "page must be an integer"
        assert isinstance(page_size, int), "page_size must be an integer"
        assert page > 0, "page must be > 0"
        assert page_size > 0, "page_size must be > 0"

        start, end = index_range(page, page_size)
        data = self.dataset()

        if start >= len(data):
            return []

        return data[start:end]
