class C < B
  def m_1
    super # 8
  end
  def m_2
    m_6 # 3
  end
  def m_6
    3 # 3
  end
end
# m_3 = 5
# m_4 = 20
# m_5 = 5
# m_7 = stack error ERROR no superclass method
