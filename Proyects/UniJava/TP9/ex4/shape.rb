class Shape
  def initialize
    raise 'No se puede instanciar una Figura'
  end

  def perimeter
    raise 'Necesita implementar el método perimeter'
  end

  def area
    raise 'Necesita implementar el método area'
  end

  def ==(other)
    raise 'Necesita implementar el metodo ==(other)'
  end

  def <=>(other)
    area <=> other.area
  end

  def hash
    raise 'Necesita implementar el metodo hash'
  end

  def eql?(other)
    self.==(other)
  end
end
