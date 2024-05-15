require_relative 'simple_expression'

class NotExpression < SimpleExpression
  def initialize(value)
    super(!value)
  end
  #def evaluate
    #!super.evaluate
  #end
end
