$('body').append('version 02');

document.onkeyup = function(keyvalue) {
  var keyCode = keyvalue.keyCode;
  // left arrow
  if (keyCode == 37) {
    ShowMenu();
  }
  else {
    $('#keymenu').hide();
  }
}

function Wrap(elementType, innerHtml, style = '') {
  var result = '<' + elementType + style + '>';
  result += innerHtml;
  result += '</' + elementType + '>';
  return result;
}

function ShowMenu() {
  var innerContentItems = [
    Wrap('p', 'Item 1'),
    Wrap('p', 'Item 2'),
    Wrap('p', 'Item 3'),
    Wrap('p', 'Item 4')
  ];
  var innerContent = innerContentItems.join('');
  $('#keymenu').html(innerContent);
  $('#keymenu').show();
}
