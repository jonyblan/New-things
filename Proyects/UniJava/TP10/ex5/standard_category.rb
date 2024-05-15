require_relative 'category'

class StandardCategory < Category
  INITIAL_VALUE = 2
  INITIAL_DAYS = 2
  EXTRA_DAYS_VALUE = 1.5

  def initialize
    super(INITIAL_VALUE, INITIAL_DAYS, EXTRA_DAYS_VALUE)
  end
end
