#!/usr/bin/env python3
"""Return schools that match a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """
    Finds schools that have a given topic.

    Args:
        mongo_collection: pymongo collection object
        topic: string topic to search

    Returns:
        list of matching documents
    """
    return list(mongo_collection.find({"topics": topic}))