require_relative 'category'

class ChildrenCategory < Category
  INITIAL_VALUE = 3
  INITIAL_DAYS = 3
  EXTRA_DAYS_VALUE = 1.5

  def initialize
    super(INITIAL_VALUE, INITIAL_DAYS, EXTRA_DAYS_VALUE)
  end
end
