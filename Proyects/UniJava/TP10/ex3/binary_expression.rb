require_relative 'expression'

class BinaryExpression
  include Expression
  attr_accessor :left_exp, :right_exp

  def initialize(left_exp, right_exp)
    raise "Initialized not implemented"
  end

  def evaluate
    raise "evaluate not implemented"
  end

  private

  def init(left_exp, right_exp)
    @left_exp = left_exp
    @right_exp = right_exp
  end
end
