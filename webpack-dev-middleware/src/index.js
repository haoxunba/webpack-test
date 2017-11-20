import _ from 'lodash';
import printMe from './print.js';
import './index.css';
import icon from './1510887887.jpeg';
import {square} from './math'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'web1pack'], ' ');
  element.classList.add('change_color');

  btn.innerHTML = square(4);
  btn.onclick = printMe;

  const img = new Image();
  img.src = icon;
  element.appendChild(img);

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./math.js', function() {
    console.log('Accepting the updated printMe mo2ule!');
    printMe();
  })
}