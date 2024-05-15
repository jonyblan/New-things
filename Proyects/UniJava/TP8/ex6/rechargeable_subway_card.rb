require_relative 'card'

class RechargeableSubwayCard < Card

  attr_accessor :money, :subway_central

  def initialize(subway_central)
    @subway_central = subway_central
    @money = 0
  end

  def recharge(cant)
    @money += cant
  end

  def ride
    if(@money < @subway_central.ride_cost)
      raise "Not enough funds"
    end
    @money -= @subway_central.ride_cost
  end

  def to_s
    "Rechargeable Subway Card [#{@subway_central.to_s}] [Balance: $#{@money}]"
  end
end
