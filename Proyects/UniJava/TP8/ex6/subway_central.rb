class SubwayCentral
  attr_accessor :ride_cost

  def initialize(ride_cost)
    if(!(ride_cost.is_a? Numeric))
      raise "Invalid Ride Cost"
    end
    @ride_cost = ride_cost
  end

  def to_s
    "Central: Subway Central [$#{@ride_cost}]"
  end
end
