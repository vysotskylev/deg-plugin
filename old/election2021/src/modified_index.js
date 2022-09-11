console.log("Injected script loaded");

// (function(win) {
//   if (typeof win.HAR == "undefined") {
//     let id = 0;
//     let callsInProgress = new Map();
//     let onRequestFinishedListeners = new Set();

//     /**
//      * Implementation of HAR API. This object represents a wrapper
//      * around various DOM messages sent between the page and
//      * HARTriggerExport extension.
//      */
//     win.HAR = {
//       triggerExport: function(options) {
//         return new window.Promise(function(resolve) {
//           let actionId = ++id;
//           callsInProgress.set(actionId, resolve);

//           let event = new window.CustomEvent("HAR.triggerExport", {
//             detail: {
//               actionId: actionId,
//               options: options,
//             }
//           });

//           document.dispatchEvent(event);
//         });
//       },
//       addRequestListener: function(listener) {
//         onRequestFinishedListeners.add(listener);

//         // Register `onRequestFinished` listener on the backend.
//         // The backend listener is registered dynamically since
//         // it represents performance bottleneck.
//         // All HTTP details data related to the finished request
//         // needs to be fetched from the RDP server and passed to
//         // the listener.
//         // So, don't do it if the page doesn't need it.
//         if (onRequestFinishedListeners.size == 1) {
//           let event = new window.CustomEvent("HAR.addRequestListener");
//           document.dispatchEvent(event);
//         }
//       },
//       removeRequestListener: function(listener) {
//         onRequestFinishedListeners.delete(listener);

//         // Unregister backend listener if it isn't needed anymore.
//         if (onRequestFinishedListeners.size == 0) {
//           let event = new window.CustomEvent("HAR.removeRequestListener");
//           document.dispatchEvent(event);
//         }
//       },
//     };

//     /**
//      * Handle responses for `HAR.triggerExport` messages.
//      */
//     document.addEventListener("HAR.triggerExport-Response", function(event) {
//       let { actionId, harLog } = event.detail;
//       harLog = harLog ? JSON.parse(harLog) : null;
//       let resolve = callsInProgress.get(actionId);
//       if (resolve) {
//         callsInProgress.delete(actionId);
//         resolve(harLog);
//       } else {
//         console.log("HAR API: Unknown HAR response!", event);
//       }
//     });

//     /**
//      * Handle `HAR.onRequestFinished` send when HTTP request finished.
//      */
//     document.addEventListener("HAR.onRequestFinished", function(event) {
//       onRequestFinishedListeners.forEach(listener => {
//         listener(JSON.parse(event.detail.request));
//       })
//     });
//   }
// })(window);


self = window;
!function (t, e) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = e() : 'function' == typeof define && define.amd ? define('ditVoting', [
  ], e) : 'object' == typeof exports ? exports.ditVoting = e() : t.ditVoting = e()
}(window, function () {
  return d = [
    function (t, e, n) {
      'use strict';
      function g(r) {
        function t(t, e, n) {
          if (this instanceof r) {
            switch (arguments.length) {
              case 0:
                return new r;
              case 1:
                return new r(t);
              case 2:
                return new r(t, e)
            }
            return new r(t, e, n)
          }
          return r.apply(this, arguments)
        }
        return t.prototype = r.prototype,
        t
      }
      var _ = n(11),
      m = n(92).f,
      b = n(189),
      w = n(3),
      x = n(24),
      O = n(48),
      S = n(26);
      t.exports = function (t, e) {
        var n,
        r,
        o,
        i,
        s,
        a,
        u,
        c,
        l = t.target,
        f = t.global,
        h = t.stat,
        p = t.proto,
        d = f ? _ : h ? _[l] : (_[l] || {
        }).prototype,
        y = f ? w : w[l] || (w[l] = {
        }),
        v = y.prototype;
        for (o in e) n = !b(f ? o : l + (h ? '.' : '#') + o, t.forced) && d && S(d, o),
        s = y[o],
        n && (a = t.noTargetGet ? (c = m(d, o)) && c.value : d[o]),
        i = n && a ? a : e[o],
        n && typeof s == typeof i || (u = t.bind && n ? x(i, _) : t.wrap && n ? g(i) : p && 'function' == typeof i ? x(Function.call, i) : i, (t.sham || i && i.sham || s && s.sham) && O(u, 'sham', !0), y[o] = u, p && (S(w, r = l + 'Prototype') || O(w, r, {
        }), w[r][o] = i, t.real && v && !v[o] && O(v, o, i)))
      }
    },
    function (t, e, n) {
      t.exports = n(346)
    },
    function (t, e, n) {
      'use strict';
      var r = n(128),
      o = {
      };
      o[n(18) ('toStringTag')] = 'z',
      o + '' != '[object z]' && n(58) (Object.prototype, 'toString', function () {
        return '[object ' + r(this) + ']'
      }, !0)
    },
    function (t, e) {
      t.exports = {
      }
    },
    function (t, e, n) {
      'use strict';
      n(381);
      function r(t) {
        n(58) (RegExp.prototype, a, t, !0)
      }
      var o = n(43),
      i = n(131),
      s = n(39),
      a = 'toString',
      u = /./[a];
      n(29) (function () {
        return '/a/b' != u.call({
          source: 'a',
          flags: 'b'
        })
      }) ? r(function () {
        var t = o(this);
        return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !s && t instanceof RegExp ? i.call(t) : void 0)
      }) : u.name != a && r(function () {
        return u.call(this)
      })
    },
    function (t, e, n) {
      var r = n(12);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + ' is not an object');
        return t
      }
    },
    function (t, e, n) {
      n(56) ('Uint8', 1, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    function (t, e) {
      t.exports = !0
    },
    function (t, e, n) {
      var r = n(11),
      o = n(144),
      i = n(26),
      s = n(117),
      a = n(145),
      u = n(191),
      c = o('wks'),
      l = r.Symbol,
      f = u ? l : l && l.withoutSetter || s;
      t.exports = function (t) {
        return i(c, t) || (a && i(l, t) ? c[t] = l[t] : c[t] = f('Symbol.' + t)),
        c[t]
      }
    },
    function (t, e, n) {
      t.exports = n(481)
    },
    function (n, t, e) {
      (function (t) {
        function e(t) {
          return t && t.Math == Math && t
        }
        n.exports = e('object' == typeof globalThis && globalThis) || e('object' == typeof window && window) || e('object' == typeof self && self) || e('object' == typeof t && t) || Function('return this') ()
      }).call(this, e(91))
    },
    function (t, e) {
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t
      }
    },
    function (e, t, n) {
      var r = n(388),
      o = n(390);
      function i(t) {
        return e.exports = i = 'function' == typeof o && 'symbol' == typeof r ? function (t) {
          return typeof t
        }
         : function (t) {
          return t && 'function' == typeof o && t.constructor === o && t !== o.prototype ? 'symbol' : typeof t
        },
        i(t)
      }
      e.exports = i
    },
    function (t, e, n) {
      t.exports = n(415)
    },
    function (t, e) {
      t.exports = function (t) {
        if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
        return t
      }
    },
    function (t, e, n) {
      function p(t, e) {
        this.stopped = t,
        this.result = e
      }
      var d = n(5),
      y = n(205),
      v = n(42),
      g = n(24),
      _ = n(120),
      m = n(204);
      (t.exports = function (t, e, n, r, o) {
        var i,
        s,
        a,
        u,
        c,
        l,
        f,
        h = g(e, n, r ? 2 : 1);
        if (o) i = t;
         else {
          if ('function' != typeof (s = _(t))) throw TypeError('Target is not iterable');
          if (y(s)) {
            for (a = 0, u = v(t.length); a < u; a++) if ((c = r ? h(d(f = t[a]) [0], f[1]) : h(t[a])) && c instanceof p) return c;
            return new p(!1)
          }
          i = s.call(t)
        }
        for (l = i.next; !(f = l.call(i)).done; ) if ('object' == typeof (c = m(i, h, f.value, r)) && c && c instanceof p) return c;
        return new p(!1)
      }).stop = function (t) {
        return new p(!0, t)
      }
    },
    function (t, e, n) {
      var r = n(3),
      o = n(26),
      i = n(134),
      s = n(41).f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {
        });
        o(e, t) || s(e, t, {
          value: i.f(t)
        })
      }
    },
    function (t, e, n) {
      var r = n(153) ('wks'),
      o = n(99),
      i = n(30).Symbol,
      s = 'function' == typeof i;
      (t.exports = function (t) {
        return r[t] || (r[t] = s && i[t] || (s ? i : o) ('Symbol.' + t))
      }).store = r
    },
    function (t, e, n) {
      var r = n(3);
      t.exports = function (t) {
        return r[t + 'Prototype']
      }
    },
    function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      s = n(46),
      a = n(1),
      u = n(10);
      u(e, '__esModule', {
        value: !0
      });
      var c = {
        version: !0
      };
      e.version = void 0;
      var l = n(262);
      a(r = s(l)).call(r, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
          enumerable: !0,
          get: function () {
            return l[t]
          }
        }))
      });
      var f = n(88);
      a(o = s(f)).call(o, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
          enumerable: !0,
          get: function () {
            return f[t]
          }
        }))
      });
      var h = n(548);
      a(i = s(h)).call(i, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
          enumerable: !0,
          get: function () {
            return h[t]
          }
        }))
      });
      e.version = '0.18.3'
    },
    function (t, e, n) {
      t.exports = n(498)
    },
    function (t, e, n) {
      var r = n(7);
      t.exports = !r(function () {
        return 7 != Object.defineProperty({
        }, 1, {
          get: function () {
            return 7
          }
        }) [1]
      })
    },
    function (t, e, n) {
      t.exports = n(430)
    },
    function (t, e, n) {
      var i = n(15);
      t.exports = function (r, o, t) {
        if (i(r), void 0 === o) return r;
        switch (t) {
          case 0:
            return function () {
              return r.call(o)
            };
          case 1:
            return function (t) {
              return r.call(o, t)
            };
          case 2:
            return function (t, e) {
              return r.call(o, t, e)
            };
          case 3:
            return function (t, e, n) {
              return r.call(o, t, e, n)
            }
        }
        return function () {
          return r.apply(o, arguments)
        }
      }
    },
    function (t, e, n) {
      t.exports = n(307)
    },
    function (t, e) {
      var n = {
      }.hasOwnProperty;
      t.exports = function (t, e) {
        return n.call(t, e)
      }
    },
    function (t, e, n) {
      t.exports = n(386)
    },
    function (t, e, n) {
      t.exports = n(446)
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    function (t, e) {
      var n = t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this') ();
      'number' == typeof __g && (__g = n)
    },
    function (t, e, n) {
      t.exports = n(419)
    },
    function (t, e, n) {
      'use strict';
      var i = n(14);
      n(33);
      var r = n(247),
      o = n(135),
      s = n(13);
      n(4),
      n(2);
      var a = n(249),
      u = Object.prototype.toString;
      function c(t) {
        return '[object Array]' === u.call(t)
      }
      function l(t) {
        return void 0 === t
      }
      function f(t) {
        return null !== t && 'object' === s(t)
      }
      function h(t) {
        if ('[object Object]' !== u.call(t)) return !1;
        var e = o(t);
        return null === e || e === Object.prototype
      }
      function p(t) {
        return '[object Function]' === u.call(t)
      }
      function d(t, e) {
        if (null != t) if ('object' !== s(t) && (t = [
          t
        ]), c(t)) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
         else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
      }
      t.exports = {
        isArray: c,
        isArrayBuffer: function (t) {
          return '[object ArrayBuffer]' === u.call(t)
        },
        isBuffer: function (t) {
          return null !== t && !l(t) && null !== t.constructor && !l(t.constructor) && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
          return 'undefined' != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
          return 'string' == typeof t
        },
        isNumber: function (t) {
          return 'number' == typeof t
        },
        isObject: f,
        isPlainObject: h,
        isUndefined: l,
        isDate: function (t) {
          return '[object Date]' === u.call(t)
        },
        isFile: function (t) {
          return '[object File]' === u.call(t)
        },
        isBlob: function (t) {
          return '[object Blob]' === u.call(t)
        },
        isFunction: p,
        isStream: function (t) {
          return f(t) && p(t.pipe)
        },
        isURLSearchParams: function (t) {
          return void 0 !== r && t instanceof r
        },
        isStandardBrowserEnv: function () {
          return ('undefined' == typeof navigator || 'ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product) && ('undefined' != typeof window && 'undefined' != typeof document)
        },
        forEach: d,
        merge: function n() {
          var r = {
          };
          function t(t, e) {
            h(r[e]) && h(t) ? r[e] = n(r[e], t) : h(t) ? r[e] = n({
            }, t) : c(t) ? r[e] = i(t).call(t) : r[e] = t
          }
          for (var e = 0, o = arguments.length; e < o; e++) d(arguments[e], t);
          return r
        },
        extend: function (n, t, r) {
          return d(t, function (t, e) {
            n[e] = r && 'function' == typeof t ? a(t, r) : t
          }),
          n
        },
        trim: function (t) {
          return t.replace(/^\s*/, '').replace(/\s*$/, '')
        },
        stripBOM: function (t) {
          return 65279 === t.charCodeAt(0) && (t = i(t).call(t, 1)),
          t
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var S = n(43),
      r = n(70),
      k = n(44),
      E = n(68),
      P = n(168),
      A = n(132),
      j = Math.max,
      T = Math.min,
      h = Math.floor,
      p = /\$([$&`']|\d\d?|<[^>]*>)/g,
      d = /\$([$&`']|\d\d?)/g;
      n(133) ('replace', 2, function (o, i, w, x) {
        return [function (t, e) {
          var n = o(this),
          r = null == t ? void 0 : t[i];
          return void 0 !== r ? r.call(t, n, e) : w.call(String(n), t, e)
        },
        function (t, e) {
          var n = x(w, t, this, e);
          if (n.done) return n.value;
          var r = S(t),
          o = String(this),
          i = 'function' == typeof e;
          i || (e = String(e));
          var s = r.global;
          if (s) {
            var a = r.unicode;
            r.lastIndex = 0
          }
          for (var u = [
          ]; ; ) {
            var c = A(r, o);
            if (null === c) break;
            if (u.push(c), !s) break;
            '' === String(c[0]) && (r.lastIndex = P(o, k(r.lastIndex), a))
          }
          for (var l, f = '', h = 0, p = 0; p < u.length; p++) {
            c = u[p];
            for (var d = String(c[0]), y = j(T(E(c.index), o.length), 0), v = [
            ], g = 1; g < c.length; g++) v.push(void 0 === (l = c[g]) ? l : String(l));
            var _ = c.groups;
            if (i) {
              var m = [
                d
              ].concat(v, y, o);
              void 0 !== _ && m.push(_);
              var b = String(e.apply(void 0, m))
            } else b = O(d, o, y, v, _, e);
            h <= y && (f += o.slice(h, y) + b, h = y + d.length)
          }
          return f + o.slice(h)
        }
        ];
        function O(i, s, a, u, c, t) {
          var l = a + i.length,
          f = u.length,
          e = d;
          return void 0 !== c && (c = r(c), e = p),
          w.call(t, e, function (t, e) {
            var n;
            switch (e.charAt(0)) {
              case '$':
                return '$';
              case '&':
                return i;
              case '`':
                return s.slice(0, a);
              case '\'':
                return s.slice(l);
              case '<':
                n = c[e.slice(1, - 1)];
                break;
              default:
                var r = + e;
                if (0 == r) return t;
                if (f < r) {
                  var o = h(r / 10);
                  return 0 === o ? t : o <= f ? void 0 === u[o - 1] ? e.charAt(1) : u[o - 1] + e.charAt(1) : t
                }
                n = u[r - 1]
            }
            return void 0 === n ? '' : n
          })
        }
      })
    },
    function (t, e, n) {
      'use strict';
      n(33);
      var r = n(247),
      i = n(13);
      n(4),
      n(2);
      var o = n(291),
      s = Object.prototype.toString;
      function a(t) {
        return '[object Array]' === s.call(t)
      }
      function u(t) {
        return void 0 === t
      }
      function c(t) {
        return null !== t && 'object' === i(t)
      }
      function l(t) {
        return '[object Function]' === s.call(t)
      }
      function f(t, e) {
        if (null != t) if ('object' !== i(t) && (t = [
          t
        ]), a(t)) for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
         else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
      }
      t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
          return '[object ArrayBuffer]' === s.call(t)
        },
        isBuffer: function (t) {
          return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function (t) {
          return 'undefined' != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function (t) {
          return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function (t) {
          return 'string' == typeof t
        },
        isNumber: function (t) {
          return 'number' == typeof t
        },
        isObject: c,
        isUndefined: u,
        isDate: function (t) {
          return '[object Date]' === s.call(t)
        },
        isFile: function (t) {
          return '[object File]' === s.call(t)
        },
        isBlob: function (t) {
          return '[object Blob]' === s.call(t)
        },
        isFunction: l,
        isStream: function (t) {
          return c(t) && l(t.pipe)
        },
        isURLSearchParams: function (t) {
          return void 0 !== r && t instanceof r
        },
        isStandardBrowserEnv: function () {
          return ('undefined' == typeof navigator || 'ReactNative' !== navigator.product && 'NativeScript' !== navigator.product && 'NS' !== navigator.product) && ('undefined' != typeof window && 'undefined' != typeof document)
        },
        forEach: f,
        merge: function n() {
          var r = {
          };
          function t(t, e) {
            'object' === i(r[e]) && 'object' === i(t) ? r[e] = n(r[e], t) : r[e] = t
          }
          for (var e = 0, o = arguments.length; e < o; e++) f(arguments[e], t);
          return r
        },
        deepMerge: function n() {
          var r = {
          };
          function t(t, e) {
            'object' === i(r[e]) && 'object' === i(t) ? r[e] = n(r[e], t) : 'object' === i(t) ? r[e] = n({
            }, t) : r[e] = t
          }
          for (var e = 0, o = arguments.length; e < o; e++) f(arguments[e], t);
          return r
        },
        extend: function (n, t, r) {
          return f(t, function (t, e) {
            n[e] = r && 'function' == typeof t ? o(t, r) : t
          }),
          n
        },
        trim: function (t) {
          return t.replace(/^\s*/, '').replace(/\s*$/, '')
        }
      }
    },
    function (t, e, n) {
      var r,
      o,
      i,
      D = n(21),
      V = n(27);
      n(138),
      n(4),
      n(2);
      var F = n(31);
      n(87);
      var K = n(14),
      q = n(46),
      z = n(13);
      o = [
        n(657)
      ],
      void 0 === (i = 'function' == typeof (r = function (N) {
        'use strict';
        var C = N.Reader,
        U = N.Writer,
        M = N.util,
        H = N.roots['default'] || (N.roots['default'] = {
        });
        return H.exonum = function () {
          var t,
          e = {
          };
          function n(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function r(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function o(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          return e.crypto = ((t = {
          }).Hash = (n.prototype.data = M.newBuffer([]), n.create = function (t) {
            return new n(t)
          }, n.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, n.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, n.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.exonum.crypto.Hash; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, n.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, n.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, n.fromObject = function (t) {
            if (t instanceof H.exonum.crypto.Hash) return t;
            var e = new H.exonum.crypto.Hash;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, n.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, n.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, n), t.PublicKey = (r.prototype.data = M.newBuffer([]), r.create = function (t) {
            return new r(t)
          }, r.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, r.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, r.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.exonum.crypto.PublicKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, r.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, r.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, r.fromObject = function (t) {
            if (t instanceof H.exonum.crypto.PublicKey) return t;
            var e = new H.exonum.crypto.PublicKey;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, r.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, r.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, r), t.BitVec = (o.prototype.data = M.newBuffer([]), o.prototype.len = M.Long ? M.Long.fromBits(0, 0, !0) : 0, o.create = function (t) {
            return new o(t)
          }, o.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            null != t.len && t.hasOwnProperty('len') && e.uint32(16).uint64(t.len),
            e
          }, o.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, o.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.exonum.crypto.BitVec; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                case 2:
                  r.len = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, o.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, o.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null != t.len && t.hasOwnProperty('len') && !(M.isInteger(t.len) || t.len && M.isInteger(t.len.low) && M.isInteger(t.len.high)) ? 'len: integer|Long expected' : null
          }, o.fromObject = function (t) {
            if (t instanceof H.exonum.crypto.BitVec) return t;
            var e = new H.exonum.crypto.BitVec;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            null != t.len && (M.Long ? (e.len = M.Long.fromValue(t.len)).unsigned = !0 : 'string' == typeof t.len ? e.len = F(t.len, 10) : 'number' == typeof t.len ? e.len = t.len : 'object' === z(t.len) && (e.len = new M.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0))),
            e
          }, o.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data))), M.Long) {
              var r = new M.Long(0, 0, !0);
              n.len = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.len = e.longs === String ? '0' : 0;
            return null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            null != t.len && t.hasOwnProperty('len') && ('number' == typeof t.len ? n.len = e.longs === String ? String(t.len) : t.len : n.len = e.longs === String ? M.Long.prototype.toString.call(t.len) : e.longs === Number ? new M.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0) : t.len),
            n
          }, o.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, o), t),
          e
        }(),
        H.votings_service = function () {
          var t,
          e,
          n = {
          };
          function r(t) {
            if (this.api_public_keys = [
            ], t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function o(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function i(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function s(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function a(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function u(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function c(t) {
            if (this.options = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function l(t) {
            if (this.ballots_config = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function f(t) {
            if (this.issued_ballots_counter = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function h(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function p(t) {
            if (this.data = [
            ], t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function d(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function y(t) {
            if (this.decrypted_choices = [
            ], t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function v(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function g(t) {
            if (this.tally = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function _(t) {
            if (this.stored_ballots_counter = {
            }, this.voting_results = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function m(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function b(t) {
            if (this.tally = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function w(t) {
            if (this.options = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function x(t) {
            if (this.ballots_config = [
            ], t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function O(t) {
            if (this.voters = [
            ], t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function S(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function k(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function E(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function P(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function A(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function j(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function T(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function B(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function R(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function L(t) {
            if (t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function I(t) {
            if (this.results = {
            }, t) for (var e = q(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          return n.ServiceConfig = (r.prototype.api_public_keys = M.emptyArray, r.create = function (t) {
            return new r(t)
          }, r.encode = function (t, e) {
            if (e = e || U.create(), null != t.api_public_keys && t.api_public_keys.length) for (var n = 0; n < t.api_public_keys.length; ++n) e.uint32(10).string(t.api_public_keys[n]);
            return e
          }, r.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, r.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.ServiceConfig; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.api_public_keys && r.api_public_keys.length || (r.api_public_keys = [
                  ]),
                  r.api_public_keys.push(t.string());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, r.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, r.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.api_public_keys && t.hasOwnProperty('api_public_keys')) {
              if (!V(t.api_public_keys)) return 'api_public_keys: array expected';
              for (var e = 0; e < t.api_public_keys.length; ++e) if (!M.isString(t.api_public_keys[e])) return 'api_public_keys: string[] expected'
            }
            return null
          }, r.fromObject = function (t) {
            if (t instanceof H.votings_service.ServiceConfig) return t;
            var e = new H.votings_service.ServiceConfig;
            if (t.api_public_keys) {
              if (!V(t.api_public_keys)) throw TypeError('.votings_service.ServiceConfig.api_public_keys: array expected');
              e.api_public_keys = [
              ];
              for (var n = 0; n < t.api_public_keys.length; ++n) e.api_public_keys[n] = String(t.api_public_keys[n])
            }
            return e
          }, r.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.api_public_keys = [
            ]), t.api_public_keys && t.api_public_keys.length) {
              n.api_public_keys = [
              ];
              for (var r = 0; r < t.api_public_keys.length; ++r) n.api_public_keys[r] = t.api_public_keys[r]
            }
            return n
          }, r.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, r),
          n.BigUint = (o.prototype.data = M.newBuffer([]), o.create = function (t) {
            return new o(t)
          }, o.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, o.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, o.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.BigUint; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, o.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, o.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, o.fromObject = function (t) {
            if (t instanceof H.votings_service.BigUint) return t;
            var e = new H.votings_service.BigUint;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, o.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, o.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, o),
          n.SealedBoxPublicKey = (i.prototype.data = M.newBuffer([]), i.create = function (t) {
            return new i(t)
          }, i.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, i.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, i.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.SealedBoxPublicKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, i.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, i.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, i.fromObject = function (t) {
            if (t instanceof H.votings_service.SealedBoxPublicKey) return t;
            var e = new H.votings_service.SealedBoxPublicKey;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, i.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, i.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, i),
          n.SealedBoxSecretKey = (s.prototype.data = M.newBuffer([]), s.create = function (t) {
            return new s(t)
          }, s.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, s.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, s.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.SealedBoxSecretKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, s.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, s.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, s.fromObject = function (t) {
            if (t instanceof H.votings_service.SealedBoxSecretKey) return t;
            var e = new H.votings_service.SealedBoxSecretKey;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, s.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, s.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, s),
          n.SealedBoxNonce = (a.prototype.data = M.newBuffer([]), a.create = function (t) {
            return new a(t)
          }, a.encode = function (t, e) {
            return e = e || U.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, a.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, a.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.SealedBoxNonce; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, a.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, a.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || M.isString(t.data)) ? 'data: buffer expected' : null
          }, a.fromObject = function (t) {
            if (t instanceof H.votings_service.SealedBoxNonce) return t;
            var e = new H.votings_service.SealedBoxNonce;
            return null != t.data && ('string' == typeof t.data ? M.base64.decode(t.data, e.data = M.newBuffer(M.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, a.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = M.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? M.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? K(Array.prototype).call(t.data) : t.data),
            n
          }, a.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, a),
          n.VotingState = ((e = D(t = {
          })) [t[0] = 'Registration'] = 0, e[t[1] = 'InProcess'] = 1, e[t[2] = 'Stopped'] = 2, e[t[3] = 'Finished'] = 3, e),
          n.CryptoSystemSettings = (u.prototype.public_key = null, u.prototype.private_key = null, u.create = function (t) {
            return new u(t)
          }, u.encode = function (t, e) {
            return e = e || U.create(),
            null != t.public_key && t.hasOwnProperty('public_key') && H.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(10).fork()).ldelim(),
            null != t.private_key && t.hasOwnProperty('private_key') && H.votings_service.SealedBoxSecretKey.encode(t.private_key, e.uint32(18).fork()).ldelim(),
            e
          }, u.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, u.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.CryptoSystemSettings; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.public_key = H.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                  break;
                case 2:
                  r.private_key = H.votings_service.SealedBoxSecretKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, u.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, u.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.public_key && t.hasOwnProperty('public_key') && (e = H.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? 'public_key.' + e : null != t.private_key && t.hasOwnProperty('private_key') && (e = H.votings_service.SealedBoxSecretKey.verify(t.private_key)) ? 'private_key.' + e : null;
            var e
          }, u.fromObject = function (t) {
            if (t instanceof H.votings_service.CryptoSystemSettings) return t;
            var e = new H.votings_service.CryptoSystemSettings;
            if (null != t.public_key) {
              if ('object' !== z(t.public_key)) throw TypeError('.votings_service.CryptoSystemSettings.public_key: object expected');
              e.public_key = H.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
            }
            if (null != t.private_key) {
              if ('object' !== z(t.private_key)) throw TypeError('.votings_service.CryptoSystemSettings.private_key: object expected');
              e.private_key = H.votings_service.SealedBoxSecretKey.fromObject(t.private_key)
            }
            return e
          }, u.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.public_key = null, n.private_key = null),
            null != t.public_key && t.hasOwnProperty('public_key') && (n.public_key = H.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)),
            null != t.private_key && t.hasOwnProperty('private_key') && (n.private_key = H.votings_service.SealedBoxSecretKey.toObject(t.private_key, e)),
            n
          }, u.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, u),
          n.BallotConfig = (c.prototype.district_id = 0, c.prototype.question = '', c.prototype.options = M.emptyObject, c.prototype.min_choices = 0, c.prototype.max_choices = 0, c.create = function (t) {
            return new c(t)
          }, c.encode = function (t, e) {
            if (e = e || U.create(), null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(8).uint32(t.district_id), null != t.question && t.hasOwnProperty('question') && e.uint32(18).string(t.question), null != t.options && t.hasOwnProperty('options')) for (var n = q(t.options), r = 0; r < n.length; ++r) e.uint32(26).fork().uint32(8).uint32(n[r]).uint32(18).string(t.options[n[r]]).ldelim();
            return null != t.min_choices && t.hasOwnProperty('min_choices') && e.uint32(32).uint32(t.min_choices),
            null != t.max_choices && t.hasOwnProperty('max_choices') && e.uint32(40).uint32(t.max_choices),
            e
          }, c.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, c.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.BallotConfig; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.district_id = t.uint32();
                  break;
                case 2:
                  o.question = t.string();
                  break;
                case 3:
                  t.skip().pos++,
                  o.options === M.emptyObject && (o.options = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.options[n] = t.string();
                  break;
                case 4:
                  o.min_choices = t.uint32();
                  break;
                case 5:
                  o.max_choices = t.uint32();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, c.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, c.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.question && t.hasOwnProperty('question') && !M.isString(t.question)) return 'question: string expected';
            if (null != t.options && t.hasOwnProperty('options')) {
              if (!M.isObject(t.options)) return 'options: object expected';
              for (var e = q(t.options), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'options: integer key{k:uint32} expected';
                if (!M.isString(t.options[e[n]])) return 'options: string{k:uint32} expected'
              }
            }
            return null != t.min_choices && t.hasOwnProperty('min_choices') && !M.isInteger(t.min_choices) ? 'min_choices: integer expected' : null != t.max_choices && t.hasOwnProperty('max_choices') && !M.isInteger(t.max_choices) ? 'max_choices: integer expected' : null
          }, c.fromObject = function (t) {
            if (t instanceof H.votings_service.BallotConfig) return t;
            var e = new H.votings_service.BallotConfig;
            if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.question && (e.question = String(t.question)), t.options) {
              if ('object' !== z(t.options)) throw TypeError('.votings_service.BallotConfig.options: object expected');
              e.options = {
              };
              for (var n = q(t.options), r = 0; r < n.length; ++r) e.options[n[r]] = String(t.options[n[r]])
            }
            return null != t.min_choices && (e.min_choices = t.min_choices >>> 0),
            null != t.max_choices && (e.max_choices = t.max_choices >>> 0),
            e
          }, c.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.options = {
            }), e.defaults && (r.district_id = 0, r.question = '', r.min_choices = 0, r.max_choices = 0), null != t.district_id && t.hasOwnProperty('district_id') && (r.district_id = t.district_id), null != t.question && t.hasOwnProperty('question') && (r.question = t.question), t.options && (n = q(t.options)).length) {
              r.options = {
              };
              for (var o = 0; o < n.length; ++o) r.options[n[o]] = t.options[n[o]]
            }
            return null != t.min_choices && t.hasOwnProperty('min_choices') && (r.min_choices = t.min_choices),
            null != t.max_choices && t.hasOwnProperty('max_choices') && (r.max_choices = t.max_choices),
            r
          }, c.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, c),
          n.Voting = (l.prototype.voting_id = '', l.prototype.crypto_system = null, l.prototype.ballots_config = M.emptyObject, l.prototype.state = 0, l.prototype.revote_enabled = !1, l.create = function (t) {
            return new l(t)
          }, l.encode = function (t, e) {
            if (e = e || U.create(), null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id), null != t.crypto_system && t.hasOwnProperty('crypto_system') && H.votings_service.CryptoSystemSettings.encode(t.crypto_system, e.uint32(18).fork()).ldelim(), null != t.ballots_config && t.hasOwnProperty('ballots_config')) for (var n = q(t.ballots_config), r = 0; r < n.length; ++r) e.uint32(26).fork().uint32(8).uint32(n[r]),
            H.votings_service.BallotConfig.encode(t.ballots_config[n[r]], e.uint32(18).fork()).ldelim().ldelim();
            return null != t.state && t.hasOwnProperty('state') && e.uint32(32).int32(t.state),
            null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && e.uint32(40).bool(t.revote_enabled),
            e
          }, l.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, l.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.Voting; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.voting_id = t.string();
                  break;
                case 2:
                  o.crypto_system = H.votings_service.CryptoSystemSettings.decode(t, t.uint32());
                  break;
                case 3:
                  t.skip().pos++,
                  o.ballots_config === M.emptyObject && (o.ballots_config = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.ballots_config[n] = H.votings_service.BallotConfig.decode(t, t.uint32());
                  break;
                case 4:
                  o.state = t.int32();
                  break;
                case 5:
                  o.revote_enabled = t.bool();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, l.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, l.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.crypto_system && t.hasOwnProperty('crypto_system') && (r = H.votings_service.CryptoSystemSettings.verify(t.crypto_system))) return 'crypto_system.' + r;
            if (null != t.ballots_config && t.hasOwnProperty('ballots_config')) {
              if (!M.isObject(t.ballots_config)) return 'ballots_config: object expected';
              for (var e = q(t.ballots_config), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'ballots_config: integer key{k:uint32} expected';
                var r;
                if (r = H.votings_service.BallotConfig.verify(t.ballots_config[e[n]])) return 'ballots_config.' + r
              }
            }
            if (null != t.state && t.hasOwnProperty('state')) switch (t.state) {
              default:
                return 'state: enum value expected';
              case 0:
              case 1:
              case 2:
              case 3:
            }
            return null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && 'boolean' != typeof t.revote_enabled ? 'revote_enabled: boolean expected' : null
          }, l.fromObject = function (t) {
            if (t instanceof H.votings_service.Voting) return t;
            var e = new H.votings_service.Voting;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.crypto_system) {
              if ('object' !== z(t.crypto_system)) throw TypeError('.votings_service.Voting.crypto_system: object expected');
              e.crypto_system = H.votings_service.CryptoSystemSettings.fromObject(t.crypto_system)
            }
            if (t.ballots_config) {
              if ('object' !== z(t.ballots_config)) throw TypeError('.votings_service.Voting.ballots_config: object expected');
              e.ballots_config = {
              };
              for (var n = q(t.ballots_config), r = 0; r < n.length; ++r) {
                if ('object' !== z(t.ballots_config[n[r]])) throw TypeError('.votings_service.Voting.ballots_config: object expected');
                e.ballots_config[n[r]] = H.votings_service.BallotConfig.fromObject(t.ballots_config[n[r]])
              }
            }
            switch (t.state) {
              case 'Registration':
              case 0:
                e.state = 0;
                break;
              case 'InProcess':
              case 1:
                e.state = 1;
                break;
              case 'Stopped':
              case 2:
                e.state = 2;
                break;
              case 'Finished':
              case 3:
                e.state = 3
            }
            return null != t.revote_enabled && (e.revote_enabled = Boolean(t.revote_enabled)),
            e
          }, l.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.ballots_config = {
            }), e.defaults && (r.voting_id = '', r.crypto_system = null, r.state = e.enums === String ? 'Registration' : 0, r.revote_enabled = !1), null != t.voting_id && t.hasOwnProperty('voting_id') && (r.voting_id = t.voting_id), null != t.crypto_system && t.hasOwnProperty('crypto_system') && (r.crypto_system = H.votings_service.CryptoSystemSettings.toObject(t.crypto_system, e)), t.ballots_config && (n = q(t.ballots_config)).length) {
              r.ballots_config = {
              };
              for (var o = 0; o < n.length; ++o) r.ballots_config[n[o]] = H.votings_service.BallotConfig.toObject(t.ballots_config[n[o]], e)
            }
            return null != t.state && t.hasOwnProperty('state') && (r.state = e.enums === String ? H.votings_service.VotingState[t.state] : t.state),
            null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && (r.revote_enabled = t.revote_enabled),
            r
          }, l.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, l),
          n.VotersRegistry = (f.prototype.voting_id = '', f.prototype.voters_amount = 0, f.prototype.issued_ballots_counter = M.emptyObject, f.create = function (t) {
            return new f(t)
          }, f.encode = function (t, e) {
            if (e = e || U.create(), null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id), null != t.voters_amount && t.hasOwnProperty('voters_amount') && e.uint32(16).uint32(t.voters_amount), null != t.issued_ballots_counter && t.hasOwnProperty('issued_ballots_counter')) for (var n = q(t.issued_ballots_counter), r = 0; r < n.length; ++r) e.uint32(26).fork().uint32(8).uint32(n[r]).uint32(16).uint32(t.issued_ballots_counter[n[r]]).ldelim();
            return e
          }, f.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, f.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.VotersRegistry; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.voting_id = t.string();
                  break;
                case 2:
                  o.voters_amount = t.uint32();
                  break;
                case 3:
                  t.skip().pos++,
                  o.issued_ballots_counter === M.emptyObject && (o.issued_ballots_counter = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.issued_ballots_counter[n] = t.uint32();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, f.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, f.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.voters_amount && t.hasOwnProperty('voters_amount') && !M.isInteger(t.voters_amount)) return 'voters_amount: integer expected';
            if (null != t.issued_ballots_counter && t.hasOwnProperty('issued_ballots_counter')) {
              if (!M.isObject(t.issued_ballots_counter)) return 'issued_ballots_counter: object expected';
              for (var e = q(t.issued_ballots_counter), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'issued_ballots_counter: integer key{k:uint32} expected';
                if (!M.isInteger(t.issued_ballots_counter[e[n]])) return 'issued_ballots_counter: integer{k:uint32} expected'
              }
            }
            return null
          }, f.fromObject = function (t) {
            if (t instanceof H.votings_service.VotersRegistry) return t;
            var e = new H.votings_service.VotersRegistry;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voters_amount && (e.voters_amount = t.voters_amount >>> 0), t.issued_ballots_counter) {
              if ('object' !== z(t.issued_ballots_counter)) throw TypeError('.votings_service.VotersRegistry.issued_ballots_counter: object expected');
              e.issued_ballots_counter = {
              };
              for (var n = q(t.issued_ballots_counter), r = 0; r < n.length; ++r) e.issued_ballots_counter[n[r]] = t.issued_ballots_counter[n[r]] >>> 0
            }
            return e
          }, f.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.issued_ballots_counter = {
            }), e.defaults && (r.voting_id = '', r.voters_amount = 0), null != t.voting_id && t.hasOwnProperty('voting_id') && (r.voting_id = t.voting_id), null != t.voters_amount && t.hasOwnProperty('voters_amount') && (r.voters_amount = t.voters_amount), t.issued_ballots_counter && (n = q(t.issued_ballots_counter)).length) {
              r.issued_ballots_counter = {
              };
              for (var o = 0; o < n.length; ++o) r.issued_ballots_counter[n[o]] = t.issued_ballots_counter[n[o]]
            }
            return r
          }, f.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, f),
          n.Voter = (h.prototype.voter_id = '', h.prototype.is_participation_revoked = !1, h.prototype.ballot_issuing_district = 0, h.create = function (t) {
            return new h(t)
          }, h.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voter_id && t.hasOwnProperty('voter_id') && e.uint32(10).string(t.voter_id),
            null != t.is_participation_revoked && t.hasOwnProperty('is_participation_revoked') && e.uint32(16).bool(t.is_participation_revoked),
            null != t.ballot_issuing_district && t.hasOwnProperty('ballot_issuing_district') && e.uint32(24).uint32(t.ballot_issuing_district),
            e
          }, h.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, h.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.Voter; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voter_id = t.string();
                  break;
                case 2:
                  r.is_participation_revoked = t.bool();
                  break;
                case 3:
                  r.ballot_issuing_district = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, h.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, h.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voter_id && t.hasOwnProperty('voter_id') && !M.isString(t.voter_id) ? 'voter_id: string expected' : null != t.is_participation_revoked && t.hasOwnProperty('is_participation_revoked') && 'boolean' != typeof t.is_participation_revoked ? 'is_participation_revoked: boolean expected' : null != t.ballot_issuing_district && t.hasOwnProperty('ballot_issuing_district') && !M.isInteger(t.ballot_issuing_district) ? 'ballot_issuing_district: integer expected' : null
          }, h.fromObject = function (t) {
            if (t instanceof H.votings_service.Voter) return t;
            var e = new H.votings_service.Voter;
            return null != t.voter_id && (e.voter_id = String(t.voter_id)),
            null != t.is_participation_revoked && (e.is_participation_revoked = Boolean(t.is_participation_revoked)),
            null != t.ballot_issuing_district && (e.ballot_issuing_district = t.ballot_issuing_district >>> 0),
            e
          }, h.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.voter_id = '', n.is_participation_revoked = !1, n.ballot_issuing_district = 0),
            null != t.voter_id && t.hasOwnProperty('voter_id') && (n.voter_id = t.voter_id),
            null != t.is_participation_revoked && t.hasOwnProperty('is_participation_revoked') && (n.is_participation_revoked = t.is_participation_revoked),
            null != t.ballot_issuing_district && t.hasOwnProperty('ballot_issuing_district') && (n.ballot_issuing_district = t.ballot_issuing_district),
            n
          }, h.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, h),
          n.Choices = (p.prototype.data = M.emptyArray, p.create = function (t) {
            return new p(t)
          }, p.encode = function (t, e) {
            if (e = e || U.create(), null != t.data && t.data.length) {
              e.uint32(10).fork();
              for (var n = 0; n < t.data.length; ++n) e.uint32(t.data[n]);
              e.ldelim()
            }
            return e
          }, p.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, p.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.Choices; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  if (r.data && r.data.length || (r.data = [
                  ]), 2 == (7 & o)) for (var i = t.uint32() + t.pos; t.pos < i; ) r.data.push(t.uint32());
                   else r.data.push(t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, p.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, p.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.data && t.hasOwnProperty('data')) {
              if (!V(t.data)) return 'data: array expected';
              for (var e = 0; e < t.data.length; ++e) if (!M.isInteger(t.data[e])) return 'data: integer[] expected'
            }
            return null
          }, p.fromObject = function (t) {
            if (t instanceof H.votings_service.Choices) return t;
            var e = new H.votings_service.Choices;
            if (t.data) {
              if (!V(t.data)) throw TypeError('.votings_service.Choices.data: array expected');
              e.data = [
              ];
              for (var n = 0; n < t.data.length; ++n) e.data[n] = t.data[n] >>> 0
            }
            return e
          }, p.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.data = [
            ]), t.data && t.data.length) {
              n.data = [
              ];
              for (var r = 0; r < t.data.length; ++r) n.data[r] = t.data[r]
            }
            return n
          }, p.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, p),
          n.EncryptedChoice = (d.prototype.encrypted_message = M.newBuffer([]), d.prototype.nonce = null, d.prototype.public_key = null, d.create = function (t) {
            return new d(t)
          }, d.encode = function (t, e) {
            return e = e || U.create(),
            null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && e.uint32(10).bytes(t.encrypted_message),
            null != t.nonce && t.hasOwnProperty('nonce') && H.votings_service.SealedBoxNonce.encode(t.nonce, e.uint32(18).fork()).ldelim(),
            null != t.public_key && t.hasOwnProperty('public_key') && H.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(26).fork()).ldelim(),
            e
          }, d.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, d.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.EncryptedChoice; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.encrypted_message = t.bytes();
                  break;
                case 2:
                  r.nonce = H.votings_service.SealedBoxNonce.decode(t, t.uint32());
                  break;
                case 3:
                  r.public_key = H.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, d.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, d.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && !(t.encrypted_message && 'number' == typeof t.encrypted_message.length || M.isString(t.encrypted_message)) ? 'encrypted_message: buffer expected' : null != t.nonce && t.hasOwnProperty('nonce') && (e = H.votings_service.SealedBoxNonce.verify(t.nonce)) ? 'nonce.' + e : null != t.public_key && t.hasOwnProperty('public_key') && (e = H.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? 'public_key.' + e : null;
            var e
          }, d.fromObject = function (t) {
            if (t instanceof H.votings_service.EncryptedChoice) return t;
            var e = new H.votings_service.EncryptedChoice;
            if (null != t.encrypted_message && ('string' == typeof t.encrypted_message ? M.base64.decode(t.encrypted_message, e.encrypted_message = M.newBuffer(M.base64.length(t.encrypted_message)), 0) : t.encrypted_message.length && (e.encrypted_message = t.encrypted_message)), null != t.nonce) {
              if ('object' !== z(t.nonce)) throw TypeError('.votings_service.EncryptedChoice.nonce: object expected');
              e.nonce = H.votings_service.SealedBoxNonce.fromObject(t.nonce)
            }
            if (null != t.public_key) {
              if ('object' !== z(t.public_key)) throw TypeError('.votings_service.EncryptedChoice.public_key: object expected');
              e.public_key = H.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
            }
            return e
          }, d.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.encrypted_message = '' : (n.encrypted_message = [
            ], e.bytes !== Array && (n.encrypted_message = M.newBuffer(n.encrypted_message))), n.nonce = null, n.public_key = null),
            null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && (n.encrypted_message = e.bytes === String ? M.base64.encode(t.encrypted_message, 0, t.encrypted_message.length) : e.bytes === Array ? K(Array.prototype).call(t.encrypted_message) : t.encrypted_message),
            null != t.nonce && t.hasOwnProperty('nonce') && (n.nonce = H.votings_service.SealedBoxNonce.toObject(t.nonce, e)),
            null != t.public_key && t.hasOwnProperty('public_key') && (n.public_key = H.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)),
            n
          }, d.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, d),
          n.Ballot = (y.prototype.index = 0, y.prototype.voter = null, y.prototype.district_id = 0, y.prototype.encrypted_choice = null, y.prototype.decrypted_choices = M.emptyArray, y.prototype.store_tx_hash = null, y.prototype.decrypt_tx_hash = null, y.prototype.invalid = !1, y.create = function (t) {
            return new y(t)
          }, y.encode = function (t, e) {
            if (e = e || U.create(), null != t.index && t.hasOwnProperty('index') && e.uint32(8).uint32(t.index), null != t.voter && t.hasOwnProperty('voter') && H.exonum.crypto.PublicKey.encode(t.voter, e.uint32(18).fork()).ldelim(), null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(24).uint32(t.district_id), null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice') && H.votings_service.EncryptedChoice.encode(t.encrypted_choice, e.uint32(34).fork()).ldelim(), null != t.decrypted_choices && t.decrypted_choices.length) {
              e.uint32(42).fork();
              for (var n = 0; n < t.decrypted_choices.length; ++n) e.uint32(t.decrypted_choices[n]);
              e.ldelim()
            }
            return null != t.store_tx_hash && t.hasOwnProperty('store_tx_hash') && H.exonum.crypto.Hash.encode(t.store_tx_hash, e.uint32(50).fork()).ldelim(),
            null != t.decrypt_tx_hash && t.hasOwnProperty('decrypt_tx_hash') && H.exonum.crypto.Hash.encode(t.decrypt_tx_hash, e.uint32(58).fork()).ldelim(),
            null != t.invalid && t.hasOwnProperty('invalid') && e.uint32(64).bool(t.invalid),
            e
          }, y.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, y.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.Ballot; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.index = t.uint32();
                  break;
                case 2:
                  r.voter = H.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                case 3:
                  r.district_id = t.uint32();
                  break;
                case 4:
                  r.encrypted_choice = H.votings_service.EncryptedChoice.decode(t, t.uint32());
                  break;
                case 5:
                  if (r.decrypted_choices && r.decrypted_choices.length || (r.decrypted_choices = [
                  ]), 2 == (7 & o)) for (var i = t.uint32() + t.pos; t.pos < i; ) r.decrypted_choices.push(t.uint32());
                   else r.decrypted_choices.push(t.uint32());
                  break;
                case 6:
                  r.store_tx_hash = H.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 7:
                  r.decrypt_tx_hash = H.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 8:
                  r.invalid = t.bool();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, y.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, y.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.index && t.hasOwnProperty('index') && !M.isInteger(t.index)) return 'index: integer expected';
            var e;
            if (null != t.voter && t.hasOwnProperty('voter') && (e = H.exonum.crypto.PublicKey.verify(t.voter))) return 'voter.' + e;
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice') && (e = H.votings_service.EncryptedChoice.verify(t.encrypted_choice))) return 'encrypted_choice.' + e;
            if (null != t.decrypted_choices && t.hasOwnProperty('decrypted_choices')) {
              if (!V(t.decrypted_choices)) return 'decrypted_choices: array expected';
              for (var n = 0; n < t.decrypted_choices.length; ++n) if (!M.isInteger(t.decrypted_choices[n])) return 'decrypted_choices: integer[] expected'
            }
            return null != t.store_tx_hash && t.hasOwnProperty('store_tx_hash') && (e = H.exonum.crypto.Hash.verify(t.store_tx_hash)) ? 'store_tx_hash.' + e : null != t.decrypt_tx_hash && t.hasOwnProperty('decrypt_tx_hash') && (e = H.exonum.crypto.Hash.verify(t.decrypt_tx_hash)) ? 'decrypt_tx_hash.' + e : null != t.invalid && t.hasOwnProperty('invalid') && 'boolean' != typeof t.invalid ? 'invalid: boolean expected' : null
          }, y.fromObject = function (t) {
            if (t instanceof H.votings_service.Ballot) return t;
            var e = new H.votings_service.Ballot;
            if (null != t.index && (e.index = t.index >>> 0), null != t.voter) {
              if ('object' !== z(t.voter)) throw TypeError('.votings_service.Ballot.voter: object expected');
              e.voter = H.exonum.crypto.PublicKey.fromObject(t.voter)
            }
            if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.encrypted_choice) {
              if ('object' !== z(t.encrypted_choice)) throw TypeError('.votings_service.Ballot.encrypted_choice: object expected');
              e.encrypted_choice = H.votings_service.EncryptedChoice.fromObject(t.encrypted_choice)
            }
            if (t.decrypted_choices) {
              if (!V(t.decrypted_choices)) throw TypeError('.votings_service.Ballot.decrypted_choices: array expected');
              e.decrypted_choices = [
              ];
              for (var n = 0; n < t.decrypted_choices.length; ++n) e.decrypted_choices[n] = t.decrypted_choices[n] >>> 0
            }
            if (null != t.store_tx_hash) {
              if ('object' !== z(t.store_tx_hash)) throw TypeError('.votings_service.Ballot.store_tx_hash: object expected');
              e.store_tx_hash = H.exonum.crypto.Hash.fromObject(t.store_tx_hash)
            }
            if (null != t.decrypt_tx_hash) {
              if ('object' !== z(t.decrypt_tx_hash)) throw TypeError('.votings_service.Ballot.decrypt_tx_hash: object expected');
              e.decrypt_tx_hash = H.exonum.crypto.Hash.fromObject(t.decrypt_tx_hash)
            }
            return null != t.invalid && (e.invalid = Boolean(t.invalid)),
            e
          }, y.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.decrypted_choices = [
            ]), e.defaults && (n.index = 0, n.voter = null, n.district_id = 0, n.encrypted_choice = null, n.store_tx_hash = null, n.decrypt_tx_hash = null, n.invalid = !1), null != t.index && t.hasOwnProperty('index') && (n.index = t.index), null != t.voter && t.hasOwnProperty('voter') && (n.voter = H.exonum.crypto.PublicKey.toObject(t.voter, e)), null != t.district_id && t.hasOwnProperty('district_id') && (n.district_id = t.district_id), null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice') && (n.encrypted_choice = H.votings_service.EncryptedChoice.toObject(t.encrypted_choice, e)), t.decrypted_choices && t.decrypted_choices.length) {
              n.decrypted_choices = [
              ];
              for (var r = 0; r < t.decrypted_choices.length; ++r) n.decrypted_choices[r] = t.decrypted_choices[r]
            }
            return null != t.store_tx_hash && t.hasOwnProperty('store_tx_hash') && (n.store_tx_hash = H.exonum.crypto.Hash.toObject(t.store_tx_hash, e)),
            null != t.decrypt_tx_hash && t.hasOwnProperty('decrypt_tx_hash') && (n.decrypt_tx_hash = H.exonum.crypto.Hash.toObject(t.decrypt_tx_hash, e)),
            null != t.invalid && t.hasOwnProperty('invalid') && (n.invalid = t.invalid),
            n
          }, y.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, y),
          n.DecryptionStatistics = (v.prototype.decrypted_ballots_amount = 0, v.prototype.invalid_ballots_amount = 0, v.create = function (t) {
            return new v(t)
          }, v.encode = function (t, e) {
            return e = e || U.create(),
            null != t.decrypted_ballots_amount && t.hasOwnProperty('decrypted_ballots_amount') && e.uint32(8).uint32(t.decrypted_ballots_amount),
            null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && e.uint32(16).uint32(t.invalid_ballots_amount),
            e
          }, v.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, v.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.DecryptionStatistics; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.decrypted_ballots_amount = t.uint32();
                  break;
                case 2:
                  r.invalid_ballots_amount = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, v.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, v.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.decrypted_ballots_amount && t.hasOwnProperty('decrypted_ballots_amount') && !M.isInteger(t.decrypted_ballots_amount) ? 'decrypted_ballots_amount: integer expected' : null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && !M.isInteger(t.invalid_ballots_amount) ? 'invalid_ballots_amount: integer expected' : null
          }, v.fromObject = function (t) {
            if (t instanceof H.votings_service.DecryptionStatistics) return t;
            var e = new H.votings_service.DecryptionStatistics;
            return null != t.decrypted_ballots_amount && (e.decrypted_ballots_amount = t.decrypted_ballots_amount >>> 0),
            null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0),
            e
          }, v.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.decrypted_ballots_amount = 0, n.invalid_ballots_amount = 0),
            null != t.decrypted_ballots_amount && t.hasOwnProperty('decrypted_ballots_amount') && (n.decrypted_ballots_amount = t.decrypted_ballots_amount),
            null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && (n.invalid_ballots_amount = t.invalid_ballots_amount),
            n
          }, v.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, v),
          n.VotingResults = (g.prototype.district_id = 0, g.prototype.tally = M.emptyObject, g.prototype.invalid_ballots_amount = 0, g.create = function (t) {
            return new g(t)
          }, g.encode = function (t, e) {
            if (e = e || U.create(), null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(8).uint32(t.district_id), null != t.tally && t.hasOwnProperty('tally')) for (var n = q(t.tally), r = 0; r < n.length; ++r) e.uint32(18).fork().uint32(8).uint32(n[r]).uint32(16).uint32(t.tally[n[r]]).ldelim();
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && e.uint32(24).uint32(t.invalid_ballots_amount),
            e
          }, g.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, g.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.VotingResults; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.district_id = t.uint32();
                  break;
                case 2:
                  t.skip().pos++,
                  o.tally === M.emptyObject && (o.tally = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.tally[n] = t.uint32();
                  break;
                case 3:
                  o.invalid_ballots_amount = t.uint32();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, g.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, g.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.tally && t.hasOwnProperty('tally')) {
              if (!M.isObject(t.tally)) return 'tally: object expected';
              for (var e = q(t.tally), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'tally: integer key{k:uint32} expected';
                if (!M.isInteger(t.tally[e[n]])) return 'tally: integer{k:uint32} expected'
              }
            }
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && !M.isInteger(t.invalid_ballots_amount) ? 'invalid_ballots_amount: integer expected' : null
          }, g.fromObject = function (t) {
            if (t instanceof H.votings_service.VotingResults) return t;
            var e = new H.votings_service.VotingResults;
            if (null != t.district_id && (e.district_id = t.district_id >>> 0), t.tally) {
              if ('object' !== z(t.tally)) throw TypeError('.votings_service.VotingResults.tally: object expected');
              e.tally = {
              };
              for (var n = q(t.tally), r = 0; r < n.length; ++r) e.tally[n[r]] = t.tally[n[r]] >>> 0
            }
            return null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0),
            e
          }, g.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.tally = {
            }), e.defaults && (r.district_id = 0, r.invalid_ballots_amount = 0), null != t.district_id && t.hasOwnProperty('district_id') && (r.district_id = t.district_id), t.tally && (n = q(t.tally)).length) {
              r.tally = {
              };
              for (var o = 0; o < n.length; ++o) r.tally[n[o]] = t.tally[n[o]]
            }
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && (r.invalid_ballots_amount = t.invalid_ballots_amount),
            r
          }, g.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, g),
          n.BallotsStorage = (_.prototype.voting_id = '', _.prototype.stored_ballots_counter = M.emptyObject, _.prototype.decrypted_ballots_counter = null, _.prototype.voting_results = M.emptyObject, _.create = function (t) {
            return new _(t)
          }, _.encode = function (t, e) {
            if (e = e || U.create(), null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id), null != t.stored_ballots_counter && t.hasOwnProperty('stored_ballots_counter')) for (var n = q(t.stored_ballots_counter), r = 0; r < n.length; ++r) e.uint32(18).fork().uint32(8).uint32(n[r]).uint32(16).uint32(t.stored_ballots_counter[n[r]]).ldelim();
            if (null != t.decrypted_ballots_counter && t.hasOwnProperty('decrypted_ballots_counter') && H.votings_service.DecryptionStatistics.encode(t.decrypted_ballots_counter, e.uint32(26).fork()).ldelim(), null != t.voting_results && t.hasOwnProperty('voting_results')) for (n = q(t.voting_results), r = 0; r < n.length; ++r) e.uint32(34).fork().uint32(8).uint32(n[r]),
            H.votings_service.VotingResults.encode(t.voting_results[n[r]], e.uint32(18).fork()).ldelim().ldelim();
            return e
          }, _.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, _.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.BallotsStorage; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.voting_id = t.string();
                  break;
                case 2:
                  t.skip().pos++,
                  o.stored_ballots_counter === M.emptyObject && (o.stored_ballots_counter = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.stored_ballots_counter[n] = t.uint32();
                  break;
                case 3:
                  o.decrypted_ballots_counter = H.votings_service.DecryptionStatistics.decode(t, t.uint32());
                  break;
                case 4:
                  t.skip().pos++,
                  o.voting_results === M.emptyObject && (o.voting_results = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.voting_results[n] = H.votings_service.VotingResults.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, _.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, _.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.stored_ballots_counter && t.hasOwnProperty('stored_ballots_counter')) {
              if (!M.isObject(t.stored_ballots_counter)) return 'stored_ballots_counter: object expected';
              for (var e = q(t.stored_ballots_counter), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'stored_ballots_counter: integer key{k:uint32} expected';
                if (!M.isInteger(t.stored_ballots_counter[e[n]])) return 'stored_ballots_counter: integer{k:uint32} expected'
              }
            }
            if (null != t.decrypted_ballots_counter && t.hasOwnProperty('decrypted_ballots_counter') && (r = H.votings_service.DecryptionStatistics.verify(t.decrypted_ballots_counter))) return 'decrypted_ballots_counter.' + r;
            if (null != t.voting_results && t.hasOwnProperty('voting_results')) {
              if (!M.isObject(t.voting_results)) return 'voting_results: object expected';
              for (e = q(t.voting_results), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'voting_results: integer key{k:uint32} expected';
                var r;
                if (r = H.votings_service.VotingResults.verify(t.voting_results[e[n]])) return 'voting_results.' + r
              }
            }
            return null
          }, _.fromObject = function (t) {
            if (t instanceof H.votings_service.BallotsStorage) return t;
            var e = new H.votings_service.BallotsStorage;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), t.stored_ballots_counter) {
              if ('object' !== z(t.stored_ballots_counter)) throw TypeError('.votings_service.BallotsStorage.stored_ballots_counter: object expected');
              e.stored_ballots_counter = {
              };
              for (var n = q(t.stored_ballots_counter), r = 0; r < n.length; ++r) e.stored_ballots_counter[n[r]] = t.stored_ballots_counter[n[r]] >>> 0
            }
            if (null != t.decrypted_ballots_counter) {
              if ('object' !== z(t.decrypted_ballots_counter)) throw TypeError('.votings_service.BallotsStorage.decrypted_ballots_counter: object expected');
              e.decrypted_ballots_counter = H.votings_service.DecryptionStatistics.fromObject(t.decrypted_ballots_counter)
            }
            if (t.voting_results) {
              if ('object' !== z(t.voting_results)) throw TypeError('.votings_service.BallotsStorage.voting_results: object expected');
              for (e.voting_results = {
              }, n = q(t.voting_results), r = 0; r < n.length; ++r) {
                if ('object' !== z(t.voting_results[n[r]])) throw TypeError('.votings_service.BallotsStorage.voting_results: object expected');
                e.voting_results[n[r]] = H.votings_service.VotingResults.fromObject(t.voting_results[n[r]])
              }
            }
            return e
          }, _.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.stored_ballots_counter = {
            }, r.voting_results = {
            }), e.defaults && (r.voting_id = '', r.decrypted_ballots_counter = null), null != t.voting_id && t.hasOwnProperty('voting_id') && (r.voting_id = t.voting_id), t.stored_ballots_counter && (n = q(t.stored_ballots_counter)).length) {
              r.stored_ballots_counter = {
              };
              for (var o = 0; o < n.length; ++o) r.stored_ballots_counter[n[o]] = t.stored_ballots_counter[n[o]]
            }
            if (null != t.decrypted_ballots_counter && t.hasOwnProperty('decrypted_ballots_counter') && (r.decrypted_ballots_counter = H.votings_service.DecryptionStatistics.toObject(t.decrypted_ballots_counter, e)), t.voting_results && (n = q(t.voting_results)).length) for (r.voting_results = {
            }, o = 0; o < n.length; ++o) r.voting_results[n[o]] = H.votings_service.VotingResults.toObject(t.voting_results[n[o]], e);
            return r
          }, _.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, _),
          n.TxCryptoSystemSettings = (m.prototype.public_key = null, m.create = function (t) {
            return new m(t)
          }, m.encode = function (t, e) {
            return e = e || U.create(),
            null != t.public_key && t.hasOwnProperty('public_key') && H.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(10).fork()).ldelim(),
            e
          }, m.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, m.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxCryptoSystemSettings; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.public_key = H.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, m.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, m.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.public_key && t.hasOwnProperty('public_key')) {
              var e = H.votings_service.SealedBoxPublicKey.verify(t.public_key);
              if (e) return 'public_key.' + e
            }
            return null
          }, m.fromObject = function (t) {
            if (t instanceof H.votings_service.TxCryptoSystemSettings) return t;
            var e = new H.votings_service.TxCryptoSystemSettings;
            if (null != t.public_key) {
              if ('object' !== z(t.public_key)) throw TypeError('.votings_service.TxCryptoSystemSettings.public_key: object expected');
              e.public_key = H.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
            }
            return e
          }, m.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.public_key = null),
            null != t.public_key && t.hasOwnProperty('public_key') && (n.public_key = H.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)),
            n
          }, m.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, m),
          n.TxVotingResults = (b.prototype.district_id = 0, b.prototype.tally = M.emptyObject, b.prototype.invalid_ballots_amount = 0, b.create = function (t) {
            return new b(t)
          }, b.encode = function (t, e) {
            if (e = e || U.create(), null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(8).uint32(t.district_id), null != t.tally && t.hasOwnProperty('tally')) for (var n = q(t.tally), r = 0; r < n.length; ++r) e.uint32(18).fork().uint32(8).uint32(n[r]).uint32(16).uint32(t.tally[n[r]]).ldelim();
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && e.uint32(24).uint32(t.invalid_ballots_amount),
            e
          }, b.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, b.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.TxVotingResults; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.district_id = t.uint32();
                  break;
                case 2:
                  t.skip().pos++,
                  o.tally === M.emptyObject && (o.tally = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.tally[n] = t.uint32();
                  break;
                case 3:
                  o.invalid_ballots_amount = t.uint32();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, b.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, b.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.tally && t.hasOwnProperty('tally')) {
              if (!M.isObject(t.tally)) return 'tally: object expected';
              for (var e = q(t.tally), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'tally: integer key{k:uint32} expected';
                if (!M.isInteger(t.tally[e[n]])) return 'tally: integer{k:uint32} expected'
              }
            }
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && !M.isInteger(t.invalid_ballots_amount) ? 'invalid_ballots_amount: integer expected' : null
          }, b.fromObject = function (t) {
            if (t instanceof H.votings_service.TxVotingResults) return t;
            var e = new H.votings_service.TxVotingResults;
            if (null != t.district_id && (e.district_id = t.district_id >>> 0), t.tally) {
              if ('object' !== z(t.tally)) throw TypeError('.votings_service.TxVotingResults.tally: object expected');
              e.tally = {
              };
              for (var n = q(t.tally), r = 0; r < n.length; ++r) e.tally[n[r]] = t.tally[n[r]] >>> 0
            }
            return null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0),
            e
          }, b.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.tally = {
            }), e.defaults && (r.district_id = 0, r.invalid_ballots_amount = 0), null != t.district_id && t.hasOwnProperty('district_id') && (r.district_id = t.district_id), t.tally && (n = q(t.tally)).length) {
              r.tally = {
              };
              for (var o = 0; o < n.length; ++o) r.tally[n[o]] = t.tally[n[o]]
            }
            return null != t.invalid_ballots_amount && t.hasOwnProperty('invalid_ballots_amount') && (r.invalid_ballots_amount = t.invalid_ballots_amount),
            r
          }, b.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, b),
          n.TxBallotConfig = (w.prototype.district_id = 0, w.prototype.question = '', w.prototype.options = M.emptyObject, w.prototype.min_choices = 0, w.prototype.max_choices = 0, w.create = function (t) {
            return new w(t)
          }, w.encode = function (t, e) {
            if (e = e || U.create(), null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(8).uint32(t.district_id), null != t.question && t.hasOwnProperty('question') && e.uint32(18).string(t.question), null != t.options && t.hasOwnProperty('options')) for (var n = q(t.options), r = 0; r < n.length; ++r) e.uint32(26).fork().uint32(8).uint32(n[r]).uint32(18).string(t.options[n[r]]).ldelim();
            return null != t.min_choices && t.hasOwnProperty('min_choices') && e.uint32(32).uint32(t.min_choices),
            null != t.max_choices && t.hasOwnProperty('max_choices') && e.uint32(40).uint32(t.max_choices),
            e
          }, w.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, w.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.TxBallotConfig; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.district_id = t.uint32();
                  break;
                case 2:
                  o.question = t.string();
                  break;
                case 3:
                  t.skip().pos++,
                  o.options === M.emptyObject && (o.options = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.options[n] = t.string();
                  break;
                case 4:
                  o.min_choices = t.uint32();
                  break;
                case 5:
                  o.max_choices = t.uint32();
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, w.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, w.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.question && t.hasOwnProperty('question') && !M.isString(t.question)) return 'question: string expected';
            if (null != t.options && t.hasOwnProperty('options')) {
              if (!M.isObject(t.options)) return 'options: object expected';
              for (var e = q(t.options), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'options: integer key{k:uint32} expected';
                if (!M.isString(t.options[e[n]])) return 'options: string{k:uint32} expected'
              }
            }
            return null != t.min_choices && t.hasOwnProperty('min_choices') && !M.isInteger(t.min_choices) ? 'min_choices: integer expected' : null != t.max_choices && t.hasOwnProperty('max_choices') && !M.isInteger(t.max_choices) ? 'max_choices: integer expected' : null
          }, w.fromObject = function (t) {
            if (t instanceof H.votings_service.TxBallotConfig) return t;
            var e = new H.votings_service.TxBallotConfig;
            if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.question && (e.question = String(t.question)), t.options) {
              if ('object' !== z(t.options)) throw TypeError('.votings_service.TxBallotConfig.options: object expected');
              e.options = {
              };
              for (var n = q(t.options), r = 0; r < n.length; ++r) e.options[n[r]] = String(t.options[n[r]])
            }
            return null != t.min_choices && (e.min_choices = t.min_choices >>> 0),
            null != t.max_choices && (e.max_choices = t.max_choices >>> 0),
            e
          }, w.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.options = {
            }), e.defaults && (r.district_id = 0, r.question = '', r.min_choices = 0, r.max_choices = 0), null != t.district_id && t.hasOwnProperty('district_id') && (r.district_id = t.district_id), null != t.question && t.hasOwnProperty('question') && (r.question = t.question), t.options && (n = q(t.options)).length) {
              r.options = {
              };
              for (var o = 0; o < n.length; ++o) r.options[n[o]] = t.options[n[o]]
            }
            return null != t.min_choices && t.hasOwnProperty('min_choices') && (r.min_choices = t.min_choices),
            null != t.max_choices && t.hasOwnProperty('max_choices') && (r.max_choices = t.max_choices),
            r
          }, w.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, w),
          n.TxCreateVoting = (x.prototype.crypto_system = null, x.prototype.ballots_config = M.emptyArray, x.prototype.revote_enabled = !1, x.create = function (t) {
            return new x(t)
          }, x.encode = function (t, e) {
            if (e = e || U.create(), null != t.crypto_system && t.hasOwnProperty('crypto_system') && H.votings_service.TxCryptoSystemSettings.encode(t.crypto_system, e.uint32(10).fork()).ldelim(), null != t.ballots_config && t.ballots_config.length) for (var n = 0; n < t.ballots_config.length; ++n) H.votings_service.TxBallotConfig.encode(t.ballots_config[n], e.uint32(18).fork()).ldelim();
            return null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && e.uint32(24).bool(t.revote_enabled),
            e
          }, x.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, x.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxCreateVoting; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.crypto_system = H.votings_service.TxCryptoSystemSettings.decode(t, t.uint32());
                  break;
                case 2:
                  r.ballots_config && r.ballots_config.length || (r.ballots_config = [
                  ]),
                  r.ballots_config.push(H.votings_service.TxBallotConfig.decode(t, t.uint32()));
                  break;
                case 3:
                  r.revote_enabled = t.bool();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, x.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, x.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.crypto_system && t.hasOwnProperty('crypto_system') && (n = H.votings_service.TxCryptoSystemSettings.verify(t.crypto_system))) return 'crypto_system.' + n;
            if (null != t.ballots_config && t.hasOwnProperty('ballots_config')) {
              if (!V(t.ballots_config)) return 'ballots_config: array expected';
              for (var e = 0; e < t.ballots_config.length; ++e) {
                var n;
                if (n = H.votings_service.TxBallotConfig.verify(t.ballots_config[e])) return 'ballots_config.' + n
              }
            }
            return null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && 'boolean' != typeof t.revote_enabled ? 'revote_enabled: boolean expected' : null
          }, x.fromObject = function (t) {
            if (t instanceof H.votings_service.TxCreateVoting) return t;
            var e = new H.votings_service.TxCreateVoting;
            if (null != t.crypto_system) {
              if ('object' !== z(t.crypto_system)) throw TypeError('.votings_service.TxCreateVoting.crypto_system: object expected');
              e.crypto_system = H.votings_service.TxCryptoSystemSettings.fromObject(t.crypto_system)
            }
            if (t.ballots_config) {
              if (!V(t.ballots_config)) throw TypeError('.votings_service.TxCreateVoting.ballots_config: array expected');
              e.ballots_config = [
              ];
              for (var n = 0; n < t.ballots_config.length; ++n) {
                if ('object' !== z(t.ballots_config[n])) throw TypeError('.votings_service.TxCreateVoting.ballots_config: object expected');
                e.ballots_config[n] = H.votings_service.TxBallotConfig.fromObject(t.ballots_config[n])
              }
            }
            return null != t.revote_enabled && (e.revote_enabled = Boolean(t.revote_enabled)),
            e
          }, x.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.ballots_config = [
            ]), e.defaults && (n.crypto_system = null, n.revote_enabled = !1), null != t.crypto_system && t.hasOwnProperty('crypto_system') && (n.crypto_system = H.votings_service.TxCryptoSystemSettings.toObject(t.crypto_system, e)), t.ballots_config && t.ballots_config.length) {
              n.ballots_config = [
              ];
              for (var r = 0; r < t.ballots_config.length; ++r) n.ballots_config[r] = H.votings_service.TxBallotConfig.toObject(t.ballots_config[r], e)
            }
            return null != t.revote_enabled && t.hasOwnProperty('revote_enabled') && (n.revote_enabled = t.revote_enabled),
            n
          }, x.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, x),
          n.TxRegisterVoters = (O.prototype.voting_id = '', O.prototype.voters = M.emptyArray, O.create = function (t) {
            return new O(t)
          }, O.encode = function (t, e) {
            if (e = e || U.create(), null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id), null != t.voters && t.voters.length) for (var n = 0; n < t.voters.length; ++n) e.uint32(18).string(t.voters[n]);
            return e
          }, O.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, O.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxRegisterVoters; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.voters && r.voters.length || (r.voters = [
                  ]),
                  r.voters.push(t.string());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, O.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, O.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.voters && t.hasOwnProperty('voters')) {
              if (!V(t.voters)) return 'voters: array expected';
              for (var e = 0; e < t.voters.length; ++e) if (!M.isString(t.voters[e])) return 'voters: string[] expected'
            }
            return null
          }, O.fromObject = function (t) {
            if (t instanceof H.votings_service.TxRegisterVoters) return t;
            var e = new H.votings_service.TxRegisterVoters;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), t.voters) {
              if (!V(t.voters)) throw TypeError('.votings_service.TxRegisterVoters.voters: array expected');
              e.voters = [
              ];
              for (var n = 0; n < t.voters.length; ++n) e.voters[n] = String(t.voters[n])
            }
            return e
          }, O.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.voters = [
            ]), e.defaults && (n.voting_id = ''), null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id), t.voters && t.voters.length) {
              n.voters = [
              ];
              for (var r = 0; r < t.voters.length; ++r) n.voters[r] = t.voters[r]
            }
            return n
          }, O.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, O),
          n.TxStopRegistration = (S.prototype.voting_id = '', S.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, S.create = function (t) {
            return new S(t)
          }, S.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(16).uint64(t.seed),
            e
          }, S.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, S.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxStopRegistration; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, S.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, S.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, S.fromObject = function (t) {
            if (t instanceof H.votings_service.TxStopRegistration) return t;
            var e = new H.votings_service.TxStopRegistration;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, S.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, S.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, S),
          n.TxRevokeVoterParticipation = (k.prototype.voting_id = '', k.prototype.voter_id = '', k.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, k.create = function (t) {
            return new k(t)
          }, k.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.voter_id && t.hasOwnProperty('voter_id') && e.uint32(18).string(t.voter_id),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(24).uint64(t.seed),
            e
          }, k.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, k.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxRevokeVoterParticipation; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.voter_id = t.string();
                  break;
                case 3:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, k.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, k.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.voter_id && t.hasOwnProperty('voter_id') && !M.isString(t.voter_id) ? 'voter_id: string expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, k.fromObject = function (t) {
            if (t instanceof H.votings_service.TxRevokeVoterParticipation) return t;
            var e = new H.votings_service.TxRevokeVoterParticipation;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.voter_id && (e.voter_id = String(t.voter_id)),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, k.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', n.voter_id = '', M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.voter_id && t.hasOwnProperty('voter_id') && (n.voter_id = t.voter_id),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, k.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, k),
          n.TxIssueBallot = (E.prototype.voting_id = '', E.prototype.voter_id = '', E.prototype.district_id = 0, E.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, E.create = function (t) {
            return new E(t)
          }, E.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.voter_id && t.hasOwnProperty('voter_id') && e.uint32(18).string(t.voter_id),
            null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(24).uint32(t.district_id),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(32).uint64(t.seed),
            e
          }, E.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, E.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxIssueBallot; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.voter_id = t.string();
                  break;
                case 3:
                  r.district_id = t.uint32();
                  break;
                case 4:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, E.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, E.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.voter_id && t.hasOwnProperty('voter_id') && !M.isString(t.voter_id) ? 'voter_id: string expected' : null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id) ? 'district_id: integer expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, E.fromObject = function (t) {
            if (t instanceof H.votings_service.TxIssueBallot) return t;
            var e = new H.votings_service.TxIssueBallot;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.voter_id && (e.voter_id = String(t.voter_id)),
            null != t.district_id && (e.district_id = t.district_id >>> 0),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, E.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', n.voter_id = '', n.district_id = 0, M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.voter_id && t.hasOwnProperty('voter_id') && (n.voter_id = t.voter_id),
            null != t.district_id && t.hasOwnProperty('district_id') && (n.district_id = t.district_id),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, E.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, E),
          n.TxAddVoterKey = (P.prototype.voting_id = '', P.prototype.voter_key = null, P.create = function (t) {
            return new P(t)
          }, P.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.voter_key && t.hasOwnProperty('voter_key') && H.exonum.crypto.PublicKey.encode(t.voter_key, e.uint32(18).fork()).ldelim(),
            e
          }, P.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, P.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxAddVoterKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.voter_key = H.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, P.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, P.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.voter_key && t.hasOwnProperty('voter_key')) {
              var e = H.exonum.crypto.PublicKey.verify(t.voter_key);
              if (e) return 'voter_key.' + e
            }
            return null
          }, P.fromObject = function (t) {
            if (t instanceof H.votings_service.TxAddVoterKey) return t;
            var e = new H.votings_service.TxAddVoterKey;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voter_key) {
              if ('object' !== z(t.voter_key)) throw TypeError('.votings_service.TxAddVoterKey.voter_key: object expected');
              e.voter_key = H.exonum.crypto.PublicKey.fromObject(t.voter_key)
            }
            return e
          }, P.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.voting_id = '', n.voter_key = null),
            null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.voter_key && t.hasOwnProperty('voter_key') && (n.voter_key = H.exonum.crypto.PublicKey.toObject(t.voter_key, e)),
            n
          }, P.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, P),
          n.TxEncryptedChoice = (A.prototype.encrypted_message = M.newBuffer([]), A.prototype.nonce = null, A.prototype.public_key = null, A.create = function (t) {
            return new A(t)
          }, A.encode = function (t, e) {
            return e = e || U.create(),
            null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && e.uint32(10).bytes(t.encrypted_message),
            null != t.nonce && t.hasOwnProperty('nonce') && H.votings_service.SealedBoxNonce.encode(t.nonce, e.uint32(18).fork()).ldelim(),
            null != t.public_key && t.hasOwnProperty('public_key') && H.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(26).fork()).ldelim(),
            e
          }, A.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, A.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxEncryptedChoice; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.encrypted_message = t.bytes();
                  break;
                case 2:
                  r.nonce = H.votings_service.SealedBoxNonce.decode(t, t.uint32());
                  break;
                case 3:
                  r.public_key = H.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, A.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, A.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && !(t.encrypted_message && 'number' == typeof t.encrypted_message.length || M.isString(t.encrypted_message)) ? 'encrypted_message: buffer expected' : null != t.nonce && t.hasOwnProperty('nonce') && (e = H.votings_service.SealedBoxNonce.verify(t.nonce)) ? 'nonce.' + e : null != t.public_key && t.hasOwnProperty('public_key') && (e = H.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? 'public_key.' + e : null;
            var e
          }, A.fromObject = function (t) {
            if (t instanceof H.votings_service.TxEncryptedChoice) return t;
            var e = new H.votings_service.TxEncryptedChoice;
            if (null != t.encrypted_message && ('string' == typeof t.encrypted_message ? M.base64.decode(t.encrypted_message, e.encrypted_message = M.newBuffer(M.base64.length(t.encrypted_message)), 0) : t.encrypted_message.length && (e.encrypted_message = t.encrypted_message)), null != t.nonce) {
              if ('object' !== z(t.nonce)) throw TypeError('.votings_service.TxEncryptedChoice.nonce: object expected');
              e.nonce = H.votings_service.SealedBoxNonce.fromObject(t.nonce)
            }
            if (null != t.public_key) {
              if ('object' !== z(t.public_key)) throw TypeError('.votings_service.TxEncryptedChoice.public_key: object expected');
              e.public_key = H.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
            }
            return e
          }, A.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.encrypted_message = '' : (n.encrypted_message = [
            ], e.bytes !== Array && (n.encrypted_message = M.newBuffer(n.encrypted_message))), n.nonce = null, n.public_key = null),
            null != t.encrypted_message && t.hasOwnProperty('encrypted_message') && (n.encrypted_message = e.bytes === String ? M.base64.encode(t.encrypted_message, 0, t.encrypted_message.length) : e.bytes === Array ? K(Array.prototype).call(t.encrypted_message) : t.encrypted_message),
            null != t.nonce && t.hasOwnProperty('nonce') && (n.nonce = H.votings_service.SealedBoxNonce.toObject(t.nonce, e)),
            null != t.public_key && t.hasOwnProperty('public_key') && (n.public_key = H.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)),
            n
          }, A.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, A),
          n.TxStoreBallot = (j.prototype.voting_id = '', j.prototype.district_id = 0, j.prototype.encrypted_choice = null, j.create = function (t) {
            return new j(t)
          }, j.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.district_id && t.hasOwnProperty('district_id') && e.uint32(16).uint32(t.district_id),
            null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice') && H.votings_service.TxEncryptedChoice.encode(t.encrypted_choice, e.uint32(26).fork()).ldelim(),
            e
          }, j.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, j.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxStoreBallot; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.district_id = t.uint32();
                  break;
                case 3:
                  r.encrypted_choice = H.votings_service.TxEncryptedChoice.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, j.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, j.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.district_id && t.hasOwnProperty('district_id') && !M.isInteger(t.district_id)) return 'district_id: integer expected';
            if (null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice')) {
              var e = H.votings_service.TxEncryptedChoice.verify(t.encrypted_choice);
              if (e) return 'encrypted_choice.' + e
            }
            return null
          }, j.fromObject = function (t) {
            if (t instanceof H.votings_service.TxStoreBallot) return t;
            var e = new H.votings_service.TxStoreBallot;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.encrypted_choice) {
              if ('object' !== z(t.encrypted_choice)) throw TypeError('.votings_service.TxStoreBallot.encrypted_choice: object expected');
              e.encrypted_choice = H.votings_service.TxEncryptedChoice.fromObject(t.encrypted_choice)
            }
            return e
          }, j.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.voting_id = '', n.district_id = 0, n.encrypted_choice = null),
            null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.district_id && t.hasOwnProperty('district_id') && (n.district_id = t.district_id),
            null != t.encrypted_choice && t.hasOwnProperty('encrypted_choice') && (n.encrypted_choice = H.votings_service.TxEncryptedChoice.toObject(t.encrypted_choice, e)),
            n
          }, j.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, j),
          n.TxStopVoting = (T.prototype.voting_id = '', T.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, T.create = function (t) {
            return new T(t)
          }, T.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(16).uint64(t.seed),
            e
          }, T.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, T.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxStopVoting; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, T.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, T.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, T.fromObject = function (t) {
            if (t instanceof H.votings_service.TxStopVoting) return t;
            var e = new H.votings_service.TxStopVoting;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, T.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, T.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, T),
          n.TxPublishDecryptionKey = (B.prototype.voting_id = '', B.prototype.private_key = null, B.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, B.create = function (t) {
            return new B(t)
          }, B.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.private_key && t.hasOwnProperty('private_key') && H.votings_service.SealedBoxSecretKey.encode(t.private_key, e.uint32(18).fork()).ldelim(),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(24).uint64(t.seed),
            e
          }, B.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, B.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxPublishDecryptionKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.private_key = H.votings_service.SealedBoxSecretKey.decode(t, t.uint32());
                  break;
                case 3:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, B.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, B.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.private_key && t.hasOwnProperty('private_key')) {
              var e = H.votings_service.SealedBoxSecretKey.verify(t.private_key);
              if (e) return 'private_key.' + e
            }
            return null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, B.fromObject = function (t) {
            if (t instanceof H.votings_service.TxPublishDecryptionKey) return t;
            var e = new H.votings_service.TxPublishDecryptionKey;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.private_key) {
              if ('object' !== z(t.private_key)) throw TypeError('.votings_service.TxPublishDecryptionKey.private_key: object expected');
              e.private_key = H.votings_service.SealedBoxSecretKey.fromObject(t.private_key)
            }
            return null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, B.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', n.private_key = null, M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.private_key && t.hasOwnProperty('private_key') && (n.private_key = H.votings_service.SealedBoxSecretKey.toObject(t.private_key, e)),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, B.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, B),
          n.TxDecryptBallot = (R.prototype.voting_id = '', R.prototype.ballot_index = 0, R.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, R.create = function (t) {
            return new R(t)
          }, R.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.ballot_index && t.hasOwnProperty('ballot_index') && e.uint32(16).uint32(t.ballot_index),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(24).uint64(t.seed),
            e
          }, R.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, R.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxDecryptBallot; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.ballot_index = t.uint32();
                  break;
                case 3:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, R.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, R.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.ballot_index && t.hasOwnProperty('ballot_index') && !M.isInteger(t.ballot_index) ? 'ballot_index: integer expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, R.fromObject = function (t) {
            if (t instanceof H.votings_service.TxDecryptBallot) return t;
            var e = new H.votings_service.TxDecryptBallot;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.ballot_index && (e.ballot_index = t.ballot_index >>> 0),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, R.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', n.ballot_index = 0, M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.ballot_index && t.hasOwnProperty('ballot_index') && (n.ballot_index = t.ballot_index),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, R.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, R),
          n.TxFinalizeVoting = (L.prototype.voting_id = '', L.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, L.create = function (t) {
            return new L(t)
          }, L.encode = function (t, e) {
            return e = e || U.create(),
            null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && e.uint32(16).uint64(t.seed),
            e
          }, L.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, L.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new H.votings_service.TxFinalizeVoting; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.voting_id = t.string();
                  break;
                case 2:
                  r.seed = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, L.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, L.verify = function (t) {
            return 'object' !== z(t) || null === t ? 'object expected' : null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id) ? 'voting_id: string expected' : null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high)) ? 'seed: integer|Long expected' : null
          }, L.fromObject = function (t) {
            if (t instanceof H.votings_service.TxFinalizeVoting) return t;
            var e = new H.votings_service.TxFinalizeVoting;
            return null != t.voting_id && (e.voting_id = String(t.voting_id)),
            null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))),
            e
          }, L.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (n.voting_id = '', M.Long) {
              var r = new M.Long(0, 0, !0);
              n.seed = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.seed = e.longs === String ? '0' : 0;
            return null != t.voting_id && t.hasOwnProperty('voting_id') && (n.voting_id = t.voting_id),
            null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed),
            n
          }, L.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, L),
          n.TxFinalizeVotingWithResults = (I.prototype.voting_id = '', I.prototype.seed = M.Long ? M.Long.fromBits(0, 0, !0) : 0, I.prototype.results = M.emptyObject, I.create = function (t) {
            return new I(t)
          }, I.encode = function (t, e) {
            if (e = e || U.create(), null != t.voting_id && t.hasOwnProperty('voting_id') && e.uint32(10).string(t.voting_id), null != t.seed && t.hasOwnProperty('seed') && e.uint32(16).uint64(t.seed), null != t.results && t.hasOwnProperty('results')) for (var n = q(t.results), r = 0; r < n.length; ++r) e.uint32(26).fork().uint32(8).uint32(n[r]),
            H.votings_service.TxVotingResults.encode(t.results[n[r]], e.uint32(18).fork()).ldelim().ldelim();
            return e
          }, I.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, I.decode = function (t, e) {
            t instanceof C || (t = C.create(t));
            for (var n, r = void 0 === e ? t.len : t.pos + e, o = new H.votings_service.TxFinalizeVotingWithResults; t.pos < r; ) {
              var i = t.uint32();
              switch (i >>> 3) {
                case 1:
                  o.voting_id = t.string();
                  break;
                case 2:
                  o.seed = t.uint64();
                  break;
                case 3:
                  t.skip().pos++,
                  o.results === M.emptyObject && (o.results = {
                  }),
                  n = t.uint32(),
                  t.pos++,
                  o.results[n] = H.votings_service.TxVotingResults.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & i)
              }
            }
            return o
          }, I.decodeDelimited = function (t) {
            return t instanceof C || (t = new C(t)),
            this.decode(t, t.uint32())
          }, I.verify = function (t) {
            if ('object' !== z(t) || null === t) return 'object expected';
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && !M.isString(t.voting_id)) return 'voting_id: string expected';
            if (null != t.seed && t.hasOwnProperty('seed') && !(M.isInteger(t.seed) || t.seed && M.isInteger(t.seed.low) && M.isInteger(t.seed.high))) return 'seed: integer|Long expected';
            if (null != t.results && t.hasOwnProperty('results')) {
              if (!M.isObject(t.results)) return 'results: object expected';
              for (var e = q(t.results), n = 0; n < e.length; ++n) {
                if (!M.key32Re.test(e[n])) return 'results: integer key{k:uint32} expected';
                var r = H.votings_service.TxVotingResults.verify(t.results[e[n]]);
                if (r) return 'results.' + r
              }
            }
            return null
          }, I.fromObject = function (t) {
            if (t instanceof H.votings_service.TxFinalizeVotingWithResults) return t;
            var e = new H.votings_service.TxFinalizeVotingWithResults;
            if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.seed && (M.Long ? (e.seed = M.Long.fromValue(t.seed)).unsigned = !0 : 'string' == typeof t.seed ? e.seed = F(t.seed, 10) : 'number' == typeof t.seed ? e.seed = t.seed : 'object' === z(t.seed) && (e.seed = new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), t.results) {
              if ('object' !== z(t.results)) throw TypeError('.votings_service.TxFinalizeVotingWithResults.results: object expected');
              e.results = {
              };
              for (var n = q(t.results), r = 0; r < n.length; ++r) {
                if ('object' !== z(t.results[n[r]])) throw TypeError('.votings_service.TxFinalizeVotingWithResults.results: object expected');
                e.results[n[r]] = H.votings_service.TxVotingResults.fromObject(t.results[n[r]])
              }
            }
            return e
          }, I.toObject = function (t, e) {
            var n,
            r = {
            };
            if (((e = e || {
            }).objects || e.defaults) && (r.results = {
            }), e.defaults) if (r.voting_id = '', M.Long) {
              var o = new M.Long(0, 0, !0);
              r.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
            } else r.seed = e.longs === String ? '0' : 0;
            if (null != t.voting_id && t.hasOwnProperty('voting_id') && (r.voting_id = t.voting_id), null != t.seed && t.hasOwnProperty('seed') && ('number' == typeof t.seed ? r.seed = e.longs === String ? String(t.seed) : t.seed : r.seed = e.longs === String ? M.Long.prototype.toString.call(t.seed) : e.longs === Number ? new M.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), t.results && (n = q(t.results)).length) {
              r.results = {
              };
              for (var i = 0; i < n.length; ++i) r.results[n[i]] = H.votings_service.TxVotingResults.toObject(t.results[n[i]], e)
            }
            return r
          }, I.prototype.toJSON = function () {
            return this.constructor.toObject(this, N.util.toJSONOptions)
          }, I),
          n
        }(),
        H
      }) ? r.apply(e, o) : r) || (t.exports = i)
    },
    function (t, e, n) {
      n(6);
      var o = n(23),
      i = n(45),
      s = n(51),
      a = n(20),
      r = function () {
        'use strict';
        function r(t, e, n) {
          i(this, r),
          this.sender = t,
          this.tx = e,
          this.txData = n,
          this.hash = null,
          this.blockchainConnector = null
        }
        return s(r, [
          {
            key: 'getSender',
            value: function () {
              var t = this.sender;
              return {
                publicKey: t.publicKey,
                secretKey: t.secretKey
              }
            }
          },
          {
            key: 'send',
            value: function (t) {
              var e = this;
              return (this.blockchainConnector = t).sendTransaction(this.sender, this.tx, this.txData).then(function (t) {
                return e.hash = t
              })
            }
          },
          {
            key: 'getHash',
            value: function () {
              return this.hash
            }
          },
          {
            key: 'getResult',
            value: function (t) {
              return t && (this.blockchainConnector = t),
              this.blockchainConnector ? this.hash ? this.blockchainConnector.getTransactionResult(this.hash) : o.reject(new Error('Transaction either was not sent or sending failed')) : o.reject(new Error('Transaction should be sent to wait for its result'))
            }
          },
          {
            key: 'waitResult',
            value: function (t) {
              return t && (this.blockchainConnector = t),
              this.blockchainConnector ? this.hash ? this.blockchainConnector.waitTransactionResult(this.hash) : o.reject(new Error('Transaction either was not sent or sending failed')) : o.reject(new Error('Transaction should be sent to wait for its result'))
            }
          },
          {
            key: 'getRawTx',
            value: function (t) {
              var e = (void 0 === t ? this.tx.create(this.txData, this.sender) : this.tx.create(this.txData, this.sender.publicKey, t)).serialize();
              return a.uint8ArrayToHexadecimal(new Uint8Array(e))
            }
          },
          {
            key: 'getUnsignedRawTx',
            value: function () {
              return a.uint8ArrayToHexadecimal(new Uint8Array(this.tx.serialize(this.txData)))
            }
          }
        ]),
        r
      }();
      t.exports = r
    },
    function (t, e, n) {
      var r = n(93);
      t.exports = function (t) {
        return Object(r(t))
      }
    },
    function (t, e, n) {
      function r(t) {
        return 'function' == typeof t ? t : void 0
      }
      var o = n(3),
      i = n(11);
      t.exports = function (t, e) {
        return arguments.length < 2 ? r(o[t]) || r(i[t]) : o[t] && o[t][e] || i[t] && i[t][e]
      }
    },
    function (t, e, n) {
      t.exports = !n(29) (function () {
        return 7 != Object.defineProperty({
        }, 'a', {
          get: function () {
            return 7
          }
        }).a
      })
    },
    function (t, e, n) {
      t.exports = n(490)
    },
    function (t, e, n) {
      var r = n(22),
      o = n(188),
      i = n(5),
      s = n(115),
      a = Object.defineProperty;
      e.f = r ? a : function (t, e, n) {
        if (i(t), e = s(e, !0), i(n), o) try {
          return a(t, e, n)
        } catch (t) {
        }
        if ('get' in n || 'set' in n) throw TypeError('Accessors not supported');
        return 'value' in n && (t[e] = n.value),
        t
      }
    },
    function (t, e, n) {
      var r = n(94),
      o = Math.min;
      t.exports = function (t) {
        return 0 < t ? o(r(t), 9007199254740991) : 0
      }
    },
    function (t, e, n) {
      var r = n(61);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + ' is not an object!');
        return t
      }
    },
    function (t, e, n) {
      var r = n(68),
      o = Math.min;
      t.exports = function (t) {
        return 0 < t ? o(r(t), 9007199254740991) : 0
      }
    },
    function (t, e) {
      t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
    },
    function (t, e, n) {
      t.exports = n(471)
    },
    function (t, e, n) {
      var r = n(114),
      o = n(93);
      t.exports = function (t) {
        return r(o(t))
      }
    },
    function (t, e, n) {
      var r = n(22),
      o = n(41),
      i = n(78);
      t.exports = r ? function (t, e, n) {
        return o.f(t, e, i(1, n))
      }
       : function (t, e, n) {
        return t[e] = n,
        t
      }
    },
    function (t, e, n) {
      var y = n(30),
      v = n(123),
      g = n(50),
      _ = n(58),
      m = n(125),
      b = 'prototype',
      w = function (t, e, n) {
        var r,
        o,
        i,
        s,
        a = t & w.F,
        u = t & w.G,
        c = t & w.S,
        l = t & w.P,
        f = t & w.B,
        h = u ? y : c ? y[e] || (y[e] = {
        }) : (y[e] || {
        }) [b],
        p = u ? v : v[e] || (v[e] = {
        }),
        d = p[b] || (p[b] = {
        });
        for (r in u && (n = e), n) i = ((o = !a && h && void 0 !== h[r]) ? h : n) [r],
        s = f && o ? m(i, y) : l && 'function' == typeof i ? m(Function.call, i) : i,
        h && _(h, r, i, t & w.U),
        p[r] != i && g(p, r, s),
        l && d[r] != i && (d[r] = i)
      };
      y.core = v,
      w.F = 1,
      w.G = 2,
      w.S = 4,
      w.P = 8,
      w.B = 16,
      w.W = 32,
      w.U = 64,
      w.R = 128,
      t.exports = w
    },
    function (t, e, n) {
      var r = n(57),
      o = n(124);
      t.exports = n(39) ? function (t, e, n) {
        return r.f(t, e, o(1, n))
      }
       : function (t, e, n) {
        return t[e] = n,
        t
      }
    },
    function (t, e, n) {
      var o = n(378);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          'value' in r && (r.writable = !0),
          o(t, r.key, r)
        }
      }
      t.exports = function (t, e, n) {
        return e && r(t.prototype, e),
        n && r(t, n),
        t
      }
    },
    function (t, e, n) {
      t.exports = n(489)
    },
    function (t, e, n) {
      var r = n(8),
      o = n(172);
      t.exports = r ? o : function (t) {
        return Map.prototype.entries.call(t)
      }
    },
    function (t, e, n) {
      var r,
      o,
      i,
      s = n(194),
      a = n(11),
      u = n(12),
      c = n(48),
      l = n(26),
      f = n(118),
      h = n(96),
      p = a.WeakMap;
      if (s) {
        var d = new p,
        y = d.get,
        v = d.has,
        g = d.set;
        r = function (t, e) {
          return g.call(d, t, e),
          e
        },
        o = function (t) {
          return y.call(d, t) || {
          }
        },
        i = function (t) {
          return v.call(d, t)
        }
      } else {
        var _ = f('state');
        h[_] = !0,
        r = function (t, e) {
          return c(t, _, e),
          e
        },
        o = function (t) {
          return l(t, _) ? t[_] : {
          }
        },
        i = function (t) {
          return l(t, _)
        }
      }
      t.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (t) {
          return i(t) ? o(t) : r(t, {
          })
        },
        getterFor: function (n) {
          return function (t) {
            var e;
            if (!u(t) || (e = o(t)).type !== n) throw TypeError('Incompatible receiver, ' + n + ' required');
            return e
          }
        }
      }
    },
    function (t, e, n) {
      n(152);
      var r = n(325),
      o = n(11),
      i = n(65),
      s = n(48),
      a = n(66),
      u = n(9) ('toStringTag');
      for (var c in r) {
        var l = o[c],
        f = l && l.prototype;
        f && i(f) !== u && s(f, u, c),
        a[c] = a.Array
      }
    },
    function (t, e, n) {
      'use strict';
      if (n(39)) {
        var g = n(122),
        _ = n(30),
        m = n(29),
        b = n(49),
        w = n(211),
        r = n(333),
        d = n(125),
        x = n(213),
        o = n(124),
        O = n(50),
        i = n(212),
        s = n(68),
        S = n(44),
        k = n(214),
        a = n(100),
        u = n(98),
        c = n(67),
        E = n(128),
        P = n(61),
        y = n(70),
        v = n(334),
        A = n(159),
        j = n(219),
        T = n(126).f,
        B = n(336),
        l = n(99),
        f = n(18),
        h = n(337),
        p = n(154),
        R = n(220),
        L = n(62),
        I = n(84),
        N = n(343),
        C = n(222),
        U = n(157),
        M = n(344),
        H = n(57),
        D = n(161),
        V = H.f,
        F = D.f,
        K = _.RangeError,
        q = _.TypeError,
        z = _.Uint8Array,
        J = 'ArrayBuffer',
        X = 'Shared' + J,
        W = 'BYTES_PER_ELEMENT',
        Y = 'prototype',
        G = Array[Y],
        Z = r.ArrayBuffer,
        $ = r.DataView,
        Q = h(0),
        tt = h(2),
        et = h(3),
        nt = h(4),
        rt = h(5),
        ot = h(6),
        it = p(!0),
        st = p(!1),
        at = L.values,
        ut = L.keys,
        ct = L.entries,
        lt = G.lastIndexOf,
        ft = G.reduce,
        ht = G.reduceRight,
        pt = G.join,
        dt = G.sort,
        yt = G.slice,
        vt = G.toString,
        gt = G.toLocaleString,
        _t = f('iterator'),
        mt = f('toStringTag'),
        bt = l('typed_constructor'),
        wt = l('def_constructor'),
        xt = w.CONSTR,
        Ot = w.TYPED,
        St = w.VIEW,
        kt = 'Wrong length!',
        Et = h(1, function (t, e) {
          return Bt(R(t, t[wt]), e)
        }),
        Pt = m(function () {
          return 1 === new z(new Uint16Array([1]).buffer) [0]
        }),
        At = !!z && !!z[Y].set && m(function () {
          new z(1).set({
          })
        }),
        jt = function (t, e) {
          var n = s(t);
          if (n < 0 || n % e) throw K('Wrong offset!');
          return n
        },
        Tt = function (t) {
          if (P(t) && Ot in t) return t;
          throw q(t + ' is not a typed array!')
        },
        Bt = function (t, e) {
          if (!(P(t) && bt in t)) throw q('It is not a typed array constructor!');
          return new t(e)
        },
        Rt = function (t, e) {
          return Lt(R(t, t[wt]), e)
        },
        Lt = function (t, e) {
          for (var n = 0, r = e.length, o = Bt(t, r); n < r; ) o[n] = e[n++];
          return o
        },
        It = function (t, e, n) {
          V(t, e, {
            get: function () {
              return this._d[n]
            }
          })
        },
        Nt = function (t, e, n) {
          var r,
          o,
          i,
          s,
          a,
          u,
          c = y(t),
          l = arguments.length,
          f = 1 < l ? e : void 0,
          h = void 0 !== f,
          p = B(c);
          if (null != p && !v(p)) {
            for (u = p.call(c), i = [
            ], r = 0; !(a = u.next()).done; r++) i.push(a.value);
            c = i
          }
          for (h && 2 < l && (f = d(f, n, 2)), r = 0, o = S(c.length), s = Bt(this, o); r < o; r++) s[r] = h ? f(c[r], r) : c[r];
          return s
        },
        Ct = function () {
          for (var t = 0, e = arguments.length, n = Bt(this, e); t < e; ) n[t] = arguments[t++];
          return n
        },
        Ut = !!z && m(function () {
          gt.call(new z(1))
        }),
        Mt = function () {
          return gt.apply(Ut ? yt.call(Tt(this)) : Tt(this), arguments)
        },
        Ht = {
          copyWithin: function (t, e, n) {
            return M.call(Tt(this), t, e, 2 < arguments.length ? n : void 0)
          },
          every: function (t, e) {
            return nt(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          fill: function (t) {
            return U.apply(Tt(this), arguments)
          },
          filter: function (t, e) {
            return Rt(this, tt(Tt(this), t, 1 < arguments.length ? e : void 0))
          },
          find: function (t, e) {
            return rt(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          findIndex: function (t, e) {
            return ot(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          forEach: function (t, e) {
            Q(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          indexOf: function (t, e) {
            return st(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          includes: function (t, e) {
            return it(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          join: function (t) {
            return pt.apply(Tt(this), arguments)
          },
          lastIndexOf: function (t) {
            return lt.apply(Tt(this), arguments)
          },
          map: function (t, e) {
            return Et(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          reduce: function (t) {
            return ft.apply(Tt(this), arguments)
          },
          reduceRight: function (t) {
            return ht.apply(Tt(this), arguments)
          },
          reverse: function () {
            for (var t, e = this, n = Tt(e).length, r = Math.floor(n / 2), o = 0; o < r; ) t = e[o],
            e[o++] = e[--n],
            e[n] = t;
            return e
          },
          some: function (t, e) {
            return et(Tt(this), t, 1 < arguments.length ? e : void 0)
          },
          sort: function (t) {
            return dt.call(Tt(this), t)
          },
          subarray: function (t, e) {
            var n = Tt(this),
            r = n.length,
            o = a(t, r);
            return new (R(n, n[wt])) (n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, S((void 0 === e ? r : a(e, r)) - o))
          }
        },
        Dt = function (t, e) {
          return Rt(this, yt.call(Tt(this), t, e))
        },
        Vt = function (t, e) {
          Tt(this);
          var n = jt(e, 1),
          r = this.length,
          o = y(t),
          i = S(o.length),
          s = 0;
          if (r < i + n) throw K(kt);
          for (; s < i; ) this[n + s] = o[s++]
        },
        Ft = {
          entries: function () {
            return ct.call(Tt(this))
          },
          keys: function () {
            return ut.call(Tt(this))
          },
          values: function () {
            return at.call(Tt(this))
          }
        },
        Kt = function (t, e) {
          return P(t) && t[Ot] && 'symbol' != typeof e && e in t && String( + e) == String(e)
        },
        qt = function (t, e) {
          return Kt(t, e = u(e, !0)) ? o(2, t[e]) : F(t, e)
        },
        zt = function (t, e, n) {
          return !(Kt(t, e = u(e, !0)) && P(n) && c(n, 'value')) || c(n, 'get') || c(n, 'set') || n.configurable || c(n, 'writable') && !n.writable || c(n, 'enumerable') && !n.enumerable ? V(t, e, n) : (t[e] = n.value, t)
        };
        xt || (D.f = qt, H.f = zt),
        b(b.S + b.F * !xt, 'Object', {
          getOwnPropertyDescriptor: qt,
          defineProperty: zt
        }),
        m(function () {
          vt.call({
          })
        }) && (vt = gt = function () {
          return pt.call(this)
        });
        var Jt = i({
        }, Ht);
        i(Jt, Ft),
        O(Jt, _t, Ft.values),
        i(Jt, {
          slice: Dt,
          set: Vt,
          constructor: function () {
          },
          toString: vt,
          toLocaleString: Mt
        }),
        It(Jt, 'buffer', 'b'),
        It(Jt, 'byteOffset', 'o'),
        It(Jt, 'byteLength', 'l'),
        It(Jt, 'length', 'e'),
        V(Jt, mt, {
          get: function () {
            return this[Ot]
          }
        }),
        t.exports = function (t, f, e, i) {
          function h(t, o) {
            V(t, o, {
              get: function () {
                return t = o,
                (e = this._d).v[n](t * f + e.o, Pt);
                var t,
                e
              },
              set: function (t) {
                return e = o,
                n = t,
                r = this._d,
                i && (n = (n = Math.round(n)) < 0 ? 0 : 255 < n ? 255 : 255 & n),
                void r.v[s](e * f + r.o, n, Pt);
                var e,
                n,
                r
              },
              enumerable: !0
            })
          }
          var p = t + ((i = !!i) ? 'Clamped' : '') + 'Array',
          n = 'get' + t,
          s = 'set' + t,
          d = _[p],
          a = d || {
          },
          r = d && j(d),
          o = !d || !w.ABV,
          u = {
          },
          c = d && d[Y];
          o ? (d = e(function (t, e, n, r) {
            x(t, d, p, '_d');
            var o,
            i,
            s,
            a,
            u = 0,
            c = 0;
            if (P(e)) {
              if (!(e instanceof Z || (a = E(e)) == J || a == X)) return Ot in e ? Lt(d, e) : Nt.call(d, e);
              o = e,
              c = jt(n, f);
              var l = e.byteLength;
              if (void 0 === r) {
                if (l % f) throw K(kt);
                if ((i = l - c) < 0) throw K(kt)
              } else if (l < (i = S(r) * f) + c) throw K(kt);
              s = i / f
            } else s = k(e),
            o = new Z(i = s * f);
            for (O(t, '_d', {
              b: o,
              o: c,
              l: i,
              e: s,
              v: new $(o)
            }); u < s; ) h(t, u++)
          }), c = d[Y] = A(Jt), O(c, 'constructor', d)) : m(function () {
            d(1)
          }) && m(function () {
            new d( - 1)
          }) && N(function (t) {
            new d,
            new d(null),
            new d(1.5),
            new d(t)
          }, !0) || (d = e(function (t, e, n, r) {
            var o;
            return x(t, d, p),
            P(e) ? e instanceof Z || (o = E(e)) == J || o == X ? void 0 !== r ? new a(e, jt(n, f), r) : void 0 !== n ? new a(e, jt(n, f)) : new a(e) : Ot in e ? Lt(d, e) : Nt.call(d, e) : new a(k(e))
          }), Q(r !== Function.prototype ? T(a).concat(T(r)) : T(a), function (t) {
            t in d || O(d, t, a[t])
          }), d[Y] = c, g || (c.constructor = d));
          var l = c[_t],
          y = !!l && ('values' == l.name || null == l.name),
          v = Ft.values;
          O(d, bt, !0),
          O(c, Ot, p),
          O(c, St, !0),
          O(c, wt, d),
          (i ? new d(1) [mt] == p : mt in c) || V(c, mt, {
            get: function () {
              return p
            }
          }),
          u[p] = d,
          b(b.G + b.W + b.F * (d != a), u),
          b(b.S, p, {
            BYTES_PER_ELEMENT: f
          }),
          b(b.S + b.F * m(function () {
            a.of.call(d, 1)
          }), p, {
            from: Nt,
            of: Ct
          }),
          W in c || O(c, W, f),
          b(b.P, p, Ht),
          C(p),
          b(b.P + b.F * At, p, {
            set: Vt
          }),
          b(b.P + b.F * !y, p, Ft),
          g || c.toString == vt || (c.toString = vt),
          b(b.P + b.F * m(function () {
            new d(1).slice()
          }), p, {
            slice: Dt
          }),
          b(b.P + b.F * (m(function () {
            return [1,
            2].toLocaleString() != new d([1,
            2]).toLocaleString()
          }) || !m(function () {
            c.toLocaleString.call([1,
            2])
          })), p, {
            toLocaleString: Mt
          }),
          I[p] = y ? l : v,
          g || y || O(c, _t, v)
        }
      } else t.exports = function () {
      }
    },
    function (t, e, n) {
      var r = n(43),
      o = n(208),
      i = n(98),
      s = Object.defineProperty;
      e.f = n(39) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
          return s(t, e, n)
        } catch (t) {
        }
        if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
        return 'value' in n && (t[e] = n.value),
        t
      }
    },
    function (t, e, n) {
      var i = n(30),
      s = n(50),
      a = n(67),
      u = n(99) ('src'),
      r = n(332),
      o = 'toString',
      c = ('' + r).split(o);
      n(123).inspectSource = function (t) {
        return r.call(t)
      },
      (t.exports = function (t, e, n, r) {
        var o = 'function' == typeof n;
        o && (a(n, 'name') || s(n, 'name', e)),
        t[e] !== n && (o && (a(n, u) || s(n, u, t[e] ? '' + t[e] : c.join(String(e)))), t === i ? t[e] = n : r ? t[e] ? t[e] = n : s(t, e, n) : (delete t[e], s(t, e, n)))
      }) (Function.prototype, o, function () {
        return 'function' == typeof this && this[u] || r.call(this)
      })
    },
    function (t, e, n) {
      function s(t) {
        throw t
      }
      var a = n(22),
      u = n(7),
      c = n(26),
      l = Object.defineProperty,
      f = {
      };
      t.exports = function (t, e) {
        if (c(f, t)) return f[t];
        var n = [
        ][t],
        r = !!c(e = e || {
        }, 'ACCESSORS') && e.ACCESSORS,
        o = c(e, 0) ? e[0] : s,
        i = c(e, 1) ? e[1] : void 0;
        return f[t] = !!n && !u(function () {
          if (r && !a) return !0;
          var t = {
            length: - 1
          };
          r ? l(t, 1, {
            enumerable: !0,
            get: s
          }) : t[1] = 1,
          n.call(t, o, i)
        })
      }
    },
    function (t, e, n) {
      var i = n(151),
      s = n(41).f,
      a = n(48),
      u = n(26),
      c = n(320),
      l = n(9) ('toStringTag');
      t.exports = function (t, e, n, r) {
        if (t) {
          var o = n ? t : t.prototype;
          u(o, l) || s(o, l, {
            configurable: !0,
            value: e
          }),
          r && !i && a(o, 'toString', c)
        }
      }
    },
    function (t, e) {
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(160),
      o = n(341),
      i = n(84),
      s = n(127);
      t.exports = n(221) (Array, 'Array', function (t, e) {
        this._t = s(t),
        this._i = 0,
        this._k = e
      }, function () {
        var t = this._t,
        e = this._k,
        n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, 'keys' == e ? n : 'values' == e ? t[n] : [
          n,
          t[n]
        ])
      }, 'values'),
      i.Arguments = i.Array,
      r('keys'),
      r('values'),
      r('entries')
    },
    function (t, e) {
      var n = {
      }.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, - 1)
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(319).charAt,
      r = n(54),
      i = n(148),
      s = 'String Iterator',
      a = r.set,
      u = r.getterFor(s);
      i(String, 'String', function (t) {
        a(this, {
          type: s,
          string: String(t),
          index: 0
        })
      }, function () {
        var t,
        e = u(this),
        n = e.string,
        r = e.index;
        return r >= n.length ? {
          value: void 0,
          done: !0
        }
         : (t = o(n, r), e.index += t.length, {
          value: t,
          done: !1
        })
      })
    },
    function (t, e, n) {
      var r = n(151),
      o = n(63),
      i = n(9) ('toStringTag'),
      s = 'Arguments' == o(function () {
        return arguments
      }());
      t.exports = r ? o : function (t) {
        var e,
        n,
        r;
        return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = function (t, e) {
          try {
            return t[e]
          } catch (t) {
          }
        }(e = Object(t), i)) ? n : s ? o(e) : 'Object' == (r = o(e)) && 'function' == typeof e.callee ? 'Arguments' : r
      }
    },
    function (t, e) {
      t.exports = {
      }
    },
    function (t, e) {
      var n = {
      }.hasOwnProperty;
      t.exports = function (t, e) {
        return n.call(t, e)
      }
    },
    function (t, e) {
      var n = Math.ceil,
      r = Math.floor;
      t.exports = function (t) {
        return isNaN(t = + t) ? 0 : (0 < t ? r : n) (t)
      }
    },
    function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError('Can\'t call method on  ' + t);
        return t
      }
    },
    function (t, e, n) {
      var r = n(69);
      t.exports = function (t) {
        return Object(r(t))
      }
    },
    function (t, e, n) {
      function r(p) {
        var d = 1 == p,
        y = 2 == p,
        v = 3 == p,
        g = 4 == p,
        _ = 6 == p,
        m = 5 == p || _;
        return function (t, e, n, r) {
          for (var o, i, s = x(t), a = w(s), u = b(e, n, 3), c = O(a.length), l = 0, f = r || S, h = d ? f(t, c) : y ? f(t, 0) : void 0; l < c; l++) if ((m || l in a) && (i = u(o = a[l], l, s), p)) if (d) h[l] = i;
           else if (i) switch (p) {
            case 3:
              return !0;
            case 5:
              return o;
            case 6:
              return l;
            case 2:
              k.call(h, o)
          } else if (g) return !1;
          return _ ? - 1 : v || g ? g : h
        }
      }
      var b = n(24),
      w = n(114),
      x = n(37),
      O = n(42),
      S = n(143),
      k = [
      ].push;
      t.exports = {
        forEach: r(0),
        map: r(1),
        filter: r(2),
        some: r(3),
        every: r(4),
        find: r(5),
        findIndex: r(6)
      }
    },
    function (t, e, n) {
      t.exports = n(482)
    },
    function (t, e, n) {
      t.exports = n(485)
    },
    function (t, f, h) {
      'use strict';
      (function (t) {
        h(4),
        h(2);
        var e = h(21),
        r = h(10);
        h(6);
        var i = h(46),
        o = h(27),
        s = h(13),
        n = h(129),
        a = h(176),
        u = f;
        function c(t, e, n) {
          for (var r = i(e), o = 0; o < r.length; ++o) void 0 !== t[r[o]] && n || (t[r[o]] = e[r[o]]);
          return t
        }
        function l(t) {
          function n(t, e) {
            if (!(this instanceof n)) return new n(t, e);
            r(this, 'message', {
              get: function () {
                return t
              }
            }),
            Error.captureStackTrace ? Error.captureStackTrace(this, n) : r(this, 'stack', {
              value: (new Error).stack || ''
            }),
            e && c(this, e)
          }
          return (n.prototype = e(Error.prototype)).constructor = n,
          r(n.prototype, 'name', {
            get: function () {
              return t
            }
          }),
          n.prototype.toString = function () {
            return this.name + ': ' + this.message
          },
          n
        }
        u.asPromise = h(265),
        u.base64 = h(266),
        u.EventEmitter = h(267),
        u.float = h(269),
        u.inquire = h(273),
        u.utf8 = h(274),
        u.pool = h(275),
        u.LongBits = h(510),
        u.global = 'undefined' != typeof window && window || void 0 !== t && t || 'undefined' != typeof self && self || this,
        u.emptyArray = a ? a([]) : [
        ],
        u.emptyObject = a ? a({
        }) : {
        },
        u.isNode = Boolean(u.global.process && u.global.process.versions && u.global.process.versions.node),
        u.isInteger = n || function (t) {
          return 'number' == typeof t && isFinite(t) && Math.floor(t) === t
        },
        u.isString = function (t) {
          return 'string' == typeof t || t instanceof String
        },
        u.isObject = function (t) {
          return t && 'object' === s(t)
        },
        u.isset = u.isSet = function (t, e) {
          var n = t[e];
          return !(null == n || !t.hasOwnProperty(e)) && ('object' !== s(n) || 0 < (o(n) ? n.length : i(n).length))
        },
        u.Buffer = function () {
          try {
            var t = u.inquire('buffer').Buffer;
            return t.prototype.utf8Write ? t : null
          } catch (t) {
            return null
          }
        }(),
        u._Buffer_from = null,
        u._Buffer_allocUnsafe = null,
        u.newBuffer = function (t) {
          return 'number' == typeof t ? u.Buffer ? u._Buffer_allocUnsafe(t) : new u.Array(t) : u.Buffer ? u._Buffer_from(t) : 'undefined' == typeof Uint8Array ? t : new Uint8Array(t)
        },
        u.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        u.Long = u.global.dcodeIO && u.global.dcodeIO.Long || u.global.Long || u.inquire('long'),
        u.key2Re = /^true|false|0|1$/,
        u.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
        u.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
        u.longToHash = function (t) {
          return t ? u.LongBits.from(t).toHash() : u.LongBits.zeroHash
        },
        u.longFromHash = function (t, e) {
          var n = u.LongBits.fromHash(t);
          return u.Long ? u.Long.fromBits(n.lo, n.hi, e) : n.toNumber(Boolean(e))
        },
        u.merge = c,
        u.lcFirst = function (t) {
          return t.charAt(0).toLowerCase() + t.substring(1)
        },
        u.newError = l,
        u.ProtocolError = l('ProtocolError'),
        u.oneOfGetter = function (t) {
          for (var n = {
          }, e = 0; e < t.length; ++e) n[t[e]] = 1;
          return function () {
            for (var t = i(this), e = t.length - 1; - 1 < e; --e) if (1 === n[t[e]] && void 0 !== this[t[e]] && null !== this[t[e]]) return t[e]
          }
        },
        u.oneOfSetter = function (n) {
          return function (t) {
            for (var e = 0; e < n.length; ++e) n[e] !== t && delete this[n[e]]
          }
        },
        u.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0
        },
        u._configure = function () {
          var n = u.Buffer;
          n ? (u._Buffer_from = n.from !== Uint8Array.from && n.from || function (t, e) {
            return new n(t, e)
          }, u._Buffer_allocUnsafe = n.allocUnsafe || function (t) {
            return new n(t)
          }) : u._Buffer_from = u._Buffer_allocUnsafe = null
        }
      }).call(this, h(91))
    },
    function (t, e, n) {
      var o = n(101),
      r = n(21),
      i = n(279),
      s = i.Buffer;
      function a(t, e) {
        for (var n in t) e[n] = t[n]
      }
      function u(t, e, n) {
        return s(t, e, n)
      }
      s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t.exports = i : (a(i, e), e.Buffer = u),
      u.prototype = r(s.prototype),
      a(s, u),
      u.from = function (t, e, n) {
        if ('number' == typeof t) throw new TypeError('Argument must not be a number');
        return s(t, e, n)
      },
      u.alloc = function (t, e, n) {
        if ('number' != typeof t) throw new TypeError('Argument must be a number');
        var r = s(t);
        return void 0 !== e ? 'string' == typeof n ? o(r).call(r, e, n) : o(r).call(r, e) : o(r).call(r, 0),
        r
      },
      u.allocUnsafe = function (t) {
        if ('number' != typeof t) throw new TypeError('Argument must be a number');
        return s(t)
      },
      u.allocUnsafeSlow = function (t) {
        if ('number' != typeof t) throw new TypeError('Argument must be a number');
        return i.SlowBuffer(t)
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(101);
      n(108);
      var r = n(82);
      n(4),
      n(2);
      var i = n(31);
      n(6);
      var a = n(72),
      o = n(73),
      u = n(10),
      c = n(52),
      l = n(13),
      f = n(40);
      function h(t) {
        return (h = 'function' == typeof f && 'symbol' === l(c) ? function (t) {
          return l(t)
        }
         : function (t) {
          return t && 'function' == typeof f && t.constructor === f && t !== f.prototype ? 'symbol' : l(t)
        }) (t)
      }
      u(e, '__esModule', {
        value: !0
      }),
      e.hexadecimalToUint8Array = function (t) {
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected');
        if (!p.validateHexadecimal(t, t.length / 2)) throw new TypeError('String of wrong type is passed. Hexadecimal expected.');
        for (var e = new Uint8Array(t.length / 2), n = 0, r = 0; n < t.length; n += 2, r++) e[r] = i(t.substr(n, 2), 16);
        return e
      },
      e.hexadecimalToBinaryString = function (t) {
        var e = '';
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected');
        if (!p.validateHexadecimal(t, Math.ceil(t.length / 2))) throw new TypeError('String of wrong type is passed. Hexadecimal expected.');
        for (var n = null, r = 0; r < t.length; r++) {
          for (var o = y(i(t[r], 16).toString(2)); o.length < 4; ) o += '0';
          n = n ? (e += o + n, null) : o
        }
        return e
      },
      e.uint8ArrayToHexadecimal = function (t) {
        var e = '';
        if (!(t instanceof Uint8Array)) throw new TypeError('Wrong data type of array of 8-bit integers. Uint8Array is expected');
        for (var n = 0; n < t.length; n++) {
          var r = t[n].toString(16);
          r = 1 === r.length ? '0' + r : r,
          e += r
        }
        return e.toLowerCase()
      },
      e.uint8ArrayToBinaryString = function (t) {
        var e = '';
        if (!(t instanceof Uint8Array)) throw new TypeError('Wrong data type of array of 8-bit integers. Uint8Array is expected');
        for (var n = 0; n < t.length; n++) {
          for (var r = y(t[n].toString(2)); r.length < 8; ) r += '0';
          e += r
        }
        return e
      },
      e.binaryStringToUint8Array = function (t) {
        var e = [
        ];
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. Binary string is expected');
        if (!p.validateBinaryString(t)) throw new TypeError('String of wrong type is passed. Binary string expected.');
        for (var n = 0; n < t.length; n += 8) e.push(i(y(t.substr(n, 8)), 2));
        return new Uint8Array(e)
      },
      e.binaryStringToHexadecimal = function (t) {
        var e = '';
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. Binary string is expected');
        if (!p.validateBinaryString(t)) throw new TypeError('String of wrong type is passed. Binary string expected.');
        for (var n = 0; n < t.length; n += 8) {
          var r = i(y(t.substr(n, 8)), 2).toString(16);
          r = 1 === r.length ? '0' + r : r,
          e += r
        }
        return e.toLowerCase()
      },
      e.stringToUint8Array = function (t, e) {
        var n,
        r = 0;
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. String is expected');
        0 < e ? (n = new Array(e), s(n).call(n, 0)) : n = [
        ];
        for (var o = 0; o < t.length; o++) {
          var i = t.charCodeAt(o);
          i < 128 ? n[r++] = i : (i < 2048 ? n[r++] = i >> 6 | 192 : (55296 == (64512 & i) && o + 1 < t.length && 56320 == (64512 & t.charCodeAt(o + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++o)), n[r++] = i >> 18 | 240, n[r++] = i >> 12 & 63 | 128) : n[r++] = i >> 12 | 224, n[r++] = i >> 6 & 63 | 128), n[r++] = 63 & i | 128)
        }
        return new Uint8Array(n)
      };
      var p = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== h(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = d();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = u && a;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? a(t, o) : null;
          i && (i.get || i.set) ? u(n, o, i) : n[o] = t[o]
        }
        n.default = t,
        e && e.set(t, n);
        return n
      }(n(180));
      function d() {
        if ('function' != typeof o) return null;
        var t = new o;
        return d = function () {
          return t
        },
        t
      }
      function y(t) {
        var e;
        return r(e = t.split('')).call(e).join('')
      }
    },
    function (t, f, h) {
      'use strict';
      (function (t) {
        h(4),
        h(2);
        var e = h(21),
        r = h(10);
        h(6);
        var i = h(46),
        o = h(27),
        s = h(13),
        n = h(129),
        a = h(176),
        u = f;
        function c(t, e, n) {
          for (var r = i(e), o = 0; o < r.length; ++o) void 0 !== t[r[o]] && n || (t[r[o]] = e[r[o]]);
          return t
        }
        function l(t) {
          function n(t, e) {
            if (!(this instanceof n)) return new n(t, e);
            r(this, 'message', {
              get: function () {
                return t
              }
            }),
            Error.captureStackTrace ? Error.captureStackTrace(this, n) : r(this, 'stack', {
              value: (new Error).stack || ''
            }),
            e && c(this, e)
          }
          return (n.prototype = e(Error.prototype)).constructor = n,
          r(n.prototype, 'name', {
            get: function () {
              return t
            }
          }),
          n.prototype.toString = function () {
            return this.name + ': ' + this.message
          },
          n
        }
        u.asPromise = h(265),
        u.base64 = h(266),
        u.EventEmitter = h(267),
        u.float = h(269),
        u.inquire = h(273),
        u.utf8 = h(274),
        u.pool = h(275),
        u.LongBits = h(659),
        u.global = 'undefined' != typeof window && window || void 0 !== t && t || 'undefined' != typeof self && self || this,
        u.emptyArray = a ? a([]) : [
        ],
        u.emptyObject = a ? a({
        }) : {
        },
        u.isNode = Boolean(u.global.process && u.global.process.versions && u.global.process.versions.node),
        u.isInteger = n || function (t) {
          return 'number' == typeof t && isFinite(t) && Math.floor(t) === t
        },
        u.isString = function (t) {
          return 'string' == typeof t || t instanceof String
        },
        u.isObject = function (t) {
          return t && 'object' === s(t)
        },
        u.isset = u.isSet = function (t, e) {
          var n = t[e];
          return !(null == n || !t.hasOwnProperty(e)) && ('object' !== s(n) || 0 < (o(n) ? n.length : i(n).length))
        },
        u.Buffer = function () {
          try {
            var t = u.inquire('buffer').Buffer;
            return t.prototype.utf8Write ? t : null
          } catch (t) {
            return null
          }
        }(),
        u._Buffer_from = null,
        u._Buffer_allocUnsafe = null,
        u.newBuffer = function (t) {
          return 'number' == typeof t ? u.Buffer ? u._Buffer_allocUnsafe(t) : new u.Array(t) : u.Buffer ? u._Buffer_from(t) : 'undefined' == typeof Uint8Array ? t : new Uint8Array(t)
        },
        u.Array = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        u.Long = u.global.dcodeIO && u.global.dcodeIO.Long || u.global.Long || u.inquire('long'),
        u.key2Re = /^true|false|0|1$/,
        u.key32Re = /^-?(?:0|[1-9][0-9]*)$/,
        u.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
        u.longToHash = function (t) {
          return t ? u.LongBits.from(t).toHash() : u.LongBits.zeroHash
        },
        u.longFromHash = function (t, e) {
          var n = u.LongBits.fromHash(t);
          return u.Long ? u.Long.fromBits(n.lo, n.hi, e) : n.toNumber(Boolean(e))
        },
        u.merge = c,
        u.lcFirst = function (t) {
          return t.charAt(0).toLowerCase() + t.substring(1)
        },
        u.newError = l,
        u.ProtocolError = l('ProtocolError'),
        u.oneOfGetter = function (t) {
          for (var n = {
          }, e = 0; e < t.length; ++e) n[t[e]] = 1;
          return function () {
            for (var t = i(this), e = t.length - 1; - 1 < e; --e) if (1 === n[t[e]] && void 0 !== this[t[e]] && null !== this[t[e]]) return t[e]
          }
        },
        u.oneOfSetter = function (n) {
          return function (t) {
            for (var e = 0; e < n.length; ++e) n[e] !== t && delete this[n[e]]
          }
        },
        u.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0
        },
        u._configure = function () {
          var n = u.Buffer;
          n ? (u._Buffer_from = n.from !== Uint8Array.from && n.from || function (t, e) {
            return new n(t, e)
          }, u._Buffer_allocUnsafe = n.allocUnsafe || function (t) {
            return new n(t)
          }) : u._Buffer_from = u._Buffer_allocUnsafe = null
        }
      }).call(this, h(91))
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    function (t, e, n) {
      var r = n(63);
      t.exports = Array.isArray || function (t) {
        return 'Array' == r(t)
      }
    },
    function (t, e, n) {
      function r() {
      }
      function o(t) {
        return '<script>' + t + '</' + d + '>'
      }
      var i,
      s = n(5),
      a = n(199),
      u = n(150),
      c = n(96),
      l = n(202),
      f = n(142),
      h = n(118),
      p = 'prototype',
      d = 'script',
      y = h('IE_PROTO'),
      v = function () {
        try {
          i = document.domain && new ActiveXObject('htmlfile')
        } catch (t) {
        }
        var t,
        e;
        v = i ? function (t) {
          t.write(o('')),
          t.close();
          var e = t.parentWindow.Object;
          return t = null,
          e
        }(i) : ((e = f('iframe')).style.display = 'none', l.appendChild(e), e.src = String('javascript:'), (t = e.contentWindow.document).open(), t.write(o('document.F=Object')), t.close(), t.F);
        for (var n = u.length; n--; ) delete v[p][u[n]];
        return v()
      };
      c[y] = !0,
      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (r[p] = s(t), n = new r, r[p] = null, n[y] = t) : n = v(),
        void 0 === e ? n : a(n, e)
      }
    },
    function (t, e, n) {
      var o = n(48);
      t.exports = function (t, e, n, r) {
        r && r.enumerable ? t[e] = n : o(t, e, n)
      }
    },
    function (t, e, n) {
      t.exports = n(328)
    },
    function (t, e) {
      var n = {
      }.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, - 1)
      }
    },
    function (t, e) {
      t.exports = {
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(7);
      t.exports = function (t, e) {
        var n = [
        ][t];
        return !!n && r(function () {
          n.call(null, e || function () {
            throw 1
          }, 1)
        })
      }
    },
    function (t, e, n) {
      for (var r = n(62), o = n(217), i = n(58), s = n(30), a = n(50), u = n(84), c = n(18), l = c('iterator'), f = c('toStringTag'), h = u.Array, p = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
      }, d = o(p), y = 0; y < d.length; y++) {
        var v,
        g = d[y],
        _ = p[g],
        m = s[g],
        b = m && m.prototype;
        if (b && (b[l] || a(b, l, h), b[f] || a(b, f, g), u[g] = h, _)) for (v in r) b[v] || i(b, v, r[v], !0)
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(49),
      o = n(70),
      i = n(98);
      r(r.P + r.F * n(29) (function () {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
          toISOString: function () {
            return 1
          }
        })
      }), 'Date', {
        toJSON: function () {
          var t = o(this),
          e = i(t);
          return 'number' != typeof e || isFinite(e) ? t.toISOString() : null
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(177);
      n(4),
      n(2);
      var a = n(27);
      n(6);
      var s = n(72),
      o = n(73),
      u = n(10),
      i = n(52),
      c = n(13),
      l = n(40);
      function f(t) {
        return (f = 'function' == typeof l && 'symbol' === c(i) ? function (t) {
          return c(t)
        }
         : function (t) {
          return t && 'function' == typeof l && t.constructor === l && t !== l.prototype ? 'symbol' : c(t)
        }) (t)
      }
      u(e, '__esModule', {
        value: !0
      }),
      e.hash = O,
      e.sign = function (t, e, n) {
        var r,
        o,
        i;
        if (!g.validateHexadecimal(t, 64)) throw new TypeError('secretKey of wrong type is passed. Hexadecimal expected.');
        if (r = _.hexadecimalToUint8Array(t), (0, y.isType) (n) || (0, v.isTransaction) (n)) o = n.serialize(e);
         else {
          if (void 0 !== n) throw new TypeError('Wrong type of data.');
          if (e instanceof Uint8Array) o = e;
           else {
            if (!a(e)) throw new TypeError('Invalid data parameter.');
            o = new Uint8Array(e)
          }
        }
        return i = d.default.sign.detached(o, r),
        _.uint8ArrayToHexadecimal(i)
      },
      e.verifySignature = function (t, e, n, r) {
        var o,
        i,
        s;
        if (!g.validateHexadecimal(t, 64)) throw new TypeError('Signature of wrong type is passed. Hexadecimal expected.');
        if (o = _.hexadecimalToUint8Array(t), !g.validateHexadecimal(e)) throw new TypeError('publicKey of wrong type is passed. Hexadecimal expected.');
        if (i = _.hexadecimalToUint8Array(e), (0, y.isType) (r) || (0, v.isTransaction) (r)) s = r.schema.encode(n).finish();
         else {
          if (void 0 !== r) throw new TypeError('Wrong type of data.');
          n instanceof Uint8Array ? s = n : a(n) && (s = new Uint8Array(n))
        }
        return d.default.sign.detached.verify(s, o, i)
      },
      e.keyPair = function () {
        var t = d.default.sign.keyPair(),
        e = _.uint8ArrayToHexadecimal(t.publicKey),
        n = _.uint8ArrayToHexadecimal(t.secretKey);
        return {
          publicKey: e,
          secretKey: n
        }
      },
      e.fromSeed = function (t) {
        var e = d.default.sign.keyPair.fromSeed(t),
        n = _.uint8ArrayToHexadecimal(e.publicKey),
        r = _.uint8ArrayToHexadecimal(e.secretKey);
        return {
          publicKey: n,
          secretKey: r
        }
      },
      e.randomUint64 = function () {
        var t = d.default.randomBytes(8);
        return h.default.fromArray(r(t), 256).toString()
      },
      e.publicKeyToAddress = function (t) {
        var e = {
          data: _.hexadecimalToUint8Array(t)
        };
        return O(x.encode({
          transaction_author: e
        }).finish())
      },
      e.HASH_LENGTH = void 0;
      var h = w(n(278)),
      p = w(n(517)),
      d = w(n(130)),
      y = n(277),
      v = n(178),
      g = b(n(180)),
      _ = b(n(76));
      function m() {
        if ('function' != typeof o) return null;
        var t = new o;
        return m = function () {
          return t
        },
        t
      }
      function b(t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== f(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = m();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = u && s;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? s(t, o) : null;
          i && (i.get || i.set) ? u(n, o, i) : n[o] = t[o]
        }
        return n.default = t,
        e && e.set(t, n),
        n
      }
      function w(t) {
        return t && t.__esModule ? t : {
        default:
          t
        }
      }
      var x = b(n(136)).exonum.runtime.Caller;
      function O(t, e) {
        var n;
        if ((0, y.isType) (e) || (0, v.isTransaction) (e)) n = e.serialize(t);
         else {
          if (void 0 !== e) throw new TypeError('Wrong type of data.');
          if (t instanceof Uint8Array) n = t;
           else {
            if (!a(t)) throw new TypeError('Invalid data parameter.');
            n = new Uint8Array(t)
          }
        }
        return (0, p.default) ('sha256').update(n, 'utf8').digest('hex')
      }
      e.HASH_LENGTH = 32
    },
    function (t, e, n) {
      var r = n(21);
      t.exports = 'function' == typeof r ? function (t, e) {
        e && (t.super_ = e, t.prototype = r(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }))
      }
       : function (t, e) {
        if (e) {
          t.super_ = e;
          function n() {
          }
          n.prototype = e.prototype,
          t.prototype = new n,
          t.prototype.constructor = t
        }
      }
    },
    function (t, e, n) {
      n(4),
      n(2);
      var u = n(101),
      l = n(75).Buffer;
      function r(t, e) {
        this._block = l.alloc(t),
        this._finalSize = e,
        this._blockSize = t,
        this._len = 0
      }
      r.prototype.update = function (t, e) {
        'string' == typeof t && (e = e || 'utf8', t = l.from(t, e));
        for (var n = this._block, r = this._blockSize, o = t.length, i = this._len, s = 0; s < o; ) {
          for (var a = i % r, u = Math.min(o - s, r - a), c = 0; c < u; c++) n[a + c] = t[s + c];
          s += u,
          (i += u) % r == 0 && this._update(n)
        }
        return this._len += o,
        this
      },
      r.prototype.digest = function (t) {
        var e,
        n,
        r = this._len % this._blockSize;
        this._block[r] = 128,
        u(e = this._block).call(e, 0, 1 + r),
        r >= this._finalSize && (this._update(this._block), u(n = this._block).call(n, 0));
        var o = 8 * this._len;
        if (o <= 4294967295) this._block.writeUInt32BE(o, this._blockSize - 4);
         else {
          var i = (4294967295 & o) >>> 0,
          s = (o - i) / 4294967296;
          this._block.writeUInt32BE(s, this._blockSize - 8),
          this._block.writeUInt32BE(i, this._blockSize - 4)
        }
        this._update(this._block);
        var a = this._hash();
        return t ? a.toString(t) : a
      },
      r.prototype._update = function () {
        throw new Error('_update must be implemented by subclass')
      },
      t.exports = r
    },
    function (t, e) {
      var n;
      n = function () {
        return this
      }();
      try {
        n = n || new Function('return this') ()
      } catch (t) {
        'object' == typeof window && (n = window)
      }
      t.exports = n
    },
    function (t, e, n) {
      var r = n(22),
      o = n(113),
      i = n(78),
      s = n(47),
      a = n(115),
      u = n(26),
      c = n(188),
      l = Object.getOwnPropertyDescriptor;
      e.f = r ? l : function (t, e) {
        if (t = s(t), e = a(e, !0), c) try {
          return l(t, e)
        } catch (t) {
        }
        if (u(t, e)) return i(!o.f.call(t, e), t[e])
      }
    },
    function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError('Can\'t call method on ' + t);
        return t
      }
    },
    function (t, e) {
      var n = Math.ceil,
      r = Math.floor;
      t.exports = function (t) {
        return isNaN(t = + t) ? 0 : (0 < t ? r : n) (t)
      }
    },
    function (t, e, n) {
      var r = n(7),
      o = n(9),
      i = n(146),
      s = o('species');
      t.exports = function (e) {
        return 51 <= i || !r(function () {
          var t = [
          ];
          return (t.constructor = {
          }) [s] = function () {
            return {
              foo: 1
            }
          },
          1 !== t[e](Boolean).foo
        })
      }
    },
    function (t, e) {
      t.exports = {
      }
    },
    function (t, e, n) {
      var r = n(200),
      o = n(150);
      t.exports = Object.keys || function (t) {
        return r(t, o)
      }
    },
    function (t, e, n) {
      var o = n(61);
      t.exports = function (t, e) {
        if (!o(t)) return t;
        var n,
        r;
        if (e && 'function' == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        if ('function' == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && 'function' == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError('Can\'t convert object to primitive value')
      }
    },
    function (t, e) {
      var n = 0,
      r = Math.random();
      t.exports = function (t) {
        return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36))
      }
    },
    function (t, e, n) {
      var r = n(68),
      o = Math.max,
      i = Math.min;
      t.exports = function (t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
      }
    },
    function (t, e, n) {
      t.exports = n(351)
    },
    function (t, e, n) {
      function r(t) {
        a(t, l, {
          value: {
            objectID: 'O' + ++f,
            weakData: {
            }
          }
        })
      }
      var o = n(96),
      i = n(12),
      s = n(26),
      a = n(41).f,
      u = n(117),
      c = n(223),
      l = u('meta'),
      f = 0,
      h = Object.isExtensible || function () {
        return !0
      },
      p = t.exports = {
        REQUIRED: !1,
        fastKey: function (t, e) {
          if (!i(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
          if (!s(t, l)) {
            if (!h(t)) return 'F';
            if (!e) return 'E';
            r(t)
          }
          return t[l].objectID
        },
        getWeakData: function (t, e) {
          if (!s(t, l)) {
            if (!h(t)) return !0;
            if (!e) return !1;
            r(t)
          }
          return t[l].weakData
        },
        onFreeze: function (t) {
          return c && p.REQUIRED && h(t) && !s(t, l) && r(t),
          t
        }
      };
      o[l] = !0
    },
    function (t, e) {
      t.exports = function (t, e, n) {
        if (!(t instanceof e)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
        return t
      }
    },
    function (t, e, n) {
      var o = n(81);
      t.exports = function (t, e, n) {
        for (var r in e) n && n.unsafe && t[r] ? t[r] = e[r] : o(t, r, e[r], n);
        return t
      }
    },
    function (t, e) {
    },
    function (t, e, n) {
      t.exports = n(370)
    },
    function (t, e, n) {
      t.exports = n(384)
    },
    function (t, e, n) {
      'use strict';
      var f = n(167),
      m = n(43),
      b = n(220),
      w = n(168),
      x = n(44),
      O = n(132),
      h = n(169),
      r = n(29),
      S = Math.min,
      p = [
      ].push,
      s = 'split',
      d = 'length',
      y = 'lastIndex',
      k = 4294967295,
      E = !r(function () {
        RegExp(k, 'y')
      });
      n(133) ('split', 2, function (o, i, v, g) {
        var _;
        return _ = 'c' == 'abbc'[s](/(b)*/) [1] || 4 != 'test'[s](/(?:)/, - 1) [d] || 2 != 'ab'[s](/(?:ab)*/) [d] || 4 != '.'[s](/(.?)(.?)/) [d] || 1 < '.'[s](/()()/) [d] || ''[s](/.?/) [d] ? function (t, e) {
          var n = String(this);
          if (void 0 === t && 0 === e) return [];
          if (!f(t)) return v.call(n, t, e);
          for (var r, o, i, s = [
          ], a = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''), u = 0, c = void 0 === e ? k : e >>> 0, l = new RegExp(t.source, a + 'g'); (r = h.call(l, n)) && !(u < (o = l[y]) && (s.push(n.slice(u, r.index)), 1 < r[d] && r.index < n[d] && p.apply(s, r.slice(1)), i = r[0][d], u = o, s[d] >= c)); ) l[y] === r.index && l[y]++;
          return u === n[d] ? !i && l.test('') || s.push('') : s.push(n.slice(u)),
          s[d] > c ? s.slice(0, c) : s
        }
         : '0'[s](void 0, 0) [d] ? function (t, e) {
          return void 0 === t && 0 === e ? [
          ] : v.call(this, t, e)
        }
         : v,
        [
          function (t, e) {
            var n = o(this),
            r = null == t ? void 0 : t[i];
            return void 0 !== r ? r.call(t, n, e) : _.call(String(n), t, e)
          },
          function (t, e) {
            var n = g(_, t, this, e, _ !== v);
            if (n.done) return n.value;
            var r = m(t),
            o = String(this),
            i = b(r, RegExp),
            s = r.unicode,
            a = (r.ignoreCase ? 'i' : '') + (r.multiline ? 'm' : '') + (r.unicode ? 'u' : '') + (E ? 'y' : 'g'),
            u = new i(E ? r : '^(?:' + r.source + ')', a),
            c = void 0 === e ? k : e >>> 0;
            if (0 == c) return [];
            if (0 === o.length) return null === O(u, o) ? [
              o
            ] : [
            ];
            for (var l = 0, f = 0, h = [
            ]; f < o.length; ) {
              u.lastIndex = E ? f : 0;
              var p,
              d = O(u, E ? o : o.slice(f));
              if (null === d || (p = S(x(u.lastIndex + (E ? 0 : f)), o.length)) === l) f = w(o, f, s);
               else {
                if (h.push(o.slice(l, f)), h.length === c) return h;
                for (var y = 1; y <= d.length - 1; y++) if (h.push(d[y]), h.length === c) return h;
                f = l = p
              }
            }
            return h.push(o.slice(l)),
            h
          }
        ]
      })
    },
    function (t, e, n) {
      t.exports = n(427)
    },
    function (t, e, n) {
      var o = n(5),
      i = n(15),
      s = n(9) ('species');
      t.exports = function (t, e) {
        var n,
        r = o(t).constructor;
        return void 0 === r || null == (n = o(r) [s]) ? e : i(n)
      }
    },
    function (t, e, n) {
      t.exports = n(557)
    },
    function (t, e, n) {
      var r = n(653),
      o = n(654),
      i = n(655);
      t.exports = {
        cleanHex: r,
        pbConvert: o,
        calculateRawTxHash: i
      }
    },
    function (t, e, n) {
      'use strict';
      var r = {
      }.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({
        1: 2
      }, 1);
      e.f = i ? function (t) {
        var e = o(this, t);
        return !!e && e.enumerable
      }
       : r
    },
    function (t, e, n) {
      var r = n(7),
      o = n(63),
      i = ''.split;
      t.exports = r(function () {
        return !Object('z').propertyIsEnumerable(0)
      }) ? function (t) {
        return 'String' == o(t) ? i.call(t, '') : Object(t)
      }
       : Object
    },
    function (t, e, n) {
      var o = n(12);
      t.exports = function (t, e) {
        if (!o(t)) return t;
        var n,
        r;
        if (e && 'function' == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        if ('function' == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && 'function' == typeof (n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError('Can\'t convert object to primitive value')
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(115),
      i = n(41),
      s = n(78);
      t.exports = function (t, e, n) {
        var r = o(e);
        r in t ? i.f(t, r, s(0, n)) : t[r] = n
      }
    },
    function (t, e) {
      var n = 0,
      r = Math.random();
      t.exports = function (t) {
        return 'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++n + r).toString(36)
      }
    },
    function (t, e, n) {
      var r = n(144),
      o = n(117),
      i = r('keys');
      t.exports = function (t) {
        return i[t] || (i[t] = o(t))
      }
    },
    function (t, e, n) {
      var r = n(94),
      o = Math.max,
      i = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? o(n + e, 0) : i(n, e)
      }
    },
    function (t, e, n) {
      var r = n(65),
      o = n(66),
      i = n(9) ('iterator');
      t.exports = function (t) {
        if (null != t) return t[i] || t['@@iterator'] || o[r(t)]
      }
    },
    function (t, e, n) {
      t.exports = n(324)
    },
    function (t, e) {
      t.exports = !1
    },
    function (t, e) {
      var n = t.exports = {
        version: '2.6.11'
      };
      'number' == typeof __e && (__e = n)
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    function (t, e, n) {
      var i = n(210);
      t.exports = function (r, o, t) {
        if (i(r), void 0 === o) return r;
        switch (t) {
          case 1:
            return function (t) {
              return r.call(o, t)
            };
          case 2:
            return function (t, e) {
              return r.call(o, t, e)
            };
          case 3:
            return function (t, e, n) {
              return r.call(o, t, e, n)
            }
        }
        return function () {
          return r.apply(o, arguments)
        }
      }
    },
    function (t, e, n) {
      var r = n(215),
      o = n(156).concat('length', 'prototype');
      e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o)
      }
    },
    function (t, e, n) {
      var r = n(216),
      o = n(69);
      t.exports = function (t) {
        return r(o(t))
      }
    },
    function (t, e, n) {
      var o = n(83),
      i = n(18) ('toStringTag'),
      s = 'Arguments' == o(function () {
        return arguments
      }());
      t.exports = function (t) {
        var e,
        n,
        r;
        return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = function (t, e) {
          try {
            return t[e]
          } catch (t) {
          }
        }(e = Object(t), i)) ? n : s ? o(e) : 'Object' == (r = o(e)) && 'function' == typeof e.callee ? 'Arguments' : r
      }
    },
    function (t, e, n) {
      t.exports = n(359)
    },
    function (t, e, pt) {
      pt(4),
      pt(2),
      pt(230),
      pt(231),
      pt(6),
      pt(164),
      function (i) {
        'use strict';
        var y = function (t) {
          var e,
          n = new Float64Array(16);
          if (t) for (e = 0; e < t.length; e++) n[e] = t[e];
          return n
        },
        s = function () {
          throw new Error('no PRNG')
        },
        o = new Uint8Array(16),
        n = new Uint8Array(32);
        n[0] = 9;
        var c = y(),
        l = y([1]),
        v = y([56129,
        1]),
        f = y([30883,
        4953,
        19914,
        30187,
        55467,
        16705,
        2637,
        112,
        59544,
        30585,
        16505,
        36039,
        65139,
        11119,
        27886,
        20995]),
        h = y([61785,
        9906,
        39828,
        60374,
        45398,
        33411,
        5274,
        224,
        53552,
        61171,
        33010,
        6542,
        64743,
        22239,
        55772,
        9222]),
        r = y([54554,
        36645,
        11616,
        51542,
        42930,
        38181,
        51040,
        26924,
        56412,
        64982,
        57905,
        49316,
        21502,
        52590,
        14035,
        8553]),
        a = y([26200,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214,
        26214]),
        p = y([41136,
        18958,
        6951,
        50414,
        58488,
        44335,
        6150,
        12099,
        55207,
        15867,
        153,
        11085,
        57099,
        20417,
        9344,
        11139]);
        function u(t, e, n, r) {
          t[e] = n >> 24 & 255,
          t[e + 1] = n >> 16 & 255,
          t[e + 2] = n >> 8 & 255,
          t[e + 3] = 255 & n,
          t[e + 4] = r >> 24 & 255,
          t[e + 5] = r >> 16 & 255,
          t[e + 6] = r >> 8 & 255,
          t[e + 7] = 255 & r
        }
        function d(t, e, n, r, o) {
          var i,
          s = 0;
          for (i = 0; i < o; i++) s |= t[e + i] ^ n[r + i];
          return (1 & s - 1 >>> 8) - 1
        }
        function g(t, e, n, r) {
          return d(t, e, n, r, 16)
        }
        function _(t, e, n, r) {
          return d(t, e, n, r, 32)
        }
        function m(t, e, n, r) {
          !function (t, e, n, r) {
            for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, g = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, _ = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, m = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = i, x = s, O = a, S = u, k = c, E = l, P = f, A = h, j = p, T = d, B = y, R = v, L = g, I = _, N = m, C = b, U = 0; U < 20; U += 2) w ^= (o = (L ^= (o = (j ^= (o = (k ^= (o = w + L | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + k | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14,
            E ^= (o = (x ^= (o = (I ^= (o = (T ^= (o = E + x | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + T | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14,
            B ^= (o = (P ^= (o = (O ^= (o = (N ^= (o = B + P | 0) << 7 | o >>> 25) + B | 0) << 9 | o >>> 23) + N | 0) << 13 | o >>> 19) + O | 0) << 18 | o >>> 14,
            C ^= (o = (R ^= (o = (A ^= (o = (S ^= (o = C + R | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + S | 0) << 13 | o >>> 19) + A | 0) << 18 | o >>> 14,
            w ^= (o = (S ^= (o = (O ^= (o = (x ^= (o = w + S | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + x | 0) << 13 | o >>> 19) + O | 0) << 18 | o >>> 14,
            E ^= (o = (k ^= (o = (A ^= (o = (P ^= (o = E + k | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + P | 0) << 13 | o >>> 19) + A | 0) << 18 | o >>> 14,
            B ^= (o = (T ^= (o = (j ^= (o = (R ^= (o = B + T | 0) << 7 | o >>> 25) + B | 0) << 9 | o >>> 23) + R | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14,
            C ^= (o = (N ^= (o = (I ^= (o = (L ^= (o = C + N | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + L | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14;
            w = w + i | 0,
            x = x + s | 0,
            O = O + a | 0,
            S = S + u | 0,
            k = k + c | 0,
            E = E + l | 0,
            P = P + f | 0,
            A = A + h | 0,
            j = j + p | 0,
            T = T + d | 0,
            B = B + y | 0,
            R = R + v | 0,
            L = L + g | 0,
            I = I + _ | 0,
            N = N + m | 0,
            C = C + b | 0,
            t[0] = w >>> 0 & 255,
            t[1] = w >>> 8 & 255,
            t[2] = w >>> 16 & 255,
            t[3] = w >>> 24 & 255,
            t[4] = x >>> 0 & 255,
            t[5] = x >>> 8 & 255,
            t[6] = x >>> 16 & 255,
            t[7] = x >>> 24 & 255,
            t[8] = O >>> 0 & 255,
            t[9] = O >>> 8 & 255,
            t[10] = O >>> 16 & 255,
            t[11] = O >>> 24 & 255,
            t[12] = S >>> 0 & 255,
            t[13] = S >>> 8 & 255,
            t[14] = S >>> 16 & 255,
            t[15] = S >>> 24 & 255,
            t[16] = k >>> 0 & 255,
            t[17] = k >>> 8 & 255,
            t[18] = k >>> 16 & 255,
            t[19] = k >>> 24 & 255,
            t[20] = E >>> 0 & 255,
            t[21] = E >>> 8 & 255,
            t[22] = E >>> 16 & 255,
            t[23] = E >>> 24 & 255,
            t[24] = P >>> 0 & 255,
            t[25] = P >>> 8 & 255,
            t[26] = P >>> 16 & 255,
            t[27] = P >>> 24 & 255,
            t[28] = A >>> 0 & 255,
            t[29] = A >>> 8 & 255,
            t[30] = A >>> 16 & 255,
            t[31] = A >>> 24 & 255,
            t[32] = j >>> 0 & 255,
            t[33] = j >>> 8 & 255,
            t[34] = j >>> 16 & 255,
            t[35] = j >>> 24 & 255,
            t[36] = T >>> 0 & 255,
            t[37] = T >>> 8 & 255,
            t[38] = T >>> 16 & 255,
            t[39] = T >>> 24 & 255,
            t[40] = B >>> 0 & 255,
            t[41] = B >>> 8 & 255,
            t[42] = B >>> 16 & 255,
            t[43] = B >>> 24 & 255,
            t[44] = R >>> 0 & 255,
            t[45] = R >>> 8 & 255,
            t[46] = R >>> 16 & 255,
            t[47] = R >>> 24 & 255,
            t[48] = L >>> 0 & 255,
            t[49] = L >>> 8 & 255,
            t[50] = L >>> 16 & 255,
            t[51] = L >>> 24 & 255,
            t[52] = I >>> 0 & 255,
            t[53] = I >>> 8 & 255,
            t[54] = I >>> 16 & 255,
            t[55] = I >>> 24 & 255,
            t[56] = N >>> 0 & 255,
            t[57] = N >>> 8 & 255,
            t[58] = N >>> 16 & 255,
            t[59] = N >>> 24 & 255,
            t[60] = C >>> 0 & 255,
            t[61] = C >>> 8 & 255,
            t[62] = C >>> 16 & 255,
            t[63] = C >>> 24 & 255
          }(t, e, n, r)
        }
        function b(t, e, n, r) {
          !function (t, e, n, r) {
            for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, g = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, _ = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, m = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = 0; w < 20; w += 2) i ^= (o = (g ^= (o = (p ^= (o = (c ^= (o = i + g | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + c | 0) << 13 | o >>> 19) + p | 0) << 18 | o >>> 14,
            l ^= (o = (s ^= (o = (_ ^= (o = (d ^= (o = l + s | 0) << 7 | o >>> 25) + l | 0) << 9 | o >>> 23) + d | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14,
            y ^= (o = (f ^= (o = (a ^= (o = (m ^= (o = y + f | 0) << 7 | o >>> 25) + y | 0) << 9 | o >>> 23) + m | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14,
            b ^= (o = (v ^= (o = (h ^= (o = (u ^= (o = b + v | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + u | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14,
            i ^= (o = (u ^= (o = (a ^= (o = (s ^= (o = i + u | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + s | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14,
            l ^= (o = (c ^= (o = (h ^= (o = (f ^= (o = l + c | 0) << 7 | o >>> 25) + l | 0) << 9 | o >>> 23) + f | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14,
            y ^= (o = (d ^= (o = (p ^= (o = (v ^= (o = y + d | 0) << 7 | o >>> 25) + y | 0) << 9 | o >>> 23) + v | 0) << 13 | o >>> 19) + p | 0) << 18 | o >>> 14,
            b ^= (o = (m ^= (o = (_ ^= (o = (g ^= (o = b + m | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + g | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14;
            t[0] = i >>> 0 & 255,
            t[1] = i >>> 8 & 255,
            t[2] = i >>> 16 & 255,
            t[3] = i >>> 24 & 255,
            t[4] = l >>> 0 & 255,
            t[5] = l >>> 8 & 255,
            t[6] = l >>> 16 & 255,
            t[7] = l >>> 24 & 255,
            t[8] = y >>> 0 & 255,
            t[9] = y >>> 8 & 255,
            t[10] = y >>> 16 & 255,
            t[11] = y >>> 24 & 255,
            t[12] = b >>> 0 & 255,
            t[13] = b >>> 8 & 255,
            t[14] = b >>> 16 & 255,
            t[15] = b >>> 24 & 255,
            t[16] = f >>> 0 & 255,
            t[17] = f >>> 8 & 255,
            t[18] = f >>> 16 & 255,
            t[19] = f >>> 24 & 255,
            t[20] = h >>> 0 & 255,
            t[21] = h >>> 8 & 255,
            t[22] = h >>> 16 & 255,
            t[23] = h >>> 24 & 255,
            t[24] = p >>> 0 & 255,
            t[25] = p >>> 8 & 255,
            t[26] = p >>> 16 & 255,
            t[27] = p >>> 24 & 255,
            t[28] = d >>> 0 & 255,
            t[29] = d >>> 8 & 255,
            t[30] = d >>> 16 & 255,
            t[31] = d >>> 24 & 255
          }(t, e, n, r)
        }
        var w = new Uint8Array([101,
        120,
        112,
        97,
        110,
        100,
        32,
        51,
        50,
        45,
        98,
        121,
        116,
        101,
        32,
        107]);
        function x(t, e, n, r, o, i, s) {
          var a,
          u,
          c = new Uint8Array(16),
          l = new Uint8Array(64);
          for (u = 0; u < 16; u++) c[u] = 0;
          for (u = 0; u < 8; u++) c[u] = i[u];
          for (; 64 <= o; ) {
            for (m(l, c, s, w), u = 0; u < 64; u++) t[e + u] = n[r + u] ^ l[u];
            for (a = 1, u = 8; u < 16; u++) a = a + (255 & c[u]) | 0,
            c[u] = 255 & a,
            a >>>= 8;
            o -= 64,
            e += 64,
            r += 64
          }
          if (0 < o) for (m(l, c, s, w), u = 0; u < o; u++) t[e + u] = n[r + u] ^ l[u];
          return 0
        }
        function O(t, e, n, r, o) {
          var i,
          s,
          a = new Uint8Array(16),
          u = new Uint8Array(64);
          for (s = 0; s < 16; s++) a[s] = 0;
          for (s = 0; s < 8; s++) a[s] = r[s];
          for (; 64 <= n; ) {
            for (m(u, a, o, w), s = 0; s < 64; s++) t[e + s] = u[s];
            for (i = 1, s = 8; s < 16; s++) i = i + (255 & a[s]) | 0,
            a[s] = 255 & i,
            i >>>= 8;
            n -= 64,
            e += 64
          }
          if (0 < n) for (m(u, a, o, w), s = 0; s < n; s++) t[e + s] = u[s];
          return 0
        }
        function S(t, e, n, r, o) {
          var i = new Uint8Array(32);
          b(i, r, o, w);
          for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = r[a + 16];
          return O(t, e, n, s, i)
        }
        function k(t, e, n, r, o, i, s) {
          var a = new Uint8Array(32);
          b(a, i, s, w);
          for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = i[c + 16];
          return x(t, e, n, r, o, u, a)
        }
        var E = function (t) {
          var e,
          n,
          r,
          o,
          i,
          s,
          a,
          u;
          this.buffer = new Uint8Array(16),
          this.r = new Uint16Array(10),
          this.h = new Uint16Array(10),
          this.pad = new Uint16Array(8),
          this.leftover = 0,
          e = 255 & t[this.fin = 0] | (255 & t[1]) << 8,
          this.r[0] = 8191 & e,
          n = 255 & t[2] | (255 & t[3]) << 8,
          this.r[1] = 8191 & (e >>> 13 | n << 3),
          r = 255 & t[4] | (255 & t[5]) << 8,
          this.r[2] = 7939 & (n >>> 10 | r << 6),
          o = 255 & t[6] | (255 & t[7]) << 8,
          this.r[3] = 8191 & (r >>> 7 | o << 9),
          i = 255 & t[8] | (255 & t[9]) << 8,
          this.r[4] = 255 & (o >>> 4 | i << 12),
          this.r[5] = i >>> 1 & 8190,
          s = 255 & t[10] | (255 & t[11]) << 8,
          this.r[6] = 8191 & (i >>> 14 | s << 2),
          a = 255 & t[12] | (255 & t[13]) << 8,
          this.r[7] = 8065 & (s >>> 11 | a << 5),
          u = 255 & t[14] | (255 & t[15]) << 8,
          this.r[8] = 8191 & (a >>> 8 | u << 8),
          this.r[9] = u >>> 5 & 127,
          this.pad[0] = 255 & t[16] | (255 & t[17]) << 8,
          this.pad[1] = 255 & t[18] | (255 & t[19]) << 8,
          this.pad[2] = 255 & t[20] | (255 & t[21]) << 8,
          this.pad[3] = 255 & t[22] | (255 & t[23]) << 8,
          this.pad[4] = 255 & t[24] | (255 & t[25]) << 8,
          this.pad[5] = 255 & t[26] | (255 & t[27]) << 8,
          this.pad[6] = 255 & t[28] | (255 & t[29]) << 8,
          this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
        };
        function P(t, e, n, r, o, i) {
          var s = new E(i);
          return s.update(n, r, o),
          s.finish(t, e),
          0
        }
        function A(t, e, n, r, o, i) {
          var s = new Uint8Array(16);
          return P(s, 0, n, r, o, i),
          g(t, e, s, 0)
        }
        function j(t, e, n, r, o) {
          var i;
          if (n < 32) return - 1;
          for (k(t, 0, e, 0, n, r, o), P(t, 16, t, 32, n - 32, t), i = 0; i < 16; i++) t[i] = 0;
          return 0
        }
        function T(t, e, n, r, o) {
          var i,
          s = new Uint8Array(32);
          if (n < 32) return - 1;
          if (S(s, 0, 32, r, o), 0 !== A(e, 16, e, 32, n - 32, s)) return - 1;
          for (k(t, 0, e, 0, n, r, o), i = 0; i < 32; i++) t[i] = 0;
          return 0
        }
        function B(t, e) {
          var n;
          for (n = 0; n < 16; n++) t[n] = 0 | e[n]
        }
        function R(t) {
          var e,
          n,
          r = 1;
          for (e = 0; e < 16; e++) n = t[e] + r + 65535,
          r = Math.floor(n / 65536),
          t[e] = n - 65536 * r;
          t[0] += r - 1 + 37 * (r - 1)
        }
        function L(t, e, n) {
          for (var r, o = ~(n - 1), i = 0; i < 16; i++) r = o & (t[i] ^ e[i]),
          t[i] ^= r,
          e[i] ^= r
        }
        function I(t, e) {
          var n,
          r,
          o,
          i = y(),
          s = y();
          for (n = 0; n < 16; n++) s[n] = e[n];
          for (R(s), R(s), R(s), r = 0; r < 2; r++) {
            for (i[0] = s[0] - 65517, n = 1; n < 15; n++) i[n] = s[n] - 65535 - (i[n - 1] >> 16 & 1),
            i[n - 1] &= 65535;
            i[15] = s[15] - 32767 - (i[14] >> 16 & 1),
            o = i[15] >> 16 & 1,
            i[14] &= 65535,
            L(s, i, 1 - o)
          }
          for (n = 0; n < 16; n++) t[2 * n] = 255 & s[n],
          t[2 * n + 1] = s[n] >> 8
        }
        function N(t, e) {
          var n = new Uint8Array(32),
          r = new Uint8Array(32);
          return I(n, t),
          I(r, e),
          _(n, 0, r, 0)
        }
        function C(t) {
          var e = new Uint8Array(32);
          return I(e, t),
          1 & e[0]
        }
        function U(t, e) {
          var n;
          for (n = 0; n < 16; n++) t[n] = e[2 * n] + (e[2 * n + 1] << 8);
          t[15] &= 32767
        }
        function M(t, e, n) {
          for (var r = 0; r < 16; r++) t[r] = e[r] + n[r]
        }
        function H(t, e, n) {
          for (var r = 0; r < 16; r++) t[r] = e[r] - n[r]
        }
        function D(t, e, n) {
          var r,
          o,
          i = 0,
          s = 0,
          a = 0,
          u = 0,
          c = 0,
          l = 0,
          f = 0,
          h = 0,
          p = 0,
          d = 0,
          y = 0,
          v = 0,
          g = 0,
          _ = 0,
          m = 0,
          b = 0,
          w = 0,
          x = 0,
          O = 0,
          S = 0,
          k = 0,
          E = 0,
          P = 0,
          A = 0,
          j = 0,
          T = 0,
          B = 0,
          R = 0,
          L = 0,
          I = 0,
          N = 0,
          C = n[0],
          U = n[1],
          M = n[2],
          H = n[3],
          D = n[4],
          V = n[5],
          F = n[6],
          K = n[7],
          q = n[8],
          z = n[9],
          J = n[10],
          X = n[11],
          W = n[12],
          Y = n[13],
          G = n[14],
          Z = n[15];
          i += (r = e[0]) * C,
          s += r * U,
          a += r * M,
          u += r * H,
          c += r * D,
          l += r * V,
          f += r * F,
          h += r * K,
          p += r * q,
          d += r * z,
          y += r * J,
          v += r * X,
          g += r * W,
          _ += r * Y,
          m += r * G,
          b += r * Z,
          s += (r = e[1]) * C,
          a += r * U,
          u += r * M,
          c += r * H,
          l += r * D,
          f += r * V,
          h += r * F,
          p += r * K,
          d += r * q,
          y += r * z,
          v += r * J,
          g += r * X,
          _ += r * W,
          m += r * Y,
          b += r * G,
          w += r * Z,
          a += (r = e[2]) * C,
          u += r * U,
          c += r * M,
          l += r * H,
          f += r * D,
          h += r * V,
          p += r * F,
          d += r * K,
          y += r * q,
          v += r * z,
          g += r * J,
          _ += r * X,
          m += r * W,
          b += r * Y,
          w += r * G,
          x += r * Z,
          u += (r = e[3]) * C,
          c += r * U,
          l += r * M,
          f += r * H,
          h += r * D,
          p += r * V,
          d += r * F,
          y += r * K,
          v += r * q,
          g += r * z,
          _ += r * J,
          m += r * X,
          b += r * W,
          w += r * Y,
          x += r * G,
          O += r * Z,
          c += (r = e[4]) * C,
          l += r * U,
          f += r * M,
          h += r * H,
          p += r * D,
          d += r * V,
          y += r * F,
          v += r * K,
          g += r * q,
          _ += r * z,
          m += r * J,
          b += r * X,
          w += r * W,
          x += r * Y,
          O += r * G,
          S += r * Z,
          l += (r = e[5]) * C,
          f += r * U,
          h += r * M,
          p += r * H,
          d += r * D,
          y += r * V,
          v += r * F,
          g += r * K,
          _ += r * q,
          m += r * z,
          b += r * J,
          w += r * X,
          x += r * W,
          O += r * Y,
          S += r * G,
          k += r * Z,
          f += (r = e[6]) * C,
          h += r * U,
          p += r * M,
          d += r * H,
          y += r * D,
          v += r * V,
          g += r * F,
          _ += r * K,
          m += r * q,
          b += r * z,
          w += r * J,
          x += r * X,
          O += r * W,
          S += r * Y,
          k += r * G,
          E += r * Z,
          h += (r = e[7]) * C,
          p += r * U,
          d += r * M,
          y += r * H,
          v += r * D,
          g += r * V,
          _ += r * F,
          m += r * K,
          b += r * q,
          w += r * z,
          x += r * J,
          O += r * X,
          S += r * W,
          k += r * Y,
          E += r * G,
          P += r * Z,
          p += (r = e[8]) * C,
          d += r * U,
          y += r * M,
          v += r * H,
          g += r * D,
          _ += r * V,
          m += r * F,
          b += r * K,
          w += r * q,
          x += r * z,
          O += r * J,
          S += r * X,
          k += r * W,
          E += r * Y,
          P += r * G,
          A += r * Z,
          d += (r = e[9]) * C,
          y += r * U,
          v += r * M,
          g += r * H,
          _ += r * D,
          m += r * V,
          b += r * F,
          w += r * K,
          x += r * q,
          O += r * z,
          S += r * J,
          k += r * X,
          E += r * W,
          P += r * Y,
          A += r * G,
          j += r * Z,
          y += (r = e[10]) * C,
          v += r * U,
          g += r * M,
          _ += r * H,
          m += r * D,
          b += r * V,
          w += r * F,
          x += r * K,
          O += r * q,
          S += r * z,
          k += r * J,
          E += r * X,
          P += r * W,
          A += r * Y,
          j += r * G,
          T += r * Z,
          v += (r = e[11]) * C,
          g += r * U,
          _ += r * M,
          m += r * H,
          b += r * D,
          w += r * V,
          x += r * F,
          O += r * K,
          S += r * q,
          k += r * z,
          E += r * J,
          P += r * X,
          A += r * W,
          j += r * Y,
          T += r * G,
          B += r * Z,
          g += (r = e[12]) * C,
          _ += r * U,
          m += r * M,
          b += r * H,
          w += r * D,
          x += r * V,
          O += r * F,
          S += r * K,
          k += r * q,
          E += r * z,
          P += r * J,
          A += r * X,
          j += r * W,
          T += r * Y,
          B += r * G,
          R += r * Z,
          _ += (r = e[13]) * C,
          m += r * U,
          b += r * M,
          w += r * H,
          x += r * D,
          O += r * V,
          S += r * F,
          k += r * K,
          E += r * q,
          P += r * z,
          A += r * J,
          j += r * X,
          T += r * W,
          B += r * Y,
          R += r * G,
          L += r * Z,
          m += (r = e[14]) * C,
          b += r * U,
          w += r * M,
          x += r * H,
          O += r * D,
          S += r * V,
          k += r * F,
          E += r * K,
          P += r * q,
          A += r * z,
          j += r * J,
          T += r * X,
          B += r * W,
          R += r * Y,
          L += r * G,
          I += r * Z,
          b += (r = e[15]) * C,
          s += 38 * (x += r * M),
          a += 38 * (O += r * H),
          u += 38 * (S += r * D),
          c += 38 * (k += r * V),
          l += 38 * (E += r * F),
          f += 38 * (P += r * K),
          h += 38 * (A += r * q),
          p += 38 * (j += r * z),
          d += 38 * (T += r * J),
          y += 38 * (B += r * X),
          v += 38 * (R += r * W),
          g += 38 * (L += r * Y),
          _ += 38 * (I += r * G),
          m += 38 * (N += r * Z),
          i = (r = (i += 38 * (w += r * U)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)),
          s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          i = (r = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)),
          s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)),
          i += o - 1 + 37 * (o - 1),
          t[0] = i,
          t[1] = s,
          t[2] = a,
          t[3] = u,
          t[4] = c,
          t[5] = l,
          t[6] = f,
          t[7] = h,
          t[8] = p,
          t[9] = d,
          t[10] = y,
          t[11] = v,
          t[12] = g,
          t[13] = _,
          t[14] = m,
          t[15] = b
        }
        function V(t, e) {
          D(t, e, e)
        }
        function F(t, e) {
          var n,
          r = y();
          for (n = 0; n < 16; n++) r[n] = e[n];
          for (n = 253; 0 <= n; n--) V(r, r),
          2 !== n && 4 !== n && D(r, r, e);
          for (n = 0; n < 16; n++) t[n] = r[n]
        }
        function K(t, e, n) {
          var r,
          o,
          i = new Uint8Array(32),
          s = new Float64Array(80),
          a = y(),
          u = y(),
          c = y(),
          l = y(),
          f = y(),
          h = y();
          for (o = 0; o < 31; o++) i[o] = e[o];
          for (i[31] = 127 & e[31] | 64, i[0] &= 248, U(s, n), o = 0; o < 16; o++) u[o] = s[o],
          l[o] = a[o] = c[o] = 0;
          for (a[0] = l[0] = 1, o = 254; 0 <= o; --o) L(a, u, r = i[o >>> 3] >>> (7 & o) & 1),
          L(c, l, r),
          M(f, a, c),
          H(a, a, c),
          M(c, u, l),
          H(u, u, l),
          V(l, f),
          V(h, a),
          D(a, c, a),
          D(c, u, f),
          M(f, a, c),
          H(a, a, c),
          V(u, a),
          H(c, l, h),
          D(a, c, v),
          M(a, a, l),
          D(c, c, a),
          D(a, l, h),
          D(l, u, s),
          V(u, f),
          L(a, u, r),
          L(c, l, r);
          for (o = 0; o < 16; o++) s[o + 16] = a[o],
          s[o + 32] = c[o],
          s[o + 48] = u[o],
          s[o + 64] = l[o];
          var p = s.subarray(32),
          d = s.subarray(16);
          return F(p, p),
          D(d, d, p),
          I(t, d),
          0
        }
        function q(t, e) {
          return K(t, e, n)
        }
        function z(t, e) {
          return s(e, 32),
          q(t, e)
        }
        function J(t, e, n) {
          var r = new Uint8Array(32);
          return K(r, n, e),
          b(t, o, r, w)
        }
        E.prototype.blocks = function (t, e, n) {
          for (var r, o, i, s, a, u, c, l, f, h, p, d, y, v, g, _, m, b, w, x = this.fin ? 0 : 2048, O = this.h[0], S = this.h[1], k = this.h[2], E = this.h[3], P = this.h[4], A = this.h[5], j = this.h[6], T = this.h[7], B = this.h[8], R = this.h[9], L = this.r[0], I = this.r[1], N = this.r[2], C = this.r[3], U = this.r[4], M = this.r[5], H = this.r[6], D = this.r[7], V = this.r[8], F = this.r[9]; 16 <= n; ) h = f = 0,
          h += (O += 8191 & (r = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * L,
          h += (S += 8191 & (r >>> 13 | (o = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * F),
          h += (k += 8191 & (o >>> 10 | (i = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * V),
          h += (E += 8191 & (i >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * D),
          f = (h += (P += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * H)) >>> 13,
          h &= 8191,
          h += (A += a >>> 1 & 8191) * (5 * M),
          h += (j += 8191 & (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * U),
          h += (T += 8191 & (u >>> 11 | (c = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * C),
          h += (B += 8191 & (c >>> 8 | (l = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * N),
          p = f += (h += (R += l >>> 5 | x) * (5 * I)) >>> 13,
          p += O * I,
          p += S * L,
          p += k * (5 * F),
          p += E * (5 * V),
          f = (p += P * (5 * D)) >>> 13,
          p &= 8191,
          p += A * (5 * H),
          p += j * (5 * M),
          p += T * (5 * U),
          p += B * (5 * C),
          f += (p += R * (5 * N)) >>> 13,
          p &= 8191,
          d = f,
          d += O * N,
          d += S * I,
          d += k * L,
          d += E * (5 * F),
          f = (d += P * (5 * V)) >>> 13,
          d &= 8191,
          d += A * (5 * D),
          d += j * (5 * H),
          d += T * (5 * M),
          d += B * (5 * U),
          y = f += (d += R * (5 * C)) >>> 13,
          y += O * C,
          y += S * N,
          y += k * I,
          y += E * L,
          f = (y += P * (5 * F)) >>> 13,
          y &= 8191,
          y += A * (5 * V),
          y += j * (5 * D),
          y += T * (5 * H),
          y += B * (5 * M),
          v = f += (y += R * (5 * U)) >>> 13,
          v += O * U,
          v += S * C,
          v += k * N,
          v += E * I,
          f = (v += P * L) >>> 13,
          v &= 8191,
          v += A * (5 * F),
          v += j * (5 * V),
          v += T * (5 * D),
          v += B * (5 * H),
          g = f += (v += R * (5 * M)) >>> 13,
          g += O * M,
          g += S * U,
          g += k * C,
          g += E * N,
          f = (g += P * I) >>> 13,
          g &= 8191,
          g += A * L,
          g += j * (5 * F),
          g += T * (5 * V),
          g += B * (5 * D),
          _ = f += (g += R * (5 * H)) >>> 13,
          _ += O * H,
          _ += S * M,
          _ += k * U,
          _ += E * C,
          f = (_ += P * N) >>> 13,
          _ &= 8191,
          _ += A * I,
          _ += j * L,
          _ += T * (5 * F),
          _ += B * (5 * V),
          m = f += (_ += R * (5 * D)) >>> 13,
          m += O * D,
          m += S * H,
          m += k * M,
          m += E * U,
          f = (m += P * C) >>> 13,
          m &= 8191,
          m += A * N,
          m += j * I,
          m += T * L,
          m += B * (5 * F),
          b = f += (m += R * (5 * V)) >>> 13,
          b += O * V,
          b += S * D,
          b += k * H,
          b += E * M,
          f = (b += P * U) >>> 13,
          b &= 8191,
          b += A * C,
          b += j * N,
          b += T * I,
          b += B * L,
          w = f += (b += R * (5 * F)) >>> 13,
          w += O * F,
          w += S * V,
          w += k * D,
          w += E * H,
          f = (w += P * M) >>> 13,
          w &= 8191,
          w += A * U,
          w += j * C,
          w += T * N,
          w += B * I,
          O = h = 8191 & (f = (f = ((f += (w += R * L) >>> 13) << 2) + f | 0) + (h &= 8191) | 0),
          S = p += f >>>= 13,
          k = d &= 8191,
          E = y &= 8191,
          P = v &= 8191,
          A = g &= 8191,
          j = _ &= 8191,
          T = m &= 8191,
          B = b &= 8191,
          R = w &= 8191,
          e += 16,
          n -= 16;
          this.h[0] = O,
          this.h[1] = S,
          this.h[2] = k,
          this.h[3] = E,
          this.h[4] = P,
          this.h[5] = A,
          this.h[6] = j,
          this.h[7] = T,
          this.h[8] = B,
          this.h[9] = R
        },
        E.prototype.finish = function (t, e) {
          var n,
          r,
          o,
          i,
          s = new Uint16Array(10);
          if (this.leftover) {
            for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++) this.buffer[i] = 0;
            this.fin = 1,
            this.blocks(this.buffer, 0, 16)
          }
          for (n = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++) this.h[i] += n,
          n = this.h[i] >>> 13,
          this.h[i] &= 8191;
          for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, s[0] = this.h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, i = 1; i < 10; i++) s[i] = this.h[i] + n,
          n = s[i] >>> 13,
          s[i] &= 8191;
          for (s[9] -= 8192, r = (1 ^ n) - 1, i = 0; i < 10; i++) s[i] &= r;
          for (r = ~r, i = 0; i < 10; i++) this.h[i] = this.h[i] & r | s[i];
          for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), o = this.h[0] + this.pad[0], this.h[0] = 65535 & o, i = 1; i < 8; i++) o = (this.h[i] + this.pad[i] | 0) + (o >>> 16) | 0,
          this.h[i] = 65535 & o;
          t[e + 0] = this.h[0] >>> 0 & 255,
          t[e + 1] = this.h[0] >>> 8 & 255,
          t[e + 2] = this.h[1] >>> 0 & 255,
          t[e + 3] = this.h[1] >>> 8 & 255,
          t[e + 4] = this.h[2] >>> 0 & 255,
          t[e + 5] = this.h[2] >>> 8 & 255,
          t[e + 6] = this.h[3] >>> 0 & 255,
          t[e + 7] = this.h[3] >>> 8 & 255,
          t[e + 8] = this.h[4] >>> 0 & 255,
          t[e + 9] = this.h[4] >>> 8 & 255,
          t[e + 10] = this.h[5] >>> 0 & 255,
          t[e + 11] = this.h[5] >>> 8 & 255,
          t[e + 12] = this.h[6] >>> 0 & 255,
          t[e + 13] = this.h[6] >>> 8 & 255,
          t[e + 14] = this.h[7] >>> 0 & 255,
          t[e + 15] = this.h[7] >>> 8 & 255
        },
        E.prototype.update = function (t, e, n) {
          var r,
          o;
          if (this.leftover) {
            for (n < (o = 16 - this.leftover) && (o = n), r = 0; r < o; r++) this.buffer[this.leftover + r] = t[e + r];
            if (n -= o, e += o, this.leftover += o, this.leftover < 16) return;
            this.blocks(this.buffer, 0, 16),
            this.leftover = 0
          }
          if (16 <= n && (o = n - n % 16, this.blocks(t, e, o), e += o, n -= o), n) {
            for (r = 0; r < n; r++) this.buffer[this.leftover + r] = t[e + r];
            this.leftover += n
          }
        };
        var X = j,
        W = T;
        var Y = [
          1116352408,
          3609767458,
          1899447441,
          602891725,
          3049323471,
          3964484399,
          3921009573,
          2173295548,
          961987163,
          4081628472,
          1508970993,
          3053834265,
          2453635748,
          2937671579,
          2870763221,
          3664609560,
          3624381080,
          2734883394,
          310598401,
          1164996542,
          607225278,
          1323610764,
          1426881987,
          3590304994,
          1925078388,
          4068182383,
          2162078206,
          991336113,
          2614888103,
          633803317,
          3248222580,
          3479774868,
          3835390401,
          2666613458,
          4022224774,
          944711139,
          264347078,
          2341262773,
          604807628,
          2007800933,
          770255983,
          1495990901,
          1249150122,
          1856431235,
          1555081692,
          3175218132,
          1996064986,
          2198950837,
          2554220882,
          3999719339,
          2821834349,
          766784016,
          2952996808,
          2566594879,
          3210313671,
          3203337956,
          3336571891,
          1034457026,
          3584528711,
          2466948901,
          113926993,
          3758326383,
          338241895,
          168717936,
          666307205,
          1188179964,
          773529912,
          1546045734,
          1294757372,
          1522805485,
          1396182291,
          2643833823,
          1695183700,
          2343527390,
          1986661051,
          1014477480,
          2177026350,
          1206759142,
          2456956037,
          344077627,
          2730485921,
          1290863460,
          2820302411,
          3158454273,
          3259730800,
          3505952657,
          3345764771,
          106217008,
          3516065817,
          3606008344,
          3600352804,
          1432725776,
          4094571909,
          1467031594,
          275423344,
          851169720,
          430227734,
          3100823752,
          506948616,
          1363258195,
          659060556,
          3750685593,
          883997877,
          3785050280,
          958139571,
          3318307427,
          1322822218,
          3812723403,
          1537002063,
          2003034995,
          1747873779,
          3602036899,
          1955562222,
          1575990012,
          2024104815,
          1125592928,
          2227730452,
          2716904306,
          2361852424,
          442776044,
          2428436474,
          593698344,
          2756734187,
          3733110249,
          3204031479,
          2999351573,
          3329325298,
          3815920427,
          3391569614,
          3928383900,
          3515267271,
          566280711,
          3940187606,
          3454069534,
          4118630271,
          4000239992,
          116418474,
          1914138554,
          174292421,
          2731055270,
          289380356,
          3203993006,
          460393269,
          320620315,
          685471733,
          587496836,
          852142971,
          1086792851,
          1017036298,
          365543100,
          1126000580,
          2618297676,
          1288033470,
          3409855158,
          1501505948,
          4234509866,
          1607167915,
          987167468,
          1816402316,
          1246189591
        ];
        function G(t, e, n, r) {
          for (var o, i, s, a, u, c, l, f, h, p, d, y, v, g, _, m, b, w, x, O, S, k, E, P, A = new Int32Array(16), j = new Int32Array(16), T = t[0], B = t[1], R = t[2], L = t[3], I = t[4], N = t[5], C = t[6], U = t[7], M = e[0], H = e[1], D = e[2], V = e[3], F = e[4], K = e[5], q = e[6], z = e[7], J = 0; 128 <= r; ) {
            for (b = 0; b < 16; b++) w = 8 * b + J,
            A[b] = n[w + 0] << 24 | n[w + 1] << 16 | n[w + 2] << 8 | n[w + 3],
            j[b] = n[w + 4] << 24 | n[w + 5] << 16 | n[w + 6] << 8 | n[w + 7];
            for (b = 0; b < 80; b++) if (o = B, i = R, s = L, f = H, h = D, p = V, S = 65535 & (O = z), k = O >>> 16, E = 65535 & (x = U), P = x >>> 16, S += 65535 & (O = ((d = F) >>> 14 | (a = I) << 18) ^ (F >>> 18 | I << 14) ^ (I >>> 9 | F << 23)), k += O >>> 16, E += 65535 & (x = (I >>> 14 | F << 18) ^ (I >>> 18 | F << 14) ^ (F >>> 9 | I << 23)), P += x >>> 16, S += 65535 & (O = F & (y = K) ^ ~F & (v = q)), k += O >>> 16, E += 65535 & (x = I & (u = N) ^ ~I & (c = C)), P += x >>> 16, x = Y[2 * b], S += 65535 & (O = Y[2 * b + 1]), k += O >>> 16, E += 65535 & x, P += x >>> 16, x = A[b % 16], k += (O = j[b % 16]) >>> 16, E += 65535 & x, P += x >>> 16, E += (k += (S += 65535 & O) >>> 16) >>> 16, S = 65535 & (O = m = 65535 & S | k << 16), k = O >>> 16, E = 65535 & (x = _ = 65535 & E | (P += E >>> 16) << 16), P = x >>> 16, S += 65535 & (O = (M >>> 28 | T << 4) ^ (T >>> 2 | M << 30) ^ (T >>> 7 | M << 25)), k += O >>> 16, E += 65535 & (x = (T >>> 28 | M << 4) ^ (M >>> 2 | T << 30) ^ (M >>> 7 | T << 25)), P += x >>> 16, k += (O = M & H ^ M & D ^ H & D) >>> 16, E += 65535 & (x = T & B ^ T & R ^ B & R), P += x >>> 16, l = 65535 & (E += (k += (S += 65535 & O) >>> 16) >>> 16) | (P += E >>> 16) << 16, g = 65535 & S | k << 16, S = 65535 & (O = p), k = O >>> 16, E = 65535 & (x = s), P = x >>> 16, k += (O = m) >>> 16, E += 65535 & (x = _), P += x >>> 16, B = T, R = o, L = i, I = s = 65535 & (E += (k += (S += 65535 & O) >>> 16) >>> 16) | (P += E >>> 16) << 16, N = a, C = u, U = c, T = l, H = M, D = f, V = h, F = p = 65535 & S | k << 16, K = d, q = y, z = v, M = g, b % 16 == 15) for (w = 0; w < 16; w++) x = A[w],
            S = 65535 & (O = j[w]),
            k = O >>> 16,
            E = 65535 & x,
            P = x >>> 16,
            x = A[(w + 9) % 16],
            S += 65535 & (O = j[(w + 9) % 16]),
            k += O >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            _ = A[(w + 1) % 16],
            S += 65535 & (O = ((m = j[(w + 1) % 16]) >>> 1 | _ << 31) ^ (m >>> 8 | _ << 24) ^ (m >>> 7 | _ << 25)),
            k += O >>> 16,
            E += 65535 & (x = (_ >>> 1 | m << 31) ^ (_ >>> 8 | m << 24) ^ _ >>> 7),
            P += x >>> 16,
            _ = A[(w + 14) % 16],
            k += (O = ((m = j[(w + 14) % 16]) >>> 19 | _ << 13) ^ (_ >>> 29 | m << 3) ^ (m >>> 6 | _ << 26)) >>> 16,
            E += 65535 & (x = (_ >>> 19 | m << 13) ^ (m >>> 29 | _ << 3) ^ _ >>> 6),
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            A[w] = 65535 & E | P << 16,
            j[w] = 65535 & S | k << 16;
            S = 65535 & (O = M),
            k = O >>> 16,
            E = 65535 & (x = T),
            P = x >>> 16,
            x = t[0],
            k += (O = e[0]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[0] = T = 65535 & E | P << 16,
            e[0] = M = 65535 & S | k << 16,
            S = 65535 & (O = H),
            k = O >>> 16,
            E = 65535 & (x = B),
            P = x >>> 16,
            x = t[1],
            k += (O = e[1]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[1] = B = 65535 & E | P << 16,
            e[1] = H = 65535 & S | k << 16,
            S = 65535 & (O = D),
            k = O >>> 16,
            E = 65535 & (x = R),
            P = x >>> 16,
            x = t[2],
            k += (O = e[2]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[2] = R = 65535 & E | P << 16,
            e[2] = D = 65535 & S | k << 16,
            S = 65535 & (O = V),
            k = O >>> 16,
            E = 65535 & (x = L),
            P = x >>> 16,
            x = t[3],
            k += (O = e[3]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[3] = L = 65535 & E | P << 16,
            e[3] = V = 65535 & S | k << 16,
            S = 65535 & (O = F),
            k = O >>> 16,
            E = 65535 & (x = I),
            P = x >>> 16,
            x = t[4],
            k += (O = e[4]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[4] = I = 65535 & E | P << 16,
            e[4] = F = 65535 & S | k << 16,
            S = 65535 & (O = K),
            k = O >>> 16,
            E = 65535 & (x = N),
            P = x >>> 16,
            x = t[5],
            k += (O = e[5]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[5] = N = 65535 & E | P << 16,
            e[5] = K = 65535 & S | k << 16,
            S = 65535 & (O = q),
            k = O >>> 16,
            E = 65535 & (x = C),
            P = x >>> 16,
            x = t[6],
            k += (O = e[6]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[6] = C = 65535 & E | P << 16,
            e[6] = q = 65535 & S | k << 16,
            S = 65535 & (O = z),
            k = O >>> 16,
            E = 65535 & (x = U),
            P = x >>> 16,
            x = t[7],
            k += (O = e[7]) >>> 16,
            E += 65535 & x,
            P += x >>> 16,
            P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16,
            t[7] = U = 65535 & E | P << 16,
            e[7] = z = 65535 & S | k << 16,
            J += 128,
            r -= 128
          }
          return r
        }
        function Z(t, e, n) {
          var r,
          o = new Int32Array(8),
          i = new Int32Array(8),
          s = new Uint8Array(256),
          a = n;
          for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, i[0] = 4089235720, i[1] = 2227873595, i[2] = 4271175723, i[3] = 1595750129, i[4] = 2917565137, i[5] = 725511199, i[6] = 4215389547, i[7] = 327033209, G(o, i, e, n), n %= 128, r = 0; r < n; r++) s[r] = e[a - n + r];
          for (s[n] = 128, s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, u(s, n - 8, a / 536870912 | 0, a << 3), G(o, i, s, n), r = 0; r < 8; r++) u(t, 8 * r, o[r], i[r]);
          return 0
        }
        function $(t, e) {
          var n = y(),
          r = y(),
          o = y(),
          i = y(),
          s = y(),
          a = y(),
          u = y(),
          c = y(),
          l = y();
          H(n, t[1], t[0]),
          H(l, e[1], e[0]),
          D(n, n, l),
          M(r, t[0], t[1]),
          M(l, e[0], e[1]),
          D(r, r, l),
          D(o, t[3], e[3]),
          D(o, o, h),
          D(i, t[2], e[2]),
          M(i, i, i),
          H(s, r, n),
          H(a, i, o),
          M(u, i, o),
          M(c, r, n),
          D(t[0], s, a),
          D(t[1], c, u),
          D(t[2], u, a),
          D(t[3], s, c)
        }
        function Q(t, e, n) {
          var r;
          for (r = 0; r < 4; r++) L(t[r], e[r], n)
        }
        function tt(t, e) {
          var n = y(),
          r = y(),
          o = y();
          F(o, e[2]),
          D(n, e[0], o),
          D(r, e[1], o),
          I(t, r),
          t[31] ^= C(n) << 7
        }
        function et(t, e, n) {
          var r,
          o;
          for (B(t[0], c), B(t[1], l), B(t[2], l), B(t[3], c), o = 255; 0 <= o; --o) Q(t, e, r = n[o / 8 | 0] >> (7 & o) & 1),
          $(e, t),
          $(t, t),
          Q(t, e, r)
        }
        function nt(t, e) {
          var n = [
            y(),
            y(),
            y(),
            y()
          ];
          B(n[0], r),
          B(n[1], a),
          B(n[2], l),
          D(n[3], r, a),
          et(t, n, e)
        }
        function rt(t, e, n) {
          var r,
          o = new Uint8Array(64),
          i = [
            y(),
            y(),
            y(),
            y()
          ];
          for (n || s(e, 32), Z(o, e, 32), o[0] &= 248, o[31] &= 127, o[31] |= 64, nt(i, o), tt(t, i), r = 0; r < 32; r++) e[r + 32] = t[r];
          return 0
        }
        var ot = new Float64Array([237,
        211,
        245,
        92,
        26,
        99,
        18,
        88,
        214,
        156,
        247,
        162,
        222,
        249,
        222,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16]);
        function it(t, e) {
          var n,
          r,
          o,
          i;
          for (r = 63; 32 <= r; --r) {
            for (n = 0, o = r - 32, i = r - 12; o < i; ++o) e[o] += n - 16 * e[r] * ot[o - (r - 32)],
            n = e[o] + 128 >> 8,
            e[o] -= 256 * n;
            e[o] += n,
            e[r] = 0
          }
          for (o = n = 0; o < 32; o++) e[o] += n - (e[31] >> 4) * ot[o],
          n = e[o] >> 8,
          e[o] &= 255;
          for (o = 0; o < 32; o++) e[o] -= n * ot[o];
          for (r = 0; r < 32; r++) e[r + 1] += e[r] >> 8,
          t[r] = 255 & e[r]
        }
        function st(t) {
          var e,
          n = new Float64Array(64);
          for (e = 0; e < 64; e++) n[e] = t[e];
          for (e = 0; e < 64; e++) t[e] = 0;
          it(t, n)
        }
        function at(t, e, n, r) {
          var o,
          i,
          s = new Uint8Array(64),
          a = new Uint8Array(64),
          u = new Uint8Array(64),
          c = new Float64Array(64),
          l = [
            y(),
            y(),
            y(),
            y()
          ];
          Z(s, r, 32),
          s[0] &= 248,
          s[31] &= 127,
          s[31] |= 64;
          var f = n + 64;
          for (o = 0; o < n; o++) t[64 + o] = e[o];
          for (o = 0; o < 32; o++) t[32 + o] = s[32 + o];
          for (Z(u, t.subarray(32), n + 32), st(u), nt(l, u), tt(t, l), o = 32; o < 64; o++) t[o] = r[o];
          for (Z(a, t, n + 64), st(a), o = 0; o < 64; o++) c[o] = 0;
          for (o = 0; o < 32; o++) c[o] = u[o];
          for (o = 0; o < 32; o++) for (i = 0; i < 32; i++) c[o + i] += a[o] * s[i];
          return it(t.subarray(32), c),
          f
        }
        function ut(t, e) {
          var n = y(),
          r = y(),
          o = y(),
          i = y(),
          s = y(),
          a = y(),
          u = y();
          if (B(t[2], l), U(t[1], e), V(o, t[1]), D(i, o, f), H(o, o, t[2]), M(i, t[2], i), V(s, i), V(a, s), D(u, a, s), D(n, u, o), D(n, n, i), function (t, e) {
            var n,
            r = y();
            for (n = 0; n < 16; n++) r[n] = e[n];
            for (n = 250; 0 <= n; n--) V(r, r),
            1 !== n && D(r, r, e);
            for (n = 0; n < 16; n++) t[n] = r[n]
          }(n, n), D(n, n, o), D(n, n, i), D(n, n, i), D(t[0], n, i), V(r, t[0]), D(r, r, i), N(r, o) && D(t[0], t[0], p), V(r, t[0]), D(r, r, i), N(r, o)) return 1;
          C(t[0]) === e[31] >> 7 && H(t[0], c, t[0]),
          D(t[3], t[0], t[1])
        }
        function ct(t, e, n, r) {
          var o,
          i = new Uint8Array(32),
          s = new Uint8Array(64),
          a = [
            y(),
            y(),
            y(),
            y()
          ],
          u = [
            y(),
            y(),
            y(),
            y()
          ];
          if (n < 64) return - 1;
          if (ut(u, r)) return - 1;
          for (o = 0; o < n; o++) t[o] = e[o];
          for (o = 0; o < 32; o++) t[o + 32] = r[o];
          if (Z(s, t, n), st(s), et(a, u, s), nt(u, e.subarray(32)), $(a, u), tt(i, a), n -= 64, _(e, 0, i, 0)) {
            for (o = 0; o < n; o++) t[o] = 0;
            return - 1
          }
          for (o = 0; o < n; o++) t[o] = e[o + 64];
          return n
        }
        function lt(t, e) {
          if (32 !== t.length) throw new Error('bad key size');
          if (24 !== e.length) throw new Error('bad nonce size')
        }
        function ft() {
          var t,
          e;
          for (e = 0; e < arguments.length; e++) if ('[object Uint8Array]' !== (t = Object.prototype.toString.call(arguments[e]))) throw new TypeError('unexpected type ' + t + ', use Uint8Array')
        }
        function ht(t) {
          for (var e = 0; e < t.length; e++) t[e] = 0
        }
        i.lowlevel = {
          crypto_core_hsalsa20: b,
          crypto_stream_xor: k,
          crypto_stream: S,
          crypto_stream_salsa20_xor: x,
          crypto_stream_salsa20: O,
          crypto_onetimeauth: P,
          crypto_onetimeauth_verify: A,
          crypto_verify_16: g,
          crypto_verify_32: _,
          crypto_secretbox: j,
          crypto_secretbox_open: T,
          crypto_scalarmult: K,
          crypto_scalarmult_base: q,
          crypto_box_beforenm: J,
          crypto_box_afternm: X,
          crypto_box: function (t, e, n, r, o, i) {
            var s = new Uint8Array(32);
            return J(s, o, i),
            X(t, e, n, r, s)
          },
          crypto_box_open: function (t, e, n, r, o, i) {
            var s = new Uint8Array(32);
            return J(s, o, i),
            W(t, e, n, r, s)
          },
          crypto_box_keypair: z,
          crypto_hash: Z,
          crypto_sign: at,
          crypto_sign_keypair: rt,
          crypto_sign_open: ct,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64
        },
        i.util || (i.util = {
        }, i.util.decodeUTF8 = i.util.encodeUTF8 = i.util.encodeBase64 = i.util.decodeBase64 = function () {
          throw new Error('nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js')
        }),
        i.randomBytes = function (t) {
          var e = new Uint8Array(t);
          return s(e, t),
          e
        },
        i.secretbox = function (t, e, n) {
          ft(t, e, n),
          lt(n, e);
          for (var r = new Uint8Array(32 + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + 32] = t[i];
          return j(o, r, r.length, e, n),
          o.subarray(16)
        },
        i.secretbox.open = function (t, e, n) {
          ft(t, e, n),
          lt(n, e);
          for (var r = new Uint8Array(16 + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + 16] = t[i];
          return !(r.length < 32) && (0 === T(o, r, r.length, e, n) && o.subarray(32))
        },
        i.secretbox.keyLength = 32,
        i.secretbox.nonceLength = 24,
        i.secretbox.overheadLength = 16,
        i.scalarMult = function (t, e) {
          if (ft(t, e), 32 !== t.length) throw new Error('bad n size');
          if (32 !== e.length) throw new Error('bad p size');
          var n = new Uint8Array(32);
          return K(n, t, e),
          n
        },
        i.scalarMult.base = function (t) {
          if (ft(t), 32 !== t.length) throw new Error('bad n size');
          var e = new Uint8Array(32);
          return q(e, t),
          e
        },
        i.scalarMult.scalarLength = 32,
        i.scalarMult.groupElementLength = 32,
        i.box = function (t, e, n, r) {
          var o = i.box.before(n, r);
          return i.secretbox(t, e, o)
        },
        i.box.before = function (t, e) {
          ft(t, e),
          function (t, e) {
            if (32 !== t.length) throw new Error('bad public key size');
            if (32 !== e.length) throw new Error('bad secret key size')
          }(t, e);
          var n = new Uint8Array(32);
          return J(n, t, e),
          n
        },
        i.box.after = i.secretbox,
        i.box.open = function (t, e, n, r) {
          var o = i.box.before(n, r);
          return i.secretbox.open(t, e, o)
        },
        i.box.open.after = i.secretbox.open,
        i.box.keyPair = function () {
          var t = new Uint8Array(32),
          e = new Uint8Array(32);
          return z(t, e),
          {
            publicKey: t,
            secretKey: e
          }
        },
        i.box.keyPair.fromSecretKey = function (t) {
          if (ft(t), 32 !== t.length) throw new Error('bad secret key size');
          var e = new Uint8Array(32);
          return q(e, t),
          {
            publicKey: e,
            secretKey: new Uint8Array(t)
          }
        },
        i.box.publicKeyLength = 32,
        i.box.secretKeyLength = 32,
        i.box.sharedKeyLength = 32,
        i.box.nonceLength = 24,
        i.box.overheadLength = i.secretbox.overheadLength,
        i.sign = function (t, e) {
          if (ft(t, e), 64 !== e.length) throw new Error('bad secret key size');
          var n = new Uint8Array(64 + t.length);
          return at(n, t, t.length, e),
          n
        },
        i.sign.open = function (t, e) {
          if (2 !== arguments.length) throw new Error('nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?');
          if (ft(t, e), 32 !== e.length) throw new Error('bad public key size');
          var n = new Uint8Array(t.length),
          r = ct(n, t, t.length, e);
          if (r < 0) return null;
          for (var o = new Uint8Array(r), i = 0; i < o.length; i++) o[i] = n[i];
          return o
        },
        i.sign.detached = function (t, e) {
          for (var n = i.sign(t, e), r = new Uint8Array(64), o = 0; o < r.length; o++) r[o] = n[o];
          return r
        },
        i.sign.detached.verify = function (t, e, n) {
          if (ft(t, e, n), 64 !== e.length) throw new Error('bad signature size');
          if (32 !== n.length) throw new Error('bad public key size');
          var r,
          o = new Uint8Array(64 + t.length),
          i = new Uint8Array(64 + t.length);
          for (r = 0; r < 64; r++) o[r] = e[r];
          for (r = 0; r < t.length; r++) o[r + 64] = t[r];
          return 0 <= ct(i, o, o.length, n)
        },
        i.sign.keyPair = function () {
          var t = new Uint8Array(32),
          e = new Uint8Array(64);
          return rt(t, e),
          {
            publicKey: t,
            secretKey: e
          }
        },
        i.sign.keyPair.fromSecretKey = function (t) {
          if (ft(t), 64 !== t.length) throw new Error('bad secret key size');
          for (var e = new Uint8Array(32), n = 0; n < e.length; n++) e[n] = t[32 + n];
          return {
            publicKey: e,
            secretKey: new Uint8Array(t)
          }
        },
        i.sign.keyPair.fromSeed = function (t) {
          if (ft(t), 32 !== t.length) throw new Error('bad seed size');
          for (var e = new Uint8Array(32), n = new Uint8Array(64), r = 0; r < 32; r++) n[r] = t[r];
          return rt(e, n, !0),
          {
            publicKey: e,
            secretKey: n
          }
        },
        i.sign.publicKeyLength = 32,
        i.sign.secretKeyLength = 64,
        i.sign.seedLength = 32,
        i.sign.signatureLength = 64,
        i.hash = function (t) {
          ft(t);
          var e = new Uint8Array(64);
          return Z(e, t, t.length),
          e
        },
        i.hash.hashLength = 64,
        i.verify = function (t, e) {
          return ft(t, e),
          0 !== t.length && 0 !== e.length && (t.length === e.length && 0 === d(t, 0, e, 0, t.length))
        },
        i.setPRNG = function (t) {
          s = t
        },
        function () {
          var o = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
          if (o && o.getRandomValues) {
            i.setPRNG(function (t, e) {
              var n,
              r = new Uint8Array(e);
              for (n = 0; n < e; n += 65536) o.getRandomValues(r.subarray(n, n + Math.min(e - n, 65536)));
              for (n = 0; n < e; n++) t[n] = r[n];
              ht(r)
            })
          } else (o = pt(382)) && o.randomBytes && i.setPRNG(function (t, e) {
            var n,
            r = o.randomBytes(e);
            for (n = 0; n < e; n++) t[n] = r[n];
            ht(r)
          })
        }()
      }(t.exports ? t.exports : self.nacl = self.nacl || {
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(43);
      t.exports = function () {
        var t = r(this),
        e = '';
        return t.global && (e += 'g'),
        t.ignoreCase && (e += 'i'),
        t.multiline && (e += 'm'),
        t.unicode && (e += 'u'),
        t.sticky && (e += 'y'),
        e
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(128),
      i = RegExp.prototype.exec;
      t.exports = function (t, e) {
        var n = t.exec;
        if ('function' == typeof n) {
          var r = n.call(t, e);
          if ('object' != typeof r) throw new TypeError('RegExp exec method returned something other than an Object or null');
          return r
        }
        if ('RegExp' !== o(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
        return i.call(t, e)
      }
    },
    function (t, e, n) {
      'use strict';
      n(387);
      var l = n(58),
      f = n(50),
      h = n(29),
      p = n(69),
      d = n(18),
      y = n(169),
      v = d('species'),
      g = !h(function () {
        var t = /./;
        return t.exec = function () {
          var t = [
          ];
          return t.groups = {
            a: '7'
          },
          t
        },
        '7' !== ''.replace(t, '$<a>')
      }),
      _ = function () {
        var t = /(?:)/,
        e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments)
        };
        var n = 'ab'.split(t);
        return 2 === n.length && 'a' === n[0] && 'b' === n[1]
      }();
      t.exports = function (n, t, e) {
        var r = d(n),
        i = !h(function () {
          var t = {
          };
          return t[r] = function () {
            return 7
          },
          7 != ''[n](t)
        }),
        o = i ? !h(function () {
          var t = !1,
          e = /a/;
          return e.exec = function () {
            return t = !0,
            null
          },
          'split' === n && (e.constructor = {
          }, e.constructor[v] = function () {
            return e
          }),
          e[r](''),
          !t
        }) : void 0;
        if (!i || !o || 'replace' === n && !g || 'split' === n && !_) {
          var s = /./[r],
          a = e(p, r, ''[n], function (t, e, n, r, o) {
            return e.exec === y ? i && !o ? {
              done: !0,
              value: s.call(e, n, r)
            }
             : {
              done: !0,
              value: t.call(n, e, r)
            }
             : {
              done: !1
            }
          }),
          u = a[0],
          c = a[1];
          l(String.prototype, n, u),
          f(RegExp.prototype, r, 2 == t ? function (t, e) {
            return c.call(t, this, e)
          }
           : function (t) {
            return c.call(t, this)
          })
        }
      }
    },
    function (t, e, n) {
      var r = n(9);
      e.f = r
    },
    function (t, e, n) {
      t.exports = n(443)
    },
    function (t, e, n) {
      var r,
      o,
      i,
      L = n(137);
      n(86),
      n(62);
      var I = n(14),
      N = n(27),
      C = n(10);
      n(138),
      n(4),
      n(2);
      var U = n(31);
      n(87);
      var M = n(46),
      H = n(13);
      o = [
        n(496)
      ],
      void 0 === (i = 'function' == typeof (r = function (A) {
        'use strict';
        var j = A.Reader,
        T = A.Writer,
        B = A.util,
        R = A.roots['default'] || (A.roots['default'] = {
        });
        return R.exonum = function () {
          var t,
          e,
          n,
          r,
          o,
          i,
          s = {
          };
          function a(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function u(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function c(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function l(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function f(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function h(t) {
            if (this.validator_keys = [
            ], t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function p(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function d(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function y(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function v(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function g(t) {
            if (this.entries = [
            ], t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function _(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function m(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function b(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function w(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function x(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function O(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function S(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function k(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function E(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function P(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          return s.AdditionalHeaders = (a.prototype.headers = null, a.create = function (t) {
            return new a(t)
          }, a.encode = function (t, e) {
            return e = e || T.create(),
            null != t.headers && t.hasOwnProperty('headers') && R.exonum.KeyValueSequence.encode(t.headers, e.uint32(10).fork()).ldelim(),
            e
          }, a.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, a.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.AdditionalHeaders; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.headers = R.exonum.KeyValueSequence.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, a.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, a.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != t.headers && t.hasOwnProperty('headers')) {
              var e = R.exonum.KeyValueSequence.verify(t.headers);
              if (e) return 'headers.' + e
            }
            return null
          }, a.fromObject = function (t) {
            if (t instanceof R.exonum.AdditionalHeaders) return t;
            var e = new R.exonum.AdditionalHeaders;
            if (null != t.headers) {
              if ('object' !== H(t.headers)) throw TypeError('.exonum.AdditionalHeaders.headers: object expected');
              e.headers = R.exonum.KeyValueSequence.fromObject(t.headers)
            }
            return e
          }, a.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.headers = null),
            null != t.headers && t.hasOwnProperty('headers') && (n.headers = R.exonum.KeyValueSequence.toObject(t.headers, e)),
            n
          }, a.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, a),
          s.Block = (u.prototype.proposer_id = 0, u.prototype.height = B.Long ? B.Long.fromBits(0, 0, !0) : 0, u.prototype.tx_count = 0, u.prototype.prev_hash = null, u.prototype.tx_hash = null, u.prototype.state_hash = null, u.prototype.error_hash = null, u.prototype.additional_headers = null, u.create = function (t) {
            return new u(t)
          }, u.encode = function (t, e) {
            return e = e || T.create(),
            null != t.proposer_id && t.hasOwnProperty('proposer_id') && e.uint32(8).uint32(t.proposer_id),
            null != t.height && t.hasOwnProperty('height') && e.uint32(16).uint64(t.height),
            null != t.tx_count && t.hasOwnProperty('tx_count') && e.uint32(24).uint32(t.tx_count),
            null != t.prev_hash && t.hasOwnProperty('prev_hash') && R.exonum.crypto.Hash.encode(t.prev_hash, e.uint32(34).fork()).ldelim(),
            null != t.tx_hash && t.hasOwnProperty('tx_hash') && R.exonum.crypto.Hash.encode(t.tx_hash, e.uint32(42).fork()).ldelim(),
            null != t.state_hash && t.hasOwnProperty('state_hash') && R.exonum.crypto.Hash.encode(t.state_hash, e.uint32(50).fork()).ldelim(),
            null != t.error_hash && t.hasOwnProperty('error_hash') && R.exonum.crypto.Hash.encode(t.error_hash, e.uint32(58).fork()).ldelim(),
            null != t.additional_headers && t.hasOwnProperty('additional_headers') && R.exonum.AdditionalHeaders.encode(t.additional_headers, e.uint32(66).fork()).ldelim(),
            e
          }, u.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, u.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.Block; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.proposer_id = t.uint32();
                  break;
                case 2:
                  r.height = t.uint64();
                  break;
                case 3:
                  r.tx_count = t.uint32();
                  break;
                case 4:
                  r.prev_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 5:
                  r.tx_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 6:
                  r.state_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 7:
                  r.error_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 8:
                  r.additional_headers = R.exonum.AdditionalHeaders.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, u.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, u.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.proposer_id && t.hasOwnProperty('proposer_id') && !B.isInteger(t.proposer_id) ? 'proposer_id: integer expected' : null != t.height && t.hasOwnProperty('height') && !(B.isInteger(t.height) || t.height && B.isInteger(t.height.low) && B.isInteger(t.height.high)) ? 'height: integer|Long expected' : null != t.tx_count && t.hasOwnProperty('tx_count') && !B.isInteger(t.tx_count) ? 'tx_count: integer expected' : null != t.prev_hash && t.hasOwnProperty('prev_hash') && (e = R.exonum.crypto.Hash.verify(t.prev_hash)) ? 'prev_hash.' + e : null != t.tx_hash && t.hasOwnProperty('tx_hash') && (e = R.exonum.crypto.Hash.verify(t.tx_hash)) ? 'tx_hash.' + e : null != t.state_hash && t.hasOwnProperty('state_hash') && (e = R.exonum.crypto.Hash.verify(t.state_hash)) ? 'state_hash.' + e : null != t.error_hash && t.hasOwnProperty('error_hash') && (e = R.exonum.crypto.Hash.verify(t.error_hash)) ? 'error_hash.' + e : null != t.additional_headers && t.hasOwnProperty('additional_headers') && (e = R.exonum.AdditionalHeaders.verify(t.additional_headers)) ? 'additional_headers.' + e : null;
            var e
          }, u.fromObject = function (t) {
            if (t instanceof R.exonum.Block) return t;
            var e = new R.exonum.Block;
            if (null != t.proposer_id && (e.proposer_id = t.proposer_id >>> 0), null != t.height && (B.Long ? (e.height = B.Long.fromValue(t.height)).unsigned = !0 : 'string' == typeof t.height ? e.height = U(t.height, 10) : 'number' == typeof t.height ? e.height = t.height : 'object' === H(t.height) && (e.height = new B.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0))), null != t.tx_count && (e.tx_count = t.tx_count >>> 0), null != t.prev_hash) {
              if ('object' !== H(t.prev_hash)) throw TypeError('.exonum.Block.prev_hash: object expected');
              e.prev_hash = R.exonum.crypto.Hash.fromObject(t.prev_hash)
            }
            if (null != t.tx_hash) {
              if ('object' !== H(t.tx_hash)) throw TypeError('.exonum.Block.tx_hash: object expected');
              e.tx_hash = R.exonum.crypto.Hash.fromObject(t.tx_hash)
            }
            if (null != t.state_hash) {
              if ('object' !== H(t.state_hash)) throw TypeError('.exonum.Block.state_hash: object expected');
              e.state_hash = R.exonum.crypto.Hash.fromObject(t.state_hash)
            }
            if (null != t.error_hash) {
              if ('object' !== H(t.error_hash)) throw TypeError('.exonum.Block.error_hash: object expected');
              e.error_hash = R.exonum.crypto.Hash.fromObject(t.error_hash)
            }
            if (null != t.additional_headers) {
              if ('object' !== H(t.additional_headers)) throw TypeError('.exonum.Block.additional_headers: object expected');
              e.additional_headers = R.exonum.AdditionalHeaders.fromObject(t.additional_headers)
            }
            return e
          }, u.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) {
              if (n.proposer_id = 0, B.Long) {
                var r = new B.Long(0, 0, !0);
                n.height = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
              } else n.height = e.longs === String ? '0' : 0;
              n.tx_count = 0,
              n.prev_hash = null,
              n.tx_hash = null,
              n.state_hash = null,
              n.error_hash = null,
              n.additional_headers = null
            }
            return null != t.proposer_id && t.hasOwnProperty('proposer_id') && (n.proposer_id = t.proposer_id),
            null != t.height && t.hasOwnProperty('height') && ('number' == typeof t.height ? n.height = e.longs === String ? String(t.height) : t.height : n.height = e.longs === String ? B.Long.prototype.toString.call(t.height) : e.longs === Number ? new B.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0) : t.height),
            null != t.tx_count && t.hasOwnProperty('tx_count') && (n.tx_count = t.tx_count),
            null != t.prev_hash && t.hasOwnProperty('prev_hash') && (n.prev_hash = R.exonum.crypto.Hash.toObject(t.prev_hash, e)),
            null != t.tx_hash && t.hasOwnProperty('tx_hash') && (n.tx_hash = R.exonum.crypto.Hash.toObject(t.tx_hash, e)),
            null != t.state_hash && t.hasOwnProperty('state_hash') && (n.state_hash = R.exonum.crypto.Hash.toObject(t.state_hash, e)),
            null != t.error_hash && t.hasOwnProperty('error_hash') && (n.error_hash = R.exonum.crypto.Hash.toObject(t.error_hash, e)),
            null != t.additional_headers && t.hasOwnProperty('additional_headers') && (n.additional_headers = R.exonum.AdditionalHeaders.toObject(t.additional_headers, e)),
            n
          }, u.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, u),
          s.TxLocation = (c.prototype.block_height = B.Long ? B.Long.fromBits(0, 0, !0) : 0, c.prototype.position_in_block = 0, c.create = function (t) {
            return new c(t)
          }, c.encode = function (t, e) {
            return e = e || T.create(),
            null != t.block_height && t.hasOwnProperty('block_height') && e.uint32(8).uint64(t.block_height),
            null != t.position_in_block && t.hasOwnProperty('position_in_block') && e.uint32(16).uint32(t.position_in_block),
            e
          }, c.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, c.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.TxLocation; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.block_height = t.uint64();
                  break;
                case 2:
                  r.position_in_block = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, c.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, c.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.block_height && t.hasOwnProperty('block_height') && !(B.isInteger(t.block_height) || t.block_height && B.isInteger(t.block_height.low) && B.isInteger(t.block_height.high)) ? 'block_height: integer|Long expected' : null != t.position_in_block && t.hasOwnProperty('position_in_block') && !B.isInteger(t.position_in_block) ? 'position_in_block: integer expected' : null
          }, c.fromObject = function (t) {
            if (t instanceof R.exonum.TxLocation) return t;
            var e = new R.exonum.TxLocation;
            return null != t.block_height && (B.Long ? (e.block_height = B.Long.fromValue(t.block_height)).unsigned = !0 : 'string' == typeof t.block_height ? e.block_height = U(t.block_height, 10) : 'number' == typeof t.block_height ? e.block_height = t.block_height : 'object' === H(t.block_height) && (e.block_height = new B.LongBits(t.block_height.low >>> 0, t.block_height.high >>> 0).toNumber(!0))),
            null != t.position_in_block && (e.position_in_block = t.position_in_block >>> 0),
            e
          }, c.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) {
              if (B.Long) {
                var r = new B.Long(0, 0, !0);
                n.block_height = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
              } else n.block_height = e.longs === String ? '0' : 0;
              n.position_in_block = 0
            }
            return null != t.block_height && t.hasOwnProperty('block_height') && ('number' == typeof t.block_height ? n.block_height = e.longs === String ? String(t.block_height) : t.block_height : n.block_height = e.longs === String ? B.Long.prototype.toString.call(t.block_height) : e.longs === Number ? new B.LongBits(t.block_height.low >>> 0, t.block_height.high >>> 0).toNumber(!0) : t.block_height),
            null != t.position_in_block && t.hasOwnProperty('position_in_block') && (n.position_in_block = t.position_in_block),
            n
          }, c.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, c),
          s.CallInBlock = (l.prototype.transaction = 0, l.prototype.before_transactions = 0, l.prototype.after_transactions = 0, C(l.prototype, 'call', {
            get: B.oneOfGetter(t = [
              'transaction',
              'before_transactions',
              'after_transactions'
            ]),
            set: B.oneOfSetter(t)
          }), l.create = function (t) {
            return new l(t)
          }, l.encode = function (t, e) {
            return e = e || T.create(),
            null != t.transaction && t.hasOwnProperty('transaction') && e.uint32(8).uint32(t.transaction),
            null != t.before_transactions && t.hasOwnProperty('before_transactions') && e.uint32(16).uint32(t.before_transactions),
            null != t.after_transactions && t.hasOwnProperty('after_transactions') && e.uint32(24).uint32(t.after_transactions),
            e
          }, l.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, l.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.CallInBlock; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.transaction = t.uint32();
                  break;
                case 2:
                  r.before_transactions = t.uint32();
                  break;
                case 3:
                  r.after_transactions = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, l.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, l.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            var e = {
            };
            if (null != t.transaction && t.hasOwnProperty('transaction') && (e.call = 1, !B.isInteger(t.transaction))) return 'transaction: integer expected';
            if (null != t.before_transactions && t.hasOwnProperty('before_transactions')) {
              if (1 === e.call) return 'call: multiple values';
              if (e.call = 1, !B.isInteger(t.before_transactions)) return 'before_transactions: integer expected'
            }
            if (null != t.after_transactions && t.hasOwnProperty('after_transactions')) {
              if (1 === e.call) return 'call: multiple values';
              if (e.call = 1, !B.isInteger(t.after_transactions)) return 'after_transactions: integer expected'
            }
            return null
          }, l.fromObject = function (t) {
            if (t instanceof R.exonum.CallInBlock) return t;
            var e = new R.exonum.CallInBlock;
            return null != t.transaction && (e.transaction = t.transaction >>> 0),
            null != t.before_transactions && (e.before_transactions = t.before_transactions >>> 0),
            null != t.after_transactions && (e.after_transactions = t.after_transactions >>> 0),
            e
          }, l.toObject = function (t, e) {
            e = e || {
            };
            var n = {
            };
            return null != t.transaction && t.hasOwnProperty('transaction') && (n.transaction = t.transaction, e.oneofs && (n.call = 'transaction')),
            null != t.before_transactions && t.hasOwnProperty('before_transactions') && (n.before_transactions = t.before_transactions, e.oneofs && (n.call = 'before_transactions')),
            null != t.after_transactions && t.hasOwnProperty('after_transactions') && (n.after_transactions = t.after_transactions, e.oneofs && (n.call = 'after_transactions')),
            n
          }, l.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, l),
          s.ValidatorKeys = (f.prototype.consensus_key = null, f.prototype.service_key = null, f.create = function (t) {
            return new f(t)
          }, f.encode = function (t, e) {
            return e = e || T.create(),
            null != t.consensus_key && t.hasOwnProperty('consensus_key') && R.exonum.crypto.PublicKey.encode(t.consensus_key, e.uint32(10).fork()).ldelim(),
            null != t.service_key && t.hasOwnProperty('service_key') && R.exonum.crypto.PublicKey.encode(t.service_key, e.uint32(18).fork()).ldelim(),
            e
          }, f.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, f.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.ValidatorKeys; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.consensus_key = R.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                case 2:
                  r.service_key = R.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, f.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, f.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.consensus_key && t.hasOwnProperty('consensus_key') && (e = R.exonum.crypto.PublicKey.verify(t.consensus_key)) ? 'consensus_key.' + e : null != t.service_key && t.hasOwnProperty('service_key') && (e = R.exonum.crypto.PublicKey.verify(t.service_key)) ? 'service_key.' + e : null;
            var e
          }, f.fromObject = function (t) {
            if (t instanceof R.exonum.ValidatorKeys) return t;
            var e = new R.exonum.ValidatorKeys;
            if (null != t.consensus_key) {
              if ('object' !== H(t.consensus_key)) throw TypeError('.exonum.ValidatorKeys.consensus_key: object expected');
              e.consensus_key = R.exonum.crypto.PublicKey.fromObject(t.consensus_key)
            }
            if (null != t.service_key) {
              if ('object' !== H(t.service_key)) throw TypeError('.exonum.ValidatorKeys.service_key: object expected');
              e.service_key = R.exonum.crypto.PublicKey.fromObject(t.service_key)
            }
            return e
          }, f.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.consensus_key = null, n.service_key = null),
            null != t.consensus_key && t.hasOwnProperty('consensus_key') && (n.consensus_key = R.exonum.crypto.PublicKey.toObject(t.consensus_key, e)),
            null != t.service_key && t.hasOwnProperty('service_key') && (n.service_key = R.exonum.crypto.PublicKey.toObject(t.service_key, e)),
            n
          }, f.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, f),
          s.Config = (h.prototype.validator_keys = B.emptyArray, h.prototype.first_round_timeout = B.Long ? B.Long.fromBits(0, 0, !0) : 0, h.prototype.status_timeout = B.Long ? B.Long.fromBits(0, 0, !0) : 0, h.prototype.peers_timeout = B.Long ? B.Long.fromBits(0, 0, !0) : 0, h.prototype.txs_block_limit = 0, h.prototype.max_message_len = 0, h.prototype.min_propose_timeout = B.Long ? B.Long.fromBits(0, 0, !0) : 0, h.prototype.max_propose_timeout = B.Long ? B.Long.fromBits(0, 0, !0) : 0, h.prototype.propose_timeout_threshold = 0, h.create = function (t) {
            return new h(t)
          }, h.encode = function (t, e) {
            if (e = e || T.create(), null != t.validator_keys && t.validator_keys.length) for (var n = 0; n < t.validator_keys.length; ++n) R.exonum.ValidatorKeys.encode(t.validator_keys[n], e.uint32(10).fork()).ldelim();
            return null != t.first_round_timeout && t.hasOwnProperty('first_round_timeout') && e.uint32(16).uint64(t.first_round_timeout),
            null != t.status_timeout && t.hasOwnProperty('status_timeout') && e.uint32(24).uint64(t.status_timeout),
            null != t.peers_timeout && t.hasOwnProperty('peers_timeout') && e.uint32(32).uint64(t.peers_timeout),
            null != t.txs_block_limit && t.hasOwnProperty('txs_block_limit') && e.uint32(40).uint32(t.txs_block_limit),
            null != t.max_message_len && t.hasOwnProperty('max_message_len') && e.uint32(48).uint32(t.max_message_len),
            null != t.min_propose_timeout && t.hasOwnProperty('min_propose_timeout') && e.uint32(56).uint64(t.min_propose_timeout),
            null != t.max_propose_timeout && t.hasOwnProperty('max_propose_timeout') && e.uint32(64).uint64(t.max_propose_timeout),
            null != t.propose_timeout_threshold && t.hasOwnProperty('propose_timeout_threshold') && e.uint32(72).uint32(t.propose_timeout_threshold),
            e
          }, h.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, h.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.Config; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.validator_keys && r.validator_keys.length || (r.validator_keys = [
                  ]),
                  r.validator_keys.push(R.exonum.ValidatorKeys.decode(t, t.uint32()));
                  break;
                case 2:
                  r.first_round_timeout = t.uint64();
                  break;
                case 3:
                  r.status_timeout = t.uint64();
                  break;
                case 4:
                  r.peers_timeout = t.uint64();
                  break;
                case 5:
                  r.txs_block_limit = t.uint32();
                  break;
                case 6:
                  r.max_message_len = t.uint32();
                  break;
                case 7:
                  r.min_propose_timeout = t.uint64();
                  break;
                case 8:
                  r.max_propose_timeout = t.uint64();
                  break;
                case 9:
                  r.propose_timeout_threshold = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, h.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, h.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != t.validator_keys && t.hasOwnProperty('validator_keys')) {
              if (!N(t.validator_keys)) return 'validator_keys: array expected';
              for (var e = 0; e < t.validator_keys.length; ++e) {
                var n = R.exonum.ValidatorKeys.verify(t.validator_keys[e]);
                if (n) return 'validator_keys.' + n
              }
            }
            return null != t.first_round_timeout && t.hasOwnProperty('first_round_timeout') && !(B.isInteger(t.first_round_timeout) || t.first_round_timeout && B.isInteger(t.first_round_timeout.low) && B.isInteger(t.first_round_timeout.high)) ? 'first_round_timeout: integer|Long expected' : null != t.status_timeout && t.hasOwnProperty('status_timeout') && !(B.isInteger(t.status_timeout) || t.status_timeout && B.isInteger(t.status_timeout.low) && B.isInteger(t.status_timeout.high)) ? 'status_timeout: integer|Long expected' : null != t.peers_timeout && t.hasOwnProperty('peers_timeout') && !(B.isInteger(t.peers_timeout) || t.peers_timeout && B.isInteger(t.peers_timeout.low) && B.isInteger(t.peers_timeout.high)) ? 'peers_timeout: integer|Long expected' : null != t.txs_block_limit && t.hasOwnProperty('txs_block_limit') && !B.isInteger(t.txs_block_limit) ? 'txs_block_limit: integer expected' : null != t.max_message_len && t.hasOwnProperty('max_message_len') && !B.isInteger(t.max_message_len) ? 'max_message_len: integer expected' : null != t.min_propose_timeout && t.hasOwnProperty('min_propose_timeout') && !(B.isInteger(t.min_propose_timeout) || t.min_propose_timeout && B.isInteger(t.min_propose_timeout.low) && B.isInteger(t.min_propose_timeout.high)) ? 'min_propose_timeout: integer|Long expected' : null != t.max_propose_timeout && t.hasOwnProperty('max_propose_timeout') && !(B.isInteger(t.max_propose_timeout) || t.max_propose_timeout && B.isInteger(t.max_propose_timeout.low) && B.isInteger(t.max_propose_timeout.high)) ? 'max_propose_timeout: integer|Long expected' : null != t.propose_timeout_threshold && t.hasOwnProperty('propose_timeout_threshold') && !B.isInteger(t.propose_timeout_threshold) ? 'propose_timeout_threshold: integer expected' : null
          }, h.fromObject = function (t) {
            if (t instanceof R.exonum.Config) return t;
            var e = new R.exonum.Config;
            if (t.validator_keys) {
              if (!N(t.validator_keys)) throw TypeError('.exonum.Config.validator_keys: array expected');
              e.validator_keys = [
              ];
              for (var n = 0; n < t.validator_keys.length; ++n) {
                if ('object' !== H(t.validator_keys[n])) throw TypeError('.exonum.Config.validator_keys: object expected');
                e.validator_keys[n] = R.exonum.ValidatorKeys.fromObject(t.validator_keys[n])
              }
            }
            return null != t.first_round_timeout && (B.Long ? (e.first_round_timeout = B.Long.fromValue(t.first_round_timeout)).unsigned = !0 : 'string' == typeof t.first_round_timeout ? e.first_round_timeout = U(t.first_round_timeout, 10) : 'number' == typeof t.first_round_timeout ? e.first_round_timeout = t.first_round_timeout : 'object' === H(t.first_round_timeout) && (e.first_round_timeout = new B.LongBits(t.first_round_timeout.low >>> 0, t.first_round_timeout.high >>> 0).toNumber(!0))),
            null != t.status_timeout && (B.Long ? (e.status_timeout = B.Long.fromValue(t.status_timeout)).unsigned = !0 : 'string' == typeof t.status_timeout ? e.status_timeout = U(t.status_timeout, 10) : 'number' == typeof t.status_timeout ? e.status_timeout = t.status_timeout : 'object' === H(t.status_timeout) && (e.status_timeout = new B.LongBits(t.status_timeout.low >>> 0, t.status_timeout.high >>> 0).toNumber(!0))),
            null != t.peers_timeout && (B.Long ? (e.peers_timeout = B.Long.fromValue(t.peers_timeout)).unsigned = !0 : 'string' == typeof t.peers_timeout ? e.peers_timeout = U(t.peers_timeout, 10) : 'number' == typeof t.peers_timeout ? e.peers_timeout = t.peers_timeout : 'object' === H(t.peers_timeout) && (e.peers_timeout = new B.LongBits(t.peers_timeout.low >>> 0, t.peers_timeout.high >>> 0).toNumber(!0))),
            null != t.txs_block_limit && (e.txs_block_limit = t.txs_block_limit >>> 0),
            null != t.max_message_len && (e.max_message_len = t.max_message_len >>> 0),
            null != t.min_propose_timeout && (B.Long ? (e.min_propose_timeout = B.Long.fromValue(t.min_propose_timeout)).unsigned = !0 : 'string' == typeof t.min_propose_timeout ? e.min_propose_timeout = U(t.min_propose_timeout, 10) : 'number' == typeof t.min_propose_timeout ? e.min_propose_timeout = t.min_propose_timeout : 'object' === H(t.min_propose_timeout) && (e.min_propose_timeout = new B.LongBits(t.min_propose_timeout.low >>> 0, t.min_propose_timeout.high >>> 0).toNumber(!0))),
            null != t.max_propose_timeout && (B.Long ? (e.max_propose_timeout = B.Long.fromValue(t.max_propose_timeout)).unsigned = !0 : 'string' == typeof t.max_propose_timeout ? e.max_propose_timeout = U(t.max_propose_timeout, 10) : 'number' == typeof t.max_propose_timeout ? e.max_propose_timeout = t.max_propose_timeout : 'object' === H(t.max_propose_timeout) && (e.max_propose_timeout = new B.LongBits(t.max_propose_timeout.low >>> 0, t.max_propose_timeout.high >>> 0).toNumber(!0))),
            null != t.propose_timeout_threshold && (e.propose_timeout_threshold = t.propose_timeout_threshold >>> 0),
            e
          }, h.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.validator_keys = [
            ]), e.defaults) {
              if (B.Long) {
                var r = new B.Long(0, 0, !0);
                n.first_round_timeout = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
              } else n.first_round_timeout = e.longs === String ? '0' : 0;
              B.Long ? (r = new B.Long(0, 0, !0), n.status_timeout = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r) : n.status_timeout = e.longs === String ? '0' : 0,
              B.Long ? (r = new B.Long(0, 0, !0), n.peers_timeout = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r) : n.peers_timeout = e.longs === String ? '0' : 0,
              n.txs_block_limit = 0,
              n.max_message_len = 0,
              B.Long ? (r = new B.Long(0, 0, !0), n.min_propose_timeout = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r) : n.min_propose_timeout = e.longs === String ? '0' : 0,
              B.Long ? (r = new B.Long(0, 0, !0), n.max_propose_timeout = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r) : n.max_propose_timeout = e.longs === String ? '0' : 0,
              n.propose_timeout_threshold = 0
            }
            if (t.validator_keys && t.validator_keys.length) {
              n.validator_keys = [
              ];
              for (var o = 0; o < t.validator_keys.length; ++o) n.validator_keys[o] = R.exonum.ValidatorKeys.toObject(t.validator_keys[o], e)
            }
            return null != t.first_round_timeout && t.hasOwnProperty('first_round_timeout') && ('number' == typeof t.first_round_timeout ? n.first_round_timeout = e.longs === String ? String(t.first_round_timeout) : t.first_round_timeout : n.first_round_timeout = e.longs === String ? B.Long.prototype.toString.call(t.first_round_timeout) : e.longs === Number ? new B.LongBits(t.first_round_timeout.low >>> 0, t.first_round_timeout.high >>> 0).toNumber(!0) : t.first_round_timeout),
            null != t.status_timeout && t.hasOwnProperty('status_timeout') && ('number' == typeof t.status_timeout ? n.status_timeout = e.longs === String ? String(t.status_timeout) : t.status_timeout : n.status_timeout = e.longs === String ? B.Long.prototype.toString.call(t.status_timeout) : e.longs === Number ? new B.LongBits(t.status_timeout.low >>> 0, t.status_timeout.high >>> 0).toNumber(!0) : t.status_timeout),
            null != t.peers_timeout && t.hasOwnProperty('peers_timeout') && ('number' == typeof t.peers_timeout ? n.peers_timeout = e.longs === String ? String(t.peers_timeout) : t.peers_timeout : n.peers_timeout = e.longs === String ? B.Long.prototype.toString.call(t.peers_timeout) : e.longs === Number ? new B.LongBits(t.peers_timeout.low >>> 0, t.peers_timeout.high >>> 0).toNumber(!0) : t.peers_timeout),
            null != t.txs_block_limit && t.hasOwnProperty('txs_block_limit') && (n.txs_block_limit = t.txs_block_limit),
            null != t.max_message_len && t.hasOwnProperty('max_message_len') && (n.max_message_len = t.max_message_len),
            null != t.min_propose_timeout && t.hasOwnProperty('min_propose_timeout') && ('number' == typeof t.min_propose_timeout ? n.min_propose_timeout = e.longs === String ? String(t.min_propose_timeout) : t.min_propose_timeout : n.min_propose_timeout = e.longs === String ? B.Long.prototype.toString.call(t.min_propose_timeout) : e.longs === Number ? new B.LongBits(t.min_propose_timeout.low >>> 0, t.min_propose_timeout.high >>> 0).toNumber(!0) : t.min_propose_timeout),
            null != t.max_propose_timeout && t.hasOwnProperty('max_propose_timeout') && ('number' == typeof t.max_propose_timeout ? n.max_propose_timeout = e.longs === String ? String(t.max_propose_timeout) : t.max_propose_timeout : n.max_propose_timeout = e.longs === String ? B.Long.prototype.toString.call(t.max_propose_timeout) : e.longs === Number ? new B.LongBits(t.max_propose_timeout.low >>> 0, t.max_propose_timeout.high >>> 0).toNumber(!0) : t.max_propose_timeout),
            null != t.propose_timeout_threshold && t.hasOwnProperty('propose_timeout_threshold') && (n.propose_timeout_threshold = t.propose_timeout_threshold),
            n
          }, h.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, h),
          s.crypto = ((e = {
          }).Hash = (p.prototype.data = B.newBuffer([]), p.create = function (t) {
            return new p(t)
          }, p.encode = function (t, e) {
            return e = e || T.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, p.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, p.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.crypto.Hash; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, p.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, p.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || B.isString(t.data)) ? 'data: buffer expected' : null
          }, p.fromObject = function (t) {
            if (t instanceof R.exonum.crypto.Hash) return t;
            var e = new R.exonum.crypto.Hash;
            return null != t.data && ('string' == typeof t.data ? B.base64.decode(t.data, e.data = B.newBuffer(B.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, p.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = B.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? B.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? I(Array.prototype).call(t.data) : t.data),
            n
          }, p.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, p), e.PublicKey = (d.prototype.data = B.newBuffer([]), d.create = function (t) {
            return new d(t)
          }, d.encode = function (t, e) {
            return e = e || T.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, d.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, d.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.crypto.PublicKey; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, d.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, d.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || B.isString(t.data)) ? 'data: buffer expected' : null
          }, d.fromObject = function (t) {
            if (t instanceof R.exonum.crypto.PublicKey) return t;
            var e = new R.exonum.crypto.PublicKey;
            return null != t.data && ('string' == typeof t.data ? B.base64.decode(t.data, e.data = B.newBuffer(B.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, d.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = B.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? B.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? I(Array.prototype).call(t.data) : t.data),
            n
          }, d.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, d), e.Signature = (y.prototype.data = B.newBuffer([]), y.create = function (t) {
            return new y(t)
          }, y.encode = function (t, e) {
            return e = e || T.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            e
          }, y.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, y.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.crypto.Signature; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, y.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, y.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || B.isString(t.data)) ? 'data: buffer expected' : null
          }, y.fromObject = function (t) {
            if (t instanceof R.exonum.crypto.Signature) return t;
            var e = new R.exonum.crypto.Signature;
            return null != t.data && ('string' == typeof t.data ? B.base64.decode(t.data, e.data = B.newBuffer(B.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            e
          }, y.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = B.newBuffer(n.data)))),
            null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? B.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? I(Array.prototype).call(t.data) : t.data),
            n
          }, y.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, y), e),
          s.KeyValue = (v.prototype.key = '', v.prototype.value = B.newBuffer([]), v.create = function (t) {
            return new v(t)
          }, v.encode = function (t, e) {
            return e = e || T.create(),
            null != t.key && t.hasOwnProperty('key') && e.uint32(10).string(t.key),
            null != t.value && t.hasOwnProperty('value') && e.uint32(18).bytes(t.value),
            e
          }, v.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, v.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.KeyValue; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.key = t.string();
                  break;
                case 2:
                  r.value = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, v.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, v.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.key && t.hasOwnProperty('key') && !B.isString(t.key) ? 'key: string expected' : null != t.value && t.hasOwnProperty('value') && !(t.value && 'number' == typeof t.value.length || B.isString(t.value)) ? 'value: buffer expected' : null
          }, v.fromObject = function (t) {
            if (t instanceof R.exonum.KeyValue) return t;
            var e = new R.exonum.KeyValue;
            return null != t.key && (e.key = String(t.key)),
            null != t.value && ('string' == typeof t.value ? B.base64.decode(t.value, e.value = B.newBuffer(B.base64.length(t.value)), 0) : t.value.length && (e.value = t.value)),
            e
          }, v.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.key = '', e.bytes === String ? n.value = '' : (n.value = [
            ], e.bytes !== Array && (n.value = B.newBuffer(n.value)))),
            null != t.key && t.hasOwnProperty('key') && (n.key = t.key),
            null != t.value && t.hasOwnProperty('value') && (n.value = e.bytes === String ? B.base64.encode(t.value, 0, t.value.length) : e.bytes === Array ? I(Array.prototype).call(t.value) : t.value),
            n
          }, v.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, v),
          s.KeyValueSequence = (g.prototype.entries = B.emptyArray, g.create = function (t) {
            return new g(t)
          }, g.encode = function (t, e) {
            if (e = e || T.create(), null != L(t) && L(t).length) for (var n = 0; n < L(t).length; ++n) R.exonum.KeyValue.encode(L(t) [n], e.uint32(10).fork()).ldelim();
            return e
          }, g.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, g.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.KeyValueSequence; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  L(r) && L(r).length || (r.entries = [
                  ]),
                  L(r).push(R.exonum.KeyValue.decode(t, t.uint32()));
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, g.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, g.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != L(t) && t.hasOwnProperty('entries')) {
              if (!N(L(t))) return 'entries: array expected';
              for (var e = 0; e < L(t).length; ++e) {
                var n = R.exonum.KeyValue.verify(L(t) [e]);
                if (n) return 'entries.' + n
              }
            }
            return null
          }, g.fromObject = function (t) {
            if (t instanceof R.exonum.KeyValueSequence) return t;
            var e = new R.exonum.KeyValueSequence;
            if (L(t)) {
              if (!N(L(t))) throw TypeError('.exonum.KeyValueSequence.entries: array expected');
              e.entries = [
              ];
              for (var n = 0; n < L(t).length; ++n) {
                if ('object' !== H(L(t) [n])) throw TypeError('.exonum.KeyValueSequence.entries: object expected');
                L(e) [n] = R.exonum.KeyValue.fromObject(L(t) [n])
              }
            }
            return e
          }, g.toObject = function (t, e) {
            var n = {
            };
            if (((e = e || {
            }).arrays || e.defaults) && (n.entries = [
            ]), L(t) && L(t).length) {
              n.entries = [
              ];
              for (var r = 0; r < L(t).length; ++r) L(n) [r] = R.exonum.KeyValue.toObject(L(t) [r], e)
            }
            return n
          }, g.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, g),
          s.SignedMessage = (_.prototype.payload = B.newBuffer([]), _.prototype.author = null, _.prototype.signature = null, _.create = function (t) {
            return new _(t)
          }, _.encode = function (t, e) {
            return e = e || T.create(),
            null != t.payload && t.hasOwnProperty('payload') && e.uint32(10).bytes(t.payload),
            null != t.author && t.hasOwnProperty('author') && R.exonum.crypto.PublicKey.encode(t.author, e.uint32(18).fork()).ldelim(),
            null != t.signature && t.hasOwnProperty('signature') && R.exonum.crypto.Signature.encode(t.signature, e.uint32(26).fork()).ldelim(),
            e
          }, _.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, _.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.SignedMessage; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.payload = t.bytes();
                  break;
                case 2:
                  r.author = R.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                case 3:
                  r.signature = R.exonum.crypto.Signature.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, _.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, _.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.payload && t.hasOwnProperty('payload') && !(t.payload && 'number' == typeof t.payload.length || B.isString(t.payload)) ? 'payload: buffer expected' : null != t.author && t.hasOwnProperty('author') && (e = R.exonum.crypto.PublicKey.verify(t.author)) ? 'author.' + e : null != t.signature && t.hasOwnProperty('signature') && (e = R.exonum.crypto.Signature.verify(t.signature)) ? 'signature.' + e : null;
            var e
          }, _.fromObject = function (t) {
            if (t instanceof R.exonum.SignedMessage) return t;
            var e = new R.exonum.SignedMessage;
            if (null != t.payload && ('string' == typeof t.payload ? B.base64.decode(t.payload, e.payload = B.newBuffer(B.base64.length(t.payload)), 0) : t.payload.length && (e.payload = t.payload)), null != t.author) {
              if ('object' !== H(t.author)) throw TypeError('.exonum.SignedMessage.author: object expected');
              e.author = R.exonum.crypto.PublicKey.fromObject(t.author)
            }
            if (null != t.signature) {
              if ('object' !== H(t.signature)) throw TypeError('.exonum.SignedMessage.signature: object expected');
              e.signature = R.exonum.crypto.Signature.fromObject(t.signature)
            }
            return e
          }, _.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (e.bytes === String ? n.payload = '' : (n.payload = [
            ], e.bytes !== Array && (n.payload = B.newBuffer(n.payload))), n.author = null, n.signature = null),
            null != t.payload && t.hasOwnProperty('payload') && (n.payload = e.bytes === String ? B.base64.encode(t.payload, 0, t.payload.length) : e.bytes === Array ? I(Array.prototype).call(t.payload) : t.payload),
            null != t.author && t.hasOwnProperty('author') && (n.author = R.exonum.crypto.PublicKey.toObject(t.author, e)),
            null != t.signature && t.hasOwnProperty('signature') && (n.signature = R.exonum.crypto.Signature.toObject(t.signature, e)),
            n
          }, _.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, _),
          s.CoreMessage = (m.prototype.any_tx = null, m.prototype.precommit = null, C(m.prototype, 'kind', {
            get: B.oneOfGetter(n = [
              'any_tx',
              'precommit'
            ]),
            set: B.oneOfSetter(n)
          }), m.create = function (t) {
            return new m(t)
          }, m.encode = function (t, e) {
            return e = e || T.create(),
            null != t.any_tx && t.hasOwnProperty('any_tx') && R.exonum.runtime.AnyTx.encode(t.any_tx, e.uint32(10).fork()).ldelim(),
            null != t.precommit && t.hasOwnProperty('precommit') && R.exonum.Precommit.encode(t.precommit, e.uint32(18).fork()).ldelim(),
            e
          }, m.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, m.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.CoreMessage; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.any_tx = R.exonum.runtime.AnyTx.decode(t, t.uint32());
                  break;
                case 2:
                  r.precommit = R.exonum.Precommit.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, m.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, m.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            var e = {
            };
            if (null != t.any_tx && t.hasOwnProperty('any_tx') && (e.kind = 1, n = R.exonum.runtime.AnyTx.verify(t.any_tx))) return 'any_tx.' + n;
            if (null != t.precommit && t.hasOwnProperty('precommit')) {
              if (1 === e.kind) return 'kind: multiple values';
              var n;
              if (e.kind = 1, n = R.exonum.Precommit.verify(t.precommit)) return 'precommit.' + n
            }
            return null
          }, m.fromObject = function (t) {
            if (t instanceof R.exonum.CoreMessage) return t;
            var e = new R.exonum.CoreMessage;
            if (null != t.any_tx) {
              if ('object' !== H(t.any_tx)) throw TypeError('.exonum.CoreMessage.any_tx: object expected');
              e.any_tx = R.exonum.runtime.AnyTx.fromObject(t.any_tx)
            }
            if (null != t.precommit) {
              if ('object' !== H(t.precommit)) throw TypeError('.exonum.CoreMessage.precommit: object expected');
              e.precommit = R.exonum.Precommit.fromObject(t.precommit)
            }
            return e
          }, m.toObject = function (t, e) {
            e = e || {
            };
            var n = {
            };
            return null != t.any_tx && t.hasOwnProperty('any_tx') && (n.any_tx = R.exonum.runtime.AnyTx.toObject(t.any_tx, e), e.oneofs && (n.kind = 'any_tx')),
            null != t.precommit && t.hasOwnProperty('precommit') && (n.precommit = R.exonum.Precommit.toObject(t.precommit, e), e.oneofs && (n.kind = 'precommit')),
            n
          }, m.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, m),
          s.Precommit = (b.prototype.validator = 0, b.prototype.height = B.Long ? B.Long.fromBits(0, 0, !0) : 0, b.prototype.round = 0, b.prototype.propose_hash = null, b.prototype.block_hash = null, b.prototype.time = null, b.create = function (t) {
            return new b(t)
          }, b.encode = function (t, e) {
            return e = e || T.create(),
            null != t.validator && t.hasOwnProperty('validator') && e.uint32(8).uint32(t.validator),
            null != t.height && t.hasOwnProperty('height') && e.uint32(16).uint64(t.height),
            null != t.round && t.hasOwnProperty('round') && e.uint32(24).uint32(t.round),
            null != t.propose_hash && t.hasOwnProperty('propose_hash') && R.exonum.crypto.Hash.encode(t.propose_hash, e.uint32(34).fork()).ldelim(),
            null != t.block_hash && t.hasOwnProperty('block_hash') && R.exonum.crypto.Hash.encode(t.block_hash, e.uint32(42).fork()).ldelim(),
            null != t.time && t.hasOwnProperty('time') && R.google.protobuf.Timestamp.encode(t.time, e.uint32(50).fork()).ldelim(),
            e
          }, b.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, b.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.Precommit; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.validator = t.uint32();
                  break;
                case 2:
                  r.height = t.uint64();
                  break;
                case 3:
                  r.round = t.uint32();
                  break;
                case 4:
                  r.propose_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 5:
                  r.block_hash = R.exonum.crypto.Hash.decode(t, t.uint32());
                  break;
                case 6:
                  r.time = R.google.protobuf.Timestamp.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, b.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, b.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.validator && t.hasOwnProperty('validator') && !B.isInteger(t.validator) ? 'validator: integer expected' : null != t.height && t.hasOwnProperty('height') && !(B.isInteger(t.height) || t.height && B.isInteger(t.height.low) && B.isInteger(t.height.high)) ? 'height: integer|Long expected' : null != t.round && t.hasOwnProperty('round') && !B.isInteger(t.round) ? 'round: integer expected' : null != t.propose_hash && t.hasOwnProperty('propose_hash') && (e = R.exonum.crypto.Hash.verify(t.propose_hash)) ? 'propose_hash.' + e : null != t.block_hash && t.hasOwnProperty('block_hash') && (e = R.exonum.crypto.Hash.verify(t.block_hash)) ? 'block_hash.' + e : null != t.time && t.hasOwnProperty('time') && (e = R.google.protobuf.Timestamp.verify(t.time)) ? 'time.' + e : null;
            var e
          }, b.fromObject = function (t) {
            if (t instanceof R.exonum.Precommit) return t;
            var e = new R.exonum.Precommit;
            if (null != t.validator && (e.validator = t.validator >>> 0), null != t.height && (B.Long ? (e.height = B.Long.fromValue(t.height)).unsigned = !0 : 'string' == typeof t.height ? e.height = U(t.height, 10) : 'number' == typeof t.height ? e.height = t.height : 'object' === H(t.height) && (e.height = new B.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0))), null != t.round && (e.round = t.round >>> 0), null != t.propose_hash) {
              if ('object' !== H(t.propose_hash)) throw TypeError('.exonum.Precommit.propose_hash: object expected');
              e.propose_hash = R.exonum.crypto.Hash.fromObject(t.propose_hash)
            }
            if (null != t.block_hash) {
              if ('object' !== H(t.block_hash)) throw TypeError('.exonum.Precommit.block_hash: object expected');
              e.block_hash = R.exonum.crypto.Hash.fromObject(t.block_hash)
            }
            if (null != t.time) {
              if ('object' !== H(t.time)) throw TypeError('.exonum.Precommit.time: object expected');
              e.time = R.google.protobuf.Timestamp.fromObject(t.time)
            }
            return e
          }, b.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) {
              if (n.validator = 0, B.Long) {
                var r = new B.Long(0, 0, !0);
                n.height = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
              } else n.height = e.longs === String ? '0' : 0;
              n.round = 0,
              n.propose_hash = null,
              n.block_hash = null,
              n.time = null
            }
            return null != t.validator && t.hasOwnProperty('validator') && (n.validator = t.validator),
            null != t.height && t.hasOwnProperty('height') && ('number' == typeof t.height ? n.height = e.longs === String ? String(t.height) : t.height : n.height = e.longs === String ? B.Long.prototype.toString.call(t.height) : e.longs === Number ? new B.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0) : t.height),
            null != t.round && t.hasOwnProperty('round') && (n.round = t.round),
            null != t.propose_hash && t.hasOwnProperty('propose_hash') && (n.propose_hash = R.exonum.crypto.Hash.toObject(t.propose_hash, e)),
            null != t.block_hash && t.hasOwnProperty('block_hash') && (n.block_hash = R.exonum.crypto.Hash.toObject(t.block_hash, e)),
            null != t.time && t.hasOwnProperty('time') && (n.time = R.google.protobuf.Timestamp.toObject(t.time, e)),
            n
          }, b.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, b),
          s.runtime = ((o = {
          }).CallInfo = (w.prototype.instance_id = 0, w.prototype.method_id = 0, w.create = function (t) {
            return new w(t)
          }, w.encode = function (t, e) {
            return e = e || T.create(),
            null != t.instance_id && t.hasOwnProperty('instance_id') && e.uint32(8).uint32(t.instance_id),
            null != t.method_id && t.hasOwnProperty('method_id') && e.uint32(16).uint32(t.method_id),
            e
          }, w.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, w.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.CallInfo; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.instance_id = t.uint32();
                  break;
                case 2:
                  r.method_id = t.uint32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, w.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, w.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.instance_id && t.hasOwnProperty('instance_id') && !B.isInteger(t.instance_id) ? 'instance_id: integer expected' : null != t.method_id && t.hasOwnProperty('method_id') && !B.isInteger(t.method_id) ? 'method_id: integer expected' : null
          }, w.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.CallInfo) return t;
            var e = new R.exonum.runtime.CallInfo;
            return null != t.instance_id && (e.instance_id = t.instance_id >>> 0),
            null != t.method_id && (e.method_id = t.method_id >>> 0),
            e
          }, w.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.instance_id = 0, n.method_id = 0),
            null != t.instance_id && t.hasOwnProperty('instance_id') && (n.instance_id = t.instance_id),
            null != t.method_id && t.hasOwnProperty('method_id') && (n.method_id = t.method_id),
            n
          }, w.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, w), o.AnyTx = (x.prototype.call_info = null, x.prototype.arguments = B.newBuffer([]), x.create = function (t) {
            return new x(t)
          }, x.encode = function (t, e) {
            return e = e || T.create(),
            null != t.call_info && t.hasOwnProperty('call_info') && R.exonum.runtime.CallInfo.encode(t.call_info, e.uint32(10).fork()).ldelim(),
            null != t.arguments && t.hasOwnProperty('arguments') && e.uint32(18).bytes(t.arguments),
            e
          }, x.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, x.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.AnyTx; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.call_info = R.exonum.runtime.CallInfo.decode(t, t.uint32());
                  break;
                case 2:
                  r.arguments = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, x.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, x.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != t.call_info && t.hasOwnProperty('call_info')) {
              var e = R.exonum.runtime.CallInfo.verify(t.call_info);
              if (e) return 'call_info.' + e
            }
            return null != t.arguments && t.hasOwnProperty('arguments') && !(t.arguments && 'number' == typeof t.arguments.length || B.isString(t.arguments)) ? 'arguments: buffer expected' : null
          }, x.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.AnyTx) return t;
            var e = new R.exonum.runtime.AnyTx;
            if (null != t.call_info) {
              if ('object' !== H(t.call_info)) throw TypeError('.exonum.runtime.AnyTx.call_info: object expected');
              e.call_info = R.exonum.runtime.CallInfo.fromObject(t.call_info)
            }
            return null != t.arguments && ('string' == typeof t.arguments ? B.base64.decode(t.arguments, e.arguments = B.newBuffer(B.base64.length(t.arguments)), 0) : t.arguments.length && (e.arguments = t.arguments)),
            e
          }, x.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.call_info = null, e.bytes === String ? n.arguments = '' : (n.arguments = [
            ], e.bytes !== Array && (n.arguments = B.newBuffer(n.arguments)))),
            null != t.call_info && t.hasOwnProperty('call_info') && (n.call_info = R.exonum.runtime.CallInfo.toObject(t.call_info, e)),
            null != t.arguments && t.hasOwnProperty('arguments') && (n.arguments = e.bytes === String ? B.base64.encode(t.arguments, 0, t.arguments.length) : e.bytes === Array ? I(Array.prototype).call(t.arguments) : t.arguments),
            n
          }, x.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, x), o.ArtifactId = (O.prototype.runtime_id = 0, O.prototype.name = '', O.prototype.version = '', O.create = function (t) {
            return new O(t)
          }, O.encode = function (t, e) {
            return e = e || T.create(),
            null != t.runtime_id && t.hasOwnProperty('runtime_id') && e.uint32(8).uint32(t.runtime_id),
            null != t.name && t.hasOwnProperty('name') && e.uint32(18).string(t.name),
            null != t.version && t.hasOwnProperty('version') && e.uint32(26).string(t.version),
            e
          }, O.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, O.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.ArtifactId; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.runtime_id = t.uint32();
                  break;
                case 2:
                  r.name = t.string();
                  break;
                case 3:
                  r.version = t.string();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, O.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, O.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.runtime_id && t.hasOwnProperty('runtime_id') && !B.isInteger(t.runtime_id) ? 'runtime_id: integer expected' : null != t.name && t.hasOwnProperty('name') && !B.isString(t.name) ? 'name: string expected' : null != t.version && t.hasOwnProperty('version') && !B.isString(t.version) ? 'version: string expected' : null
          }, O.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.ArtifactId) return t;
            var e = new R.exonum.runtime.ArtifactId;
            return null != t.runtime_id && (e.runtime_id = t.runtime_id >>> 0),
            null != t.name && (e.name = String(t.name)),
            null != t.version && (e.version = String(t.version)),
            e
          }, O.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.runtime_id = 0, n.name = '', n.version = ''),
            null != t.runtime_id && t.hasOwnProperty('runtime_id') && (n.runtime_id = t.runtime_id),
            null != t.name && t.hasOwnProperty('name') && (n.name = t.name),
            null != t.version && t.hasOwnProperty('version') && (n.version = t.version),
            n
          }, O.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, O), o.ArtifactSpec = (S.prototype.artifact = null, S.prototype.payload = B.newBuffer([]), S.create = function (t) {
            return new S(t)
          }, S.encode = function (t, e) {
            return e = e || T.create(),
            null != t.artifact && t.hasOwnProperty('artifact') && R.exonum.runtime.ArtifactId.encode(t.artifact, e.uint32(10).fork()).ldelim(),
            null != t.payload && t.hasOwnProperty('payload') && e.uint32(18).bytes(t.payload),
            e
          }, S.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, S.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.ArtifactSpec; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.artifact = R.exonum.runtime.ArtifactId.decode(t, t.uint32());
                  break;
                case 2:
                  r.payload = t.bytes();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, S.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, S.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != t.artifact && t.hasOwnProperty('artifact')) {
              var e = R.exonum.runtime.ArtifactId.verify(t.artifact);
              if (e) return 'artifact.' + e
            }
            return null != t.payload && t.hasOwnProperty('payload') && !(t.payload && 'number' == typeof t.payload.length || B.isString(t.payload)) ? 'payload: buffer expected' : null
          }, S.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.ArtifactSpec) return t;
            var e = new R.exonum.runtime.ArtifactSpec;
            if (null != t.artifact) {
              if ('object' !== H(t.artifact)) throw TypeError('.exonum.runtime.ArtifactSpec.artifact: object expected');
              e.artifact = R.exonum.runtime.ArtifactId.fromObject(t.artifact)
            }
            return null != t.payload && ('string' == typeof t.payload ? B.base64.decode(t.payload, e.payload = B.newBuffer(B.base64.length(t.payload)), 0) : t.payload.length && (e.payload = t.payload)),
            e
          }, S.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.artifact = null, e.bytes === String ? n.payload = '' : (n.payload = [
            ], e.bytes !== Array && (n.payload = B.newBuffer(n.payload)))),
            null != t.artifact && t.hasOwnProperty('artifact') && (n.artifact = R.exonum.runtime.ArtifactId.toObject(t.artifact, e)),
            null != t.payload && t.hasOwnProperty('payload') && (n.payload = e.bytes === String ? B.base64.encode(t.payload, 0, t.payload.length) : e.bytes === Array ? I(Array.prototype).call(t.payload) : t.payload),
            n
          }, S.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, S), o.InstanceSpec = (k.prototype.id = 0, k.prototype.name = '', k.prototype.artifact = null, k.create = function (t) {
            return new k(t)
          }, k.encode = function (t, e) {
            return e = e || T.create(),
            null != t.id && t.hasOwnProperty('id') && e.uint32(8).uint32(t.id),
            null != t.name && t.hasOwnProperty('name') && e.uint32(18).string(t.name),
            null != t.artifact && t.hasOwnProperty('artifact') && R.exonum.runtime.ArtifactId.encode(t.artifact, e.uint32(26).fork()).ldelim(),
            e
          }, k.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, k.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.InstanceSpec; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.id = t.uint32();
                  break;
                case 2:
                  r.name = t.string();
                  break;
                case 3:
                  r.artifact = R.exonum.runtime.ArtifactId.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, k.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, k.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            if (null != t.id && t.hasOwnProperty('id') && !B.isInteger(t.id)) return 'id: integer expected';
            if (null != t.name && t.hasOwnProperty('name') && !B.isString(t.name)) return 'name: string expected';
            if (null != t.artifact && t.hasOwnProperty('artifact')) {
              var e = R.exonum.runtime.ArtifactId.verify(t.artifact);
              if (e) return 'artifact.' + e
            }
            return null
          }, k.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.InstanceSpec) return t;
            var e = new R.exonum.runtime.InstanceSpec;
            if (null != t.id && (e.id = t.id >>> 0), null != t.name && (e.name = String(t.name)), null != t.artifact) {
              if ('object' !== H(t.artifact)) throw TypeError('.exonum.runtime.InstanceSpec.artifact: object expected');
              e.artifact = R.exonum.runtime.ArtifactId.fromObject(t.artifact)
            }
            return e
          }, k.toObject = function (t, e) {
            var n = {
            };
            return (e = e || {
            }).defaults && (n.id = 0, n.name = '', n.artifact = null),
            null != t.id && t.hasOwnProperty('id') && (n.id = t.id),
            null != t.name && t.hasOwnProperty('name') && (n.name = t.name),
            null != t.artifact && t.hasOwnProperty('artifact') && (n.artifact = R.exonum.runtime.ArtifactId.toObject(t.artifact, e)),
            n
          }, k.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, k), o.Caller = (E.prototype.transaction_author = null, E.prototype.instance_id = 0, E.prototype.blockchain = null, C(E.prototype, 'caller', {
            get: B.oneOfGetter(r = [
              'transaction_author',
              'instance_id',
              'blockchain'
            ]),
            set: B.oneOfSetter(r)
          }), E.create = function (t) {
            return new E(t)
          }, E.encode = function (t, e) {
            return e = e || T.create(),
            null != t.transaction_author && t.hasOwnProperty('transaction_author') && R.exonum.crypto.PublicKey.encode(t.transaction_author, e.uint32(10).fork()).ldelim(),
            null != t.instance_id && t.hasOwnProperty('instance_id') && e.uint32(16).uint32(t.instance_id),
            null != t.blockchain && t.hasOwnProperty('blockchain') && R.google.protobuf.Empty.encode(t.blockchain, e.uint32(26).fork()).ldelim(),
            e
          }, E.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, E.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.runtime.Caller; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.transaction_author = R.exonum.crypto.PublicKey.decode(t, t.uint32());
                  break;
                case 2:
                  r.instance_id = t.uint32();
                  break;
                case 3:
                  r.blockchain = R.google.protobuf.Empty.decode(t, t.uint32());
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, E.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, E.verify = function (t) {
            if ('object' !== H(t) || null === t) return 'object expected';
            var e = {
            };
            if (null != t.transaction_author && t.hasOwnProperty('transaction_author') && (e.caller = 1, n = R.exonum.crypto.PublicKey.verify(t.transaction_author))) return 'transaction_author.' + n;
            if (null != t.instance_id && t.hasOwnProperty('instance_id')) {
              if (1 === e.caller) return 'caller: multiple values';
              if (e.caller = 1, !B.isInteger(t.instance_id)) return 'instance_id: integer expected'
            }
            if (null != t.blockchain && t.hasOwnProperty('blockchain')) {
              if (1 === e.caller) return 'caller: multiple values';
              var n;
              if (e.caller = 1, n = R.google.protobuf.Empty.verify(t.blockchain)) return 'blockchain.' + n
            }
            return null
          }, E.fromObject = function (t) {
            if (t instanceof R.exonum.runtime.Caller) return t;
            var e = new R.exonum.runtime.Caller;
            if (null != t.transaction_author) {
              if ('object' !== H(t.transaction_author)) throw TypeError('.exonum.runtime.Caller.transaction_author: object expected');
              e.transaction_author = R.exonum.crypto.PublicKey.fromObject(t.transaction_author)
            }
            if (null != t.instance_id && (e.instance_id = t.instance_id >>> 0), null != t.blockchain) {
              if ('object' !== H(t.blockchain)) throw TypeError('.exonum.runtime.Caller.blockchain: object expected');
              e.blockchain = R.google.protobuf.Empty.fromObject(t.blockchain)
            }
            return e
          }, E.toObject = function (t, e) {
            e = e || {
            };
            var n = {
            };
            return null != t.transaction_author && t.hasOwnProperty('transaction_author') && (n.transaction_author = R.exonum.crypto.PublicKey.toObject(t.transaction_author, e), e.oneofs && (n.caller = 'transaction_author')),
            null != t.instance_id && t.hasOwnProperty('instance_id') && (n.instance_id = t.instance_id, e.oneofs && (n.caller = 'instance_id')),
            null != t.blockchain && t.hasOwnProperty('blockchain') && (n.blockchain = R.google.protobuf.Empty.toObject(t.blockchain, e), e.oneofs && (n.caller = 'blockchain')),
            n
          }, E.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, E), o),
          s.common = ((i = {
          }).BitVec = (P.prototype.data = B.newBuffer([]), P.prototype.len = B.Long ? B.Long.fromBits(0, 0, !0) : 0, P.create = function (t) {
            return new P(t)
          }, P.encode = function (t, e) {
            return e = e || T.create(),
            null != t.data && t.hasOwnProperty('data') && e.uint32(10).bytes(t.data),
            null != t.len && t.hasOwnProperty('len') && e.uint32(16).uint64(t.len),
            e
          }, P.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, P.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.exonum.common.BitVec; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.data = t.bytes();
                  break;
                case 2:
                  r.len = t.uint64();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, P.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, P.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.data && t.hasOwnProperty('data') && !(t.data && 'number' == typeof t.data.length || B.isString(t.data)) ? 'data: buffer expected' : null != t.len && t.hasOwnProperty('len') && !(B.isInteger(t.len) || t.len && B.isInteger(t.len.low) && B.isInteger(t.len.high)) ? 'len: integer|Long expected' : null
          }, P.fromObject = function (t) {
            if (t instanceof R.exonum.common.BitVec) return t;
            var e = new R.exonum.common.BitVec;
            return null != t.data && ('string' == typeof t.data ? B.base64.decode(t.data, e.data = B.newBuffer(B.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)),
            null != t.len && (B.Long ? (e.len = B.Long.fromValue(t.len)).unsigned = !0 : 'string' == typeof t.len ? e.len = U(t.len, 10) : 'number' == typeof t.len ? e.len = t.len : 'object' === H(t.len) && (e.len = new B.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0))),
            e
          }, P.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) if (e.bytes === String ? n.data = '' : (n.data = [
            ], e.bytes !== Array && (n.data = B.newBuffer(n.data))), B.Long) {
              var r = new B.Long(0, 0, !0);
              n.len = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
            } else n.len = e.longs === String ? '0' : 0;
            return null != t.data && t.hasOwnProperty('data') && (n.data = e.bytes === String ? B.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? I(Array.prototype).call(t.data) : t.data),
            null != t.len && t.hasOwnProperty('len') && ('number' == typeof t.len ? n.len = e.longs === String ? String(t.len) : t.len : n.len = e.longs === String ? B.Long.prototype.toString.call(t.len) : e.longs === Number ? new B.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0) : t.len),
            n
          }, P.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, P), i),
          s
        }(),
        R.google = function () {
          var t,
          e = {
          };
          function n(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          function r(t) {
            if (t) for (var e = M(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
          }
          return e.protobuf = ((t = {
          }).Timestamp = (n.prototype.seconds = B.Long ? B.Long.fromBits(0, 0, !1) : 0, n.prototype.nanos = 0, n.create = function (t) {
            return new n(t)
          }, n.encode = function (t, e) {
            return e = e || T.create(),
            null != t.seconds && t.hasOwnProperty('seconds') && e.uint32(8).int64(t.seconds),
            null != t.nanos && t.hasOwnProperty('nanos') && e.uint32(16).int32(t.nanos),
            e
          }, n.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, n.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.google.protobuf.Timestamp; t.pos < n; ) {
              var o = t.uint32();
              switch (o >>> 3) {
                case 1:
                  r.seconds = t.int64();
                  break;
                case 2:
                  r.nanos = t.int32();
                  break;
                default:
                  t.skipType(7 & o)
              }
            }
            return r
          }, n.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, n.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null != t.seconds && t.hasOwnProperty('seconds') && !(B.isInteger(t.seconds) || t.seconds && B.isInteger(t.seconds.low) && B.isInteger(t.seconds.high)) ? 'seconds: integer|Long expected' : null != t.nanos && t.hasOwnProperty('nanos') && !B.isInteger(t.nanos) ? 'nanos: integer expected' : null
          }, n.fromObject = function (t) {
            if (t instanceof R.google.protobuf.Timestamp) return t;
            var e = new R.google.protobuf.Timestamp;
            return null != t.seconds && (B.Long ? (e.seconds = B.Long.fromValue(t.seconds)).unsigned = !1 : 'string' == typeof t.seconds ? e.seconds = U(t.seconds, 10) : 'number' == typeof t.seconds ? e.seconds = t.seconds : 'object' === H(t.seconds) && (e.seconds = new B.LongBits(t.seconds.low >>> 0, t.seconds.high >>> 0).toNumber())),
            null != t.nanos && (e.nanos = 0 | t.nanos),
            e
          }, n.toObject = function (t, e) {
            var n = {
            };
            if ((e = e || {
            }).defaults) {
              if (B.Long) {
                var r = new B.Long(0, 0, !1);
                n.seconds = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r
              } else n.seconds = e.longs === String ? '0' : 0;
              n.nanos = 0
            }
            return null != t.seconds && t.hasOwnProperty('seconds') && ('number' == typeof t.seconds ? n.seconds = e.longs === String ? String(t.seconds) : t.seconds : n.seconds = e.longs === String ? B.Long.prototype.toString.call(t.seconds) : e.longs === Number ? new B.LongBits(t.seconds.low >>> 0, t.seconds.high >>> 0).toNumber() : t.seconds),
            null != t.nanos && t.hasOwnProperty('nanos') && (n.nanos = t.nanos),
            n
          }, n.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, n), t.Empty = (r.create = function (t) {
            return new r(t)
          }, r.encode = function (t, e) {
            return e = e || T.create()
          }, r.encodeDelimited = function (t, e) {
            return this.encode(t, e).ldelim()
          }, r.decode = function (t, e) {
            t instanceof j || (t = j.create(t));
            for (var n = void 0 === e ? t.len : t.pos + e, r = new R.google.protobuf.Empty; t.pos < n; ) {
              var o = t.uint32();
              t.skipType(7 & o)
            }
            return r
          }, r.decodeDelimited = function (t) {
            return t instanceof j || (t = new j(t)),
            this.decode(t, t.uint32())
          }, r.verify = function (t) {
            return 'object' !== H(t) || null === t ? 'object expected' : null
          }, r.fromObject = function (t) {
            return t instanceof R.google.protobuf.Empty ? t : new R.google.protobuf.Empty
          }, r.toObject = function () {
            return {
            }
          }, r.prototype.toJSON = function () {
            return this.constructor.toObject(this, A.util.toJSONOptions)
          }, r), t),
          e
        }(),
        R
      }) ? r.apply(e, o) : r) || (t.exports = i)
    },
    function (t, e, n) {
      t.exports = n(491)
    },
    function (t, e, n) {
      'use strict';
      function r(t) {
        var e = l(t, !1);
        if ('string' == typeof e && 2 < e.length) {
          var n,
          r,
          o,
          i = (e = m ? e.trim() : p(e, 3)).charCodeAt(0);
          if (43 === i || 45 === i) {
            if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
          } else if (48 === i) {
            switch (e.charCodeAt(1)) {
              case 66:
              case 98:
                r = 2,
                o = 49;
                break;
              case 79:
              case 111:
                r = 8,
                o = 55;
                break;
              default:
                return + e
            }
            for (var s, a = e.slice(2), u = 0, c = a.length; u < c; u++) if ((s = a.charCodeAt(u)) < 48 || o < s) return NaN;
            return parseInt(a, r)
          }
        }
        return + e
      }
      var o = n(30),
      i = n(67),
      s = n(83),
      a = n(258),
      l = n(98),
      u = n(29),
      c = n(126).f,
      f = n(161).f,
      h = n(57).f,
      p = n(494).trim,
      d = 'Number',
      y = o[d],
      v = y,
      g = y.prototype,
      _ = s(n(159) (g)) == d,
      m = 'trim' in String.prototype;
      if (!y(' 0o1') || !y('0b1') || y('+0x1')) {
        y = function (t) {
          var e = arguments.length < 1 ? 0 : t,
          n = this;
          return n instanceof y && (_ ? u(function () {
            g.valueOf.call(n)
          }) : s(n) != d) ? a(new v(r(e)), n, y) : r(e)
        };
        for (var b, w = n(39) ? c(v) : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(','), x = 0; w.length > x; x++) i(v, b = w[x]) && !i(y, b) && h(y, b, f(v, b));
        (y.prototype = g).constructor = y,
        n(58) (o, d, y)
      }
    },
    function (t, e, n) {
      t.exports = n(507)
    },
    function (t, e, n) {
      'use strict';
      var r = n(139);
      n(33);
      var o = n(544),
      i = n(25),
      s = n(31),
      a = n(72),
      u = n(73),
      c = n(10),
      l = n(52),
      f = n(13),
      h = n(40);
      function p(t) {
        return (p = 'function' == typeof h && 'symbol' === f(l) ? function (t) {
          return f(t)
        }
         : function (t) {
          return t && 'function' == typeof h && t.constructor === h && t !== h.prototype ? 'symbol' : f(t)
        }) (t)
      }
      c(e, '__esModule', {
        value: !0
      }),
      e.PublicKey = e.Digest = e.Hash = e.Uuid = e.PUBLIC_KEY_LENGTH = void 0;
      var d = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== p(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = y();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = c && a;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? a(t, o) : null;
          i && (i.get || i.set) ? c(n, o, i) : n[o] = t[o]
        }
        n.default = t,
        e && e.set(t, n);
        return n
      }(n(180));
      function y() {
        if ('function' != typeof u) return null;
        var t = new u;
        return y = function () {
          return t
        },
        t
      }
      e.PUBLIC_KEY_LENGTH = 32;
      function v(t, e, n) {
        if (d.validateHexadecimal(n, e)) return n;
        var r;
        throw new TypeError(i(r = ''.concat(t, ' of wrong type is passed: ')).call(r, n))
      }
      function g(t, e, n) {
        return o({
        }, {
          size: {
            get: function () {
              return function () {
                return e
              }
            },
            enumerable: !0
          },
          name: {
            get: function () {
              return n
            },
            enumerable: !0
          },
          serialize: {
            get: function () {
              return t
            }
          }
        })
      }
      function _(r, o) {
        return function (t, e, n) {
          return r(o(t), e, n)
        }
      }
      var m,
      b,
      w,
      x = r(_).call(_, null, function (t, e, n) {
        for (var r = 0; r < t.length; r += 2) e[n] = s(t.substr(r, 2), 16),
        n++;
        return e
      }),
      O = (b = x, w = g, m = r(m = v).call(m, null, 'Uuid', 16), w(b = b(function (t) {
        return m(String(t).replace(/-/g, ''))
      }), 16, 'Uuid'));
      e.Uuid = O;
      var S,
      k,
      E,
      P = (E = g, k = (k = x) (S = r(S = v).call(S, null, 'Hash', 32)), c(E(k, 32, 'Hash'), 'hash', {
        value: function (t) {
          return S(t) && t
        }
      }));
      e.Hash = P;
      var A,
      j = g(x(A = r(A = v).call(A, null, 'Digest', 64)), 64, 'Digest');
      e.Digest = j;
      var T,
      B = g(x(T = r(T = v).call(T, null, 'PublicKey', 32)), 32, 'PublicKey');
      e.PublicKey = B
    },
    function (e, t, n) {
      var r = n(614),
      o = n(301);
      function i(t) {
        return e.exports = i = o ? r : function (t) {
          return t.__proto__ || r(t)
        },
        i(t)
      }
      e.exports = i
    },
    function (t, e, n) {
      var r = n(11),
      o = n(12),
      i = r.document,
      s = o(i) && o(i.createElement);
      t.exports = function (t) {
        return s ? i.createElement(t) : {
        }
      }
    },
    function (t, e, n) {
      var r = n(12),
      o = n(79),
      i = n(9) ('species');
      t.exports = function (t, e) {
        var n;
        return o(t) && ('function' == typeof (n = t.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) && (n = void 0),
        new (void 0 === n ? Array : n) (0 === e ? 0 : e)
      }
    },
    function (t, e, n) {
      var r = n(8),
      o = n(190);
      (t.exports = function (t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {
        })
      }) ('versions', [
      ]).push({
        version: '3.6.4',
        mode: r ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      })
    },
    function (t, e, n) {
      var r = n(7);
      t.exports = !!Object.getOwnPropertySymbols && !r(function () {
        return !String(Symbol())
      })
    },
    function (t, e, n) {
      var r,
      o,
      i = n(11),
      s = n(147),
      a = i.process,
      u = a && a.versions,
      c = u && u.v8;
      c ? o = (r = c.split('.')) [0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = s.match(/Chrome\/(\d+)/)) && (o = r[1]),
      t.exports = o && + o
    },
    function (t, e, n) {
      var r = n(38);
      t.exports = r('navigator', 'userAgent') || ''
    },
    function (t, e, n) {
      'use strict';
      function g() {
        return this
      }
      var _ = n(0),
      m = n(196),
      b = n(149),
      w = n(203),
      x = n(60),
      O = n(48),
      S = n(81),
      r = n(9),
      k = n(8),
      E = n(66),
      o = n(197),
      P = o.IteratorPrototype,
      A = o.BUGGY_SAFARI_ITERATORS,
      j = r('iterator'),
      T = 'values';
      t.exports = function (t, e, n, r, o, i, s) {
        m(n, e, r);
        function a(t) {
          if (t === o && y) return y;
          if (!A && t in p) return p[t];
          switch (t) {
            case 'keys':
            case T:
            case 'entries':
              return function () {
                return new n(this, t)
              }
          }
          return function () {
            return new n(this)
          }
        }
        var u,
        c,
        l,
        f = e + ' Iterator',
        h = !1,
        p = t.prototype,
        d = p[j] || p['@@iterator'] || o && p[o],
        y = !A && d || a(o),
        v = 'Array' == e && p.entries || d;
        if (v && (u = b(v.call(new t)), P !== Object.prototype && u.next && (k || b(u) === P || (w ? w(u, P) : 'function' != typeof u[j] && O(u, j, g)), x(u, f, !0, !0), k && (E[f] = g))), o == T && d && d.name !== T && (h = !0, y = function () {
          return d.call(this)
        }), k && !s || p[j] === y || O(p, j, y), E[e] = y, o) if (c = {
          values: a(T),
          keys: i ? y : a('keys'),
          entries: a('entries')
        }, s) for (l in c) !A && !h && l in p || S(p, l, c[l]);
         else _({
          target: e,
          proto: !0,
          forced: A || h
        }, c);
        return c
      }
    },
    function (t, e, n) {
      var r = n(26),
      o = n(37),
      i = n(118),
      s = n(198),
      a = i('IE_PROTO'),
      u = Object.prototype;
      t.exports = s ? Object.getPrototypeOf : function (t) {
        return t = o(t),
        r(t, a) ? t[a] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
      }
    },
    function (t, e) {
      t.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf'
      ]
    },
    function (t, e, n) {
      var r = {
      };
      r[n(9) ('toStringTag')] = 'z',
      t.exports = '[object z]' === String(r)
    },
    function (t, e, n) {
      'use strict';
      var r = n(47),
      o = n(207),
      i = n(66),
      s = n(54),
      a = n(148),
      u = 'Array Iterator',
      c = s.set,
      l = s.getterFor(u);
      t.exports = a(Array, 'Array', function (t, e) {
        c(this, {
          type: u,
          target: r(t),
          index: 0,
          kind: e
        })
      }, function () {
        var t = l(this),
        e = t.target,
        n = t.kind,
        r = t.index++;
        return !e || r >= e.length ? {
          value: t.target = void 0,
          done: !0
        }
         : 'keys' == n ? {
          value: r,
          done: !1
        }
         : 'values' == n ? {
          value: e[r],
          done: !1
        }
         : {
          value: [
            r,
            e[r]
          ],
          done: !1
        }
      }, 'values'),
      i.Arguments = i.Array,
      o('keys'),
      o('values'),
      o('entries')
    },
    function (t, e, n) {
      var r = n(123),
      o = n(30),
      i = '__core-js_shared__',
      s = o[i] || (o[i] = {
      });
      (t.exports = function (t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {
        })
      }) ('versions', [
      ]).push({
        version: r.version,
        mode: n(122) ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
      })
    },
    function (t, e, n) {
      var u = n(127),
      c = n(44),
      l = n(100);
      t.exports = function (a) {
        return function (t, e, n) {
          var r,
          o = u(t),
          i = c(o.length),
          s = l(n, i);
          if (a && e != e) {
            for (; s < i; ) if ((r = o[s++]) != r) return !0
          } else for (; s < i; s++) if ((a || s in o) && o[s] === e) return a || s || 0;
          return !a && - 1
        }
      }
    },
    function (t, e, n) {
      var r = n(153) ('keys'),
      o = n(99);
      t.exports = function (t) {
        return r[t] || (r[t] = o(t))
      }
    },
    function (t, e) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',')
    },
    function (t, e, n) {
      'use strict';
      var c = n(70),
      l = n(100),
      f = n(44);
      t.exports = function (t, e, n) {
        for (var r = c(this), o = f(r.length), i = arguments.length, s = l(1 < i ? e : void 0, o), a = 2 < i ? n : void 0, u = void 0 === a ? o : l(a, o); s < u; ) r[s++] = t;
        return r
      }
    },
    function (t, e, n) {
      var r = n(57).f,
      o = n(67),
      i = n(18) ('toStringTag');
      t.exports = function (t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
          configurable: !0,
          value: e
        })
      }
    },
    function (t, e, r) {
      function o() {
      }
      var i = r(43),
      s = r(335),
      a = r(156),
      u = r(155) ('IE_PROTO'),
      c = 'prototype',
      l = function () {
        var t,
        e = r(209) ('iframe'),
        n = a.length;
        for (e.style.display = 'none', r(218).appendChild(e), e.src = 'javascript:', (t = e.contentWindow.document).open(), t.write('<script>document.F=Object</script>'), t.close(), l = t.F; n--; ) delete l[c][a[n]];
        return l()
      };
      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (o[c] = i(t), n = new o, o[c] = null, n[u] = t) : n = l(),
        void 0 === e ? n : s(n, e)
      }
    },
    function (t, e, n) {
      var r = n(18) ('unscopables'),
      o = Array.prototype;
      null == o[r] && n(50) (o, r, {
      }),
      t.exports = function (t) {
        o[r][t] = !0
      }
    },
    function (t, e, n) {
      var r = n(345),
      o = n(124),
      i = n(127),
      s = n(98),
      a = n(67),
      u = n(208),
      c = Object.getOwnPropertyDescriptor;
      e.f = n(39) ? c : function (t, e) {
        if (t = i(t), e = s(e, !0), u) try {
          return c(t, e)
        } catch (t) {
        }
        if (a(t, e)) return o(!r.f.call(t, e), t[e])
      }
    },
    function (t, e, n) {
      t.exports = n(356)
    },
    function (t, e, n) {
      'use strict';
      var f = n(0),
      h = n(11),
      p = n(102),
      d = n(7),
      y = n(48),
      v = n(16),
      g = n(103),
      _ = n(12),
      m = n(60),
      b = n(41).f,
      w = n(71).forEach,
      x = n(22),
      r = n(54),
      O = r.set,
      S = r.getterFor;
      t.exports = function (n, t, e) {
        var r,
        o = - 1 !== n.indexOf('Map'),
        s = - 1 !== n.indexOf('Weak'),
        i = o ? 'set' : 'add',
        a = h[n],
        u = a && a.prototype,
        c = {
        };
        if (x && 'function' == typeof a && (s || u.forEach && !d(function () {
          (new a).entries().next()
        }))) {
          r = t(function (t, e) {
            O(g(t, r, n), {
              type: n,
              collection: new a
            }),
            null != e && v(e, t[i], t, o)
          });
          var l = S(n);
          w(['add',
          'clear',
          'delete',
          'forEach',
          'get',
          'has',
          'set',
          'keys',
          'values',
          'entries'], function (o) {
            var i = 'add' == o || 'set' == o;
            o in u && (!s || 'clear' != o) && y(r.prototype, o, function (t, e) {
              var n = l(this).collection;
              if (!i && s && !_(t)) return 'get' == o && void 0;
              var r = n[o](0 === t ? 0 : t, e);
              return i ? this : r
            })
          }),
          s || b(r.prototype, 'size', {
            configurable: !0,
            get: function () {
              return l(this).collection.size
            }
          })
        } else r = e.getConstructor(t, n, o, i),
        p.REQUIRED = !0;
        return m(r, n, !1, !0),
        c[n] = r,
        f({
          global: !0,
          forced: !0
        }, c),
        s || e.setStrong(r, n, o),
        r
      }
    },
    function (t, e, n) {
      n(56) ('Float64', 8, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      var r,
      o,
      i = n(25),
      s = n(107),
      a = t.exports = {
      };
      function u() {
        throw new Error('setTimeout has not been defined')
      }
      function c() {
        throw new Error('clearTimeout has not been defined')
      }
      function l(e) {
        if (r === s) return s(e, 0);
        if ((r === u || !r) && s) return (r = s) (e, 0);
        try {
          return r(e, 0)
        } catch (t) {
          try {
            return r.call(null, e, 0)
          } catch (t) {
            return r.call(this, e, 0)
          }
        }
      }
      !function () {
        try {
          r = 'function' == typeof s ? s : u
        } catch (t) {
          r = u
        }
        try {
          o = 'function' == typeof clearTimeout ? clearTimeout : c
        } catch (t) {
          o = c
        }
      }();
      var f,
      h = [
      ],
      p = !1,
      d = - 1;
      function y() {
        p && f && (p = !1, f.length ? h = i(f).call(f, h) : d = - 1, h.length && v())
      }
      function v() {
        if (!p) {
          var t = l(y);
          p = !0;
          for (var e = h.length; e; ) {
            for (f = h, h = [
            ]; ++d < e; ) f && f[d].run();
            d = - 1,
            e = h.length
          }
          f = null,
          p = !1,
          function (e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === c || !o) && clearTimeout) return o = clearTimeout,
            clearTimeout(e);
            try {
              o(e)
            } catch (t) {
              try {
                return o.call(null, e)
              } catch (t) {
                return o.call(this, e)
              }
            }
          }(t)
        }
      }
      function g(t, e) {
        this.fun = t,
        this.array = e
      }
      function _() {
      }
      a.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new g(t, e)),
        1 !== h.length || p || l(v)
      },
      g.prototype.run = function () {
        this.fun.apply(null, this.array)
      },
      a.title = 'browser',
      a.browser = !0,
      a.env = {
      },
      a.argv = [
      ],
      a.version = '',
      a.versions = {
      },
      a.on = _,
      a.addListener = _,
      a.once = _,
      a.off = _,
      a.removeListener = _,
      a.removeAllListeners = _,
      a.emit = _,
      a.prependListener = _,
      a.prependOnceListener = _,
      a.listeners = function (t) {
        return []
      },
      a.binding = function (t) {
        throw new Error('process.binding is not supported')
      },
      a.cwd = function () {
        return '/'
      },
      a.chdir = function (t) {
        throw new Error('process.chdir is not supported')
      },
      a.umask = function () {
        return 0
      }
    },
    function (t, e) {
      t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [
        ], t.children || (t.children = [
        ]), Object.defineProperty(t, 'loaded', {
          enumerable: !0,
          get: function () {
            return t.l
          }
        }), Object.defineProperty(t, 'id', {
          enumerable: !0,
          get: function () {
            return t.i
          }
        }), t.webpackPolyfill = 1),
        t
      }
    },
    function (t, e, n) {
      var r = n(61),
      o = n(83),
      i = n(18) ('match');
      t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t))
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(232) (!0);
      t.exports = function (t, e, n) {
        return e + (n ? r(t, e).length : 1)
      }
    },
    function (t, e, n) {
      'use strict';
      var r,
      o,
      i = n(131),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      u = s,
      c = 'lastIndex',
      l = (r = /a/, o = /b*/g, s.call(r, 'a'), s.call(o, 'a'), 0 !== r[c] || 0 !== o[c]),
      f = void 0 !== /()??/.exec('') [1];
      (l || f) && (u = function (t) {
        var e,
        n,
        r,
        o;
        return f && (n = new RegExp('^' + this.source + '$(?!\\s)', i.call(this))),
        l && (e = this[c]),
        r = s.call(this, t),
        l && r && (this[c] = this.global ? r.index + r[0].length : e),
        f && r && 1 < r.length && a.call(r[0], n, function () {
          for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        }),
        r
      }),
      t.exports = u
    },
    function (t, e) {
      t.exports = '\t\n\v\f\r                　\u2028\u2029﻿'
    },
    function (t, e, n) {
      'use strict';
      function r(t) {
        var n,
        r;
        this.promise = new t(function (t, e) {
          if (void 0 !== n || void 0 !== r) throw TypeError('Bad Promise constructor');
          n = t,
          r = e
        }),
        this.resolve = o(n),
        this.reject = o(r)
      }
      var o = n(15);
      t.exports.f = function (t) {
        return new r(t)
      }
    },
    function (t, e, n) {
      var r = n(5),
      o = n(120);
      t.exports = function (t) {
        var e = o(t);
        if ('function' != typeof e) throw TypeError(String(t) + ' is not iterable');
        return r(e.call(t))
      }
    },
    function (t, e, n) {
      'use strict';
      var f = n(43),
      h = n(44),
      p = n(168),
      d = n(132);
      n(133) ('match', 1, function (r, o, c, l) {
        return [function (t) {
          var e = r(this),
          n = null == t ? void 0 : t[o];
          return void 0 !== n ? n.call(t, e) : new RegExp(t) [o](String(e))
        },
        function (t) {
          var e = l(c, t, this);
          if (e.done) return e.value;
          var n = f(t),
          r = String(this);
          if (!n.global) return d(n, r);
          for (var o, i = n.unicode, s = [
          ], a = n.lastIndex = 0; null !== (o = d(n, r)); ) {
            var u = String(o[0]);
            '' === (s[a] = u) && (n.lastIndex = p(r, h(n.lastIndex), i)),
            a++
          }
          return 0 === a ? null : s
        }
        ]
      })
    },
    function (t, e, n) {
      t.exports = n(464)
    },
    function (t, e, n) {
      t.exports = n(474)
    },
    function (t, e, n) {
      t.exports = n(500)
    },
    function (t, e, n) {
      t.exports = n(516)
    },
    function (t, e, n) {
      'use strict';
      var s = n(72),
      r = n(73),
      a = n(10),
      o = n(52),
      i = n(13),
      u = n(40);
      function c(t) {
        return (c = 'function' == typeof u && 'symbol' === i(o) ? function (t) {
          return i(t)
        }
         : function (t) {
          return t && 'function' == typeof u && t.constructor === u && t !== u.prototype ? 'symbol' : i(t)
        }) (t)
      }
      a(e, '__esModule', {
        value: !0
      }),
      e.isTransaction = function (t) {
        return t instanceof k
      },
      e.Transaction = e.Verified = void 0;
      var l,
      f = (l = n(130)) && l.__esModule ? l : {
      default:
        l
      },
      h = g(n(88)),
      p = n(179),
      d = g(n(136)),
      y = n(76);
      function v() {
        if ('function' != typeof r) return null;
        var t = new r;
        return v = function () {
          return t
        },
        t
      }
      function g(t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== c(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = v();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = a && s;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? s(t, o) : null;
          i && (i.get || i.set) ? a(n, o, i) : n[o] = t[o]
        }
        return n.default = t,
        e && e.set(t, n),
        n
      }
      function _(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          'value' in r && (r.writable = !0),
          a(t, r.key, r)
        }
      }
      function b(t, e, n) {
        return e && m(t.prototype, e),
        n && m(t, n),
        t
      }
      var w = d.exonum,
      x = w.CoreMessage,
      O = w.SignedMessage,
      S = function () {
        function o(t, e, n, r) {
          _(this, o),
          this.schema = t,
          this.payload = e,
          this.author = n,
          this.signature = r,
          this.bytes = O.encode({
            payload: t.encode(e).finish(),
            author: {
              data: (0, y.hexadecimalToUint8Array) (n)
            },
            signature: {
              data: (0, y.hexadecimalToUint8Array) (r)
            }
          }).finish()
        }
        return b(o, [
          {
            key: 'serialize',
            value: function () {
              return this.bytes
            }
          },
          {
            key: 'hash',
            value: function () {
              return h.hash(this.bytes)
            }
          }
        ], [
          {
            key: 'sign',
            value: function (t, e, n) {
              var r = n.publicKey,
              o = n.secretKey,
              i = (0, y.hexadecimalToUint8Array) (o),
              s = f.default.sign.detached(t.encode(e).finish(), i);
              return new this(t, e, r, (0, y.uint8ArrayToHexadecimal) (s))
            }
          },
          {
            key: 'deserialize',
            value: function (t, e) {
              var n = O.decode(e),
              r = n.payload,
              o = n.author,
              i = n.signature;
              if (f.default.sign.detached.verify(r, i.data, o.data)) {
                var s = t.decode(r);
                return new this(t, s, (0, y.uint8ArrayToHexadecimal) (o.data), (0, y.uint8ArrayToHexadecimal) (i.data))
              }
              return null
            }
          }
        ]),
        o
      }();
      e.Verified = S;
      var k = function () {
        function o(t) {
          var e = t.schema,
          n = t.serviceId,
          r = t.methodId;
          _(this, o),
          this.serviceId = n,
          this.methodId = r,
          this.schema = e
        }
        return b(o, [
          {
            key: 'create',
            value: function (t, e, n) {
              var r = this._serializePayload(t);
              return void 0 === n ? S.sign(x, r, e) : new S(x, r, e, n)
            }
          },
          {
            key: '_serializePayload',
            value: function (t) {
              var e = this.schema.encode((0, p.cleanZeroValuedFields) (t, {
              })).finish();
              return {
                any_tx: {
                  call_info: {
                    instance_id: this.serviceId,
                    method_id: this.methodId
                  },
                  arguments: e
                }
              }
            }
          },
          {
            key: 'serialize',
            value: function (t) {
              return x.encode(this._serializePayload(t)).finish()
            }
          },
          {
            key: 'deserialize',
            value: function (t) {
              var e = S.deserialize(x, t);
              if (!e) return null;
              var n = e.payload.any_tx;
              return !n || n.call_info.instance_id !== this.serviceId || n.call_info.method_id !== this.methodId ? null : (e.payload = this.schema.decode(n.arguments), e)
            }
          }
        ]),
        o
      }();
      e.Transaction = k
    },
    function (t, e, n) {
      'use strict';
      var i = n(1),
      s = n(46),
      r = n(27);
      n(164),
      n(272),
      n(540),
      n(231),
      n(541),
      n(6),
      n(230),
      n(542),
      n(543);
      var o = n(52),
      a = n(13),
      u = n(40);
      function c(t) {
        return (c = 'function' == typeof u && 'symbol' === a(o) ? function (t) {
          return a(t)
        }
         : function (t) {
          return t && 'function' == typeof u && t.constructor === u && t !== u.prototype ? 'symbol' : a(t)
        }) (t)
      }
      function l(t) {
        switch (c(t)) {
          case 'string':
            return '0' !== t && 0 !== t.length;
          case 'number':
            return 0 !== t
        }
        return !0
      }
      n(10) (e, '__esModule', {
        value: !0
      }),
      e.isObject = function (t) {
        return !('object' !== c(t) || r(t) || null === t || t instanceof Date)
      },
      e.verifyElement = l,
      e.cleanZeroValuedFields = function n(r, o) {
        var t = s(r);
        i(t).call(t, function (t) {
          var e;
          (e = r[t]) instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array || r[t] instanceof Array ? o[t] = r[t] : 'object' === c(r[t]) ? o[t] = n(r[t], {
          }) : l(r[t]) && (o[t] = r[t])
        });
        return o
      }
    },
    function (t, e, n) {
      'use strict';
      n(6);
      var r = n(27),
      o = n(31);
      n(10) (e, '__esModule', {
        value: !0
      }),
      e.validateInteger = function (t, e, n, r, o) {
        if ('number' != typeof t || t < e || n < t) return !1;
        return !0
      },
      e.validateHexadecimal = function (t, e) {
        if (e = e || 32, 'string' != typeof t) return !1;
        if (t.length !== 2 * e) return !1;
        for (var n = 0; n < t.length; n++) if (isNaN(o(t[n], 16))) return !1;
        return !0
      },
      e.validateBytesArray = function (t, e) {
        if (!(r(t) || t instanceof Uint8Array)) return !1;
        if (e && t.length !== e) return !1;
        for (var n = 0; n < t.length; n++) if ('number' != typeof t[n] || t[n] < 0 || 255 < t[n]) return !1;
        return !0
      },
      e.validateBinaryString = function (t, e) {
        if (void 0 !== e && t.length !== e) return !1;
        for (var n = 0; n < t.length; n++) if ('0' !== t[n] && '1' !== t[n]) return !1;
        return !0
      }
    },
    function (t, e, n) {
      t.exports = n(555)
    },
    function (t, e, n) {
      var r = n(300),
      o = n(183);
      t.exports = function (t, e) {
        if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
        t.prototype = r(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }),
        e && o(t, e)
      }
    },
    function (n, t, e) {
      var r = e(301);
      function o(t, e) {
        return n.exports = o = r || function (t, e) {
          return t.__proto__ = e,
          t
        },
        o(t, e)
      }
      n.exports = o
    },
    function (t, e, n) {
      var r = n(13),
      o = n(613);
      t.exports = function (t, e) {
        return !e || 'object' !== r(e) && 'function' != typeof e ? o(t) : e
      }
    },
    function (e, t, n) {
      var r = n(300),
      o = n(616),
      i = n(141),
      s = n(183),
      a = n(641),
      u = n(644);
      function c(t) {
        var n = 'function' == typeof o ? new o : void 0;
        return e.exports = c = function (t) {
          if (null === t || !a(t)) return t;
          if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== n) {
            if (n.has(t)) return n.get(t);
            n.set(t, e)
          }
          function e() {
            return u(t, arguments, i(this).constructor)
          }
          return e.prototype = r(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }),
          s(e, t)
        },
        c(t)
      }
      e.exports = c
    },
    function (t, e, n) {
      var r = n(45),
      o = n(51),
      i = function () {
        'use strict';
        function n(t, e) {
          r(this, n),
          this.requestUrl = t,
          this.responseProcessor = 'function' == typeof e ? e : function (t) {
            return t
          },
          this.blockchainConnector = null
        }
        return o(n, [
          {
            key: 'send',
            value: function (t) {
              return (this.blockchainConnector = t).makeRequest(this.requestUrl).then(this.responseProcessor)
            }
          }
        ]),
        n
      }();
      t.exports = i
    },
    function (t, e, n) {
      'use strict';
      function c(t) {
        if (s(t)) {
          var e = t[y];
          return void 0 !== e ? !!e : i(t)
        }
      }
      var r = n(0),
      o = n(7),
      i = n(79),
      s = n(12),
      l = n(37),
      f = n(42),
      h = n(116),
      p = n(143),
      a = n(95),
      u = n(9),
      d = n(146),
      y = u('isConcatSpreadable'),
      v = 9007199254740991,
      g = 'Maximum allowed index exceeded',
      _ = 51 <= d || !o(function () {
        var t = [
        ];
        return t[y] = !1,
        t.concat() [0] !== t
      }),
      m = a('concat');
      r({
        target: 'Array',
        proto: !0,
        forced: !_ || !m
      }, {
        concat: function (t) {
          var e,
          n,
          r,
          o,
          i,
          s = l(this),
          a = p(s, 0),
          u = 0;
          for (e = - 1, r = arguments.length; e < r; e++) if (c(i = - 1 === e ? s : arguments[e])) {
            if (o = f(i.length), v < u + o) throw TypeError(g);
            for (n = 0; n < o; n++, u++) n in i && h(a, u, i[n])
          } else {
            if (v <= u) throw TypeError(g);
            h(a, u++, i)
          }
          return a.length = u,
          a
        }
      })
    },
    function (t, e, n) {
      var r = n(22),
      o = n(7),
      i = n(142);
      t.exports = !r && !o(function () {
        return 7 != Object.defineProperty(i('div'), 'a', {
          get: function () {
            return 7
          }
        }).a
      })
    },
    function (t, e, n) {
      function r(t, e) {
        var n = a[s(t)];
        return n == c || n != u && ('function' == typeof e ? o(e) : !!e)
      }
      var o = n(7),
      i = /#|\.prototype\./,
      s = r.normalize = function (t) {
        return String(t).replace(i, '.').toLowerCase()
      },
      a = r.data = {
      },
      u = r.NATIVE = 'N',
      c = r.POLYFILL = 'P';
      t.exports = r
    },
    function (t, e, n) {
      var r = n(11),
      o = n(310),
      i = '__core-js_shared__',
      s = r[i] || o(i, {
      });
      t.exports = s
    },
    function (t, e, n) {
      var r = n(145);
      t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator
    },
    function (t, e, n) {
      n(315);
      var r = n(3);
      t.exports = r.Array.isArray
    },
    function (t, e, n) {
      n(64),
      n(322);
      var r = n(3);
      t.exports = r.Array.from
    },
    function (t, e, n) {
      var r = n(11),
      o = n(195),
      i = r.WeakMap;
      t.exports = 'function' == typeof i && /native code/.test(o(i))
    },
    function (t, e, n) {
      var r = n(190),
      o = Function.toString;
      'function' != typeof r.inspectSource && (r.inspectSource = function (t) {
        return o.call(t)
      }),
      t.exports = r.inspectSource
    },
    function (t, e, n) {
      'use strict';
      function o() {
        return this
      }
      var i = n(197).IteratorPrototype,
      s = n(80),
      a = n(78),
      u = n(60),
      c = n(66);
      t.exports = function (t, e, n) {
        var r = e + ' Iterator';
        return t.prototype = s(i, {
          next: a(1, n)
        }),
        u(t, r, !1, !0),
        c[r] = o,
        t
      }
    },
    function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      s = n(149),
      a = n(48),
      u = n(26),
      c = n(9),
      l = n(8),
      f = c('iterator'),
      h = !1;
      [
      ].keys && ('next' in (i = [
      ].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : h = !0),
      null == r && (r = {
      }),
      l || u(r, f) || a(r, f, function () {
        return this
      }),
      t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h
      }
    },
    function (t, e, n) {
      var r = n(7);
      t.exports = !r(function () {
        function t() {
        }
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
      })
    },
    function (t, e, n) {
      var r = n(22),
      s = n(41),
      a = n(5),
      u = n(97);
      t.exports = r ? Object.defineProperties : function (t, e) {
        a(t);
        for (var n, r = u(e), o = r.length, i = 0; i < o; ) s.f(t, n = r[i++], e[n]);
        return t
      }
    },
    function (t, e, n) {
      var s = n(26),
      a = n(47),
      u = n(201).indexOf,
      c = n(96);
      t.exports = function (t, e) {
        var n,
        r = a(t),
        o = 0,
        i = [
        ];
        for (n in r) !s(c, n) && s(r, n) && i.push(n);
        for (; e.length > o; ) s(r, n = e[o++]) && (~u(i, n) || i.push(n));
        return i
      }
    },
    function (t, e, n) {
      function r(a) {
        return function (t, e, n) {
          var r,
          o = u(t),
          i = c(o.length),
          s = l(n, i);
          if (a && e != e) {
            for (; s < i; ) if ((r = o[s++]) != r) return !0
          } else for (; s < i; s++) if ((a || s in o) && o[s] === e) return a || s || 0;
          return !a && - 1
        }
      }
      var u = n(47),
      c = n(42),
      l = n(119);
      t.exports = {
        includes: r(!0),
        indexOf: r(!1)
      }
    },
    function (t, e, n) {
      var r = n(38);
      t.exports = r('document', 'documentElement')
    },
    function (t, e, n) {
      var o = n(5),
      i = n(321);
      t.exports = Object.setPrototypeOf || ('__proto__' in {
      }
      ? function () {
        var n,
        r = !1,
        t = {
        };
        try {
          (n = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(t, [
          ]),
          r = t instanceof Array
        } catch (t) {
        }
        return function (t, e) {
          return o(t),
          i(e),
          r ? n.call(t, e) : t.__proto__ = e,
          t
        }
      }() : void 0)
    },
    function (t, e, n) {
      var i = n(5);
      t.exports = function (e, t, n, r) {
        try {
          return r ? t(i(n) [0], n[1]) : t(n)
        } catch (t) {
          var o = e.return;
          throw void 0 !== o && i(o.call(e)),
          t
        }
      }
    },
    function (t, e, n) {
      var r = n(9),
      o = n(66),
      i = r('iterator'),
      s = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (o.Array === t || s[i] === t)
      }
    },
    function (t, e, n) {
      var o = n(9) ('iterator'),
      i = !1;
      try {
        var r = 0,
        s = {
          next: function () {
            return {
              done: !!r++
            }
          },
          return : function () {
            i = !0
          }
        };
        s[o] = function () {
          return this
        },
        Array.from(s, function () {
          throw 2
        })
      } catch (t) {
      }
      t.exports = function (t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
          var r = {
          };
          r[o] = function () {
            return {
              next: function () {
                return {
                  done: n = !0
                }
              }
            }
          },
          t(r)
        } catch (t) {
        }
        return n
      }
    },
    function (t, e) {
      t.exports = function () {
      }
    },
    function (t, e, n) {
      t.exports = !n(39) && !n(29) (function () {
        return 7 != Object.defineProperty(n(209) ('div'), 'a', {
          get: function () {
            return 7
          }
        }).a
      })
    },
    function (t, e, n) {
      var r = n(61),
      o = n(30).document,
      i = r(o) && r(o.createElement);
      t.exports = function (t) {
        return i ? o.createElement(t) : {
        }
      }
    },
    function (t, e) {
      t.exports = function (t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t
      }
    },
    function (t, e, n) {
      for (var r, o = n(30), i = n(50), s = n(99), a = s('typed_array'), u = s('view'), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, h = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(','); f < 9; ) (r = o[h[f++]]) ? (i(r.prototype, a, !0), i(r.prototype, u, !0)) : l = !1;
      t.exports = {
        ABV: c,
        CONSTR: l,
        TYPED: a,
        VIEW: u
      }
    },
    function (t, e, n) {
      var o = n(58);
      t.exports = function (t, e, n) {
        for (var r in e) o(t, r, e[r], n);
        return t
      }
    },
    function (t, e) {
      t.exports = function (t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ': incorrect invocation!');
        return t
      }
    },
    function (t, e, n) {
      var r = n(68),
      o = n(44);
      t.exports = function (t) {
        if (void 0 === t) return 0;
        var e = r(t),
        n = o(e);
        if (e !== n) throw RangeError('Wrong length!');
        return n
      }
    },
    function (t, e, n) {
      var s = n(67),
      a = n(127),
      u = n(154) (!1),
      c = n(155) ('IE_PROTO');
      t.exports = function (t, e) {
        var n,
        r = a(t),
        o = 0,
        i = [
        ];
        for (n in r) n != c && s(r, n) && i.push(n);
        for (; e.length > o; ) s(r, n = e[o++]) && (~u(i, n) || i.push(n));
        return i
      }
    },
    function (t, e, n) {
      var r = n(83);
      t.exports = Object('z').propertyIsEnumerable(0) ? Object : function (t) {
        return 'String' == r(t) ? t.split('') : Object(t)
      }
    },
    function (t, e, n) {
      var r = n(215),
      o = n(156);
      t.exports = Object.keys || function (t) {
        return r(t, o)
      }
    },
    function (t, e, n) {
      var r = n(30).document;
      t.exports = r && r.documentElement
    },
    function (t, e, n) {
      var r = n(67),
      o = n(70),
      i = n(155) ('IE_PROTO'),
      s = Object.prototype;
      t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t),
        r(t, i) ? t[i] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
    },
    function (t, e, n) {
      var o = n(43),
      i = n(210),
      s = n(18) ('species');
      t.exports = function (t, e) {
        var n,
        r = o(t).constructor;
        return void 0 === r || null == (n = o(r) [s]) ? e : i(n)
      }
    },
    function (t, e, n) {
      'use strict';
      function m() {
        return this
      }
      var b = n(122),
      w = n(49),
      x = n(58),
      O = n(50),
      S = n(84),
      k = n(342),
      E = n(158),
      P = n(219),
      A = n(18) ('iterator'),
      j = !([].keys && 'next' in [
      ].keys()),
      T = 'values';
      t.exports = function (t, e, n, r, o, i, s) {
        k(n, e, r);
        function a(t) {
          if (!j && t in d) return d[t];
          switch (t) {
            case 'keys':
            case T:
              return function () {
                return new n(this, t)
              }
          }
          return function () {
            return new n(this, t)
          }
        }
        var u,
        c,
        l,
        f = e + ' Iterator',
        h = o == T,
        p = !1,
        d = t.prototype,
        y = d[A] || d['@@iterator'] || o && d[o],
        v = y || a(o),
        g = o ? h ? a('entries') : v : void 0,
        _ = 'Array' == e && d.entries || y;
        if (_ && (l = P(_.call(new t))) !== Object.prototype && l.next && (E(l, f, !0), b || 'function' == typeof l[A] || O(l, A, m)), h && y && y.name !== T && (p = !0, v = function () {
          return y.call(this)
        }), b && !s || !j && !p && d[A] || O(d, A, v), S[e] = v, S[f] = m, o) if (u = {
          values: h ? v : a(T),
          keys: i ? v : a('keys'),
          entries: g
        }, s) for (c in u) c in d || x(d, c, u[c]);
         else w(w.P + w.F * (j || p), e, u);
        return u
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(30),
      o = n(57),
      i = n(39),
      s = n(18) ('species');
      t.exports = function (t) {
        var e = r[t];
        i && e && !e[s] && o.f(e, s, {
          configurable: !0,
          get: function () {
            return this
          }
        })
      }
    },
    function (t, e, n) {
      var r = n(7);
      t.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({
        }))
      })
    },
    function (t, e, n) {
      'use strict';
      var c = n(41).f,
      l = n(80),
      f = n(104),
      h = n(24),
      p = n(103),
      d = n(16),
      s = n(148),
      a = n(225),
      y = n(22),
      v = n(102).fastKey,
      r = n(54),
      g = r.set,
      _ = r.getterFor;
      t.exports = {
        getConstructor: function (t, n, r, o) {
          function i(t, e, n) {
            var r,
            o,
            i = a(t),
            s = u(t, e);
            return s ? s.value = n : (i.last = s = {
              index: o = v(e, !0),
              key: e,
              value: n,
              previous: r = i.last,
              next: void 0,
              removed: !1
            }, i.first || (i.first = s), r && (r.next = s), y ? i.size++ : t.size++, 'F' !== o && (i.index[o] = s)),
            t
          }
          var s = t(function (t, e) {
            p(t, s, n),
            g(t, {
              type: n,
              index: l(null),
              first: void 0,
              last: void 0,
              size: 0
            }),
            y || (t.size = 0),
            null != e && d(e, t[o], t, r)
          }),
          a = _(n),
          u = function (t, e) {
            var n,
            r = a(t),
            o = v(e);
            if ('F' !== o) return r.index[o];
            for (n = r.first; n; n = n.next) if (n.key == e) return n
          };
          return f(s.prototype, {
            clear: function () {
              for (var t = a(this), e = t.index, n = t.first; n; ) n.removed = !0,
              n.previous && (n.previous = n.previous.next = void 0),
              delete e[n.index],
              n = n.next;
              t.first = t.last = void 0,
              y ? t.size = 0 : this.size = 0
            },
            delete : function (t) {
              var e = a(this),
              n = u(this, t);
              if (n) {
                var r = n.next,
                o = n.previous;
                delete e.index[n.index],
                n.removed = !0,
                o && (o.next = r),
                r && (r.previous = o),
                e.first == n && (e.first = r),
                e.last == n && (e.last = o),
                y ? e.size-- : this.size--
              }
              return !!n
            },
            forEach: function (t, e) {
              for (var n, r = a(this), o = h(t, 1 < arguments.length ? e : void 0, 3); n = n ? n.next : r.first; ) for (o(n.value, n.key, this); n && n.removed; ) n = n.previous
            },
            has: function (t) {
              return !!u(this, t)
            }
          }),
          f(s.prototype, r ? {
            get: function (t) {
              var e = u(this, t);
              return e && e.value
            },
            set: function (t, e) {
              return i(this, 0 === t ? 0 : t, e)
            }
          }
           : {
            add: function (t) {
              return i(this, t = 0 === t ? 0 : t, t)
            }
          }),
          y && c(s.prototype, 'size', {
            get: function () {
              return a(this).size
            }
          }),
          s
        },
        setStrong: function (t, e, n) {
          var r = e + ' Iterator',
          o = _(e),
          i = _(r);
          s(t, e, function (t, e) {
            g(this, {
              type: r,
              target: t,
              state: o(t),
              kind: e,
              last: void 0
            })
          }, function () {
            for (var t = i(this), e = t.kind, n = t.last; n && n.removed; ) n = n.previous;
            return t.target && (t.last = n = n ? n.next : t.state.first) ? 'keys' == e ? {
              value: n.key,
              done: !1
            }
             : 'values' == e ? {
              value: n.value,
              done: !1
            }
             : {
              value: [
                n.key,
                n.value
              ],
              done: !1
            }
             : {
              value: t.target = void 0,
              done: !0
            }
          }, n ? 'entries' : 'values', !n, !0),
          a(e)
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(38),
      o = n(41),
      i = n(9),
      s = n(22),
      a = i('species');
      t.exports = function (t) {
        var e = r(t),
        n = o.f;
        s && e && !e[a] && n(e, a, {
          configurable: !0,
          get: function () {
            return this
          }
        })
      }
    },
    function (t, e, n) {
      t.exports = n(365)
    },
    function (t, e, n) {
      t.exports = n(374)
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols
    },
    function (t, e, n) {
      n(380);
      var r = n(3).Object,
      o = t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n)
      };
      r.defineProperty.sham && (o.sham = !0)
    },
    function (t, e, n) {
      n(56) ('Int32', 4, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      n(56) ('Uint16', 2, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      var u = n(68),
      c = n(69);
      t.exports = function (a) {
        return function (t, e) {
          var n,
          r,
          o = String(c(t)),
          i = u(e),
          s = o.length;
          return i < 0 || s <= i ? a ? '' : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === s || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? a ? o.charAt(i) : n : a ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
      }
    },
    function (t, e, n) {
      n(234),
      n(64),
      n(55);
      var r = n(134);
      t.exports = r.f('iterator')
    },
    function (t, e, n) {
      n(17) ('iterator')
    },
    function (t, e, n) {
      n(187),
      n(105),
      n(392),
      n(394),
      n(395),
      n(396),
      n(397),
      n(234),
      n(398),
      n(399),
      n(400),
      n(401),
      n(237),
      n(402),
      n(403),
      n(404),
      n(405),
      n(406),
      n(407);
      var r = n(3);
      t.exports = r.Symbol
    },
    function (t, e, n) {
      var r = n(200),
      o = n(150).concat('length', 'prototype');
      e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, o)
      }
    },
    function (t, e, n) {
      n(17) ('species')
    },
    function (t, e, n) {
      var r = n(414),
      o = n(423),
      i = n(424),
      s = n(425);
      t.exports = {
        numberToLeBytes: r,
        numberFromLeBytes: o,
        hexadecimalToUint8Array: i,
        uint8ArrayToHexadecimal: s
      }
    },
    function (t, e, n) {
      function r(n) {
        return function (t) {
          var e = String(o(t));
          return 1 & n && (e = e.replace(s, '')),
          2 & n && (e = e.replace(a, '')),
          e
        }
      }
      var o = n(93),
      i = '[' + n(170) + ']',
      s = RegExp('^' + i + i + '*'),
      a = RegExp(i + i + '*$');
      t.exports = {
        start: r(1),
        end: r(2),
        trim: r(3)
      }
    },
    function (t, e, n) {
      var r = n(426),
      o = n(186),
      i = n(652),
      s = n(112).calculateRawTxHash,
      a = n(303).VotingState,
      u = n(35),
      c = n(665),
      l = c.createVoting,
      f = c.registerVoters,
      h = c.stopRegistration,
      p = c.revokeVoterParticipation,
      d = c.issueBallot,
      y = c.addVoterKey,
      v = c.storeBallot,
      g = c.stopVoting,
      _ = c.publishDecryptionKey,
      m = c.decryptBallot,
      b = c.finalizeVoting,
      w = c.finalizeVotingWithResults,
      x = n(678),
      O = x.getCryptoSystemSettings,
      S = x.getBallotsConfig,
      k = x.getVotingState,
      E = x.getRegisteredVotersAmount,
      P = x.getVoterInfo,
      A = x.getIssuedBallotsAmount,
      j = x.getStoredBallotsAmount,
      T = x.getDecryptionStatistics,
      B = x.getBallotByIndex,
      R = x.getBallotByStoreTxHash,
      L = x.getBallotsByStoreTxHashes,
      I = x.getInvalidBallots,
      N = x.getVotingResults,
      C = n(680).getTransactionInfo,
      U = n(681),
      M = n(36),
      H = n(299),
      D = H.BadTransactionError,
      V = H.ContractLogicError,
      F = H.RequestError,
      K = H.blockchainErrors;
      t.exports = {
        BlockchainConnector: r,
        ReadRequest: o,
        AccountBuilder: i,
        RawTransactionRequest: U,
        TransactionRequest: M,
        enums: {
          VotingState: a
        },
        transactions: {
          createVoting: l,
          registerVoters: f,
          stopRegistration: h,
          revokeVoterParticipation: p,
          issueBallot: d,
          addVoterKey: y,
          storeBallot: v,
          stopVoting: g,
          publishDecryptionKey: _,
          decryptBallot: m,
          finalizeVoting: b,
          finalizeVotingWithResults: w
        },
        requests: {
          getCryptoSystemSettings: O,
          getBallotsConfig: S,
          getVotingState: k,
          getRegisteredVotersAmount: E,
          getVoterInfo: P,
          getIssuedBallotsAmount: A,
          getStoredBallotsAmount: j,
          getDecryptionStatistics: T,
          getBallotByIndex: B,
          getBallotByStoreTxHash: R,
          getBallotsByStoreTxHashes: L,
          getInvalidBallots: I,
          getVotingResults: N
        },
        systemRequests: {
          getTransactionInfo: C
        },
        util: {
          calculateRawTxHash: s
        },
        errors: {
          BadTransactionError: D,
          ContractLogicError: V,
          RequestError: F,
          blockchainErrors: K
        },
        proto: u
      }
    },
    function (t, e, n) {
      var r = n(11);
      t.exports = r.Promise
    },
    function (t, e, n) {
      function r(t) {
        if (S.hasOwnProperty(t)) {
          var e = S[t];
          delete S[t],
          e()
        }
      }
      function o(t) {
        return function () {
          r(t)
        }
      }
      function i(t) {
        r(t.data)
      }
      function s(t) {
        l.postMessage(t + '', g.protocol + '//' + g.host)
      }
      var a,
      u,
      c,
      l = n(11),
      f = n(7),
      h = n(63),
      p = n(24),
      d = n(202),
      y = n(142),
      v = n(243),
      g = l.location,
      _ = l.setImmediate,
      m = l.clearImmediate,
      b = l.process,
      w = l.MessageChannel,
      x = l.Dispatch,
      O = 0,
      S = {
      },
      k = 'onreadystatechange';
      _ && m || (_ = function (t) {
        for (var e = [
        ], n = 1; n < arguments.length; ) e.push(arguments[n++]);
        return S[++O] = function () {
          ('function' == typeof t ? t : Function(t)).apply(void 0, e)
        },
        a(O),
        O
      }, m = function (t) {
        delete S[t]
      }, 'process' == h(b) ? a = function (t) {
        b.nextTick(o(t))
      }
       : x && x.now ? a = function (t) {
        x.now(o(t))
      }
       : w && !v ? (c = (u = new w).port2, u.port1.onmessage = i, a = p(c.postMessage, c, 1)) : !l.addEventListener || 'function' != typeof postMessage || l.importScripts || f(s) ? a = k in y('script') ? function (t) {
        d.appendChild(y('script')) [k] = function () {
          d.removeChild(this),
          r(t)
        }
      }
       : function (t) {
        setTimeout(o(t), 0)
      }
       : (a = s, l.addEventListener('message', i, !1))),
      t.exports = {
        set: _,
        clear: m
      }
    },
    function (t, e, n) {
      var r = n(147);
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
    },
    function (t, e, n) {
      var r = n(5),
      o = n(12),
      i = n(171);
      t.exports = function (t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve) (e),
        n.promise
      }
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return {
            error: !1,
            value: t()
          }
        } catch (t) {
          return {
            error: !0,
            value: t
          }
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(232) (!0);
      n(221) (String, 'String', function (t) {
        this._t = String(t),
        this._i = 0
      }, function () {
        var t,
        e = this._t,
        n = this._i;
        return n >= e.length ? {
          value: void 0,
          done: !0
        }
         : (t = r(e, n), this._i += t.length, {
          value: t,
          done: !1
        })
      })
    },
    function (t, e, n) {
      t.exports = n(439)
    },
    function (t, e, n) {
      n(444);
      var r = n(3);
      t.exports = r.Object.getPrototypeOf
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (n, r) {
        return function () {
          for (var t = new Array(arguments.length), e = 0; e < t.length; e++) t[e] = arguments[e];
          return n.apply(r, t)
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(14),
      a = n(28),
      u = n(109),
      c = n(1);
      n(4),
      n(2),
      n(33);
      var l = n(32);
      function f(t) {
        return encodeURIComponent(t).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']')
      }
      t.exports = function (t, e, n) {
        if (!e) return t;
        var r;
        if (n) r = n(e);
         else if (l.isURLSearchParams(e)) r = e.toString();
         else {
          var o = [
          ];
          c(l).call(l, e, function (t, e) {
            null != t && (l.isArray(t) ? e += '[]' : t = [
              t
            ], c(l).call(l, t, function (t) {
              l.isDate(t) ? t = t.toISOString() : l.isObject(t) && (t = u(t)),
              o.push(f(e) + '=' + f(t))
            }))
          }),
          r = o.join('&')
        }
        if (r) {
          var i = a(t).call(t, '#');
          - 1 !== i && (t = s(t).call(t, 0, i)),
          t += ( - 1 === a(t).call(t, '?') ? '?' : '&') + r
        }
        return t
      }
    },
    function (t, e, n) {
      var r = n(447),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.indexOf;
        return t === o || t instanceof Array && e === o.indexOf ? r : e
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__)
      }
    },
    function (c, t, l) {
      'use strict';
      (function (t) {
        var e = l(1),
        n = l(109);
        l(4),
        l(2);
        var r = l(32),
        o = l(452),
        i = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        function s(t, e) {
          !r.isUndefined(t) && r.isUndefined(t['Content-Type']) && (t['Content-Type'] = e)
        }
        var a,
        u = {
          adapter: (('undefined' != typeof XMLHttpRequest || void 0 !== t && '[object process]' === Object.prototype.toString.call(t)) && (a = l(254)), a),
          transformRequest: [
            function (t, e) {
              return o(e, 'Accept'),
              o(e, 'Content-Type'),
              r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (s(e, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString()) : r.isObject(t) ? (s(e, 'application/json;charset=utf-8'), n(t)) : t
            }
          ],
          transformResponse: [
            function (t) {
              if ('string' == typeof t) try {
                t = JSON.parse(t)
              } catch (t) {
              }
              return t
            }
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: - 1,
          maxBodyLength: - 1,
          validateStatus: function (t) {
            return 200 <= t && t < 300
          }
        };
        u.headers = {
          common: {
            Accept: 'application/json, text/plain, */*'
          }
        },
        e(r).call(r, [
          'delete',
          'get',
          'head'
        ], function (t) {
          u.headers[t] = {
          }
        }),
        e(r).call(r, [
          'post',
          'put',
          'patch'
        ], function (t) {
          u.headers[t] = r.merge(i)
        }),
        c.exports = u
      }).call(this, l(165))
    },
    function (t, e, n) {
      'use strict';
      var l = n(1),
      f = n(28),
      r = n(23),
      h = n(32),
      p = n(453),
      d = n(455),
      y = n(250),
      v = n(460),
      g = n(463),
      _ = n(469),
      m = n(255);
      t.exports = function (c) {
        return new r(function (r, o) {
          var n = c.data,
          i = c.headers;
          h.isFormData(n) && delete i['Content-Type'];
          var s = new XMLHttpRequest;
          if (c.auth) {
            var t = c.auth.username || '',
            e = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : '';
            i.Authorization = 'Basic ' + btoa(t + ':' + e)
          }
          var a = v(c.baseURL, c.url);
          if (s.open(c.method.toUpperCase(), y(a, c.params, c.paramsSerializer), !0), s.timeout = c.timeout, s.onreadystatechange = function () {
            var t;
            if (s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === f(t = s.responseURL).call(t, 'file:'))) {
              var e = 'getAllResponseHeaders' in s ? g(s.getAllResponseHeaders()) : null,
              n = {
                data: c.responseType && 'text' !== c.responseType ? s.response : s.responseText,
                status: s.status,
                statusText: s.statusText,
                headers: e,
                config: c,
                request: s
              };
              p(r, o, n),
              s = null
            }
          }, s.onabort = function () {
            s && (o(m('Request aborted', c, 'ECONNABORTED', s)), s = null)
          }, s.onerror = function () {
            o(m('Network Error', c, null, s)),
            s = null
          }, s.ontimeout = function () {
            var t = 'timeout of ' + c.timeout + 'ms exceeded';
            c.timeoutErrorMessage && (t = c.timeoutErrorMessage),
            o(m(t, c, 'ECONNABORTED', s)),
            s = null
          }, h.isStandardBrowserEnv()) {
            var u = (c.withCredentials || _(a)) && c.xsrfCookieName ? d.read(c.xsrfCookieName) : void 0;
            u && (i[c.xsrfHeaderName] = u)
          }
          if ('setRequestHeader' in s && l(h).call(h, i, function (t, e) {
            void 0 === n && 'content-type' === e.toLowerCase() ? delete i[e] : s.setRequestHeader(e, t)
          }), h.isUndefined(c.withCredentials) || (s.withCredentials = !!c.withCredentials), c.responseType) try {
            s.responseType = c.responseType
          } catch (t) {
            if ('json' !== c.responseType) throw t
          }
          'function' == typeof c.onDownloadProgress && s.addEventListener('progress', c.onDownloadProgress),
          'function' == typeof c.onUploadProgress && s.upload && s.upload.addEventListener('progress', c.onUploadProgress),
          c.cancelToken && c.cancelToken.promise.then(function (t) {
            s && (s.abort(), o(t), s = null)
          }),
          n = n || null,
          s.send(n)
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(454);
      t.exports = function (t, e, n, r, o) {
        var i = new Error(t);
        return s(i, e, n, r, o)
      }
    },
    function (t, e, n) {
      t.exports = n(456)
    },
    function (t, e, n) {
      var r = n(30),
      i = n(258),
      o = n(57).f,
      s = n(126).f,
      a = n(167),
      u = n(131),
      c = r.RegExp,
      l = c,
      f = c.prototype,
      h = /a/g,
      p = /a/g,
      d = new c(h) !== h;
      if (n(39) && (!d || n(29) (function () {
        return p[n(18) ('match')] = !1,
        c(h) != h || c(p) == p || '/a/i' != c(h, 'i')
      }))) {
        c = function (t, e) {
          var n = this instanceof c,
          r = a(t),
          o = void 0 === e;
          return !n && r && t.constructor === c && o ? t : i(d ? new l(r && !o ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && o ? u.call(t) : e), n ? this : f, c)
        };
        function y(e) {
          e in c || o(c, e, {
            configurable: !0,
            get: function () {
              return l[e]
            },
            set: function (t) {
              l[e] = t
            }
          })
        }
        for (var v = s(l), g = 0; v.length > g; ) y(v[g++]);
        (f.constructor = c).prototype = f,
        n(58) (r, 'RegExp', c)
      }
      n(222) ('RegExp')
    },
    function (t, e, n) {
      var i = n(61),
      s = n(459).set;
      t.exports = function (t, e, n) {
        var r,
        o = e.constructor;
        return o !== n && 'function' == typeof o && (r = o.prototype) !== n.prototype && i(r) && s && s(t, r),
        t
      }
    },
    function (t, e, n) {
      'use strict';
      var u = n(43),
      c = n(470),
      l = n(132);
      n(133) ('search', 1, function (r, o, s, a) {
        return [function (t) {
          var e = r(this),
          n = null == t ? void 0 : t[o];
          return void 0 !== n ? n.call(t, e) : new RegExp(t) [o](String(e))
        },
        function (t) {
          var e = a(s, t, this);
          if (e.done) return e.value;
          var n = u(t),
          r = String(this),
          o = n.lastIndex;
          c(o, 0) || (n.lastIndex = 0);
          var i = l(n, r);
          return c(n.lastIndex, o) || (n.lastIndex = o),
          null === i ? - 1 : i.index
        }
        ]
      })
    },
    function (t, e, n) {
      'use strict';
      var y = n(28),
      v = n(46),
      g = n(175),
      _ = n(25),
      m = n(1),
      b = n(14),
      w = n(32);
      t.exports = function (e, n) {
        var t,
        r,
        o,
        i;
        n = n || {
        };
        var s = {
        },
        a = [
          'url',
          'method',
          'data'
        ],
        u = [
          'headers',
          'auth',
          'proxy',
          'params'
        ],
        c = [
          'baseURL',
          'transformRequest',
          'transformResponse',
          'paramsSerializer',
          'timeout',
          'timeoutMessage',
          'withCredentials',
          'adapter',
          'responseType',
          'xsrfCookieName',
          'xsrfHeaderName',
          'onUploadProgress',
          'onDownloadProgress',
          'decompress',
          'maxContentLength',
          'maxBodyLength',
          'maxRedirects',
          'transport',
          'httpAgent',
          'httpsAgent',
          'cancelToken',
          'socketPath',
          'responseEncoding'
        ],
        l = [
          'validateStatus'
        ];
        function f(t, e) {
          return w.isPlainObject(t) && w.isPlainObject(e) ? w.merge(t, e) : w.isPlainObject(e) ? w.merge({
          }, e) : w.isArray(e) ? b(e).call(e) : e
        }
        function h(t) {
          w.isUndefined(n[t]) ? w.isUndefined(e[t]) || (s[t] = f(void 0, e[t])) : s[t] = f(e[t], n[t])
        }
        m(w).call(w, a, function (t) {
          w.isUndefined(n[t]) || (s[t] = f(void 0, n[t]))
        }),
        m(w).call(w, u, h),
        m(w).call(w, c, function (t) {
          w.isUndefined(n[t]) ? w.isUndefined(e[t]) || (s[t] = f(void 0, e[t])) : s[t] = f(void 0, n[t])
        }),
        m(w).call(w, l, function (t) {
          t in n ? s[t] = f(e[t], n[t]) : t in e && (s[t] = f(void 0, e[t]))
        });
        var p = _(t = _(r = _(a).call(a, u)).call(r, c)).call(t, l),
        d = g(o = _(i = v(e)).call(i, v(n))).call(o, function (t) {
          return - 1 === y(p).call(p, t)
        });
        return m(w).call(w, d, h),
        s
      }
    },
    function (t, e, n) {
      'use strict';
      function r(t) {
        this.message = t
      }
      n(4),
      n(2),
      r.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '')
      },
      r.prototype.__CANCEL__ = !0,
      t.exports = r
    },
    function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      s,
      a = n(72),
      u = n(73),
      c = n(46),
      l = n(1),
      f = n(10),
      h = n(52),
      p = n(13),
      d = n(40);
      function y(t) {
        return (y = 'function' == typeof d && 'symbol' === p(h) ? function (t) {
          return p(t)
        }
         : function (t) {
          return t && 'function' == typeof d && t.constructor === d && t !== d.prototype ? 'symbol' : p(t)
        }) (t)
      }
      f(e, '__esModule', {
        value: !0
      });
      var v = {
        protocol: !0
      };
      e.protocol = void 0;
      var g = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== y(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = x();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = f && a;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? a(t, o) : null;
          i && (i.get || i.set) ? f(n, o, i) : n[o] = t[o]
        }
        n.default = t,
        e && e.set(t, n);
        return n
      }(n(136));
      e.protocol = g;
      var _ = n(277);
      l(r = c(_)).call(r, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
          enumerable: !0,
          get: function () {
            return _[t]
          }
        }))
      });
      var m = n(178);
      l(o = c(m)).call(o, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
          enumerable: !0,
          get: function () {
            return m[t]
          }
        }))
      });
      var b = n(76);
      l(i = c(b)).call(i, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
          enumerable: !0,
          get: function () {
            return b[t]
          }
        }))
      });
      var w = n(140);
      function x() {
        if ('function' != typeof u) return null;
        var t = new u;
        return x = function () {
          return t
        },
        t
      }
      l(s = c(w)).call(s, function (t) {
        'default' !== t && '__esModule' !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
          enumerable: !0,
          get: function () {
            return w[t]
          }
        }))
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(21);
      t.exports = h;
      var o,
      i = n(74),
      s = i.LongBits,
      a = i.base64,
      u = i.utf8;
      function c(t, e, n) {
        this.fn = t,
        this.len = e,
        this.next = void 0,
        this.val = n
      }
      function l() {
      }
      function f(t) {
        this.head = t.head,
        this.tail = t.tail,
        this.len = t.len,
        this.next = t.states
      }
      function h() {
        this.len = 0,
        this.head = new c(l, 0, 0),
        this.tail = this.head,
        this.states = null
      }
      function p(t, e, n) {
        e[n] = 255 & t
      }
      function d(t, e) {
        this.len = t,
        this.next = void 0,
        this.val = e
      }
      function y(t, e, n) {
        for (; t.hi; ) e[n++] = 127 & t.lo | 128,
        t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0,
        t.hi >>>= 7;
        for (; 127 < t.lo; ) e[n++] = 127 & t.lo | 128,
        t.lo = t.lo >>> 7;
        e[n++] = t.lo
      }
      function v(t, e, n) {
        e[n] = 255 & t,
        e[n + 1] = t >>> 8 & 255,
        e[n + 2] = t >>> 16 & 255,
        e[n + 3] = t >>> 24
      }
      h.create = i.Buffer ? function () {
        return (h.create = function () {
          return new o
        }) ()
      }
       : function () {
        return new h
      },
      h.alloc = function (t) {
        return new i.Array(t)
      },
      i.Array !== Array && (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)),
      h.prototype._push = function (t, e, n) {
        return this.tail = this.tail.next = new c(t, e, n),
        this.len += e,
        this
      },
      (d.prototype = r(c.prototype)).fn = function (t, e, n) {
        for (; 127 < t; ) e[n++] = 127 & t | 128,
        t >>>= 7;
        e[n] = t
      },
      h.prototype.uint32 = function (t) {
        return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len,
        this
      },
      h.prototype.int32 = function (t) {
        return t < 0 ? this._push(y, 10, s.fromNumber(t)) : this.uint32(t)
      },
      h.prototype.sint32 = function (t) {
        return this.uint32((t << 1 ^ t >> 31) >>> 0)
      },
      h.prototype.int64 = h.prototype.uint64 = function (t) {
        var e = s.from(t);
        return this._push(y, e.length(), e)
      },
      h.prototype.sint64 = function (t) {
        var e = s.from(t).zzEncode();
        return this._push(y, e.length(), e)
      },
      h.prototype.bool = function (t) {
        return this._push(p, 1, t ? 1 : 0)
      },
      h.prototype.sfixed32 = h.prototype.fixed32 = function (t) {
        return this._push(v, 4, t >>> 0)
      },
      h.prototype.sfixed64 = h.prototype.fixed64 = function (t) {
        var e = s.from(t);
        return this._push(v, 4, e.lo)._push(v, 4, e.hi)
      },
      h.prototype.float = function (t) {
        return this._push(i.float.writeFloatLE, 4, t)
      },
      h.prototype.double = function (t) {
        return this._push(i.float.writeDoubleLE, 8, t)
      };
      var g = i.Array.prototype.set ? function (t, e, n) {
        e.set(t, n)
      }
       : function (t, e, n) {
        for (var r = 0; r < t.length; ++r) e[n + r] = t[r]
      };
      h.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var n = h.alloc(e = a.length(t));
          a.decode(t, n, 0),
          t = n
        }
        return this.uint32(e)._push(g, e, t)
      },
      h.prototype.string = function (t) {
        var e = u.length(t);
        return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0)
      },
      h.prototype.fork = function () {
        return this.states = new f(this),
        this.head = this.tail = new c(l, 0, 0),
        this.len = 0,
        this
      },
      h.prototype.reset = function () {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(l, 0, 0), this.len = 0),
        this
      },
      h.prototype.ldelim = function () {
        var t = this.head,
        e = this.tail,
        n = this.len;
        return this.reset().uint32(n),
        n && (this.tail.next = t.next, this.tail = e, this.len += n),
        this
      },
      h.prototype.finish = function () {
        for (var t = this.head.next, e = this.constructor.alloc(this.len), n = 0; t; ) t.fn(t.val, e, n),
        n += t.len,
        t = t.next;
        return e
      },
      h._configure = function (t) {
        o = t
      }
    },
    function (t, e, n) {
      n(499);
      var r = n(3).Object;
      t.exports = function (t, e) {
        return r.create(t, e)
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(23);
      t.exports = function (t, e) {
        var n = new Array(arguments.length - 1),
        i = 0,
        r = 2,
        s = !0;
        for (; r < arguments.length; ) n[i++] = arguments[r++];
        return new o(function (r, o) {
          n[i] = function (t) {
            if (s) if (s = !1, t) o(t);
             else {
              for (var e = new Array(arguments.length - 1), n = 0; n < e.length; ) e[n++] = arguments[n];
              r.apply(null, e)
            }
          };
          try {
            t.apply(e || null, n)
          } catch (t) {
            s && (s = !1, o(t))
          }
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var c = n(14),
      r = e;
      r.length = function (t) {
        var e = t.length;
        if (!e) return 0;
        for (var n = 0; 1 < --e % 4 && '=' === t.charAt(e); ) ++n;
        return Math.ceil(3 * t.length) / 4 - n
      };
      for (var l = new Array(64), u = new Array(123), o = 0; o < 64; ) u[l[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++;
      r.encode = function (t, e, n) {
        for (var r, o = null, i = [
        ], s = 0, a = 0; e < n; ) {
          var u = t[e++];
          switch (a) {
            case 0:
              i[s++] = l[u >> 2],
              r = (3 & u) << 4,
              a = 1;
              break;
            case 1:
              i[s++] = l[r | u >> 4],
              r = (15 & u) << 2,
              a = 2;
              break;
            case 2:
              i[s++] = l[r | u >> 6],
              i[s++] = l[63 & u],
              a = 0
          }
          8191 < s && ((o = o || [
          ]).push(String.fromCharCode.apply(String, i)), s = 0)
        }
        return a && (i[s++] = l[r], i[s++] = 61, 1 === a && (i[s++] = 61)),
        o ? (s && o.push(String.fromCharCode.apply(String, c(i).call(i, 0, s))), o.join('')) : String.fromCharCode.apply(String, c(i).call(i, 0, s))
      };
      var f = 'invalid encoding';
      r.decode = function (t, e, n) {
        for (var r, o = n, i = 0, s = 0; s < t.length; ) {
          var a = t.charCodeAt(s++);
          if (61 === a && 1 < i) break;
          if (void 0 === (a = u[a])) throw Error(f);
          switch (i) {
            case 0:
              r = a,
              i = 1;
              break;
            case 1:
              e[n++] = r << 2 | (48 & a) >> 4,
              r = a,
              i = 2;
              break;
            case 2:
              e[n++] = (15 & r) << 4 | (60 & a) >> 2,
              r = a,
              i = 3;
              break;
            case 3:
              e[n++] = (3 & r) << 6 | a,
              i = 0
          }
        }
        if (1 === i) throw Error(f);
        return n - o
      },
      r.test = function (t) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(268);
      function r() {
        this._listeners = {
        }
      }(t.exports = r).prototype.on = function (t, e, n) {
        return (this._listeners[t] || (this._listeners[t] = [
        ])).push({
          fn: e,
          ctx: n || this
        }),
        this
      },
      r.prototype.off = function (t, e) {
        if (void 0 === t) this._listeners = {
        };
         else if (void 0 === e) this._listeners[t] = [
        ];
         else for (var n = this._listeners[t], r = 0; r < n.length; ) n[r].fn === e ? o(n).call(n, r, 1) : ++r;
        return this
      },
      r.prototype.emit = function (t) {
        var e = this._listeners[t];
        if (e) {
          for (var n = [
          ], r = 1; r < arguments.length; ) n.push(arguments[r++]);
          for (r = 0; r < e.length; ) e[r].fn.apply(e[r++].ctx, n)
        }
        return this
      }
    },
    function (t, e, n) {
      t.exports = n(503)
    },
    function (t, e, n) {
      'use strict';
      n(164);
      var m = n(139);
      function r(t) {
        function e(t, e, n, r) {
          var o = e < 0 ? 1 : 0;
          if (o && (e = - e), 0 === e) t(0 < 1 / e ? 0 : 2147483648, n, r);
           else if (isNaN(e)) t(2143289344, n, r);
           else if (3.4028234663852886e+38 < e) t((o << 31 | 2139095040) >>> 0, n, r);
           else if (e < 1.1754943508222875e-38) t((o << 31 | Math.round(e / 1.401298464324817e-45)) >>> 0, n, r);
           else {
            var i = Math.floor(Math.log(e) / Math.LN2);
            t((o << 31 | i + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, - i) * 8388608)) >>> 0, n, r)
          }
        }
        function n(t, e, n) {
          var r = t(e, n),
          o = 2 * (r >> 31) + 1,
          i = r >>> 23 & 255,
          s = 8388607 & r;
          return 255 == i ? s ? NaN : 1 / 0 * o : 0 == i ? 1.401298464324817e-45 * o * s : o * Math.pow(2, i - 150) * (8388608 + s)
        }
        function r(t, e, n) {
          a[0] = t,
          e[n] = u[0],
          e[n + 1] = u[1],
          e[n + 2] = u[2],
          e[n + 3] = u[3]
        }
        function o(t, e, n) {
          a[0] = t,
          e[n] = u[3],
          e[n + 1] = u[2],
          e[n + 2] = u[1],
          e[n + 3] = u[0]
        }
        function i(t, e) {
          return u[0] = t[e],
          u[1] = t[e + 1],
          u[2] = t[e + 2],
          u[3] = t[e + 3],
          a[0]
        }
        function s(t, e) {
          return u[3] = t[e],
          u[2] = t[e + 1],
          u[1] = t[e + 2],
          u[0] = t[e + 3],
          a[0]
        }
        var a,
        u,
        c,
        l,
        f,
        h;
        function p(t, e, n, r, o, i) {
          var s = r < 0 ? 1 : 0;
          if (s && (r = - r), 0 === r) t(0, o, i + e),
          t(0 < 1 / r ? 0 : 2147483648, o, i + n);
           else if (isNaN(r)) t(0, o, i + e),
          t(2146959360, o, i + n);
           else if (1.7976931348623157e+308 < r) t(0, o, i + e),
          t((s << 31 | 2146435072) >>> 0, o, i + n);
           else {
            var a;
            if (r < 2.2250738585072014e-308) t((a = r / 5e-324) >>> 0, o, i + e),
            t((s << 31 | a / 4294967296) >>> 0, o, i + n);
             else {
              var u = Math.floor(Math.log(r) / Math.LN2);
              1024 === u && (u = 1023),
              t(4503599627370496 * (a = r * Math.pow(2, - u)) >>> 0, o, i + e),
              t((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i + n)
            }
          }
        }
        function d(t, e, n, r, o) {
          var i = t(r, o + e),
          s = t(r, o + n),
          a = 2 * (s >> 31) + 1,
          u = s >>> 20 & 2047,
          c = 4294967296 * (1048575 & s) + i;
          return 2047 == u ? c ? NaN : 1 / 0 * a : 0 == u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496)
        }
        function y(t, e, n) {
          l[0] = t,
          e[n] = f[0],
          e[n + 1] = f[1],
          e[n + 2] = f[2],
          e[n + 3] = f[3],
          e[n + 4] = f[4],
          e[n + 5] = f[5],
          e[n + 6] = f[6],
          e[n + 7] = f[7]
        }
        function v(t, e, n) {
          l[0] = t,
          e[n] = f[7],
          e[n + 1] = f[6],
          e[n + 2] = f[5],
          e[n + 3] = f[4],
          e[n + 4] = f[3],
          e[n + 5] = f[2],
          e[n + 6] = f[1],
          e[n + 7] = f[0]
        }
        function g(t, e) {
          return f[0] = t[e],
          f[1] = t[e + 1],
          f[2] = t[e + 2],
          f[3] = t[e + 3],
          f[4] = t[e + 4],
          f[5] = t[e + 5],
          f[6] = t[e + 6],
          f[7] = t[e + 7],
          l[0]
        }
        function _(t, e) {
          return f[7] = t[e],
          f[6] = t[e + 1],
          f[5] = t[e + 2],
          f[4] = t[e + 3],
          f[3] = t[e + 4],
          f[2] = t[e + 5],
          f[1] = t[e + 6],
          f[0] = t[e + 7],
          l[0]
        }
        return 'undefined' != typeof Float32Array ? (a = new Float32Array([ - 0]), u = new Uint8Array(a.buffer), c = 128 === u[3], t.writeFloatLE = c ? r : o, t.writeFloatBE = c ? o : r, t.readFloatLE = c ? i : s, t.readFloatBE = c ? s : i) : (t.writeFloatLE = m(e).call(e, null, b), t.writeFloatBE = m(e).call(e, null, w), t.readFloatLE = m(n).call(n, null, x), t.readFloatBE = m(n).call(n, null, O)),
        'undefined' != typeof Float64Array ? (l = new Float64Array([ - 0]), f = new Uint8Array(l.buffer), h = 128 === f[7], t.writeDoubleLE = h ? y : v, t.writeDoubleBE = h ? v : y, t.readDoubleLE = h ? g : _, t.readDoubleBE = h ? _ : g) : (t.writeDoubleLE = m(p).call(p, null, b, 0, 4), t.writeDoubleBE = m(p).call(p, null, w, 4, 0), t.readDoubleLE = m(d).call(d, null, x, 0, 4), t.readDoubleBE = m(d).call(d, null, O, 4, 0)),
        t
      }
      function b(t, e, n) {
        e[n] = 255 & t,
        e[n + 1] = t >>> 8 & 255,
        e[n + 2] = t >>> 16 & 255,
        e[n + 3] = t >>> 24
      }
      function w(t, e, n) {
        e[n] = t >>> 24,
        e[n + 1] = t >>> 16 & 255,
        e[n + 2] = t >>> 8 & 255,
        e[n + 3] = 255 & t
      }
      function x(t, e) {
        return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
      }
      function O(t, e) {
        return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
      }
      n(6),
      n(272),
      t.exports = r(r)
    },
    function (t, e, n) {
      var r = n(508),
      o = Function.prototype;
      t.exports = function (t) {
        var e = t.bind;
        return t === o || t instanceof Function && e === o.bind ? r : e
      }
    },
    function (t, e, n) {
      'use strict';
      var i = n(15),
      s = n(12),
      a = [
      ].slice,
      u = {
      };
      t.exports = Function.bind || function (e) {
        var n = i(this),
        r = a.call(arguments, 1),
        o = function () {
          var t = r.concat(a.call(arguments));
          return this instanceof o ? function (t, e, n) {
            if (!(e in u)) {
              for (var r = [
              ], o = 0; o < e; o++) r[o] = 'a[' + o + ']';
              u[e] = Function('C,a', 'return new C(' + r.join(',') + ')')
            }
            return u[e](t, n)
          }(n, t.length, t) : n.apply(e, t)
        };
        return s(n.prototype) && (o.prototype = n.prototype),
        o
      }
    },
    function (t, e, n) {
      n(56) ('Float32', 4, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (module, exports, __webpack_require__) {
      'use strict';
      var _Object$keys = __webpack_require__(46);
      function inquire(moduleName) {
        try {
          var mod = eval('quire'.replace(/^/, 're')) (moduleName);
          if (mod && (mod.length || _Object$keys(mod).length)) return mod
        } catch (t) {
        }
        return null
      }
      __webpack_require__(33),
      module.exports = inquire
    },
    function (t, e, n) {
      'use strict';
      var a = n(14),
      r = e;
      r.length = function (t) {
        for (var e = 0, n = 0, r = 0; r < t.length; ++r) (n = t.charCodeAt(r)) < 128 ? e += 1 : n < 2048 ? e += 2 : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, e += 4) : e += 3;
        return e
      },
      r.read = function (t, e, n) {
        if (n - e < 1) return '';
        for (var r, o = null, i = [
        ], s = 0; e < n; ) (r = t[e++]) < 128 ? i[s++] = r : 191 < r && r < 224 ? i[s++] = (31 & r) << 6 | 63 & t[e++] : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, i[s++] = 55296 + (r >> 10), i[s++] = 56320 + (1023 & r)) : i[s++] = (15 & r) << 12 | (63 & t[e++]) << 6 | 63 & t[e++],
        8191 < s && ((o = o || [
        ]).push(String.fromCharCode.apply(String, i)), s = 0);
        return o ? (s && o.push(String.fromCharCode.apply(String, a(i).call(i, 0, s))), o.join('')) : String.fromCharCode.apply(String, a(i).call(i, 0, s))
      },
      r.write = function (t, e, n) {
        for (var r, o, i = n, s = 0; s < t.length; ++s) (r = t.charCodeAt(s)) < 128 ? e[n++] = r : (r < 2048 ? e[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (o = t.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & o), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128) : e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128), e[n++] = 63 & r | 128);
        return n - i
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (n, r, t) {
        var o = t || 8192,
        i = o >>> 1,
        s = null,
        a = o;
        return function (t) {
          if (t < 1 || i < t) return n(t);
          o < a + t && (s = n(o), a = 0);
          var e = r.call(s, a, a += t);
          return 7 & a && (a = 1 + (7 | a)),
          e
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(14),
      i = n(27);
      n(6),
      t.exports = l;
      var r,
      s = n(74),
      a = s.LongBits,
      u = s.utf8;
      function c(t, e) {
        return RangeError('index out of range: ' + t.pos + ' + ' + (e || 1) + ' > ' + t.len)
      }
      function l(t) {
        this.buf = t,
        this.pos = 0,
        this.len = t.length
      }
      var f,
      h = 'undefined' != typeof Uint8Array ? function (t) {
        if (t instanceof Uint8Array || i(t)) return new l(t);
        throw Error('illegal buffer')
      }
       : function (t) {
        if (i(t)) return new l(t);
        throw Error('illegal buffer')
      };
      function p() {
        var t = new a(0, 0),
        e = 0;
        if (!(4 < this.len - this.pos)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw c(this);
            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
          }
          return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0,
          t
        }
        for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
        if (e = 0, 4 < this.len - this.pos) {
          for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        } else for (; e < 5; ++e) {
          if (this.pos >= this.len) throw c(this);
          if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        }
        throw Error('invalid varint encoding')
      }
      function d(t, e) {
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
      }
      function y() {
        if (this.pos + 8 > this.len) throw c(this, 8);
        return new a(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
      }
      l.create = s.Buffer ? function (t) {
        return (l.create = function (t) {
          return s.Buffer.isBuffer(t) ? new r(t) : h(t)
        }) (t)
      }
       : h,
      l.prototype._slice = s.Array.prototype.subarray || o(s.Array.prototype),
      l.prototype.uint32 = (f = 4294967295, function () {
        if (f = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return f;
        if ((this.pos += 5) > this.len) throw this.pos = this.len,
        c(this, 10);
        return f
      }),
      l.prototype.int32 = function () {
        return 0 | this.uint32()
      },
      l.prototype.sint32 = function () {
        var t = this.uint32();
        return t >>> 1 ^ - (1 & t) | 0
      },
      l.prototype.bool = function () {
        return 0 !== this.uint32()
      },
      l.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        return d(this.buf, this.pos += 4)
      },
      l.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        return 0 | d(this.buf, this.pos += 4)
      },
      l.prototype.float = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        var t = s.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4,
        t
      },
      l.prototype.double = function () {
        if (this.pos + 8 > this.len) throw c(this, 4);
        var t = s.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8,
        t
      },
      l.prototype.bytes = function () {
        var t,
        e = this.uint32(),
        n = this.pos,
        r = this.pos + e;
        if (r > this.len) throw c(this, e);
        return this.pos += e,
        i(this.buf) ? o(t = this.buf).call(t, n, r) : n === r ? new this.buf.constructor(0) : this._slice.call(this.buf, n, r)
      },
      l.prototype.string = function () {
        var t = this.bytes();
        return u.read(t, 0, t.length)
      },
      l.prototype.skip = function (t) {
        if ('number' == typeof t) {
          if (this.pos + t > this.len) throw c(this, t);
          this.pos += t
        } else do {
          if (this.pos >= this.len) throw c(this)
        } while (128 & this.buf[this.pos++]);
        return this
      },
      l.prototype.skipType = function (t) {
        switch (t) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            for (; 4 != (t = 7 & this.uint32()); ) this.skipType(t);
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error('invalid wire type ' + t + ' at offset ' + this.pos)
        }
        return this
      },
      l._configure = function (t) {
        r = t;
        var e = s.Long ? 'toLong' : 'toNumber';
        s.merge(l.prototype, {
          int64: function () {
            return p.call(this) [e](!1)
          },
          uint64: function () {
            return p.call(this) [e](!0)
          },
          sint64: function () {
            return p.call(this).zzDecode() [e](!1)
          },
          fixed64: function () {
            return y.call(this) [e](!0)
          },
          sfixed64: function () {
            return y.call(this) [e](!1)
          }
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(72),
      r = n(73),
      a = n(10),
      o = n(52),
      i = n(13),
      u = n(40);
      function c(t) {
        return (c = 'function' == typeof u && 'symbol' === i(o) ? function (t) {
          return i(t)
        }
         : function (t) {
          return t && 'function' == typeof u && t.constructor === u && t !== u.prototype ? 'symbol' : i(t)
        }) (t)
      }
      a(e, '__esModule', {
        value: !0
      }),
      e.newType = function (t) {
        return new d(t)
      },
      e.isType = function (t) {
        return t instanceof d
      };
      var l = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== c(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = h();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = a && s;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? s(t, o) : null;
          i && (i.get || i.set) ? a(n, o, i) : n[o] = t[o]
        }
        n.default = t,
        e && e.set(t, n);
        return n
      }(n(88)),
      f = n(179);
      function h() {
        if ('function' != typeof r) return null;
        var t = new r;
        return h = function () {
          return t
        },
        t
      }
      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          'value' in r && (r.writable = !0),
          a(t, r.key, r)
        }
      }
      var d = function () {
        function e(t) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
          }(this, e),
          this.schema = t
        }
        var t,
        n,
        r;
        return t = e,
        (n = [
          {
            key: 'serialize',
            value: function (t) {
              var e = (0, f.cleanZeroValuedFields) (t, {
              });
              return this.schema.encode(e).finish()
            }
          },
          {
            key: 'hash',
            value: function (t) {
              return l.hash(t, this)
            }
          },
          {
            key: 'sign',
            value: function (t, e) {
              return l.sign(t, e, this)
            }
          },
          {
            key: 'verifySignature',
            value: function (t, e, n) {
              return l.verifySignature(t, e, n, this)
            }
          }
        ]) && p(t.prototype, n),
        r && p(t, r),
        e
      }()
    },
    function (t, n, r) {
      (function (t) {
        var e,
        G = r(28);
        r(108);
        var Z = r(31);
        r(87),
        r(138);
        var $ = r(106);
        r(4),
        r(2);
        var Q = r(82),
        tt = r(14),
        et = r(25),
        nt = r(21),
        rt = function (u) {
          'use strict';
          var g = 10000000,
          f = 7,
          e = 9007199254740992,
          n = b(e),
          h = '0123456789abcdefghijklmnopqrstuvwxyz',
          p = 'function' == typeof BigInt;
          function d(t, e, n, r) {
            return void 0 === t ? d[0] : void 0 !== e && (10 != + e || n) ? q(t, e, n, r) : Y(t)
          }
          function y(t, e) {
            this.value = t,
            this.sign = e,
            this.isSmall = !1
          }
          function v(t) {
            this.value = t,
            this.sign = t < 0,
            this.isSmall = !0
          }
          function _(t) {
            this.value = t
          }
          function m(t) {
            return - e < t && t < e
          }
          function b(t) {
            return t < 10000000 ? [
              t
            ] : t < 100000000000000 ? [
              t % 10000000,
              Math.floor(t / 10000000)
            ] : [
              t % 10000000,
              Math.floor(t / 10000000) % 10000000,
              Math.floor(t / 100000000000000)
            ]
          }
          function w(t) {
            x(t);
            var e = t.length;
            if (e < 4 && R(t, n) < 0) switch (e) {
              case 0:
                return 0;
              case 1:
                return t[0];
              case 2:
                return t[0] + t[1] * g;
              default:
                return t[0] + (t[1] + t[2] * g) * g
            }
            return t
          }
          function x(t) {
            for (var e = t.length; 0 === t[--e]; );
            t.length = e + 1
          }
          function O(t) {
            for (var e = new Array(t), n = - 1; ++n < t; ) e[n] = 0;
            return e
          }
          function S(t) {
            return 0 < t ? Math.floor(t) : Math.ceil(t)
          }
          function r(t, e) {
            var n,
            r,
            o = t.length,
            i = e.length,
            s = new Array(o),
            a = 0,
            u = g;
            for (r = 0; r < i; r++) a = u <= (n = t[r] + e[r] + a) ? 1 : 0,
            s[r] = n - a * u;
            for (; r < o; ) a = (n = t[r] + a) === u ? 1 : 0,
            s[r++] = n - a * u;
            return 0 < a && s.push(a),
            s
          }
          function k(t, e) {
            return t.length >= e.length ? r(t, e) : r(e, t)
          }
          function o(t, e) {
            var n,
            r,
            o = t.length,
            i = new Array(o),
            s = g;
            for (r = 0; r < o; r++) n = t[r] - s + e,
            e = Math.floor(n / s),
            i[r] = n - e * s,
            e += 1;
            for (; 0 < e; ) i[r++] = e % s,
            e = Math.floor(e / s);
            return i
          }
          function E(t, e) {
            var n,
            r,
            o = t.length,
            i = e.length,
            s = new Array(o),
            a = 0,
            u = g;
            for (n = 0; n < i; n++) a = (r = t[n] - a - e[n]) < 0 ? (r += u, 1) : 0,
            s[n] = r;
            for (n = i; n < o; n++) {
              if (!((r = t[n] - a) < 0)) {
                s[n++] = r;
                break
              }
              r += u,
              s[n] = r
            }
            for (; n < o; n++) s[n] = t[n];
            return x(s),
            s
          }
          function c(t, e, n) {
            var r,
            o,
            i = t.length,
            s = new Array(i),
            a = - e,
            u = g;
            for (r = 0; r < i; r++) o = t[r] + a,
            a = Math.floor(o / u),
            o %= u,
            s[r] = o < 0 ? o + u : o;
            return 'number' == typeof (s = w(s)) ? (n && (s = - s), new v(s)) : new y(s, n)
          }
          function P(t, e) {
            var n,
            r,
            o,
            i,
            s = t.length,
            a = e.length,
            u = O(s + a),
            c = g;
            for (o = 0; o < s; ++o) {
              i = t[o];
              for (var l = 0; l < a; ++l) n = i * e[l] + u[o + l],
              r = Math.floor(n / c),
              u[o + l] = n - r * c,
              u[o + l + 1] += r
            }
            return x(u),
            u
          }
          function A(t, e) {
            var n,
            r,
            o = t.length,
            i = new Array(o),
            s = g,
            a = 0;
            for (r = 0; r < o; r++) n = t[r] * e + a,
            a = Math.floor(n / s),
            i[r] = n - a * s;
            for (; 0 < a; ) i[r++] = a % s,
            a = Math.floor(a / s);
            return i
          }
          function j(t, e) {
            for (var n = [
            ]; 0 < e--; ) n.push(0);
            return et(n).call(n, t)
          }
          function i(t, e, n) {
            return new y(t < g ? A(e, t) : P(e, b(t)), n)
          }
          function s(t) {
            var e,
            n,
            r,
            o,
            i = t.length,
            s = O(i + i),
            a = g;
            for (r = 0; r < i; r++) {
              n = 0 - (o = t[r]) * o;
              for (var u = r; u < i; u++) e = o * t[u] * 2 + s[r + u] + n,
              n = Math.floor(e / a),
              s[r + u] = e - n * a;
              s[r + i] = n
            }
            return x(s),
            s
          }
          function T(t, e) {
            var n,
            r,
            o,
            i,
            s = t.length,
            a = O(s),
            u = g;
            for (o = 0, n = s - 1; 0 <= n; --n) o = (i = o * u + t[n]) - (r = S(i / e)) * e,
            a[n] = 0 | r;
            return [a,
            0 | o]
          }
          function B(t, e) {
            var n,
            r = Y(e);
            if (p) return [new _(t.value / r.value),
            new _(t.value % r.value)];
            var o,
            i = t.value,
            s = r.value;
            if (0 === s) throw new Error('Cannot divide by zero');
            if (t.isSmall) return r.isSmall ? [
              new v(S(i / s)),
              new v(i % s)
            ] : [
              d[0],
              t
            ];
            if (r.isSmall) {
              if (1 === s) return [t,
              d[0]];
              if ( - 1 == s) return [t.negate(),
              d[0]];
              var a = Math.abs(s);
              if (a < g) {
                o = w((n = T(i, a)) [0]);
                var u = n[1];
                return t.sign && (u = - u),
                'number' == typeof o ? (t.sign !== r.sign && (o = - o), [
                  new v(o),
                  new v(u)
                ]) : [
                  new y(o, t.sign !== r.sign),
                  new v(u)
                ]
              }
              s = b(a)
            }
            var c = R(i, s);
            if ( - 1 === c) return [d[0],
            t];
            if (0 === c) return [d[t.sign === r.sign ? 1 : - 1],
            d[0]];
            o = (n = (i.length + s.length <= 200 ? function (t, e) {
              var n,
              r,
              o,
              i,
              s,
              a,
              u,
              c = t.length,
              l = e.length,
              f = g,
              h = O(e.length),
              p = e[l - 1],
              d = Math.ceil(f / (2 * p)),
              y = A(t, d),
              v = A(e, d);
              for (y.length <= c && y.push(0), v.push(0), p = v[l - 1], r = c - l; 0 <= r; r--) {
                for (n = f - 1, y[r + l] !== p && (n = Math.floor((y[r + l] * f + y[r + l - 1]) / p)), i = o = 0, a = v.length, s = 0; s < a; s++) o += n * v[s],
                u = Math.floor(o / f),
                i += y[r + s] - (o - u * f),
                o = u,
                i = i < 0 ? (y[r + s] = i + f, - 1) : (y[r + s] = i, 0);
                for (; 0 !== i; ) {
                  for (--n, s = o = 0; s < a; s++) o = (o += y[r + s] - f + v[s]) < 0 ? (y[r + s] = o + f, 0) : (y[r + s] = o, 1);
                  i += o
                }
                h[r] = n
              }
              return y = T(y, d) [0],
              [
                w(h),
                w(y)
              ]
            }
             : function (t, e) {
              for (var n, r, o, i, s, a = t.length, u = e.length, c = [
              ], l = [
              ], f = g; a; ) if (l.unshift(t[--a]), x(l), R(l, e) < 0) c.push(0);
               else {
                o = l[(r = l.length) - 1] * f + l[r - 2],
                i = e[u - 1] * f + e[u - 2],
                u < r && (o = (o + 1) * f),
                n = Math.ceil(o / i);
                do {
                  if (R(s = A(e, n), l) <= 0) break;
                  n--
                } while (n);
                c.push(n),
                l = E(l, s)
              }
              return Q(c).call(c),
              [
                w(c),
                w(l)
              ]
            }) (i, s)) [0];
            var l = t.sign !== r.sign,
            f = n[1],
            h = t.sign;
            return [o = 'number' == typeof o ? (l && (o = - o), new v(o)) : new y(o, l),
            f = 'number' == typeof f ? (h && (f = - f), new v(f)) : new y(f, h)]
          }
          function R(t, e) {
            if (t.length !== e.length) return t.length > e.length ? 1 : - 1;
            for (var n = t.length - 1; 0 <= n; n--) if (t[n] !== e[n]) return t[n] > e[n] ? 1 : - 1;
            return 0
          }
          function l(t) {
            var e = t.abs();
            return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
          }
          function L(t, e) {
            for (var n, r, o, i = t.prev(), s = i, a = 0; s.isEven(); ) s = s.divide(2),
            a++;
            t: for (r = 0; r < e.length; r++) if (!t.lesser(e[r]) && !(o = rt(e[r]).modPow(s, t)).isUnit() && !o.equals(i)) {
              for (n = a - 1; 0 != n; n--) {
                if ((o = o.square().mod(t)).isUnit()) return !1;
                if (o.equals(i)) continue t
              }
              return !1
            }
            return !0
          }
          y.prototype = nt(d.prototype),
          v.prototype = nt(d.prototype),
          _.prototype = nt(d.prototype),
          y.prototype.plus = y.prototype.add = function (t) {
            var e = Y(t);
            if (this.sign !== e.sign) return this.subtract(e.negate());
            var n = this.value,
            r = e.value;
            return e.isSmall ? new y(o(n, Math.abs(r)), this.sign) : new y(k(n, r), this.sign)
          },
          v.prototype.plus = v.prototype.add = function (t) {
            var e = Y(t),
            n = this.value;
            if (n < 0 !== e.sign) return this.subtract(e.negate());
            var r = e.value;
            if (e.isSmall) {
              if (m(n + r)) return new v(n + r);
              r = b(Math.abs(r))
            }
            return new y(o(r, Math.abs(n)), n < 0)
          },
          _.prototype.plus = _.prototype.add = function (t) {
            return new _(this.value + Y(t).value)
          },
          y.prototype.minus = y.prototype.subtract = function (t) {
            var e = Y(t);
            if (this.sign !== e.sign) return this.add(e.negate());
            var n,
            r,
            o,
            i,
            s = this.value,
            a = e.value;
            return e.isSmall ? c(s, Math.abs(a), this.sign) : (n = s, r = a, o = this.sign, 0 <= R(n, r) ? i = E(n, r) : (i = E(r, n), o = !o), 'number' == typeof (i = w(i)) ? (o && (i = - i), new v(i)) : new y(i, o))
          },
          v.prototype.minus = v.prototype.subtract = function (t) {
            var e = Y(t),
            n = this.value;
            if (n < 0 !== e.sign) return this.add(e.negate());
            var r = e.value;
            return e.isSmall ? new v(n - r) : c(r, Math.abs(n), 0 <= n)
          },
          _.prototype.minus = _.prototype.subtract = function (t) {
            return new _(this.value - Y(t).value)
          },
          y.prototype.negate = function () {
            return new y(this.value, !this.sign)
          },
          v.prototype.negate = function () {
            var t = this.sign,
            e = new v( - this.value);
            return e.sign = !t,
            e
          },
          _.prototype.negate = function () {
            return new _( - this.value)
          },
          y.prototype.abs = function () {
            return new y(this.value, !1)
          },
          v.prototype.abs = function () {
            return new v(Math.abs(this.value))
          },
          _.prototype.abs = function () {
            return new _(0 <= this.value ? this.value : - this.value)
          },
          y.prototype.times = y.prototype.multiply = function (t) {
            var e,
            n,
            r,
            o = Y(t),
            i = this.value,
            s = o.value,
            a = this.sign !== o.sign;
            if (o.isSmall) {
              if (0 === s) return d[0];
              if (1 === s) return this;
              if ( - 1 === s) return this.negate();
              if ((e = Math.abs(s)) < g) return new y(A(i, e), a);
              s = b(e)
            }
            return n = i.length,
            r = s.length,
            new y((0 < - 0.012 * n - 0.012 * r + 0.000015 * n * r ? function t(e, n) {
              var r = Math.max(e.length, n.length);
              if (r <= 30) return P(e, n);
              r = Math.ceil(r / 2);
              var o = tt(e).call(e, r),
              i = tt(e).call(e, 0, r),
              s = tt(n).call(n, r),
              a = tt(n).call(n, 0, r),
              u = t(i, a),
              c = t(o, s),
              l = t(k(i, o), k(a, s)),
              f = k(k(u, j(E(E(l, u), c), r)), j(c, 2 * r));
              return x(f),
              f
            }
             : P) (i, s), a)
          },
          v.prototype._multiplyBySmall = function (t) {
            return m(t.value * this.value) ? new v(t.value * this.value) : i(Math.abs(t.value), b(Math.abs(this.value)), this.sign !== t.sign)
          },
          y.prototype._multiplyBySmall = function (t) {
            return 0 === t.value ? d[0] : 1 === t.value ? this : - 1 === t.value ? this.negate() : i(Math.abs(t.value), this.value, this.sign !== t.sign)
          },
          v.prototype.times = v.prototype.multiply = function (t) {
            return Y(t)._multiplyBySmall(this)
          },
          _.prototype.times = _.prototype.multiply = function (t) {
            return new _(this.value * Y(t).value)
          },
          y.prototype.square = function () {
            return new y(s(this.value), !1)
          },
          v.prototype.square = function () {
            var t = this.value * this.value;
            return m(t) ? new v(t) : new y(s(b(Math.abs(this.value))), !1)
          },
          _.prototype.square = function (t) {
            return new _(this.value * this.value)
          },
          _.prototype.divmod = v.prototype.divmod = y.prototype.divmod = function (t) {
            var e = B(this, t);
            return {
              quotient: e[0],
              remainder: e[1]
            }
          },
          y.prototype.divide = function (t) {
            return B(this, t) [0]
          },
          _.prototype.over = _.prototype.divide = function (t) {
            return new _(this.value / Y(t).value)
          },
          v.prototype.over = v.prototype.divide = y.prototype.over = y.prototype.divide,
          y.prototype.mod = function (t) {
            return B(this, t) [1]
          },
          _.prototype.mod = _.prototype.remainder = function (t) {
            return new _(this.value % Y(t).value)
          },
          v.prototype.remainder = v.prototype.mod = y.prototype.remainder = y.prototype.mod,
          y.prototype.pow = function (t) {
            var e,
            n,
            r,
            o = Y(t),
            i = this.value,
            s = o.value;
            if (0 === s) return d[1];
            if (0 === i) return d[0];
            if (1 === i) return d[1];
            if ( - 1 === i) return o.isEven() ? d[1] : d[ - 1];
            if (o.sign) return d[0];
            if (!o.isSmall) throw new Error('The exponent ' + o.toString() + ' is too large.');
            if (this.isSmall && m(e = Math.pow(i, s))) return new v(S(e));
            for (n = this, r = d[1]; !0 & s && (r = r.times(n), --s), 0 !== s; ) s /= 2,
            n = n.square();
            return r
          },
          v.prototype.pow = y.prototype.pow,
          _.prototype.pow = function (t) {
            var e = Y(t),
            n = this.value,
            r = e.value,
            o = BigInt(0),
            i = BigInt(1),
            s = BigInt(2);
            if (r === o) return d[1];
            if (n === o) return d[0];
            if (n === i) return d[1];
            if (n === BigInt( - 1)) return e.isEven() ? d[1] : d[ - 1];
            if (e.isNegative()) return new _(o);
            for (var a = this, u = d[1]; (r & i) === i && (u = u.times(a), --r), r !== o; ) r /= s,
            a = a.square();
            return u
          },
          _.prototype.modPow = v.prototype.modPow = y.prototype.modPow = function (t, e) {
            if (t = Y(t), (e = Y(e)).isZero()) throw new Error('Cannot take modPow with modulus 0');
            var n = d[1],
            r = this.mod(e);
            for (t.isNegative() && (t = t.multiply(d[ - 1]), r = r.modInv(e)); t.isPositive(); ) {
              if (r.isZero()) return d[0];
              t.isOdd() && (n = n.multiply(r).mod(e)),
              t = t.divide(2),
              r = r.square().mod(e)
            }
            return n
          },
          y.prototype.compareAbs = function (t) {
            var e = Y(t),
            n = this.value,
            r = e.value;
            return e.isSmall ? 1 : R(n, r)
          },
          v.prototype.compareAbs = function (t) {
            var e = Y(t),
            n = Math.abs(this.value),
            r = e.value;
            return e.isSmall ? n === (r = Math.abs(r)) ? 0 : r < n ? 1 : - 1 : - 1
          },
          _.prototype.compareAbs = function (t) {
            var e = this.value,
            n = Y(t).value;
            return (e = 0 <= e ? e : - e) === (n = 0 <= n ? n : - n) ? 0 : n < e ? 1 : - 1
          },
          y.prototype.compareTo = y.prototype.compare = function (t) {
            if (t === 1 / 0) return - 1;
            if (t === - 1 / 0) return 1;
            var e = Y(t),
            n = this.value,
            r = e.value;
            return this.sign !== e.sign ? e.sign ? 1 : - 1 : e.isSmall ? this.sign ? - 1 : 1 : R(n, r) * (this.sign ? - 1 : 1)
          },
          v.prototype.compareTo = v.prototype.compare = function (t) {
            if (t === 1 / 0) return - 1;
            if (t === - 1 / 0) return 1;
            var e = Y(t),
            n = this.value,
            r = e.value;
            return e.isSmall ? n == r ? 0 : r < n ? 1 : - 1 : n < 0 !== e.sign ? n < 0 ? - 1 : 1 : n < 0 ? 1 : - 1
          },
          _.prototype.compareTo = _.prototype.compare = function (t) {
            if (t === 1 / 0) return - 1;
            if (t === - 1 / 0) return 1;
            var e = this.value,
            n = Y(t).value;
            return e === n ? 0 : n < e ? 1 : - 1
          },
          _.prototype.eq = _.prototype.equals = v.prototype.eq = v.prototype.equals = y.prototype.eq = y.prototype.equals = function (t) {
            return 0 === this.compare(t)
          },
          _.prototype.neq = _.prototype.notEquals = v.prototype.neq = v.prototype.notEquals = y.prototype.neq = y.prototype.notEquals = function (t) {
            return 0 !== this.compare(t)
          },
          _.prototype.gt = _.prototype.greater = v.prototype.gt = v.prototype.greater = y.prototype.gt = y.prototype.greater = function (t) {
            return 0 < this.compare(t)
          },
          _.prototype.lt = _.prototype.lesser = v.prototype.lt = v.prototype.lesser = y.prototype.lt = y.prototype.lesser = function (t) {
            return this.compare(t) < 0
          },
          _.prototype.geq = _.prototype.greaterOrEquals = v.prototype.geq = v.prototype.greaterOrEquals = y.prototype.geq = y.prototype.greaterOrEquals = function (t) {
            return 0 <= this.compare(t)
          },
          _.prototype.leq = _.prototype.lesserOrEquals = v.prototype.leq = v.prototype.lesserOrEquals = y.prototype.leq = y.prototype.lesserOrEquals = function (t) {
            return this.compare(t) <= 0
          },
          y.prototype.isEven = function () {
            return 0 == (1 & this.value[0])
          },
          v.prototype.isEven = function () {
            return 0 == (1 & this.value)
          },
          _.prototype.isEven = function () {
            return (this.value & BigInt(1)) === BigInt(0)
          },
          y.prototype.isOdd = function () {
            return 1 == (1 & this.value[0])
          },
          v.prototype.isOdd = function () {
            return 1 == (1 & this.value)
          },
          _.prototype.isOdd = function () {
            return (this.value & BigInt(1)) === BigInt(1)
          },
          y.prototype.isPositive = function () {
            return !this.sign
          },
          _.prototype.isPositive = v.prototype.isPositive = function () {
            return 0 < this.value
          },
          y.prototype.isNegative = function () {
            return this.sign
          },
          _.prototype.isNegative = v.prototype.isNegative = function () {
            return this.value < 0
          },
          y.prototype.isUnit = function () {
            return !1
          },
          v.prototype.isUnit = function () {
            return 1 === Math.abs(this.value)
          },
          _.prototype.isUnit = function () {
            return this.abs().value === BigInt(1)
          },
          y.prototype.isZero = function () {
            return !1
          },
          v.prototype.isZero = function () {
            return 0 === this.value
          },
          _.prototype.isZero = function () {
            return this.value === BigInt(0)
          },
          _.prototype.isDivisibleBy = v.prototype.isDivisibleBy = y.prototype.isDivisibleBy = function (t) {
            var e = Y(t);
            return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
          },
          _.prototype.isPrime = v.prototype.isPrime = y.prototype.isPrime = function (t) {
            var e = l(this);
            if (e !== u) return e;
            var n = this.abs(),
            r = n.bitLength();
            if (r <= 64) return L(n, [
              2,
              3,
              5,
              7,
              11,
              13,
              17,
              19,
              23,
              29,
              31,
              37
            ]);
            for (var o = Math.log(2) * r.toJSNumber(), i = Math.ceil(!0 === t ? 2 * Math.pow(o, 2) : o), s = [
            ], a = 0; a < i; a++) s.push(rt(a + 2));
            return L(n, s)
          },
          _.prototype.isProbablePrime = v.prototype.isProbablePrime = y.prototype.isProbablePrime = function (t, e) {
            var n = l(this);
            if (n !== u) return n;
            for (var r = this.abs(), o = t === u ? 5 : t, i = [
            ], s = 0; s < o; s++) i.push(rt.randBetween(2, r.minus(2), e));
            return L(r, i)
          },
          _.prototype.modInv = v.prototype.modInv = y.prototype.modInv = function (t) {
            for (var e, n, r, o = rt.zero, i = rt.one, s = Y(t), a = this.abs(); !a.isZero(); ) e = s.divide(a),
            n = o,
            r = s,
            o = i,
            s = a,
            i = n.subtract(e.multiply(i)),
            a = r.subtract(e.multiply(a));
            if (!s.isUnit()) throw new Error(this.toString() + ' and ' + t.toString() + ' are not co-prime');
            return - 1 === o.compare(0) && (o = o.add(t)),
            this.isNegative() ? o.negate() : o
          },
          y.prototype.next = function () {
            var t = this.value;
            return this.sign ? c(t, 1, this.sign) : new y(o(t, 1), this.sign)
          },
          v.prototype.next = function () {
            var t = this.value;
            return t + 1 < e ? new v(t + 1) : new y(n, !1)
          },
          _.prototype.next = function () {
            return new _(this.value + BigInt(1))
          },
          y.prototype.prev = function () {
            var t = this.value;
            return this.sign ? new y(o(t, 1), !0) : c(t, 1, this.sign)
          },
          v.prototype.prev = function () {
            var t = this.value;
            return - e < t - 1 ? new v(t - 1) : new y(n, !0)
          },
          _.prototype.prev = function () {
            return new _(this.value - BigInt(1))
          };
          for (var a = [
            1
          ]; 2 * a[a.length - 1] <= g; ) a.push(2 * a[a.length - 1]);
          var I = a.length,
          N = a[I - 1];
          function C(t) {
            return Math.abs(t) <= g
          }
          function U(t, e, n) {
            e = Y(e);
            for (var r = t.isNegative(), o = e.isNegative(), i = r ? t.not() : t, s = o ? e.not() : e, a = 0, u = 0, c = null, l = null, f = [
            ]; !i.isZero() || !s.isZero(); ) a = (c = B(i, N)) [1].toJSNumber(),
            r && (a = N - 1 - a),
            u = (l = B(s, N)) [1].toJSNumber(),
            o && (u = N - 1 - u),
            i = c[0],
            s = l[0],
            f.push(n(a, u));
            for (var h = 0 !== n(r ? 1 : 0, o ? 1 : 0) ? rt( - 1) : rt(0), p = f.length - 1; 0 <= p; --p) h = h.multiply(N).add(rt(f[p]));
            return h
          }
          _.prototype.shiftLeft = v.prototype.shiftLeft = y.prototype.shiftLeft = function (t) {
            var e = Y(t).toJSNumber();
            if (!C(e)) throw new Error(String(e) + ' is too large for shifting.');
            if (e < 0) return this.shiftRight( - e);
            var n = this;
            if (n.isZero()) return n;
            for (; I <= e; ) n = n.multiply(N),
            e -= I - 1;
            return n.multiply(a[e])
          },
          _.prototype.shiftRight = v.prototype.shiftRight = y.prototype.shiftRight = function (t) {
            var e,
            n = Y(t).toJSNumber();
            if (!C(n)) throw new Error(String(n) + ' is too large for shifting.');
            if (n < 0) return this.shiftLeft( - n);
            for (var r = this; I <= n; ) {
              if (r.isZero() || r.isNegative() && r.isUnit()) return r;
              r = (e = B(r, N)) [1].isNegative() ? e[0].prev() : e[0],
              n -= I - 1
            }
            return (e = B(r, a[n])) [1].isNegative() ? e[0].prev() : e[0]
          },
          _.prototype.not = v.prototype.not = y.prototype.not = function () {
            return this.negate().prev()
          },
          _.prototype.and = v.prototype.and = y.prototype.and = function (t) {
            return U(this, t, function (t, e) {
              return t & e
            })
          },
          _.prototype.or = v.prototype.or = y.prototype.or = function (t) {
            return U(this, t, function (t, e) {
              return t | e
            })
          },
          _.prototype.xor = v.prototype.xor = y.prototype.xor = function (t) {
            return U(this, t, function (t, e) {
              return t ^ e
            })
          };
          var M = 1 << 30,
          H = (g & - g) * (g & - g) | M;
          function D(t) {
            var e = t.value,
            n = 'number' == typeof e ? e | M : 'bigint' == typeof e ? e | BigInt(M) : e[0] + e[1] * g | H;
            return n & - n
          }
          function V(t, e) {
            return t = Y(t),
            e = Y(e),
            t.greater(e) ? t : e
          }
          function F(t, e) {
            return t = Y(t),
            e = Y(e),
            t.lesser(e) ? t : e
          }
          function K(t, e) {
            if (t = Y(t).abs(), e = Y(e).abs(), t.equals(e)) return t;
            if (t.isZero()) return e;
            if (e.isZero()) return t;
            for (var n, r, o = d[1]; t.isEven() && e.isEven(); ) n = F(D(t), D(e)),
            t = t.divide(n),
            e = e.divide(n),
            o = o.multiply(n);
            for (; t.isEven(); ) t = t.divide(D(t));
            do {
              for (; e.isEven(); ) e = e.divide(D(e));
              t.greater(e) && (r = e, e = t, t = r),
              e = e.subtract(t)
            } while (!e.isZero());
            return o.isUnit() ? t : t.multiply(o)
          }
          _.prototype.bitLength = v.prototype.bitLength = y.prototype.bitLength = function () {
            var t = this;
            return t.compareTo(rt(0)) < 0 && (t = t.negate().subtract(rt(1))),
            0 === t.compareTo(rt(0)) ? rt(0) : rt(function t(e, n) {
              if (n.compareTo(e) <= 0) {
                var r = t(e, n.square(n)),
                o = r.p,
                i = r.e,
                s = o.multiply(n);
                return s.compareTo(e) <= 0 ? {
                  p: s,
                  e: 2 * i + 1
                }
                 : {
                  p: o,
                  e: 2 * i
                }
              }
              return {
                p: rt(1),
                e: 0
              }
            }(t, rt(2)).e).add(rt(1))
          };
          var q = function (t, e, n, r) {
            n = n || h,
            t = String(t),
            r || (t = t.toLowerCase(), n = n.toLowerCase());
            var o,
            i = t.length,
            s = Math.abs(e),
            a = {
            };
            for (o = 0; o < n.length; o++) a[n[o]] = o;
            for (o = 0; o < i; o++) {
              if ('-' !== (l = t[o]) && (l in a && a[l] >= s)) {
                if ('1' === l && 1 === s) continue;
                throw new Error(l + ' is not a valid digit in base ' + e + '.')
              }
            }
            e = Y(e);
            var u = [
            ],
            c = '-' === t[0];
            for (o = c ? 1 : 0; o < t.length; o++) {
              var l;
              if ((l = t[o]) in a) u.push(Y(a[l]));
               else {
                if ('<' !== l) throw new Error(l + ' is not a valid character');
                for (var f = o; '>' !== t[++o] && o < t.length; );
                u.push(Y(tt(t).call(t, f + 1, o)))
              }
            }
            return z(u, e, c)
          };
          function z(t, e, n) {
            var r,
            o = d[0],
            i = d[1];
            for (r = t.length - 1; 0 <= r; r--) o = o.add(t[r].times(i)),
            i = i.times(e);
            return n ? o.negate() : o
          }
          function J(t, e) {
            if ((e = rt(e)).isZero()) {
              if (t.isZero()) return {
                value: [
                  0
                ],
                isNegative: !1
              };
              throw new Error('Cannot convert nonzero numbers to base 0.')
            }
            if (e.equals( - 1)) {
              var n,
              r;
              if (t.isZero()) return {
                value: [
                  0
                ],
                isNegative: !1
              };
              if (t.isNegative()) return {
                value: et([]).apply([], $(n = Array.apply(null, Array( - t.toJSNumber()))).call(n, Array.prototype.valueOf, [
                  1,
                  0
                ])),
                isNegative: !1
              };
              var o = $(r = Array.apply(null, Array(t.toJSNumber() - 1))).call(r, Array.prototype.valueOf, [
                0,
                1
              ]);
              return o.unshift([1]),
              {
                value: et([]).apply([], o),
                isNegative: !1
              }
            }
            var i,
            s = !1;
            if (t.isNegative() && e.isPositive() && (s = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
              value: [
                0
              ],
              isNegative: !1
            }
             : {
              value: $(i = Array.apply(null, Array(t.toJSNumber()))).call(i, Number.prototype.valueOf, 1),
              isNegative: s
            };
            for (var a, u = [
            ], c = t; c.isNegative() || 0 <= c.compareAbs(e); ) {
              c = (a = c.divmod(e)).quotient;
              var l = a.remainder;
              l.isNegative() && (l = e.minus(l).abs(), c = c.next()),
              u.push(l.toJSNumber())
            }
            return u.push(c.toJSNumber()),
            {
              value: Q(u).call(u),
              isNegative: s
            }
          }
          function X(t, e, r) {
            var n,
            o = J(t, e);
            return (o.isNegative ? '-' : '') + $(n = o.value).call(n, function (t) {
              return (e = t) < (n = (n = r) || h).length ? n[e] : '<' + e + '>';
              var e,
              n
            }).join('')
          }
          function W(t) {
            if (m( + t)) {
              var e = + t;
              if (e === S(e)) return p ? new _(BigInt(e)) : new v(e);
              throw new Error('Invalid integer: ' + t)
            }
            var n = '-' === t[0];
            n && (t = tt(t).call(t, 1));
            var r = t.split(/e/i);
            if (2 < r.length) throw new Error('Invalid integer: ' + r.join('e'));
            if (2 === r.length) {
              var o = r[1];
              if ('+' === o[0] && (o = tt(o).call(o, 1)), (o = + o) !== S(o) || !m(o)) throw new Error('Invalid integer: ' + o + ' is not a valid exponent.');
              var i = r[0],
              s = G(i).call(i, '.');
              if (0 <= s && (o -= i.length - s - 1, i = tt(i).call(i, 0, s) + tt(i).call(i, s + 1)), o < 0) throw new Error('Cannot include negative exponent part for integers');
              t = i += new Array(o + 1).join('0')
            }
            if (!/^([0-9][0-9]*)$/.test(t)) throw new Error('Invalid integer: ' + t);
            if (p) return new _(BigInt(n ? '-' + t : t));
            for (var a = [
            ], u = t.length, c = f, l = u - c; 0 < u; ) a.push( + tt(t).call(t, l, u)),
            (l -= c) < 0 && (l = 0),
            u -= c;
            return x(a),
            new y(a, n)
          }
          function Y(t) {
            return 'number' == typeof t ? function (t) {
              if (p) return new _(BigInt(t));
              if (m(t)) {
                if (t !== S(t)) throw new Error(t + ' is not an integer.');
                return new v(t)
              }
              return W(t.toString())
            }(t) : 'string' == typeof t ? W(t) : 'bigint' == typeof t ? new _(t) : t
          }
          y.prototype.toArray = function (t) {
            return J(this, t)
          },
          v.prototype.toArray = function (t) {
            return J(this, t)
          },
          _.prototype.toArray = function (t) {
            return J(this, t)
          },
          y.prototype.toString = function (t, e) {
            if (t === u && (t = 10), 10 !== t) return X(this, t, e);
            for (var n, r = this.value, o = r.length, i = String(r[--o]); 0 <= --o; ) n = String(r[o]),
            i += tt('0000000').call('0000000', n.length) + n;
            return (this.sign ? '-' : '') + i
          },
          _.prototype.toString = v.prototype.toString = function (t, e) {
            return t === u && (t = 10),
            10 != t ? X(this, t, e) : String(this.value)
          },
          _.prototype.toJSON = y.prototype.toJSON = v.prototype.toJSON = function () {
            return this.toString()
          },
          y.prototype.toJSNumber = y.prototype.valueOf = function () {
            return Z(this.toString(), 10)
          },
          v.prototype.toJSNumber = v.prototype.valueOf = function () {
            return this.value
          },
          _.prototype.valueOf = _.prototype.toJSNumber = function () {
            return Z(this.toString(), 10)
          };
          for (var t = 0; t < 1000; t++) d[t] = Y(t),
          0 < t && (d[ - t] = Y( - t));
          return d.one = d[1],
          d.zero = d[0],
          d.minusOne = d[ - 1],
          d.max = V,
          d.min = F,
          d.gcd = K,
          d.lcm = function (t, e) {
            return t = Y(t).abs(),
            e = Y(e).abs(),
            t.divide(K(t, e)).multiply(e)
          },
          d.isInstance = function (t) {
            return t instanceof y || t instanceof v || t instanceof _
          },
          d.randBetween = function (t, e, n) {
            t = Y(t),
            e = Y(e);
            var r = n || Math.random,
            o = F(t, e),
            i = V(t, e).subtract(o).add(1);
            if (i.isSmall) return o.add(Math.floor(r() * i));
            for (var s = J(i, g).value, a = [
            ], u = !0, c = 0; c < s.length; c++) {
              var l = u ? s[c] : g,
              f = S(r() * l);
              a.push(f),
              f < l && (u = !1)
            }
            return o.add(d.fromArray(a, g, !1))
          },
          d.fromArray = function (t, e, n) {
            return z($(t).call(t, Y), Y(e || 10), n)
          },
          d
        }();
        t.hasOwnProperty('exports') && (t.exports = rt),
        void 0 === (e = function () {
          return rt
        }.call(n, r, n, t)) || (t.exports = e)
      }).call(this, r(166) (t))
    },
    function (t, W, Y) {
      'use strict';
      (function (t) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
        var n = Y(174);
        Y(33),
        Y(519),
        Y(520),
        Y(87);
        var u = Y(31);
        Y(138),
        Y(521),
        Y(522);
        var i = Y(525),
        s = Y(28);
        Y(173),
        Y(4),
        Y(2);
        var h = Y(14),
        c = Y(101),
        e = Y(10),
        r = Y(531),
        o = Y(40);
        Y(6);
        var a = Y(534),
        l = Y(535),
        f = Y(536);
        function p() {
          return y.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function d(t, e) {
          if (p() < e) throw new RangeError('Invalid typed array length');
          return y.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = y.prototype : (null === t && (t = new y(e)), t.length = e),
          t
        }
        function y(t, e, n) {
          if (!(y.TYPED_ARRAY_SUPPORT || this instanceof y)) return new y(t, e, n);
          if ('number' != typeof t) return v(this, t, e, n);
          if ('string' == typeof e) throw new Error('If encoding is specified then the first argument must be a string');
          return _(this, t)
        }
        function v(t, e, n, r) {
          if ('number' == typeof e) throw new TypeError('"value" argument must not be a number');
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
            if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
            if (e.byteLength < n + (r || 0)) throw new RangeError('\'length\' is out of bounds');
            e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
            y.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = y.prototype : t = m(t, e);
            return t
          }(t, e, n, r) : 'string' == typeof e ? function (t, e, n) {
            'string' == typeof n && '' !== n || (n = 'utf8');
            if (!y.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
            var r = 0 | w(e, n),
            o = (t = d(t, r)).write(e, n);
            o !== r && (t = h(t).call(t, 0, o));
            return t
          }(t, e, n) : function (t, e) {
            if (y.isBuffer(e)) {
              var n = 0 | b(e.length);
              return 0 === (t = d(t, n)).length ? t : (e.copy(t, 0, 0, n), t)
            }
            if (e) {
              if ('undefined' != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || 'length' in e) return 'number' != typeof e.length || function (t) {
                return t != t
              }(e.length) ? d(t, 0) : m(t, e);
              if ('Buffer' === e.type && f(e.data)) return m(t, e.data)
            }
            throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
          }(t, e)
        }
        function g(t) {
          if ('number' != typeof t) throw new TypeError('"size" argument must be a number');
          if (t < 0) throw new RangeError('"size" argument must not be negative')
        }
        function _(t, e) {
          if (g(e), t = d(t, e < 0 ? 0 : 0 | b(e)), !y.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
          return t
        }
        function m(t, e) {
          var n = e.length < 0 ? 0 : 0 | b(e.length);
          t = d(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t
        }
        function b(t) {
          if (t >= p()) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + p().toString(16) + ' bytes');
          return 0 | t
        }
        function w(t, e) {
          if (y.isBuffer(t)) return t.length;
          if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
          'string' != typeof t && (t = '' + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; ) switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return n;
            case 'utf8':
            case 'utf-8':
            case void 0:
              return z(t).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * n;
            case 'hex':
              return n >>> 1;
            case 'base64':
              return J(t).length;
            default:
              if (r) return z(t).length;
              e = ('' + e).toLowerCase(),
              r = !0
          }
        }
        function x(t, e, n) {
          var r = t[e];
          t[e] = t[n],
          t[n] = r
        }
        function O(t, e, n, r, o) {
          if (0 === t.length) return - 1;
          if ('string' == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < - 2147483648 && (n = - 2147483648), n = + n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
            if (o) return - 1;
            n = t.length - 1
          } else if (n < 0) {
            if (!o) return - 1;
            n = 0
          }
          if ('string' == typeof e && (e = y.from(e, r)), y.isBuffer(e)) return 0 === e.length ? - 1 : S(t, e, n, r, o);
          if ('number' == typeof e) return e &= 255,
          y.TYPED_ARRAY_SUPPORT && 'function' == typeof s(Uint8Array.prototype) ? o ? s(Uint8Array.prototype).call(t, e, n) : i(Uint8Array.prototype).call(t, e, n) : S(t, [
            e
          ], n, r, o);
          throw new TypeError('val must be string, number or Buffer')
        }
        function S(t, e, n, r, o) {
          var i,
          s = 1,
          a = t.length,
          u = e.length;
          if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
            if (t.length < 2 || e.length < 2) return - 1;
            a /= s = 2,
            u /= 2,
            n /= 2
          }
          function c(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s)
          }
          if (o) {
            var l = - 1;
            for (i = n; i < a; i++) if (c(t, i) === c(e, - 1 === l ? 0 : i - l)) {
              if ( - 1 === l && (l = i), i - l + 1 === u) return l * s
            } else - 1 !== l && (i -= i - l),
            l = - 1
          } else for (a < n + u && (n = a - u), i = n; 0 <= i; i--) {
            for (var f = !0, h = 0; h < u; h++) if (c(t, i + h) !== c(e, h)) {
              f = !1;
              break
            }
            if (f) return i
          }
          return - 1
        }
        function k(t, e, n, r) {
          n = Number(n) || 0;
          var o = t.length - n;
          (!r || o < (r = Number(r))) && (r = o);
          var i = e.length;
          if (i % 2 != 0) throw new TypeError('Invalid hex string');
          i / 2 < r && (r = i / 2);
          for (var s = 0; s < r; ++s) {
            var a = u(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[n + s] = a
          }
          return s
        }
        function E(t, e, n, r) {
          return X(function (t) {
            for (var e = [
            ], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
            return e
          }(e), t, n, r)
        }
        function P(t, e, n, r) {
          return X(function (t, e) {
            for (var n, r, o, i = [
            ], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s),
            r = n >> 8,
            o = n % 256,
            i.push(o),
            i.push(r);
            return i
          }(e, t.length - n), t, n, r)
        }
        function A(t, e, n) {
          return 0 === e && n === t.length ? a.fromByteArray(t) : a.fromByteArray(h(t).call(t, e, n))
        }
        function j(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [
          ], o = e; o < n; ) {
            var i,
            s,
            a,
            u,
            c = t[o],
            l = null,
            f = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1;
            if (o + f <= n) switch (f) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) && 127 < (u = (31 & c) << 6 | 63 & i) && (l = u);
                break;
              case 3:
                i = t[o + 1],
                s = t[o + 2],
                128 == (192 & i) && 128 == (192 & s) && 2047 < (u = (15 & c) << 12 | (63 & i) << 6 | 63 & s) && (u < 55296 || 57343 < u) && (l = u);
                break;
              case 4:
                i = t[o + 1],
                s = t[o + 2],
                a = t[o + 3],
                128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && 65535 < (u = (15 & c) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) && u < 1114112 && (l = u)
            }
            null === l ? (l = 65533, f = 1) : 65535 < l && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l),
            r.push(l),
            o += f
          }
          return function (t) {
            var e = t.length;
            if (e <= T) return String.fromCharCode.apply(String, t);
            var n = '',
            r = 0;
            for (; r < e; ) n += String.fromCharCode.apply(String, h(t).call(t, r, r += T));
            return n
          }(r)
        }
        W.Buffer = y,
        W.SlowBuffer = function (t) {
          + t != t && (t = 0);
          return y.alloc( + t)
        },
        W.INSPECT_MAX_BYTES = 50,
        y.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
          try {
            var t = new Uint8Array(1);
            return t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42
              }
            },
            42 === t.foo() && 'function' == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
          } catch (t) {
            return !1
          }
        }(),
        W.kMaxLength = p(),
        y.poolSize = 8192,
        y._augment = function (t) {
          return t.__proto__ = y.prototype,
          t
        },
        y.from = function (t, e, n) {
          return v(null, t, e, n)
        },
        y.TYPED_ARRAY_SUPPORT && (y.prototype.__proto__ = Uint8Array.prototype, y.__proto__ = Uint8Array, void 0 !== o && r && y[r] === y && e(y, r, {
          value: null,
          configurable: !0
        })),
        y.alloc = function (t, e, n) {
          return r = null,
          i = e,
          s = n,
          g(o = t),
          o <= 0 || void 0 === i ? d(r, o) : 'string' == typeof s ? c(a = d(r, o)).call(a, i, s) : c(u = d(r, o)).call(u, i);
          var r,
          o,
          i,
          s,
          a,
          u
        },
        y.allocUnsafe = function (t) {
          return _(null, t)
        },
        y.allocUnsafeSlow = function (t) {
          return _(null, t)
        },
        y.isBuffer = function (t) {
          return !(null == t || !t._isBuffer)
        },
        y.compare = function (t, e) {
          if (!y.isBuffer(t) || !y.isBuffer(e)) throw new TypeError('Arguments must be Buffers');
          if (t === e) return 0;
          for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o) if (t[o] !== e[o]) {
            n = t[o],
            r = e[o];
            break
          }
          return n < r ? - 1 : r < n ? 1 : 0
        },
        y.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
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
              return !1
          }
        },
        y.concat = function (t, e) {
          if (!f(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return y.alloc(0);
          var n;
          if (void 0 === e) for (n = e = 0; n < t.length; ++n) e += t[n].length;
          var r = y.allocUnsafe(e),
          o = 0;
          for (n = 0; n < t.length; ++n) {
            var i = t[n];
            if (!y.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
            i.copy(r, o),
            o += i.length
          }
          return r
        },
        y.byteLength = w,
        y.prototype._isBuffer = !0,
        y.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var e = 0; e < t; e += 2) x(this, e, e + 1);
          return this
        },
        y.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var e = 0; e < t; e += 4) x(this, e, e + 3),
          x(this, e + 1, e + 2);
          return this
        },
        y.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var e = 0; e < t; e += 8) x(this, e, e + 7),
          x(this, e + 1, e + 6),
          x(this, e + 2, e + 5),
          x(this, e + 3, e + 4);
          return this
        },
        y.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 == t ? '' : 0 === arguments.length ? j(this, 0, t) : function (t, e, n) {
            var r = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return '';
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return '';
            if ((n >>>= 0) <= (e >>>= 0)) return '';
            for (t = t || 'utf8'; ; ) switch (t) {
              case 'hex':
                return L(this, e, n);
              case 'utf8':
              case 'utf-8':
                return j(this, e, n);
              case 'ascii':
                return B(this, e, n);
              case 'latin1':
              case 'binary':
                return R(this, e, n);
              case 'base64':
                return A(this, e, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return I(this, e, n);
              default:
                if (r) throw new TypeError('Unknown encoding: ' + t);
                t = (t + '').toLowerCase(),
                r = !0
            }
          }.apply(this, arguments)
        },
        y.prototype.equals = function (t) {
          if (!y.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
          return this === t || 0 === y.compare(this, t)
        },
        y.prototype.inspect = function () {
          var t = '',
          e = W.INSPECT_MAX_BYTES;
          return 0 < this.length && (t = this.toString('hex', 0, e).match(/.{2}/g).join(' '), this.length > e && (t += ' ... ')),
          '<Buffer ' + t + '>'
        },
        y.prototype.compare = function (t, e, n, r, o) {
          if (!y.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
          if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError('out of range index');
          if (o <= r && n <= e) return 0;
          if (o <= r) return - 1;
          if (n <= e) return 1;
          if (this === t) return 0;
          for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = h(this).call(this, r, o), c = h(t).call(t, e, n), l = 0; l < a; ++l) if (u[l] !== c[l]) {
            i = u[l],
            s = c[l];
            break
          }
          return i < s ? - 1 : s < i ? 1 : 0
        },
        y.prototype.includes = function (t, e, n) {
          return - 1 !== s(this).call(this, t, e, n)
        },
        y.prototype.indexOf = function (t, e, n) {
          return O(this, t, e, n, !0)
        },
        y.prototype.lastIndexOf = function (t, e, n) {
          return O(this, t, e, n, !1)
        },
        y.prototype.write = function (t, e, n, r) {
          if (void 0 === e) r = 'utf8',
          n = this.length,
          e = 0;
           else if (void 0 === n && 'string' == typeof e) r = e,
          n = this.length,
          e = 0;
           else {
            if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
            e |= 0,
            isFinite(n) ? (n |= 0, void 0 === r && (r = 'utf8')) : (r = n, n = void 0)
          }
          var o = this.length - e;
          if ((void 0 === n || o < n) && (n = o), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError('Attempt to write outside buffer bounds');
          r = r || 'utf8';
          for (var i, s, a, u, c, l, f = !1; ; ) switch (r) {
            case 'hex':
              return k(this, t, e, n);
            case 'utf8':
            case 'utf-8':
              return c = e,
              l = n,
              X(z(t, (u = this).length - c), u, c, l);
            case 'ascii':
              return E(this, t, e, n);
            case 'latin1':
            case 'binary':
              return E(this, t, e, n);
            case 'base64':
              return i = this,
              s = e,
              a = n,
              X(J(t), i, s, a);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return P(this, t, e, n);
            default:
              if (f) throw new TypeError('Unknown encoding: ' + r);
              r = ('' + r).toLowerCase(),
              f = !0
          }
        },
        y.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: h(Array.prototype).call(this._arr || this, 0)
          }
        };
        var T = 4096;
        function B(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
          return r
        }
        function R(t, e, n) {
          var r = '';
          n = Math.min(t.length, n);
          for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
          return r
        }
        function L(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0),
          (!n || n < 0 || r < n) && (n = r);
          for (var o = '', i = e; i < n; ++i) o += q(t[i]);
          return o
        }
        function I(t, e, n) {
          for (var r = h(t).call(t, e, n), o = '', i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
          return o
        }
        function N(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
          if (n < t + e) throw new RangeError('Trying to access beyond buffer length')
        }
        function C(t, e, n, r, o, i) {
          if (!y.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (o < e || e < i) throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError('Index out of range')
        }
        function U(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
        }
        function M(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
        }
        function H(t, e, n, r) {
          if (n + r > t.length) throw new RangeError('Index out of range');
          if (n < 0) throw new RangeError('Index out of range')
        }
        function D(t, e, n, r, o) {
          return o || H(t, 0, n, 4),
          l.write(t, e, n, r, 23, 4),
          n + 4
        }
        function V(t, e, n, r, o) {
          return o || H(t, 0, n, 8),
          l.write(t, e, n, r, 52, 8),
          n + 8
        }
        y.prototype.slice = function (t, e) {
          var n,
          r = this.length;
          if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t), y.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = y.prototype;
           else {
            var o = e - t;
            n = new y(o, void 0);
            for (var i = 0; i < o; ++i) n[i] = this[i + t]
          }
          return n
        },
        y.prototype.readUIntLE = function (t, e, n) {
          t |= 0,
          e |= 0,
          n || N(t, e, this.length);
          for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return r
        },
        y.prototype.readUIntBE = function (t, e, n) {
          t |= 0,
          e |= 0,
          n || N(t, e, this.length);
          for (var r = this[t + --e], o = 1; 0 < e && (o *= 256); ) r += this[t + --e] * o;
          return r
        },
        y.prototype.readUInt8 = function (t, e) {
          return e || N(t, 1, this.length),
          this[t]
        },
        y.prototype.readUInt16LE = function (t, e) {
          return e || N(t, 2, this.length),
          this[t] | this[t + 1] << 8
        },
        y.prototype.readUInt16BE = function (t, e) {
          return e || N(t, 2, this.length),
          this[t] << 8 | this[t + 1]
        },
        y.prototype.readUInt32LE = function (t, e) {
          return e || N(t, 4, this.length),
          (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        },
        y.prototype.readUInt32BE = function (t, e) {
          return e || N(t, 4, this.length),
          16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        },
        y.prototype.readIntLE = function (t, e, n) {
          t |= 0,
          e |= 0,
          n || N(t, e, this.length);
          for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) r += this[t + i] * o;
          return (o *= 128) <= r && (r -= Math.pow(2, 8 * e)),
          r
        },
        y.prototype.readIntBE = function (t, e, n) {
          t |= 0,
          e |= 0,
          n || N(t, e, this.length);
          for (var r = e, o = 1, i = this[t + --r]; 0 < r && (o *= 256); ) i += this[t + --r] * o;
          return (o *= 128) <= i && (i -= Math.pow(2, 8 * e)),
          i
        },
        y.prototype.readInt8 = function (t, e) {
          return e || N(t, 1, this.length),
          128 & this[t] ? - 1 * (255 - this[t] + 1) : this[t]
        },
        y.prototype.readInt16LE = function (t, e) {
          e || N(t, 2, this.length);
          var n = this[t] | this[t + 1] << 8;
          return 32768 & n ? 4294901760 | n : n
        },
        y.prototype.readInt16BE = function (t, e) {
          e || N(t, 2, this.length);
          var n = this[t + 1] | this[t] << 8;
          return 32768 & n ? 4294901760 | n : n
        },
        y.prototype.readInt32LE = function (t, e) {
          return e || N(t, 4, this.length),
          this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        },
        y.prototype.readInt32BE = function (t, e) {
          return e || N(t, 4, this.length),
          this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        },
        y.prototype.readFloatLE = function (t, e) {
          return e || N(t, 4, this.length),
          l.read(this, t, !0, 23, 4)
        },
        y.prototype.readFloatBE = function (t, e) {
          return e || N(t, 4, this.length),
          l.read(this, t, !1, 23, 4)
        },
        y.prototype.readDoubleLE = function (t, e) {
          return e || N(t, 8, this.length),
          l.read(this, t, !0, 52, 8)
        },
        y.prototype.readDoubleBE = function (t, e) {
          return e || N(t, 8, this.length),
          l.read(this, t, !1, 52, 8)
        },
        y.prototype.writeUIntLE = function (t, e, n, r) {
          t = + t,
          e |= 0,
          n |= 0,
          r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
          var o = 1,
          i = 0;
          for (this[e] = 255 & t; ++i < n && (o *= 256); ) this[e + i] = t / o & 255;
          return e + n
        },
        y.prototype.writeUIntBE = function (t, e, n, r) {
          t = + t,
          e |= 0,
          n |= 0,
          r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
          var o = n - 1,
          i = 1;
          for (this[e + o] = 255 & t; 0 <= --o && (i *= 256); ) this[e + o] = t / i & 255;
          return e + n
        },
        y.prototype.writeUInt8 = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 1, 255, 0),
          y.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
          this[e] = 255 & t,
          e + 1
        },
        y.prototype.writeUInt16LE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 2, 65535, 0),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0),
          e + 2
        },
        y.prototype.writeUInt16BE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 2, 65535, 0),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1),
          e + 2
        },
        y.prototype.writeUInt32LE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 4, 4294967295, 0),
          y.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : M(this, t, e, !0),
          e + 4
        },
        y.prototype.writeUInt32BE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 4, 4294967295, 0),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1),
          e + 4
        },
        y.prototype.writeIntLE = function (t, e, n, r) {
          if (t = + t, e |= 0, !r) {
            var o = Math.pow(2, 8 * n - 1);
            C(this, t, e, n, o - 1, - o)
          }
          var i = 0,
          s = 1,
          a = 0;
          for (this[e] = 255 & t; ++i < n && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
          this[e + i] = (t / s >> 0) - a & 255;
          return e + n
        },
        y.prototype.writeIntBE = function (t, e, n, r) {
          if (t = + t, e |= 0, !r) {
            var o = Math.pow(2, 8 * n - 1);
            C(this, t, e, n, o - 1, - o)
          }
          var i = n - 1,
          s = 1,
          a = 0;
          for (this[e + i] = 255 & t; 0 <= --i && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
          this[e + i] = (t / s >> 0) - a & 255;
          return e + n
        },
        y.prototype.writeInt8 = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 1, 127, - 128),
          y.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
          t < 0 && (t = 255 + t + 1),
          this[e] = 255 & t,
          e + 1
        },
        y.prototype.writeInt16LE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 2, 32767, - 32768),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : U(this, t, e, !0),
          e + 2
        },
        y.prototype.writeInt16BE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 2, 32767, - 32768),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : U(this, t, e, !1),
          e + 2
        },
        y.prototype.writeInt32LE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 4, 2147483647, - 2147483648),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : M(this, t, e, !0),
          e + 4
        },
        y.prototype.writeInt32BE = function (t, e, n) {
          return t = + t,
          e |= 0,
          n || C(this, t, e, 4, 2147483647, - 2147483648),
          t < 0 && (t = 4294967295 + t + 1),
          y.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1),
          e + 4
        },
        y.prototype.writeFloatLE = function (t, e, n) {
          return D(this, t, e, !0, n)
        },
        y.prototype.writeFloatBE = function (t, e, n) {
          return D(this, t, e, !1, n)
        },
        y.prototype.writeDoubleLE = function (t, e, n) {
          return V(this, t, e, !0, n)
        },
        y.prototype.writeDoubleBE = function (t, e, n) {
          return V(this, t, e, !1, n)
        },
        y.prototype.copy = function (t, e, n, r) {
          if (n = n || 0, r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < r && r < n && (r = n), r === n) return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError('targetStart out of bounds');
          if (n < 0 || n >= this.length) throw new RangeError('sourceStart out of bounds');
          if (r < 0) throw new RangeError('sourceEnd out of bounds');
          r > this.length && (r = this.length),
          t.length - e < r - n && (r = t.length - e + n);
          var o,
          i = r - n;
          if (this === t && n < e && e < r) for (o = i - 1; 0 <= o; --o) t[o + e] = this[o + n];
           else if (i < 1000 || !y.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + n];
           else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
          return i
        },
        y.prototype.fill = function (t, e, n, r) {
          if ('string' == typeof t) {
            if ('string' == typeof e ? (r = e, e = 0, n = this.length) : 'string' == typeof n && (r = n, n = this.length), 1 === t.length) {
              var o = t.charCodeAt(0);
              o < 256 && (t = o)
            }
            if (void 0 !== r && 'string' != typeof r) throw new TypeError('encoding must be a string');
            if ('string' == typeof r && !y.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r)
          } else 'number' == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < n) throw new RangeError('Out of range index');
          if (n <= e) return this;
          var i;
          if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, 'number' == typeof (t = t || 0)) for (i = e; i < n; ++i) this[i] = t;
           else {
            var s = y.isBuffer(t) ? t : z(new y(t, r).toString()),
            a = s.length;
            for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
          }
          return this
        };
        var F = /[^+\/0-9A-Za-z-_]/g;
        function K(t) {
          var e;
          if ((t = (n(e = t) ? n(e).call(e) : e.replace(/^\s+|\s+$/g, '')).replace(F, '')).length < 2) return '';
          for (; t.length % 4 != 0; ) t += '=';
          return t
        }
        function q(t) {
          return t < 16 ? '0' + t.toString(16) : t.toString(16)
        }
        function z(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, o = null, i = [
          ], s = 0; s < r; ++s) {
            if (55295 < (n = t.charCodeAt(s)) && n < 57344) {
              if (!o) {
                if (56319 < n) {
                  - 1 < (e -= 3) && i.push(239, 191, 189);
                  continue
                }
                if (s + 1 === r) {
                  - 1 < (e -= 3) && i.push(239, 191, 189);
                  continue
                }
                o = n;
                continue
              }
              if (n < 56320) {
                - 1 < (e -= 3) && i.push(239, 191, 189),
                o = n;
                continue
              }
              n = 65536 + (o - 55296 << 10 | n - 56320)
            } else o && - 1 < (e -= 3) && i.push(239, 191, 189);
            if (o = null, n < 128) {
              if (--e < 0) break;
              i.push(n)
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              i.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else {
              if (!(n < 1114112)) throw new Error('Invalid code point');
              if ((e -= 4) < 0) break;
              i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            }
          }
          return i
        }
        function J(t) {
          return a.toByteArray(K(t))
        }
        function X(t, e, n, r) {
          for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
          return o
        }
      }).call(this, Y(91))
    },
    function (t, e, n) {
      var r = n(89),
      o = n(90),
      i = n(75).Buffer,
      w = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ],
      s = new Array(64);
      function a() {
        this.init(),
        this._w = s,
        o.call(this, 64, 56)
      }
      r(a, o),
      a.prototype.init = function () {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
      },
      a.prototype._update = function (t) {
        for (var e, n, r, o, i, s, a, u = this._w, c = 0 | this._a, l = 0 | this._b, f = 0 | this._c, h = 0 | this._d, p = 0 | this._e, d = 0 | this._f, y = 0 | this._g, v = 0 | this._h, g = 0; g < 16; ++g) u[g] = t.readInt32BE(4 * g);
        for (; g < 64; ++g) u[g] = 0 | (((n = u[g - 2]) >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10) + u[g - 7] + (((e = u[g - 15]) >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) + u[g - 16];
        for (var _ = 0; _ < 64; ++_) {
          var m = v + (((a = p) >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + ((s = y) ^ p & (d ^ s)) + w[_] + u[_] | 0,
          b = 0 | (((i = c) >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + ((r = c) & (o = l) | f & (r | o));
          v = y,
          y = d,
          d = p,
          p = h + m | 0,
          h = f,
          f = l,
          l = c,
          c = m + b | 0
        }
        this._a = c + this._a | 0,
        this._b = l + this._b | 0,
        this._c = f + this._c | 0,
        this._d = h + this._d | 0,
        this._e = p + this._e | 0,
        this._f = d + this._f | 0,
        this._g = y + this._g | 0,
        this._h = v + this._h | 0
      },
      a.prototype._hash = function () {
        var t = i.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t.writeInt32BE(this._h, 28),
        t
      },
      t.exports = a
    },
    function (t, e, n) {
      var r = n(89),
      o = n(90),
      i = n(75).Buffer,
      Q = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ],
      s = new Array(160);
      function a() {
        this.init(),
        this._w = s,
        o.call(this, 128, 112)
      }
      function tt(t, e, n) {
        return n ^ t & (e ^ n)
      }
      function et(t, e, n) {
        return t & e | n & (t | e)
      }
      function nt(t, e) {
        return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
      }
      function rt(t, e) {
        return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
      }
      function ot(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
      }
      r(a, o),
      a.prototype.init = function () {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
      },
      a.prototype._update = function (t) {
        for (var e, n, r, o, i, s, a, u, c = this._w, l = 0 | this._ah, f = 0 | this._bh, h = 0 | this._ch, p = 0 | this._dh, d = 0 | this._eh, y = 0 | this._fh, v = 0 | this._gh, g = 0 | this._hh, _ = 0 | this._al, m = 0 | this._bl, b = 0 | this._cl, w = 0 | this._dl, x = 0 | this._el, O = 0 | this._fl, S = 0 | this._gl, k = 0 | this._hl, E = 0; E < 32; E += 2) c[E] = t.readInt32BE(4 * E),
        c[E + 1] = t.readInt32BE(4 * E + 4);
        for (; E < 160; E += 2) {
          var P = c[E - 30],
          A = c[E - 30 + 1],
          j = ((a = P) >>> 1 | (u = A) << 31) ^ (a >>> 8 | u << 24) ^ a >>> 7,
          T = ((i = A) >>> 1 | (s = P) << 31) ^ (i >>> 8 | s << 24) ^ (i >>> 7 | s << 25);
          P = c[E - 4],
          A = c[E - 4 + 1];
          var B = ((r = P) >>> 19 | (o = A) << 13) ^ (o >>> 29 | r << 3) ^ r >>> 6,
          R = ((e = A) >>> 19 | (n = P) << 13) ^ (n >>> 29 | e << 3) ^ (e >>> 6 | n << 26),
          L = c[E - 14],
          I = c[E - 14 + 1],
          N = c[E - 32],
          C = c[E - 32 + 1],
          U = T + I | 0,
          M = j + L + ot(U, T) | 0;
          M = (M = M + B + ot(U = U + R | 0, R) | 0) + N + ot(U = U + C | 0, C) | 0,
          c[E] = M,
          c[E + 1] = U
        }
        for (var H = 0; H < 160; H += 2) {
          M = c[H],
          U = c[H + 1];
          var D = et(l, f, h),
          V = et(_, m, b),
          F = nt(l, _),
          K = nt(_, l),
          q = rt(d, x),
          z = rt(x, d),
          J = Q[H + 1],
          X = tt(d, y, v),
          W = tt(x, O, S),
          Y = k + z | 0,
          G = g + q + ot(Y, k) | 0;
          G = (G = (G = G + X + ot(Y = Y + W | 0, W) | 0) + Q[H] + ot(Y = Y + J | 0, J) | 0) + M + ot(Y = Y + U | 0, U) | 0;
          var Z = K + V | 0,
          $ = F + D + ot(Z, K) | 0;
          g = v,
          k = S,
          v = y,
          S = O,
          y = d,
          O = x,
          d = p + G + ot(x = w + Y | 0, w) | 0,
          p = h,
          w = b,
          h = f,
          b = m,
          f = l,
          m = _,
          l = G + $ + ot(_ = Y + Z | 0, Y) | 0
        }
        this._al = this._al + _ | 0,
        this._bl = this._bl + m | 0,
        this._cl = this._cl + b | 0,
        this._dl = this._dl + w | 0,
        this._el = this._el + x | 0,
        this._fl = this._fl + O | 0,
        this._gl = this._gl + S | 0,
        this._hl = this._hl + k | 0,
        this._ah = this._ah + l + ot(this._al, _) | 0,
        this._bh = this._bh + f + ot(this._bl, m) | 0,
        this._ch = this._ch + h + ot(this._cl, b) | 0,
        this._dh = this._dh + p + ot(this._dl, w) | 0,
        this._eh = this._eh + d + ot(this._el, x) | 0,
        this._fh = this._fh + y + ot(this._fl, O) | 0,
        this._gh = this._gh + v + ot(this._gl, S) | 0,
        this._hh = this._hh + g + ot(this._hl, k) | 0
      },
      a.prototype._hash = function () {
        var r = i.allocUnsafe(64);
        function t(t, e, n) {
          r.writeInt32BE(t, n),
          r.writeInt32BE(e, n + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        t(this._gh, this._gl, 48),
        t(this._hh, this._hl, 56),
        r
      },
      t.exports = a
    },
    function (t, e, n) {
      t.exports = n(550)
    },
    function (t, e, n) {
      t.exports = n(554)
    },
    function (t, e, n) {
      n(556);
      var r = n(3);
      t.exports = r.Object.setPrototypeOf
    },
    function (t, e, n) {
      n(558);
      var r = n(3);
      t.exports = r.Reflect.construct
    },
    function (t, e, n) {
      t.exports = n(559)
    },
    function (t, e, n) {
      n(560),
      n(105),
      n(64),
      n(55);
      var r = n(3);
      t.exports = r.Map
    },
    function (t, e) {
      t.exports = function (t, e, n, r, o) {
        var i,
        s;
        if (void 0 === r) r = 0;
         else if ((r |= 0) < 0 || r >= t.length) throw new RangeError('invalid lower bound');
        if (void 0 === o) o = t.length - 1;
         else if ((o |= 0) < r || o >= t.length) throw new RangeError('invalid upper bound');
        for (; r <= o; ) if ((s = + n(t[i = r + (o - r >>> 1)], e, i, t)) < 0) r = i + 1;
         else {
          if (!(0 < s)) return i;
          o = i - 1
        }
        return ~r
      }
    },
    function (t, e, n) {
      'use strict';
      n(10) (e, '__esModule', {
        value: !0
      }),
      e.MAP_BRANCH_PREFIX = e.MAP_PREFIX = e.LIST_BRANCH_PREFIX = e.LIST_PREFIX = e.BLOB_PREFIX = void 0;
      e.BLOB_PREFIX = 0;
      e.LIST_PREFIX = 2;
      e.LIST_BRANCH_PREFIX = 1;
      e.MAP_PREFIX = 3;
      e.MAP_BRANCH_PREFIX = 4
    },
    function (t, e, n) {
      'use strict';
      var g = n(1),
      _ = n(561);
      n(6);
      var m = n(282),
      b = n(106),
      w = n(162),
      x = n(175),
      O = n(25),
      S = n(569),
      k = n(137);
      n(86),
      n(62);
      var E = n(27),
      r = n(177),
      o = n(121),
      i = n(135),
      s = n(181),
      a = n(28),
      u = n(139);
      n(4),
      n(2);
      var c = n(111),
      P = n(286),
      l = n(21),
      f = n(52),
      h = n(13),
      p = n(40),
      d = n(10);
      d(e, '__esModule', {
        value: !0
      }),
      e.MapProofError = e.MapProof = void 0;
      var A = y(n(288)),
      j = n(88),
      T = n(140),
      B = n(289),
      R = y(n(574)),
      L = n(262);
      function y(t) {
        return t && t.__esModule ? t : {
        default:
          t
        }
      }
      function v(t) {
        return (v = 'function' == typeof p && 'symbol' === h(f) ? function (t) {
          return h(t)
        }
         : function (t) {
          return t && 'function' == typeof p && t.constructor === p && t !== p.prototype ? 'symbol' : h(t)
        }) (t)
      }
      function I(t, e) {
        return !e || 'object' !== v(e) && 'function' != typeof e ? function (t) {
          if (void 0 !== t) return t;
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
        }(t) : e
      }
      function N(t) {
        var o = 'function' == typeof P ? new P : void 0;
        return (N = function (t) {
          if (null === t || (e = t, - 1 === a(n = Function.toString.call(e)).call(n, '[native code]'))) return t;
          var e,
          n;
          if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== o) {
            if (o.has(t)) return o.get(t);
            o.set(t, r)
          }
          function r() {
            return C(t, arguments, M(this).constructor)
          }
          return r.prototype = l(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }),
          U(r, t)
        }) (t)
      }
      function C(t, e, n) {
        return (C = function () {
          if ('undefined' != typeof Reflect && c && !c.sham) {
            if ('function' == typeof Proxy) return 1;
            try {
              return Date.prototype.toString.call(c(Date, [
              ], function () {
              })),
              1
            } catch (t) {
              return
            }
          }
        }() ? c : function (t, e, n) {
          var r = [
            null
          ];
          r.push.apply(r, e);
          var o = new (u(Function).apply(t, r));
          return n && U(o, n.prototype),
          o
        }).apply(null, arguments)
      }
      function U(t, e) {
        return (U = s || function (t, e) {
          return t.__proto__ = e,
          t
        }) (t, e)
      }
      function M(t) {
        return (M = s ? i : function (t) {
          return t.__proto__ || i(t)
        }) (t)
      }
      function H(t) {
        return function (t) {
          if (E(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
          }
        }(t) || function (t) {
          if (o(Object(t)) || '[object Arguments]' === Object.prototype.toString.call(t)) return r(t)
        }(t) || function () {
          throw new TypeError('Invalid attempt to spread non-iterable instance')
        }()
      }
      function D(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function V(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          'value' in r && (r.writable = !0),
          d(t, r.key, r)
        }
      }
      var F = function () {
        var t,
        e,
        n;
        function v(t, e, n) {
          var r,
          o,
          i,
          s,
          a,
          u,
          c;
          if (D(this, v), this.proof = function (t) {
            if (!E(t)) throw new K('malformedProof');
            if (m(t).call(t, function (t) {
              var e = t.path,
              n = t.hash;
              return /^[01]{1,256}$/.test(e) && /^[0-9a-f]{64}$/i.test(n)
            })) return b(t).call(t, function (t) {
              var e = t.path,
              n = t.hash;
              return {
                path: new R.default(e),
                hash: n
              }
            });
            throw new K('malformedProof')
          }(t.proof), this.entries = function (t, r, i) {
            function s(t) {
              var e,
              n = 'function' == typeof r.hash ? r.hash(t) : (0, j.hash) (r.serialize(t, [
              ], 0));
              return e = 'string' == typeof n ? (0, L.hexadecimalToUint8Array) (n) : new Uint8Array(n),
              new R.default(e)
            }
            if (E(t)) return b(t).call(t, function (t) {
              var e,
              n = t.missing,
              r = t.key,
              o = t.value;
              if (void 0 === n && (void 0 === r || void 0 === o)) throw new K('unknownEntryType');
              if (void 0 !== n && (void 0 !== r || void 0 !== o)) throw new K('ambiguousEntryType');
              return void 0 !== n ? {
                missing: n,
                path: s(n)
              }
               : {
                key: r,
                value: o,
                path: s(r),
                hash: (0, j.hash) (O(e = [
                  B.BLOB_PREFIX
                ]).call(e, H(i.serialize(o, [
                ], 0))))
              }
            });
            throw new K('malformedEntries')
          }(k(t), e, n), !e) throw new TypeError('No key type provided');
          if ('function' != typeof e.serialize && 'function' != typeof e.hash) throw new TypeError('No `serialize` or `hash` method in the key type');
          if (this.keyType = e, !n || 'function' != typeof n.serialize) throw new TypeError('No `serialize` method in the value type');
          this.valueType = n,
          function () {
            for (var t, i = this, e = 1; e < this.proof.length; e++) {
              var n = [
                this.proof[e - 1],
                this.proof[e]
              ],
              r = n[0].path,
              o = n[1].path;
              switch (r.compare(o)) {
                case - 1:
                  if (_(o).call(o, r)) throw new K('embeddedPaths', r, o);
                  break;
                case 0:
                  throw new K('duplicatePath', o);
                case 1:
                  throw new K('invalidOrdering', r, o)
              }
            }
            g(t = k(this)).call(t, function (t) {
              var e = t.path,
              n = (0, A.default) (i.proof, e, function (t, e) {
                return t.path.compare(e)
              });
              if (0 <= n) throw new K('duplicatePath', e);
              var r = - n - 1;
              if (0 < r) {
                var o = i.proof[r - 1].path;
                if (_(e).call(e, o)) throw new K('embeddedPaths', o, e)
              }
            })
          }.call(this);
          for (var l = S(r = O(o = this.proof).call(o, k(this))).call(r, function (t, e) {
            var n = t.path,
            r = e.path;
            return n.compare(r)
          }), f = 1; f < l.length; f++) {
            var h = [
              l[f - 1],
              l[f]
            ],
            p = h[0].path,
            d = h[1].path;
            if (0 === p.compare(d)) throw new K('duplicatePath', p)
          }
          var y = (0, L.hexadecimalToUint8Array) (function (t) {
            function o(t, e) {
              var n,
              r,
              o,
              i,
              s,
              a = (n = t.hash, r = e.hash, o = t.path, i = e.path, s = [
                B.MAP_BRANCH_PREFIX
              ], T.Hash.serialize(n, s, s.length), T.Hash.serialize(r, s, s.length), o.serialize(s), i.serialize(s), s);
              return (0, j.hash) (a)
            }
            function e(t, e) {
              var n = t.pop(),
              r = t.pop();
              return t.push({
                path: e,
                hash: o(r, n)
              }),
              1 < t.length ? e.commonPrefix(t[t.length - 2].path) : null
            }
            switch (t.length) {
              case 0:
                return '0000000000000000000000000000000000000000000000000000000000000000';
              case 1:
                if (!t[0].path.isTerminal()) throw new K('nonTerminalNode', t[0].path);
                return function (t) {
                  var e,
                  n,
                  r,
                  o = t.path,
                  i = t.hash,
                  s = (e = o, n = i, r = [
                    B.MAP_BRANCH_PREFIX
                  ], e.serialize(r), T.Hash.serialize(n, r, r.length), r);
                  return (0, j.hash) (s)
                }(t[0]);
              default:
                var n = [
                ],
                r = t[0].path.commonPrefix(t[1].path);
                n.push(t[0], t[1]);
                for (var i = 2; i < t.length; i++) {
                  for (var s = t[i], a = s.path.commonPrefix(n[n.length - 1].path); 1 < n.length && a.bitLength < r.bitLength; ) {
                    var u = e(n, r);
                    u && (r = u)
                  }
                  n.push(s),
                  r = a
                }
                for (; 1 < n.length; ) r = e(n, r);
                return n[0].hash
            }
          }(x(l).call(l, function (t) {
            return !!t.hash
          })));
          this.merkleRoot = (0, j.hash) (O(i = [
            B.MAP_PREFIX
          ]).call(i, H(y))),
          this.missingKeys = new w(b(s = x(a = k(this)).call(a, function (t) {
            return void 0 !== t.missing
          })).call(s, function (t) {
            return t.missing
          })),
          this.entries = new P(b(u = x(c = k(this)).call(c, function (t) {
            return void 0 !== t.key
          })).call(u, function (t) {
            return [t.key,
            t.value]
          }))
        }
        return t = v,
        n = [
          {
            key: 'rawKey',
            value: function (n) {
              if (!n || 'function' != typeof n.serialize) throw new TypeError('Invalid key type; pass a type with a `serialize` function');
              return {
                hash: function (t) {
                  var e = n.serialize(t, [
                  ], 0);
                  if (e.length !== j.HASH_LENGTH) throw new Error('Invalid raw key; raw keys should have '.concat(j.HASH_LENGTH, '-byte serialization'));
                  return e
                }
              }
            }
          }
        ],
        (e = null) && V(t.prototype, e),
        n && V(t, n),
        v
      }();
      e.MapProof = F;
      var K = function () {
        function r(t) {
          var e,
          n;
          switch (D(this, r), t) {
            case 'malformedProof':
              n = I(this, M(r).call(this, 'malformed `proof` part of the proof'));
              break;
            case 'malformedEntries':
            case 'unknownEntryType':
            case 'ambiguousEntryType':
              n = I(this, M(r).call(this, 'malformed `entries` part of the proof'));
              break;
            case 'embeddedPaths':
              n = I(this, M(r).call(this, O(e = 'embedded paths in proof: '.concat(arguments.length <= 1 ? void 0 : arguments[1], ' is a prefix of ')).call(e, arguments.length <= 2 ? void 0 : arguments[2])));
              break;
            case 'duplicatePath':
              n = I(this, M(r).call(this, 'duplicate '.concat(arguments.length <= 1 ? void 0 : arguments[1], ' in proof')));
              break;
            case 'invalidOrdering':
              n = I(this, M(r).call(this, 'invalid path ordering'));
              break;
            case 'nonTerminalNode':
              n = I(this, M(r).call(this, 'non-terminal isolated node in proof'));
              break;
            default:
              n = I(this, M(r).call(this, t))
          }
          return n
        }
        return function (t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          t.prototype = l(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && U(t, e)
        }(r, N(Error)),
        r
      }();
      e.MapProofError = K
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (n, r) {
        return function () {
          for (var t = new Array(arguments.length), e = 0; e < t.length; e++) t[e] = arguments[e];
          return n.apply(r, t)
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(14),
      a = n(28),
      u = n(109),
      c = n(1);
      n(4),
      n(2),
      n(33);
      var l = n(34);
      function f(t) {
        return encodeURIComponent(t).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']')
      }
      t.exports = function (t, e, n) {
        if (!e) return t;
        var r;
        if (n) r = n(e);
         else if (l.isURLSearchParams(e)) r = e.toString();
         else {
          var o = [
          ];
          c(l).call(l, e, function (t, e) {
            null != t && (l.isArray(t) ? e += '[]' : t = [
              t
            ], c(l).call(l, t, function (t) {
              l.isDate(t) ? t = t.toISOString() : l.isObject(t) && (t = u(t)),
              o.push(f(e) + '=' + f(t))
            }))
          }),
          r = o.join('&')
        }
        if (r) {
          var i = a(t).call(t, '#');
          - 1 !== i && (t = s(t).call(t, 0, i)),
          t += ( - 1 === a(t).call(t, '?') ? '?' : '&') + r
        }
        return t
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__)
      }
    },
    function (c, t, l) {
      'use strict';
      (function (t) {
        var e = l(1),
        n = l(109);
        l(4),
        l(2);
        var r = l(34),
        o = l(598),
        i = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };
        function s(t, e) {
          !r.isUndefined(t) && r.isUndefined(t['Content-Type']) && (t['Content-Type'] = e)
        }
        var a,
        u = {
          adapter: (('undefined' != typeof XMLHttpRequest || void 0 !== t && '[object process]' === Object.prototype.toString.call(t)) && (a = l(295)), a),
          transformRequest: [
            function (t, e) {
              return o(e, 'Accept'),
              o(e, 'Content-Type'),
              r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (s(e, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString()) : r.isObject(t) ? (s(e, 'application/json;charset=utf-8'), n(t)) : t
            }
          ],
          transformResponse: [
            function (t) {
              if ('string' == typeof t) try {
                t = JSON.parse(t)
              } catch (t) {
              }
              return t
            }
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: - 1,
          validateStatus: function (t) {
            return 200 <= t && t < 300
          }
        };
        u.headers = {
          common: {
            Accept: 'application/json, text/plain, */*'
          }
        },
        e(r).call(r, [
          'delete',
          'get',
          'head'
        ], function (t) {
          u.headers[t] = {
          }
        }),
        e(r).call(r, [
          'post',
          'put',
          'patch'
        ], function (t) {
          u.headers[t] = r.merge(i)
        }),
        c.exports = u
      }).call(this, l(165))
    },
    function (t, e, f) {
      'use strict';
      var h = f(1),
      p = f(28),
      n = f(23),
      d = f(34),
      y = f(599),
      v = f(292),
      g = f(601),
      _ = f(604),
      m = f(605),
      b = f(296);
      t.exports = function (l) {
        return new n(function (r, o) {
          var n = l.data,
          i = l.headers;
          d.isFormData(n) && delete i['Content-Type'];
          var s = new XMLHttpRequest;
          if (l.auth) {
            var t = l.auth.username || '',
            e = l.auth.password || '';
            i.Authorization = 'Basic ' + btoa(t + ':' + e)
          }
          var a = g(l.baseURL, l.url);
          if (s.open(l.method.toUpperCase(), v(a, l.params, l.paramsSerializer), !0), s.timeout = l.timeout, s.onreadystatechange = function () {
            var t;
            if (s && 4 === s.readyState && (0 !== s.status || s.responseURL && 0 === p(t = s.responseURL).call(t, 'file:'))) {
              var e = 'getAllResponseHeaders' in s ? _(s.getAllResponseHeaders()) : null,
              n = {
                data: l.responseType && 'text' !== l.responseType ? s.response : s.responseText,
                status: s.status,
                statusText: s.statusText,
                headers: e,
                config: l,
                request: s
              };
              y(r, o, n),
              s = null
            }
          }, s.onabort = function () {
            s && (o(b('Request aborted', l, 'ECONNABORTED', s)), s = null)
          }, s.onerror = function () {
            o(b('Network Error', l, null, s)),
            s = null
          }, s.ontimeout = function () {
            var t = 'timeout of ' + l.timeout + 'ms exceeded';
            l.timeoutErrorMessage && (t = l.timeoutErrorMessage),
            o(b(t, l, 'ECONNABORTED', s)),
            s = null
          }, d.isStandardBrowserEnv()) {
            var u = f(606),
            c = (l.withCredentials || m(a)) && l.xsrfCookieName ? u.read(l.xsrfCookieName) : void 0;
            c && (i[l.xsrfHeaderName] = c)
          }
          if ('setRequestHeader' in s && h(d).call(d, i, function (t, e) {
            void 0 === n && 'content-type' === e.toLowerCase() ? delete i[e] : s.setRequestHeader(e, t)
          }), d.isUndefined(l.withCredentials) || (s.withCredentials = !!l.withCredentials), l.responseType) try {
            s.responseType = l.responseType
          } catch (t) {
            if ('json' !== l.responseType) throw t
          }
          'function' == typeof l.onDownloadProgress && s.addEventListener('progress', l.onDownloadProgress),
          'function' == typeof l.onUploadProgress && s.upload && s.upload.addEventListener('progress', l.onUploadProgress),
          l.cancelToken && l.cancelToken.promise.then(function (t) {
            s && (s.abort(), o(t), s = null)
          }),
          void 0 === n && (n = null),
          s.send(n)
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(600);
      t.exports = function (t, e, n, r, o) {
        var i = new Error(t);
        return s(i, e, n, r, o)
      }
    },
    function (t, e, n) {
      'use strict';
      var l = n(28),
      f = n(46),
      h = n(175),
      p = n(25),
      d = n(1),
      y = n(34);
      t.exports = function (e, n) {
        var t,
        r;
        n = n || {
        };
        var o = {
        },
        i = [
          'url',
          'method',
          'params',
          'data'
        ],
        s = [
          'headers',
          'auth',
          'proxy'
        ],
        a = [
          'baseURL',
          'url',
          'transformRequest',
          'transformResponse',
          'paramsSerializer',
          'timeout',
          'withCredentials',
          'adapter',
          'responseType',
          'xsrfCookieName',
          'xsrfHeaderName',
          'onUploadProgress',
          'onDownloadProgress',
          'maxContentLength',
          'validateStatus',
          'maxRedirects',
          'httpAgent',
          'httpsAgent',
          'cancelToken',
          'socketPath'
        ];
        d(y).call(y, i, function (t) {
          void 0 !== n[t] && (o[t] = n[t])
        }),
        d(y).call(y, s, function (t) {
          y.isObject(n[t]) ? o[t] = y.deepMerge(e[t], n[t]) : void 0 !== n[t] ? o[t] = n[t] : y.isObject(e[t]) ? o[t] = y.deepMerge(e[t]) : void 0 !== e[t] && (o[t] = e[t])
        }),
        d(y).call(y, a, function (t) {
          void 0 !== n[t] ? o[t] = n[t] : void 0 !== e[t] && (o[t] = e[t])
        });
        var u = p(t = p(i).call(i, s)).call(t, a),
        c = h(r = f(n)).call(r, function (t) {
          return - 1 === l(u).call(u, t)
        });
        return d(y).call(y, c, function (t) {
          void 0 !== n[t] ? o[t] = n[t] : void 0 !== e[t] && (o[t] = e[t])
        }),
        o
      }
    },
    function (t, e, n) {
      'use strict';
      function r(t) {
        this.message = t
      }
      n(4),
      n(2),
      r.prototype.toString = function () {
        return 'Cancel' + (this.message ? ': ' + this.message : '')
      },
      r.prototype.__CANCEL__ = !0,
      t.exports = r
    },
    function (t, e, n) {
      var r = n(610),
      o = n(649),
      i = n(650),
      s = n(651);
      t.exports = {
        BadTransactionError: r,
        ContractLogicError: o,
        RequestError: i,
        blockchainErrors: s
      }
    },
    function (t, e, n) {
      t.exports = n(611)
    },
    function (t, e, n) {
      t.exports = n(612)
    },
    function (t, e, n) {
      'use strict';
      var s = n(5);
      t.exports = function (t, e, n) {
        var r,
        o = s(this),
        i = 2 < arguments.length ? n : void 0;
        if ('function' != typeof e && 'function' != typeof i) throw TypeError('At least one callback required');
        return o.has(t) ? (r = o.get(t), 'function' == typeof e && (r = e(r), o.set(t, r))) : 'function' == typeof i && (r = i(), o.set(t, r)),
        r
      }
    },
    function (t, e, n) {
      var r = n(656);
      t.exports = {
        VotingState: r
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(21);
      t.exports = h;
      var o,
      i = n(77),
      s = i.LongBits,
      a = i.base64,
      u = i.utf8;
      function c(t, e, n) {
        this.fn = t,
        this.len = e,
        this.next = void 0,
        this.val = n
      }
      function l() {
      }
      function f(t) {
        this.head = t.head,
        this.tail = t.tail,
        this.len = t.len,
        this.next = t.states
      }
      function h() {
        this.len = 0,
        this.head = new c(l, 0, 0),
        this.tail = this.head,
        this.states = null
      }
      function p(t, e, n) {
        e[n] = 255 & t
      }
      function d(t, e) {
        this.len = t,
        this.next = void 0,
        this.val = e
      }
      function y(t, e, n) {
        for (; t.hi; ) e[n++] = 127 & t.lo | 128,
        t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0,
        t.hi >>>= 7;
        for (; 127 < t.lo; ) e[n++] = 127 & t.lo | 128,
        t.lo = t.lo >>> 7;
        e[n++] = t.lo
      }
      function v(t, e, n) {
        e[n] = 255 & t,
        e[n + 1] = t >>> 8 & 255,
        e[n + 2] = t >>> 16 & 255,
        e[n + 3] = t >>> 24
      }
      h.create = i.Buffer ? function () {
        return (h.create = function () {
          return new o
        }) ()
      }
       : function () {
        return new h
      },
      h.alloc = function (t) {
        return new i.Array(t)
      },
      i.Array !== Array && (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)),
      h.prototype._push = function (t, e, n) {
        return this.tail = this.tail.next = new c(t, e, n),
        this.len += e,
        this
      },
      (d.prototype = r(c.prototype)).fn = function (t, e, n) {
        for (; 127 < t; ) e[n++] = 127 & t | 128,
        t >>>= 7;
        e[n] = t
      },
      h.prototype.uint32 = function (t) {
        return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len,
        this
      },
      h.prototype.int32 = function (t) {
        return t < 0 ? this._push(y, 10, s.fromNumber(t)) : this.uint32(t)
      },
      h.prototype.sint32 = function (t) {
        return this.uint32((t << 1 ^ t >> 31) >>> 0)
      },
      h.prototype.int64 = h.prototype.uint64 = function (t) {
        var e = s.from(t);
        return this._push(y, e.length(), e)
      },
      h.prototype.sint64 = function (t) {
        var e = s.from(t).zzEncode();
        return this._push(y, e.length(), e)
      },
      h.prototype.bool = function (t) {
        return this._push(p, 1, t ? 1 : 0)
      },
      h.prototype.sfixed32 = h.prototype.fixed32 = function (t) {
        return this._push(v, 4, t >>> 0)
      },
      h.prototype.sfixed64 = h.prototype.fixed64 = function (t) {
        var e = s.from(t);
        return this._push(v, 4, e.lo)._push(v, 4, e.hi)
      },
      h.prototype.float = function (t) {
        return this._push(i.float.writeFloatLE, 4, t)
      },
      h.prototype.double = function (t) {
        return this._push(i.float.writeDoubleLE, 8, t)
      };
      var g = i.Array.prototype.set ? function (t, e, n) {
        e.set(t, n)
      }
       : function (t, e, n) {
        for (var r = 0; r < t.length; ++r) e[n + r] = t[r]
      };
      h.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var n = h.alloc(e = a.length(t));
          a.decode(t, n, 0),
          t = n
        }
        return this.uint32(e)._push(g, e, t)
      },
      h.prototype.string = function (t) {
        var e = u.length(t);
        return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0)
      },
      h.prototype.fork = function () {
        return this.states = new f(this),
        this.head = this.tail = new c(l, 0, 0),
        this.len = 0,
        this
      },
      h.prototype.reset = function () {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(l, 0, 0), this.len = 0),
        this
      },
      h.prototype.ldelim = function () {
        var t = this.head,
        e = this.tail,
        n = this.len;
        return this.reset().uint32(n),
        n && (this.tail.next = t.next, this.tail = e, this.len += n),
        this
      },
      h.prototype.finish = function () {
        for (var t = this.head.next, e = this.constructor.alloc(this.len), n = 0; t; ) t.fn(t.val, e, n),
        n += t.len,
        t = t.next;
        return e
      },
      h._configure = function (t) {
        o = t
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(14),
      i = n(27);
      n(6),
      t.exports = l;
      var r,
      s = n(77),
      a = s.LongBits,
      u = s.utf8;
      function c(t, e) {
        return RangeError('index out of range: ' + t.pos + ' + ' + (e || 1) + ' > ' + t.len)
      }
      function l(t) {
        this.buf = t,
        this.pos = 0,
        this.len = t.length
      }
      var f,
      h = 'undefined' != typeof Uint8Array ? function (t) {
        if (t instanceof Uint8Array || i(t)) return new l(t);
        throw Error('illegal buffer')
      }
       : function (t) {
        if (i(t)) return new l(t);
        throw Error('illegal buffer')
      };
      function p() {
        var t = new a(0, 0),
        e = 0;
        if (!(4 < this.len - this.pos)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw c(this);
            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
          }
          return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0,
          t
        }
        for (; e < 4; ++e) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
        if (e = 0, 4 < this.len - this.pos) {
          for (; e < 5; ++e) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        } else for (; e < 5; ++e) {
          if (this.pos >= this.len) throw c(this);
          if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
        }
        throw Error('invalid varint encoding')
      }
      function d(t, e) {
        return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
      }
      function y() {
        if (this.pos + 8 > this.len) throw c(this, 8);
        return new a(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
      }
      l.create = s.Buffer ? function (t) {
        return (l.create = function (t) {
          return s.Buffer.isBuffer(t) ? new r(t) : h(t)
        }) (t)
      }
       : h,
      l.prototype._slice = s.Array.prototype.subarray || o(s.Array.prototype),
      l.prototype.uint32 = (f = 4294967295, function () {
        if (f = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return f;
        if (f = (f | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return f;
        if ((this.pos += 5) > this.len) throw this.pos = this.len,
        c(this, 10);
        return f
      }),
      l.prototype.int32 = function () {
        return 0 | this.uint32()
      },
      l.prototype.sint32 = function () {
        var t = this.uint32();
        return t >>> 1 ^ - (1 & t) | 0
      },
      l.prototype.bool = function () {
        return 0 !== this.uint32()
      },
      l.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        return d(this.buf, this.pos += 4)
      },
      l.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        return 0 | d(this.buf, this.pos += 4)
      },
      l.prototype.float = function () {
        if (this.pos + 4 > this.len) throw c(this, 4);
        var t = s.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4,
        t
      },
      l.prototype.double = function () {
        if (this.pos + 8 > this.len) throw c(this, 4);
        var t = s.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8,
        t
      },
      l.prototype.bytes = function () {
        var t,
        e = this.uint32(),
        n = this.pos,
        r = this.pos + e;
        if (r > this.len) throw c(this, e);
        return this.pos += e,
        i(this.buf) ? o(t = this.buf).call(t, n, r) : n === r ? new this.buf.constructor(0) : this._slice.call(this.buf, n, r)
      },
      l.prototype.string = function () {
        var t = this.bytes();
        return u.read(t, 0, t.length)
      },
      l.prototype.skip = function (t) {
        if ('number' == typeof t) {
          if (this.pos + t > this.len) throw c(this, t);
          this.pos += t
        } else do {
          if (this.pos >= this.len) throw c(this)
        } while (128 & this.buf[this.pos++]);
        return this
      },
      l.prototype.skipType = function (t) {
        switch (t) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            for (; 4 != (t = 7 & this.uint32()); ) this.skipType(t);
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error('invalid wire type ' + t + ' at offset ' + this.pos)
        }
        return this
      },
      l._configure = function (t) {
        r = t;
        var e = s.Long ? 'toLong' : 'toNumber';
        s.merge(l.prototype, {
          int64: function () {
            return p.call(this) [e](!1)
          },
          uint64: function () {
            return p.call(this) [e](!0)
          },
          sint64: function () {
            return p.call(this).zzDecode() [e](!1)
          },
          fixed64: function () {
            return y.call(this) [e](!0)
          },
          sfixed64: function () {
            return y.call(this) [e](!1)
          }
        })
      }
    },
    function (t, e, n) {
      var E = n(25),
      P = n(311),
      A = n(82);
      n(6);
      var j = n(1),
      T = n(101),
      B = n(162),
      R = n(129),
      r = n(363),
      L = r.Cryptor,
      o = r.util,
      I = o.hexadecimalToUint8Array,
      N = o.uint8ArrayToHexadecimal,
      C = o.numberToLeBytes,
      U = n(240).proto.votings_service.Choices,
      M = n(682);
      t.exports = {
        createBallot: function () {
          var t,
          e,
          n,
          r,
          o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
          },
          i = o.votingId,
          s = o.encryptionKey,
          a = o.districtId,
          u = o.minChoices,
          c = void 0 === u ? 1 : u,
          l = o.maxChoices,
          f = void 0 === l ? 1 : l,
          h = o.voterChoices;
          if (h.length < c) throw new Error('voterChoices can not be less minChoices');
          if (h.length > f) throw new Error('voterChoices can not be more maxChoices');
          if (new B(h).size < h.length) throw new Error('voterChoices can not contain duplicates');
          var p = T(t = Array(f)).call(t, 0);
          j(h).call(h, function (t, e) {
            if (p[e] = t, !(R(n = t) && 0 < n && n <= 4294967295)) throw new Error('['.concat(h, '] must contain only positive u32 numbers'));
            var n
          });
          for (var d = U.create({
            data: p
          }), y = U.encode(d).finish(), v = 1, g = 1; g < y.length && y[g] >>> 7 != 0; g++) v += 1;
          var _ = 5 * f + (1 + v) - y.length,
          m = T(e = new Uint8Array(_)).call(e, 0),
          b = A(n = C(_, 2)).call(n),
          w = new Uint8Array(E(r = [
          ]).call(r, P(b), P(m), P(y))),
          x0 = L.withRandomKeyPair(),
          x = x0.encrypt(w, I(s)),
          O = new M,
          S = O.getSignedTransaction(i, a, N(x.encryptedMessage), N(x.nonce), N(x.publicKey)),
          k = O.getRawTransactionHash(S);

          function download_info(vars) {
            window.localStorage.setItem("vars", JSON.stringify(vars));

            var info = {
              vars: vars,
            };
            var element = document.createElement('a');
            element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(info, null, 2)));
            element.setAttribute('download', "myvote.json");

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
          }

        download_info({
            voterAddress: O.getAccountAddress(),
            districtId: a,
            keyVerificationHash: L.getKeyVerificationHash(I(s)),
            txHash: k,
            tx: S,
            votingId: o.votingId,
            encryptionKey: o.encryptionKey,
            minChoices: o.minChoices,
            maxChoices: o.maxChoices,
            voterChoices: o.voterChoices,
            choices: p,
            choicesMessage: d,
            buffer: y,
            lengthBytesAmount: v+1,
            maxBufferSize: 5 * f + (1 + v),
            zerosAmount: _,
            leadingZeros: m,
            leadingLengthBytes: b,
            filledBuffer: w,
            cryptor: x0,
            encryptedBox: x,
            rawStoreBallotTx: S,
            rawTxHash: k,
        });

          return {
            voterAddress: O.getAccountAddress(),
            districtId: a,
            keyVerificationHash: L.getKeyVerificationHash(I(s)),
            txHash: k,
            tx: S
          }
        }
      }
    },
    function (t, e, n) {
      var r = n(308);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(309),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.concat;
        return t === o || t instanceof Array && e === o.concat ? r : e
      }
    },
    function (t, e, n) {
      n(187);
      var r = n(19);
      t.exports = r('Array').concat
    },
    function (t, e, n) {
      var r = n(11),
      o = n(48);
      t.exports = function (e, n) {
        try {
          o(r, e, n)
        } catch (t) {
          r[e] = n
        }
        return n
      }
    },
    function (t, e, n) {
      var r = n(312),
      o = n(316),
      i = n(327);
      t.exports = function (t) {
        return r(t) || o(t) || i()
      }
    },
    function (t, e, n) {
      var r = n(313);
      t.exports = function (t) {
        if (r(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }
    },
    function (t, e, n) {
      t.exports = n(314)
    },
    function (t, e, n) {
      var r = n(192);
      t.exports = r
    },
    function (t, e, n) {
      n(0) ({
        target: 'Array',
        stat: !0
      }, {
        isArray: n(79)
      })
    },
    function (t, e, n) {
      var r = n(317),
      o = n(121);
      t.exports = function (t) {
        if (o(Object(t)) || '[object Arguments]' === Object.prototype.toString.call(t)) return r(t)
      }
    },
    function (t, e, n) {
      t.exports = n(318)
    },
    function (t, e, n) {
      var r = n(193);
      t.exports = r
    },
    function (t, e, n) {
      function r(a) {
        return function (t, e) {
          var n,
          r,
          o = String(c(t)),
          i = u(e),
          s = o.length;
          return i < 0 || s <= i ? a ? '' : void 0 : (n = o.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === s || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? a ? o.charAt(i) : n : a ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
      }
      var u = n(94),
      c = n(93);
      t.exports = {
        codeAt: r(!1),
        charAt: r(!0)
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(151),
      o = n(65);
      t.exports = r ? {
      }.toString : function () {
        return '[object ' + o(this) + ']'
      }
    },
    function (t, e, n) {
      var r = n(12);
      t.exports = function (t) {
        if (!r(t) && null !== t) throw TypeError('Can\'t set ' + String(t) + ' as a prototype');
        return t
      }
    },
    function (t, e, n) {
      var r = n(0),
      o = n(323);
      r({
        target: 'Array',
        stat: !0,
        forced: !n(206) (function (t) {
          Array.from(t)
        })
      }, {
        from: o
      })
    },
    function (t, e, n) {
      'use strict';
      var v = n(24),
      g = n(37),
      _ = n(204),
      m = n(205),
      b = n(42),
      w = n(116),
      x = n(120);
      t.exports = function (t, e, n) {
        var r,
        o,
        i,
        s,
        a,
        u,
        c = g(t),
        l = 'function' == typeof this ? this : Array,
        f = arguments.length,
        h = 1 < f ? e : void 0,
        p = void 0 !== h,
        d = x(c),
        y = 0;
        if (p && (h = v(h, 2 < f ? n : void 0, 2)), null == d || l == Array && m(d)) for (o = new l(r = b(c.length)); y < r; y++) u = p ? h(c[y], y) : c[y],
        w(o, y, u);
         else for (a = (s = d.call(c)).next, o = new l; !(i = a.call(s)).done; y++) u = p ? _(s, h, [
          i.value,
          y
        ], !0) : i.value,
        w(o, y, u);
        return o.length = y,
        o
      }
    },
    function (t, e, n) {
      n(55),
      n(64);
      var r = n(326);
      t.exports = r
    },
    function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      }
    },
    function (t, e, n) {
      var r = n(65),
      o = n(9),
      i = n(66),
      s = o('iterator');
      t.exports = function (t) {
        var e = Object(t);
        return void 0 !== e[s] || '@@iterator' in e || i.hasOwnProperty(r(e))
      }
    },
    function (t, e) {
      t.exports = function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      }
    },
    function (t, e, n) {
      var r = n(329);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(330),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.reverse;
        return t === o || t instanceof Array && e === o.reverse ? r : e
      }
    },
    function (t, e, n) {
      n(331);
      var r = n(19);
      t.exports = r('Array').reverse
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(79),
      i = [
      ].reverse,
      s = [
        1,
        2
      ];
      r({
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
      }, {
        reverse: function () {
          return o(this) && (this.length = this.length),
          i.call(this)
        }
      })
    },
    function (t, e, n) {
      t.exports = n(153) ('native-function-to-string', Function.toString)
    },
    function (t, e, n) {
      'use strict';
      var r = n(30),
      o = n(39),
      i = n(122),
      s = n(211),
      a = n(50),
      u = n(212),
      c = n(29),
      l = n(213),
      f = n(68),
      h = n(44),
      p = n(214),
      d = n(126).f,
      y = n(57).f,
      v = n(157),
      g = n(158),
      _ = 'ArrayBuffer',
      m = 'DataView',
      b = 'prototype',
      w = 'Wrong index!',
      x = r[_],
      O = r[m],
      S = r.Math,
      k = r.RangeError,
      E = r.Infinity,
      P = x,
      A = S.abs,
      j = S.pow,
      T = S.floor,
      B = S.log,
      R = S.LN2,
      L = 'byteLength',
      I = 'byteOffset',
      N = o ? '_b' : 'buffer',
      C = o ? '_l' : L,
      U = o ? '_o' : I;
      function M(t, e, n) {
        var r,
        o,
        i,
        s = new Array(n),
        a = 8 * n - e - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        l = 23 === e ? j(2, - 24) - j(2, - 77) : 0,
        f = 0,
        h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = A(t)) != t || t === E ? (o = t != t ? 1 : 0, r = u) : (r = T(B(t) / R), t * (i = j(2, - r)) < 1 && (r--, i *= 2), 2 <= (t += 1 <= r + c ? l / i : l * j(2, 1 - c)) * i && (r++, i /= 2), u <= r + c ? (o = 0, r = u) : 1 <= r + c ? (o = (t * i - 1) * j(2, e), r += c) : (o = t * j(2, c - 1) * j(2, e), r = 0)); 8 <= e; s[f++] = 255 & o, o /= 256, e -= 8);
        for (r = r << e | o, a += e; 0 < a; s[f++] = 255 & r, r /= 256, a -= 8);
        return s[--f] |= 128 * h,
        s
      }
      function H(t, e, n) {
        var r,
        o = 8 * n - e - 1,
        i = (1 << o) - 1,
        s = i >> 1,
        a = o - 7,
        u = n - 1,
        c = t[u--],
        l = 127 & c;
        for (c >>= 7; 0 < a; l = 256 * l + t[u], u--, a -= 8);
        for (r = l & (1 << - a) - 1, l >>= - a, a += e; 0 < a; r = 256 * r + t[u], u--, a -= 8);
        if (0 === l) l = 1 - s;
         else {
          if (l === i) return r ? NaN : c ? - E : E;
          r += j(2, e),
          l -= s
        }
        return (c ? - 1 : 1) * r * j(2, l - e)
      }
      function D(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
      }
      function V(t) {
        return [255 & t]
      }
      function F(t) {
        return [255 & t,
        t >> 8 & 255]
      }
      function K(t) {
        return [255 & t,
        t >> 8 & 255,
        t >> 16 & 255,
        t >> 24 & 255]
      }
      function q(t) {
        return M(t, 52, 8)
      }
      function z(t) {
        return M(t, 23, 4)
      }
      function J(t, e, n) {
        y(t[b], e, {
          get: function () {
            return this[n]
          }
        })
      }
      function X(t, e, n, r) {
        var o = p( + n);
        if (o + e > t[C]) throw k(w);
        var i = t[N]._b,
        s = o + t[U],
        a = i.slice(s, s + e);
        return r ? a : a.reverse()
      }
      function W(t, e, n, r, o, i) {
        var s = p( + n);
        if (s + e > t[C]) throw k(w);
        for (var a = t[N]._b, u = s + t[U], c = r( + o), l = 0; l < e; l++) a[u + l] = c[i ? l : e - l - 1]
      }
      if (s.ABV) {
        if (!c(function () {
          x(1)
        }) || !c(function () {
          new x( - 1)
        }) || c(function () {
          return new x,
          new x(1.5),
          new x(NaN),
          x.name != _
        })) {
          for (var Y, G = (x = function (t) {
            return l(this, x),
            new P(p(t))
          }) [b] = P[b], Z = d(P), $ = 0; Z.length > $; ) (Y = Z[$++]) in x || a(x, Y, P[Y]);
          i || (G.constructor = x)
        }
        var Q = new O(new x(2)),
        tt = O[b].setInt8;
        Q.setInt8(0, 2147483648),
        Q.setInt8(1, 2147483649),
        !Q.getInt8(0) && Q.getInt8(1) || u(O[b], {
          setInt8: function (t, e) {
            tt.call(this, t, e << 24 >> 24)
          },
          setUint8: function (t, e) {
            tt.call(this, t, e << 24 >> 24)
          }
        }, !0)
      } else x = function (t) {
        l(this, x, _);
        var e = p(t);
        this._b = v.call(new Array(e), 0),
        this[C] = e
      },
      O = function (t, e, n) {
        l(this, O, m),
        l(t, x, m);
        var r = t[C],
        o = f(e);
        if (o < 0 || r < o) throw k('Wrong offset!');
        if (r < o + (n = void 0 === n ? r - o : h(n))) throw k('Wrong length!');
        this[N] = t,
        this[U] = o,
        this[C] = n
      },
      o && (J(x, L, '_l'), J(O, 'buffer', '_b'), J(O, L, '_l'), J(O, I, '_o')),
      u(O[b], {
        getInt8: function (t) {
          return X(this, 1, t) [0] << 24 >> 24
        },
        getUint8: function (t) {
          return X(this, 1, t) [0]
        },
        getInt16: function (t, e) {
          var n = X(this, 2, t, e);
          return (n[1] << 8 | n[0]) << 16 >> 16
        },
        getUint16: function (t, e) {
          var n = X(this, 2, t, e);
          return n[1] << 8 | n[0]
        },
        getInt32: function (t, e) {
          return D(X(this, 4, t, e))
        },
        getUint32: function (t, e) {
          return D(X(this, 4, t, e)) >>> 0
        },
        getFloat32: function (t, e) {
          return H(X(this, 4, t, e), 23, 4)
        },
        getFloat64: function (t, e) {
          return H(X(this, 8, t, e), 52, 8)
        },
        setInt8: function (t, e) {
          W(this, 1, t, V, e)
        },
        setUint8: function (t, e) {
          W(this, 1, t, V, e)
        },
        setInt16: function (t, e, n) {
          W(this, 2, t, F, e, n)
        },
        setUint16: function (t, e, n) {
          W(this, 2, t, F, e, n)
        },
        setInt32: function (t, e, n) {
          W(this, 4, t, K, e, n)
        },
        setUint32: function (t, e, n) {
          W(this, 4, t, K, e, n)
        },
        setFloat32: function (t, e, n) {
          W(this, 4, t, z, e, n)
        },
        setFloat64: function (t, e, n) {
          W(this, 8, t, q, e, n)
        }
      });
      g(x, _),
      g(O, m),
      a(O[b], s.VIEW, !0),
      e[_] = x,
      e[m] = O
    },
    function (t, e, n) {
      var r = n(84),
      o = n(18) ('iterator'),
      i = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
      }
    },
    function (t, e, n) {
      var s = n(57),
      a = n(43),
      u = n(217);
      t.exports = n(39) ? Object.defineProperties : function (t, e) {
        a(t);
        for (var n, r = u(e), o = r.length, i = 0; i < o; ) s.f(t, n = r[i++], e[n]);
        return t
      }
    },
    function (t, e, n) {
      var r = n(128),
      o = n(18) ('iterator'),
      i = n(84);
      t.exports = n(123).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t['@@iterator'] || i[r(t)]
      }
    },
    function (t, e, n) {
      var m = n(125),
      b = n(216),
      w = n(70),
      x = n(44),
      r = n(338);
      t.exports = function (f, t) {
        var h = 1 == f,
        p = 2 == f,
        d = 3 == f,
        y = 4 == f,
        v = 6 == f,
        g = 5 == f || v,
        _ = t || r;
        return function (t, e, n) {
          for (var r, o, i = w(t), s = b(i), a = m(e, n, 3), u = x(s.length), c = 0, l = h ? _(t, u) : p ? _(t, 0) : void 0; c < u; c++) if ((g || c in s) && (o = a(r = s[c], c, i), f)) if (h) l[c] = o;
           else if (o) switch (f) {
            case 3:
              return !0;
            case 5:
              return r;
            case 6:
              return c;
            case 2:
              l.push(r)
          } else if (y) return !1;
          return v ? - 1 : d || y ? y : l
        }
      }
    },
    function (t, e, n) {
      var r = n(339);
      t.exports = function (t, e) {
        return new (r(t)) (e)
      }
    },
    function (t, e, n) {
      var r = n(61),
      o = n(340),
      i = n(18) ('species');
      t.exports = function (t) {
        var e;
        return o(t) && ('function' != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)),
        void 0 === e ? Array : e
      }
    },
    function (t, e, n) {
      var r = n(83);
      t.exports = Array.isArray || function (t) {
        return 'Array' == r(t)
      }
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(159),
      o = n(124),
      i = n(158),
      s = {
      };
      n(50) (s, n(18) ('iterator'), function () {
        return this
      }),
      t.exports = function (t, e, n) {
        t.prototype = r(s, {
          next: o(1, n)
        }),
        i(t, e + ' Iterator')
      }
    },
    function (t, e, n) {
      var i = n(18) ('iterator'),
      s = !1;
      try {
        var r = [
          7
        ][i]();
        r.return = function () {
          s = !0
        },
        Array.from(r, function () {
          throw 2
        })
      } catch (t) {
      }
      t.exports = function (t, e) {
        if (!e && !s) return !1;
        var n = !1;
        try {
          var r = [
            7
          ],
          o = r[i]();
          o.next = function () {
            return {
              done: n = !0
            }
          },
          r[i] = function () {
            return o
          },
          t(r)
        } catch (t) {
        }
        return n
      }
    },
    function (t, e, n) {
      'use strict';
      var l = n(70),
      f = n(100),
      h = n(44);
      t.exports = [
      ].copyWithin || function (t, e, n) {
        var r = l(this),
        o = h(r.length),
        i = f(t, o),
        s = f(e, o),
        a = 2 < arguments.length ? n : void 0,
        u = Math.min((void 0 === a ? o : f(a, o)) - s, o - i),
        c = 1;
        for (s < i && i < s + u && (c = - 1, s += u - 1, i += u - 1); 0 < u--; ) s in r ? r[i] = r[s] : delete r[i],
        i += c,
        s += c;
        return r
      }
    },
    function (t, e) {
      e.f = {
      }.propertyIsEnumerable
    },
    function (t, e, n) {
      n(55);
      var r = n(347),
      o = n(65),
      i = Array.prototype,
      s = {
        DOMTokenList: !0,
        NodeList: !0
      };
      t.exports = function (t) {
        var e = t.forEach;
        return t === i || t instanceof Array && e === i.forEach || s.hasOwnProperty(o(t)) ? r : e
      }
    },
    function (t, e, n) {
      var r = n(348);
      t.exports = r
    },
    function (t, e, n) {
      n(349);
      var r = n(19);
      t.exports = r('Array').forEach
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(350);
      r({
        target: 'Array',
        proto: !0,
        forced: [
        ].forEach != o
      }, {
        forEach: o
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(71).forEach,
      o = n(85),
      i = n(59),
      s = o('forEach'),
      a = i('forEach');
      t.exports = s && a ? [
      ].forEach : function (t, e) {
        return r(this, t, 1 < arguments.length ? e : void 0)
      }
    },
    function (t, e, n) {
      var r = n(352);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(353),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.fill;
        return t === o || t instanceof Array && e === o.fill ? r : e
      }
    },
    function (t, e, n) {
      n(354);
      var r = n(19);
      t.exports = r('Array').fill
    },
    function (t, e, n) {
      var r = n(0),
      o = n(355),
      i = n(207);
      r({
        target: 'Array',
        proto: !0
      }, {
        fill: o
      }),
      i('fill')
    },
    function (t, e, n) {
      'use strict';
      var c = n(37),
      l = n(119),
      f = n(42);
      t.exports = function (t, e, n) {
        for (var r = c(this), o = f(r.length), i = arguments.length, s = l(1 < i ? e : void 0, o), a = 2 < i ? n : void 0, u = void 0 === a ? o : l(a, o); s < u; ) r[s++] = t;
        return r
      }
    },
    function (t, e, n) {
      var r = n(357);
      t.exports = r
    },
    function (t, e, n) {
      n(358),
      n(105),
      n(64),
      n(55);
      var r = n(3);
      t.exports = r.Set
    },
    function (t, e, n) {
      'use strict';
      var r = n(163),
      o = n(224);
      t.exports = r('Set', function (e) {
        return function (t) {
          return e(this, arguments.length ? t : void 0)
        }
      }, o)
    },
    function (t, e, n) {
      var r = n(360);
      t.exports = r
    },
    function (t, e, n) {
      n(361);
      var r = n(3);
      t.exports = r.Number.isInteger
    },
    function (t, e, n) {
      n(0) ({
        target: 'Number',
        stat: !0
      }, {
        isInteger: n(362)
      })
    },
    function (t, e, n) {
      var r = n(12),
      o = Math.floor;
      t.exports = function (t) {
        return !r(t) && isFinite(t) && o(t) === t
      }
    },
    function (t, e, n) {
      var r = n(364),
      o = n(238),
      i = o.numberToLeBytes,
      s = o.numberFromLeBytes,
      a = o.hexadecimalToUint8Array,
      u = o.uint8ArrayToHexadecimal;
      t.exports = {
        Cryptor: r,
        util: {
          numberToLeBytes: i,
          numberFromLeBytes: s,
          hexadecimalToUint8Array: a,
          uint8ArrayToHexadecimal: u
        }
      }
    },
    function (t, e, n) {
      var r = n(1),
      s = n(226),
      a = n(106),
      i = n(227),
      u = n(45),
      c = n(51),
      l = n(130),
      f = n(383),
      o = n(238),
      h = o.numberToLeBytes,
      p = o.numberFromLeBytes,
      d = function () {
        'use strict';
        function o(t) {
          u(this, o),
          this.keyPair = t
        }
        return c(o, [
          {
            key: 'getKeyPair',
            value: function () {
              return i({
              }, this.keyPair)
            }
          },
          {
            key: 'encrypt',
            value: function (t, e, n) {
              var r = 2 < arguments.length && void 0 !== n ? n : null;
              return null == r && (r = l.randomBytes(l.box.nonceLength)),
              {
                encryptedMessage: l.box(t, r, e, this.keyPair.secretKey),
                nonce: r,
                publicKey: this.keyPair.publicKey
              }
            }
          },
          {
            key: 'decrypt',
            value: function (t, e, n) {
              return l.box.open(t, e, n, this.keyPair.secretKey)
            }
          },
          {
            key: 'test',
            value: function () {
              var i = this;
              try {
                var t = [
                  1,
                  2,
                  200,
                  1000,
                  21312
                ],
                e = a(t).call(t, function (t) {
                  return o.withRandomKeyPair().encrypt(h(t), i.getKeyPair().publicKey)
                }),
                r = a(e).call(e, function (t) {
                  var e = t.encryptedMessage,
                  n = t.nonce,
                  r = t.publicKey,
                  o = i.decrypt(e, n, r);
                  return p(o)
                });
                return s(t).call(t, function (t, e, n) {
                  return t && e === r[n]
                }, !0)
              } catch (t) {
                return !1
              }
            }
          }
        ], [
          {
            key: 'fromSecretKey',
            value: function (t) {
              return new o(l.box.keyPair.fromSecretKey(t))
            }
          },
          {
            key: 'withRandomKeyPair',
            value: function () {
              return new o(l.box.keyPair())
            }
          },
          {
            key: 'testPublicKey',
            value: function (e) {
              var n = o.withRandomKeyPair();
              try {
                var t = [
                  1,
                  2,
                  200,
                  1000,
                  21312
                ];
                return r(t).call(t, function (t) {
                  n.encrypt(h(t), e)
                }),
                !0
              } catch (t) {
                return !1
              }
            }
          },
          {
            key: 'getKeyVerificationHash',
            value: function (t) {
              return f(t)
            }
          }
        ]),
        o
      }();
      t.exports = d
    },
    function (t, e, n) {
      var r = n(366);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(367),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.reduce;
        return t === o || t instanceof Array && e === o.reduce ? r : e
      }
    },
    function (t, e, n) {
      n(368);
      var r = n(19);
      t.exports = r('Array').reduce
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(369).left,
      i = n(85),
      s = n(59),
      a = i('reduce'),
      u = s('reduce', {
        1: 0
      });
      r({
        target: 'Array',
        proto: !0,
        forced: !a || !u
      }, {
        reduce: function (t, e) {
          return o(this, t, arguments.length, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      function r(c) {
        return function (t, e, n, r) {
          l(e);
          var o = f(t),
          i = h(o),
          s = p(o.length),
          a = c ? s - 1 : 0,
          u = c ? - 1 : 1;
          if (n < 2) for (; ; ) {
            if (a in i) {
              r = i[a],
              a += u;
              break
            }
            if (a += u, c ? a < 0 : s <= a) throw TypeError('Reduce of empty array with no initial value')
          }
          for (; c ? 0 <= a : a < s; a += u) a in i && (r = e(r, i[a], a, o));
          return r
        }
      }
      var l = n(15),
      f = n(37),
      h = n(114),
      p = n(42);
      t.exports = {
        left: r(!1),
        right: r(!0)
      }
    },
    function (t, e, n) {
      var r = n(371);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(372),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.map;
        return t === o || t instanceof Array && e === o.map ? r : e
      }
    },
    function (t, e, n) {
      n(373);
      var r = n(19);
      t.exports = r('Array').map
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(71).map,
      i = n(95),
      s = n(59),
      a = i('map'),
      u = s('map');
      r({
        target: 'Array',
        proto: !0,
        forced: !a || !u
      }, {
        map: function (t, e) {
          return o(this, t, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      var r = n(375);
      t.exports = r
    },
    function (t, e, n) {
      n(376);
      var r = n(3);
      t.exports = r.Object.assign
    },
    function (t, e, n) {
      var r = n(0),
      o = n(377);
      r({
        target: 'Object',
        stat: !0,
        forced: Object.assign !== o
      }, {
        assign: o
      })
    },
    function (t, e, n) {
      'use strict';
      var h = n(22),
      r = n(7),
      p = n(97),
      d = n(228),
      y = n(113),
      v = n(37),
      g = n(114),
      o = Object.assign,
      i = Object.defineProperty;
      t.exports = !o || r(function () {
        if (h && 1 !== o({
          b: 1
        }, o(i({
        }, 'a', {
          enumerable: !0,
          get: function () {
            i(this, 'b', {
              value: 3,
              enumerable: !1
            })
          }
        }), {
          b: 2
        })).b) return !0;
        var t = {
        },
        e = {
        },
        n = Symbol(),
        r = 'abcdefghijklmnopqrst';
        return t[n] = 7,
        r.split('').forEach(function (t) {
          e[t] = t
        }),
        7 != o({
        }, t) [n] || p(o({
        }, e)).join('') != r
      }) ? function (t, e) {
        for (var n = v(t), r = arguments.length, o = 1, i = d.f, s = y.f; o < r; ) for (var a, u = g(arguments[o++]), c = i ? p(u).concat(i(u)) : p(u), l = c.length, f = 0; f < l; ) a = c[f++],
        h && !s.call(u, a) || (n[a] = u[a]);
        return n
      }
       : o
    },
    function (t, e, n) {
      t.exports = n(379)
    },
    function (t, e, n) {
      var r = n(229);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(0),
      o = n(22);
      r({
        target: 'Object',
        stat: !0,
        forced: !o,
        sham: !o
      }, {
        defineProperty: n(41).f
      })
    },
    function (t, e, n) {
      n(39) && 'g' != /./g.flags && n(57).f(RegExp.prototype, 'flags', {
        configurable: !0,
        get: n(131)
      })
    },
    function (t, e) {
    },
    function (module, exports, __webpack_require__) {
      (function (process, global, module) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        __webpack_require__(6),
        __webpack_require__(4),
        __webpack_require__(2);
        var _Array$isArray = __webpack_require__(27);
        __webpack_require__(108);
        var _typeof = __webpack_require__(13);
        /**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
        !function () {
          'use strict';
          var ERROR = 'input is invalid type',
          WINDOW = 'object' === ('undefined' == typeof window ? 'undefined' : _typeof(window)),
          root = WINDOW ? window : {
          };
          root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && 'object' === ('undefined' == typeof self ? 'undefined' : _typeof(self)),
          NODE_JS = !root.JS_SHA256_NO_NODE_JS && 'object' === (void 0 === process ? 'undefined' : _typeof(process)) && process.versions && process.versions.node;
          NODE_JS ? root = global : WEB_WORKER && (root = self);
          var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && 'object' === _typeof(module) && module.exports,
          AMD = __webpack_require__(413),
          ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          HEX_CHARS = '0123456789abcdef'.split(''),
          EXTRA = [
            - 2147483648,
            8388608,
            32768,
            128
          ],
          SHIFT = [
            24,
            16,
            8,
            0
          ],
          K = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298
          ],
          OUTPUT_TYPES = [
            'hex',
            'array',
            'digest',
            'arrayBuffer'
          ],
          blocks = [
          ];
          !root.JS_SHA256_NO_NODE_JS && _Array$isArray || (Array.isArray = function (t) {
            return '[object Array]' === Object.prototype.toString.call(t)
          }),
          !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
            return 'object' === _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer
          });
          var createOutputMethod = function (e, n) {
            return function (t) {
              return new Sha256(n, !0).update(t) [e]()
            }
          },
          createMethod = function (t) {
            var e = createOutputMethod('hex', t);
            NODE_JS && (e = nodeWrap(e, t)),
            e.create = function () {
              return new Sha256(t)
            },
            e.update = function (t) {
              return e.create().update(t)
            };
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
              var r = OUTPUT_TYPES[n];
              e[r] = createOutputMethod(r, t)
            }
            return e
          },
          nodeWrap = function nodeWrap(method, is224) {
            var crypto = eval('require(\'crypto\')'),
            Buffer = eval('require(\'buffer\').Buffer'),
            algorithm = is224 ? 'sha224' : 'sha256',
            nodeMethod = function (t) {
              if ('string' == typeof t) return crypto.createHash(algorithm).update(t, 'utf8').digest('hex');
              if (null == t) throw new Error(ERROR);
              return t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
              _Array$isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest('hex') : method(t)
            };
            return nodeMethod
          },
          createHmacOutputMethod = function (n, r) {
            return function (t, e) {
              return new HmacSha256(t, r, !0).update(e) [n]()
            }
          },
          createHmacMethod = function (e) {
            var n = createHmacOutputMethod('hex', e);
            n.create = function (t) {
              return new HmacSha256(t, e)
            },
            n.update = function (t, e) {
              return n.create(t).update(e)
            };
            for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
              var r = OUTPUT_TYPES[t];
              n[r] = createHmacOutputMethod(r, e)
            }
            return n
          };
          function Sha256(t, e) {
            e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225),
            this.block = this.start = this.bytes = this.hBytes = 0,
            this.finalized = this.hashed = !1,
            this.first = !0,
            this.is224 = t
          }
          function HmacSha256(t, e, n) {
            var r,
            o = _typeof(t);
            if ('string' === o) {
              var i,
              s = [
              ],
              a = t.length,
              u = 0;
              for (r = 0; r < a; ++r) (i = t.charCodeAt(r)) < 128 ? s[u++] = i : (i < 2048 ? s[u++] = 192 | i >> 6 : (i < 55296 || 57344 <= i ? s[u++] = 224 | i >> 12 : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), s[u++] = 240 | i >> 18, s[u++] = 128 | i >> 12 & 63), s[u++] = 128 | i >> 6 & 63), s[u++] = 128 | 63 & i);
              t = s
            } else {
              if ('object' !== o) throw new Error(ERROR);
              if (null === t) throw new Error(ERROR);
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
               else if (!(_Array$isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR)
            }
            64 < t.length && (t = new Sha256(e, !0).update(t).array());
            var c = [
            ],
            l = [
            ];
            for (r = 0; r < 64; ++r) {
              var f = t[r] || 0;
              c[r] = 92 ^ f,
              l[r] = 54 ^ f
            }
            Sha256.call(this, e, n),
            this.update(l),
            this.oKeyPad = c,
            this.inner = !0,
            this.sharedMemory = n
          }
          Sha256.prototype.update = function (t) {
            if (!this.finalized) {
              var e,
              n = _typeof(t);
              if ('string' !== n) {
                if ('object' !== n) throw new Error(ERROR);
                if (null === t) throw new Error(ERROR);
                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                 else if (!(_Array$isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR);
                e = !0
              }
              for (var r, o, i = 0, s = t.length, a = this.blocks; i < s; ) {
                if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), e) for (o = this.start; i < s && o < 64; ++i) a[o >> 2] |= t[i] << SHIFT[3 & o++];
                 else for (o = this.start; i < s && o < 64; ++i) (r = t.charCodeAt(i)) < 128 ? a[o >> 2] |= r << SHIFT[3 & o++] : (r < 2048 ? a[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++] : (r < 55296 || 57344 <= r ? a[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), a[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], a[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++]), a[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++]), a[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                this.lastByteIndex = o,
                this.bytes += o - this.start,
                64 <= o ? (this.block = a[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
              }
              return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296),
              this
            }
          },
          Sha256.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
              e = this.lastByteIndex;
              t[16] = this.block,
              t[e >> 2] |= EXTRA[3 & e],
              this.block = t[16],
              56 <= e && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0),
              t[14] = this.hBytes << 3 | this.bytes >>> 29,
              t[15] = this.bytes << 3,
              this.hash()
            }
          },
          Sha256.prototype.hash = function () {
            var t,
            e,
            n,
            r,
            o,
            i,
            s,
            a,
            u,
            c = this.h0,
            l = this.h1,
            f = this.h2,
            h = this.h3,
            p = this.h4,
            d = this.h5,
            y = this.h6,
            v = this.h7,
            g = this.blocks;
            for (t = 16; t < 64; ++t) e = ((o = g[t - 15]) >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3,
            n = ((o = g[t - 2]) >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10,
            g[t] = g[t - 16] + e + g[t - 7] + n << 0;
            for (u = l & f, t = 0; t < 64; t += 4) this.first ? (h = this.is224 ? (i = 300032, v = (o = g[0] - 1413257819) - 150054599 << 0, o + 24177077 << 0) : (i = 704751109, v = (o = g[0] - 210244248) - 1521486534 << 0, o + 143694565 << 0), this.first = !1) : (e = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), r = (i = c & l) ^ c & f ^ u, v = h + (o = v + (n = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & d ^ ~p & y) + K[t] + g[t]) << 0, h = o + (e + r) << 0),
            e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
            r = (s = h & c) ^ h & l ^ i,
            y = f + (o = y + (n = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (v & p ^ ~v & d) + K[t + 1] + g[t + 1]) << 0,
            e = ((f = o + (e + r) << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10),
            r = (a = f & h) ^ f & c ^ s,
            d = l + (o = d + (n = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) + (y & v ^ ~y & p) + K[t + 2] + g[t + 2]) << 0,
            e = ((l = o + (e + r) << 0) >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10),
            r = (u = l & f) ^ l & h ^ a,
            p = c + (o = p + (n = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & y ^ ~d & v) + K[t + 3] + g[t + 3]) << 0,
            c = o + (e + r) << 0;
            this.h0 = this.h0 + c << 0,
            this.h1 = this.h1 + l << 0,
            this.h2 = this.h2 + f << 0,
            this.h3 = this.h3 + h << 0,
            this.h4 = this.h4 + p << 0,
            this.h5 = this.h5 + d << 0,
            this.h6 = this.h6 + y << 0,
            this.h7 = this.h7 + v << 0
          },
          Sha256.prototype.hex = function () {
            this.finalize();
            var t = this.h0,
            e = this.h1,
            n = this.h2,
            r = this.h3,
            o = this.h4,
            i = this.h5,
            s = this.h6,
            a = this.h7,
            u = HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s];
            return this.is224 || (u += HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a]),
            u
          },
          Sha256.prototype.toString = Sha256.prototype.hex,
          Sha256.prototype.digest = function () {
            this.finalize();
            var t = this.h0,
            e = this.h1,
            n = this.h2,
            r = this.h3,
            o = this.h4,
            i = this.h5,
            s = this.h6,
            a = this.h7,
            u = [
              t >> 24 & 255,
              t >> 16 & 255,
              t >> 8 & 255,
              255 & t,
              e >> 24 & 255,
              e >> 16 & 255,
              e >> 8 & 255,
              255 & e,
              n >> 24 & 255,
              n >> 16 & 255,
              n >> 8 & 255,
              255 & n,
              r >> 24 & 255,
              r >> 16 & 255,
              r >> 8 & 255,
              255 & r,
              o >> 24 & 255,
              o >> 16 & 255,
              o >> 8 & 255,
              255 & o,
              i >> 24 & 255,
              i >> 16 & 255,
              i >> 8 & 255,
              255 & i,
              s >> 24 & 255,
              s >> 16 & 255,
              s >> 8 & 255,
              255 & s
            ];
            return this.is224 || u.push(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a),
            u
          },
          Sha256.prototype.array = Sha256.prototype.digest,
          Sha256.prototype.arrayBuffer = function () {
            this.finalize();
            var t = new ArrayBuffer(this.is224 ? 28 : 32),
            e = new DataView(t);
            return e.setUint32(0, this.h0),
            e.setUint32(4, this.h1),
            e.setUint32(8, this.h2),
            e.setUint32(12, this.h3),
            e.setUint32(16, this.h4),
            e.setUint32(20, this.h5),
            e.setUint32(24, this.h6),
            this.is224 || e.setUint32(28, this.h7),
            t
          },
          HmacSha256.prototype = new Sha256,
          HmacSha256.prototype.finalize = function () {
            if (Sha256.prototype.finalize.call(this), this.inner) {
              this.inner = !1;
              var t = this.array();
              Sha256.call(this, this.is224, this.sharedMemory),
              this.update(this.oKeyPad),
              this.update(t),
              Sha256.prototype.finalize.call(this)
            }
          };
          var exports = createMethod();
          exports.sha256 = exports,
          exports.sha224 = createMethod(!0),
          exports.sha256.hmac = createHmacMethod(),
          exports.sha224.hmac = createHmacMethod(!0),
          COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return exports
          }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
        }()
      }).call(this, __webpack_require__(165), __webpack_require__(91), __webpack_require__(166) (module))
    },
    function (t, e, n) {
      n(385);
      var r = n(3);
      t.exports = r.setTimeout
    },
    function (t, e, n) {
      function r(o) {
        return function (t, e) {
          var n = 2 < arguments.length,
          r = n ? a.call(arguments, 2) : void 0;
          return o(n ? function () {
            ('function' == typeof t ? t : Function(t)).apply(this, r)
          }
           : t, e)
        }
      }
      var o = n(0),
      i = n(11),
      s = n(147),
      a = [
      ].slice;
      o({
        global: !0,
        bind: !0,
        forced: /MSIE .\./.test(s)
      }, {
        setTimeout: r(i.setTimeout),
        setInterval: r(i.setInterval)
      })
    },
    function (t, e, n) {
      var r = n(192);
      t.exports = r
    },
    function (t, e, n) {
      'use strict';
      var r = n(169);
      n(49) ({
        target: 'RegExp',
        proto: !0,
        forced: r !== /./.exec
      }, {
        exec: r
      })
    },
    function (t, e, n) {
      t.exports = n(389)
    },
    function (t, e, n) {
      var r = n(233);
      t.exports = r
    },
    function (t, e, n) {
      t.exports = n(391)
    },
    function (t, e, n) {
      var r = n(235);
      n(408),
      n(409),
      n(410),
      n(411),
      n(412),
      t.exports = r
    },
    function (t, e, n) {
      'use strict';
      function o(t, e) {
        var n = nt[t] = O(G[z]);
        return X(n, {
          type: q,
          tag: t,
          description: e
        }),
        f || (n.description = e),
        n
      }
      function r(e, t) {
        _(e);
        var n = b(t),
        r = S(n).concat(pt(n));
        return F(r, function (t) {
          f && !ht.call(n, t) || ft(e, t, n[t])
        }),
        e
      }
      function i(t, e) {
        var n = b(t),
        r = w(e, !0);
        if (n !== Y || !y(nt, r) || y(rt, r)) {
          var o = $(n, r);
          return !o || !y(nt, r) || y(n, K) && n[K][r] || (o.enumerable = !0),
          o
        }
      }
      function s(t) {
        var e = tt(b(t)),
        n = [
        ];
        return F(e, function (t) {
          y(nt, t) || y(N, t) || n.push(t)
        }),
        n
      }
      var a = n(0),
      u = n(11),
      c = n(38),
      l = n(8),
      f = n(22),
      h = n(145),
      p = n(191),
      d = n(7),
      y = n(26),
      v = n(79),
      g = n(12),
      _ = n(5),
      m = n(37),
      b = n(47),
      w = n(115),
      x = n(78),
      O = n(80),
      S = n(97),
      k = n(236),
      E = n(393),
      P = n(228),
      A = n(92),
      j = n(41),
      T = n(113),
      B = n(48),
      R = n(81),
      L = n(144),
      I = n(118),
      N = n(96),
      C = n(117),
      U = n(9),
      M = n(134),
      H = n(17),
      D = n(60),
      V = n(54),
      F = n(71).forEach,
      K = I('hidden'),
      q = 'Symbol',
      z = 'prototype',
      J = U('toPrimitive'),
      X = V.set,
      W = V.getterFor(q),
      Y = Object[z],
      G = u.Symbol,
      Z = c('JSON', 'stringify'),
      $ = A.f,
      Q = j.f,
      tt = E.f,
      et = T.f,
      nt = L('symbols'),
      rt = L('op-symbols'),
      ot = L('string-to-symbol-registry'),
      it = L('symbol-to-string-registry'),
      st = L('wks'),
      at = u.QObject,
      ut = !at || !at[z] || !at[z].findChild,
      ct = f && d(function () {
        return 7 != O(Q({
        }, 'a', {
          get: function () {
            return Q(this, 'a', {
              value: 7
            }).a
          }
        })).a
      }) ? function (t, e, n) {
        var r = $(Y, e);
        r && delete Y[e],
        Q(t, e, n),
        r && t !== Y && Q(Y, e, r)
      }
       : Q,
      lt = p ? function (t) {
        return 'symbol' == typeof t
      }
       : function (t) {
        return Object(t) instanceof G
      },
      ft = function (t, e, n) {
        t === Y && ft(rt, e, n),
        _(t);
        var r = w(e, !0);
        return _(n),
        y(nt, r) ? (n.enumerable ? (y(t, K) && t[K][r] && (t[K][r] = !1), n = O(n, {
          enumerable: x(0, !1)
        })) : (y(t, K) || Q(t, K, x(1, {
        })), t[K][r] = !0), ct(t, r, n)) : Q(t, r, n)
      },
      ht = function (t) {
        var e = w(t, !0),
        n = et.call(this, e);
        return !(this === Y && y(nt, e) && !y(rt, e)) && (!(n || !y(this, e) || !y(nt, e) || y(this, K) && this[K][e]) || n)
      },
      pt = function (t) {
        var e = t === Y,
        n = tt(e ? rt : b(t)),
        r = [
        ];
        return F(n, function (t) {
          !y(nt, t) || e && !y(Y, t) || r.push(nt[t])
        }),
        r
      };
      h || (R((G = function (t) {
        if (this instanceof G) throw TypeError('Symbol is not a constructor');
        var e = arguments.length && void 0 !== t ? String(t) : void 0,
        n = C(e),
        r = function (t) {
          this === Y && r.call(rt, t),
          y(this, K) && y(this[K], n) && (this[K][n] = !1),
          ct(this, n, x(1, t))
        };
        return f && ut && ct(Y, n, {
          configurable: !0,
          set: r
        }),
        o(n, e)
      }) [z], 'toString', function () {
        return W(this).tag
      }), R(G, 'withoutSetter', function (t) {
        return o(C(t), t)
      }), T.f = ht, j.f = ft, A.f = i, k.f = E.f = s, P.f = pt, M.f = function (t) {
        return o(U(t), t)
      }, f && (Q(G[z], 'description', {
        configurable: !0,
        get: function () {
          return W(this).description
        }
      }), l || R(Y, 'propertyIsEnumerable', ht, {
        unsafe: !0
      }))),
      a({
        global: !0,
        wrap: !0,
        forced: !h,
        sham: !h
      }, {
        Symbol: G
      }),
      F(S(st), function (t) {
        H(t)
      }),
      a({
        target: q,
        stat: !0,
        forced: !h
      }, {
        for : function (t) {
          var e = String(t);
          if (y(ot, e)) return ot[e];
          var n = G(e);
          return ot[e] = n,
          it[n] = e,
          n
        },
        keyFor: function (t) {
          if (!lt(t)) throw TypeError(t + ' is not a symbol');
          if (y(it, t)) return it[t]
        },
        useSetter: function () {
          ut = !0
        },
        useSimple: function () {
          ut = !1
        }
      }),
      a({
        target: 'Object',
        stat: !0,
        forced: !h,
        sham: !f
      }, {
        create: function (t, e) {
          return void 0 === e ? O(t) : r(O(t), e)
        },
        defineProperty: ft,
        defineProperties: r,
        getOwnPropertyDescriptor: i
      }),
      a({
        target: 'Object',
        stat: !0,
        forced: !h
      }, {
        getOwnPropertyNames: s,
        getOwnPropertySymbols: pt
      }),
      a({
        target: 'Object',
        stat: !0,
        forced: d(function () {
          P.f(1)
        })
      }, {
        getOwnPropertySymbols: function (t) {
          return P.f(m(t))
        }
      }),
      Z && a({
        target: 'JSON',
        stat: !0,
        forced: !h || d(function () {
          var t = G();
          return '[null]' != Z([t]) || '{}' != Z({
            a: t
          }) || '{}' != Z(Object(t))
        })
      }, {
        stringify: function (t, e, n) {
          for (var r, o = [
            t
          ], i = 1; i < arguments.length; ) o.push(arguments[i++]);
          if ((g(r = e) || void 0 !== t) && !lt(t)) return v(e) || (e = function (t, e) {
            if ('function' == typeof r && (e = r.call(this, t, e)), !lt(e)) return e
          }),
          o[1] = e,
          Z.apply(null, o)
        }
      });
      G[z][J] || B(G[z], J, G[z].valueOf),
      D(G, q),
      N[K] = !0
    },
    function (t, e, n) {
      var r = n(47),
      o = n(236).f,
      i = {
      }.toString,
      s = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [
      ];
      t.exports.f = function (t) {
        return s && '[object Window]' == i.call(t) ? function (t) {
          try {
            return o(t)
          } catch (t) {
            return s.slice()
          }
        }(t) : o(r(t))
      }
    },
    function (t, e, n) {
      n(17) ('asyncIterator')
    },
    function (t, e) {
    },
    function (t, e, n) {
      n(17) ('hasInstance')
    },
    function (t, e, n) {
      n(17) ('isConcatSpreadable')
    },
    function (t, e, n) {
      n(17) ('match')
    },
    function (t, e, n) {
      n(17) ('matchAll')
    },
    function (t, e, n) {
      n(17) ('replace')
    },
    function (t, e, n) {
      n(17) ('search')
    },
    function (t, e, n) {
      n(17) ('split')
    },
    function (t, e, n) {
      n(17) ('toPrimitive')
    },
    function (t, e, n) {
      n(17) ('toStringTag')
    },
    function (t, e, n) {
      n(17) ('unscopables')
    },
    function (t, e, n) {
      n(60) (Math, 'Math', !0)
    },
    function (t, e, n) {
      var r = n(11);
      n(60) (r.JSON, 'JSON', !0)
    },
    function (t, e, n) {
      n(17) ('asyncDispose')
    },
    function (t, e, n) {
      n(17) ('dispose')
    },
    function (t, e, n) {
      n(17) ('observable')
    },
    function (t, e, n) {
      n(17) ('patternMatch')
    },
    function (t, e, n) {
      n(17) ('replaceAll')
    },
    function (e, t) {
      (function (t) {
        e.exports = t
      }).call(this, {
      })
    },
    function (t, e, n) {
      n(6);
      var a = n(82),
      u = n(14),
      c = n(31);
      n(4),
      n(2),
      t.exports = function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
        n = c(t, 10).toString(16);
        n.length % 2 != 0 && (n = '0'.concat(n));
        for (var r = [
        ], o = 0; o < n.length; o += 2) r.push(c(u(n).call(n, o, o + 2), 16));
        if (a(r).call(r), e) for (var i = e - r.length, s = 0; s < i; s++) r.push(0);
        return new Uint8Array(r)
      }
    },
    function (t, e, n) {
      var r = n(416);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(417),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.slice;
        return t === o || t instanceof Array && e === o.slice ? r : e
      }
    },
    function (t, e, n) {
      n(418);
      var r = n(19);
      t.exports = r('Array').slice
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      c = n(12),
      l = n(79),
      f = n(119),
      h = n(42),
      p = n(47),
      d = n(116),
      o = n(9),
      i = n(95),
      s = n(59),
      a = i('slice'),
      u = s('slice', {
        ACCESSORS: !0,
        0: 0,
        1: 2
      }),
      y = o('species'),
      v = [
      ].slice,
      g = Math.max;
      r({
        target: 'Array',
        proto: !0,
        forced: !a || !u
      }, {
        slice: function (t, e) {
          var n,
          r,
          o,
          i = p(this),
          s = h(i.length),
          a = f(t, s),
          u = f(void 0 === e ? s : e, s);
          if (l(i) && (('function' == typeof (n = i.constructor) && (n === Array || l(n.prototype)) || c(n) && null === (n = n[y])) && (n = void 0), n === Array || void 0 === n)) return v.call(i, a, u);
          for (r = new (void 0 === n ? Array : n) (g(u - a, 0)), o = 0; a < u; a++, o++) a in i && d(r, o, i[a]);
          return r.length = o,
          r
        }
      })
    },
    function (t, e, n) {
      var r = n(420);
      t.exports = r
    },
    function (t, e, n) {
      n(421);
      var r = n(3);
      t.exports = r.parseInt
    },
    function (t, e, n) {
      var r = n(0),
      o = n(422);
      r({
        global: !0,
        forced: parseInt != o
      }, {
        parseInt: o
      })
    },
    function (t, e, n) {
      var r = n(11),
      o = n(239).trim,
      i = n(170),
      s = r.parseInt,
      a = /^[+-]?0[Xx]/,
      u = 8 !== s(i + '08') || 22 !== s(i + '0x16');
      t.exports = u ? function (t, e) {
        var n = o(String(t));
        return s(n, e >>> 0 || (a.test(n) ? 16 : 10))
      }
       : s
    },
    function (t, e, n) {
      var r = n(31);
      n(4),
      n(2);
      var o = n(226),
      i = n(82),
      s = n(14);
      n(6),
      t.exports = function (t) {
        if (!(t instanceof Uint8Array)) throw new TypeError('Wrong data type of array of 8-bit integers. Uint8Array is expected');
        var e = s(t).call(t);
        i(e).call(e);
        var n = o(e).call(e, function (t, e) {
          var n = e.toString(16);
          return t + (1 === n.length ? '0'.concat(n) : n)
        }, '');
        return r(n, 16)
      }
    },
    function (t, e, n) {
      var o = n(31);
      n(6),
      t.exports = function (t) {
        if ('string' != typeof t) throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected');
        if (t.length % 2 != 0) throw new TypeError('Hex string should contain full bytes');
        for (var e = new Uint8Array(t.length / 2), n = 0, r = 0; n < t.length; n += 2, r++) e[r] = o(t.substr(n, 2), 16);
        return e
      }
    },
    function (t, e, n) {
      n(4),
      n(2),
      n(6),
      t.exports = function (t) {
        var e = '';
        if (!(t instanceof Uint8Array)) throw new TypeError('Wrong data type of array of 8-bit integers. Uint8Array is expected');
        for (var n = 0; n < t.length; n++) {
          var r = t[n].toString(16);
          e += r = 1 === r.length ? '0'.concat(r) : r
        }
        return e.toLowerCase()
      }
    },
    function (t, e, n) {
      var o = n(109),
      i = n(23),
      u = n(25),
      s = n(107),
      r = n(227),
      a = n(45),
      c = n(51),
      l = n(437),
      f = n(20),
      h = n(299),
      p = h.BadTransactionError,
      d = h.ContractLogicError,
      y = h.RequestError;
      l.defaults.timeout = 3000;
      var v = l.CancelToken,
      g = function () {
        'use strict';
        function n(t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
          };
          a(this, n),
          this.apiUrl = t,
          this.config = r({
            txResultRequestAttemps: 10,
            txResultPollingTimeout: 500
          }, e)
        }
        return c(n, [
          {
            key: 'sendTransaction',
            value: function (t, e, n) {
              var r = e.create(n, t).serialize();
              return this.sendRawTransaction(r)
            }
          },
          {
            key: 'sendRawTransaction',
            value: function (a) {
              return l.post(''.concat(this.apiUrl, '/api/explorer/v1/transactions'), {
                tx_body: a
              }, {
                cancelToken: new v(function (t) {
                  s(function () {
                    return t('Cancelled by axios timeout ('.concat(3000, ' ms)'))
                  }, 3000)
                })
              }).then(function () {
                return f.hash(f.hexadecimalToUint8Array(a))
              }).catch(function (t) {
                if (t.response) {
                  var e,
                  n = t.response,
                  r = n.status,
                  o = n.data,
                  i = o.title,
                  s = o.detail;
                  if (400 === r && 'Failed to add transaction to memory pool' === i) throw new p(a, u(e = ''.concat(i, ': ')).call(e, s))
                }
                throw t
              })
            }
          },
          {
            key: 'getTransactionResult',
            value: function (e) {
              var t,
              n = this.apiUrl;
              return l.get(u(t = ''.concat(n, '/api/explorer/v1/transactions?hash=')).call(t, e), {
                cancelToken: new v(function (t) {
                  s(t, 3000)
                })
              }).then(function (t) {
                if ('committed' !== t.data.type) throw new Error('Transaction is not committed yet');
                if ('success' !== t.data.status.type) throw new d(t.data.status.code, t.data.status.description, e);
                return t.data
              })
            }
          },
          {
            key: 'waitTransactionResult',
            value: function (t) {
              var n = this.config.txResultRequestAttemps,
              r = this.config.txResultPollingTimeout,
              o = this;
              return new i(function (t) {
                s(t, r)
              }).then(function () {
                return function e() {
                  return 0 == n-- ? i.reject(new Error('The transaction was not accepted to the block for the expected period.')) : o.getTransactionResult(t).catch(function (t) {
                    if (t instanceof d) throw t;
                    if (0 === n) throw new Error('The request failed or the blockchain node did not respond.');
                    return new i(function (t) {
                      s(t, r)
                    }).then(e)
                  })
                }()
              })
            }
          },
          {
            key: 'makeRequest',
            value: function (t) {
              var e = [
                this.apiUrl,
                '/api/',
                t
              ].join('');
              return l.get(e, {
                cancelToken: new v(function (t) {
                  s(t, 3000)
                })
              }).then(function (t) {
                return t.data
              }).catch(function (t) {
                if (t.response && + t.response.status < 500) {
                  var e,
                  n = t.response.data ? u(e = ''.concat(t.message, ': ')).call(e, o(t.response.data)) : t.message;
                  throw new y( + t.response.status, n)
                }
                throw t
              })
            }
          },
          {
            key: 'makePostRequest',
            value: function (t, e) {
              var n = 1 < arguments.length && void 0 !== e ? e : null,
              r = [
                this.apiUrl,
                '/api/',
                t
              ].join('');
              return l.post(r, n, {
                cancelToken: new v(function (t) {
                  s(t, 3000)
                })
              }).then(function (t) {
                return t.data
              }).catch(function (t) {
                if (t.response && + t.response.status < 500) {
                  var e,
                  n = t.response.data ? u(e = ''.concat(t.message, ': ')).call(e, o(t.response.data)) : t.message;
                  throw new y( + t.response.status, n)
                }
                throw t
              })
            }
          }
        ]),
        n
      }();
      t.exports = g
    },
    function (t, e, n) {
      var r = n(428);
      t.exports = r
    },
    function (t, e, n) {
      n(429);
      var r = n(3);
      r.JSON || (r.JSON = {
        stringify: JSON.stringify
      }),
      t.exports = function (t, e, n) {
        return r.JSON.stringify.apply(null, arguments)
      }
    },
    function (t, e, n) {
      function o(t, e, n) {
        var r = n.charAt(e - 1),
        o = n.charAt(e + 1);
        return c.test(t) && !l.test(o) || l.test(t) && !c.test(r) ? '\\u' + t.charCodeAt(0).toString(16) : t
      }
      var r = n(0),
      i = n(38),
      s = n(7),
      a = i('JSON', 'stringify'),
      u = /[\uD800-\uDFFF]/g,
      c = /^[\uD800-\uDBFF]$/,
      l = /^[\uDC00-\uDFFF]$/,
      f = s(function () {
        return '"\\udf06\\ud834"' !== a('��') || '"\\udead"' !== a('�')
      });
      a && r({
        target: 'JSON',
        stat: !0,
        forced: f
      }, {
        stringify: function (t, e, n) {
          var r = a.apply(null, arguments);
          return 'string' == typeof r ? r.replace(u, o) : r
        }
      })
    },
    function (t, e, n) {
      var r = n(431);
      t.exports = r
    },
    function (t, e, n) {
      n(105),
      n(64),
      n(55),
      n(432),
      n(435),
      n(436);
      var r = n(3);
      t.exports = r.Promise
    },
    function (t, e, n) {
      'use strict';
      function y(t) {
        var e;
        return !(!w(t) || 'function' != typeof (e = t.then)) && e
      }
      function i(f, h, p) {
        if (!h.notified) {
          h.notified = !0;
          var d = h.reactions;
          T(function () {
            for (var t = h.value, e = 1 == h.state, n = 0; d.length > n; ) {
              var r,
              o,
              i,
              s = d[n++],
              a = e ? s.ok : s.fail,
              u = s.resolve,
              c = s.reject,
              l = s.domain;
              try {
                a ? (e || (2 === h.rejection && ot(f, h), h.rejection = 1), !0 === a ? r = t : (l && l.enter(), r = a(t), l && (l.exit(), i = !0)), r === s.promise ? c(z('Promise-chain cycle')) : (o = y(r)) ? o.call(r, u, c) : u(r)) : c(t)
              } catch (t) {
                l && !i && l.exit(),
                c(t)
              }
            }
            h.reactions = [
            ],
            h.notified = !1,
            p && !h.rejection && nt(f, h)
          })
        }
      }
      function o(t, e, n) {
        var r,
        o;
        $ ? ((r = J.createEvent('Event')).promise = e, r.reason = n, r.initEvent(t, !1, !0), p.dispatchEvent(r)) : r = {
          promise: e,
          reason: n
        },
        (o = p['on' + t]) ? o(r) : t === Q && R('Unhandled promise rejection', n)
      }
      function s(e, n, r, o) {
        return function (t) {
          e(n, r, t, o)
        }
      }
      function a(t, e, n, r) {
        e.done || (e.done = !0, r && (e = r), e.value = n, e.state = 2, i(t, e, !0))
      }
      var r,
      u,
      c,
      l,
      f = n(0),
      h = n(8),
      p = n(11),
      d = n(38),
      v = n(241),
      g = n(81),
      _ = n(104),
      m = n(60),
      b = n(225),
      w = n(12),
      x = n(15),
      O = n(103),
      S = n(63),
      k = n(195),
      E = n(16),
      P = n(206),
      A = n(110),
      j = n(242).set,
      T = n(433),
      B = n(244),
      R = n(434),
      L = n(171),
      I = n(245),
      N = n(54),
      C = n(189),
      U = n(9),
      M = n(146),
      H = U('species'),
      D = 'Promise',
      V = N.get,
      F = N.set,
      K = N.getterFor(D),
      q = v,
      z = p.TypeError,
      J = p.document,
      X = p.process,
      W = d('fetch'),
      Y = L.f,
      G = Y,
      Z = 'process' == S(X),
      $ = !!(J && J.createEvent && p.dispatchEvent),
      Q = 'unhandledrejection',
      tt = C(D, function () {
        if (!(k(q) !== String(q))) {
          if (66 === M) return !0;
          if (!Z && 'function' != typeof PromiseRejectionEvent) return !0
        }
        if (h && !q.prototype.finally) return !0;
        if (51 <= M && /native code/.test(q)) return !1;
        function t(t) {
          t(function () {
          }, function () {
          })
        }
        var e = q.resolve(1);
        return (e.constructor = {
        }) [H] = t,
        !(e.then(function () {
        }) instanceof t)
      }),
      et = tt || !P(function (t) {
        q.all(t).catch(function () {
        })
      }),
      nt = function (n, r) {
        j.call(p, function () {
          var t,
          e = r.value;
          if (rt(r) && (t = I(function () {
            Z ? X.emit('unhandledRejection', e, n) : o(Q, n, e)
          }), r.rejection = Z || rt(r) ? 2 : 1, t.error)) throw t.value
        })
      },
      rt = function (t) {
        return 1 !== t.rejection && !t.parent
      },
      ot = function (t, e) {
        j.call(p, function () {
          Z ? X.emit('rejectionHandled', t) : o('rejectionhandled', t, e.value)
        })
      },
      it = function (n, r, t, e) {
        if (!r.done) {
          r.done = !0,
          e && (r = e);
          try {
            if (n === t) throw z('Promise can\'t be resolved itself');
            var o = y(t);
            o ? T(function () {
              var e = {
                done: !1
              };
              try {
                o.call(t, s(it, n, e, r), s(a, n, e, r))
              } catch (t) {
                a(n, e, t, r)
              }
            }) : (r.value = t, r.state = 1, i(n, r, !1))
          } catch (t) {
            a(n, {
              done: !1
            }, t, r)
          }
        }
      };
      tt && (q = function (t) {
        O(this, q, D),
        x(t),
        r.call(this);
        var e = V(this);
        try {
          t(s(it, this, e), s(a, this, e))
        } catch (t) {
          a(this, e, t)
        }
      }, (r = function () {
        F(this, {
          type: D,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [
          ],
          rejection: !1,
          state: 0,
          value: void 0
        })
      }).prototype = _(q.prototype, {
        then: function (t, e) {
          var n = K(this),
          r = Y(A(this, q));
          return r.ok = 'function' != typeof t || t,
          r.fail = 'function' == typeof e && e,
          r.domain = Z ? X.domain : void 0,
          n.parent = !0,
          n.reactions.push(r),
          0 != n.state && i(this, n, !1),
          r.promise
        },
        catch : function (t) {
          return this.then(void 0, t)
        }
      }), u = function () {
        var t = new r,
        e = V(t);
        this.promise = t,
        this.resolve = s(it, t, e),
        this.reject = s(a, t, e)
      }, L.f = Y = function (t) {
        return t === q || t === c ? new u : G(t)
      }, h || 'function' != typeof v || (l = v.prototype.then, g(v.prototype, 'then', function (t, e) {
        var n = this;
        return new q(function (t, e) {
          l.call(n, t, e)
        }).then(t, e)
      }, {
        unsafe: !0
      }), 'function' == typeof W && f({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function (t) {
          return B(q, W.apply(p, arguments))
        }
      }))),
      f({
        global: !0,
        wrap: !0,
        forced: tt
      }, {
        Promise: q
      }),
      m(q, D, !1, !0),
      b(D),
      c = d(D),
      f({
        target: D,
        stat: !0,
        forced: tt
      }, {
        reject: function (t) {
          var e = Y(this);
          return e.reject.call(void 0, t),
          e.promise
        }
      }),
      f({
        target: D,
        stat: !0,
        forced: h || tt
      }, {
        resolve: function (t) {
          return B(h && this === c ? q : this, t)
        }
      }),
      f({
        target: D,
        stat: !0,
        forced: et
      }, {
        all: function (t) {
          var a = this,
          e = Y(a),
          u = e.resolve,
          c = e.reject,
          n = I(function () {
            var r = x(a.resolve),
            o = [
            ],
            i = 0,
            s = 1;
            E(t, function (t) {
              var e = i++,
              n = !1;
              o.push(void 0),
              s++,
              r.call(a, t).then(function (t) {
                n || (n = !0, o[e] = t, --s || u(o))
              }, c)
            }),
            --s || u(o)
          });
          return n.error && c(n.value),
          e.promise
        },
        race: function (t) {
          var n = this,
          r = Y(n),
          o = r.reject,
          e = I(function () {
            var e = x(n.resolve);
            E(t, function (t) {
              e.call(n, t).then(r.resolve, o)
            })
          });
          return e.error && o(e.value),
          r.promise
        }
      })
    },
    function (t, e, n) {
      var r,
      o,
      i,
      s,
      a,
      u,
      c,
      l,
      f = n(11),
      h = n(92).f,
      p = n(63),
      d = n(242).set,
      y = n(243),
      v = f.MutationObserver || f.WebKitMutationObserver,
      g = f.process,
      _ = f.Promise,
      m = 'process' == p(g),
      b = h(f, 'queueMicrotask'),
      w = b && b.value;
      w || (r = function () {
        var t,
        e;
        for (m && (t = g.domain) && t.exit(); o; ) {
          e = o.fn,
          o = o.next;
          try {
            e()
          } catch (t) {
            throw o ? s() : i = void 0,
            t
          }
        }
        i = void 0,
        t && t.enter()
      }, s = m ? function () {
        g.nextTick(r)
      }
       : v && !y ? (a = !0, u = document.createTextNode(''), new v(r).observe(u, {
        characterData: !0
      }), function () {
        u.data = a = !a
      }) : _ && _.resolve ? (c = _.resolve(void 0), l = c.then, function () {
        l.call(c, r)
      }) : function () {
        d.call(f, r)
      }),
      t.exports = w || function (t) {
        var e = {
          fn: t,
          next: void 0
        };
        i && (i.next = e),
        o || (o = e, s()),
        i = e
      }
    },
    function (t, e, n) {
      var r = n(11);
      t.exports = function (t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      c = n(15),
      o = n(171),
      i = n(245),
      l = n(16);
      r({
        target: 'Promise',
        stat: !0
      }, {
        allSettled: function (t) {
          var a = this,
          e = o.f(a),
          u = e.resolve,
          n = e.reject,
          r = i(function () {
            var r = c(a.resolve),
            o = [
            ],
            i = 0,
            s = 1;
            l(t, function (t) {
              var e = i++,
              n = !1;
              o.push(void 0),
              s++,
              r.call(a, t).then(function (t) {
                n || (n = !0, o[e] = {
                  status: 'fulfilled',
                  value: t
                }, --s || u(o))
              }, function (t) {
                n || (n = !0, o[e] = {
                  status: 'rejected',
                  reason: t
                }, --s || u(o))
              })
            }),
            --s || u(o)
          });
          return r.error && n(r.value),
          e.promise
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(241),
      s = n(7),
      a = n(38),
      u = n(110),
      c = n(244),
      l = n(81);
      r({
        target: 'Promise',
        proto: !0,
        real: !0,
        forced: !!i && s(function () {
          i.prototype.finally.call({
            then: function () {
            }
          }, function () {
          })
        })
      }, {
        finally : function (e) {
          var n = u(this, a('Promise')),
          t = 'function' == typeof e;
          return this.then(t ? function (t) {
            return c(n, e()).then(function () {
              return t
            })
          }
           : e, t ? function (t) {
            return c(n, e()).then(function () {
              throw t
            })
          }
           : e)
        }
      }),
      o || 'function' != typeof i || i.prototype.finally || l(i.prototype, 'finally', a('Promise').prototype.finally)
    },
    function (t, e, n) {
      t.exports = n(438)
    },
    function (t, e, n) {
      'use strict';
      var r = n(23);
      n(86),
      n(62),
      n(2),
      n(246);
      var o = n(32),
      i = n(249),
      s = n(445),
      a = n(260);
      function u(t) {
        var e = new s(t),
        n = i(s.prototype.request, e);
        return o.extend(n, s.prototype, e),
        o.extend(n, e),
        n
      }
      var c = u(n(253));
      c.Axios = s,
      c.create = function (t) {
        return u(a(c.defaults, t))
      },
      c.Cancel = n(261),
      c.CancelToken = n(478),
      c.isCancel = n(252),
      c.all = function (t) {
        return r.all(t)
      },
      c.spread = n(479),
      c.isAxiosError = n(480),
      t.exports = c,
      t.exports.default = c
    },
    function (t, e, n) {
      var r = n(440);
      t.exports = r
    },
    function (t, e, n) {
      n(441);
      var r = n(3);
      t.exports = r.URLSearchParams
    },
    function (t, e, n) {
      'use strict';
      n(152);
      function o(e) {
        try {
          return decodeURIComponent(e)
        } catch (t) {
          return e
        }
      }
      function s(t) {
        var e,
        n = t.replace(U, ' '),
        r = 4;
        try {
          return decodeURIComponent(n)
        } catch (t) {
          for (; r; ) n = n.replace((e = r--, M[e - 1] || (M[e - 1] = RegExp('((?:%[\\da-f]{2}){' + e + '})', 'gi'))), o);
          return n
        }
      }
      function r(t) {
        return D[t]
      }
      function i(t) {
        return encodeURIComponent(t).replace(H, r)
      }
      function h(t, e) {
        if (e) for (var n, r, o = e.split('&'), i = 0; i < o.length; ) (n = o[i++]).length && (r = n.split('='), t.push({
          key: s(r.shift()),
          value: s(r.join('='))
        }))
      }
      function p(t) {
        this.entries.length = 0,
        h(this.entries, t)
      }
      function c(t, e) {
        if (t < e) throw TypeError('Not enough arguments')
      }
      var a = n(0),
      u = n(38),
      l = n(442),
      f = n(81),
      d = n(104),
      y = n(60),
      v = n(196),
      g = n(54),
      _ = n(103),
      m = n(26),
      b = n(24),
      w = n(65),
      x = n(5),
      O = n(12),
      S = n(80),
      k = n(78),
      E = n(172),
      P = n(120),
      A = n(9),
      j = u('fetch'),
      T = u('Headers'),
      B = A('iterator'),
      R = 'URLSearchParams',
      L = R + 'Iterator',
      I = g.set,
      N = g.getterFor(R),
      C = g.getterFor(L),
      U = /\+/g,
      M = Array(4),
      H = /[!'()~]|%20/g,
      D = {
        '!': '%21',
        '\'': '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
      },
      V = v(function (t, e) {
        I(this, {
          type: L,
          iterator: E(N(t).entries),
          kind: e
        })
      }, 'Iterator', function () {
        var t = C(this),
        e = t.kind,
        n = t.iterator.next(),
        r = n.value;
        return n.done || (n.value = 'keys' === e ? r.key : 'values' === e ? r.value : [
          r.key,
          r.value
        ]),
        n
      }),
      F = function (t) {
        _(this, F, R);
        var e,
        n,
        r,
        o,
        i,
        s,
        a,
        u,
        c,
        l = 0 < arguments.length ? t : void 0,
        f = [
        ];
        if (I(this, {
          type: R,
          entries: f,
          updateURL: function () {
          },
          updateSearchParams: p
        }), void 0 !== l) if (O(l)) if ('function' == typeof (e = P(l))) for (r = (n = e.call(l)).next; !(o = r.call(n)).done; ) {
          if ((a = (s = (i = E(x(o.value))).next).call(i)).done || (u = s.call(i)).done || !s.call(i).done) throw TypeError('Expected sequence with length 2');
          f.push({
            key: a.value + '',
            value: u.value + ''
          })
        } else for (c in l) m(l, c) && f.push({
          key: c,
          value: l[c] + ''
        });
         else h(f, 'string' == typeof l ? '?' === l.charAt(0) ? l.slice(1) : l : l + '')
      },
      K = F.prototype;
      d(K, {
        append: function (t, e) {
          c(arguments.length, 2);
          var n = N(this);
          n.entries.push({
            key: t + '',
            value: e + ''
          }),
          n.updateURL()
        },
        delete : function (t) {
          c(arguments.length, 1);
          for (var e = N(this), n = e.entries, r = t + '', o = 0; o < n.length; ) n[o].key === r ? n.splice(o, 1) : o++;
          e.updateURL()
        },
        get: function (t) {
          c(arguments.length, 1);
          for (var e = N(this).entries, n = t + '', r = 0; r < e.length; r++) if (e[r].key === n) return e[r].value;
          return null
        },
        getAll: function (t) {
          c(arguments.length, 1);
          for (var e = N(this).entries, n = t + '', r = [
          ], o = 0; o < e.length; o++) e[o].key === n && r.push(e[o].value);
          return r
        },
        has: function (t) {
          c(arguments.length, 1);
          for (var e = N(this).entries, n = t + '', r = 0; r < e.length; ) if (e[r++].key === n) return !0;
          return !1
        },
        set: function (t, e) {
          c(arguments.length, 1);
          for (var n, r = N(this), o = r.entries, i = !1, s = t + '', a = e + '', u = 0; u < o.length; u++) (n = o[u]).key === s && (i ? o.splice(u--, 1) : (i = !0, n.value = a));
          i || o.push({
            key: s,
            value: a
          }),
          r.updateURL()
        },
        sort: function () {
          var t,
          e,
          n,
          r = N(this),
          o = r.entries,
          i = o.slice();
          for (n = o.length = 0; n < i.length; n++) {
            for (t = i[n], e = 0; e < n; e++) if (o[e].key > t.key) {
              o.splice(e, 0, t);
              break
            }
            e === n && o.push(t)
          }
          r.updateURL()
        },
        forEach: function (t, e) {
          for (var n, r = N(this).entries, o = b(t, 1 < arguments.length ? e : void 0, 3), i = 0; i < r.length; ) o((n = r[i++]).value, n.key, this)
        },
        keys: function () {
          return new V(this, 'keys')
        },
        values: function () {
          return new V(this, 'values')
        },
        entries: function () {
          return new V(this, 'entries')
        }
      }, {
        enumerable: !0
      }),
      f(K, B, K.entries),
      f(K, 'toString', function () {
        for (var t, e = N(this).entries, n = [
        ], r = 0; r < e.length; ) t = e[r++],
        n.push(i(t.key) + '=' + i(t.value));
        return n.join('&')
      }, {
        enumerable: !0
      }),
      y(F, R),
      a({
        global: !0,
        forced: !l
      }, {
        URLSearchParams: F
      }),
      l || 'function' != typeof j || 'function' != typeof T || a({
        global: !0,
        enumerable: !0,
        forced: !0
      }, {
        fetch: function (t, e) {
          var n,
          r,
          o,
          i = [
            t
          ];
          return 1 < arguments.length && (O(n = e) && (r = n.body, w(r) === R && ((o = n.headers ? new T(n.headers) : new T).has('content-type') || o.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'), n = S(n, {
            body: k(0, String(r)),
            headers: k(0, o)
          }))), i.push(n)),
          j.apply(this, i)
        }
      }),
      t.exports = {
        URLSearchParams: F,
        getState: N
      }
    },
    function (t, e, n) {
      var r = n(7),
      o = n(9),
      i = n(8),
      s = o('iterator');
      t.exports = !r(function () {
        var t = new URL('b?a=1&b=2&c=3', 'http://a'),
        n = t.searchParams,
        r = '';
        return t.pathname = 'c%20d',
        n.forEach(function (t, e) {
          n.delete('b'),
          r += e + t
        }),
        i && !t.toJSON || !n.sort || 'http://a/c%20d?a=1&c=3' !== t.href || '3' !== n.get('c') || 'a=1' !== String(new URLSearchParams('?a=1')) || !n[s] || 'a' !== new URL('https://a@b').username || 'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') || 'xn--e1aybc' !== new URL('http://тест').host || '#%D0%B1' !== new URL('http://a#б').hash || 'a1c3' !== r || 'x' !== new URL('http://x', void 0).host
      })
    },
    function (t, e, n) {
      var r = n(248);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(0),
      o = n(7),
      i = n(37),
      s = n(149),
      a = n(198);
      r({
        target: 'Object',
        stat: !0,
        forced: o(function () {
          s(1)
        }),
        sham: !a
      }, {
        getPrototypeOf: function (t) {
          return s(i(t))
        }
      })
    },
    function (t, e, n) {
      'use strict';
      n(33);
      var s = n(1),
      a = n(23),
      r = n(32),
      o = n(250),
      i = n(449),
      u = n(450),
      c = n(260);
      function l(t) {
        this.defaults = t,
        this.interceptors = {
          request: new i,
          response: new i
        }
      }
      l.prototype.request = function (t, e) {
        var n,
        r;
        'string' == typeof t ? (t = e || {
        }).url = arguments[0] : t = t || {
        },
        (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = 'get';
        var o = [
          u,
          void 0
        ],
        i = a.resolve(t);
        for (s(n = this.interceptors.request).call(n, function (t) {
          o.unshift(t.fulfilled, t.rejected)
        }), s(r = this.interceptors.response).call(r, function (t) {
          o.push(t.fulfilled, t.rejected)
        }); o.length; ) i = i.then(o.shift(), o.shift());
        return i
      },
      l.prototype.getUri = function (t) {
        return t = c(this.defaults, t),
        o(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
      },
      s(r).call(r, [
        'delete',
        'get',
        'head',
        'options'
      ], function (n) {
        l.prototype[n] = function (t, e) {
          return this.request(c(e || {
          }, {
            method: n,
            url: t,
            data: (e || {
            }).data
          }))
        }
      }),
      s(r).call(r, [
        'post',
        'put',
        'patch'
      ], function (r) {
        l.prototype[r] = function (t, e, n) {
          return this.request(c(n || {
          }, {
            method: r,
            url: t,
            data: e
          }))
        }
      }),
      t.exports = l
    },
    function (t, e, n) {
      var r = n(251);
      t.exports = r
    },
    function (t, e, n) {
      n(448);
      var r = n(19);
      t.exports = r('Array').indexOf
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(201).indexOf,
      i = n(85),
      s = n(59),
      a = [
      ].indexOf,
      u = !!a && 1 / [
        1
      ].indexOf(1, - 0) < 0,
      c = i('indexOf'),
      l = s('indexOf', {
        ACCESSORS: !0,
        1: 0
      });
      r({
        target: 'Array',
        proto: !0,
        forced: u || !c || !l
      }, {
        indexOf: function (t, e) {
          return u ? a.apply(this, arguments) || 0 : o(this, t, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(1),
      o = n(32);
      function i() {
        this.handlers = [
        ]
      }
      i.prototype.use = function (t, e) {
        return this.handlers.push({
          fulfilled: t,
          rejected: e
        }),
        this.handlers.length - 1
      },
      i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
      },
      i.prototype.forEach = function (e) {
        r(o).call(o, this.handlers, function (t) {
          null !== t && e(t)
        })
      },
      t.exports = i
    },
    function (t, e, n) {
      'use strict';
      var r = n(23),
      o = n(1),
      i = n(32),
      s = n(451),
      a = n(252),
      u = n(253);
      function c(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
      }
      t.exports = function (e) {
        return c(e),
        e.headers = e.headers || {
        },
        e.data = s(e.data, e.headers, e.transformRequest),
        e.headers = i.merge(e.headers.common || {
        }, e.headers[e.method] || {
        }, e.headers),
        o(i).call(i, [
          'delete',
          'get',
          'head',
          'post',
          'put',
          'patch',
          'common'
        ], function (t) {
          delete e.headers[t]
        }),
        (e.adapter || u.adapter) (e).then(function (t) {
          return c(e),
          t.data = s(t.data, t.headers, e.transformResponse),
          t
        }, function (t) {
          return a(t) || (c(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))),
          r.reject(t)
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(1),
      o = n(32);
      t.exports = function (e, n, t) {
        return r(o).call(o, t, function (t) {
          e = t(e, n)
        }),
        e
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(1),
      i = n(32);
      t.exports = function (n, r) {
        o(i).call(i, n, function (t, e) {
          e !== r && e.toUpperCase() === r.toUpperCase() && (n[r] = t, delete n[e])
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(255);
      t.exports = function (t, e, n) {
        var r = n.config.validateStatus;
        n.status && r && !r(n.status) ? e(o('Request failed with status code ' + n.status, n.config, null, n.request, n)) : t(n)
      }
    },
    function (t, e, n) {
      'use strict';
      n(87),
      t.exports = function (t, e, n, r, o) {
        return t.config = e,
        n && (t.code = n),
        t.request = r,
        t.response = o,
        t.isAxiosError = !0,
        t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          }
        },
        t
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(256);
      n(257),
      n(173);
      var a = n(32);
      t.exports = a.isStandardBrowserEnv() ? {
        write: function (t, e, n, r, o, i) {
          var s = [
          ];
          s.push(t + '=' + encodeURIComponent(e)),
          a.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          a.isString(r) && s.push('path=' + r),
          a.isString(o) && s.push('domain=' + o),
          !0 === i && s.push('secure'),
          document.cookie = s.join('; ')
        },
        read: function (t) {
          var e = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
          return e ? decodeURIComponent(e[3]) : null
        },
        remove: function (t) {
          this.write(t, '', r() - 86400000)
        }
      }
       : {
        write: function () {
        },
        read: function () {
          return null
        },
        remove: function () {
        }
      }
    },
    function (t, e, n) {
      var r = n(457);
      t.exports = r
    },
    function (t, e, n) {
      n(458);
      var r = n(3);
      t.exports = r.Date.now
    },
    function (t, e, n) {
      n(0) ({
        target: 'Date',
        stat: !0
      }, {
        now: function () {
          return (new Date).getTime()
        }
      })
    },
    function (t, e, o) {
      function i(t, e) {
        if (r(t), !n(e) && null !== e) throw TypeError(e + ': can\'t set as prototype!')
      }
      var n = o(61),
      r = o(43);
      t.exports = {
        set: Object.setPrototypeOf || ('__proto__' in {
        }
        ? function (t, n, r) {
          try {
            (r = o(125) (Function.call, o(161).f(Object.prototype, '__proto__').set, 2)) (t, [
            ]),
            n = !(t instanceof Array)
          } catch (t) {
            n = !0
          }
          return function (t, e) {
            return i(t, e),
            n ? t.__proto__ = e : r(t, e),
            t
          }
        }({
        }, !1) : void 0),
        check: i
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(461),
      o = n(462);
      t.exports = function (t, e) {
        return t && !r(e) ? o(t, e) : e
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
      }
    },
    function (t, e, n) {
      'use strict';
      n(33),
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(25),
      a = n(174),
      u = n(28);
      n(108);
      var c = n(1),
      l = n(32),
      f = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent'
      ];
      t.exports = function (t) {
        var n,
        r,
        o,
        i = {
        };
        return t && c(l).call(l, t.split('\n'), function (t) {
          if (o = u(t).call(t, ':'), n = a(l).call(l, t.substr(0, o)).toLowerCase(), r = a(l).call(l, t.substr(o + 1)), n) {
            if (i[n] && 0 <= u(f).call(f, n)) return;
            var e;
            if ('set-cookie' === n) i[n] = s(e = i[n] ? i[n] : [
            ]).call(e, [
              r
            ]);
             else i[n] = i[n] ? i[n] + ', ' + r : r
          }
        }),
        i
      }
    },
    function (t, e, n) {
      var r = n(465);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(466),
      o = String.prototype;
      t.exports = function (t) {
        var e = t.trim;
        return 'string' == typeof t || t === o || t instanceof String && e === o.trim ? r : e
      }
    },
    function (t, e, n) {
      n(467);
      var r = n(19);
      t.exports = r('String').trim
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(239).trim;
      r({
        target: 'String',
        proto: !0,
        forced: n(468) ('trim')
      }, {
        trim: function () {
          return o(this)
        }
      })
    },
    function (t, e, n) {
      var r = n(7),
      o = n(170);
      t.exports = function (t) {
        return r(function () {
          return !!o[t]() || '​᠎' != '​᠎'[t]() || o[t].name !== t
        })
      }
    },
    function (t, e, n) {
      'use strict';
      n(259),
      n(33);
      var r,
      o,
      i,
      s = n(32);
      function a(t) {
        var e = t;
        return o && (i.setAttribute('href', e), e = i.href),
        i.setAttribute('href', e),
        {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, '') : '',
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, '') : '',
          hash: i.hash ? i.hash.replace(/^#/, '') : '',
          hostname: i.hostname,
          port: i.port,
          pathname: '/' === i.pathname.charAt(0) ? i.pathname : '/' + i.pathname
        }
      }
      t.exports = s.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement('a'), r = a(window.location.href), function (t) {
        var e = s.isString(t) ? a(t) : t;
        return e.protocol === r.protocol && e.host === r.host
      }) : function () {
        return !0
      }
    },
    function (t, e) {
      t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
      }
    },
    function (t, e, n) {
      var r = n(472);
      t.exports = r
    },
    function (t, e, n) {
      n(473);
      var r = n(3);
      t.exports = r.Object.keys
    },
    function (t, e, n) {
      var r = n(0),
      o = n(37),
      i = n(97);
      r({
        target: 'Object',
        stat: !0,
        forced: n(7) (function () {
          i(1)
        })
      }, {
        keys: function (t) {
          return i(o(t))
        }
      })
    },
    function (t, e, n) {
      var r = n(475);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(476),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.filter;
        return t === o || t instanceof Array && e === o.filter ? r : e
      }
    },
    function (t, e, n) {
      n(477);
      var r = n(19);
      t.exports = r('Array').filter
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(71).filter,
      i = n(95),
      s = n(59),
      a = i('filter'),
      u = s('filter');
      r({
        target: 'Array',
        proto: !0,
        forced: !a || !u
      }, {
        filter: function (t, e) {
          return o(this, t, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(23),
      o = n(261);
      function i(t) {
        if ('function' != typeof t) throw new TypeError('executor must be a function.');
        var e;
        this.promise = new r(function (t) {
          e = t
        });
        var n = this;
        t(function (t) {
          n.reason || (n.reason = new o(t), e(n.reason))
        })
      }
      i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
      },
      i.source = function () {
        var e;
        return {
          token: new i(function (t) {
            e = t
          }),
          cancel: e
        }
      },
      t.exports = i
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (e) {
        return function (t) {
          return e.apply(null, t)
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(13);
      t.exports = function (t) {
        return 'object' === r(t) && !0 === t.isAxiosError
      }
    },
    function (t, e, n) {
      var r = n(229);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(483);
      t.exports = r
    },
    function (t, e, n) {
      n(484);
      var r = n(3).Object,
      o = t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e)
      };
      r.getOwnPropertyDescriptor.sham && (o.sham = !0)
    },
    function (t, e, n) {
      var r = n(0),
      o = n(7),
      i = n(47),
      s = n(92).f,
      a = n(22),
      u = o(function () {
        s(1)
      });
      r({
        target: 'Object',
        stat: !0,
        forced: !a || u,
        sham: !a
      }, {
        getOwnPropertyDescriptor: function (t, e) {
          return s(i(t), e)
        }
      })
    },
    function (t, e, n) {
      var r = n(486);
      t.exports = r
    },
    function (t, e, n) {
      n(105),
      n(487),
      n(55);
      var r = n(3);
      t.exports = r.WeakMap
    },
    function (t, e, n) {
      'use strict';
      function r(e) {
        return function (t) {
          return e(this, arguments.length ? t : void 0)
        }
      }
      var o,
      i = n(11),
      s = n(104),
      a = n(102),
      u = n(163),
      c = n(488),
      l = n(12),
      f = n(54).enforce,
      h = n(194),
      p = !i.ActiveXObject && 'ActiveXObject' in i,
      d = Object.isExtensible,
      y = t.exports = u('WeakMap', r, c);
      if (h && p) {
        o = c.getConstructor(r, 'WeakMap', !0),
        a.REQUIRED = !0;
        var v = y.prototype,
        g = v.delete,
        _ = v.has,
        m = v.get,
        b = v.set;
        s(v, {
          delete : function (t) {
            if (!l(t) || d(t)) return g.call(this, t);
            var e = f(this);
            return e.frozen || (e.frozen = new o),
            g.call(this, t) || e.frozen.delete(t)
          },
          has: function (t) {
            if (!l(t) || d(t)) return _.call(this, t);
            var e = f(this);
            return e.frozen || (e.frozen = new o),
            _.call(this, t) || e.frozen.has(t)
          },
          get: function (t) {
            if (!l(t) || d(t)) return m.call(this, t);
            var e = f(this);
            return e.frozen || (e.frozen = new o),
            _.call(this, t) ? m.call(this, t) : e.frozen.get(t)
          },
          set: function (t, e) {
            if (l(t) && !d(t)) {
              var n = f(this);
              n.frozen || (n.frozen = new o),
              _.call(this, t) ? b.call(this, t, e) : n.frozen.set(t, e)
            } else b.call(this, t, e);
            return this
          }
        })
      }
    },
    function (t, e, n) {
      'use strict';
      function u(t) {
        return t.frozen || (t.frozen = new m)
      }
      function r(t, e) {
        return s(t.entries, function (t) {
          return t[0] === e
        })
      }
      var c = n(104),
      l = n(102).getWeakData,
      f = n(5),
      h = n(12),
      p = n(103),
      d = n(16),
      o = n(71),
      y = n(26),
      i = n(54),
      v = i.set,
      g = i.getterFor,
      s = o.find,
      a = o.findIndex,
      _ = 0,
      m = function () {
        this.entries = [
        ]
      };
      m.prototype = {
        get: function (t) {
          var e = r(this, t);
          if (e) return e[1]
        },
        has: function (t) {
          return !!r(this, t)
        },
        set: function (t, e) {
          var n = r(this, t);
          n ? n[1] = e : this.entries.push([t,
          e])
        },
        delete : function (e) {
          var t = a(this.entries, function (t) {
            return t[0] === e
          });
          return ~t && this.entries.splice(t, 1),
          !!~t
        }
      },
      t.exports = {
        getConstructor: function (t, n, r, o) {
          function i(t, e, n) {
            var r = a(t),
            o = l(f(e), !0);
            return !0 === o ? u(r).set(e, n) : o[r.id] = n,
            t
          }
          var s = t(function (t, e) {
            p(t, s, n),
            v(t, {
              type: n,
              id: _++,
              frozen: void 0
            }),
            null != e && d(e, t[o], t, r)
          }),
          a = g(n);
          return c(s.prototype, {
            delete : function (t) {
              var e = a(this);
              if (!h(t)) return !1;
              var n = l(t);
              return !0 === n ? u(e).delete(t) : n && y(n, e.id) && delete n[e.id]
            },
            has: function (t) {
              var e = a(this);
              if (!h(t)) return !1;
              var n = l(t);
              return !0 === n ? u(e).has(t) : n && y(n, e.id)
            }
          }),
          c(s.prototype, r ? {
            get: function (t) {
              var e = a(this);
              if (h(t)) {
                var n = l(t);
                return !0 === n ? u(e).get(t) : n ? n[e.id] : void 0
              }
            },
            set: function (t, e) {
              return i(this, t, e)
            }
          }
           : {
            add: function (t) {
              return i(this, t, !0)
            }
          }),
          s
        }
      }
    },
    function (t, e, n) {
      var r = n(233);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(235);
      t.exports = r
    },
    function (t, e, n) {
      n(55);
      var r = n(492),
      o = n(65),
      i = Array.prototype,
      s = {
        DOMTokenList: !0,
        NodeList: !0
      };
      t.exports = function (t) {
        var e = t.entries;
        return t === i || t instanceof Array && e === i.entries || s.hasOwnProperty(o(t)) ? r : e
      }
    },
    function (t, e, n) {
      var r = n(493);
      t.exports = r
    },
    function (t, e, n) {
      n(152);
      var r = n(19);
      t.exports = r('Array').entries
    },
    function (t, e, n) {
      function r(t, e, n) {
        var r = {
        },
        o = a(function () {
          return !!u[t]() || '​' != '​'[t]()
        }),
        i = r[t] = o ? e(f) : u[t];
        n && (r[n] = i),
        s(s.P + s.F * o, 'String', r)
      }
      var s = n(49),
      o = n(69),
      a = n(29),
      u = n(495),
      i = '[' + u + ']',
      c = RegExp('^' + i + i + '*'),
      l = RegExp(i + i + '*$'),
      f = r.trim = function (t, e) {
        return t = String(o(t)),
        1 & e && (t = t.replace(c, '')),
        2 & e && (t = t.replace(l, '')),
        t
      };
      t.exports = r
    },
    function (t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029﻿'
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(497)
    },
    function (t, e, n) {
      'use strict';
      var r = e;
      function o() {
        r.Reader._configure(r.BufferReader),
        r.util._configure()
      }
      r.build = 'minimal',
      r.Writer = n(263),
      r.BufferWriter = n(511),
      r.Reader = n(276),
      r.BufferReader = n(512),
      r.util = n(74),
      r.rpc = n(513),
      r.roots = n(515),
      r.configure = o,
      r.Writer._configure(r.BufferWriter),
      o()
    },
    function (t, e, n) {
      var r = n(264);
      t.exports = r
    },
    function (t, e, n) {
      n(0) ({
        target: 'Object',
        stat: !0,
        sham: !n(22)
      }, {
        create: n(80)
      })
    },
    function (t, e, n) {
      var r = n(501);
      t.exports = r
    },
    function (t, e, n) {
      n(502);
      var r = n(3);
      t.exports = r.Object.freeze
    },
    function (t, e, n) {
      var r = n(0),
      o = n(223),
      i = n(7),
      s = n(12),
      a = n(102).onFreeze,
      u = Object.freeze;
      r({
        target: 'Object',
        stat: !0,
        forced: i(function () {
          u(1)
        }),
        sham: !o
      }, {
        freeze: function (t) {
          return u && s(t) ? u(a(t)) : t
        }
      })
    },
    function (t, e, n) {
      var r = n(504);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(505),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.splice;
        return t === o || t instanceof Array && e === o.splice ? r : e
      }
    },
    function (t, e, n) {
      n(506);
      var r = n(19);
      t.exports = r('Array').splice
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      h = n(119),
      p = n(94),
      d = n(42),
      y = n(37),
      v = n(143),
      g = n(116),
      o = n(95),
      i = n(59),
      s = o('splice'),
      a = i('splice', {
        ACCESSORS: !0,
        0: 0,
        1: 2
      }),
      _ = Math.max,
      m = Math.min;
      r({
        target: 'Array',
        proto: !0,
        forced: !s || !a
      }, {
        splice: function (t, e) {
          var n,
          r,
          o,
          i,
          s,
          a,
          u = y(this),
          c = d(u.length),
          l = h(t, c),
          f = arguments.length;
          if (0 === f ? n = r = 0 : r = 1 === f ? (n = 0, c - l) : (n = f - 2, m(_(p(e), 0), c - l)), 9007199254740991 < c + n - r) throw TypeError('Maximum allowed length exceeded');
          for (o = v(u, r), i = 0; i < r; i++) (s = l + i) in u && g(o, i, u[s]);
          if (n < (o.length = r)) {
            for (i = l; i < c - r; i++) a = i + n,
            (s = i + r) in u ? u[a] = u[s] : delete u[a];
            for (i = c; c - r + n < i; i--) delete u[i - 1]
          } else if (r < n) for (i = c - r; l < i; i--) a = i + n - 1,
          (s = i + r - 1) in u ? u[a] = u[s] : delete u[a];
          for (i = 0; i < n; i++) u[i + l] = arguments[i + 2];
          return u.length = c - r + n,
          o
        }
      })
    },
    function (t, e, n) {
      var r = n(270);
      t.exports = r
    },
    function (t, e, n) {
      n(509);
      var r = n(19);
      t.exports = r('Function').bind
    },
    function (t, e, n) {
      n(0) ({
        target: 'Function',
        proto: !0
      }, {
        bind: n(271)
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(31);
      t.exports = i;
      var o = n(74);
      function i(t, e) {
        this.lo = t >>> 0,
        this.hi = e >>> 0
      }
      var s = i.zero = new i(0, 0);
      s.toNumber = function () {
        return 0
      },
      s.zzEncode = s.zzDecode = function () {
        return this
      },
      s.length = function () {
        return 1
      };
      var a = i.zeroHash = '\x00\x00\x00\x00\x00\x00\x00\x00';
      i.fromNumber = function (t) {
        if (0 === t) return s;
        var e = t < 0;
        e && (t = - t);
        var n = t >>> 0,
        r = (t - n) / 4294967296 >>> 0;
        return e && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))),
        new i(n, r)
      },
      i.from = function (t) {
        if ('number' == typeof t) return i.fromNumber(t);
        if (o.isString(t)) {
          if (!o.Long) return i.fromNumber(r(t, 10));
          t = o.Long.fromString(t)
        }
        return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : s
      },
      i.prototype.toNumber = function (t) {
        if (!t && this.hi >>> 31) {
          var e = 1 + ~this.lo >>> 0,
          n = ~this.hi >>> 0;
          return e || (n = n + 1 >>> 0),
          - (e + 4294967296 * n)
        }
        return this.lo + 4294967296 * this.hi
      },
      i.prototype.toLong = function (t) {
        return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
          low: 0 | this.lo,
          high: 0 | this.hi,
          unsigned: Boolean(t)
        }
      };
      var u = String.prototype.charCodeAt;
      i.fromHash = function (t) {
        return t === a ? s : new i((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
      },
      i.prototype.toHash = function () {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
      },
      i.prototype.zzEncode = function () {
        var t = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0,
        this.lo = (this.lo << 1 ^ t) >>> 0,
        this
      },
      i.prototype.zzDecode = function () {
        var t = - (1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0,
        this.hi = (this.hi >>> 1 ^ t) >>> 0,
        this
      },
      i.prototype.length = function () {
        var t = this.lo,
        e = (this.lo >>> 28 | this.hi << 4) >>> 0,
        n = this.hi >>> 24;
        return 0 == n ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
      }
    },
    function (t, e, n) {
      'use strict';
      n(6);
      var r = n(21);
      t.exports = a;
      var o = n(263);
      (a.prototype = r(o.prototype)).constructor = a;
      var i = n(74),
      s = i.Buffer;
      function a() {
        o.call(this)
      }
      a.alloc = function (t) {
        return (a.alloc = i._Buffer_allocUnsafe) (t)
      };
      var u = s && s.prototype instanceof Uint8Array && 'set' === s.prototype.set.name ? function (t, e, n) {
        e.set(t, n)
      }
       : function (t, e, n) {
        if (t.copy) t.copy(e, n, 0, t.length);
         else for (var r = 0; r < t.length; ) e[n++] = t[r++]
      };
      function c(t, e, n) {
        t.length < 40 ? i.utf8.write(t, e, n) : e.utf8Write(t, n)
      }
      a.prototype.bytes = function (t) {
        i.isString(t) && (t = i._Buffer_from(t, 'base64'));
        var e = t.length >>> 0;
        return this.uint32(e),
        e && this._push(u, e, t),
        this
      },
      a.prototype.string = function (t) {
        var e = s.byteLength(t);
        return this.uint32(e),
        e && this._push(c, e, t),
        this
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(14),
      o = n(21);
      t.exports = a;
      var i = n(276);
      (a.prototype = o(i.prototype)).constructor = a;
      var s = n(74);
      function a(t) {
        i.call(this, t)
      }
      s.Buffer && (a.prototype._slice = r(s.Buffer.prototype)),
      a.prototype.string = function () {
        var t = this.uint32();
        return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
      }
    },
    function (t, e, n) {
      'use strict';
      e.Service = n(514)
    },
    function (t, e, n) {
      'use strict';
      var a = n(107),
      r = n(21);
      t.exports = o;
      var u = n(74);
      function o(t, e, n) {
        if ('function' != typeof t) throw TypeError('rpcImpl must be a function');
        u.EventEmitter.call(this),
        this.rpcImpl = t,
        this.requestDelimited = Boolean(e),
        this.responseDelimited = Boolean(n)
      }((o.prototype = r(u.EventEmitter.prototype)).constructor = o).prototype.rpcCall = function t(n, e, r, o, i) {
        if (!o) throw TypeError('request must be specified');
        var s = this;
        if (!i) return u.asPromise(t, s, n, e, r, o);
        if (s.rpcImpl) try {
          return s.rpcImpl(n, e[s.requestDelimited ? 'encodeDelimited' : 'encode'](o).finish(), function (t, e) {
            if (t) return s.emit('error', t, n),
            i(t);
            if (null !== e) {
              if (!(e instanceof r)) try {
                e = r[s.responseDelimited ? 'decodeDelimited' : 'decode'](e)
              } catch (t) {
                return s.emit('error', t, n),
                i(t)
              }
              return s.emit('data', e, n),
              i(null, e)
            }
            s.end(!0)
          })
        } catch (t) {
          return s.emit('error', t, n),
          void a(function () {
            i(t)
          }, 0)
        } else a(function () {
          i(Error('already ended'))
        }, 0)
      },
      o.prototype.end = function (t) {
        return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit('end').off()),
        this
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = {
      }
    },
    function (t, e, n) {
      var r = n(193);
      t.exports = r
    },
    function (t, n, e) {
      (n = t.exports = function (t) {
        t = t.toLowerCase();
        var e = n[t];
        if (!e) throw new Error(t + ' is not supported (we accept pull requests)');
        return new e
      }).sha = e(518),
      n.sha1 = e(537),
      n.sha224 = e(538),
      n.sha256 = e(280),
      n.sha384 = e(539),
      n.sha512 = e(281)
    },
    function (t, e, n) {
      var r = n(89),
      o = n(90),
      i = n(75).Buffer,
      g = [
        1518500249,
        1859775393,
        - 1894007588,
        - 899497514
      ],
      s = new Array(80);
      function a() {
        this.init(),
        this._w = s,
        o.call(this, 64, 56)
      }
      r(a, o),
      a.prototype.init = function () {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
      },
      a.prototype._update = function (t) {
        for (var e, n, r, o, i, s, a = this._w, u = 0 | this._a, c = 0 | this._b, l = 0 | this._c, f = 0 | this._d, h = 0 | this._e, p = 0; p < 16; ++p) a[p] = t.readInt32BE(4 * p);
        for (; p < 80; ++p) a[p] = a[p - 3] ^ a[p - 8] ^ a[p - 14] ^ a[p - 16];
        for (var d = 0; d < 80; ++d) {
          var y = ~~(d / 20),
          v = 0 | ((s = u) << 5 | s >>> 27) + (r = c, o = l, i = f, 0 === (n = y) ? r & o | ~r & i : 2 === n ? r & o | r & i | o & i : r ^ o ^ i) + h + a[d] + g[y];
          h = f,
          f = l,
          l = (e = c) << 30 | e >>> 2,
          c = u,
          u = v
        }
        this._a = u + this._a | 0,
        this._b = c + this._b | 0,
        this._c = l + this._c | 0,
        this._d = f + this._d | 0,
        this._e = h + this._e | 0
      },
      a.prototype._hash = function () {
        var t = i.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
      },
      t.exports = a
    },
    function (t, e, n) {
      var r = n(49);
      r(r.P, 'Array', {
        fill: n(157)
      }),
      n(160) ('fill')
    },
    function (t, e, n) {
      'use strict';
      var r = n(49),
      o = n(218),
      c = n(83),
      l = n(100),
      f = n(44),
      h = [
      ].slice;
      r(r.P + r.F * n(29) (function () {
        o && h.call(o)
      }), 'Array', {
        slice: function (t, e) {
          var n = f(this.length),
          r = c(this);
          if (e = void 0 === e ? n : e, 'Array' == r) return h.call(this, t, e);
          for (var o = l(t, n), i = l(e, n), s = f(i - o), a = new Array(s), u = 0; u < s; u++) a[u] = 'String' == r ? this.charAt(o + u) : this[o + u];
          return a
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(49),
      o = n(154) (!0);
      r(r.P, 'Array', {
        includes: function (t, e) {
          return o(this, t, 1 < arguments.length ? e : void 0)
        }
      }),
      n(160) ('includes')
    },
    function (t, e, n) {
      'use strict';
      var r = n(49),
      o = n(523);
      r(r.P + r.F * n(524) ('includes'), 'String', {
        includes: function (t, e) {
          return !!~o(this, t, 'includes').indexOf(t, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      var r = n(167),
      o = n(69);
      t.exports = function (t, e, n) {
        if (r(e)) throw TypeError('String#' + n + ' doesn\'t accept regex!');
        return String(o(t))
      }
    },
    function (t, e, n) {
      var r = n(18) ('match');
      t.exports = function (e) {
        var n = /./;
        try {
          '/./'[e](n)
        } catch (t) {
          try {
            return n[r] = !1,
            !'/./'[e](n)
          } catch (t) {
          }
        }
        return !0
      }
    },
    function (t, e, n) {
      t.exports = n(526)
    },
    function (t, e, n) {
      var r = n(527);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(528),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.lastIndexOf;
        return t === o || t instanceof Array && e === o.lastIndexOf ? r : e
      }
    },
    function (t, e, n) {
      n(529);
      var r = n(19);
      t.exports = r('Array').lastIndexOf
    },
    function (t, e, n) {
      var r = n(0),
      o = n(530);
      r({
        target: 'Array',
        proto: !0,
        forced: o !== [].lastIndexOf
      }, {
        lastIndexOf: o
      })
    },
    function (t, e, n) {
      'use strict';
      var i = n(47),
      s = n(94),
      a = n(42),
      r = n(85),
      o = n(59),
      u = Math.min,
      c = [
      ].lastIndexOf,
      l = !!c && 1 / [
        1
      ].lastIndexOf(1, - 0) < 0,
      f = r('lastIndexOf'),
      h = o('indexOf', {
        ACCESSORS: !0,
        1: 0
      }),
      p = l || !f || !h;
      t.exports = p ? function (t, e) {
        if (l) return c.apply(this, arguments) || 0;
        var n = i(this),
        r = a(n.length),
        o = r - 1;
        for (1 < arguments.length && (o = u(o, s(e))), o < 0 && (o = r + o); 0 <= o; o--) if (o in n && n[o] === t) return o || 0;
        return - 1
      }
       : c
    },
    function (t, e, n) {
      t.exports = n(532)
    },
    function (t, e, n) {
      var r = n(533);
      t.exports = r
    },
    function (t, e, n) {
      n(237);
      var r = n(134);
      t.exports = r.f('species')
    },
    function (t, e, n) {
      'use strict';
      var r = n(28);
      n(6),
      e.byteLength = function (t) {
        var e = f(t),
        n = e[0],
        r = e[1];
        return 3 * (n + r) / 4 - r
      },
      e.toByteArray = function (t) {
        var e,
        n,
        r = f(t),
        o = r[0],
        i = r[1],
        s = new l(function (t, e) {
          return 3 * (t + e) / 4 - e
        }(o, i)),
        a = 0,
        u = 0 < i ? o - 4 : o;
        for (n = 0; n < u; n += 4) e = c[t.charCodeAt(n)] << 18 | c[t.charCodeAt(n + 1)] << 12 | c[t.charCodeAt(n + 2)] << 6 | c[t.charCodeAt(n + 3)],
        s[a++] = e >> 16 & 255,
        s[a++] = e >> 8 & 255,
        s[a++] = 255 & e;
        2 === i && (e = c[t.charCodeAt(n)] << 2 | c[t.charCodeAt(n + 1)] >> 4, s[a++] = 255 & e);
        1 === i && (e = c[t.charCodeAt(n)] << 10 | c[t.charCodeAt(n + 1)] << 4 | c[t.charCodeAt(n + 2)] >> 2, s[a++] = e >> 8 & 255, s[a++] = 255 & e);
        return s
      },
      e.fromByteArray = function (t) {
        for (var e, n = t.length, r = n % 3, o = [
        ], i = 0, s = n - r; i < s; i += 16383) o.push(u(t, i, s < i + 16383 ? s : i + 16383));
        1 == r ? (e = t[n - 1], o.push(a[e >> 2] + a[e << 4 & 63] + '==')) : 2 == r && (e = (t[n - 2] << 8) + t[n - 1], o.push(a[e >> 10] + a[e >> 4 & 63] + a[e << 2 & 63] + '='));
        return o.join('')
      };
      for (var a = [
      ], c = [
      ], l = 'undefined' != typeof Uint8Array ? Uint8Array : Array, o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', i = 0, s = o.length; i < s; ++i) a[i] = o[i],
      c[o.charCodeAt(i)] = i;
      function f(t) {
        var e = t.length;
        if (0 < e % 4) throw new Error('Invalid string. Length must be a multiple of 4');
        var n = r(t).call(t, '=');
        return - 1 === n && (n = e),
        [
          n,
          n === e ? 0 : 4 - n % 4
        ]
      }
      function u(t, e, n) {
        for (var r, o, i = [
        ], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]),
        i.push(a[(o = r) >> 18 & 63] + a[o >> 12 & 63] + a[o >> 6 & 63] + a[63 & o]);
        return i.join('')
      }
      c['-'.charCodeAt(0)] = 62,
      c['_'.charCodeAt(0)] = 63
    },
    function (t, e) {
      e.read = function (t, e, n, r, o) {
        var i,
        s,
        a = 8 * o - r - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        l = - 7,
        f = n ? o - 1 : 0,
        h = n ? - 1 : 1,
        p = t[e + f];
        for (f += h, i = p & (1 << - l) - 1, p >>= - l, l += a; 0 < l; i = 256 * i + t[e + f], f += h, l -= 8);
        for (s = i & (1 << - l) - 1, i >>= - l, l += r; 0 < l; s = 256 * s + t[e + f], f += h, l -= 8);
        if (0 === i) i = 1 - c;
         else {
          if (i === u) return s ? NaN : 1 / 0 * (p ? - 1 : 1);
          s += Math.pow(2, r),
          i -= c
        }
        return (p ? - 1 : 1) * s * Math.pow(2, i - r)
      },
      e.write = function (t, e, n, r, o, i) {
        var s,
        a,
        u,
        c = 8 * i - o - 1,
        l = (1 << c) - 1,
        f = l >> 1,
        h = 23 === o ? Math.pow(2, - 24) - Math.pow(2, - 77) : 0,
        p = r ? 0 : i - 1,
        d = r ? 1 : - 1,
        y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, - s)) < 1 && (s--, u *= 2), 2 <= (e += 1 <= s + f ? h / u : h * Math.pow(2, 1 - f)) * u && (s++, u /= 2), l <= s + f ? (a = 0, s = l) : 1 <= s + f ? (a = (e * u - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); 8 <= o; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
        for (s = s << o | a, c += o; 0 < c; t[n + p] = 255 & s, p += d, s /= 256, c -= 8);
        t[n + p - d] |= 128 * y
      }
    },
    function (t, e, n) {
      var r = n(27);
      n(4),
      n(2);
      var o = {
      }.toString;
      t.exports = r || function (t) {
        return '[object Array]' == o.call(t)
      }
    },
    function (t, e, n) {
      var r = n(89),
      o = n(90),
      i = n(75).Buffer,
      _ = [
        1518500249,
        1859775393,
        - 1894007588,
        - 899497514
      ],
      s = new Array(80);
      function a() {
        this.init(),
        this._w = s,
        o.call(this, 64, 56)
      }
      r(a, o),
      a.prototype.init = function () {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
      },
      a.prototype._update = function (t) {
        for (var e, n, r, o, i, s, a, u = this._w, c = 0 | this._a, l = 0 | this._b, f = 0 | this._c, h = 0 | this._d, p = 0 | this._e, d = 0; d < 16; ++d) u[d] = t.readInt32BE(4 * d);
        for (; d < 80; ++d) u[d] = (e = u[d - 3] ^ u[d - 8] ^ u[d - 14] ^ u[d - 16]) << 1 | e >>> 31;
        for (var y = 0; y < 80; ++y) {
          var v = ~~(y / 20),
          g = 0 | ((a = c) << 5 | a >>> 27) + (o = l, i = f, s = h, 0 === (r = v) ? o & i | ~o & s : 2 === r ? o & i | o & s | i & s : o ^ i ^ s) + p + u[y] + _[v];
          p = h,
          h = f,
          f = (n = l) << 30 | n >>> 2,
          l = c,
          c = g
        }
        this._a = c + this._a | 0,
        this._b = l + this._b | 0,
        this._c = f + this._c | 0,
        this._d = h + this._d | 0,
        this._e = p + this._e | 0
      },
      a.prototype._hash = function () {
        var t = i.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
      },
      t.exports = a
    },
    function (t, e, n) {
      var r = n(89),
      o = n(280),
      i = n(90),
      s = n(75).Buffer,
      a = new Array(64);
      function u() {
        this.init(),
        this._w = a,
        i.call(this, 64, 56)
      }
      r(u, o),
      u.prototype.init = function () {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
      },
      u.prototype._hash = function () {
        var t = s.allocUnsafe(28);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t
      },
      t.exports = u
    },
    function (t, e, n) {
      var r = n(89),
      o = n(281),
      i = n(90),
      s = n(75).Buffer,
      a = new Array(160);
      function u() {
        this.init(),
        this._w = a,
        i.call(this, 128, 112)
      }
      r(u, o),
      u.prototype.init = function () {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
      },
      u.prototype._hash = function () {
        var r = s.allocUnsafe(48);
        function t(t, e, n) {
          r.writeInt32BE(t, n),
          r.writeInt32BE(e, n + 4)
        }
        return t(this._ah, this._al, 0),
        t(this._bh, this._bl, 8),
        t(this._ch, this._cl, 16),
        t(this._dh, this._dl, 24),
        t(this._eh, this._el, 32),
        t(this._fh, this._fl, 40),
        r
      },
      t.exports = u
    },
    function (t, e, n) {
      n(56) ('Uint32', 4, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      n(56) ('Uint8', 1, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      }, !0)
    },
    function (t, e, n) {
      n(56) ('Int16', 2, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      n(56) ('Int8', 1, function (r) {
        return function (t, e, n) {
          return r(this, t, e, n)
        }
      })
    },
    function (t, e, n) {
      t.exports = n(545)
    },
    function (t, e, n) {
      var r = n(546);
      t.exports = r
    },
    function (t, e, n) {
      n(547);
      var r = n(3).Object,
      o = t.exports = function (t, e) {
        return r.defineProperties(t, e)
      };
      r.defineProperties.sham && (o.sham = !0)
    },
    function (t, e, n) {
      var r = n(0),
      o = n(22);
      r({
        target: 'Object',
        stat: !0,
        forced: !o,
        sham: !o
      }, {
        defineProperties: n(199)
      })
    },
    function (t, e, n) {
      'use strict';
      var r,
      o,
      i,
      s,
      a,
      u = n(46),
      c = n(1),
      l = n(10);
      l(e, '__esModule', {
        value: !0
      });
      var f = n(549);
      c(r = u(f)).call(r, function (t) {
        'default' !== t && '__esModule' !== t && l(e, t, {
          enumerable: !0,
          get: function () {
            return f[t]
          }
        })
      });
      var h = n(290);
      c(o = u(h)).call(o, function (t) {
        'default' !== t && '__esModule' !== t && l(e, t, {
          enumerable: !0,
          get: function () {
            return h[t]
          }
        })
      });
      var p = n(580);
      c(i = u(p)).call(i, function (t) {
        'default' !== t && '__esModule' !== t && l(e, t, {
          enumerable: !0,
          get: function () {
            return p[t]
          }
        })
      });
      var d = n(589);
      c(s = u(d)).call(s, function (t) {
        'default' !== t && '__esModule' !== t && l(e, t, {
          enumerable: !0,
          get: function () {
            return d[t]
          }
        })
      });
      var y = n(609);
      c(a = u(y)).call(a, function (t) {
        'default' !== t && '__esModule' !== t && l(e, t, {
          enumerable: !0,
          get: function () {
            return y[t]
          }
        })
      })
    },
    function (t, e, n) {
      'use strict';
      n(6);
      var o = n(268),
      u = n(1),
      c = n(106),
      l = n(129),
      f = n(282),
      h = n(25);
      n(86),
      n(62);
      var p = n(137),
      r = n(177),
      d = n(27),
      y = n(283),
      v = n(121),
      i = n(135),
      s = n(181),
      a = n(28),
      g = n(139);
      n(4),
      n(2);
      var _ = n(111),
      m = n(286),
      b = n(21),
      w = n(52),
      x = n(13),
      O = n(40);
      n(10) (e, '__esModule', {
        value: !0
      }),
      e.ListProofError = e.ListProof = void 0;
      var S = T(n(278)),
      k = T(n(288)),
      E = n(140),
      P = n(76),
      A = n(88),
      j = n(289);
      function T(t) {
        return t && t.__esModule ? t : {
        default:
          t
        }
      }
      function B(t) {
        return (B = 'function' == typeof O && 'symbol' === x(w) ? function (t) {
          return x(t)
        }
         : function (t) {
          return t && 'function' == typeof O && t.constructor === O && t !== O.prototype ? 'symbol' : x(t)
        }) (t)
      }
      function R(t, e) {
        return !e || 'object' !== B(e) && 'function' != typeof e ? function (t) {
          if (void 0 !== t) return t;
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
        }(t) : e
      }
      function L(t) {
        var o = 'function' == typeof m ? new m : void 0;
        return (L = function (t) {
          if (null === t || (e = t, - 1 === a(n = Function.toString.call(e)).call(n, '[native code]'))) return t;
          var e,
          n;
          if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== o) {
            if (o.has(t)) return o.get(t);
            o.set(t, r)
          }
          function r() {
            return I(t, arguments, C(this).constructor)
          }
          return r.prototype = b(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }),
          N(r, t)
        }) (t)
      }
      function I(t, e, n) {
        return (I = function () {
          if ('undefined' != typeof Reflect && _ && !_.sham) {
            if ('function' == typeof Proxy) return 1;
            try {
              return Date.prototype.toString.call(_(Date, [
              ], function () {
              })),
              1
            } catch (t) {
              return
            }
          }
        }() ? _ : function (t, e, n) {
          var r = [
            null
          ];
          r.push.apply(r, e);
          var o = new (g(Function).apply(t, r));
          return n && N(o, n.prototype),
          o
        }).apply(null, arguments)
      }
      function N(t, e) {
        return (N = s || function (t, e) {
          return t.__proto__ = e,
          t
        }) (t, e)
      }
      function C(t) {
        return (C = s ? i : function (t) {
          return t.__proto__ || i(t)
        }) (t)
      }
      function U(t, e) {
        return function (t) {
          if (d(t)) return t
        }(t) || function (t, e) {
          if (!v(Object(t)) && '[object Arguments]' !== Object.prototype.toString.call(t)) return;
          var n = [
          ],
          r = !0,
          o = !1,
          i = void 0;
          try {
            for (var s, a = y(t); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
          } catch (t) {
            o = !0,
            i = t
          } finally {
            try {
              r || null == a.return || a.return()
            } finally {
              if (o) throw i
            }
          }
          return n
        }(t, e) || function () {
          throw new TypeError('Invalid attempt to destructure non-iterable instance')
        }()
      }
      function M(t) {
        return function (t) {
          if (d(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
          }
        }(t) || function (t) {
          if (v(Object(t)) || '[object Arguments]' === Object.prototype.toString.call(t)) return r(t)
        }(t) || function () {
          throw new TypeError('Invalid attempt to spread non-iterable instance')
        }()
      }
      function H(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      }
      function D(t, e) {
        var n = (0, k.default) (t, e + 1, function (t, e) {
          var n = t.height;
          t.index;
          return e !== n ? n - e : 1
        });
        if (0 <= n) throw new Error('Internal error while verifying list proof');
        var r = - n - 1;
        return o(t).call(t, 0, r)
      }
      function V(t, e) {
        for (var n = 0, r = 0, o = [
        ]; n < t.length || r < e.length; ) {
          var i = [
            t[n],
            e[r]
          ],
          s = i[0],
          a = i[1];
          if (s) if (a) if (s.index < a.index) o.push(s),
          n++;
           else {
            if (!(s.index > a.index)) throw new q('duplicateHash');
            o.push(a),
            r++
          } else o.push(s),
          n++;
           else o.push(a),
          r++
        }
        return o
      }
      function F(t, e) {
        for (var n = 0; n < t.length; n += 2) {
          var r = [
            t[n],
            t[n + 1]
          ],
          o = r[0],
          i = r[1],
          s = void 0;
          if (i) {
            if (o.index % 2 != 0 || i.index !== o.index + 1) throw new q('missingHash');
            s = K(o.hash, i.hash)
          } else {
            if (e % 2 == 1 || o.index !== e) throw new q('missingHash');
            s = K(o.hash)
          }
          t[n / 2] = {
            height: o.height + 1,
            index: o.index / 2,
            hash: s
          }
        }
        t.length = Math.ceil(t.length / 2)
      }
      function K(t, e) {
        var n = [
          j.LIST_BRANCH_PREFIX
        ];
        return E.Hash.serialize(t, n, n.length),
        e && E.Hash.serialize(e, n, n.length),
        (0, A.hash) (n)
      }
      e.ListProof = function t(e, n) {
        var r,
        o = e.proof,
        i = p(e),
        s = e.length;
        if (H(this, t), !n || 'function' != typeof n.serialize) throw new TypeError('No `serialize` method in the value type');
        if (this.valueType = n, this.proof = function (t) {
          if (!d(t)) throw new q('malformedProof');
          if (!f(t).call(t, function (t) {
            var e = t.index,
            n = t.height,
            r = t.hash;
            return /^[0-9a-f]{64}$/i.test(r) && l(e) && l(n) && 0 < n && n <= 58
          })) throw new q('malformedProof');
          for (var e = 0; e + 1 < t.length; e++) {
            var n = [
              t[e],
              t[e + 1]
            ],
            r = n[0],
            o = n[1];
            if (r.height > o.height || r.height === o.height && r.index >= o.index) throw new q('invalidProofOrdering')
          }
          return t
        }(o), this.entries = function (t, i) {
          if (!d(t)) throw new q('malformedEntries');
          for (var e = 0; e + 1 < t.length; e++) {
            var n = [
              t[e],
              t[e + 1]
            ],
            r = n[1];
            if (n[0][0] >= r[0]) throw new q('invalidValuesOrdering')
          }
          return c(t).call(t, function (t) {
            var e,
            n = U(t, 2),
            r = n[0],
            o = n[1];
            if (!l(r)) throw new q('malformedEntries');
            return {
              index: r,
              height: 0,
              value: o,
              hash: (0, A.hash) (h(e = [
                j.BLOB_PREFIX
              ]).call(e, M(i.serialize(o, [
              ], 0))))
            }
          })
        }(i, n), this.length = s, 0 === this.length) {
          if (0 !== this.proof.length || 0 !== p(this).length) throw new q('malformedEmptyProof');
          r = '0000000000000000000000000000000000000000000000000000000000000000'
        } else {
          var a;
          r = function (t, o) {
            var e,
            n = function (t) {
              var e = 0;
              for (; (0, S.default) (2).pow(e).lt(t); ) e++;
              return e + 1
            }(o);
            if (t[t.length - 1].height >= n) throw new q('unexpectedHeight');
            u(t).call(t, function (t) {
              var e = t.height,
              n = t.index,
              r = 0 === e ? 1 : Math.pow(2, e - 1);
              if (Math.floor((o - 1) / r) < n) throw new q('unexpectedIndex')
            });
            for (var r = c(e = D(t, 0)).call(e, function (t) {
              return {
                height: 1,
                index: t.index,
                hash: t.hash
              }
            }), i = o - 1, s = 1; s < n; s++) {
              var a = D(t, s);
              F(r = V(r, a), i),
              i = Math.floor(i / 2)
            }
            return r[0].hash
          }(h(a = [
          ]).call(a, M(p(this)), M(this.proof)), this.length)
        }
        this.merkleRoot = function (t, e) {
          var n = new Uint8Array(9 + A.HASH_LENGTH);
          n[0] = j.LIST_PREFIX;
          for (var r = (0, S.default) (e), o = 1; o < 9; o++) {
            var i,
            s = r.divmod(256);
            r = s.quotient,
            i = s.remainder,
            n[o] = i
          }
          return n.set((0, P.hexadecimalToUint8Array) (t), 9),
          (0, A.hash) (n)
        }(r, this.length)
      };
      var q = function () {
        function n(t) {
          var e;
          switch (H(this, n), t) {
            case 'malformedProof':
            case 'invalidProofOrdering':
              e = R(this, C(n).call(this, 'malformed `proof` part of the proof'));
              break;
            case 'malformedEntries':
            case 'invalidValuesOrdering':
              e = R(this, C(n).call(this, 'malformed `entries` in the proof'));
              break;
            case 'unexpectedHeight':
            case 'unexpectedIndex':
              e = R(this, C(n).call(this, 'proof contains a branch where it is impossible according to list length'));
              break;
            case 'duplicateHash':
              e = R(this, C(n).call(this, 'proof contains redundant entries'));
              break;
            case 'missingHash':
              e = R(this, C(n).call(this, 'proof does not contain information to restore index hash'));
              break;
            default:
              e = R(this, C(n).call(this, t))
          }
          return e
        }
        return function (t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
          t.prototype = b(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }),
          e && N(t, e)
        }(n, L(Error)),
        n
      }();
      e.ListProofError = q
    },
    function (t, e, n) {
      var r = n(551);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(552),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.every;
        return t === o || t instanceof Array && e === o.every ? r : e
      }
    },
    function (t, e, n) {
      n(553);
      var r = n(19);
      t.exports = r('Array').every
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(71).every,
      i = n(85),
      s = n(59),
      a = i('every'),
      u = s('every');
      r({
        target: 'Array',
        proto: !0,
        forced: !a || !u
      }, {
        every: function (t, e) {
          return o(this, t, 1 < arguments.length ? e : void 0)
        }
      })
    },
    function (t, e, n) {
      n(55),
      n(64);
      var r = n(172);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(284);
      t.exports = r
    },
    function (t, e, n) {
      n(0) ({
        target: 'Object',
        stat: !0
      }, {
        setPrototypeOf: n(203)
      })
    },
    function (t, e, n) {
      var r = n(285);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(0),
      o = n(38),
      u = n(15),
      c = n(5),
      l = n(12),
      f = n(80),
      h = n(271),
      i = n(7),
      p = o('Reflect', 'construct'),
      d = i(function () {
        function t() {
        }
        return !(p(function () {
        }, [
        ], t) instanceof t)
      }),
      y = !i(function () {
        p(function () {
        })
      }),
      s = d || y;
      r({
        target: 'Reflect',
        stat: !0,
        forced: s,
        sham: s
      }, {
        construct: function (t, e, n) {
          u(t),
          c(e);
          var r = arguments.length < 3 ? t : u(n);
          if (y && !d) return p(t, e, r);
          if (t == r) {
            switch (e.length) {
              case 0:
                return new t;
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3])
            }
            var o = [
              null
            ];
            return o.push.apply(o, e),
            new (h.apply(t, o))
          }
          var i = r.prototype,
          s = f(l(i) ? i : Object.prototype),
          a = Function.apply.call(t, s, e);
          return l(a) ? a : s
        }
      })
    },
    function (t, e, n) {
      var r = n(287);
      t.exports = r
    },
    function (t, e, n) {
      'use strict';
      var r = n(163),
      o = n(224);
      t.exports = r('Map', function (e) {
        return function (t) {
          return e(this, arguments.length ? t : void 0)
        }
      }, o)
    },
    function (t, e, n) {
      t.exports = n(562)
    },
    function (t, e, n) {
      var r = n(563);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(564),
      o = String.prototype;
      t.exports = function (t) {
        var e = t.startsWith;
        return 'string' == typeof t || t === o || t instanceof String && e === o.startsWith ? r : e
      }
    },
    function (t, e, n) {
      n(565);
      var r = n(19);
      t.exports = r('String').startsWith
    },
    function (t, e, n) {
      'use strict';
      var r,
      o = n(0),
      i = n(92).f,
      s = n(42),
      a = n(566),
      u = n(93),
      c = n(568),
      l = n(8),
      f = ''.startsWith,
      h = Math.min,
      p = c('startsWith');
      o({
        target: 'String',
        proto: !0,
        forced: !!(l || p || (!(r = i(String.prototype, 'startsWith')) || r.writable)) && !p
      }, {
        startsWith: function (t, e) {
          var n = String(u(this));
          a(t);
          var r = s(h(1 < arguments.length ? e : void 0, n.length)),
          o = String(t);
          return f ? f.call(n, o, r) : n.slice(r, r + o.length) === o
        }
      })
    },
    function (t, e, n) {
      var r = n(567);
      t.exports = function (t) {
        if (r(t)) throw TypeError('The method doesn\'t accept regular expressions');
        return t
      }
    },
    function (t, e, n) {
      var r = n(12),
      o = n(63),
      i = n(9) ('match');
      t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t))
      }
    },
    function (t, e, n) {
      var r = n(9) ('match');
      t.exports = function (e) {
        var n = /./;
        try {
          '/./'[e](n)
        } catch (t) {
          try {
            return n[r] = !1,
            '/./'[e](n)
          } catch (t) {
          }
        }
        return !1
      }
    },
    function (t, e, n) {
      t.exports = n(570)
    },
    function (t, e, n) {
      var r = n(571);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(572),
      o = Array.prototype;
      t.exports = function (t) {
        var e = t.sort;
        return t === o || t instanceof Array && e === o.sort ? r : e
      }
    },
    function (t, e, n) {
      n(573);
      var r = n(19);
      t.exports = r('Array').sort
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(15),
      i = n(37),
      s = n(7),
      a = n(85),
      u = [
      ],
      c = u.sort,
      l = s(function () {
        u.sort(void 0)
      }),
      f = s(function () {
        u.sort(null)
      }),
      h = a('sort');
      r({
        target: 'Array',
        proto: !0,
        forced: l || !f || !h
      }, {
        sort: function (t) {
          return void 0 === t ? c.call(i(this)) : c.call(i(this), o(t))
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var s = n(25),
      a = n(575),
      o = n(14);
      n(6);
      var i = n(10);
      i(e, '__esModule', {
        value: !0
      }),
      e.default = void 0;
      var u = n(76);
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
          r.configurable = !0,
          'value' in r && (r.writable = !0),
          i(t, r.key, r)
        }
      }
      var c = function () {
        function i(t) {
          var e,
          n,
          r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 256;
          if (!function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
          }(this, i), 'string' == typeof t) this.key = (0, u.binaryStringToUint8Array) ((n = 256, (e = t) + f.substring(0, n - e.length))),
          r = t.length;
           else {
            if (!(t instanceof Uint8Array && 32 === t.length)) throw new TypeError('Invalid `bits` parameter');
            this.key = o(t).call(t, 0)
          }
          this.bitLength = r,
          this.hexKey = (0, u.uint8ArrayToHexadecimal) (this.key)
        }
        var t,
        e,
        n;
        return t = i,
        (e = [
          {
            key: 'isTerminal',
            value: function () {
              return 256 === this.bitLength
            }
          },
          {
            key: 'bit',
            value: function (t) {
              var e,
              n,
              r,
              o;
              if (!((t = + t) >= this.bitLength || t < 0)) return e = this.key,
              n = t,
              r = Math.floor(n / 8),
              o = n % 8,
              (e[r] & 1 << o) >> o
            }
          },
          {
            key: 'commonPrefixLength',
            value: function (t) {
              var e,
              n = Math.min(this.bitLength, t.bitLength);
              for (e = 0; e < n >> 3 && this.key[e >> 3] === t.key[e >> 3]; e += 8);
              for (; e < n && this.bit(e) === t.bit(e); e++);
              return e
            }
          },
          {
            key: 'commonPrefix',
            value: function (t) {
              var e = this.commonPrefixLength(t);
              return this.truncate(e)
            }
          },
          {
            key: 'startsWith',
            value: function (t) {
              return this.commonPrefixLength(t) === t.bitLength
            }
          },
          {
            key: 'compare',
            value: function (t) {
              var e = [
                this.bitLength,
                t.bitLength
              ],
              n = e[0],
              r = e[1],
              o = Math.min(n, r),
              i = this.commonPrefixLength(t);
              return i === o ? a(n - r) : this.bit(i) - t.bit(i)
            }
          },
          {
            key: 'truncate',
            value: function (t) {
              var e;
              if ((t = + t) > this.bitLength) throw new TypeError('Cannot truncate bit slice to length more than current ' + s(e = '(current: '.concat(this.bitLength, ', requested: ')).call(e, t, ')'));
              for (var n = new Uint8Array(32), r = 0; r < t >> 3; r++) n[r] = this.key[r];
              for (var o = 8 * (t >> 3); o < t; o++) l(n, o, this.bit(o));
              return new i(n, t)
            }
          },
          {
            key: 'serialize',
            value: function (t) {
              this.bitLength < 128 ? t.push(this.bitLength) : t.push(128 + this.bitLength % 128, this.bitLength >> 7);
              for (var e = 0; e < this.bitLength + 7 >> 3; e++) t.push(this.key[e])
            }
          },
          {
            key: 'toJSON',
            value: function () {
              return h((0, u.hexadecimalToBinaryString) (this.hexKey), this.bitLength)
            }
          },
          {
            key: 'toString',
            value: function () {
              var t = (0, u.hexadecimalToBinaryString) (this.hexKey);
              return t = 8 < this.bitLength ? h(t, 8) + '...' : h(t, this.bitLength),
              'path('.concat(t, ')')
            }
          }
        ]) && r(t.prototype, e),
        n && r(t, n),
        i
      }();
      function l(t, e, n) {
        var r = Math.floor(e / 8),
        o = e % 8;
        if (0 === n) {
          var i = 255 - (1 << o);
          t[r] &= i
        } else {
          var s = 1 << o;
          t[r] |= s
        }
      }(e.default = c).BYTE_LENGTH = 32;
      var f = function () {
        for (var t = '0', e = 0; e < 8; e++) t += t;
        return t
      }();
      function h(t, e) {
        if (t.length < e) throw new Error('Invariant broken: negative zero trimming requested');
        return t.substring(0, e)
      }
    },
    function (t, e, n) {
      t.exports = n(576)
    },
    function (t, e, n) {
      var r = n(577);
      t.exports = r
    },
    function (t, e, n) {
      n(578);
      var r = n(3);
      t.exports = r.Math.sign
    },
    function (t, e, n) {
      n(0) ({
        target: 'Math',
        stat: !0
      }, {
        sign: n(579)
      })
    },
    function (t, e) {
      t.exports = Math.sign || function (t) {
        return 0 == (t = + t) || t != t ? t : t < 0 ? - 1 : 1
      }
    },
    function (t, e, n) {
      'use strict';
      var v = n(162);
      n(6);
      var g = n(581),
      _ = n(106),
      m = n(1),
      b = n(27),
      w = n(283);
      n(4),
      n(2);
      var x = n(121),
      s = n(72),
      r = n(73),
      a = n(10),
      o = n(52),
      i = n(13),
      u = n(40);
      function c(t) {
        return (c = 'function' == typeof u && 'symbol' === i(o) ? function (t) {
          return i(t)
        }
         : function (t) {
          return t && 'function' == typeof u && t.constructor === u && t !== u.prototype ? 'symbol' : i(t)
        }) (t)
      }
      a(e, '__esModule', {
        value: !0
      }),
      e.verifyBlock = function (t, e) {
        var n,
        r = t.block,
        o = t.precommits,
        i = (0, P.cleanZeroValuedFields) (r, {
        }),
        s = [
          'prev_hash',
          'tx_hash',
          'state_hash',
          'error_hash'
        ];
        m(s).call(s, function (t) {
          i[t] = {
            data: (0, k.hexadecimalToUint8Array) (i[t])
          }
        });
        var a = _(n = g(r.additional_headers.headers)).call(n, function (t) {
          var e,
          n,
          r = (n = 2, function (t) {
            if (b(t)) return t
          }(e = t) || function (t, e) {
            if (x(Object(t)) || '[object Arguments]' === Object.prototype.toString.call(t)) {
              var n = [
              ],
              r = !0,
              o = !1,
              i = void 0;
              try {
                for (var s, a = w(t); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
              } catch (t) {
                o = !0,
                i = t
              } finally {
                try {
                  r || null == a.return || a.return()
                } finally {
                  if (o) throw i
                }
              }
              return n
            }
          }(e, n) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }()),
          o = r[0],
          i = r[1];
          return {
            key: o,
            value: Uint8Array.from(i)
          }
        });
        i.additional_headers = {
          headers: {
            entries: a
          }
        };
        var u = A.encode(i).finish(),
        c = (0, E.hash) (u);
        if (o.length < function (t) {
          return Math.floor(2 * t / 3) + 1
        }(e.length)) throw new Error('Insufficient number of precommits');
        for (var l = new v, f = 0; f < o.length; f++) {
          var h = S.Verified.deserialize(j, (0, k.hexadecimalToUint8Array) (o[f]));
          if (!h) throw new Error('Precommit signature is wrong');
          var p = h.payload.precommit;
          if (!p) throw new Error('Invalid message type (not a Precommit)');
          if (0 !== O.fromValue(p.height).compare(O.fromValue(r.height))) throw new Error('Precommit height does not match block height');
          if ((0, k.uint8ArrayToHexadecimal) (p.block_hash.data) !== c) throw new Error('Precommit block hash does not match calculated block hash');
          var d = p.validator || 0;
          if (l.has(d)) throw new Error('Double endorsement from a validator');
          l.add(d);
          var y = e[d];
          if (h.author !== y) throw new Error('Precommit public key does not match key of corresponding validator')
        }
      };
      var O = h(n(586)),
      S = n(178),
      k = n(76),
      E = n(88),
      l = h(n(136)),
      P = n(179);
      function f() {
        if ('function' != typeof r) return null;
        var t = new r;
        return f = function () {
          return t
        },
        t
      }
      function h(t) {
        if (t && t.__esModule) return t;
        if (null === t || 'object' !== c(t) && 'function' != typeof t) return {
        default:
          t
        };
        var e = f();
        if (e && e.has(t)) return e.get(t);
        var n = {
        },
        r = a && s;
        for (var o in t) if (Object.prototype.hasOwnProperty.call(t, o)) {
          var i = r ? s(t, o) : null;
          i && (i.get || i.set) ? a(n, o, i) : n[o] = t[o]
        }
        return n.default = t,
        e && e.set(t, n),
        n
      }
      var A = l.exonum.Block,
      j = l.exonum.CoreMessage
    },
    function (t, e, n) {
      t.exports = n(582)
    },
    function (t, e, n) {
      var r = n(583);
      t.exports = r
    },
    function (t, e, n) {
      n(584);
      var r = n(3);
      t.exports = r.Object.entries
    },
    function (t, e, n) {
      var r = n(0),
      o = n(585).entries;
      r({
        target: 'Object',
        stat: !0
      }, {
        entries: function (t) {
          return o(t)
        }
      })
    },
    function (t, e, n) {
      function r(a) {
        return function (t) {
          for (var e, n = l(t), r = c(n), o = r.length, i = 0, s = [
          ]; i < o; ) e = r[i++],
          u && !f.call(n, e) || s.push(a ? [
            e,
            n[e]
          ] : n[e]);
          return s
        }
      }
      var u = n(22),
      c = n(97),
      l = n(47),
      f = n(113).f;
      t.exports = {
        entries: r(!0),
        values: r(!1)
      }
    },
    function (t, e, n) {
      n(587),
      n(4),
      n(2);
      var l = n(31),
      f = n(28),
      r = n(10);
      n(6),
      t.exports = o;
      var p = null;
      try {
        p = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11])), {
        }).exports
      } catch (t) {
      }
      function o(t, e, n) {
        this.low = 0 | t,
        this.high = 0 | e,
        this.unsigned = !!n
      }
      function d(t) {
        return !0 === (t && t.__isLong__)
      }
      r(o.prototype, '__isLong__', {
        value: !0
      }),
      o.isLong = d;
      var i = {
      },
      s = {
      };
      function a(t, e) {
        var n,
        r,
        o;
        return e ? (o = 0 <= (t >>>= 0) && t < 256) && (r = s[t]) ? r : (n = v(t, (0 | t) < 0 ? - 1 : 0, !0), o && (s[t] = n), n) : (o = - 128 <= (t |= 0) && t < 128) && (r = i[t]) ? r : (n = v(t, t < 0 ? - 1 : 0, !1), o && (i[t] = n), n)
      }
      function y(t, e) {
        if (isNaN(t)) return e ? x : w;
        if (e) {
          if (t < 0) return x;
          if (c <= t) return P
        } else {
          if (t <= - m) return A;
          if (m <= t + 1) return E
        }
        return t < 0 ? y( - t, e).neg() : v(t % u | 0, t / u | 0, e)
      }
      function v(t, e, n) {
        return new o(t, e, n)
      }
      o.fromInt = a,
      o.fromNumber = y,
      o.fromBits = v;
      var h = Math.pow;
      function g(t, e, n) {
        if (0 === t.length) throw Error('empty string');
        if ('NaN' === t || 'Infinity' === t || '+Infinity' === t || '-Infinity' === t) return w;
        if (e = 'number' == typeof e ? (n = e, !1) : !!e, (n = n || 10) < 2 || 36 < n) throw RangeError('radix');
        var r;
        if (0 < (r = f(t).call(t, '-'))) throw Error('interior hyphen');
        if (0 === r) return g(t.substring(1), e, n).neg();
        for (var o = y(h(n, 8)), i = w, s = 0; s < t.length; s += 8) {
          var a = Math.min(8, t.length - s),
          u = l(t.substring(s, s + a), n);
          if (a < 8) {
            var c = y(h(n, a));
            i = i.mul(c).add(y(u))
          } else i = (i = i.mul(o)).add(y(u))
        }
        return i.unsigned = e,
        i
      }
      function _(t, e) {
        return 'number' == typeof t ? y(t, e) : 'string' == typeof t ? g(t, e) : v(t.low, t.high, 'boolean' == typeof e ? e : t.unsigned)
      }
      o.fromString = g,
      o.fromValue = _;
      var u = 4294967296,
      c = u * u,
      m = c / 2,
      b = a(1 << 24),
      w = a(0);
      o.ZERO = w;
      var x = a(0, !0);
      o.UZERO = x;
      var O = a(1);
      o.ONE = O;
      var S = a(1, !0);
      o.UONE = S;
      var k = a( - 1);
      o.NEG_ONE = k;
      var E = v( - 1, 2147483647, !1);
      o.MAX_VALUE = E;
      var P = v( - 1, - 1, !0);
      o.MAX_UNSIGNED_VALUE = P;
      var A = v(0, - 2147483648, !1);
      o.MIN_VALUE = A;
      var j = o.prototype;
      j.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low
      },
      j.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * u + (this.low >>> 0) : this.high * u + (this.low >>> 0)
      },
      j.toString = function (t) {
        if ((t = t || 10) < 2 || 36 < t) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative()) {
          if (this.eq(A)) {
            var e = y(t),
            n = this.div(e),
            r = n.mul(e).sub(this);
            return n.toString(t) + r.toInt().toString(t)
          }
          return '-' + this.neg().toString(t)
        }
        for (var o = y(h(t, 6), this.unsigned), i = this, s = ''; ; ) {
          var a = i.div(o),
          u = (i.sub(a.mul(o)).toInt() >>> 0).toString(t);
          if ((i = a).isZero()) return u + s;
          for (; u.length < 6; ) u = '0' + u;
          s = '' + u + s
        }
      },
      j.getHighBits = function () {
        return this.high
      },
      j.getHighBitsUnsigned = function () {
        return this.high >>> 0
      },
      j.getLowBits = function () {
        return this.low
      },
      j.getLowBitsUnsigned = function () {
        return this.low >>> 0
      },
      j.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(A) ? 64 : this.neg().getNumBitsAbs();
        for (var t = 0 != this.high ? this.high : this.low, e = 31; 0 < e && 0 == (t & 1 << e); e--);
        return 0 != this.high ? e + 33 : e + 1
      },
      j.isZero = function () {
        return 0 === this.high && 0 === this.low
      },
      j.eqz = j.isZero,
      j.isNegative = function () {
        return !this.unsigned && this.high < 0
      },
      j.isPositive = function () {
        return this.unsigned || 0 <= this.high
      },
      j.isOdd = function () {
        return 1 == (1 & this.low)
      },
      j.isEven = function () {
        return 0 == (1 & this.low)
      },
      j.equals = function (t) {
        return d(t) || (t = _(t)),
        (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low)
      },
      j.eq = j.equals,
      j.notEquals = function (t) {
        return !this.eq(t)
      },
      j.neq = j.notEquals,
      j.ne = j.notEquals,
      j.lessThan = function (t) {
        return this.comp(t) < 0
      },
      j.lt = j.lessThan,
      j.lessThanOrEqual = function (t) {
        return this.comp(t) <= 0
      },
      j.lte = j.lessThanOrEqual,
      j.le = j.lessThanOrEqual,
      j.greaterThan = function (t) {
        return 0 < this.comp(t)
      },
      j.gt = j.greaterThan,
      j.greaterThanOrEqual = function (t) {
        return 0 <= this.comp(t)
      },
      j.gte = j.greaterThanOrEqual,
      j.ge = j.greaterThanOrEqual,
      j.compare = function (t) {
        if (d(t) || (t = _(t)), this.eq(t)) return 0;
        var e = this.isNegative(),
        n = t.isNegative();
        return e && !n ? - 1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? - 1 : 1 : this.sub(t).isNegative() ? - 1 : 1
      },
      j.comp = j.compare,
      j.negate = function () {
        return !this.unsigned && this.eq(A) ? A : this.not().add(O)
      },
      j.neg = j.negate,
      j.add = function (t) {
        d(t) || (t = _(t));
        var e = this.high >>> 16,
        n = 65535 & this.high,
        r = this.low >>> 16,
        o = 65535 & this.low,
        i = t.high >>> 16,
        s = 65535 & t.high,
        a = t.low >>> 16,
        u = 0,
        c = 0,
        l = 0,
        f = 0;
        return l += (f += o + (65535 & t.low)) >>> 16,
        c += (l += r + a) >>> 16,
        u += (c += n + s) >>> 16,
        u += e + i,
        v((l &= 65535) << 16 | (f &= 65535), (u &= 65535) << 16 | (c &= 65535), this.unsigned)
      },
      j.subtract = function (t) {
        return d(t) || (t = _(t)),
        this.add(t.neg())
      },
      j.sub = j.subtract,
      j.multiply = function (t) {
        if (this.isZero()) return w;
        if (d(t) || (t = _(t)), p) return v(p.mul(this.low, this.high, t.low, t.high), p.get_high(), this.unsigned);
        if (t.isZero()) return w;
        if (this.eq(A)) return t.isOdd() ? A : w;
        if (t.eq(A)) return this.isOdd() ? A : w;
        if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
        if (t.isNegative()) return this.mul(t.neg()).neg();
        if (this.lt(b) && t.lt(b)) return y(this.toNumber() * t.toNumber(), this.unsigned);
        var e = this.high >>> 16,
        n = 65535 & this.high,
        r = this.low >>> 16,
        o = 65535 & this.low,
        i = t.high >>> 16,
        s = 65535 & t.high,
        a = t.low >>> 16,
        u = 65535 & t.low,
        c = 0,
        l = 0,
        f = 0,
        h = 0;
        return f += (h += o * u) >>> 16,
        l += (f += r * u) >>> 16,
        f &= 65535,
        l += (f += o * a) >>> 16,
        c += (l += n * u) >>> 16,
        l &= 65535,
        c += (l += r * a) >>> 16,
        l &= 65535,
        c += (l += o * s) >>> 16,
        c += e * u + n * a + r * s + o * i,
        v((f &= 65535) << 16 | (h &= 65535), (c &= 65535) << 16 | (l &= 65535), this.unsigned)
      },
      j.mul = j.multiply,
      j.divide = function (t) {
        if (d(t) || (t = _(t)), t.isZero()) throw Error('division by zero');
        var e,
        n,
        r;
        if (p) return this.unsigned || - 2147483648 !== this.high || - 1 !== t.low || - 1 !== t.high ? v((this.unsigned ? p.div_u : p.div_s) (this.low, this.high, t.low, t.high), p.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? x : w;
        if (this.unsigned) {
          if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return x;
          if (t.gt(this.shru(1))) return S;
          r = x
        } else {
          if (this.eq(A)) return t.eq(O) || t.eq(k) ? A : t.eq(A) ? O : (e = this.shr(1).div(t).shl(1)).eq(w) ? t.isNegative() ? O : k : (n = this.sub(t.mul(e)), r = e.add(n.div(t)));
           else if (t.eq(A)) return this.unsigned ? x : w;
          if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
          if (t.isNegative()) return this.div(t.neg()).neg();
          r = w
        }
        for (n = this; n.gte(t); ) {
          e = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
          for (var o = Math.ceil(Math.log(e) / Math.LN2), i = o <= 48 ? 1 : h(2, o - 48), s = y(e), a = s.mul(t); a.isNegative() || a.gt(n); ) a = (s = y(e -= i, this.unsigned)).mul(t);
          s.isZero() && (s = O),
          r = r.add(s),
          n = n.sub(a)
        }
        return r
      },
      j.div = j.divide,
      j.modulo = function (t) {
        return d(t) || (t = _(t)),
        p ? v((this.unsigned ? p.rem_u : p.rem_s) (this.low, this.high, t.low, t.high), p.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
      },
      j.mod = j.modulo,
      j.rem = j.modulo,
      j.not = function () {
        return v(~this.low, ~this.high, this.unsigned)
      },
      j.and = function (t) {
        return d(t) || (t = _(t)),
        v(this.low & t.low, this.high & t.high, this.unsigned)
      },
      j.or = function (t) {
        return d(t) || (t = _(t)),
        v(this.low | t.low, this.high | t.high, this.unsigned)
      },
      j.xor = function (t) {
        return d(t) || (t = _(t)),
        v(this.low ^ t.low, this.high ^ t.high, this.unsigned)
      },
      j.shiftLeft = function (t) {
        return d(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? v(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : v(0, this.low << t - 32, this.unsigned)
      },
      j.shl = j.shiftLeft,
      j.shiftRight = function (t) {
        return d(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? v(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : v(this.high >> t - 32, 0 <= this.high ? 0 : - 1, this.unsigned)
      },
      j.shr = j.shiftRight,
      j.shiftRightUnsigned = function (t) {
        if (d(t) && (t = t.toInt()), 0 === (t &= 63)) return this;
        var e = this.high;
        return t < 32 ? v(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : v(32 === t ? e : e >>> t - 32, 0, this.unsigned)
      },
      j.shru = j.shiftRightUnsigned,
      j.shr_u = j.shiftRightUnsigned,
      j.toSigned = function () {
        return this.unsigned ? v(this.low, this.high, !1) : this
      },
      j.toUnsigned = function () {
        return this.unsigned ? this : v(this.low, this.high, !0)
      },
      j.toBytes = function (t) {
        return t ? this.toBytesLE() : this.toBytesBE()
      },
      j.toBytesLE = function () {
        var t = this.high,
        e = this.low;
        return [255 & e,
        e >>> 8 & 255,
        e >>> 16 & 255,
        e >>> 24,
        255 & t,
        t >>> 8 & 255,
        t >>> 16 & 255,
        t >>> 24]
      },
      j.toBytesBE = function () {
        var t = this.high,
        e = this.low;
        return [t >>> 24,
        t >>> 16 & 255,
        t >>> 8 & 255,
        255 & t,
        e >>> 24,
        e >>> 16 & 255,
        e >>> 8 & 255,
        255 & e]
      },
      o.fromBytes = function (t, e, n) {
        return n ? o.fromBytesLE(t, e) : o.fromBytesBE(t, e)
      },
      o.fromBytesLE = function (t, e) {
        return new o(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e)
      },
      o.fromBytesBE = function (t, e) {
        return new o(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e)
      }
    },
    function (t, e, n) {
      'use strict';
      n(588) ('sub', function (t) {
        return function () {
          return t(this, 'sub', '', '')
        }
      })
    },
    function (t, e, n) {
      function r(t, e, n, r) {
        var o = String(s(t)),
        i = '<' + e;
        return '' !== n && (i += ' ' + n + '="' + String(r).replace(a, '&quot;') + '"'),
        i + '>' + o + '</' + e + '>'
      }
      var o = n(49),
      i = n(29),
      s = n(69),
      a = /"/g;
      t.exports = function (e, t) {
        var n = {
        };
        n[e] = t(r),
        o(o.P + o.F * i(function () {
          var t = ''[e]('"');
          return t !== t.toLowerCase() || 3 < t.split('"').length
        }), 'String', n)
      }
    },
    function (t, e, n) {
      'use strict';
      var h = n(25);
      n(6);
      var p = n(107),
      d = n(590),
      y = n(23);
      n(10) (e, '__esModule', {
        value: !0
      }),
      e.send = c,
      e.sendQueue = function (n, r) {
        var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : _,
        i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : m,
        s = 0,
        a = [
        ];
        return function e() {
          var t = r[s++];
          return c(n, t, o, i).then(function (t) {
            return a.push(t),
            s < r.length ? e() : a
          })
        }()
      };
      var r,
      v = (r = n(592)) && r.__esModule ? r : {
      default:
        r
      },
      g = n(76);
      function u(t, e, n, r, o, i, s) {
        try {
          var a = t[i](s),
          u = a.value
        } catch (t) {
          return void n(t)
        }
        a.done ? e(u) : y.resolve(u).then(r, o)
      }
      var _ = 10,
      m = 500;
      function c(t, e) {
        return o.apply(this, arguments)
      }
      function o() {
        var a;
        return a = d.mark(function t(n, r) {
          var o,
          i,
          s,
          a,
          u,
          c,
          l,
          f = arguments;
          return d.wrap(function (t) {
            for (var e; ; ) switch (t.prev = t.next) {
              case 0:
                if (s = function (e) {
                  return new y(function (t) {
                    p(t, e)
                  })
                }, o = 2 < f.length && void 0 !== f[2] ? f[2] : _, i = 3 < f.length && void 0 !== f[3] ? f[3] : m, 'string' != typeof n) throw new TypeError('Explorer base path endpoint of wrong data type is passed. String is required.');
                t.next = 5;
                break;
              case 5:
                return o = + o,
                i = + i,
                'string' != typeof r && (r = (0, g.uint8ArrayToHexadecimal) (new Uint8Array(r))),
                t.next = 10,
                v.default.post(''.concat(n), {
                  tx_body: r
                });
              case 10:
                a = t.sent,
                u = a.data.tx_hash,
                c = o,
                l = !1;
              case 14:
                if (0 <= c) return t.prev = 15,
                t.next = 18,
                v.default.get(h(e = ''.concat(n, '?hash=')).call(e, u));
                t.next = 32;
                break;
              case 18:
                if ('committed' === t.sent.data.type) return t.abrupt('return', u);
                t.next = 21;
                break;
              case 21:
                l = !1,
                t.next = 27;
                break;
              case 24:
                t.prev = 24,
                t.t0 = t.catch(15),
                l = !0;
              case 27:
                return c--,
                t.next = 30,
                s(i);
              case 30:
                t.next = 14;
                break;
              case 32:
                if (l) throw new Error('The request failed or the blockchain node did not respond.');
                t.next = 36;
                break;
              case 36:
                throw new Error('The transaction was not accepted to the block for the expected period.');
              case 37:
              case 'end':
                return t.stop()
            }
          }, t, null, [
            [15,
            24]
          ])
        }),
        (o = function () {
          var t = this,
          s = arguments;
          return new y(function (e, n) {
            var r = a.apply(t, s);
            function o(t) {
              u(r, e, n, o, i, 'next', t)
            }
            function i(t) {
              u(r, e, n, o, i, 'throw', t)
            }
            o(void 0)
          })
        }).apply(this, arguments)
      }
    },
    function (t, e, n) {
      t.exports = n(591)
    },
    function (t, e, n) {
      (function (t) {
        var j = n(14),
        T = n(82);
        n(86),
        n(62),
        n(4),
        n(2);
        var B = n(23),
        R = n(13),
        L = n(181),
        I = n(1),
        N = n(135),
        C = n(21),
        U = n(40),
        e = function (s) {
          'use strict';
          var u,
          t = Object.prototype,
          l = t.hasOwnProperty,
          e = 'function' == typeof U ? U : {
          },
          o = e.iterator || '@@iterator',
          n = e.asyncIterator || '@@asyncIterator',
          r = e.toStringTag || '@@toStringTag';
          function a(t, e, n, r) {
            var i,
            s,
            a,
            u,
            o = e && e.prototype instanceof g ? e : g,
            c = C(o.prototype),
            l = new E(r || [
            ]);
            return c._invoke = (i = t, s = n, a = l, u = h, function (t, e) {
              if (u === d) throw new Error('Generator is already running');
              if (u === y) {
                if ('throw' === t) throw e;
                return A()
              }
              for (a.method = t, a.arg = e; ; ) {
                var n = a.delegate;
                if (n) {
                  var r = O(n, a);
                  if (r) {
                    if (r === v) continue;
                    return r
                  }
                }
                if ('next' === a.method) a.sent = a._sent = a.arg;
                 else if ('throw' === a.method) {
                  if (u === h) throw u = y,
                  a.arg;
                  a.dispatchException(a.arg)
                } else 'return' === a.method && a.abrupt('return', a.arg);
                u = d;
                var o = f(i, s, a);
                if ('normal' === o.type) {
                  if (u = a.done ? y : p, o.arg === v) continue;
                  return {
                    value: o.arg,
                    done: a.done
                  }
                }
                'throw' === o.type && (u = y, a.method = 'throw', a.arg = o.arg)
              }
            }),
            c
          }
          function f(t, e, n) {
            try {
              return {
                type: 'normal',
                arg: t.call(e, n)
              }
            } catch (t) {
              return {
                type: 'throw',
                arg: t
              }
            }
          }
          s.wrap = a;
          var h = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          y = 'completed',
          v = {
          };
          function g() {
          }
          function i() {
          }
          function c() {
          }
          var _ = {
          };
          _[o] = function () {
            return this
          };
          var m = N && N(N(P([])));
          m && m !== t && l.call(m, o) && (_ = m);
          var b = c.prototype = g.prototype = C(_);
          function w(t) {
            var e;
            I(e = [
              'next',
              'throw',
              'return'
            ]).call(e, function (e) {
              t[e] = function (t) {
                return this._invoke(e, t)
              }
            })
          }
          function x(u, c) {
            var e;
            this._invoke = function (n, r) {
              function t() {
                return new c(function (t, e) {
                  !function e(t, n, r, o) {
                    var i = f(u[t], u, n);
                    if ('throw' !== i.type) {
                      var s = i.arg,
                      a = s.value;
                      return a && 'object' === R(a) && l.call(a, '__await') ? c.resolve(a.__await).then(function (t) {
                        e('next', t, r, o)
                      }, function (t) {
                        e('throw', t, r, o)
                      }) : c.resolve(a).then(function (t) {
                        s.value = t,
                        r(s)
                      }, function (t) {
                        return e('throw', t, r, o)
                      })
                    }
                    o(i.arg)
                  }(n, r, t, e)
                })
              }
              return e = e ? e.then(t, t) : t()
            }
          }
          function O(t, e) {
            var n = t.iterator[e.method];
            if (n === u) {
              if (e.delegate = null, 'throw' === e.method) {
                if (t.iterator.return && (e.method = 'return', e.arg = u, O(t, e), 'throw' === e.method)) return v;
                e.method = 'throw',
                e.arg = new TypeError('The iterator does not provide a \'throw\' method')
              }
              return v
            }
            var r = f(n, t.iterator, e.arg);
            if ('throw' === r.type) return e.method = 'throw',
            e.arg = r.arg,
            e.delegate = null,
            v;
            var o = r.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, 'return' !== e.method && (e.method = 'next', e.arg = u), e.delegate = null, v) : o : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, v)
          }
          function S(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
            this.tryEntries.push(e)
          }
          function k(t) {
            var e = t.completion || {
            };
            e.type = 'normal',
            delete e.arg,
            t.completion = e
          }
          function E(t) {
            this.tryEntries = [
              {
                tryLoc: 'root'
              }
            ],
            I(t).call(t, S, this),
            this.reset(!0)
          }
          function P(e) {
            if (e) {
              var t = e[o];
              if (t) return t.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = - 1,
                r = function t() {
                  for (; ++n < e.length; ) if (l.call(e, n)) return t.value = e[n],
                  t.done = !1,
                  t;
                  return t.value = u,
                  t.done = !0,
                  t
                };
                return r.next = r
              }
            }
            return {
              next: A
            }
          }
          function A() {
            return {
              value: u,
              done: !0
            }
          }
          return i.prototype = b.constructor = c,
          c.constructor = i,
          c[r] = i.displayName = 'GeneratorFunction',
          s.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === i || 'GeneratorFunction' === (e.displayName || e.name))
          },
          s.mark = function (t) {
            return L ? L(t, c) : (t.__proto__ = c, r in t || (t[r] = 'GeneratorFunction')),
            t.prototype = C(b),
            t
          },
          s.awrap = function (t) {
            return {
              __await: t
            }
          },
          w(x.prototype),
          x.prototype[n] = function () {
            return this
          },
          s.AsyncIterator = x,
          s.async = function (t, e, n, r, o) {
            void 0 === o && (o = B);
            var i = new x(a(t, e, n, r), o);
            return s.isGeneratorFunction(e) ? i : i.next().then(function (t) {
              return t.done ? t.value : i.next()
            })
          },
          w(b),
          b[r] = 'Generator',
          b[o] = function () {
            return this
          },
          b.toString = function () {
            return '[object Generator]'
          },
          s.keys = function (n) {
            var r = [
            ];
            for (var t in n) r.push(t);
            return T(r).call(r),
            function t() {
              for (; r.length; ) {
                var e = r.pop();
                if (e in n) return t.value = e,
                t.done = !1,
                t
              }
              return t.done = !0,
              t
            }
          },
          s.values = P,
          E.prototype = {
            constructor: E,
            reset: function (t) {
              var e;
              if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, this.method = 'next', this.arg = u, I(e = this.tryEntries).call(e, k), !t) for (var n in this) 't' === n.charAt(0) && l.call(this, n) && !isNaN( + j(n).call(n, 1)) && (this[n] = u)
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval
            },
            dispatchException: function (n) {
              if (this.done) throw n;
              var r = this;
              function t(t, e) {
                return i.type = 'throw',
                i.arg = n,
                r.next = t,
                e && (r.method = 'next', r.arg = u),
                !!e
              }
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var o = this.tryEntries[e],
                i = o.completion;
                if ('root' === o.tryLoc) return t('end');
                if (o.tryLoc <= this.prev) {
                  var s = l.call(o, 'catchLoc'),
                  a = l.call(o, 'finallyLoc');
                  if (s && a) {
                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                  } else if (s) {
                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                  } else {
                    if (!a) throw new Error('try statement without catch or finally');
                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && l.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                  var o = r;
                  break
                }
              }
              o && ('break' === t || 'continue' === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var i = o ? o.completion : {
              };
              return i.type = t,
              i.arg = e,
              o ? (this.method = 'next', this.next = o.finallyLoc, v) : this.complete(i)
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return 'break' === t.type || 'continue' === t.type ? this.next = t.arg : 'return' === t.type ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : 'normal' === t.type && e && (this.next = e),
              v
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
                k(n),
                v
              }
            },
            catch : function (t) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var o = r.arg;
                    k(n)
                  }
                  return o
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (t, e, n) {
              return this.delegate = {
                iterator: P(t),
                resultName: e,
                nextLoc: n
              },
              'next' === this.method && (this.arg = u),
              v
            }
          },
          s
        }('object' === R(t) ? t.exports : {
        });
        try {
          regeneratorRuntime = e
        } catch (t) {
          Function('r', 'regeneratorRuntime = r') (e)
        }
      }).call(this, n(166) (t))
    },
    function (t, e, n) {
      t.exports = n(593)
    },
    function (t, e, n) {
      'use strict';
      var r = n(23);
      n(86),
      n(62),
      n(2),
      n(246);
      var o = n(34),
      i = n(291),
      s = n(594),
      a = n(297);
      function u(t) {
        var e = new s(t),
        n = i(s.prototype.request, e);
        return o.extend(n, s.prototype, e),
        o.extend(n, e),
        n
      }
      var c = u(n(294));
      c.Axios = s,
      c.create = function (t) {
        return u(a(c.defaults, t))
      },
      c.Cancel = n(298),
      c.CancelToken = n(607),
      c.isCancel = n(293),
      c.all = function (t) {
        return r.all(t)
      },
      c.spread = n(608),
      t.exports = c,
      t.exports.default = c
    },
    function (t, e, n) {
      'use strict';
      n(33);
      var s = n(1),
      a = n(23),
      o = n(34),
      r = n(292),
      i = n(595),
      u = n(596),
      c = n(297);
      function l(t) {
        this.defaults = t,
        this.interceptors = {
          request: new i,
          response: new i
        }
      }
      l.prototype.request = function (t, e) {
        var n,
        r;
        'string' == typeof t ? (t = e || {
        }).url = arguments[0] : t = t || {
        },
        (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = 'get';
        var o = [
          u,
          void 0
        ],
        i = a.resolve(t);
        for (s(n = this.interceptors.request).call(n, function (t) {
          o.unshift(t.fulfilled, t.rejected)
        }), s(r = this.interceptors.response).call(r, function (t) {
          o.push(t.fulfilled, t.rejected)
        }); o.length; ) i = i.then(o.shift(), o.shift());
        return i
      },
      l.prototype.getUri = function (t) {
        return t = c(this.defaults, t),
        r(t.url, t.params, t.paramsSerializer).replace(/^\?/, '')
      },
      s(o).call(o, [
        'delete',
        'get',
        'head',
        'options'
      ], function (n) {
        l.prototype[n] = function (t, e) {
          return this.request(o.merge(e || {
          }, {
            method: n,
            url: t
          }))
        }
      }),
      s(o).call(o, [
        'post',
        'put',
        'patch'
      ], function (r) {
        l.prototype[r] = function (t, e, n) {
          return this.request(o.merge(n || {
          }, {
            method: r,
            url: t,
            data: e
          }))
        }
      }),
      t.exports = l
    },
    function (t, e, n) {
      'use strict';
      var r = n(1),
      o = n(34);
      function i() {
        this.handlers = [
        ]
      }
      i.prototype.use = function (t, e) {
        return this.handlers.push({
          fulfilled: t,
          rejected: e
        }),
        this.handlers.length - 1
      },
      i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
      },
      i.prototype.forEach = function (e) {
        r(o).call(o, this.handlers, function (t) {
          null !== t && e(t)
        })
      },
      t.exports = i
    },
    function (t, e, n) {
      'use strict';
      var r = n(23),
      o = n(1),
      i = n(34),
      s = n(597),
      a = n(293),
      u = n(294);
      function c(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
      }
      t.exports = function (e) {
        return c(e),
        e.headers = e.headers || {
        },
        e.data = s(e.data, e.headers, e.transformRequest),
        e.headers = i.merge(e.headers.common || {
        }, e.headers[e.method] || {
        }, e.headers),
        o(i).call(i, [
          'delete',
          'get',
          'head',
          'post',
          'put',
          'patch',
          'common'
        ], function (t) {
          delete e.headers[t]
        }),
        (e.adapter || u.adapter) (e).then(function (t) {
          return c(e),
          t.data = s(t.data, t.headers, e.transformResponse),
          t
        }, function (t) {
          return a(t) || (c(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))),
          r.reject(t)
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(1),
      o = n(34);
      t.exports = function (e, n, t) {
        return r(o).call(o, t, function (t) {
          e = t(e, n)
        }),
        e
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(1),
      i = n(34);
      t.exports = function (n, r) {
        o(i).call(i, n, function (t, e) {
          e !== r && e.toUpperCase() === r.toUpperCase() && (n[r] = t, delete n[e])
        })
      }
    },
    function (t, e, n) {
      'use strict';
      var o = n(296);
      t.exports = function (t, e, n) {
        var r = n.config.validateStatus;
        !r || r(n.status) ? t(n) : e(o('Request failed with status code ' + n.status, n.config, null, n.request, n))
      }
    },
    function (t, e, n) {
      'use strict';
      n(87),
      t.exports = function (t, e, n, r, o) {
        return t.config = e,
        n && (t.code = n),
        t.request = r,
        t.response = o,
        t.isAxiosError = !0,
        t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code
          }
        },
        t
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(602),
      o = n(603);
      t.exports = function (t, e) {
        return t && !r(e) ? o(t, e) : e
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
      }
    },
    function (t, e, n) {
      'use strict';
      n(33),
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t
      }
    },
    function (t, e, n) {
      'use strict';
      var s = n(25),
      a = n(174),
      u = n(28);
      n(108);
      var c = n(1),
      l = n(34),
      f = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent'
      ];
      t.exports = function (t) {
        var n,
        r,
        o,
        i = {
        };
        return t && c(l).call(l, t.split('\n'), function (t) {
          if (o = u(t).call(t, ':'), n = a(l).call(l, t.substr(0, o)).toLowerCase(), r = a(l).call(l, t.substr(o + 1)), n) {
            if (i[n] && 0 <= u(f).call(f, n)) return;
            var e;
            if ('set-cookie' === n) i[n] = s(e = i[n] ? i[n] : [
            ]).call(e, [
              r
            ]);
             else i[n] = i[n] ? i[n] + ', ' + r : r
          }
        }),
        i
      }
    },
    function (t, e, n) {
      'use strict';
      n(259),
      n(33);
      var r,
      o,
      i,
      s = n(34);
      function a(t) {
        var e = t;
        return o && (i.setAttribute('href', e), e = i.href),
        i.setAttribute('href', e),
        {
          href: i.href,
          protocol: i.protocol ? i.protocol.replace(/:$/, '') : '',
          host: i.host,
          search: i.search ? i.search.replace(/^\?/, '') : '',
          hash: i.hash ? i.hash.replace(/^#/, '') : '',
          hostname: i.hostname,
          port: i.port,
          pathname: '/' === i.pathname.charAt(0) ? i.pathname : '/' + i.pathname
        }
      }
      t.exports = s.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement('a'), r = a(window.location.href), function (t) {
        var e = s.isString(t) ? a(t) : t;
        return e.protocol === r.protocol && e.host === r.host
      }) : function () {
        return !0
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(256);
      n(257),
      n(173);
      var a = n(34);
      t.exports = a.isStandardBrowserEnv() ? {
        write: function (t, e, n, r, o, i) {
          var s = [
          ];
          s.push(t + '=' + encodeURIComponent(e)),
          a.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
          a.isString(r) && s.push('path=' + r),
          a.isString(o) && s.push('domain=' + o),
          !0 === i && s.push('secure'),
          document.cookie = s.join('; ')
        },
        read: function (t) {
          var e = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'));
          return e ? decodeURIComponent(e[3]) : null
        },
        remove: function (t) {
          this.write(t, '', r() - 86400000)
        }
      }
       : {
        write: function () {
        },
        read: function () {
          return null
        },
        remove: function () {
        }
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(23),
      o = n(298);
      function i(t) {
        if ('function' != typeof t) throw new TypeError('executor must be a function.');
        var e;
        this.promise = new r(function (t) {
          e = t
        });
        var n = this;
        t(function (t) {
          n.reason || (n.reason = new o(t), e(n.reason))
        })
      }
      i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
      },
      i.source = function () {
        var e;
        return {
          token: new i(function (t) {
            e = t
          }),
          cancel: e
        }
      },
      t.exports = i
    },
    function (t, e, n) {
      'use strict';
      t.exports = function (e) {
        return function (t) {
          return e.apply(null, t)
        }
      }
    },
    function (t, e, n) {
      'use strict';
      (function (s) {
        var a = n(137);
        n(10) (e, '__esModule', {
          value: !0
        }),
        e.verifyTable = function (t, e, n) {
          var r = {
            serialize: function (t) {
              return s.from(t)
            }
          },
          o = new c.MapProof(t, r, u.Hash);
          if (o.merkleRoot !== e) throw new Error('Table proof is corrupted');
          var i = a(o).get(n);
          if (void 0 !== i) return i;
          throw new Error('Table not found in the root tree')
        };
        var u = n(140),
        c = n(290)
      }).call(this, n(279).Buffer)
    },
    function (t, e, n) {
      var i = n(111),
      s = n(45),
      a = n(182),
      u = n(184),
      c = n(141);
      function l(r) {
        var o = function () {
          if ('undefined' == typeof Reflect || !i) return !1;
          if (i.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(i(Boolean, [
            ], function () {
            })),
            !0
          } catch (t) {
            return !1
          }
        }();
        return function () {
          var t,
          e = c(r);
          if (o) {
            var n = c(this).constructor;
            t = i(e, arguments, n)
          } else t = e.apply(this, arguments);
          return u(this, t)
        }
      }
      var r = function (t) {
        'use strict';
        a(o, t);
        var r = l(o);
        function o(t, e) {
          var n;
          return s(this, o),
          (n = r.call(this, e)).rawTx = t,
          n
        }
        return o
      }(n(185) (Error));
      t.exports = r
    },
    function (t, e, n) {
      var r = n(264);
      t.exports = r
    },
    function (t, e, n) {
      var r = n(284);
      t.exports = r
    },
    function (t, e) {
      t.exports = function (t) {
        if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return t
      }
    },
    function (t, e, n) {
      t.exports = n(615)
    },
    function (t, e, n) {
      var r = n(248);
      t.exports = r
    },
    function (t, e, n) {
      t.exports = n(617)
    },
    function (t, e, n) {
      var r = n(287);
      n(618),
      n(620),
      n(622),
      n(624),
      n(625),
      n(626),
      n(627),
      n(628),
      n(629),
      n(631),
      n(632),
      n(633),
      n(634),
      n(635),
      n(636),
      n(637),
      n(638),
      n(639),
      n(640),
      t.exports = r
    },
    function (t, e, n) {
      n(0) ({
        target: 'Map',
        stat: !0
      }, {
        from: n(619)
      })
    },
    function (t, e, n) {
      'use strict';
      var c = n(15),
      l = n(24),
      f = n(16);
      t.exports = function (t, e, n) {
        var r,
        o,
        i,
        s,
        a = arguments.length,
        u = 1 < a ? e : void 0;
        return c(this),
        (r = void 0 !== u) && c(u),
        null == t ? new this : (o = [
        ], r ? (i = 0, s = l(u, 2 < a ? n : void 0, 2), f(t, function (t) {
          o.push(s(t, i++))
        })) : f(t, o.push, o), new this(o))
      }
    },
    function (t, e, n) {
      n(0) ({
        target: 'Map',
        stat: !0
      }, {
        of: n(621)
      })
    },
    function (t, e, n) {
      'use strict';
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t];
        return new this(e)
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(623);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        deleteAll: function () {
          return i.apply(this, arguments)
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var s = n(5),
      a = n(15);
      t.exports = function () {
        for (var t, e = s(this), n = a(e.delete), r = !0, o = 0, i = arguments.length; o < i; o++) t = n.call(e, arguments[o]),
        r = r && t;
        return !!r
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(24),
      a = n(53),
      u = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        every: function (t, e) {
          var n = i(this),
          r = a(n),
          o = s(t, 1 < arguments.length ? e : void 0, 3);
          return !u(r, function (t, e) {
            if (!o(e, t, n)) return u.stop()
          }, void 0, !0, !0).stopped
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      a = n(38),
      u = n(5),
      c = n(15),
      l = n(24),
      f = n(110),
      h = n(53),
      p = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        filter: function (t, e) {
          var n = u(this),
          r = h(n),
          o = l(t, 1 < arguments.length ? e : void 0, 3),
          i = new (f(n, a('Map'))),
          s = c(i.set);
          return p(r, function (t, e) {
            o(e, t, n) && s.call(i, t, e)
          }, void 0, !0, !0),
          i
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(24),
      a = n(53),
      u = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        find: function (t, e) {
          var n = i(this),
          r = a(n),
          o = s(t, 1 < arguments.length ? e : void 0, 3);
          return u(r, function (t, e) {
            if (o(e, t, n)) return u.stop(e)
          }, void 0, !0, !0).result
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(24),
      a = n(53),
      u = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        findKey: function (t, e) {
          var n = i(this),
          r = a(n),
          o = s(t, 1 < arguments.length ? e : void 0, 3);
          return u(r, function (t, e) {
            if (o(e, t, n)) return u.stop(t)
          }, void 0, !0, !0).result
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      a = n(16),
      u = n(15);
      r({
        target: 'Map',
        stat: !0
      }, {
        groupBy: function (t, n) {
          var r = new this;
          u(n);
          var o = u(r.has),
          i = u(r.get),
          s = u(r.set);
          return a(t, function (t) {
            var e = n(t);
            o.call(r, e) ? i.call(r, e).push(t) : s.call(r, e, [
              t
            ])
          }),
          r
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(53),
      a = n(630),
      u = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        includes: function (n) {
          return u(s(i(this)), function (t, e) {
            if (a(e, n)) return u.stop()
          }, void 0, !0, !0).stopped
        }
      })
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t === e || t != t && e != e
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(16),
      i = n(15);
      r({
        target: 'Map',
        stat: !0
      }, {
        keyBy: function (t, e) {
          var n = new this;
          i(e);
          var r = i(n.set);
          return o(t, function (t) {
            r.call(n, e(t), t)
          }),
          n
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(53),
      a = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        keyOf: function (n) {
          return a(s(i(this)), function (t, e) {
            if (e === n) return a.stop(t)
          }, void 0, !0, !0).result
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      a = n(38),
      u = n(5),
      c = n(15),
      l = n(24),
      f = n(110),
      h = n(53),
      p = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        mapKeys: function (t, e) {
          var n = u(this),
          r = h(n),
          o = l(t, 1 < arguments.length ? e : void 0, 3),
          i = new (f(n, a('Map'))),
          s = c(i.set);
          return p(r, function (t, e) {
            s.call(i, o(e, t, n), e)
          }, void 0, !0, !0),
          i
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      a = n(38),
      u = n(5),
      c = n(15),
      l = n(24),
      f = n(110),
      h = n(53),
      p = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        mapValues: function (t, e) {
          var n = u(this),
          r = h(n),
          o = l(t, 1 < arguments.length ? e : void 0, 3),
          i = new (f(n, a('Map'))),
          s = c(i.set);
          return p(r, function (t, e) {
            s.call(i, t, o(e, t, n))
          }, void 0, !0, !0),
          i
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(15),
      a = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        merge: function (t) {
          for (var e = i(this), n = s(e.set), r = 0; r < arguments.length; ) a(arguments[r++], n, e, !0);
          return e
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      s = n(5),
      a = n(15),
      u = n(53),
      c = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        reduce: function (n, t) {
          var r = s(this),
          e = u(r),
          o = arguments.length < 2,
          i = o ? void 0 : t;
          if (a(n), c(e, function (t, e) {
            i = o ? (o = !1, e) : n(i, e, t, r)
          }, void 0, !0, !0), o) throw TypeError('Reduce of empty map with no initial value');
          return i
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      i = n(5),
      s = n(24),
      a = n(53),
      u = n(16);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        some: function (t, e) {
          var n = i(this),
          r = a(n),
          o = s(t, 1 < arguments.length ? e : void 0, 3);
          return u(r, function (t, e) {
            if (o(e, t, n)) return u.stop()
          }, void 0, !0, !0).stopped
        }
      })
    },
    function (t, e, n) {
      'use strict';
      var r = n(0),
      o = n(8),
      a = n(5),
      u = n(15);
      r({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: o
      }, {
        update: function (t, e, n) {
          var r = a(this),
          o = arguments.length;
          u(e);
          var i = r.has(t);
          if (!i && o < 3) throw TypeError('Updating absent value');
          var s = i ? r.get(t) : u(2 < o ? n : void 0) (t, r);
          return r.set(t, e(s, t, r)),
          r
        }
      })
    },
    function (t, e, n) {
      'use strict';
      n(0) ({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: n(8)
      }, {
        upsert: n(302)
      })
    },
    function (t, e, n) {
      'use strict';
      n(0) ({
        target: 'Map',
        proto: !0,
        real: !0,
        forced: n(8)
      }, {
        updateOrInsert: n(302)
      })
    },
    function (t, e, n) {
      var r = n(642);
      t.exports = function (t) {
        var e;
        return - 1 !== r(e = Function.toString.call(t)).call(e, '[native code]')
      }
    },
    function (t, e, n) {
      t.exports = n(643)
    },
    function (t, e, n) {
      var r = n(251);
      t.exports = r
    },
    function (r, t, e) {
      var i = e(645),
      o = e(647),
      s = e(183);
      function a(t, e, n) {
        return !function () {
          if ('undefined' != typeof Reflect && o && !o.sham) {
            if ('function' == typeof Proxy) return 1;
            try {
              return Date.prototype.toString.call(o(Date, [
              ], function () {
              })),
              1
            } catch (t) {
              return
            }
          }
        }() ? r.exports = a = function (t, e, n) {
          var r = [
            null
          ];
          r.push.apply(r, e);
          var o = new (i(Function).apply(t, r));
          return n && s(o, n.prototype),
          o
        }
         : r.exports = a = o,
        a.apply(null, arguments)
      }
      r.exports = a
    },
    function (t, e, n) {
      t.exports = n(646)
    },
    function (t, e, n) {
      var r = n(270);
      t.exports = r
    },
    function (t, e, n) {
      t.exports = n(648)
    },
    function (t, e, n) {
      var r = n(285);
      t.exports = r
    },
    function (t, e, n) {
      var i = n(111),
      s = n(45),
      r = n(51),
      a = n(182),
      u = n(184),
      c = n(141);
      function l(r) {
        var o = function () {
          if ('undefined' == typeof Reflect || !i) return !1;
          if (i.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(i(Boolean, [
            ], function () {
            })),
            !0
          } catch (t) {
            return !1
          }
        }();
        return function () {
          var t,
          e = c(r);
          if (o) {
            var n = c(this).constructor;
            t = i(e, arguments, n)
          } else t = e.apply(this, arguments);
          return u(this, t)
        }
      }
      var o = function (t) {
        'use strict';
        a(i, t);
        var o = l(i);
        function i(t, e, n) {
          var r;
          return s(this, i),
          (r = o.call(this, e)).errorCode = t,
          r.txHash = n,
          r
        }
        return r(i, [
          {
            key: 'code',
            get: function () {
              return this.errorCode
            }
          },
          {
            key: 'transactionHash',
            get: function () {
              return this.txHash
            }
          }
        ]),
        i
      }(n(185) (Error));
      t.exports = o
    },
    function (t, e, n) {
      var i = n(111),
      s = n(45),
      a = n(51),
      u = n(182),
      c = n(184),
      l = n(141);
      function f(r) {
        var o = function () {
          if ('undefined' == typeof Reflect || !i) return !1;
          if (i.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(i(Boolean, [
            ], function () {
            })),
            !0
          } catch (t) {
            return !1
          }
        }();
        return function () {
          var t,
          e = l(r);
          if (o) {
            var n = l(this).constructor;
            t = i(e, arguments, n)
          } else t = e.apply(this, arguments);
          return c(this, t)
        }
      }
      var r = function (t) {
        'use strict';
        u(o, t);
        var r = f(o);
        function o(t, e) {
          var n;
          return s(this, o),
          (n = r.call(this, e)).httpStatus = t,
          n
        }
        return a(o, [
          {
            key: 'httpStatusCode',
            get: function () {
              return this.httpStatus
            }
          }
        ]),
        o
      }(n(185) (Error));
      t.exports = r
    },
    function (t, e) {
      t.exports = {
        AuthorNotAuthorized: 0,
        FailedToCreateVoting: 1,
        VotingDoesNotExist: 2,
        ForbiddenForThisVotingState: 3,
        ParticipationCannotBeRevoked: 4,
        BallotCannotBeIssued: 5,
        BallotCannotBeStored: 6,
        DecryptionKeyIsAlreadyPublished: 7,
        DecryptionKeyIsNotPublished: 8,
        BallotCannotBeDecrypted: 9,
        IncorrectPrivateKey: 10,
        DecryptionIsNotFinished: 11,
        BallotDoesNotExist: 12,
        WrongTxInitiator: 13,
        VoterNotFound: 14,
        VotingAlreadyExists: 15,
        ChoicesCannotContainDuplicates: 16,
        ChoicesCannotBeLessMinChoices: 17,
        ChoicesCannotBeMoreMaxChoices: 18,
        ChoicesCannotOutOfBounds: 19,
        VoterIsNotInAcl: 20,
        VoterHasAlreadyVoted: 21,
        BallotForVoterWasAlreadyIssued: 22,
        ParticipationForVoterWasRevoked: 23,
        DistrictIDCannotBeZero: 24
      }
    },
    function (t, e, n) {
      var r = n(45),
      o = n(51),
      i = n(130),
      s = n(20),
      a = function () {
        'use strict';
        function t() {
          r(this, t)
        }
        return o(t, [
          {
            key: 'createNewAccount',
            value: function () {
              return s.keyPair()
            }
          },
          {
            key: 'createAccountFromSecretKey',
            value: function (t) {
              try {
                var e = i.sign.keyPair.fromSecretKey(s.hexadecimalToUint8Array(t));
                return {
                  publicKey: s.uint8ArrayToHexadecimal(e.publicKey),
                  secretKey: s.uint8ArrayToHexadecimal(e.secretKey)
                }
              } catch (t) {
                throw new Error('Private Key is invalid!')
              }
            }
          }
        ]),
        t
      }();
      t.exports = new a
    },
    function (t, e, n) {
      var r = n(14);
      t.exports = function (t) {
        return 'string' == typeof t && '0x' === r(t).call(t, 0, 2) ? r(t).call(t, 2) : t
      }
    },
    function (t, e, n) {
      var r = n(20);
      t.exports = {
        PublicKey: function (t) {
          return {
            data: r.hexadecimalToUint8Array(t)
          }
        },
        SealedBoxPublicKey: function (t) {
          return {
            data: r.hexadecimalToUint8Array(t)
          }
        },
        SealedBoxSecretKey: function (t) {
          return {
            data: r.hexadecimalToUint8Array(t)
          }
        },
        SealedBoxNonce: function (t) {
          return {
            data: r.hexadecimalToUint8Array(t)
          }
        }
      }
    },
    function (t, e, n) {
      var r = n(20);
      t.exports = function (t) {
        return r.hash(r.hexadecimalToUint8Array(t))
      }
    },
    function (t, e, n) {
      var r = n(176);
      t.exports = r({
        Registration: 0,
        InProcess: 1,
        Stopped: 2,
        Finished: 3
      })
    },
    function (t, e, n) {
      'use strict';
      t.exports = n(658)
    },
    function (t, e, n) {
      'use strict';
      var r = e;
      function o() {
        r.Reader._configure(r.BufferReader),
        r.util._configure()
      }
      r.build = 'minimal',
      r.Writer = n(304),
      r.BufferWriter = n(660),
      r.Reader = n(305),
      r.BufferReader = n(661),
      r.util = n(77),
      r.rpc = n(662),
      r.roots = n(664),
      r.configure = o,
      r.Writer._configure(r.BufferWriter),
      o()
    },
    function (t, e, n) {
      'use strict';
      var r = n(31);
      t.exports = i;
      var o = n(77);
      function i(t, e) {
        this.lo = t >>> 0,
        this.hi = e >>> 0
      }
      var s = i.zero = new i(0, 0);
      s.toNumber = function () {
        return 0
      },
      s.zzEncode = s.zzDecode = function () {
        return this
      },
      s.length = function () {
        return 1
      };
      var a = i.zeroHash = '\x00\x00\x00\x00\x00\x00\x00\x00';
      i.fromNumber = function (t) {
        if (0 === t) return s;
        var e = t < 0;
        e && (t = - t);
        var n = t >>> 0,
        r = (t - n) / 4294967296 >>> 0;
        return e && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))),
        new i(n, r)
      },
      i.from = function (t) {
        if ('number' == typeof t) return i.fromNumber(t);
        if (o.isString(t)) {
          if (!o.Long) return i.fromNumber(r(t, 10));
          t = o.Long.fromString(t)
        }
        return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : s
      },
      i.prototype.toNumber = function (t) {
        if (!t && this.hi >>> 31) {
          var e = 1 + ~this.lo >>> 0,
          n = ~this.hi >>> 0;
          return e || (n = n + 1 >>> 0),
          - (e + 4294967296 * n)
        }
        return this.lo + 4294967296 * this.hi
      },
      i.prototype.toLong = function (t) {
        return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
          low: 0 | this.lo,
          high: 0 | this.hi,
          unsigned: Boolean(t)
        }
      };
      var u = String.prototype.charCodeAt;
      i.fromHash = function (t) {
        return t === a ? s : new i((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
      },
      i.prototype.toHash = function () {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
      },
      i.prototype.zzEncode = function () {
        var t = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0,
        this.lo = (this.lo << 1 ^ t) >>> 0,
        this
      },
      i.prototype.zzDecode = function () {
        var t = - (1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0,
        this.hi = (this.hi >>> 1 ^ t) >>> 0,
        this
      },
      i.prototype.length = function () {
        var t = this.lo,
        e = (this.lo >>> 28 | this.hi << 4) >>> 0,
        n = this.hi >>> 24;
        return 0 == n ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
      }
    },
    function (t, e, n) {
      'use strict';
      n(6);
      var r = n(21);
      t.exports = a;
      var o = n(304);
      (a.prototype = r(o.prototype)).constructor = a;
      var i = n(77),
      s = i.Buffer;
      function a() {
        o.call(this)
      }
      a.alloc = function (t) {
        return (a.alloc = i._Buffer_allocUnsafe) (t)
      };
      var u = s && s.prototype instanceof Uint8Array && 'set' === s.prototype.set.name ? function (t, e, n) {
        e.set(t, n)
      }
       : function (t, e, n) {
        if (t.copy) t.copy(e, n, 0, t.length);
         else for (var r = 0; r < t.length; ) e[n++] = t[r++]
      };
      function c(t, e, n) {
        t.length < 40 ? i.utf8.write(t, e, n) : e.utf8Write(t, n)
      }
      a.prototype.bytes = function (t) {
        i.isString(t) && (t = i._Buffer_from(t, 'base64'));
        var e = t.length >>> 0;
        return this.uint32(e),
        e && this._push(u, e, t),
        this
      },
      a.prototype.string = function (t) {
        var e = s.byteLength(t);
        return this.uint32(e),
        e && this._push(c, e, t),
        this
      }
    },
    function (t, e, n) {
      'use strict';
      var r = n(14),
      o = n(21);
      t.exports = a;
      var i = n(305);
      (a.prototype = o(i.prototype)).constructor = a;
      var s = n(77);
      function a(t) {
        i.call(this, t)
      }
      s.Buffer && (a.prototype._slice = r(s.Buffer.prototype)),
      a.prototype.string = function () {
        var t = this.uint32();
        return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
      }
    },
    function (t, e, n) {
      'use strict';
      e.Service = n(663)
    },
    function (t, e, n) {
      'use strict';
      var a = n(107),
      r = n(21);
      t.exports = o;
      var u = n(77);
      function o(t, e, n) {
        if ('function' != typeof t) throw TypeError('rpcImpl must be a function');
        u.EventEmitter.call(this),
        this.rpcImpl = t,
        this.requestDelimited = Boolean(e),
        this.responseDelimited = Boolean(n)
      }((o.prototype = r(u.EventEmitter.prototype)).constructor = o).prototype.rpcCall = function t(n, e, r, o, i) {
        if (!o) throw TypeError('request must be specified');
        var s = this;
        if (!i) return u.asPromise(t, s, n, e, r, o);
        if (s.rpcImpl) try {
          return s.rpcImpl(n, e[s.requestDelimited ? 'encodeDelimited' : 'encode'](o).finish(), function (t, e) {
            if (t) return s.emit('error', t, n),
            i(t);
            if (null !== e) {
              if (!(e instanceof r)) try {
                e = r[s.responseDelimited ? 'decodeDelimited' : 'decode'](e)
              } catch (t) {
                return s.emit('error', t, n),
                i(t)
              }
              return s.emit('data', e, n),
              i(null, e)
            }
            s.end(!0)
          })
        } catch (t) {
          return s.emit('error', t, n),
          void a(function () {
            i(t)
          }, 0)
        } else a(function () {
          i(Error('already ended'))
        }, 0)
      },
      o.prototype.end = function (t) {
        return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit('end').off()),
        this
      }
    },
    function (t, e, n) {
      'use strict';
      t.exports = {
      }
    },
    function (t, e, n) {
      var r = n(666),
      o = n(667),
      i = n(668),
      s = n(669),
      a = n(670),
      u = n(671),
      c = n(672),
      l = n(673),
      f = n(674),
      h = n(675),
      p = n(676),
      d = n(677);
      t.exports = {
        createVoting: r,
        registerVoters: o,
        stopRegistration: i,
        revokeVoterParticipation: s,
        issueBallot: a,
        addVoterKey: u,
        storeBallot: c,
        stopVoting: l,
        publishDecryptionKey: f,
        decryptBallot: h,
        finalizeVoting: p,
        finalizeVotingWithResults: d
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxCreateVoting,
      s = n(112).pbConvert,
      a = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 0,
          schema: i
        }),
        r = {
          crypto_system: {
            public_key: s.SealedBoxPublicKey(e.crypto_system.public_key)
          },
          ballots_config: e.ballots_config,
          revote_enabled: e.revote_enabled
        };
        return new a(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxRegisterVoters,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 1,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          voters: e.voters
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxStopRegistration,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 2,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxRevokeVoterParticipation,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 3,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          voter_id: e.voter_id,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxIssueBallot,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 4,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          voter_id: e.voter_id,
          district_id: e.district_id,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxAddVoterKey,
      s = n(112).pbConvert,
      a = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 5,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          voter_key: s.PublicKey(e.voter_key)
        };
        return new a(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxStoreBallot,
      s = n(112).pbConvert,
      a = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 6,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          district_id: e.district_id,
          encrypted_choice: {
            encrypted_message: o.hexadecimalToUint8Array(e.encrypted_choice.encrypted_message),
            nonce: s.SealedBoxNonce(e.encrypted_choice.nonce),
            public_key: s.SealedBoxPublicKey(e.encrypted_choice.public_key)
          }
        };
        return new a(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxStopVoting,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 7,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxPublishDecryptionKey,
      s = n(112).pbConvert,
      a = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 8,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          private_key: s.SealedBoxSecretKey(e.private_key),
          seed: o.randomUint64()
        };
        return new a(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxDecryptBallot,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 9,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          ballot_index: e.ballot_index,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxFinalizeVoting,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 10,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          seed: o.randomUint64()
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var o = n(20),
      i = n(35).votings_service.TxFinalizeVotingWithResults,
      s = n(36);
      t.exports = function (t, e) {
        var n = new o.Transaction({
          serviceId: 1001,
          methodId: 11,
          schema: i
        }),
        r = {
          voting_id: e.voting_id,
          seed: o.randomUint64(),
          results: e.results
        };
        return new s(t, n, r)
      }
    },
    function (t, e, n) {
      var i = n(25),
      r = n(303).VotingState,
      s = n(186),
      o = n(679);
      t.exports = {
        getCryptoSystemSettings: function (t) {
          return new s(['services/votings_service/v1/crypto-system-settings',
          '?voting_id='.concat(t)].join(''))
        },
        getBallotsConfig: function (t) {
          return new s(['services/votings_service/v1/ballots-config',
          '?voting_id='.concat(t)].join(''))
        },
        getVotingState: function (t) {
          return new s(['services/votings_service/v1/voting-state',
          '?voting_id='.concat(t)].join(''), function (t) {
            switch (t.state) {
              case 'Registration':
                return r.Registration;
              case 'InProcess':
                return r.InProcess;
              case 'Stopped':
                return r.Stopped;
              case 'Finished':
                return r.Finished;
              default:
                throw new Error('Unknown voting state: '.concat(t.state))
            }
          })
        },
        getRegisteredVotersAmount: function (t) {
          return new s(['services/votings_service/v1/registered-voters-amount',
          '?voting_id='.concat(t)].join(''), function (t) {
            return t.registered_voters_amount
          })
        },
        getVoterInfo: function (t, e) {
          var n;
          return new s(['services/votings_service/v1/voter-info',
          i(n = '?voting_id='.concat(t, '&voter_id=')).call(n, e)].join(''))
        },
        getIssuedBallotsAmount: function (t) {
          return new s(['services/votings_service/v1/issued-ballots-amount',
          '?voting_id='.concat(t)].join(''), function (t) {
            return t.issued_ballots_amount
          })
        },
        getStoredBallotsAmount: function (t) {
          return new s(['services/votings_service/v1/stored-ballots-amount',
          '?voting_id='.concat(t)].join(''), function (t) {
            return t.stored_ballots_amount
          })
        },
        getDecryptionStatistics: function (t) {
          return new s(['services/votings_service/v1/decryption-statistics',
          '?voting_id='.concat(t)].join(''))
        },
        getBallotByIndex: function (t, e) {
          var n;
          return new s(['services/votings_service/v1/ballot-by-index',
          i(n = '?voting_id='.concat(t, '&ballot_index=')).call(n, e)].join(''))
        },
        getBallotByStoreTxHash: function (t, e) {
          var n;
          return new s(['services/votings_service/v1/ballot-by-store-tx-hash',
          i(n = '?voting_id='.concat(t, '&store_tx_hash=')).call(n, e)].join(''))
        },
        getBallotsByStoreTxHashes: function (t, e) {
          return new o(['services/votings_service/v1/ballots-by-store-tx-hashes'], {
            voting_id: t,
            store_tx_hashes: e
          }, function (t) {
            return t.ballots
          })
        },
        getInvalidBallots: function (t, e, n) {
          var r,
          o;
          return new s(['services/votings_service/v1/invalid-ballots',
          i(r = i(o = '?voting_id='.concat(t, '&from=')).call(o, e, '&limit=')).call(r, n)].join(''))
        },
        getVotingResults: function (t) {
          return new s(['services/votings_service/v1/voting-results',
          '?voting_id='.concat(t)].join(''))
        },
        isRevoteEnabled: function (t) {
          return new s(['services/votings_service/v1/revote-enabled',
          '?voting_id='.concat(t)].join(''))
        }
      }
    },
    function (t, e, n) {
      var o = n(45),
      i = n(51),
      r = function () {
        'use strict';
        function r(t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
          n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          o(this, r),
          this.requestUrl = t,
          this.requestBody = e,
          this.responseProcessor = 'function' == typeof n ? n : function (t) {
            return t
          },
          this.blockchainConnector = null
        }
        return i(r, [
          {
            key: 'send',
            value: function (t) {
              return (this.blockchainConnector = t).makePostRequest(this.requestUrl, this.requestBody).then(this.responseProcessor)
            }
          }
        ]),
        r
      }();
      t.exports = r
    },
    function (t, e, n) {
      var r = n(186);
      t.exports = {
        getTransactionInfo: function (t) {
          return new r(['explorer/v1/transactions',
          '?hash='.concat(t)].join(''))
        }
      }
    },
    function (t, e, n) {
      var r = n(14),
      o = n(23),
      i = n(45),
      s = n(51),
      a = function () {
        'use strict';
        function e(t) {
          i(this, e),
          this.rawTx = t,
          this.hash = null,
          this.blockchainConnector = null
        }
        return s(e, [
          {
            key: 'send',
            value: function (t) {
              var e = this;
              return (this.blockchainConnector = t).sendRawTransaction(this.rawTx).then(function (t) {
                return e.hash = t
              })
            }
          },
          {
            key: 'getHash',
            value: function () {
              return this.hash
            }
          },
          {
            key: 'getResult',
            value: function (t) {
              return t && (this.blockchainConnector = t),
              this.blockchainConnector ? this.hash ? this.blockchainConnector.getTransactionResult(this.hash) : o.reject(new Error('Transaction either was not sent or sending failed')) : o.reject(new Error('Transaction should be sent to wait for its result'))
            }
          },
          {
            key: 'waitResult',
            value: function (t) {
              return t && (this.blockchainConnector = t),
              this.blockchainConnector ? this.hash ? this.blockchainConnector.waitTransactionResult(this.hash) : o.reject(new Error('Transaction either was not sent or sending failed')) : o.reject(new Error('Transaction should be sent to wait for its result'))
            }
          },
          {
            key: 'getRawTx',
            value: function () {
              return this.rawTx
            }
          },
          {
            key: 'getUnsignedRawTx',
            value: function () {
              var t;
              return r(t = this.rawTx).call(t, 0, - 128)
            }
          }
        ]),
        e
      }();
      t.exports = a
    },
    function (t, e, n) {
      var r = n(45),
      o = n(51),
      i = n(240),
      s = i.AccountBuilder,
      a = i.transactions,
      u = i.util,
      c = a.storeBallot,
      l = u.calculateRawTxHash,
      f = function () {
        'use strict';
        function t() {
          r(this, t),
          this.account = s.createNewAccount()
        }
        return o(t, [
          {
            key: 'getAccountAddress',
            value: function () {
              return this.account.publicKey
            }
          },
          {
            key: 'getSignedTransaction',
            value: function (t, e, n, r, o) {
              return c(this.account, {
                voting_id: t,
                district_id: e,
                encrypted_choice: {
                  encrypted_message: n,
                  nonce: r,
                  public_key: o
                }
              }).getRawTx()
            }
          },
          {
            key: 'getRawTransactionHash',
            value: function (t) {
              return l(t)
            }
          }
        ]),
        t
      }();
      t.exports = f
    }
  ],
  e = {
  },
  f.m = d,
  f.c = e,
  f.d = function (t, e, n) {
    f.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  },
  f.r = function (t) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: 'Module'
    }),
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
  },
  f.t = function (e, t) {
    if (1 & t && (e = f(e)), 8 & t) return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (f.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && 'string' != typeof e) for (var r in e) f.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  },
  f.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    }
     : function () {
      return t
    };
    return f.d(e, 'a', e),
    e
  },
  f.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  },
  f.p = '',
  f(f.s = 306);
  function f(t) {
    if (e[t]) return e[t].exports;
    var n = e[t] = {
      i: t,
      l: !1,
      exports: {
      }
    };
    return d[t].call(n.exports, n, n.exports, f),
    n.l = !0,
    n.exports
  }
  var d,
  e
});
