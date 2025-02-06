import base64
import zlib
import json

def decode_factorio_blueprint(bp_string):
    # Step 1: Remove the first byte (version byte)
    bp_string = bp_string[1:]

    # Step 2: Decode Base64
    compressed_data = base64.b64decode(bp_string)

    # Step 3: Decompress using zlib
    json_data = zlib.decompress(compressed_data).decode('utf-8')

    # Step 4: Parse and pretty-print the JSON
    return json.dumps(json.loads(json_data), indent=4)

# Example Usage
blueprint_string = "0eNqVUdtqwzAM/Rc9uwVncVkC+5JRgtMqq8CxU1/CQvC/T063jI29DL9IQuei4xV6k3DyZCO0K9DF2QDt6wqB3qw2ZWb1iNDClMKtTzE6C1kA2Su+QyvzWQDaSJHwgduapbNp7NHzgvgDL2BygSFcMj/THJRsjkrAwqV8qo6KFdhJ9M50Pd70TM6X1YCXggo/a1b9siNgIBPR/57GZSoeBpPoCrslo2fN3T1pw555YJ0f+egiPk7a61hk4WUbpJKQrLLYeauddyYf0wb8ZH6kdyA7uH8K5DM/zjd0JZ1Bm4C5hEwRR179/i0BM9+5ZahOVVM3jVJKPtenOucPkP+bzw=="
print(decode_factorio_blueprint(blueprint_string))
