import {MDCTextField} from '@material/textfield';

document.addEventListener('DOMContentLoaded', () => {
  // ref: https://github.com/material-components/material-components-web/blob/master/docs/importing-js.md#instantiating-components-via-css-selector-queries
  const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'), function(el) {
    return new MDCTextField(el);
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
