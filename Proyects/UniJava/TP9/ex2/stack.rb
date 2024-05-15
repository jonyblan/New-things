class Stack
  attr_accessor :elements

  def initialize
    @elements = []
  end

  def peek
    check_if_empty
    @elements.last
  end

  def pop
    check_if_empty
    @elements.pop
  end

  def push(elem)
    @elements.append(elem)
  end

  def check_if_empty
    raise "Stack is empty" if empty?
  end

  def empty?
    @elements.empty?
  end
end
