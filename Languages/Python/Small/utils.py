from config import CANT_OPTIONS

def getBool(msg):
	inputInt = -1
	while (inputInt != 0 and inputInt != 1):
		inputStr = input(msg)
		if(not validateInputInt(inputStr)):
			inputInt = -1
		else:
			inputInt = int(inputStr)
	return numToBool(inputInt)

def numToBool(num):
	if(num == 0):
		return False
	return True

def getPositive(msg):
	inputInt = -1
	while (inputInt < 1):
		inputStr = input(msg)
		if(not validateInputInt(inputStr)):
			inputInt = -1
		else:
			inputInt = int(inputStr)
	return inputInt

# Returns true if the input is between 0 and CANT_OPTIONS - 1
def validateInputMenu(user_input):
    if validateInputInt(user_input):
        user_input = int(user_input)
        if 0 <= user_input < CANT_OPTIONS:
            return True
    return False

def validateInputInt(input):
	try:
		input = int(input)
		return True
	except ValueError:
		return False

def waitForContinue():
	input("Please press enter to continue...")
	clearConsole()

def clearConsole():
	print('\033c', end='')

def itemMenuStart(msg):
	clearConsole()
	print(msg)