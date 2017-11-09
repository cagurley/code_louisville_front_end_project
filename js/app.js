//Loop through all songs for audio player
// $(window).scroll(function (event) {
//   $('.page').slideUp();
// });

function smoothScroll(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

}

// Add smooth scrolling on all links inside the navbar
// $('a').on('click', smoothScroll);

// On page load
window.location.hash = '';
$('.inside').hide();
$('#landing').show();

$('h4 a').click(function (event) {
  const hash = this.hash;
  event.preventDefault();
  $('#landing').fadeOut(function () {
    $('.inside').fadeIn(function () {
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    });
  });
});
