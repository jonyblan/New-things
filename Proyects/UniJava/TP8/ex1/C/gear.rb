class Gear
  def initialize(chainring, cog, wheel = nil)
    @chainring = chainring
    @cog = cog
    @wheel = wheel
  end

  def ratio
    @chainring / @cog.to_f
  end

  def gear_inches
    ratio * (@wheel.rim + 2 * @wheel.tire)
  end

end
