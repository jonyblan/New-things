require_relative 'shape'
class Rectangle < Shape
  def initialize(start_point, end_point)
    @start_point = start_point
    @end_point = end_point
  end

  def perimeter
    @start_point.dx(@end_point) * 2 + @start_point.dy(@end_point) * 2
  end

  def area
    @start_point.dx(@end_point) * @start_point.dy(@end_point)
  end
end
