require_relative 'wheel'

class Gear
  def initialize(chainring, cog, rim = nil, tire = nil)
    @chainring = chainring
    @cog = cog
    @wheel = Wheel.new(rim, tire)
  end

  def ratio
    @chainring / @cog.to_f
  end

  def gear_inches
    ratio * (@wheel.rim + 2 * @wheel.tire)
  end

end
