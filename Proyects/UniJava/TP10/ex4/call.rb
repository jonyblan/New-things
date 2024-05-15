class Call
  COST_PER_SECOND = 1

  def initialize(from, to, duration)
    @from = from
    @to = to
    @duration = duration
  end

  def to
    @to
  end

  def cost
    @duration * COST_PER_SECOND
  end
end
