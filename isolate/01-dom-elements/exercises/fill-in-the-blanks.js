'use strict';

/* Scavenger Hunt!

  practice reading through all the element properties in the debugger
  many of the answers are there if you look in the right place ;)

*/

const _1_element = document.createElement('input');
const _1_test = _1_element.nodeName === _;
console.assert(_1_test, 'Test 1');

const _2_element = document.createElement('iNPuT');
const _2_test = _2_element.nodeName === _;
console.assert(_2_test, 'Test 2');

const _3_element = document.createElement('_');
const _3_test = _3_element.nodeName === 'ARTICLE';
console.assert(_3_test, 'Test 3');

const _4_element = document.createElement('p');
_;
const _4_test = _4_element.innerHTML === 'party palace';
console.assert(_4_test, 'Test 4');

const _5_element = document.createElement('p');
_5_element.className = 'wide-border';
const _5_test = _5_element._ === _;
console.assert(_5_test, 'Test 5');

const _6_element = document.createElement('textarea');
_6_element._ = 'many many mumbling mice';
const _6_test = _6_element.value === _;
console.assert(_6_test, 'Test 6');

