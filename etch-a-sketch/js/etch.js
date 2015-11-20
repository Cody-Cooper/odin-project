$(document).ready(function() {

  height = $('#height').val();
  width = $('#width').val();

  console.log(height);
  console.log(width);


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
    console.log('Previous height: ' + height);
    console.log('Previous width: ' + width);

    // Gets values from height/width input boxes
    height = $('#height').val();
    width = $('#width').val();

    // Checks that the numbers are in the specified range
    if (height > 0 && height < 21) {
      if (width > 0 && width < 41) {

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