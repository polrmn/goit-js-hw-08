import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000));

player.on('play', function () {
  console.log('played the video!'); 
}); 

function onPlay(data) {
     console.log(data.seconds);
     localStorage.setItem('videoplayer-current-time', data.seconds);
}




