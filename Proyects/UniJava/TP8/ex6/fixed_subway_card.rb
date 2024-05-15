require_relative 'card'

class FixedSubwayCard < Card
  def initialize(subway_central, cant_rides)
    @subway_central = subway_central
    @cant_rides = cant_rides
  end

  def ride
    if(@cant_rides == 0)
      raise "No rides available"
    end
    @cant_rides -= 1
  end

  def to_s
    "Fixed Subway Card [#{@subway_central.to_s}] [Rides: #{@cant_rides}]"
  end
end
