class Transaction:
	def __init__(self, id, amount, categoryId, isIncome):
		self.id = id
		self.amount = amount
		self.categoryId = categoryId
		self.isIncome = isIncome

	def display(self):
		print("Amount: {self.amount}, Category: {self.categoryId}")

class Category:
	def __init__(self, id, name, value = 0):
		self.id = id
		self.name = name
		self.value = value
	
	def display(self):
		print("Id: {self.id}, Name: {self.name}, Value: {self.value}")