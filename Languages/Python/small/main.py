CANT_OPTIONS = 3

def main():
    cont = 1
    start()
    while(cont):
        cont = userInput()
        analize()
    end()
        
    # Example: Get user input
    user_input = None
    
    # Example: Process user input
    if user_input == "show_balance":
        show_balance()
    elif user_input == "add_transaction":
        add_transaction()
    else:
        print("Invalid command. Please try again.")

def start():
    print("Welcome to the Personal Finance Tracker!")

def userInput():
	user_input = None
	while errorInput(user_input):
		showMenu()
		user_input = input("Enter a command: (0-" + str(CANT_OPTIONS))

def errorInput(user_input):
	if(user_input >= CANT_OPTIONS or user_input < 0):
		return False
	return True


def showMenu():
    print("1: add transaction")
    print("2: show balance")

def show_balance():
    # Logic to display user's financial balance
    print("Showing balance...")

def add_transaction():
    # Logic to add a new transaction
    print("Adding a new transaction...")

def analize():


if __name__ == "__main__":
    main()