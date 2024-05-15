module Movable
  def move_up(_delta)
    raise 'Not implemented'
  end

  def move_right(_delta)
    raise 'Not implemented'
  end

  def move_down(_delta)
    move_up(-_delta)
  end

  def move_left(_delta)
    move_right(-_delta)
  end
end
