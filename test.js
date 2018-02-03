$('body').html('version 02');

document.onkeyup = function(keyvalue) {
  var keyCode = keyvalue.keyCode;
  // left arrow
  if (keyCode == 37) {
    var menu = GetMenu();
    $('body').append(menu);
  }
  else if (keyCode == 39) {
    $('body').html('');
  }
}

function Wrap(elementType, innerHtml) {
  var result = '<' + elementType + '>';
  result += innerHtml;
  result += '</' + elementType + '>';
  return result;
}

function GetMenu() {
  return Wrap('p', 'hello');
}
