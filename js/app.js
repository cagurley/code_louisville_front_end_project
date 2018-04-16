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

function fadeTriggerEnter(event) {
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

function fadeTriggerReturn(event) {
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    const hash = this.hash;
    // FadeOut landing and fadeIn rest of site (like entering a portal)
    $('.inside').fadeOut(function () {
      $('#landing').fadeIn(function () {
        smoothScroll(hash);
      }); //End fadeIn
    }); //End fadeOut
  } // End if
}

/******************************
TRANSITIONS
******************************/

// On page load default to only landing page displayed and remove hash value to reflect this
window.location.hash = '';
$('.inside').hide();
$('#landing').show();
// On landing link click, fade to rest of page and scroll to <div id="hash">
$('.landlink').click(fadeTriggerEnter);
// On nav link click, scroll to <div id="hash">
$('.nav-link').click(scrollTrigger);
// On nav brand link click, fade to landing page and scroll to <div id="hash">
$('#return').click(fadeTriggerReturn);

/******************************
AUDIO
******************************/

// Initialize audio track variable and volume
var audio = new Audio('music/hail_prometheus.mp3');
audio.volume = 0.5;
// Toggle classes and play/pause contextually on .svg click
// $('#audioland, #audiofoot').click( function () {
//   $('#audioland').toggleClass('lplay');
//   $('#audiofoot').toggleClass('fplay');
//   $('#audioland').toggleClass('lpause');
//   $('#audiofoot').toggleClass('fpause');
//   if ($('#audioland').hasClass('lplay')) {
//     audio.pause();
//   } else {
//     audio.play();
//   }
// });

$('#lpause, #fpause').hide();

$('#lplay').click( function () {
  $('#lplay').hide()
  $('#lpause').show()
});

$('#audioland, #audiofoot').click( function () {
  $('#audioland').toggleClass('lplay');
  $('#audiofoot').toggleClass('fplay');
  $('#audioland').toggleClass('lpause');
  $('#audiofoot').toggleClass('fpause');
  if ($('#audioland').hasClass('lplay')) {
    audio.pause();
  } else {
    audio.play();
  }
});
