class Point
  attr_reader :x, :y

  def initialize(x, y)
    @x = x
    @y = y
  end

  def to_s
    "{#{@x}, #{@y}}"
  end

  def distance(other)
    (dx(other) ** 2 + dy(other) ** 2) ** 0.5
  end

  def dx(other)
    (@x - other.x).abs
  end

  def dy(other)
    (@y - other.y).abs
  end

  def ==(other)
    return false unless other.is_a? Point
    @x == other.x && @y == other.y
  end

end
