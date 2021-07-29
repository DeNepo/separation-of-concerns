// depends on the mocha API for "describe" and "it"
const { testComponent, testElement, compareElements } = (() => {
  function testComponent(component, tests, root) {
    if (typeof component !== 'function')
      throw new TypeError('component must be a function');
    if (!(tests instanceof Array))
      throw new TypeError('test cases must be an array');
    if (!(root instanceof Element))
      throw new TypeError('root must be a dom element');

    try {
      if (!(tests instanceof Array) && arguments.length > 1) {
        throw new TypeError('test cases must be an array');
      }

      name = component.name;

      describe(name, () => {
        tests.forEach((testCase) => {
          const renderedComponent = component(...testCase.args);
          if (!(renderedComponent instanceof Element)) {
            describe(
              testCase.name + ': should return a DOM element ...',
              () => {
                it("... but it didn't :(", () => {
                  assert.ok(renderedComponent instanceof Element);
                });
              },
            );
            root.appendChild(
              document.createTextNode(
                testCase.name + ': did not return a DOM element :(',
              ),
            );
            root.appendChild(document.createElement('hr'));
            // return new TypeError('component should return a DOM element');
          } else {
            renderedComponent.id = testCase.name;
            root.appendChild(renderedComponent);
            root.appendChild(document.createElement('hr'));
            testElement(renderedComponent, testCase.expected, testCase.name);
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  let attributesToTest = [
    'id',
    'className',
    'nodeName',
    'innerText',
    'childElementCount',
    'children',
  ];

  Object.defineProperty(testComponent, 'attributesToTest', {
    get: function () {
      return attributesToTest;
    },
    set: function (arr) {
      attributesToTest = arr;
    },
  });

  const compareElements = (actual, expected, name) => {
    // // mocha already does this
    // const indexOfChildren = attributesToTest.indexOf('children');
    // if (indexOfChildren > -1) {
    //   attributesToTest.splice(indexOfChildren, 1);
    //   attributesToTest.push('children');
    // } // it's visually best if children are tested last

    name =
      typeof name !== 'string'
        ? `comparing "${actual.id}" to "${expected.id}"`
        : name;

    describe(name, () => {
      it('it should be a DOM element', () => {
        assert.ok(actual instanceof Element);
      });
      if (!(actual instanceof Element)) return;

      attributesToTest.forEach((attribute) => {
        if (!(attribute in expected)) return; // because tests cases won't have all DOM attributes

        if (attribute === 'children') {
          if (actual.childElementCount === expected.childElementCount) {
            describe(`testing children`, () => {
              for (let i = 0; i < expected.childElementCount; i++) {
                const nextChild = expected.children[i];
                compareElements(
                  actual.children[i],
                  nextChild,
                  `child ${i}: ${nextChild.nodeName}`,
                );
              }
            });
          } else {
            if (actual.childElementCount > expected.childElementCount) {
              it(`too many children: ${actual.childElementCount} > ${expected.childElementCount}`, () => {
                assert.ok(
                  actual.childElementCount === expected.childElementCount,
                );
              });
            } else if (actual.childElementCount < expected.childElementCount) {
              it(`too few children: ${actual.childElementCount} < ${expected.childElementCount}`, () => {
                assert.ok(
                  actual.childElementCount === expected.childElementCount,
                );
              });
            } else {
              it(`incorrect number of children: ${actual.childElementCount} !== ${expected.childElementCount}`, () => {
                assert.ok(
                  actual.childElementCount === expected.childElementCount,
                );
              });
            }
          }
        } else {
          const attributeString =
            typeof expected[attribute] === 'string'
              ? '"' + expected[attribute] + '"'
              : expected[attribute];

          it(`${attribute} should be:  ${attributeString}`, () => {
            assert.strictEqual(actual[attribute], expected[attribute]);
          });
        }
      });
    });
  };

  const testElement = compareElements;

  Object.defineProperty(compareElements, 'attributesToTest', {
    get: function () {
      return attributesToTest;
    },
    set: function (arr) {
      attributesToTest = arr;
    },
  });

  return { testComponent, testElement, compareElements };
})();
