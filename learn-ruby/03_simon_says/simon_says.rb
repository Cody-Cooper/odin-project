def echo(word)
  return word
end

def shout(word)
  return word.upcase!
end

def repeat(word, count = 2)
  ((word + " ") * count).strip
end

def start_of_word(word, num)
  return word[0..(num-1)]
end

def first_word(word)
  array = word.split
  return array[0]
end

def titleize(str)
  array = str.split
  for i in array
    if i != "and" and i != "over" and i != "the"
      i.capitalize!
    else array[0]
      array[0].capitalize!
    end
  end
  array.join(" ")
end
