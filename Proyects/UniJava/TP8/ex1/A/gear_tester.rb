require_relative 'gear'

puts Gear.new(52, 11).ratio # => 4.7272727272727275

puts Gear.new(30, 27).ratio # => 1.1111111111111112

=begin

chainring = 52
cog       = 11
ratio     = chainring / cog.to_f
puts ratio # => 4.7272727272727275

chainring = 30
cog       = 27
ratio     = chainring / cog.to_f
puts ratio # => 1.1111111111111112

=end
