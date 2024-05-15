class Movie
  attr_reader :name, :category
  def initialize(name, category)
    @name = name
    @category = category
  end

  def ==(other)
    @name == other.name
  end

  def eql?(other)
    self.==(other)
  end

  def hash
    [@name].hash
  end

  def evaluate(days)
    @category.evaluate(days)
  end

  def points(days)
    @category.points(days)
  end
end
