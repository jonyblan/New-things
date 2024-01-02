CANT_ELEMS = 2

def sum(x, y)
	x + y
end

def main
	numbers = []
	answer = 0

	# Input loop
	CANT_ELEMS.times do |i|
    print "Enter element #{i + 1}: "
    element = gets.chomp.to_i
    numbers << element
    answer = sum(answer, element)
	end

	# Output
	puts "Sum: #{answer}"
end

# Check if the script is being run directly
if __FILE__ == $PROGRAM_NAME
	main
end