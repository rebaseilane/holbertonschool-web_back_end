#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List, Dict, Optional


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
        self.__indexed_dataset = None

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

    def indexed_dataset(self) -> Dict[int, List]:
        """
        Returns dataset indexed by position.

        Returns:
            dict: index → row mapping
        """
        if self.__indexed_dataset is None:
            data = self.dataset()
            self.__indexed_dataset = {
                i: data[i] for i in range(len(data))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns deletion-resilient pagination data.

        Args:
            index (int): start index
            page_size (int): number of items

        Returns:
            dict: pagination result

        Raises:
            AssertionError: if index is invalid
        """

        assert isinstance(index, int), "index must be an integer"
        assert isinstance(page_size, int), "page_size must be an integer"
        assert index >= 0, "index must be >= 0"

        data = self.indexed_dataset()
        max_index = max(data.keys())

        if index > max_index:
            raise AssertionError

        result = []
        current_index = index
        collected = 0

        while collected < page_size and current_index <= max_index:
            if current_index in data:
                result.append(data[current_index])
                collected += 1
            current_index += 1

        next_index = current_index if current_index <= max_index else None

        return {
            "index": index,
            "data": result,
            "page_size": len(result),
            "next_index": next_index
        }