require_relative 'expression'

class BinaryExpression < Expression
  attr_accessor :left_exp, :right_exp
  attr_writer :value
  def initialize(left_exp, right_exp)
    @left_exp = left_exp
    @right_exp = right_exp
  end

  def evaluate
    @value
  end
end
