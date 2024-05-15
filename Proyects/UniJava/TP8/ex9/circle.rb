class Circle < Ellipse
  def initialize(center, radius)
    super(center, radius * 2, radius * 2)
  end

  def ==(other)
    return false unless other.is_a? Circle
    @center == center && @diameter_x == other.diameter_x
  end
end
