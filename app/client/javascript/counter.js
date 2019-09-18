document.addEventListener('DOMContentLoaded', () => {
  const textField = document.getElementById('text-field');
  textField.addEventListener('keyup', () => {
    const length = textField.value.length;
    document.getElementById('strLen').innerText = `${length}文字`;
  });

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', () => {
    textField.value = '';
    document.getElementById('strLen').innerText = '0文字';
  });
});
