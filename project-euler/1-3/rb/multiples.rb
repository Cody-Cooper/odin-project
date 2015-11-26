puts "What number would you like to get multiples of?"
user_input = Integer(gets.chomp)

multiple = 1
answer = 0

# Loops from 1 to user_input. If the number is a multiple of three or five,
# it adds the number the the answer variable.
until multiple == user_input
	if multiple % 3 == 0 || multiple % 5 == 0
		answer += multiple
	end
	multiple += 1
end

puts "The sum of all multiples of 3 and 5 in #{user_input} is #{answer}."
