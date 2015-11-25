previous_fib = 0
current_fib = 1
temp_fib = 0
sum = 0

puts "What number would you like to start at?"
limit = Integer(gets.chomp)

until current_fib > limit
  temp_fib = previous_fib + current_fib
  if temp_fib % 2 == 0
    sum += temp_fib
  end

  previous_fib = current_fib
  current_fib = temp_fib

  current_fib += 1
end

puts sum
