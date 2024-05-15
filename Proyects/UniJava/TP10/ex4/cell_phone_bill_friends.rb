require_relative 'cell_phone_bill'
require 'set'

class CellPhoneBillFriends < CellPhoneBill
  def initialize(max_friends, percentage, number)
    @max_friends = max_friends
    @percentage = percentage
    @friends = Set.new
    super(number)
  end

  def add_friend(number)
    raise "Maximum level of friends surpassed" if @friends.count == @max_friends
    @friends.add(number)
  end

  def remove_friend(number)
    @friends.delete(number)
  end

  def process_bill
    @calls.map{ |c| @friends.include?(c.to) ? c.cost * @percentage : c.cost }.reduce(:+)
  end
end
