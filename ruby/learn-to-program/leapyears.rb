puts "Enter a starting year:"
year = gets.chomp.to_i

puts "Enter an ending year:"
end_year = gets.chomp.to_i

def find_leap_years(start, ending)
  while start < ending + 1
    if ((start % 4 == 0 and start % 100 != 0) or (start % 100 ==
      0 and start % 400 == 0))
      puts start
    end
    start += 1
  end
end

if end_year < year
  puts "Your ending year must be greater than your starting year!"
else
 puts "Leap years between #{year} and #{end_year}:"
  find_leap_years(year, end_year)
end
