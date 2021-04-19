'use strict';

let time = 60;
let min = '';
let sec = '';

const x = setInterval(() => {
  min = parseInt(time / 60);
  sec = time % 60;

  const timer = document.querySelector('.timer');
  timer.innerHTML = `${min}:${sec}`;
  time--;

  if (time < 0) {
    clearInterval(x);
    document.querySelector('.timer').innerHTML = '시간초과';
  }
}, 1000);

// 이미지 생성
const body = document.querySelector('body');
const image = new Image(80, 80);
image.src = `/img/bug.png`;
body.appendChild(image);
