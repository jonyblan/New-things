module Expression
  def evaluate
    raise 'Not implemented'
  end

  def not
    require_relative 'not_expression'
    NotExpression.new(self)
  end

  def and(other)
    require_relative 'and_expression'
    AndExpression.new(self, other)
  end

  def or(other)
    require_relative 'or_expression'
    OrExpression.new(self, other)
  end
end
