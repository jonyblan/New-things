class B < A
  def m_1
    8 # 8
  end
  def m_2
    super.m_1 # 5 ERROR undefined method
  end
  def m_4
    20 # 20
  end
  def m_5
    m_3 # 5
  end
  def m_7
    super.m_4 # stack error ERROR no superclass method
  end
end
# m_3 = 5
# m_6 = undefined method
