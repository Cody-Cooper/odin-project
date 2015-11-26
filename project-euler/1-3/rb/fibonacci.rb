previous_fib = 0
current_fib = 1
temp_fib = 0
sum = 0

puts "What number would you like to start at?"
limit = Integer(gets.chomp)


# Loops from 1 to limit. Gets the sum of previous_fib and current_fib and stores
# it in variable temp_fib. If temp_fib is an even number, add it to the sum.
until current_fib > limit
  temp_fib = previous_fib + current_fib
  if temp_fib % 2 == 0
    sum += temp_fib
  end

  # Sets the current_fib to the previous_fib and the current_fib to the temp_fib
  previous_fib = current_fib
  current_fib = temp_fib

  current_fib += 1
end

puts sum
