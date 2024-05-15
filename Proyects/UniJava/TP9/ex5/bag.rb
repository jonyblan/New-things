class Bag
  def initialize
    @elems = Hash.new {0}
  end

  def size
    @elems.length
  end

  def count(element)
    @elems[element]
  end

  def delete(element)
    @elems[element] -= 1 if @elems.key? element
    @elems.delete(element) if @elems[element].zero?
    @elems[element]
  end

  def to_s
    @elems.to_s
  end

  def add(element)
    @elems[element] += 1
  end
end
