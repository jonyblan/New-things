def getBool(msg):
	user_input = -1
	while (0 <= user_input <= 1):
		user_input = input(msg)
		if(not validateInputInt(user_input)):
			user_input = -1
	return numToBool(user_input)

def numToBool(num):
	if(num == 0):
		return False
	return True

def getPositive(msg):
	user_input = -1
	while (user_input < 1):
		user_input = input(msg)
		if(not validateInputInt(user_input)):
			user_input = -1
	return int(user_input)

# Returns true if the input is between 0 and CANT_OPTIONS - 1
def validateInputMenu(user_input):
	if validateInputInt(user_input):
		if 0 <= user_input < CANT_OPTIONS:
			return True
	return False

def validateInputInt(input):
	try:
		input = int(input)
		return True
	except ValueError:
		return False