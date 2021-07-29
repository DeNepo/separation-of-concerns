debugger;

import { months, greet, MODULES_BECAME_STANDARD_YEAR } from './script.js';

const greetedPig = greet('pig');

// this variable was declared with const in the other file
//  attempting to change it's value here will throw an error
MODULES_BECAME_STANDARD_YEAR = 2063;

// months was declared with let, what happens when you try to modify it here?
months = 'hi!';
