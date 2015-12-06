hours_in_a_year = 24 * 365

puts "There are #{hours_in_a_year} hours in a year."

minutes_in_a_decade = ((60 * 24) * 365) * 10

puts "There are #{minutes_in_a_decade} minutes in a decade."


puts "How old are you?"
age = gets.chomp

age_in_seconds = (((60 * 60) * 24) * 365) * age

puts "You are #{age_in_seconds} seconds old!"
