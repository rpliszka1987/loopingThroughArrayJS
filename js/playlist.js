var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene',
  'Firestone'
];

function print(message) {
  document.write(message);
}

function goThroughArray(list) {
  var html = '<ol>';
  for (var i = 0; i < list.length; i++) {
    html += '<li>' + list[i] + '</li>';
  }
  html += '</ol>';
  print(html);
}

goThroughArray(playList);