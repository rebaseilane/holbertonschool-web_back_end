#!/usr/bin/env python3
"""
Hypermedia pagination module.
"""

import csv
import math
from typing import List, Dict, Optional


def index_range(page: int, page_size: int):
    """
    Returns start and end index for pagination.

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
    Server class to paginate baby names dataset.
    """

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """
        Initializes dataset cache.
        """
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Loads dataset from CSV file.

        Returns:
            list: dataset without header
        """
        if self.__dataset is None:
            with open(self.DATA_FILE, "r", encoding="utf-8") as f:
                reader = csv.reader(f)
                data = list(reader)
            self.__dataset = data[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns a page of dataset.

        Args:
            page (int): page number
            page_size (int): number of items per page

        Returns:
            list: paginated data
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        data = self.dataset()

        if start >= len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Returns hypermedia pagination data.

        Args:
            page (int): page number
            page_size (int): number of items per page

        Returns:
            dict: hypermedia pagination response
        """
        data_page = self.get_page(page, page_size)
        dataset = self.dataset()

        total_items = len(dataset)
        total_pages = math.ceil(total_items / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data_page),
            "page": page,
            "data": data_page,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }