class Gear
  def initialize(chainring, cog, rim, tire)
    @chainring = chainring
    @cog = cog
    @rim = rim
    @tire = tire
  end

  def ratio
    @chainring / @cog.to_f
  end

  def gear_inches
    ratio * (@rim + 2 * @tire)
  end

end
