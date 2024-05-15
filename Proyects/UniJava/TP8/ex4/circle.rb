class Circle < Ellipse
  def initialize(center, radius)
    super(center, radius * 2, radius * 2)
  end
end
