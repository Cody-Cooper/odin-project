fibonacci = function() {
  // Setting base values
  previousFib = 0;
  currentFib = 1;
  tempFib = 0;
  sum = 0;

  // Sets userInput to the value entered
  userInput = document.getElementById("input2").value;

  // While the current fibonacci number is less than the user's value
  while (currentFib < userInput) {
    // add the previous fibonacci number to the current one and place the value
    // into the variable tempFib
    tempFib = previousFib + currentFib;

    // We then check to see if the new fibonacci number in the tempFib variable
    // is an even number
    if (tempFib % 2 === 0) {
        // If it is an even number, we add it to the sum of all previously found
        // even fibonacci numbers.
        sum += tempFib;
    }

    // We then change the previouslyFib value to the currentFib variable, and
    // the currentFib value to the tempFib variable. This allows us to cycle
    // through the numbers as needed.
    previousFib = currentFib;
    currentFib = tempFib;
  }

  // We then return the sum.
  document.getElementById("output2").innerHTML = sum;
};
