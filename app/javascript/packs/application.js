import '../src/application.scss'
require.context('../images', true, /\.(png|jpg|jpeg|svg)$/);

console.log('Hello World from Webpacker');

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByName('text-change-btn')[0];
  btn.addEventListener('click', () => {
    const text = document.getElementById('heading');
    text.innerText = 'Hello, webpacker!';
    text.style.color = 'blue';
  })
});
