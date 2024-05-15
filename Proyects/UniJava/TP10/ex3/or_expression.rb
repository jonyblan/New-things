require_relative 'binary_expression'

class OrExpression < BinaryExpression
  include Expression

  def initialize(left_exp, right_exp)
    init(left_exp, right_exp)
  end

  def evaluate
    (@left_exp.evaluate) || (@right_exp.evaluate)
  end
end
