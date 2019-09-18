document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByName('text-change-btn')[0];
  btn.addEventListener('mouseover', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Hello, webpacker!';
    text.style.color = 'blue';
  });

  btn.addEventListener('mouseout', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Home#top';
    text.style.color = 'gray';
  })
});
