// this code works!  No need to change anything here, just study it :)

function testing(func, tests) {

  const encodedFunc = encodeURIComponent(func.toString());
  const sanitizedFunc = encodedFunc
    .replace(/\(/g, '%28').replace(/\)/g, '%29')
    .replace(/%09/g, '%20%20');
  const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedFunc + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
  // const jsTutorURL = "http://www.pythontutor.com/javascript.html#code=" + sanitizedFunc + "&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";

  console.group('%cTESTING: ' + func.name, 'font-weight:bold;');
  console.log(jsTutorURL);
  console.groupEnd();

  if (!tests) {
    try {
      const returned = func();
      console.log('args: ', []);
      console.log('returned: ', returned);
    } catch (err) {
      console.log(err);
    };
  } else {
    if (tests.length === 0) {
      console.log('- no tests!');
      return;
    }
    tests.forEach((test, i) => {

      if (test.constructor.name !== 'Object') {
        console.log(`%c-- tests[${i}] is not an Object`, 'color:purple;font-weight:bold;');
        return;

      } else if (typeof test.name !== 'string') {
        console.log(`%c-- tests[${i}].name is not a String`, 'color:purple;font-weight:bold;');
        return;

      } else if (!Array.isArray(test.args)) {
        console.log(`%c-- tests[${i}].args is not an Array`, 'color:purple;font-weight:bold;');
        return;

      } else if (!test.hasOwnProperty('expected')) {
        console.log(`%c-- tests[${i}].expected does not exist`, 'color:purple;font-weight:bold;');
        return;
      }

      console.groupCollapsed('%c------ ' + test.name + ' ------', 'font-weight:bold');
      console.log('%c- arguments:', 'color:blue;font-weight:bold;', test.args);

      let result = null;
      try {
        result = func(...test.args);
        console.log('%c- returned:', 'font-weight:bold;', '(' + typeof result + ')', result);
      } catch (err) {
        result = err;
        console.log(err);
      }

      console.log('%c- expected:', 'color:blue;font-weight:bold;', '(' + typeof test.expected + ')', test.expected);
      console.groupEnd();

      if (result instanceof Error) {
        console.log('%c- ERROR', 'color:red;font-weight:bold;');

      } else if (test.expected !== test.expected // is the expected value NaN?
        ? result !== result // then check if the returned one is
        : result === test.expected) { // otherwise compare them directly
        console.log('%c- PASS', 'color:green;font-weight:bold;');

      } else {
        console.log('%c- FAIL', 'color:orange;font-weight:bold;');

      }
    });
  }
  console.log('\n');
  return { func, tests }
}
