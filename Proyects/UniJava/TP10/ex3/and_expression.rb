#require_relative 'binary_expression'
require_relative 'expression'

#class AndExpression < BinaryExpression
class AndExpression
  include Expression

  def initialize(left_exp, right_exp)
    #super(left_exp, right_exp)
    @left_exp = left_exp
    @right_exp = right_exp
  end

  def evaluate
    @left_exp.evaluate && @right_exp.evaluate
  end
end
