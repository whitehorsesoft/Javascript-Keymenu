$('body').append('version 03');

var menuNum = 0;

document.onkeyup = function(keyvalue) {
  var keyCode = keyvalue.keyCode;
  // left arrow
  if (keyCode == 37) {
    ShowMenu();
  }
  else if (keyCode == 49) { // 1
    ShowSubMenu();
  }
  else {
    $('#keymenu').hide();
    menuNum = 0;
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

function ShowSubMenu() {
  var innerContentItems = [
    Wrap('p', 'Item 1'),
    Wrap('p', 'Item 2'),
    Wrap('p', 'Item 3'),
    Wrap('p', 'Item 4')
  ];
  var innerContent = innerContentItems.join('');
  innerContent = Wrap('div', 'SubMenu ' + menuNum + innerContent);
  menuNum = menuNum + 1;
  $('#keymenu').html(innerContent);
  $('#keymenu').show();
}
