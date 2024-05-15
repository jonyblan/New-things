require_relative 'shape'
class Ellipse < Shape
  attr_reader :center, :diameter_x, :diameter_y

  def initialize(center, diameter_x, diameter_y)
    @center = center
    @diameter_x = diameter_x
    @diameter_y = diameter_y
  end

  def perimeter
    Math::PI / 2 * (@diameter_x + @diameter_y)
  end

  def area
    Math::PI / 4 * @diameter_x * @diameter_y
  end

  def ==(other)
    return false unless other.is_a? Ellipse
    @center == other.center && @diameter_x == other.diameter_x && @diameter_y == other.diameter_y
  end

  def hash
    [@center, @diameter_x, @diameter_y].hash
  end
end
