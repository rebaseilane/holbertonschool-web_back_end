#!/usr/bin/env python3
"""List all documents in a MongoDB collection"""


def list_all(mongo_collection):
    """
    Returns a list of all documents in a collection.

    Args:
        mongo_collection: pymongo collection object

    Returns:
        list of documents (empty list if none found)
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())