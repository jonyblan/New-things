require_relative 'circle'
require_relative 'ellipse'
require_relative 'point'
require_relative 'rectangle'
require_relative 'shape'
require_relative 'triangle'

ellipse = Ellipse.new(Point.new(0, 0), 2, 3)
puts ellipse
ellipse.move_up(3)
ellipse.move_right(5)
ellipse.move_down(1)
ellipse.move_left(9)
puts ellipse
