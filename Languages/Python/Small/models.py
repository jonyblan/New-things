class Transaction:
	def __init__(self, id, amount, categoryName, isIncome):
		self.id = id
		self.amount = amount
		self.categoryName = categoryName
		self.isIncome = isIncome

class Category:
	def __init__(self, id, name, value = 0):
		self.id = id
		self.name = name
		self.value = value