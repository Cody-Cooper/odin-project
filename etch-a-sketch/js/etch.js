$(document).ready(function() {

  height = 16;
  width = 16;


// --- RANDOM COLORS -----------------------------------------------------------

  // Generates a random rounded number between 0-255 for the rgb color codes
  generateColor = function(min, max) {
    var randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber)
  };

 // Generates an RGB code using generateColor() to supply random numbers.
  rgbGenerator = function(tint) {
    if (!tint) {
      var r = generateColor(0, 255);
      var g = generateColor(0, 255);
      var b = generateColor(0, 255);

      rgbString = 'rgb(' + r + ', ' +
      g + ', ' + b + ')';

      return rgbString;
    } else {
      var r = generateColor(0, 255);
      var g = generateColor(0, 255);
      var b = generateColor(0, 255);

      var rt = r * 0.25;
      var gt = g * 0.25;
      var bt = b * 0.25;

      rgbString = 'rgb(' + r + ', ' +
      g + ', ' + b + ')';

      tintedString = 'rgb(' + rt + ', ' +
      gt + ', ' + bt + ')';

      return [rgbString, tintedString];
    };
  };

  // Allows for squares to be painted using randmly chosen colors.
  sketch = function() {
    $("li").hover(function() {
      $(this).css('background-color', rgbGenerator(false));
      // console.log('(' + r + ',' + g + ',' + b + ')');
    });
  };

// --- GRID GENERATION ---------------------------------------------------------

  // Adds function that generates a grid.
  generateGrid = function() {
    // Adds a container div to the #body
    $('#body').append('<div class="container"></div>');

    // Adds grid boxes.
    for(var i=0;i<height;i++){
  		$(".container").append("<ul></ul>");
  	}
  	for(var i=0;i<width;i++){
  		$("ul").append("<li></li>");
  	}
  };

  // Adds function to the new grid button
  newGrid = function() {

    // Asks the user what they would like the new height to be
    heightInput = prompt('What would you like the new height to be?',
    'Enter a number between 0 and 20.');

    // Checks that the user entered a number, and that it is in specified range
    if ($.isNumeric(heightInput) && heightInput > 0 && heightInput < 21) {

      // Asks the user what they would like the new width to be
      widthInput = prompt('What would you like the new width to be?',
      'Enter a number between 0 and 40.');

      // Checks that the user entered a number, and that it is in specified range.
      if ($.isNumeric(widthInput) && widthInput > 0 && widthInput < 41) {
        console.log('Previous height: ' + height);
        console.log('Previous width: ' + width);
        // Changes height and width to user values.
        height = heightInput;
        width = widthInput;

        // Removes previous container
        console.log('Removing previous container...');
        $('.container').remove();
        console.log('Success!');

        console.log('Adding new container...');
        generateGrid();
        console.log('Success!');
        console.log('New height: ' + height);
        console.log('New width: ' + width);


      } else { // If user did not enter a valid value for width
        alert('Please enter a number between 0 and 40!');
        console.log('Invalid input');
      }

      sketch();

    } else { // If user did not enter a valid value for height
      alert('Please enter a number between 0 and 20!');
      console.log('Invalid input');
    };
  };

// --- CLEAR GRID BUTTON ------------------------------------------------------

  clearGrid = function() {
    $('li').css('background-color', '#FAFAFA');
  };

// --- RANDOM COLORS BUTTON ----------------------------------------------------

  $('#random_colors').hover(function(){

    colorArray = rgbGenerator(true);

    $(this).css('background-color', colorArray[0]);

    $('#random_colors').click(function() {
      $(this).css('background-color:active', colorArray[1]);
    });

    $(this).mouseout(function() {
      $(this).css('background-color', '#FAFAFA')
    });

  });


// --- MISC --------------------------------------------------------------------

// Removes focus from button after release.
  $('button').mouseup(function() {
    $(this).blur();
  });

// --- BEGIN -------------------------------------------------------------------

  generateGrid(); // Generates starting grid

  sketch();

  });
