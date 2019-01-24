require('stylesheets/main.scss');

require('./_scroll.js');

document.querySelectorAll('.content h2').forEach(function (el) {
  var li = document.createElement('li');
  var a = document.createElement('a');

  a.innerHTML = el.innerHTML;
  a.setAttribute('href','#'+el.getAttribute('id'));

  li.append(a);

  document.querySelector('.nav ul').append(li);
});
