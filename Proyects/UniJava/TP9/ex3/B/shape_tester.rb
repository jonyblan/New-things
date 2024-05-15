require 'set'
require_relative 'circle'
require_relative 'ellipse'
require_relative 'point'
require_relative 'rectangle'
require_relative 'shape'
require_relative 'triangle'

my_figure_set = Set.new
my_figure_set.add(Circle.new(Point.new(10, 20), 15))
my_figure_set.add(Circle.new(Point.new(10, 20), 15))
my_figure_set.add(Rectangle.new(Point.new(10, 20), Point.new(20, 10)))
puts my_figure_set
