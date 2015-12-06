command = ''

puts "Say hi to your grandma!"
command = gets.chomp

while command != 'BYE BYE BYE'
  if command != command.upcase
    puts "WHAT?? I CAN'T HEAR YOU!!"
    command = gets.chomp
  elsif command == command.upcase
    puts "NO, NOT SINCE #{rand(1900..1975).to_s}!"
    command = gets.chomp
  end
end

puts 'OKAY DEAR HAVE A NICE DAY!'
