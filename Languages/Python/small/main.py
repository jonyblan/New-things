from models import Transaction, Category
from utils import getBool, numToBool, getPositive, validateInputMenu, validateInputInt, waitForContinue
from config import CANT_OPTIONS

def main():
	cont = 1
	transactions = []
	categories = {}
	start()
	while cont:
		cont = userInput()
		analize(cont, transactions, categories)
	end()

def start():
	print("Welcome to the Personal Finance Tracker!")

# Returns what the user wants to do from the options in the menu
def userInput():
	user_input = -1
	while not validateInputMenu(user_input):
		showMenu()
		user_input = input("Enter a command: (0-" + str(CANT_OPTIONS-1) + ")\n")
	return int(user_input)

def showMenu():
	print("0: Exit")
	print("1: Add transaction")
	print("2: Add categorie")
	print("3: Show balance")
	print("4: Show transactions")
	print("5: Show categories")
	print("6: Open transaction")
	print("7: Open categorie")

def analize(cont, transactions, categories):
    if cont == 0:
        return

    contFunctions = {
        1: (addTransaction, transactions, categories),
        2: (addCategory, categories),
        3: (showBalance, transactions),
        4: (showTransactions, transactions),
        5: (showCategories, categories),
        6: (openTransaction, ),
        7: (openCategorie, ),
    }

    processCont, *args = contFunctions.get(cont, (defaultAnalize,))
    processCont(*args)

def addTransaction(transactions, categories):
	print("addTransaction")
	amount = getAmount()
	category = getExistingCategory(categories)
	isIncome = getIsIncome()
	newTransaction = Transaction(amount, category, isIncome)
	transactions.append(newTransaction)

def addCategory(categories):
	print("addCategory")
	categoryId = len(categories) + 1
	categoryName = getCategory()
	newCategory = Category(categoryId, categoryName)
	categories[categoryId] = newCategory

def showBalance(transactions):
	sum = 0
	for transaction in transactions:
		if(transaction.isIncome):
			sum+=transaction.amount
		else:
			sum-=transaction.amount
	print("The account balance is: " + str(sum))
	waitForContinue()

def showCategory(index, categories):
	if 1 <= index <= len(categories):
		category_instance = categories[index]
		category_instance.display()
	else:
		print("Invalid category index")
		exit(1)

def showTransaction(index, transactions):
	if 1 <= index <= len(categories):
		transaction_instance = categories[index]
		transaction_instance.display()
	else:
		print("Invalid transaction index")
		exit(1)

def showTransactions(transactions):
	notDone("showTransactions")

def showCategories(categories):
	notDone("showCategories")

def openTransaction(): # should show it and give the option to update it or delete it
	notDone("openTransaction")

def openCategorie(): # should show it and give the option to update it or delete it
	notDone("openCategorie")

def defaultAnalize():
	print("Error in analize()")
	exit(1)

def getAmount(): 
	return getPositive("Please enter the amount of money (>0): ")

def getExistingCategory(categories):
	inputStr = getCategory()
	while(not categoryExists(inputStr, categories)):
		print("Category doesn't exist (-1 to create that categorie and continue)")
		aux = input()
		if(aux == "-1"):
			index = len(categories) + 1
			newCategory = Category(index, inputStr)
			categories[index] = newCategory
			return inputStr
		else:
			inputStr = aux
	return inputStr

def getCategory():
	inputStr = ""
	while (inputStr == "" or inputStr == "-1"):
		if(inputStr == ""):
			inputStr = input("Please enter the name of the category: ")
		else:
			print("Name not valid")
			inputStr = input("Please enter the name of the category: ")
	return inputStr

def categoryExists(inputCategory, categories):
	for category in categories:
		if(inputCategory == category.name):
			return True
	return False

def getIsIncome():
	return getBool("Please enter if the transaction is an income or expense (1/0): ")

def end():
	notDone("end")

def notDone(name):
	print(name + "() NOT IMPLEMENTED YET")
	exit(1)

if __name__ == "__main__":
	main()