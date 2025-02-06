import base64
import zlib
import json

# Custom JSON Encoder to force lowercase booleans
class FactorioJSONEncoder(json.JSONEncoder):
    def encode(self, obj):
        text = super().encode(obj)
        return text.replace("True", "true").replace("False", "false")

def encode_factorio_blueprint(json_data):
    # Step 1: Convert JSON to a string with correct boolean format
    json_string = json.dumps(json_data, separators=(',', ':'), ensure_ascii=False, cls=FactorioJSONEncoder)

    # Step 2: Compress using zlib (deflate)
    compressed_data = zlib.compress(json_string.encode('utf-8'), level=9)

    # Step 3: Encode to Base64
    bp_string = base64.b64encode(compressed_data).decode('utf-8')

    # Step 4: Add version byte (0 for now)
    return "0" + bp_string


with open("./../encode/output.json", "r", encoding="utf-8") as file:
    data = json.load(file)  # Booleans stay lowercase!

print(encode_factorio_blueprint(data))
