#!/usr/bin/env python3
"""Update school topics by name"""


def update_topics(mongo_collection, name, topics):
    """
    Updates topics of a school document.

    Args:
        mongo_collection: pymongo collection object
        name: school name
        topics: list of topics

    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    