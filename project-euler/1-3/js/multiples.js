multiples = function() {

  // Setting a base value
  answer = 0;

  // Sets userInput to the value entered
  userInput = document.getElementById("input1").value;

  // Finds all numbers starting from 1 and ending at value entered.
  for (multiple = 1; multiple < userInput; multiple++) {

    // Goes through all the numbers found and figures out if they are multiples
    // of either three or five.
    if ((multiple % 3 === 0) || (multiple % 5 === 0)) {
      // if the number is a multiple of three or five, it adds it to the answer
      // value.

      // For example, if the user inputs a value of 10, we list out all numbers
      // between 1 and 10.
      // We have 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.
      // Then we sort through those values and single out the ones that are
      // multiples of either three or five.
      // That leaves us with 3, 5, 6, and 9.
      // We then add each of those together as they are found.
      // Answer begins at 0, so when we find out that 3 is a multiple of 3 we
      // add it to 0, making answer equal 3. Then we find out that 5 is
      // a multiple of 5 (obviously) and we add that to answer as well, making
      // the total 8. We continue doing this until we have reached the user's
      // input, and then we return the answer to be printed.
      answer += multiple;
    }
  }
  document.getElementById("output1").innerHTML = "The sum of all the multiples of "
  + userInput + " is " + answer + ".";
};
