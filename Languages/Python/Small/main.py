from models import Transaction, Category
from utils import getBool, numToBool, getPositive, validateInputMenu, validateInputInt, waitForContinue, clearConsole, itemMenuStart, getInt
from config import CANT_OPTIONS

def main():
	cont = 1
	transactions = []
	categories = {}
	firstTransaction = Transaction(0, 10, "abc", 1)
	firstCategory = Category(0, "abc", 10)
	index = len(categories) + 1
	newCategory = Category(index, "abc", 10)
	transactions.append(firstTransaction)
	categories[index] = newCategory
	start()
	while cont:
		cont = userInput()
		analize(cont, transactions, categories)
	end()

def start():
	clearConsole()
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
        6: (openTransaction, transactions, categories),
        7: (openCategorie, ),
    }
    processCont, *args = contFunctions.get(cont, (defaultAnalize,))
    processCont(*args)

def addTransaction(transactions, categories):
	itemMenuStart("Add Transaction:")
	amount = getAmount()
	categoryName = getExistingCategory(categories)
	isIncome = getIsIncome()
	transactionId = len(transactions) + 1
	newTransaction = Transaction(transactionId, amount, categoryName, isIncome)
	transactions.append(newTransaction)
	updateValue(categories, categoryName, amount, isIncome)
	waitForContinue()

def updateValue(categories, categoryName, amount, is_income):
	index = getCategoryIndexByName(categories, categoryName)
	category = categories[index]
	if is_income:
		category.value += amount
	else:
		category.value -= amount

# must be sent an existing category
def getCategoryIndexByName(categories, categoryName):
	index = 1
	for index, category in categories.items():
		if category.name == categoryName:
			return index
		index += 1
	print("Error: Category not found")
	exit(1)

def addCategory(categories):
	itemMenuStart("Add Category:")
	categoryId = len(categories) + 1
	categoryName = getCategory()
	newCategory = Category(categoryId, categoryName)
	categories[categoryId] = newCategory
	waitForContinue()

def showBalance(transactions):
	itemMenuStart("Balance:")
	sum = 0
	for transaction in transactions:
		if(transaction.isIncome):
			sum+=transaction.amount
		else:
			sum-=transaction.amount
	print("The account balance is: " + str(sum))
	waitForContinue()

def showTransaction(transactions, index):
    if 0 <= index < len(transactions):
        print("Index: " + str(index) + ", Amount: " + str(transactions[index].amount) + ", Category: " + str(transactions[index].categoryName) + ", Is Income: " + str(transactions[index].isIncome))
    else:
        print("Invalid transaction index: " + str(index) + str(len(transactions)))
        exit(1)

def showTransactions(transactions):
	itemMenuStart("Transactions:")
	index = 0
	for transaction in transactions:
		showTransaction(transactions, index)
		index+=1
	waitForContinue()

def showCategory(categories, index, category):
	if 1 <= index <= len(categories):
		print("Id: " + str(index) + ", Name: " + category.name + ", Value: " + str(category.value))
	else:
		print("Invalid category index")
		exit(1)

def showCategories(categories):
	itemMenuStart("Categories:")
	for index, category in categories.items():
		showCategory(categories, index, category)
	waitForContinue()

def openTransaction(transactions, categories): # should show it and give the option to update it or delete it
	clearConsole()
	found = 0
	transactionId = getInt("Please enter the transaction ID", "Please enter a number")
	for transaction in transactions:
		if(transaction.id == transactionId):
			showTransaction(transactions, transactionId)
			found = 1
	if(not found):
		print("The index is not found in the transactions")
		waitForContinue()
		return
	edit = getBool("Would you like to edit it? (1/0)")
	if(not edit):
		waitForContinue()
		return
	option = 5
	while option:
		option = 5
		clearConsole()
		showTransaction(transactions, transactionId)
		print("0: Exit")
		print("1: Change Value")
		print("2: Change Category")
		print("3: Change income/expense")
		print("4: Delete Transaction")
		while(option < 0 or option > 4):
			print("Enter a command: (0-4)")
			option = getInt("", "Please enter a number")
		if(option == 1):
			newValue = getAmount()
			catIndex = getCategoryIndexByName(categories, transactions[transactionId].categoryName)
			categories[catIndex].value -= transactions[transactionId].amount
			if(transactions[transactionId].isIncome):
				categories[catIndex].value += newValue
			else:
				categories[catIndex].value -= newValue
			transactions[transactionId].amount = newValue
		if(option == 2):
			newCategory = getExistingCategory(categories)
			catIndex = getCategoryIndexByName(categories, transactions[transactionId].categoryName)
			newCatIndex = getCategoryIndexByName(categories, newCategory)
			categories[catIndex].value -= transactions[transactionId].amount
			categories[newCatIndex].value += transactions[transactionId].amount
			transactions[transactionId].categoryName = newCategory
		if(option == 3):
			newType = getIsIncome()
			catIndex = getCategoryIndexByName(categories, transactions[transactionId].categoryName)
			categories[catIndex].value -= transactions[transactionId].amount
			if(newType):
				categories[catIndex].value += transactions[transactionId].amount
			else:
				categories[catIndex].value -= transactions[transactionId].amount
			transactions[transactionId].isIncome = newType
		if(option == 4):
			print("Are you sure?")
			desition = getBool("1/0")
			if(desition):
				catIndex = getCategoryIndexByName(categories, transactions[transactionId].categoryName)
				categories[catIndex].value -= transactions[transactionId].amount
				del transactions[transactionId]
				option = 0
	waitForContinue()


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
			print("Please enter the name of the category: ")
			inputStr = input()
		else:
			print("Name not valid. Please enter the name of the category: ")
			inputStr = input()
	return inputStr

def getTransaction():
	transactionId = getPositive("Please enter the transaction ID")
	return transactionId

def categoryExists(inputCategory, categories):
	for index, category in categories.items():
		if(inputCategory == category.name):
			return True
	return False

def getIsIncome():
	return getBool("Please enter if the transaction is an income or expense (1/0): ")

def end():
	itemMenuStart("Thank you for using our program")

def notDone(name):
	print(name + "() NOT IMPLEMENTED YET")
	exit(1)

if __name__ == "__main__":
	main()