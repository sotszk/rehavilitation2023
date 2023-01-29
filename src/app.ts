import '~/src/js/helloworld';

import Typed from 'typed.js';
import add from '~/src/js/add';

const result = add(20, 40);
console.log('20 + 40 は？', result);

new Typed('.typed', {
  strings: ['Hi,', "I'm Sota Suzuki."],
  typeSpeed: 40,
  showCursor: false,
});

const menuOpenerEl = document.getElementById('menu-opener');
const menuEl = document.getElementById('menu');
const mainEl = document.getElementById('main');

const toggleMenu = () => {
  const currentState = menuEl.classList.contains('is-visible')
    ? 'open'
    : 'close';

  if (currentState === 'open') {
    menuEl.classList.remove('is-visible');
    mainEl.classList.remove('is-translated');
  } else {
    menuEl.classList.add('is-visible');
    mainEl.classList.add('is-translated');
  }
};

menuOpenerEl.addEventListener('click', (evt) => {
  toggleMenu();
  evt.stopPropagation();
  evt.preventDefault();
});

mainEl.addEventListener('click', (evt) => {
  const isClickable = mainEl.classList.contains('is-translated');
  if (isClickable) {
    toggleMenu();
    evt.preventDefault();
  }
});
