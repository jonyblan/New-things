require_relative 'shape'
class Ellipse < Shape
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
end
