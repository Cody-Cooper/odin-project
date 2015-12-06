puts "How many bottles of beer are on the wall?"
bottles = gets.chomp

while bottles.to_i > 2
  puts "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer."
  bottles = bottles.to_i - 1
  puts "Take one down, pass it around, #{bottles.to_s} bottles of beer on the wall!"
  puts ""
end

puts "1 bottle of beer on the wall, 1 bottle of beer."
puts "If that one bottle should happen to fall, what a waste of alchohol!"
