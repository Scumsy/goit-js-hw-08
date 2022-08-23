import Player from '@vimeo/player';
import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// save current time -----------------------
const saveTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(Math.floor(data.seconds))
  );
};
player.on('timeupdate', _.throttle(saveTime, 1000));

// set current time from memory ------------------
const currentTimeFromMemory = localStorage.getItem('videoplayer-current-time');
if (currentTimeFromMemory) {
  player.setCurrentTime(currentTimeFromMemory);
}
