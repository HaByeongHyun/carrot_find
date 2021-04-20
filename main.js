'use strict';

let time = 60;
let min = '';
let sec = '';

const start = document.querySelector('.start');
start.addEventListener('click', () => {
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
});

function show_image(src, width, height, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  img.style.position = 'absolute';
  img.style.top = document.body.clientHeight * Math.random() + 'px';
  img.style.left = document.body.clientWidth * Math.random() + 'px';
  document.body.appendChild(img);
}

window.onload = () => {
  for (let i = 0; i < 10; i++) {
    show_image('/img/bug.png', 80, 80, 'bug');
    show_image('/img/carrot.png', 80, 80, 'bug');
  }
};

const img = document.querySelector('img');
const body = document.querySelector('body');
img.addEventListener('click', () => {
  body.removeChild(img);
});
