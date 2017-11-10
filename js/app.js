//Loop through all songs for audio player

/******************************
FUNCTION DECLARATIONS
******************************/

function smoothScroll(hash) {
  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function() {
  // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
}

function scrollTrigger(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    const hash = this.hash;
    smoothScroll(hash);
  } // End if
}

function fadeTrigger(event) {
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    const hash = this.hash;
    // FadeOut landing and fadeIn rest of site (like entering a portal)
    $('#landing').fadeOut(function () {
      $('.inside').fadeIn(function () {
        smoothScroll(hash);
      }); //End fadeIn
    }); //End fadeOut
  } // End if
}

/******************************
LANDING
******************************/

// On page load default to only landing page displayed and remove hash value to reflect this
window.location.hash = '';
$('.inside').hide();
$('#landing').show();
// On link click, fade to rest of page and scroll to <div id="hash">
$('h4 a').click(fadeTrigger);
