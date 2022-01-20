{
  // this file is block-scoped for a cleaner view in the debugger

  document.head.getElementsByTagName('title')[0].innerHTML = challengeName;

  document.getElementById('challenge-name').innerHTML = challengeName;

  /**
   * renders, logs, compares, and appends actual and expected DOM elements
   * @param {Function} solution - a render function, returning Element
   * @param {Function} reference - a render function, returning Element
   * @param {any[]} args - an array of any values, arguments to be spread into solution & reference
   * @param {string} name - name of this test case
   * @returns {undefined}
   */
  const runTestCase = (solution, reference, args, name = '') => {
    const begin = `=== === ===     BEGIN: test ${name}     === === ===`;
    const beginPadding = Array.from(begin)
      .map(() => '-')
      .join('');
    console.log(
      `%c${beginPadding}\n${begin}\n${beginPadding}`,
      'font-weight:bold;',
    );

    if (args.length > 0) {
      console.log('%c\n--- args:', 'font-weight:bold;');
      for (let i = 0; i < args.length; i++) {
        console.log(`%c${i}, ${typeof args[i]}:`, 'font-weight:bold;', args[i]);
      }
    }

    console.log(
      '%c\n--- rendering your solution (actual):',
      'font-weight:bold;',
    );
    let actual = null;
    try {
      actual = solution(...args);
      console.log(actual);
    } catch (err) {
      console.error(err);
    }

    console.log(
      '%c\n--- rendering the reference (expected):',
      'font-weight:bold;',
    );
    let expected = null;
    try {
      expected = reference(...args);
      console.log(expected);
    } catch (err) {
      console.error(err);
    }

    let testCaseContainer = null;

    if (actual instanceof Element && expected instanceof Element) {
      console.log(
        '%c\n--- comparing actual and expected:',
        'font-weight:bold;',
      );
      compareElements(actual, expected);
    } else {
      console.log(
        '%c\n--- cannot compare actual and expected:',
        'font-weight:bold;',
      );
      if (!(actual instanceof Element)) {
        console.log('actual:   is not a DOM Element');
      }
      if (!(expected instanceof Element)) {
        console.log('expected: is not a DOM Element');
      }
    }

    console.log('%c\n--- rendered test case container:', 'font-weight:bold;');
    testCaseContainer = renderBoth(actual, expected, `${name}`, args);
    console.log(testCaseContainer);

    console.log(
      '%c\n--- appending container to the DOM ...',
      'font-weight:bold;',
    );
    document.getElementById('test-cases').appendChild(testCaseContainer);

    const end = `=== === ===     END: test ${name}     === === ===`;
    const endPadding = Array.from(end)
      .map(() => '-')
      .join('');
    console.log(
      `%c\n${endPadding}\n${end}\n${endPadding}\n\n\n\n`,
      'font-weight:bold;',
    );
  };

  /**
   * renders a component to inspect & compare two elements
   *  implicitly depends on a few CSS classes
   * if actual or expected are not Elements
   *  (not a DOM Element) will be rendered
   * @param {Element} actual - the student-rendered element
   * @param {Element} expected - the reference element
   * @param {string} name - what to call this test case
   * @returns {Element} a rendered container for inspection
   */
  const renderBoth = (actual, expected, name, args) => {
    const testContainer = document.createElement('div');
    testContainer.id = name;
    testContainer.className = 'test-case';

    {
      const inspectContainer = document.createElement('div');
      inspectContainer.className = 'inspect';
      testContainer.appendChild(inspectContainer);

      const inDebugger = document.createElement('button');
      inDebugger.innerHTML = 'test ' + name + ': view in source tab';
      inspectContainer.appendChild(inDebugger);
    }

    // extra block scoping is for a cleaner view in the debugger when this triggered
    testContainer.firstChild.firstChild.addEventListener('click', () =>
      eval(`debugger;`),
    );

    {
      const actualExpected = document.createElement('div');
      actualExpected.className = 'side-by-side';
      testContainer.appendChild(actualExpected);

      const actualDiv = document.createElement('div');
      actualDiv.id = name + '-' + 'actual';
      if (actual instanceof Element) {
        actualDiv.appendChild(actual);
      } else {
        actualDiv.innerHTML = '(is not a DOM element)';
      }
      actualExpected.appendChild(actualDiv);

      const dottedBarrier = document.createElement('pre');
      dottedBarrier.className = 'dotted-barrier';
      actualExpected.appendChild(dottedBarrier);

      const expectedDiv = document.createElement('div');
      expectedDiv.id = name + '-' + 'expected';
      if (expected instanceof Element) {
        expectedDiv.appendChild(expected);
      } else {
        expectedDiv.innerHTML = '(is not a DOM element)';
      }
      actualExpected.appendChild(expectedDiv);
    }

    return testContainer;
  };

  /**
   * represents a DOM element as a string
   * @param {Element} el - a DOM element to represent as a string
   * @returns the DOM element represented as a string
   * @author https://github.com/nathanboktae/chai-dom/blob/master/chai-dom.js
   */
  const elToString = (el) => {
    let desc;
    if (Object.prototype.toString.call(el) === '[object NodeList]') {
      if (el.length === 0) return 'empty NodeList';
      desc = Array.prototype.slice.call(el, 0, 5).map(elToString).join(', ');
      return el.length > 5
        ? desc + '... (+' + (el.length - 5) + ' more)'
        : desc;
    }
    if (el.nodeType !== 1) {
      return String(el);
    }

    desc = el.tagName.toLowerCase();
    if (el.id) {
      desc += '#' + el.id;
    }
    if (el.className) {
      desc += '.' + String(el.className).replace(/\s+/g, '.');
    }
    Array.prototype.forEach.call(el.attributes, function (attr) {
      if (attr.name !== 'class' && attr.name !== 'id') {
        desc += '[' + attr.name + (attr.value ? '="' + attr.value + '"]' : ']');
      }
    });
    return desc;
  };

  /**
   * compares two arbitrary DOM elements.
   * compares attributes and properties separately
   *  to illustrate the relationship (ie. standard, non-standard, ...)
   * implicitly depends on chai, describe, it and elToString
   * @param {Element} actual - the element rendered by student's solution
   * @param {Element} expected - reference element rendered by coach solution
   * @param {string} name - used to title the top-level describe
   * @returns {undefined}
   */
  const compareElements = (actual, expected, preface) => {
    const expect = chai.expect;

    const name =
      typeof preface !== 'string'
        ? `actual:   ${elToString(actual)} \nexpected: ${elToString(expected)}`
        : `${preface}  actual:   ${elToString(
            actual,
          )}\n  expected: ${elToString(expected)}`;

    describe(
      name,
      () => {
        // early return if node type is incorrect
        //  if correct, don't assert it for cleaner test results
        if (!(actual instanceof Element)) {
          it('should be a DOM element', () => {
            expect(actual).to.be.an.instanceof(Element);
          });
          return;
        }

        // early return upon failure
        //  assert whether pass or fail
        it(`should have property - tagName: "${expected.tagName}"`, () => {
          expect(actual).to.have.tagName(expected.tagName);
        });
        if (actual.tagName !== expected.tagName) {
          return;
        }

        if (expected.tagName === 'CANVAS') {
          const actualImageData = actual
            .getContext('2d')
            .getImageData(0, 0, actual.width, actual.height);
          const expectedImageData = expected
            .getContext('2d')
            .getImageData(0, 0, expected.width, expected.height);

          const sameDimensions =
            actualImageData.length === expectedImageData.length &&
            actualImageData.width === expectedImageData.width;
          if (sameDimensions) {
            it('should have matching pixels', () => {
              for (let i = 0; i < expectedImageData.data.length; i++) {
                if (actualImageData.data[i] !== expectedImageData.data[i]) {
                  expect.fail(`pixel mismatch at ${i}`);
                }
              }
            });
          }
          return;
        }

        // assert direct text content instead of .textContent, .innerText, ...
        //  so parents don't fail for mistakes in child text
        const computeDirecTextContent = (acc, next) => {
          return acc + (next.nodeType === 3 ? next.textContent : '');
        };
        const actualDirectTextContent = Array.from(actual.childNodes).reduce(
          computeDirecTextContent,
          '',
        );
        const expectedDirectTextContent = Array.from(
          expected.childNodes,
        ).reduce(computeDirecTextContent, '');
        if (
          actualDirectTextContent !== expectedDirectTextContent ||
          expectedDirectTextContent.length !== 0
        ) {
          it(`should have own text - "${expectedDirectTextContent}"`, () => {
            expect(actualDirectTextContent).to.equal(expectedDirectTextContent);
          });
        }

        const actualClassList = Array.from(actual.classList);
        const expectedClassList = Array.from(expected.classList);
        if (actualClassList.length !== 0 || expectedClassList.length !== 0) {
          const renderedClassListMembers = expectedClassList.reduce(
            (msg, next, index) => {
              if (index === expectedClassList.length - 1) {
                return `${msg}"${next}" ]`;
              } else {
                return `${msg}"${next}", `;
              }
            },
            '[ ',
          );
          it(`should have classList members: ${renderedClassListMembers}`, () => {
            expect(actualClassList).to.have.members(expectedClassList);
          });
        }

        // used to determine which properties & attributes to test
        const baseLineEl = document.createElement(expected.nodeName);

        // test attributes
        const actualAttributes = Array.from(actual.attributes).map(
          (item) => item.name,
        );
        const expectedAttributes = Array.from(expected.attributes).map(
          (item) => item.name,
        );
        const attributesToTest = Array.from(
          new Set([...actualAttributes, ...expectedAttributes]),
        );

        for (const attr of attributesToTest) {
          const baseLineValue = baseLineEl.getAttribute(attr);
          const isBaselineValue =
            actual.getAttribute(attr) === baseLineValue &&
            expected.getAttribute(attr) === baseLineValue;
          if (isBaselineValue) {
            continue;
          }

          if (expected.hasAttribute(attr)) {
            const renderedAttribute = expected.getAttribute(attr)
              ? `${attr}="${expected.getAttribute(attr)}"`
              : attr;
            it(`should have attribute - ${renderedAttribute}`, () => {
              expect(actual).to.have.attribute(
                attr,
                expected.getAttribute(attr),
              );
            });
          } else {
            it(`should not have attribute - ${attr}`, () => {
              expect(actual).to.not.have.attribute(attr);
            });
          }
        }

        // test properties
        const actualProperties = [];
        for (const key in actual) {
          // avoid confusing deprication warnings in firefox
          if (
            key === 'onmozfullscreenchange' ||
            key === 'onmozfullscreenerror'
          ) {
            continue;
          }
          actualProperties.push(key);
        }
        const expectedProperties = [];
        for (const key in expected) {
          // avoid confusing deprication warnings in firefox
          if (
            key === 'onmozfullscreenchange' ||
            key === 'onmozfullscreenerror'
          ) {
            continue;
          }
          expectedProperties.push(key);
        }
        const propertiesToTest = Array.from(
          new Set([...actualProperties, ...expectedProperties]),
        );

        for (const prop of propertiesToTest) {
          // skip, these are accounted for elsewhere in this function
          if (
            // covered by: testing attributes
            prop === 'attributes' ||
            // covered by: recursively testing children
            prop === 'childElementCount' ||
            prop === 'firstElementChild' ||
            prop === 'lastElementChild' ||
            prop === 'firstChild' ||
            prop === 'lastChild' ||
            prop === 'children' ||
            // covered by: direct text content
            //  for simplicity of feedback
            //  to avoid parents failing for child text mistakes
            prop === 'outerHTML' ||
            prop === 'innerHTML' ||
            prop === 'innerText' ||
            prop === 'outerText' ||
            prop === 'textContent' ||
            prop === 'text' ||
            // covered by: tagName at the beginning for early-return upon failure
            prop === 'localName' ||
            prop === 'tagName' ||
            prop === 'nodeName' ||
            // DOM relations not relevant to testing these exercises
            prop === 'nextElementSibling' ||
            prop === 'previousElementSibling' ||
            prop === 'parentNode' ||
            prop === 'parentElement' ||
            prop === 'childNodes' ||
            prop === 'previousSibling' ||
            prop === 'nextSibling' ||
            // covered by testing class & classList
            prop === 'classList'
          ) {
            continue;
          }

          const baseLineValue = baseLineEl[prop];
          let isBaselineValue = undefined;
          if (Object(baseLineValue) === baseLineValue) {
            try {
              expect(actual[prop]).to.deep.equal(baseLineValue);
              expect(expected[prop]).to.deep.equal(baseLineValue);
              isBaselineValue = true;
            } catch (err) {
              isBaselineValue = false;
            }
          } else if (Number.isNaN(baseLineValue)) {
            isBaselineValue =
              Number.isNaN(actual[prop]) && Number.isNaN(expected[prop]);
          } else {
            isBaselineValue =
              actual[prop] === baseLineValue &&
              expected[prop] === baseLineValue;
          }

          if (isBaselineValue) {
            continue;
          }

          if (prop in expected) {
            const renderedProperty =
              typeof expected[prop] === 'string'
                ? '"' + expected[prop] + '"'
                : expected[prop];

            it(`should have property - ${prop}: ${renderedProperty}`, () => {
              if (Object(expected[prop]) === expected[prop]) {
                expect(actual).to.have.deep.property(prop, expected[prop]);
              } else {
                expect(actual).to.have.property(prop, expected[prop]);
              }
            });
          } else {
            it(`should not have property - ${prop}`, () => {
              expect(actual).to.not.have.property(prop);
            });
          }
        }

        // assert children if there are any to assert
        if (
          actual.childElementCount !== 0 ||
          expected.childElementCount !== 0
        ) {
          // assert how many there should be
          it(`should have property - childElementCount: ${expected.childElementCount}`, () => {
            expect(actual.childElementCount).to.equal(
              expected.childElementCount,
            );
          });

          // assert each child if there are the right amount, and there are supposed to be any
          if (
            actual.childElementCount === expected.childElementCount &&
            expected.childElementCount !== 0
          ) {
            for (let i = 0; i < expected.childElementCount; i++) {
              const nextActual = actual.children[i];
              const nextExpected = expected.children[i];
              compareElements(
                nextActual,
                nextExpected,
                `.children[${i}]\n`,
                true,
              );
            }
          }
        }
      },
      true,
    );
  };

  // test your solution against each test case
  for (const testCase of testCases) {
    const index = testCases.indexOf(testCase);
    runTestCase(actual, reference, testCase, index);
  }
}
