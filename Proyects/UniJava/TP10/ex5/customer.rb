require_relative 'movie'

class Customer
  attr_accessor :charge, :points, :name
  def initialize(name)
    @name = name
    @points = 0
    @charge = 0
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

  def to_s
    "Resume points: #{@points}, charge: #{@charge}"
  end
end
