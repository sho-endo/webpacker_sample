document.addEventListener('DOMContentLoaded', () => {
  mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
  [].map.call(document.querySelectorAll('.mdc-button'), el => {
    mdc.ripple.MDCRipple.attachTo(el);
  });

  const textField = document.getElementById('textarea');
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
