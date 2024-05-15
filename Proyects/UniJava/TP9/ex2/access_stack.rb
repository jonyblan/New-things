require_relative 'stack'

class AccessStack < Stack
  attr_reader :pop_accesses, :push_accesses

  def initialize
    super
    @pop_accesses = 0
    @push_accesses = 0
  end

  def pop
    to_return = super
    @pop_accesses += 1
    to_return
  end

  def push(elem)
    to_return = super
    @push_accesses += 1
    to_return
  end
end
