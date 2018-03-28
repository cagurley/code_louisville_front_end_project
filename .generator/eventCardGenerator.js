let eventCardCode = "";

function processForm(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    let commentSegment1 = document.getElementById('commentvenue').value;
    let commentSegment2 = document.getElementById('commentyear').value;
    let commentSegment3 = document.getElementById('commentmonth').value;
    let commentSegment4 = document.getElementById('commentday').value;
    let bannerHref = document.getElementById('bannerhref').value;
    let bannerAlt = document.getElementById('banneralt').value;
    let showTitle = document.getElementById('showtitle').value;
    let showDescr = document.getElementById('showdescr').value;
    let showLineup = document.getElementById('showlineup').value;
    let venue = document.getElementById('venue').value;
    let dateTimePrice = document.getElementById('datetimeprice').value;
    let originHref = document.getElementById('originhref').value;

    eventCardCode +=
      "<!-- Begin event card: " + commentSegment1 + "_" + commentSegment2 + commentSegment3 + commentSegment4 + " -->\n" +
      "<div class=\"card mx-auto\">\n" +
      "  <img class=\"card-img-top\" src=\"" + bannerHref + "\" alt=\"" + bannerAlt + "\">\n" +
      "  <div class=\"card-body\">\n" +
      "    <h4 class=\"card-title\">" + showTitle + "</h4>\n" +
      "    <p class=\"card-text\">" + showDescr + "</p>\n" +
      "  </div>\n" +
      "  <ul class=\"list-group list-group-flush\">\n" +
      "    <li class=\"list-group-item\">" + showLineup + "</li>\n" +
      "    <li class=\"list-group-item\">" + venue + "</li>\n" +
      "    <li class=\"list-group-item\">" + dateTimePrice + "</li>\n" +
      "  </ul>\n" +
      "  <div class=\"card-body\">\n" +
      "    <a href=\"" + originHref + "\" target=\"_blank\" class=\"card-link\">Click for more details.</a>\n" +
      "  </div>\n" +
      "</div>\n" +
      "<!-- End event card: " + commentSegment1 + "_" + commentSegment2 + commentSegment3 + commentSegment4 + " -->\n";
    document.getElementById('output').value = eventCardCode;
    $('html, body').animate({
      scrollTop: $('#output').offset().top
    }, 0);
    // False returned to prevent the default form behavior
    return false;
}

var form = document.getElementById('ecform');
if (form.attachEvent) {
    form.attachEvent('submit', processForm);
} else {
    form.addEventListener('submit', processForm);
}
