class Transaction:
    def __init__(self, amount, categoryId, isIncome):
        self.amount = amount
        self.categoryId = categoryId
        self.isIncome = isIncome

    def display(self):
        print("Amount: {self.amount}, Category: {self.categoryId}")

class Category:
	def __init__(self, id, name):
		self.id = id
		self.name = name
		self.value = 0
	
	def __init__(self, id, name, value):
		self.id = id
		self.name = name
		self.value = value
	
	def display(self):
		print("Id: {self.id}, Name: {self.name}, Value: {self.value}")