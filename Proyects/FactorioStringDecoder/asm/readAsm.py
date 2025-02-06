import json
from lib import analyzeInstruction

# Read the .asm file
with open("code.asm", "r") as file:
    lines = file.readlines()

# Tokenize and store instructions
tokens = []
labels = {}  # Dictionary to store label positions
line_number = 1  # Instruction index

for line in lines:
    line = line.split(";")[0].strip()  # Remove comments
    if not line:
        continue  # Skip empty lines

    line = line.replace(",", "")  # Remove commas
    parts = line.upper().split()  # Convert to uppercase and split into tokens

    if parts[0].endswith(":"):  # If it's a label (ends with a colon)
        label_name = parts[0][:-1]  # Remove the colon
        labels[label_name] = line_number  # Store the label with its line number

        # If there are instructions after the label, store them
        if len(parts) > 1:
            tokens.append(parts[1:])  # Store instruction after the label
            line_number += 1  # Increase instruction index
    else:
        tokens.append(parts)  # Store instructions
        line_number += 1  # Increase instruction index

# Store all entities
entities = []
instruction_index = 1  # Keeps track of instruction positions

# Process each instruction
for instruction in tokens:
    entity = analyzeInstruction(instruction, instruction_index, labels)  # Pass labels to lib.py
    if entity:  # Only add if not None
        entities.append(entity)
        instruction_index += 1

# Build the final blueprint
blueprint = {
    "blueprint": {
        "icons": [
            {"signal": {"name": "pushbutton"}, "index": 1}
        ],
        "entities": entities,  # Insert all processed entities
        "item": "blueprint",
        "version": 562949955518464
    }
}

# Save as a JSON file
with open("./../encode/output.json", "w") as out_file:
    json.dump(blueprint, out_file, indent=4)

print("Blueprint JSON generated in output.json!")
