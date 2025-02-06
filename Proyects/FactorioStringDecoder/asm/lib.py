# lib.py

def analyzeInstruction(instruction, index, labels):
    # Define a dictionary of instruction functions
    instruction_set = {
        "MOV": mov,
		"XCHG": notImplemented,
		"STC": stc,
        "STC": stc,
        "CLC": clc,
        "CMC": cmc,
        "STD": std,
        "CLD": cld,
        "STI": sti,
        "CLI": cli,
        "PUSH": push,
        "PUSHF": pushf,
        "PUSHA": pusha,
        "POP": pop,
        "POPF": notImplemented,
        "POPA": notImplemented,
        "CBW": wontImplement,
        "CWD": wontImplement,
        "CWDE": wontImplement,
        "IN": wontImplement,
        "OUT": wontImplement,
        "ADD": add,
        "ADC": adc,
        "SUB": sub,
        "SBB": sbb,
        "DIV": div,
        "IDIV": notImplemented,
        "MUL": mul,
        "IMUL": notImplemented,
        "INC": inc,
        "DEC": dec,
        "CMP": cmp__,
        "SAL": notImplemented,
        "SAR": notImplemented,
        "RCL": notImplemented,
        "RCR": notImplemented,
        "ROL": notImplemented,
        "ROR": notImplemented,
        "NEG": neg,
        "NOT": not_,
        "AND": and_,
        "OR": or_,
        "XOR": xor_,
        "SHL": notImplemented,
        "SHR": notImplemented,
        "NOP": notImplemented,
        "LEA": notImplemented,
        "INT": wontImplement,
        "CALL": wontImplement,
        "RET": wontImplement,
        "JMP": jmp,
        "JE": je,
        "JNE": jne,
        "JZ": jz,
        "JNZ": jnz,
        "JCXZ": notImplemented,
        "JECXZ": notImplemented,
        "JP": jp,
        "JNP": jnp,
        "JPE": jpe,
        "JPO": jpo,
        "JA": wontImplement,
        "JAE": wontImplement,
        "JB": wontImplement,
        "JBE": wontImplement,
        "JNA": wontImplement,
        "JNAE": wontImplement,
        "JNB": wontImplement,
        "JNBE": wontImplement,
        "JC": wontImplement,
        "JNC": wontImplement,
        "JG": jg,
        "JGE": jge,
        "JL": jl,
        "JLE": jle,
        "JNG": jng,
        "JNGE": jnge,
        "JNL": jnl,
        "JNLE": jnle,
        "JO": jo,
        "JNO": jno,
        "JS": js,
        "JNS": jns,
    }

    # Get the operation from the first part of the instruction
    operation = instruction[0]

    # Check if the operation exists in the dictionary and call the corresponding function
    if operation in instruction_set:
        return instruction_set[operation](instruction, index, labels)
    else:
        print(f"Unknown instruction: {operation}")
        return None

def notImplemented(name, index, _):
    print(f"the operation {name} has not yet been implemented in factorio")

def wontImplement(name, index, _):
    print(f"the operation {name} will not be implemented in factorio")

def mov(instruction, index, _):
    # Example for MOV instruction
    if len(instruction) != 3:
        raise ValueError("Invalid MOV instruction format.")

    operation, destination, source = instruction


    # Case 3: MOV [1], A (Memory to Register)
    if source.isalpha() and destination.startswith("[") and destination.endswith("]"):
        sourceSignal = letter_to_signal(source)
        return generate_entity(index, "lava", "fluid", 1, "tank", "item", int(destination[1:-1]), sourceSignal, "virtual", 1)

    destSignal = letter_to_signal(destination)

    # Case 1: MOV A, B (Register to Register)
    if source.isalpha() and destination.isalpha():
        sourceSignal = letter_to_signal(source)
        return generate_entity(index, "lava", "fluid", 1, sourceSignal, "virtual", 1, destSignal, "virtual", 2)

    # Case 2: MOV A, [1] (Register to Memory)
    if source.startswith("[") and source.endswith("]") and destination.isalpha():
        return generate_entity(index, "lava", "fluid", 1, "spidertron", "item", int(source[1:-1]), destSignal, "virtual", 1)

    # Case 4: MOV A, 1 (Register to Immediate Value)
    if source.isdigit() and destination.isalpha():
        return generate_entity(index, "lava", "fluid", -1, destSignal, "virtual", source)

    else:
        raise ValueError("Invalid MOV instruction scenario.")

def stc(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 3)

def clc(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 4)

def cmc(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 5)

def std(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 6)

def cld(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 7)

def sti(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 8)

def cli(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 9)

def push(instruction, index, _):
    operation, destination = instruction
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 29, destSignal, "virtual", 1)

def pushf(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 11)

def pusha(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 12)

def pop(instruction, index, _):
    return generate_entity(index, "lava", "fluid", 13, "signal-info", "virtual", 1)

def add(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 21, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def adc(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 22, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def sub(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 23, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def sbb(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 24, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def div(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 25, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def mul(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 27, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def inc(instruction, index, _):
    operation, destination = instruction
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 29, destSignal, "virtual", 1)

def dec(instruction, index, _):
    operation, destination = instruction
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 30, destSignal, "virtual", 1)

def cmp_(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 31, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def neg(instruction, index, _):
    operation, destination = instruction
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 38, destSignal, "virtual", 1)

def not_(instruction, index, _):
    operation, destination = instruction
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 39, destSignal, "virtual", 1)

def and_(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 40, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def or_(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 41, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def xor_(instruction, index, _):
    operation, destination, source = instruction
	sourceSignal = letter_to_signal(source)
	destSignal = letter_to_signal(destination)
    return generate_entity(index, "lava", "fluid", 42, destSignal, "virtual", 1, sourceSignal, "virtual", 2)

def jmp(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 50, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def je(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 51, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jne(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 52, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jz(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 53, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jnz(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 54, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jp(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 57, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jnp(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 58, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jpe(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 59, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jpo(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 60, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jg(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 71, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jge(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 72, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jl(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 73, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jle(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 74, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jng(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 75, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jnge(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 76, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jnl(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 77, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jnle(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 78, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jo(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 79, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jno(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 80, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def js(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 81, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)

def jns(instruction, index, labels):
    target_line = labels.get(instruction[1], None) # Returns None if not found
    if target_line is None:
        print(f"Error: Label {instruction[1]} not found")
    else:
        return generate_entity(index, "lava", "fluid", 82, "signal-I", "virtual", target_line - 1, "signal-J", "virtual", 1)




def generate_entity(index, signal1, type1, value1, signal2=None, type2=None, value2=None, signal3=None, type3=None, value3=None):
    """Generates an entity JSON structure with optional signals."""
    
    # Base entity structure
    entity = {
        "entity_number": index,
        "name": "constant-combinator",
        "position": {
            "x": 0,
            "y": index
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
            "is_on": True
        }
    }

    # Function to add a signal if it exists
    def add_signal(filters, index, signal, signalType, value):
        if signal is not None and value is not None:
            filters.append({
                "index": index,
                "type": signalType,
                "name": signal,
                "quality": "normal",
                "comparator": "=",
                "count": value
            })

    # Add signals dynamically
    filters = entity["control_behavior"]["sections"]["sections"][0]["filters"]
    add_signal(filters, 1, signal1, type1, value1)
    add_signal(filters, 2, signal2, type2, value2)
    add_signal(filters, 3, signal3, type3, value3)

    return entity



def letter_to_signal(letter):
	if letter.upper() in 'ABCDEFGH':  # Check if the letter is between A and H
		return f"signal-{letter.upper()}"
	else:
		raise ValueError("Letter must be between A and H.")