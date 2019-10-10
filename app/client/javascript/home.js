import {MDCRipple} from '@material/ripple/index';

document.addEventListener('DOMContentLoaded', () => {
  const ripple = new MDCRipple(document.querySelector('#text-change-btn'));
  const btn = document.getElementById('text-change-btn');
  btn.addEventListener('click', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Hello, webpacker!';
    text.style.color = 'blue';
  });
});
