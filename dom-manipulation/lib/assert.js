// bundled from node's native assert
// replaced "global" with "window"
!(function () {
  function i(t) {
    return (
      null != t &&
      (!!t._isBuffer ||
        e(t) ||
        (function (t) {
          return (
            'function' == typeof t.readFloatLE &&
            'function' == typeof t.slice &&
            e(t.slice(0, 0))
          );
        })(t))
    );
  }
  function e(t) {
    return (
      !!t.constructor &&
      'function' == typeof t.constructor.isBuffer &&
      t.constructor.isBuffer(t)
    );
  }
  var t =
    'function' == typeof Object.create
      ? function (t, e) {
          (t.super_ = e),
            (t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        }
      : function (t, e) {
          t.super_ = e;
          function n() {}
          (n.prototype = e.prototype),
            (t.prototype = new n()),
            (t.prototype.constructor = t);
        };
  function p(t, e) {
    var n = { seen: [], stylize: o };
    return (
      3 <= arguments.length && (n.depth = arguments[2]),
      4 <= arguments.length && (n.colors = arguments[3]),
      h(e)
        ? (n.showHidden = e)
        : e &&
          (function (t, e) {
            if (!e || !u(e)) return;
            var n = Object.keys(e),
              r = n.length;
            for (; r--; ) t[n[r]] = e[n[r]];
          })(n, e),
      v(n.showHidden) && (n.showHidden = !1),
      v(n.depth) && (n.depth = 2),
      v(n.colors) && (n.colors = !1),
      v(n.customInspect) && (n.customInspect = !0),
      n.colors && (n.stylize = r),
      y(n, t, n.depth)
    );
  }
  function r(t, e) {
    var n = p.styles[e];
    return n ? '[' + p.colors[n][0] + 'm' + t + '[' + p.colors[n][1] + 'm' : t;
  }
  function o(t, e) {
    return t;
  }
  function y(e, n, r) {
    if (
      e.customInspect &&
      n &&
      x(n.inspect) &&
      n.inspect !== p &&
      (!n.constructor || n.constructor.prototype !== n)
    ) {
      var t = n.inspect(r, e);
      return m(t) || (t = y(e, t, r)), t;
    }
    var o = (function (t, e) {
      if (v(e)) return t.stylize('undefined', 'undefined');
      if (m(e)) {
        var n =
          "'" +
          JSON.stringify(e)
            .replace(/^"|"$/g, '')
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') +
          "'";
        return t.stylize(n, 'string');
      }
      if (
        (function (t) {
          return 'number' == typeof t;
        })(e)
      )
        return t.stylize('' + e, 'number');
      if (h(e)) return t.stylize('' + e, 'boolean');
      if (b(e)) return t.stylize('null', 'null');
    })(e, n);
    if (o) return o;
    var i = Object.keys(n),
      u = (function (t) {
        var n = {};
        return (
          t.forEach(function (t, e) {
            n[t] = !0;
          }),
          n
        );
      })(i);
    if (
      (e.showHidden && (i = Object.getOwnPropertyNames(n)),
      E(n) && (0 <= i.indexOf('message') || 0 <= i.indexOf('description')))
    )
      return g(n);
    if (0 === i.length) {
      if (x(n)) {
        var c = n.name ? ': ' + n.name : '';
        return e.stylize('[Function' + c + ']', 'special');
      }
      if (O(n)) return e.stylize(RegExp.prototype.toString.call(n), 'regexp');
      if (w(n)) return e.stylize(Date.prototype.toString.call(n), 'date');
      if (E(n)) return g(n);
    }
    var a,
      f = '',
      l = !1,
      s = ['{', '}'];
    !(function (t) {
      return Array.isArray(t);
    })(n) || ((l = !0), (s = ['[', ']'])),
      x(n) && (f = ' [Function' + (n.name ? ': ' + n.name : '') + ']');
    return (
      O(n) && (f = ' ' + RegExp.prototype.toString.call(n)),
      w(n) && (f = ' ' + Date.prototype.toUTCString.call(n)),
      E(n) && (f = ' ' + g(n)),
      0 !== i.length || (l && 0 != n.length)
        ? r < 0
          ? O(n)
            ? e.stylize(RegExp.prototype.toString.call(n), 'regexp')
            : e.stylize('[Object]', 'special')
          : (e.seen.push(n),
            (a = l
              ? (function (e, n, r, o, t) {
                  for (var i = [], u = 0, c = n.length; u < c; ++u)
                    j(n, String(u))
                      ? i.push(d(e, n, r, o, String(u), !0))
                      : i.push('');
                  return (
                    t.forEach(function (t) {
                      t.match(/^\d+$/) || i.push(d(e, n, r, o, t, !0));
                    }),
                    i
                  );
                })(e, n, r, u, i)
              : i.map(function (t) {
                  return d(e, n, r, u, t, l);
                })),
            e.seen.pop(),
            (function (t, e, n) {
              if (
                60 <
                t.reduce(function (t, e) {
                  return (
                    e.indexOf('\n'),
                    t + e.replace(/\u001b\[\d\d?m/g, '').length + 1
                  );
                }, 0)
              )
                return (
                  n[0] +
                  ('' === e ? '' : e + '\n ') +
                  ' ' +
                  t.join(',\n  ') +
                  ' ' +
                  n[1]
                );
              return n[0] + e + ' ' + t.join(', ') + ' ' + n[1];
            })(a, f, s))
        : s[0] + f + s[1]
    );
  }
  function g(t) {
    return '[' + Error.prototype.toString.call(t) + ']';
  }
  function d(t, e, n, r, o, i) {
    var u, c, a;
    if (
      ((a = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get
        ? (c = a.set
            ? t.stylize('[Getter/Setter]', 'special')
            : t.stylize('[Getter]', 'special'))
        : a.set && (c = t.stylize('[Setter]', 'special')),
      j(r, o) || (u = '[' + o + ']'),
      c ||
        (t.seen.indexOf(a.value) < 0
          ? -1 <
              (c = b(n) ? y(t, a.value, null) : y(t, a.value, n - 1)).indexOf(
                '\n',
              ) &&
            (c = i
              ? c
                  .split('\n')
                  .map(function (t) {
                    return '  ' + t;
                  })
                  .join('\n')
                  .substr(2)
              : '\n' +
                c
                  .split('\n')
                  .map(function (t) {
                    return '   ' + t;
                  })
                  .join('\n'))
          : (c = t.stylize('[Circular]', 'special'))),
      v(u))
    ) {
      if (i && o.match(/^\d+$/)) return c;
      u = (u = JSON.stringify('' + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
        ? ((u = u.substr(1, u.length - 2)), t.stylize(u, 'name'))
        : ((u = u
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'")),
          t.stylize(u, 'string'));
    }
    return u + ': ' + c;
  }
  function h(t) {
    return 'boolean' == typeof t;
  }
  function b(t) {
    return null === t;
  }
  function m(t) {
    return 'string' == typeof t;
  }
  function v(t) {
    return void 0 === t;
  }
  function O(t) {
    return u(t) && '[object RegExp]' === n(t);
  }
  function u(t) {
    return 'object' == typeof t && null !== t;
  }
  function w(t) {
    return u(t) && '[object Date]' === n(t);
  }
  function E(t) {
    return u(t) && ('[object Error]' === n(t) || t instanceof Error);
  }
  function x(t) {
    return 'function' == typeof t;
  }
  function l(t) {
    return (
      null === t ||
      'boolean' == typeof t ||
      'number' == typeof t ||
      'string' == typeof t ||
      'symbol' == typeof t ||
      void 0 === t
    );
  }
  function n(t) {
    return Object.prototype.toString.call(t);
  }
  function j(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function c(t, e) {
    if (t === e) return 0;
    for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
      if (t[o] !== e[o]) {
        (n = t[o]), (r = e[o]);
        break;
      }
    return n < r ? -1 : r < n ? 1 : 0;
  }
  (p.colors = {
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
    (p.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red',
    });
  var a,
    f = Object.prototype.hasOwnProperty,
    s =
      Object.keys ||
      function (t) {
        var e = [];
        for (var n in t) f.call(t, n) && e.push(n);
        return e;
      },
    S = Array.prototype.slice;
  function z() {
    return void 0 !== a ? a : (a = 'foo' === function () {}.name);
  }
  function A(t) {
    return Object.prototype.toString.call(t);
  }
  function k(t) {
    return (
      !i(t) &&
      'function' == typeof window.ArrayBuffer &&
      ('function' == typeof ArrayBuffer.isView
        ? ArrayBuffer.isView(t)
        : !!t &&
          (t instanceof DataView ||
            !!(t.buffer && t.buffer instanceof ArrayBuffer)))
    );
  }
  function q(t, e) {
    t || I(t, !0, e, '==', R);
  }
  var D = /\s*function\s+([^\(\s]*)\s*/;
  function F(t) {
    if (x(t)) {
      if (z()) return t.name;
      var e = t.toString().match(D);
      return e && e[1];
    }
  }
  function B(t) {
    (this.name = 'AssertionError'),
      (this.actual = t.actual),
      (this.expected = t.expected),
      (this.operator = t.operator),
      t.message
        ? ((this.message = t.message), (this.generatedMessage = !1))
        : ((this.message = (function (t) {
            return (
              P(T(t.actual), 128) +
              ' ' +
              t.operator +
              ' ' +
              P(T(t.expected), 128)
            );
          })(this)),
          (this.generatedMessage = !0));
    var e = t.stackStartFunction || I;
    if (Error.captureStackTrace) Error.captureStackTrace(this, e);
    else {
      var n = new Error();
      if (n.stack) {
        var r = n.stack,
          o = F(e),
          i = r.indexOf('\n' + o);
        if (0 <= i) {
          var u = r.indexOf('\n', i + 1);
          r = r.substring(u + 1);
        }
        this.stack = r;
      }
    }
  }
  function P(t, e) {
    return 'string' == typeof t ? (t.length < e ? t : t.slice(0, e)) : t;
  }
  function T(t) {
    if (z() || !x(t)) return p(t);
    var e = F(t);
    return '[Function' + (e ? ': ' + e : '') + ']';
  }
  function I(t, e, n, r, o) {
    throw new B({
      message: n,
      actual: t,
      expected: e,
      operator: r,
      stackStartFunction: o,
    });
  }
  function R(t, e) {
    t || I(t, !0, e, '==', R);
  }
  function $(t, e, n, r) {
    if (t === e) return !0;
    if (i(t) && i(e)) return 0 === c(t, e);
    if (w(t) && w(e)) return t.getTime() === e.getTime();
    if (O(t) && O(e))
      return (
        t.source === e.source &&
        t.window === e.window &&
        t.multiline === e.multiline &&
        t.lastIndex === e.lastIndex &&
        t.ignoreCase === e.ignoreCase
      );
    if (
      (null !== t && 'object' == typeof t) ||
      (null !== e && 'object' == typeof e)
    ) {
      if (
        k(t) &&
        k(e) &&
        A(t) === A(e) &&
        !(t instanceof Float32Array || t instanceof Float64Array)
      )
        return 0 === c(new Uint8Array(t.buffer), new Uint8Array(e.buffer));
      if (i(t) !== i(e)) return !1;
      var o = (r = r || { actual: [], expected: [] }).actual.indexOf(t);
      return (
        (-1 !== o && o === r.expected.indexOf(e)) ||
        (r.actual.push(t),
        r.expected.push(e),
        (function (t, e, n, r) {
          if (null == t || null == e) return !1;
          if (l(t) || l(e)) return t === e;
          if (n && Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
            return !1;
          var o = _(t),
            i = _(e);
          if ((o && !i) || (!o && i)) return !1;
          if (o) return (t = S.call(t)), (e = S.call(e)), $(t, e, n);
          var u,
            c,
            a = s(t),
            f = s(e);
          if (a.length !== f.length) return !1;
          for (a.sort(), f.sort(), c = a.length - 1; 0 <= c; c--)
            if (a[c] !== f[c]) return !1;
          for (c = a.length - 1; 0 <= c; c--)
            if (((u = a[c]), !$(t[u], e[u], n, r))) return !1;
          return !0;
        })(t, e, n, r))
      );
    }
    return n ? t === e : t == e;
  }
  function _(t) {
    return '[object Arguments]' == Object.prototype.toString.call(t);
  }
  function C(t, e) {
    if (!t || !e) return !1;
    if ('[object RegExp]' == Object.prototype.toString.call(e))
      return e.test(t);
    try {
      if (t instanceof e) return !0;
    } catch (t) {}
    return !Error.isPrototypeOf(e) && !0 === e.call({}, t);
  }
  function H(t, e, n, r) {
    var o;
    if ('function' != typeof e)
      throw new TypeError('"block" argument must be a function');
    'string' == typeof n && ((r = n), (n = null)),
      (o = (function (t) {
        var e;
        try {
          t();
        } catch (t) {
          e = t;
        }
        return e;
      })(e)),
      (r = (n && n.name ? ' (' + n.name + ').' : '.') + (r ? ' ' + r : '.')),
      t && !o && I(o, n, 'Missing expected exception' + r);
    var i = 'string' == typeof r,
      u = !t && o && !n;
    if (
      (((!t && E(o) && i && C(o, n)) || u) &&
        I(o, n, 'Got unwanted exception' + r),
      (t && o && n && !C(o, n)) || (!t && o))
    )
      throw o;
  }
  t((q.AssertionError = B), Error),
    (q.fail = I),
    (q.ok = R),
    (q.equal = function t(e, n, r) {
      e != n && I(e, n, r, '==', t);
    }),
    (q.notEqual = function t(e, n, r) {
      e == n && I(e, n, r, '!=', t);
    }),
    (q.deepEqual = function t(e, n, r) {
      $(e, n, !1) || I(e, n, r, 'deepEqual', t);
    }),
    (q.deepStrictEqual = function t(e, n, r) {
      $(e, n, !0) || I(e, n, r, 'deepStrictEqual', t);
    }),
    (q.notDeepEqual = function t(e, n, r) {
      $(e, n, !1) && I(e, n, r, 'notDeepEqual', t);
    }),
    (q.notDeepStrictEqual = function t(e, n, r) {
      $(e, n, !0) && I(e, n, r, 'notDeepStrictEqual', t);
    }),
    (q.strictEqual = function t(e, n, r) {
      e !== n && I(e, n, r, '===', t);
    }),
    (q.notStrictEqual = function t(e, n, r) {
      e === n && I(e, n, r, '!==', t);
    }),
    (q.throws = function (t, e, n) {
      H(!0, t, e, n);
    }),
    (q.doesNotThrow = function (t, e, n) {
      H(!1, t, e, n);
    }),
    (q.ifError = function (t) {
      if (t) throw t;
    });
  window.assert = q;
})();
