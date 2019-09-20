document.addEventListener('DOMContentLoaded', () => {
  mdc.ripple.MDCRipple.attachTo(document.querySelector('#text-change-btn'));
  const btn = document.getElementById('text-change-btn');
  btn.addEventListener('click', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Hello, webpacker!';
    text.style.color = 'blue';
  });
});
