'use strict';

module.exports = function (input, options) {
  var el = document.createElement('textarea');
  var debug = options && options.debug;
  el.value = input;
  el.setAttribute('readonly', '');
  el.style.contain = 'strict';
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  el.style.fontSize = '12pt';
  var selection = document.getSelection();
  var originalRange = false;

  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  document.body.appendChild(el);
  el.select();
  el.selectionStart = 0;
  el.selectionEnd = input.length;
  var success = false;

  try {
    success = document.execCommand('copy');

    if (!success) {
      throw new Error('copy command was unsuccessful');
    }
  } catch (err) {
    debug && console.error("This error was caught while copying the text", err);
  } finally {
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }

    if (el) {
      document.body.removeChild(el);
    }
  }

  return success;
};