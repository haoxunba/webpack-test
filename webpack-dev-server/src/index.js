import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'web1pack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe mo2ule!');
     printMe();
   })
 }