class A
  def m_1
    m_3 # 5
  end
  def m_2
    10 # 10
  end
  def m_3
    5 # 5
  end
  def m_4
    m_4 # stack error
  end
end
# m_5 = m_6 = m_7 = undefined
