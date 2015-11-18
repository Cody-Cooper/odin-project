$(document).ready(function() {

  height = 16;
  width = 16;

  generateGrid = function() {
    $('#body').append('<div class="container"></div>');

    for(var i=0;i<height;i++){
  		$(".container").append("<ul></ul>");
  	}
  	for(var i=0;i<width;i++){
  		$("ul").append("<li></li>");
  	}
  };

  generateGrid();

  // Adds function to the new grid button
  newGrid = function() {

    // Asks the user what they would like the new height to be
    heightInput = prompt('What would you like the new height to be?',
    'Enter number here!');

    // Checks that the user entered a number, and that it is in specified range
    if ($.isNumeric(heightInput) || heightInput > 0 || heightInput < 129) {

      // Asks the user what they would like the new width to be
      widthInput = prompt('What would you like the new width to be?',
      'Enter number here!');

      // Checks that the user entered a number, and that it is in specified range.
      if ($.isNumeric(widthInput) || widthInput > 0 || widthInput < 129) {
        console.log('Previous height: ' + height);
        console.log('Previous width: ' + width);
        // Changes height and width to user values.
        height = heightInput;
        width = widthInput;
        console.log('Success!');
        console.log('New height: ' + height);
        console.log('New width: ' + width);
      } else { // If user did not enter a valid value for width
        alert('Please enter a number between 0 and 129!');
        console.log('Invalid input');
      }
    } else { // If user did not enter a valid value for height
      alert('Please enter a number between 0 and 129!');
      console.log('Invalid input');
    };
  };

  });
