require_relative 'shape'
class Triangle < Shape
  def initialize(first_point, second_point, third_point)
    @first_point = first_point
    @second_point = second_point
    @third_point = third_point
  end

  def perimeter
    first_side + second_side + third_side
  end

  def area
    semiperimiter = (first_side + second_side + third_side) / 2
    Math.sqrt(semiperimiter * (semiperimiter - first_side) * (semiperimiter - second_side) * (semiperimiter - third_side))
  end

  def first_side
    @first_point.distance(@second_point)
  end

  def second_side
    @second_point.distance(@third_point)
  end

  def third_side
    @third_point.distance(@first_point)
  end
end
