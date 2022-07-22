// https://unpkg.com/mocha@4.0.1/mocha.js
// minified with: https://jscompress.com/

// use # instead of makeURL because otherwise test results dissapear in annoying ways when you click them

// hardcoded fullStackTrace to false because for some reason config didn't work

// modified stackTraceFilter for simpler one-line error printouts
require = (function o(s, a, u) {
  function l(r, e) {
    if (!a[r]) {
      if (!s[r]) {
        var t = 'function' == typeof require && require;
        if (!e && t) return t(r, !0);
        if (c) return c(r, !0);
        var n = new Error("Cannot find module '" + r + "'");
        throw ((n.code = 'MODULE_NOT_FOUND'), n);
      }
      var i = (a[r] = { exports: {} });
      s[r][0].call(
        i.exports,
        function (e) {
          var t = s[r][1][e];
          return l(t || e);
        },
        i,
        i.exports,
        o,
        s,
        a,
        u,
      );
    }
    return a[r].exports;
  }
  for (
    var c = 'function' == typeof require && require, e = 0;
    e < u.length;
    e++
  )
    l(u[e]);
  return l;
})(
  {
    1: [
      function (f, h, e) {
        (function (e, i) {
          'use strict';
          e.stdout = f('browser-stdout')({ level: !1 });
          var o = f('./lib/mocha'),
            s = new o({ reporter: 'html' }),
            t = i.Date,
            r = i.setTimeout,
            a = (i.setInterval, i.clearTimeout, i.clearInterval, []),
            n = i.onerror;
          (e.removeListener = function (e, t) {
            if ('uncaughtException' === e) {
              i.onerror = n || function () {};
              var r = a.indexOf(t);
              -1 !== r && a.splice(r, 1);
            }
          }),
            (e.on = function (e, n) {
              'uncaughtException' === e &&
                ((i.onerror = function (e, t, r) {
                  return (
                    n(new Error(e + ' (' + t + ':' + r + ')')), !s.allowUncaught
                  );
                }),
                a.push(n));
            }),
            s.suite.removeAllListeners('pre-require');
          var u,
            l = [];
          function c() {
            for (
              var e = new t().getTime();
              l.length && new t().getTime() - e < 100;

            )
              l.shift()();
            u = l.length ? r(c, 0) : null;
          }
          (o.Runner.immediately = function (e) {
            l.push(e), (u = u || r(c, 0));
          }),
            (s.throwError = function (t) {
              throw (
                (a.forEach(function (e) {
                  e(t);
                }),
                t)
              );
            }),
            (s.ui = function (e) {
              return (
                o.prototype.ui.call(this, e),
                this.suite.emit('pre-require', i, null, this),
                this
              );
            }),
            (s.setup = function (e) {
              for (var t in ('string' == typeof e && (e = { ui: e }), e))
                e.hasOwnProperty(t) && this[t](e[t]);
              return this;
            }),
            (s.run = function (r) {
              var n = s.options;
              s.globals('location');
              var e = o.utils.parseQuery(i.location.search || '');
              return (
                e.grep && s.grep(e.grep),
                e.fgrep && s.fgrep(e.fgrep),
                e.invert && s.invert(),
                o.prototype.run.call(s, function (e) {
                  var t = i.document;
                  t &&
                    t.getElementById('mocha') &&
                    !0 !== n.noHighlighting &&
                    o.utils.highlightTags('code'),
                    r && r(e);
                })
              );
            }),
            (o.process = e),
            (i.Mocha = o),
            (i.mocha = s),
            (h.exports = i);
        }.call(
          this,
          f('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      { './lib/mocha': 13, _process: 55, 'browser-stdout': 39 },
    ],
    2: [
      function (e, t, r) {
        'use strict';
        t.exports = e('../utils').noop;
      },
      { '../utils': 36 },
    ],
    3: [
      function (e, t, r) {
        'use strict';
        function n() {
          (this.percent = 0),
            this.size(0),
            this.fontSize(11),
            this.font('helvetica, arial, sans-serif');
        }
        ((t.exports = n).prototype.size = function (e) {
          return (this._size = e), this;
        }),
          (n.prototype.text = function (e) {
            return (this._text = e), this;
          }),
          (n.prototype.fontSize = function (e) {
            return (this._fontSize = e), this;
          }),
          (n.prototype.font = function (e) {
            return (this._font = e), this;
          }),
          (n.prototype.update = function (e) {
            return (this.percent = e), this;
          }),
          (n.prototype.draw = function (e) {
            try {
              var t = Math.min(this.percent, 100),
                r = this._size,
                n = r / 2,
                i = n,
                o = n,
                s = n - 1,
                a = this._fontSize;
              e.font = a + 'px ' + this._font;
              var u = 2 * Math.PI * (t / 100);
              e.clearRect(0, 0, r, r),
                (e.strokeStyle = '#9f9f9f'),
                e.beginPath(),
                e.arc(i, o, s, 0, u, !1),
                e.stroke(),
                (e.strokeStyle = '#eee'),
                e.beginPath(),
                e.arc(i, o, s - 1, 0, u, !0),
                e.stroke();
              var l = this._text || (0 | t) + '%',
                c = e.measureText(l).width;
              e.fillText(l, i - c / 2 + 1, o + a / 2 - 1);
            } catch (e) {}
            return this;
          });
      },
      {},
    ],
    4: [
      function (e, t, r) {
        (function (e) {
          'use strict';
          (r.isatty = function () {
            return !0;
          }),
            (r.getWindowSize = function () {
              return 'innerHeight' in e
                ? [e.innerHeight, e.innerWidth]
                : [640, 480];
            });
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {},
    ],
    5: [
      function (e, t, r) {
        'use strict';
        function n() {}
        ((t.exports = n).prototype.runnable = function (e) {
          return arguments.length
            ? ((this.test = this._runnable = e), this)
            : this._runnable;
        }),
          (n.prototype.timeout = function (e) {
            return arguments.length
              ? (this.runnable().timeout(e), this)
              : this.runnable().timeout();
          }),
          (n.prototype.enableTimeouts = function (e) {
            return this.runnable().enableTimeouts(e), this;
          }),
          (n.prototype.slow = function (e) {
            return this.runnable().slow(e), this;
          }),
          (n.prototype.skip = function () {
            this.runnable().skip();
          }),
          (n.prototype.retries = function (e) {
            return arguments.length
              ? (this.runnable().retries(e), this)
              : this.runnable().retries();
          }),
          (n.prototype.inspect = function () {
            return JSON.stringify(
              this,
              function (e, t) {
                return 'runnable' === e || 'test' === e ? void 0 : t;
              },
              2,
            );
          });
      },
      {},
    ],
    6: [
      function (e, t, r) {
        'use strict';
        var n = e('./runnable');
        function i(e, t) {
          n.call(this, e, t), (this.type = 'hook');
        }
        (0, e('./utils').inherits)((t.exports = i), n),
          (i.prototype.error = function (e) {
            if (!arguments.length)
              return (e = this._error), (this._error = null), e;
            this._error = e;
          });
      },
      { './runnable': 32, './utils': 36 },
    ],
    7: [
      function (t, e, r) {
        'use strict';
        var a = t('../test');
        e.exports = function (e) {
          var s = [e];
          e.on('pre-require', function (r, i, n) {
            var o = t('./common')(s, r, n);
            (r.before = o.before),
              (r.after = o.after),
              (r.beforeEach = o.beforeEach),
              (r.afterEach = o.afterEach),
              (r.run = n.options.delay && o.runWithSuite(e)),
              (r.describe = r.context =
                function (e, t) {
                  return o.suite.create({ title: e, file: i, fn: t });
                }),
              (r.xdescribe =
                r.xcontext =
                r.describe.skip =
                  function (e, t) {
                    return o.suite.skip({ title: e, file: i, fn: t });
                  }),
              (r.describe.only = function (e, t) {
                return o.suite.only({ title: e, file: i, fn: t });
              }),
              (r.it = r.specify =
                function (e, t) {
                  var r = s[0];
                  r.isPending() && (t = null);
                  var n = new a(e, t);
                  return (n.file = i), r.addTest(n), n;
                }),
              (r.it.only = function (e, t) {
                return o.test.only(n, r.it(e, t));
              }),
              (r.xit =
                r.xspecify =
                r.it.skip =
                  function (e) {
                    r.it(e);
                  }),
              (r.it.retries = function (e) {
                r.retries(e);
              });
          });
        };
      },
      { '../test': 35, './common': 8 },
    ],
    8: [
      function (e, t, r) {
        'use strict';
        var n = e('../suite');
        t.exports = function (r, t, e) {
          return {
            runWithSuite: function (e) {
              return function () {
                e.run();
              };
            },
            before: function (e, t) {
              r[0].beforeAll(e, t);
            },
            after: function (e, t) {
              r[0].afterAll(e, t);
            },
            beforeEach: function (e, t) {
              r[0].beforeEach(e, t);
            },
            afterEach: function (e, t) {
              r[0].afterEach(e, t);
            },
            suite: {
              only: function (e) {
                return (e.isOnly = !0), this.create(e);
              },
              skip: function (e) {
                return (e.pending = !0), this.create(e);
              },
              create: function (e) {
                var t = n.create(r[0], e.title);
                if (
                  ((t.pending = Boolean(e.pending)),
                  (t.file = e.file),
                  r.unshift(t),
                  e.isOnly &&
                    (t.parent._onlySuites = t.parent._onlySuites.concat(t)),
                  'function' == typeof e.fn)
                )
                  e.fn.call(t), r.shift();
                else if (void 0 === e.fn && !t.pending)
                  throw new Error(
                    'Suite "' +
                      t.fullTitle() +
                      '" was defined but no callback was supplied. Supply a callback or explicitly skip the suite.',
                  );
                return t;
              },
            },
            test: {
              only: function (e, t) {
                return (t.parent._onlyTests = t.parent._onlyTests.concat(t)), t;
              },
              skip: function (e) {
                t.test(e);
              },
              retries: function (e) {
                t.retries(e);
              },
            },
          };
        };
      },
      { '../suite': 34 },
    ],
    9: [
      function (e, t, r) {
        'use strict';
        var u = e('../suite'),
          l = e('../test');
        t.exports = function (e) {
          var a = [e];
          e.on('require', function e(t, r) {
            var n;
            for (var i in t)
              if ('function' == typeof t[i]) {
                var o = t[i];
                switch (i) {
                  case 'before':
                    a[0].beforeAll(o);
                    break;
                  case 'after':
                    a[0].afterAll(o);
                    break;
                  case 'beforeEach':
                    a[0].beforeEach(o);
                    break;
                  case 'afterEach':
                    a[0].afterEach(o);
                    break;
                  default:
                    var s = new l(i, o);
                    (s.file = r), a[0].addTest(s);
                }
              } else
                (n = u.create(a[0], i)), a.unshift(n), e(t[i], r), a.shift();
          });
        };
      },
      { '../suite': 34, '../test': 35 },
    ],
    10: [
      function (e, t, r) {
        'use strict';
        (r.bdd = e('./bdd')),
          (r.tdd = e('./tdd')),
          (r.qunit = e('./qunit')),
          (r.exports = e('./exports'));
      },
      { './bdd': 7, './exports': 9, './qunit': 11, './tdd': 12 },
    ],
    11: [
      function (t, e, r) {
        'use strict';
        var a = t('../test');
        e.exports = function (e) {
          var s = [e];
          e.on('pre-require', function (r, n, i) {
            var o = t('./common')(s, r, i);
            (r.before = o.before),
              (r.after = o.after),
              (r.beforeEach = o.beforeEach),
              (r.afterEach = o.afterEach),
              (r.run = i.options.delay && o.runWithSuite(e)),
              (r.suite = function (e) {
                return (
                  1 < s.length && s.shift(),
                  o.suite.create({ title: e, file: n, fn: !1 })
                );
              }),
              (r.suite.only = function (e) {
                return (
                  1 < s.length && s.shift(),
                  o.suite.only({ title: e, file: n, fn: !1 })
                );
              }),
              (r.test = function (e, t) {
                var r = new a(e, t);
                return (r.file = n), s[0].addTest(r), r;
              }),
              (r.test.only = function (e, t) {
                return o.test.only(i, r.test(e, t));
              }),
              (r.test.skip = o.test.skip),
              (r.test.retries = o.test.retries);
          });
        };
      },
      { '../test': 35, './common': 8 },
    ],
    12: [
      function (t, e, r) {
        'use strict';
        var a = t('../test');
        e.exports = function (e) {
          var s = [e];
          e.on('pre-require', function (r, i, n) {
            var o = t('./common')(s, r, n);
            (r.setup = o.beforeEach),
              (r.teardown = o.afterEach),
              (r.suiteSetup = o.before),
              (r.suiteTeardown = o.after),
              (r.run = n.options.delay && o.runWithSuite(e)),
              (r.suite = function (e, t) {
                return o.suite.create({ title: e, file: i, fn: t });
              }),
              (r.suite.skip = function (e, t) {
                return o.suite.skip({ title: e, file: i, fn: t });
              }),
              (r.suite.only = function (e, t) {
                return o.suite.only({ title: e, file: i, fn: t });
              }),
              (r.test = function (e, t) {
                var r = s[0];
                r.isPending() && (t = null);
                var n = new a(e, t);
                return (n.file = i), r.addTest(n), n;
              }),
              (r.test.only = function (e, t) {
                return o.test.only(n, r.test(e, t));
              }),
              (r.test.skip = o.test.skip),
              (r.test.retries = o.test.retries);
          });
        };
      },
      { '../test': 35, './common': 8 },
    ],
    13: [
      function (c, f, h) {
        (function (i, n, t) {
          'use strict';
          var r = c('escape-string-regexp'),
            o = c('path'),
            s = c('./reporters'),
            a = c('./utils');
          if (((h = f.exports = l), !i.browser)) {
            var e = i.cwd();
            f.paths.push(e, o.join(e, 'node_modules'));
          }
          function u(e) {
            return o.join(t, '../images', e + '.png');
          }
          function l(e) {
            (e = e || {}),
              (this.files = []),
              (this.options = e).grep && this.grep(new RegExp(e.grep)),
              e.fgrep && this.fgrep(e.fgrep),
              (this.suite = new h.Suite('', new h.Context())),
              this.ui(e.ui),
              this.bail(e.bail),
              this.reporter(e.reporter, e.reporterOptions),
              void 0 !== e.timeout &&
                null !== e.timeout &&
                this.timeout(e.timeout),
              void 0 !== e.retries &&
                null !== e.retries &&
                this.retries(e.retries),
              this.useColors(e.useColors),
              null !== e.enableTimeouts &&
                this.enableTimeouts(e.enableTimeouts),
              e.slow && this.slow(e.slow);
          }
          (h.utils = a),
            (h.interfaces = c('./interfaces')),
            (h.reporters = s),
            (h.Runnable = c('./runnable')),
            (h.Context = c('./context')),
            (h.Runner = c('./runner')),
            (h.Suite = c('./suite')),
            (h.Hook = c('./hook')),
            (h.Test = c('./test')),
            (l.prototype.bail = function (e) {
              return arguments.length || (e = !0), this.suite.bail(e), this;
            }),
            (l.prototype.addFile = function (e) {
              return this.files.push(e), this;
            }),
            (l.prototype.reporter = function (r, e) {
              if ('function' == typeof r) this._reporter = r;
              else {
                var n;
                if ((s[(r = r || 'spec')] && (n = s[r]), !n))
                  try {
                    n = c(r);
                  } catch (t) {
                    if (-1 !== t.message.indexOf('Cannot find module'))
                      try {
                        n = c(o.resolve(i.cwd(), r));
                      } catch (e) {
                        -1 !== t.message.indexOf('Cannot find module')
                          ? console.warn('"' + r + '" reporter not found')
                          : console.warn(
                              '"' +
                                r +
                                '" reporter blew up with error:\n' +
                                t.stack,
                            );
                      }
                    else
                      console.warn(
                        '"' + r + '" reporter blew up with error:\n' + t.stack,
                      );
                  }
                if (
                  (n ||
                    'teamcity' !== r ||
                    console.warn(
                      'The Teamcity reporter was moved to a package named mocha-teamcity-reporter (https://npmjs.org/package/mocha-teamcity-reporter).',
                    ),
                  !n)
                )
                  throw new Error('invalid reporter "' + r + '"');
                this._reporter = n;
              }
              return (this.options.reporterOptions = e), this;
            }),
            (l.prototype.ui = function (t) {
              if (((t = t || 'bdd'), (this._ui = h.interfaces[t]), !this._ui))
                try {
                  this._ui = c(t);
                } catch (e) {
                  throw new Error('invalid interface "' + t + '"');
                }
              return (
                (this._ui = this._ui(this.suite)),
                this.suite.on('pre-require', function (e) {
                  (h.afterEach = e.afterEach || e.teardown),
                    (h.after = e.after || e.suiteTeardown),
                    (h.beforeEach = e.beforeEach || e.setup),
                    (h.before = e.before || e.suiteSetup),
                    (h.describe = e.describe || e.suite),
                    (h.it = e.it || e.test),
                    (h.xit = e.xit || e.test.skip),
                    (h.setup = e.setup || e.beforeEach),
                    (h.suiteSetup = e.suiteSetup || e.before),
                    (h.suiteTeardown = e.suiteTeardown || e.after),
                    (h.suite = e.suite || e.describe),
                    (h.teardown = e.teardown || e.afterEach),
                    (h.test = e.test || e.it),
                    (h.run = e.run);
                }),
                this
              );
            }),
            (l.prototype.loadFiles = function (e) {
              var t = this,
                r = this.suite;
              this.files.forEach(function (e) {
                (e = o.resolve(e)),
                  r.emit('pre-require', n, e, t),
                  r.emit('require', c(e), e, t),
                  r.emit('post-require', n, e, t);
              }),
                e && e();
            }),
            (l.prototype._growl = function (r, n) {
              var i = c('growl');
              r.on('end', function () {
                var e = n.stats;
                if (e.failures) {
                  var t = e.failures + ' of ' + r.total + ' tests failed';
                  i(t, { name: 'mocha', title: 'Failed', image: u('error') });
                } else i(e.passes + ' tests passed in ' + e.duration + 'ms', { name: 'mocha', title: 'Passed', image: u('ok') });
              });
            }),
            (l.prototype.fgrep = function (e) {
              return this.grep(new RegExp(r(e)));
            }),
            (l.prototype.grep = function (e) {
              if (a.isString(e)) {
                var t = e.match(/^\/(.*)\/(g|i|)$|.*/);
                this.options.grep = new RegExp(t[1] || t[0], t[2]);
              } else this.options.grep = e;
              return this;
            }),
            (l.prototype.invert = function () {
              return (this.options.invert = !0), this;
            }),
            (l.prototype.ignoreLeaks = function (e) {
              return (this.options.ignoreLeaks = Boolean(e)), this;
            }),
            (l.prototype.checkLeaks = function () {
              return (this.options.ignoreLeaks = !1), this;
            }),
            (l.prototype.fullTrace = function () {
              return (this.options.fullStackTrace = !1), this;
            }),
            (l.prototype.growl = function () {
              return (this.options.growl = !0), this;
            }),
            (l.prototype.globals = function (e) {
              return (
                (this.options.globals = (this.options.globals || []).concat(e)),
                this
              );
            }),
            (l.prototype.useColors = function (e) {
              return void 0 !== e && (this.options.useColors = e), this;
            }),
            (l.prototype.useInlineDiffs = function (e) {
              return (this.options.useInlineDiffs = void 0 !== e && e), this;
            }),
            (l.prototype.timeout = function (e) {
              return this.suite.timeout(e), this;
            }),
            (l.prototype.retries = function (e) {
              return this.suite.retries(e), this;
            }),
            (l.prototype.slow = function (e) {
              return this.suite.slow(e), this;
            }),
            (l.prototype.enableTimeouts = function (e) {
              return (
                this.suite.enableTimeouts(
                  !arguments.length || void 0 === e || e,
                ),
                this
              );
            }),
            (l.prototype.asyncOnly = function () {
              return (this.options.asyncOnly = !0), this;
            }),
            (l.prototype.noHighlighting = function () {
              return (this.options.noHighlighting = !0), this;
            }),
            (l.prototype.allowUncaught = function () {
              return (this.options.allowUncaught = !0), this;
            }),
            (l.prototype.delay = function () {
              return (this.options.delay = !0), this;
            }),
            (l.prototype.forbidOnly = function () {
              return (this.options.forbidOnly = !0), this;
            }),
            (l.prototype.forbidPending = function () {
              return (this.options.forbidPending = !0), this;
            }),
            (l.prototype.run = function (t) {
              this.files.length && this.loadFiles();
              var e = this.suite,
                r = this.options;
              r.files = this.files;
              var n = new h.Runner(e, r.delay),
                i = new this._reporter(n, r);
              return (
                (n.ignoreLeaks = !1 !== r.ignoreLeaks),
                (n.fullStackTrace = r.fullStackTrace),
                (n.asyncOnly = r.asyncOnly),
                (n.allowUncaught = r.allowUncaught),
                (n.forbidOnly = r.forbidOnly),
                (n.forbidPending = r.forbidPending),
                r.grep && n.grep(r.grep, r.invert),
                r.globals && n.globals(r.globals),
                r.growl && this._growl(n, i),
                void 0 !== r.useColors &&
                  (h.reporters.Base.useColors = r.useColors),
                (h.reporters.Base.inlineDiffs = r.useInlineDiffs),
                n.run(function (e) {
                  i.done ? i.done(e, t) : t && t(e);
                })
              );
            });
        }.call(
          this,
          c('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
          '/lib',
        ));
      },
      {
        './context': 5,
        './hook': 6,
        './interfaces': 10,
        './reporters': 20,
        './runnable': 32,
        './runner': 33,
        './suite': 34,
        './test': 35,
        './utils': 36,
        _process: 55,
        'escape-string-regexp': 45,
        growl: 2,
        path: 40,
      },
    ],
    14: [
      function (e, t, r) {
        'use strict';
        var n = 36e5,
          i = 864e5;
        function o(e, t, r) {
          if (!(e < t))
            return e < 1.5 * t
              ? Math.floor(e / t) + ' ' + r
              : Math.ceil(e / t) + ' ' + r + 's';
        }
        t.exports = function (e, t) {
          return (
            (t = t || {}),
            'string' == typeof e
              ? (function (e) {
                  var t =
                    /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(
                      e,
                    );
                  if (!t) return;
                  var r = parseFloat(t[1]);
                  switch ((t[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'y':
                      return 315576e5 * r;
                    case 'days':
                    case 'day':
                    case 'd':
                      return r * i;
                    case 'hours':
                    case 'hour':
                    case 'h':
                      return r * n;
                    case 'minutes':
                    case 'minute':
                    case 'm':
                      return 6e4 * r;
                    case 'seconds':
                    case 'second':
                    case 's':
                      return 1e3 * r;
                    case 'ms':
                      return r;
                  }
                })(e)
              : t.long
              ? (function (e) {
                  return (
                    o(e, i, 'day') ||
                    o(e, n, 'hour') ||
                    o(e, 6e4, 'minute') ||
                    o(e, 1e3, 'second') ||
                    e + ' ms'
                  );
                })(e)
              : (function (e) {
                  if (i <= e) return Math.round(e / i) + 'd';
                  if (n <= e) return Math.round(e / n) + 'h';
                  if (6e4 <= e) return Math.round(e / 6e4) + 'm';
                  if (1e3 <= e) return Math.round(e / 1e3) + 's';
                  return e + 'ms';
                })(e)
          );
        };
      },
      {},
    ],
    15: [
      function (e, t, r) {
        'use strict';
        t.exports = function (e) {
          this.message = e;
        };
      },
      {},
    ],
    16: [
      function (u, l, v) {
        (function (e, t) {
          'use strict';
          var r = u('tty'),
            p = u('diff'),
            n = u('../ms'),
            d = u('../utils'),
            i = e.browser ? null : u('supports-color');
          v = l.exports = a;
          var o = t.Date,
            s =
              (t.setTimeout,
              t.setInterval,
              t.clearTimeout,
              t.clearInterval,
              r.isatty(1) && r.isatty(2));
          (v.useColors = !e.browser && (i || void 0 !== e.env.MOCHA_COLORS)),
            (v.inlineDiffs = !1),
            (v.colors = {
              pass: 90,
              fail: 31,
              'bright pass': 92,
              'bright fail': 91,
              'bright yellow': 93,
              pending: 36,
              suite: 0,
              'error title': 0,
              'error message': 31,
              'error stack': 90,
              checkmark: 32,
              fast: 90,
              medium: 33,
              slow: 31,
              green: 32,
              light: 90,
              'diff gutter': 90,
              'diff added': 32,
              'diff removed': 31,
            }),
            (v.symbols = {
              ok: '✓',
              err: '✖',
              dot: '․',
              comma: ',',
              bang: '!',
            }),
            'win32' === e.platform &&
              ((v.symbols.ok = '√'),
              (v.symbols.err = '×'),
              (v.symbols.dot = '.'));
          var g = (v.color = function (e, t) {
            return v.useColors ? '[' + v.colors[e] + 'm' + t + '[0m' : String(t);
          });
          function a(e) {
            var r = (this.stats = {
                suites: 0,
                tests: 0,
                passes: 0,
                pending: 0,
                failures: 0,
              }),
              n = (this.failures = []);
            e &&
              (((this.runner = e).stats = r),
              e.on('start', function () {
                r.start = new o();
              }),
              e.on('suite', function (e) {
                (r.suites = r.suites || 0), e.root || r.suites++;
              }),
              e.on('test end', function () {
                (r.tests = r.tests || 0), r.tests++;
              }),
              e.on('pass', function (e) {
                (r.passes = r.passes || 0),
                  e.duration > e.slow()
                    ? (e.speed = 'slow')
                    : e.duration > e.slow() / 2
                    ? (e.speed = 'medium')
                    : (e.speed = 'fast'),
                  r.passes++;
              }),
              e.on('fail', function (e, t) {
                (r.failures = r.failures || 0),
                  r.failures++,
                  (e.err = t),
                  n.push(e);
              }),
              e.on('end', function () {
                (r.end = new o()), (r.duration = new o() - r.start);
              }),
              e.on('pending', function () {
                r.pending++;
              }));
          }
          function m(e) {
            return e
              .replace(/\t/g, '<tab>')
              .replace(/\r/g, '<CR>')
              .replace(/\n/g, '<LF>\n');
          }
          function b(t, e) {
            return e
              .split('\n')
              .map(function (e) {
                return g(t, e);
              })
              .join('\n');
          }
          (v.window = { width: 75 }),
            s &&
              (v.window.width = e.stdout.getWindowSize
                ? e.stdout.getWindowSize(1)[0]
                : r.getWindowSize()[1]),
            (v.cursor = {
              hide: function () {
                s && e.stdout.write('[?25l');
              },
              show: function () {
                s && e.stdout.write('[?25h');
              },
              deleteLine: function () {
                s && e.stdout.write('[2K');
              },
              beginningOfLine: function () {
                s && e.stdout.write('[0G');
              },
              CR: function () {
                s
                  ? (v.cursor.deleteLine(), v.cursor.beginningOfLine())
                  : e.stdout.write('\r');
              },
            }),
            (v.list = function (e) {
              console.log(),
                e.forEach(function (e, t) {
                  var r,
                    n,
                    i =
                      g('error title', '  %s) %s:\n') +
                      g('error message', '     %s') +
                      g('error stack', '\n%s\n'),
                    o = e.err;
                  n =
                    o.message && 'function' == typeof o.message.toString
                      ? o.message + ''
                      : 'function' == typeof o.inspect
                      ? o.inspect() + ''
                      : '';
                  var s = o.stack || n,
                    a = n ? s.indexOf(n) : -1,
                    u = o.actual,
                    l = o.expected,
                    c = !0;
                  if (
                    (-1 === a
                      ? (r = n)
                      : ((a += n.length),
                        (r = s.slice(0, a)),
                        (s = s.slice(a + 1))),
                    o.uncaught && (r = 'Uncaught ' + r),
                    !1 !== o.showDiff &&
                      (function (e, t) {
                        return y.call(e) === y.call(t);
                      })(u, l) &&
                      void 0 !== l)
                  ) {
                    (c = !1),
                      (d.isString(u) && d.isString(l)) ||
                        ((o.actual = u = d.stringify(u)),
                        (o.expected = l = d.stringify(l))),
                      (i =
                        g('error title', '  %s) %s:\n%s') +
                        g('error stack', '\n%s\n'));
                    var f = n.match(/^([^:]+): expected/);
                    (r = '\n      ' + g('error message', f ? f[1] : r)),
                      v.inlineDiffs
                        ? (r += (function (e, t) {
                            var r = (function (e, t, r) {
                                var n = r ? m(e.actual) : e.actual,
                                  i = r ? m(e.expected) : e.expected;
                                return p['diff' + t](n, i)
                                  .map(function (e) {
                                    return e.added
                                      ? b('diff added', e.value)
                                      : e.removed
                                      ? b('diff removed', e.value)
                                      : e.value;
                                  })
                                  .join('');
                              })(e, 'WordsWithSpace', t),
                              n = r.split('\n');
                            if (4 < n.length) {
                              var i = String(n.length).length;
                              r = n
                                .map(function (e, t) {
                                  return (
                                    (function (e, t) {
                                      return (
                                        (e = String(e)),
                                        Array(t - e.length + 1).join(' ') + e
                                      );
                                    })(++t, i) +
                                    ' | ' +
                                    e
                                  );
                                })
                                .join('\n');
                            }
                            return (r = (r =
                              '\n' +
                              g('diff removed', 'actual') +
                              ' ' +
                              g('diff added', 'expected') +
                              '\n\n' +
                              r +
                              '\n').replace(/^/gm, '      '));
                          })(o, c))
                        : (r += (function (e, t) {
                            var r = '      ';
                            var n = p
                              .createPatch('string', e.actual, e.expected)
                              .split('\n')
                              .splice(5);
                            return (
                              '\n      ' +
                              b('diff added', '+ expected') +
                              ' ' +
                              b('diff removed', '- actual') +
                              '\n\n' +
                              n
                                .map(function (e) {
                                  return (
                                    t && (e = m(e)),
                                    '+' === e[0]
                                      ? r + b('diff added', e)
                                      : '-' === e[0]
                                      ? r + b('diff removed', e)
                                      : e.match(/@@/)
                                      ? '--'
                                      : e.match(/\\ No newline/)
                                      ? null
                                      : r + e
                                  );
                                })
                                .filter(function (e) {
                                  return null != e;
                                })
                                .join('\n')
                            );
                          })(o, c));
                  }
                  s = s.replace(/^/gm, '  ');
                  var h = '';
                  e.titlePath().forEach(function (e, t) {
                    0 !== t && (h += '\n     ');
                    for (var r = 0; r < t; r++) h += '  ';
                    h += e;
                  }),
                    console.log(i, t + 1, h, r, s);
                });
            }),
            (a.prototype.epilogue = function () {
              var e,
                t = this.stats;
              console.log(),
                (e =
                  g('bright pass', ' ') +
                  g('green', ' %d passing') +
                  g('light', ' (%s)')),
                console.log(e, t.passes || 0, n(t.duration)),
                t.pending &&
                  ((e = g('pending', ' ') + g('pending', ' %d pending')),
                  console.log(e, t.pending)),
                t.failures &&
                  ((e = g('fail', '  %d failing')),
                  console.log(e, t.failures),
                  a.list(this.failures),
                  console.log()),
                console.log();
            });
          var y = Object.prototype.toString;
        }.call(
          this,
          u('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        '../ms': 14,
        '../utils': 36,
        _process: 55,
        diff: 44,
        'supports-color': 40,
        tty: 4,
      },
    ],
    17: [
      function (e, t, r) {
        'use strict';
        var i = e('./base'),
          o = e('../utils');
        t.exports = function (e) {
          i.call(this, e);
          var t = 2;
          function n() {
            return Array(t).join('  ');
          }
          e.on('suite', function (e) {
            e.root ||
              (++t,
              console.log('%s<section class="suite">', n()),
              ++t,
              console.log('%s<h1>%s</h1>', n(), o.escape(e.title)),
              console.log('%s<dl>', n()));
          }),
            e.on('suite end', function (e) {
              e.root ||
                (console.log('%s</dl>', n()),
                --t,
                console.log('%s</section>', n()),
                --t);
            }),
            e.on('pass', function (e) {
              console.log('%s  <dt>%s</dt>', n(), o.escape(e.title));
              var t = o.escape(o.clean(e.body));
              console.log('%s  <dd><pre><code>%s</code></pre></dd>', n(), t);
            }),
            e.on('fail', function (e, t) {
              console.log(
                '%s  <dt class="error">%s</dt>',
                n(),
                o.escape(e.title),
              );
              var r = o.escape(o.clean(e.body));
              console.log(
                '%s  <dd class="error"><pre><code>%s</code></pre></dd>',
                n(),
                r,
              ),
                console.log('%s  <dd class="error">%s</dd>', n(), o.escape(t));
            });
        };
      },
      { '../utils': 36, './base': 16 },
    ],
    18: [
      function (r, n, e) {
        (function (i) {
          'use strict';
          var o = r('./base'),
            e = r('../utils').inherits,
            s = o.color;
          function t(e) {
            o.call(this, e);
            var t = this,
              r = (0.75 * o.window.width) | 0,
              n = -1;
            e.on('start', function () {
              i.stdout.write('\n');
            }),
              e.on('pending', function () {
                ++n % r == 0 && i.stdout.write('\n  '),
                  i.stdout.write(s('pending', o.symbols.comma));
              }),
              e.on('pass', function (e) {
                ++n % r == 0 && i.stdout.write('\n  '),
                  'slow' === e.speed
                    ? i.stdout.write(s('bright yellow', o.symbols.dot))
                    : i.stdout.write(s(e.speed, o.symbols.dot));
              }),
              e.on('fail', function () {
                ++n % r == 0 && i.stdout.write('\n  '),
                  i.stdout.write(s('fail', o.symbols.bang));
              }),
              e.on('end', function () {
                console.log(), t.epilogue();
              });
          }
          (n.exports = t), e(t, o);
        }.call(this, r('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    19: [
      function (r, i, e) {
        (function (e) {
          'use strict';
          var v = r('./base'),
            n = r('../utils'),
            w = r('../browser/progress'),
            E = (r('escape-string-regexp'), n.escape),
            _ = e.Date;
          e.setTimeout, e.setInterval, e.clearTimeout, e.clearInterval;
          i.exports = t;
          var x =
              '<ul id="mocha-stats"><li class="progress"><canvas width="40" height="40"></canvas></li><li class="passes"><a href="javascript:void(0);">passes:</a> <em>0</em></li><li class="failures"><a href="javascript:void(0);">failures:</a> <em>0</em></li><li class="duration">duration: <em>0</em>s</li></ul>',
            S = '&#x2023;';
          function t(r) {
            v.call(this, r);
            var n,
              i,
              o = this,
              s = this.stats,
              e = k(x),
              t = e.getElementsByTagName('li'),
              a = t[1].getElementsByTagName('em')[0],
              u = t[1].getElementsByTagName('a')[0],
              l = t[2].getElementsByTagName('em')[0],
              c = t[2].getElementsByTagName('a')[0],
              f = t[3].getElementsByTagName('em')[0],
              h = e.getElementsByTagName('canvas')[0],
              p = k('<ul id="mocha-report"></ul>'),
              d = [p],
              g = document.getElementById('mocha');
            if (h.getContext) {
              var m = window.devicePixelRatio || 1;
              (h.style.width = h.width),
                (h.style.height = h.height),
                (h.width *= m),
                (h.height *= m),
                (i = h.getContext('2d')).scale(m, m),
                (n = new w());
            }
            if (!g)
              return (function (e) {
                document.body.appendChild(
                  k('<div id="mocha-error">%s</div>', e),
                );
              })('#mocha div missing, add it to your document');
            function b(e) {
              d[0] && d[0].appendChild(e);
            }
            function y() {
              var e = ((s.tests / r.total) * 100) | 0;
              n && n.update(e).draw(i);
              var t = new _() - s.start;
              D(a, s.passes), D(l, s.failures), D(f, (t / 1e3).toFixed(2));
            }
            T(u, 'click', function (e) {
              e.preventDefault(), C();
              var t = /pass/.test(p.className) ? '' : ' pass';
              (p.className = p.className.replace(/fail|pass/g, '') + t),
                p.className.trim() && A('test pass');
            }),
              T(c, 'click', function (e) {
                e.preventDefault(), C();
                var t = /fail/.test(p.className) ? '' : ' fail';
                (p.className = p.className.replace(/fail|pass/g, '') + t),
                  p.className.trim() && A('test fail');
              }),
              g.appendChild(e),
              g.appendChild(p),
              n && n.size(40),
              r.on('suite', function (e) {
                if (!e.root) {
                  var t = k(
                    '<li class="suite"><h1><a href="%s">%s</a></h1></li>',
                    o.suiteURL(e),
                    E(e.title),
                  );
                  d[0].appendChild(t),
                    d.unshift(document.createElement('ul')),
                    t.appendChild(d[0]);
                }
              }),
              r.on('suite end', function (e) {
                e.root ? y() : d.shift();
              }),
              r.on('pass', function (e) {
                var t = o.testURL(e),
                  r = k(
                    '<li class="test pass %e"><h2>%e<span class="duration">%ems</span> <a href="%s" class="replay">' +
                      S +
                      '</a></h2></li>',
                    e.speed,
                    e.title,
                    e.duration,
                    t,
                  );
                o.addCodeToggle(r, e.body), b(r), y();
              }),
              r.on('fail', function (e) {
                var t,
                  r = k(
                    '<li class="test fail"><h2>%e <a href="%e" class="replay">' +
                      S +
                      '</a></h2></li>',
                    e.title,
                    o.testURL(e),
                  ),
                  n = e.err.toString();
                if (
                  ('[object Error]' === n && (n = e.err.message), e.err.stack)
                ) {
                  var i = e.err.stack.indexOf(e.err.message);
                  t =
                    -1 === i
                      ? e.err.stack
                      : e.err.stack.substr(e.err.message.length + i);
                } else e.err.sourceURL && void 0 !== e.err.line && (t = '\n(' + e.err.sourceURL + ':' + e.err.line + ')');
                (t = t || ''),
                  e.err.htmlMessage && t
                    ? r.appendChild(
                        k(
                          '<div class="html-error">%s\n<pre class="error">%e</pre></div>',
                          e.err.htmlMessage,
                          t,
                        ),
                      )
                    : e.err.htmlMessage
                    ? r.appendChild(
                        k(
                          '<div class="html-error">%s</div>',
                          e.err.htmlMessage,
                        ),
                      )
                    : r.appendChild(k('<pre class="error">%e%e</pre>', n, t)),
                  o.addCodeToggle(r, e.body),
                  b(r),
                  y();
              }),
              r.on('pending', function (e) {
                b(k('<li class="test pass pending"><h2>%e</h2></li>', e.title)),
                  y();
              });
          }
          function k(e) {
            var r = arguments,
              t = document.createElement('div'),
              n = 1;
            return (
              (t.innerHTML = e.replace(/%([se])/g, function (e, t) {
                switch (t) {
                  case 's':
                    return String(r[n++]);
                  case 'e':
                    return E(r[n++]);
                }
              })),
              t.firstChild
            );
          }
          function A(e) {
            for (
              var t = document.getElementsByClassName('suite'), r = 0;
              r < t.length;
              r++
            ) {
              t[r].getElementsByClassName(e).length ||
                (t[r].className += ' hidden');
            }
          }
          function C() {
            for (
              var e = document.getElementsByClassName('suite hidden'), t = 0;
              t < e.length;
              ++t
            )
              e[t].className = e[t].className.replace('suite hidden', 'suite');
          }
          function D(e, t) {
            e.textContent ? (e.textContent = t) : (e.innerText = t);
          }
          function T(e, t, r) {
            e.addEventListener
              ? e.addEventListener(t, r, !1)
              : e.attachEvent('on' + t, r);
          }
          (t.prototype.suiteURL = function (e) {
            return e.fullTitle(), '#';
          }),
            (t.prototype.testURL = function (e) {
              return e.fullTitle(), '#';
            }),
            (t.prototype.addCodeToggle = function (e, t) {
              T(e.getElementsByTagName('h2')[0], 'click', function () {
                r.style.display = 'none' === r.style.display ? 'block' : 'none';
              });
              var r = k('<pre><code>%e</code></pre>', n.clean(t));
              e.appendChild(r), (r.style.display = 'none');
            });
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        '../browser/progress': 3,
        '../utils': 36,
        './base': 16,
        'escape-string-regexp': 45,
      },
    ],
    20: [
      function (e, t, r) {
        'use strict';
        (r.Base = r.base = e('./base')),
          (r.Dot = r.dot = e('./dot')),
          (r.Doc = r.doc = e('./doc')),
          (r.TAP = r.tap = e('./tap')),
          (r.JSON = r.json = e('./json')),
          (r.HTML = r.html = e('./html')),
          (r.List = r.list = e('./list')),
          (r.Min = r.min = e('./min')),
          (r.Spec = r.spec = e('./spec')),
          (r.Nyan = r.nyan = e('./nyan')),
          (r.XUnit = r.xunit = e('./xunit')),
          (r.Markdown = r.markdown = e('./markdown')),
          (r.Progress = r.progress = e('./progress')),
          (r.Landing = r.landing = e('./landing')),
          (r.JSONStream = r['json-stream'] = e('./json-stream'));
      },
      {
        './base': 16,
        './doc': 17,
        './dot': 18,
        './html': 19,
        './json': 22,
        './json-stream': 21,
        './landing': 23,
        './list': 24,
        './markdown': 25,
        './min': 26,
        './nyan': 27,
        './progress': 28,
        './spec': 29,
        './tap': 30,
        './xunit': 31,
      },
    ],
    21: [
      function (e, t, r) {
        (function (n) {
          'use strict';
          var i = e('./base');
          function o(e) {
            return {
              title: e.title,
              fullTitle: e.fullTitle(),
              duration: e.duration,
              currentRetry: e.currentRetry(),
            };
          }
          t.exports = function (e) {
            i.call(this, e);
            var t = this,
              r = e.total;
            e.on('start', function () {
              console.log(JSON.stringify(['start', { total: r }]));
            }),
              e.on('pass', function (e) {
                console.log(JSON.stringify(['pass', o(e)]));
              }),
              e.on('fail', function (e, t) {
                ((e = o(e)).err = t.message),
                  (e.stack = t.stack || null),
                  console.log(JSON.stringify(['fail', e]));
              }),
              e.on('end', function () {
                n.stdout.write(JSON.stringify(['end', t.stats]));
              });
          };
        }.call(this, e('_process')));
      },
      { './base': 16, _process: 55 },
    ],
    22: [
      function (t, r, e) {
        (function (a) {
          'use strict';
          var e = t('./base');
          function u(e) {
            return {
              title: e.title,
              fullTitle: e.fullTitle(),
              duration: e.duration,
              currentRetry: e.currentRetry(),
              err: (function (t) {
                var r = {};
                return (
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    r[e] = t[e];
                  }, t),
                  r
                );
              })(e.err || {}),
            };
          }
          r.exports = function (t) {
            e.call(this, t);
            var r = this,
              n = [],
              i = [],
              o = [],
              s = [];
            t.on('test end', function (e) {
              n.push(e);
            }),
              t.on('pass', function (e) {
                s.push(e);
              }),
              t.on('fail', function (e) {
                o.push(e);
              }),
              t.on('pending', function (e) {
                i.push(e);
              }),
              t.on('end', function () {
                var e = {
                  stats: r.stats,
                  tests: n.map(u),
                  pending: i.map(u),
                  failures: o.map(u),
                  passes: s.map(u),
                };
                (t.testResults = e), a.stdout.write(JSON.stringify(e, null, 2));
              });
          };
        }.call(this, t('_process')));
      },
      { './base': 16, _process: 55 },
    ],
    23: [
      function (r, n, e) {
        (function (l) {
          'use strict';
          var c = r('./base'),
            e = r('../utils').inherits,
            f = c.cursor,
            h = c.color;
          function t(e) {
            c.call(this, e);
            var t = this,
              r = (0.75 * c.window.width) | 0,
              n = e.total,
              i = l.stdout,
              o = h('plane', '✈'),
              s = -1,
              a = 0;
            function u() {
              var e = Array(r).join('-');
              return '  ' + h('runway', e);
            }
            e.on('start', function () {
              i.write('\n\n\n  '), f.hide();
            }),
              e.on('test end', function (e) {
                var t = -1 === s ? ((r * ++a) / n) | 0 : s;
                'failed' === e.state && ((o = h('plane crash', '✈')), (s = t)),
                  i.write('[' + (r + 1) + 'D[2A'),
                  i.write(u()),
                  i.write('\n  '),
                  i.write(h('runway', Array(t).join('⋅'))),
                  i.write(o),
                  i.write(h('runway', Array(r - t).join('⋅') + '\n')),
                  i.write(u()),
                  i.write('[0m');
              }),
              e.on('end', function () {
                f.show(), console.log(), t.epilogue();
              });
          }
          (n.exports = t),
            (c.colors.plane = 0),
            (c.colors['plane crash'] = 31),
            (c.colors.runway = 90),
            e(t, c);
        }.call(this, r('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    24: [
      function (s, a, e) {
        (function (r) {
          'use strict';
          var n = s('./base'),
            e = s('../utils').inherits,
            i = n.color,
            o = n.cursor;
          function t(e) {
            n.call(this, e);
            var t = 0;
            e.on('start', function () {
              console.log();
            }),
              e.on('test', function (e) {
                r.stdout.write(i('pass', '    ' + e.fullTitle() + ': '));
              }),
              e.on('pending', function (e) {
                var t = i('checkmark', '  -') + i('pending', ' %s');
                console.log(t, e.fullTitle());
              }),
              e.on('pass', function (e) {
                var t =
                  i('checkmark', '  ' + n.symbols.ok) +
                  i('pass', ' %s: ') +
                  i(e.speed, '%dms');
                o.CR(), console.log(t, e.fullTitle(), e.duration);
              }),
              e.on('fail', function (e) {
                o.CR(), console.log(i('fail', '  %d) %s'), ++t, e.fullTitle());
              }),
              e.on('end', this.epilogue.bind(this));
          }
          (a.exports = t), e(t, n);
        }.call(this, s('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    25: [
      function (e, t, r) {
        (function (i) {
          'use strict';
          var o = e('./base'),
            s = e('../utils');
          t.exports = function (e) {
            o.call(this, e);
            var r = 0,
              n = '';
            function t(e) {
              return (function e(t, r) {
                ++r;
                var n,
                  i = '';
                for (var o in t)
                  'suite' !== o &&
                    ('$' !== o &&
                      ((n = ' - [' + o.substring(1) + ']'),
                      (n += '(#' + s.slug(t[o].suite.fullTitle()) + ')\n'),
                      (i += Array(r).join('  ') + n)),
                    (i += e(t[o], r)));
                return i;
              })(
                (function t(e, r) {
                  var n = r,
                    i = '$' + e.title;
                  return (
                    (r = r[i] = r[i] || { suite: e }),
                    e.suites.forEach(function (e) {
                      t(e, r);
                    }),
                    n
                  );
                })(e, {}),
                0,
              );
            }
            t(e.suite),
              e.on('suite', function (e) {
                ++r;
                var t = s.slug(e.fullTitle());
                (n += '<a name="' + t + '"></a>\n'),
                  (n +=
                    (function (e) {
                      return Array(r).join('#') + ' ' + e;
                    })(e.title) + '\n');
              }),
              e.on('suite end', function () {
                --r;
              }),
              e.on('pass', function (e) {
                var t = s.clean(e.body);
                (n += e.title + '.\n'),
                  (n += '\n```js\n'),
                  (n += t + '\n'),
                  (n += '```\n\n');
              }),
              e.on('end', function () {
                i.stdout.write('# TOC\n'),
                  i.stdout.write(t(e.suite)),
                  i.stdout.write(n);
              });
          };
        }.call(this, e('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    26: [
      function (i, o, e) {
        (function (t) {
          'use strict';
          var r = i('./base'),
            e = i('../utils').inherits;
          function n(e) {
            r.call(this, e),
              e.on('start', function () {
                t.stdout.write('[2J'), t.stdout.write('[1;3H');
              }),
              e.on('end', this.epilogue.bind(this));
          }
          (o.exports = n), e(n, r);
        }.call(this, i('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    27: [
      function (n, s, e) {
        (function (t) {
          'use strict';
          var i = n('./base'),
            e = n('../utils').inherits;
          function r(e) {
            i.call(this, e);
            var t = this,
              r = (0.75 * i.window.width) | 0,
              n = (this.nyanCatWidth = 11);
            (this.colorIndex = 0),
              (this.numberOfLines = 4),
              (this.rainbowColors = t.generateColors()),
              (this.scoreboardWidth = 5),
              (this.tick = 0),
              (this.trajectories = [[], [], [], []]),
              (this.trajectoryWidthMax = r - n),
              e.on('start', function () {
                i.cursor.hide(), t.draw();
              }),
              e.on('pending', function () {
                t.draw();
              }),
              e.on('pass', function () {
                t.draw();
              }),
              e.on('fail', function () {
                t.draw();
              }),
              e.on('end', function () {
                i.cursor.show();
                for (var e = 0; e < t.numberOfLines; e++) o('\n');
                t.epilogue();
              });
          }
          function o(e) {
            t.stdout.write(e);
          }
          (s.exports = r),
            e(r, i),
            (r.prototype.draw = function () {
              this.appendRainbow(),
                this.drawScoreboard(),
                this.drawRainbow(),
                this.drawNyanCat(),
                (this.tick = !this.tick);
            }),
            (r.prototype.drawScoreboard = function () {
              var e = this.stats;
              function t(e, t) {
                o(' '), o(i.color(e, t)), o('\n');
              }
              t('green', e.passes),
                t('fail', e.failures),
                t('pending', e.pending),
                o('\n'),
                this.cursorUp(this.numberOfLines);
            }),
            (r.prototype.appendRainbow = function () {
              for (
                var e = this.tick ? '_' : '-', t = this.rainbowify(e), r = 0;
                r < this.numberOfLines;
                r++
              ) {
                var n = this.trajectories[r];
                n.length >= this.trajectoryWidthMax && n.shift(), n.push(t);
              }
            }),
            (r.prototype.drawRainbow = function () {
              var t = this;
              this.trajectories.forEach(function (e) {
                o('[' + t.scoreboardWidth + 'C'), o(e.join('')), o('\n');
              }),
                this.cursorUp(this.numberOfLines);
            }),
            (r.prototype.drawNyanCat = function () {
              var e =
                  '[' +
                  (this.scoreboardWidth + this.trajectories[0].length) +
                  'C',
                t = '';
              o(e),
                o('_,------,'),
                o('\n'),
                o(e),
                o('_|' + (t = this.tick ? '  ' : '   ') + '/\\_/\\ '),
                o('\n'),
                o(e),
                (t = this.tick ? '_' : '__'),
                o((this.tick ? '~' : '^') + '|' + t + this.face() + ' '),
                o('\n'),
                o(e),
                o((t = this.tick ? ' ' : '  ') + '""  "" '),
                o('\n'),
                this.cursorUp(this.numberOfLines);
            }),
            (r.prototype.face = function () {
              var e = this.stats;
              return e.failures
                ? '( x .x)'
                : e.pending
                ? '( o .o)'
                : e.passes
                ? '( ^ .^)'
                : '( - .-)';
            }),
            (r.prototype.cursorUp = function (e) {
              o('[' + e + 'A');
            }),
            (r.prototype.cursorDown = function (e) {
              o('[' + e + 'B');
            }),
            (r.prototype.generateColors = function () {
              for (var e = [], t = 0; t < 42; t++) {
                var r = Math.floor(Math.PI / 3),
                  n = t * (1 / 6),
                  i = Math.floor(3 * Math.sin(n) + 3),
                  o = Math.floor(3 * Math.sin(n + 2 * r) + 3),
                  s = Math.floor(3 * Math.sin(n + 4 * r) + 3);
                e.push(36 * i + 6 * o + s + 16);
              }
              return e;
            }),
            (r.prototype.rainbowify = function (e) {
              if (!i.useColors) return e;
              var t =
                this.rainbowColors[this.colorIndex % this.rainbowColors.length];
              return (this.colorIndex += 1), '[38;5;' + t + 'm' + e + '[0m';
            });
        }.call(this, n('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    28: [
      function (r, n, e) {
        (function (a) {
          'use strict';
          var u = r('./base'),
            e = r('../utils').inherits,
            l = u.color,
            c = u.cursor;
          function t(e, r) {
            u.call(this, e);
            var t = this,
              n = (0.5 * u.window.width) | 0,
              i = e.total,
              o = 0,
              s = -1;
            ((r = r || {}).open = r.open || '['),
              (r.complete = r.complete || '▬'),
              (r.incomplete = r.incomplete || u.symbols.dot),
              (r.close = r.close || ']'),
              (r.verbose = !1),
              e.on('start', function () {
                console.log(), c.hide();
              }),
              e.on('test end', function () {
                var e = (n * (++o / i)) | 0,
                  t = n - e;
                (e === s && !r.verbose) ||
                  ((s = e),
                  c.CR(),
                  a.stdout.write('[J'),
                  a.stdout.write(l('progress', '  ' + r.open)),
                  a.stdout.write(Array(e).join(r.complete)),
                  a.stdout.write(Array(t).join(r.incomplete)),
                  a.stdout.write(l('progress', r.close)),
                  r.verbose &&
                    a.stdout.write(l('progress', ' ' + o + ' of ' + i)));
              }),
              e.on('end', function () {
                c.show(), console.log(), t.epilogue();
              });
          }
          (n.exports = t), (u.colors.progress = 90), e(t, u);
        }.call(this, r('_process')));
      },
      { '../utils': 36, './base': 16, _process: 55 },
    ],
    29: [
      function (e, t, r) {
        'use strict';
        var i = e('./base'),
          n = e('../utils').inherits,
          o = i.color;
        function s(e) {
          i.call(this, e);
          var t = 0,
            r = 0;
          function n() {
            return Array(t).join('  ');
          }
          e.on('start', function () {
            console.log();
          }),
            e.on('suite', function (e) {
              ++t, console.log(o('suite', '%s%s'), n(), e.title);
            }),
            e.on('suite end', function () {
              1 === --t && console.log();
            }),
            e.on('pending', function (e) {
              var t = n() + o('pending', '  - %s');
              console.log(t, e.title);
            }),
            e.on('pass', function (e) {
              var t;
              'fast' === e.speed
                ? ((t =
                    n() +
                    o('checkmark', '  ' + i.symbols.ok) +
                    o('pass', ' %s')),
                  console.log(t, e.title))
                : ((t =
                    n() +
                    o('checkmark', '  ' + i.symbols.ok) +
                    o('pass', ' %s') +
                    o(e.speed, ' (%dms)')),
                  console.log(t, e.title, e.duration));
            }),
            e.on('fail', function (e) {
              console.log(n() + o('fail', '  %d) %s'), ++r, e.title);
            }),
            e.on('end', this.epilogue.bind(this));
        }
        (t.exports = s), n(s, i);
      },
      { '../utils': 36, './base': 16 },
    ],
    30: [
      function (e, t, r) {
        'use strict';
        var o = e('./base');
        function s(e) {
          return e.fullTitle().replace(/#/g, '');
        }
        t.exports = function (t) {
          o.call(this, t);
          var r = 1,
            n = 0,
            i = 0;
          t.on('start', function () {
            var e = t.grepTotal(t.suite);
            console.log('%d..%d', 1, e);
          }),
            t.on('test end', function () {
              ++r;
            }),
            t.on('pending', function (e) {
              console.log('ok %d %s # SKIP -', r, s(e));
            }),
            t.on('pass', function (e) {
              n++, console.log('ok %d %s', r, s(e));
            }),
            t.on('fail', function (e, t) {
              i++,
                console.log('not ok %d %s', r, s(e)),
                t.stack && console.log(t.stack.replace(/^/gm, '  '));
            }),
            t.on('end', function () {
              console.log('# tests ' + (n + i)),
                console.log('# pass ' + n),
                console.log('# fail ' + i);
            });
        };
      },
      { './base': 16 },
    ],
    31: [
      function (o, p, e) {
        (function (t, e) {
          'use strict';
          var s = o('./base'),
            r = o('../utils'),
            n = r.inherits,
            a = o('fs'),
            u = r.escape,
            l = o('mkdirp'),
            c = o('path'),
            f = e.Date;
          e.setTimeout, e.setInterval, e.clearTimeout, e.clearInterval;
          function i(e, t) {
            s.call(this, e);
            var r,
              n = this.stats,
              i = [],
              o = this;
            if (t && t.reporterOptions) {
              if (t.reporterOptions.output) {
                if (!a.createWriteStream)
                  throw new Error('file output not supported in browser');
                l.sync(c.dirname(t.reporterOptions.output)),
                  (o.fileStream = a.createWriteStream(
                    t.reporterOptions.output,
                  ));
              }
              r = t.reporterOptions.suiteName;
            }
            (r = r || 'Mocha Tests'),
              e.on('pending', function (e) {
                i.push(e);
              }),
              e.on('pass', function (e) {
                i.push(e);
              }),
              e.on('fail', function (e) {
                i.push(e);
              }),
              e.on('end', function () {
                o.write(
                  h(
                    'testsuite',
                    {
                      name: r,
                      tests: n.tests,
                      failures: n.failures,
                      errors: n.failures,
                      skipped: n.tests - n.failures - n.passes,
                      timestamp: new f().toUTCString(),
                      time: n.duration / 1e3 || 0,
                    },
                    !1,
                  ),
                ),
                  i.forEach(function (e) {
                    o.test(e);
                  }),
                  o.write('</testsuite>');
              });
          }
          function h(e, t, r, n) {
            var i,
              o = r ? '/>' : '>',
              s = [];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) &&
                s.push(a + '="' + u(t[a]) + '"');
            return (
              (i = '<' + e + (s.length ? ' ' + s.join(' ') : '') + o),
              n && (i += n + '</' + e + o),
              i
            );
          }
          (p.exports = i),
            n(i, s),
            (i.prototype.done = function (e, t) {
              this.fileStream
                ? this.fileStream.end(function () {
                    t(e);
                  })
                : t(e);
            }),
            (i.prototype.write = function (e) {
              this.fileStream
                ? this.fileStream.write(e + '\n')
                : 'object' == typeof t && t.stdout
                ? t.stdout.write(e + '\n')
                : console.log(e);
            }),
            (i.prototype.test = function (e) {
              var t = {
                classname: e.parent.fullTitle(),
                name: e.title,
                time: e.duration / 1e3 || 0,
              };
              if ('failed' === e.state) {
                var r = e.err;
                this.write(
                  h(
                    'testcase',
                    t,
                    !1,
                    h('failure', {}, !1, u(r.message) + '\n' + u(r.stack)),
                  ),
                );
              } else
                e.isPending()
                  ? this.write(h('testcase', t, !1, h('skipped', {}, !0)))
                  : this.write(h('testcase', t, !0));
            });
        }.call(
          this,
          o('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        '../utils': 36,
        './base': 16,
        _process: 55,
        fs: 40,
        mkdirp: 52,
        path: 40,
      },
    ],
    32: [
      function (a, u, e) {
        (function (e) {
          'use strict';
          var t = a('events').EventEmitter,
            l = a('./pending'),
            r = a('debug')('mocha:runnable'),
            n = a('./ms'),
            c = a('./utils'),
            f = e.Date,
            i = e.setTimeout,
            o = (e.setInterval, e.clearTimeout),
            h = (e.clearInterval, Object.prototype.toString);
          function s(e, t) {
            (this.title = e),
              (this.fn = t),
              (this.body = (t || '').toString()),
              (this.async = t && t.length),
              (this.sync = !this.async),
              (this._timeout = 2e3),
              (this._slow = 75),
              (this._enableTimeouts = !0),
              (this.timedOut = !1),
              (this._trace = new Error('done() called multiple times')),
              (this._retries = -1),
              (this._currentRetry = 0),
              (this.pending = !1);
          }
          (u.exports = s),
            c.inherits(s, t),
            (s.prototype.timeout = function (e) {
              return arguments.length
                ? ((0 === e || e > Math.pow(2, 31)) &&
                    (this._enableTimeouts = !1),
                  'string' == typeof e && (e = n(e)),
                  r('timeout %d', e),
                  (this._timeout = e),
                  this.timer && this.resetTimeout(),
                  this)
                : this._timeout;
            }),
            (s.prototype.slow = function (e) {
              return void 0 === e
                ? this._slow
                : ('string' == typeof e && (e = n(e)),
                  r('timeout %d', e),
                  (this._slow = e),
                  this);
            }),
            (s.prototype.enableTimeouts = function (e) {
              return arguments.length
                ? (r('enableTimeouts %s', e), (this._enableTimeouts = e), this)
                : this._enableTimeouts;
            }),
            (s.prototype.skip = function () {
              throw new l('sync skip');
            }),
            (s.prototype.isPending = function () {
              return this.pending || (this.parent && this.parent.isPending());
            }),
            (s.prototype.retries = function (e) {
              if (!arguments.length) return this._retries;
              this._retries = e;
            }),
            (s.prototype.currentRetry = function (e) {
              if (!arguments.length) return this._currentRetry;
              this._currentRetry = e;
            }),
            (s.prototype.fullTitle = function () {
              return this.titlePath().join(' ');
            }),
            (s.prototype.titlePath = function () {
              return this.parent.titlePath().concat([this.title]);
            }),
            (s.prototype.clearTimeout = function () {
              o(this.timer);
            }),
            (s.prototype.inspect = function () {
              return JSON.stringify(
                this,
                function (e, t) {
                  if ('_' !== e[0])
                    return 'parent' === e
                      ? '#<Suite>'
                      : 'ctx' === e
                      ? '#<Context>'
                      : t;
                },
                2,
              );
            }),
            (s.prototype.resetTimeout = function () {
              var e = this,
                t = this.timeout() || 1e9;
              this._enableTimeouts &&
                (this.clearTimeout(),
                (this.timer = i(function () {
                  e._enableTimeouts &&
                    (e.callback(
                      new Error(
                        'Timeout of ' +
                          t +
                          'ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.',
                      ),
                    ),
                    (e.timedOut = !0));
                }, t)));
            }),
            (s.prototype.globals = function (e) {
              if (!arguments.length) return this._allowedGlobals;
              this._allowedGlobals = e;
            }),
            (s.prototype.run = function (r) {
              var n,
                i,
                o = this,
                s = new f(),
                a = this.ctx;
              function u(e) {
                var t = o.timeout();
                if (!o.timedOut) {
                  if (n)
                    return (function (e) {
                      i ||
                        ((i = !0),
                        o.emit(
                          'error',
                          e ||
                            new Error(
                              'done() called multiple times; stacktrace may be inaccurate',
                            ),
                        ));
                    })(e || o._trace);
                  o.clearTimeout(),
                    (o.duration = new f() - s),
                    (n = !0),
                    !e &&
                      o.duration > t &&
                      o._enableTimeouts &&
                      (e = new Error(
                        'Timeout of ' +
                          t +
                          'ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.',
                      )),
                    r(e);
                }
              }
              if (
                (a && a.runnable && a.runnable(this),
                (this.callback = u),
                this.async)
              ) {
                if (
                  (this.resetTimeout(),
                  (this.skip = function () {
                    throw (
                      (u(new l('async skip call')),
                      new l('async skip; aborting execution'))
                    );
                  }),
                  this.allowUncaught)
                )
                  return t(this.fn);
                try {
                  t(this.fn);
                } catch (e) {
                  (i = !0), u(c.getError(e));
                }
              } else if (this.allowUncaught)
                this.isPending() ? u() : e(this.fn);
              else
                try {
                  this.isPending() ? u() : e(this.fn);
                } catch (e) {
                  (i = !0), u(c.getError(e));
                }
              function e(e) {
                var t = e.call(a);
                if (t && 'function' == typeof t.then)
                  o.resetTimeout(),
                    t.then(
                      function () {
                        return u(), null;
                      },
                      function (e) {
                        u(
                          e ||
                            new Error(
                              'Promise rejected with no or falsy reason',
                            ),
                        );
                      },
                    );
                else {
                  if (o.asyncOnly)
                    return u(
                      new Error(
                        '--async-only option in use without declaring `done()` or returning a promise',
                      ),
                    );
                  u();
                }
              }
              function t(e) {
                var t = e.call(a, function (e) {
                  return e instanceof Error || '[object Error]' === h.call(e)
                    ? u(e)
                    : e
                    ? '[object Object]' === Object.prototype.toString.call(e)
                      ? u(
                          new Error(
                            'done() invoked with non-Error: ' +
                              JSON.stringify(e),
                          ),
                        )
                      : u(new Error('done() invoked with non-Error: ' + e))
                    : t && c.isPromise(t)
                    ? u(
                        new Error(
                          'Resolution method is overspecified. Specify a callback *or* return a Promise; not both.',
                        ),
                      )
                    : void u();
                });
              }
            });
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      { './ms': 14, './pending': 15, './utils': 36, debug: 42, events: 46 },
    ],
    33: [
      function (b, y, e) {
        (function (o, i) {
          'use strict';
          var e = b('events').EventEmitter,
            c = b('./pending'),
            t = b('./utils'),
            r = t.inherits,
            u = b('debug')('mocha:runner'),
            n = b('./runnable'),
            s = t.stackTraceFilter(),
            a = t.stringify,
            l = t.type,
            f = t.undefinedError,
            h = [
              'setTimeout',
              'clearTimeout',
              'setInterval',
              'clearInterval',
              'XMLHttpRequest',
              'Date',
              'setImmediate',
              'clearImmediate',
            ];
          function p(e, t) {
            var r = this;
            (this._globals = []),
              (this._abort = !1),
              (this._delay = t),
              (this.suite = e),
              (this.started = !1),
              (this.total = e.total()),
              (this.failures = 0),
              this.on('test end', function (e) {
                r.checkGlobals(e);
              }),
              this.on('hook end', function (e) {
                r.checkGlobals(e);
              }),
              (this._defaultGrep = /.*/),
              this.grep(this._defaultGrep),
              this.globals(
                this.globalProps().concat(
                  (function () {
                    if ('object' == typeof o && 'string' == typeof o.version) {
                      if (
                        o.version.split('.').reduce(function (e, t) {
                          return (e << 8) | t;
                        }) < 2315
                      )
                        return ['errno'];
                    }
                    return [];
                  })(),
                ),
              );
          }
          function d() {
            return !1;
          }
          function g(e) {
            function t(e) {
              for (var t = 0; t < e.length; t++) delete e[t].fn;
            }
            Array.isArray(e._beforeAll) && t(e._beforeAll),
              Array.isArray(e._beforeEach) && t(e._beforeEach),
              Array.isArray(e._afterAll) && t(e._afterAll),
              Array.isArray(e._afterEach) && t(e._afterEach);
            for (var r = 0; r < e.tests.length; r++) delete e.tests[r].fn;
          }
          function m(e) {
            return (
              e._onlyTests.length || e._onlySuites.length || e.suites.some(m)
            );
          }
          ((y.exports = p).immediately = i.setImmediate || o.nextTick),
            r(p, e),
            (p.prototype.grep = function (e, t) {
              return (
                u('grep %s', e),
                (this._grep = e),
                (this._invert = t),
                (this.total = this.grepTotal(this.suite)),
                this
              );
            }),
            (p.prototype.grepTotal = function (e) {
              var r = this,
                n = 0;
              return (
                e.eachTest(function (e) {
                  var t = r._grep.test(e.fullTitle());
                  r._invert && (t = !t), t && n++;
                }),
                n
              );
            }),
            (p.prototype.globalProps = function () {
              for (var e = Object.keys(i), t = 0; t < h.length; ++t)
                ~e.indexOf(h[t]) || e.push(h[t]);
              return e;
            }),
            (p.prototype.globals = function (e) {
              return arguments.length
                ? (u('globals %j', e),
                  (this._globals = this._globals.concat(e)),
                  this)
                : this._globals;
            }),
            (p.prototype.checkGlobals = function (e) {
              if (!this.ignoreLeaks) {
                var t,
                  r = this._globals,
                  n = this.globalProps();
                e && (r = r.concat(e._allowedGlobals || [])),
                  this.prevGlobalsLength !== n.length &&
                    ((this.prevGlobalsLength = n.length),
                    (t = (function (e, t) {
                      return t.filter(function (t) {
                        return (
                          !/^\d+/.test(t) &&
                          (!i.navigator || !/^getInterface/.test(t)) &&
                          (!i.navigator || !/^\d+/.test(t)) &&
                          !/^mocha-/.test(t) &&
                          !(
                            e.filter(function (e) {
                              return ~e.indexOf('*')
                                ? 0 === t.indexOf(e.split('*')[0])
                                : t === e;
                            }).length ||
                            (i.navigator && 'onerror' === t)
                          )
                        );
                      });
                    })(r, n)),
                    (this._globals = this._globals.concat(t)),
                    1 < t.length
                      ? this.fail(
                          e,
                          new Error('global leaks detected: ' + t.join(', ')),
                        )
                      : t.length &&
                        this.fail(
                          e,
                          new Error('global leak detected: ' + t[0]),
                        ));
              }
            }),
            (p.prototype.fail = function (e, t) {
              if (!e.isPending()) {
                ++this.failures,
                  (e.state = 'failed'),
                  t instanceof Error ||
                    (t && 'string' == typeof t.message) ||
                    (t = new Error(
                      'the ' +
                        l(t) +
                        ' ' +
                        a(t) +
                        ' was thrown, throw an Error :)',
                    ));
                try {
                  t.stack =
                    this.fullStackTrace || !t.stack ? t.stack : s(t.stack);
                } catch (e) {}
                this.emit('fail', e, t);
              }
            }),
            (p.prototype.failHook = function (e, t) {
              e.ctx &&
                e.ctx.currentTest &&
                ((e.originalTitle = e.originalTitle || e.title),
                (e.title =
                  e.originalTitle + ' for "' + e.ctx.currentTest.title + '"')),
                this.fail(e, t),
                this.suite.bail() && this.emit('end');
            }),
            (p.prototype.hook = function (o, s) {
              var a = this.suite,
                e = a['_' + o],
                u = this;
              p.immediately(function () {
                !(function r(n) {
                  var i = e[n];
                  if (!i) return s();
                  ((u.currentRunnable = i).ctx.currentTest = u.test),
                    u.emit('hook', i),
                    i.listeners('error').length ||
                      i.on('error', function (e) {
                        u.failHook(i, e);
                      }),
                    i.run(function (e) {
                      var t = i.error();
                      if ((t && u.fail(u.test, t), e)) {
                        if (!(e instanceof c)) return u.failHook(i, e), s(e);
                        'beforeEach' === o || 'afterEach' === o
                          ? (u.test.pending = !0)
                          : (a.tests.forEach(function (e) {
                              e.pending = !0;
                            }),
                            (i.pending = !0));
                      }
                      u.emit('hook end', i), delete i.ctx.currentTest, r(++n);
                    });
                })(0);
              });
            }),
            (p.prototype.hooks = function (t, n, i) {
              var o = this,
                s = this.suite;
              !(function r(e) {
                if (!(o.suite = e)) return (o.suite = s), i();
                o.hook(t, function (e) {
                  if (e) {
                    var t = o.suite;
                    return (o.suite = s), i(e, t);
                  }
                  r(n.pop());
                });
              })(n.pop());
            }),
            (p.prototype.hookUp = function (e, t) {
              var r = [this.suite].concat(this.parents()).reverse();
              this.hooks(e, r, t);
            }),
            (p.prototype.hookDown = function (e, t) {
              var r = [this.suite].concat(this.parents());
              this.hooks(e, r, t);
            }),
            (p.prototype.parents = function () {
              for (var e = this.suite, t = []; e.parent; )
                (e = e.parent), t.push(e);
              return t;
            }),
            (p.prototype.runTest = function (t) {
              var r = this,
                n = this.test;
              if (n)
                if (
                  this.forbidOnly &&
                  m(this.parents().reverse()[0] || this.suite)
                )
                  t(new Error('`.only` forbidden'));
                else {
                  if (
                    (this.asyncOnly && (n.asyncOnly = !0),
                    n.on('error', function (e) {
                      r.fail(n, e);
                    }),
                    this.allowUncaught)
                  )
                    return (n.allowUncaught = !0), n.run(t);
                  try {
                    n.run(t);
                  } catch (e) {
                    t(e);
                  }
                }
            }),
            (p.prototype.runTests = function (n, i) {
              var o,
                s = this,
                a = n.tests.slice();
              function u(e, r, t) {
                var n = s.suite;
                (s.suite = t ? r.parent : r),
                  s.suite
                    ? s.hookUp('afterEach', function (e, t) {
                        if (((s.suite = n), e)) return u(e, t, !0);
                        i(r);
                      })
                    : ((s.suite = n), i(r));
              }
              function l(e, t) {
                if (s.failures && n._bail) return i();
                if (s._abort) return i();
                if (e) return u(0, t, !0);
                if (!(o = a.shift())) return i();
                var r = s._grep.test(o.fullTitle());
                if ((s._invert && (r = !r), r)) {
                  if (o.isPending())
                    return (
                      s.forbidPending
                        ? ((o.isPending = d),
                          s.fail(o, new Error('Pending test forbidden')),
                          delete o.isPending)
                        : s.emit('pending', o),
                      s.emit('test end', o),
                      l()
                    );
                  s.emit('test', (s.test = o)),
                    s.hookDown('beforeEach', function (e, t) {
                      return o.isPending()
                        ? (s.forbidPending
                            ? ((o.isPending = d),
                              s.fail(o, new Error('Pending test forbidden')),
                              delete o.isPending)
                            : s.emit('pending', o),
                          s.emit('test end', o),
                          l())
                        : e
                        ? u(0, t, !1)
                        : ((s.currentRunnable = s.test),
                          void s.runTest(function (e) {
                            if (((o = s.test), e)) {
                              var t = o.currentRetry();
                              if (e instanceof c && s.forbidPending)
                                s.fail(o, new Error('Pending test forbidden'));
                              else if (e instanceof c)
                                (o.pending = !0), s.emit('pending', o);
                              else {
                                if (t < o.retries()) {
                                  var r = o.clone();
                                  return (
                                    r.currentRetry(t + 1),
                                    a.unshift(r),
                                    s.hookUp('afterEach', l)
                                  );
                                }
                                s.fail(o, e);
                              }
                              return (
                                s.emit('test end', o),
                                e instanceof c ? l() : s.hookUp('afterEach', l)
                              );
                            }
                            (o.state = 'passed'),
                              s.emit('pass', o),
                              s.emit('test end', o),
                              s.hookUp('afterEach', l);
                          }));
                    });
                } else s._grep !== s._defaultGrep ? p.immediately(l) : l();
              }
              (this.next = l), (this.hookErr = u), l();
            }),
            (p.prototype.runSuite = function (r, t) {
              var n = 0,
                i = this,
                e = this.grepTotal(r),
                o = !1;
              if (
                (u('run suite %s', r.fullTitle()),
                !e || (i.failures && r._bail))
              )
                return t();
              function s(e) {
                if (e) return e === r ? a() : a(e);
                if (i._abort) return a();
                var t = r.suites[n++];
                if (!t) return a();
                i._grep !== i._defaultGrep
                  ? p.immediately(function () {
                      i.runSuite(t, s);
                    })
                  : i.runSuite(t, s);
              }
              function a(e) {
                (i.suite = r),
                  (i.nextSuite = s),
                  o
                    ? t(e)
                    : ((o = !0),
                      delete i.test,
                      i.hook('afterAll', function () {
                        i.emit('suite end', r), t(e);
                      }));
              }
              this.emit('suite', (this.suite = r)),
                (this.nextSuite = s),
                this.hook('beforeAll', function (e) {
                  if (e) return a();
                  i.runTests(r, s);
                });
            }),
            (p.prototype.uncaught = function (e) {
              e
                ? u(
                    'uncaught exception %s',
                    (e ===
                      function () {
                        return this;
                      }.call(e) &&
                      e.message) ||
                      e,
                  )
                : (u('uncaught undefined exception'), (e = f())),
                (e.uncaught = !0);
              var t = this.currentRunnable;
              if (!t)
                return (
                  ((t = new n('Uncaught error outside test suite')).parent =
                    this.suite),
                  void (this.started
                    ? this.fail(t, e)
                    : (this.emit('start'), this.fail(t, e), this.emit('end')))
                );
              if ((t.clearTimeout(), !t.state && !t.isPending())) {
                if ((this.fail(t, e), 'test' === t.type))
                  return (
                    this.emit('test end', t),
                    void this.hookUp('afterEach', this.next)
                  );
                if ('hook' === t.type) {
                  var r = this.suite;
                  return -1 < t.fullTitle().indexOf('after each')
                    ? this.hookErr(e, r, !0)
                    : -1 < t.fullTitle().indexOf('before each')
                    ? this.hookErr(e, r, !1)
                    : this.nextSuite(r);
                }
                this.emit('end');
              }
            }),
            (p.prototype.run = function (e) {
              var t = this,
                r = this.suite;
              function n(e) {
                t.uncaught(e);
              }
              function i() {
                (t.started = !0),
                  t.emit('start'),
                  t.runSuite(r, function () {
                    u('finished running'), t.emit('end');
                  });
              }
              return (
                m(r) &&
                  (function t(r) {
                    r._onlyTests.length
                      ? ((r.tests = r._onlyTests), (r.suites = []))
                      : ((r.tests = []),
                        r._onlySuites.forEach(function (e) {
                          m(e) && t(e);
                        }),
                        (r.suites = r.suites.filter(function (e) {
                          return -1 !== r._onlySuites.indexOf(e) || t(e);
                        })));
                    return r.tests.length || r.suites.length;
                  })(r),
                (e = e || function () {}),
                u('start'),
                this.on('suite end', g),
                this.on('end', function () {
                  u('end'),
                    o.removeListener('uncaughtException', n),
                    e(t.failures);
                }),
                o.on('uncaughtException', n),
                this._delay ? (this.emit('waiting', r), r.once('run', i)) : i(),
                this
              );
            }),
            (p.prototype.abort = function () {
              return u('aborting'), (this._abort = !0), this;
            });
        }.call(
          this,
          b('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        './pending': 15,
        './runnable': 32,
        './utils': 36,
        _process: 55,
        debug: 42,
        events: 46,
      },
    ],
    34: [
      function (e, t, r) {
        'use strict';
        var n = e('events').EventEmitter,
          i = e('./hook'),
          o = e('./utils'),
          s = o.inherits,
          a = e('debug')('mocha:suite'),
          u = e('./ms');
        function l(e, t) {
          if (!o.isString(e))
            throw new Error(
              'Suite `title` should be a "string" but "' +
                typeof e +
                '" was given instead.',
            );
          function r() {}
          (this.title = e),
            (r.prototype = t),
            (this.ctx = new r()),
            (this.suites = []),
            (this.tests = []),
            (this.pending = !1),
            (this._beforeEach = []),
            (this._beforeAll = []),
            (this._afterEach = []),
            (this._afterAll = []),
            (this.root = !e),
            (this._timeout = 2e3),
            (this._enableTimeouts = !0),
            (this._slow = 75),
            (this._bail = !1),
            (this._retries = -1),
            (this._onlyTests = []),
            (this._onlySuites = []),
            (this.delayed = !1);
        }
        ((t.exports = l).create = function (e, t) {
          var r = new l(t, e.ctx);
          return (r.parent = e), (t = r.fullTitle()), e.addSuite(r), r;
        }),
          s(l, n),
          (l.prototype.clone = function () {
            var e = new l(this.title);
            return (
              a('clone'),
              (e.ctx = this.ctx),
              e.timeout(this.timeout()),
              e.retries(this.retries()),
              e.enableTimeouts(this.enableTimeouts()),
              e.slow(this.slow()),
              e.bail(this.bail()),
              e
            );
          }),
          (l.prototype.timeout = function (e) {
            return arguments.length
              ? ('0' === e.toString() && (this._enableTimeouts = !1),
                'string' == typeof e && (e = u(e)),
                a('timeout %d', e),
                (this._timeout = parseInt(e, 10)),
                this)
              : this._timeout;
          }),
          (l.prototype.retries = function (e) {
            return arguments.length
              ? (a('retries %d', e),
                (this._retries = parseInt(e, 10) || 0),
                this)
              : this._retries;
          }),
          (l.prototype.enableTimeouts = function (e) {
            return arguments.length
              ? (a('enableTimeouts %s', e), (this._enableTimeouts = e), this)
              : this._enableTimeouts;
          }),
          (l.prototype.slow = function (e) {
            return arguments.length
              ? ('string' == typeof e && (e = u(e)),
                a('slow %d', e),
                (this._slow = e),
                this)
              : this._slow;
          }),
          (l.prototype.bail = function (e) {
            return arguments.length
              ? (a('bail %s', e), (this._bail = e), this)
              : this._bail;
          }),
          (l.prototype.isPending = function () {
            return this.pending || (this.parent && this.parent.isPending());
          }),
          (l.prototype.beforeAll = function (e, t) {
            if (this.isPending()) return this;
            'function' == typeof e && (e = (t = e).name);
            var r = new i((e = '"before all" hook' + (e ? ': ' + e : '')), t);
            return (
              (r.parent = this),
              r.timeout(this.timeout()),
              r.retries(this.retries()),
              r.enableTimeouts(this.enableTimeouts()),
              r.slow(this.slow()),
              (r.ctx = this.ctx),
              this._beforeAll.push(r),
              this.emit('beforeAll', r),
              this
            );
          }),
          (l.prototype.afterAll = function (e, t) {
            if (this.isPending()) return this;
            'function' == typeof e && (e = (t = e).name);
            var r = new i((e = '"after all" hook' + (e ? ': ' + e : '')), t);
            return (
              (r.parent = this),
              r.timeout(this.timeout()),
              r.retries(this.retries()),
              r.enableTimeouts(this.enableTimeouts()),
              r.slow(this.slow()),
              (r.ctx = this.ctx),
              this._afterAll.push(r),
              this.emit('afterAll', r),
              this
            );
          }),
          (l.prototype.beforeEach = function (e, t) {
            if (this.isPending()) return this;
            'function' == typeof e && (e = (t = e).name);
            var r = new i((e = '"before each" hook' + (e ? ': ' + e : '')), t);
            return (
              (r.parent = this),
              r.timeout(this.timeout()),
              r.retries(this.retries()),
              r.enableTimeouts(this.enableTimeouts()),
              r.slow(this.slow()),
              (r.ctx = this.ctx),
              this._beforeEach.push(r),
              this.emit('beforeEach', r),
              this
            );
          }),
          (l.prototype.afterEach = function (e, t) {
            if (this.isPending()) return this;
            'function' == typeof e && (e = (t = e).name);
            var r = new i((e = '"after each" hook' + (e ? ': ' + e : '')), t);
            return (
              (r.parent = this),
              r.timeout(this.timeout()),
              r.retries(this.retries()),
              r.enableTimeouts(this.enableTimeouts()),
              r.slow(this.slow()),
              (r.ctx = this.ctx),
              this._afterEach.push(r),
              this.emit('afterEach', r),
              this
            );
          }),
          (l.prototype.addSuite = function (e) {
            return (
              (e.parent = this),
              e.timeout(this.timeout()),
              e.retries(this.retries()),
              e.enableTimeouts(this.enableTimeouts()),
              e.slow(this.slow()),
              e.bail(this.bail()),
              this.suites.push(e),
              this.emit('suite', e),
              this
            );
          }),
          (l.prototype.addTest = function (e) {
            return (
              (e.parent = this),
              e.timeout(this.timeout()),
              e.retries(this.retries()),
              e.enableTimeouts(this.enableTimeouts()),
              e.slow(this.slow()),
              (e.ctx = this.ctx),
              this.tests.push(e),
              this.emit('test', e),
              this
            );
          }),
          (l.prototype.fullTitle = function () {
            return this.titlePath().join(' ');
          }),
          (l.prototype.titlePath = function () {
            var e = [];
            return (
              this.parent && (e = e.concat(this.parent.titlePath())),
              this.root || e.push(this.title),
              e
            );
          }),
          (l.prototype.total = function () {
            return (
              this.suites.reduce(function (e, t) {
                return e + t.total();
              }, 0) + this.tests.length
            );
          }),
          (l.prototype.eachTest = function (t) {
            return (
              this.tests.forEach(t),
              this.suites.forEach(function (e) {
                e.eachTest(t);
              }),
              this
            );
          }),
          (l.prototype.run = function () {
            this.root && this.emit('run');
          });
      },
      { './hook': 6, './ms': 14, './utils': 36, debug: 42, events: 46 },
    ],
    35: [
      function (e, t, r) {
        'use strict';
        var n = e('./runnable'),
          i = e('./utils'),
          o = i.isString;
        function s(e, t) {
          if (!o(e))
            throw new Error(
              'Test `title` should be a "string" but "' +
                typeof e +
                '" was given instead.',
            );
          n.call(this, e, t), (this.pending = !t), (this.type = 'test');
        }
        (t.exports = s),
          i.inherits(s, n),
          (s.prototype.clone = function () {
            var e = new s(this.title, this.fn);
            return (
              e.timeout(this.timeout()),
              e.slow(this.slow()),
              e.enableTimeouts(this.enableTimeouts()),
              e.retries(this.retries()),
              e.currentRetry(this.currentRetry()),
              e.globals(this.globals()),
              (e.parent = this.parent),
              (e.file = this.file),
              (e.ctx = this.ctx),
              e
            );
          });
      },
      { './runnable': 32, './utils': 36 },
    ],
    36: [
      function (y, e, v) {
        (function (r, i) {
          'use strict';
          var u = y('path').basename,
            o = y('debug')('mocha:watch'),
            e = y('fs').existsSync,
            t = y('glob'),
            n = y('path'),
            l = n.join,
            c = y('fs').readdirSync,
            f = y('fs').statSync,
            s = y('fs').watchFile,
            a = y('fs').lstatSync,
            h = y('he'),
            p = ['node_modules', '.git'];
          function d(e) {
            return !~p.indexOf(e);
          }
          function g(e, t) {
            switch (t) {
              case 'function':
                return '[Function]';
              case 'object':
                return '{}';
              case 'array':
                return '[]';
              default:
                return e.toString();
            }
          }
          (v.inherits = y('util').inherits),
            (v.escape = function (e) {
              return h.encode(String(e), { useNamedReferences: !1 });
            }),
            (v.isString = function (e) {
              return 'string' == typeof e;
            }),
            (v.watch = function (e, n) {
              var t = { interval: 100 };
              e.forEach(function (r) {
                o('file %s', r),
                  s(r, t, function (e, t) {
                    t.mtime < e.mtime && n(r);
                  });
              });
            }),
            (v.files = function (t, r, n) {
              (n = n || []), (r = r || ['js']);
              var i = new RegExp('\\.(' + r.join('|') + ')$');
              return (
                c(t)
                  .filter(d)
                  .forEach(function (e) {
                    (e = l(t, e)),
                      a(e).isDirectory()
                        ? v.files(e, r, n)
                        : e.match(i) && n.push(e);
                  }),
                n
              );
            }),
            (v.slug = function (e) {
              return e
                .toLowerCase()
                .replace(/ +/g, '-')
                .replace(/[^-\w]/g, '');
            }),
            (v.clean = function (e) {
              var t = (e = e
                  .replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
                  .replace(/^\uFEFF/, '')
                  .replace(
                    /^function(?:\s*|\s+[^(]*)\([^)]*\)\s*\{((?:.|\n)*?)\s*\}$|^\([^)]*\)\s*=>\s*(?:\{((?:.|\n)*?)\s*\}|((?:.|\n)*))$/,
                    '$1$2$3',
                  )).match(/^\n?( *)/)[1].length,
                r = e.match(/^\n?(\t*)/)[1].length,
                n = new RegExp(
                  '^\n?' + (r ? '\t' : ' ') + '{' + (r || t) + '}',
                  'gm',
                );
              return (e = e.replace(n, '')).trim();
            }),
            (v.parseQuery = function (e) {
              return e
                .replace('?', '')
                .split('&')
                .reduce(function (e, t) {
                  var r = t.indexOf('='),
                    n = t.slice(0, r),
                    i = t.slice(++r);
                  return (
                    (e[n] = decodeURIComponent(i.replace(/\+/g, '%20'))), e
                  );
                }, {});
            }),
            (v.highlightTags = function (e) {
              for (
                var t = document
                    .getElementById('mocha')
                    .getElementsByTagName(e),
                  r = 0,
                  n = t.length;
                r < n;
                ++r
              )
                t[r].innerHTML = t[r].innerHTML
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
                  .replace(/('.*?')/gm, '<span class="string">$1</span>')
                  .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
                  .replace(/(\d+)/gm, '<span class="number">$1</span>')
                  .replace(
                    /\bnew[ \t]+(\w+)/gm,
                    '<span class="keyword">new</span> <span class="init">$1</span>',
                  )
                  .replace(
                    /\b(function|new|throw|return|var|if|else)\b/gm,
                    '<span class="keyword">$1</span>',
                  );
            });
          var m = (v.type = function (e) {
            return void 0 === e
              ? 'undefined'
              : null === e
              ? 'null'
              : i.isBuffer(e)
              ? 'buffer'
              : Object.prototype.toString
                  .call(e)
                  .replace(/^\[.+\s(.+?)]$/, '$1')
                  .toLowerCase();
          });
          function b(e, r, n) {
            if (void 0 === r) return u(e);
            var t = r * (n = n || 1),
              i = Array.isArray(e) ? '[' : '{',
              o = Array.isArray(e) ? ']' : '}',
              s =
                'number' == typeof e.length ? e.length : Object.keys(e).length;
            function a(e, t) {
              return new Array(t).join(e);
            }
            function u(e) {
              switch (m(e)) {
                case 'null':
                case 'undefined':
                  e = '[' + e + ']';
                  break;
                case 'array':
                case 'object':
                  e = b(e, r, n + 1);
                  break;
                case 'boolean':
                case 'regexp':
                case 'symbol':
                case 'number':
                  e = 0 === e && 1 / e == -1 / 0 ? '-0' : e.toString();
                  break;
                case 'date':
                  e =
                    '[Date: ' +
                    (isNaN(e.getTime()) ? e.toString() : e.toISOString()) +
                    ']';
                  break;
                case 'buffer':
                  var t = e.toJSON();
                  e =
                    '[Buffer: ' +
                    b((t = t.data && t.type ? t.data : t), 2, n + 1) +
                    ']';
                  break;
                default:
                  e =
                    '[Function]' === e || '[Circular]' === e
                      ? e
                      : JSON.stringify(e);
              }
              return e;
            }
            for (var l in e)
              Object.prototype.hasOwnProperty.call(e, l) &&
                (--s,
                (i +=
                  '\n ' +
                  a(' ', t) +
                  (Array.isArray(e) ? '' : '"' + l + '": ') +
                  u(e[l]) +
                  (s ? ',' : '')));
            return i + (1 !== i.length ? '\n' + a(' ', --t) + o : o);
          }
          (v.stringify = function (e) {
            var t = m(e);
            if (!~['object', 'array', 'function'].indexOf(t)) {
              if ('buffer' === t) {
                var r = i.prototype.toJSON.call(e);
                return b(r.data && r.type ? r.data : r, 2).replace(
                  /,(\n|$)/g,
                  '$1',
                );
              }
              if ('string' !== t || 'object' != typeof e) return b(e);
              (e = e.split('').reduce(function (e, t, r) {
                return (e[r] = t), e;
              }, {})),
                (t = 'object');
            }
            for (var n in e)
              if (Object.prototype.hasOwnProperty.call(e, n))
                return b(v.canonicalize(e, null, t), 2).replace(
                  /,(\n|$)/g,
                  '$1',
                );
            return g(e, t);
          }),
            (v.canonicalize = function (t, r, e) {
              var n, i;
              function o(e, t) {
                r.push(e), t(), r.pop();
              }
              if (((e = e || m(t)), -1 !== (r = r || []).indexOf(t)))
                return '[Circular]';
              switch (e) {
                case 'undefined':
                case 'buffer':
                case 'null':
                  n = t;
                  break;
                case 'array':
                  o(t, function () {
                    n = t.map(function (e) {
                      return v.canonicalize(e, r);
                    });
                  });
                  break;
                case 'function':
                  for (i in t) {
                    n = {};
                    break;
                  }
                  if (!n) {
                    n = g(t, e);
                    break;
                  }
                case 'object':
                  (n = n || {}),
                    o(t, function () {
                      Object.keys(t)
                        .sort()
                        .forEach(function (e) {
                          n[e] = v.canonicalize(t[e], r);
                        });
                    });
                  break;
                case 'date':
                case 'number':
                case 'regexp':
                case 'boolean':
                case 'symbol':
                  n = t;
                  break;
                default:
                  n = t + '';
              }
              return n;
            }),
            (v.lookupFiles = function r(n, i, o) {
              var s = [],
                a = new RegExp('\\.(' + i.join('|') + ')$');
              if (!e(n)) {
                if (!e(n + '.js')) {
                  if (!(s = t.sync(n)).length)
                    throw new Error(
                      "cannot resolve path (or pattern) '" + n + "'",
                    );
                  return s;
                }
                n += '.js';
              }
              try {
                if (f(n).isFile()) return n;
              } catch (e) {
                return;
              }
              return (
                c(n).forEach(function (e) {
                  e = l(n, e);
                  try {
                    var t = f(e);
                    if (t.isDirectory())
                      return void (o && (s = s.concat(r(e, i, o))));
                  } catch (e) {
                    return;
                  }
                  t.isFile() && a.test(e) && '.' !== u(e)[0] && s.push(e);
                }),
                s
              );
            }),
            (v.undefinedError = function () {
              return new Error(
                'Caught undefined error, did you throw without specifying what?',
              );
            }),
            (v.getError = function (e) {
              return e || v.undefinedError();
            }),
            (v.stackTraceFilter = function () {
              var e =
                  'undefined' == typeof document
                    ? { node: !0 }
                    : { browser: !0 },
                t = n.sep;
              return (
                e.node
                  ? r.cwd() + t
                  : (('undefined' == typeof location
                      ? window.location
                      : location
                    ).href.replace(/\/[^/]*$/, '/'),
                    (t = '/')),
                function (e) {
                  return (e = e.split('\n'))[0];
                }
              );
            }),
            (v.isPromise = function (e) {
              return 'object' == typeof e && 'function' == typeof e.then;
            }),
            (v.noop = function () {});
        }.call(this, y('_process'), y('buffer').Buffer));
      },
      {
        _process: 55,
        buffer: 'buffer',
        debug: 42,
        fs: 40,
        glob: 40,
        he: 47,
        path: 40,
        util: 75,
      },
    ],
    37: [
      function (e, t, r) {
        'use strict';
        (r.byteLength = function (e) {
          return (3 * e.length) / 4 - f(e);
        }),
          (r.toByteArray = function (e) {
            var t,
              r,
              n,
              i,
              o,
              s = e.length;
            (i = f(e)), (o = new c((3 * s) / 4 - i)), (r = 0 < i ? s - 4 : s);
            var a = 0;
            for (t = 0; t < r; t += 4)
              (n =
                (l[e.charCodeAt(t)] << 18) |
                (l[e.charCodeAt(t + 1)] << 12) |
                (l[e.charCodeAt(t + 2)] << 6) |
                l[e.charCodeAt(t + 3)]),
                (o[a++] = (n >> 16) & 255),
                (o[a++] = (n >> 8) & 255),
                (o[a++] = 255 & n);
            2 === i
              ? ((n =
                  (l[e.charCodeAt(t)] << 2) | (l[e.charCodeAt(t + 1)] >> 4)),
                (o[a++] = 255 & n))
              : 1 === i &&
                ((n =
                  (l[e.charCodeAt(t)] << 10) |
                  (l[e.charCodeAt(t + 1)] << 4) |
                  (l[e.charCodeAt(t + 2)] >> 2)),
                (o[a++] = (n >> 8) & 255),
                (o[a++] = 255 & n));
            return o;
          }),
          (r.fromByteArray = function (e) {
            for (
              var t, r = e.length, n = r % 3, i = '', o = [], s = 0, a = r - n;
              s < a;
              s += 16383
            )
              o.push(h(e, s, a < s + 16383 ? a : s + 16383));
            1 == n
              ? ((t = e[r - 1]),
                (i += u[t >> 2]),
                (i += u[(t << 4) & 63]),
                (i += '=='))
              : 2 == n &&
                ((t = (e[r - 2] << 8) + e[r - 1]),
                (i += u[t >> 10]),
                (i += u[(t >> 4) & 63]),
                (i += u[(t << 2) & 63]),
                (i += '='));
            return o.push(i), o.join('');
          });
        for (
          var u = [],
            l = [],
            c = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            n =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            i = 0,
            o = n.length;
          i < o;
          ++i
        )
          (u[i] = n[i]), (l[n.charCodeAt(i)] = i);
        function f(e) {
          var t = e.length;
          if (0 < t % 4)
            throw new Error('Invalid string. Length must be a multiple of 4');
          return '=' === e[t - 2] ? 2 : '=' === e[t - 1] ? 1 : 0;
        }
        function h(e, t, r) {
          for (var n, i, o = [], s = t; s < r; s += 3)
            (n = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
              o.push(
                u[((i = n) >> 18) & 63] +
                  u[(i >> 12) & 63] +
                  u[(i >> 6) & 63] +
                  u[63 & i],
              );
          return o.join('');
        }
        (l['-'.charCodeAt(0)] = 62), (l['_'.charCodeAt(0)] = 63);
      },
      {},
    ],
    38: [function (e, t, r) {}, {}],
    39: [
      function (e, n, t) {
        (function (i) {
          var t = e('stream').Writable;
          function r(e) {
            if (!(this instanceof r)) return new r(e);
            (e = e || {}),
              t.call(this, e),
              (this.label = void 0 !== e.label ? e.label : 'stdout');
          }
          (0, e('util').inherits)((n.exports = r), t),
            (r.prototype._write = function (e, t, r) {
              var n = e.toString ? e.toString() : e;
              !1 === this.label
                ? console.log(n)
                : console.log(this.label + ':', n),
                i.nextTick(r);
            });
        }.call(this, e('_process')));
      },
      { _process: 55, stream: 70, util: 75 },
    ],
    40: [
      function (e, t, r) {
        arguments[4][38][0].apply(r, arguments);
      },
      { dup: 38 },
    ],
    41: [
      function (e, t, r) {
        (function (e) {
          function t(e) {
            return Object.prototype.toString.call(e);
          }
          (r.isArray = function (e) {
            return Array.isArray ? Array.isArray(e) : '[object Array]' === t(e);
          }),
            (r.isBoolean = function (e) {
              return 'boolean' == typeof e;
            }),
            (r.isNull = function (e) {
              return null === e;
            }),
            (r.isNullOrUndefined = function (e) {
              return null == e;
            }),
            (r.isNumber = function (e) {
              return 'number' == typeof e;
            }),
            (r.isString = function (e) {
              return 'string' == typeof e;
            }),
            (r.isSymbol = function (e) {
              return 'symbol' == typeof e;
            }),
            (r.isUndefined = function (e) {
              return void 0 === e;
            }),
            (r.isRegExp = function (e) {
              return '[object RegExp]' === t(e);
            }),
            (r.isObject = function (e) {
              return 'object' == typeof e && null !== e;
            }),
            (r.isDate = function (e) {
              return '[object Date]' === t(e);
            }),
            (r.isError = function (e) {
              return '[object Error]' === t(e) || e instanceof Error;
            }),
            (r.isFunction = function (e) {
              return 'function' == typeof e;
            }),
            (r.isPrimitive = function (e) {
              return (
                null === e ||
                'boolean' == typeof e ||
                'number' == typeof e ||
                'string' == typeof e ||
                'symbol' == typeof e ||
                void 0 === e
              );
            }),
            (r.isBuffer = e.isBuffer);
        }.call(this, { isBuffer: e('../../is-buffer/index.js') }));
      },
      { '../../is-buffer/index.js': 50 },
    ],
    42: [
      function (r, n, o) {
        (function (t) {
          function e() {
            var e;
            try {
              e = o.storage.debug;
            } catch (e) {}
            return !e && void 0 !== t && 'env' in t && (e = t.env.DEBUG), e;
          }
          ((o = n.exports = r('./debug')).log = function () {
            return (
              'object' == typeof console &&
              console.log &&
              Function.prototype.apply.call(console.log, console, arguments)
            );
          }),
            (o.formatArgs = function (e) {
              var t = this.useColors;
              if (
                ((e[0] =
                  (t ? '%c' : '') +
                  this.namespace +
                  (t ? ' %c' : ' ') +
                  e[0] +
                  (t ? '%c ' : ' ') +
                  '+' +
                  o.humanize(this.diff)),
                !t)
              )
                return;
              var r = 'color: ' + this.color;
              e.splice(1, 0, r, 'color: inherit');
              var n = 0,
                i = 0;
              e[0].replace(/%[a-zA-Z%]/g, function (e) {
                '%%' !== e && (n++, '%c' === e && (i = n));
              }),
                e.splice(i, 0, r);
            }),
            (o.save = function (e) {
              try {
                null == e
                  ? o.storage.removeItem('debug')
                  : (o.storage.debug = e);
              } catch (e) {}
            }),
            (o.load = e),
            (o.useColors = function () {
              if (
                'undefined' != typeof window &&
                window.process &&
                'renderer' === window.process.type
              )
                return !0;
              if (
                'undefined' != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
              )
                return !1;
              return (
                ('undefined' != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                ('undefined' != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  31 <= parseInt(RegExp.$1, 10)) ||
                ('undefined' != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
              );
            }),
            (o.storage =
              'undefined' != typeof chrome && void 0 !== chrome.storage
                ? chrome.storage.local
                : (function () {
                    try {
                      return window.localStorage;
                    } catch (e) {}
                  })()),
            (o.colors = [
              '#0000CC',
              '#0000FF',
              '#0033CC',
              '#0033FF',
              '#0066CC',
              '#0066FF',
              '#0099CC',
              '#0099FF',
              '#00CC00',
              '#00CC33',
              '#00CC66',
              '#00CC99',
              '#00CCCC',
              '#00CCFF',
              '#3300CC',
              '#3300FF',
              '#3333CC',
              '#3333FF',
              '#3366CC',
              '#3366FF',
              '#3399CC',
              '#3399FF',
              '#33CC00',
              '#33CC33',
              '#33CC66',
              '#33CC99',
              '#33CCCC',
              '#33CCFF',
              '#6600CC',
              '#6600FF',
              '#6633CC',
              '#6633FF',
              '#66CC00',
              '#66CC33',
              '#9900CC',
              '#9900FF',
              '#9933CC',
              '#9933FF',
              '#99CC00',
              '#99CC33',
              '#CC0000',
              '#CC0033',
              '#CC0066',
              '#CC0099',
              '#CC00CC',
              '#CC00FF',
              '#CC3300',
              '#CC3333',
              '#CC3366',
              '#CC3399',
              '#CC33CC',
              '#CC33FF',
              '#CC6600',
              '#CC6633',
              '#CC9900',
              '#CC9933',
              '#CCCC00',
              '#CCCC33',
              '#FF0000',
              '#FF0033',
              '#FF0066',
              '#FF0099',
              '#FF00CC',
              '#FF00FF',
              '#FF3300',
              '#FF3333',
              '#FF3366',
              '#FF3399',
              '#FF33CC',
              '#FF33FF',
              '#FF6600',
              '#FF6633',
              '#FF9900',
              '#FF9933',
              '#FFCC00',
              '#FFCC33',
            ]),
            (o.formatters.j = function (e) {
              try {
                return JSON.stringify(e);
              } catch (e) {
                return '[UnexpectedJSONParseError]: ' + e.message;
              }
            }),
            o.enable(e());
        }.call(this, r('_process')));
      },
      { './debug': 43, _process: 55 },
    ],
    43: [
      function (e, t, u) {
        function r(e) {
          var n;
          function a() {
            if (a.enabled) {
              var i = a,
                e = +new Date(),
                t = e - (n || e);
              (i.diff = t), (i.prev = n), (i.curr = e), (n = e);
              for (
                var o = new Array(arguments.length), r = 0;
                r < o.length;
                r++
              )
                o[r] = arguments[r];
              (o[0] = u.coerce(o[0])),
                'string' != typeof o[0] && o.unshift('%O');
              var s = 0;
              (o[0] = o[0].replace(/%([a-zA-Z%])/g, function (e, t) {
                if ('%%' === e) return e;
                s++;
                var r = u.formatters[t];
                if ('function' == typeof r) {
                  var n = o[s];
                  (e = r.call(i, n)), o.splice(s, 1), s--;
                }
                return e;
              })),
                u.formatArgs.call(i, o),
                (a.log || u.log || console.log.bind(console)).apply(i, o);
            }
          }
          return (
            (a.namespace = e),
            (a.enabled = u.enabled(e)),
            (a.useColors = u.useColors()),
            (a.color = (function (e) {
              var t,
                r = 0;
              for (t in e) (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
              return u.colors[Math.abs(r) % u.colors.length];
            })(e)),
            (a.destroy = i),
            'function' == typeof u.init && u.init(a),
            u.instances.push(a),
            a
          );
        }
        function i() {
          var e = u.instances.indexOf(this);
          return -1 !== e && (u.instances.splice(e, 1), !0);
        }
        ((u = t.exports = r.debug = r.default = r).coerce = function (e) {
          return e instanceof Error ? e.stack || e.message : e;
        }),
          (u.disable = function () {
            u.enable('');
          }),
          (u.enable = function (e) {
            var t;
            u.save(e), (u.names = []), (u.skips = []);
            var r = ('string' == typeof e ? e : '').split(/[\s,]+/),
              n = r.length;
            for (t = 0; t < n; t++)
              r[t] &&
                ('-' === (e = r[t].replace(/\*/g, '.*?'))[0]
                  ? u.skips.push(new RegExp('^' + e.substr(1) + '$'))
                  : u.names.push(new RegExp('^' + e + '$')));
            for (t = 0; t < u.instances.length; t++) {
              var i = u.instances[t];
              i.enabled = u.enabled(i.namespace);
            }
          }),
          (u.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0;
            var t, r;
            for (t = 0, r = u.skips.length; t < r; t++)
              if (u.skips[t].test(e)) return !1;
            for (t = 0, r = u.names.length; t < r; t++)
              if (u.names[t].test(e)) return !0;
            return !1;
          }),
          (u.humanize = e('ms')),
          (u.instances = []),
          (u.names = []),
          (u.skips = []),
          (u.formatters = {});
      },
      { ms: 53 },
    ],
    44: [
      function (e, t, r) {
        var n, i;
        (n = this),
          (i = function () {
            return (
              (i = {}),
              (r.m = n =
                [
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.canonicalize =
                        t.convertChangesToXML =
                        t.convertChangesToDMP =
                        t.merge =
                        t.parsePatch =
                        t.applyPatches =
                        t.applyPatch =
                        t.createPatch =
                        t.createTwoFilesPatch =
                        t.structuredPatch =
                        t.diffArrays =
                        t.diffJson =
                        t.diffCss =
                        t.diffSentences =
                        t.diffTrimmedLines =
                        t.diffLines =
                        t.diffWordsWithSpace =
                        t.diffWords =
                        t.diffChars =
                        t.Diff =
                          void 0);
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n },
                      s = r(2),
                      a = r(3),
                      u = r(5),
                      l = r(6),
                      c = r(7),
                      f = r(8),
                      h = r(9),
                      p = r(10),
                      d = r(11),
                      g = r(13),
                      m = r(14),
                      b = r(16),
                      y = r(17);
                    (t.Diff = o.default),
                      (t.diffChars = s.diffChars),
                      (t.diffWords = a.diffWords),
                      (t.diffWordsWithSpace = a.diffWordsWithSpace),
                      (t.diffLines = u.diffLines),
                      (t.diffTrimmedLines = u.diffTrimmedLines),
                      (t.diffSentences = l.diffSentences),
                      (t.diffCss = c.diffCss),
                      (t.diffJson = f.diffJson),
                      (t.diffArrays = h.diffArrays),
                      (t.structuredPatch = m.structuredPatch),
                      (t.createTwoFilesPatch = m.createTwoFilesPatch),
                      (t.createPatch = m.createPatch),
                      (t.applyPatch = p.applyPatch),
                      (t.applyPatches = p.applyPatches),
                      (t.parsePatch = d.parsePatch),
                      (t.merge = g.merge),
                      (t.convertChangesToDMP = b.convertChangesToDMP),
                      (t.convertChangesToXML = y.convertChangesToXML),
                      (t.canonicalize = f.canonicalize);
                  },
                  function (e, t) {
                    'use strict';
                    function r() {}
                    function m(e, t, r, n, i) {
                      for (var o = 0, s = t.length, a = 0, u = 0; o < s; o++) {
                        var l = t[o];
                        if (l.removed) {
                          if (
                            ((l.value = e.join(n.slice(u, u + l.count))),
                            (u += l.count),
                            o && t[o - 1].added)
                          ) {
                            var c = t[o - 1];
                            (t[o - 1] = t[o]), (t[o] = c);
                          }
                        } else {
                          if (!l.added && i) {
                            var f = r.slice(a, a + l.count);
                            (f = f.map(function (e, t) {
                              var r = n[u + t];
                              return r.length > e.length ? r : e;
                            })),
                              (l.value = e.join(f));
                          } else l.value = e.join(r.slice(a, a + l.count));
                          (a += l.count), l.added || (u += l.count);
                        }
                      }
                      var h = t[s - 1];
                      return (
                        1 < s &&
                          (h.added || h.removed) &&
                          e.equals('', h.value) &&
                          ((t[s - 2].value += h.value), t.pop()),
                        t
                      );
                    }
                    (t.__esModule = !0),
                      ((t.default = r).prototype = {
                        diff: function (u, l, e) {
                          var t = 2 < arguments.length && void 0 !== e ? e : {},
                            r = t.callback;
                          'function' == typeof t && ((r = t), (t = {})),
                            (this.options = t);
                          var c = this;
                          function f(e) {
                            return r
                              ? (setTimeout(function () {
                                  r(void 0, e);
                                }, 0),
                                !0)
                              : e;
                          }
                          (u = this.castInput(u)),
                            (l = this.castInput(l)),
                            (u = this.removeEmpty(this.tokenize(u)));
                          var h = (l = this.removeEmpty(this.tokenize(l)))
                              .length,
                            p = u.length,
                            d = 1,
                            n = h + p,
                            g = [{ newPos: -1, components: [] }],
                            i = this.extractCommon(g[0], l, u, 0);
                          if (g[0].newPos + 1 >= h && p <= i + 1)
                            return f([
                              { value: this.join(l), count: l.length },
                            ]);
                          function o() {
                            for (var e = -1 * d; e <= d; e += 2) {
                              var t = void 0,
                                r = g[e - 1],
                                n = g[e + 1],
                                i = (n ? n.newPos : 0) - e;
                              r && (g[e - 1] = void 0);
                              var o = r && r.newPos + 1 < h,
                                s = n && 0 <= i && i < p;
                              if (o || s) {
                                if (
                                  (!o || (s && r.newPos < n.newPos)
                                    ? ((t = {
                                        newPos: (a = n).newPos,
                                        components: a.components.slice(0),
                                      }),
                                      c.pushComponent(t.components, void 0, !0))
                                    : ((t = r).newPos++,
                                      c.pushComponent(
                                        t.components,
                                        !0,
                                        void 0,
                                      )),
                                  (i = c.extractCommon(t, l, u, e)),
                                  t.newPos + 1 >= h && p <= i + 1)
                                )
                                  return f(
                                    m(c, t.components, l, u, c.useLongestToken),
                                  );
                                g[e] = t;
                              } else g[e] = void 0;
                            }
                            var a;
                            d++;
                          }
                          if (r)
                            !(function e() {
                              setTimeout(function () {
                                if (n < d) return r();
                                o() || e();
                              }, 0);
                            })();
                          else
                            for (; d <= n; ) {
                              var s = o();
                              if (s) return s;
                            }
                        },
                        pushComponent: function (e, t, r) {
                          var n = e[e.length - 1];
                          n && n.added === t && n.removed === r
                            ? (e[e.length - 1] = {
                                count: n.count + 1,
                                added: t,
                                removed: r,
                              })
                            : e.push({ count: 1, added: t, removed: r });
                        },
                        extractCommon: function (e, t, r, n) {
                          for (
                            var i = t.length,
                              o = r.length,
                              s = e.newPos,
                              a = s - n,
                              u = 0;
                            s + 1 < i &&
                            a + 1 < o &&
                            this.equals(t[s + 1], r[a + 1]);

                          )
                            s++, a++, u++;
                          return (
                            u && e.components.push({ count: u }),
                            (e.newPos = s),
                            a
                          );
                        },
                        equals: function (e, t) {
                          return (
                            e === t ||
                            (this.options.ignoreCase &&
                              e.toLowerCase() === t.toLowerCase())
                          );
                        },
                        removeEmpty: function (e) {
                          for (var t = [], r = 0; r < e.length; r++)
                            e[r] && t.push(e[r]);
                          return t;
                        },
                        castInput: function (e) {
                          return e;
                        },
                        tokenize: function (e) {
                          return e.split('');
                        },
                        join: function (e) {
                          return e.join('');
                        },
                      });
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.characterDiff = void 0),
                      (t.diffChars = function (e, t, r) {
                        return s.diff(e, t, r);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n };
                    var s = (t.characterDiff = new o.default());
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.wordDiff = void 0),
                      (t.diffWords = function (e, t, r) {
                        return (
                          (r = (0, s.generateOptions)(r, {
                            ignoreWhitespace: !0,
                          })),
                          l.diff(e, t, r)
                        );
                      }),
                      (t.diffWordsWithSpace = function (e, t, r) {
                        return l.diff(e, t, r);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n },
                      s = r(4);
                    var a =
                        /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
                      u = /\S/,
                      l = (t.wordDiff = new o.default());
                    (l.equals = function (e, t) {
                      return (
                        this.options.ignoreCase &&
                          ((e = e.toLowerCase()), (t = t.toLowerCase())),
                        e === t ||
                          (this.options.ignoreWhitespace &&
                            !u.test(e) &&
                            !u.test(t))
                      );
                    }),
                      (l.tokenize = function (e) {
                        for (
                          var t = e.split(/(\s+|\b)/), r = 0;
                          r < t.length - 1;
                          r++
                        )
                          !t[r + 1] &&
                            t[r + 2] &&
                            a.test(t[r]) &&
                            a.test(t[r + 2]) &&
                            ((t[r] += t[r + 2]), t.splice(r + 1, 2), r--);
                        return t;
                      });
                  },
                  function (e, t) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.generateOptions = function (e, t) {
                        if ('function' == typeof e) t.callback = e;
                        else if (e)
                          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                        return t;
                      });
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.lineDiff = void 0),
                      (t.diffLines = function (e, t, r) {
                        return a.diff(e, t, r);
                      }),
                      (t.diffTrimmedLines = function (e, t, r) {
                        var n = (0, s.generateOptions)(r, {
                          ignoreWhitespace: !0,
                        });
                        return a.diff(e, t, n);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n },
                      s = r(4);
                    var a = (t.lineDiff = new o.default());
                    a.tokenize = function (e) {
                      var t = [],
                        r = e.split(/(\n|\r\n)/);
                      r[r.length - 1] || r.pop();
                      for (var n = 0; n < r.length; n++) {
                        var i = r[n];
                        n % 2 && !this.options.newlineIsToken
                          ? (t[t.length - 1] += i)
                          : (this.options.ignoreWhitespace && (i = i.trim()),
                            t.push(i));
                      }
                      return t;
                    };
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.sentenceDiff = void 0),
                      (t.diffSentences = function (e, t, r) {
                        return s.diff(e, t, r);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n };
                    var s = (t.sentenceDiff = new o.default());
                    s.tokenize = function (e) {
                      return e.split(/(\S.+?[.!?])(?=\s+|$)/);
                    };
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.cssDiff = void 0),
                      (t.diffCss = function (e, t, r) {
                        return s.diff(e, t, r);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n };
                    var s = (t.cssDiff = new o.default());
                    s.tokenize = function (e) {
                      return e.split(/([{}:;,]|\s+)/);
                    };
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0), (t.jsonDiff = void 0);
                    var a =
                      'function' == typeof Symbol &&
                      'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                          };
                    (t.diffJson = function (e, t, r) {
                      return l.diff(e, t, r);
                    }),
                      (t.canonicalize = c);
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n },
                      s = r(5);
                    var u = Object.prototype.toString,
                      l = (t.jsonDiff = new o.default());
                    function c(e, t, r) {
                      (t = t || []), (r = r || []);
                      var n = void 0;
                      for (n = 0; n < t.length; n += 1)
                        if (t[n] === e) return r[n];
                      var i = void 0;
                      if ('[object Array]' === u.call(e)) {
                        for (
                          t.push(e), i = new Array(e.length), r.push(i), n = 0;
                          n < e.length;
                          n += 1
                        )
                          i[n] = c(e[n], t, r);
                        return t.pop(), r.pop(), i;
                      }
                      if (
                        (e && e.toJSON && (e = e.toJSON()),
                        'object' === (void 0 === e ? 'undefined' : a(e)) &&
                          null !== e)
                      ) {
                        t.push(e), (i = {}), r.push(i);
                        var o = [],
                          s = void 0;
                        for (s in e) e.hasOwnProperty(s) && o.push(s);
                        for (o.sort(), n = 0; n < o.length; n += 1)
                          i[(s = o[n])] = c(e[s], t, r);
                        t.pop(), r.pop();
                      } else i = e;
                      return i;
                    }
                    (l.useLongestToken = !0),
                      (l.tokenize = s.lineDiff.tokenize),
                      (l.castInput = function (e) {
                        var r = this.options.undefinedReplacement;
                        return 'string' == typeof e
                          ? e
                          : JSON.stringify(
                              c(e),
                              function (e, t) {
                                return void 0 === t ? r : t;
                              },
                              '  ',
                            );
                      }),
                      (l.equals = function (e, t) {
                        return o.default.prototype.equals.call(
                          l,
                          e.replace(/,([\r\n])/g, '$1'),
                          t.replace(/,([\r\n])/g, '$1'),
                        );
                      });
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.arrayDiff = void 0),
                      (t.diffArrays = function (e, t, r) {
                        return s.diff(e, t, r);
                      });
                    var n,
                      i = r(1),
                      o = (n = i) && n.__esModule ? n : { default: n };
                    var s = (t.arrayDiff = new o.default());
                    s.tokenize = s.join = function (e) {
                      return e.slice();
                    };
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.applyPatch = s),
                      (t.applyPatches = function (e, o) {
                        'string' == typeof e && (e = (0, q.parsePatch)(e));
                        var t = 0;
                        !(function n() {
                          var i = e[t++];
                          if (!i) return o.complete();
                          o.loadFile(i, function (e, t) {
                            if (e) return o.complete(e);
                            var r = s(t, i, o);
                            o.patched(i, r, function (e) {
                              if (e) return o.complete(e);
                              n();
                            });
                          });
                        })();
                      });
                    var n,
                      q = r(11),
                      i = r(12),
                      R = (n = i) && n.__esModule ? n : { default: n };
                    function s(e, t) {
                      var r =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      if (
                        ('string' == typeof t && (t = (0, q.parsePatch)(t)),
                        Array.isArray(t))
                      ) {
                        if (1 < t.length)
                          throw new Error(
                            'applyPatch only works with a single input.',
                          );
                        t = t[0];
                      }
                      var s = e.split(/\r\n|[\n\v\f\r\x85]/),
                        n = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
                        i = t.hunks,
                        a =
                          r.compareLine ||
                          function (e, t, r, n) {
                            return t === n;
                          },
                        u = 0,
                        l = r.fuzzFactor || 0,
                        o = 0,
                        c = 0,
                        f = void 0,
                        h = void 0;
                      function p(e, t) {
                        for (var r = 0; r < e.lines.length; r++) {
                          var n = e.lines[r],
                            i = n[0],
                            o = n.substr(1);
                          if (' ' === i || '-' === i) {
                            if (!a(t + 1, s[t], i, o) && l < ++u) return !1;
                            t++;
                          }
                        }
                        return !0;
                      }
                      for (var d = 0; d < i.length; d++) {
                        for (
                          var g = i[d],
                            m = s.length - g.oldLines,
                            b = 0,
                            y = c + g.oldStart - 1,
                            v = (0, R.default)(y, o, m);
                          void 0 !== b;
                          b = v()
                        )
                          if (p(g, y + b)) {
                            g.offset = c += b;
                            break;
                          }
                        if (void 0 === b) return !1;
                        o = g.offset + g.oldStart + g.oldLines;
                      }
                      for (var w = 0, E = 0; E < i.length; E++) {
                        var _ = i[E],
                          x = _.oldStart + _.offset + w - 1;
                        (w += _.newLines - _.oldLines), x < 0 && (x = 0);
                        for (var S = 0; S < _.lines.length; S++) {
                          var k = _.lines[S],
                            A = k[0],
                            C = k.substr(1),
                            D = _.linedelimiters[S];
                          if (' ' === A) x++;
                          else if ('-' === A) s.splice(x, 1), n.splice(x, 1);
                          else if ('+' === A)
                            s.splice(x, 0, C), n.splice(x, 0, D), x++;
                          else if ('\\' === A) {
                            var T = _.lines[S - 1] ? _.lines[S - 1][0] : null;
                            '+' === T ? (f = !0) : '-' === T && (h = !0);
                          }
                        }
                      }
                      if (f) for (; !s[s.length - 1]; ) s.pop(), n.pop();
                      else h && (s.push(''), n.push('\n'));
                      for (var L = 0; L < s.length - 1; L++) s[L] = s[L] + n[L];
                      return s.join('');
                    }
                  },
                  function (e, t) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.parsePatch = function (e) {
                        var s =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          a = e.split(/\r\n|[\n\v\f\r\x85]/),
                          u = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
                          i = [],
                          l = 0;
                        function t() {
                          var e = {};
                          for (i.push(e); l < a.length; ) {
                            var t = a[l];
                            if (/^(\-\-\-|\+\+\+|@@)\s/.test(t)) break;
                            var r =
                              /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(
                                t,
                              );
                            r && (e.index = r[1]), l++;
                          }
                          for (o(e), o(e), e.hunks = []; l < a.length; ) {
                            var n = a[l];
                            if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(n)) break;
                            if (/^@@/.test(n)) e.hunks.push(c());
                            else {
                              if (n && s.strict)
                                throw new Error(
                                  'Unknown line ' +
                                    (l + 1) +
                                    ' ' +
                                    JSON.stringify(n),
                                );
                              l++;
                            }
                          }
                        }
                        function o(e) {
                          var t =
                            /^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/.exec(
                              a[l],
                            );
                          if (t) {
                            var r = '---' === t[1] ? 'old' : 'new',
                              n = t[2].replace(/\\\\/g, '\\');
                            /^".*"$/.test(n) && (n = n.substr(1, n.length - 2)),
                              (e[r + 'FileName'] = n),
                              (e[r + 'Header'] = t[3]),
                              l++;
                          }
                        }
                        function c() {
                          for (
                            var e = l,
                              t = a[l++].split(
                                /@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/,
                              ),
                              r = {
                                oldStart: +t[1],
                                oldLines: +t[2] || 1,
                                newStart: +t[3],
                                newLines: +t[4] || 1,
                                lines: [],
                                linedelimiters: [],
                              },
                              n = 0,
                              i = 0;
                            l < a.length &&
                            !(
                              0 === a[l].indexOf('--- ') &&
                              l + 2 < a.length &&
                              0 === a[l + 1].indexOf('+++ ') &&
                              0 === a[l + 2].indexOf('@@')
                            );
                            l++
                          ) {
                            var o = a[l][0];
                            if (
                              '+' !== o &&
                              '-' !== o &&
                              ' ' !== o &&
                              '\\' !== o
                            )
                              break;
                            r.lines.push(a[l]),
                              r.linedelimiters.push(u[l] || '\n'),
                              '+' === o
                                ? n++
                                : '-' === o
                                ? i++
                                : ' ' === o && (n++, i++);
                          }
                          if (
                            (n || 1 !== r.newLines || (r.newLines = 0),
                            i || 1 !== r.oldLines || (r.oldLines = 0),
                            s.strict)
                          ) {
                            if (n !== r.newLines)
                              throw new Error(
                                'Added line count did not match for hunk at line ' +
                                  (e + 1),
                              );
                            if (i !== r.oldLines)
                              throw new Error(
                                'Removed line count did not match for hunk at line ' +
                                  (e + 1),
                              );
                          }
                          return r;
                        }
                        for (; l < a.length; ) t();
                        return i;
                      });
                  },
                  function (e, t) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.default = function (t, r, n) {
                        var i = !0,
                          o = !1,
                          s = !1,
                          a = 1;
                        return function e() {
                          if (i && !s) {
                            if ((o ? a++ : (i = !1), t + a <= n)) return a;
                            s = !0;
                          }
                          if (!o)
                            return (
                              s || (i = !0), r <= t - a ? -a++ : ((o = !0), e())
                            );
                        };
                      });
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.calcLineCount = h),
                      (t.merge = function (e, t, r) {
                        (e = p(e, r)), (t = p(t, r));
                        var n = {};
                        (e.index || t.index) && (n.index = e.index || t.index);
                        (e.newFileName || t.newFileName) &&
                          (d(e)
                            ? d(t)
                              ? ((n.oldFileName = g(
                                  n,
                                  e.oldFileName,
                                  t.oldFileName,
                                )),
                                (n.newFileName = g(
                                  n,
                                  e.newFileName,
                                  t.newFileName,
                                )),
                                (n.oldHeader = g(n, e.oldHeader, t.oldHeader)),
                                (n.newHeader = g(n, e.newHeader, t.newHeader)))
                              : ((n.oldFileName = e.oldFileName),
                                (n.newFileName = e.newFileName),
                                (n.oldHeader = e.oldHeader),
                                (n.newHeader = e.newHeader))
                            : ((n.oldFileName = t.oldFileName || e.oldFileName),
                              (n.newFileName = t.newFileName || e.newFileName),
                              (n.oldHeader = t.oldHeader || e.oldHeader),
                              (n.newHeader = t.newHeader || e.newHeader)));
                        n.hunks = [];
                        var i = 0,
                          o = 0,
                          s = 0,
                          a = 0;
                        for (; i < e.hunks.length || o < t.hunks.length; ) {
                          var u = e.hunks[i] || { oldStart: 1 / 0 },
                            l = t.hunks[o] || { oldStart: 1 / 0 };
                          if (m(u, l))
                            n.hunks.push(b(u, s)),
                              i++,
                              (a += u.newLines - u.oldLines);
                          else if (m(l, u))
                            n.hunks.push(b(l, a)),
                              o++,
                              (s += l.newLines - l.oldLines);
                          else {
                            var c = {
                              oldStart: Math.min(u.oldStart, l.oldStart),
                              oldLines: 0,
                              newStart: Math.min(
                                u.newStart + s,
                                l.oldStart + a,
                              ),
                              newLines: 0,
                              lines: [],
                            };
                            y(c, u.oldStart, u.lines, l.oldStart, l.lines),
                              o++,
                              i++,
                              n.hunks.push(c);
                          }
                        }
                        return n;
                      });
                    var n = r(14),
                      i = r(11),
                      u = r(15);
                    function f(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++)
                          r[t] = e[t];
                        return r;
                      }
                      return Array.from(e);
                    }
                    function h(t) {
                      var r = !1;
                      (t.oldLines = 0),
                        (t.newLines = 0),
                        t.lines.forEach(function (e) {
                          'string' == typeof e
                            ? (('+' !== e[0] && ' ' !== e[0]) || t.newLines++,
                              ('-' !== e[0] && ' ' !== e[0]) || t.oldLines++)
                            : (r = !0);
                        }),
                        r && (delete t.oldLines, delete t.newLines);
                    }
                    function p(e, t) {
                      if ('string' != typeof e) return e;
                      if (/^@@/m.test(e) || /^Index:/m.test(e))
                        return (0, i.parsePatch)(e)[0];
                      if (!t)
                        throw new Error(
                          'Must provide a base reference or pass in a patch',
                        );
                      return (0, n.structuredPatch)(void 0, void 0, t, e);
                    }
                    function d(e) {
                      return e.newFileName && e.newFileName !== e.oldFileName;
                    }
                    function g(e, t, r) {
                      return t === r
                        ? t
                        : ((e.conflict = !0), { mine: t, theirs: r });
                    }
                    function m(e, t) {
                      return (
                        e.oldStart < t.oldStart &&
                        e.oldStart + e.oldLines < t.oldStart
                      );
                    }
                    function b(e, t) {
                      return {
                        oldStart: e.oldStart,
                        oldLines: e.oldLines,
                        newStart: e.newStart + t,
                        newLines: e.newLines,
                        lines: e.lines,
                      };
                    }
                    function y(e, t, r, n, i) {
                      var o = { offset: t, lines: r, index: 0 },
                        s = { offset: n, lines: i, index: 0 };
                      for (
                        _(e, o, s), _(e, s, o);
                        o.index < o.lines.length && s.index < s.lines.length;

                      ) {
                        var a = o.lines[o.index],
                          u = s.lines[s.index];
                        if (
                          ('-' !== a[0] && '+' !== a[0]) ||
                          ('-' !== u[0] && '+' !== u[0])
                        )
                          if ('+' === a[0] && ' ' === u[0]) {
                            var l;
                            (l = e.lines).push.apply(l, f(S(o)));
                          } else if ('+' === u[0] && ' ' === a[0]) {
                            var c;
                            (c = e.lines).push.apply(c, f(S(s)));
                          } else
                            '-' === a[0] && ' ' === u[0]
                              ? w(e, o, s)
                              : '-' === u[0] && ' ' === a[0]
                              ? w(e, s, o, !0)
                              : a === u
                              ? (e.lines.push(a), o.index++, s.index++)
                              : E(e, S(o), S(s));
                        else v(e, o, s);
                      }
                      x(e, o), x(e, s), h(e);
                    }
                    function v(e, t, r) {
                      var n = S(t),
                        i = S(r);
                      if (l(n) && l(i)) {
                        var o, s;
                        if (
                          (0, u.arrayStartsWith)(n, i) &&
                          c(r, n, n.length - i.length)
                        )
                          return void (o = e.lines).push.apply(o, f(n));
                        if (
                          (0, u.arrayStartsWith)(i, n) &&
                          c(t, i, i.length - n.length)
                        )
                          return void (s = e.lines).push.apply(s, f(i));
                      } else if ((0, u.arrayEqual)(n, i)) {
                        var a;
                        return void (a = e.lines).push.apply(a, f(n));
                      }
                      E(e, n, i);
                    }
                    function w(e, t, r, n) {
                      var i,
                        o = S(t),
                        s = (function (e, t) {
                          var r = [],
                            n = [],
                            i = 0,
                            o = !1,
                            s = !1;
                          for (; i < t.length && e.index < e.lines.length; ) {
                            var a = e.lines[e.index],
                              u = t[i];
                            if ('+' === u[0]) break;
                            if (
                              ((o = o || ' ' !== a[0]),
                              n.push(u),
                              i++,
                              '+' === a[0])
                            )
                              for (s = !0; '+' === a[0]; )
                                r.push(a), (a = e.lines[++e.index]);
                            u.substr(1) === a.substr(1)
                              ? (r.push(a), e.index++)
                              : (s = !0);
                          }
                          '+' === (t[i] || '')[0] && o && (s = !0);
                          if (s) return r;
                          for (; i < t.length; ) n.push(t[i++]);
                          return { merged: n, changes: r };
                        })(r, o);
                      s.merged
                        ? (i = e.lines).push.apply(i, f(s.merged))
                        : E(e, n ? s : o, n ? o : s);
                    }
                    function E(e, t, r) {
                      (e.conflict = !0),
                        e.lines.push({ conflict: !0, mine: t, theirs: r });
                    }
                    function _(e, t, r) {
                      for (
                        ;
                        t.offset < r.offset && t.index < t.lines.length;

                      ) {
                        var n = t.lines[t.index++];
                        e.lines.push(n), t.offset++;
                      }
                    }
                    function x(e, t) {
                      for (; t.index < t.lines.length; ) {
                        var r = t.lines[t.index++];
                        e.lines.push(r);
                      }
                    }
                    function S(e) {
                      for (
                        var t = [], r = e.lines[e.index][0];
                        e.index < e.lines.length;

                      ) {
                        var n = e.lines[e.index];
                        if (
                          ('-' === r && '+' === n[0] && (r = '+'), r !== n[0])
                        )
                          break;
                        t.push(n), e.index++;
                      }
                      return t;
                    }
                    function l(e) {
                      return e.reduce(function (e, t) {
                        return e && '-' === t[0];
                      }, !0);
                    }
                    function c(e, t, r) {
                      for (var n = 0; n < r; n++) {
                        var i = t[t.length - r + n].substr(1);
                        if (e.lines[e.index + n] !== ' ' + i) return !1;
                      }
                      return (e.index += r), !0;
                    }
                  },
                  function (e, t, r) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.structuredPatch = f),
                      (t.createTwoFilesPatch = a),
                      (t.createPatch = function (e, t, r, n, i, o) {
                        return a(e, e, t, r, n, i, o);
                      });
                    var s = r(5);
                    function _(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++)
                          r[t] = e[t];
                        return r;
                      }
                      return Array.from(e);
                    }
                    function f(e, t, f, h, r, n, p) {
                      void 0 === (p = p || {}).context && (p.context = 4);
                      var d = (0, s.diffLines)(f, h, p);
                      function g(e) {
                        return e.map(function (e) {
                          return ' ' + e;
                        });
                      }
                      d.push({ value: '', lines: [] });
                      for (
                        var m = [],
                          b = 0,
                          y = 0,
                          v = [],
                          w = 1,
                          E = 1,
                          i = function (e) {
                            var t = d[e],
                              r =
                                t.lines ||
                                t.value.replace(/\n$/, '').split('\n');
                            if (((t.lines = r), t.added || t.removed)) {
                              var n;
                              if (!b) {
                                var i = d[e - 1];
                                (b = w),
                                  (y = E),
                                  i &&
                                    ((v =
                                      0 < p.context
                                        ? g(i.lines.slice(-p.context))
                                        : []),
                                    (b -= v.length),
                                    (y -= v.length));
                              }
                              (n = v).push.apply(
                                n,
                                _(
                                  r.map(function (e) {
                                    return (t.added ? '+' : '-') + e;
                                  }),
                                ),
                              ),
                                t.added ? (E += r.length) : (w += r.length);
                            } else {
                              if (b)
                                if (
                                  r.length <= 2 * p.context &&
                                  e < d.length - 2
                                ) {
                                  var o;
                                  (o = v).push.apply(o, _(g(r)));
                                } else {
                                  var s,
                                    a = Math.min(r.length, p.context);
                                  (s = v).push.apply(s, _(g(r.slice(0, a))));
                                  var u = {
                                    oldStart: b,
                                    oldLines: w - b + a,
                                    newStart: y,
                                    newLines: E - y + a,
                                    lines: v,
                                  };
                                  if (
                                    e >= d.length - 2 &&
                                    r.length <= p.context
                                  ) {
                                    var l = /\n$/.test(f),
                                      c = /\n$/.test(h);
                                    0 != r.length || l
                                      ? (l && c) ||
                                        v.push('\\ No newline at end of file')
                                      : v.splice(
                                          u.oldLines,
                                          0,
                                          '\\ No newline at end of file',
                                        );
                                  }
                                  m.push(u), (y = b = 0), (v = []);
                                }
                              (w += r.length), (E += r.length);
                            }
                          },
                          o = 0;
                        o < d.length;
                        o++
                      )
                        i(o);
                      return {
                        oldFileName: e,
                        newFileName: t,
                        oldHeader: r,
                        newHeader: n,
                        hunks: m,
                      };
                    }
                    function a(e, t, r, n, i, o, s) {
                      var a = f(e, t, r, n, i, o, s),
                        u = [];
                      e == t && u.push('Index: ' + e),
                        u.push(
                          '===================================================================',
                        ),
                        u.push(
                          '--- ' +
                            a.oldFileName +
                            (void 0 === a.oldHeader ? '' : '\t' + a.oldHeader),
                        ),
                        u.push(
                          '+++ ' +
                            a.newFileName +
                            (void 0 === a.newHeader ? '' : '\t' + a.newHeader),
                        );
                      for (var l = 0; l < a.hunks.length; l++) {
                        var c = a.hunks[l];
                        u.push(
                          '@@ -' +
                            c.oldStart +
                            ',' +
                            c.oldLines +
                            ' +' +
                            c.newStart +
                            ',' +
                            c.newLines +
                            ' @@',
                        ),
                          u.push.apply(u, c.lines);
                      }
                      return u.join('\n') + '\n';
                    }
                  },
                  function (e, t) {
                    'use strict';
                    function r(e, t) {
                      if (t.length > e.length) return !1;
                      for (var r = 0; r < t.length; r++)
                        if (t[r] !== e[r]) return !1;
                      return !0;
                    }
                    (t.__esModule = !0),
                      (t.arrayEqual = function (e, t) {
                        return e.length === t.length && r(e, t);
                      }),
                      (t.arrayStartsWith = r);
                  },
                  function (e, t) {
                    'use strict';
                    (t.__esModule = !0),
                      (t.convertChangesToDMP = function (e) {
                        for (
                          var t = [], r = void 0, n = void 0, i = 0;
                          i < e.length;
                          i++
                        )
                          (r = e[i]),
                            (n = r.added ? 1 : r.removed ? -1 : 0),
                            t.push([n, r.value]);
                        return t;
                      });
                  },
                  function (e, t) {
                    'use strict';
                    function i(e) {
                      var t = e;
                      return (t = (t = (t = (t = t.replace(
                        /&/g,
                        '&amp;',
                      )).replace(/</g, '&lt;')).replace(/>/g, '&gt;')).replace(
                        /"/g,
                        '&quot;',
                      ));
                    }
                    (t.__esModule = !0),
                      (t.convertChangesToXML = function (e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                          var n = e[r];
                          n.added
                            ? t.push('<ins>')
                            : n.removed && t.push('<del>'),
                            t.push(i(n.value)),
                            n.added
                              ? t.push('</ins>')
                              : n.removed && t.push('</del>');
                        }
                        return t.join('');
                      });
                  },
                ]),
              (r.c = i),
              (r.p = ''),
              r(0)
            );
            function r(e) {
              if (i[e]) return i[e].exports;
              var t = (i[e] = { exports: {}, id: e, loaded: !1 });
              return (
                n[e].call(t.exports, t, t.exports, r),
                (t.loaded = !0),
                t.exports
              );
            }
            var n, i;
          }),
          'object' == typeof r && 'object' == typeof t
            ? (t.exports = i())
            : 'object' == typeof r
            ? (r.JsDiff = i())
            : (n.JsDiff = i());
      },
      {},
    ],
    45: [
      function (e, t, r) {
        'use strict';
        var n = /[|\\{}()[\]^$+*?.]/g;
        t.exports = function (e) {
          if ('string' != typeof e) throw new TypeError('Expected a string');
          return e.replace(n, '\\$&');
        };
      },
      {},
    ],
    46: [
      function (e, t, r) {
        function n() {
          (this._events = this._events || {}),
            (this._maxListeners = this._maxListeners || void 0);
        }
        function u(e) {
          return 'function' == typeof e;
        }
        function l(e) {
          return 'object' == typeof e && null !== e;
        }
        function c(e) {
          return void 0 === e;
        }
        (((t.exports = n).EventEmitter = n).prototype._events = void 0),
          (n.prototype._maxListeners = void 0),
          (n.defaultMaxListeners = 10),
          (n.prototype.setMaxListeners = function (e) {
            if (
              !(function (e) {
                return 'number' == typeof e;
              })(e) ||
              e < 0 ||
              isNaN(e)
            )
              throw TypeError('n must be a positive number');
            return (this._maxListeners = e), this;
          }),
          (n.prototype.emit = function (e) {
            var t, r, n, i, o, s;
            if (
              (this._events || (this._events = {}),
              'error' === e &&
                (!this._events.error ||
                  (l(this._events.error) && !this._events.error.length)))
            ) {
              if ((t = arguments[1]) instanceof Error) throw t;
              var a = new Error(
                'Uncaught, unspecified "error" event. (' + t + ')',
              );
              throw ((a.context = t), a);
            }
            if (c((r = this._events[e]))) return !1;
            if (u(r))
              switch (arguments.length) {
                case 1:
                  r.call(this);
                  break;
                case 2:
                  r.call(this, arguments[1]);
                  break;
                case 3:
                  r.call(this, arguments[1], arguments[2]);
                  break;
                default:
                  (i = Array.prototype.slice.call(arguments, 1)),
                    r.apply(this, i);
              }
            else if (l(r))
              for (
                i = Array.prototype.slice.call(arguments, 1),
                  n = (s = r.slice()).length,
                  o = 0;
                o < n;
                o++
              )
                s[o].apply(this, i);
            return !0;
          }),
          (n.prototype.on = n.prototype.addListener =
            function (e, t) {
              var r;
              if (!u(t)) throw TypeError('listener must be a function');
              return (
                this._events || (this._events = {}),
                this._events.newListener &&
                  this.emit('newListener', e, u(t.listener) ? t.listener : t),
                this._events[e]
                  ? l(this._events[e])
                    ? this._events[e].push(t)
                    : (this._events[e] = [this._events[e], t])
                  : (this._events[e] = t),
                l(this._events[e]) &&
                  !this._events[e].warned &&
                  (r = c(this._maxListeners)
                    ? n.defaultMaxListeners
                    : this._maxListeners) &&
                  0 < r &&
                  this._events[e].length > r &&
                  ((this._events[e].warned = !0),
                  console.error(
                    '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                    this._events[e].length,
                  ),
                  'function' == typeof console.trace && console.trace()),
                this
              );
            }),
          (n.prototype.once = function (e, t) {
            if (!u(t)) throw TypeError('listener must be a function');
            var r = !1;
            function n() {
              this.removeListener(e, n),
                r || ((r = !0), t.apply(this, arguments));
            }
            return (n.listener = t), this.on(e, n), this;
          }),
          (n.prototype.removeListener = function (e, t) {
            var r, n, i, o;
            if (!u(t)) throw TypeError('listener must be a function');
            if (!this._events || !this._events[e]) return this;
            if (
              ((i = (r = this._events[e]).length),
              (n = -1),
              r === t || (u(r.listener) && r.listener === t))
            )
              delete this._events[e],
                this._events.removeListener &&
                  this.emit('removeListener', e, t);
            else if (l(r)) {
              for (o = i; 0 < o--; )
                if (r[o] === t || (r[o].listener && r[o].listener === t)) {
                  n = o;
                  break;
                }
              if (n < 0) return this;
              1 === r.length
                ? ((r.length = 0), delete this._events[e])
                : r.splice(n, 1),
                this._events.removeListener &&
                  this.emit('removeListener', e, t);
            }
            return this;
          }),
          (n.prototype.removeAllListeners = function (e) {
            var t, r;
            if (!this._events) return this;
            if (!this._events.removeListener)
              return (
                0 === arguments.length
                  ? (this._events = {})
                  : this._events[e] && delete this._events[e],
                this
              );
            if (0 === arguments.length) {
              for (t in this._events)
                'removeListener' !== t && this.removeAllListeners(t);
              return (
                this.removeAllListeners('removeListener'),
                (this._events = {}),
                this
              );
            }
            if (u((r = this._events[e]))) this.removeListener(e, r);
            else if (r)
              for (; r.length; ) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this;
          }),
          (n.prototype.listeners = function (e) {
            return this._events && this._events[e]
              ? u(this._events[e])
                ? [this._events[e]]
                : this._events[e].slice()
              : [];
          }),
          (n.prototype.listenerCount = function (e) {
            if (this._events) {
              var t = this._events[e];
              if (u(t)) return 1;
              if (t) return t.length;
            }
            return 0;
          }),
          (n.listenerCount = function (e, t) {
            return e.listenerCount(t);
          });
      },
      {},
    ],
    47: [
      function (e, q, R) {
        (function (L) {
          !(function (e) {
            var t = 'object' == typeof R && R,
              r = 'object' == typeof q && q && q.exports == t && q,
              n = 'object' == typeof L && L;
            (n.global !== n && n.window !== n) || (e = n);
            function m(e, t) {
              return S.call(e, t);
            }
            function a(e, t) {
              if (!e) return t;
              var r,
                n = {};
              for (r in t) n[r] = m(e, r) ? e[r] : t[r];
              return n;
            }
            function b(e, t) {
              var r = '';
              return (55296 <= e && e <= 57343) || 1114111 < e
                ? (t &&
                    k(
                      'character reference outside the permissible Unicode range',
                    ),
                  '�')
                : m(E, e)
                ? (t && k('disallowed character reference'), E[e])
                : (t &&
                    (function (e, t) {
                      for (var r = -1, n = e.length; ++r < n; )
                        if (e[r] == t) return !0;
                      return !1;
                    })(_, e) &&
                    k('disallowed character reference'),
                  65535 < e &&
                    ((r += x((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (r += x(e)));
            }
            function u(e) {
              return '&#x' + e.toString(16).toUpperCase() + ';';
            }
            function l(e) {
              return '&#' + e + ';';
            }
            var c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
              f = /[\x01-\x7F]/g,
              h =
                /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
              p =
                /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
              d = {
                '­': 'shy',
                '‌': 'zwnj',
                '‍': 'zwj',
                '‎': 'lrm',
                '⁣': 'ic',
                '⁢': 'it',
                '⁡': 'af',
                '‏': 'rlm',
                '​': 'ZeroWidthSpace',
                '⁠': 'NoBreak',
                '̑': 'DownBreve',
                '⃛': 'tdot',
                '⃜': 'DotDot',
                '\t': 'Tab',
                '\n': 'NewLine',
                ' ': 'puncsp',
                ' ': 'MediumSpace',
                ' ': 'thinsp',
                ' ': 'hairsp',
                ' ': 'emsp13',
                ' ': 'ensp',
                ' ': 'emsp14',
                ' ': 'emsp',
                ' ': 'numsp',
                ' ': 'nbsp',
                '  ': 'ThickSpace',
                '‾': 'oline',
                _: 'lowbar',
                '‐': 'dash',
                '–': 'ndash',
                '—': 'mdash',
                '―': 'horbar',
                ',': 'comma',
                ';': 'semi',
                '⁏': 'bsemi',
                ':': 'colon',
                '⩴': 'Colone',
                '!': 'excl',
                '¡': 'iexcl',
                '?': 'quest',
                '¿': 'iquest',
                '.': 'period',
                '‥': 'nldr',
                '…': 'mldr',
                '·': 'middot',
                "'": 'apos',
                '‘': 'lsquo',
                '’': 'rsquo',
                '‚': 'sbquo',
                '‹': 'lsaquo',
                '›': 'rsaquo',
                '"': 'quot',
                '“': 'ldquo',
                '”': 'rdquo',
                '„': 'bdquo',
                '«': 'laquo',
                '»': 'raquo',
                '(': 'lpar',
                ')': 'rpar',
                '[': 'lsqb',
                ']': 'rsqb',
                '{': 'lcub',
                '}': 'rcub',
                '⌈': 'lceil',
                '⌉': 'rceil',
                '⌊': 'lfloor',
                '⌋': 'rfloor',
                '⦅': 'lopar',
                '⦆': 'ropar',
                '⦋': 'lbrke',
                '⦌': 'rbrke',
                '⦍': 'lbrkslu',
                '⦎': 'rbrksld',
                '⦏': 'lbrksld',
                '⦐': 'rbrkslu',
                '⦑': 'langd',
                '⦒': 'rangd',
                '⦓': 'lparlt',
                '⦔': 'rpargt',
                '⦕': 'gtlPar',
                '⦖': 'ltrPar',
                '⟦': 'lobrk',
                '⟧': 'robrk',
                '⟨': 'lang',
                '⟩': 'rang',
                '⟪': 'Lang',
                '⟫': 'Rang',
                '⟬': 'loang',
                '⟭': 'roang',
                '❲': 'lbbrk',
                '❳': 'rbbrk',
                '‖': 'Vert',
                '§': 'sect',
                '¶': 'para',
                '@': 'commat',
                '*': 'ast',
                '/': 'sol',
                undefined: null,
                '&': 'amp',
                '#': 'num',
                '%': 'percnt',
                '‰': 'permil',
                '‱': 'pertenk',
                '†': 'dagger',
                '‡': 'Dagger',
                '•': 'bull',
                '⁃': 'hybull',
                '′': 'prime',
                '″': 'Prime',
                '‴': 'tprime',
                '⁗': 'qprime',
                '‵': 'bprime',
                '⁁': 'caret',
                '`': 'grave',
                '´': 'acute',
                '˜': 'tilde',
                '^': 'Hat',
                '¯': 'macr',
                '˘': 'breve',
                '˙': 'dot',
                '¨': 'die',
                '˚': 'ring',
                '˝': 'dblac',
                '¸': 'cedil',
                '˛': 'ogon',
                ˆ: 'circ',
                ˇ: 'caron',
                '°': 'deg',
                '©': 'copy',
                '®': 'reg',
                '℗': 'copysr',
                '℘': 'wp',
                '℞': 'rx',
                '℧': 'mho',
                '℩': 'iiota',
                '←': 'larr',
                '↚': 'nlarr',
                '→': 'rarr',
                '↛': 'nrarr',
                '↑': 'uarr',
                '↓': 'darr',
                '↔': 'harr',
                '↮': 'nharr',
                '↕': 'varr',
                '↖': 'nwarr',
                '↗': 'nearr',
                '↘': 'searr',
                '↙': 'swarr',
                '↝': 'rarrw',
                '↝̸': 'nrarrw',
                '↞': 'Larr',
                '↟': 'Uarr',
                '↠': 'Rarr',
                '↡': 'Darr',
                '↢': 'larrtl',
                '↣': 'rarrtl',
                '↤': 'mapstoleft',
                '↥': 'mapstoup',
                '↦': 'map',
                '↧': 'mapstodown',
                '↩': 'larrhk',
                '↪': 'rarrhk',
                '↫': 'larrlp',
                '↬': 'rarrlp',
                '↭': 'harrw',
                '↰': 'lsh',
                '↱': 'rsh',
                '↲': 'ldsh',
                '↳': 'rdsh',
                '↵': 'crarr',
                '↶': 'cularr',
                '↷': 'curarr',
                '↺': 'olarr',
                '↻': 'orarr',
                '↼': 'lharu',
                '↽': 'lhard',
                '↾': 'uharr',
                '↿': 'uharl',
                '⇀': 'rharu',
                '⇁': 'rhard',
                '⇂': 'dharr',
                '⇃': 'dharl',
                '⇄': 'rlarr',
                '⇅': 'udarr',
                '⇆': 'lrarr',
                '⇇': 'llarr',
                '⇈': 'uuarr',
                '⇉': 'rrarr',
                '⇊': 'ddarr',
                '⇋': 'lrhar',
                '⇌': 'rlhar',
                '⇐': 'lArr',
                '⇍': 'nlArr',
                '⇑': 'uArr',
                '⇒': 'rArr',
                '⇏': 'nrArr',
                '⇓': 'dArr',
                '⇔': 'iff',
                '⇎': 'nhArr',
                '⇕': 'vArr',
                '⇖': 'nwArr',
                '⇗': 'neArr',
                '⇘': 'seArr',
                '⇙': 'swArr',
                '⇚': 'lAarr',
                '⇛': 'rAarr',
                '⇝': 'zigrarr',
                '⇤': 'larrb',
                '⇥': 'rarrb',
                '⇵': 'duarr',
                '⇽': 'loarr',
                '⇾': 'roarr',
                '⇿': 'hoarr',
                '∀': 'forall',
                '∁': 'comp',
                '∂': 'part',
                '∂̸': 'npart',
                '∃': 'exist',
                '∄': 'nexist',
                '∅': 'empty',
                '∇': 'Del',
                '∈': 'in',
                '∉': 'notin',
                '∋': 'ni',
                '∌': 'notni',
                '϶': 'bepsi',
                '∏': 'prod',
                '∐': 'coprod',
                '∑': 'sum',
                '+': 'plus',
                '±': 'pm',
                '÷': 'div',
                '×': 'times',
                '<': 'lt',
                '≮': 'nlt',
                '<⃒': 'nvlt',
                '=': 'equals',
                '≠': 'ne',
                '=⃥': 'bne',
                '⩵': 'Equal',
                '>': 'gt',
                '≯': 'ngt',
                '>⃒': 'nvgt',
                '¬': 'not',
                '|': 'vert',
                '¦': 'brvbar',
                '−': 'minus',
                '∓': 'mp',
                '∔': 'plusdo',
                '⁄': 'frasl',
                '∖': 'setmn',
                '∗': 'lowast',
                '∘': 'compfn',
                '√': 'Sqrt',
                '∝': 'prop',
                '∞': 'infin',
                '∟': 'angrt',
                '∠': 'ang',
                '∠⃒': 'nang',
                '∡': 'angmsd',
                '∢': 'angsph',
                '∣': 'mid',
                '∤': 'nmid',
                '∥': 'par',
                '∦': 'npar',
                '∧': 'and',
                '∨': 'or',
                '∩': 'cap',
                '∩︀': 'caps',
                '∪': 'cup',
                '∪︀': 'cups',
                '∫': 'int',
                '∬': 'Int',
                '∭': 'tint',
                '⨌': 'qint',
                '∮': 'oint',
                '∯': 'Conint',
                '∰': 'Cconint',
                '∱': 'cwint',
                '∲': 'cwconint',
                '∳': 'awconint',
                '∴': 'there4',
                '∵': 'becaus',
                '∶': 'ratio',
                '∷': 'Colon',
                '∸': 'minusd',
                '∺': 'mDDot',
                '∻': 'homtht',
                '∼': 'sim',
                '≁': 'nsim',
                '∼⃒': 'nvsim',
                '∽': 'bsim',
                '∽̱': 'race',
                '∾': 'ac',
                '∾̳': 'acE',
                '∿': 'acd',
                '≀': 'wr',
                '≂': 'esim',
                '≂̸': 'nesim',
                '≃': 'sime',
                '≄': 'nsime',
                '≅': 'cong',
                '≇': 'ncong',
                '≆': 'simne',
                '≈': 'ap',
                '≉': 'nap',
                '≊': 'ape',
                '≋': 'apid',
                '≋̸': 'napid',
                '≌': 'bcong',
                '≍': 'CupCap',
                '≭': 'NotCupCap',
                '≍⃒': 'nvap',
                '≎': 'bump',
                '≎̸': 'nbump',
                '≏': 'bumpe',
                '≏̸': 'nbumpe',
                '≐': 'doteq',
                '≐̸': 'nedot',
                '≑': 'eDot',
                '≒': 'efDot',
                '≓': 'erDot',
                '≔': 'colone',
                '≕': 'ecolon',
                '≖': 'ecir',
                '≗': 'cire',
                '≙': 'wedgeq',
                '≚': 'veeeq',
                '≜': 'trie',
                '≟': 'equest',
                '≡': 'equiv',
                '≢': 'nequiv',
                '≡⃥': 'bnequiv',
                '≤': 'le',
                '≰': 'nle',
                '≤⃒': 'nvle',
                '≥': 'ge',
                '≱': 'nge',
                '≥⃒': 'nvge',
                '≦': 'lE',
                '≦̸': 'nlE',
                '≧': 'gE',
                '≧̸': 'ngE',
                '≨︀': 'lvnE',
                '≨': 'lnE',
                '≩': 'gnE',
                '≩︀': 'gvnE',
                '≪': 'll',
                '≪̸': 'nLtv',
                '≪⃒': 'nLt',
                '≫': 'gg',
                '≫̸': 'nGtv',
                '≫⃒': 'nGt',
                '≬': 'twixt',
                '≲': 'lsim',
                '≴': 'nlsim',
                '≳': 'gsim',
                '≵': 'ngsim',
                '≶': 'lg',
                '≸': 'ntlg',
                '≷': 'gl',
                '≹': 'ntgl',
                '≺': 'pr',
                '⊀': 'npr',
                '≻': 'sc',
                '⊁': 'nsc',
                '≼': 'prcue',
                '⋠': 'nprcue',
                '≽': 'sccue',
                '⋡': 'nsccue',
                '≾': 'prsim',
                '≿': 'scsim',
                '≿̸': 'NotSucceedsTilde',
                '⊂': 'sub',
                '⊄': 'nsub',
                '⊂⃒': 'vnsub',
                '⊃': 'sup',
                '⊅': 'nsup',
                '⊃⃒': 'vnsup',
                '⊆': 'sube',
                '⊈': 'nsube',
                '⊇': 'supe',
                '⊉': 'nsupe',
                '⊊︀': 'vsubne',
                '⊊': 'subne',
                '⊋︀': 'vsupne',
                '⊋': 'supne',
                '⊍': 'cupdot',
                '⊎': 'uplus',
                '⊏': 'sqsub',
                '⊏̸': 'NotSquareSubset',
                '⊐': 'sqsup',
                '⊐̸': 'NotSquareSuperset',
                '⊑': 'sqsube',
                '⋢': 'nsqsube',
                '⊒': 'sqsupe',
                '⋣': 'nsqsupe',
                '⊓': 'sqcap',
                '⊓︀': 'sqcaps',
                '⊔': 'sqcup',
                '⊔︀': 'sqcups',
                '⊕': 'oplus',
                '⊖': 'ominus',
                '⊗': 'otimes',
                '⊘': 'osol',
                '⊙': 'odot',
                '⊚': 'ocir',
                '⊛': 'oast',
                '⊝': 'odash',
                '⊞': 'plusb',
                '⊟': 'minusb',
                '⊠': 'timesb',
                '⊡': 'sdotb',
                '⊢': 'vdash',
                '⊬': 'nvdash',
                '⊣': 'dashv',
                '⊤': 'top',
                '⊥': 'bot',
                '⊧': 'models',
                '⊨': 'vDash',
                '⊭': 'nvDash',
                '⊩': 'Vdash',
                '⊮': 'nVdash',
                '⊪': 'Vvdash',
                '⊫': 'VDash',
                '⊯': 'nVDash',
                '⊰': 'prurel',
                '⊲': 'vltri',
                '⋪': 'nltri',
                '⊳': 'vrtri',
                '⋫': 'nrtri',
                '⊴': 'ltrie',
                '⋬': 'nltrie',
                '⊴⃒': 'nvltrie',
                '⊵': 'rtrie',
                '⋭': 'nrtrie',
                '⊵⃒': 'nvrtrie',
                '⊶': 'origof',
                '⊷': 'imof',
                '⊸': 'mumap',
                '⊹': 'hercon',
                '⊺': 'intcal',
                '⊻': 'veebar',
                '⊽': 'barvee',
                '⊾': 'angrtvb',
                '⊿': 'lrtri',
                '⋀': 'Wedge',
                '⋁': 'Vee',
                '⋂': 'xcap',
                '⋃': 'xcup',
                '⋄': 'diam',
                '⋅': 'sdot',
                '⋆': 'Star',
                '⋇': 'divonx',
                '⋈': 'bowtie',
                '⋉': 'ltimes',
                '⋊': 'rtimes',
                '⋋': 'lthree',
                '⋌': 'rthree',
                '⋍': 'bsime',
                '⋎': 'cuvee',
                '⋏': 'cuwed',
                '⋐': 'Sub',
                '⋑': 'Sup',
                '⋒': 'Cap',
                '⋓': 'Cup',
                '⋔': 'fork',
                '⋕': 'epar',
                '⋖': 'ltdot',
                '⋗': 'gtdot',
                '⋘': 'Ll',
                '⋘̸': 'nLl',
                '⋙': 'Gg',
                '⋙̸': 'nGg',
                '⋚︀': 'lesg',
                '⋚': 'leg',
                '⋛': 'gel',
                '⋛︀': 'gesl',
                '⋞': 'cuepr',
                '⋟': 'cuesc',
                '⋦': 'lnsim',
                '⋧': 'gnsim',
                '⋨': 'prnsim',
                '⋩': 'scnsim',
                '⋮': 'vellip',
                '⋯': 'ctdot',
                '⋰': 'utdot',
                '⋱': 'dtdot',
                '⋲': 'disin',
                '⋳': 'isinsv',
                '⋴': 'isins',
                '⋵': 'isindot',
                '⋵̸': 'notindot',
                '⋶': 'notinvc',
                '⋷': 'notinvb',
                '⋹': 'isinE',
                '⋹̸': 'notinE',
                '⋺': 'nisd',
                '⋻': 'xnis',
                '⋼': 'nis',
                '⋽': 'notnivc',
                '⋾': 'notnivb',
                '⌅': 'barwed',
                '⌆': 'Barwed',
                '⌌': 'drcrop',
                '⌍': 'dlcrop',
                '⌎': 'urcrop',
                '⌏': 'ulcrop',
                '⌐': 'bnot',
                '⌒': 'profline',
                '⌓': 'profsurf',
                '⌕': 'telrec',
                '⌖': 'target',
                '⌜': 'ulcorn',
                '⌝': 'urcorn',
                '⌞': 'dlcorn',
                '⌟': 'drcorn',
                '⌢': 'frown',
                '⌣': 'smile',
                '⌭': 'cylcty',
                '⌮': 'profalar',
                '⌶': 'topbot',
                '⌽': 'ovbar',
                '⌿': 'solbar',
                '⍼': 'angzarr',
                '⎰': 'lmoust',
                '⎱': 'rmoust',
                '⎴': 'tbrk',
                '⎵': 'bbrk',
                '⎶': 'bbrktbrk',
                '⏜': 'OverParenthesis',
                '⏝': 'UnderParenthesis',
                '⏞': 'OverBrace',
                '⏟': 'UnderBrace',
                '⏢': 'trpezium',
                '⏧': 'elinters',
                '␣': 'blank',
                '─': 'boxh',
                '│': 'boxv',
                '┌': 'boxdr',
                '┐': 'boxdl',
                '└': 'boxur',
                '┘': 'boxul',
                '├': 'boxvr',
                '┤': 'boxvl',
                '┬': 'boxhd',
                '┴': 'boxhu',
                '┼': 'boxvh',
                '═': 'boxH',
                '║': 'boxV',
                '╒': 'boxdR',
                '╓': 'boxDr',
                '╔': 'boxDR',
                '╕': 'boxdL',
                '╖': 'boxDl',
                '╗': 'boxDL',
                '╘': 'boxuR',
                '╙': 'boxUr',
                '╚': 'boxUR',
                '╛': 'boxuL',
                '╜': 'boxUl',
                '╝': 'boxUL',
                '╞': 'boxvR',
                '╟': 'boxVr',
                '╠': 'boxVR',
                '╡': 'boxvL',
                '╢': 'boxVl',
                '╣': 'boxVL',
                '╤': 'boxHd',
                '╥': 'boxhD',
                '╦': 'boxHD',
                '╧': 'boxHu',
                '╨': 'boxhU',
                '╩': 'boxHU',
                '╪': 'boxvH',
                '╫': 'boxVh',
                '╬': 'boxVH',
                '▀': 'uhblk',
                '▄': 'lhblk',
                '█': 'block',
                '░': 'blk14',
                '▒': 'blk12',
                '▓': 'blk34',
                '□': 'squ',
                '▪': 'squf',
                '▫': 'EmptyVerySmallSquare',
                '▭': 'rect',
                '▮': 'marker',
                '▱': 'fltns',
                '△': 'xutri',
                '▴': 'utrif',
                '▵': 'utri',
                '▸': 'rtrif',
                '▹': 'rtri',
                '▽': 'xdtri',
                '▾': 'dtrif',
                '▿': 'dtri',
                '◂': 'ltrif',
                '◃': 'ltri',
                '◊': 'loz',
                '○': 'cir',
                '◬': 'tridot',
                '◯': 'xcirc',
                '◸': 'ultri',
                '◹': 'urtri',
                '◺': 'lltri',
                '◻': 'EmptySmallSquare',
                '◼': 'FilledSmallSquare',
                '★': 'starf',
                '☆': 'star',
                '☎': 'phone',
                '♀': 'female',
                '♂': 'male',
                '♠': 'spades',
                '♣': 'clubs',
                '♥': 'hearts',
                '♦': 'diams',
                '♪': 'sung',
                '✓': 'check',
                '✗': 'cross',
                '✠': 'malt',
                '✶': 'sext',
                '❘': 'VerticalSeparator',
                '⟈': 'bsolhsub',
                '⟉': 'suphsol',
                '⟵': 'xlarr',
                '⟶': 'xrarr',
                '⟷': 'xharr',
                '⟸': 'xlArr',
                '⟹': 'xrArr',
                '⟺': 'xhArr',
                '⟼': 'xmap',
                '⟿': 'dzigrarr',
                '⤂': 'nvlArr',
                '⤃': 'nvrArr',
                '⤄': 'nvHarr',
                '⤅': 'Map',
                '⤌': 'lbarr',
                '⤍': 'rbarr',
                '⤎': 'lBarr',
                '⤏': 'rBarr',
                '⤐': 'RBarr',
                '⤑': 'DDotrahd',
                '⤒': 'UpArrowBar',
                '⤓': 'DownArrowBar',
                '⤖': 'Rarrtl',
                '⤙': 'latail',
                '⤚': 'ratail',
                '⤛': 'lAtail',
                '⤜': 'rAtail',
                '⤝': 'larrfs',
                '⤞': 'rarrfs',
                '⤟': 'larrbfs',
                '⤠': 'rarrbfs',
                '⤣': 'nwarhk',
                '⤤': 'nearhk',
                '⤥': 'searhk',
                '⤦': 'swarhk',
                '⤧': 'nwnear',
                '⤨': 'toea',
                '⤩': 'tosa',
                '⤪': 'swnwar',
                '⤳': 'rarrc',
                '⤳̸': 'nrarrc',
                '⤵': 'cudarrr',
                '⤶': 'ldca',
                '⤷': 'rdca',
                '⤸': 'cudarrl',
                '⤹': 'larrpl',
                '⤼': 'curarrm',
                '⤽': 'cularrp',
                '⥅': 'rarrpl',
                '⥈': 'harrcir',
                '⥉': 'Uarrocir',
                '⥊': 'lurdshar',
                '⥋': 'ldrushar',
                '⥎': 'LeftRightVector',
                '⥏': 'RightUpDownVector',
                '⥐': 'DownLeftRightVector',
                '⥑': 'LeftUpDownVector',
                '⥒': 'LeftVectorBar',
                '⥓': 'RightVectorBar',
                '⥔': 'RightUpVectorBar',
                '⥕': 'RightDownVectorBar',
                '⥖': 'DownLeftVectorBar',
                '⥗': 'DownRightVectorBar',
                '⥘': 'LeftUpVectorBar',
                '⥙': 'LeftDownVectorBar',
                '⥚': 'LeftTeeVector',
                '⥛': 'RightTeeVector',
                '⥜': 'RightUpTeeVector',
                '⥝': 'RightDownTeeVector',
                '⥞': 'DownLeftTeeVector',
                '⥟': 'DownRightTeeVector',
                '⥠': 'LeftUpTeeVector',
                '⥡': 'LeftDownTeeVector',
                '⥢': 'lHar',
                '⥣': 'uHar',
                '⥤': 'rHar',
                '⥥': 'dHar',
                '⥦': 'luruhar',
                '⥧': 'ldrdhar',
                '⥨': 'ruluhar',
                '⥩': 'rdldhar',
                '⥪': 'lharul',
                '⥫': 'llhard',
                '⥬': 'rharul',
                '⥭': 'lrhard',
                '⥮': 'udhar',
                '⥯': 'duhar',
                '⥰': 'RoundImplies',
                '⥱': 'erarr',
                '⥲': 'simrarr',
                '⥳': 'larrsim',
                '⥴': 'rarrsim',
                '⥵': 'rarrap',
                '⥶': 'ltlarr',
                '⥸': 'gtrarr',
                '⥹': 'subrarr',
                '⥻': 'suplarr',
                '⥼': 'lfisht',
                '⥽': 'rfisht',
                '⥾': 'ufisht',
                '⥿': 'dfisht',
                '⦚': 'vzigzag',
                '⦜': 'vangrt',
                '⦝': 'angrtvbd',
                '⦤': 'ange',
                '⦥': 'range',
                '⦦': 'dwangle',
                '⦧': 'uwangle',
                '⦨': 'angmsdaa',
                '⦩': 'angmsdab',
                '⦪': 'angmsdac',
                '⦫': 'angmsdad',
                '⦬': 'angmsdae',
                '⦭': 'angmsdaf',
                '⦮': 'angmsdag',
                '⦯': 'angmsdah',
                '⦰': 'bemptyv',
                '⦱': 'demptyv',
                '⦲': 'cemptyv',
                '⦳': 'raemptyv',
                '⦴': 'laemptyv',
                '⦵': 'ohbar',
                '⦶': 'omid',
                '⦷': 'opar',
                '⦹': 'operp',
                '⦻': 'olcross',
                '⦼': 'odsold',
                '⦾': 'olcir',
                '⦿': 'ofcir',
                '⧀': 'olt',
                '⧁': 'ogt',
                '⧂': 'cirscir',
                '⧃': 'cirE',
                '⧄': 'solb',
                '⧅': 'bsolb',
                '⧉': 'boxbox',
                '⧍': 'trisb',
                '⧎': 'rtriltri',
                '⧏': 'LeftTriangleBar',
                '⧏̸': 'NotLeftTriangleBar',
                '⧐': 'RightTriangleBar',
                '⧐̸': 'NotRightTriangleBar',
                '⧜': 'iinfin',
                '⧝': 'infintie',
                '⧞': 'nvinfin',
                '⧣': 'eparsl',
                '⧤': 'smeparsl',
                '⧥': 'eqvparsl',
                '⧫': 'lozf',
                '⧴': 'RuleDelayed',
                '⧶': 'dsol',
                '⨀': 'xodot',
                '⨁': 'xoplus',
                '⨂': 'xotime',
                '⨄': 'xuplus',
                '⨆': 'xsqcup',
                '⨍': 'fpartint',
                '⨐': 'cirfnint',
                '⨑': 'awint',
                '⨒': 'rppolint',
                '⨓': 'scpolint',
                '⨔': 'npolint',
                '⨕': 'pointint',
                '⨖': 'quatint',
                '⨗': 'intlarhk',
                '⨢': 'pluscir',
                '⨣': 'plusacir',
                '⨤': 'simplus',
                '⨥': 'plusdu',
                '⨦': 'plussim',
                '⨧': 'plustwo',
                '⨩': 'mcomma',
                '⨪': 'minusdu',
                '⨭': 'loplus',
                '⨮': 'roplus',
                '⨯': 'Cross',
                '⨰': 'timesd',
                '⨱': 'timesbar',
                '⨳': 'smashp',
                '⨴': 'lotimes',
                '⨵': 'rotimes',
                '⨶': 'otimesas',
                '⨷': 'Otimes',
                '⨸': 'odiv',
                '⨹': 'triplus',
                '⨺': 'triminus',
                '⨻': 'tritime',
                '⨼': 'iprod',
                '⨿': 'amalg',
                '⩀': 'capdot',
                '⩂': 'ncup',
                '⩃': 'ncap',
                '⩄': 'capand',
                '⩅': 'cupor',
                '⩆': 'cupcap',
                '⩇': 'capcup',
                '⩈': 'cupbrcap',
                '⩉': 'capbrcup',
                '⩊': 'cupcup',
                '⩋': 'capcap',
                '⩌': 'ccups',
                '⩍': 'ccaps',
                '⩐': 'ccupssm',
                '⩓': 'And',
                '⩔': 'Or',
                '⩕': 'andand',
                '⩖': 'oror',
                '⩗': 'orslope',
                '⩘': 'andslope',
                '⩚': 'andv',
                '⩛': 'orv',
                '⩜': 'andd',
                '⩝': 'ord',
                '⩟': 'wedbar',
                '⩦': 'sdote',
                '⩪': 'simdot',
                '⩭': 'congdot',
                '⩭̸': 'ncongdot',
                '⩮': 'easter',
                '⩯': 'apacir',
                '⩰': 'apE',
                '⩰̸': 'napE',
                '⩱': 'eplus',
                '⩲': 'pluse',
                '⩳': 'Esim',
                '⩷': 'eDDot',
                '⩸': 'equivDD',
                '⩹': 'ltcir',
                '⩺': 'gtcir',
                '⩻': 'ltquest',
                '⩼': 'gtquest',
                '⩽': 'les',
                '⩽̸': 'nles',
                '⩾': 'ges',
                '⩾̸': 'nges',
                '⩿': 'lesdot',
                '⪀': 'gesdot',
                '⪁': 'lesdoto',
                '⪂': 'gesdoto',
                '⪃': 'lesdotor',
                '⪄': 'gesdotol',
                '⪅': 'lap',
                '⪆': 'gap',
                '⪇': 'lne',
                '⪈': 'gne',
                '⪉': 'lnap',
                '⪊': 'gnap',
                '⪋': 'lEg',
                '⪌': 'gEl',
                '⪍': 'lsime',
                '⪎': 'gsime',
                '⪏': 'lsimg',
                '⪐': 'gsiml',
                '⪑': 'lgE',
                '⪒': 'glE',
                '⪓': 'lesges',
                '⪔': 'gesles',
                '⪕': 'els',
                '⪖': 'egs',
                '⪗': 'elsdot',
                '⪘': 'egsdot',
                '⪙': 'el',
                '⪚': 'eg',
                '⪝': 'siml',
                '⪞': 'simg',
                '⪟': 'simlE',
                '⪠': 'simgE',
                '⪡': 'LessLess',
                '⪡̸': 'NotNestedLessLess',
                '⪢': 'GreaterGreater',
                '⪢̸': 'NotNestedGreaterGreater',
                '⪤': 'glj',
                '⪥': 'gla',
                '⪦': 'ltcc',
                '⪧': 'gtcc',
                '⪨': 'lescc',
                '⪩': 'gescc',
                '⪪': 'smt',
                '⪫': 'lat',
                '⪬': 'smte',
                '⪬︀': 'smtes',
                '⪭': 'late',
                '⪭︀': 'lates',
                '⪮': 'bumpE',
                '⪯': 'pre',
                '⪯̸': 'npre',
                '⪰': 'sce',
                '⪰̸': 'nsce',
                '⪳': 'prE',
                '⪴': 'scE',
                '⪵': 'prnE',
                '⪶': 'scnE',
                '⪷': 'prap',
                '⪸': 'scap',
                '⪹': 'prnap',
                '⪺': 'scnap',
                '⪻': 'Pr',
                '⪼': 'Sc',
                '⪽': 'subdot',
                '⪾': 'supdot',
                '⪿': 'subplus',
                '⫀': 'supplus',
                '⫁': 'submult',
                '⫂': 'supmult',
                '⫃': 'subedot',
                '⫄': 'supedot',
                '⫅': 'subE',
                '⫅̸': 'nsubE',
                '⫆': 'supE',
                '⫆̸': 'nsupE',
                '⫇': 'subsim',
                '⫈': 'supsim',
                '⫋︀': 'vsubnE',
                '⫋': 'subnE',
                '⫌︀': 'vsupnE',
                '⫌': 'supnE',
                '⫏': 'csub',
                '⫐': 'csup',
                '⫑': 'csube',
                '⫒': 'csupe',
                '⫓': 'subsup',
                '⫔': 'supsub',
                '⫕': 'subsub',
                '⫖': 'supsup',
                '⫗': 'suphsub',
                '⫘': 'supdsub',
                '⫙': 'forkv',
                '⫚': 'topfork',
                '⫛': 'mlcp',
                '⫤': 'Dashv',
                '⫦': 'Vdashl',
                '⫧': 'Barv',
                '⫨': 'vBar',
                '⫩': 'vBarv',
                '⫫': 'Vbar',
                '⫬': 'Not',
                '⫭': 'bNot',
                '⫮': 'rnmid',
                '⫯': 'cirmid',
                '⫰': 'midcir',
                '⫱': 'topcir',
                '⫲': 'nhpar',
                '⫳': 'parsim',
                '⫽': 'parsl',
                '⫽⃥': 'nparsl',
                '♭': 'flat',
                '♮': 'natur',
                '♯': 'sharp',
                '¤': 'curren',
                '¢': 'cent',
                $: 'dollar',
                '£': 'pound',
                '¥': 'yen',
                '€': 'euro',
                '¹': 'sup1',
                '½': 'half',
                '⅓': 'frac13',
                '¼': 'frac14',
                '⅕': 'frac15',
                '⅙': 'frac16',
                '⅛': 'frac18',
                '²': 'sup2',
                '⅔': 'frac23',
                '⅖': 'frac25',
                '³': 'sup3',
                '¾': 'frac34',
                '⅗': 'frac35',
                '⅜': 'frac38',
                '⅘': 'frac45',
                '⅚': 'frac56',
                '⅝': 'frac58',
                '⅞': 'frac78',
                '𝒶': 'ascr',
                '𝕒': 'aopf',
                '𝔞': 'afr',
                '𝔸': 'Aopf',
                '𝔄': 'Afr',
                '𝒜': 'Ascr',
                ª: 'ordf',
                á: 'aacute',
                Á: 'Aacute',
                à: 'agrave',
                À: 'Agrave',
                ă: 'abreve',
                Ă: 'Abreve',
                â: 'acirc',
                Â: 'Acirc',
                å: 'aring',
                Å: 'angst',
                ä: 'auml',
                Ä: 'Auml',
                ã: 'atilde',
                Ã: 'Atilde',
                ą: 'aogon',
                Ą: 'Aogon',
                ā: 'amacr',
                Ā: 'Amacr',
                æ: 'aelig',
                Æ: 'AElig',
                '𝒷': 'bscr',
                '𝕓': 'bopf',
                '𝔟': 'bfr',
                '𝔹': 'Bopf',
                ℬ: 'Bscr',
                '𝔅': 'Bfr',
                '𝔠': 'cfr',
                '𝒸': 'cscr',
                '𝕔': 'copf',
                ℭ: 'Cfr',
                '𝒞': 'Cscr',
                ℂ: 'Copf',
                ć: 'cacute',
                Ć: 'Cacute',
                ĉ: 'ccirc',
                Ĉ: 'Ccirc',
                č: 'ccaron',
                Č: 'Ccaron',
                ċ: 'cdot',
                Ċ: 'Cdot',
                ç: 'ccedil',
                Ç: 'Ccedil',
                '℅': 'incare',
                '𝔡': 'dfr',
                ⅆ: 'dd',
                '𝕕': 'dopf',
                '𝒹': 'dscr',
                '𝒟': 'Dscr',
                '𝔇': 'Dfr',
                ⅅ: 'DD',
                '𝔻': 'Dopf',
                ď: 'dcaron',
                Ď: 'Dcaron',
                đ: 'dstrok',
                Đ: 'Dstrok',
                ð: 'eth',
                Ð: 'ETH',
                ⅇ: 'ee',
                ℯ: 'escr',
                '𝔢': 'efr',
                '𝕖': 'eopf',
                ℰ: 'Escr',
                '𝔈': 'Efr',
                '𝔼': 'Eopf',
                é: 'eacute',
                É: 'Eacute',
                è: 'egrave',
                È: 'Egrave',
                ê: 'ecirc',
                Ê: 'Ecirc',
                ě: 'ecaron',
                Ě: 'Ecaron',
                ë: 'euml',
                Ë: 'Euml',
                ė: 'edot',
                Ė: 'Edot',
                ę: 'eogon',
                Ę: 'Eogon',
                ē: 'emacr',
                Ē: 'Emacr',
                '𝔣': 'ffr',
                '𝕗': 'fopf',
                '𝒻': 'fscr',
                '𝔉': 'Ffr',
                '𝔽': 'Fopf',
                ℱ: 'Fscr',
                ﬀ: 'fflig',
                ﬃ: 'ffilig',
                ﬄ: 'ffllig',
                ﬁ: 'filig',
                fj: 'fjlig',
                ﬂ: 'fllig',
                ƒ: 'fnof',
                ℊ: 'gscr',
                '𝕘': 'gopf',
                '𝔤': 'gfr',
                '𝒢': 'Gscr',
                '𝔾': 'Gopf',
                '𝔊': 'Gfr',
                ǵ: 'gacute',
                ğ: 'gbreve',
                Ğ: 'Gbreve',
                ĝ: 'gcirc',
                Ĝ: 'Gcirc',
                ġ: 'gdot',
                Ġ: 'Gdot',
                Ģ: 'Gcedil',
                '𝔥': 'hfr',
                ℎ: 'planckh',
                '𝒽': 'hscr',
                '𝕙': 'hopf',
                ℋ: 'Hscr',
                ℌ: 'Hfr',
                ℍ: 'Hopf',
                ĥ: 'hcirc',
                Ĥ: 'Hcirc',
                ℏ: 'hbar',
                ħ: 'hstrok',
                Ħ: 'Hstrok',
                '𝕚': 'iopf',
                '𝔦': 'ifr',
                '𝒾': 'iscr',
                ⅈ: 'ii',
                '𝕀': 'Iopf',
                ℐ: 'Iscr',
                ℑ: 'Im',
                í: 'iacute',
                Í: 'Iacute',
                ì: 'igrave',
                Ì: 'Igrave',
                î: 'icirc',
                Î: 'Icirc',
                ï: 'iuml',
                Ï: 'Iuml',
                ĩ: 'itilde',
                Ĩ: 'Itilde',
                İ: 'Idot',
                į: 'iogon',
                Į: 'Iogon',
                ī: 'imacr',
                Ī: 'Imacr',
                ĳ: 'ijlig',
                Ĳ: 'IJlig',
                ı: 'imath',
                '𝒿': 'jscr',
                '𝕛': 'jopf',
                '𝔧': 'jfr',
                '𝒥': 'Jscr',
                '𝔍': 'Jfr',
                '𝕁': 'Jopf',
                ĵ: 'jcirc',
                Ĵ: 'Jcirc',
                ȷ: 'jmath',
                '𝕜': 'kopf',
                '𝓀': 'kscr',
                '𝔨': 'kfr',
                '𝒦': 'Kscr',
                '𝕂': 'Kopf',
                '𝔎': 'Kfr',
                ķ: 'kcedil',
                Ķ: 'Kcedil',
                '𝔩': 'lfr',
                '𝓁': 'lscr',
                ℓ: 'ell',
                '𝕝': 'lopf',
                ℒ: 'Lscr',
                '𝔏': 'Lfr',
                '𝕃': 'Lopf',
                ĺ: 'lacute',
                Ĺ: 'Lacute',
                ľ: 'lcaron',
                Ľ: 'Lcaron',
                ļ: 'lcedil',
                Ļ: 'Lcedil',
                ł: 'lstrok',
                Ł: 'Lstrok',
                ŀ: 'lmidot',
                Ŀ: 'Lmidot',
                '𝔪': 'mfr',
                '𝕞': 'mopf',
                '𝓂': 'mscr',
                '𝔐': 'Mfr',
                '𝕄': 'Mopf',
                ℳ: 'Mscr',
                '𝔫': 'nfr',
                '𝕟': 'nopf',
                '𝓃': 'nscr',
                ℕ: 'Nopf',
                '𝒩': 'Nscr',
                '𝔑': 'Nfr',
                ń: 'nacute',
                Ń: 'Nacute',
                ň: 'ncaron',
                Ň: 'Ncaron',
                ñ: 'ntilde',
                Ñ: 'Ntilde',
                ņ: 'ncedil',
                Ņ: 'Ncedil',
                '№': 'numero',
                ŋ: 'eng',
                Ŋ: 'ENG',
                '𝕠': 'oopf',
                '𝔬': 'ofr',
                ℴ: 'oscr',
                '𝒪': 'Oscr',
                '𝔒': 'Ofr',
                '𝕆': 'Oopf',
                º: 'ordm',
                ó: 'oacute',
                Ó: 'Oacute',
                ò: 'ograve',
                Ò: 'Ograve',
                ô: 'ocirc',
                Ô: 'Ocirc',
                ö: 'ouml',
                Ö: 'Ouml',
                ő: 'odblac',
                Ő: 'Odblac',
                õ: 'otilde',
                Õ: 'Otilde',
                ø: 'oslash',
                Ø: 'Oslash',
                ō: 'omacr',
                Ō: 'Omacr',
                œ: 'oelig',
                Œ: 'OElig',
                '𝔭': 'pfr',
                '𝓅': 'pscr',
                '𝕡': 'popf',
                ℙ: 'Popf',
                '𝔓': 'Pfr',
                '𝒫': 'Pscr',
                '𝕢': 'qopf',
                '𝔮': 'qfr',
                '𝓆': 'qscr',
                '𝒬': 'Qscr',
                '𝔔': 'Qfr',
                ℚ: 'Qopf',
                ĸ: 'kgreen',
                '𝔯': 'rfr',
                '𝕣': 'ropf',
                '𝓇': 'rscr',
                ℛ: 'Rscr',
                ℜ: 'Re',
                ℝ: 'Ropf',
                ŕ: 'racute',
                Ŕ: 'Racute',
                ř: 'rcaron',
                Ř: 'Rcaron',
                ŗ: 'rcedil',
                Ŗ: 'Rcedil',
                '𝕤': 'sopf',
                '𝓈': 'sscr',
                '𝔰': 'sfr',
                '𝕊': 'Sopf',
                '𝔖': 'Sfr',
                '𝒮': 'Sscr',
                'Ⓢ': 'oS',
                ś: 'sacute',
                Ś: 'Sacute',
                ŝ: 'scirc',
                Ŝ: 'Scirc',
                š: 'scaron',
                Š: 'Scaron',
                ş: 'scedil',
                Ş: 'Scedil',
                ß: 'szlig',
                '𝔱': 'tfr',
                '𝓉': 'tscr',
                '𝕥': 'topf',
                '𝒯': 'Tscr',
                '𝔗': 'Tfr',
                '𝕋': 'Topf',
                ť: 'tcaron',
                Ť: 'Tcaron',
                ţ: 'tcedil',
                Ţ: 'Tcedil',
                '™': 'trade',
                ŧ: 'tstrok',
                Ŧ: 'Tstrok',
                '𝓊': 'uscr',
                '𝕦': 'uopf',
                '𝔲': 'ufr',
                '𝕌': 'Uopf',
                '𝔘': 'Ufr',
                '𝒰': 'Uscr',
                ú: 'uacute',
                Ú: 'Uacute',
                ù: 'ugrave',
                Ù: 'Ugrave',
                ŭ: 'ubreve',
                Ŭ: 'Ubreve',
                û: 'ucirc',
                Û: 'Ucirc',
                ů: 'uring',
                Ů: 'Uring',
                ü: 'uuml',
                Ü: 'Uuml',
                ű: 'udblac',
                Ű: 'Udblac',
                ũ: 'utilde',
                Ũ: 'Utilde',
                ų: 'uogon',
                Ų: 'Uogon',
                ū: 'umacr',
                Ū: 'Umacr',
                '𝔳': 'vfr',
                '𝕧': 'vopf',
                '𝓋': 'vscr',
                '𝔙': 'Vfr',
                '𝕍': 'Vopf',
                '𝒱': 'Vscr',
                '𝕨': 'wopf',
                '𝓌': 'wscr',
                '𝔴': 'wfr',
                '𝒲': 'Wscr',
                '𝕎': 'Wopf',
                '𝔚': 'Wfr',
                ŵ: 'wcirc',
                Ŵ: 'Wcirc',
                '𝔵': 'xfr',
                '𝓍': 'xscr',
                '𝕩': 'xopf',
                '𝕏': 'Xopf',
                '𝔛': 'Xfr',
                '𝒳': 'Xscr',
                '𝔶': 'yfr',
                '𝓎': 'yscr',
                '𝕪': 'yopf',
                '𝒴': 'Yscr',
                '𝔜': 'Yfr',
                '𝕐': 'Yopf',
                ý: 'yacute',
                Ý: 'Yacute',
                ŷ: 'ycirc',
                Ŷ: 'Ycirc',
                ÿ: 'yuml',
                Ÿ: 'Yuml',
                '𝓏': 'zscr',
                '𝔷': 'zfr',
                '𝕫': 'zopf',
                ℨ: 'Zfr',
                ℤ: 'Zopf',
                '𝒵': 'Zscr',
                ź: 'zacute',
                Ź: 'Zacute',
                ž: 'zcaron',
                Ž: 'Zcaron',
                ż: 'zdot',
                Ż: 'Zdot',
                Ƶ: 'imped',
                þ: 'thorn',
                Þ: 'THORN',
                ŉ: 'napos',
                α: 'alpha',
                Α: 'Alpha',
                β: 'beta',
                Β: 'Beta',
                γ: 'gamma',
                Γ: 'Gamma',
                δ: 'delta',
                Δ: 'Delta',
                ε: 'epsi',
                ϵ: 'epsiv',
                Ε: 'Epsilon',
                ϝ: 'gammad',
                Ϝ: 'Gammad',
                ζ: 'zeta',
                Ζ: 'Zeta',
                η: 'eta',
                Η: 'Eta',
                θ: 'theta',
                ϑ: 'thetav',
                Θ: 'Theta',
                ι: 'iota',
                Ι: 'Iota',
                κ: 'kappa',
                ϰ: 'kappav',
                Κ: 'Kappa',
                λ: 'lambda',
                Λ: 'Lambda',
                μ: 'mu',
                µ: 'micro',
                Μ: 'Mu',
                ν: 'nu',
                Ν: 'Nu',
                ξ: 'xi',
                Ξ: 'Xi',
                ο: 'omicron',
                Ο: 'Omicron',
                π: 'pi',
                ϖ: 'piv',
                Π: 'Pi',
                ρ: 'rho',
                ϱ: 'rhov',
                Ρ: 'Rho',
                σ: 'sigma',
                Σ: 'Sigma',
                ς: 'sigmaf',
                τ: 'tau',
                Τ: 'Tau',
                υ: 'upsi',
                Υ: 'Upsilon',
                ϒ: 'Upsi',
                φ: 'phi',
                ϕ: 'phiv',
                Φ: 'Phi',
                χ: 'chi',
                Χ: 'Chi',
                ψ: 'psi',
                Ψ: 'Psi',
                ω: 'omega',
                Ω: 'ohm',
                а: 'acy',
                А: 'Acy',
                б: 'bcy',
                Б: 'Bcy',
                в: 'vcy',
                В: 'Vcy',
                г: 'gcy',
                Г: 'Gcy',
                ѓ: 'gjcy',
                Ѓ: 'GJcy',
                д: 'dcy',
                Д: 'Dcy',
                ђ: 'djcy',
                Ђ: 'DJcy',
                е: 'iecy',
                Е: 'IEcy',
                ё: 'iocy',
                Ё: 'IOcy',
                є: 'jukcy',
                Є: 'Jukcy',
                ж: 'zhcy',
                Ж: 'ZHcy',
                з: 'zcy',
                З: 'Zcy',
                ѕ: 'dscy',
                Ѕ: 'DScy',
                и: 'icy',
                И: 'Icy',
                і: 'iukcy',
                І: 'Iukcy',
                ї: 'yicy',
                Ї: 'YIcy',
                й: 'jcy',
                Й: 'Jcy',
                ј: 'jsercy',
                Ј: 'Jsercy',
                к: 'kcy',
                К: 'Kcy',
                ќ: 'kjcy',
                Ќ: 'KJcy',
                л: 'lcy',
                Л: 'Lcy',
                љ: 'ljcy',
                Љ: 'LJcy',
                м: 'mcy',
                М: 'Mcy',
                н: 'ncy',
                Н: 'Ncy',
                њ: 'njcy',
                Њ: 'NJcy',
                о: 'ocy',
                О: 'Ocy',
                п: 'pcy',
                П: 'Pcy',
                р: 'rcy',
                Р: 'Rcy',
                с: 'scy',
                С: 'Scy',
                т: 'tcy',
                Т: 'Tcy',
                ћ: 'tshcy',
                Ћ: 'TSHcy',
                у: 'ucy',
                У: 'Ucy',
                ў: 'ubrcy',
                Ў: 'Ubrcy',
                ф: 'fcy',
                Ф: 'Fcy',
                х: 'khcy',
                Х: 'KHcy',
                ц: 'tscy',
                Ц: 'TScy',
                ч: 'chcy',
                Ч: 'CHcy',
                џ: 'dzcy',
                Џ: 'DZcy',
                ш: 'shcy',
                Ш: 'SHcy',
                щ: 'shchcy',
                Щ: 'SHCHcy',
                ъ: 'hardcy',
                Ъ: 'HARDcy',
                ы: 'ycy',
                Ы: 'Ycy',
                ь: 'softcy',
                Ь: 'SOFTcy',
                э: 'ecy',
                Э: 'Ecy',
                ю: 'yucy',
                Ю: 'YUcy',
                я: 'yacy',
                Я: 'YAcy',
                ℵ: 'aleph',
                ℶ: 'beth',
                ℷ: 'gimel',
                ℸ: 'daleth',
              },
              g = /["&'<>`]/g,
              i = {
                '"': '&quot;',
                '&': '&amp;',
                "'": '&#x27;',
                '<': '&lt;',
                '>': '&gt;',
                '`': '&#x60;',
              },
              o = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
              y =
                /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
              s =
                /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g,
              v = {
                aacute: 'á',
                Aacute: 'Á',
                abreve: 'ă',
                Abreve: 'Ă',
                ac: '∾',
                acd: '∿',
                acE: '∾̳',
                acirc: 'â',
                Acirc: 'Â',
                acute: '´',
                acy: 'а',
                Acy: 'А',
                aelig: 'æ',
                AElig: 'Æ',
                af: '⁡',
                afr: '𝔞',
                Afr: '𝔄',
                agrave: 'à',
                Agrave: 'À',
                alefsym: 'ℵ',
                aleph: 'ℵ',
                alpha: 'α',
                Alpha: 'Α',
                amacr: 'ā',
                Amacr: 'Ā',
                amalg: '⨿',
                amp: '&',
                AMP: '&',
                and: '∧',
                And: '⩓',
                andand: '⩕',
                andd: '⩜',
                andslope: '⩘',
                andv: '⩚',
                ang: '∠',
                ange: '⦤',
                angle: '∠',
                angmsd: '∡',
                angmsdaa: '⦨',
                angmsdab: '⦩',
                angmsdac: '⦪',
                angmsdad: '⦫',
                angmsdae: '⦬',
                angmsdaf: '⦭',
                angmsdag: '⦮',
                angmsdah: '⦯',
                angrt: '∟',
                angrtvb: '⊾',
                angrtvbd: '⦝',
                angsph: '∢',
                angst: 'Å',
                angzarr: '⍼',
                aogon: 'ą',
                Aogon: 'Ą',
                aopf: '𝕒',
                Aopf: '𝔸',
                ap: '≈',
                apacir: '⩯',
                ape: '≊',
                apE: '⩰',
                apid: '≋',
                apos: "'",
                ApplyFunction: '⁡',
                approx: '≈',
                approxeq: '≊',
                aring: 'å',
                Aring: 'Å',
                ascr: '𝒶',
                Ascr: '𝒜',
                Assign: '≔',
                ast: '*',
                asymp: '≈',
                asympeq: '≍',
                atilde: 'ã',
                Atilde: 'Ã',
                auml: 'ä',
                Auml: 'Ä',
                awconint: '∳',
                awint: '⨑',
                backcong: '≌',
                backepsilon: '϶',
                backprime: '‵',
                backsim: '∽',
                backsimeq: '⋍',
                Backslash: '∖',
                Barv: '⫧',
                barvee: '⊽',
                barwed: '⌅',
                Barwed: '⌆',
                barwedge: '⌅',
                bbrk: '⎵',
                bbrktbrk: '⎶',
                bcong: '≌',
                bcy: 'б',
                Bcy: 'Б',
                bdquo: '„',
                becaus: '∵',
                because: '∵',
                Because: '∵',
                bemptyv: '⦰',
                bepsi: '϶',
                bernou: 'ℬ',
                Bernoullis: 'ℬ',
                beta: 'β',
                Beta: 'Β',
                beth: 'ℶ',
                between: '≬',
                bfr: '𝔟',
                Bfr: '𝔅',
                bigcap: '⋂',
                bigcirc: '◯',
                bigcup: '⋃',
                bigodot: '⨀',
                bigoplus: '⨁',
                bigotimes: '⨂',
                bigsqcup: '⨆',
                bigstar: '★',
                bigtriangledown: '▽',
                bigtriangleup: '△',
                biguplus: '⨄',
                bigvee: '⋁',
                bigwedge: '⋀',
                bkarow: '⤍',
                blacklozenge: '⧫',
                blacksquare: '▪',
                blacktriangle: '▴',
                blacktriangledown: '▾',
                blacktriangleleft: '◂',
                blacktriangleright: '▸',
                blank: '␣',
                blk12: '▒',
                blk14: '░',
                blk34: '▓',
                block: '█',
                bne: '=⃥',
                bnequiv: '≡⃥',
                bnot: '⌐',
                bNot: '⫭',
                bopf: '𝕓',
                Bopf: '𝔹',
                bot: '⊥',
                bottom: '⊥',
                bowtie: '⋈',
                boxbox: '⧉',
                boxdl: '┐',
                boxdL: '╕',
                boxDl: '╖',
                boxDL: '╗',
                boxdr: '┌',
                boxdR: '╒',
                boxDr: '╓',
                boxDR: '╔',
                boxh: '─',
                boxH: '═',
                boxhd: '┬',
                boxhD: '╥',
                boxHd: '╤',
                boxHD: '╦',
                boxhu: '┴',
                boxhU: '╨',
                boxHu: '╧',
                boxHU: '╩',
                boxminus: '⊟',
                boxplus: '⊞',
                boxtimes: '⊠',
                boxul: '┘',
                boxuL: '╛',
                boxUl: '╜',
                boxUL: '╝',
                boxur: '└',
                boxuR: '╘',
                boxUr: '╙',
                boxUR: '╚',
                boxv: '│',
                boxV: '║',
                boxvh: '┼',
                boxvH: '╪',
                boxVh: '╫',
                boxVH: '╬',
                boxvl: '┤',
                boxvL: '╡',
                boxVl: '╢',
                boxVL: '╣',
                boxvr: '├',
                boxvR: '╞',
                boxVr: '╟',
                boxVR: '╠',
                bprime: '‵',
                breve: '˘',
                Breve: '˘',
                brvbar: '¦',
                bscr: '𝒷',
                Bscr: 'ℬ',
                bsemi: '⁏',
                bsim: '∽',
                bsime: '⋍',
                bsol: '\\',
                bsolb: '⧅',
                bsolhsub: '⟈',
                bull: '•',
                bullet: '•',
                bump: '≎',
                bumpe: '≏',
                bumpE: '⪮',
                bumpeq: '≏',
                Bumpeq: '≎',
                cacute: 'ć',
                Cacute: 'Ć',
                cap: '∩',
                Cap: '⋒',
                capand: '⩄',
                capbrcup: '⩉',
                capcap: '⩋',
                capcup: '⩇',
                capdot: '⩀',
                CapitalDifferentialD: 'ⅅ',
                caps: '∩︀',
                caret: '⁁',
                caron: 'ˇ',
                Cayleys: 'ℭ',
                ccaps: '⩍',
                ccaron: 'č',
                Ccaron: 'Č',
                ccedil: 'ç',
                Ccedil: 'Ç',
                ccirc: 'ĉ',
                Ccirc: 'Ĉ',
                Cconint: '∰',
                ccups: '⩌',
                ccupssm: '⩐',
                cdot: 'ċ',
                Cdot: 'Ċ',
                cedil: '¸',
                Cedilla: '¸',
                cemptyv: '⦲',
                cent: '¢',
                centerdot: '·',
                CenterDot: '·',
                cfr: '𝔠',
                Cfr: 'ℭ',
                chcy: 'ч',
                CHcy: 'Ч',
                check: '✓',
                checkmark: '✓',
                chi: 'χ',
                Chi: 'Χ',
                cir: '○',
                circ: 'ˆ',
                circeq: '≗',
                circlearrowleft: '↺',
                circlearrowright: '↻',
                circledast: '⊛',
                circledcirc: '⊚',
                circleddash: '⊝',
                CircleDot: '⊙',
                circledR: '®',
                circledS: 'Ⓢ',
                CircleMinus: '⊖',
                CirclePlus: '⊕',
                CircleTimes: '⊗',
                cire: '≗',
                cirE: '⧃',
                cirfnint: '⨐',
                cirmid: '⫯',
                cirscir: '⧂',
                ClockwiseContourIntegral: '∲',
                CloseCurlyDoubleQuote: '”',
                CloseCurlyQuote: '’',
                clubs: '♣',
                clubsuit: '♣',
                colon: ':',
                Colon: '∷',
                colone: '≔',
                Colone: '⩴',
                coloneq: '≔',
                comma: ',',
                commat: '@',
                comp: '∁',
                compfn: '∘',
                complement: '∁',
                complexes: 'ℂ',
                cong: '≅',
                congdot: '⩭',
                Congruent: '≡',
                conint: '∮',
                Conint: '∯',
                ContourIntegral: '∮',
                copf: '𝕔',
                Copf: 'ℂ',
                coprod: '∐',
                Coproduct: '∐',
                copy: '©',
                COPY: '©',
                copysr: '℗',
                CounterClockwiseContourIntegral: '∳',
                crarr: '↵',
                cross: '✗',
                Cross: '⨯',
                cscr: '𝒸',
                Cscr: '𝒞',
                csub: '⫏',
                csube: '⫑',
                csup: '⫐',
                csupe: '⫒',
                ctdot: '⋯',
                cudarrl: '⤸',
                cudarrr: '⤵',
                cuepr: '⋞',
                cuesc: '⋟',
                cularr: '↶',
                cularrp: '⤽',
                cup: '∪',
                Cup: '⋓',
                cupbrcap: '⩈',
                cupcap: '⩆',
                CupCap: '≍',
                cupcup: '⩊',
                cupdot: '⊍',
                cupor: '⩅',
                cups: '∪︀',
                curarr: '↷',
                curarrm: '⤼',
                curlyeqprec: '⋞',
                curlyeqsucc: '⋟',
                curlyvee: '⋎',
                curlywedge: '⋏',
                curren: '¤',
                curvearrowleft: '↶',
                curvearrowright: '↷',
                cuvee: '⋎',
                cuwed: '⋏',
                cwconint: '∲',
                cwint: '∱',
                cylcty: '⌭',
                dagger: '†',
                Dagger: '‡',
                daleth: 'ℸ',
                darr: '↓',
                dArr: '⇓',
                Darr: '↡',
                dash: '‐',
                dashv: '⊣',
                Dashv: '⫤',
                dbkarow: '⤏',
                dblac: '˝',
                dcaron: 'ď',
                Dcaron: 'Ď',
                dcy: 'д',
                Dcy: 'Д',
                dd: 'ⅆ',
                DD: 'ⅅ',
                ddagger: '‡',
                ddarr: '⇊',
                DDotrahd: '⤑',
                ddotseq: '⩷',
                deg: '°',
                Del: '∇',
                delta: 'δ',
                Delta: 'Δ',
                demptyv: '⦱',
                dfisht: '⥿',
                dfr: '𝔡',
                Dfr: '𝔇',
                dHar: '⥥',
                dharl: '⇃',
                dharr: '⇂',
                DiacriticalAcute: '´',
                DiacriticalDot: '˙',
                DiacriticalDoubleAcute: '˝',
                DiacriticalGrave: '`',
                DiacriticalTilde: '˜',
                diam: '⋄',
                diamond: '⋄',
                Diamond: '⋄',
                diamondsuit: '♦',
                diams: '♦',
                die: '¨',
                DifferentialD: 'ⅆ',
                digamma: 'ϝ',
                disin: '⋲',
                div: '÷',
                divide: '÷',
                divideontimes: '⋇',
                divonx: '⋇',
                djcy: 'ђ',
                DJcy: 'Ђ',
                dlcorn: '⌞',
                dlcrop: '⌍',
                dollar: '$',
                dopf: '𝕕',
                Dopf: '𝔻',
                dot: '˙',
                Dot: '¨',
                DotDot: '⃜',
                doteq: '≐',
                doteqdot: '≑',
                DotEqual: '≐',
                dotminus: '∸',
                dotplus: '∔',
                dotsquare: '⊡',
                doublebarwedge: '⌆',
                DoubleContourIntegral: '∯',
                DoubleDot: '¨',
                DoubleDownArrow: '⇓',
                DoubleLeftArrow: '⇐',
                DoubleLeftRightArrow: '⇔',
                DoubleLeftTee: '⫤',
                DoubleLongLeftArrow: '⟸',
                DoubleLongLeftRightArrow: '⟺',
                DoubleLongRightArrow: '⟹',
                DoubleRightArrow: '⇒',
                DoubleRightTee: '⊨',
                DoubleUpArrow: '⇑',
                DoubleUpDownArrow: '⇕',
                DoubleVerticalBar: '∥',
                downarrow: '↓',
                Downarrow: '⇓',
                DownArrow: '↓',
                DownArrowBar: '⤓',
                DownArrowUpArrow: '⇵',
                DownBreve: '̑',
                downdownarrows: '⇊',
                downharpoonleft: '⇃',
                downharpoonright: '⇂',
                DownLeftRightVector: '⥐',
                DownLeftTeeVector: '⥞',
                DownLeftVector: '↽',
                DownLeftVectorBar: '⥖',
                DownRightTeeVector: '⥟',
                DownRightVector: '⇁',
                DownRightVectorBar: '⥗',
                DownTee: '⊤',
                DownTeeArrow: '↧',
                drbkarow: '⤐',
                drcorn: '⌟',
                drcrop: '⌌',
                dscr: '𝒹',
                Dscr: '𝒟',
                dscy: 'ѕ',
                DScy: 'Ѕ',
                dsol: '⧶',
                dstrok: 'đ',
                Dstrok: 'Đ',
                dtdot: '⋱',
                dtri: '▿',
                dtrif: '▾',
                duarr: '⇵',
                duhar: '⥯',
                dwangle: '⦦',
                dzcy: 'џ',
                DZcy: 'Џ',
                dzigrarr: '⟿',
                eacute: 'é',
                Eacute: 'É',
                easter: '⩮',
                ecaron: 'ě',
                Ecaron: 'Ě',
                ecir: '≖',
                ecirc: 'ê',
                Ecirc: 'Ê',
                ecolon: '≕',
                ecy: 'э',
                Ecy: 'Э',
                eDDot: '⩷',
                edot: 'ė',
                eDot: '≑',
                Edot: 'Ė',
                ee: 'ⅇ',
                efDot: '≒',
                efr: '𝔢',
                Efr: '𝔈',
                eg: '⪚',
                egrave: 'è',
                Egrave: 'È',
                egs: '⪖',
                egsdot: '⪘',
                el: '⪙',
                Element: '∈',
                elinters: '⏧',
                ell: 'ℓ',
                els: '⪕',
                elsdot: '⪗',
                emacr: 'ē',
                Emacr: 'Ē',
                empty: '∅',
                emptyset: '∅',
                EmptySmallSquare: '◻',
                emptyv: '∅',
                EmptyVerySmallSquare: '▫',
                emsp: ' ',
                emsp13: ' ',
                emsp14: ' ',
                eng: 'ŋ',
                ENG: 'Ŋ',
                ensp: ' ',
                eogon: 'ę',
                Eogon: 'Ę',
                eopf: '𝕖',
                Eopf: '𝔼',
                epar: '⋕',
                eparsl: '⧣',
                eplus: '⩱',
                epsi: 'ε',
                epsilon: 'ε',
                Epsilon: 'Ε',
                epsiv: 'ϵ',
                eqcirc: '≖',
                eqcolon: '≕',
                eqsim: '≂',
                eqslantgtr: '⪖',
                eqslantless: '⪕',
                Equal: '⩵',
                equals: '=',
                EqualTilde: '≂',
                equest: '≟',
                Equilibrium: '⇌',
                equiv: '≡',
                equivDD: '⩸',
                eqvparsl: '⧥',
                erarr: '⥱',
                erDot: '≓',
                escr: 'ℯ',
                Escr: 'ℰ',
                esdot: '≐',
                esim: '≂',
                Esim: '⩳',
                eta: 'η',
                Eta: 'Η',
                eth: 'ð',
                ETH: 'Ð',
                euml: 'ë',
                Euml: 'Ë',
                euro: '€',
                excl: '!',
                exist: '∃',
                Exists: '∃',
                expectation: 'ℰ',
                exponentiale: 'ⅇ',
                ExponentialE: 'ⅇ',
                fallingdotseq: '≒',
                fcy: 'ф',
                Fcy: 'Ф',
                female: '♀',
                ffilig: 'ﬃ',
                fflig: 'ﬀ',
                ffllig: 'ﬄ',
                ffr: '𝔣',
                Ffr: '𝔉',
                filig: 'ﬁ',
                FilledSmallSquare: '◼',
                FilledVerySmallSquare: '▪',
                fjlig: 'fj',
                flat: '♭',
                fllig: 'ﬂ',
                fltns: '▱',
                fnof: 'ƒ',
                fopf: '𝕗',
                Fopf: '𝔽',
                forall: '∀',
                ForAll: '∀',
                fork: '⋔',
                forkv: '⫙',
                Fouriertrf: 'ℱ',
                fpartint: '⨍',
                frac12: '½',
                frac13: '⅓',
                frac14: '¼',
                frac15: '⅕',
                frac16: '⅙',
                frac18: '⅛',
                frac23: '⅔',
                frac25: '⅖',
                frac34: '¾',
                frac35: '⅗',
                frac38: '⅜',
                frac45: '⅘',
                frac56: '⅚',
                frac58: '⅝',
                frac78: '⅞',
                frasl: '⁄',
                frown: '⌢',
                fscr: '𝒻',
                Fscr: 'ℱ',
                gacute: 'ǵ',
                gamma: 'γ',
                Gamma: 'Γ',
                gammad: 'ϝ',
                Gammad: 'Ϝ',
                gap: '⪆',
                gbreve: 'ğ',
                Gbreve: 'Ğ',
                Gcedil: 'Ģ',
                gcirc: 'ĝ',
                Gcirc: 'Ĝ',
                gcy: 'г',
                Gcy: 'Г',
                gdot: 'ġ',
                Gdot: 'Ġ',
                ge: '≥',
                gE: '≧',
                gel: '⋛',
                gEl: '⪌',
                geq: '≥',
                geqq: '≧',
                geqslant: '⩾',
                ges: '⩾',
                gescc: '⪩',
                gesdot: '⪀',
                gesdoto: '⪂',
                gesdotol: '⪄',
                gesl: '⋛︀',
                gesles: '⪔',
                gfr: '𝔤',
                Gfr: '𝔊',
                gg: '≫',
                Gg: '⋙',
                ggg: '⋙',
                gimel: 'ℷ',
                gjcy: 'ѓ',
                GJcy: 'Ѓ',
                gl: '≷',
                gla: '⪥',
                glE: '⪒',
                glj: '⪤',
                gnap: '⪊',
                gnapprox: '⪊',
                gne: '⪈',
                gnE: '≩',
                gneq: '⪈',
                gneqq: '≩',
                gnsim: '⋧',
                gopf: '𝕘',
                Gopf: '𝔾',
                grave: '`',
                GreaterEqual: '≥',
                GreaterEqualLess: '⋛',
                GreaterFullEqual: '≧',
                GreaterGreater: '⪢',
                GreaterLess: '≷',
                GreaterSlantEqual: '⩾',
                GreaterTilde: '≳',
                gscr: 'ℊ',
                Gscr: '𝒢',
                gsim: '≳',
                gsime: '⪎',
                gsiml: '⪐',
                gt: '>',
                Gt: '≫',
                GT: '>',
                gtcc: '⪧',
                gtcir: '⩺',
                gtdot: '⋗',
                gtlPar: '⦕',
                gtquest: '⩼',
                gtrapprox: '⪆',
                gtrarr: '⥸',
                gtrdot: '⋗',
                gtreqless: '⋛',
                gtreqqless: '⪌',
                gtrless: '≷',
                gtrsim: '≳',
                gvertneqq: '≩︀',
                gvnE: '≩︀',
                Hacek: 'ˇ',
                hairsp: ' ',
                half: '½',
                hamilt: 'ℋ',
                hardcy: 'ъ',
                HARDcy: 'Ъ',
                harr: '↔',
                hArr: '⇔',
                harrcir: '⥈',
                harrw: '↭',
                Hat: '^',
                hbar: 'ℏ',
                hcirc: 'ĥ',
                Hcirc: 'Ĥ',
                hearts: '♥',
                heartsuit: '♥',
                hellip: '…',
                hercon: '⊹',
                hfr: '𝔥',
                Hfr: 'ℌ',
                HilbertSpace: 'ℋ',
                hksearow: '⤥',
                hkswarow: '⤦',
                hoarr: '⇿',
                homtht: '∻',
                hookleftarrow: '↩',
                hookrightarrow: '↪',
                hopf: '𝕙',
                Hopf: 'ℍ',
                horbar: '―',
                HorizontalLine: '─',
                hscr: '𝒽',
                Hscr: 'ℋ',
                hslash: 'ℏ',
                hstrok: 'ħ',
                Hstrok: 'Ħ',
                HumpDownHump: '≎',
                HumpEqual: '≏',
                hybull: '⁃',
                hyphen: '‐',
                iacute: 'í',
                Iacute: 'Í',
                ic: '⁣',
                icirc: 'î',
                Icirc: 'Î',
                icy: 'и',
                Icy: 'И',
                Idot: 'İ',
                iecy: 'е',
                IEcy: 'Е',
                iexcl: '¡',
                iff: '⇔',
                ifr: '𝔦',
                Ifr: 'ℑ',
                igrave: 'ì',
                Igrave: 'Ì',
                ii: 'ⅈ',
                iiiint: '⨌',
                iiint: '∭',
                iinfin: '⧜',
                iiota: '℩',
                ijlig: 'ĳ',
                IJlig: 'Ĳ',
                Im: 'ℑ',
                imacr: 'ī',
                Imacr: 'Ī',
                image: 'ℑ',
                ImaginaryI: 'ⅈ',
                imagline: 'ℐ',
                imagpart: 'ℑ',
                imath: 'ı',
                imof: '⊷',
                imped: 'Ƶ',
                Implies: '⇒',
                in: '∈',
                incare: '℅',
                infin: '∞',
                infintie: '⧝',
                inodot: 'ı',
                int: '∫',
                Int: '∬',
                intcal: '⊺',
                integers: 'ℤ',
                Integral: '∫',
                intercal: '⊺',
                Intersection: '⋂',
                intlarhk: '⨗',
                intprod: '⨼',
                InvisibleComma: '⁣',
                InvisibleTimes: '⁢',
                iocy: 'ё',
                IOcy: 'Ё',
                iogon: 'į',
                Iogon: 'Į',
                iopf: '𝕚',
                Iopf: '𝕀',
                iota: 'ι',
                Iota: 'Ι',
                iprod: '⨼',
                iquest: '¿',
                iscr: '𝒾',
                Iscr: 'ℐ',
                isin: '∈',
                isindot: '⋵',
                isinE: '⋹',
                isins: '⋴',
                isinsv: '⋳',
                isinv: '∈',
                it: '⁢',
                itilde: 'ĩ',
                Itilde: 'Ĩ',
                iukcy: 'і',
                Iukcy: 'І',
                iuml: 'ï',
                Iuml: 'Ï',
                jcirc: 'ĵ',
                Jcirc: 'Ĵ',
                jcy: 'й',
                Jcy: 'Й',
                jfr: '𝔧',
                Jfr: '𝔍',
                jmath: 'ȷ',
                jopf: '𝕛',
                Jopf: '𝕁',
                jscr: '𝒿',
                Jscr: '𝒥',
                jsercy: 'ј',
                Jsercy: 'Ј',
                jukcy: 'є',
                Jukcy: 'Є',
                kappa: 'κ',
                Kappa: 'Κ',
                kappav: 'ϰ',
                kcedil: 'ķ',
                Kcedil: 'Ķ',
                kcy: 'к',
                Kcy: 'К',
                kfr: '𝔨',
                Kfr: '𝔎',
                kgreen: 'ĸ',
                khcy: 'х',
                KHcy: 'Х',
                kjcy: 'ќ',
                KJcy: 'Ќ',
                kopf: '𝕜',
                Kopf: '𝕂',
                kscr: '𝓀',
                Kscr: '𝒦',
                lAarr: '⇚',
                lacute: 'ĺ',
                Lacute: 'Ĺ',
                laemptyv: '⦴',
                lagran: 'ℒ',
                lambda: 'λ',
                Lambda: 'Λ',
                lang: '⟨',
                Lang: '⟪',
                langd: '⦑',
                langle: '⟨',
                lap: '⪅',
                Laplacetrf: 'ℒ',
                laquo: '«',
                larr: '←',
                lArr: '⇐',
                Larr: '↞',
                larrb: '⇤',
                larrbfs: '⤟',
                larrfs: '⤝',
                larrhk: '↩',
                larrlp: '↫',
                larrpl: '⤹',
                larrsim: '⥳',
                larrtl: '↢',
                lat: '⪫',
                latail: '⤙',
                lAtail: '⤛',
                late: '⪭',
                lates: '⪭︀',
                lbarr: '⤌',
                lBarr: '⤎',
                lbbrk: '❲',
                lbrace: '{',
                lbrack: '[',
                lbrke: '⦋',
                lbrksld: '⦏',
                lbrkslu: '⦍',
                lcaron: 'ľ',
                Lcaron: 'Ľ',
                lcedil: 'ļ',
                Lcedil: 'Ļ',
                lceil: '⌈',
                lcub: '{',
                lcy: 'л',
                Lcy: 'Л',
                ldca: '⤶',
                ldquo: '“',
                ldquor: '„',
                ldrdhar: '⥧',
                ldrushar: '⥋',
                ldsh: '↲',
                le: '≤',
                lE: '≦',
                LeftAngleBracket: '⟨',
                leftarrow: '←',
                Leftarrow: '⇐',
                LeftArrow: '←',
                LeftArrowBar: '⇤',
                LeftArrowRightArrow: '⇆',
                leftarrowtail: '↢',
                LeftCeiling: '⌈',
                LeftDoubleBracket: '⟦',
                LeftDownTeeVector: '⥡',
                LeftDownVector: '⇃',
                LeftDownVectorBar: '⥙',
                LeftFloor: '⌊',
                leftharpoondown: '↽',
                leftharpoonup: '↼',
                leftleftarrows: '⇇',
                leftrightarrow: '↔',
                Leftrightarrow: '⇔',
                LeftRightArrow: '↔',
                leftrightarrows: '⇆',
                leftrightharpoons: '⇋',
                leftrightsquigarrow: '↭',
                LeftRightVector: '⥎',
                LeftTee: '⊣',
                LeftTeeArrow: '↤',
                LeftTeeVector: '⥚',
                leftthreetimes: '⋋',
                LeftTriangle: '⊲',
                LeftTriangleBar: '⧏',
                LeftTriangleEqual: '⊴',
                LeftUpDownVector: '⥑',
                LeftUpTeeVector: '⥠',
                LeftUpVector: '↿',
                LeftUpVectorBar: '⥘',
                LeftVector: '↼',
                LeftVectorBar: '⥒',
                leg: '⋚',
                lEg: '⪋',
                leq: '≤',
                leqq: '≦',
                leqslant: '⩽',
                les: '⩽',
                lescc: '⪨',
                lesdot: '⩿',
                lesdoto: '⪁',
                lesdotor: '⪃',
                lesg: '⋚︀',
                lesges: '⪓',
                lessapprox: '⪅',
                lessdot: '⋖',
                lesseqgtr: '⋚',
                lesseqqgtr: '⪋',
                LessEqualGreater: '⋚',
                LessFullEqual: '≦',
                LessGreater: '≶',
                lessgtr: '≶',
                LessLess: '⪡',
                lesssim: '≲',
                LessSlantEqual: '⩽',
                LessTilde: '≲',
                lfisht: '⥼',
                lfloor: '⌊',
                lfr: '𝔩',
                Lfr: '𝔏',
                lg: '≶',
                lgE: '⪑',
                lHar: '⥢',
                lhard: '↽',
                lharu: '↼',
                lharul: '⥪',
                lhblk: '▄',
                ljcy: 'љ',
                LJcy: 'Љ',
                ll: '≪',
                Ll: '⋘',
                llarr: '⇇',
                llcorner: '⌞',
                Lleftarrow: '⇚',
                llhard: '⥫',
                lltri: '◺',
                lmidot: 'ŀ',
                Lmidot: 'Ŀ',
                lmoust: '⎰',
                lmoustache: '⎰',
                lnap: '⪉',
                lnapprox: '⪉',
                lne: '⪇',
                lnE: '≨',
                lneq: '⪇',
                lneqq: '≨',
                lnsim: '⋦',
                loang: '⟬',
                loarr: '⇽',
                lobrk: '⟦',
                longleftarrow: '⟵',
                Longleftarrow: '⟸',
                LongLeftArrow: '⟵',
                longleftrightarrow: '⟷',
                Longleftrightarrow: '⟺',
                LongLeftRightArrow: '⟷',
                longmapsto: '⟼',
                longrightarrow: '⟶',
                Longrightarrow: '⟹',
                LongRightArrow: '⟶',
                looparrowleft: '↫',
                looparrowright: '↬',
                lopar: '⦅',
                lopf: '𝕝',
                Lopf: '𝕃',
                loplus: '⨭',
                lotimes: '⨴',
                lowast: '∗',
                lowbar: '_',
                LowerLeftArrow: '↙',
                LowerRightArrow: '↘',
                loz: '◊',
                lozenge: '◊',
                lozf: '⧫',
                lpar: '(',
                lparlt: '⦓',
                lrarr: '⇆',
                lrcorner: '⌟',
                lrhar: '⇋',
                lrhard: '⥭',
                lrm: '‎',
                lrtri: '⊿',
                lsaquo: '‹',
                lscr: '𝓁',
                Lscr: 'ℒ',
                lsh: '↰',
                Lsh: '↰',
                lsim: '≲',
                lsime: '⪍',
                lsimg: '⪏',
                lsqb: '[',
                lsquo: '‘',
                lsquor: '‚',
                lstrok: 'ł',
                Lstrok: 'Ł',
                lt: '<',
                Lt: '≪',
                LT: '<',
                ltcc: '⪦',
                ltcir: '⩹',
                ltdot: '⋖',
                lthree: '⋋',
                ltimes: '⋉',
                ltlarr: '⥶',
                ltquest: '⩻',
                ltri: '◃',
                ltrie: '⊴',
                ltrif: '◂',
                ltrPar: '⦖',
                lurdshar: '⥊',
                luruhar: '⥦',
                lvertneqq: '≨︀',
                lvnE: '≨︀',
                macr: '¯',
                male: '♂',
                malt: '✠',
                maltese: '✠',
                map: '↦',
                Map: '⤅',
                mapsto: '↦',
                mapstodown: '↧',
                mapstoleft: '↤',
                mapstoup: '↥',
                marker: '▮',
                mcomma: '⨩',
                mcy: 'м',
                Mcy: 'М',
                mdash: '—',
                mDDot: '∺',
                measuredangle: '∡',
                MediumSpace: ' ',
                Mellintrf: 'ℳ',
                mfr: '𝔪',
                Mfr: '𝔐',
                mho: '℧',
                micro: 'µ',
                mid: '∣',
                midast: '*',
                midcir: '⫰',
                middot: '·',
                minus: '−',
                minusb: '⊟',
                minusd: '∸',
                minusdu: '⨪',
                MinusPlus: '∓',
                mlcp: '⫛',
                mldr: '…',
                mnplus: '∓',
                models: '⊧',
                mopf: '𝕞',
                Mopf: '𝕄',
                mp: '∓',
                mscr: '𝓂',
                Mscr: 'ℳ',
                mstpos: '∾',
                mu: 'μ',
                Mu: 'Μ',
                multimap: '⊸',
                mumap: '⊸',
                nabla: '∇',
                nacute: 'ń',
                Nacute: 'Ń',
                nang: '∠⃒',
                nap: '≉',
                napE: '⩰̸',
                napid: '≋̸',
                napos: 'ŉ',
                napprox: '≉',
                natur: '♮',
                natural: '♮',
                naturals: 'ℕ',
                nbsp: ' ',
                nbump: '≎̸',
                nbumpe: '≏̸',
                ncap: '⩃',
                ncaron: 'ň',
                Ncaron: 'Ň',
                ncedil: 'ņ',
                Ncedil: 'Ņ',
                ncong: '≇',
                ncongdot: '⩭̸',
                ncup: '⩂',
                ncy: 'н',
                Ncy: 'Н',
                ndash: '–',
                ne: '≠',
                nearhk: '⤤',
                nearr: '↗',
                neArr: '⇗',
                nearrow: '↗',
                nedot: '≐̸',
                NegativeMediumSpace: '​',
                NegativeThickSpace: '​',
                NegativeThinSpace: '​',
                NegativeVeryThinSpace: '​',
                nequiv: '≢',
                nesear: '⤨',
                nesim: '≂̸',
                NestedGreaterGreater: '≫',
                NestedLessLess: '≪',
                NewLine: '\n',
                nexist: '∄',
                nexists: '∄',
                nfr: '𝔫',
                Nfr: '𝔑',
                nge: '≱',
                ngE: '≧̸',
                ngeq: '≱',
                ngeqq: '≧̸',
                ngeqslant: '⩾̸',
                nges: '⩾̸',
                nGg: '⋙̸',
                ngsim: '≵',
                ngt: '≯',
                nGt: '≫⃒',
                ngtr: '≯',
                nGtv: '≫̸',
                nharr: '↮',
                nhArr: '⇎',
                nhpar: '⫲',
                ni: '∋',
                nis: '⋼',
                nisd: '⋺',
                niv: '∋',
                njcy: 'њ',
                NJcy: 'Њ',
                nlarr: '↚',
                nlArr: '⇍',
                nldr: '‥',
                nle: '≰',
                nlE: '≦̸',
                nleftarrow: '↚',
                nLeftarrow: '⇍',
                nleftrightarrow: '↮',
                nLeftrightarrow: '⇎',
                nleq: '≰',
                nleqq: '≦̸',
                nleqslant: '⩽̸',
                nles: '⩽̸',
                nless: '≮',
                nLl: '⋘̸',
                nlsim: '≴',
                nlt: '≮',
                nLt: '≪⃒',
                nltri: '⋪',
                nltrie: '⋬',
                nLtv: '≪̸',
                nmid: '∤',
                NoBreak: '⁠',
                NonBreakingSpace: ' ',
                nopf: '𝕟',
                Nopf: 'ℕ',
                not: '¬',
                Not: '⫬',
                NotCongruent: '≢',
                NotCupCap: '≭',
                NotDoubleVerticalBar: '∦',
                NotElement: '∉',
                NotEqual: '≠',
                NotEqualTilde: '≂̸',
                NotExists: '∄',
                NotGreater: '≯',
                NotGreaterEqual: '≱',
                NotGreaterFullEqual: '≧̸',
                NotGreaterGreater: '≫̸',
                NotGreaterLess: '≹',
                NotGreaterSlantEqual: '⩾̸',
                NotGreaterTilde: '≵',
                NotHumpDownHump: '≎̸',
                NotHumpEqual: '≏̸',
                notin: '∉',
                notindot: '⋵̸',
                notinE: '⋹̸',
                notinva: '∉',
                notinvb: '⋷',
                notinvc: '⋶',
                NotLeftTriangle: '⋪',
                NotLeftTriangleBar: '⧏̸',
                NotLeftTriangleEqual: '⋬',
                NotLess: '≮',
                NotLessEqual: '≰',
                NotLessGreater: '≸',
                NotLessLess: '≪̸',
                NotLessSlantEqual: '⩽̸',
                NotLessTilde: '≴',
                NotNestedGreaterGreater: '⪢̸',
                NotNestedLessLess: '⪡̸',
                notni: '∌',
                notniva: '∌',
                notnivb: '⋾',
                notnivc: '⋽',
                NotPrecedes: '⊀',
                NotPrecedesEqual: '⪯̸',
                NotPrecedesSlantEqual: '⋠',
                NotReverseElement: '∌',
                NotRightTriangle: '⋫',
                NotRightTriangleBar: '⧐̸',
                NotRightTriangleEqual: '⋭',
                NotSquareSubset: '⊏̸',
                NotSquareSubsetEqual: '⋢',
                NotSquareSuperset: '⊐̸',
                NotSquareSupersetEqual: '⋣',
                NotSubset: '⊂⃒',
                NotSubsetEqual: '⊈',
                NotSucceeds: '⊁',
                NotSucceedsEqual: '⪰̸',
                NotSucceedsSlantEqual: '⋡',
                NotSucceedsTilde: '≿̸',
                NotSuperset: '⊃⃒',
                NotSupersetEqual: '⊉',
                NotTilde: '≁',
                NotTildeEqual: '≄',
                NotTildeFullEqual: '≇',
                NotTildeTilde: '≉',
                NotVerticalBar: '∤',
                npar: '∦',
                nparallel: '∦',
                nparsl: '⫽⃥',
                npart: '∂̸',
                npolint: '⨔',
                npr: '⊀',
                nprcue: '⋠',
                npre: '⪯̸',
                nprec: '⊀',
                npreceq: '⪯̸',
                nrarr: '↛',
                nrArr: '⇏',
                nrarrc: '⤳̸',
                nrarrw: '↝̸',
                nrightarrow: '↛',
                nRightarrow: '⇏',
                nrtri: '⋫',
                nrtrie: '⋭',
                nsc: '⊁',
                nsccue: '⋡',
                nsce: '⪰̸',
                nscr: '𝓃',
                Nscr: '𝒩',
                nshortmid: '∤',
                nshortparallel: '∦',
                nsim: '≁',
                nsime: '≄',
                nsimeq: '≄',
                nsmid: '∤',
                nspar: '∦',
                nsqsube: '⋢',
                nsqsupe: '⋣',
                nsub: '⊄',
                nsube: '⊈',
                nsubE: '⫅̸',
                nsubset: '⊂⃒',
                nsubseteq: '⊈',
                nsubseteqq: '⫅̸',
                nsucc: '⊁',
                nsucceq: '⪰̸',
                nsup: '⊅',
                nsupe: '⊉',
                nsupE: '⫆̸',
                nsupset: '⊃⃒',
                nsupseteq: '⊉',
                nsupseteqq: '⫆̸',
                ntgl: '≹',
                ntilde: 'ñ',
                Ntilde: 'Ñ',
                ntlg: '≸',
                ntriangleleft: '⋪',
                ntrianglelefteq: '⋬',
                ntriangleright: '⋫',
                ntrianglerighteq: '⋭',
                nu: 'ν',
                Nu: 'Ν',
                num: '#',
                numero: '№',
                numsp: ' ',
                nvap: '≍⃒',
                nvdash: '⊬',
                nvDash: '⊭',
                nVdash: '⊮',
                nVDash: '⊯',
                nvge: '≥⃒',
                nvgt: '>⃒',
                nvHarr: '⤄',
                nvinfin: '⧞',
                nvlArr: '⤂',
                nvle: '≤⃒',
                nvlt: '<⃒',
                nvltrie: '⊴⃒',
                nvrArr: '⤃',
                nvrtrie: '⊵⃒',
                nvsim: '∼⃒',
                nwarhk: '⤣',
                nwarr: '↖',
                nwArr: '⇖',
                nwarrow: '↖',
                nwnear: '⤧',
                oacute: 'ó',
                Oacute: 'Ó',
                oast: '⊛',
                ocir: '⊚',
                ocirc: 'ô',
                Ocirc: 'Ô',
                ocy: 'о',
                Ocy: 'О',
                odash: '⊝',
                odblac: 'ő',
                Odblac: 'Ő',
                odiv: '⨸',
                odot: '⊙',
                odsold: '⦼',
                oelig: 'œ',
                OElig: 'Œ',
                ofcir: '⦿',
                ofr: '𝔬',
                Ofr: '𝔒',
                ogon: '˛',
                ograve: 'ò',
                Ograve: 'Ò',
                ogt: '⧁',
                ohbar: '⦵',
                ohm: 'Ω',
                oint: '∮',
                olarr: '↺',
                olcir: '⦾',
                olcross: '⦻',
                oline: '‾',
                olt: '⧀',
                omacr: 'ō',
                Omacr: 'Ō',
                omega: 'ω',
                Omega: 'Ω',
                omicron: 'ο',
                Omicron: 'Ο',
                omid: '⦶',
                ominus: '⊖',
                oopf: '𝕠',
                Oopf: '𝕆',
                opar: '⦷',
                OpenCurlyDoubleQuote: '“',
                OpenCurlyQuote: '‘',
                operp: '⦹',
                oplus: '⊕',
                or: '∨',
                Or: '⩔',
                orarr: '↻',
                ord: '⩝',
                order: 'ℴ',
                orderof: 'ℴ',
                ordf: 'ª',
                ordm: 'º',
                origof: '⊶',
                oror: '⩖',
                orslope: '⩗',
                orv: '⩛',
                oS: 'Ⓢ',
                oscr: 'ℴ',
                Oscr: '𝒪',
                oslash: 'ø',
                Oslash: 'Ø',
                osol: '⊘',
                otilde: 'õ',
                Otilde: 'Õ',
                otimes: '⊗',
                Otimes: '⨷',
                otimesas: '⨶',
                ouml: 'ö',
                Ouml: 'Ö',
                ovbar: '⌽',
                OverBar: '‾',
                OverBrace: '⏞',
                OverBracket: '⎴',
                OverParenthesis: '⏜',
                par: '∥',
                para: '¶',
                parallel: '∥',
                parsim: '⫳',
                parsl: '⫽',
                part: '∂',
                PartialD: '∂',
                pcy: 'п',
                Pcy: 'П',
                percnt: '%',
                period: '.',
                permil: '‰',
                perp: '⊥',
                pertenk: '‱',
                pfr: '𝔭',
                Pfr: '𝔓',
                phi: 'φ',
                Phi: 'Φ',
                phiv: 'ϕ',
                phmmat: 'ℳ',
                phone: '☎',
                pi: 'π',
                Pi: 'Π',
                pitchfork: '⋔',
                piv: 'ϖ',
                planck: 'ℏ',
                planckh: 'ℎ',
                plankv: 'ℏ',
                plus: '+',
                plusacir: '⨣',
                plusb: '⊞',
                pluscir: '⨢',
                plusdo: '∔',
                plusdu: '⨥',
                pluse: '⩲',
                PlusMinus: '±',
                plusmn: '±',
                plussim: '⨦',
                plustwo: '⨧',
                pm: '±',
                Poincareplane: 'ℌ',
                pointint: '⨕',
                popf: '𝕡',
                Popf: 'ℙ',
                pound: '£',
                pr: '≺',
                Pr: '⪻',
                prap: '⪷',
                prcue: '≼',
                pre: '⪯',
                prE: '⪳',
                prec: '≺',
                precapprox: '⪷',
                preccurlyeq: '≼',
                Precedes: '≺',
                PrecedesEqual: '⪯',
                PrecedesSlantEqual: '≼',
                PrecedesTilde: '≾',
                preceq: '⪯',
                precnapprox: '⪹',
                precneqq: '⪵',
                precnsim: '⋨',
                precsim: '≾',
                prime: '′',
                Prime: '″',
                primes: 'ℙ',
                prnap: '⪹',
                prnE: '⪵',
                prnsim: '⋨',
                prod: '∏',
                Product: '∏',
                profalar: '⌮',
                profline: '⌒',
                profsurf: '⌓',
                prop: '∝',
                Proportion: '∷',
                Proportional: '∝',
                propto: '∝',
                prsim: '≾',
                prurel: '⊰',
                pscr: '𝓅',
                Pscr: '𝒫',
                psi: 'ψ',
                Psi: 'Ψ',
                puncsp: ' ',
                qfr: '𝔮',
                Qfr: '𝔔',
                qint: '⨌',
                qopf: '𝕢',
                Qopf: 'ℚ',
                qprime: '⁗',
                qscr: '𝓆',
                Qscr: '𝒬',
                quaternions: 'ℍ',
                quatint: '⨖',
                quest: '?',
                questeq: '≟',
                quot: '"',
                QUOT: '"',
                rAarr: '⇛',
                race: '∽̱',
                racute: 'ŕ',
                Racute: 'Ŕ',
                radic: '√',
                raemptyv: '⦳',
                rang: '⟩',
                Rang: '⟫',
                rangd: '⦒',
                range: '⦥',
                rangle: '⟩',
                raquo: '»',
                rarr: '→',
                rArr: '⇒',
                Rarr: '↠',
                rarrap: '⥵',
                rarrb: '⇥',
                rarrbfs: '⤠',
                rarrc: '⤳',
                rarrfs: '⤞',
                rarrhk: '↪',
                rarrlp: '↬',
                rarrpl: '⥅',
                rarrsim: '⥴',
                rarrtl: '↣',
                Rarrtl: '⤖',
                rarrw: '↝',
                ratail: '⤚',
                rAtail: '⤜',
                ratio: '∶',
                rationals: 'ℚ',
                rbarr: '⤍',
                rBarr: '⤏',
                RBarr: '⤐',
                rbbrk: '❳',
                rbrace: '}',
                rbrack: ']',
                rbrke: '⦌',
                rbrksld: '⦎',
                rbrkslu: '⦐',
                rcaron: 'ř',
                Rcaron: 'Ř',
                rcedil: 'ŗ',
                Rcedil: 'Ŗ',
                rceil: '⌉',
                rcub: '}',
                rcy: 'р',
                Rcy: 'Р',
                rdca: '⤷',
                rdldhar: '⥩',
                rdquo: '”',
                rdquor: '”',
                rdsh: '↳',
                Re: 'ℜ',
                real: 'ℜ',
                realine: 'ℛ',
                realpart: 'ℜ',
                reals: 'ℝ',
                rect: '▭',
                reg: '®',
                REG: '®',
                ReverseElement: '∋',
                ReverseEquilibrium: '⇋',
                ReverseUpEquilibrium: '⥯',
                rfisht: '⥽',
                rfloor: '⌋',
                rfr: '𝔯',
                Rfr: 'ℜ',
                rHar: '⥤',
                rhard: '⇁',
                rharu: '⇀',
                rharul: '⥬',
                rho: 'ρ',
                Rho: 'Ρ',
                rhov: 'ϱ',
                RightAngleBracket: '⟩',
                rightarrow: '→',
                Rightarrow: '⇒',
                RightArrow: '→',
                RightArrowBar: '⇥',
                RightArrowLeftArrow: '⇄',
                rightarrowtail: '↣',
                RightCeiling: '⌉',
                RightDoubleBracket: '⟧',
                RightDownTeeVector: '⥝',
                RightDownVector: '⇂',
                RightDownVectorBar: '⥕',
                RightFloor: '⌋',
                rightharpoondown: '⇁',
                rightharpoonup: '⇀',
                rightleftarrows: '⇄',
                rightleftharpoons: '⇌',
                rightrightarrows: '⇉',
                rightsquigarrow: '↝',
                RightTee: '⊢',
                RightTeeArrow: '↦',
                RightTeeVector: '⥛',
                rightthreetimes: '⋌',
                RightTriangle: '⊳',
                RightTriangleBar: '⧐',
                RightTriangleEqual: '⊵',
                RightUpDownVector: '⥏',
                RightUpTeeVector: '⥜',
                RightUpVector: '↾',
                RightUpVectorBar: '⥔',
                RightVector: '⇀',
                RightVectorBar: '⥓',
                ring: '˚',
                risingdotseq: '≓',
                rlarr: '⇄',
                rlhar: '⇌',
                rlm: '‏',
                rmoust: '⎱',
                rmoustache: '⎱',
                rnmid: '⫮',
                roang: '⟭',
                roarr: '⇾',
                robrk: '⟧',
                ropar: '⦆',
                ropf: '𝕣',
                Ropf: 'ℝ',
                roplus: '⨮',
                rotimes: '⨵',
                RoundImplies: '⥰',
                rpar: ')',
                rpargt: '⦔',
                rppolint: '⨒',
                rrarr: '⇉',
                Rrightarrow: '⇛',
                rsaquo: '›',
                rscr: '𝓇',
                Rscr: 'ℛ',
                rsh: '↱',
                Rsh: '↱',
                rsqb: ']',
                rsquo: '’',
                rsquor: '’',
                rthree: '⋌',
                rtimes: '⋊',
                rtri: '▹',
                rtrie: '⊵',
                rtrif: '▸',
                rtriltri: '⧎',
                RuleDelayed: '⧴',
                ruluhar: '⥨',
                rx: '℞',
                sacute: 'ś',
                Sacute: 'Ś',
                sbquo: '‚',
                sc: '≻',
                Sc: '⪼',
                scap: '⪸',
                scaron: 'š',
                Scaron: 'Š',
                sccue: '≽',
                sce: '⪰',
                scE: '⪴',
                scedil: 'ş',
                Scedil: 'Ş',
                scirc: 'ŝ',
                Scirc: 'Ŝ',
                scnap: '⪺',
                scnE: '⪶',
                scnsim: '⋩',
                scpolint: '⨓',
                scsim: '≿',
                scy: 'с',
                Scy: 'С',
                sdot: '⋅',
                sdotb: '⊡',
                sdote: '⩦',
                searhk: '⤥',
                searr: '↘',
                seArr: '⇘',
                searrow: '↘',
                sect: '§',
                semi: ';',
                seswar: '⤩',
                setminus: '∖',
                setmn: '∖',
                sext: '✶',
                sfr: '𝔰',
                Sfr: '𝔖',
                sfrown: '⌢',
                sharp: '♯',
                shchcy: 'щ',
                SHCHcy: 'Щ',
                shcy: 'ш',
                SHcy: 'Ш',
                ShortDownArrow: '↓',
                ShortLeftArrow: '←',
                shortmid: '∣',
                shortparallel: '∥',
                ShortRightArrow: '→',
                ShortUpArrow: '↑',
                shy: '­',
                sigma: 'σ',
                Sigma: 'Σ',
                sigmaf: 'ς',
                sigmav: 'ς',
                sim: '∼',
                simdot: '⩪',
                sime: '≃',
                simeq: '≃',
                simg: '⪞',
                simgE: '⪠',
                siml: '⪝',
                simlE: '⪟',
                simne: '≆',
                simplus: '⨤',
                simrarr: '⥲',
                slarr: '←',
                SmallCircle: '∘',
                smallsetminus: '∖',
                smashp: '⨳',
                smeparsl: '⧤',
                smid: '∣',
                smile: '⌣',
                smt: '⪪',
                smte: '⪬',
                smtes: '⪬︀',
                softcy: 'ь',
                SOFTcy: 'Ь',
                sol: '/',
                solb: '⧄',
                solbar: '⌿',
                sopf: '𝕤',
                Sopf: '𝕊',
                spades: '♠',
                spadesuit: '♠',
                spar: '∥',
                sqcap: '⊓',
                sqcaps: '⊓︀',
                sqcup: '⊔',
                sqcups: '⊔︀',
                Sqrt: '√',
                sqsub: '⊏',
                sqsube: '⊑',
                sqsubset: '⊏',
                sqsubseteq: '⊑',
                sqsup: '⊐',
                sqsupe: '⊒',
                sqsupset: '⊐',
                sqsupseteq: '⊒',
                squ: '□',
                square: '□',
                Square: '□',
                SquareIntersection: '⊓',
                SquareSubset: '⊏',
                SquareSubsetEqual: '⊑',
                SquareSuperset: '⊐',
                SquareSupersetEqual: '⊒',
                SquareUnion: '⊔',
                squarf: '▪',
                squf: '▪',
                srarr: '→',
                sscr: '𝓈',
                Sscr: '𝒮',
                ssetmn: '∖',
                ssmile: '⌣',
                sstarf: '⋆',
                star: '☆',
                Star: '⋆',
                starf: '★',
                straightepsilon: 'ϵ',
                straightphi: 'ϕ',
                strns: '¯',
                sub: '⊂',
                Sub: '⋐',
                subdot: '⪽',
                sube: '⊆',
                subE: '⫅',
                subedot: '⫃',
                submult: '⫁',
                subne: '⊊',
                subnE: '⫋',
                subplus: '⪿',
                subrarr: '⥹',
                subset: '⊂',
                Subset: '⋐',
                subseteq: '⊆',
                subseteqq: '⫅',
                SubsetEqual: '⊆',
                subsetneq: '⊊',
                subsetneqq: '⫋',
                subsim: '⫇',
                subsub: '⫕',
                subsup: '⫓',
                succ: '≻',
                succapprox: '⪸',
                succcurlyeq: '≽',
                Succeeds: '≻',
                SucceedsEqual: '⪰',
                SucceedsSlantEqual: '≽',
                SucceedsTilde: '≿',
                succeq: '⪰',
                succnapprox: '⪺',
                succneqq: '⪶',
                succnsim: '⋩',
                succsim: '≿',
                SuchThat: '∋',
                sum: '∑',
                Sum: '∑',
                sung: '♪',
                sup: '⊃',
                Sup: '⋑',
                sup1: '¹',
                sup2: '²',
                sup3: '³',
                supdot: '⪾',
                supdsub: '⫘',
                supe: '⊇',
                supE: '⫆',
                supedot: '⫄',
                Superset: '⊃',
                SupersetEqual: '⊇',
                suphsol: '⟉',
                suphsub: '⫗',
                suplarr: '⥻',
                supmult: '⫂',
                supne: '⊋',
                supnE: '⫌',
                supplus: '⫀',
                supset: '⊃',
                Supset: '⋑',
                supseteq: '⊇',
                supseteqq: '⫆',
                supsetneq: '⊋',
                supsetneqq: '⫌',
                supsim: '⫈',
                supsub: '⫔',
                supsup: '⫖',
                swarhk: '⤦',
                swarr: '↙',
                swArr: '⇙',
                swarrow: '↙',
                swnwar: '⤪',
                szlig: 'ß',
                Tab: '\t',
                target: '⌖',
                tau: 'τ',
                Tau: 'Τ',
                tbrk: '⎴',
                tcaron: 'ť',
                Tcaron: 'Ť',
                tcedil: 'ţ',
                Tcedil: 'Ţ',
                tcy: 'т',
                Tcy: 'Т',
                tdot: '⃛',
                telrec: '⌕',
                tfr: '𝔱',
                Tfr: '𝔗',
                there4: '∴',
                therefore: '∴',
                Therefore: '∴',
                theta: 'θ',
                Theta: 'Θ',
                thetasym: 'ϑ',
                thetav: 'ϑ',
                thickapprox: '≈',
                thicksim: '∼',
                ThickSpace: '  ',
                thinsp: ' ',
                ThinSpace: ' ',
                thkap: '≈',
                thksim: '∼',
                thorn: 'þ',
                THORN: 'Þ',
                tilde: '˜',
                Tilde: '∼',
                TildeEqual: '≃',
                TildeFullEqual: '≅',
                TildeTilde: '≈',
                times: '×',
                timesb: '⊠',
                timesbar: '⨱',
                timesd: '⨰',
                tint: '∭',
                toea: '⤨',
                top: '⊤',
                topbot: '⌶',
                topcir: '⫱',
                topf: '𝕥',
                Topf: '𝕋',
                topfork: '⫚',
                tosa: '⤩',
                tprime: '‴',
                trade: '™',
                TRADE: '™',
                triangle: '▵',
                triangledown: '▿',
                triangleleft: '◃',
                trianglelefteq: '⊴',
                triangleq: '≜',
                triangleright: '▹',
                trianglerighteq: '⊵',
                tridot: '◬',
                trie: '≜',
                triminus: '⨺',
                TripleDot: '⃛',
                triplus: '⨹',
                trisb: '⧍',
                tritime: '⨻',
                trpezium: '⏢',
                tscr: '𝓉',
                Tscr: '𝒯',
                tscy: 'ц',
                TScy: 'Ц',
                tshcy: 'ћ',
                TSHcy: 'Ћ',
                tstrok: 'ŧ',
                Tstrok: 'Ŧ',
                twixt: '≬',
                twoheadleftarrow: '↞',
                twoheadrightarrow: '↠',
                uacute: 'ú',
                Uacute: 'Ú',
                uarr: '↑',
                uArr: '⇑',
                Uarr: '↟',
                Uarrocir: '⥉',
                ubrcy: 'ў',
                Ubrcy: 'Ў',
                ubreve: 'ŭ',
                Ubreve: 'Ŭ',
                ucirc: 'û',
                Ucirc: 'Û',
                ucy: 'у',
                Ucy: 'У',
                udarr: '⇅',
                udblac: 'ű',
                Udblac: 'Ű',
                udhar: '⥮',
                ufisht: '⥾',
                ufr: '𝔲',
                Ufr: '𝔘',
                ugrave: 'ù',
                Ugrave: 'Ù',
                uHar: '⥣',
                uharl: '↿',
                uharr: '↾',
                uhblk: '▀',
                ulcorn: '⌜',
                ulcorner: '⌜',
                ulcrop: '⌏',
                ultri: '◸',
                umacr: 'ū',
                Umacr: 'Ū',
                uml: '¨',
                UnderBar: '_',
                UnderBrace: '⏟',
                UnderBracket: '⎵',
                UnderParenthesis: '⏝',
                Union: '⋃',
                UnionPlus: '⊎',
                uogon: 'ų',
                Uogon: 'Ų',
                uopf: '𝕦',
                Uopf: '𝕌',
                uparrow: '↑',
                Uparrow: '⇑',
                UpArrow: '↑',
                UpArrowBar: '⤒',
                UpArrowDownArrow: '⇅',
                updownarrow: '↕',
                Updownarrow: '⇕',
                UpDownArrow: '↕',
                UpEquilibrium: '⥮',
                upharpoonleft: '↿',
                upharpoonright: '↾',
                uplus: '⊎',
                UpperLeftArrow: '↖',
                UpperRightArrow: '↗',
                upsi: 'υ',
                Upsi: 'ϒ',
                upsih: 'ϒ',
                upsilon: 'υ',
                Upsilon: 'Υ',
                UpTee: '⊥',
                UpTeeArrow: '↥',
                upuparrows: '⇈',
                urcorn: '⌝',
                urcorner: '⌝',
                urcrop: '⌎',
                uring: 'ů',
                Uring: 'Ů',
                urtri: '◹',
                uscr: '𝓊',
                Uscr: '𝒰',
                utdot: '⋰',
                utilde: 'ũ',
                Utilde: 'Ũ',
                utri: '▵',
                utrif: '▴',
                uuarr: '⇈',
                uuml: 'ü',
                Uuml: 'Ü',
                uwangle: '⦧',
                vangrt: '⦜',
                varepsilon: 'ϵ',
                varkappa: 'ϰ',
                varnothing: '∅',
                varphi: 'ϕ',
                varpi: 'ϖ',
                varpropto: '∝',
                varr: '↕',
                vArr: '⇕',
                varrho: 'ϱ',
                varsigma: 'ς',
                varsubsetneq: '⊊︀',
                varsubsetneqq: '⫋︀',
                varsupsetneq: '⊋︀',
                varsupsetneqq: '⫌︀',
                vartheta: 'ϑ',
                vartriangleleft: '⊲',
                vartriangleright: '⊳',
                vBar: '⫨',
                Vbar: '⫫',
                vBarv: '⫩',
                vcy: 'в',
                Vcy: 'В',
                vdash: '⊢',
                vDash: '⊨',
                Vdash: '⊩',
                VDash: '⊫',
                Vdashl: '⫦',
                vee: '∨',
                Vee: '⋁',
                veebar: '⊻',
                veeeq: '≚',
                vellip: '⋮',
                verbar: '|',
                Verbar: '‖',
                vert: '|',
                Vert: '‖',
                VerticalBar: '∣',
                VerticalLine: '|',
                VerticalSeparator: '❘',
                VerticalTilde: '≀',
                VeryThinSpace: ' ',
                vfr: '𝔳',
                Vfr: '𝔙',
                vltri: '⊲',
                vnsub: '⊂⃒',
                vnsup: '⊃⃒',
                vopf: '𝕧',
                Vopf: '𝕍',
                vprop: '∝',
                vrtri: '⊳',
                vscr: '𝓋',
                Vscr: '𝒱',
                vsubne: '⊊︀',
                vsubnE: '⫋︀',
                vsupne: '⊋︀',
                vsupnE: '⫌︀',
                Vvdash: '⊪',
                vzigzag: '⦚',
                wcirc: 'ŵ',
                Wcirc: 'Ŵ',
                wedbar: '⩟',
                wedge: '∧',
                Wedge: '⋀',
                wedgeq: '≙',
                weierp: '℘',
                wfr: '𝔴',
                Wfr: '𝔚',
                wopf: '𝕨',
                Wopf: '𝕎',
                wp: '℘',
                wr: '≀',
                wreath: '≀',
                wscr: '𝓌',
                Wscr: '𝒲',
                xcap: '⋂',
                xcirc: '◯',
                xcup: '⋃',
                xdtri: '▽',
                xfr: '𝔵',
                Xfr: '𝔛',
                xharr: '⟷',
                xhArr: '⟺',
                xi: 'ξ',
                Xi: 'Ξ',
                xlarr: '⟵',
                xlArr: '⟸',
                xmap: '⟼',
                xnis: '⋻',
                xodot: '⨀',
                xopf: '𝕩',
                Xopf: '𝕏',
                xoplus: '⨁',
                xotime: '⨂',
                xrarr: '⟶',
                xrArr: '⟹',
                xscr: '𝓍',
                Xscr: '𝒳',
                xsqcup: '⨆',
                xuplus: '⨄',
                xutri: '△',
                xvee: '⋁',
                xwedge: '⋀',
                yacute: 'ý',
                Yacute: 'Ý',
                yacy: 'я',
                YAcy: 'Я',
                ycirc: 'ŷ',
                Ycirc: 'Ŷ',
                ycy: 'ы',
                Ycy: 'Ы',
                yen: '¥',
                yfr: '𝔶',
                Yfr: '𝔜',
                yicy: 'ї',
                YIcy: 'Ї',
                yopf: '𝕪',
                Yopf: '𝕐',
                yscr: '𝓎',
                Yscr: '𝒴',
                yucy: 'ю',
                YUcy: 'Ю',
                yuml: 'ÿ',
                Yuml: 'Ÿ',
                zacute: 'ź',
                Zacute: 'Ź',
                zcaron: 'ž',
                Zcaron: 'Ž',
                zcy: 'з',
                Zcy: 'З',
                zdot: 'ż',
                Zdot: 'Ż',
                zeetrf: 'ℨ',
                ZeroWidthSpace: '​',
                zeta: 'ζ',
                Zeta: 'Ζ',
                zfr: '𝔷',
                Zfr: 'ℨ',
                zhcy: 'ж',
                ZHcy: 'Ж',
                zigrarr: '⇝',
                zopf: '𝕫',
                Zopf: 'ℤ',
                zscr: '𝓏',
                Zscr: '𝒵',
                zwj: '‍',
                zwnj: '‌',
              },
              w = {
                aacute: 'á',
                Aacute: 'Á',
                acirc: 'â',
                Acirc: 'Â',
                acute: '´',
                aelig: 'æ',
                AElig: 'Æ',
                agrave: 'à',
                Agrave: 'À',
                amp: '&',
                AMP: '&',
                aring: 'å',
                Aring: 'Å',
                atilde: 'ã',
                Atilde: 'Ã',
                auml: 'ä',
                Auml: 'Ä',
                brvbar: '¦',
                ccedil: 'ç',
                Ccedil: 'Ç',
                cedil: '¸',
                cent: '¢',
                copy: '©',
                COPY: '©',
                curren: '¤',
                deg: '°',
                divide: '÷',
                eacute: 'é',
                Eacute: 'É',
                ecirc: 'ê',
                Ecirc: 'Ê',
                egrave: 'è',
                Egrave: 'È',
                eth: 'ð',
                ETH: 'Ð',
                euml: 'ë',
                Euml: 'Ë',
                frac12: '½',
                frac14: '¼',
                frac34: '¾',
                gt: '>',
                GT: '>',
                iacute: 'í',
                Iacute: 'Í',
                icirc: 'î',
                Icirc: 'Î',
                iexcl: '¡',
                igrave: 'ì',
                Igrave: 'Ì',
                iquest: '¿',
                iuml: 'ï',
                Iuml: 'Ï',
                laquo: '«',
                lt: '<',
                LT: '<',
                macr: '¯',
                micro: 'µ',
                middot: '·',
                nbsp: ' ',
                not: '¬',
                ntilde: 'ñ',
                Ntilde: 'Ñ',
                oacute: 'ó',
                Oacute: 'Ó',
                ocirc: 'ô',
                Ocirc: 'Ô',
                ograve: 'ò',
                Ograve: 'Ò',
                ordf: 'ª',
                ordm: 'º',
                oslash: 'ø',
                Oslash: 'Ø',
                otilde: 'õ',
                Otilde: 'Õ',
                ouml: 'ö',
                Ouml: 'Ö',
                para: '¶',
                plusmn: '±',
                pound: '£',
                quot: '"',
                QUOT: '"',
                raquo: '»',
                reg: '®',
                REG: '®',
                sect: '§',
                shy: '­',
                sup1: '¹',
                sup2: '²',
                sup3: '³',
                szlig: 'ß',
                thorn: 'þ',
                THORN: 'Þ',
                times: '×',
                uacute: 'ú',
                Uacute: 'Ú',
                ucirc: 'û',
                Ucirc: 'Û',
                ugrave: 'ù',
                Ugrave: 'Ù',
                uml: '¨',
                uuml: 'ü',
                Uuml: 'Ü',
                yacute: 'ý',
                Yacute: 'Ý',
                yen: '¥',
                yuml: 'ÿ',
              },
              E = {
                0: '�',
                128: '€',
                130: '‚',
                131: 'ƒ',
                132: '„',
                133: '…',
                134: '†',
                135: '‡',
                136: 'ˆ',
                137: '‰',
                138: 'Š',
                139: '‹',
                140: 'Œ',
                142: 'Ž',
                145: '‘',
                146: '’',
                147: '“',
                148: '”',
                149: '•',
                150: '–',
                151: '—',
                152: '˜',
                153: '™',
                154: 'š',
                155: '›',
                156: 'œ',
                158: 'ž',
                159: 'Ÿ',
              },
              _ = [
                1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131,
                132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
                145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
                158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982,
                64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991,
                64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3,
                65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535,
                131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679,
                393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
                655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967,
                917502, 917503, 983038, 983039, 1048574, 1048575, 1114110,
                1114111,
              ],
              x = String.fromCharCode,
              S = {}.hasOwnProperty,
              k = function (e) {
                throw Error('Parse error: ' + e);
              },
              A = function (e, t) {
                (t = a(t, A.options)).strict &&
                  y.test(e) &&
                  k('forbidden code point');
                function r(e) {
                  return s(e.charCodeAt(0));
                }
                var n = t.encodeEverything,
                  i = t.useNamedReferences,
                  o = t.allowUnsafeSymbols,
                  s = t.decimal ? l : u;
                return (
                  n
                    ? ((e = e.replace(f, function (e) {
                        return i && m(d, e) ? '&' + d[e] + ';' : r(e);
                      })),
                      i &&
                        (e = e
                          .replace(/&gt;\u20D2/g, '&nvgt;')
                          .replace(/&lt;\u20D2/g, '&nvlt;')
                          .replace(/&#x66;&#x6A;/g, '&fjlig;')),
                      i &&
                        (e = e.replace(p, function (e) {
                          return '&' + d[e] + ';';
                        })))
                    : i
                    ? (o ||
                        (e = e.replace(g, function (e) {
                          return '&' + d[e] + ';';
                        })),
                      (e = (e = e
                        .replace(/&gt;\u20D2/g, '&nvgt;')
                        .replace(/&lt;\u20D2/g, '&nvlt;')).replace(
                        p,
                        function (e) {
                          return '&' + d[e] + ';';
                        },
                      )))
                    : o || (e = e.replace(g, r)),
                  e
                    .replace(c, function (e) {
                      var t = e.charCodeAt(0),
                        r = e.charCodeAt(1);
                      return s(1024 * (t - 55296) + r - 56320 + 65536);
                    })
                    .replace(h, r)
                );
              };
            A.options = {
              allowUnsafeSymbols: !1,
              encodeEverything: !1,
              strict: !1,
              useNamedReferences: !1,
              decimal: !1,
            };
            var C = function (e, d) {
              var g = (d = a(d, C.options)).strict;
              return (
                g && o.test(e) && k('malformed character reference'),
                e.replace(s, function (e, t, r, n, i, o, s, a) {
                  var u, l, c, f, h, p;
                  return t
                    ? ((c = t),
                      (l = r),
                      g &&
                        !l &&
                        k(
                          'character reference was not terminated by a semicolon',
                        ),
                      (u = parseInt(c, 10)),
                      b(u, g))
                    : n
                    ? ((f = n),
                      (l = i),
                      g &&
                        !l &&
                        k(
                          'character reference was not terminated by a semicolon',
                        ),
                      (u = parseInt(f, 16)),
                      b(u, g))
                    : o
                    ? m(v, (h = o))
                      ? v[h]
                      : (g &&
                          k(
                            'named character reference was not terminated by a semicolon',
                          ),
                        e)
                    : ((h = s),
                      (p = a) && d.isAttributeValue
                        ? (g &&
                            '=' == p &&
                            k('`&` did not start a character reference'),
                          e)
                        : (g &&
                            k(
                              'named character reference was not terminated by a semicolon',
                            ),
                          w[h] + (p || '')));
                })
              );
            };
            C.options = { isAttributeValue: !1, strict: !1 };
            var D = {
              version: '1.1.1',
              encode: A,
              decode: C,
              escape: function (e) {
                return e.replace(g, function (e) {
                  return i[e];
                });
              },
              unescape: C,
            };
            if (t && !t.nodeType)
              if (r) r.exports = D;
              else for (var T in D) m(D, T) && (t[T] = D[T]);
            else e.he = D;
          })(this);
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {},
    ],
    48: [
      function (e, t, r) {
        (r.read = function (e, t, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            l = u >> 1,
            c = -7,
            f = r ? i - 1 : 0,
            h = r ? -1 : 1,
            p = e[t + f];
          for (
            f += h, o = p & ((1 << -c) - 1), p >>= -c, c += a;
            0 < c;
            o = 256 * o + e[t + f], f += h, c -= 8
          );
          for (
            s = o & ((1 << -c) - 1), o >>= -c, c += n;
            0 < c;
            s = 256 * s + e[t + f], f += h, c -= 8
          );
          if (0 === o) o = 1 - l;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
            (s += Math.pow(2, n)), (o -= l);
          }
          return (p ? -1 : 1) * s * Math.pow(2, o - n);
        }),
          (r.write = function (e, t, r, n, i, o) {
            var s,
              a,
              u,
              l = 8 * o - i - 1,
              c = (1 << l) - 1,
              f = c >> 1,
              h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = n ? 0 : o - 1,
              d = n ? 1 : -1,
              g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((a = isNaN(t) ? 1 : 0), (s = c))
                  : ((s = Math.floor(Math.log(t) / Math.LN2)),
                    t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    2 <=
                      (t += 1 <= s + f ? h / u : h * Math.pow(2, 1 - f)) * u &&
                      (s++, (u /= 2)),
                    c <= s + f
                      ? ((a = 0), (s = c))
                      : 1 <= s + f
                      ? ((a = (t * u - 1) * Math.pow(2, i)), (s += f))
                      : ((a = t * Math.pow(2, f - 1) * Math.pow(2, i)),
                        (s = 0)));
              8 <= i;
              e[r + p] = 255 & a, p += d, a /= 256, i -= 8
            );
            for (
              s = (s << i) | a, l += i;
              0 < l;
              e[r + p] = 255 & s, p += d, s /= 256, l -= 8
            );
            e[r + p - d] |= 128 * g;
          });
      },
      {},
    ],
    49: [
      function (e, t, r) {
        'function' == typeof Object.create
          ? (t.exports = function (e, t) {
              (e.super_ = t),
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                }));
            })
          : (t.exports = function (e, t) {
              e.super_ = t;
              function r() {}
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            });
      },
      {},
    ],
    50: [
      function (e, t, r) {
        function n(e) {
          return (
            !!e.constructor &&
            'function' == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        }
        t.exports = function (e) {
          return (
            null != e &&
            (n(e) ||
              (function (e) {
                return (
                  'function' == typeof e.readFloatLE &&
                  'function' == typeof e.slice &&
                  n(e.slice(0, 0))
                );
              })(e) ||
              !!e._isBuffer)
          );
        };
      },
      {},
    ],
    51: [
      function (e, t, r) {
        var n = {}.toString;
        t.exports =
          Array.isArray ||
          function (e) {
            return '[object Array]' == n.call(e);
          };
      },
      {},
    ],
    52: [
      function (e, t, r) {
        (function (u) {
          var l = e('path'),
            c = e('fs'),
            f = parseInt('0777', 8);
          function h(n, i, e, o) {
            'function' == typeof i
              ? ((e = i), (i = {}))
              : (i && 'object' == typeof i) || (i = { mode: i });
            var t = i.mode,
              s = i.fs || c;
            void 0 === t && (t = f & ~u.umask()), (o = o || null);
            var a = e || function () {};
            (n = l.resolve(n)),
              s.mkdir(n, t, function (r) {
                if (!r) return a(null, (o = o || n));
                switch (r.code) {
                  case 'ENOENT':
                    h(l.dirname(n), i, function (e, t) {
                      e ? a(e, t) : h(n, i, a, t);
                    });
                    break;
                  default:
                    s.stat(n, function (e, t) {
                      e || !t.isDirectory() ? a(r, o) : a(null, o);
                    });
                }
              });
          }
          (t.exports = h.mkdirp = h.mkdirP = h),
            (h.sync = function e(r, n, i) {
              (n && 'object' == typeof n) || (n = { mode: n });
              var t = n.mode,
                o = n.fs || c;
              void 0 === t && (t = f & ~u.umask()),
                (i = i || null),
                (r = l.resolve(r));
              try {
                o.mkdirSync(r, t), (i = i || r);
              } catch (t) {
                switch (t.code) {
                  case 'ENOENT':
                    e(r, n, (i = e(l.dirname(r), n, i)));
                    break;
                  default:
                    var s;
                    try {
                      s = o.statSync(r);
                    } catch (e) {
                      throw t;
                    }
                    if (!s.isDirectory()) throw t;
                }
              }
              return i;
            });
        }.call(this, e('_process')));
      },
      { _process: 55, fs: 40, path: 40 },
    ],
    53: [
      function (e, t, r) {
        var n = 36e5,
          i = 864e5;
        function o(e, t, r) {
          if (!(e < t))
            return e < 1.5 * t
              ? Math.floor(e / t) + ' ' + r
              : Math.ceil(e / t) + ' ' + r + 's';
        }
        t.exports = function (e, t) {
          t = t || {};
          var r = typeof e;
          if ('string' == r && 0 < e.length)
            return (function (e) {
              if (100 < (e = String(e)).length) return;
              var t =
                /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                  e,
                );
              if (!t) return;
              var r = parseFloat(t[1]);
              switch ((t[2] || 'ms').toLowerCase()) {
                case 'years':
                case 'year':
                case 'yrs':
                case 'yr':
                case 'y':
                  return 315576e5 * r;
                case 'days':
                case 'day':
                case 'd':
                  return r * i;
                case 'hours':
                case 'hour':
                case 'hrs':
                case 'hr':
                case 'h':
                  return r * n;
                case 'minutes':
                case 'minute':
                case 'mins':
                case 'min':
                case 'm':
                  return 6e4 * r;
                case 'seconds':
                case 'second':
                case 'secs':
                case 'sec':
                case 's':
                  return 1e3 * r;
                case 'milliseconds':
                case 'millisecond':
                case 'msecs':
                case 'msec':
                case 'ms':
                  return r;
                default:
                  return;
              }
            })(e);
          if ('number' == r && !1 === isNaN(e))
            return t.long
              ? (function (e) {
                  return (
                    o(e, i, 'day') ||
                    o(e, n, 'hour') ||
                    o(e, 6e4, 'minute') ||
                    o(e, 1e3, 'second') ||
                    e + ' ms'
                  );
                })(e)
              : (function (e) {
                  if (i <= e) return Math.round(e / i) + 'd';
                  if (n <= e) return Math.round(e / n) + 'h';
                  if (6e4 <= e) return Math.round(e / 6e4) + 'm';
                  if (1e3 <= e) return Math.round(e / 1e3) + 's';
                  return e + 'ms';
                })(e);
          throw new Error(
            'val is not a non-empty string or a valid number. val=' +
              JSON.stringify(e),
          );
        };
      },
      {},
    ],
    54: [
      function (e, t, r) {
        (function (a) {
          'use strict';
          !a.version ||
          0 === a.version.indexOf('v0.') ||
          (0 === a.version.indexOf('v1.') && 0 !== a.version.indexOf('v1.8.'))
            ? (t.exports = function (e, t, r, n) {
                if ('function' != typeof e)
                  throw new TypeError('"callback" argument must be a function');
                var i,
                  o,
                  s = arguments.length;
                switch (s) {
                  case 0:
                  case 1:
                    return a.nextTick(e);
                  case 2:
                    return a.nextTick(function () {
                      e.call(null, t);
                    });
                  case 3:
                    return a.nextTick(function () {
                      e.call(null, t, r);
                    });
                  case 4:
                    return a.nextTick(function () {
                      e.call(null, t, r, n);
                    });
                  default:
                    for (i = new Array(s - 1), o = 0; o < i.length; )
                      i[o++] = arguments[o];
                    return a.nextTick(function () {
                      e.apply(null, i);
                    });
                }
              })
            : (t.exports = a.nextTick);
        }.call(this, e('_process')));
      },
      { _process: 55 },
    ],
    55: [
      function (e, t, r) {
        var n,
          i,
          o = (t.exports = {});
        function s() {
          throw new Error('setTimeout has not been defined');
        }
        function a() {
          throw new Error('clearTimeout has not been defined');
        }
        function u(t) {
          if (n === setTimeout) return setTimeout(t, 0);
          if ((n === s || !n) && setTimeout)
            return (n = setTimeout), setTimeout(t, 0);
          try {
            return n(t, 0);
          } catch (e) {
            try {
              return n.call(null, t, 0);
            } catch (e) {
              return n.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            n = 'function' == typeof setTimeout ? setTimeout : s;
          } catch (e) {
            n = s;
          }
          try {
            i = 'function' == typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            i = a;
          }
        })();
        var l,
          c = [],
          f = !1,
          h = -1;
        function p() {
          f &&
            l &&
            ((f = !1),
            l.length ? (c = l.concat(c)) : (h = -1),
            c.length && d());
        }
        function d() {
          if (!f) {
            var e = u(p);
            f = !0;
            for (var t = c.length; t; ) {
              for (l = c, c = []; ++h < t; ) l && l[h].run();
              (h = -1), (t = c.length);
            }
            (l = null),
              (f = !1),
              (function (t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === a || !i) && clearTimeout)
                  return (i = clearTimeout), clearTimeout(t);
                try {
                  i(t);
                } catch (e) {
                  try {
                    return i.call(null, t);
                  } catch (e) {
                    return i.call(this, t);
                  }
                }
              })(e);
          }
        }
        function g(e, t) {
          (this.fun = e), (this.array = t);
        }
        function m() {}
        (o.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
          c.push(new g(e, t)), 1 !== c.length || f || u(d);
        }),
          (g.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = 'browser'),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ''),
          (o.versions = {}),
          (o.on = m),
          (o.addListener = m),
          (o.once = m),
          (o.off = m),
          (o.removeListener = m),
          (o.removeAllListeners = m),
          (o.emit = m),
          (o.prependListener = m),
          (o.prependOnceListener = m),
          (o.listeners = function (e) {
            return [];
          }),
          (o.binding = function (e) {
            throw new Error('process.binding is not supported');
          }),
          (o.cwd = function () {
            return '/';
          }),
          (o.chdir = function (e) {
            throw new Error('process.chdir is not supported');
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {},
    ],
    56: [
      function (e, t, r) {
        t.exports = e('./lib/_stream_duplex.js');
      },
      { './lib/_stream_duplex.js': 57 },
    ],
    57: [
      function (e, t, r) {
        'use strict';
        var n = e('process-nextick-args'),
          i =
            Object.keys ||
            function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return t;
            };
        t.exports = f;
        var o = e('core-util-is');
        o.inherits = e('inherits');
        var s = e('./_stream_readable'),
          a = e('./_stream_writable');
        o.inherits(f, s);
        for (var u = i(a.prototype), l = 0; l < u.length; l++) {
          var c = u[l];
          f.prototype[c] || (f.prototype[c] = a.prototype[c]);
        }
        function f(e) {
          if (!(this instanceof f)) return new f(e);
          s.call(this, e),
            a.call(this, e),
            e && !1 === e.readable && (this.readable = !1),
            e && !1 === e.writable && (this.writable = !1),
            (this.allowHalfOpen = !0),
            e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
            this.once('end', h);
        }
        function h() {
          this.allowHalfOpen || this._writableState.ended || n(p, this);
        }
        function p(e) {
          e.end();
        }
        Object.defineProperty(f.prototype, 'destroyed', {
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        }),
          (f.prototype._destroy = function (e, t) {
            this.push(null), this.end(), n(t, e);
          });
      },
      {
        './_stream_readable': 59,
        './_stream_writable': 61,
        'core-util-is': 41,
        inherits: 49,
        'process-nextick-args': 54,
      },
    ],
    58: [
      function (e, t, r) {
        'use strict';
        t.exports = o;
        var n = e('./_stream_transform'),
          i = e('core-util-is');
        function o(e) {
          if (!(this instanceof o)) return new o(e);
          n.call(this, e);
        }
        (i.inherits = e('inherits')),
          i.inherits(o, n),
          (o.prototype._transform = function (e, t, r) {
            r(null, e);
          });
      },
      { './_stream_transform': 60, 'core-util-is': 41, inherits: 49 },
    ],
    59: [
      function (F, B, e) {
        (function (g, e) {
          'use strict';
          var m = F('process-nextick-args');
          B.exports = h;
          var i,
            b = F('isarray');
          h.ReadableState = f;
          function y(e, t) {
            return e.listeners(t).length;
          }
          F('events').EventEmitter;
          var o = F('./internal/streams/stream'),
            a = F('safe-buffer').Buffer,
            u = e.Uint8Array || function () {};
          var t = F('core-util-is');
          t.inherits = F('inherits');
          var r = F('util'),
            v = void 0;
          v = r && r.debuglog ? r.debuglog('stream') : function () {};
          var s,
            l = F('./internal/streams/BufferList'),
            n = F('./internal/streams/destroy');
          t.inherits(h, o);
          var c = ['error', 'close', 'destroy', 'pause', 'resume'];
          function f(e, t) {
            (i = i || F('./_stream_duplex')),
              (e = e || {}),
              (this.objectMode = !!e.objectMode),
              t instanceof i &&
                (this.objectMode = this.objectMode || !!e.readableObjectMode);
            var r = e.highWaterMark,
              n = this.objectMode ? 16 : 16384;
            (this.highWaterMark = r || 0 === r ? r : n),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.buffer = new l()),
              (this.length = 0),
              (this.pipes = null),
              (this.pipesCount = 0),
              (this.flowing = null),
              (this.ended = !1),
              (this.endEmitted = !1),
              (this.reading = !1),
              (this.sync = !0),
              (this.needReadable = !1),
              (this.emittedReadable = !1),
              (this.readableListening = !1),
              (this.resumeScheduled = !1),
              (this.destroyed = !1),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.awaitDrain = 0),
              (this.readingMore = !1),
              (this.decoder = null),
              (this.encoding = null),
              e.encoding &&
                ((s = s || F('string_decoder/').StringDecoder),
                (this.decoder = new s(e.encoding)),
                (this.encoding = e.encoding));
          }
          function h(e) {
            if (((i = i || F('./_stream_duplex')), !(this instanceof h)))
              return new h(e);
            (this._readableState = new f(e, this)),
              (this.readable = !0),
              e &&
                ('function' == typeof e.read && (this._read = e.read),
                'function' == typeof e.destroy && (this._destroy = e.destroy)),
              o.call(this);
          }
          function p(e, t, r, n, i) {
            var o,
              s = e._readableState;
            null === t
              ? ((s.reading = !1),
                (function (e, t) {
                  if (t.ended) return;
                  if (t.decoder) {
                    var r = t.decoder.end();
                    r &&
                      r.length &&
                      (t.buffer.push(r),
                      (t.length += t.objectMode ? 1 : r.length));
                  }
                  (t.ended = !0), _(e);
                })(e, s))
              : (i ||
                  (o = (function (e, t) {
                    var r;
                    (function (e) {
                      return a.isBuffer(e) || e instanceof u;
                    })(t) ||
                      'string' == typeof t ||
                      void 0 === t ||
                      e.objectMode ||
                      (r = new TypeError('Invalid non-string/buffer chunk'));
                    return r;
                  })(s, t)),
                o
                  ? e.emit('error', o)
                  : s.objectMode || (t && 0 < t.length)
                  ? ('string' == typeof t ||
                      s.objectMode ||
                      Object.getPrototypeOf(t) === a.prototype ||
                      (t = (function (e) {
                        return a.from(e);
                      })(t)),
                    n
                      ? s.endEmitted
                        ? e.emit(
                            'error',
                            new Error('stream.unshift() after end event'),
                          )
                        : d(e, s, t, !0)
                      : s.ended
                      ? e.emit('error', new Error('stream.push() after EOF'))
                      : ((s.reading = !1),
                        s.decoder && !r
                          ? ((t = s.decoder.write(t)),
                            s.objectMode || 0 !== t.length
                              ? d(e, s, t, !1)
                              : S(e, s))
                          : d(e, s, t, !1)))
                  : n || (s.reading = !1));
            return (function (e) {
              return (
                !e.ended &&
                (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
              );
            })(s);
          }
          function d(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync
              ? (e.emit('data', r), e.read(0))
              : ((t.length += t.objectMode ? 1 : r.length),
                n ? t.buffer.unshift(r) : t.buffer.push(r),
                t.needReadable && _(e)),
              S(e, t);
          }
          Object.defineProperty(h.prototype, 'destroyed', {
            get: function () {
              return (
                void 0 !== this._readableState && this._readableState.destroyed
              );
            },
            set: function (e) {
              this._readableState && (this._readableState.destroyed = e);
            },
          }),
            (h.prototype.destroy = n.destroy),
            (h.prototype._undestroy = n.undestroy),
            (h.prototype._destroy = function (e, t) {
              this.push(null), t(e);
            }),
            (h.prototype.push = function (e, t) {
              var r,
                n = this._readableState;
              return (
                n.objectMode
                  ? (r = !0)
                  : 'string' == typeof e &&
                    ((t = t || n.defaultEncoding) !== n.encoding &&
                      ((e = a.from(e, t)), (t = '')),
                    (r = !0)),
                p(this, e, t, !1, r)
              );
            }),
            (h.prototype.unshift = function (e) {
              return p(this, e, null, !0, !1);
            }),
            (h.prototype.isPaused = function () {
              return !1 === this._readableState.flowing;
            }),
            (h.prototype.setEncoding = function (e) {
              return (
                (s = s || F('string_decoder/').StringDecoder),
                (this._readableState.decoder = new s(e)),
                (this._readableState.encoding = e),
                this
              );
            });
          var w = 8388608;
          function E(e, t) {
            return e <= 0 || (0 === t.length && t.ended)
              ? 0
              : t.objectMode
              ? 1
              : e != e
              ? t.flowing && t.length
                ? t.buffer.head.data.length
                : t.length
              : (e > t.highWaterMark &&
                  (t.highWaterMark = (function (e) {
                    return (
                      w <= e
                        ? (e = w)
                        : (e--,
                          (e |= e >>> 1),
                          (e |= e >>> 2),
                          (e |= e >>> 4),
                          (e |= e >>> 8),
                          (e |= e >>> 16),
                          e++),
                      e
                    );
                  })(e)),
                e <= t.length
                  ? e
                  : t.ended
                  ? t.length
                  : ((t.needReadable = !0), 0));
          }
          function _(e) {
            var t = e._readableState;
            (t.needReadable = !1),
              t.emittedReadable ||
                (v('emitReadable', t.flowing),
                (t.emittedReadable = !0),
                t.sync ? m(x, e) : x(e));
          }
          function x(e) {
            v('emit readable'), e.emit('readable'), D(e);
          }
          function S(e, t) {
            t.readingMore || ((t.readingMore = !0), m(k, e, t));
          }
          function k(e, t) {
            for (
              var r = t.length;
              !t.reading &&
              !t.flowing &&
              !t.ended &&
              t.length < t.highWaterMark &&
              (v('maybeReadMore read 0'), e.read(0), r !== t.length);

            )
              r = t.length;
            t.readingMore = !1;
          }
          function A(e) {
            v('readable nexttick read 0'), e.read(0);
          }
          function C(e, t) {
            t.reading || (v('resume read 0'), e.read(0)),
              (t.resumeScheduled = !1),
              (t.awaitDrain = 0),
              e.emit('resume'),
              D(e),
              t.flowing && !t.reading && e.read(0);
          }
          function D(e) {
            var t = e._readableState;
            for (v('flow', t.flowing); t.flowing && null !== e.read(); );
          }
          function T(e, t) {
            return 0 === t.length
              ? null
              : (t.objectMode
                  ? (r = t.buffer.shift())
                  : !e || e >= t.length
                  ? ((r = t.decoder
                      ? t.buffer.join('')
                      : 1 === t.buffer.length
                      ? t.buffer.head.data
                      : t.buffer.concat(t.length)),
                    t.buffer.clear())
                  : (r = (function (e, t, r) {
                      var n;
                      e < t.head.data.length
                        ? ((n = t.head.data.slice(0, e)),
                          (t.head.data = t.head.data.slice(e)))
                        : (n =
                            e === t.head.data.length
                              ? t.shift()
                              : r
                              ? (function (e, t) {
                                  var r = t.head,
                                    n = 1,
                                    i = r.data;
                                  e -= i.length;
                                  for (; (r = r.next); ) {
                                    var o = r.data,
                                      s = e > o.length ? o.length : e;
                                    if (
                                      (s === o.length
                                        ? (i += o)
                                        : (i += o.slice(0, e)),
                                      0 === (e -= s))
                                    ) {
                                      s === o.length
                                        ? (++n,
                                          r.next
                                            ? (t.head = r.next)
                                            : (t.head = t.tail = null))
                                        : ((t.head = r).data = o.slice(s));
                                      break;
                                    }
                                    ++n;
                                  }
                                  return (t.length -= n), i;
                                })(e, t)
                              : (function (e, t) {
                                  var r = a.allocUnsafe(e),
                                    n = t.head,
                                    i = 1;
                                  n.data.copy(r), (e -= n.data.length);
                                  for (; (n = n.next); ) {
                                    var o = n.data,
                                      s = e > o.length ? o.length : e;
                                    if (
                                      (o.copy(r, r.length - e, 0, s),
                                      0 === (e -= s))
                                    ) {
                                      s === o.length
                                        ? (++i,
                                          n.next
                                            ? (t.head = n.next)
                                            : (t.head = t.tail = null))
                                        : ((t.head = n).data = o.slice(s));
                                      break;
                                    }
                                    ++i;
                                  }
                                  return (t.length -= i), r;
                                })(e, t));
                      return n;
                    })(e, t.buffer, t.decoder)),
                r);
            var r;
          }
          function L(e) {
            var t = e._readableState;
            if (0 < t.length)
              throw new Error('"endReadable()" called on non-empty stream');
            t.endEmitted || ((t.ended = !0), m(q, t, e));
          }
          function q(e, t) {
            e.endEmitted ||
              0 !== e.length ||
              ((e.endEmitted = !0), (t.readable = !1), t.emit('end'));
          }
          function R(e, t) {
            for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
            return -1;
          }
          (h.prototype.read = function (e) {
            v('read', e), (e = parseInt(e, 10));
            var t = this._readableState,
              r = e;
            if (
              (0 !== e && (t.emittedReadable = !1),
              0 === e &&
                t.needReadable &&
                (t.length >= t.highWaterMark || t.ended))
            )
              return (
                v('read: emitReadable', t.length, t.ended),
                0 === t.length && t.ended ? L(this) : _(this),
                null
              );
            if (0 === (e = E(e, t)) && t.ended)
              return 0 === t.length && L(this), null;
            var n,
              i = t.needReadable;
            return (
              v('need readable', i),
              (0 === t.length || t.length - e < t.highWaterMark) &&
                v('length less than watermark', (i = !0)),
              t.ended || t.reading
                ? v('reading or ended', (i = !1))
                : i &&
                  (v('do read'),
                  (t.reading = !0),
                  (t.sync = !0),
                  0 === t.length && (t.needReadable = !0),
                  this._read(t.highWaterMark),
                  (t.sync = !1),
                  t.reading || (e = E(r, t))),
              null === (n = 0 < e ? T(e, t) : null)
                ? ((t.needReadable = !0), (e = 0))
                : (t.length -= e),
              0 === t.length &&
                (t.ended || (t.needReadable = !0),
                r !== e && t.ended && L(this)),
              null !== n && this.emit('data', n),
              n
            );
          }),
            (h.prototype._read = function (e) {
              this.emit('error', new Error('_read() is not implemented'));
            }),
            (h.prototype.pipe = function (r, e) {
              var n = this,
                i = this._readableState;
              switch (i.pipesCount) {
                case 0:
                  i.pipes = r;
                  break;
                case 1:
                  i.pipes = [i.pipes, r];
                  break;
                default:
                  i.pipes.push(r);
              }
              (i.pipesCount += 1), v('pipe count=%d opts=%j', i.pipesCount, e);
              var t =
                (!e || !1 !== e.end) && r !== g.stdout && r !== g.stderr
                  ? s
                  : d;
              function o(e, t) {
                v('onunpipe'),
                  e === n &&
                    t &&
                    !1 === t.hasUnpiped &&
                    ((t.hasUnpiped = !0),
                    v('cleanup'),
                    r.removeListener('close', h),
                    r.removeListener('finish', p),
                    r.removeListener('drain', a),
                    r.removeListener('error', f),
                    r.removeListener('unpipe', o),
                    n.removeListener('end', s),
                    n.removeListener('end', d),
                    n.removeListener('data', c),
                    (u = !0),
                    !i.awaitDrain ||
                      (r._writableState && !r._writableState.needDrain) ||
                      a());
              }
              function s() {
                v('onend'), r.end();
              }
              i.endEmitted ? m(t) : n.once('end', t), r.on('unpipe', o);
              var a = (function (t) {
                return function () {
                  var e = t._readableState;
                  v('pipeOnDrain', e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain &&
                      y(t, 'data') &&
                      ((e.flowing = !0), D(t));
                };
              })(n);
              r.on('drain', a);
              var u = !1;
              var l = !1;
              function c(e) {
                v('ondata'),
                  (l = !1) !== r.write(e) ||
                    l ||
                    (((1 === i.pipesCount && i.pipes === r) ||
                      (1 < i.pipesCount && -1 !== R(i.pipes, r))) &&
                      !u &&
                      (v(
                        'false write response, pause',
                        n._readableState.awaitDrain,
                      ),
                      n._readableState.awaitDrain++,
                      (l = !0)),
                    n.pause());
              }
              function f(e) {
                v('onerror', e),
                  d(),
                  r.removeListener('error', f),
                  0 === y(r, 'error') && r.emit('error', e);
              }
              function h() {
                r.removeListener('finish', p), d();
              }
              function p() {
                v('onfinish'), r.removeListener('close', h), d();
              }
              function d() {
                v('unpipe'), n.unpipe(r);
              }
              return (
                n.on('data', c),
                (function (e, t, r) {
                  if ('function' == typeof e.prependListener)
                    return e.prependListener(t, r);
                  e._events && e._events[t]
                    ? b(e._events[t])
                      ? e._events[t].unshift(r)
                      : (e._events[t] = [r, e._events[t]])
                    : e.on(t, r);
                })(r, 'error', f),
                r.once('close', h),
                r.once('finish', p),
                r.emit('pipe', n),
                i.flowing || (v('pipe resume'), n.resume()),
                r
              );
            }),
            (h.prototype.unpipe = function (e) {
              var t = this._readableState,
                r = { hasUnpiped: !1 };
              if (0 === t.pipesCount) return this;
              if (1 === t.pipesCount)
                return (
                  (e && e !== t.pipes) ||
                    ((e = e || t.pipes),
                    (t.pipes = null),
                    (t.pipesCount = 0),
                    (t.flowing = !1),
                    e && e.emit('unpipe', this, r)),
                  this
                );
              if (!e) {
                var n = t.pipes,
                  i = t.pipesCount;
                (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r);
                return this;
              }
              var s = R(t.pipes, e);
              return (
                -1 === s ||
                  (t.pipes.splice(s, 1),
                  (t.pipesCount -= 1),
                  1 === t.pipesCount && (t.pipes = t.pipes[0]),
                  e.emit('unpipe', this, r)),
                this
              );
            }),
            (h.prototype.addListener = h.prototype.on =
              function (e, t) {
                var r = o.prototype.on.call(this, e, t);
                if ('data' === e)
                  !1 !== this._readableState.flowing && this.resume();
                else if ('readable' === e) {
                  var n = this._readableState;
                  n.endEmitted ||
                    n.readableListening ||
                    ((n.readableListening = n.needReadable = !0),
                    (n.emittedReadable = !1),
                    n.reading ? n.length && _(this) : m(A, this));
                }
                return r;
              }),
            (h.prototype.resume = function () {
              var e = this._readableState;
              return (
                e.flowing ||
                  (v('resume'),
                  (e.flowing = !0),
                  (function (e, t) {
                    t.resumeScheduled || ((t.resumeScheduled = !0), m(C, e, t));
                  })(this, e)),
                this
              );
            }),
            (h.prototype.pause = function () {
              return (
                v('call pause flowing=%j', this._readableState.flowing),
                !1 !== this._readableState.flowing &&
                  (v('pause'),
                  (this._readableState.flowing = !1),
                  this.emit('pause')),
                this
              );
            }),
            (h.prototype.wrap = function (t) {
              var r = this._readableState,
                n = !1,
                i = this;
              for (var e in (t.on('end', function () {
                if ((v('wrapped end'), r.decoder && !r.ended)) {
                  var e = r.decoder.end();
                  e && e.length && i.push(e);
                }
                i.push(null);
              }),
              t.on('data', function (e) {
                v('wrapped data'),
                  r.decoder && (e = r.decoder.write(e)),
                  (r.objectMode && null == e) ||
                    ((r.objectMode || (e && e.length)) &&
                      (i.push(e) || ((n = !0), t.pause())));
              }),
              t))
                void 0 === this[e] &&
                  'function' == typeof t[e] &&
                  (this[e] = (function (e) {
                    return function () {
                      return t[e].apply(t, arguments);
                    };
                  })(e));
              for (var o = 0; o < c.length; o++)
                t.on(c[o], i.emit.bind(i, c[o]));
              return (
                (i._read = function (e) {
                  v('wrapped _read', e), n && ((n = !1), t.resume());
                }),
                i
              );
            }),
            (h._fromList = T);
        }.call(
          this,
          F('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        './_stream_duplex': 57,
        './internal/streams/BufferList': 62,
        './internal/streams/destroy': 63,
        './internal/streams/stream': 64,
        _process: 55,
        'core-util-is': 41,
        events: 46,
        inherits: 49,
        isarray: 51,
        'process-nextick-args': 54,
        'safe-buffer': 69,
        'string_decoder/': 71,
        util: 38,
      },
    ],
    60: [
      function (e, t, r) {
        'use strict';
        t.exports = s;
        var n = e('./_stream_duplex'),
          i = e('core-util-is');
        function o(r) {
          (this.afterTransform = function (e, t) {
            return (function (e, t, r) {
              var n = e._transformState;
              n.transforming = !1;
              var i = n.writecb;
              if (!i)
                return e.emit(
                  'error',
                  new Error('write callback called multiple times'),
                );
              (n.writechunk = null), (n.writecb = null) != r && e.push(r);
              i(t);
              var o = e._readableState;
              (o.reading = !1),
                (o.needReadable || o.length < o.highWaterMark) &&
                  e._read(o.highWaterMark);
            })(r, e, t);
          }),
            (this.needTransform = !1),
            (this.transforming = !1),
            (this.writecb = null),
            (this.writechunk = null),
            (this.writeencoding = null);
        }
        function s(e) {
          if (!(this instanceof s)) return new s(e);
          n.call(this, e), (this._transformState = new o(this));
          var r = this;
          (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            e &&
              ('function' == typeof e.transform &&
                (this._transform = e.transform),
              'function' == typeof e.flush && (this._flush = e.flush)),
            this.once('prefinish', function () {
              'function' == typeof this._flush
                ? this._flush(function (e, t) {
                    a(r, e, t);
                  })
                : a(r);
            });
        }
        function a(e, t, r) {
          if (t) return e.emit('error', t);
          null != r && e.push(r);
          var n = e._writableState,
            i = e._transformState;
          if (n.length)
            throw new Error('Calling transform done when ws.length != 0');
          if (i.transforming)
            throw new Error('Calling transform done when still transforming');
          return e.push(null);
        }
        (i.inherits = e('inherits')),
          i.inherits(s, n),
          (s.prototype.push = function (e, t) {
            return (
              (this._transformState.needTransform = !1),
              n.prototype.push.call(this, e, t)
            );
          }),
          (s.prototype._transform = function (e, t, r) {
            throw new Error('_transform() is not implemented');
          }),
          (s.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (
              ((n.writecb = r),
              (n.writechunk = e),
              (n.writeencoding = t),
              !n.transforming)
            ) {
              var i = this._readableState;
              (n.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (s.prototype._read = function (e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming
              ? ((t.transforming = !0),
                this._transform(
                  t.writechunk,
                  t.writeencoding,
                  t.afterTransform,
                ))
              : (t.needTransform = !0);
          }),
          (s.prototype._destroy = function (e, t) {
            var r = this;
            n.prototype._destroy.call(this, e, function (e) {
              t(e), r.emit('close');
            });
          });
      },
      { './_stream_duplex': 57, 'core-util-is': 41, inherits: 49 },
    ],
    61: [
      function (_, x, e) {
        (function (e, t) {
          'use strict';
          var s = _('process-nextick-args');
          function f(e) {
            var t = this;
            (this.next = null),
              (this.entry = null),
              (this.finish = function () {
                !(function (e, t, r) {
                  var n = e.entry;
                  e.entry = null;
                  for (; n; ) {
                    var i = n.callback;
                    t.pendingcb--, i(r), (n = n.next);
                  }
                  t.corkedRequestsFree
                    ? (t.corkedRequestsFree.next = e)
                    : (t.corkedRequestsFree = e);
                })(t, e);
              });
          }
          x.exports = g;
          var o,
            a =
              !e.browser &&
              -1 < ['v0.10', 'v0.9.'].indexOf(e.version.slice(0, 5))
                ? setImmediate
                : s;
          g.WritableState = d;
          var r = _('core-util-is');
          r.inherits = _('inherits');
          var n = { deprecate: _('util-deprecate') },
            i = _('./internal/streams/stream'),
            c = _('safe-buffer').Buffer,
            u = t.Uint8Array || function () {};
          var l,
            h = _('./internal/streams/destroy');
          function p() {}
          function d(e, t) {
            (o = o || _('./_stream_duplex')),
              (e = e || {}),
              (this.objectMode = !!e.objectMode),
              t instanceof o &&
                (this.objectMode = this.objectMode || !!e.writableObjectMode);
            var r = e.highWaterMark,
              n = this.objectMode ? 16 : 16384;
            (this.highWaterMark = r || 0 === r ? r : n),
              (this.highWaterMark = Math.floor(this.highWaterMark)),
              (this.finalCalled = !1),
              (this.needDrain = !1),
              (this.ending = !1),
              (this.ended = !1),
              (this.finished = !1);
            var i = (this.destroyed = !1) === e.decodeStrings;
            (this.decodeStrings = !i),
              (this.defaultEncoding = e.defaultEncoding || 'utf8'),
              (this.length = 0),
              (this.writing = !1),
              (this.corked = 0),
              (this.sync = !0),
              (this.bufferProcessing = !1),
              (this.onwrite = function (e) {
                !(function (e, t) {
                  var r = e._writableState,
                    n = r.sync,
                    i = r.writecb;
                  if (
                    ((function (e) {
                      (e.writing = !1),
                        (e.writecb = null),
                        (e.length -= e.writelen),
                        (e.writelen = 0);
                    })(r),
                    t)
                  )
                    !(function (e, t, r, n, i) {
                      --t.pendingcb,
                        r
                          ? (s(i, n),
                            s(E, e, t),
                            (e._writableState.errorEmitted = !0),
                            e.emit('error', n))
                          : (i(n),
                            (e._writableState.errorEmitted = !0),
                            e.emit('error', n),
                            E(e, t));
                    })(e, r, n, t, i);
                  else {
                    var o = v(r);
                    o ||
                      r.corked ||
                      r.bufferProcessing ||
                      !r.bufferedRequest ||
                      y(e, r),
                      n ? a(b, e, r, o, i) : b(e, r, o, i);
                  }
                })(t, e);
              }),
              (this.writecb = null),
              (this.writelen = 0),
              (this.bufferedRequest = null),
              (this.lastBufferedRequest = null),
              (this.pendingcb = 0),
              (this.prefinished = !1),
              (this.errorEmitted = !1),
              (this.bufferedRequestCount = 0),
              (this.corkedRequestsFree = new f(this));
          }
          function g(e) {
            if (
              ((o = o || _('./_stream_duplex')),
              !(l.call(g, this) || this instanceof o))
            )
              return new g(e);
            (this._writableState = new d(e, this)),
              (this.writable = !0),
              e &&
                ('function' == typeof e.write && (this._write = e.write),
                'function' == typeof e.writev && (this._writev = e.writev),
                'function' == typeof e.destroy && (this._destroy = e.destroy),
                'function' == typeof e.final && (this._final = e.final)),
              i.call(this);
          }
          function m(e, t, r, n, i, o, s) {
            (t.writelen = n),
              (t.writecb = s),
              (t.writing = !0),
              (t.sync = !0),
              r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
              (t.sync = !1);
          }
          function b(e, t, r, n) {
            r ||
              (function (e, t) {
                0 === t.length &&
                  t.needDrain &&
                  ((t.needDrain = !1), e.emit('drain'));
              })(e, t),
              t.pendingcb--,
              n(),
              E(e, t);
          }
          function y(e, t) {
            t.bufferProcessing = !0;
            var r = t.bufferedRequest;
            if (e._writev && r && r.next) {
              var n = t.bufferedRequestCount,
                i = new Array(n),
                o = t.corkedRequestsFree;
              o.entry = r;
              for (var s = 0, a = !0; r; )
                (i[s] = r).isBuf || (a = !1), (r = r.next), (s += 1);
              (i.allBuffers = a),
                m(e, t, !0, t.length, i, '', o.finish),
                t.pendingcb++,
                (t.lastBufferedRequest = null),
                o.next
                  ? ((t.corkedRequestsFree = o.next), (o.next = null))
                  : (t.corkedRequestsFree = new f(t));
            } else {
              for (; r; ) {
                var u = r.chunk,
                  l = r.encoding,
                  c = r.callback;
                if (
                  (m(e, t, !1, t.objectMode ? 1 : u.length, u, l, c),
                  (r = r.next),
                  t.writing)
                )
                  break;
              }
              null === r && (t.lastBufferedRequest = null);
            }
            (t.bufferedRequestCount = 0),
              (t.bufferedRequest = r),
              (t.bufferProcessing = !1);
          }
          function v(e) {
            return (
              e.ending &&
              0 === e.length &&
              null === e.bufferedRequest &&
              !e.finished &&
              !e.writing
            );
          }
          function w(t, r) {
            t._final(function (e) {
              r.pendingcb--,
                e && t.emit('error', e),
                (r.prefinished = !0),
                t.emit('prefinish'),
                E(t, r);
            });
          }
          function E(e, t) {
            var r = v(t);
            return (
              r &&
                ((function (e, t) {
                  t.prefinished ||
                    t.finalCalled ||
                    ('function' == typeof e._final
                      ? (t.pendingcb++, (t.finalCalled = !0), s(w, e, t))
                      : ((t.prefinished = !0), e.emit('prefinish')));
                })(e, t),
                0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
              r
            );
          }
          r.inherits(g, i),
            (d.prototype.getBuffer = function () {
              for (var e = this.bufferedRequest, t = []; e; )
                t.push(e), (e = e.next);
              return t;
            }),
            (function () {
              try {
                Object.defineProperty(d.prototype, 'buffer', {
                  get: n.deprecate(
                    function () {
                      return this.getBuffer();
                    },
                    '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                    'DEP0003',
                  ),
                });
              } catch (e) {}
            })(),
            'function' == typeof Symbol &&
            Symbol.hasInstance &&
            'function' == typeof Function.prototype[Symbol.hasInstance]
              ? ((l = Function.prototype[Symbol.hasInstance]),
                Object.defineProperty(g, Symbol.hasInstance, {
                  value: function (e) {
                    return (
                      !!l.call(this, e) || (e && e._writableState instanceof d)
                    );
                  },
                }))
              : (l = function (e) {
                  return e instanceof this;
                }),
            (g.prototype.pipe = function () {
              this.emit('error', new Error('Cannot pipe, not readable'));
            }),
            (g.prototype.write = function (e, t, r) {
              var n = this._writableState,
                i = !1,
                o =
                  (function (e) {
                    return c.isBuffer(e) || e instanceof u;
                  })(e) && !n.objectMode;
              return (
                o &&
                  !c.isBuffer(e) &&
                  (e = (function (e) {
                    return c.from(e);
                  })(e)),
                'function' == typeof t && ((r = t), (t = null)),
                (t = o ? 'buffer' : t || n.defaultEncoding),
                'function' != typeof r && (r = p),
                n.ended
                  ? (function (e, t) {
                      var r = new Error('write after end');
                      e.emit('error', r), s(t, r);
                    })(this, r)
                  : (o ||
                      (function (e, t, r, n) {
                        var i = !0,
                          o = !1;
                        return (
                          null === r
                            ? (o = new TypeError(
                                'May not write null values to stream',
                              ))
                            : 'string' == typeof r ||
                              void 0 === r ||
                              t.objectMode ||
                              (o = new TypeError(
                                'Invalid non-string/buffer chunk',
                              )),
                          o && (e.emit('error', o), s(n, o), (i = !1)),
                          i
                        );
                      })(this, n, e, r)) &&
                    (n.pendingcb++,
                    (i = (function (e, t, r, n, i, o) {
                      if (!r) {
                        var s = (function (e, t, r) {
                          e.objectMode ||
                            !1 === e.decodeStrings ||
                            'string' != typeof t ||
                            (t = c.from(t, r));
                          return t;
                        })(t, n, i);
                        n !== s && ((r = !0), (i = 'buffer'), (n = s));
                      }
                      var a = t.objectMode ? 1 : n.length;
                      t.length += a;
                      var u = t.length < t.highWaterMark;
                      u || (t.needDrain = !0);
                      if (t.writing || t.corked) {
                        var l = t.lastBufferedRequest;
                        (t.lastBufferedRequest = {
                          chunk: n,
                          encoding: i,
                          isBuf: r,
                          callback: o,
                          next: null,
                        }),
                          l
                            ? (l.next = t.lastBufferedRequest)
                            : (t.bufferedRequest = t.lastBufferedRequest),
                          (t.bufferedRequestCount += 1);
                      } else m(e, t, !1, a, n, i, o);
                      return u;
                    })(this, n, o, e, t, r))),
                i
              );
            }),
            (g.prototype.cork = function () {
              this._writableState.corked++;
            }),
            (g.prototype.uncork = function () {
              var e = this._writableState;
              e.corked &&
                (e.corked--,
                e.writing ||
                  e.corked ||
                  e.finished ||
                  e.bufferProcessing ||
                  !e.bufferedRequest ||
                  y(this, e));
            }),
            (g.prototype.setDefaultEncoding = function (e) {
              if (
                ('string' == typeof e && (e = e.toLowerCase()),
                !(
                  -1 <
                  [
                    'hex',
                    'utf8',
                    'utf-8',
                    'ascii',
                    'binary',
                    'base64',
                    'ucs2',
                    'ucs-2',
                    'utf16le',
                    'utf-16le',
                    'raw',
                  ].indexOf((e + '').toLowerCase())
                ))
              )
                throw new TypeError('Unknown encoding: ' + e);
              return (this._writableState.defaultEncoding = e), this;
            }),
            (g.prototype._write = function (e, t, r) {
              r(new Error('_write() is not implemented'));
            }),
            (g.prototype._writev = null),
            (g.prototype.end = function (e, t, r) {
              var n = this._writableState;
              'function' == typeof e
                ? ((r = e), (t = e = null))
                : 'function' == typeof t && ((r = t), (t = null)),
                null != e && this.write(e, t),
                n.corked && ((n.corked = 1), this.uncork()),
                n.ending ||
                  n.finished ||
                  (function (e, t, r) {
                    (t.ending = !0),
                      E(e, t),
                      r && (t.finished ? s(r) : e.once('finish', r));
                    (t.ended = !0), (e.writable = !1);
                  })(this, n, r);
            }),
            Object.defineProperty(g.prototype, 'destroyed', {
              get: function () {
                return (
                  void 0 !== this._writableState &&
                  this._writableState.destroyed
                );
              },
              set: function (e) {
                this._writableState && (this._writableState.destroyed = e);
              },
            }),
            (g.prototype.destroy = h.destroy),
            (g.prototype._undestroy = h.undestroy),
            (g.prototype._destroy = function (e, t) {
              this.end(), t(e);
            });
        }.call(
          this,
          _('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {
        './_stream_duplex': 57,
        './internal/streams/destroy': 63,
        './internal/streams/stream': 64,
        _process: 55,
        'core-util-is': 41,
        inherits: 49,
        'process-nextick-args': 54,
        'safe-buffer': 69,
        'util-deprecate': 72,
      },
    ],
    62: [
      function (e, t, r) {
        'use strict';
        var a = e('safe-buffer').Buffer;
        function n() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, n),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        t.exports =
          ((n.prototype.push = function (e) {
            var t = { data: e, next: null };
            0 < this.length ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (n.prototype.unshift = function (e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t),
              (this.head = t),
              ++this.length;
          }),
          (n.prototype.shift = function () {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (n.prototype.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (n.prototype.join = function (e) {
            if (0 === this.length) return '';
            for (var t = this.head, r = '' + t.data; (t = t.next); )
              r += e + t.data;
            return r;
          }),
          (n.prototype.concat = function (e) {
            if (0 === this.length) return a.alloc(0);
            if (1 === this.length) return this.head.data;
            for (
              var t, r, n, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0;
              o;

            )
              (t = o.data),
                (r = i),
                (n = s),
                t.copy(r, n),
                (s += o.data.length),
                (o = o.next);
            return i;
          }),
          n);
      },
      { 'safe-buffer': 69 },
    ],
    63: [
      function (e, t, r) {
        'use strict';
        var o = e('process-nextick-args');
        function s(e, t) {
          e.emit('error', t);
        }
        t.exports = {
          destroy: function (e, t) {
            var r = this,
              n = this._readableState && this._readableState.destroyed,
              i = this._writableState && this._writableState.destroyed;
            n || i
              ? t
                ? t(e)
                : !e ||
                  (this._writableState && this._writableState.errorEmitted) ||
                  o(s, this, e)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !t && e
                    ? (o(s, r, e),
                      r._writableState && (r._writableState.errorEmitted = !0))
                    : t && t(e);
                }));
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      },
      { 'process-nextick-args': 54 },
    ],
    64: [
      function (e, t, r) {
        t.exports = e('events').EventEmitter;
      },
      { events: 46 },
    ],
    65: [
      function (e, t, r) {
        t.exports = e('./readable').PassThrough;
      },
      { './readable': 66 },
    ],
    66: [
      function (e, t, r) {
        ((((r = t.exports = e('./lib/_stream_readable.js')).Stream =
          r).Readable = r).Writable = e('./lib/_stream_writable.js')),
          (r.Duplex = e('./lib/_stream_duplex.js')),
          (r.Transform = e('./lib/_stream_transform.js')),
          (r.PassThrough = e('./lib/_stream_passthrough.js'));
      },
      {
        './lib/_stream_duplex.js': 57,
        './lib/_stream_passthrough.js': 58,
        './lib/_stream_readable.js': 59,
        './lib/_stream_transform.js': 60,
        './lib/_stream_writable.js': 61,
      },
    ],
    67: [
      function (e, t, r) {
        t.exports = e('./readable').Transform;
      },
      { './readable': 66 },
    ],
    68: [
      function (e, t, r) {
        t.exports = e('./lib/_stream_writable.js');
      },
      { './lib/_stream_writable.js': 61 },
    ],
    69: [
      function (e, t, r) {
        var n = e('buffer'),
          i = n.Buffer;
        function o(e, t) {
          for (var r in e) t[r] = e[r];
        }
        function s(e, t, r) {
          return i(e, t, r);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (t.exports = n)
          : (o(n, r), (r.Buffer = s)),
          o(i, s),
          (s.from = function (e, t, r) {
            if ('number' == typeof e)
              throw new TypeError('Argument must not be a number');
            return i(e, t, r);
          }),
          (s.alloc = function (e, t, r) {
            if ('number' != typeof e)
              throw new TypeError('Argument must be a number');
            var n = i(e);
            return (
              void 0 !== t
                ? 'string' == typeof r
                  ? n.fill(t, r)
                  : n.fill(t)
                : n.fill(0),
              n
            );
          }),
          (s.allocUnsafe = function (e) {
            if ('number' != typeof e)
              throw new TypeError('Argument must be a number');
            return i(e);
          }),
          (s.allocUnsafeSlow = function (e) {
            if ('number' != typeof e)
              throw new TypeError('Argument must be a number');
            return n.SlowBuffer(e);
          });
      },
      { buffer: 'buffer' },
    ],
    70: [
      function (e, t, r) {
        t.exports = n;
        var c = e('events').EventEmitter;
        function n() {
          c.call(this);
        }
        e('inherits')(n, c),
          (n.Readable = e('readable-stream/readable.js')),
          (n.Writable = e('readable-stream/writable.js')),
          (n.Duplex = e('readable-stream/duplex.js')),
          (n.Transform = e('readable-stream/transform.js')),
          (n.PassThrough = e('readable-stream/passthrough.js')),
          ((n.Stream = n).prototype.pipe = function (t, e) {
            var r = this;
            function n(e) {
              t.writable && !1 === t.write(e) && r.pause && r.pause();
            }
            function i() {
              r.readable && r.resume && r.resume();
            }
            r.on('data', n),
              t.on('drain', i),
              t._isStdio ||
                (e && !1 === e.end) ||
                (r.on('end', s), r.on('close', a));
            var o = !1;
            function s() {
              o || ((o = !0), t.end());
            }
            function a() {
              o || ((o = !0), 'function' == typeof t.destroy && t.destroy());
            }
            function u(e) {
              if ((l(), 0 === c.listenerCount(this, 'error'))) throw e;
            }
            function l() {
              r.removeListener('data', n),
                t.removeListener('drain', i),
                r.removeListener('end', s),
                r.removeListener('close', a),
                r.removeListener('error', u),
                t.removeListener('error', u),
                r.removeListener('end', l),
                r.removeListener('close', l),
                t.removeListener('close', l);
            }
            return (
              r.on('error', u),
              t.on('error', u),
              r.on('end', l),
              r.on('close', l),
              t.on('close', l),
              t.emit('pipe', r),
              t
            );
          });
      },
      {
        events: 46,
        inherits: 49,
        'readable-stream/duplex.js': 56,
        'readable-stream/passthrough.js': 65,
        'readable-stream/readable.js': 66,
        'readable-stream/transform.js': 67,
        'readable-stream/writable.js': 68,
      },
    ],
    71: [
      function (e, t, r) {
        'use strict';
        var n = e('safe-buffer').Buffer,
          i =
            n.isEncoding ||
            function (e) {
              switch ((e = '' + e) && e.toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                case 'raw':
                  return !0;
                default:
                  return !1;
              }
            };
        function o(e) {
          var t = (function (e) {
            if (!e) return 'utf8';
            for (var t; ; )
              switch (e) {
                case 'utf8':
                case 'utf-8':
                  return 'utf8';
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 'utf16le';
                case 'latin1':
                case 'binary':
                  return 'latin1';
                case 'base64':
                case 'ascii':
                case 'hex':
                  return e;
                default:
                  if (t) return;
                  (e = ('' + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ('string' != typeof t && (n.isEncoding === i || !i(e)))
            throw new Error('Unknown encoding: ' + e);
          return t || e;
        }
        function s(e) {
          var t;
          switch (((this.encoding = o(e)), this.encoding)) {
            case 'utf16le':
              (this.text = l), (this.end = c), (t = 4);
              break;
            case 'utf8':
              (this.fillLast = u), (t = 4);
              break;
            case 'base64':
              (this.text = f), (this.end = h), (t = 3);
              break;
            default:
              return (this.write = p), void (this.end = d);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = n.allocUnsafe(t));
        }
        function a(e) {
          return e <= 127
            ? 0
            : e >> 5 == 6
            ? 2
            : e >> 4 == 14
            ? 3
            : e >> 3 == 30
            ? 4
            : -1;
        }
        function u(e) {
          var t = this.lastTotal - this.lastNeed,
            r = (function (e, t, r) {
              if (128 != (192 & t[0])) return (e.lastNeed = 0), '�'.repeat(r);
              if (1 < e.lastNeed && 1 < t.length) {
                if (128 != (192 & t[1]))
                  return (e.lastNeed = 1), '�'.repeat(r + 1);
                if (2 < e.lastNeed && 2 < t.length && 128 != (192 & t[2]))
                  return (e.lastNeed = 2), '�'.repeat(r + 2);
              }
            })(this, e, t);
          return void 0 !== r
            ? r
            : this.lastNeed <= e.length
            ? (e.copy(this.lastChar, t, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (e.copy(this.lastChar, t, 0, e.length),
              void (this.lastNeed -= e.length));
        }
        function l(e, t) {
          if ((e.length - t) % 2 != 0)
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = e[e.length - 1]),
              e.toString('utf16le', t, e.length - 1)
            );
          var r = e.toString('utf16le', t);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (55296 <= n && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        function c(e) {
          var t = e && e.length ? this.write(e) : '';
          if (this.lastNeed) {
            var r = this.lastTotal - this.lastNeed;
            return t + this.lastChar.toString('utf16le', 0, r);
          }
          return t;
        }
        function f(e, t) {
          var r = (e.length - t) % 3;
          return 0 == r
            ? e.toString('base64', t)
            : ((this.lastNeed = 3 - r),
              (this.lastTotal = 3),
              1 == r
                ? (this.lastChar[0] = e[e.length - 1])
                : ((this.lastChar[0] = e[e.length - 2]),
                  (this.lastChar[1] = e[e.length - 1])),
              e.toString('base64', t, e.length - r));
        }
        function h(e) {
          var t = e && e.length ? this.write(e) : '';
          return this.lastNeed
            ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
            : t;
        }
        function p(e) {
          return e.toString(this.encoding);
        }
        function d(e) {
          return e && e.length ? this.write(e) : '';
        }
        ((r.StringDecoder = s).prototype.write = function (e) {
          if (0 === e.length) return '';
          var t, r;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return '';
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || '';
        }),
          (s.prototype.end = function (e) {
            var t = e && e.length ? this.write(e) : '';
            return this.lastNeed
              ? t + '�'.repeat(this.lastTotal - this.lastNeed)
              : t;
          }),
          (s.prototype.text = function (e, t) {
            var r = (function (e, t, r) {
              var n = t.length - 1;
              if (n < r) return 0;
              var i = a(t[n]);
              if (0 <= i) return 0 < i && (e.lastNeed = i - 1), i;
              if (--n < r) return 0;
              if (0 <= (i = a(t[n]))) return 0 < i && (e.lastNeed = i - 2), i;
              if (--n < r) return 0;
              if (0 <= (i = a(t[n])))
                return 0 < i && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
              return 0;
            })(this, e, t);
            if (!this.lastNeed) return e.toString('utf8', t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n);
          }),
          (s.prototype.fillLast = function (e) {
            if (this.lastNeed <= e.length)
              return (
                e.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed,
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
              (this.lastNeed -= e.length);
          });
      },
      { 'safe-buffer': 69 },
    ],
    72: [
      function (e, t, r) {
        (function (r) {
          function n(e) {
            try {
              if (!r.localStorage) return !1;
            } catch (e) {
              return !1;
            }
            var t = r.localStorage[e];
            return null != t && 'true' === String(t).toLowerCase();
          }
          t.exports = function (e, t) {
            if (n('noDeprecation')) return e;
            var r = !1;
            return function () {
              if (!r) {
                if (n('throwDeprecation')) throw new Error(t);
                n('traceDeprecation') ? console.trace(t) : console.warn(t),
                  (r = !0);
              }
              return e.apply(this, arguments);
            };
          };
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      {},
    ],
    73: [
      function (e, t, r) {
        arguments[4][49][0].apply(r, arguments);
      },
      { dup: 49 },
    ],
    74: [
      function (e, t, r) {
        t.exports = function (e) {
          return (
            e &&
            'object' == typeof e &&
            'function' == typeof e.copy &&
            'function' == typeof e.fill &&
            'function' == typeof e.readUInt8
          );
        };
      },
      {},
    ],
    75: [
      function (A, e, C) {
        (function (n, i) {
          var a = /%[sdj%]/g;
          (C.format = function (e) {
            if (!v(e)) {
              for (var t = [], r = 0; r < arguments.length; r++)
                t.push(u(arguments[r]));
              return t.join(' ');
            }
            r = 1;
            for (
              var n = arguments,
                i = n.length,
                o = String(e).replace(a, function (e) {
                  if ('%%' === e) return '%';
                  if (i <= r) return e;
                  switch (e) {
                    case '%s':
                      return String(n[r++]);
                    case '%d':
                      return Number(n[r++]);
                    case '%j':
                      try {
                        return JSON.stringify(n[r++]);
                      } catch (e) {
                        return '[Circular]';
                      }
                    default:
                      return e;
                  }
                }),
                s = n[r];
              r < i;
              s = n[++r]
            )
              b(s) || !c(s) ? (o += ' ' + s) : (o += ' ' + u(s));
            return o;
          }),
            (C.deprecate = function (e, t) {
              if (w(i.process))
                return function () {
                  return C.deprecate(e, t).apply(this, arguments);
                };
              if (!0 === n.noDeprecation) return e;
              var r = !1;
              return function () {
                if (!r) {
                  if (n.throwDeprecation) throw new Error(t);
                  n.traceDeprecation ? console.trace(t) : console.error(t),
                    (r = !0);
                }
                return e.apply(this, arguments);
              };
            });
          var e,
            o = {};
          function u(e, t) {
            var r = { seen: [], stylize: l };
            return (
              3 <= arguments.length && (r.depth = arguments[2]),
              4 <= arguments.length && (r.colors = arguments[3]),
              m(t) ? (r.showHidden = t) : t && C._extend(r, t),
              w(r.showHidden) && (r.showHidden = !1),
              w(r.depth) && (r.depth = 2),
              w(r.colors) && (r.colors = !1),
              w(r.customInspect) && (r.customInspect = !0),
              r.colors && (r.stylize = s),
              h(r, e, r.depth)
            );
          }
          function s(e, t) {
            var r = u.styles[t];
            return r
              ? '[' + u.colors[r][0] + 'm' + e + '[' + u.colors[r][1] + 'm'
              : e;
          }
          function l(e, t) {
            return e;
          }
          function h(t, r, n) {
            if (
              t.customInspect &&
              r &&
              S(r.inspect) &&
              r.inspect !== C.inspect &&
              (!r.constructor || r.constructor.prototype !== r)
            ) {
              var e = r.inspect(n, t);
              return v(e) || (e = h(t, e, n)), e;
            }
            var i = (function (e, t) {
              if (w(t)) return e.stylize('undefined', 'undefined');
              if (v(t)) {
                var r =
                  "'" +
                  JSON.stringify(t)
                    .replace(/^"|"$/g, '')
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return e.stylize(r, 'string');
              }
              if (y(t)) return e.stylize('' + t, 'number');
              if (m(t)) return e.stylize('' + t, 'boolean');
              if (b(t)) return e.stylize('null', 'null');
            })(t, r);
            if (i) return i;
            var o = Object.keys(r),
              s = (function (e) {
                var r = {};
                return (
                  e.forEach(function (e, t) {
                    r[e] = !0;
                  }),
                  r
                );
              })(o);
            if (
              (t.showHidden && (o = Object.getOwnPropertyNames(r)),
              x(r) &&
                (0 <= o.indexOf('message') || 0 <= o.indexOf('description')))
            )
              return p(r);
            if (0 === o.length) {
              if (S(r)) {
                var a = r.name ? ': ' + r.name : '';
                return t.stylize('[Function' + a + ']', 'special');
              }
              if (E(r))
                return t.stylize(RegExp.prototype.toString.call(r), 'regexp');
              if (_(r))
                return t.stylize(Date.prototype.toString.call(r), 'date');
              if (x(r)) return p(r);
            }
            var u,
              l = '',
              c = !1,
              f = ['{', '}'];
            g(r) && ((c = !0), (f = ['[', ']'])),
              S(r) && (l = ' [Function' + (r.name ? ': ' + r.name : '') + ']');
            return (
              E(r) && (l = ' ' + RegExp.prototype.toString.call(r)),
              _(r) && (l = ' ' + Date.prototype.toUTCString.call(r)),
              x(r) && (l = ' ' + p(r)),
              0 !== o.length || (c && 0 != r.length)
                ? n < 0
                  ? E(r)
                    ? t.stylize(RegExp.prototype.toString.call(r), 'regexp')
                    : t.stylize('[Object]', 'special')
                  : (t.seen.push(r),
                    (u = c
                      ? (function (t, r, n, i, e) {
                          for (var o = [], s = 0, a = r.length; s < a; ++s)
                            k(r, String(s))
                              ? o.push(d(t, r, n, i, String(s), !0))
                              : o.push('');
                          return (
                            e.forEach(function (e) {
                              e.match(/^\d+$/) || o.push(d(t, r, n, i, e, !0));
                            }),
                            o
                          );
                        })(t, r, n, s, o)
                      : o.map(function (e) {
                          return d(t, r, n, s, e, c);
                        })),
                    t.seen.pop(),
                    (function (e, t, r) {
                      if (
                        60 <
                        e.reduce(function (e, t) {
                          return (
                            0,
                            0 <= t.indexOf('\n') && 0,
                            e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                          );
                        }, 0)
                      )
                        return (
                          r[0] +
                          ('' === t ? '' : t + '\n ') +
                          ' ' +
                          e.join(',\n  ') +
                          ' ' +
                          r[1]
                        );
                      return r[0] + t + ' ' + e.join(', ') + ' ' + r[1];
                    })(u, l, f))
                : f[0] + l + f[1]
            );
          }
          function p(e) {
            return '[' + Error.prototype.toString.call(e) + ']';
          }
          function d(e, t, r, n, i, o) {
            var s, a, u;
            if (
              ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] })
                .get
                ? (a = u.set
                    ? e.stylize('[Getter/Setter]', 'special')
                    : e.stylize('[Getter]', 'special'))
                : u.set && (a = e.stylize('[Setter]', 'special')),
              k(n, i) || (s = '[' + i + ']'),
              a ||
                (e.seen.indexOf(u.value) < 0
                  ? -1 <
                      (a = b(r)
                        ? h(e, u.value, null)
                        : h(e, u.value, r - 1)).indexOf('\n') &&
                    (a = o
                      ? a
                          .split('\n')
                          .map(function (e) {
                            return '  ' + e;
                          })
                          .join('\n')
                          .substr(2)
                      : '\n' +
                        a
                          .split('\n')
                          .map(function (e) {
                            return '   ' + e;
                          })
                          .join('\n'))
                  : (a = e.stylize('[Circular]', 'special'))),
              w(s))
            ) {
              if (o && i.match(/^\d+$/)) return a;
              s = (s = JSON.stringify('' + i)).match(
                /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/,
              )
                ? ((s = s.substr(1, s.length - 2)), e.stylize(s, 'name'))
                : ((s = s
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'")),
                  e.stylize(s, 'string'));
            }
            return s + ': ' + a;
          }
          function g(e) {
            return Array.isArray(e);
          }
          function m(e) {
            return 'boolean' == typeof e;
          }
          function b(e) {
            return null === e;
          }
          function y(e) {
            return 'number' == typeof e;
          }
          function v(e) {
            return 'string' == typeof e;
          }
          function w(e) {
            return void 0 === e;
          }
          function E(e) {
            return c(e) && '[object RegExp]' === t(e);
          }
          function c(e) {
            return 'object' == typeof e && null !== e;
          }
          function _(e) {
            return c(e) && '[object Date]' === t(e);
          }
          function x(e) {
            return c(e) && ('[object Error]' === t(e) || e instanceof Error);
          }
          function S(e) {
            return 'function' == typeof e;
          }
          function t(e) {
            return Object.prototype.toString.call(e);
          }
          function r(e) {
            return e < 10 ? '0' + e.toString(10) : e.toString(10);
          }
          (C.debuglog = function (t) {
            if (
              (w(e) && (e = n.env.NODE_DEBUG || ''),
              (t = t.toUpperCase()),
              !o[t])
            )
              if (new RegExp('\\b' + t + '\\b', 'i').test(e)) {
                var r = n.pid;
                o[t] = function () {
                  var e = C.format.apply(C, arguments);
                  console.error('%s %d: %s', t, r, e);
                };
              } else o[t] = function () {};
            return o[t];
          }),
            ((C.inspect = u).colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39],
            }),
            (u.styles = {
              special: 'cyan',
              number: 'yellow',
              boolean: 'yellow',
              undefined: 'grey',
              null: 'bold',
              string: 'green',
              date: 'magenta',
              regexp: 'red',
            }),
            (C.isArray = g),
            (C.isBoolean = m),
            (C.isNull = b),
            (C.isNullOrUndefined = function (e) {
              return null == e;
            }),
            (C.isNumber = y),
            (C.isString = v),
            (C.isSymbol = function (e) {
              return 'symbol' == typeof e;
            }),
            (C.isUndefined = w),
            (C.isRegExp = E),
            (C.isObject = c),
            (C.isDate = _),
            (C.isError = x),
            (C.isFunction = S),
            (C.isPrimitive = function (e) {
              return (
                null === e ||
                'boolean' == typeof e ||
                'number' == typeof e ||
                'string' == typeof e ||
                'symbol' == typeof e ||
                void 0 === e
              );
            }),
            (C.isBuffer = A('./support/isBuffer'));
          var f = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];
          function k(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          (C.log = function () {
            console.log(
              '%s - %s',
              (function () {
                var e = new Date(),
                  t = [
                    r(e.getHours()),
                    r(e.getMinutes()),
                    r(e.getSeconds()),
                  ].join(':');
                return [e.getDate(), f[e.getMonth()], t].join(' ');
              })(),
              C.format.apply(C, arguments),
            );
          }),
            (C.inherits = A('inherits')),
            (C._extend = function (e, t) {
              if (!t || !c(t)) return e;
              for (var r = Object.keys(t), n = r.length; n--; )
                e[r[n]] = t[r[n]];
              return e;
            });
        }.call(
          this,
          A('_process'),
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      { './support/isBuffer': 74, _process: 55, inherits: 73 },
    ],
    buffer: [
      function (U, e, M) {
        (function (e) {
          'use strict';
          var n = U('base64-js'),
            o = U('ieee754'),
            s = U('isarray');
          function r() {
            return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function a(e, t) {
            if (r() < t) throw new RangeError('Invalid typed array length');
            return (
              f.TYPED_ARRAY_SUPPORT
                ? ((e = new Uint8Array(t)).__proto__ = f.prototype)
                : (null === e && (e = new f(t)), (e.length = t)),
              e
            );
          }
          function f(e, t, r) {
            if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f))
              return new f(e, t, r);
            if ('number' != typeof e) return i(this, e, t, r);
            if ('string' == typeof t)
              throw new Error(
                'If encoding is specified then the first argument must be a string',
              );
            return l(this, e);
          }
          function i(e, t, r, n) {
            if ('number' == typeof t)
              throw new TypeError('"value" argument must not be a number');
            return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
              ? (function (e, t, r, n) {
                  if ((t.byteLength, r < 0 || t.byteLength < r))
                    throw new RangeError("'offset' is out of bounds");
                  if (t.byteLength < r + (n || 0))
                    throw new RangeError("'length' is out of bounds");
                  t =
                    void 0 === r && void 0 === n
                      ? new Uint8Array(t)
                      : void 0 === n
                      ? new Uint8Array(t, r)
                      : new Uint8Array(t, r, n);
                  f.TYPED_ARRAY_SUPPORT
                    ? ((e = t).__proto__ = f.prototype)
                    : (e = c(e, t));
                  return e;
                })(e, t, r, n)
              : 'string' == typeof t
              ? (function (e, t, r) {
                  ('string' == typeof r && '' !== r) || (r = 'utf8');
                  if (!f.isEncoding(r))
                    throw new TypeError(
                      '"encoding" must be a valid string encoding',
                    );
                  var n = 0 | p(t, r),
                    i = (e = a(e, n)).write(t, r);
                  i !== n && (e = e.slice(0, i));
                  return e;
                })(e, t, r)
              : (function (e, t) {
                  if (f.isBuffer(t)) {
                    var r = 0 | h(t.length);
                    return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e;
                  }
                  if (t) {
                    if (
                      ('undefined' != typeof ArrayBuffer &&
                        t.buffer instanceof ArrayBuffer) ||
                      'length' in t
                    )
                      return 'number' != typeof t.length ||
                        (function (e) {
                          return e != e;
                        })(t.length)
                        ? a(e, 0)
                        : c(e, t);
                    if ('Buffer' === t.type && s(t.data)) return c(e, t.data);
                  }
                  throw new TypeError(
                    'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
                  );
                })(e, t);
          }
          function u(e) {
            if ('number' != typeof e)
              throw new TypeError('"size" argument must be a number');
            if (e < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function l(e, t) {
            if (
              (u(t), (e = a(e, t < 0 ? 0 : 0 | h(t))), !f.TYPED_ARRAY_SUPPORT)
            )
              for (var r = 0; r < t; ++r) e[r] = 0;
            return e;
          }
          function c(e, t) {
            var r = t.length < 0 ? 0 : 0 | h(t.length);
            e = a(e, r);
            for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
            return e;
          }
          function h(e) {
            if (e >= r())
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                  r().toString(16) +
                  ' bytes',
              );
            return 0 | e;
          }
          function p(e, t) {
            if (f.isBuffer(e)) return e.length;
            if (
              'undefined' != typeof ArrayBuffer &&
              'function' == typeof ArrayBuffer.isView &&
              (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
            )
              return e.byteLength;
            'string' != typeof e && (e = '' + e);
            var r = e.length;
            if (0 === r) return 0;
            for (var n = !1; ; )
              switch (t) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return r;
                case 'utf8':
                case 'utf-8':
                case void 0:
                  return O(e).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * r;
                case 'hex':
                  return r >>> 1;
                case 'base64':
                  return P(e).length;
                default:
                  if (n) return O(e).length;
                  (t = ('' + t).toLowerCase()), (n = !0);
              }
          }
          function d(e, t, r) {
            var n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          function g(e, t, r, n, i) {
            if (0 === e.length) return -1;
            if (
              ('string' == typeof r
                ? ((n = r), (r = 0))
                : 2147483647 < r
                ? (r = 2147483647)
                : r < -2147483648 && (r = -2147483648),
              (r = +r),
              isNaN(r) && (r = i ? 0 : e.length - 1),
              r < 0 && (r = e.length + r),
              r >= e.length)
            ) {
              if (i) return -1;
              r = e.length - 1;
            } else if (r < 0) {
              if (!i) return -1;
              r = 0;
            }
            if (('string' == typeof t && (t = f.from(t, n)), f.isBuffer(t)))
              return 0 === t.length ? -1 : m(e, t, r, n, i);
            if ('number' == typeof t)
              return (
                (t &= 255),
                f.TYPED_ARRAY_SUPPORT &&
                'function' == typeof Uint8Array.prototype.indexOf
                  ? i
                    ? Uint8Array.prototype.indexOf.call(e, t, r)
                    : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                  : m(e, [t], r, n, i)
              );
            throw new TypeError('val must be string, number or Buffer');
          }
          function m(e, t, r, n, i) {
            var o,
              s = 1,
              a = e.length,
              u = t.length;
            if (
              void 0 !== n &&
              ('ucs2' === (n = String(n).toLowerCase()) ||
                'ucs-2' === n ||
                'utf16le' === n ||
                'utf-16le' === n)
            ) {
              if (e.length < 2 || t.length < 2) return -1;
              (a /= s = 2), (u /= 2), (r /= 2);
            }
            function l(e, t) {
              return 1 === s ? e[t] : e.readUInt16BE(t * s);
            }
            if (i) {
              var c = -1;
              for (o = r; o < a; o++)
                if (l(e, o) === l(t, -1 === c ? 0 : o - c)) {
                  if ((-1 === c && (c = o), o - c + 1 === u)) return c * s;
                } else -1 !== c && (o -= o - c), (c = -1);
            } else
              for (a < r + u && (r = a - u), o = r; 0 <= o; o--) {
                for (var f = !0, h = 0; h < u; h++)
                  if (l(e, o + h) !== l(t, h)) {
                    f = !1;
                    break;
                  }
                if (f) return o;
              }
            return -1;
          }
          function b(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? i < (n = Number(n)) && (n = i) : (n = i);
            var o = t.length;
            if (o % 2 != 0) throw new TypeError('Invalid hex string');
            o / 2 < n && (n = o / 2);
            for (var s = 0; s < n; ++s) {
              var a = parseInt(t.substr(2 * s, 2), 16);
              if (isNaN(a)) return s;
              e[r + s] = a;
            }
            return s;
          }
          function y(e, t, r, n) {
            return j(
              (function (e) {
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              })(t),
              e,
              r,
              n,
            );
          }
          function v(e, t, r, n) {
            return j(
              (function (e, t) {
                for (
                  var r, n, i, o = [], s = 0;
                  s < e.length && !((t -= 2) < 0);
                  ++s
                )
                  (r = e.charCodeAt(s)),
                    (n = r >> 8),
                    (i = r % 256),
                    o.push(i),
                    o.push(n);
                return o;
              })(t, e.length - r),
              e,
              r,
              n,
            );
          }
          function w(e, t, r) {
            return 0 === t && r === e.length
              ? n.fromByteArray(e)
              : n.fromByteArray(e.slice(t, r));
          }
          function E(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
              var o,
                s,
                a,
                u,
                l = e[i],
                c = null,
                f = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
              if (i + f <= r)
                switch (f) {
                  case 1:
                    l < 128 && (c = l);
                    break;
                  case 2:
                    128 == (192 & (o = e[i + 1])) &&
                      127 < (u = ((31 & l) << 6) | (63 & o)) &&
                      (c = u);
                    break;
                  case 3:
                    (o = e[i + 1]),
                      (s = e[i + 2]),
                      128 == (192 & o) &&
                        128 == (192 & s) &&
                        2047 <
                          (u = ((15 & l) << 12) | ((63 & o) << 6) | (63 & s)) &&
                        (u < 55296 || 57343 < u) &&
                        (c = u);
                    break;
                  case 4:
                    (o = e[i + 1]),
                      (s = e[i + 2]),
                      (a = e[i + 3]),
                      128 == (192 & o) &&
                        128 == (192 & s) &&
                        128 == (192 & a) &&
                        65535 <
                          (u =
                            ((15 & l) << 18) |
                            ((63 & o) << 12) |
                            ((63 & s) << 6) |
                            (63 & a)) &&
                        u < 1114112 &&
                        (c = u);
                }
              null === c
                ? ((c = 65533), (f = 1))
                : 65535 < c &&
                  ((c -= 65536),
                  n.push(((c >>> 10) & 1023) | 55296),
                  (c = 56320 | (1023 & c))),
                n.push(c),
                (i += f);
            }
            return (function (e) {
              var t = e.length;
              if (t <= _) return String.fromCharCode.apply(String, e);
              var r = '',
                n = 0;
              for (; n < t; )
                r += String.fromCharCode.apply(String, e.slice(n, (n += _)));
              return r;
            })(n);
          }
          (M.Buffer = f),
            (M.SlowBuffer = function (e) {
              +e != e && (e = 0);
              return f.alloc(+e);
            }),
            (M.INSPECT_MAX_BYTES = 50),
            (f.TYPED_ARRAY_SUPPORT =
              void 0 !== e.TYPED_ARRAY_SUPPORT
                ? e.TYPED_ARRAY_SUPPORT
                : (function () {
                    try {
                      var e = new Uint8Array(1);
                      return (
                        (e.__proto__ = {
                          __proto__: Uint8Array.prototype,
                          foo: function () {
                            return 42;
                          },
                        }),
                        42 === e.foo() &&
                          'function' == typeof e.subarray &&
                          0 === e.subarray(1, 1).byteLength
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
            (M.kMaxLength = r()),
            (f.poolSize = 8192),
            (f._augment = function (e) {
              return (e.__proto__ = f.prototype), e;
            }),
            (f.from = function (e, t, r) {
              return i(null, e, t, r);
            }),
            f.TYPED_ARRAY_SUPPORT &&
              ((f.prototype.__proto__ = Uint8Array.prototype),
              (f.__proto__ = Uint8Array),
              'undefined' != typeof Symbol &&
                Symbol.species &&
                f[Symbol.species] === f &&
                Object.defineProperty(f, Symbol.species, {
                  value: null,
                  configurable: !0,
                })),
            (f.alloc = function (e, t, r) {
              return (function (e, t, r, n) {
                return (
                  u(t),
                  t <= 0
                    ? a(e, t)
                    : void 0 !== r
                    ? 'string' == typeof n
                      ? a(e, t).fill(r, n)
                      : a(e, t).fill(r)
                    : a(e, t)
                );
              })(null, e, t, r);
            }),
            (f.allocUnsafe = function (e) {
              return l(null, e);
            }),
            (f.allocUnsafeSlow = function (e) {
              return l(null, e);
            }),
            (f.isBuffer = function (e) {
              return !(null == e || !e._isBuffer);
            }),
            (f.compare = function (e, t) {
              if (!f.isBuffer(e) || !f.isBuffer(t))
                throw new TypeError('Arguments must be Buffers');
              if (e === t) return 0;
              for (
                var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
                i < o;
                ++i
              )
                if (e[i] !== t[i]) {
                  (r = e[i]), (n = t[i]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (f.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (f.concat = function (e, t) {
              if (!s(e))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              if (0 === e.length) return f.alloc(0);
              var r;
              if (void 0 === t)
                for (r = t = 0; r < e.length; ++r) t += e[r].length;
              var n = f.allocUnsafe(t),
                i = 0;
              for (r = 0; r < e.length; ++r) {
                var o = e[r];
                if (!f.isBuffer(o))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers',
                  );
                o.copy(n, i), (i += o.length);
              }
              return n;
            }),
            (f.byteLength = p),
            (f.prototype._isBuffer = !0),
            (f.prototype.swap16 = function () {
              var e = this.length;
              if (e % 2 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 16-bits',
                );
              for (var t = 0; t < e; t += 2) d(this, t, t + 1);
              return this;
            }),
            (f.prototype.swap32 = function () {
              var e = this.length;
              if (e % 4 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 32-bits',
                );
              for (var t = 0; t < e; t += 4)
                d(this, t, t + 3), d(this, t + 1, t + 2);
              return this;
            }),
            (f.prototype.swap64 = function () {
              var e = this.length;
              if (e % 8 != 0)
                throw new RangeError(
                  'Buffer size must be a multiple of 64-bits',
                );
              for (var t = 0; t < e; t += 8)
                d(this, t, t + 7),
                  d(this, t + 1, t + 6),
                  d(this, t + 2, t + 5),
                  d(this, t + 3, t + 4);
              return this;
            }),
            (f.prototype.toString = function () {
              var e = 0 | this.length;
              return 0 == e
                ? ''
                : 0 === arguments.length
                ? E(this, 0, e)
                : function (e, t, r) {
                    var n = !1;
                    if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                      return '';
                    if (
                      ((void 0 === r || r > this.length) && (r = this.length),
                      r <= 0)
                    )
                      return '';
                    if ((r >>>= 0) <= (t >>>= 0)) return '';
                    for (e = e || 'utf8'; ; )
                      switch (e) {
                        case 'hex':
                          return k(this, t, r);
                        case 'utf8':
                        case 'utf-8':
                          return E(this, t, r);
                        case 'ascii':
                          return x(this, t, r);
                        case 'latin1':
                        case 'binary':
                          return S(this, t, r);
                        case 'base64':
                          return w(this, t, r);
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                          return A(this, t, r);
                        default:
                          if (n) throw new TypeError('Unknown encoding: ' + e);
                          (e = (e + '').toLowerCase()), (n = !0);
                      }
                  }.apply(this, arguments);
            }),
            (f.prototype.equals = function (e) {
              if (!f.isBuffer(e))
                throw new TypeError('Argument must be a Buffer');
              return this === e || 0 === f.compare(this, e);
            }),
            (f.prototype.inspect = function () {
              var e = '',
                t = M.INSPECT_MAX_BYTES;
              return (
                0 < this.length &&
                  ((e = this.toString('hex', 0, t).match(/.{2}/g).join(' ')),
                  this.length > t && (e += ' ... ')),
                '<Buffer ' + e + '>'
              );
            }),
            (f.prototype.compare = function (e, t, r, n, i) {
              if (!f.isBuffer(e))
                throw new TypeError('Argument must be a Buffer');
              if (
                (void 0 === t && (t = 0),
                void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                t < 0 || r > e.length || n < 0 || i > this.length)
              )
                throw new RangeError('out of range index');
              if (i <= n && r <= t) return 0;
              if (i <= n) return -1;
              if (r <= t) return 1;
              if (this === e) return 0;
              for (
                var o = (i >>>= 0) - (n >>>= 0),
                  s = (r >>>= 0) - (t >>>= 0),
                  a = Math.min(o, s),
                  u = this.slice(n, i),
                  l = e.slice(t, r),
                  c = 0;
                c < a;
                ++c
              )
                if (u[c] !== l[c]) {
                  (o = u[c]), (s = l[c]);
                  break;
                }
              return o < s ? -1 : s < o ? 1 : 0;
            }),
            (f.prototype.includes = function (e, t, r) {
              return -1 !== this.indexOf(e, t, r);
            }),
            (f.prototype.indexOf = function (e, t, r) {
              return g(this, e, t, r, !0);
            }),
            (f.prototype.lastIndexOf = function (e, t, r) {
              return g(this, e, t, r, !1);
            }),
            (f.prototype.write = function (e, t, r, n) {
              if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0);
              else if (void 0 === r && 'string' == typeof t)
                (n = t), (r = this.length), (t = 0);
              else {
                if (!isFinite(t))
                  throw new Error(
                    'Buffer.write(string, encoding, offset[, length]) is no longer supported',
                  );
                (t |= 0),
                  isFinite(r)
                    ? ((r |= 0), void 0 === n && (n = 'utf8'))
                    : ((n = r), (r = void 0));
              }
              var i = this.length - t;
              if (
                ((void 0 === r || i < r) && (r = i),
                (0 < e.length && (r < 0 || t < 0)) || t > this.length)
              )
                throw new RangeError('Attempt to write outside buffer bounds');
              n = n || 'utf8';
              for (var o, s, a, u, l, c, f = !1; ; )
                switch (n) {
                  case 'hex':
                    return b(this, e, t, r);
                  case 'utf8':
                  case 'utf-8':
                    return (
                      (l = t), (c = r), j(O(e, (u = this).length - l), u, l, c)
                    );
                  case 'ascii':
                    return y(this, e, t, r);
                  case 'latin1':
                  case 'binary':
                    return y(this, e, t, r);
                  case 'base64':
                    return (o = this), (s = t), (a = r), j(P(e), o, s, a);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return v(this, e, t, r);
                  default:
                    if (f) throw new TypeError('Unknown encoding: ' + n);
                    (n = ('' + n).toLowerCase()), (f = !0);
                }
            }),
            (f.prototype.toJSON = function () {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          var _ = 4096;
          function x(e, t, r) {
            var n = '';
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
            return n;
          }
          function S(e, t, r) {
            var n = '';
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
            return n;
          }
          function k(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n);
            for (var i = '', o = t; o < r; ++o) i += N(e[o]);
            return i;
          }
          function A(e, t, r) {
            for (var n = e.slice(t, r), i = '', o = 0; o < n.length; o += 2)
              i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i;
          }
          function C(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint');
            if (r < e + t)
              throw new RangeError('Trying to access beyond buffer length');
          }
          function D(e, t, r, n, i, o) {
            if (!f.isBuffer(e))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance',
              );
            if (i < t || t < o)
              throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError('Index out of range');
          }
          function T(e, t, r, n) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
              e[r + i] =
                (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i));
          }
          function L(e, t, r, n) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
              e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255;
          }
          function q(e, t, r, n) {
            if (r + n > e.length) throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('Index out of range');
          }
          function R(e, t, r, n, i) {
            return i || q(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4;
          }
          function F(e, t, r, n, i) {
            return i || q(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8;
          }
          (f.prototype.slice = function (e, t) {
            var r,
              n = this.length;
            if (
              ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n),
              (t = void 0 === t ? n : ~~t) < 0
                ? (t += n) < 0 && (t = 0)
                : n < t && (t = n),
              t < e && (t = e),
              f.TYPED_ARRAY_SUPPORT)
            )
              (r = this.subarray(e, t)).__proto__ = f.prototype;
            else {
              var i = t - e;
              r = new f(i, void 0);
              for (var o = 0; o < i; ++o) r[o] = this[o + e];
            }
            return r;
          }),
            (f.prototype.readUIntLE = function (e, t, r) {
              (e |= 0), (t |= 0), r || C(e, t, this.length);
              for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                n += this[e + o] * i;
              return n;
            }),
            (f.prototype.readUIntBE = function (e, t, r) {
              (e |= 0), (t |= 0), r || C(e, t, this.length);
              for (var n = this[e + --t], i = 1; 0 < t && (i *= 256); )
                n += this[e + --t] * i;
              return n;
            }),
            (f.prototype.readUInt8 = function (e, t) {
              return t || C(e, 1, this.length), this[e];
            }),
            (f.prototype.readUInt16LE = function (e, t) {
              return t || C(e, 2, this.length), this[e] | (this[e + 1] << 8);
            }),
            (f.prototype.readUInt16BE = function (e, t) {
              return t || C(e, 2, this.length), (this[e] << 8) | this[e + 1];
            }),
            (f.prototype.readUInt32LE = function (e, t) {
              return (
                t || C(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              );
            }),
            (f.prototype.readUInt32BE = function (e, t) {
              return (
                t || C(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
            (f.prototype.readIntLE = function (e, t, r) {
              (e |= 0), (t |= 0), r || C(e, t, this.length);
              for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                n += this[e + o] * i;
              return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
            }),
            (f.prototype.readIntBE = function (e, t, r) {
              (e |= 0), (t |= 0), r || C(e, t, this.length);
              for (var n = t, i = 1, o = this[e + --n]; 0 < n && (i *= 256); )
                o += this[e + --n] * i;
              return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o;
            }),
            (f.prototype.readInt8 = function (e, t) {
              return (
                t || C(e, 1, this.length),
                128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
              );
            }),
            (f.prototype.readInt16LE = function (e, t) {
              t || C(e, 2, this.length);
              var r = this[e] | (this[e + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt16BE = function (e, t) {
              t || C(e, 2, this.length);
              var r = this[e + 1] | (this[e] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (f.prototype.readInt32LE = function (e, t) {
              return (
                t || C(e, 4, this.length),
                this[e] |
                  (this[e + 1] << 8) |
                  (this[e + 2] << 16) |
                  (this[e + 3] << 24)
              );
            }),
            (f.prototype.readInt32BE = function (e, t) {
              return (
                t || C(e, 4, this.length),
                (this[e] << 24) |
                  (this[e + 1] << 16) |
                  (this[e + 2] << 8) |
                  this[e + 3]
              );
            }),
            (f.prototype.readFloatLE = function (e, t) {
              return t || C(e, 4, this.length), o.read(this, e, !0, 23, 4);
            }),
            (f.prototype.readFloatBE = function (e, t) {
              return t || C(e, 4, this.length), o.read(this, e, !1, 23, 4);
            }),
            (f.prototype.readDoubleLE = function (e, t) {
              return t || C(e, 8, this.length), o.read(this, e, !0, 52, 8);
            }),
            (f.prototype.readDoubleBE = function (e, t) {
              return t || C(e, 8, this.length), o.read(this, e, !1, 52, 8);
            }),
            (f.prototype.writeUIntLE = function (e, t, r, n) {
              (e = +e),
                (t |= 0),
                (r |= 0),
                n || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              var i = 1,
                o = 0;
              for (this[t] = 255 & e; ++o < r && (i *= 256); )
                this[t + o] = (e / i) & 255;
              return t + r;
            }),
            (f.prototype.writeUIntBE = function (e, t, r, n) {
              (e = +e),
                (t |= 0),
                (r |= 0),
                n || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
              var i = r - 1,
                o = 1;
              for (this[t + i] = 255 & e; 0 <= --i && (o *= 256); )
                this[t + i] = (e / o) & 255;
              return t + r;
            }),
            (f.prototype.writeUInt8 = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 1, 255, 0),
                f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (f.prototype.writeUInt16LE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 2, 65535, 0),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                  : T(this, e, t, !0),
                t + 2
              );
            }),
            (f.prototype.writeUInt16BE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 2, 65535, 0),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                  : T(this, e, t, !1),
                t + 2
              );
            }),
            (f.prototype.writeUInt32LE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 4, 4294967295, 0),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e))
                  : L(this, e, t, !0),
                t + 4
              );
            }),
            (f.prototype.writeUInt32BE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 4, 4294967295, 0),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e))
                  : L(this, e, t, !1),
                t + 4
              );
            }),
            (f.prototype.writeIntLE = function (e, t, r, n) {
              if (((e = +e), (t |= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                D(this, e, t, r, i - 1, -i);
              }
              var o = 0,
                s = 1,
                a = 0;
              for (this[t] = 255 & e; ++o < r && (s *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                  (this[t + o] = (((e / s) >> 0) - a) & 255);
              return t + r;
            }),
            (f.prototype.writeIntBE = function (e, t, r, n) {
              if (((e = +e), (t |= 0), !n)) {
                var i = Math.pow(2, 8 * r - 1);
                D(this, e, t, r, i - 1, -i);
              }
              var o = r - 1,
                s = 1,
                a = 0;
              for (this[t + o] = 255 & e; 0 <= --o && (s *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                  (this[t + o] = (((e / s) >> 0) - a) & 255);
              return t + r;
            }),
            (f.prototype.writeInt8 = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 1, 127, -128),
                f.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                e < 0 && (e = 255 + e + 1),
                (this[t] = 255 & e),
                t + 1
              );
            }),
            (f.prototype.writeInt16LE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 2, 32767, -32768),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                  : T(this, e, t, !0),
                t + 2
              );
            }),
            (f.prototype.writeInt16BE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 2, 32767, -32768),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                  : T(this, e, t, !1),
                t + 2
              );
            }),
            (f.prototype.writeInt32LE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 4, 2147483647, -2147483648),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24))
                  : L(this, e, t, !0),
                t + 4
              );
            }),
            (f.prototype.writeInt32BE = function (e, t, r) {
              return (
                (e = +e),
                (t |= 0),
                r || D(this, e, t, 4, 2147483647, -2147483648),
                e < 0 && (e = 4294967295 + e + 1),
                f.TYPED_ARRAY_SUPPORT
                  ? ((this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e))
                  : L(this, e, t, !1),
                t + 4
              );
            }),
            (f.prototype.writeFloatLE = function (e, t, r) {
              return R(this, e, t, !0, r);
            }),
            (f.prototype.writeFloatBE = function (e, t, r) {
              return R(this, e, t, !1, r);
            }),
            (f.prototype.writeDoubleLE = function (e, t, r) {
              return F(this, e, t, !0, r);
            }),
            (f.prototype.writeDoubleBE = function (e, t, r) {
              return F(this, e, t, !1, r);
            }),
            (f.prototype.copy = function (e, t, r, n) {
              if (
                ((r = r || 0),
                n || 0 === n || (n = this.length),
                t >= e.length && (t = e.length),
                (t = t || 0),
                0 < n && n < r && (n = r),
                n === r)
              )
                return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw new RangeError('targetStart out of bounds');
              if (r < 0 || r >= this.length)
                throw new RangeError('sourceStart out of bounds');
              if (n < 0) throw new RangeError('sourceEnd out of bounds');
              n > this.length && (n = this.length),
                e.length - t < n - r && (n = e.length - t + r);
              var i,
                o = n - r;
              if (this === e && r < t && t < n)
                for (i = o - 1; 0 <= i; --i) e[i + t] = this[i + r];
              else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) e[i + t] = this[i + r];
              else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
              return o;
            }),
            (f.prototype.fill = function (e, t, r, n) {
              if ('string' == typeof e) {
                if (
                  ('string' == typeof t
                    ? ((n = t), (t = 0), (r = this.length))
                    : 'string' == typeof r && ((n = r), (r = this.length)),
                  1 === e.length)
                ) {
                  var i = e.charCodeAt(0);
                  i < 256 && (e = i);
                }
                if (void 0 !== n && 'string' != typeof n)
                  throw new TypeError('encoding must be a string');
                if ('string' == typeof n && !f.isEncoding(n))
                  throw new TypeError('Unknown encoding: ' + n);
              } else 'number' == typeof e && (e &= 255);
              if (t < 0 || this.length < t || this.length < r)
                throw new RangeError('Out of range index');
              if (r <= t) return this;
              var o;
              if (
                ((t >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                'number' == typeof (e = e || 0))
              )
                for (o = t; o < r; ++o) this[o] = e;
              else {
                var s = f.isBuffer(e) ? e : O(new f(e, n).toString()),
                  a = s.length;
                for (o = 0; o < r - t; ++o) this[o + t] = s[o % a];
              }
              return this;
            });
          var t = /[^+\/0-9A-Za-z-_]/g;
          function B(e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
              })(e).replace(t, '')).length < 2
            )
              return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
          }
          function N(e) {
            return e < 16 ? '0' + e.toString(16) : e.toString(16);
          }
          function O(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
              if (55295 < (r = e.charCodeAt(s)) && r < 57344) {
                if (!i) {
                  if (56319 < r) {
                    -1 < (t -= 3) && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === n) {
                    -1 < (t -= 3) && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  -1 < (t -= 3) && o.push(239, 191, 189), (i = r);
                  continue;
                }
                r = 65536 + (((i - 55296) << 10) | (r - 56320));
              } else i && -1 < (t -= 3) && o.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((t -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error('Invalid code point');
                if ((t -= 4) < 0) break;
                o.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128,
                );
              }
            }
            return o;
          }
          function P(e) {
            return n.toByteArray(B(e));
          }
          function j(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
              t[i + r] = e[i];
            return i;
          }
        }.call(
          this,
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        ));
      },
      { 'base64-js': 37, ieee754: 48, isarray: 51 },
    ],
  },
  {},
  [1],
);
