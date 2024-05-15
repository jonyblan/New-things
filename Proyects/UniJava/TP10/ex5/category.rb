class Category
  def initialize(initial_value, initial_days, extra_days_value)
    @initial_value = initial_value
    @initial_days = initial_days
    @extra_days_value = extra_days_value
  end

  def evaluate(cant_days)
    ret = @initial_value
    ret += (cant_days > @initial_days ? (cant_days - @initial_days) * @extra_days_value : 0)
    ret
  end

  def points(cant_days)
    1
  end
end
