require 'set'
require_relative 'movie'
require_relative 'customer'

class VideoClub
  def initialize
    @customers = Set.new
    @movies = Set.new
  end

  def add_movie(name, category)
    @movies.add(Movie.new(name, category))
  end

  def add_customer(customer)
    @customers.add(Customer.new(customer))
  end

  def rent(movie, customer, days)

    aux_movie = Movie.new(movie, nil)
    aux_customer = Customer.new(customer)
    raise "Movie #{movie} was not found" unless @movies.include?(aux_movie)
    raise "Customer #{customer} was not found" unless @customers.include?(aux_customer)
    customer_object = @customers.find { |c| c.name == customer }
    movie_object = @movies.find { |c| c.name == movie }

    customer_object.charge += movie_object.evaluate(days)
    customer_object.points += movie_object.points(days)
  end

  def resume(customer)
    aux_customer = Customer.new(customer)
    raise "Customer #{aux_customer} was not found" unless @customers.include?(aux_customer)
    customer_object = @customers.find { |c| c.name == customer }
    customer_object
  end
end
