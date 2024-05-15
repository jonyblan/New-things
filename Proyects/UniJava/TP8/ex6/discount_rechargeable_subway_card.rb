class DiscountRechargeableSubwayCard < RechargeableSubwayCard
  def initialize(subway_central, percentage)
    super(subway_central)
    @percentage = percentage
  end

  def ride
    if(@money < (@subway_central.ride_cost * @percentage))
      raise "Not enough funds"
    end
    @money -= (@subway_central.ride_cost * @percentage)
  end
end
