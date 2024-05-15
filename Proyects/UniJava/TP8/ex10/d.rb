class D < B
  def m_1
    super.m_3 # 5 ERROR undefined method
  end
  def m_3
    2 # 2
  end
  def m_5
    m_4 # 20
  end
end
# m_2 = 5 ERROR undefined method
# m_4 = 20
# m_6 = stack error ERROR undefined method
# m_7 = stack error ERROR no superclass method
