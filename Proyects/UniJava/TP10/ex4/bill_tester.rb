require_relative 'cell_phone_bill_friends'

bill = CellPhoneBillFriends.new(3, 0.25, 1)
bill.register_call(2, 2)
p bill.process_bill # 2
bill.add_friend(3)
bill.register_call(3, 4)
p bill.process_bill # 3
bill.remove_friend(3)
p bill.process_bill # 6
bill.add_friend(1)
bill.add_friend(2)
bill.add_friend(3)
p bill.process_bill # 1.5
#bill.add_friend(4) # Maximum level of friends surpassed (runtime error)
