// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
let playerHeight = '390';
let playerWidth = '640';
let newDimensions = {
  width: playerWidth,
  height: playerHeight
};

// Determines player size
function setPlayerSize() {
  if ( window.innerWidth < 576 ) {
    playerHeight = '195';
    playerWidth = '320';
  } else if ( (window.innerWidth >= 576) && (window.innerWidth < 768) ) {
    playerHeight = '273';
    playerWidth = '448';
  } else if ( (window.innerWidth >= 768) && (window.innerWidth < 992) ) {
    playerHeight = '390';
    playerWidth = '640';
  } else if ( window.innerWidth >= 992 ) {
    playerHeight = '507';
    playerWidth = '832';
  }
}

// function changeSize() {
//   setTimeout(setPlayerSize(), 1000);
//   player.setSize(newDimensions);
// }

//Sets player size on page load
setPlayerSize();

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: playerHeight,
    width: playerWidth,
    playerVars: {
      listType:'playlist',
      list: 'PL0igqK_a_sAgTtXdUP-SXN2Fvu8mRvXlV'
    },
  });
}

function stopVideo() {
  player.stopVideo();
}

// window.onresize = changeSize;
