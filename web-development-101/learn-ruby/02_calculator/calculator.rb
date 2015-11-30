def add(x, y)
  x + y
end

def subtract(x, y)
  x - y
end


def sum(array)
  if array.empty?
    return 0
  else
    array.inject {|sum, num| sum + num}
  end
end

def multiply(*number)
   number.inject {|product, num| product * num}
end


def power(x, y)
  x ** y
end

def factorial(number)
  if number == 0
    return 0
  else
  (1..number).inject(1) {|product, num| product * num}
  end
end
