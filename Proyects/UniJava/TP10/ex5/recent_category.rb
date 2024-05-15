require_relative 'category'

class RecentCategory < Category
  INITIAL_VALUE = 0
  INITIAL_DAYS = 0
  EXTRA_DAYS_VALUE = 3

  def initialize
    super(INITIAL_VALUE, INITIAL_DAYS, EXTRA_DAYS_VALUE)
  end

  def points(cant_days)
    cant_days + 1
  end
end
