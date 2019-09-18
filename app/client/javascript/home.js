document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByName('text-change-btn')[0];
  btn.addEventListener('click', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Hello, webpacker!';
    text.style.color = 'blue';
  })
});
