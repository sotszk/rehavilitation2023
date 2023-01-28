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
