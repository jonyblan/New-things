import json

def blueprint_to_file(entities, file_name="blueprint.json"):
    # Create the base JSON structure
    blueprint = {
        "blueprint": {
            "icons": [],
            "entities": [],
            "item": "blueprint",
            "version": 562949955518464
        }
    }

    # Loop through the entities and create the corresponding structure
    for i, entity in enumerate(entities, start=1):
        entity_data = {
            "entity_number": i,
            "name": entity["name"],
            "position": {
                "x": entity["x"],
                "y": entity["y"]
            },
            "control_behavior": {
                "sections": {
                    "sections": [
                        {
                            "index": 1,
                            "filters": []
                        }
                    ]
                },
                "is_on": entity["is_on"]
            }
        }

        # Add signals to the filters
        for signal in entity["signals"]:
            entity_data["control_behavior"]["sections"]["sections"][0]["filters"].append({
                "index": signal["index"],
                "type": "virtual",
                "name": signal["name"],
                "quality": "normal",
                "comparator": "=",
                "count": signal["count"]
            })

        # Add entity to the entities list
        blueprint["blueprint"]["entities"].append(entity_data)

        # Add icon information (this can be extended or modified as per requirement)
        blueprint["blueprint"]["icons"].append({
            "signal": {
                "name": entity["name"]
            },
            "index": i
        })

    # Write the JSON to a file
    with open(file_name, "w", encoding="utf-8") as f:
        json.dump(blueprint, f, separators=(',', ':'), ensure_ascii=False, indent=4)

# Example Usage:
entities = [
    {
        "name": "pushbutton",
        "x": 63.5,
        "y": -27.5,
        "is_on": False,
        "signals": [
            {"index": 1, "name": "signal-A", "count": 1},
            {"index": 2, "name": "signal-B", "count": 1}
        ]
    },
    {
        "name": "pushbutton",
        "x": 64.5,
        "y": -27.5,
        "is_on": False,
        "signals": [
            {"index": 1, "name": "signal-C", "count": 1},
            {"index": 2, "name": "signal-D", "count": 1}
        ]
    }
]

# Call the function to create a blueprint JSON and save it in a file
blueprint_to_file(entities, "created.json")
