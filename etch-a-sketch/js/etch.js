$(document).ready(function() {

  // Setting default values

  height = $('#height').val();
  width = $('#width').val();

  fillType = 1;

  gridOutline = true;

  randomColorString = '';
  randomTintedString = '';


// --- RANDOM COLORS -----------------------------------------------------------

  // Generates a random rounded number between 0-255 for the rgb color codes
  generateColor = function() {
    var randomNumber = Math.random() * (255 - 0);
    return Math.round(randomNumber)
  };

 // Generates an RGB string using generateColor() to supply random numbers.
  rgbGenerator = function(tint) {
    if (!tint) {
      // returns a string containing an RGB color string
      // ex: rgb(255, 255, 255)
      rgbString = 'rgb(' + generateColor() + ', ' +
      generateColor() + ', ' + generateColor() + ')';

      return rgbString;
    } else {
      // Saves colors to a variable, allowing color tinting.
      var r = generateColor();
      var g = generateColor();
      var b = generateColor();
      // Darkens the colors
      var rt = Math.round(r * 0.75);
      var gt = Math.round(g * 0.75);
      var bt = Math.round(b * 0.75);

      rgbString = 'rgb(' + r + ', ' +
      g + ', ' + b + ')';

      tintedString = 'rgb(' + rt + ', ' +
      gt + ', ' + bt + ')';

      // Returns an array containing both strings.
      return [rgbString, tintedString];
    };
  };

// --- FILL FUNCTIONALITY ------------------------------------------------------

    // A function that allows user to fill squares on the grid with color.
  sketch = function() {
    if (fillType === 1) { // If Random Colors is chosen
      $('li').hover(function() {
        $(this).css({
          'background-color' : rgbGenerator(false),
          'border' : '1px solid #FAFAFA'
        });
      });
    } else if (fillType === 2) { // If Monochrome is chosen
      // Sets base opacity
      $('li').css('opacity', 0.1);

      $('li').hover(function() {
        // Assigns the current opacity value of li elements to the
        // opacity variable
        var opacity = +$(this).css("opacity");

        $(this).css({
          'background-color' : '#757575',
          'border' : '1px solid #FAFAFA',
          'opacity' : opacity += 0.05 // darkens square each time user hovers
        });
      });
    } else if (fillType === 3) { // If shooting star is chosen

      $('li').css({
        'background-color' : '#1A237E',
        'border' : '1px solid #FAFAFA',
        'opacity' : 1
      });

      $('li').hover(function() {
        $(this).css({
          'background-color' : '#FFF176',
          'border' : '1px solid #FAFAFA',
        });
      });

      // Fades to default color when mouse leaves the square
      $('li').mouseout(function() {
        // Animates background color using jQuery UI core effects
        $(this).animate({ backgroundColor: "rgb(26, 35, 126)" })
      });

    } else {
      alert('Nice try!');
    }
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
    var opacity = +$('li').css("opacity");

    if (fillType === 2) {
      $('li').css('opacity', 0.1);
    } else {
      $('li').css('opacity', 1);
    };

    if (gridOutline) {
      $('li').css('border', '1px solid black');
    } else {
      $('li').css('border', '1px solid #FAFAFA');
    };
  };


// --- NO OUTLINE BUTTON -------------------------------------------------------

  // Need to work on this.

// --- RANDOM COLORS BUTTON ----------------------------------------------------

  $('#random_colors').hover(function() {
      // Generates an array containing two RGB strings and assigns them to
      // a variable.
    colorArray = rgbGenerator(true);
    randomColorString = colorArray[0];
    randomTintedString = colorArray[1];

      // Applies a random color to the button when user hovers over it.
    $(this).css('background-color', randomColorString);
    $(this).css('color', '#FAFAFA');

      // Returns button to default value when the users mouse leaves the button.
    $(this).mouseout(function() {
      $(this).css('background-color', '#FAFAFA')
      $(this).css('color', '');

    });

  });

    // Applies a tinted color to the button when the user clicks.
  $('#random_colors').mousedown(function() {
     $(this).css('background-color', randomTintedString);
     // Clears all previous colors on grid if the user changed fill types.
     if (fillType != 1) {
       clearGrid();
     } else if (fillType === 2) {
       $('li').css('opacity', 1);
     };

     fillType = 1;
     console.log('New fill type: ' + fillType);
     sketch();
   });

    // Un-tints the button after user releases mouse.
   $('#random_colors').mouseup(function() {
     $(this).css('background-color', randomColorString);
   });

// --- MONOCHROME BUTTON -------------------------------------------------------

    // Applies color to the button when user hovers over it.
  $('#monochrome').hover(function() {
    $(this).css('background-color', '#616161');
    $(this).css('color', '#FAFAFA');
  });

    // Tints button when the user clicks the button.
  $('#monochrome').mousedown(function() {
    $(this).css('background-color', '#212121');
    // Clears all previous colors on grid if the user changed fill types.
    if (fillType != 2) {
      clearGrid();
    };
    fillType = 2;
    console.log('New fill type: ' + fillType);
    sketch();
  });

  // Un-tints button when user releases mouse.
  $('#monochrome').mouseup(function() {
    $(this).css('background-color', '#616161');
  });

  // Returns button to default color after the user's mouse leaves the button.
  $('#monochrome').mouseout(function() {
    $(this).css('background-color', '#FAFAFA');
    $(this).css('color', '');
  });

// --- SHOOTING STAR BUTTON ----------------------------------------------------

  // Currently disabled

  // Applies color to the button when user hovers over it.
  $('#shooting_star').hover(function() {
    $(this).css('background-color', '#303F9F');
    $(this).css('color', '#FFF176');
  });

  // Tints button when the user clicks the button.
  $('#shooting_star').mousedown(function() {
    $(this).css('background-color', '#1A237E');
    // Clears all previous colors on grid if the user changed fill types.
    if (fillType != 3) {
      clearGrid();
    };
    fillType = 3;
    console.log('New fill type: ' + fillType);
    sketch();
  });

  // Un-tints button when user releases mouse.
  $('#shooting_star').mouseup(function() {
    $(this).css('background-color', '#303F9F');
  });

  // Returns button to default color after the user's mouse leaves the button.
  $('#shooting_star').mouseout(function() {
    $(this).css('background-color', '#FAFAFA');
    $(this).css('color', '');
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
