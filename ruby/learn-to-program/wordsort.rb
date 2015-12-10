puts 'Welcome! Enter the words you would like to sort, seperated by commas.'
$word_array = gets.chomp.split(', ')
puts 'Sorting words.....'
$word_array.sort!
puts $word_array.join(', ')
