console.log("Injected script loaded");
(function(win) {
    if (typeof win.HAR == "undefined") {
      let id = 0;
      let callsInProgress = new Map();
      let onRequestFinishedListeners = new Set();

      /**
       * Implementation of HAR API. This object represents a wrapper
       * around various DOM messages sent between the page and
       * HARTriggerExport extension.
       */
      win.HAR = {
        triggerExport: function(options) {
          return new window.Promise(function(resolve) {
            let actionId = ++id;
            callsInProgress.set(actionId, resolve);

            let event = new window.CustomEvent("HAR.triggerExport", {
              detail: {
                actionId: actionId,
                options: options,
              }
            });

            document.dispatchEvent(event);
          });
        },
        addRequestListener: function(listener) {
          onRequestFinishedListeners.add(listener);

          // Register `onRequestFinished` listener on the backend.
          // The backend listener is registered dynamically since
          // it represents performance bottleneck.
          // All HTTP details data related to the finished request
          // needs to be fetched from the RDP server and passed to
          // the listener.
          // So, don't do it if the page doesn't need it.
          if (onRequestFinishedListeners.size == 1) {
            let event = new window.CustomEvent("HAR.addRequestListener");
            document.dispatchEvent(event);
          }
        },
        removeRequestListener: function(listener) {
          onRequestFinishedListeners.delete(listener);

          // Unregister backend listener if it isn't needed anymore.
          if (onRequestFinishedListeners.size == 0) {
            let event = new window.CustomEvent("HAR.removeRequestListener");
            document.dispatchEvent(event);
          }
        },
      };

      /**
       * Handle responses for `HAR.triggerExport` messages.
       */
      document.addEventListener("HAR.triggerExport-Response", function(event) {
        let { actionId, harLog } = event.detail;
        harLog = harLog ? JSON.parse(harLog) : null;
        let resolve = callsInProgress.get(actionId);
        if (resolve) {
          callsInProgress.delete(actionId);
          resolve(harLog);
        } else {
          console.log("HAR API: Unknown HAR response!", event);
        }
      });

      /**
       * Handle `HAR.onRequestFinished` send when HTTP request finished.
       */
      document.addEventListener("HAR.onRequestFinished", function(event) {
        onRequestFinishedListeners.forEach(listener => {
          listener(JSON.parse(event.detail.request));
        })
      });
    }
  })(window);

self = window;
/*! For license information please see index.js.LICENSE.txt */
function _typeof2(t) {
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof2(t)
}! function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof2(module)) ? module.exports = e(): "function" == typeof define && define.amd ? define("ditVoting", [], e) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) ? exports.ditVoting = e() : t.ditVoting = e()
}(window, (function() {
    return d = [function(t, e, n) {
        "use strict";

        function r(t) {
            function e(e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e);
                        case 2:
                            return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            }
            return e.prototype = t.prototype, e
        }
        var o = n(11),
            i = n(92).f,
            s = n(189),
            a = n(3),
            u = n(24),
            c = n(48),
            l = n(26);
        t.exports = function(t, e) {
            var n, f, h, p, d, y, v, g, _ = t.target,
                m = t.global,
                b = t.stat,
                w = t.proto,
                x = m ? o : b ? o[_] : (o[_] || {}).prototype,
                O = m ? a : a[_] || (a[_] = {}),
                S = O.prototype;
            for (h in e) n = !s(m ? h : _ + (b ? "." : "#") + h, t.forced) && x && l(x, h), d = O[h], n && (y = t.noTargetGet ? (g = i(x, h)) && g.value : x[h]), p = n && y ? y : e[h], n && _typeof2(d) == _typeof2(p) || (v = t.bind && n ? u(p, o) : t.wrap && n ? r(p) : w && "function" == typeof p ? u(Function.call, p) : p, (t.sham || p && p.sham || d && d.sham) && c(v, "sham", !0), O[h] = v, w && (l(a, f = _ + "Prototype") || c(a, f, {}), a[f][h] = p, t.real && S && !S[h] && c(S, h, p)))
        }
    }, function(t, e, n) {
        t.exports = n(346)
    }, function(t, e, n) {
        "use strict";
        var r = n(128),
            o = {};
        o[n(18)("toStringTag")] = "z", o + "" != "[object z]" && n(58)(Object.prototype, "toString", (function() {
            return "[object " + r(this) + "]"
        }), !0)
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            n(58)(RegExp.prototype, a, t, !0)
        }
        n(381);
        var o = n(43),
            i = n(131),
            s = n(39),
            a = "toString",
            u = /./ [a];
        n(29)((function() {
            return "/a/b" != u.call({
                source: "a",
                flags: "b"
            })
        })) ? r((function() {
            var t = o(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? i.call(t) : void 0)
        })) : u.name != a && r((function() {
            return u.call(this)
        }))
    }, function(t, e, n) {
        var r = n(12);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t
        }
    }, function(t, e, n) {
        n(56)("Uint8", 1, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e) {
        t.exports = !0
    }, function(t, e, n) {
        var r = n(11),
            o = n(144),
            i = n(26),
            s = n(117),
            a = n(145),
            u = n(191),
            c = o("wks"),
            l = r.Symbol,
            f = u ? l : l && l.withoutSetter || s;
        t.exports = function(t) {
            return i(c, t) || (a && i(l, t) ? c[t] = l[t] : c[t] = f("Symbol." + t)), c[t]
        }
    }, function(t, e, n) {
        t.exports = n(481)
    }, function(t, e, n) {
        (function(e) {
            function n(t) {
                return t && t.Math == Math && t
            }
            t.exports = n("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof2(globalThis)) && globalThis) || n("object" == ("undefined" == typeof window ? "undefined" : _typeof2(window)) && window) || n("object" == ("undefined" == typeof self ? "undefined" : _typeof2(self)) && self) || n("object" == _typeof2(e) && e) || Function("return this")()
        }).call(this, n(91))
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == _typeof2(t) ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        var r = n(388),
            o = n(390);

        function i(e) {
            return t.exports = i = "function" == typeof o && "symbol" == _typeof2(r) ? function(t) {
                return _typeof2(t)
            } : function(t) {
                return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : _typeof2(t)
            }, i(e)
        }
        t.exports = i
    }, function(t, e, n) {
        t.exports = n(415)
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }
    }, function(t, e, n) {
        function r(t, e) {
            this.stopped = t, this.result = e
        }
        var o = n(5),
            i = n(205),
            s = n(42),
            a = n(24),
            u = n(120),
            c = n(204);
        (t.exports = function(t, e, n, l, f) {
            var h, p, d, y, v, g, _, m = a(e, n, l ? 2 : 1);
            if (f) h = t;
            else {
                if ("function" != typeof(p = u(t))) throw TypeError("Target is not iterable");
                if (i(p)) {
                    for (d = 0, y = s(t.length); d < y; d++)
                        if ((v = l ? m(o(_ = t[d])[0], _[1]) : m(t[d])) && v instanceof r) return v;
                    return new r(!1)
                }
                h = p.call(t)
            }
            for (g = h.next; !(_ = g.call(h)).done;)
                if ("object" == _typeof2(v = c(h, m, _.value, l)) && v && v instanceof r) return v;
            return new r(!1)
        }).stop = function(t) {
            return new r(!0, t)
        }
    }, function(t, e, n) {
        var r = n(3),
            o = n(26),
            i = n(134),
            s = n(41).f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = {});
            o(e, t) || s(e, t, {
                value: i.f(t)
            })
        }
    }, function(t, e, n) {
        var r = n(153)("wks"),
            o = n(99),
            i = n(30).Symbol,
            s = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
        }).store = r
    }, function(t, e, n) {
        var r = n(3);
        t.exports = function(t) {
            return r[t + "Prototype"]
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i, s = n(46),
            a = n(1),
            u = n(10);
        u(e, "__esModule", {
            value: !0
        });
        var c = {
            version: !0
        };
        e.version = void 0;
        var l = n(262);
        a(r = s(l)).call(r, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
                enumerable: !0,
                get: function() {
                    return l[t]
                }
            }))
        }));
        var f = n(88);
        a(o = s(f)).call(o, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
                enumerable: !0,
                get: function() {
                    return f[t]
                }
            }))
        }));
        var h = n(548);
        a(i = s(h)).call(i, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(c, t) || u(e, t, {
                enumerable: !0,
                get: function() {
                    return h[t]
                }
            }))
        })), e.version = "0.18.3"
    }, function(t, e, n) {
        t.exports = n(498)
    }, function(t, e, n) {
        var r = n(7);
        t.exports = !r((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }))
    }, function(t, e, n) {
        t.exports = n(430)
    }, function(t, e, n) {
        var r = n(15);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        t.exports = n(307)
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        t.exports = n(386)
    }, function(t, e, n) {
        t.exports = n(446)
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e, n) {
        t.exports = n(419)
    }, function(t, e, n) {
        "use strict";
        var r = n(14);
        n(33);
        var o = n(247),
            i = n(135),
            s = n(13);
        n(4), n(2);
        var a = n(249),
            u = Object.prototype.toString;

        function c(t) {
            return "[object Array]" === u.call(t)
        }

        function l(t) {
            return void 0 === t
        }

        function f(t) {
            return null !== t && "object" === s(t)
        }

        function h(t) {
            if ("[object Object]" !== u.call(t)) return !1;
            var e = i(t);
            return null === e || e === Object.prototype
        }

        function p(t) {
            return "[object Function]" === u.call(t)
        }

        function d(t, e) {
            if (null != t)
                if ("object" !== s(t) && (t = [t]), c(t))
                    for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                else
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
        }
        t.exports = {
            isArray: c,
            isArrayBuffer: function(t) {
                return "[object ArrayBuffer]" === u.call(t)
            },
            isBuffer: function(t) {
                return null !== t && !l(t) && null !== t.constructor && !l(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            },
            isFormData: function(t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function(t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isObject: f,
            isPlainObject: h,
            isUndefined: l,
            isDate: function(t) {
                return "[object Date]" === u.call(t)
            },
            isFile: function(t) {
                return "[object File]" === u.call(t)
            },
            isBlob: function(t) {
                return "[object Blob]" === u.call(t)
            },
            isFunction: p,
            isStream: function(t) {
                return f(t) && p(t.pipe)
            },
            isURLSearchParams: function(t) {
                return void 0 !== o && t instanceof o
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: d,
            merge: function t() {
                var e = {};

                function n(n, o) {
                    h(e[o]) && h(n) ? e[o] = t(e[o], n) : h(n) ? e[o] = t({}, n) : c(n) ? e[o] = r(n).call(n) : e[o] = n
                }
                for (var o = 0, i = arguments.length; o < i; o++) d(arguments[o], n);
                return e
            },
            extend: function(t, e, n) {
                return d(e, (function(e, r) {
                    t[r] = n && "function" == typeof e ? a(e, n) : e
                })), t
            },
            trim: function(t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            },
            stripBOM: function(t) {
                return 65279 === t.charCodeAt(0) && (t = r(t).call(t, 1)), t
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(43),
            o = n(70),
            i = n(44),
            s = n(68),
            a = n(168),
            u = n(132),
            c = Math.max,
            l = Math.min,
            f = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(133)("replace", 2, (function(t, e, n, d) {
            return [function(r, o) {
                var i = t(this),
                    s = null == r ? void 0 : r[e];
                return void 0 !== s ? s.call(r, i, o) : n.call(String(i), r, o)
            }, function(t, e) {
                var o = d(n, t, this, e);
                if (o.done) return o.value;
                var f = r(t),
                    h = String(this),
                    p = "function" == typeof e;
                p || (e = String(e));
                var v = f.global;
                if (v) {
                    var g = f.unicode;
                    f.lastIndex = 0
                }
                for (var _ = [];;) {
                    var m = u(f, h);
                    if (null === m) break;
                    if (_.push(m), !v) break;
                    "" === String(m[0]) && (f.lastIndex = a(h, i(f.lastIndex), g))
                }
                for (var b, w = "", x = 0, O = 0; O < _.length; O++) {
                    m = _[O];
                    for (var S = String(m[0]), k = c(l(s(m.index), h.length), 0), E = [], P = 1; P < m.length; P++) E.push(void 0 === (b = m[P]) ? b : String(b));
                    var A = m.groups;
                    if (p) {
                        var j = [S].concat(E, k, h);
                        void 0 !== A && j.push(A);
                        var T = String(e.apply(void 0, j))
                    } else T = y(S, h, k, E, A, e);
                    x <= k && (w += h.slice(x, k) + T, x = k + S.length)
                }
                return w + h.slice(x)
            }];

            function y(t, e, r, i, s, a) {
                var u = r + t.length,
                    c = i.length,
                    l = p;
                return void 0 !== s && (s = o(s), l = h), n.call(a, l, (function(n, o) {
                    var a;
                    switch (o.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return e.slice(0, r);
                        case "'":
                            return e.slice(u);
                        case "<":
                            a = s[o.slice(1, -1)];
                            break;
                        default:
                            var l = +o;
                            if (0 == l) return n;
                            if (c < l) {
                                var h = f(l / 10);
                                return 0 === h ? n : h <= c ? void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1) : n
                            }
                            a = i[l - 1]
                    }
                    return void 0 === a ? "" : a
                }))
            }
        }))
    }, function(t, e, n) {
        "use strict";
        n(33);
        var r = n(247),
            o = n(13);
        n(4), n(2);
        var i = n(291),
            s = Object.prototype.toString;

        function a(t) {
            return "[object Array]" === s.call(t)
        }

        function u(t) {
            return void 0 === t
        }

        function c(t) {
            return null !== t && "object" === o(t)
        }

        function l(t) {
            return "[object Function]" === s.call(t)
        }

        function f(t, e) {
            if (null != t)
                if ("object" !== o(t) && (t = [t]), a(t))
                    for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                else
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
        }
        t.exports = {
            isArray: a,
            isArrayBuffer: function(t) {
                return "[object ArrayBuffer]" === s.call(t)
            },
            isBuffer: function(t) {
                return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
            },
            isFormData: function(t) {
                return "undefined" != typeof FormData && t instanceof FormData
            },
            isArrayBufferView: function(t) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isObject: c,
            isUndefined: u,
            isDate: function(t) {
                return "[object Date]" === s.call(t)
            },
            isFile: function(t) {
                return "[object File]" === s.call(t)
            },
            isBlob: function(t) {
                return "[object Blob]" === s.call(t)
            },
            isFunction: l,
            isStream: function(t) {
                return c(t) && l(t.pipe)
            },
            isURLSearchParams: function(t) {
                return void 0 !== r && t instanceof r
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: f,
            merge: function t() {
                var e = {};

                function n(n, r) {
                    "object" === o(e[r]) && "object" === o(n) ? e[r] = t(e[r], n) : e[r] = n
                }
                for (var r = 0, i = arguments.length; r < i; r++) f(arguments[r], n);
                return e
            },
            deepMerge: function t() {
                var e = {};

                function n(n, r) {
                    "object" === o(e[r]) && "object" === o(n) ? e[r] = t(e[r], n) : "object" === o(n) ? e[r] = t({}, n) : e[r] = n
                }
                for (var r = 0, i = arguments.length; r < i; r++) f(arguments[r], n);
                return e
            },
            extend: function(t, e, n) {
                return f(e, (function(e, r) {
                    t[r] = n && "function" == typeof e ? i(e, n) : e
                })), t
            },
            trim: function(t) {
                return t.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function(t, e, n) {
        var r, o, i, s = n(21),
            a = n(27);
        n(138), n(4), n(2);
        var u = n(31);
        n(87);
        var c = n(14),
            l = n(46),
            f = n(13);
        o = [n(657)], void 0 === (i = "function" == typeof(r = function(t) {
            "use strict";
            var e = t.Reader,
                n = t.Writer,
                r = t.util,
                o = t.roots.default || (t.roots.default = {});
            return o.exonum = function() {
                var i, s = {};

                function a(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function h(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function p(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }
                return s.crypto = ((i = {}).Hash = (a.prototype.data = r.newBuffer([]), a.create = function(t) {
                    return new a(t)
                }, a.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, a.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, a.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.Hash; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, a.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, a.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, a.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.Hash) return t;
                    var e = new o.exonum.crypto.Hash;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, a.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, a.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, a), i.PublicKey = (h.prototype.data = r.newBuffer([]), h.create = function(t) {
                    return new h(t)
                }, h.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, h.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, h.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.PublicKey; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, h.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, h.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, h.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.PublicKey) return t;
                    var e = new o.exonum.crypto.PublicKey;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, h.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, h.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, h), i.BitVec = (p.prototype.data = r.newBuffer([]), p.prototype.len = r.Long ? r.Long.fromBits(0, 0, !0) : 0, p.create = function(t) {
                    return new p(t)
                }, p.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), null != t.len && t.hasOwnProperty("len") && e.uint32(16).uint64(t.len), e
                }, p.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, p.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.BitVec; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.data = t.bytes();
                                break;
                            case 2:
                                i.len = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, p.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, p.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null != t.len && t.hasOwnProperty("len") && !(r.isInteger(t.len) || t.len && r.isInteger(t.len.low) && r.isInteger(t.len.high)) ? "len: integer|Long expected" : null
                }, p.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.BitVec) return t;
                    var e = new o.exonum.crypto.BitVec;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), null != t.len && (r.Long ? (e.len = r.Long.fromValue(t.len)).unsigned = !0 : "string" == typeof t.len ? e.len = u(t.len, 10) : "number" == typeof t.len ? e.len = t.len : "object" === f(t.len) && (e.len = new r.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0))), e
                }, p.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data))), r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.len = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.len = e.longs === String ? "0" : 0;
                    return null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), null != t.len && t.hasOwnProperty("len") && ("number" == typeof t.len ? n.len = e.longs === String ? String(t.len) : t.len : n.len = e.longs === String ? r.Long.prototype.toString.call(t.len) : e.longs === Number ? new r.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0) : t.len), n
                }, p.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, p), i), s
            }(), o.votings_service = function() {
                var i, h, p = {};

                function d(t) {
                    if (this.api_public_keys = [], t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function y(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function v(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function g(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function _(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function m(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function b(t) {
                    if (this.options = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function w(t) {
                    if (this.ballots_config = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function x(t) {
                    if (this.issued_ballots_counter = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function O(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function S(t) {
                    if (this.data = [], t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function k(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function E(t) {
                    if (this.decrypted_choices = [], t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function P(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function A(t) {
                    if (this.tally = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function j(t) {
                    if (this.stored_ballots_counter = {}, this.voting_results = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function T(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function B(t) {
                    if (this.tally = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function R(t) {
                    if (this.options = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function L(t) {
                    if (this.ballots_config = [], t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function I(t) {
                    if (this.voters = [], t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function N(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function C(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function U(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function M(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function H(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function D(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function V(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function F(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function K(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function q(t) {
                    if (t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function z(t) {
                    if (this.results = {}, t)
                        for (var e = l(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }
                return p.ServiceConfig = (d.prototype.api_public_keys = r.emptyArray, d.create = function(t) {
                    return new d(t)
                }, d.encode = function(t, e) {
                    if (e = e || n.create(), null != t.api_public_keys && t.api_public_keys.length)
                        for (var r = 0; r < t.api_public_keys.length; ++r) e.uint32(10).string(t.api_public_keys[r]);
                    return e
                }, d.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, d.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.ServiceConfig; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.api_public_keys && i.api_public_keys.length || (i.api_public_keys = []), i.api_public_keys.push(t.string());
                        else t.skipType(7 & s)
                    }
                    return i
                }, d.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, d.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.api_public_keys && t.hasOwnProperty("api_public_keys")) {
                        if (!a(t.api_public_keys)) return "api_public_keys: array expected";
                        for (var e = 0; e < t.api_public_keys.length; ++e)
                            if (!r.isString(t.api_public_keys[e])) return "api_public_keys: string[] expected"
                    }
                    return null
                }, d.fromObject = function(t) {
                    if (t instanceof o.votings_service.ServiceConfig) return t;
                    var e = new o.votings_service.ServiceConfig;
                    if (t.api_public_keys) {
                        if (!a(t.api_public_keys)) throw TypeError(".votings_service.ServiceConfig.api_public_keys: array expected");
                        e.api_public_keys = [];
                        for (var n = 0; n < t.api_public_keys.length; ++n) e.api_public_keys[n] = String(t.api_public_keys[n])
                    }
                    return e
                }, d.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.api_public_keys = []), t.api_public_keys && t.api_public_keys.length) {
                        n.api_public_keys = [];
                        for (var r = 0; r < t.api_public_keys.length; ++r) n.api_public_keys[r] = t.api_public_keys[r]
                    }
                    return n
                }, d.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, d), p.BigUint = (y.prototype.data = r.newBuffer([]), y.create = function(t) {
                    return new y(t)
                }, y.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, y.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, y.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.BigUint; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, y.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, y.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, y.fromObject = function(t) {
                    if (t instanceof o.votings_service.BigUint) return t;
                    var e = new o.votings_service.BigUint;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, y.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, y.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, y), p.SealedBoxPublicKey = (v.prototype.data = r.newBuffer([]), v.create = function(t) {
                    return new v(t)
                }, v.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, v.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, v.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.SealedBoxPublicKey; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, v.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, v.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, v.fromObject = function(t) {
                    if (t instanceof o.votings_service.SealedBoxPublicKey) return t;
                    var e = new o.votings_service.SealedBoxPublicKey;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, v.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, v.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, v), p.SealedBoxSecretKey = (g.prototype.data = r.newBuffer([]), g.create = function(t) {
                    return new g(t)
                }, g.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, g.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, g.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.SealedBoxSecretKey; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, g.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, g.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, g.fromObject = function(t) {
                    if (t instanceof o.votings_service.SealedBoxSecretKey) return t;
                    var e = new o.votings_service.SealedBoxSecretKey;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, g.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, g.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, g), p.SealedBoxNonce = (_.prototype.data = r.newBuffer([]), _.create = function(t) {
                    return new _(t)
                }, _.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, _.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, _.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.SealedBoxNonce; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, _.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, _.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, _.fromObject = function(t) {
                    if (t instanceof o.votings_service.SealedBoxNonce) return t;
                    var e = new o.votings_service.SealedBoxNonce;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, _.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? c(Array.prototype).call(t.data) : t.data), n
                }, _.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, _), p.VotingState = ((h = s(i = {}))[i[0] = "Registration"] = 0, h[i[1] = "InProcess"] = 1, h[i[2] = "Stopped"] = 2, h[i[3] = "Finished"] = 3, h), p.CryptoSystemSettings = (m.prototype.public_key = null, m.prototype.private_key = null, m.create = function(t) {
                    return new m(t)
                }, m.encode = function(t, e) {
                    return e = e || n.create(), null != t.public_key && t.hasOwnProperty("public_key") && o.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(10).fork()).ldelim(), null != t.private_key && t.hasOwnProperty("private_key") && o.votings_service.SealedBoxSecretKey.encode(t.private_key, e.uint32(18).fork()).ldelim(), e
                }, m.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, m.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.CryptoSystemSettings; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.public_key = o.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                                break;
                            case 2:
                                i.private_key = o.votings_service.SealedBoxSecretKey.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, m.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, m.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.public_key && t.hasOwnProperty("public_key") && (e = o.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? "public_key." + e : null != t.private_key && t.hasOwnProperty("private_key") && (e = o.votings_service.SealedBoxSecretKey.verify(t.private_key)) ? "private_key." + e : null;
                    var e
                }, m.fromObject = function(t) {
                    if (t instanceof o.votings_service.CryptoSystemSettings) return t;
                    var e = new o.votings_service.CryptoSystemSettings;
                    if (null != t.public_key) {
                        if ("object" !== f(t.public_key)) throw TypeError(".votings_service.CryptoSystemSettings.public_key: object expected");
                        e.public_key = o.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
                    }
                    if (null != t.private_key) {
                        if ("object" !== f(t.private_key)) throw TypeError(".votings_service.CryptoSystemSettings.private_key: object expected");
                        e.private_key = o.votings_service.SealedBoxSecretKey.fromObject(t.private_key)
                    }
                    return e
                }, m.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.public_key = null, n.private_key = null), null != t.public_key && t.hasOwnProperty("public_key") && (n.public_key = o.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)), null != t.private_key && t.hasOwnProperty("private_key") && (n.private_key = o.votings_service.SealedBoxSecretKey.toObject(t.private_key, e)), n
                }, m.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, m), p.BallotConfig = (b.prototype.district_id = 0, b.prototype.question = "", b.prototype.options = r.emptyObject, b.prototype.min_choices = 0, b.prototype.max_choices = 0, b.create = function(t) {
                    return new b(t)
                }, b.encode = function(t, e) {
                    if (e = e || n.create(), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(8).uint32(t.district_id), null != t.question && t.hasOwnProperty("question") && e.uint32(18).string(t.question), null != t.options && t.hasOwnProperty("options"))
                        for (var r = l(t.options), o = 0; o < r.length; ++o) e.uint32(26).fork().uint32(8).uint32(r[o]).uint32(18).string(t.options[r[o]]).ldelim();
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && e.uint32(32).uint32(t.min_choices), null != t.max_choices && t.hasOwnProperty("max_choices") && e.uint32(40).uint32(t.max_choices), e
                }, b.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, b.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.BallotConfig; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.district_id = t.uint32();
                                break;
                            case 2:
                                a.question = t.string();
                                break;
                            case 3:
                                t.skip().pos++, a.options === r.emptyObject && (a.options = {}), i = t.uint32(), t.pos++, a.options[i] = t.string();
                                break;
                            case 4:
                                a.min_choices = t.uint32();
                                break;
                            case 5:
                                a.max_choices = t.uint32();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, b.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, b.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.question && t.hasOwnProperty("question") && !r.isString(t.question)) return "question: string expected";
                    if (null != t.options && t.hasOwnProperty("options")) {
                        if (!r.isObject(t.options)) return "options: object expected";
                        for (var e = l(t.options), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "options: integer key{k:uint32} expected";
                            if (!r.isString(t.options[e[n]])) return "options: string{k:uint32} expected"
                        }
                    }
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && !r.isInteger(t.min_choices) ? "min_choices: integer expected" : null != t.max_choices && t.hasOwnProperty("max_choices") && !r.isInteger(t.max_choices) ? "max_choices: integer expected" : null
                }, b.fromObject = function(t) {
                    if (t instanceof o.votings_service.BallotConfig) return t;
                    var e = new o.votings_service.BallotConfig;
                    if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.question && (e.question = String(t.question)), t.options) {
                        if ("object" !== f(t.options)) throw TypeError(".votings_service.BallotConfig.options: object expected");
                        e.options = {};
                        for (var n = l(t.options), r = 0; r < n.length; ++r) e.options[n[r]] = String(t.options[n[r]])
                    }
                    return null != t.min_choices && (e.min_choices = t.min_choices >>> 0), null != t.max_choices && (e.max_choices = t.max_choices >>> 0), e
                }, b.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.options = {}), e.defaults && (r.district_id = 0, r.question = "", r.min_choices = 0, r.max_choices = 0), null != t.district_id && t.hasOwnProperty("district_id") && (r.district_id = t.district_id), null != t.question && t.hasOwnProperty("question") && (r.question = t.question), t.options && (n = l(t.options)).length) {
                        r.options = {};
                        for (var o = 0; o < n.length; ++o) r.options[n[o]] = t.options[n[o]]
                    }
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && (r.min_choices = t.min_choices), null != t.max_choices && t.hasOwnProperty("max_choices") && (r.max_choices = t.max_choices), r
                }, b.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, b), p.Voting = (w.prototype.voting_id = "", w.prototype.crypto_system = null, w.prototype.ballots_config = r.emptyObject, w.prototype.state = 0, w.prototype.revote_enabled = !1, w.create = function(t) {
                    return new w(t)
                }, w.encode = function(t, e) {
                    if (e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.crypto_system && t.hasOwnProperty("crypto_system") && o.votings_service.CryptoSystemSettings.encode(t.crypto_system, e.uint32(18).fork()).ldelim(), null != t.ballots_config && t.hasOwnProperty("ballots_config"))
                        for (var r = l(t.ballots_config), i = 0; i < r.length; ++i) e.uint32(26).fork().uint32(8).uint32(r[i]), o.votings_service.BallotConfig.encode(t.ballots_config[r[i]], e.uint32(18).fork()).ldelim().ldelim();
                    return null != t.state && t.hasOwnProperty("state") && e.uint32(32).int32(t.state), null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && e.uint32(40).bool(t.revote_enabled), e
                }, w.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, w.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.Voting; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.voting_id = t.string();
                                break;
                            case 2:
                                a.crypto_system = o.votings_service.CryptoSystemSettings.decode(t, t.uint32());
                                break;
                            case 3:
                                t.skip().pos++, a.ballots_config === r.emptyObject && (a.ballots_config = {}), i = t.uint32(), t.pos++, a.ballots_config[i] = o.votings_service.BallotConfig.decode(t, t.uint32());
                                break;
                            case 4:
                                a.state = t.int32();
                                break;
                            case 5:
                                a.revote_enabled = t.bool();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, w.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, w.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.crypto_system && t.hasOwnProperty("crypto_system") && (i = o.votings_service.CryptoSystemSettings.verify(t.crypto_system))) return "crypto_system." + i;
                    if (null != t.ballots_config && t.hasOwnProperty("ballots_config")) {
                        if (!r.isObject(t.ballots_config)) return "ballots_config: object expected";
                        for (var e = l(t.ballots_config), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "ballots_config: integer key{k:uint32} expected";
                            var i;
                            if (i = o.votings_service.BallotConfig.verify(t.ballots_config[e[n]])) return "ballots_config." + i
                        }
                    }
                    if (null != t.state && t.hasOwnProperty("state")) switch (t.state) {
                        default:
                            return "state: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                    }
                    return null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && "boolean" != typeof t.revote_enabled ? "revote_enabled: boolean expected" : null
                }, w.fromObject = function(t) {
                    if (t instanceof o.votings_service.Voting) return t;
                    var e = new o.votings_service.Voting;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.crypto_system) {
                        if ("object" !== f(t.crypto_system)) throw TypeError(".votings_service.Voting.crypto_system: object expected");
                        e.crypto_system = o.votings_service.CryptoSystemSettings.fromObject(t.crypto_system)
                    }
                    if (t.ballots_config) {
                        if ("object" !== f(t.ballots_config)) throw TypeError(".votings_service.Voting.ballots_config: object expected");
                        e.ballots_config = {};
                        for (var n = l(t.ballots_config), r = 0; r < n.length; ++r) {
                            if ("object" !== f(t.ballots_config[n[r]])) throw TypeError(".votings_service.Voting.ballots_config: object expected");
                            e.ballots_config[n[r]] = o.votings_service.BallotConfig.fromObject(t.ballots_config[n[r]])
                        }
                    }
                    switch (t.state) {
                        case "Registration":
                        case 0:
                            e.state = 0;
                            break;
                        case "InProcess":
                        case 1:
                            e.state = 1;
                            break;
                        case "Stopped":
                        case 2:
                            e.state = 2;
                            break;
                        case "Finished":
                        case 3:
                            e.state = 3
                    }
                    return null != t.revote_enabled && (e.revote_enabled = Boolean(t.revote_enabled)), e
                }, w.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.ballots_config = {}), e.defaults && (r.voting_id = "", r.crypto_system = null, r.state = e.enums === String ? "Registration" : 0, r.revote_enabled = !1), null != t.voting_id && t.hasOwnProperty("voting_id") && (r.voting_id = t.voting_id), null != t.crypto_system && t.hasOwnProperty("crypto_system") && (r.crypto_system = o.votings_service.CryptoSystemSettings.toObject(t.crypto_system, e)), t.ballots_config && (n = l(t.ballots_config)).length) {
                        r.ballots_config = {};
                        for (var i = 0; i < n.length; ++i) r.ballots_config[n[i]] = o.votings_service.BallotConfig.toObject(t.ballots_config[n[i]], e)
                    }
                    return null != t.state && t.hasOwnProperty("state") && (r.state = e.enums === String ? o.votings_service.VotingState[t.state] : t.state), null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && (r.revote_enabled = t.revote_enabled), r
                }, w.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, w), p.VotersRegistry = (x.prototype.voting_id = "", x.prototype.voters_amount = 0, x.prototype.issued_ballots_counter = r.emptyObject, x.create = function(t) {
                    return new x(t)
                }, x.encode = function(t, e) {
                    if (e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.voters_amount && t.hasOwnProperty("voters_amount") && e.uint32(16).uint32(t.voters_amount), null != t.issued_ballots_counter && t.hasOwnProperty("issued_ballots_counter"))
                        for (var r = l(t.issued_ballots_counter), o = 0; o < r.length; ++o) e.uint32(26).fork().uint32(8).uint32(r[o]).uint32(16).uint32(t.issued_ballots_counter[r[o]]).ldelim();
                    return e
                }, x.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, x.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.VotersRegistry; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.voting_id = t.string();
                                break;
                            case 2:
                                a.voters_amount = t.uint32();
                                break;
                            case 3:
                                t.skip().pos++, a.issued_ballots_counter === r.emptyObject && (a.issued_ballots_counter = {}), i = t.uint32(), t.pos++, a.issued_ballots_counter[i] = t.uint32();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, x.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, x.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.voters_amount && t.hasOwnProperty("voters_amount") && !r.isInteger(t.voters_amount)) return "voters_amount: integer expected";
                    if (null != t.issued_ballots_counter && t.hasOwnProperty("issued_ballots_counter")) {
                        if (!r.isObject(t.issued_ballots_counter)) return "issued_ballots_counter: object expected";
                        for (var e = l(t.issued_ballots_counter), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "issued_ballots_counter: integer key{k:uint32} expected";
                            if (!r.isInteger(t.issued_ballots_counter[e[n]])) return "issued_ballots_counter: integer{k:uint32} expected"
                        }
                    }
                    return null
                }, x.fromObject = function(t) {
                    if (t instanceof o.votings_service.VotersRegistry) return t;
                    var e = new o.votings_service.VotersRegistry;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voters_amount && (e.voters_amount = t.voters_amount >>> 0), t.issued_ballots_counter) {
                        if ("object" !== f(t.issued_ballots_counter)) throw TypeError(".votings_service.VotersRegistry.issued_ballots_counter: object expected");
                        e.issued_ballots_counter = {};
                        for (var n = l(t.issued_ballots_counter), r = 0; r < n.length; ++r) e.issued_ballots_counter[n[r]] = t.issued_ballots_counter[n[r]] >>> 0
                    }
                    return e
                }, x.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.issued_ballots_counter = {}), e.defaults && (r.voting_id = "", r.voters_amount = 0), null != t.voting_id && t.hasOwnProperty("voting_id") && (r.voting_id = t.voting_id), null != t.voters_amount && t.hasOwnProperty("voters_amount") && (r.voters_amount = t.voters_amount), t.issued_ballots_counter && (n = l(t.issued_ballots_counter)).length) {
                        r.issued_ballots_counter = {};
                        for (var o = 0; o < n.length; ++o) r.issued_ballots_counter[n[o]] = t.issued_ballots_counter[n[o]]
                    }
                    return r
                }, x.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, x), p.Voter = (O.prototype.voter_id = "", O.prototype.is_participation_revoked = !1, O.prototype.ballot_issuing_district = 0, O.create = function(t) {
                    return new O(t)
                }, O.encode = function(t, e) {
                    return e = e || n.create(), null != t.voter_id && t.hasOwnProperty("voter_id") && e.uint32(10).string(t.voter_id), null != t.is_participation_revoked && t.hasOwnProperty("is_participation_revoked") && e.uint32(16).bool(t.is_participation_revoked), null != t.ballot_issuing_district && t.hasOwnProperty("ballot_issuing_district") && e.uint32(24).uint32(t.ballot_issuing_district), e
                }, O.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, O.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.Voter; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voter_id = t.string();
                                break;
                            case 2:
                                i.is_participation_revoked = t.bool();
                                break;
                            case 3:
                                i.ballot_issuing_district = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, O.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, O.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voter_id && t.hasOwnProperty("voter_id") && !r.isString(t.voter_id) ? "voter_id: string expected" : null != t.is_participation_revoked && t.hasOwnProperty("is_participation_revoked") && "boolean" != typeof t.is_participation_revoked ? "is_participation_revoked: boolean expected" : null != t.ballot_issuing_district && t.hasOwnProperty("ballot_issuing_district") && !r.isInteger(t.ballot_issuing_district) ? "ballot_issuing_district: integer expected" : null
                }, O.fromObject = function(t) {
                    if (t instanceof o.votings_service.Voter) return t;
                    var e = new o.votings_service.Voter;
                    return null != t.voter_id && (e.voter_id = String(t.voter_id)), null != t.is_participation_revoked && (e.is_participation_revoked = Boolean(t.is_participation_revoked)), null != t.ballot_issuing_district && (e.ballot_issuing_district = t.ballot_issuing_district >>> 0), e
                }, O.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.voter_id = "", n.is_participation_revoked = !1, n.ballot_issuing_district = 0), null != t.voter_id && t.hasOwnProperty("voter_id") && (n.voter_id = t.voter_id), null != t.is_participation_revoked && t.hasOwnProperty("is_participation_revoked") && (n.is_participation_revoked = t.is_participation_revoked), null != t.ballot_issuing_district && t.hasOwnProperty("ballot_issuing_district") && (n.ballot_issuing_district = t.ballot_issuing_district), n
                }, O.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, O), p.Choices = (S.prototype.data = r.emptyArray, S.create = function(t) {
                    return new S(t)
                }, S.encode = function(t, e) {
                    if (e = e || n.create(), null != t.data && t.data.length) {
                        e.uint32(10).fork();
                        for (var r = 0; r < t.data.length; ++r) e.uint32(t.data[r]);
                        e.ldelim()
                    }
                    return e
                }, S.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, S.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.Choices; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1)
                            if (i.data && i.data.length || (i.data = []), 2 == (7 & s))
                                for (var a = t.uint32() + t.pos; t.pos < a;) i.data.push(t.uint32());
                            else i.data.push(t.uint32());
                        else t.skipType(7 & s)
                    }
                    return i
                }, S.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, S.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.data && t.hasOwnProperty("data")) {
                        if (!a(t.data)) return "data: array expected";
                        for (var e = 0; e < t.data.length; ++e)
                            if (!r.isInteger(t.data[e])) return "data: integer[] expected"
                    }
                    return null
                }, S.fromObject = function(t) {
                    if (t instanceof o.votings_service.Choices) return t;
                    var e = new o.votings_service.Choices;
                    if (t.data) {
                        if (!a(t.data)) throw TypeError(".votings_service.Choices.data: array expected");
                        e.data = [];
                        for (var n = 0; n < t.data.length; ++n) e.data[n] = t.data[n] >>> 0
                    }
                    return e
                }, S.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.data = []), t.data && t.data.length) {
                        n.data = [];
                        for (var r = 0; r < t.data.length; ++r) n.data[r] = t.data[r]
                    }
                    return n
                }, S.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, S), p.EncryptedChoice = (k.prototype.encrypted_message = r.newBuffer([]), k.prototype.nonce = null, k.prototype.public_key = null, k.create = function(t) {
                    return new k(t)
                }, k.encode = function(t, e) {
                    return e = e || n.create(), null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && e.uint32(10).bytes(t.encrypted_message), null != t.nonce && t.hasOwnProperty("nonce") && o.votings_service.SealedBoxNonce.encode(t.nonce, e.uint32(18).fork()).ldelim(), null != t.public_key && t.hasOwnProperty("public_key") && o.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(26).fork()).ldelim(), e
                }, k.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, k.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.EncryptedChoice; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.encrypted_message = t.bytes();
                                break;
                            case 2:
                                i.nonce = o.votings_service.SealedBoxNonce.decode(t, t.uint32());
                                break;
                            case 3:
                                i.public_key = o.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, k.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, k.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && !(t.encrypted_message && "number" == typeof t.encrypted_message.length || r.isString(t.encrypted_message)) ? "encrypted_message: buffer expected" : null != t.nonce && t.hasOwnProperty("nonce") && (e = o.votings_service.SealedBoxNonce.verify(t.nonce)) ? "nonce." + e : null != t.public_key && t.hasOwnProperty("public_key") && (e = o.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? "public_key." + e : null;
                    var e
                }, k.fromObject = function(t) {
                    if (t instanceof o.votings_service.EncryptedChoice) return t;
                    var e = new o.votings_service.EncryptedChoice;
                    if (null != t.encrypted_message && ("string" == typeof t.encrypted_message ? r.base64.decode(t.encrypted_message, e.encrypted_message = r.newBuffer(r.base64.length(t.encrypted_message)), 0) : t.encrypted_message.length && (e.encrypted_message = t.encrypted_message)), null != t.nonce) {
                        if ("object" !== f(t.nonce)) throw TypeError(".votings_service.EncryptedChoice.nonce: object expected");
                        e.nonce = o.votings_service.SealedBoxNonce.fromObject(t.nonce)
                    }
                    if (null != t.public_key) {
                        if ("object" !== f(t.public_key)) throw TypeError(".votings_service.EncryptedChoice.public_key: object expected");
                        e.public_key = o.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
                    }
                    return e
                }, k.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.encrypted_message = "" : (n.encrypted_message = [], e.bytes !== Array && (n.encrypted_message = r.newBuffer(n.encrypted_message))), n.nonce = null, n.public_key = null), null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && (n.encrypted_message = e.bytes === String ? r.base64.encode(t.encrypted_message, 0, t.encrypted_message.length) : e.bytes === Array ? c(Array.prototype).call(t.encrypted_message) : t.encrypted_message), null != t.nonce && t.hasOwnProperty("nonce") && (n.nonce = o.votings_service.SealedBoxNonce.toObject(t.nonce, e)), null != t.public_key && t.hasOwnProperty("public_key") && (n.public_key = o.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)), n
                }, k.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, k), p.Ballot = (E.prototype.index = 0, E.prototype.voter = null, E.prototype.district_id = 0, E.prototype.encrypted_choice = null, E.prototype.decrypted_choices = r.emptyArray, E.prototype.store_tx_hash = null, E.prototype.decrypt_tx_hash = null, E.prototype.invalid = !1, E.create = function(t) {
                    return new E(t)
                }, E.encode = function(t, e) {
                    if (e = e || n.create(), null != t.index && t.hasOwnProperty("index") && e.uint32(8).uint32(t.index), null != t.voter && t.hasOwnProperty("voter") && o.exonum.crypto.PublicKey.encode(t.voter, e.uint32(18).fork()).ldelim(), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(24).uint32(t.district_id), null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice") && o.votings_service.EncryptedChoice.encode(t.encrypted_choice, e.uint32(34).fork()).ldelim(), null != t.decrypted_choices && t.decrypted_choices.length) {
                        e.uint32(42).fork();
                        for (var r = 0; r < t.decrypted_choices.length; ++r) e.uint32(t.decrypted_choices[r]);
                        e.ldelim()
                    }
                    return null != t.store_tx_hash && t.hasOwnProperty("store_tx_hash") && o.exonum.crypto.Hash.encode(t.store_tx_hash, e.uint32(50).fork()).ldelim(), null != t.decrypt_tx_hash && t.hasOwnProperty("decrypt_tx_hash") && o.exonum.crypto.Hash.encode(t.decrypt_tx_hash, e.uint32(58).fork()).ldelim(), null != t.invalid && t.hasOwnProperty("invalid") && e.uint32(64).bool(t.invalid), e
                }, E.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, E.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.Ballot; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.index = t.uint32();
                                break;
                            case 2:
                                i.voter = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            case 3:
                                i.district_id = t.uint32();
                                break;
                            case 4:
                                i.encrypted_choice = o.votings_service.EncryptedChoice.decode(t, t.uint32());
                                break;
                            case 5:
                                if (i.decrypted_choices && i.decrypted_choices.length || (i.decrypted_choices = []), 2 == (7 & s))
                                    for (var a = t.uint32() + t.pos; t.pos < a;) i.decrypted_choices.push(t.uint32());
                                else i.decrypted_choices.push(t.uint32());
                                break;
                            case 6:
                                i.store_tx_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 7:
                                i.decrypt_tx_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 8:
                                i.invalid = t.bool();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, E.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, E.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.index && t.hasOwnProperty("index") && !r.isInteger(t.index)) return "index: integer expected";
                    var e;
                    if (null != t.voter && t.hasOwnProperty("voter") && (e = o.exonum.crypto.PublicKey.verify(t.voter))) return "voter." + e;
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice") && (e = o.votings_service.EncryptedChoice.verify(t.encrypted_choice))) return "encrypted_choice." + e;
                    if (null != t.decrypted_choices && t.hasOwnProperty("decrypted_choices")) {
                        if (!a(t.decrypted_choices)) return "decrypted_choices: array expected";
                        for (var n = 0; n < t.decrypted_choices.length; ++n)
                            if (!r.isInteger(t.decrypted_choices[n])) return "decrypted_choices: integer[] expected"
                    }
                    return null != t.store_tx_hash && t.hasOwnProperty("store_tx_hash") && (e = o.exonum.crypto.Hash.verify(t.store_tx_hash)) ? "store_tx_hash." + e : null != t.decrypt_tx_hash && t.hasOwnProperty("decrypt_tx_hash") && (e = o.exonum.crypto.Hash.verify(t.decrypt_tx_hash)) ? "decrypt_tx_hash." + e : null != t.invalid && t.hasOwnProperty("invalid") && "boolean" != typeof t.invalid ? "invalid: boolean expected" : null
                }, E.fromObject = function(t) {
                    if (t instanceof o.votings_service.Ballot) return t;
                    var e = new o.votings_service.Ballot;
                    if (null != t.index && (e.index = t.index >>> 0), null != t.voter) {
                        if ("object" !== f(t.voter)) throw TypeError(".votings_service.Ballot.voter: object expected");
                        e.voter = o.exonum.crypto.PublicKey.fromObject(t.voter)
                    }
                    if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.encrypted_choice) {
                        if ("object" !== f(t.encrypted_choice)) throw TypeError(".votings_service.Ballot.encrypted_choice: object expected");
                        e.encrypted_choice = o.votings_service.EncryptedChoice.fromObject(t.encrypted_choice)
                    }
                    if (t.decrypted_choices) {
                        if (!a(t.decrypted_choices)) throw TypeError(".votings_service.Ballot.decrypted_choices: array expected");
                        e.decrypted_choices = [];
                        for (var n = 0; n < t.decrypted_choices.length; ++n) e.decrypted_choices[n] = t.decrypted_choices[n] >>> 0
                    }
                    if (null != t.store_tx_hash) {
                        if ("object" !== f(t.store_tx_hash)) throw TypeError(".votings_service.Ballot.store_tx_hash: object expected");
                        e.store_tx_hash = o.exonum.crypto.Hash.fromObject(t.store_tx_hash)
                    }
                    if (null != t.decrypt_tx_hash) {
                        if ("object" !== f(t.decrypt_tx_hash)) throw TypeError(".votings_service.Ballot.decrypt_tx_hash: object expected");
                        e.decrypt_tx_hash = o.exonum.crypto.Hash.fromObject(t.decrypt_tx_hash)
                    }
                    return null != t.invalid && (e.invalid = Boolean(t.invalid)), e
                }, E.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.decrypted_choices = []), e.defaults && (n.index = 0, n.voter = null, n.district_id = 0, n.encrypted_choice = null, n.store_tx_hash = null, n.decrypt_tx_hash = null, n.invalid = !1), null != t.index && t.hasOwnProperty("index") && (n.index = t.index), null != t.voter && t.hasOwnProperty("voter") && (n.voter = o.exonum.crypto.PublicKey.toObject(t.voter, e)), null != t.district_id && t.hasOwnProperty("district_id") && (n.district_id = t.district_id), null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice") && (n.encrypted_choice = o.votings_service.EncryptedChoice.toObject(t.encrypted_choice, e)), t.decrypted_choices && t.decrypted_choices.length) {
                        n.decrypted_choices = [];
                        for (var r = 0; r < t.decrypted_choices.length; ++r) n.decrypted_choices[r] = t.decrypted_choices[r]
                    }
                    return null != t.store_tx_hash && t.hasOwnProperty("store_tx_hash") && (n.store_tx_hash = o.exonum.crypto.Hash.toObject(t.store_tx_hash, e)), null != t.decrypt_tx_hash && t.hasOwnProperty("decrypt_tx_hash") && (n.decrypt_tx_hash = o.exonum.crypto.Hash.toObject(t.decrypt_tx_hash, e)), null != t.invalid && t.hasOwnProperty("invalid") && (n.invalid = t.invalid), n
                }, E.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, E), p.DecryptionStatistics = (P.prototype.decrypted_ballots_amount = 0, P.prototype.invalid_ballots_amount = 0, P.create = function(t) {
                    return new P(t)
                }, P.encode = function(t, e) {
                    return e = e || n.create(), null != t.decrypted_ballots_amount && t.hasOwnProperty("decrypted_ballots_amount") && e.uint32(8).uint32(t.decrypted_ballots_amount), null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && e.uint32(16).uint32(t.invalid_ballots_amount), e
                }, P.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, P.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.DecryptionStatistics; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.decrypted_ballots_amount = t.uint32();
                                break;
                            case 2:
                                i.invalid_ballots_amount = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, P.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, P.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.decrypted_ballots_amount && t.hasOwnProperty("decrypted_ballots_amount") && !r.isInteger(t.decrypted_ballots_amount) ? "decrypted_ballots_amount: integer expected" : null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && !r.isInteger(t.invalid_ballots_amount) ? "invalid_ballots_amount: integer expected" : null
                }, P.fromObject = function(t) {
                    if (t instanceof o.votings_service.DecryptionStatistics) return t;
                    var e = new o.votings_service.DecryptionStatistics;
                    return null != t.decrypted_ballots_amount && (e.decrypted_ballots_amount = t.decrypted_ballots_amount >>> 0), null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0), e
                }, P.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.decrypted_ballots_amount = 0, n.invalid_ballots_amount = 0), null != t.decrypted_ballots_amount && t.hasOwnProperty("decrypted_ballots_amount") && (n.decrypted_ballots_amount = t.decrypted_ballots_amount), null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && (n.invalid_ballots_amount = t.invalid_ballots_amount), n
                }, P.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, P), p.VotingResults = (A.prototype.district_id = 0, A.prototype.tally = r.emptyObject, A.prototype.invalid_ballots_amount = 0, A.create = function(t) {
                    return new A(t)
                }, A.encode = function(t, e) {
                    if (e = e || n.create(), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(8).uint32(t.district_id), null != t.tally && t.hasOwnProperty("tally"))
                        for (var r = l(t.tally), o = 0; o < r.length; ++o) e.uint32(18).fork().uint32(8).uint32(r[o]).uint32(16).uint32(t.tally[r[o]]).ldelim();
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && e.uint32(24).uint32(t.invalid_ballots_amount), e
                }, A.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, A.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.VotingResults; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.district_id = t.uint32();
                                break;
                            case 2:
                                t.skip().pos++, a.tally === r.emptyObject && (a.tally = {}), i = t.uint32(), t.pos++, a.tally[i] = t.uint32();
                                break;
                            case 3:
                                a.invalid_ballots_amount = t.uint32();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, A.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, A.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.tally && t.hasOwnProperty("tally")) {
                        if (!r.isObject(t.tally)) return "tally: object expected";
                        for (var e = l(t.tally), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "tally: integer key{k:uint32} expected";
                            if (!r.isInteger(t.tally[e[n]])) return "tally: integer{k:uint32} expected"
                        }
                    }
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && !r.isInteger(t.invalid_ballots_amount) ? "invalid_ballots_amount: integer expected" : null
                }, A.fromObject = function(t) {
                    if (t instanceof o.votings_service.VotingResults) return t;
                    var e = new o.votings_service.VotingResults;
                    if (null != t.district_id && (e.district_id = t.district_id >>> 0), t.tally) {
                        if ("object" !== f(t.tally)) throw TypeError(".votings_service.VotingResults.tally: object expected");
                        e.tally = {};
                        for (var n = l(t.tally), r = 0; r < n.length; ++r) e.tally[n[r]] = t.tally[n[r]] >>> 0
                    }
                    return null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0), e
                }, A.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.tally = {}), e.defaults && (r.district_id = 0, r.invalid_ballots_amount = 0), null != t.district_id && t.hasOwnProperty("district_id") && (r.district_id = t.district_id), t.tally && (n = l(t.tally)).length) {
                        r.tally = {};
                        for (var o = 0; o < n.length; ++o) r.tally[n[o]] = t.tally[n[o]]
                    }
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && (r.invalid_ballots_amount = t.invalid_ballots_amount), r
                }, A.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, A), p.BallotsStorage = (j.prototype.voting_id = "", j.prototype.stored_ballots_counter = r.emptyObject, j.prototype.decrypted_ballots_counter = null, j.prototype.voting_results = r.emptyObject, j.create = function(t) {
                    return new j(t)
                }, j.encode = function(t, e) {
                    if (e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.stored_ballots_counter && t.hasOwnProperty("stored_ballots_counter"))
                        for (var r = l(t.stored_ballots_counter), i = 0; i < r.length; ++i) e.uint32(18).fork().uint32(8).uint32(r[i]).uint32(16).uint32(t.stored_ballots_counter[r[i]]).ldelim();
                    if (null != t.decrypted_ballots_counter && t.hasOwnProperty("decrypted_ballots_counter") && o.votings_service.DecryptionStatistics.encode(t.decrypted_ballots_counter, e.uint32(26).fork()).ldelim(), null != t.voting_results && t.hasOwnProperty("voting_results"))
                        for (r = l(t.voting_results), i = 0; i < r.length; ++i) e.uint32(34).fork().uint32(8).uint32(r[i]), o.votings_service.VotingResults.encode(t.voting_results[r[i]], e.uint32(18).fork()).ldelim().ldelim();
                    return e
                }, j.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, j.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.BallotsStorage; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.voting_id = t.string();
                                break;
                            case 2:
                                t.skip().pos++, a.stored_ballots_counter === r.emptyObject && (a.stored_ballots_counter = {}), i = t.uint32(), t.pos++, a.stored_ballots_counter[i] = t.uint32();
                                break;
                            case 3:
                                a.decrypted_ballots_counter = o.votings_service.DecryptionStatistics.decode(t, t.uint32());
                                break;
                            case 4:
                                t.skip().pos++, a.voting_results === r.emptyObject && (a.voting_results = {}), i = t.uint32(), t.pos++, a.voting_results[i] = o.votings_service.VotingResults.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, j.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, j.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.stored_ballots_counter && t.hasOwnProperty("stored_ballots_counter")) {
                        if (!r.isObject(t.stored_ballots_counter)) return "stored_ballots_counter: object expected";
                        for (var e = l(t.stored_ballots_counter), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "stored_ballots_counter: integer key{k:uint32} expected";
                            if (!r.isInteger(t.stored_ballots_counter[e[n]])) return "stored_ballots_counter: integer{k:uint32} expected"
                        }
                    }
                    if (null != t.decrypted_ballots_counter && t.hasOwnProperty("decrypted_ballots_counter") && (i = o.votings_service.DecryptionStatistics.verify(t.decrypted_ballots_counter))) return "decrypted_ballots_counter." + i;
                    if (null != t.voting_results && t.hasOwnProperty("voting_results")) {
                        if (!r.isObject(t.voting_results)) return "voting_results: object expected";
                        for (e = l(t.voting_results), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "voting_results: integer key{k:uint32} expected";
                            var i;
                            if (i = o.votings_service.VotingResults.verify(t.voting_results[e[n]])) return "voting_results." + i
                        }
                    }
                    return null
                }, j.fromObject = function(t) {
                    if (t instanceof o.votings_service.BallotsStorage) return t;
                    var e = new o.votings_service.BallotsStorage;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), t.stored_ballots_counter) {
                        if ("object" !== f(t.stored_ballots_counter)) throw TypeError(".votings_service.BallotsStorage.stored_ballots_counter: object expected");
                        e.stored_ballots_counter = {};
                        for (var n = l(t.stored_ballots_counter), r = 0; r < n.length; ++r) e.stored_ballots_counter[n[r]] = t.stored_ballots_counter[n[r]] >>> 0
                    }
                    if (null != t.decrypted_ballots_counter) {
                        if ("object" !== f(t.decrypted_ballots_counter)) throw TypeError(".votings_service.BallotsStorage.decrypted_ballots_counter: object expected");
                        e.decrypted_ballots_counter = o.votings_service.DecryptionStatistics.fromObject(t.decrypted_ballots_counter)
                    }
                    if (t.voting_results) {
                        if ("object" !== f(t.voting_results)) throw TypeError(".votings_service.BallotsStorage.voting_results: object expected");
                        for (e.voting_results = {}, n = l(t.voting_results), r = 0; r < n.length; ++r) {
                            if ("object" !== f(t.voting_results[n[r]])) throw TypeError(".votings_service.BallotsStorage.voting_results: object expected");
                            e.voting_results[n[r]] = o.votings_service.VotingResults.fromObject(t.voting_results[n[r]])
                        }
                    }
                    return e
                }, j.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.stored_ballots_counter = {}, r.voting_results = {}), e.defaults && (r.voting_id = "", r.decrypted_ballots_counter = null), null != t.voting_id && t.hasOwnProperty("voting_id") && (r.voting_id = t.voting_id), t.stored_ballots_counter && (n = l(t.stored_ballots_counter)).length) {
                        r.stored_ballots_counter = {};
                        for (var i = 0; i < n.length; ++i) r.stored_ballots_counter[n[i]] = t.stored_ballots_counter[n[i]]
                    }
                    if (null != t.decrypted_ballots_counter && t.hasOwnProperty("decrypted_ballots_counter") && (r.decrypted_ballots_counter = o.votings_service.DecryptionStatistics.toObject(t.decrypted_ballots_counter, e)), t.voting_results && (n = l(t.voting_results)).length)
                        for (r.voting_results = {}, i = 0; i < n.length; ++i) r.voting_results[n[i]] = o.votings_service.VotingResults.toObject(t.voting_results[n[i]], e);
                    return r
                }, j.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, j), p.TxCryptoSystemSettings = (T.prototype.public_key = null, T.create = function(t) {
                    return new T(t)
                }, T.encode = function(t, e) {
                    return e = e || n.create(), null != t.public_key && t.hasOwnProperty("public_key") && o.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(10).fork()).ldelim(), e
                }, T.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, T.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxCryptoSystemSettings; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.public_key = o.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                        else t.skipType(7 & s)
                    }
                    return i
                }, T.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, T.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.public_key && t.hasOwnProperty("public_key")) {
                        var e = o.votings_service.SealedBoxPublicKey.verify(t.public_key);
                        if (e) return "public_key." + e
                    }
                    return null
                }, T.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxCryptoSystemSettings) return t;
                    var e = new o.votings_service.TxCryptoSystemSettings;
                    if (null != t.public_key) {
                        if ("object" !== f(t.public_key)) throw TypeError(".votings_service.TxCryptoSystemSettings.public_key: object expected");
                        e.public_key = o.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
                    }
                    return e
                }, T.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.public_key = null), null != t.public_key && t.hasOwnProperty("public_key") && (n.public_key = o.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)), n
                }, T.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, T), p.TxVotingResults = (B.prototype.district_id = 0, B.prototype.tally = r.emptyObject, B.prototype.invalid_ballots_amount = 0, B.create = function(t) {
                    return new B(t)
                }, B.encode = function(t, e) {
                    if (e = e || n.create(), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(8).uint32(t.district_id), null != t.tally && t.hasOwnProperty("tally"))
                        for (var r = l(t.tally), o = 0; o < r.length; ++o) e.uint32(18).fork().uint32(8).uint32(r[o]).uint32(16).uint32(t.tally[r[o]]).ldelim();
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && e.uint32(24).uint32(t.invalid_ballots_amount), e
                }, B.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, B.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.TxVotingResults; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.district_id = t.uint32();
                                break;
                            case 2:
                                t.skip().pos++, a.tally === r.emptyObject && (a.tally = {}), i = t.uint32(), t.pos++, a.tally[i] = t.uint32();
                                break;
                            case 3:
                                a.invalid_ballots_amount = t.uint32();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, B.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, B.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.tally && t.hasOwnProperty("tally")) {
                        if (!r.isObject(t.tally)) return "tally: object expected";
                        for (var e = l(t.tally), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "tally: integer key{k:uint32} expected";
                            if (!r.isInteger(t.tally[e[n]])) return "tally: integer{k:uint32} expected"
                        }
                    }
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && !r.isInteger(t.invalid_ballots_amount) ? "invalid_ballots_amount: integer expected" : null
                }, B.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxVotingResults) return t;
                    var e = new o.votings_service.TxVotingResults;
                    if (null != t.district_id && (e.district_id = t.district_id >>> 0), t.tally) {
                        if ("object" !== f(t.tally)) throw TypeError(".votings_service.TxVotingResults.tally: object expected");
                        e.tally = {};
                        for (var n = l(t.tally), r = 0; r < n.length; ++r) e.tally[n[r]] = t.tally[n[r]] >>> 0
                    }
                    return null != t.invalid_ballots_amount && (e.invalid_ballots_amount = t.invalid_ballots_amount >>> 0), e
                }, B.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.tally = {}), e.defaults && (r.district_id = 0, r.invalid_ballots_amount = 0), null != t.district_id && t.hasOwnProperty("district_id") && (r.district_id = t.district_id), t.tally && (n = l(t.tally)).length) {
                        r.tally = {};
                        for (var o = 0; o < n.length; ++o) r.tally[n[o]] = t.tally[n[o]]
                    }
                    return null != t.invalid_ballots_amount && t.hasOwnProperty("invalid_ballots_amount") && (r.invalid_ballots_amount = t.invalid_ballots_amount), r
                }, B.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, B), p.TxBallotConfig = (R.prototype.district_id = 0, R.prototype.question = "", R.prototype.options = r.emptyObject, R.prototype.min_choices = 0, R.prototype.max_choices = 0, R.create = function(t) {
                    return new R(t)
                }, R.encode = function(t, e) {
                    if (e = e || n.create(), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(8).uint32(t.district_id), null != t.question && t.hasOwnProperty("question") && e.uint32(18).string(t.question), null != t.options && t.hasOwnProperty("options"))
                        for (var r = l(t.options), o = 0; o < r.length; ++o) e.uint32(26).fork().uint32(8).uint32(r[o]).uint32(18).string(t.options[r[o]]).ldelim();
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && e.uint32(32).uint32(t.min_choices), null != t.max_choices && t.hasOwnProperty("max_choices") && e.uint32(40).uint32(t.max_choices), e
                }, R.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, R.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.TxBallotConfig; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.district_id = t.uint32();
                                break;
                            case 2:
                                a.question = t.string();
                                break;
                            case 3:
                                t.skip().pos++, a.options === r.emptyObject && (a.options = {}), i = t.uint32(), t.pos++, a.options[i] = t.string();
                                break;
                            case 4:
                                a.min_choices = t.uint32();
                                break;
                            case 5:
                                a.max_choices = t.uint32();
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, R.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, R.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.question && t.hasOwnProperty("question") && !r.isString(t.question)) return "question: string expected";
                    if (null != t.options && t.hasOwnProperty("options")) {
                        if (!r.isObject(t.options)) return "options: object expected";
                        for (var e = l(t.options), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "options: integer key{k:uint32} expected";
                            if (!r.isString(t.options[e[n]])) return "options: string{k:uint32} expected"
                        }
                    }
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && !r.isInteger(t.min_choices) ? "min_choices: integer expected" : null != t.max_choices && t.hasOwnProperty("max_choices") && !r.isInteger(t.max_choices) ? "max_choices: integer expected" : null
                }, R.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxBallotConfig) return t;
                    var e = new o.votings_service.TxBallotConfig;
                    if (null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.question && (e.question = String(t.question)), t.options) {
                        if ("object" !== f(t.options)) throw TypeError(".votings_service.TxBallotConfig.options: object expected");
                        e.options = {};
                        for (var n = l(t.options), r = 0; r < n.length; ++r) e.options[n[r]] = String(t.options[n[r]])
                    }
                    return null != t.min_choices && (e.min_choices = t.min_choices >>> 0), null != t.max_choices && (e.max_choices = t.max_choices >>> 0), e
                }, R.toObject = function(t, e) {
                    var n, r = {};
                    if (((e = e || {}).objects || e.defaults) && (r.options = {}), e.defaults && (r.district_id = 0, r.question = "", r.min_choices = 0, r.max_choices = 0), null != t.district_id && t.hasOwnProperty("district_id") && (r.district_id = t.district_id), null != t.question && t.hasOwnProperty("question") && (r.question = t.question), t.options && (n = l(t.options)).length) {
                        r.options = {};
                        for (var o = 0; o < n.length; ++o) r.options[n[o]] = t.options[n[o]]
                    }
                    return null != t.min_choices && t.hasOwnProperty("min_choices") && (r.min_choices = t.min_choices), null != t.max_choices && t.hasOwnProperty("max_choices") && (r.max_choices = t.max_choices), r
                }, R.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, R), p.TxCreateVoting = (L.prototype.crypto_system = null, L.prototype.ballots_config = r.emptyArray, L.prototype.revote_enabled = !1, L.create = function(t) {
                    return new L(t)
                }, L.encode = function(t, e) {
                    if (e = e || n.create(), null != t.crypto_system && t.hasOwnProperty("crypto_system") && o.votings_service.TxCryptoSystemSettings.encode(t.crypto_system, e.uint32(10).fork()).ldelim(), null != t.ballots_config && t.ballots_config.length)
                        for (var r = 0; r < t.ballots_config.length; ++r) o.votings_service.TxBallotConfig.encode(t.ballots_config[r], e.uint32(18).fork()).ldelim();
                    return null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && e.uint32(24).bool(t.revote_enabled), e
                }, L.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, L.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxCreateVoting; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.crypto_system = o.votings_service.TxCryptoSystemSettings.decode(t, t.uint32());
                                break;
                            case 2:
                                i.ballots_config && i.ballots_config.length || (i.ballots_config = []), i.ballots_config.push(o.votings_service.TxBallotConfig.decode(t, t.uint32()));
                                break;
                            case 3:
                                i.revote_enabled = t.bool();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, L.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, L.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.crypto_system && t.hasOwnProperty("crypto_system") && (n = o.votings_service.TxCryptoSystemSettings.verify(t.crypto_system))) return "crypto_system." + n;
                    if (null != t.ballots_config && t.hasOwnProperty("ballots_config")) {
                        if (!a(t.ballots_config)) return "ballots_config: array expected";
                        for (var e = 0; e < t.ballots_config.length; ++e) {
                            var n;
                            if (n = o.votings_service.TxBallotConfig.verify(t.ballots_config[e])) return "ballots_config." + n
                        }
                    }
                    return null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && "boolean" != typeof t.revote_enabled ? "revote_enabled: boolean expected" : null
                }, L.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxCreateVoting) return t;
                    var e = new o.votings_service.TxCreateVoting;
                    if (null != t.crypto_system) {
                        if ("object" !== f(t.crypto_system)) throw TypeError(".votings_service.TxCreateVoting.crypto_system: object expected");
                        e.crypto_system = o.votings_service.TxCryptoSystemSettings.fromObject(t.crypto_system)
                    }
                    if (t.ballots_config) {
                        if (!a(t.ballots_config)) throw TypeError(".votings_service.TxCreateVoting.ballots_config: array expected");
                        e.ballots_config = [];
                        for (var n = 0; n < t.ballots_config.length; ++n) {
                            if ("object" !== f(t.ballots_config[n])) throw TypeError(".votings_service.TxCreateVoting.ballots_config: object expected");
                            e.ballots_config[n] = o.votings_service.TxBallotConfig.fromObject(t.ballots_config[n])
                        }
                    }
                    return null != t.revote_enabled && (e.revote_enabled = Boolean(t.revote_enabled)), e
                }, L.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.ballots_config = []), e.defaults && (n.crypto_system = null, n.revote_enabled = !1), null != t.crypto_system && t.hasOwnProperty("crypto_system") && (n.crypto_system = o.votings_service.TxCryptoSystemSettings.toObject(t.crypto_system, e)), t.ballots_config && t.ballots_config.length) {
                        n.ballots_config = [];
                        for (var r = 0; r < t.ballots_config.length; ++r) n.ballots_config[r] = o.votings_service.TxBallotConfig.toObject(t.ballots_config[r], e)
                    }
                    return null != t.revote_enabled && t.hasOwnProperty("revote_enabled") && (n.revote_enabled = t.revote_enabled), n
                }, L.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, L), p.TxRegisterVoters = (I.prototype.voting_id = "", I.prototype.voters = r.emptyArray, I.create = function(t) {
                    return new I(t)
                }, I.encode = function(t, e) {
                    if (e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.voters && t.voters.length)
                        for (var r = 0; r < t.voters.length; ++r) e.uint32(18).string(t.voters[r]);
                    return e
                }, I.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, I.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxRegisterVoters; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.voters && i.voters.length || (i.voters = []), i.voters.push(t.string());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, I.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, I.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.voters && t.hasOwnProperty("voters")) {
                        if (!a(t.voters)) return "voters: array expected";
                        for (var e = 0; e < t.voters.length; ++e)
                            if (!r.isString(t.voters[e])) return "voters: string[] expected"
                    }
                    return null
                }, I.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxRegisterVoters) return t;
                    var e = new o.votings_service.TxRegisterVoters;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), t.voters) {
                        if (!a(t.voters)) throw TypeError(".votings_service.TxRegisterVoters.voters: array expected");
                        e.voters = [];
                        for (var n = 0; n < t.voters.length; ++n) e.voters[n] = String(t.voters[n])
                    }
                    return e
                }, I.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.voters = []), e.defaults && (n.voting_id = ""), null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), t.voters && t.voters.length) {
                        n.voters = [];
                        for (var r = 0; r < t.voters.length; ++r) n.voters[r] = t.voters[r]
                    }
                    return n
                }, I.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, I), p.TxStopRegistration = (N.prototype.voting_id = "", N.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, N.create = function(t) {
                    return new N(t)
                }, N.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(16).uint64(t.seed), e
                }, N.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, N.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxStopRegistration; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, N.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, N.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, N.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxStopRegistration) return t;
                    var e = new o.votings_service.TxStopRegistration;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, N.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, N.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, N), p.TxRevokeVoterParticipation = (C.prototype.voting_id = "", C.prototype.voter_id = "", C.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, C.create = function(t) {
                    return new C(t)
                }, C.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.voter_id && t.hasOwnProperty("voter_id") && e.uint32(18).string(t.voter_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(24).uint64(t.seed), e
                }, C.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, C.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxRevokeVoterParticipation; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.voter_id = t.string();
                                break;
                            case 3:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, C.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, C.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.voter_id && t.hasOwnProperty("voter_id") && !r.isString(t.voter_id) ? "voter_id: string expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, C.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxRevokeVoterParticipation) return t;
                    var e = new o.votings_service.TxRevokeVoterParticipation;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voter_id && (e.voter_id = String(t.voter_id)), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, C.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", n.voter_id = "", r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.voter_id && t.hasOwnProperty("voter_id") && (n.voter_id = t.voter_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, C.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, C), p.TxIssueBallot = (U.prototype.voting_id = "", U.prototype.voter_id = "", U.prototype.district_id = 0, U.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, U.create = function(t) {
                    return new U(t)
                }, U.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.voter_id && t.hasOwnProperty("voter_id") && e.uint32(18).string(t.voter_id), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(24).uint32(t.district_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(32).uint64(t.seed), e
                }, U.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, U.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxIssueBallot; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.voter_id = t.string();
                                break;
                            case 3:
                                i.district_id = t.uint32();
                                break;
                            case 4:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, U.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, U.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.voter_id && t.hasOwnProperty("voter_id") && !r.isString(t.voter_id) ? "voter_id: string expected" : null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id) ? "district_id: integer expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, U.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxIssueBallot) return t;
                    var e = new o.votings_service.TxIssueBallot;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voter_id && (e.voter_id = String(t.voter_id)), null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, U.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", n.voter_id = "", n.district_id = 0, r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.voter_id && t.hasOwnProperty("voter_id") && (n.voter_id = t.voter_id), null != t.district_id && t.hasOwnProperty("district_id") && (n.district_id = t.district_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, U.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, U), p.TxAddVoterKey = (M.prototype.voting_id = "", M.prototype.voter_key = null, M.create = function(t) {
                    return new M(t)
                }, M.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.voter_key && t.hasOwnProperty("voter_key") && o.exonum.crypto.PublicKey.encode(t.voter_key, e.uint32(18).fork()).ldelim(), e
                }, M.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, M.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxAddVoterKey; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.voter_key = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, M.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, M.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.voter_key && t.hasOwnProperty("voter_key")) {
                        var e = o.exonum.crypto.PublicKey.verify(t.voter_key);
                        if (e) return "voter_key." + e
                    }
                    return null
                }, M.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxAddVoterKey) return t;
                    var e = new o.votings_service.TxAddVoterKey;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.voter_key) {
                        if ("object" !== f(t.voter_key)) throw TypeError(".votings_service.TxAddVoterKey.voter_key: object expected");
                        e.voter_key = o.exonum.crypto.PublicKey.fromObject(t.voter_key)
                    }
                    return e
                }, M.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.voting_id = "", n.voter_key = null), null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.voter_key && t.hasOwnProperty("voter_key") && (n.voter_key = o.exonum.crypto.PublicKey.toObject(t.voter_key, e)), n
                }, M.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, M), p.TxEncryptedChoice = (H.prototype.encrypted_message = r.newBuffer([]), H.prototype.nonce = null, H.prototype.public_key = null, H.create = function(t) {
                    return new H(t)
                }, H.encode = function(t, e) {
                    return e = e || n.create(), null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && e.uint32(10).bytes(t.encrypted_message), null != t.nonce && t.hasOwnProperty("nonce") && o.votings_service.SealedBoxNonce.encode(t.nonce, e.uint32(18).fork()).ldelim(), null != t.public_key && t.hasOwnProperty("public_key") && o.votings_service.SealedBoxPublicKey.encode(t.public_key, e.uint32(26).fork()).ldelim(), e
                }, H.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, H.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxEncryptedChoice; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.encrypted_message = t.bytes();
                                break;
                            case 2:
                                i.nonce = o.votings_service.SealedBoxNonce.decode(t, t.uint32());
                                break;
                            case 3:
                                i.public_key = o.votings_service.SealedBoxPublicKey.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, H.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, H.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && !(t.encrypted_message && "number" == typeof t.encrypted_message.length || r.isString(t.encrypted_message)) ? "encrypted_message: buffer expected" : null != t.nonce && t.hasOwnProperty("nonce") && (e = o.votings_service.SealedBoxNonce.verify(t.nonce)) ? "nonce." + e : null != t.public_key && t.hasOwnProperty("public_key") && (e = o.votings_service.SealedBoxPublicKey.verify(t.public_key)) ? "public_key." + e : null;
                    var e
                }, H.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxEncryptedChoice) return t;
                    var e = new o.votings_service.TxEncryptedChoice;
                    if (null != t.encrypted_message && ("string" == typeof t.encrypted_message ? r.base64.decode(t.encrypted_message, e.encrypted_message = r.newBuffer(r.base64.length(t.encrypted_message)), 0) : t.encrypted_message.length && (e.encrypted_message = t.encrypted_message)), null != t.nonce) {
                        if ("object" !== f(t.nonce)) throw TypeError(".votings_service.TxEncryptedChoice.nonce: object expected");
                        e.nonce = o.votings_service.SealedBoxNonce.fromObject(t.nonce)
                    }
                    if (null != t.public_key) {
                        if ("object" !== f(t.public_key)) throw TypeError(".votings_service.TxEncryptedChoice.public_key: object expected");
                        e.public_key = o.votings_service.SealedBoxPublicKey.fromObject(t.public_key)
                    }
                    return e
                }, H.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.encrypted_message = "" : (n.encrypted_message = [], e.bytes !== Array && (n.encrypted_message = r.newBuffer(n.encrypted_message))), n.nonce = null, n.public_key = null), null != t.encrypted_message && t.hasOwnProperty("encrypted_message") && (n.encrypted_message = e.bytes === String ? r.base64.encode(t.encrypted_message, 0, t.encrypted_message.length) : e.bytes === Array ? c(Array.prototype).call(t.encrypted_message) : t.encrypted_message), null != t.nonce && t.hasOwnProperty("nonce") && (n.nonce = o.votings_service.SealedBoxNonce.toObject(t.nonce, e)), null != t.public_key && t.hasOwnProperty("public_key") && (n.public_key = o.votings_service.SealedBoxPublicKey.toObject(t.public_key, e)), n
                }, H.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, H), p.TxStoreBallot = (D.prototype.voting_id = "", D.prototype.district_id = 0, D.prototype.encrypted_choice = null, D.create = function(t) {
                    return new D(t)
                }, D.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.district_id && t.hasOwnProperty("district_id") && e.uint32(16).uint32(t.district_id), null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice") && o.votings_service.TxEncryptedChoice.encode(t.encrypted_choice, e.uint32(26).fork()).ldelim(), e
                }, D.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, D.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxStoreBallot; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.district_id = t.uint32();
                                break;
                            case 3:
                                i.encrypted_choice = o.votings_service.TxEncryptedChoice.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, D.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, D.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.district_id && t.hasOwnProperty("district_id") && !r.isInteger(t.district_id)) return "district_id: integer expected";
                    if (null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice")) {
                        var e = o.votings_service.TxEncryptedChoice.verify(t.encrypted_choice);
                        if (e) return "encrypted_choice." + e
                    }
                    return null
                }, D.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxStoreBallot) return t;
                    var e = new o.votings_service.TxStoreBallot;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.district_id && (e.district_id = t.district_id >>> 0), null != t.encrypted_choice) {
                        if ("object" !== f(t.encrypted_choice)) throw TypeError(".votings_service.TxStoreBallot.encrypted_choice: object expected");
                        e.encrypted_choice = o.votings_service.TxEncryptedChoice.fromObject(t.encrypted_choice)
                    }
                    return e
                }, D.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.voting_id = "", n.district_id = 0, n.encrypted_choice = null), null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.district_id && t.hasOwnProperty("district_id") && (n.district_id = t.district_id), null != t.encrypted_choice && t.hasOwnProperty("encrypted_choice") && (n.encrypted_choice = o.votings_service.TxEncryptedChoice.toObject(t.encrypted_choice, e)), n
                }, D.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, D), p.TxStopVoting = (V.prototype.voting_id = "", V.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, V.create = function(t) {
                    return new V(t)
                }, V.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(16).uint64(t.seed), e
                }, V.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, V.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxStopVoting; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, V.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, V.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, V.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxStopVoting) return t;
                    var e = new o.votings_service.TxStopVoting;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, V.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, V.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, V), p.TxPublishDecryptionKey = (F.prototype.voting_id = "", F.prototype.private_key = null, F.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, F.create = function(t) {
                    return new F(t)
                }, F.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.private_key && t.hasOwnProperty("private_key") && o.votings_service.SealedBoxSecretKey.encode(t.private_key, e.uint32(18).fork()).ldelim(), null != t.seed && t.hasOwnProperty("seed") && e.uint32(24).uint64(t.seed), e
                }, F.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, F.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxPublishDecryptionKey; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.private_key = o.votings_service.SealedBoxSecretKey.decode(t, t.uint32());
                                break;
                            case 3:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, F.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, F.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.private_key && t.hasOwnProperty("private_key")) {
                        var e = o.votings_service.SealedBoxSecretKey.verify(t.private_key);
                        if (e) return "private_key." + e
                    }
                    return null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, F.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxPublishDecryptionKey) return t;
                    var e = new o.votings_service.TxPublishDecryptionKey;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.private_key) {
                        if ("object" !== f(t.private_key)) throw TypeError(".votings_service.TxPublishDecryptionKey.private_key: object expected");
                        e.private_key = o.votings_service.SealedBoxSecretKey.fromObject(t.private_key)
                    }
                    return null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, F.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", n.private_key = null, r.Long) {
                            var i = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.private_key && t.hasOwnProperty("private_key") && (n.private_key = o.votings_service.SealedBoxSecretKey.toObject(t.private_key, e)), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, F.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, F), p.TxDecryptBallot = (K.prototype.voting_id = "", K.prototype.ballot_index = 0, K.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, K.create = function(t) {
                    return new K(t)
                }, K.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.ballot_index && t.hasOwnProperty("ballot_index") && e.uint32(16).uint32(t.ballot_index), null != t.seed && t.hasOwnProperty("seed") && e.uint32(24).uint64(t.seed), e
                }, K.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, K.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxDecryptBallot; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.ballot_index = t.uint32();
                                break;
                            case 3:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, K.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, K.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.ballot_index && t.hasOwnProperty("ballot_index") && !r.isInteger(t.ballot_index) ? "ballot_index: integer expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, K.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxDecryptBallot) return t;
                    var e = new o.votings_service.TxDecryptBallot;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.ballot_index && (e.ballot_index = t.ballot_index >>> 0), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, K.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", n.ballot_index = 0, r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.ballot_index && t.hasOwnProperty("ballot_index") && (n.ballot_index = t.ballot_index), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, K.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, K), p.TxFinalizeVoting = (q.prototype.voting_id = "", q.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, q.create = function(t) {
                    return new q(t)
                }, q.encode = function(t, e) {
                    return e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(16).uint64(t.seed), e
                }, q.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, q.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.votings_service.TxFinalizeVoting; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.voting_id = t.string();
                                break;
                            case 2:
                                i.seed = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, q.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, q.verify = function(t) {
                    return "object" !== f(t) || null === t ? "object expected" : null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id) ? "voting_id: string expected" : null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high)) ? "seed: integer|Long expected" : null
                }, q.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxFinalizeVoting) return t;
                    var e = new o.votings_service.TxFinalizeVoting;
                    return null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), e
                }, q.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (n.voting_id = "", r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.seed = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seed = e.longs === String ? "0" : 0;
                    return null != t.voting_id && t.hasOwnProperty("voting_id") && (n.voting_id = t.voting_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? n.seed = e.longs === String ? String(t.seed) : t.seed : n.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), n
                }, q.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, q), p.TxFinalizeVotingWithResults = (z.prototype.voting_id = "", z.prototype.seed = r.Long ? r.Long.fromBits(0, 0, !0) : 0, z.prototype.results = r.emptyObject, z.create = function(t) {
                    return new z(t)
                }, z.encode = function(t, e) {
                    if (e = e || n.create(), null != t.voting_id && t.hasOwnProperty("voting_id") && e.uint32(10).string(t.voting_id), null != t.seed && t.hasOwnProperty("seed") && e.uint32(16).uint64(t.seed), null != t.results && t.hasOwnProperty("results"))
                        for (var r = l(t.results), i = 0; i < r.length; ++i) e.uint32(26).fork().uint32(8).uint32(r[i]), o.votings_service.TxVotingResults.encode(t.results[r[i]], e.uint32(18).fork()).ldelim().ldelim();
                    return e
                }, z.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, z.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var i, s = void 0 === n ? t.len : t.pos + n, a = new o.votings_service.TxFinalizeVotingWithResults; t.pos < s;) {
                        var u = t.uint32();
                        switch (u >>> 3) {
                            case 1:
                                a.voting_id = t.string();
                                break;
                            case 2:
                                a.seed = t.uint64();
                                break;
                            case 3:
                                t.skip().pos++, a.results === r.emptyObject && (a.results = {}), i = t.uint32(), t.pos++, a.results[i] = o.votings_service.TxVotingResults.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & u)
                        }
                    }
                    return a
                }, z.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, z.verify = function(t) {
                    if ("object" !== f(t) || null === t) return "object expected";
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && !r.isString(t.voting_id)) return "voting_id: string expected";
                    if (null != t.seed && t.hasOwnProperty("seed") && !(r.isInteger(t.seed) || t.seed && r.isInteger(t.seed.low) && r.isInteger(t.seed.high))) return "seed: integer|Long expected";
                    if (null != t.results && t.hasOwnProperty("results")) {
                        if (!r.isObject(t.results)) return "results: object expected";
                        for (var e = l(t.results), n = 0; n < e.length; ++n) {
                            if (!r.key32Re.test(e[n])) return "results: integer key{k:uint32} expected";
                            var i = o.votings_service.TxVotingResults.verify(t.results[e[n]]);
                            if (i) return "results." + i
                        }
                    }
                    return null
                }, z.fromObject = function(t) {
                    if (t instanceof o.votings_service.TxFinalizeVotingWithResults) return t;
                    var e = new o.votings_service.TxFinalizeVotingWithResults;
                    if (null != t.voting_id && (e.voting_id = String(t.voting_id)), null != t.seed && (r.Long ? (e.seed = r.Long.fromValue(t.seed)).unsigned = !0 : "string" == typeof t.seed ? e.seed = u(t.seed, 10) : "number" == typeof t.seed ? e.seed = t.seed : "object" === f(t.seed) && (e.seed = new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0))), t.results) {
                        if ("object" !== f(t.results)) throw TypeError(".votings_service.TxFinalizeVotingWithResults.results: object expected");
                        e.results = {};
                        for (var n = l(t.results), i = 0; i < n.length; ++i) {
                            if ("object" !== f(t.results[n[i]])) throw TypeError(".votings_service.TxFinalizeVotingWithResults.results: object expected");
                            e.results[n[i]] = o.votings_service.TxVotingResults.fromObject(t.results[n[i]])
                        }
                    }
                    return e
                }, z.toObject = function(t, e) {
                    var n, i = {};
                    if (((e = e || {}).objects || e.defaults) && (i.results = {}), e.defaults)
                        if (i.voting_id = "", r.Long) {
                            var s = new r.Long(0, 0, !0);
                            i.seed = e.longs === String ? s.toString() : e.longs === Number ? s.toNumber() : s
                        } else i.seed = e.longs === String ? "0" : 0;
                    if (null != t.voting_id && t.hasOwnProperty("voting_id") && (i.voting_id = t.voting_id), null != t.seed && t.hasOwnProperty("seed") && ("number" == typeof t.seed ? i.seed = e.longs === String ? String(t.seed) : t.seed : i.seed = e.longs === String ? r.Long.prototype.toString.call(t.seed) : e.longs === Number ? new r.LongBits(t.seed.low >>> 0, t.seed.high >>> 0).toNumber(!0) : t.seed), t.results && (n = l(t.results)).length) {
                        i.results = {};
                        for (var a = 0; a < n.length; ++a) i.results[n[a]] = o.votings_service.TxVotingResults.toObject(t.results[n[a]], e)
                    }
                    return i
                }, z.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, z), p
            }(), o
        }) ? r.apply(e, o) : r) || (t.exports = i)
    }, function(t, e, n) {
        n(6);
        var r = n(23),
            o = n(45),
            i = n(51),
            s = n(20),
            a = function() {
                "use strict";

                function t(e, n, r) {
                    o(this, t), this.sender = e, this.tx = n, this.txData = r, this.hash = null, this.blockchainConnector = null
                }
                return i(t, [{
                    key: "getSender",
                    value: function() {
                        var t = this.sender;
                        return {
                            publicKey: t.publicKey,
                            secretKey: t.secretKey
                        }
                    }
                }, {
                    key: "send",
                    value: function(t) {
                        var e = this;
                        return (this.blockchainConnector = t).sendTransaction(this.sender, this.tx, this.txData).then((function(t) {
                            return e.hash = t
                        }))
                    }
                }, {
                    key: "getHash",
                    value: function() {
                        return this.hash
                    }
                }, {
                    key: "getResult",
                    value: function(t) {
                        return t && (this.blockchainConnector = t), this.blockchainConnector ? this.hash ? this.blockchainConnector.getTransactionResult(this.hash) : r.reject(new Error("Transaction either was not sent or sending failed")) : r.reject(new Error("Transaction should be sent to wait for its result"))
                    }
                }, {
                    key: "waitResult",
                    value: function(t) {
                        return t && (this.blockchainConnector = t), this.blockchainConnector ? this.hash ? this.blockchainConnector.waitTransactionResult(this.hash) : r.reject(new Error("Transaction either was not sent or sending failed")) : r.reject(new Error("Transaction should be sent to wait for its result"))
                    }
                }, {
                    key: "getRawTx",
                    value: function(t) {
                        var e = (void 0 === t ? this.tx.create(this.txData, this.sender) : this.tx.create(this.txData, this.sender.publicKey, t)).serialize();
                        return s.uint8ArrayToHexadecimal(new Uint8Array(e))
                    }
                }, {
                    key: "getUnsignedRawTx",
                    value: function() {
                        return s.uint8ArrayToHexadecimal(new Uint8Array(this.tx.serialize(this.txData)))
                    }
                }]), t
            }();
        t.exports = a
    }, function(t, e, n) {
        var r = n(93);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        function r(t) {
            return "function" == typeof t ? t : void 0
        }
        var o = n(3),
            i = n(11);
        t.exports = function(t, e) {
            return arguments.length < 2 ? r(o[t]) || r(i[t]) : o[t] && o[t][e] || i[t] && i[t][e]
        }
    }, function(t, e, n) {
        t.exports = !n(29)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(t, e, n) {
        t.exports = n(490)
    }, function(t, e, n) {
        var r = n(22),
            o = n(188),
            i = n(5),
            s = n(115),
            a = Object.defineProperty;
        e.f = r ? a : function(t, e, n) {
            if (i(t), e = s(e, !0), i(n), o) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(94),
            o = Math.min;
        t.exports = function(t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(61);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(68),
            o = Math.min;
        t.exports = function(t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function(t, e, n) {
        t.exports = n(471)
    }, function(t, e, n) {
        var r = n(114),
            o = n(93);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        var r = n(22),
            o = n(41),
            i = n(78);
        t.exports = r ? function(t, e, n) {
            return o.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(30),
            o = n(123),
            i = n(50),
            s = n(58),
            a = n(125),
            u = "prototype",
            c = function t(e, n, c) {
                var l, f, h, p, d = e & t.F,
                    y = e & t.G,
                    v = e & t.P,
                    g = e & t.B,
                    _ = y ? r : e & t.S ? r[n] || (r[n] = {}) : (r[n] || {})[u],
                    m = y ? o : o[n] || (o[n] = {}),
                    b = m[u] || (m[u] = {});
                for (l in y && (c = n), c) h = ((f = !d && _ && void 0 !== _[l]) ? _ : c)[l], p = g && f ? a(h, r) : v && "function" == typeof h ? a(Function.call, h) : h, _ && s(_, l, h, e & t.U), m[l] != h && i(m, l, p), v && b[l] != h && (b[l] = h)
            };
        r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function(t, e, n) {
        var r = n(57),
            o = n(124);
        t.exports = n(39) ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(378);

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), r(t, o.key, o)
            }
        }
        t.exports = function(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t
        }
    }, function(t, e, n) {
        t.exports = n(489)
    }, function(t, e, n) {
        var r = n(8),
            o = n(172);
        t.exports = r ? o : function(t) {
            return Map.prototype.entries.call(t)
        }
    }, function(t, e, n) {
        var r, o, i, s = n(194),
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
            r = function(t, e) {
                return g.call(d, t, e), e
            }, o = function(t) {
                return y.call(d, t) || {}
            }, i = function(t) {
                return v.call(d, t)
            }
        } else {
            var _ = f("state");
            h[_] = !0, r = function(t, e) {
                return c(t, _, e), e
            }, o = function(t) {
                return l(t, _) ? t[_] : {}
            }, i = function(t) {
                return l(t, _)
            }
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!u(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    }, function(t, e, n) {
        n(152);
        var r = n(325),
            o = n(11),
            i = n(65),
            s = n(48),
            a = n(66),
            u = n(9)("toStringTag");
        for (var c in r) {
            var l = o[c],
                f = l && l.prototype;
            f && i(f) !== u && s(f, u, c), a[c] = a.Array
        }
    }, function(t, e, n) {
        "use strict";
        if (n(39)) {
            var r = n(122),
                o = n(30),
                i = n(29),
                s = n(49),
                a = n(211),
                u = n(333),
                c = n(125),
                l = n(213),
                f = n(124),
                h = n(50),
                p = n(212),
                d = n(68),
                y = n(44),
                v = n(214),
                g = n(100),
                _ = n(98),
                m = n(67),
                b = n(128),
                w = n(61),
                x = n(70),
                O = n(334),
                S = n(159),
                k = n(219),
                E = n(126).f,
                P = n(336),
                A = n(99),
                j = n(18),
                T = n(337),
                B = n(154),
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
                K = o.RangeError,
                q = o.TypeError,
                z = o.Uint8Array,
                J = "ArrayBuffer",
                X = "Shared" + J,
                W = "BYTES_PER_ELEMENT",
                Y = "prototype",
                G = Array[Y],
                Z = u.ArrayBuffer,
                $ = u.DataView,
                Q = T(0),
                tt = T(2),
                et = T(3),
                nt = T(4),
                rt = T(5),
                ot = T(6),
                it = B(!0),
                st = B(!1),
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
                _t = j("iterator"),
                mt = j("toStringTag"),
                bt = A("typed_constructor"),
                wt = A("def_constructor"),
                xt = a.CONSTR,
                Ot = a.TYPED,
                St = a.VIEW,
                kt = "Wrong length!",
                Et = T(1, (function(t, e) {
                    return Bt(R(t, t[wt]), e)
                })),
                Pt = i((function() {
                    return 1 === new z(new Uint16Array([1]).buffer)[0]
                })),
                At = !!z && !!z[Y].set && i((function() {
                    new z(1).set({})
                })),
                jt = function(t, e) {
                    var n = d(t);
                    if (n < 0 || n % e) throw K("Wrong offset!");
                    return n
                },
                Tt = function(t) {
                    if (w(t) && Ot in t) return t;
                    throw q(t + " is not a typed array!")
                },
                Bt = function(t, e) {
                    if (!w(t) || !(bt in t)) throw q("It is not a typed array constructor!");
                    return new t(e)
                },
                Rt = function(t, e) {
                    return Lt(R(t, t[wt]), e)
                },
                Lt = function(t, e) {
                    for (var n = 0, r = e.length, o = Bt(t, r); n < r;) o[n] = e[n++];
                    return o
                },
                It = function(t, e, n) {
                    V(t, e, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                },
                Nt = function(t, e, n) {
                    var r, o, i, s, a, u, l = x(t),
                        f = arguments.length,
                        h = 1 < f ? e : void 0,
                        p = void 0 !== h,
                        d = P(l);
                    if (null != d && !O(d)) {
                        for (u = d.call(l), i = [], r = 0; !(a = u.next()).done; r++) i.push(a.value);
                        l = i
                    }
                    for (p && 2 < f && (h = c(h, n, 2)), r = 0, o = y(l.length), s = Bt(this, o); r < o; r++) s[r] = p ? h(l[r], r) : l[r];
                    return s
                },
                Ct = function() {
                    for (var t = 0, e = arguments.length, n = Bt(this, e); t < e;) n[t] = arguments[t++];
                    return n
                },
                Ut = !!z && i((function() {
                    gt.call(new z(1))
                })),
                Mt = function() {
                    return gt.apply(Ut ? yt.call(Tt(this)) : Tt(this), arguments)
                },
                Ht = {
                    copyWithin: function(t, e, n) {
                        return M.call(Tt(this), t, e, 2 < arguments.length ? n : void 0)
                    },
                    every: function(t, e) {
                        return nt(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    fill: function(t) {
                        return U.apply(Tt(this), arguments)
                    },
                    filter: function(t, e) {
                        return Rt(this, tt(Tt(this), t, 1 < arguments.length ? e : void 0))
                    },
                    find: function(t, e) {
                        return rt(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    findIndex: function(t, e) {
                        return ot(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    forEach: function(t, e) {
                        Q(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    indexOf: function(t, e) {
                        return st(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    includes: function(t, e) {
                        return it(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    join: function(t) {
                        return pt.apply(Tt(this), arguments)
                    },
                    lastIndexOf: function(t) {
                        return lt.apply(Tt(this), arguments)
                    },
                    map: function(t, e) {
                        return Et(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    reduce: function(t) {
                        return ft.apply(Tt(this), arguments)
                    },
                    reduceRight: function(t) {
                        return ht.apply(Tt(this), arguments)
                    },
                    reverse: function() {
                        for (var t, e = this, n = Tt(e).length, r = Math.floor(n / 2), o = 0; o < r;) t = e[o], e[o++] = e[--n], e[n] = t;
                        return e
                    },
                    some: function(t, e) {
                        return et(Tt(this), t, 1 < arguments.length ? e : void 0)
                    },
                    sort: function(t) {
                        return dt.call(Tt(this), t)
                    },
                    subarray: function(t, e) {
                        var n = Tt(this),
                            r = n.length,
                            o = g(t, r);
                        return new(R(n, n[wt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, y((void 0 === e ? r : g(e, r)) - o))
                    }
                },
                Dt = function(t, e) {
                    return Rt(this, yt.call(Tt(this), t, e))
                },
                Vt = function(t, e) {
                    Tt(this);
                    var n = jt(e, 1),
                        r = this.length,
                        o = x(t),
                        i = y(o.length),
                        s = 0;
                    if (r < i + n) throw K(kt);
                    for (; s < i;) this[n + s] = o[s++]
                },
                Ft = {
                    entries: function() {
                        return ct.call(Tt(this))
                    },
                    keys: function() {
                        return ut.call(Tt(this))
                    },
                    values: function() {
                        return at.call(Tt(this))
                    }
                },
                Kt = function(t, e) {
                    return w(t) && t[Ot] && "symbol" != _typeof2(e) && e in t && String(+e) == String(e)
                },
                qt = function(t, e) {
                    return Kt(t, e = _(e, !0)) ? f(2, t[e]) : F(t, e)
                },
                zt = function(t, e, n) {
                    return !(Kt(t, e = _(e, !0)) && w(n) && m(n, "value")) || m(n, "get") || m(n, "set") || n.configurable || m(n, "writable") && !n.writable || m(n, "enumerable") && !n.enumerable ? V(t, e, n) : (t[e] = n.value, t)
                };
            xt || (D.f = qt, H.f = zt), s(s.S + s.F * !xt, "Object", {
                getOwnPropertyDescriptor: qt,
                defineProperty: zt
            }), i((function() {
                vt.call({})
            })) && (vt = gt = function() {
                return pt.call(this)
            });
            var Jt = p({}, Ht);
            p(Jt, Ft), h(Jt, _t, Ft.values), p(Jt, {
                slice: Dt,
                set: Vt,
                constructor: function() {},
                toString: vt,
                toLocaleString: Mt
            }), It(Jt, "buffer", "b"), It(Jt, "byteOffset", "o"), It(Jt, "byteLength", "l"), It(Jt, "length", "e"), V(Jt, mt, {
                get: function() {
                    return this[Ot]
                }
            }), t.exports = function(t, e, n, u) {
                function c(t, n) {
                    V(t, n, {
                        get: function() {
                            return t = n, (r = this._d).v[p](t * e + r.o, Pt);
                            var t, r
                        },
                        set: function(t) {
                            return r = n, o = t, i = this._d, u && (o = (o = Math.round(o)) < 0 ? 0 : 255 < o ? 255 : 255 & o), void i.v[d](r * e + i.o, o, Pt);
                            var r, o, i
                        },
                        enumerable: !0
                    })
                }
                var f = t + ((u = !!u) ? "Clamped" : "") + "Array",
                    p = "get" + t,
                    d = "set" + t,
                    g = o[f],
                    _ = g || {},
                    m = g && k(g),
                    x = !g || !a.ABV,
                    O = {},
                    P = g && g[Y];
                x ? (g = n((function(t, n, r, o) {
                    l(t, g, f, "_d");
                    var i, s, a, u, p = 0,
                        d = 0;
                    if (w(n)) {
                        if (!(n instanceof Z || (u = b(n)) == J || u == X)) return Ot in n ? Lt(g, n) : Nt.call(g, n);
                        i = n, d = jt(r, e);
                        var _ = n.byteLength;
                        if (void 0 === o) {
                            if (_ % e) throw K(kt);
                            if ((s = _ - d) < 0) throw K(kt)
                        } else if (_ < (s = y(o) * e) + d) throw K(kt);
                        a = s / e
                    } else a = v(n), i = new Z(s = a * e);
                    for (h(t, "_d", {
                            b: i,
                            o: d,
                            l: s,
                            e: a,
                            v: new $(i)
                        }); p < a;) c(t, p++)
                })), P = g[Y] = S(Jt), h(P, "constructor", g)) : i((function() {
                    g(1)
                })) && i((function() {
                    new g(-1)
                })) && N((function(t) {
                    new g, new g(null), new g(1.5), new g(t)
                }), !0) || (g = n((function(t, n, r, o) {
                    var i;
                    return l(t, g, f), w(n) ? n instanceof Z || (i = b(n)) == J || i == X ? void 0 !== o ? new _(n, jt(r, e), o) : void 0 !== r ? new _(n, jt(r, e)) : new _(n) : Ot in n ? Lt(g, n) : Nt.call(g, n) : new _(v(n))
                })), Q(m !== Function.prototype ? E(_).concat(E(m)) : E(_), (function(t) {
                    t in g || h(g, t, _[t])
                })), g[Y] = P, r || (P.constructor = g));
                var A = P[_t],
                    j = !!A && ("values" == A.name || null == A.name),
                    T = Ft.values;
                h(g, bt, !0), h(P, Ot, f), h(P, St, !0), h(P, wt, g), (u ? new g(1)[mt] == f : mt in P) || V(P, mt, {
                    get: function() {
                        return f
                    }
                }), O[f] = g, s(s.G + s.W + s.F * (g != _), O), s(s.S, f, {
                    BYTES_PER_ELEMENT: e
                }), s(s.S + s.F * i((function() {
                    _.of.call(g, 1)
                })), f, {
                    from: Nt,
                    of: Ct
                }), W in P || h(P, W, e), s(s.P, f, Ht), C(f), s(s.P + s.F * At, f, {
                    set: Vt
                }), s(s.P + s.F * !j, f, Ft), r || P.toString == vt || (P.toString = vt), s(s.P + s.F * i((function() {
                    new g(1).slice()
                })), f, {
                    slice: Dt
                }), s(s.P + s.F * (i((function() {
                    return [1, 2].toLocaleString() != new g([1, 2]).toLocaleString()
                })) || !i((function() {
                    P.toLocaleString.call([1, 2])
                }))), f, {
                    toLocaleString: Mt
                }), I[f] = j ? A : T, r || j || h(P, _t, T)
            }
        } else t.exports = function() {}
    }, function(t, e, n) {
        var r = n(43),
            o = n(208),
            i = n(98),
            s = Object.defineProperty;
        e.f = n(39) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(30),
            o = n(50),
            i = n(67),
            s = n(99)("src"),
            a = n(332),
            u = "toString",
            c = ("" + a).split(u);
        n(123).inspectSource = function(t) {
            return a.call(t)
        }, (t.exports = function(t, e, n, a) {
            var u = "function" == typeof n;
            u && (i(n, "name") || o(n, "name", e)), t[e] !== n && (u && (i(n, s) || o(n, s, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
        })(Function.prototype, u, (function() {
            return "function" == typeof this && this[s] || a.call(this)
        }))
    }, function(t, e, n) {
        function r(t) {
            throw t
        }
        var o = n(22),
            i = n(7),
            s = n(26),
            a = Object.defineProperty,
            u = {};
        t.exports = function(t, e) {
            if (s(u, t)) return u[t];
            var n = [][t],
                c = !!s(e = e || {}, "ACCESSORS") && e.ACCESSORS,
                l = s(e, 0) ? e[0] : r,
                f = s(e, 1) ? e[1] : void 0;
            return u[t] = !!n && !i((function() {
                if (c && !o) return !0;
                var t = {
                    length: -1
                };
                c ? a(t, 1, {
                    enumerable: !0,
                    get: r
                }) : t[1] = 1, n.call(t, l, f)
            }))
        }
    }, function(t, e, n) {
        var r = n(151),
            o = n(41).f,
            i = n(48),
            s = n(26),
            a = n(320),
            u = n(9)("toStringTag");
        t.exports = function(t, e, n, c) {
            if (t) {
                var l = n ? t : t.prototype;
                s(l, u) || o(l, u, {
                    configurable: !0,
                    value: e
                }), c && !r && i(l, "toString", a)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == _typeof2(t) ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(160),
            o = n(341),
            i = n(84),
            s = n(127);
        t.exports = n(221)(Array, "Array", (function(t, e) {
            this._t = s(t), this._i = 0, this._k = e
        }), (function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(319).charAt,
            o = n(54),
            i = n(148),
            s = "String Iterator",
            a = o.set,
            u = o.getterFor(s);
        i(String, "String", (function(t) {
            a(this, {
                type: s,
                string: String(t),
                index: 0
            })
        }), (function() {
            var t, e = u(this),
                n = e.string,
                o = e.index;
            return o >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, o), e.index += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function(t, e, n) {
        var r = n(151),
            o = n(63),
            i = n(9)("toStringTag"),
            s = "Arguments" == o(function() {
                return arguments
            }());
        t.exports = r ? o : function(t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : s ? o(e) : "Object" == (r = o(e)) && "function" == typeof e.callee ? "Arguments" : r
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e, n) {
        var r = n(69);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        function r(t) {
            var e = 1 == t,
                n = 2 == t,
                r = 3 == t,
                l = 4 == t,
                f = 6 == t,
                h = 5 == t || f;
            return function(p, d, y, v) {
                for (var g, _, m = s(p), b = i(m), w = o(d, y, 3), x = a(b.length), O = 0, S = v || u, k = e ? S(p, x) : n ? S(p, 0) : void 0; O < x; O++)
                    if ((h || O in b) && (_ = w(g = b[O], O, m), t))
                        if (e) k[O] = _;
                        else if (_) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return O;
                    case 2:
                        c.call(k, g)
                } else if (l) return !1;
                return f ? -1 : r || l ? l : k
            }
        }
        var o = n(24),
            i = n(114),
            s = n(37),
            a = n(42),
            u = n(143),
            c = [].push;
        t.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6)
        }
    }, function(t, e, n) {
        t.exports = n(482)
    }, function(t, e, n) {
        t.exports = n(485)
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            n(4), n(2);
            var r = n(21),
                o = n(10);
            n(6);
            var i = n(46),
                s = n(27),
                a = n(13),
                u = n(129),
                c = n(176),
                l = e;

            function f(t, e, n) {
                for (var r = i(e), o = 0; o < r.length; ++o) void 0 !== t[r[o]] && n || (t[r[o]] = e[r[o]]);
                return t
            }

            function h(t) {
                function e(t, n) {
                    if (!(this instanceof e)) return new e(t, n);
                    o(this, "message", {
                        get: function() {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : o(this, "stack", {
                        value: (new Error).stack || ""
                    }), n && f(this, n)
                }
                return (e.prototype = r(Error.prototype)).constructor = e, o(e.prototype, "name", {
                    get: function() {
                        return t
                    }
                }), e.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, e
            }
            l.asPromise = n(265), l.base64 = n(266), l.EventEmitter = n(267), l.float = n(269), l.inquire = n(273), l.utf8 = n(274), l.pool = n(275), l.LongBits = n(510), l.global = "undefined" != typeof window && window || void 0 !== t && t || "undefined" != typeof self && self || this, l.emptyArray = c ? c([]) : [], l.emptyObject = c ? c({}) : {}, l.isNode = Boolean(l.global.process && l.global.process.versions && l.global.process.versions.node), l.isInteger = u || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, l.isString = function(t) {
                return "string" == typeof t || t instanceof String
            }, l.isObject = function(t) {
                return t && "object" === a(t)
            }, l.isset = l.isSet = function(t, e) {
                var n = t[e];
                return !(null == n || !t.hasOwnProperty(e)) && ("object" !== a(n) || 0 < (s(n) ? n.length : i(n).length))
            }, l.Buffer = function() {
                try {
                    var t = l.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (t) {
                    return null
                }
            }(), l._Buffer_from = null, l._Buffer_allocUnsafe = null, l.newBuffer = function(t) {
                return "number" == typeof t ? l.Buffer ? l._Buffer_allocUnsafe(t) : new l.Array(t) : l.Buffer ? l._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
            }, l.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, l.Long = l.global.dcodeIO && l.global.dcodeIO.Long || l.global.Long || l.inquire("long"), l.key2Re = /^true|false|0|1$/, l.key32Re = /^-?(?:0|[1-9][0-9]*)$/, l.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, l.longToHash = function(t) {
                return t ? l.LongBits.from(t).toHash() : l.LongBits.zeroHash
            }, l.longFromHash = function(t, e) {
                var n = l.LongBits.fromHash(t);
                return l.Long ? l.Long.fromBits(n.lo, n.hi, e) : n.toNumber(Boolean(e))
            }, l.merge = f, l.lcFirst = function(t) {
                return t.charAt(0).toLowerCase() + t.substring(1)
            }, l.newError = h, l.ProtocolError = h("ProtocolError"), l.oneOfGetter = function(t) {
                for (var e = {}, n = 0; n < t.length; ++n) e[t[n]] = 1;
                return function() {
                    for (var t = i(this), n = t.length - 1; - 1 < n; --n)
                        if (1 === e[t[n]] && void 0 !== this[t[n]] && null !== this[t[n]]) return t[n]
                }
            }, l.oneOfSetter = function(t) {
                return function(e) {
                    for (var n = 0; n < t.length; ++n) t[n] !== e && delete this[t[n]]
                }
            }, l.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, l._configure = function() {
                var t = l.Buffer;
                t ? (l._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, n) {
                    return new t(e, n)
                }, l._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
                    return new t(e)
                }) : l._Buffer_from = l._Buffer_allocUnsafe = null
            }
        }).call(this, n(91))
    }, function(t, e, n) {
        var r = n(101),
            o = n(21),
            i = n(279),
            s = i.Buffer;

        function a(t, e) {
            for (var n in t) e[n] = t[n]
        }

        function u(t, e, n) {
            return s(t, e, n)
        }
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t.exports = i : (a(i, e), e.Buffer = u), u.prototype = o(s.prototype), a(s, u), u.from = function(t, e, n) {
            if ("number" == typeof t) throw new TypeError("Argument must not be a number");
            return s(t, e, n)
        }, u.alloc = function(t, e, n) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            var o = s(t);
            return void 0 !== e ? "string" == typeof n ? r(o).call(o, e, n) : r(o).call(o, e) : r(o).call(o, 0), o
        }, u.allocUnsafe = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return s(t)
        }, u.allocUnsafeSlow = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return i.SlowBuffer(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(101);
        n(108);
        var o = n(82);
        n(4), n(2);
        var i = n(31);
        n(6);
        var s = n(72),
            a = n(73),
            u = n(10),
            c = n(52),
            l = n(13),
            f = n(40);

        function h(t) {
            return (h = "function" == typeof f && "symbol" === l(c) ? function(t) {
                return l(t)
            } : function(t) {
                return t && "function" == typeof f && t.constructor === f && t !== f.prototype ? "symbol" : l(t)
            })(t)
        }
        u(e, "__esModule", {
            value: !0
        }), e.hexadecimalToUint8Array = function(t) {
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. Hexadecimal string is expected");
            if (!p.validateHexadecimal(t, t.length / 2)) throw new TypeError("String of wrong type is passed. Hexadecimal expected.");
            for (var e = new Uint8Array(t.length / 2), n = 0, r = 0; n < t.length; n += 2, r++) e[r] = i(t.substr(n, 2), 16);
            return e
        }, e.hexadecimalToBinaryString = function(t) {
            var e = "";
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. Hexadecimal string is expected");
            if (!p.validateHexadecimal(t, Math.ceil(t.length / 2))) throw new TypeError("String of wrong type is passed. Hexadecimal expected.");
            for (var n = null, r = 0; r < t.length; r++) {
                for (var o = y(i(t[r], 16).toString(2)); o.length < 4;) o += "0";
                n = n ? (e += o + n, null) : o
            }
            return e
        }, e.uint8ArrayToHexadecimal = function(t) {
            var e = "";
            if (!(t instanceof Uint8Array)) throw new TypeError("Wrong data type of array of 8-bit integers. Uint8Array is expected");
            for (var n = 0; n < t.length; n++) {
                var r = t[n].toString(16);
                e += r = 1 === r.length ? "0" + r : r
            }
            return e.toLowerCase()
        }, e.uint8ArrayToBinaryString = function(t) {
            var e = "";
            if (!(t instanceof Uint8Array)) throw new TypeError("Wrong data type of array of 8-bit integers. Uint8Array is expected");
            for (var n = 0; n < t.length; n++) {
                for (var r = y(t[n].toString(2)); r.length < 8;) r += "0";
                e += r
            }
            return e
        }, e.binaryStringToUint8Array = function(t) {
            var e = [];
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. Binary string is expected");
            if (!p.validateBinaryString(t)) throw new TypeError("String of wrong type is passed. Binary string expected.");
            for (var n = 0; n < t.length; n += 8) e.push(i(y(t.substr(n, 8)), 2));
            return new Uint8Array(e)
        }, e.binaryStringToHexadecimal = function(t) {
            var e = "";
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. Binary string is expected");
            if (!p.validateBinaryString(t)) throw new TypeError("String of wrong type is passed. Binary string expected.");
            for (var n = 0; n < t.length; n += 8) {
                var r = i(y(t.substr(n, 8)), 2).toString(16);
                e += r = 1 === r.length ? "0" + r : r
            }
            return e.toLowerCase()
        }, e.stringToUint8Array = function(t, e) {
            var n, o = 0;
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. String is expected");
            0 < e ? (n = new Array(e), r(n).call(n, 0)) : n = [];
            for (var i = 0; i < t.length; i++) {
                var s = t.charCodeAt(i);
                s < 128 ? n[o++] = s : (s < 2048 ? n[o++] = s >> 6 | 192 : (55296 == (64512 & s) && i + 1 < t.length && 56320 == (64512 & t.charCodeAt(i + 1)) ? (s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i)), n[o++] = s >> 18 | 240, n[o++] = s >> 12 & 63 | 128) : n[o++] = s >> 12 | 224, n[o++] = s >> 6 & 63 | 128), n[o++] = 63 & s | 128)
            }
            return new Uint8Array(n)
        };
        var p = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== h(t) && "function" != typeof t) return {
                default: t
            };
            var e = d();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                r = u && s;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? s(t, o) : null;
                    i && (i.get || i.set) ? u(n, o, i) : n[o] = t[o]
                } return n.default = t, e && e.set(t, n), n
        }(n(180));

        function d() {
            if ("function" != typeof a) return null;
            var t = new a;
            return d = function() {
                return t
            }, t
        }

        function y(t) {
            var e;
            return o(e = t.split("")).call(e).join("")
        }
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            n(4), n(2);
            var r = n(21),
                o = n(10);
            n(6);
            var i = n(46),
                s = n(27),
                a = n(13),
                u = n(129),
                c = n(176),
                l = e;

            function f(t, e, n) {
                for (var r = i(e), o = 0; o < r.length; ++o) void 0 !== t[r[o]] && n || (t[r[o]] = e[r[o]]);
                return t
            }

            function h(t) {
                function e(t, n) {
                    if (!(this instanceof e)) return new e(t, n);
                    o(this, "message", {
                        get: function() {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : o(this, "stack", {
                        value: (new Error).stack || ""
                    }), n && f(this, n)
                }
                return (e.prototype = r(Error.prototype)).constructor = e, o(e.prototype, "name", {
                    get: function() {
                        return t
                    }
                }), e.prototype.toString = function() {
                    return this.name + ": " + this.message
                }, e
            }
            l.asPromise = n(265), l.base64 = n(266), l.EventEmitter = n(267), l.float = n(269), l.inquire = n(273), l.utf8 = n(274), l.pool = n(275), l.LongBits = n(659), l.global = "undefined" != typeof window && window || void 0 !== t && t || "undefined" != typeof self && self || this, l.emptyArray = c ? c([]) : [], l.emptyObject = c ? c({}) : {}, l.isNode = Boolean(l.global.process && l.global.process.versions && l.global.process.versions.node), l.isInteger = u || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, l.isString = function(t) {
                return "string" == typeof t || t instanceof String
            }, l.isObject = function(t) {
                return t && "object" === a(t)
            }, l.isset = l.isSet = function(t, e) {
                var n = t[e];
                return !(null == n || !t.hasOwnProperty(e)) && ("object" !== a(n) || 0 < (s(n) ? n.length : i(n).length))
            }, l.Buffer = function() {
                try {
                    var t = l.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (t) {
                    return null
                }
            }(), l._Buffer_from = null, l._Buffer_allocUnsafe = null, l.newBuffer = function(t) {
                return "number" == typeof t ? l.Buffer ? l._Buffer_allocUnsafe(t) : new l.Array(t) : l.Buffer ? l._Buffer_from(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
            }, l.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, l.Long = l.global.dcodeIO && l.global.dcodeIO.Long || l.global.Long || l.inquire("long"), l.key2Re = /^true|false|0|1$/, l.key32Re = /^-?(?:0|[1-9][0-9]*)$/, l.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, l.longToHash = function(t) {
                return t ? l.LongBits.from(t).toHash() : l.LongBits.zeroHash
            }, l.longFromHash = function(t, e) {
                var n = l.LongBits.fromHash(t);
                return l.Long ? l.Long.fromBits(n.lo, n.hi, e) : n.toNumber(Boolean(e))
            }, l.merge = f, l.lcFirst = function(t) {
                return t.charAt(0).toLowerCase() + t.substring(1)
            }, l.newError = h, l.ProtocolError = h("ProtocolError"), l.oneOfGetter = function(t) {
                for (var e = {}, n = 0; n < t.length; ++n) e[t[n]] = 1;
                return function() {
                    for (var t = i(this), n = t.length - 1; - 1 < n; --n)
                        if (1 === e[t[n]] && void 0 !== this[t[n]] && null !== this[t[n]]) return t[n]
                }
            }, l.oneOfSetter = function(t) {
                return function(e) {
                    for (var n = 0; n < t.length; ++n) t[n] !== e && delete this[t[n]]
                }
            }, l.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, l._configure = function() {
                var t = l.Buffer;
                t ? (l._Buffer_from = t.from !== Uint8Array.from && t.from || function(e, n) {
                    return new t(e, n)
                }, l._Buffer_allocUnsafe = t.allocUnsafe || function(e) {
                    return new t(e)
                }) : l._Buffer_from = l._Buffer_allocUnsafe = null
            }
        }).call(this, n(91))
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        var r = n(63);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        function r() {}

        function o(t) {
            return "<script>" + t + "</" + d + ">"
        }
        var i, s = n(5),
            a = n(199),
            u = n(150),
            c = n(96),
            l = n(202),
            f = n(142),
            h = n(118),
            p = "prototype",
            d = "script",
            y = h("IE_PROTO"),
            v = function() {
                try {
                    i = document.domain && new ActiveXObject("htmlfile")
                } catch (t) {}
                var t, e;
                v = i ? function(t) {
                    t.write(o("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                }(i) : ((e = f("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(o("document.F=Object")), t.close(), t.F);
                for (var n = u.length; n--;) delete v[p][u[n]];
                return v()
            };
        c[y] = !0, t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (r[p] = s(t), n = new r, r[p] = null, n[y] = t) : n = v(), void 0 === e ? n : a(n, e)
        }
    }, function(t, e, n) {
        var r = n(48);
        t.exports = function(t, e, n, o) {
            o && o.enumerable ? t[e] = n : r(t, e, n)
        }
    }, function(t, e, n) {
        t.exports = n(328)
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        "use strict";
        var r = n(7);
        t.exports = function(t, e) {
            var n = [][t];
            return !!n && r((function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        }
    }, function(t, e, n) {
        for (var r = n(62), o = n(217), i = n(58), s = n(30), a = n(50), u = n(84), c = n(18), l = c("iterator"), f = c("toStringTag"), h = u.Array, p = {
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
            var v, g = d[y],
                _ = p[g],
                m = s[g],
                b = m && m.prototype;
            if (b && (b[l] || a(b, l, h), b[f] || a(b, f, g), u[g] = h, _))
                for (v in r) b[v] || i(b, v, r[v], !0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(70),
            i = n(98);
        r(r.P + r.F * n(29)((function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        })), "Date", {
            toJSON: function() {
                var t = o(this),
                    e = i(t);
                return "number" != typeof e || isFinite(e) ? t.toISOString() : null
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(177);
        n(4), n(2);
        var o = n(27);
        n(6);
        var i = n(72),
            s = n(73),
            a = n(10),
            u = n(52),
            c = n(13),
            l = n(40);

        function f(t) {
            return (f = "function" == typeof l && "symbol" === c(u) ? function(t) {
                return c(t)
            } : function(t) {
                return t && "function" == typeof l && t.constructor === l && t !== l.prototype ? "symbol" : c(t)
            })(t)
        }
        a(e, "__esModule", {
            value: !0
        }), e.hash = O, e.sign = function(t, e, n) {
            var r, i, s;
            if (!g.validateHexadecimal(t, 64)) throw new TypeError("secretKey of wrong type is passed. Hexadecimal expected.");
            if (r = _.hexadecimalToUint8Array(t), (0, y.isType)(n) || (0, v.isTransaction)(n)) i = n.serialize(e);
            else {
                if (void 0 !== n) throw new TypeError("Wrong type of data.");
                if (e instanceof Uint8Array) i = e;
                else {
                    if (!o(e)) throw new TypeError("Invalid data parameter.");
                    i = new Uint8Array(e)
                }
            }
            return s = d.default.sign.detached(i, r), _.uint8ArrayToHexadecimal(s)
        }, e.verifySignature = function(t, e, n, r) {
            var i, s, a;
            if (!g.validateHexadecimal(t, 64)) throw new TypeError("Signature of wrong type is passed. Hexadecimal expected.");
            if (i = _.hexadecimalToUint8Array(t), !g.validateHexadecimal(e)) throw new TypeError("publicKey of wrong type is passed. Hexadecimal expected.");
            if (s = _.hexadecimalToUint8Array(e), (0, y.isType)(r) || (0, v.isTransaction)(r)) a = r.schema.encode(n).finish();
            else {
                if (void 0 !== r) throw new TypeError("Wrong type of data.");
                n instanceof Uint8Array ? a = n : o(n) && (a = new Uint8Array(n))
            }
            return d.default.sign.detached.verify(a, i, s)
        }, e.keyPair = function() {
            var t = d.default.sign.keyPair();
            return {
                publicKey: _.uint8ArrayToHexadecimal(t.publicKey),
                secretKey: _.uint8ArrayToHexadecimal(t.secretKey)
            }
        }, e.fromSeed = function(t) {
            var e = d.default.sign.keyPair.fromSeed(t);
            return {
                publicKey: _.uint8ArrayToHexadecimal(e.publicKey),
                secretKey: _.uint8ArrayToHexadecimal(e.secretKey)
            }
        }, e.randomUint64 = function() {
            var t = d.default.randomBytes(8);
            return h.default.fromArray(r(t), 256).toString()
        }, e.publicKeyToAddress = function(t) {
            var e = {
                data: _.hexadecimalToUint8Array(t)
            };
            return O(x.encode({
                transaction_author: e
            }).finish())
        }, e.HASH_LENGTH = void 0;
        var h = w(n(278)),
            p = w(n(517)),
            d = w(n(130)),
            y = n(277),
            v = n(178),
            g = b(n(180)),
            _ = b(n(76));

        function m() {
            if ("function" != typeof s) return null;
            var t = new s;
            return m = function() {
                return t
            }, t
        }

        function b(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== f(t) && "function" != typeof t) return {
                default: t
            };
            var e = m();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                r = a && i;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var s = r ? i(t, o) : null;
                    s && (s.get || s.set) ? a(n, o, s) : n[o] = t[o]
                } return n.default = t, e && e.set(t, n), n
        }

        function w(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var x = b(n(136)).exonum.runtime.Caller;

        function O(t, e) {
            var n;
            if ((0, y.isType)(e) || (0, v.isTransaction)(e)) n = e.serialize(t);
            else {
                if (void 0 !== e) throw new TypeError("Wrong type of data.");
                if (t instanceof Uint8Array) n = t;
                else {
                    if (!o(t)) throw new TypeError("Invalid data parameter.");
                    n = new Uint8Array(t)
                }
            }
            return (0, p.default)("sha256").update(n, "utf8").digest("hex")
        }
        e.HASH_LENGTH = 32
    }, function(t, e, n) {
        var r = n(21);
        t.exports = "function" == typeof r ? function(t, e) {
            e && (t.super_ = e, t.prototype = r(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : function(t, e) {
            if (e) {
                var n = function() {};
                t.super_ = e, n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
            }
        }
    }, function(t, e, n) {
        n(4), n(2);
        var r = n(101),
            o = n(75).Buffer;

        function i(t, e) {
            this._block = o.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
        }
        i.prototype.update = function(t, e) {
            "string" == typeof t && (e = e || "utf8", t = o.from(t, e));
            for (var n = this._block, r = this._blockSize, i = t.length, s = this._len, a = 0; a < i;) {
                for (var u = s % r, c = Math.min(i - a, r - u), l = 0; l < c; l++) n[u + l] = t[a + l];
                a += c, (s += c) % r == 0 && this._update(n)
            }
            return this._len += i, this
        }, i.prototype.digest = function(t) {
            var e, n, o = this._len % this._blockSize;
            this._block[o] = 128, r(e = this._block).call(e, 0, 1 + o), o >= this._finalSize && (this._update(this._block), r(n = this._block).call(n, 0));
            var i = 8 * this._len;
            if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
            else {
                var s = (4294967295 & i) >>> 0,
                    a = (i - s) / 4294967296;
                this._block.writeUInt32BE(a, this._blockSize - 8), this._block.writeUInt32BE(s, this._blockSize - 4)
            }
            this._update(this._block);
            var u = this._hash();
            return t ? u.toString(t) : u
        }, i.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, t.exports = i
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == ("undefined" == typeof window ? "undefined" : _typeof2(window)) && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(22),
            o = n(113),
            i = n(78),
            s = n(47),
            a = n(115),
            u = n(26),
            c = n(188),
            l = Object.getOwnPropertyDescriptor;
        e.f = r ? l : function(t, e) {
            if (t = s(t), e = a(e, !0), c) try {
                return l(t, e)
            } catch (t) {}
            if (u(t, e)) return i(!o.f.call(t, e), t[e])
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (0 < t ? r : n)(t)
        }
    }, function(t, e, n) {
        var r = n(7),
            o = n(9),
            i = n(146),
            s = o("species");
        t.exports = function(t) {
            return 51 <= i || !r((function() {
                var e = [];
                return (e.constructor = {})[s] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(200),
            o = n(150);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(61);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e, n) {
        var r = n(68),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    }, function(t, e, n) {
        t.exports = n(351)
    }, function(t, e, n) {
        function r(t) {
            a(t, l, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        }
        var o = n(96),
            i = n(12),
            s = n(26),
            a = n(41).f,
            u = n(117),
            c = n(223),
            l = u("meta"),
            f = 0,
            h = Object.isExtensible || function() {
                return !0
            },
            p = t.exports = {
                REQUIRED: !1,
                fastKey: function(t, e) {
                    if (!i(t)) return "symbol" == _typeof2(t) ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!s(t, l)) {
                        if (!h(t)) return "F";
                        if (!e) return "E";
                        r(t)
                    }
                    return t[l].objectID
                },
                getWeakData: function(t, e) {
                    if (!s(t, l)) {
                        if (!h(t)) return !0;
                        if (!e) return !1;
                        r(t)
                    }
                    return t[l].weakData
                },
                onFreeze: function(t) {
                    return c && p.REQUIRED && h(t) && !s(t, l) && r(t), t
                }
            };
        o[l] = !0
    }, function(t, e) {
        t.exports = function(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        }
    }, function(t, e, n) {
        var r = n(81);
        t.exports = function(t, e, n) {
            for (var o in e) n && n.unsafe && t[o] ? t[o] = e[o] : r(t, o, e[o], n);
            return t
        }
    }, function(t, e) {}, function(t, e, n) {
        t.exports = n(370)
    }, function(t, e, n) {
        t.exports = n(384)
    }, function(t, e, n) {
        "use strict";
        var r = n(167),
            o = n(43),
            i = n(220),
            s = n(168),
            a = n(44),
            u = n(132),
            c = n(169),
            l = n(29),
            f = Math.min,
            h = [].push,
            p = "split",
            d = "length",
            y = "lastIndex",
            v = 4294967295,
            g = !l((function() {
                RegExp(v, "y")
            }));
        n(133)("split", 2, (function(t, e, n, l) {
            var _;
            return _ = "c" == "abbc" [p](/(b)*/)[1] || 4 != "test" [p](/(?:)/, -1)[d] || 2 != "ab" [p](/(?:ab)*/)[d] || 4 != "." [p](/(.?)(.?)/)[d] || 1 < "." [p](/()()/)[d] || "" [p](/.?/)[d] ? function(t, e) {
                var o = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!r(t)) return n.call(o, t, e);
                for (var i, s, a, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? v : e >>> 0, g = new RegExp(t.source, l + "g");
                    (i = c.call(g, o)) && !(f < (s = g[y]) && (u.push(o.slice(f, i.index)), 1 < i[d] && i.index < o[d] && h.apply(u, i.slice(1)), a = i[0][d], f = s, u[d] >= p));) g[y] === i.index && g[y]++;
                return f === o[d] ? !a && g.test("") || u.push("") : u.push(o.slice(f)), u[d] > p ? u.slice(0, p) : u
            } : "0" [p](void 0, 0)[d] ? function(t, e) {
                return void 0 === t && 0 === e ? [] : n.call(this, t, e)
            } : n, [function(n, r) {
                var o = t(this),
                    i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, o, r) : _.call(String(o), n, r)
            }, function(t, e) {
                var r = l(_, t, this, e, _ !== n);
                if (r.done) return r.value;
                var c = o(t),
                    h = String(this),
                    p = i(c, RegExp),
                    d = c.unicode,
                    y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (g ? "y" : "g"),
                    m = new p(g ? c : "^(?:" + c.source + ")", y),
                    b = void 0 === e ? v : e >>> 0;
                if (0 == b) return [];
                if (0 === h.length) return null === u(m, h) ? [h] : [];
                for (var w = 0, x = 0, O = []; x < h.length;) {
                    m.lastIndex = g ? x : 0;
                    var S, k = u(m, g ? h : h.slice(x));
                    if (null === k || (S = f(a(m.lastIndex + (g ? 0 : x)), h.length)) === w) x = s(h, x, d);
                    else {
                        if (O.push(h.slice(w, x)), O.length === b) return O;
                        for (var E = 1; E <= k.length - 1; E++)
                            if (O.push(k[E]), O.length === b) return O;
                        x = w = S
                    }
                }
                return O.push(h.slice(w)), O
            }]
        }))
    }, function(t, e, n) {
        t.exports = n(427)
    }, function(t, e, n) {
        var r = n(5),
            o = n(15),
            i = n(9)("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || null == (n = r(s)[i]) ? e : o(n)
        }
    }, function(t, e, n) {
        t.exports = n(557)
    }, function(t, e, n) {
        var r = n(653),
            o = n(654),
            i = n(655);
        t.exports = {
            cleanHex: r,
            pbConvert: o,
            calculateRawTxHash: i
        }
    }, function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1: 2
            }, 1);
        e.f = i ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable
        } : r
    }, function(t, e, n) {
        var r = n(7),
            o = n(63),
            i = "".split;
        t.exports = r((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    }, function(t, e, n) {
        var r = n(12);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(115),
            o = n(41),
            i = n(78);
        t.exports = function(t, e, n) {
            var s = r(e);
            s in t ? o.f(t, s, i(0, n)) : t[s] = n
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
        }
    }, function(t, e, n) {
        var r = n(144),
            o = n(117),
            i = r("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }, function(t, e, n) {
        var r = n(94),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(65),
            o = n(66),
            i = n(9)("iterator");
        t.exports = function(t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function(t, e, n) {
        t.exports = n(324)
    }, function(t, e) {
        t.exports = !1
    }, function(t, e) {
        var n = t.exports = {
            version: "2.6.11"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        var r = n(210);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(215),
            o = n(156).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(216),
            o = n(69);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        var r = n(83),
            o = n(18)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    }, function(t, e, n) {
        t.exports = n(359)
    }, function(t, e, n) {
        n(4), n(2), n(230), n(231), n(6), n(164),
            function(t) {
                "use strict";
                var e = function(t) {
                        var e, n = new Float64Array(16);
                        if (t)
                            for (e = 0; e < t.length; e++) n[e] = t[e];
                        return n
                    },
                    r = function() {
                        throw new Error("no PRNG")
                    },
                    o = new Uint8Array(16),
                    i = new Uint8Array(32);
                i[0] = 9;
                var s = e(),
                    a = e([1]),
                    u = e([56129, 1]),
                    c = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                    l = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                    f = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                    h = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                    p = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                function d(t, e, n, r) {
                    t[e] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n, t[e + 4] = r >> 24 & 255, t[e + 5] = r >> 16 & 255, t[e + 6] = r >> 8 & 255, t[e + 7] = 255 & r
                }

                function y(t, e, n, r, o) {
                    var i, s = 0;
                    for (i = 0; i < o; i++) s |= t[e + i] ^ n[r + i];
                    return (1 & s - 1 >>> 8) - 1
                }

                function v(t, e, n, r) {
                    return y(t, e, n, r, 16)
                }

                function g(t, e, n, r) {
                    return y(t, e, n, r, 32)
                }

                function _(t, e, n, r) {
                    ! function(t, e, n, r) {
                        for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, g = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, _ = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, m = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = i, x = s, O = a, S = u, k = c, E = l, P = f, A = h, j = p, T = d, B = y, R = v, L = g, I = _, N = m, C = b, U = 0; U < 20; U += 2) w ^= (o = (L ^= (o = (j ^= (o = (k ^= (o = w + L | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + k | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14, E ^= (o = (x ^= (o = (I ^= (o = (T ^= (o = E + x | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + T | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14, B ^= (o = (P ^= (o = (O ^= (o = (N ^= (o = B + P | 0) << 7 | o >>> 25) + B | 0) << 9 | o >>> 23) + N | 0) << 13 | o >>> 19) + O | 0) << 18 | o >>> 14, C ^= (o = (R ^= (o = (A ^= (o = (S ^= (o = C + R | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + S | 0) << 13 | o >>> 19) + A | 0) << 18 | o >>> 14, w ^= (o = (S ^= (o = (O ^= (o = (x ^= (o = w + S | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + x | 0) << 13 | o >>> 19) + O | 0) << 18 | o >>> 14, E ^= (o = (k ^= (o = (A ^= (o = (P ^= (o = E + k | 0) << 7 | o >>> 25) + E | 0) << 9 | o >>> 23) + P | 0) << 13 | o >>> 19) + A | 0) << 18 | o >>> 14, B ^= (o = (T ^= (o = (j ^= (o = (R ^= (o = B + T | 0) << 7 | o >>> 25) + B | 0) << 9 | o >>> 23) + R | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14, C ^= (o = (N ^= (o = (I ^= (o = (L ^= (o = C + N | 0) << 7 | o >>> 25) + C | 0) << 9 | o >>> 23) + L | 0) << 13 | o >>> 19) + I | 0) << 18 | o >>> 14;
                        w = w + i | 0, x = x + s | 0, O = O + a | 0, S = S + u | 0, k = k + c | 0, E = E + l | 0, P = P + f | 0, A = A + h | 0, j = j + p | 0, T = T + d | 0, B = B + y | 0, R = R + v | 0, L = L + g | 0, I = I + _ | 0, N = N + m | 0, C = C + b | 0, t[0] = w >>> 0 & 255, t[1] = w >>> 8 & 255, t[2] = w >>> 16 & 255, t[3] = w >>> 24 & 255, t[4] = x >>> 0 & 255, t[5] = x >>> 8 & 255, t[6] = x >>> 16 & 255, t[7] = x >>> 24 & 255, t[8] = O >>> 0 & 255, t[9] = O >>> 8 & 255, t[10] = O >>> 16 & 255, t[11] = O >>> 24 & 255, t[12] = S >>> 0 & 255, t[13] = S >>> 8 & 255, t[14] = S >>> 16 & 255, t[15] = S >>> 24 & 255, t[16] = k >>> 0 & 255, t[17] = k >>> 8 & 255, t[18] = k >>> 16 & 255, t[19] = k >>> 24 & 255, t[20] = E >>> 0 & 255, t[21] = E >>> 8 & 255, t[22] = E >>> 16 & 255, t[23] = E >>> 24 & 255, t[24] = P >>> 0 & 255, t[25] = P >>> 8 & 255, t[26] = P >>> 16 & 255, t[27] = P >>> 24 & 255, t[28] = A >>> 0 & 255, t[29] = A >>> 8 & 255, t[30] = A >>> 16 & 255, t[31] = A >>> 24 & 255, t[32] = j >>> 0 & 255, t[33] = j >>> 8 & 255, t[34] = j >>> 16 & 255, t[35] = j >>> 24 & 255, t[36] = T >>> 0 & 255, t[37] = T >>> 8 & 255, t[38] = T >>> 16 & 255, t[39] = T >>> 24 & 255, t[40] = B >>> 0 & 255, t[41] = B >>> 8 & 255, t[42] = B >>> 16 & 255, t[43] = B >>> 24 & 255, t[44] = R >>> 0 & 255, t[45] = R >>> 8 & 255, t[46] = R >>> 16 & 255, t[47] = R >>> 24 & 255, t[48] = L >>> 0 & 255, t[49] = L >>> 8 & 255, t[50] = L >>> 16 & 255, t[51] = L >>> 24 & 255, t[52] = I >>> 0 & 255, t[53] = I >>> 8 & 255, t[54] = I >>> 16 & 255, t[55] = I >>> 24 & 255, t[56] = N >>> 0 & 255, t[57] = N >>> 8 & 255, t[58] = N >>> 16 & 255, t[59] = N >>> 24 & 255, t[60] = C >>> 0 & 255, t[61] = C >>> 8 & 255, t[62] = C >>> 16 & 255, t[63] = C >>> 24 & 255
                    }(t, e, n, r)
                }

                function m(t, e, n, r) {
                    ! function(t, e, n, r) {
                        for (var o, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, p = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, d = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, y = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, g = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, _ = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, m = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, b = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, w = 0; w < 20; w += 2) i ^= (o = (g ^= (o = (p ^= (o = (c ^= (o = i + g | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + c | 0) << 13 | o >>> 19) + p | 0) << 18 | o >>> 14, l ^= (o = (s ^= (o = (_ ^= (o = (d ^= (o = l + s | 0) << 7 | o >>> 25) + l | 0) << 9 | o >>> 23) + d | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14, y ^= (o = (f ^= (o = (a ^= (o = (m ^= (o = y + f | 0) << 7 | o >>> 25) + y | 0) << 9 | o >>> 23) + m | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14, b ^= (o = (v ^= (o = (h ^= (o = (u ^= (o = b + v | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + u | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, i ^= (o = (u ^= (o = (a ^= (o = (s ^= (o = i + u | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + s | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14, l ^= (o = (c ^= (o = (h ^= (o = (f ^= (o = l + c | 0) << 7 | o >>> 25) + l | 0) << 9 | o >>> 23) + f | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14, y ^= (o = (d ^= (o = (p ^= (o = (v ^= (o = y + d | 0) << 7 | o >>> 25) + y | 0) << 9 | o >>> 23) + v | 0) << 13 | o >>> 19) + p | 0) << 18 | o >>> 14, b ^= (o = (m ^= (o = (_ ^= (o = (g ^= (o = b + m | 0) << 7 | o >>> 25) + b | 0) << 9 | o >>> 23) + g | 0) << 13 | o >>> 19) + _ | 0) << 18 | o >>> 14;
                        t[0] = i >>> 0 & 255, t[1] = i >>> 8 & 255, t[2] = i >>> 16 & 255, t[3] = i >>> 24 & 255, t[4] = l >>> 0 & 255, t[5] = l >>> 8 & 255, t[6] = l >>> 16 & 255, t[7] = l >>> 24 & 255, t[8] = y >>> 0 & 255, t[9] = y >>> 8 & 255, t[10] = y >>> 16 & 255, t[11] = y >>> 24 & 255, t[12] = b >>> 0 & 255, t[13] = b >>> 8 & 255, t[14] = b >>> 16 & 255, t[15] = b >>> 24 & 255, t[16] = f >>> 0 & 255, t[17] = f >>> 8 & 255, t[18] = f >>> 16 & 255, t[19] = f >>> 24 & 255, t[20] = h >>> 0 & 255, t[21] = h >>> 8 & 255, t[22] = h >>> 16 & 255, t[23] = h >>> 24 & 255, t[24] = p >>> 0 & 255, t[25] = p >>> 8 & 255, t[26] = p >>> 16 & 255, t[27] = p >>> 24 & 255, t[28] = d >>> 0 & 255, t[29] = d >>> 8 & 255, t[30] = d >>> 16 & 255, t[31] = d >>> 24 & 255
                    }(t, e, n, r)
                }
                var b = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                function w(t, e, n, r, o, i, s) {
                    var a, u, c = new Uint8Array(16),
                        l = new Uint8Array(64);
                    for (u = 0; u < 16; u++) c[u] = 0;
                    for (u = 0; u < 8; u++) c[u] = i[u];
                    for (; 64 <= o;) {
                        for (_(l, c, s, b), u = 0; u < 64; u++) t[e + u] = n[r + u] ^ l[u];
                        for (a = 1, u = 8; u < 16; u++) a = a + (255 & c[u]) | 0, c[u] = 255 & a, a >>>= 8;
                        o -= 64, e += 64, r += 64
                    }
                    if (0 < o)
                        for (_(l, c, s, b), u = 0; u < o; u++) t[e + u] = n[r + u] ^ l[u];
                    return 0
                }

                function x(t, e, n, r, o) {
                    var i, s, a = new Uint8Array(16),
                        u = new Uint8Array(64);
                    for (s = 0; s < 16; s++) a[s] = 0;
                    for (s = 0; s < 8; s++) a[s] = r[s];
                    for (; 64 <= n;) {
                        for (_(u, a, o, b), s = 0; s < 64; s++) t[e + s] = u[s];
                        for (i = 1, s = 8; s < 16; s++) i = i + (255 & a[s]) | 0, a[s] = 255 & i, i >>>= 8;
                        n -= 64, e += 64
                    }
                    if (0 < n)
                        for (_(u, a, o, b), s = 0; s < n; s++) t[e + s] = u[s];
                    return 0
                }

                function O(t, e, n, r, o) {
                    var i = new Uint8Array(32);
                    m(i, r, o, b);
                    for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = r[a + 16];
                    return x(t, e, n, s, i)
                }

                function S(t, e, n, r, o, i, s) {
                    var a = new Uint8Array(32);
                    m(a, i, s, b);
                    for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = i[c + 16];
                    return w(t, e, n, r, o, u, a)
                }
                var k = function(t) {
                    var e, n, r, o, i, s, a, u;
                    this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, e = 255 & t[this.fin = 0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, n = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | n << 3), r = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (n >>> 10 | r << 6), o = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (r >>> 7 | o << 9), i = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (o >>> 4 | i << 12), this.r[5] = i >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (i >>> 14 | s << 2), a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), u = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (a >>> 8 | u << 8), this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
                };

                function E(t, e, n, r, o, i) {
                    var s = new k(i);
                    return s.update(n, r, o), s.finish(t, e), 0
                }

                function P(t, e, n, r, o, i) {
                    var s = new Uint8Array(16);
                    return E(s, 0, n, r, o, i), v(t, e, s, 0)
                }

                function A(t, e, n, r, o) {
                    var i;
                    if (n < 32) return -1;
                    for (S(t, 0, e, 0, n, r, o), E(t, 16, t, 32, n - 32, t), i = 0; i < 16; i++) t[i] = 0;
                    return 0
                }

                function j(t, e, n, r, o) {
                    var i, s = new Uint8Array(32);
                    if (n < 32) return -1;
                    if (O(s, 0, 32, r, o), 0 !== P(e, 16, e, 32, n - 32, s)) return -1;
                    for (S(t, 0, e, 0, n, r, o), i = 0; i < 32; i++) t[i] = 0;
                    return 0
                }

                function T(t, e) {
                    var n;
                    for (n = 0; n < 16; n++) t[n] = 0 | e[n]
                }

                function B(t) {
                    var e, n, r = 1;
                    for (e = 0; e < 16; e++) n = t[e] + r + 65535, r = Math.floor(n / 65536), t[e] = n - 65536 * r;
                    t[0] += r - 1 + 37 * (r - 1)
                }

                function R(t, e, n) {
                    for (var r, o = ~(n - 1), i = 0; i < 16; i++) r = o & (t[i] ^ e[i]), t[i] ^= r, e[i] ^= r
                }

                function L(t, n) {
                    var r, o, i, s = e(),
                        a = e();
                    for (r = 0; r < 16; r++) a[r] = n[r];
                    for (B(a), B(a), B(a), o = 0; o < 2; o++) {
                        for (s[0] = a[0] - 65517, r = 1; r < 15; r++) s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
                        s[15] = a[15] - 32767 - (s[14] >> 16 & 1), i = s[15] >> 16 & 1, s[14] &= 65535, R(a, s, 1 - i)
                    }
                    for (r = 0; r < 16; r++) t[2 * r] = 255 & a[r], t[2 * r + 1] = a[r] >> 8
                }

                function I(t, e) {
                    var n = new Uint8Array(32),
                        r = new Uint8Array(32);
                    return L(n, t), L(r, e), g(n, 0, r, 0)
                }

                function N(t) {
                    var e = new Uint8Array(32);
                    return L(e, t), 1 & e[0]
                }

                function C(t, e) {
                    var n;
                    for (n = 0; n < 16; n++) t[n] = e[2 * n] + (e[2 * n + 1] << 8);
                    t[15] &= 32767
                }

                function U(t, e, n) {
                    for (var r = 0; r < 16; r++) t[r] = e[r] + n[r]
                }

                function M(t, e, n) {
                    for (var r = 0; r < 16; r++) t[r] = e[r] - n[r]
                }

                function H(t, e, n) {
                    var r, o, i = 0,
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
                    i += (r = e[0]) * C, s += r * U, a += r * M, u += r * H, c += r * D, l += r * V, f += r * F, h += r * K, p += r * q, d += r * z, y += r * J, v += r * X, g += r * W, _ += r * Y, m += r * G, b += r * Z, s += (r = e[1]) * C, a += r * U, u += r * M, c += r * H, l += r * D, f += r * V, h += r * F, p += r * K, d += r * q, y += r * z, v += r * J, g += r * X, _ += r * W, m += r * Y, b += r * G, w += r * Z, a += (r = e[2]) * C, u += r * U, c += r * M, l += r * H, f += r * D, h += r * V, p += r * F, d += r * K, y += r * q, v += r * z, g += r * J, _ += r * X, m += r * W, b += r * Y, w += r * G, x += r * Z, u += (r = e[3]) * C, c += r * U, l += r * M, f += r * H, h += r * D, p += r * V, d += r * F, y += r * K, v += r * q, g += r * z, _ += r * J, m += r * X, b += r * W, w += r * Y, x += r * G, O += r * Z, c += (r = e[4]) * C, l += r * U, f += r * M, h += r * H, p += r * D, d += r * V, y += r * F, v += r * K, g += r * q, _ += r * z, m += r * J, b += r * X, w += r * W, x += r * Y, O += r * G, S += r * Z, l += (r = e[5]) * C, f += r * U, h += r * M, p += r * H, d += r * D, y += r * V, v += r * F, g += r * K, _ += r * q, m += r * z, b += r * J, w += r * X, x += r * W, O += r * Y, S += r * G, k += r * Z, f += (r = e[6]) * C, h += r * U, p += r * M, d += r * H, y += r * D, v += r * V, g += r * F, _ += r * K, m += r * q, b += r * z, w += r * J, x += r * X, O += r * W, S += r * Y, k += r * G, E += r * Z, h += (r = e[7]) * C, p += r * U, d += r * M, y += r * H, v += r * D, g += r * V, _ += r * F, m += r * K, b += r * q, w += r * z, x += r * J, O += r * X, S += r * W, k += r * Y, E += r * G, P += r * Z, p += (r = e[8]) * C, d += r * U, y += r * M, v += r * H, g += r * D, _ += r * V, m += r * F, b += r * K, w += r * q, x += r * z, O += r * J, S += r * X, k += r * W, E += r * Y, P += r * G, A += r * Z, d += (r = e[9]) * C, y += r * U, v += r * M, g += r * H, _ += r * D, m += r * V, b += r * F, w += r * K, x += r * q, O += r * z, S += r * J, k += r * X, E += r * W, P += r * Y, A += r * G, j += r * Z, y += (r = e[10]) * C, v += r * U, g += r * M, _ += r * H, m += r * D, b += r * V, w += r * F, x += r * K, O += r * q, S += r * z, k += r * J, E += r * X, P += r * W, A += r * Y, j += r * G, T += r * Z, v += (r = e[11]) * C, g += r * U, _ += r * M, m += r * H, b += r * D, w += r * V, x += r * F, O += r * K, S += r * q, k += r * z, E += r * J, P += r * X, A += r * W, j += r * Y, T += r * G, B += r * Z, g += (r = e[12]) * C, _ += r * U, m += r * M, b += r * H, w += r * D, x += r * V, O += r * F, S += r * K, k += r * q, E += r * z, P += r * J, A += r * X, j += r * W, T += r * Y, B += r * G, R += r * Z, _ += (r = e[13]) * C, m += r * U, b += r * M, w += r * H, x += r * D, O += r * V, S += r * F, k += r * K, E += r * q, P += r * z, A += r * J, j += r * X, T += r * W, B += r * Y, R += r * G, L += r * Z, m += (r = e[14]) * C, b += r * U, w += r * M, x += r * H, O += r * D, S += r * V, k += r * F, E += r * K, P += r * q, A += r * z, j += r * J, T += r * X, B += r * W, R += r * Y, L += r * G, I += r * Z, b += (r = e[15]) * C, s += 38 * (x += r * M), a += 38 * (O += r * H), u += 38 * (S += r * D), c += 38 * (k += r * V), l += 38 * (E += r * F), f += 38 * (P += r * K), h += 38 * (A += r * q), p += 38 * (j += r * z), d += 38 * (T += r * J), y += 38 * (B += r * X), v += 38 * (R += r * W), g += 38 * (L += r * Y), _ += 38 * (I += r * G), m += 38 * (N += r * Z), i = (r = (i += 38 * (w += r * U)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i = (r = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536)), s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536)), a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536)), u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536)), c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536)), l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536)), f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536)), h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536)), p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536)), d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536)), y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536)), v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536)), g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536)), _ = (r = _ + o + 65535) - 65536 * (o = Math.floor(r / 65536)), m = (r = m + o + 65535) - 65536 * (o = Math.floor(r / 65536)), b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536)), i += o - 1 + 37 * (o - 1), t[0] = i, t[1] = s, t[2] = a, t[3] = u, t[4] = c, t[5] = l, t[6] = f, t[7] = h, t[8] = p, t[9] = d, t[10] = y, t[11] = v, t[12] = g, t[13] = _, t[14] = m, t[15] = b
                }

                function D(t, e) {
                    H(t, e, e)
                }

                function V(t, n) {
                    var r, o = e();
                    for (r = 0; r < 16; r++) o[r] = n[r];
                    for (r = 253; 0 <= r; r--) D(o, o), 2 !== r && 4 !== r && H(o, o, n);
                    for (r = 0; r < 16; r++) t[r] = o[r]
                }

                function F(t, n, r) {
                    var o, i, s = new Uint8Array(32),
                        a = new Float64Array(80),
                        c = e(),
                        l = e(),
                        f = e(),
                        h = e(),
                        p = e(),
                        d = e();
                    for (i = 0; i < 31; i++) s[i] = n[i];
                    for (s[31] = 127 & n[31] | 64, s[0] &= 248, C(a, r), i = 0; i < 16; i++) l[i] = a[i], h[i] = c[i] = f[i] = 0;
                    for (c[0] = h[0] = 1, i = 254; 0 <= i; --i) R(c, l, o = s[i >>> 3] >>> (7 & i) & 1), R(f, h, o), U(p, c, f), M(c, c, f), U(f, l, h), M(l, l, h), D(h, p), D(d, c), H(c, f, c), H(f, l, p), U(p, c, f), M(c, c, f), D(l, c), M(f, h, d), H(c, f, u), U(c, c, h), H(f, f, c), H(c, h, d), H(h, l, a), D(l, p), R(c, l, o), R(f, h, o);
                    for (i = 0; i < 16; i++) a[i + 16] = c[i], a[i + 32] = f[i], a[i + 48] = l[i], a[i + 64] = h[i];
                    var y = a.subarray(32),
                        v = a.subarray(16);
                    return V(y, y), H(v, v, y), L(t, v), 0
                }

                function K(t, e) {
                    return F(t, e, i)
                }

                function q(t, e) {
                    return r(e, 32), K(t, e)
                }

                function z(t, e, n) {
                    var r = new Uint8Array(32);
                    return F(r, n, e), m(t, o, r, b)
                }
                k.prototype.blocks = function(t, e, n) {
                    for (var r, o, i, s, a, u, c, l, f, h, p, d, y, v, g, _, m, b, w, x = this.fin ? 0 : 2048, O = this.h[0], S = this.h[1], k = this.h[2], E = this.h[3], P = this.h[4], A = this.h[5], j = this.h[6], T = this.h[7], B = this.h[8], R = this.h[9], L = this.r[0], I = this.r[1], N = this.r[2], C = this.r[3], U = this.r[4], M = this.r[5], H = this.r[6], D = this.r[7], V = this.r[8], F = this.r[9]; 16 <= n;) h = f = 0, h += (O += 8191 & (r = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * L, h += (S += 8191 & (r >>> 13 | (o = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * F), h += (k += 8191 & (o >>> 10 | (i = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * V), h += (E += 8191 & (i >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * D), f = (h += (P += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * H)) >>> 13, h &= 8191, h += (A += a >>> 1 & 8191) * (5 * M), h += (j += 8191 & (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * U), h += (T += 8191 & (u >>> 11 | (c = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * C), h += (B += 8191 & (c >>> 8 | (l = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * N), p = f += (h += (R += l >>> 5 | x) * (5 * I)) >>> 13, p += O * I, p += S * L, p += k * (5 * F), p += E * (5 * V), f = (p += P * (5 * D)) >>> 13, p &= 8191, p += A * (5 * H), p += j * (5 * M), p += T * (5 * U), p += B * (5 * C), f += (p += R * (5 * N)) >>> 13, p &= 8191, d = f, d += O * N, d += S * I, d += k * L, d += E * (5 * F), f = (d += P * (5 * V)) >>> 13, d &= 8191, d += A * (5 * D), d += j * (5 * H), d += T * (5 * M), d += B * (5 * U), y = f += (d += R * (5 * C)) >>> 13, y += O * C, y += S * N, y += k * I, y += E * L, f = (y += P * (5 * F)) >>> 13, y &= 8191, y += A * (5 * V), y += j * (5 * D), y += T * (5 * H), y += B * (5 * M), v = f += (y += R * (5 * U)) >>> 13, v += O * U, v += S * C, v += k * N, v += E * I, f = (v += P * L) >>> 13, v &= 8191, v += A * (5 * F), v += j * (5 * V), v += T * (5 * D), v += B * (5 * H), g = f += (v += R * (5 * M)) >>> 13, g += O * M, g += S * U, g += k * C, g += E * N, f = (g += P * I) >>> 13, g &= 8191, g += A * L, g += j * (5 * F), g += T * (5 * V), g += B * (5 * D), _ = f += (g += R * (5 * H)) >>> 13, _ += O * H, _ += S * M, _ += k * U, _ += E * C, f = (_ += P * N) >>> 13, _ &= 8191, _ += A * I, _ += j * L, _ += T * (5 * F), _ += B * (5 * V), m = f += (_ += R * (5 * D)) >>> 13, m += O * D, m += S * H, m += k * M, m += E * U, f = (m += P * C) >>> 13, m &= 8191, m += A * N, m += j * I, m += T * L, m += B * (5 * F), b = f += (m += R * (5 * V)) >>> 13, b += O * V, b += S * D, b += k * H, b += E * M, f = (b += P * U) >>> 13, b &= 8191, b += A * C, b += j * N, b += T * I, b += B * L, w = f += (b += R * (5 * F)) >>> 13, w += O * F, w += S * V, w += k * D, w += E * H, f = (w += P * M) >>> 13, w &= 8191, w += A * U, w += j * C, w += T * N, w += B * I, O = h = 8191 & (f = (f = ((f += (w += R * L) >>> 13) << 2) + f | 0) + (h &= 8191) | 0), S = p += f >>>= 13, k = d &= 8191, E = y &= 8191, P = v &= 8191, A = g &= 8191, j = _ &= 8191, T = m &= 8191, B = b &= 8191, R = w &= 8191, e += 16, n -= 16;
                    this.h[0] = O, this.h[1] = S, this.h[2] = k, this.h[3] = E, this.h[4] = P, this.h[5] = A, this.h[6] = j, this.h[7] = T, this.h[8] = B, this.h[9] = R
                }, k.prototype.finish = function(t, e) {
                    var n, r, o, i, s = new Uint16Array(10);
                    if (this.leftover) {
                        for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++) this.buffer[i] = 0;
                        this.fin = 1, this.blocks(this.buffer, 0, 16)
                    }
                    for (n = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++) this.h[i] += n, n = this.h[i] >>> 13, this.h[i] &= 8191;
                    for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, s[0] = this.h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, i = 1; i < 10; i++) s[i] = this.h[i] + n, n = s[i] >>> 13, s[i] &= 8191;
                    for (s[9] -= 8192, r = (1 ^ n) - 1, i = 0; i < 10; i++) s[i] &= r;
                    for (r = ~r, i = 0; i < 10; i++) this.h[i] = this.h[i] & r | s[i];
                    for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), o = this.h[0] + this.pad[0], this.h[0] = 65535 & o, i = 1; i < 8; i++) o = (this.h[i] + this.pad[i] | 0) + (o >>> 16) | 0, this.h[i] = 65535 & o;
                    t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255
                }, k.prototype.update = function(t, e, n) {
                    var r, o;
                    if (this.leftover) {
                        for (n < (o = 16 - this.leftover) && (o = n), r = 0; r < o; r++) this.buffer[this.leftover + r] = t[e + r];
                        if (n -= o, e += o, this.leftover += o, this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16), this.leftover = 0
                    }
                    if (16 <= n && (o = n - n % 16, this.blocks(t, e, o), e += o, n -= o), n) {
                        for (r = 0; r < n; r++) this.buffer[this.leftover + r] = t[e + r];
                        this.leftover += n
                    }
                };
                var J = A,
                    X = j,
                    W = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                function Y(t, e, n, r) {
                    for (var o, i, s, a, u, c, l, f, h, p, d, y, v, g, _, m, b, w, x, O, S, k, E, P, A = new Int32Array(16), j = new Int32Array(16), T = t[0], B = t[1], R = t[2], L = t[3], I = t[4], N = t[5], C = t[6], U = t[7], M = e[0], H = e[1], D = e[2], V = e[3], F = e[4], K = e[5], q = e[6], z = e[7], J = 0; 128 <= r;) {
                        for (b = 0; b < 16; b++) w = 8 * b + J, A[b] = n[w + 0] << 24 | n[w + 1] << 16 | n[w + 2] << 8 | n[w + 3], j[b] = n[w + 4] << 24 | n[w + 5] << 16 | n[w + 6] << 8 | n[w + 7];
                        for (b = 0; b < 80; b++)
                            if (o = B, i = R, s = L, f = H, h = D, p = V, S = 65535 & (O = z), k = O >>> 16, E = 65535 & (x = U), P = x >>> 16, S += 65535 & (O = ((d = F) >>> 14 | (a = I) << 18) ^ (F >>> 18 | I << 14) ^ (I >>> 9 | F << 23)), k += O >>> 16, E += 65535 & (x = (I >>> 14 | F << 18) ^ (I >>> 18 | F << 14) ^ (F >>> 9 | I << 23)), P += x >>> 16, S += 65535 & (O = F & (y = K) ^ ~F & (v = q)), k += O >>> 16, E += 65535 & (x = I & (u = N) ^ ~I & (c = C)), P += x >>> 16, S += 65535 & (O = W[2 * b + 1]), k += O >>> 16, E += 65535 & (x = W[2 * b]), P += x >>> 16, x = A[b % 16], k += (O = j[b % 16]) >>> 16, E += 65535 & x, P += x >>> 16, E += (k += (S += 65535 & O) >>> 16) >>> 16, S = 65535 & (O = m = 65535 & S | k << 16), k = O >>> 16, E = 65535 & (x = _ = 65535 & E | (P += E >>> 16) << 16), P = x >>> 16, S += 65535 & (O = (M >>> 28 | T << 4) ^ (T >>> 2 | M << 30) ^ (T >>> 7 | M << 25)), k += O >>> 16, E += 65535 & (x = (T >>> 28 | M << 4) ^ (M >>> 2 | T << 30) ^ (M >>> 7 | T << 25)), P += x >>> 16, k += (O = M & H ^ M & D ^ H & D) >>> 16, E += 65535 & (x = T & B ^ T & R ^ B & R), P += x >>> 16, l = 65535 & (E += (k += (S += 65535 & O) >>> 16) >>> 16) | (P += E >>> 16) << 16, g = 65535 & S | k << 16, S = 65535 & (O = p), k = O >>> 16, E = 65535 & (x = s), P = x >>> 16, k += (O = m) >>> 16, E += 65535 & (x = _), P += x >>> 16, B = T, R = o, L = i, I = s = 65535 & (E += (k += (S += 65535 & O) >>> 16) >>> 16) | (P += E >>> 16) << 16, N = a, C = u, U = c, T = l, H = M, D = f, V = h, F = p = 65535 & S | k << 16, K = d, q = y, z = v, M = g, b % 16 == 15)
                                for (w = 0; w < 16; w++) x = A[w], S = 65535 & (O = j[w]), k = O >>> 16, E = 65535 & x, P = x >>> 16, x = A[(w + 9) % 16], S += 65535 & (O = j[(w + 9) % 16]), k += O >>> 16, E += 65535 & x, P += x >>> 16, _ = A[(w + 1) % 16], S += 65535 & (O = ((m = j[(w + 1) % 16]) >>> 1 | _ << 31) ^ (m >>> 8 | _ << 24) ^ (m >>> 7 | _ << 25)), k += O >>> 16, E += 65535 & (x = (_ >>> 1 | m << 31) ^ (_ >>> 8 | m << 24) ^ _ >>> 7), P += x >>> 16, _ = A[(w + 14) % 16], k += (O = ((m = j[(w + 14) % 16]) >>> 19 | _ << 13) ^ (_ >>> 29 | m << 3) ^ (m >>> 6 | _ << 26)) >>> 16, E += 65535 & (x = (_ >>> 19 | m << 13) ^ (m >>> 29 | _ << 3) ^ _ >>> 6), P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, A[w] = 65535 & E | P << 16, j[w] = 65535 & S | k << 16;
                        S = 65535 & (O = M), k = O >>> 16, E = 65535 & (x = T), P = x >>> 16, x = t[0], k += (O = e[0]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[0] = T = 65535 & E | P << 16, e[0] = M = 65535 & S | k << 16, S = 65535 & (O = H), k = O >>> 16, E = 65535 & (x = B), P = x >>> 16, x = t[1], k += (O = e[1]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[1] = B = 65535 & E | P << 16, e[1] = H = 65535 & S | k << 16, S = 65535 & (O = D), k = O >>> 16, E = 65535 & (x = R), P = x >>> 16, x = t[2], k += (O = e[2]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[2] = R = 65535 & E | P << 16, e[2] = D = 65535 & S | k << 16, S = 65535 & (O = V), k = O >>> 16, E = 65535 & (x = L), P = x >>> 16, x = t[3], k += (O = e[3]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[3] = L = 65535 & E | P << 16, e[3] = V = 65535 & S | k << 16, S = 65535 & (O = F), k = O >>> 16, E = 65535 & (x = I), P = x >>> 16, x = t[4], k += (O = e[4]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[4] = I = 65535 & E | P << 16, e[4] = F = 65535 & S | k << 16, S = 65535 & (O = K), k = O >>> 16, E = 65535 & (x = N), P = x >>> 16, x = t[5], k += (O = e[5]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[5] = N = 65535 & E | P << 16, e[5] = K = 65535 & S | k << 16, S = 65535 & (O = q), k = O >>> 16, E = 65535 & (x = C), P = x >>> 16, x = t[6], k += (O = e[6]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[6] = C = 65535 & E | P << 16, e[6] = q = 65535 & S | k << 16, S = 65535 & (O = z), k = O >>> 16, E = 65535 & (x = U), P = x >>> 16, x = t[7], k += (O = e[7]) >>> 16, E += 65535 & x, P += x >>> 16, P += (E += (k += (S += 65535 & O) >>> 16) >>> 16) >>> 16, t[7] = U = 65535 & E | P << 16, e[7] = z = 65535 & S | k << 16, J += 128, r -= 128
                    }
                    return r
                }

                function G(t, e, n) {
                    var r, o = new Int32Array(8),
                        i = new Int32Array(8),
                        s = new Uint8Array(256),
                        a = n;
                    for (o[0] = 1779033703, o[1] = 3144134277, o[2] = 1013904242, o[3] = 2773480762, o[4] = 1359893119, o[5] = 2600822924, o[6] = 528734635, o[7] = 1541459225, i[0] = 4089235720, i[1] = 2227873595, i[2] = 4271175723, i[3] = 1595750129, i[4] = 2917565137, i[5] = 725511199, i[6] = 4215389547, i[7] = 327033209, Y(o, i, e, n), n %= 128, r = 0; r < n; r++) s[r] = e[a - n + r];
                    for (s[n] = 128, s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, d(s, n - 8, a / 536870912 | 0, a << 3), Y(o, i, s, n), r = 0; r < 8; r++) d(t, 8 * r, o[r], i[r]);
                    return 0
                }

                function Z(t, n) {
                    var r = e(),
                        o = e(),
                        i = e(),
                        s = e(),
                        a = e(),
                        u = e(),
                        c = e(),
                        f = e(),
                        h = e();
                    M(r, t[1], t[0]), M(h, n[1], n[0]), H(r, r, h), U(o, t[0], t[1]), U(h, n[0], n[1]), H(o, o, h), H(i, t[3], n[3]), H(i, i, l), H(s, t[2], n[2]), U(s, s, s), M(a, o, r), M(u, s, i), U(c, s, i), U(f, o, r), H(t[0], a, u), H(t[1], f, c), H(t[2], c, u), H(t[3], a, f)
                }

                function $(t, e, n) {
                    var r;
                    for (r = 0; r < 4; r++) R(t[r], e[r], n)
                }

                function Q(t, n) {
                    var r = e(),
                        o = e(),
                        i = e();
                    V(i, n[2]), H(r, n[0], i), H(o, n[1], i), L(t, o), t[31] ^= N(r) << 7
                }

                function tt(t, e, n) {
                    var r, o;
                    for (T(t[0], s), T(t[1], a), T(t[2], a), T(t[3], s), o = 255; 0 <= o; --o) $(t, e, r = n[o / 8 | 0] >> (7 & o) & 1), Z(e, t), Z(t, t), $(t, e, r)
                }

                function et(t, n) {
                    var r = [e(), e(), e(), e()];
                    T(r[0], f), T(r[1], h), T(r[2], a), H(r[3], f, h), tt(t, r, n)
                }

                function nt(t, n, o) {
                    var i, s = new Uint8Array(64),
                        a = [e(), e(), e(), e()];
                    for (o || r(n, 32), G(s, n, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, et(a, s), Q(t, a), i = 0; i < 32; i++) n[i + 32] = t[i];
                    return 0
                }
                var rt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                function ot(t, e) {
                    var n, r, o, i;
                    for (r = 63; 32 <= r; --r) {
                        for (n = 0, o = r - 32, i = r - 12; o < i; ++o) e[o] += n - 16 * e[r] * rt[o - (r - 32)], n = e[o] + 128 >> 8, e[o] -= 256 * n;
                        e[o] += n, e[r] = 0
                    }
                    for (o = n = 0; o < 32; o++) e[o] += n - (e[31] >> 4) * rt[o], n = e[o] >> 8, e[o] &= 255;
                    for (o = 0; o < 32; o++) e[o] -= n * rt[o];
                    for (r = 0; r < 32; r++) e[r + 1] += e[r] >> 8, t[r] = 255 & e[r]
                }

                function it(t) {
                    var e, n = new Float64Array(64);
                    for (e = 0; e < 64; e++) n[e] = t[e];
                    for (e = 0; e < 64; e++) t[e] = 0;
                    ot(t, n)
                }

                function st(t, n, r, o) {
                    var i, s, a = new Uint8Array(64),
                        u = new Uint8Array(64),
                        c = new Uint8Array(64),
                        l = new Float64Array(64),
                        f = [e(), e(), e(), e()];
                    G(a, o, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
                    var h = r + 64;
                    for (i = 0; i < r; i++) t[64 + i] = n[i];
                    for (i = 0; i < 32; i++) t[32 + i] = a[32 + i];
                    for (G(c, t.subarray(32), r + 32), it(c), et(f, c), Q(t, f), i = 32; i < 64; i++) t[i] = o[i];
                    for (G(u, t, r + 64), it(u), i = 0; i < 64; i++) l[i] = 0;
                    for (i = 0; i < 32; i++) l[i] = c[i];
                    for (i = 0; i < 32; i++)
                        for (s = 0; s < 32; s++) l[i + s] += u[i] * a[s];
                    return ot(t.subarray(32), l), h
                }

                function at(t, n, r, o) {
                    var i, u = new Uint8Array(32),
                        l = new Uint8Array(64),
                        f = [e(), e(), e(), e()],
                        h = [e(), e(), e(), e()];
                    if (r < 64) return -1;
                    if (function(t, n) {
                            var r = e(),
                                o = e(),
                                i = e(),
                                u = e(),
                                l = e(),
                                f = e(),
                                h = e();
                            if (T(t[2], a), C(t[1], n), D(i, t[1]), H(u, i, c), M(i, i, t[2]), U(u, t[2], u), D(l, u), D(f, l), H(h, f, l), H(r, h, i), H(r, r, u), function(t, n) {
                                    var r, o = e();
                                    for (r = 0; r < 16; r++) o[r] = n[r];
                                    for (r = 250; 0 <= r; r--) D(o, o), 1 !== r && H(o, o, n);
                                    for (r = 0; r < 16; r++) t[r] = o[r]
                                }(r, r), H(r, r, i), H(r, r, u), H(r, r, u), H(t[0], r, u), D(o, t[0]), H(o, o, u), I(o, i) && H(t[0], t[0], p), D(o, t[0]), H(o, o, u), I(o, i)) return 1;
                            N(t[0]) === n[31] >> 7 && M(t[0], s, t[0]), H(t[3], t[0], t[1])
                        }(h, o)) return -1;
                    for (i = 0; i < r; i++) t[i] = n[i];
                    for (i = 0; i < 32; i++) t[i + 32] = o[i];
                    if (G(l, t, r), it(l), tt(f, h, l), et(h, n.subarray(32)), Z(f, h), Q(u, f), r -= 64, g(n, 0, u, 0)) {
                        for (i = 0; i < r; i++) t[i] = 0;
                        return -1
                    }
                    for (i = 0; i < r; i++) t[i] = n[i + 64];
                    return r
                }

                function ut(t, e) {
                    if (32 !== t.length) throw new Error("bad key size");
                    if (24 !== e.length) throw new Error("bad nonce size")
                }

                function ct() {
                    var t, e;
                    for (e = 0; e < arguments.length; e++)
                        if ("[object Uint8Array]" !== (t = Object.prototype.toString.call(arguments[e]))) throw new TypeError("unexpected type " + t + ", use Uint8Array")
                }

                function lt(t) {
                    for (var e = 0; e < t.length; e++) t[e] = 0
                }
                t.lowlevel = {
                        crypto_core_hsalsa20: m,
                        crypto_stream_xor: S,
                        crypto_stream: O,
                        crypto_stream_salsa20_xor: w,
                        crypto_stream_salsa20: x,
                        crypto_onetimeauth: E,
                        crypto_onetimeauth_verify: P,
                        crypto_verify_16: v,
                        crypto_verify_32: g,
                        crypto_secretbox: A,
                        crypto_secretbox_open: j,
                        crypto_scalarmult: F,
                        crypto_scalarmult_base: K,
                        crypto_box_beforenm: z,
                        crypto_box_afternm: J,
                        crypto_box: function(t, e, n, r, o, i) {
                            var s = new Uint8Array(32);
                            return z(s, o, i), J(t, e, n, r, s)
                        },
                        crypto_box_open: function(t, e, n, r, o, i) {
                            var s = new Uint8Array(32);
                            return z(s, o, i), X(t, e, n, r, s)
                        },
                        crypto_box_keypair: q,
                        crypto_hash: G,
                        crypto_sign: st,
                        crypto_sign_keypair: nt,
                        crypto_sign_open: at,
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
                    }, t.util || (t.util = {}, t.util.decodeUTF8 = t.util.encodeUTF8 = t.util.encodeBase64 = t.util.decodeBase64 = function() {
                        throw new Error("nacl.util moved into separate package: https://github.com/dchest/tweetnacl-util-js")
                    }), t.randomBytes = function(t) {
                        var e = new Uint8Array(t);
                        return r(e, t), e
                    }, t.secretbox = function(t, e, n) {
                        ct(t, e, n), ut(n, e);
                        for (var r = new Uint8Array(32 + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + 32] = t[i];
                        return A(o, r, r.length, e, n), o.subarray(16)
                    }, t.secretbox.open = function(t, e, n) {
                        ct(t, e, n), ut(n, e);
                        for (var r = new Uint8Array(16 + t.length), o = new Uint8Array(r.length), i = 0; i < t.length; i++) r[i + 16] = t[i];
                        return !(r.length < 32) && 0 === j(o, r, r.length, e, n) && o.subarray(32)
                    }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = 16, t.scalarMult = function(t, e) {
                        if (ct(t, e), 32 !== t.length) throw new Error("bad n size");
                        if (32 !== e.length) throw new Error("bad p size");
                        var n = new Uint8Array(32);
                        return F(n, t, e), n
                    }, t.scalarMult.base = function(t) {
                        if (ct(t), 32 !== t.length) throw new Error("bad n size");
                        var e = new Uint8Array(32);
                        return K(e, t), e
                    }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function(e, n, r, o) {
                        var i = t.box.before(r, o);
                        return t.secretbox(e, n, i)
                    }, t.box.before = function(t, e) {
                        ct(t, e),
                            function(t, e) {
                                if (32 !== t.length) throw new Error("bad public key size");
                                if (32 !== e.length) throw new Error("bad secret key size")
                            }(t, e);
                        var n = new Uint8Array(32);
                        return z(n, t, e), n
                    }, t.box.after = t.secretbox, t.box.open = function(e, n, r, o) {
                        var i = t.box.before(r, o);
                        return t.secretbox.open(e, n, i)
                    }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                        var t = new Uint8Array(32),
                            e = new Uint8Array(32);
                        return q(t, e), {
                            publicKey: t,
                            secretKey: e
                        }
                    }, t.box.keyPair.fromSecretKey = function(t) {
                        if (ct(t), 32 !== t.length) throw new Error("bad secret key size");
                        var e = new Uint8Array(32);
                        return K(e, t), {
                            publicKey: e,
                            secretKey: new Uint8Array(t)
                        }
                    }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(t, e) {
                        if (ct(t, e), 64 !== e.length) throw new Error("bad secret key size");
                        var n = new Uint8Array(64 + t.length);
                        return st(n, t, t.length, e), n
                    }, t.sign.open = function(t, e) {
                        if (2 !== arguments.length) throw new Error("nacl.sign.open accepts 2 arguments; did you mean to use nacl.sign.detached.verify?");
                        if (ct(t, e), 32 !== e.length) throw new Error("bad public key size");
                        var n = new Uint8Array(t.length),
                            r = at(n, t, t.length, e);
                        if (r < 0) return null;
                        for (var o = new Uint8Array(r), i = 0; i < o.length; i++) o[i] = n[i];
                        return o
                    }, t.sign.detached = function(e, n) {
                        for (var r = t.sign(e, n), o = new Uint8Array(64), i = 0; i < o.length; i++) o[i] = r[i];
                        return o
                    }, t.sign.detached.verify = function(t, e, n) {
                        if (ct(t, e, n), 64 !== e.length) throw new Error("bad signature size");
                        if (32 !== n.length) throw new Error("bad public key size");
                        var r, o = new Uint8Array(64 + t.length),
                            i = new Uint8Array(64 + t.length);
                        for (r = 0; r < 64; r++) o[r] = e[r];
                        for (r = 0; r < t.length; r++) o[r + 64] = t[r];
                        return 0 <= at(i, o, o.length, n)
                    }, t.sign.keyPair = function() {
                        var t = new Uint8Array(32),
                            e = new Uint8Array(64);
                        return nt(t, e), {
                            publicKey: t,
                            secretKey: e
                        }
                    }, t.sign.keyPair.fromSecretKey = function(t) {
                        if (ct(t), 64 !== t.length) throw new Error("bad secret key size");
                        for (var e = new Uint8Array(32), n = 0; n < e.length; n++) e[n] = t[32 + n];
                        return {
                            publicKey: e,
                            secretKey: new Uint8Array(t)
                        }
                    }, t.sign.keyPair.fromSeed = function(t) {
                        if (ct(t), 32 !== t.length) throw new Error("bad seed size");
                        for (var e = new Uint8Array(32), n = new Uint8Array(64), r = 0; r < 32; r++) n[r] = t[r];
                        return nt(e, n, !0), {
                            publicKey: e,
                            secretKey: n
                        }
                    }, t.sign.publicKeyLength = 32, t.sign.secretKeyLength = 64, t.sign.seedLength = 32, t.sign.signatureLength = 64, t.hash = function(t) {
                        ct(t);
                        var e = new Uint8Array(64);
                        return G(e, t, t.length), e
                    }, t.hash.hashLength = 64, t.verify = function(t, e) {
                        return ct(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === y(t, 0, e, 0, t.length)
                    }, t.setPRNG = function(t) {
                        r = t
                    },
                    function() {
                        var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                        e && e.getRandomValues ? t.setPRNG((function(t, n) {
                            var r, o = new Uint8Array(n);
                            for (r = 0; r < n; r += 65536) e.getRandomValues(o.subarray(r, r + Math.min(n - r, 65536)));
                            for (r = 0; r < n; r++) t[r] = o[r];
                            lt(o)
                        })) : (e = n(382)) && e.randomBytes && t.setPRNG((function(t, n) {
                            var r, o = e.randomBytes(n);
                            for (r = 0; r < n; r++) t[r] = o[r];
                            lt(o)
                        }))
                    }()
            }(t.exports ? t.exports : self.nacl = self.nacl || {})
    }, function(t, e, n) {
        "use strict";
        var r = n(43);
        t.exports = function() {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(128),
            o = RegExp.prototype.exec;
        t.exports = function(t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != _typeof2(i)) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, e)
        }
    }, function(t, e, n) {
        "use strict";
        n(387);
        var r = n(58),
            o = n(50),
            i = n(29),
            s = n(69),
            a = n(18),
            u = n(169),
            c = a("species"),
            l = !i((function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })),
            f = function() {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments)
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        t.exports = function(t, e, n) {
            var h = a(t),
                p = !i((function() {
                    var e = {};
                    return e[h] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                d = p ? !i((function() {
                    var e = !1,
                        n = /a/;
                    return n.exec = function() {
                        return e = !0, null
                    }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                        return n
                    }), n[h](""), !e
                })) : void 0;
            if (!p || !d || "replace" === t && !l || "split" === t && !f) {
                var y = /./ [h],
                    v = n(s, h, "" [t], (function(t, e, n, r, o) {
                        return e.exec === u ? p && !o ? {
                            done: !0,
                            value: y.call(e, n, r)
                        } : {
                            done: !0,
                            value: t.call(n, e, r)
                        } : {
                            done: !1
                        }
                    })),
                    g = v[0],
                    _ = v[1];
                r(String.prototype, t, g), o(RegExp.prototype, h, 2 == e ? function(t, e) {
                    return _.call(t, this, e)
                } : function(t) {
                    return _.call(t, this)
                })
            }
        }
    }, function(t, e, n) {
        var r = n(9);
        e.f = r
    }, function(t, e, n) {
        t.exports = n(443)
    }, function(t, e, n) {
        var r, o, i, s = n(137);
        n(86), n(62);
        var a = n(14),
            u = n(27),
            c = n(10);
        n(138), n(4), n(2);
        var l = n(31);
        n(87);
        var f = n(46),
            h = n(13);
        o = [n(496)], void 0 === (i = "function" == typeof(r = function(t) {
            "use strict";
            var e = t.Reader,
                n = t.Writer,
                r = t.util,
                o = t.roots.default || (t.roots.default = {});
            return o.exonum = function() {
                var i, p, d, y, v, g, _ = {};

                function m(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function b(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function w(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function x(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function O(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function S(t) {
                    if (this.validator_keys = [], t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function k(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function E(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function P(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function A(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function j(t) {
                    if (this.entries = [], t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function T(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function B(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function R(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function L(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function I(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function N(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function C(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function U(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function M(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function H(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }
                return _.AdditionalHeaders = (m.prototype.headers = null, m.create = function(t) {
                    return new m(t)
                }, m.encode = function(t, e) {
                    return e = e || n.create(), null != t.headers && t.hasOwnProperty("headers") && o.exonum.KeyValueSequence.encode(t.headers, e.uint32(10).fork()).ldelim(), e
                }, m.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, m.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.AdditionalHeaders; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.headers = o.exonum.KeyValueSequence.decode(t, t.uint32());
                        else t.skipType(7 & s)
                    }
                    return i
                }, m.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, m.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != t.headers && t.hasOwnProperty("headers")) {
                        var e = o.exonum.KeyValueSequence.verify(t.headers);
                        if (e) return "headers." + e
                    }
                    return null
                }, m.fromObject = function(t) {
                    if (t instanceof o.exonum.AdditionalHeaders) return t;
                    var e = new o.exonum.AdditionalHeaders;
                    if (null != t.headers) {
                        if ("object" !== h(t.headers)) throw TypeError(".exonum.AdditionalHeaders.headers: object expected");
                        e.headers = o.exonum.KeyValueSequence.fromObject(t.headers)
                    }
                    return e
                }, m.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.headers = null), null != t.headers && t.hasOwnProperty("headers") && (n.headers = o.exonum.KeyValueSequence.toObject(t.headers, e)), n
                }, m.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, m), _.Block = (b.prototype.proposer_id = 0, b.prototype.height = r.Long ? r.Long.fromBits(0, 0, !0) : 0, b.prototype.tx_count = 0, b.prototype.prev_hash = null, b.prototype.tx_hash = null, b.prototype.state_hash = null, b.prototype.error_hash = null, b.prototype.additional_headers = null, b.create = function(t) {
                    return new b(t)
                }, b.encode = function(t, e) {
                    return e = e || n.create(), null != t.proposer_id && t.hasOwnProperty("proposer_id") && e.uint32(8).uint32(t.proposer_id), null != t.height && t.hasOwnProperty("height") && e.uint32(16).uint64(t.height), null != t.tx_count && t.hasOwnProperty("tx_count") && e.uint32(24).uint32(t.tx_count), null != t.prev_hash && t.hasOwnProperty("prev_hash") && o.exonum.crypto.Hash.encode(t.prev_hash, e.uint32(34).fork()).ldelim(), null != t.tx_hash && t.hasOwnProperty("tx_hash") && o.exonum.crypto.Hash.encode(t.tx_hash, e.uint32(42).fork()).ldelim(), null != t.state_hash && t.hasOwnProperty("state_hash") && o.exonum.crypto.Hash.encode(t.state_hash, e.uint32(50).fork()).ldelim(), null != t.error_hash && t.hasOwnProperty("error_hash") && o.exonum.crypto.Hash.encode(t.error_hash, e.uint32(58).fork()).ldelim(), null != t.additional_headers && t.hasOwnProperty("additional_headers") && o.exonum.AdditionalHeaders.encode(t.additional_headers, e.uint32(66).fork()).ldelim(), e
                }, b.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, b.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.Block; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.proposer_id = t.uint32();
                                break;
                            case 2:
                                i.height = t.uint64();
                                break;
                            case 3:
                                i.tx_count = t.uint32();
                                break;
                            case 4:
                                i.prev_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 5:
                                i.tx_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 6:
                                i.state_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 7:
                                i.error_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 8:
                                i.additional_headers = o.exonum.AdditionalHeaders.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, b.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, b.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.proposer_id && t.hasOwnProperty("proposer_id") && !r.isInteger(t.proposer_id) ? "proposer_id: integer expected" : null != t.height && t.hasOwnProperty("height") && !(r.isInteger(t.height) || t.height && r.isInteger(t.height.low) && r.isInteger(t.height.high)) ? "height: integer|Long expected" : null != t.tx_count && t.hasOwnProperty("tx_count") && !r.isInteger(t.tx_count) ? "tx_count: integer expected" : null != t.prev_hash && t.hasOwnProperty("prev_hash") && (e = o.exonum.crypto.Hash.verify(t.prev_hash)) ? "prev_hash." + e : null != t.tx_hash && t.hasOwnProperty("tx_hash") && (e = o.exonum.crypto.Hash.verify(t.tx_hash)) ? "tx_hash." + e : null != t.state_hash && t.hasOwnProperty("state_hash") && (e = o.exonum.crypto.Hash.verify(t.state_hash)) ? "state_hash." + e : null != t.error_hash && t.hasOwnProperty("error_hash") && (e = o.exonum.crypto.Hash.verify(t.error_hash)) ? "error_hash." + e : null != t.additional_headers && t.hasOwnProperty("additional_headers") && (e = o.exonum.AdditionalHeaders.verify(t.additional_headers)) ? "additional_headers." + e : null;
                    var e
                }, b.fromObject = function(t) {
                    if (t instanceof o.exonum.Block) return t;
                    var e = new o.exonum.Block;
                    if (null != t.proposer_id && (e.proposer_id = t.proposer_id >>> 0), null != t.height && (r.Long ? (e.height = r.Long.fromValue(t.height)).unsigned = !0 : "string" == typeof t.height ? e.height = l(t.height, 10) : "number" == typeof t.height ? e.height = t.height : "object" === h(t.height) && (e.height = new r.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0))), null != t.tx_count && (e.tx_count = t.tx_count >>> 0), null != t.prev_hash) {
                        if ("object" !== h(t.prev_hash)) throw TypeError(".exonum.Block.prev_hash: object expected");
                        e.prev_hash = o.exonum.crypto.Hash.fromObject(t.prev_hash)
                    }
                    if (null != t.tx_hash) {
                        if ("object" !== h(t.tx_hash)) throw TypeError(".exonum.Block.tx_hash: object expected");
                        e.tx_hash = o.exonum.crypto.Hash.fromObject(t.tx_hash)
                    }
                    if (null != t.state_hash) {
                        if ("object" !== h(t.state_hash)) throw TypeError(".exonum.Block.state_hash: object expected");
                        e.state_hash = o.exonum.crypto.Hash.fromObject(t.state_hash)
                    }
                    if (null != t.error_hash) {
                        if ("object" !== h(t.error_hash)) throw TypeError(".exonum.Block.error_hash: object expected");
                        e.error_hash = o.exonum.crypto.Hash.fromObject(t.error_hash)
                    }
                    if (null != t.additional_headers) {
                        if ("object" !== h(t.additional_headers)) throw TypeError(".exonum.Block.additional_headers: object expected");
                        e.additional_headers = o.exonum.AdditionalHeaders.fromObject(t.additional_headers)
                    }
                    return e
                }, b.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults) {
                        if (n.proposer_id = 0, r.Long) {
                            var i = new r.Long(0, 0, !0);
                            n.height = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i
                        } else n.height = e.longs === String ? "0" : 0;
                        n.tx_count = 0, n.prev_hash = null, n.tx_hash = null, n.state_hash = null, n.error_hash = null, n.additional_headers = null
                    }
                    return null != t.proposer_id && t.hasOwnProperty("proposer_id") && (n.proposer_id = t.proposer_id), null != t.height && t.hasOwnProperty("height") && ("number" == typeof t.height ? n.height = e.longs === String ? String(t.height) : t.height : n.height = e.longs === String ? r.Long.prototype.toString.call(t.height) : e.longs === Number ? new r.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0) : t.height), null != t.tx_count && t.hasOwnProperty("tx_count") && (n.tx_count = t.tx_count), null != t.prev_hash && t.hasOwnProperty("prev_hash") && (n.prev_hash = o.exonum.crypto.Hash.toObject(t.prev_hash, e)), null != t.tx_hash && t.hasOwnProperty("tx_hash") && (n.tx_hash = o.exonum.crypto.Hash.toObject(t.tx_hash, e)), null != t.state_hash && t.hasOwnProperty("state_hash") && (n.state_hash = o.exonum.crypto.Hash.toObject(t.state_hash, e)), null != t.error_hash && t.hasOwnProperty("error_hash") && (n.error_hash = o.exonum.crypto.Hash.toObject(t.error_hash, e)), null != t.additional_headers && t.hasOwnProperty("additional_headers") && (n.additional_headers = o.exonum.AdditionalHeaders.toObject(t.additional_headers, e)), n
                }, b.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, b), _.TxLocation = (w.prototype.block_height = r.Long ? r.Long.fromBits(0, 0, !0) : 0, w.prototype.position_in_block = 0, w.create = function(t) {
                    return new w(t)
                }, w.encode = function(t, e) {
                    return e = e || n.create(), null != t.block_height && t.hasOwnProperty("block_height") && e.uint32(8).uint64(t.block_height), null != t.position_in_block && t.hasOwnProperty("position_in_block") && e.uint32(16).uint32(t.position_in_block), e
                }, w.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, w.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.TxLocation; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.block_height = t.uint64();
                                break;
                            case 2:
                                i.position_in_block = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, w.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, w.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.block_height && t.hasOwnProperty("block_height") && !(r.isInteger(t.block_height) || t.block_height && r.isInteger(t.block_height.low) && r.isInteger(t.block_height.high)) ? "block_height: integer|Long expected" : null != t.position_in_block && t.hasOwnProperty("position_in_block") && !r.isInteger(t.position_in_block) ? "position_in_block: integer expected" : null
                }, w.fromObject = function(t) {
                    if (t instanceof o.exonum.TxLocation) return t;
                    var e = new o.exonum.TxLocation;
                    return null != t.block_height && (r.Long ? (e.block_height = r.Long.fromValue(t.block_height)).unsigned = !0 : "string" == typeof t.block_height ? e.block_height = l(t.block_height, 10) : "number" == typeof t.block_height ? e.block_height = t.block_height : "object" === h(t.block_height) && (e.block_height = new r.LongBits(t.block_height.low >>> 0, t.block_height.high >>> 0).toNumber(!0))), null != t.position_in_block && (e.position_in_block = t.position_in_block >>> 0), e
                }, w.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults) {
                        if (r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.block_height = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.block_height = e.longs === String ? "0" : 0;
                        n.position_in_block = 0
                    }
                    return null != t.block_height && t.hasOwnProperty("block_height") && ("number" == typeof t.block_height ? n.block_height = e.longs === String ? String(t.block_height) : t.block_height : n.block_height = e.longs === String ? r.Long.prototype.toString.call(t.block_height) : e.longs === Number ? new r.LongBits(t.block_height.low >>> 0, t.block_height.high >>> 0).toNumber(!0) : t.block_height), null != t.position_in_block && t.hasOwnProperty("position_in_block") && (n.position_in_block = t.position_in_block), n
                }, w.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, w), _.CallInBlock = (x.prototype.transaction = 0, x.prototype.before_transactions = 0, x.prototype.after_transactions = 0, c(x.prototype, "call", {
                    get: r.oneOfGetter(i = ["transaction", "before_transactions", "after_transactions"]),
                    set: r.oneOfSetter(i)
                }), x.create = function(t) {
                    return new x(t)
                }, x.encode = function(t, e) {
                    return e = e || n.create(), null != t.transaction && t.hasOwnProperty("transaction") && e.uint32(8).uint32(t.transaction), null != t.before_transactions && t.hasOwnProperty("before_transactions") && e.uint32(16).uint32(t.before_transactions), null != t.after_transactions && t.hasOwnProperty("after_transactions") && e.uint32(24).uint32(t.after_transactions), e
                }, x.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, x.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.CallInBlock; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.transaction = t.uint32();
                                break;
                            case 2:
                                i.before_transactions = t.uint32();
                                break;
                            case 3:
                                i.after_transactions = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, x.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, x.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    var e = {};
                    if (null != t.transaction && t.hasOwnProperty("transaction") && (e.call = 1, !r.isInteger(t.transaction))) return "transaction: integer expected";
                    if (null != t.before_transactions && t.hasOwnProperty("before_transactions")) {
                        if (1 === e.call) return "call: multiple values";
                        if (e.call = 1, !r.isInteger(t.before_transactions)) return "before_transactions: integer expected"
                    }
                    if (null != t.after_transactions && t.hasOwnProperty("after_transactions")) {
                        if (1 === e.call) return "call: multiple values";
                        if (e.call = 1, !r.isInteger(t.after_transactions)) return "after_transactions: integer expected"
                    }
                    return null
                }, x.fromObject = function(t) {
                    if (t instanceof o.exonum.CallInBlock) return t;
                    var e = new o.exonum.CallInBlock;
                    return null != t.transaction && (e.transaction = t.transaction >>> 0), null != t.before_transactions && (e.before_transactions = t.before_transactions >>> 0), null != t.after_transactions && (e.after_transactions = t.after_transactions >>> 0), e
                }, x.toObject = function(t, e) {
                    e = e || {};
                    var n = {};
                    return null != t.transaction && t.hasOwnProperty("transaction") && (n.transaction = t.transaction, e.oneofs && (n.call = "transaction")), null != t.before_transactions && t.hasOwnProperty("before_transactions") && (n.before_transactions = t.before_transactions, e.oneofs && (n.call = "before_transactions")), null != t.after_transactions && t.hasOwnProperty("after_transactions") && (n.after_transactions = t.after_transactions, e.oneofs && (n.call = "after_transactions")), n
                }, x.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, x), _.ValidatorKeys = (O.prototype.consensus_key = null, O.prototype.service_key = null, O.create = function(t) {
                    return new O(t)
                }, O.encode = function(t, e) {
                    return e = e || n.create(), null != t.consensus_key && t.hasOwnProperty("consensus_key") && o.exonum.crypto.PublicKey.encode(t.consensus_key, e.uint32(10).fork()).ldelim(), null != t.service_key && t.hasOwnProperty("service_key") && o.exonum.crypto.PublicKey.encode(t.service_key, e.uint32(18).fork()).ldelim(), e
                }, O.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, O.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.ValidatorKeys; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.consensus_key = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            case 2:
                                i.service_key = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, O.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, O.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.consensus_key && t.hasOwnProperty("consensus_key") && (e = o.exonum.crypto.PublicKey.verify(t.consensus_key)) ? "consensus_key." + e : null != t.service_key && t.hasOwnProperty("service_key") && (e = o.exonum.crypto.PublicKey.verify(t.service_key)) ? "service_key." + e : null;
                    var e
                }, O.fromObject = function(t) {
                    if (t instanceof o.exonum.ValidatorKeys) return t;
                    var e = new o.exonum.ValidatorKeys;
                    if (null != t.consensus_key) {
                        if ("object" !== h(t.consensus_key)) throw TypeError(".exonum.ValidatorKeys.consensus_key: object expected");
                        e.consensus_key = o.exonum.crypto.PublicKey.fromObject(t.consensus_key)
                    }
                    if (null != t.service_key) {
                        if ("object" !== h(t.service_key)) throw TypeError(".exonum.ValidatorKeys.service_key: object expected");
                        e.service_key = o.exonum.crypto.PublicKey.fromObject(t.service_key)
                    }
                    return e
                }, O.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.consensus_key = null, n.service_key = null), null != t.consensus_key && t.hasOwnProperty("consensus_key") && (n.consensus_key = o.exonum.crypto.PublicKey.toObject(t.consensus_key, e)), null != t.service_key && t.hasOwnProperty("service_key") && (n.service_key = o.exonum.crypto.PublicKey.toObject(t.service_key, e)), n
                }, O.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, O), _.Config = (S.prototype.validator_keys = r.emptyArray, S.prototype.first_round_timeout = r.Long ? r.Long.fromBits(0, 0, !0) : 0, S.prototype.status_timeout = r.Long ? r.Long.fromBits(0, 0, !0) : 0, S.prototype.peers_timeout = r.Long ? r.Long.fromBits(0, 0, !0) : 0, S.prototype.txs_block_limit = 0, S.prototype.max_message_len = 0, S.prototype.min_propose_timeout = r.Long ? r.Long.fromBits(0, 0, !0) : 0, S.prototype.max_propose_timeout = r.Long ? r.Long.fromBits(0, 0, !0) : 0, S.prototype.propose_timeout_threshold = 0, S.create = function(t) {
                    return new S(t)
                }, S.encode = function(t, e) {
                    if (e = e || n.create(), null != t.validator_keys && t.validator_keys.length)
                        for (var r = 0; r < t.validator_keys.length; ++r) o.exonum.ValidatorKeys.encode(t.validator_keys[r], e.uint32(10).fork()).ldelim();
                    return null != t.first_round_timeout && t.hasOwnProperty("first_round_timeout") && e.uint32(16).uint64(t.first_round_timeout), null != t.status_timeout && t.hasOwnProperty("status_timeout") && e.uint32(24).uint64(t.status_timeout), null != t.peers_timeout && t.hasOwnProperty("peers_timeout") && e.uint32(32).uint64(t.peers_timeout), null != t.txs_block_limit && t.hasOwnProperty("txs_block_limit") && e.uint32(40).uint32(t.txs_block_limit), null != t.max_message_len && t.hasOwnProperty("max_message_len") && e.uint32(48).uint32(t.max_message_len), null != t.min_propose_timeout && t.hasOwnProperty("min_propose_timeout") && e.uint32(56).uint64(t.min_propose_timeout), null != t.max_propose_timeout && t.hasOwnProperty("max_propose_timeout") && e.uint32(64).uint64(t.max_propose_timeout), null != t.propose_timeout_threshold && t.hasOwnProperty("propose_timeout_threshold") && e.uint32(72).uint32(t.propose_timeout_threshold), e
                }, S.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, S.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.Config; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.validator_keys && i.validator_keys.length || (i.validator_keys = []), i.validator_keys.push(o.exonum.ValidatorKeys.decode(t, t.uint32()));
                                break;
                            case 2:
                                i.first_round_timeout = t.uint64();
                                break;
                            case 3:
                                i.status_timeout = t.uint64();
                                break;
                            case 4:
                                i.peers_timeout = t.uint64();
                                break;
                            case 5:
                                i.txs_block_limit = t.uint32();
                                break;
                            case 6:
                                i.max_message_len = t.uint32();
                                break;
                            case 7:
                                i.min_propose_timeout = t.uint64();
                                break;
                            case 8:
                                i.max_propose_timeout = t.uint64();
                                break;
                            case 9:
                                i.propose_timeout_threshold = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, S.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, S.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != t.validator_keys && t.hasOwnProperty("validator_keys")) {
                        if (!u(t.validator_keys)) return "validator_keys: array expected";
                        for (var e = 0; e < t.validator_keys.length; ++e) {
                            var n = o.exonum.ValidatorKeys.verify(t.validator_keys[e]);
                            if (n) return "validator_keys." + n
                        }
                    }
                    return null != t.first_round_timeout && t.hasOwnProperty("first_round_timeout") && !(r.isInteger(t.first_round_timeout) || t.first_round_timeout && r.isInteger(t.first_round_timeout.low) && r.isInteger(t.first_round_timeout.high)) ? "first_round_timeout: integer|Long expected" : null != t.status_timeout && t.hasOwnProperty("status_timeout") && !(r.isInteger(t.status_timeout) || t.status_timeout && r.isInteger(t.status_timeout.low) && r.isInteger(t.status_timeout.high)) ? "status_timeout: integer|Long expected" : null != t.peers_timeout && t.hasOwnProperty("peers_timeout") && !(r.isInteger(t.peers_timeout) || t.peers_timeout && r.isInteger(t.peers_timeout.low) && r.isInteger(t.peers_timeout.high)) ? "peers_timeout: integer|Long expected" : null != t.txs_block_limit && t.hasOwnProperty("txs_block_limit") && !r.isInteger(t.txs_block_limit) ? "txs_block_limit: integer expected" : null != t.max_message_len && t.hasOwnProperty("max_message_len") && !r.isInteger(t.max_message_len) ? "max_message_len: integer expected" : null != t.min_propose_timeout && t.hasOwnProperty("min_propose_timeout") && !(r.isInteger(t.min_propose_timeout) || t.min_propose_timeout && r.isInteger(t.min_propose_timeout.low) && r.isInteger(t.min_propose_timeout.high)) ? "min_propose_timeout: integer|Long expected" : null != t.max_propose_timeout && t.hasOwnProperty("max_propose_timeout") && !(r.isInteger(t.max_propose_timeout) || t.max_propose_timeout && r.isInteger(t.max_propose_timeout.low) && r.isInteger(t.max_propose_timeout.high)) ? "max_propose_timeout: integer|Long expected" : null != t.propose_timeout_threshold && t.hasOwnProperty("propose_timeout_threshold") && !r.isInteger(t.propose_timeout_threshold) ? "propose_timeout_threshold: integer expected" : null
                }, S.fromObject = function(t) {
                    if (t instanceof o.exonum.Config) return t;
                    var e = new o.exonum.Config;
                    if (t.validator_keys) {
                        if (!u(t.validator_keys)) throw TypeError(".exonum.Config.validator_keys: array expected");
                        e.validator_keys = [];
                        for (var n = 0; n < t.validator_keys.length; ++n) {
                            if ("object" !== h(t.validator_keys[n])) throw TypeError(".exonum.Config.validator_keys: object expected");
                            e.validator_keys[n] = o.exonum.ValidatorKeys.fromObject(t.validator_keys[n])
                        }
                    }
                    return null != t.first_round_timeout && (r.Long ? (e.first_round_timeout = r.Long.fromValue(t.first_round_timeout)).unsigned = !0 : "string" == typeof t.first_round_timeout ? e.first_round_timeout = l(t.first_round_timeout, 10) : "number" == typeof t.first_round_timeout ? e.first_round_timeout = t.first_round_timeout : "object" === h(t.first_round_timeout) && (e.first_round_timeout = new r.LongBits(t.first_round_timeout.low >>> 0, t.first_round_timeout.high >>> 0).toNumber(!0))), null != t.status_timeout && (r.Long ? (e.status_timeout = r.Long.fromValue(t.status_timeout)).unsigned = !0 : "string" == typeof t.status_timeout ? e.status_timeout = l(t.status_timeout, 10) : "number" == typeof t.status_timeout ? e.status_timeout = t.status_timeout : "object" === h(t.status_timeout) && (e.status_timeout = new r.LongBits(t.status_timeout.low >>> 0, t.status_timeout.high >>> 0).toNumber(!0))), null != t.peers_timeout && (r.Long ? (e.peers_timeout = r.Long.fromValue(t.peers_timeout)).unsigned = !0 : "string" == typeof t.peers_timeout ? e.peers_timeout = l(t.peers_timeout, 10) : "number" == typeof t.peers_timeout ? e.peers_timeout = t.peers_timeout : "object" === h(t.peers_timeout) && (e.peers_timeout = new r.LongBits(t.peers_timeout.low >>> 0, t.peers_timeout.high >>> 0).toNumber(!0))), null != t.txs_block_limit && (e.txs_block_limit = t.txs_block_limit >>> 0), null != t.max_message_len && (e.max_message_len = t.max_message_len >>> 0), null != t.min_propose_timeout && (r.Long ? (e.min_propose_timeout = r.Long.fromValue(t.min_propose_timeout)).unsigned = !0 : "string" == typeof t.min_propose_timeout ? e.min_propose_timeout = l(t.min_propose_timeout, 10) : "number" == typeof t.min_propose_timeout ? e.min_propose_timeout = t.min_propose_timeout : "object" === h(t.min_propose_timeout) && (e.min_propose_timeout = new r.LongBits(t.min_propose_timeout.low >>> 0, t.min_propose_timeout.high >>> 0).toNumber(!0))), null != t.max_propose_timeout && (r.Long ? (e.max_propose_timeout = r.Long.fromValue(t.max_propose_timeout)).unsigned = !0 : "string" == typeof t.max_propose_timeout ? e.max_propose_timeout = l(t.max_propose_timeout, 10) : "number" == typeof t.max_propose_timeout ? e.max_propose_timeout = t.max_propose_timeout : "object" === h(t.max_propose_timeout) && (e.max_propose_timeout = new r.LongBits(t.max_propose_timeout.low >>> 0, t.max_propose_timeout.high >>> 0).toNumber(!0))), null != t.propose_timeout_threshold && (e.propose_timeout_threshold = t.propose_timeout_threshold >>> 0), e
                }, S.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.validator_keys = []), e.defaults) {
                        if (r.Long) {
                            var i = new r.Long(0, 0, !0);
                            n.first_round_timeout = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i
                        } else n.first_round_timeout = e.longs === String ? "0" : 0;
                        r.Long ? (i = new r.Long(0, 0, !0), n.status_timeout = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i) : n.status_timeout = e.longs === String ? "0" : 0, r.Long ? (i = new r.Long(0, 0, !0), n.peers_timeout = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i) : n.peers_timeout = e.longs === String ? "0" : 0, n.txs_block_limit = 0, n.max_message_len = 0, r.Long ? (i = new r.Long(0, 0, !0), n.min_propose_timeout = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i) : n.min_propose_timeout = e.longs === String ? "0" : 0, r.Long ? (i = new r.Long(0, 0, !0), n.max_propose_timeout = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i) : n.max_propose_timeout = e.longs === String ? "0" : 0, n.propose_timeout_threshold = 0
                    }
                    if (t.validator_keys && t.validator_keys.length) {
                        n.validator_keys = [];
                        for (var s = 0; s < t.validator_keys.length; ++s) n.validator_keys[s] = o.exonum.ValidatorKeys.toObject(t.validator_keys[s], e)
                    }
                    return null != t.first_round_timeout && t.hasOwnProperty("first_round_timeout") && ("number" == typeof t.first_round_timeout ? n.first_round_timeout = e.longs === String ? String(t.first_round_timeout) : t.first_round_timeout : n.first_round_timeout = e.longs === String ? r.Long.prototype.toString.call(t.first_round_timeout) : e.longs === Number ? new r.LongBits(t.first_round_timeout.low >>> 0, t.first_round_timeout.high >>> 0).toNumber(!0) : t.first_round_timeout), null != t.status_timeout && t.hasOwnProperty("status_timeout") && ("number" == typeof t.status_timeout ? n.status_timeout = e.longs === String ? String(t.status_timeout) : t.status_timeout : n.status_timeout = e.longs === String ? r.Long.prototype.toString.call(t.status_timeout) : e.longs === Number ? new r.LongBits(t.status_timeout.low >>> 0, t.status_timeout.high >>> 0).toNumber(!0) : t.status_timeout), null != t.peers_timeout && t.hasOwnProperty("peers_timeout") && ("number" == typeof t.peers_timeout ? n.peers_timeout = e.longs === String ? String(t.peers_timeout) : t.peers_timeout : n.peers_timeout = e.longs === String ? r.Long.prototype.toString.call(t.peers_timeout) : e.longs === Number ? new r.LongBits(t.peers_timeout.low >>> 0, t.peers_timeout.high >>> 0).toNumber(!0) : t.peers_timeout), null != t.txs_block_limit && t.hasOwnProperty("txs_block_limit") && (n.txs_block_limit = t.txs_block_limit), null != t.max_message_len && t.hasOwnProperty("max_message_len") && (n.max_message_len = t.max_message_len), null != t.min_propose_timeout && t.hasOwnProperty("min_propose_timeout") && ("number" == typeof t.min_propose_timeout ? n.min_propose_timeout = e.longs === String ? String(t.min_propose_timeout) : t.min_propose_timeout : n.min_propose_timeout = e.longs === String ? r.Long.prototype.toString.call(t.min_propose_timeout) : e.longs === Number ? new r.LongBits(t.min_propose_timeout.low >>> 0, t.min_propose_timeout.high >>> 0).toNumber(!0) : t.min_propose_timeout), null != t.max_propose_timeout && t.hasOwnProperty("max_propose_timeout") && ("number" == typeof t.max_propose_timeout ? n.max_propose_timeout = e.longs === String ? String(t.max_propose_timeout) : t.max_propose_timeout : n.max_propose_timeout = e.longs === String ? r.Long.prototype.toString.call(t.max_propose_timeout) : e.longs === Number ? new r.LongBits(t.max_propose_timeout.low >>> 0, t.max_propose_timeout.high >>> 0).toNumber(!0) : t.max_propose_timeout), null != t.propose_timeout_threshold && t.hasOwnProperty("propose_timeout_threshold") && (n.propose_timeout_threshold = t.propose_timeout_threshold), n
                }, S.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, S), _.crypto = ((p = {}).Hash = (k.prototype.data = r.newBuffer([]), k.create = function(t) {
                    return new k(t)
                }, k.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, k.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, k.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.Hash; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, k.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, k.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, k.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.Hash) return t;
                    var e = new o.exonum.crypto.Hash;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, k.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? a(Array.prototype).call(t.data) : t.data), n
                }, k.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, k), p.PublicKey = (E.prototype.data = r.newBuffer([]), E.create = function(t) {
                    return new E(t)
                }, E.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, E.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, E.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.PublicKey; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, E.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, E.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, E.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.PublicKey) return t;
                    var e = new o.exonum.crypto.PublicKey;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, E.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? a(Array.prototype).call(t.data) : t.data), n
                }, E.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, E), p.Signature = (P.prototype.data = r.newBuffer([]), P.create = function(t) {
                    return new P(t)
                }, P.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), e
                }, P.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, P.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.crypto.Signature; t.pos < r;) {
                        var s = t.uint32();
                        if (s >>> 3 == 1) i.data = t.bytes();
                        else t.skipType(7 & s)
                    }
                    return i
                }, P.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, P.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null
                }, P.fromObject = function(t) {
                    if (t instanceof o.exonum.crypto.Signature) return t;
                    var e = new o.exonum.crypto.Signature;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), e
                }, P.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data)))), null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? a(Array.prototype).call(t.data) : t.data), n
                }, P.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, P), p), _.KeyValue = (A.prototype.key = "", A.prototype.value = r.newBuffer([]), A.create = function(t) {
                    return new A(t)
                }, A.encode = function(t, e) {
                    return e = e || n.create(), null != t.key && t.hasOwnProperty("key") && e.uint32(10).string(t.key), null != t.value && t.hasOwnProperty("value") && e.uint32(18).bytes(t.value), e
                }, A.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, A.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.KeyValue; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.key = t.string();
                                break;
                            case 2:
                                i.value = t.bytes();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, A.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, A.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.key && t.hasOwnProperty("key") && !r.isString(t.key) ? "key: string expected" : null != t.value && t.hasOwnProperty("value") && !(t.value && "number" == typeof t.value.length || r.isString(t.value)) ? "value: buffer expected" : null
                }, A.fromObject = function(t) {
                    if (t instanceof o.exonum.KeyValue) return t;
                    var e = new o.exonum.KeyValue;
                    return null != t.key && (e.key = String(t.key)), null != t.value && ("string" == typeof t.value ? r.base64.decode(t.value, e.value = r.newBuffer(r.base64.length(t.value)), 0) : t.value.length && (e.value = t.value)), e
                }, A.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.key = "", e.bytes === String ? n.value = "" : (n.value = [], e.bytes !== Array && (n.value = r.newBuffer(n.value)))), null != t.key && t.hasOwnProperty("key") && (n.key = t.key), null != t.value && t.hasOwnProperty("value") && (n.value = e.bytes === String ? r.base64.encode(t.value, 0, t.value.length) : e.bytes === Array ? a(Array.prototype).call(t.value) : t.value), n
                }, A.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, A), _.KeyValueSequence = (j.prototype.entries = r.emptyArray, j.create = function(t) {
                    return new j(t)
                }, j.encode = function(t, e) {
                    if (e = e || n.create(), null != s(t) && s(t).length)
                        for (var r = 0; r < s(t).length; ++r) o.exonum.KeyValue.encode(s(t)[r], e.uint32(10).fork()).ldelim();
                    return e
                }, j.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, j.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.KeyValueSequence; t.pos < r;) {
                        var a = t.uint32();
                        if (a >>> 3 == 1) s(i) && s(i).length || (i.entries = []), s(i).push(o.exonum.KeyValue.decode(t, t.uint32()));
                        else t.skipType(7 & a)
                    }
                    return i
                }, j.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, j.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != s(t) && t.hasOwnProperty("entries")) {
                        if (!u(s(t))) return "entries: array expected";
                        for (var e = 0; e < s(t).length; ++e) {
                            var n = o.exonum.KeyValue.verify(s(t)[e]);
                            if (n) return "entries." + n
                        }
                    }
                    return null
                }, j.fromObject = function(t) {
                    if (t instanceof o.exonum.KeyValueSequence) return t;
                    var e = new o.exonum.KeyValueSequence;
                    if (s(t)) {
                        if (!u(s(t))) throw TypeError(".exonum.KeyValueSequence.entries: array expected");
                        e.entries = [];
                        for (var n = 0; n < s(t).length; ++n) {
                            if ("object" !== h(s(t)[n])) throw TypeError(".exonum.KeyValueSequence.entries: object expected");
                            s(e)[n] = o.exonum.KeyValue.fromObject(s(t)[n])
                        }
                    }
                    return e
                }, j.toObject = function(t, e) {
                    var n = {};
                    if (((e = e || {}).arrays || e.defaults) && (n.entries = []), s(t) && s(t).length) {
                        n.entries = [];
                        for (var r = 0; r < s(t).length; ++r) s(n)[r] = o.exonum.KeyValue.toObject(s(t)[r], e)
                    }
                    return n
                }, j.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, j), _.SignedMessage = (T.prototype.payload = r.newBuffer([]), T.prototype.author = null, T.prototype.signature = null, T.create = function(t) {
                    return new T(t)
                }, T.encode = function(t, e) {
                    return e = e || n.create(), null != t.payload && t.hasOwnProperty("payload") && e.uint32(10).bytes(t.payload), null != t.author && t.hasOwnProperty("author") && o.exonum.crypto.PublicKey.encode(t.author, e.uint32(18).fork()).ldelim(), null != t.signature && t.hasOwnProperty("signature") && o.exonum.crypto.Signature.encode(t.signature, e.uint32(26).fork()).ldelim(), e
                }, T.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, T.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.SignedMessage; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.payload = t.bytes();
                                break;
                            case 2:
                                i.author = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            case 3:
                                i.signature = o.exonum.crypto.Signature.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, T.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, T.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.payload && t.hasOwnProperty("payload") && !(t.payload && "number" == typeof t.payload.length || r.isString(t.payload)) ? "payload: buffer expected" : null != t.author && t.hasOwnProperty("author") && (e = o.exonum.crypto.PublicKey.verify(t.author)) ? "author." + e : null != t.signature && t.hasOwnProperty("signature") && (e = o.exonum.crypto.Signature.verify(t.signature)) ? "signature." + e : null;
                    var e
                }, T.fromObject = function(t) {
                    if (t instanceof o.exonum.SignedMessage) return t;
                    var e = new o.exonum.SignedMessage;
                    if (null != t.payload && ("string" == typeof t.payload ? r.base64.decode(t.payload, e.payload = r.newBuffer(r.base64.length(t.payload)), 0) : t.payload.length && (e.payload = t.payload)), null != t.author) {
                        if ("object" !== h(t.author)) throw TypeError(".exonum.SignedMessage.author: object expected");
                        e.author = o.exonum.crypto.PublicKey.fromObject(t.author)
                    }
                    if (null != t.signature) {
                        if ("object" !== h(t.signature)) throw TypeError(".exonum.SignedMessage.signature: object expected");
                        e.signature = o.exonum.crypto.Signature.fromObject(t.signature)
                    }
                    return e
                }, T.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (e.bytes === String ? n.payload = "" : (n.payload = [], e.bytes !== Array && (n.payload = r.newBuffer(n.payload))), n.author = null, n.signature = null), null != t.payload && t.hasOwnProperty("payload") && (n.payload = e.bytes === String ? r.base64.encode(t.payload, 0, t.payload.length) : e.bytes === Array ? a(Array.prototype).call(t.payload) : t.payload), null != t.author && t.hasOwnProperty("author") && (n.author = o.exonum.crypto.PublicKey.toObject(t.author, e)), null != t.signature && t.hasOwnProperty("signature") && (n.signature = o.exonum.crypto.Signature.toObject(t.signature, e)), n
                }, T.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, T), _.CoreMessage = (B.prototype.any_tx = null, B.prototype.precommit = null, c(B.prototype, "kind", {
                    get: r.oneOfGetter(d = ["any_tx", "precommit"]),
                    set: r.oneOfSetter(d)
                }), B.create = function(t) {
                    return new B(t)
                }, B.encode = function(t, e) {
                    return e = e || n.create(), null != t.any_tx && t.hasOwnProperty("any_tx") && o.exonum.runtime.AnyTx.encode(t.any_tx, e.uint32(10).fork()).ldelim(), null != t.precommit && t.hasOwnProperty("precommit") && o.exonum.Precommit.encode(t.precommit, e.uint32(18).fork()).ldelim(), e
                }, B.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, B.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.CoreMessage; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.any_tx = o.exonum.runtime.AnyTx.decode(t, t.uint32());
                                break;
                            case 2:
                                i.precommit = o.exonum.Precommit.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, B.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, B.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    var e = {};
                    if (null != t.any_tx && t.hasOwnProperty("any_tx") && (e.kind = 1, n = o.exonum.runtime.AnyTx.verify(t.any_tx))) return "any_tx." + n;
                    if (null != t.precommit && t.hasOwnProperty("precommit")) {
                        if (1 === e.kind) return "kind: multiple values";
                        var n;
                        if (e.kind = 1, n = o.exonum.Precommit.verify(t.precommit)) return "precommit." + n
                    }
                    return null
                }, B.fromObject = function(t) {
                    if (t instanceof o.exonum.CoreMessage) return t;
                    var e = new o.exonum.CoreMessage;
                    if (null != t.any_tx) {
                        if ("object" !== h(t.any_tx)) throw TypeError(".exonum.CoreMessage.any_tx: object expected");
                        e.any_tx = o.exonum.runtime.AnyTx.fromObject(t.any_tx)
                    }
                    if (null != t.precommit) {
                        if ("object" !== h(t.precommit)) throw TypeError(".exonum.CoreMessage.precommit: object expected");
                        e.precommit = o.exonum.Precommit.fromObject(t.precommit)
                    }
                    return e
                }, B.toObject = function(t, e) {
                    e = e || {};
                    var n = {};
                    return null != t.any_tx && t.hasOwnProperty("any_tx") && (n.any_tx = o.exonum.runtime.AnyTx.toObject(t.any_tx, e), e.oneofs && (n.kind = "any_tx")), null != t.precommit && t.hasOwnProperty("precommit") && (n.precommit = o.exonum.Precommit.toObject(t.precommit, e), e.oneofs && (n.kind = "precommit")), n
                }, B.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, B), _.Precommit = (R.prototype.validator = 0, R.prototype.height = r.Long ? r.Long.fromBits(0, 0, !0) : 0, R.prototype.round = 0, R.prototype.propose_hash = null, R.prototype.block_hash = null, R.prototype.time = null, R.create = function(t) {
                    return new R(t)
                }, R.encode = function(t, e) {
                    return e = e || n.create(), null != t.validator && t.hasOwnProperty("validator") && e.uint32(8).uint32(t.validator), null != t.height && t.hasOwnProperty("height") && e.uint32(16).uint64(t.height), null != t.round && t.hasOwnProperty("round") && e.uint32(24).uint32(t.round), null != t.propose_hash && t.hasOwnProperty("propose_hash") && o.exonum.crypto.Hash.encode(t.propose_hash, e.uint32(34).fork()).ldelim(), null != t.block_hash && t.hasOwnProperty("block_hash") && o.exonum.crypto.Hash.encode(t.block_hash, e.uint32(42).fork()).ldelim(), null != t.time && t.hasOwnProperty("time") && o.google.protobuf.Timestamp.encode(t.time, e.uint32(50).fork()).ldelim(), e
                }, R.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, R.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.Precommit; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.validator = t.uint32();
                                break;
                            case 2:
                                i.height = t.uint64();
                                break;
                            case 3:
                                i.round = t.uint32();
                                break;
                            case 4:
                                i.propose_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 5:
                                i.block_hash = o.exonum.crypto.Hash.decode(t, t.uint32());
                                break;
                            case 6:
                                i.time = o.google.protobuf.Timestamp.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, R.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, R.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.validator && t.hasOwnProperty("validator") && !r.isInteger(t.validator) ? "validator: integer expected" : null != t.height && t.hasOwnProperty("height") && !(r.isInteger(t.height) || t.height && r.isInteger(t.height.low) && r.isInteger(t.height.high)) ? "height: integer|Long expected" : null != t.round && t.hasOwnProperty("round") && !r.isInteger(t.round) ? "round: integer expected" : null != t.propose_hash && t.hasOwnProperty("propose_hash") && (e = o.exonum.crypto.Hash.verify(t.propose_hash)) ? "propose_hash." + e : null != t.block_hash && t.hasOwnProperty("block_hash") && (e = o.exonum.crypto.Hash.verify(t.block_hash)) ? "block_hash." + e : null != t.time && t.hasOwnProperty("time") && (e = o.google.protobuf.Timestamp.verify(t.time)) ? "time." + e : null;
                    var e
                }, R.fromObject = function(t) {
                    if (t instanceof o.exonum.Precommit) return t;
                    var e = new o.exonum.Precommit;
                    if (null != t.validator && (e.validator = t.validator >>> 0), null != t.height && (r.Long ? (e.height = r.Long.fromValue(t.height)).unsigned = !0 : "string" == typeof t.height ? e.height = l(t.height, 10) : "number" == typeof t.height ? e.height = t.height : "object" === h(t.height) && (e.height = new r.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0))), null != t.round && (e.round = t.round >>> 0), null != t.propose_hash) {
                        if ("object" !== h(t.propose_hash)) throw TypeError(".exonum.Precommit.propose_hash: object expected");
                        e.propose_hash = o.exonum.crypto.Hash.fromObject(t.propose_hash)
                    }
                    if (null != t.block_hash) {
                        if ("object" !== h(t.block_hash)) throw TypeError(".exonum.Precommit.block_hash: object expected");
                        e.block_hash = o.exonum.crypto.Hash.fromObject(t.block_hash)
                    }
                    if (null != t.time) {
                        if ("object" !== h(t.time)) throw TypeError(".exonum.Precommit.time: object expected");
                        e.time = o.google.protobuf.Timestamp.fromObject(t.time)
                    }
                    return e
                }, R.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults) {
                        if (n.validator = 0, r.Long) {
                            var i = new r.Long(0, 0, !0);
                            n.height = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i
                        } else n.height = e.longs === String ? "0" : 0;
                        n.round = 0, n.propose_hash = null, n.block_hash = null, n.time = null
                    }
                    return null != t.validator && t.hasOwnProperty("validator") && (n.validator = t.validator), null != t.height && t.hasOwnProperty("height") && ("number" == typeof t.height ? n.height = e.longs === String ? String(t.height) : t.height : n.height = e.longs === String ? r.Long.prototype.toString.call(t.height) : e.longs === Number ? new r.LongBits(t.height.low >>> 0, t.height.high >>> 0).toNumber(!0) : t.height), null != t.round && t.hasOwnProperty("round") && (n.round = t.round), null != t.propose_hash && t.hasOwnProperty("propose_hash") && (n.propose_hash = o.exonum.crypto.Hash.toObject(t.propose_hash, e)), null != t.block_hash && t.hasOwnProperty("block_hash") && (n.block_hash = o.exonum.crypto.Hash.toObject(t.block_hash, e)), null != t.time && t.hasOwnProperty("time") && (n.time = o.google.protobuf.Timestamp.toObject(t.time, e)), n
                }, R.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, R), _.runtime = ((v = {}).CallInfo = (L.prototype.instance_id = 0, L.prototype.method_id = 0, L.create = function(t) {
                    return new L(t)
                }, L.encode = function(t, e) {
                    return e = e || n.create(), null != t.instance_id && t.hasOwnProperty("instance_id") && e.uint32(8).uint32(t.instance_id), null != t.method_id && t.hasOwnProperty("method_id") && e.uint32(16).uint32(t.method_id), e
                }, L.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, L.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.CallInfo; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.instance_id = t.uint32();
                                break;
                            case 2:
                                i.method_id = t.uint32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, L.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, L.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.instance_id && t.hasOwnProperty("instance_id") && !r.isInteger(t.instance_id) ? "instance_id: integer expected" : null != t.method_id && t.hasOwnProperty("method_id") && !r.isInteger(t.method_id) ? "method_id: integer expected" : null
                }, L.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.CallInfo) return t;
                    var e = new o.exonum.runtime.CallInfo;
                    return null != t.instance_id && (e.instance_id = t.instance_id >>> 0), null != t.method_id && (e.method_id = t.method_id >>> 0), e
                }, L.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.instance_id = 0, n.method_id = 0), null != t.instance_id && t.hasOwnProperty("instance_id") && (n.instance_id = t.instance_id), null != t.method_id && t.hasOwnProperty("method_id") && (n.method_id = t.method_id), n
                }, L.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, L), v.AnyTx = (I.prototype.call_info = null, I.prototype.arguments = r.newBuffer([]), I.create = function(t) {
                    return new I(t)
                }, I.encode = function(t, e) {
                    return e = e || n.create(), null != t.call_info && t.hasOwnProperty("call_info") && o.exonum.runtime.CallInfo.encode(t.call_info, e.uint32(10).fork()).ldelim(), null != t.arguments && t.hasOwnProperty("arguments") && e.uint32(18).bytes(t.arguments), e
                }, I.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, I.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.AnyTx; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.call_info = o.exonum.runtime.CallInfo.decode(t, t.uint32());
                                break;
                            case 2:
                                i.arguments = t.bytes();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, I.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, I.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != t.call_info && t.hasOwnProperty("call_info")) {
                        var e = o.exonum.runtime.CallInfo.verify(t.call_info);
                        if (e) return "call_info." + e
                    }
                    return null != t.arguments && t.hasOwnProperty("arguments") && !(t.arguments && "number" == typeof t.arguments.length || r.isString(t.arguments)) ? "arguments: buffer expected" : null
                }, I.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.AnyTx) return t;
                    var e = new o.exonum.runtime.AnyTx;
                    if (null != t.call_info) {
                        if ("object" !== h(t.call_info)) throw TypeError(".exonum.runtime.AnyTx.call_info: object expected");
                        e.call_info = o.exonum.runtime.CallInfo.fromObject(t.call_info)
                    }
                    return null != t.arguments && ("string" == typeof t.arguments ? r.base64.decode(t.arguments, e.arguments = r.newBuffer(r.base64.length(t.arguments)), 0) : t.arguments.length && (e.arguments = t.arguments)), e
                }, I.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.call_info = null, e.bytes === String ? n.arguments = "" : (n.arguments = [], e.bytes !== Array && (n.arguments = r.newBuffer(n.arguments)))), null != t.call_info && t.hasOwnProperty("call_info") && (n.call_info = o.exonum.runtime.CallInfo.toObject(t.call_info, e)), null != t.arguments && t.hasOwnProperty("arguments") && (n.arguments = e.bytes === String ? r.base64.encode(t.arguments, 0, t.arguments.length) : e.bytes === Array ? a(Array.prototype).call(t.arguments) : t.arguments), n
                }, I.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, I), v.ArtifactId = (N.prototype.runtime_id = 0, N.prototype.name = "", N.prototype.version = "", N.create = function(t) {
                    return new N(t)
                }, N.encode = function(t, e) {
                    return e = e || n.create(), null != t.runtime_id && t.hasOwnProperty("runtime_id") && e.uint32(8).uint32(t.runtime_id), null != t.name && t.hasOwnProperty("name") && e.uint32(18).string(t.name), null != t.version && t.hasOwnProperty("version") && e.uint32(26).string(t.version), e
                }, N.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, N.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.ArtifactId; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.runtime_id = t.uint32();
                                break;
                            case 2:
                                i.name = t.string();
                                break;
                            case 3:
                                i.version = t.string();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, N.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, N.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.runtime_id && t.hasOwnProperty("runtime_id") && !r.isInteger(t.runtime_id) ? "runtime_id: integer expected" : null != t.name && t.hasOwnProperty("name") && !r.isString(t.name) ? "name: string expected" : null != t.version && t.hasOwnProperty("version") && !r.isString(t.version) ? "version: string expected" : null
                }, N.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.ArtifactId) return t;
                    var e = new o.exonum.runtime.ArtifactId;
                    return null != t.runtime_id && (e.runtime_id = t.runtime_id >>> 0), null != t.name && (e.name = String(t.name)), null != t.version && (e.version = String(t.version)), e
                }, N.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.runtime_id = 0, n.name = "", n.version = ""), null != t.runtime_id && t.hasOwnProperty("runtime_id") && (n.runtime_id = t.runtime_id), null != t.name && t.hasOwnProperty("name") && (n.name = t.name), null != t.version && t.hasOwnProperty("version") && (n.version = t.version), n
                }, N.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, N), v.ArtifactSpec = (C.prototype.artifact = null, C.prototype.payload = r.newBuffer([]), C.create = function(t) {
                    return new C(t)
                }, C.encode = function(t, e) {
                    return e = e || n.create(), null != t.artifact && t.hasOwnProperty("artifact") && o.exonum.runtime.ArtifactId.encode(t.artifact, e.uint32(10).fork()).ldelim(), null != t.payload && t.hasOwnProperty("payload") && e.uint32(18).bytes(t.payload), e
                }, C.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, C.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.ArtifactSpec; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.artifact = o.exonum.runtime.ArtifactId.decode(t, t.uint32());
                                break;
                            case 2:
                                i.payload = t.bytes();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, C.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, C.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != t.artifact && t.hasOwnProperty("artifact")) {
                        var e = o.exonum.runtime.ArtifactId.verify(t.artifact);
                        if (e) return "artifact." + e
                    }
                    return null != t.payload && t.hasOwnProperty("payload") && !(t.payload && "number" == typeof t.payload.length || r.isString(t.payload)) ? "payload: buffer expected" : null
                }, C.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.ArtifactSpec) return t;
                    var e = new o.exonum.runtime.ArtifactSpec;
                    if (null != t.artifact) {
                        if ("object" !== h(t.artifact)) throw TypeError(".exonum.runtime.ArtifactSpec.artifact: object expected");
                        e.artifact = o.exonum.runtime.ArtifactId.fromObject(t.artifact)
                    }
                    return null != t.payload && ("string" == typeof t.payload ? r.base64.decode(t.payload, e.payload = r.newBuffer(r.base64.length(t.payload)), 0) : t.payload.length && (e.payload = t.payload)), e
                }, C.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.artifact = null, e.bytes === String ? n.payload = "" : (n.payload = [], e.bytes !== Array && (n.payload = r.newBuffer(n.payload)))), null != t.artifact && t.hasOwnProperty("artifact") && (n.artifact = o.exonum.runtime.ArtifactId.toObject(t.artifact, e)), null != t.payload && t.hasOwnProperty("payload") && (n.payload = e.bytes === String ? r.base64.encode(t.payload, 0, t.payload.length) : e.bytes === Array ? a(Array.prototype).call(t.payload) : t.payload), n
                }, C.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, C), v.InstanceSpec = (U.prototype.id = 0, U.prototype.name = "", U.prototype.artifact = null, U.create = function(t) {
                    return new U(t)
                }, U.encode = function(t, e) {
                    return e = e || n.create(), null != t.id && t.hasOwnProperty("id") && e.uint32(8).uint32(t.id), null != t.name && t.hasOwnProperty("name") && e.uint32(18).string(t.name), null != t.artifact && t.hasOwnProperty("artifact") && o.exonum.runtime.ArtifactId.encode(t.artifact, e.uint32(26).fork()).ldelim(), e
                }, U.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, U.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.InstanceSpec; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.id = t.uint32();
                                break;
                            case 2:
                                i.name = t.string();
                                break;
                            case 3:
                                i.artifact = o.exonum.runtime.ArtifactId.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, U.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, U.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    if (null != t.id && t.hasOwnProperty("id") && !r.isInteger(t.id)) return "id: integer expected";
                    if (null != t.name && t.hasOwnProperty("name") && !r.isString(t.name)) return "name: string expected";
                    if (null != t.artifact && t.hasOwnProperty("artifact")) {
                        var e = o.exonum.runtime.ArtifactId.verify(t.artifact);
                        if (e) return "artifact." + e
                    }
                    return null
                }, U.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.InstanceSpec) return t;
                    var e = new o.exonum.runtime.InstanceSpec;
                    if (null != t.id && (e.id = t.id >>> 0), null != t.name && (e.name = String(t.name)), null != t.artifact) {
                        if ("object" !== h(t.artifact)) throw TypeError(".exonum.runtime.InstanceSpec.artifact: object expected");
                        e.artifact = o.exonum.runtime.ArtifactId.fromObject(t.artifact)
                    }
                    return e
                }, U.toObject = function(t, e) {
                    var n = {};
                    return (e = e || {}).defaults && (n.id = 0, n.name = "", n.artifact = null), null != t.id && t.hasOwnProperty("id") && (n.id = t.id), null != t.name && t.hasOwnProperty("name") && (n.name = t.name), null != t.artifact && t.hasOwnProperty("artifact") && (n.artifact = o.exonum.runtime.ArtifactId.toObject(t.artifact, e)), n
                }, U.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, U), v.Caller = (M.prototype.transaction_author = null, M.prototype.instance_id = 0, M.prototype.blockchain = null, c(M.prototype, "caller", {
                    get: r.oneOfGetter(y = ["transaction_author", "instance_id", "blockchain"]),
                    set: r.oneOfSetter(y)
                }), M.create = function(t) {
                    return new M(t)
                }, M.encode = function(t, e) {
                    return e = e || n.create(), null != t.transaction_author && t.hasOwnProperty("transaction_author") && o.exonum.crypto.PublicKey.encode(t.transaction_author, e.uint32(10).fork()).ldelim(), null != t.instance_id && t.hasOwnProperty("instance_id") && e.uint32(16).uint32(t.instance_id), null != t.blockchain && t.hasOwnProperty("blockchain") && o.google.protobuf.Empty.encode(t.blockchain, e.uint32(26).fork()).ldelim(), e
                }, M.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, M.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.runtime.Caller; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.transaction_author = o.exonum.crypto.PublicKey.decode(t, t.uint32());
                                break;
                            case 2:
                                i.instance_id = t.uint32();
                                break;
                            case 3:
                                i.blockchain = o.google.protobuf.Empty.decode(t, t.uint32());
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, M.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, M.verify = function(t) {
                    if ("object" !== h(t) || null === t) return "object expected";
                    var e = {};
                    if (null != t.transaction_author && t.hasOwnProperty("transaction_author") && (e.caller = 1, n = o.exonum.crypto.PublicKey.verify(t.transaction_author))) return "transaction_author." + n;
                    if (null != t.instance_id && t.hasOwnProperty("instance_id")) {
                        if (1 === e.caller) return "caller: multiple values";
                        if (e.caller = 1, !r.isInteger(t.instance_id)) return "instance_id: integer expected"
                    }
                    if (null != t.blockchain && t.hasOwnProperty("blockchain")) {
                        if (1 === e.caller) return "caller: multiple values";
                        var n;
                        if (e.caller = 1, n = o.google.protobuf.Empty.verify(t.blockchain)) return "blockchain." + n
                    }
                    return null
                }, M.fromObject = function(t) {
                    if (t instanceof o.exonum.runtime.Caller) return t;
                    var e = new o.exonum.runtime.Caller;
                    if (null != t.transaction_author) {
                        if ("object" !== h(t.transaction_author)) throw TypeError(".exonum.runtime.Caller.transaction_author: object expected");
                        e.transaction_author = o.exonum.crypto.PublicKey.fromObject(t.transaction_author)
                    }
                    if (null != t.instance_id && (e.instance_id = t.instance_id >>> 0), null != t.blockchain) {
                        if ("object" !== h(t.blockchain)) throw TypeError(".exonum.runtime.Caller.blockchain: object expected");
                        e.blockchain = o.google.protobuf.Empty.fromObject(t.blockchain)
                    }
                    return e
                }, M.toObject = function(t, e) {
                    e = e || {};
                    var n = {};
                    return null != t.transaction_author && t.hasOwnProperty("transaction_author") && (n.transaction_author = o.exonum.crypto.PublicKey.toObject(t.transaction_author, e), e.oneofs && (n.caller = "transaction_author")), null != t.instance_id && t.hasOwnProperty("instance_id") && (n.instance_id = t.instance_id, e.oneofs && (n.caller = "instance_id")), null != t.blockchain && t.hasOwnProperty("blockchain") && (n.blockchain = o.google.protobuf.Empty.toObject(t.blockchain, e), e.oneofs && (n.caller = "blockchain")), n
                }, M.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, M), v), _.common = ((g = {}).BitVec = (H.prototype.data = r.newBuffer([]), H.prototype.len = r.Long ? r.Long.fromBits(0, 0, !0) : 0, H.create = function(t) {
                    return new H(t)
                }, H.encode = function(t, e) {
                    return e = e || n.create(), null != t.data && t.hasOwnProperty("data") && e.uint32(10).bytes(t.data), null != t.len && t.hasOwnProperty("len") && e.uint32(16).uint64(t.len), e
                }, H.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, H.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.exonum.common.BitVec; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.data = t.bytes();
                                break;
                            case 2:
                                i.len = t.uint64();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, H.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, H.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.data && t.hasOwnProperty("data") && !(t.data && "number" == typeof t.data.length || r.isString(t.data)) ? "data: buffer expected" : null != t.len && t.hasOwnProperty("len") && !(r.isInteger(t.len) || t.len && r.isInteger(t.len.low) && r.isInteger(t.len.high)) ? "len: integer|Long expected" : null
                }, H.fromObject = function(t) {
                    if (t instanceof o.exonum.common.BitVec) return t;
                    var e = new o.exonum.common.BitVec;
                    return null != t.data && ("string" == typeof t.data ? r.base64.decode(t.data, e.data = r.newBuffer(r.base64.length(t.data)), 0) : t.data.length && (e.data = t.data)), null != t.len && (r.Long ? (e.len = r.Long.fromValue(t.len)).unsigned = !0 : "string" == typeof t.len ? e.len = l(t.len, 10) : "number" == typeof t.len ? e.len = t.len : "object" === h(t.len) && (e.len = new r.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0))), e
                }, H.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults)
                        if (e.bytes === String ? n.data = "" : (n.data = [], e.bytes !== Array && (n.data = r.newBuffer(n.data))), r.Long) {
                            var o = new r.Long(0, 0, !0);
                            n.len = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.len = e.longs === String ? "0" : 0;
                    return null != t.data && t.hasOwnProperty("data") && (n.data = e.bytes === String ? r.base64.encode(t.data, 0, t.data.length) : e.bytes === Array ? a(Array.prototype).call(t.data) : t.data), null != t.len && t.hasOwnProperty("len") && ("number" == typeof t.len ? n.len = e.longs === String ? String(t.len) : t.len : n.len = e.longs === String ? r.Long.prototype.toString.call(t.len) : e.longs === Number ? new r.LongBits(t.len.low >>> 0, t.len.high >>> 0).toNumber(!0) : t.len), n
                }, H.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, H), g), _
            }(), o.google = function() {
                var i, s = {};

                function a(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }

                function u(t) {
                    if (t)
                        for (var e = f(t), n = 0; n < e.length; ++n) null != t[e[n]] && (this[e[n]] = t[e[n]])
                }
                return s.protobuf = ((i = {}).Timestamp = (a.prototype.seconds = r.Long ? r.Long.fromBits(0, 0, !1) : 0, a.prototype.nanos = 0, a.create = function(t) {
                    return new a(t)
                }, a.encode = function(t, e) {
                    return e = e || n.create(), null != t.seconds && t.hasOwnProperty("seconds") && e.uint32(8).int64(t.seconds), null != t.nanos && t.hasOwnProperty("nanos") && e.uint32(16).int32(t.nanos), e
                }, a.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, a.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.google.protobuf.Timestamp; t.pos < r;) {
                        var s = t.uint32();
                        switch (s >>> 3) {
                            case 1:
                                i.seconds = t.int64();
                                break;
                            case 2:
                                i.nanos = t.int32();
                                break;
                            default:
                                t.skipType(7 & s)
                        }
                    }
                    return i
                }, a.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, a.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null != t.seconds && t.hasOwnProperty("seconds") && !(r.isInteger(t.seconds) || t.seconds && r.isInteger(t.seconds.low) && r.isInteger(t.seconds.high)) ? "seconds: integer|Long expected" : null != t.nanos && t.hasOwnProperty("nanos") && !r.isInteger(t.nanos) ? "nanos: integer expected" : null
                }, a.fromObject = function(t) {
                    if (t instanceof o.google.protobuf.Timestamp) return t;
                    var e = new o.google.protobuf.Timestamp;
                    return null != t.seconds && (r.Long ? (e.seconds = r.Long.fromValue(t.seconds)).unsigned = !1 : "string" == typeof t.seconds ? e.seconds = l(t.seconds, 10) : "number" == typeof t.seconds ? e.seconds = t.seconds : "object" === h(t.seconds) && (e.seconds = new r.LongBits(t.seconds.low >>> 0, t.seconds.high >>> 0).toNumber())), null != t.nanos && (e.nanos = 0 | t.nanos), e
                }, a.toObject = function(t, e) {
                    var n = {};
                    if ((e = e || {}).defaults) {
                        if (r.Long) {
                            var o = new r.Long(0, 0, !1);
                            n.seconds = e.longs === String ? o.toString() : e.longs === Number ? o.toNumber() : o
                        } else n.seconds = e.longs === String ? "0" : 0;
                        n.nanos = 0
                    }
                    return null != t.seconds && t.hasOwnProperty("seconds") && ("number" == typeof t.seconds ? n.seconds = e.longs === String ? String(t.seconds) : t.seconds : n.seconds = e.longs === String ? r.Long.prototype.toString.call(t.seconds) : e.longs === Number ? new r.LongBits(t.seconds.low >>> 0, t.seconds.high >>> 0).toNumber() : t.seconds), null != t.nanos && t.hasOwnProperty("nanos") && (n.nanos = t.nanos), n
                }, a.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, a), i.Empty = (u.create = function(t) {
                    return new u(t)
                }, u.encode = function(t, e) {
                    return e || n.create()
                }, u.encodeDelimited = function(t, e) {
                    return this.encode(t, e).ldelim()
                }, u.decode = function(t, n) {
                    t instanceof e || (t = e.create(t));
                    for (var r = void 0 === n ? t.len : t.pos + n, i = new o.google.protobuf.Empty; t.pos < r;) {
                        var s = t.uint32();
                        t.skipType(7 & s)
                    }
                    return i
                }, u.decodeDelimited = function(t) {
                    return t instanceof e || (t = new e(t)), this.decode(t, t.uint32())
                }, u.verify = function(t) {
                    return "object" !== h(t) || null === t ? "object expected" : null
                }, u.fromObject = function(t) {
                    return t instanceof o.google.protobuf.Empty ? t : new o.google.protobuf.Empty
                }, u.toObject = function() {
                    return {}
                }, u.prototype.toJSON = function() {
                    return this.constructor.toObject(this, t.util.toJSONOptions)
                }, u), i), s
            }(), o
        }) ? r.apply(e, o) : r) || (t.exports = i)
    }, function(t, e, n) {
        t.exports = n(491)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = u(t, !1);
            if ("string" == typeof e && 2 < e.length) {
                var n, r, o, i = (e = m ? e.trim() : p(e, 3)).charCodeAt(0);
                if (43 === i || 45 === i) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === i) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, o = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var s, a = e.slice(2), c = 0, l = a.length; c < l; c++)
                        if ((s = a.charCodeAt(c)) < 48 || o < s) return NaN;
                    return parseInt(a, r)
                }
            }
            return +e
        }
        var o = n(30),
            i = n(67),
            s = n(83),
            a = n(258),
            u = n(98),
            c = n(29),
            l = n(126).f,
            f = n(161).f,
            h = n(57).f,
            p = n(494).trim,
            d = "Number",
            y = o[d],
            v = y,
            g = y.prototype,
            _ = s(n(159)(g)) == d,
            m = "trim" in String.prototype;
        if (!y(" 0o1") || !y("0b1") || y("+0x1")) {
            y = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof y && (_ ? c((function() {
                    g.valueOf.call(n)
                })) : s(n) != d) ? a(new v(r(e)), n, y) : r(e)
            };
            for (var b, w = n(39) ? l(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; w.length > x; x++) i(v, b = w[x]) && !i(y, b) && h(y, b, f(v, b));
            (y.prototype = g).constructor = y, n(58)(o, d, y)
        }
    }, function(t, e, n) {
        t.exports = n(507)
    }, function(t, e, n) {
        "use strict";
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
            return (p = "function" == typeof h && "symbol" === f(l) ? function(t) {
                return f(t)
            } : function(t) {
                return t && "function" == typeof h && t.constructor === h && t !== h.prototype ? "symbol" : f(t)
            })(t)
        }
        c(e, "__esModule", {
            value: !0
        }), e.PublicKey = e.Digest = e.Hash = e.Uuid = e.PUBLIC_KEY_LENGTH = void 0;
        var d = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== p(t) && "function" != typeof t) return {
                default: t
            };
            var e = y();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                r = c && a;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? a(t, o) : null;
                    i && (i.get || i.set) ? c(n, o, i) : n[o] = t[o]
                } return n.default = t, e && e.set(t, n), n
        }(n(180));

        function y() {
            if ("function" != typeof u) return null;
            var t = new u;
            return y = function() {
                return t
            }, t
        }

        function v(t, e, n) {
            if (d.validateHexadecimal(n, e)) return n;
            var r;
            throw new TypeError(i(r = "".concat(t, " of wrong type is passed: ")).call(r, n))
        }

        function g(t, e, n) {
            return o({}, {
                size: {
                    get: function() {
                        return function() {
                            return e
                        }
                    },
                    enumerable: !0
                },
                name: {
                    get: function() {
                        return n
                    },
                    enumerable: !0
                },
                serialize: {
                    get: function() {
                        return t
                    }
                }
            })
        }

        function _(t, e) {
            return function(n, r, o) {
                return t(e(n), r, o)
            }
        }
        e.PUBLIC_KEY_LENGTH = 32;
        var m, b, w, x = r(_).call(_, null, (function(t, e, n) {
                for (var r = 0; r < t.length; r += 2) e[n] = s(t.substr(r, 2), 16), n++;
                return e
            })),
            O = (b = x, w = g, m = r(m = v).call(m, null, "Uuid", 16), w(b = b((function(t) {
                return m(String(t).replace(/-/g, ""))
            })), 16, "Uuid"));
        e.Uuid = O;
        var S, k, E, P = (E = g, k = (k = x)(S = r(S = v).call(S, null, "Hash", 32)), c(E(k, 32, "Hash"), "hash", {
            value: function(t) {
                return S(t) && t
            }
        }));
        e.Hash = P;
        var A, j = g(x(A = r(A = v).call(A, null, "Digest", 64)), 64, "Digest");
        e.Digest = j;
        var T, B = g(x(T = r(T = v).call(T, null, "PublicKey", 32)), 32, "PublicKey");
        e.PublicKey = B
    }, function(t, e, n) {
        var r = n(614),
            o = n(301);

        function i(e) {
            return t.exports = i = o ? r : function(t) {
                return t.__proto__ || r(t)
            }, i(e)
        }
        t.exports = i
    }, function(t, e, n) {
        var r = n(11),
            o = n(12),
            i = r.document,
            s = o(i) && o(i.createElement);
        t.exports = function(t) {
            return s ? i.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(12),
            o = n(79),
            i = n(9)("species");
        t.exports = function(t, e) {
            var n;
            return o(t) && ("function" == typeof(n = t.constructor) && (n === Array || o(n.prototype)) || r(n) && null === (n = n[i])) && (n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        }
    }, function(t, e, n) {
        var r = n(8),
            o = n(190);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, e, n) {
        var r = n(7);
        t.exports = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        }))
    }, function(t, e, n) {
        var r, o, i = n(11),
            s = n(147),
            a = i.process,
            u = a && a.versions,
            c = u && u.v8;
        c ? o = (r = c.split("."))[0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = s.match(/Chrome\/(\d+)/)) && (o = r[1]), t.exports = o && +o
    }, function(t, e, n) {
        var r = n(38);
        t.exports = r("navigator", "userAgent") || ""
    }, function(t, e, n) {
        "use strict";

        function r() {
            return this
        }
        var o = n(0),
            i = n(196),
            s = n(149),
            a = n(203),
            u = n(60),
            c = n(48),
            l = n(81),
            f = n(9),
            h = n(8),
            p = n(66),
            d = n(197),
            y = d.IteratorPrototype,
            v = d.BUGGY_SAFARI_ITERATORS,
            g = f("iterator"),
            _ = "values";
        t.exports = function(t, e, n, f, d, m, b) {
            function w(t) {
                if (t === d && j) return j;
                if (!v && t in P) return P[t];
                switch (t) {
                    case "keys":
                    case _:
                    case "entries":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this)
                }
            }
            i(n, e, f);
            var x, O, S, k = e + " Iterator",
                E = !1,
                P = t.prototype,
                A = P[g] || P["@@iterator"] || d && P[d],
                j = !v && A || w(d),
                T = "Array" == e && P.entries || A;
            if (T && (x = s(T.call(new t)), y !== Object.prototype && x.next && (h || s(x) === y || (a ? a(x, y) : "function" != typeof x[g] && c(x, g, r)), u(x, k, !0, !0), h && (p[k] = r))), d == _ && A && A.name !== _ && (E = !0, j = function() {
                    return A.call(this)
                }), h && !b || P[g] === j || c(P, g, j), p[e] = j, d)
                if (O = {
                        values: w(_),
                        keys: m ? j : w("keys"),
                        entries: w("entries")
                    }, b)
                    for (S in O) !v && !E && S in P || l(P, S, O[S]);
                else o({
                    target: e,
                    proto: !0,
                    forced: v || E
                }, O);
            return O
        }
    }, function(t, e, n) {
        var r = n(26),
            o = n(37),
            i = n(118),
            s = n(198),
            a = i("IE_PROTO"),
            u = Object.prototype;
        t.exports = s ? Object.getPrototypeOf : function(t) {
            return t = o(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function(t, e, n) {
        var r = {};
        r[n(9)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
    }, function(t, e, n) {
        "use strict";
        var r = n(47),
            o = n(207),
            i = n(66),
            s = n(54),
            a = n(148),
            u = "Array Iterator",
            c = s.set,
            l = s.getterFor(u);
        t.exports = a(Array, "Array", (function(t, e) {
            c(this, {
                type: u,
                target: r(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = l(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
            return !e || r >= e.length ? {
                value: t.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function(t, e, n) {
        var r = n(123),
            o = n(30),
            i = "__core-js_shared__",
            s = o[i] || (o[i] = {});
        (t.exports = function(t, e) {
            return s[t] || (s[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(122) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, e, n) {
        var r = n(127),
            o = n(44),
            i = n(100);
        t.exports = function(t) {
            return function(e, n, s) {
                var a, u = r(e),
                    c = o(u.length),
                    l = i(s, c);
                if (t && n != n) {
                    for (; l < c;)
                        if ((a = u[l++]) != a) return !0
                } else
                    for (; l < c; l++)
                        if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    }, function(t, e, n) {
        var r = n(153)("keys"),
            o = n(99);
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        "use strict";
        var r = n(70),
            o = n(100),
            i = n(44);
        t.exports = function(t, e, n) {
            for (var s = r(this), a = i(s.length), u = arguments.length, c = o(1 < u ? e : void 0, a), l = 2 < u ? n : void 0, f = void 0 === l ? a : o(l, a); c < f;) s[c++] = t;
            return s
        }
    }, function(t, e, n) {
        var r = n(57).f,
            o = n(67),
            i = n(18)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        function r() {}
        var o = n(43),
            i = n(335),
            s = n(156),
            a = n(155)("IE_PROTO"),
            u = "prototype",
            c = function() {
                var t, e = n(209)("iframe"),
                    r = s.length;
                for (e.style.display = "none", n(218).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c[u][s[r]];
                return c()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (r[u] = o(t), n = new r, r[u] = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(18)("unscopables"),
            o = Array.prototype;
        null == o[r] && n(50)(o, r, {}), t.exports = function(t) {
            o[r][t] = !0
        }
    }, function(t, e, n) {
        var r = n(345),
            o = n(124),
            i = n(127),
            s = n(98),
            a = n(67),
            u = n(208),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(39) ? c : function(t, e) {
            if (t = i(t), e = s(e, !0), u) try {
                return c(t, e)
            } catch (t) {}
            if (a(t, e)) return o(!r.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        t.exports = n(356)
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(11),
            i = n(102),
            s = n(7),
            a = n(48),
            u = n(16),
            c = n(103),
            l = n(12),
            f = n(60),
            h = n(41).f,
            p = n(71).forEach,
            d = n(22),
            y = n(54),
            v = y.set,
            g = y.getterFor;
        t.exports = function(t, e, n) {
            var y, _ = -1 !== t.indexOf("Map"),
                m = -1 !== t.indexOf("Weak"),
                b = _ ? "set" : "add",
                w = o[t],
                x = w && w.prototype,
                O = {};
            if (d && "function" == typeof w && (m || x.forEach && !s((function() {
                    (new w).entries().next()
                })))) {
                y = e((function(e, n) {
                    v(c(e, y, t), {
                        type: t,
                        collection: new w
                    }), null != n && u(n, e[b], e, _)
                }));
                var S = g(t);
                p(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function(t) {
                    var e = "add" == t || "set" == t;
                    t in x && (!m || "clear" != t) && a(y.prototype, t, (function(n, r) {
                        var o = S(this).collection;
                        if (!e && m && !l(n)) return "get" == t && void 0;
                        var i = o[t](0 === n ? 0 : n, r);
                        return e ? this : i
                    }))
                })), m || h(y.prototype, "size", {
                    configurable: !0,
                    get: function() {
                        return S(this).collection.size
                    }
                })
            } else y = n.getConstructor(e, t, _, b), i.REQUIRED = !0;
            return f(y, t, !1, !0), O[t] = y, r({
                global: !0,
                forced: !0
            }, O), m || n.setStrong(y, t, _), y
        }
    }, function(t, e, n) {
        n(56)("Float64", 8, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        var r, o, i = n(25),
            s = n(107),
            a = t.exports = {};

        function u() {
            throw new Error("setTimeout has not been defined")
        }

        function c() {
            throw new Error("clearTimeout has not been defined")
        }

        function l(t) {
            if (r === s) return s(t, 0);
            if ((r === u || !r) && s) return (r = s)(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof s ? s : u
            } catch (t) {
                r = u
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (t) {
                o = c
            }
        }();
        var f, h = [],
            p = !1,
            d = -1;

        function y() {
            p && f && (p = !1, f.length ? h = i(f).call(f, h) : d = -1, h.length && v())
        }

        function v() {
            if (!p) {
                var t = l(y);
                p = !0;
                for (var e = h.length; e;) {
                    for (f = h, h = []; ++d < e;) f && f[d].run();
                    d = -1, e = h.length
                }
                f = null, p = !1,
                    function(t) {
                        if (o === clearTimeout) return clearTimeout(t);
                        if ((o === c || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                        try {
                            o(t)
                        } catch (e) {
                            try {
                                return o.call(null, t)
                            } catch (e) {
                                return o.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function g(t, e) {
            this.fun = t, this.array = e
        }

        function _() {}
        a.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            h.push(new g(t, e)), 1 !== h.length || p || l(v)
        }, g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = _, a.addListener = _, a.once = _, a.off = _, a.removeListener = _, a.removeAllListeners = _, a.emit = _, a.prependListener = _, a.prependOnceListener = _, a.listeners = function(t) {
            return []
        }, a.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function(t, e, n) {
        var r = n(61),
            o = n(83),
            i = n(18)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(232)(!0);
        t.exports = function(t, e, n) {
            return e + (n ? r(t, e).length : 1)
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i = n(131),
            s = RegExp.prototype.exec,
            a = String.prototype.replace,
            u = s,
            c = "lastIndex",
            l = (r = /a/, o = /b*/g, s.call(r, "a"), s.call(o, "a"), 0 !== r[c] || 0 !== o[c]),
            f = void 0 !== /()??/.exec("")[1];
        (l || f) && (u = function(t) {
            var e, n, r, o;
            return f && (n = new RegExp("^" + this.source + "$(?!\\s)", i.call(this))), l && (e = this[c]), r = s.call(this, t), l && r && (this[c] = this.global ? r.index + r[0].length : e), f && r && 1 < r.length && a.call(r[0], n, (function() {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
            })), r
        }), t.exports = u
    }, function(t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = o(e), this.reject = o(n)
        }
        var o = n(15);
        t.exports.f = function(t) {
            return new r(t)
        }
    }, function(t, e, n) {
        var r = n(5),
            o = n(120);
        t.exports = function(t) {
            var e = o(t);
            if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
            return r(e.call(t))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(43),
            o = n(44),
            i = n(168),
            s = n(132);
        n(133)("match", 1, (function(t, e, n, a) {
            return [function(n) {
                var r = t(this),
                    o = null == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
            }, function(t) {
                var e = a(n, t, this);
                if (e.done) return e.value;
                var u = r(t),
                    c = String(this);
                if (!u.global) return s(u, c);
                for (var l, f = u.unicode, h = [], p = u.lastIndex = 0; null !== (l = s(u, c));) {
                    var d = String(l[0]);
                    "" === (h[p] = d) && (u.lastIndex = i(c, o(u.lastIndex), f)), p++
                }
                return 0 === p ? null : h
            }]
        }))
    }, function(t, e, n) {
        t.exports = n(464)
    }, function(t, e, n) {
        t.exports = n(474)
    }, function(t, e, n) {
        t.exports = n(500)
    }, function(t, e, n) {
        t.exports = n(516)
    }, function(t, e, n) {
        "use strict";
        var r = n(72),
            o = n(73),
            i = n(10),
            s = n(52),
            a = n(13),
            u = n(40);

        function c(t) {
            return (c = "function" == typeof u && "symbol" === a(s) ? function(t) {
                return a(t)
            } : function(t) {
                return t && "function" == typeof u && t.constructor === u && t !== u.prototype ? "symbol" : a(t)
            })(t)
        }
        i(e, "__esModule", {
            value: !0
        }), e.isTransaction = function(t) {
            return t instanceof k
        }, e.Transaction = e.Verified = void 0;
        var l, f = (l = n(130)) && l.__esModule ? l : {
                default: l
            },
            h = g(n(88)),
            p = n(179),
            d = g(n(136)),
            y = n(76);

        function v() {
            if ("function" != typeof o) return null;
            var t = new o;
            return v = function() {
                return t
            }, t
        }

        function g(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== c(t) && "function" != typeof t) return {
                default: t
            };
            var e = v();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                o = i && r;
            for (var s in t)
                if (Object.prototype.hasOwnProperty.call(t, s)) {
                    var a = o ? r(t, s) : null;
                    a && (a.get || a.set) ? i(n, s, a) : n[s] = t[s]
                } return n.default = t, e && e.set(t, n), n
        }

        function _(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function m(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i(t, r.key, r)
            }
        }

        function b(t, e, n) {
            return e && m(t.prototype, e), n && m(t, n), t
        }
        var w = d.exonum,
            x = w.CoreMessage,
            O = w.SignedMessage,
            S = function() {
                function t(e, n, r, o) {
                    _(this, t), this.schema = e, this.payload = n, this.author = r, this.signature = o, this.bytes = O.encode({
                        payload: e.encode(n).finish(),
                        author: {
                            data: (0, y.hexadecimalToUint8Array)(r)
                        },
                        signature: {
                            data: (0, y.hexadecimalToUint8Array)(o)
                        }
                    }).finish()
                }
                return b(t, [{
                    key: "serialize",
                    value: function() {
                        return this.bytes
                    }
                }, {
                    key: "hash",
                    value: function() {
                        return h.hash(this.bytes)
                    }
                }], [{
                    key: "sign",
                    value: function(t, e, n) {
                        var r = n.publicKey,
                            o = n.secretKey,
                            i = (0, y.hexadecimalToUint8Array)(o),
                            s = f.default.sign.detached(t.encode(e).finish(), i);
                        return new this(t, e, r, (0, y.uint8ArrayToHexadecimal)(s))
                    }
                }, {
                    key: "deserialize",
                    value: function(t, e) {
                        var n = O.decode(e),
                            r = n.payload,
                            o = n.author,
                            i = n.signature;
                        if (f.default.sign.detached.verify(r, i.data, o.data)) {
                            var s = t.decode(r);
                            return new this(t, s, (0, y.uint8ArrayToHexadecimal)(o.data), (0, y.uint8ArrayToHexadecimal)(i.data))
                        }
                        return null
                    }
                }]), t
            }();
        e.Verified = S;
        var k = function() {
            function t(e) {
                var n = e.schema,
                    r = e.serviceId,
                    o = e.methodId;
                _(this, t), this.serviceId = r, this.methodId = o, this.schema = n
            }
            return b(t, [{
                key: "create",
                value: function(t, e, n) {
                    var r = this._serializePayload(t);
                    return void 0 === n ? S.sign(x, r, e) : new S(x, r, e, n)
                }
            }, {
                key: "_serializePayload",
                value: function(t) {
                    var e = this.schema.encode((0, p.cleanZeroValuedFields)(t, {})).finish();
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
            }, {
                key: "serialize",
                value: function(t) {
                    return x.encode(this._serializePayload(t)).finish()
                }
            }, {
                key: "deserialize",
                value: function(t) {
                    var e = S.deserialize(x, t);
                    if (!e) return null;
                    var n = e.payload.any_tx;
                    return n && n.call_info.instance_id === this.serviceId && n.call_info.method_id === this.methodId ? (e.payload = this.schema.decode(n.arguments), e) : null
                }
            }]), t
        }();
        e.Transaction = k
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(46),
            i = n(27);
        n(164), n(272), n(540), n(231), n(541), n(6), n(230), n(542), n(543);
        var s = n(52),
            a = n(13),
            u = n(40);

        function c(t) {
            return (c = "function" == typeof u && "symbol" === a(s) ? function(t) {
                return a(t)
            } : function(t) {
                return t && "function" == typeof u && t.constructor === u && t !== u.prototype ? "symbol" : a(t)
            })(t)
        }

        function l(t) {
            switch (c(t)) {
                case "string":
                    return "0" !== t && 0 !== t.length;
                case "number":
                    return 0 !== t
            }
            return !0
        }
        n(10)(e, "__esModule", {
            value: !0
        }), e.isObject = function(t) {
            return !("object" !== c(t) || i(t) || null === t || t instanceof Date)
        }, e.verifyElement = l, e.cleanZeroValuedFields = function t(e, n) {
            var i = o(e);
            return r(i).call(i, (function(r) {
                var o;
                (o = e[r]) instanceof Int8Array || o instanceof Int16Array || o instanceof Int32Array || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Uint16Array || o instanceof Uint32Array || o instanceof Float32Array || o instanceof Float64Array || e[r] instanceof Array ? n[r] = e[r] : "object" === c(e[r]) ? n[r] = t(e[r], {}) : l(e[r]) && (n[r] = e[r])
            })), n
        }
    }, function(t, e, n) {
        "use strict";
        n(6);
        var r = n(27),
            o = n(31);
        n(10)(e, "__esModule", {
            value: !0
        }), e.validateInteger = function(t, e, n, r, o) {
            return !("number" != typeof t || t < e || n < t)
        }, e.validateHexadecimal = function(t, e) {
            if (e = e || 32, "string" != typeof t) return !1;
            if (t.length !== 2 * e) return !1;
            for (var n = 0; n < t.length; n++)
                if (isNaN(o(t[n], 16))) return !1;
            return !0
        }, e.validateBytesArray = function(t, e) {
            if (!(r(t) || t instanceof Uint8Array)) return !1;
            if (e && t.length !== e) return !1;
            for (var n = 0; n < t.length; n++)
                if ("number" != typeof t[n] || t[n] < 0 || 255 < t[n]) return !1;
            return !0
        }, e.validateBinaryString = function(t, e) {
            if (void 0 !== e && t.length !== e) return !1;
            for (var n = 0; n < t.length; n++)
                if ("0" !== t[n] && "1" !== t[n]) return !1;
            return !0
        }
    }, function(t, e, n) {
        t.exports = n(555)
    }, function(t, e, n) {
        var r = n(300),
            o = n(183);
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = r(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e)
        }
    }, function(t, e, n) {
        var r = n(301);

        function o(e, n) {
            return t.exports = o = r || function(t, e) {
                return t.__proto__ = e, t
            }, o(e, n)
        }
        t.exports = o
    }, function(t, e, n) {
        var r = n(13),
            o = n(613);
        t.exports = function(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? o(t) : e
        }
    }, function(t, e, n) {
        var r = n(300),
            o = n(616),
            i = n(141),
            s = n(183),
            a = n(641),
            u = n(644);

        function c(e) {
            var n = "function" == typeof o ? new o : void 0;
            return t.exports = c = function(t) {
                if (null === t || !a(t)) return t;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
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
                }), s(e, t)
            }, c(e)
        }
        t.exports = c
    }, function(t, e, n) {
        var r = n(45),
            o = n(51),
            i = function() {
                "use strict";

                function t(e, n) {
                    r(this, t), this.requestUrl = e, this.responseProcessor = "function" == typeof n ? n : function(t) {
                        return t
                    }, this.blockchainConnector = null
                }
                return o(t, [{
                    key: "send",
                    value: function(t) {
                        return (this.blockchainConnector = t).makeRequest(this.requestUrl).then(this.responseProcessor)
                    }
                }]), t
            }();
        t.exports = i
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            if (a(t)) {
                var e = t[y];
                return void 0 !== e ? !!e : s(t)
            }
        }
        var o = n(0),
            i = n(7),
            s = n(79),
            a = n(12),
            u = n(37),
            c = n(42),
            l = n(116),
            f = n(143),
            h = n(95),
            p = n(9),
            d = n(146),
            y = p("isConcatSpreadable"),
            v = 9007199254740991,
            g = "Maximum allowed index exceeded",
            _ = 51 <= d || !i((function() {
                var t = [];
                return t[y] = !1, t.concat()[0] !== t
            })),
            m = h("concat");
        o({
            target: "Array",
            proto: !0,
            forced: !_ || !m
        }, {
            concat: function(t) {
                var e, n, o, i, s, a = u(this),
                    h = f(a, 0),
                    p = 0;
                for (e = -1, o = arguments.length; e < o; e++)
                    if (r(s = -1 === e ? a : arguments[e])) {
                        if (i = c(s.length), v < p + i) throw TypeError(g);
                        for (n = 0; n < i; n++, p++) n in s && l(h, p, s[n])
                    } else {
                        if (v <= p) throw TypeError(g);
                        l(h, p++, s)
                    } return h.length = p, h
            }
        })
    }, function(t, e, n) {
        var r = n(22),
            o = n(7),
            i = n(142);
        t.exports = !r && !o((function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(t, e, n) {
        function r(t, e) {
            var n = a[s(t)];
            return n == c || n != u && ("function" == typeof e ? o(e) : !!e)
        }
        var o = n(7),
            i = /#|\.prototype\./,
            s = r.normalize = function(t) {
                return String(t).replace(i, ".").toLowerCase()
            },
            a = r.data = {},
            u = r.NATIVE = "N",
            c = r.POLYFILL = "P";
        t.exports = r
    }, function(t, e, n) {
        var r = n(11),
            o = n(310),
            i = "__core-js_shared__",
            s = r[i] || o(i, {});
        t.exports = s
    }, function(t, e, n) {
        var r = n(145);
        t.exports = r && !Symbol.sham && "symbol" == _typeof2(Symbol.iterator)
    }, function(t, e, n) {
        n(315);
        var r = n(3);
        t.exports = r.Array.isArray
    }, function(t, e, n) {
        n(64), n(322);
        var r = n(3);
        t.exports = r.Array.from
    }, function(t, e, n) {
        var r = n(11),
            o = n(195),
            i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i))
    }, function(t, e, n) {
        var r = n(190),
            o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
            return o.call(t)
        }), t.exports = r.inspectSource
    }, function(t, e, n) {
        "use strict";

        function r() {
            return this
        }
        var o = n(197).IteratorPrototype,
            i = n(80),
            s = n(78),
            a = n(60),
            u = n(66);
        t.exports = function(t, e, n) {
            var c = e + " Iterator";
            return t.prototype = i(o, {
                next: s(1, n)
            }), a(t, c, !1, !0), u[c] = r, t
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i, s = n(149),
            a = n(48),
            u = n(26),
            c = n(9),
            l = n(8),
            f = c("iterator"),
            h = !1;
        [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : h = !0), null == r && (r = {}), l || u(r, f) || a(r, f, (function() {
            return this
        })), t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: h
        }
    }, function(t, e, n) {
        var r = n(7);
        t.exports = !r((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }))
    }, function(t, e, n) {
        var r = n(22),
            o = n(41),
            i = n(5),
            s = n(97);
        t.exports = r ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, r = s(e), a = r.length, u = 0; u < a;) o.f(t, n = r[u++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(26),
            o = n(47),
            i = n(201).indexOf,
            s = n(96);
        t.exports = function(t, e) {
            var n, a = o(t),
                u = 0,
                c = [];
            for (n in a) !r(s, n) && r(a, n) && c.push(n);
            for (; e.length > u;) r(a, n = e[u++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(t, e, n) {
        function r(t) {
            return function(e, n, r) {
                var a, u = o(e),
                    c = i(u.length),
                    l = s(r, c);
                if (t && n != n) {
                    for (; l < c;)
                        if ((a = u[l++]) != a) return !0
                } else
                    for (; l < c; l++)
                        if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1
            }
        }
        var o = n(47),
            i = n(42),
            s = n(119);
        t.exports = {
            includes: r(!0),
            indexOf: r(!1)
        }
    }, function(t, e, n) {
        var r = n(38);
        t.exports = r("document", "documentElement")
    }, function(t, e, n) {
        var r = n(5),
            o = n(321);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (n) {}
            return function(n, i) {
                return r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0)
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(9),
            o = n(66),
            i = r("iterator"),
            s = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (o.Array === t || s[i] === t)
        }
    }, function(t, e, n) {
        var r = n(9)("iterator"),
            o = !1;
        try {
            var i = 0,
                s = {
                    next: function() {
                        return {
                            done: !!i++
                        }
                    },
                    return: function() {
                        o = !0
                    }
                };
            s[r] = function() {
                return this
            }, Array.from(s, (function() {
                throw 2
            }))
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = {};
                i[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, e) {
        t.exports = function() {}
    }, function(t, e, n) {
        t.exports = !n(39) && !n(29)((function() {
            return 7 != Object.defineProperty(n(209)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(t, e, n) {
        var r = n(61),
            o = n(30).document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        for (var r, o = n(30), i = n(50), s = n(99), a = s("typed_array"), u = s("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[h[f++]]) ? (i(r.prototype, a, !0), i(r.prototype, u, !0)) : l = !1;
        t.exports = {
            ABV: c,
            CONSTR: l,
            TYPED: a,
            VIEW: u
        }
    }, function(t, e, n) {
        var r = n(58);
        t.exports = function(t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t
        }
    }, function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function(t, e, n) {
        var r = n(68),
            o = n(44);
        t.exports = function(t) {
            if (void 0 === t) return 0;
            var e = r(t),
                n = o(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        }
    }, function(t, e, n) {
        var r = n(67),
            o = n(127),
            i = n(154)(!1),
            s = n(155)("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = o(t),
                u = 0,
                c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; e.length > u;) r(a, n = e[u++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, function(t, e, n) {
        var r = n(83);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(215),
            o = n(156);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(30).document;
        t.exports = r && r.documentElement
    }, function(t, e, n) {
        var r = n(67),
            o = n(70),
            i = n(155)("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function(t, e, n) {
        var r = n(43),
            o = n(210),
            i = n(18)("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || null == (n = r(s)[i]) ? e : o(n)
        }
    }, function(t, e, n) {
        "use strict";

        function r() {
            return this
        }
        var o = n(122),
            i = n(49),
            s = n(58),
            a = n(50),
            u = n(84),
            c = n(342),
            l = n(158),
            f = n(219),
            h = n(18)("iterator"),
            p = !([].keys && "next" in [].keys()),
            d = "values";
        t.exports = function(t, e, n, y, v, g, _) {
            function m(t) {
                if (!p && t in E) return E[t];
                switch (t) {
                    case "keys":
                    case d:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            }
            c(n, e, y);
            var b, w, x, O = e + " Iterator",
                S = v == d,
                k = !1,
                E = t.prototype,
                P = E[h] || E["@@iterator"] || v && E[v],
                A = P || m(v),
                j = v ? S ? m("entries") : A : void 0,
                T = "Array" == e && E.entries || P;
            if (T && (x = f(T.call(new t))) !== Object.prototype && x.next && (l(x, O, !0), o || "function" == typeof x[h] || a(x, h, r)), S && P && P.name !== d && (k = !0, A = function() {
                    return P.call(this)
                }), o && !_ || !p && !k && E[h] || a(E, h, A), u[e] = A, u[O] = r, v)
                if (b = {
                        values: S ? A : m(d),
                        keys: g ? A : m("keys"),
                        entries: j
                    }, _)
                    for (w in b) w in E || s(E, w, b[w]);
                else i(i.P + i.F * (p || k), e, b);
            return b
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(30),
            o = n(57),
            i = n(39),
            s = n(18)("species");
        t.exports = function(t) {
            var e = r[t];
            i && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e, n) {
        var r = n(7);
        t.exports = !r((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }))
    }, function(t, e, n) {
        "use strict";
        var r = n(41).f,
            o = n(80),
            i = n(104),
            s = n(24),
            a = n(103),
            u = n(16),
            c = n(148),
            l = n(225),
            f = n(22),
            h = n(102).fastKey,
            p = n(54),
            d = p.set,
            y = p.getterFor;
        t.exports = {
            getConstructor: function(t, e, n, c) {
                function l(t, e, n) {
                    var r, o, i = v(t),
                        s = g(t, e);
                    return s ? s.value = n : (i.last = s = {
                        index: o = h(e, !0),
                        key: e,
                        value: n,
                        previous: r = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = s), r && (r.next = s), f ? i.size++ : t.size++, "F" !== o && (i.index[o] = s)), t
                }
                var p = t((function(t, r) {
                        a(t, p, e), d(t, {
                            type: e,
                            index: o(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), f || (t.size = 0), null != r && u(r, t[c], t, n)
                    })),
                    v = y(e),
                    g = function(t, e) {
                        var n, r = v(t),
                            o = h(e);
                        if ("F" !== o) return r.index[o];
                        for (n = r.first; n; n = n.next)
                            if (n.key == e) return n
                    };
                return i(p.prototype, {
                    clear: function() {
                        for (var t = v(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                        t.first = t.last = void 0, f ? t.size = 0 : this.size = 0
                    },
                    delete: function(t) {
                        var e = v(this),
                            n = g(this, t);
                        if (n) {
                            var r = n.next,
                                o = n.previous;
                            delete e.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), e.first == n && (e.first = r), e.last == n && (e.last = o), f ? e.size-- : this.size--
                        }
                        return !!n
                    },
                    forEach: function(t, e) {
                        for (var n, r = v(this), o = s(t, 1 < arguments.length ? e : void 0, 3); n = n ? n.next : r.first;)
                            for (o(n.value, n.key, this); n && n.removed;) n = n.previous
                    },
                    has: function(t) {
                        return !!g(this, t)
                    }
                }), i(p.prototype, n ? {
                    get: function(t) {
                        var e = g(this, t);
                        return e && e.value
                    },
                    set: function(t, e) {
                        return l(this, 0 === t ? 0 : t, e)
                    }
                } : {
                    add: function(t) {
                        return l(this, t = 0 === t ? 0 : t, t)
                    }
                }), f && r(p.prototype, "size", {
                    get: function() {
                        return v(this).size
                    }
                }), p
            },
            setStrong: function(t, e, n) {
                var r = e + " Iterator",
                    o = y(e),
                    i = y(r);
                c(t, e, (function(t, e) {
                    d(this, {
                        type: r,
                        target: t,
                        state: o(t),
                        kind: e,
                        last: void 0
                    })
                }), (function() {
                    for (var t = i(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
                    return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                        value: n.key,
                        done: !1
                    } : "values" == e ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : {
                        value: t.target = void 0,
                        done: !0
                    }
                }), n ? "entries" : "values", !n, !0), l(e)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(38),
            o = n(41),
            i = n(9),
            s = n(22),
            a = i("species");
        t.exports = function(t) {
            var e = r(t),
                n = o.f;
            s && e && !e[a] && n(e, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e, n) {
        t.exports = n(365)
    }, function(t, e, n) {
        t.exports = n(374)
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        n(380);
        var r = n(3).Object,
            o = t.exports = function(t, e, n) {
                return r.defineProperty(t, e, n)
            };
        r.defineProperty.sham && (o.sham = !0)
    }, function(t, e, n) {
        n(56)("Int32", 4, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        n(56)("Uint16", 2, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        var r = n(68),
            o = n(69);
        t.exports = function(t) {
            return function(e, n) {
                var i, s, a = String(o(e)),
                    u = r(n),
                    c = a.length;
                return u < 0 || c <= u ? t ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || 56319 < i || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || 57343 < s ? t ? a.charAt(u) : i : t ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(t, e, n) {
        n(234), n(64), n(55);
        var r = n(134);
        t.exports = r.f("iterator")
    }, function(t, e, n) {
        n(17)("iterator")
    }, function(t, e, n) {
        n(187), n(105), n(392), n(394), n(395), n(396), n(397), n(234), n(398), n(399), n(400), n(401), n(237), n(402), n(403), n(404), n(405), n(406), n(407);
        var r = n(3);
        t.exports = r.Symbol
    }, function(t, e, n) {
        var r = n(200),
            o = n(150).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        n(17)("species")
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                var n = String(o(e));
                return 1 & t && (n = n.replace(s, "")), 2 & t && (n = n.replace(a, "")), n
            }
        }
        var o = n(93),
            i = "[" + n(170) + "]",
            s = RegExp("^" + i + i + "*"),
            a = RegExp(i + i + "*$");
        t.exports = {
            start: r(1),
            end: r(2),
            trim: r(3)
        }
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        var r = n(11);
        t.exports = r.Promise
    }, function(t, e, n) {
        function r(t) {
            if (S.hasOwnProperty(t)) {
                var e = S[t];
                delete S[t], e()
            }
        }

        function o(t) {
            return function() {
                r(t)
            }
        }

        function i(t) {
            r(t.data)
        }

        function s(t) {
            l.postMessage(t + "", g.protocol + "//" + g.host)
        }
        var a, u, c, l = n(11),
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
            S = {},
            k = "onreadystatechange";
        _ && m || (_ = function(t) {
            for (var e = [], n = 1; n < arguments.length;) e.push(arguments[n++]);
            return S[++O] = function() {
                ("function" == typeof t ? t : Function(t)).apply(void 0, e)
            }, a(O), O
        }, m = function(t) {
            delete S[t]
        }, "process" == h(b) ? a = function(t) {
            b.nextTick(o(t))
        } : x && x.now ? a = function(t) {
            x.now(o(t))
        } : w && !v ? (c = (u = new w).port2, u.port1.onmessage = i, a = p(c.postMessage, c, 1)) : !l.addEventListener || "function" != typeof postMessage || l.importScripts || f(s) ? a = k in y("script") ? function(t) {
            d.appendChild(y("script"))[k] = function() {
                d.removeChild(this), r(t)
            }
        } : function(t) {
            setTimeout(o(t), 0)
        } : (a = s, l.addEventListener("message", i, !1))), t.exports = {
            set: _,
            clear: m
        }
    }, function(t, e, n) {
        var r = n(147);
        t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
    }, function(t, e, n) {
        var r = n(5),
            o = n(12),
            i = n(171);
        t.exports = function(t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function(t, e) {
        t.exports = function(t) {
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
    }, function(t, e, n) {
        "use strict";
        var r = n(232)(!0);
        n(221)(String, "String", (function(t) {
            this._t = String(t), this._i = 0
        }), (function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        }))
    }, function(t, e, n) {
        t.exports = n(439)
    }, function(t, e, n) {
        n(444);
        var r = n(3);
        t.exports = r.Object.getPrototypeOf
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return t.apply(e, n)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(28),
            i = n(109),
            s = n(1);
        n(4), n(2), n(33);
        var a = n(32);

        function u(t) {
            return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(t, e, n) {
            if (!e) return t;
            var c;
            if (n) c = n(e);
            else if (a.isURLSearchParams(e)) c = e.toString();
            else {
                var l = [];
                s(a).call(a, e, (function(t, e) {
                    null != t && (a.isArray(t) ? e += "[]" : t = [t], s(a).call(a, t, (function(t) {
                        a.isDate(t) ? t = t.toISOString() : a.isObject(t) && (t = i(t)), l.push(u(e) + "=" + u(t))
                    })))
                })), c = l.join("&")
            }
            if (c) {
                var f = o(t).call(t, "#"); - 1 !== f && (t = r(t).call(t, 0, f)), t += (-1 === o(t).call(t, "?") ? "?" : "&") + c
            }
            return t
        }
    }, function(t, e, n) {
        var r = n(447),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.indexOf;
            return t === o || t instanceof Array && e === o.indexOf ? r : e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function(t, e, n) {
        "use strict";
        (function(e) {
            var r = n(1),
                o = n(109);
            n(4), n(2);
            var i = n(32),
                s = n(452),
                a = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function u(t, e) {
                !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var c, l = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (c = n(254)), c),
                transformRequest: [function(t, e) {
                    return s(e, "Accept"), s(e, "Content-Type"), i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) ? t : i.isArrayBufferView(t) ? t.buffer : i.isURLSearchParams(t) ? (u(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : i.isObject(t) ? (u(e, "application/json;charset=utf-8"), o(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(t) {
                    return 200 <= t && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r(i).call(i, ["delete", "get", "head"], (function(t) {
                l.headers[t] = {}
            })), r(i).call(i, ["post", "put", "patch"], (function(t) {
                l.headers[t] = i.merge(a)
            })), t.exports = l
        }).call(this, n(165))
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(28),
            i = n(23),
            s = n(32),
            a = n(453),
            u = n(455),
            c = n(250),
            l = n(460),
            f = n(463),
            h = n(469),
            p = n(255);
        t.exports = function(t) {
            return new i((function(e, n) {
                var i = t.data,
                    d = t.headers;
                s.isFormData(i) && delete d["Content-Type"];
                var y = new XMLHttpRequest;
                if (t.auth) {
                    var v = t.auth.username || "",
                        g = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(v + ":" + g)
                }
                var _ = l(t.baseURL, t.url);
                if (y.open(t.method.toUpperCase(), c(_, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, y.onreadystatechange = function() {
                        var r;
                        if (y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === o(r = y.responseURL).call(r, "file:"))) {
                            var i = "getAllResponseHeaders" in y ? f(y.getAllResponseHeaders()) : null,
                                s = {
                                    data: t.responseType && "text" !== t.responseType ? y.response : y.responseText,
                                    status: y.status,
                                    statusText: y.statusText,
                                    headers: i,
                                    config: t,
                                    request: y
                                };
                            a(e, n, s), y = null
                        }
                    }, y.onabort = function() {
                        y && (n(p("Request aborted", t, "ECONNABORTED", y)), y = null)
                    }, y.onerror = function() {
                        n(p("Network Error", t, null, y)), y = null
                    }, y.ontimeout = function() {
                        var e = "timeout of " + t.timeout + "ms exceeded";
                        t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(p(e, t, "ECONNABORTED", y)), y = null
                    }, s.isStandardBrowserEnv()) {
                    var m = (t.withCredentials || h(_)) && t.xsrfCookieName ? u.read(t.xsrfCookieName) : void 0;
                    m && (d[t.xsrfHeaderName] = m)
                }
                if ("setRequestHeader" in y && r(s).call(s, d, (function(t, e) {
                        void 0 === i && "content-type" === e.toLowerCase() ? delete d[e] : y.setRequestHeader(e, t)
                    })), s.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), t.responseType) try {
                    y.responseType = t.responseType
                } catch (v) {
                    if ("json" !== t.responseType) throw v
                }
                "function" == typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                    y && (y.abort(), n(t), y = null)
                })), i = i || null, y.send(i)
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(454);
        t.exports = function(t, e, n, o, i) {
            var s = new Error(t);
            return r(s, e, n, o, i)
        }
    }, function(t, e, n) {
        t.exports = n(456)
    }, function(t, e, n) {
        var r = n(30),
            o = n(258),
            i = n(57).f,
            s = n(126).f,
            a = n(167),
            u = n(131),
            c = r.RegExp,
            l = c,
            f = c.prototype,
            h = /a/g,
            p = /a/g,
            d = new c(h) !== h;
        if (n(39) && (!d || n(29)((function() {
                return p[n(18)("match")] = !1, c(h) != h || c(p) == p || "/a/i" != c(h, "i")
            })))) {
            var y = function(t) {
                t in c || i(c, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            };
            c = function(t, e) {
                var n = this instanceof c,
                    r = a(t),
                    i = void 0 === e;
                return !n && r && t.constructor === c && i ? t : o(d ? new l(r && !i ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && i ? u.call(t) : e), n ? this : f, c)
            };
            for (var v = s(l), g = 0; v.length > g;) y(v[g++]);
            (f.constructor = c).prototype = f, n(58)(r, "RegExp", c)
        }
        n(222)("RegExp")
    }, function(t, e, n) {
        var r = n(61),
            o = n(459).set;
        t.exports = function(t, e, n) {
            var i, s = e.constructor;
            return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && o && o(t, i), t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(43),
            o = n(470),
            i = n(132);
        n(133)("search", 1, (function(t, e, n, s) {
            return [function(n) {
                var r = t(this),
                    o = null == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
            }, function(t) {
                var e = s(n, t, this);
                if (e.done) return e.value;
                var a = r(t),
                    u = String(this),
                    c = a.lastIndex;
                o(c, 0) || (a.lastIndex = 0);
                var l = i(a, u);
                return o(a.lastIndex, c) || (a.lastIndex = c), null === l ? -1 : l.index
            }]
        }))
    }, function(t, e, n) {
        "use strict";
        var r = n(28),
            o = n(46),
            i = n(175),
            s = n(25),
            a = n(1),
            u = n(14),
            c = n(32);
        t.exports = function(t, e) {
            var n, l, f, h;
            e = e || {};
            var p = {},
                d = ["url", "method", "data"],
                y = ["headers", "auth", "proxy", "params"],
                v = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                g = ["validateStatus"];

            function _(t, e) {
                return c.isPlainObject(t) && c.isPlainObject(e) ? c.merge(t, e) : c.isPlainObject(e) ? c.merge({}, e) : c.isArray(e) ? u(e).call(e) : e
            }

            function m(n) {
                c.isUndefined(e[n]) ? c.isUndefined(t[n]) || (p[n] = _(void 0, t[n])) : p[n] = _(t[n], e[n])
            }
            a(c).call(c, d, (function(t) {
                c.isUndefined(e[t]) || (p[t] = _(void 0, e[t]))
            })), a(c).call(c, y, m), a(c).call(c, v, (function(n) {
                c.isUndefined(e[n]) ? c.isUndefined(t[n]) || (p[n] = _(void 0, t[n])) : p[n] = _(void 0, e[n])
            })), a(c).call(c, g, (function(n) {
                n in e ? p[n] = _(t[n], e[n]) : n in t && (p[n] = _(void 0, t[n]))
            }));
            var b = s(n = s(l = s(d).call(d, y)).call(l, v)).call(n, g),
                w = i(f = s(h = o(t)).call(h, o(e))).call(f, (function(t) {
                    return -1 === r(b).call(b, t)
                }));
            return a(c).call(c, w, m), p
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.message = t
        }
        n(4), n(2), r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r, o, i, s, a = n(72),
            u = n(73),
            c = n(46),
            l = n(1),
            f = n(10),
            h = n(52),
            p = n(13),
            d = n(40);

        function y(t) {
            return (y = "function" == typeof d && "symbol" === p(h) ? function(t) {
                return p(t)
            } : function(t) {
                return t && "function" == typeof d && t.constructor === d && t !== d.prototype ? "symbol" : p(t)
            })(t)
        }
        f(e, "__esModule", {
            value: !0
        });
        var v = {
            protocol: !0
        };
        e.protocol = void 0;
        var g = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== y(t) && "function" != typeof t) return {
                default: t
            };
            var e = x();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                r = f && a;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? a(t, o) : null;
                    i && (i.get || i.set) ? f(n, o, i) : n[o] = t[o]
                } return n.default = t, e && e.set(t, n), n
        }(n(136));
        e.protocol = g;
        var _ = n(277);
        l(r = c(_)).call(r, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
                enumerable: !0,
                get: function() {
                    return _[t]
                }
            }))
        }));
        var m = n(178);
        l(o = c(m)).call(o, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
                enumerable: !0,
                get: function() {
                    return m[t]
                }
            }))
        }));
        var b = n(76);
        l(i = c(b)).call(i, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
                enumerable: !0,
                get: function() {
                    return b[t]
                }
            }))
        }));
        var w = n(140);

        function x() {
            if ("function" != typeof u) return null;
            var t = new u;
            return x = function() {
                return t
            }, t
        }
        l(s = c(w)).call(s, (function(t) {
            "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(v, t) || f(e, t, {
                enumerable: !0,
                get: function() {
                    return w[t]
                }
            }))
        }))
    }, function(t, e, n) {
        "use strict";
        var r = n(21);
        t.exports = h;
        var o, i = n(74),
            s = i.LongBits,
            a = i.base64,
            u = i.utf8;

        function c(t, e, n) {
            this.fn = t, this.len = e, this.next = void 0, this.val = n
        }

        function l() {}

        function f(t) {
            this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
        }

        function h() {
            this.len = 0, this.head = new c(l, 0, 0), this.tail = this.head, this.states = null
        }

        function p(t, e, n) {
            e[n] = 255 & t
        }

        function d(t, e) {
            this.len = t, this.next = void 0, this.val = e
        }

        function y(t, e, n) {
            for (; t.hi;) e[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
            for (; 127 < t.lo;) e[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
            e[n++] = t.lo
        }

        function v(t, e, n) {
            e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
        }
        h.create = i.Buffer ? function() {
            return (h.create = function() {
                return new o
            })()
        } : function() {
            return new h
        }, h.alloc = function(t) {
            return new i.Array(t)
        }, i.Array !== Array && (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)), h.prototype._push = function(t, e, n) {
            return this.tail = this.tail.next = new c(t, e, n), this.len += e, this
        }, (d.prototype = r(c.prototype)).fn = function(t, e, n) {
            for (; 127 < t;) e[n++] = 127 & t | 128, t >>>= 7;
            e[n] = t
        }, h.prototype.uint32 = function(t) {
            return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
        }, h.prototype.int32 = function(t) {
            return t < 0 ? this._push(y, 10, s.fromNumber(t)) : this.uint32(t)
        }, h.prototype.sint32 = function(t) {
            return this.uint32((t << 1 ^ t >> 31) >>> 0)
        }, h.prototype.int64 = h.prototype.uint64 = function(t) {
            var e = s.from(t);
            return this._push(y, e.length(), e)
        }, h.prototype.sint64 = function(t) {
            var e = s.from(t).zzEncode();
            return this._push(y, e.length(), e)
        }, h.prototype.bool = function(t) {
            return this._push(p, 1, t ? 1 : 0)
        }, h.prototype.sfixed32 = h.prototype.fixed32 = function(t) {
            return this._push(v, 4, t >>> 0)
        }, h.prototype.sfixed64 = h.prototype.fixed64 = function(t) {
            var e = s.from(t);
            return this._push(v, 4, e.lo)._push(v, 4, e.hi)
        }, h.prototype.float = function(t) {
            return this._push(i.float.writeFloatLE, 4, t)
        }, h.prototype.double = function(t) {
            return this._push(i.float.writeDoubleLE, 8, t)
        };
        var g = i.Array.prototype.set ? function(t, e, n) {
            e.set(t, n)
        } : function(t, e, n) {
            for (var r = 0; r < t.length; ++r) e[n + r] = t[r]
        };
        h.prototype.bytes = function(t) {
            var e = t.length >>> 0;
            if (!e) return this._push(p, 1, 0);
            if (i.isString(t)) {
                var n = h.alloc(e = a.length(t));
                a.decode(t, n, 0), t = n
            }
            return this.uint32(e)._push(g, e, t)
        }, h.prototype.string = function(t) {
            var e = u.length(t);
            return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0)
        }, h.prototype.fork = function() {
            return this.states = new f(this), this.head = this.tail = new c(l, 0, 0), this.len = 0, this
        }, h.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(l, 0, 0), this.len = 0), this
        }, h.prototype.ldelim = function() {
            var t = this.head,
                e = this.tail,
                n = this.len;
            return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = e, this.len += n), this
        }, h.prototype.finish = function() {
            for (var t = this.head.next, e = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, e, n), n += t.len, t = t.next;
            return e
        }, h._configure = function(t) {
            o = t
        }
    }, function(t, e, n) {
        n(499);
        var r = n(3).Object;
        t.exports = function(t, e) {
            return r.create(t, e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(23);
        t.exports = function(t, e) {
            for (var n = new Array(arguments.length - 1), o = 0, i = 2, s = !0; i < arguments.length;) n[o++] = arguments[i++];
            return new r((function(r, i) {
                n[o] = function(t) {
                    if (s)
                        if (s = !1, t) i(t);
                        else {
                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length;) e[n++] = arguments[n];
                            r.apply(null, e)
                        }
                };
                try {
                    t.apply(e || null, n)
                } catch (t) {
                    s && (s = !1, i(t))
                }
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = e;
        o.length = function(t) {
            var e = t.length;
            if (!e) return 0;
            for (var n = 0; 1 < --e % 4 && "=" === t.charAt(e);) ++n;
            return Math.ceil(3 * t.length) / 4 - n
        };
        for (var i = new Array(64), s = new Array(123), a = 0; a < 64;) s[i[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
        o.encode = function(t, e, n) {
            for (var o, s = null, a = [], u = 0, c = 0; e < n;) {
                var l = t[e++];
                switch (c) {
                    case 0:
                        a[u++] = i[l >> 2], o = (3 & l) << 4, c = 1;
                        break;
                    case 1:
                        a[u++] = i[o | l >> 4], o = (15 & l) << 2, c = 2;
                        break;
                    case 2:
                        a[u++] = i[o | l >> 6], a[u++] = i[63 & l], c = 0
                }
                8191 < u && ((s = s || []).push(String.fromCharCode.apply(String, a)), u = 0)
            }
            return c && (a[u++] = i[o], a[u++] = 61, 1 === c && (a[u++] = 61)), s ? (u && s.push(String.fromCharCode.apply(String, r(a).call(a, 0, u))), s.join("")) : String.fromCharCode.apply(String, r(a).call(a, 0, u))
        };
        var u = "invalid encoding";
        o.decode = function(t, e, n) {
            for (var r, o = n, i = 0, a = 0; a < t.length;) {
                var c = t.charCodeAt(a++);
                if (61 === c && 1 < i) break;
                if (void 0 === (c = s[c])) throw Error(u);
                switch (i) {
                    case 0:
                        r = c, i = 1;
                        break;
                    case 1:
                        e[n++] = r << 2 | (48 & c) >> 4, r = c, i = 2;
                        break;
                    case 2:
                        e[n++] = (15 & r) << 4 | (60 & c) >> 2, r = c, i = 3;
                        break;
                    case 3:
                        e[n++] = (3 & r) << 6 | c, i = 0
                }
            }
            if (1 === i) throw Error(u);
            return n - o
        }, o.test = function(t) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(268);

        function o() {
            this._listeners = {}
        }(t.exports = o).prototype.on = function(t, e, n) {
            return (this._listeners[t] || (this._listeners[t] = [])).push({
                fn: e,
                ctx: n || this
            }), this
        }, o.prototype.off = function(t, e) {
            if (void 0 === t) this._listeners = {};
            else if (void 0 === e) this._listeners[t] = [];
            else
                for (var n = this._listeners[t], o = 0; o < n.length;) n[o].fn === e ? r(n).call(n, o, 1) : ++o;
            return this
        }, o.prototype.emit = function(t) {
            var e = this._listeners[t];
            if (e) {
                for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                for (r = 0; r < e.length;) e[r].fn.apply(e[r++].ctx, n)
            }
            return this
        }
    }, function(t, e, n) {
        t.exports = n(503)
    }, function(t, e, n) {
        "use strict";
        n(164);
        var r = n(139);

        function o(t) {
            function e(t, e, n, r) {
                var o = e < 0 ? 1 : 0;
                if (o && (e = -e), 0 === e) t(0 < 1 / e ? 0 : 2147483648, n, r);
                else if (isNaN(e)) t(2143289344, n, r);
                else if (34028234663852886e22 < e) t((o << 31 | 2139095040) >>> 0, n, r);
                else if (e < 11754943508222875e-54) t((o << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, n, r);
                else {
                    var i = Math.floor(Math.log(e) / Math.LN2);
                    t((o << 31 | i + 127 << 23 | 8388607 & Math.round(e * Math.pow(2, -i) * 8388608)) >>> 0, n, r)
                }
            }

            function n(t, e, n) {
                var r = t(e, n),
                    o = 2 * (r >> 31) + 1,
                    i = r >>> 23 & 255,
                    s = 8388607 & r;
                return 255 == i ? s ? NaN : 1 / 0 * o : 0 == i ? 1401298464324817e-60 * o * s : o * Math.pow(2, i - 150) * (8388608 + s)
            }

            function o(t, e, n) {
                h[0] = t, e[n] = p[0], e[n + 1] = p[1], e[n + 2] = p[2], e[n + 3] = p[3]
            }

            function c(t, e, n) {
                h[0] = t, e[n] = p[3], e[n + 1] = p[2], e[n + 2] = p[1], e[n + 3] = p[0]
            }

            function l(t, e) {
                return p[0] = t[e], p[1] = t[e + 1], p[2] = t[e + 2], p[3] = t[e + 3], h[0]
            }

            function f(t, e) {
                return p[3] = t[e], p[2] = t[e + 1], p[1] = t[e + 2], p[0] = t[e + 3], h[0]
            }
            var h, p, d, y, v, g;

            function _(t, e, n, r, o, i) {
                var s = r < 0 ? 1 : 0;
                if (s && (r = -r), 0 === r) t(0, o, i + e), t(0 < 1 / r ? 0 : 2147483648, o, i + n);
                else if (isNaN(r)) t(0, o, i + e), t(2146959360, o, i + n);
                else if (17976931348623157e292 < r) t(0, o, i + e), t((s << 31 | 2146435072) >>> 0, o, i + n);
                else {
                    var a;
                    if (r < 22250738585072014e-324) t((a = r / 5e-324) >>> 0, o, i + e), t((s << 31 | a / 4294967296) >>> 0, o, i + n);
                    else {
                        var u = Math.floor(Math.log(r) / Math.LN2);
                        1024 === u && (u = 1023), t(4503599627370496 * (a = r * Math.pow(2, -u)) >>> 0, o, i + e), t((s << 31 | u + 1023 << 20 | 1048576 * a & 1048575) >>> 0, o, i + n)
                    }
                }
            }

            function m(t, e, n, r, o) {
                var i = t(r, o + e),
                    s = t(r, o + n),
                    a = 2 * (s >> 31) + 1,
                    u = s >>> 20 & 2047,
                    c = 4294967296 * (1048575 & s) + i;
                return 2047 == u ? c ? NaN : 1 / 0 * a : 0 == u ? 5e-324 * a * c : a * Math.pow(2, u - 1075) * (c + 4503599627370496)
            }

            function b(t, e, n) {
                y[0] = t, e[n] = v[0], e[n + 1] = v[1], e[n + 2] = v[2], e[n + 3] = v[3], e[n + 4] = v[4], e[n + 5] = v[5], e[n + 6] = v[6], e[n + 7] = v[7]
            }

            function w(t, e, n) {
                y[0] = t, e[n] = v[7], e[n + 1] = v[6], e[n + 2] = v[5], e[n + 3] = v[4], e[n + 4] = v[3], e[n + 5] = v[2], e[n + 6] = v[1], e[n + 7] = v[0]
            }

            function x(t, e) {
                return v[0] = t[e], v[1] = t[e + 1], v[2] = t[e + 2], v[3] = t[e + 3], v[4] = t[e + 4], v[5] = t[e + 5], v[6] = t[e + 6], v[7] = t[e + 7], y[0]
            }

            function O(t, e) {
                return v[7] = t[e], v[6] = t[e + 1], v[5] = t[e + 2], v[4] = t[e + 3], v[3] = t[e + 4], v[2] = t[e + 5], v[1] = t[e + 6], v[0] = t[e + 7], y[0]
            }
            return "undefined" != typeof Float32Array ? (h = new Float32Array([-0]), d = 128 === (p = new Uint8Array(h.buffer))[3], t.writeFloatLE = d ? o : c, t.writeFloatBE = d ? c : o, t.readFloatLE = d ? l : f, t.readFloatBE = d ? f : l) : (t.writeFloatLE = r(e).call(e, null, i), t.writeFloatBE = r(e).call(e, null, s), t.readFloatLE = r(n).call(n, null, a), t.readFloatBE = r(n).call(n, null, u)), "undefined" != typeof Float64Array ? (y = new Float64Array([-0]), g = 128 === (v = new Uint8Array(y.buffer))[7], t.writeDoubleLE = g ? b : w, t.writeDoubleBE = g ? w : b, t.readDoubleLE = g ? x : O, t.readDoubleBE = g ? O : x) : (t.writeDoubleLE = r(_).call(_, null, i, 0, 4), t.writeDoubleBE = r(_).call(_, null, s, 4, 0), t.readDoubleLE = r(m).call(m, null, a, 0, 4), t.readDoubleBE = r(m).call(m, null, u, 4, 0)), t
        }

        function i(t, e, n) {
            e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
        }

        function s(t, e, n) {
            e[n] = t >>> 24, e[n + 1] = t >>> 16 & 255, e[n + 2] = t >>> 8 & 255, e[n + 3] = 255 & t
        }

        function a(t, e) {
            return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
        }

        function u(t, e) {
            return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
        }
        n(6), n(272), t.exports = o(o)
    }, function(t, e, n) {
        var r = n(508),
            o = Function.prototype;
        t.exports = function(t) {
            var e = t.bind;
            return t === o || t instanceof Function && e === o.bind ? r : e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(15),
            o = n(12),
            i = [].slice,
            s = {};
        t.exports = Function.bind || function(t) {
            var e = r(this),
                n = i.call(arguments, 1),
                a = function r() {
                    var o = n.concat(i.call(arguments));
                    return this instanceof r ? function(t, e, n) {
                        if (!(e in s)) {
                            for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
                            s[e] = Function("C,a", "return new C(" + r.join(",") + ")")
                        }
                        return s[e](t, n)
                    }(e, o.length, o) : e.apply(t, o)
                };
            return o(e.prototype) && (a.prototype = e.prototype), a
        }
    }, function(t, e, n) {
        n(56)("Float32", 4, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var _Object$keys = __webpack_require__(46);

        function inquire(moduleName) {
            try {
                var mod = eval("quire".replace(/^/, "re"))(moduleName);
                if (mod && (mod.length || _Object$keys(mod).length)) return mod
            } catch (t) {}
            return null
        }
        __webpack_require__(33), module.exports = inquire
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = e;
        o.length = function(t) {
            for (var e = 0, n = 0, r = 0; r < t.length; ++r)(n = t.charCodeAt(r)) < 128 ? e += 1 : n < 2048 ? e += 2 : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, e += 4) : e += 3;
            return e
        }, o.read = function(t, e, n) {
            if (n - e < 1) return "";
            for (var o, i = null, s = [], a = 0; e < n;)(o = t[e++]) < 128 ? s[a++] = o : 191 < o && o < 224 ? s[a++] = (31 & o) << 6 | 63 & t[e++] : 239 < o && o < 365 ? (o = ((7 & o) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, s[a++] = 55296 + (o >> 10), s[a++] = 56320 + (1023 & o)) : s[a++] = (15 & o) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], 8191 < a && ((i = i || []).push(String.fromCharCode.apply(String, s)), a = 0);
            return i ? (a && i.push(String.fromCharCode.apply(String, r(s).call(s, 0, a))), i.join("")) : String.fromCharCode.apply(String, r(s).call(s, 0, a))
        }, o.write = function(t, e, n) {
            for (var r, o, i = n, s = 0; s < t.length; ++s)(r = t.charCodeAt(s)) < 128 ? e[n++] = r : (r < 2048 ? e[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (o = t.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & o), ++s, e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128) : e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128), e[n++] = 63 & r | 128);
            return n - i
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n) {
            var r = n || 8192,
                o = r >>> 1,
                i = null,
                s = r;
            return function(n) {
                if (n < 1 || o < n) return t(n);
                r < s + n && (i = t(r), s = 0);
                var a = e.call(i, s, s += n);
                return 7 & s && (s = 1 + (7 | s)), a
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(27);
        n(6), t.exports = l;
        var i, s = n(74),
            a = s.LongBits,
            u = s.utf8;

        function c(t, e) {
            return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
        }

        function l(t) {
            this.buf = t, this.pos = 0, this.len = t.length
        }
        var f, h = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || o(t)) return new l(t);
            throw Error("illegal buffer")
        } : function(t) {
            if (o(t)) return new l(t);
            throw Error("illegal buffer")
        };

        function p() {
            var t = new a(0, 0),
                e = 0;
            if (!(4 < this.len - this.pos)) {
                for (; e < 3; ++e) {
                    if (this.pos >= this.len) throw c(this);
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
                }
                return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
            }
            for (; e < 4; ++e)
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
            if (e = 0, 4 < this.len - this.pos) {
                for (; e < 5; ++e)
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
            } else
                for (; e < 5; ++e) {
                    if (this.pos >= this.len) throw c(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                }
            throw Error("invalid varint encoding")
        }

        function d(t, e) {
            return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
        }

        function y() {
            if (this.pos + 8 > this.len) throw c(this, 8);
            return new a(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
        }
        l.create = s.Buffer ? function(t) {
            return (l.create = function(t) {
                return s.Buffer.isBuffer(t) ? new i(t) : h(t)
            })(t)
        } : h, l.prototype._slice = s.Array.prototype.subarray || r(s.Array.prototype), l.prototype.uint32 = (f = 4294967295, function() {
            if (f = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return f;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, c(this, 10);
            return f
        }), l.prototype.int32 = function() {
            return 0 | this.uint32()
        }, l.prototype.sint32 = function() {
            var t = this.uint32();
            return t >>> 1 ^ -(1 & t) | 0
        }, l.prototype.bool = function() {
            return 0 !== this.uint32()
        }, l.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            return d(this.buf, this.pos += 4)
        }, l.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            return 0 | d(this.buf, this.pos += 4)
        }, l.prototype.float = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            var t = s.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, t
        }, l.prototype.double = function() {
            if (this.pos + 8 > this.len) throw c(this, 4);
            var t = s.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, t
        }, l.prototype.bytes = function() {
            var t, e = this.uint32(),
                n = this.pos,
                i = this.pos + e;
            if (i > this.len) throw c(this, e);
            return this.pos += e, o(this.buf) ? r(t = this.buf).call(t, n, i) : n === i ? new this.buf.constructor(0) : this._slice.call(this.buf, n, i)
        }, l.prototype.string = function() {
            var t = this.bytes();
            return u.read(t, 0, t.length)
        }, l.prototype.skip = function(t) {
            if ("number" == typeof t) {
                if (this.pos + t > this.len) throw c(this, t);
                this.pos += t
            } else
                do {
                    if (this.pos >= this.len) throw c(this)
                } while (128 & this.buf[this.pos++]);
            return this
        }, l.prototype.skipType = function(t) {
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
                    for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + t + " at offset " + this.pos)
            }
            return this
        }, l._configure = function(t) {
            i = t;
            var e = s.Long ? "toLong" : "toNumber";
            s.merge(l.prototype, {
                int64: function() {
                    return p.call(this)[e](!1)
                },
                uint64: function() {
                    return p.call(this)[e](!0)
                },
                sint64: function() {
                    return p.call(this).zzDecode()[e](!1)
                },
                fixed64: function() {
                    return y.call(this)[e](!0)
                },
                sfixed64: function() {
                    return y.call(this)[e](!1)
                }
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(72),
            o = n(73),
            i = n(10),
            s = n(52),
            a = n(13),
            u = n(40);

        function c(t) {
            return (c = "function" == typeof u && "symbol" === a(s) ? function(t) {
                return a(t)
            } : function(t) {
                return t && "function" == typeof u && t.constructor === u && t !== u.prototype ? "symbol" : a(t)
            })(t)
        }
        i(e, "__esModule", {
            value: !0
        }), e.newType = function(t) {
            return new d(t)
        }, e.isType = function(t) {
            return t instanceof d
        };
        var l = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== c(t) && "function" != typeof t) return {
                    default: t
                };
                var e = h();
                if (e && e.has(t)) return e.get(t);
                var n = {},
                    o = i && r;
                for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                        var a = o ? r(t, s) : null;
                        a && (a.get || a.set) ? i(n, s, a) : n[s] = t[s]
                    } return n.default = t, e && e.set(t, n), n
            }(n(88)),
            f = n(179);

        function h() {
            if ("function" != typeof o) return null;
            var t = new o;
            return h = function() {
                return t
            }, t
        }

        function p(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i(t, r.key, r)
            }
        }
        var d = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.schema = e
            }
            var e, n;
            return e = t, (n = [{
                key: "serialize",
                value: function(t) {
                    var e = (0, f.cleanZeroValuedFields)(t, {});
                    return this.schema.encode(e).finish()
                }
            }, {
                key: "hash",
                value: function(t) {
                    return l.hash(t, this)
                }
            }, {
                key: "sign",
                value: function(t, e) {
                    return l.sign(t, e, this)
                }
            }, {
                key: "verifySignature",
                value: function(t, e, n) {
                    return l.verifySignature(t, e, n, this)
                }
            }]) && p(e.prototype, n), t
        }()
    }, function(t, e, n) {
        (function(t) {
            var r, o = n(28);
            n(108);
            var i = n(31);
            n(87), n(138);
            var s = n(106);
            n(4), n(2);
            var a = n(82),
                u = n(14),
                c = n(25),
                l = n(21),
                f = function(t) {
                    "use strict";
                    var e = 1e7,
                        n = 9007199254740992,
                        r = m(n),
                        h = "0123456789abcdefghijklmnopqrstuvwxyz",
                        p = "function" == typeof BigInt;

                    function d(t, e, n, r) {
                        return void 0 === t ? d[0] : void 0 === e || 10 == +e && !n ? tt(t) : Y(t, e, n, r)
                    }

                    function y(t, e) {
                        this.value = t, this.sign = e, this.isSmall = !1
                    }

                    function v(t) {
                        this.value = t, this.sign = t < 0, this.isSmall = !0
                    }

                    function g(t) {
                        this.value = t
                    }

                    function _(t) {
                        return -n < t && t < n
                    }

                    function m(t) {
                        return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
                    }

                    function b(t) {
                        w(t);
                        var n = t.length;
                        if (n < 4 && C(t, r) < 0) switch (n) {
                            case 0:
                                return 0;
                            case 1:
                                return t[0];
                            case 2:
                                return t[0] + t[1] * e;
                            default:
                                return t[0] + (t[1] + t[2] * e) * e
                        }
                        return t
                    }

                    function w(t) {
                        for (var e = t.length; 0 === t[--e];);
                        t.length = e + 1
                    }

                    function x(t) {
                        for (var e = new Array(t), n = -1; ++n < t;) e[n] = 0;
                        return e
                    }

                    function O(t) {
                        return 0 < t ? Math.floor(t) : Math.ceil(t)
                    }

                    function S(t, n) {
                        var r, o, i = t.length,
                            s = n.length,
                            a = new Array(i),
                            u = 0,
                            c = e;
                        for (o = 0; o < s; o++) u = c <= (r = t[o] + n[o] + u) ? 1 : 0, a[o] = r - u * c;
                        for (; o < i;) u = (r = t[o] + u) === c ? 1 : 0, a[o++] = r - u * c;
                        return 0 < u && a.push(u), a
                    }

                    function k(t, e) {
                        return t.length >= e.length ? S(t, e) : S(e, t)
                    }

                    function E(t, n) {
                        var r, o, i = t.length,
                            s = new Array(i),
                            a = e;
                        for (o = 0; o < i; o++) r = t[o] - a + n, n = Math.floor(r / a), s[o] = r - n * a, n += 1;
                        for (; 0 < n;) s[o++] = n % a, n = Math.floor(n / a);
                        return s
                    }

                    function P(t, n) {
                        var r, o, i = t.length,
                            s = n.length,
                            a = new Array(i),
                            u = 0,
                            c = e;
                        for (r = 0; r < s; r++) u = (o = t[r] - u - n[r]) < 0 ? (o += c, 1) : 0, a[r] = o;
                        for (r = s; r < i; r++) {
                            if (!((o = t[r] - u) < 0)) {
                                a[r++] = o;
                                break
                            }
                            o += c, a[r] = o
                        }
                        for (; r < i; r++) a[r] = t[r];
                        return w(a), a
                    }

                    function A(t, n, r) {
                        var o, i, s = t.length,
                            a = new Array(s),
                            u = -n,
                            c = e;
                        for (o = 0; o < s; o++) i = t[o] + u, u = Math.floor(i / c), i %= c, a[o] = i < 0 ? i + c : i;
                        return "number" == typeof(a = b(a)) ? (r && (a = -a), new v(a)) : new y(a, r)
                    }

                    function j(t, n) {
                        var r, o, i, s, a = t.length,
                            u = n.length,
                            c = x(a + u),
                            l = e;
                        for (i = 0; i < a; ++i) {
                            s = t[i];
                            for (var f = 0; f < u; ++f) r = s * n[f] + c[i + f], o = Math.floor(r / l), c[i + f] = r - o * l, c[i + f + 1] += o
                        }
                        return w(c), c
                    }

                    function T(t, n) {
                        var r, o, i = t.length,
                            s = new Array(i),
                            a = e,
                            u = 0;
                        for (o = 0; o < i; o++) r = t[o] * n + u, u = Math.floor(r / a), s[o] = r - u * a;
                        for (; 0 < u;) s[o++] = u % a, u = Math.floor(u / a);
                        return s
                    }

                    function B(t, e) {
                        for (var n = []; 0 < e--;) n.push(0);
                        return c(n).call(n, t)
                    }

                    function R(t, n, r) {
                        return new y(t < e ? T(n, t) : j(n, m(t)), r)
                    }

                    function L(t) {
                        var n, r, o, i, s = t.length,
                            a = x(s + s),
                            u = e;
                        for (o = 0; o < s; o++) {
                            r = 0 - (i = t[o]) * i;
                            for (var c = o; c < s; c++) n = i * t[c] * 2 + a[o + c] + r, r = Math.floor(n / u), a[o + c] = n - r * u;
                            a[o + s] = r
                        }
                        return w(a), a
                    }

                    function I(t, e) {
                        var n, r, o, i, s = t.length,
                            a = x(s);
                        for (o = 0, n = s - 1; 0 <= n; --n) o = (i = 1e7 * o + t[n]) - (r = O(i / e)) * e, a[n] = 0 | r;
                        return [a, 0 | o]
                    }

                    function N(t, n) {
                        var r, o = tt(n);
                        if (p) return [new g(t.value / o.value), new g(t.value % o.value)];
                        var i, s = t.value,
                            u = o.value;
                        if (0 === u) throw new Error("Cannot divide by zero");
                        if (t.isSmall) return o.isSmall ? [new v(O(s / u)), new v(s % u)] : [d[0], t];
                        if (o.isSmall) {
                            if (1 === u) return [t, d[0]];
                            if (-1 == u) return [t.negate(), d[0]];
                            var c = Math.abs(u);
                            if (c < e) {
                                i = b((r = I(s, c))[0]);
                                var l = r[1];
                                return t.sign && (l = -l), "number" == typeof i ? (t.sign !== o.sign && (i = -i), [new v(i), new v(l)]) : [new y(i, t.sign !== o.sign), new v(l)]
                            }
                            u = m(c)
                        }
                        var f = C(s, u);
                        if (-1 === f) return [d[0], t];
                        if (0 === f) return [d[t.sign === o.sign ? 1 : -1], d[0]];
                        i = (r = (s.length + u.length <= 200 ? function(t, n) {
                            var r, o, i, s, a, u, c, l = t.length,
                                f = n.length,
                                h = e,
                                p = x(n.length),
                                d = n[f - 1],
                                y = Math.ceil(h / (2 * d)),
                                v = T(t, y),
                                g = T(n, y);
                            for (v.length <= l && v.push(0), g.push(0), d = g[f - 1], o = l - f; 0 <= o; o--) {
                                for (r = h - 1, v[o + f] !== d && (r = Math.floor((v[o + f] * h + v[o + f - 1]) / d)), s = i = 0, u = g.length, a = 0; a < u; a++) i += r * g[a], c = Math.floor(i / h), s += v[o + a] - (i - c * h), i = c, s = s < 0 ? (v[o + a] = s + h, -1) : (v[o + a] = s, 0);
                                for (; 0 !== s;) {
                                    for (--r, a = i = 0; a < u; a++) i = (i += v[o + a] - h + g[a]) < 0 ? (v[o + a] = i + h, 0) : (v[o + a] = i, 1);
                                    s += i
                                }
                                p[o] = r
                            }
                            return v = I(v, y)[0], [b(p), b(v)]
                        } : function(t, n) {
                            for (var r, o, i, s, u, c = t.length, l = n.length, f = [], h = [], p = e; c;)
                                if (h.unshift(t[--c]), w(h), C(h, n) < 0) f.push(0);
                                else {
                                    i = h[(o = h.length) - 1] * p + h[o - 2], s = n[l - 1] * p + n[l - 2], l < o && (i = (i + 1) * p), r = Math.ceil(i / s);
                                    do {
                                        if (C(u = T(n, r), h) <= 0) break;
                                        r--
                                    } while (r);
                                    f.push(r), h = P(h, u)
                                } return a(f).call(f), [b(f), b(h)]
                        })(s, u))[0];
                        var h = t.sign !== o.sign,
                            _ = r[1],
                            S = t.sign;
                        return [i = "number" == typeof i ? (h && (i = -i), new v(i)) : new y(i, h), _ = "number" == typeof _ ? (S && (_ = -_), new v(_)) : new y(_, S)]
                    }

                    function C(t, e) {
                        if (t.length !== e.length) return t.length > e.length ? 1 : -1;
                        for (var n = t.length - 1; 0 <= n; n--)
                            if (t[n] !== e[n]) return t[n] > e[n] ? 1 : -1;
                        return 0
                    }

                    function U(t) {
                        var e = t.abs();
                        return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0))
                    }

                    function M(t, e) {
                        for (var n, r, o, i = t.prev(), s = i, a = 0; s.isEven();) s = s.divide(2), a++;
                        t: for (r = 0; r < e.length; r++)
                            if (!t.lesser(e[r]) && !(o = f(e[r]).modPow(s, t)).isUnit() && !o.equals(i)) {
                                for (n = a - 1; 0 != n; n--) {
                                    if ((o = o.square().mod(t)).isUnit()) return !1;
                                    if (o.equals(i)) continue t
                                }
                                return !1
                            }
                        return !0
                    }
                    y.prototype = l(d.prototype), v.prototype = l(d.prototype), g.prototype = l(d.prototype), y.prototype.plus = y.prototype.add = function(t) {
                        var e = tt(t);
                        if (this.sign !== e.sign) return this.subtract(e.negate());
                        var n = this.value,
                            r = e.value;
                        return e.isSmall ? new y(E(n, Math.abs(r)), this.sign) : new y(k(n, r), this.sign)
                    }, v.prototype.plus = v.prototype.add = function(t) {
                        var e = tt(t),
                            n = this.value;
                        if (n < 0 !== e.sign) return this.subtract(e.negate());
                        var r = e.value;
                        if (e.isSmall) {
                            if (_(n + r)) return new v(n + r);
                            r = m(Math.abs(r))
                        }
                        return new y(E(r, Math.abs(n)), n < 0)
                    }, g.prototype.plus = g.prototype.add = function(t) {
                        return new g(this.value + tt(t).value)
                    }, y.prototype.minus = y.prototype.subtract = function(t) {
                        var e = tt(t);
                        if (this.sign !== e.sign) return this.add(e.negate());
                        var n, r, o, i, s = this.value,
                            a = e.value;
                        return e.isSmall ? A(s, Math.abs(a), this.sign) : (n = s, r = a, o = this.sign, 0 <= C(n, r) ? i = P(n, r) : (i = P(r, n), o = !o), "number" == typeof(i = b(i)) ? (o && (i = -i), new v(i)) : new y(i, o))
                    }, v.prototype.minus = v.prototype.subtract = function(t) {
                        var e = tt(t),
                            n = this.value;
                        if (n < 0 !== e.sign) return this.add(e.negate());
                        var r = e.value;
                        return e.isSmall ? new v(n - r) : A(r, Math.abs(n), 0 <= n)
                    }, g.prototype.minus = g.prototype.subtract = function(t) {
                        return new g(this.value - tt(t).value)
                    }, y.prototype.negate = function() {
                        return new y(this.value, !this.sign)
                    }, v.prototype.negate = function() {
                        var t = this.sign,
                            e = new v(-this.value);
                        return e.sign = !t, e
                    }, g.prototype.negate = function() {
                        return new g(-this.value)
                    }, y.prototype.abs = function() {
                        return new y(this.value, !1)
                    }, v.prototype.abs = function() {
                        return new v(Math.abs(this.value))
                    }, g.prototype.abs = function() {
                        return new g(0 <= this.value ? this.value : -this.value)
                    }, y.prototype.times = y.prototype.multiply = function(t) {
                        var n, r, o, i = tt(t),
                            s = this.value,
                            a = i.value,
                            c = this.sign !== i.sign;
                        if (i.isSmall) {
                            if (0 === a) return d[0];
                            if (1 === a) return this;
                            if (-1 === a) return this.negate();
                            if ((n = Math.abs(a)) < e) return new y(T(s, n), c);
                            a = m(n)
                        }
                        return new y((0 < -.012 * (r = s.length) - .012 * (o = a.length) + 15e-6 * r * o ? function t(e, n) {
                            var r = Math.max(e.length, n.length);
                            if (r <= 30) return j(e, n);
                            r = Math.ceil(r / 2);
                            var o = u(e).call(e, r),
                                i = u(e).call(e, 0, r),
                                s = u(n).call(n, r),
                                a = u(n).call(n, 0, r),
                                c = t(i, a),
                                l = t(o, s),
                                f = t(k(i, o), k(a, s)),
                                h = k(k(c, B(P(P(f, c), l), r)), B(l, 2 * r));
                            return w(h), h
                        } : j)(s, a), c)
                    }, v.prototype._multiplyBySmall = function(t) {
                        return _(t.value * this.value) ? new v(t.value * this.value) : R(Math.abs(t.value), m(Math.abs(this.value)), this.sign !== t.sign)
                    }, y.prototype._multiplyBySmall = function(t) {
                        return 0 === t.value ? d[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : R(Math.abs(t.value), this.value, this.sign !== t.sign)
                    }, v.prototype.times = v.prototype.multiply = function(t) {
                        return tt(t)._multiplyBySmall(this)
                    }, g.prototype.times = g.prototype.multiply = function(t) {
                        return new g(this.value * tt(t).value)
                    }, y.prototype.square = function() {
                        return new y(L(this.value), !1)
                    }, v.prototype.square = function() {
                        var t = this.value * this.value;
                        return _(t) ? new v(t) : new y(L(m(Math.abs(this.value))), !1)
                    }, g.prototype.square = function(t) {
                        return new g(this.value * this.value)
                    }, g.prototype.divmod = v.prototype.divmod = y.prototype.divmod = function(t) {
                        var e = N(this, t);
                        return {
                            quotient: e[0],
                            remainder: e[1]
                        }
                    }, y.prototype.divide = function(t) {
                        return N(this, t)[0]
                    }, g.prototype.over = g.prototype.divide = function(t) {
                        return new g(this.value / tt(t).value)
                    }, v.prototype.over = v.prototype.divide = y.prototype.over = y.prototype.divide, y.prototype.mod = function(t) {
                        return N(this, t)[1]
                    }, g.prototype.mod = g.prototype.remainder = function(t) {
                        return new g(this.value % tt(t).value)
                    }, v.prototype.remainder = v.prototype.mod = y.prototype.remainder = y.prototype.mod, y.prototype.pow = function(t) {
                        var e, n, r, o = tt(t),
                            i = this.value,
                            s = o.value;
                        if (0 === s) return d[1];
                        if (0 === i) return d[0];
                        if (1 === i) return d[1];
                        if (-1 === i) return o.isEven() ? d[1] : d[-1];
                        if (o.sign) return d[0];
                        if (!o.isSmall) throw new Error("The exponent " + o.toString() + " is too large.");
                        if (this.isSmall && _(e = Math.pow(i, s))) return new v(O(e));
                        for (n = this, r = d[1]; !0 & s && (r = r.times(n), --s), 0 !== s;) s /= 2, n = n.square();
                        return r
                    }, v.prototype.pow = y.prototype.pow, g.prototype.pow = function(t) {
                        var e = tt(t),
                            n = this.value,
                            r = e.value,
                            o = BigInt(0),
                            i = BigInt(1),
                            s = BigInt(2);
                        if (r === o) return d[1];
                        if (n === o) return d[0];
                        if (n === i) return d[1];
                        if (n === BigInt(-1)) return e.isEven() ? d[1] : d[-1];
                        if (e.isNegative()) return new g(o);
                        for (var a = this, u = d[1];
                            (r & i) === i && (u = u.times(a), --r), r !== o;) r /= s, a = a.square();
                        return u
                    }, g.prototype.modPow = v.prototype.modPow = y.prototype.modPow = function(t, e) {
                        if (t = tt(t), (e = tt(e)).isZero()) throw new Error("Cannot take modPow with modulus 0");
                        var n = d[1],
                            r = this.mod(e);
                        for (t.isNegative() && (t = t.multiply(d[-1]), r = r.modInv(e)); t.isPositive();) {
                            if (r.isZero()) return d[0];
                            t.isOdd() && (n = n.multiply(r).mod(e)), t = t.divide(2), r = r.square().mod(e)
                        }
                        return n
                    }, y.prototype.compareAbs = function(t) {
                        var e = tt(t),
                            n = this.value,
                            r = e.value;
                        return e.isSmall ? 1 : C(n, r)
                    }, v.prototype.compareAbs = function(t) {
                        var e = tt(t),
                            n = Math.abs(this.value),
                            r = e.value;
                        return e.isSmall ? n === (r = Math.abs(r)) ? 0 : r < n ? 1 : -1 : -1
                    }, g.prototype.compareAbs = function(t) {
                        var e = this.value,
                            n = tt(t).value;
                        return (e = 0 <= e ? e : -e) === (n = 0 <= n ? n : -n) ? 0 : n < e ? 1 : -1
                    }, y.prototype.compareTo = y.prototype.compare = function(t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = tt(t),
                            n = this.value,
                            r = e.value;
                        return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : C(n, r) * (this.sign ? -1 : 1)
                    }, v.prototype.compareTo = v.prototype.compare = function(t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = tt(t),
                            n = this.value,
                            r = e.value;
                        return e.isSmall ? n == r ? 0 : r < n ? 1 : -1 : n < 0 !== e.sign ? n < 0 ? -1 : 1 : n < 0 ? 1 : -1
                    }, g.prototype.compareTo = g.prototype.compare = function(t) {
                        if (t === 1 / 0) return -1;
                        if (t === -1 / 0) return 1;
                        var e = this.value,
                            n = tt(t).value;
                        return e === n ? 0 : n < e ? 1 : -1
                    }, g.prototype.eq = g.prototype.equals = v.prototype.eq = v.prototype.equals = y.prototype.eq = y.prototype.equals = function(t) {
                        return 0 === this.compare(t)
                    }, g.prototype.neq = g.prototype.notEquals = v.prototype.neq = v.prototype.notEquals = y.prototype.neq = y.prototype.notEquals = function(t) {
                        return 0 !== this.compare(t)
                    }, g.prototype.gt = g.prototype.greater = v.prototype.gt = v.prototype.greater = y.prototype.gt = y.prototype.greater = function(t) {
                        return 0 < this.compare(t)
                    }, g.prototype.lt = g.prototype.lesser = v.prototype.lt = v.prototype.lesser = y.prototype.lt = y.prototype.lesser = function(t) {
                        return this.compare(t) < 0
                    }, g.prototype.geq = g.prototype.greaterOrEquals = v.prototype.geq = v.prototype.greaterOrEquals = y.prototype.geq = y.prototype.greaterOrEquals = function(t) {
                        return 0 <= this.compare(t)
                    }, g.prototype.leq = g.prototype.lesserOrEquals = v.prototype.leq = v.prototype.lesserOrEquals = y.prototype.leq = y.prototype.lesserOrEquals = function(t) {
                        return this.compare(t) <= 0
                    }, y.prototype.isEven = function() {
                        return 0 == (1 & this.value[0])
                    }, v.prototype.isEven = function() {
                        return 0 == (1 & this.value)
                    }, g.prototype.isEven = function() {
                        return (this.value & BigInt(1)) === BigInt(0)
                    }, y.prototype.isOdd = function() {
                        return 1 == (1 & this.value[0])
                    }, v.prototype.isOdd = function() {
                        return 1 == (1 & this.value)
                    }, g.prototype.isOdd = function() {
                        return (this.value & BigInt(1)) === BigInt(1)
                    }, y.prototype.isPositive = function() {
                        return !this.sign
                    }, g.prototype.isPositive = v.prototype.isPositive = function() {
                        return 0 < this.value
                    }, y.prototype.isNegative = function() {
                        return this.sign
                    }, g.prototype.isNegative = v.prototype.isNegative = function() {
                        return this.value < 0
                    }, y.prototype.isUnit = function() {
                        return !1
                    }, v.prototype.isUnit = function() {
                        return 1 === Math.abs(this.value)
                    }, g.prototype.isUnit = function() {
                        return this.abs().value === BigInt(1)
                    }, y.prototype.isZero = function() {
                        return !1
                    }, v.prototype.isZero = function() {
                        return 0 === this.value
                    }, g.prototype.isZero = function() {
                        return this.value === BigInt(0)
                    }, g.prototype.isDivisibleBy = v.prototype.isDivisibleBy = y.prototype.isDivisibleBy = function(t) {
                        var e = tt(t);
                        return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()))
                    }, g.prototype.isPrime = v.prototype.isPrime = y.prototype.isPrime = function(e) {
                        var n = U(this);
                        if (n !== t) return n;
                        var r = this.abs(),
                            o = r.bitLength();
                        if (o <= 64) return M(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                        for (var i = Math.log(2) * o.toJSNumber(), s = Math.ceil(!0 === e ? 2 * Math.pow(i, 2) : i), a = [], u = 0; u < s; u++) a.push(f(u + 2));
                        return M(r, a)
                    }, g.prototype.isProbablePrime = v.prototype.isProbablePrime = y.prototype.isProbablePrime = function(e, n) {
                        var r = U(this);
                        if (r !== t) return r;
                        for (var o = this.abs(), i = e === t ? 5 : e, s = [], a = 0; a < i; a++) s.push(f.randBetween(2, o.minus(2), n));
                        return M(o, s)
                    }, g.prototype.modInv = v.prototype.modInv = y.prototype.modInv = function(t) {
                        for (var e, n, r, o = f.zero, i = f.one, s = tt(t), a = this.abs(); !a.isZero();) e = s.divide(a), n = o, r = s, o = i, s = a, i = n.subtract(e.multiply(i)), a = r.subtract(e.multiply(a));
                        if (!s.isUnit()) throw new Error(this.toString() + " and " + t.toString() + " are not co-prime");
                        return -1 === o.compare(0) && (o = o.add(t)), this.isNegative() ? o.negate() : o
                    }, y.prototype.next = function() {
                        var t = this.value;
                        return this.sign ? A(t, 1, this.sign) : new y(E(t, 1), this.sign)
                    }, v.prototype.next = function() {
                        var t = this.value;
                        return t + 1 < n ? new v(t + 1) : new y(r, !1)
                    }, g.prototype.next = function() {
                        return new g(this.value + BigInt(1))
                    }, y.prototype.prev = function() {
                        var t = this.value;
                        return this.sign ? new y(E(t, 1), !0) : A(t, 1, this.sign)
                    }, v.prototype.prev = function() {
                        var t = this.value;
                        return -n < t - 1 ? new v(t - 1) : new y(r, !0)
                    }, g.prototype.prev = function() {
                        return new g(this.value - BigInt(1))
                    };
                    for (var H = [1]; 2 * H[H.length - 1] <= e;) H.push(2 * H[H.length - 1]);
                    var D = H.length,
                        V = H[D - 1];

                    function F(t) {
                        return Math.abs(t) <= e
                    }

                    function K(t, e, n) {
                        e = tt(e);
                        for (var r = t.isNegative(), o = e.isNegative(), i = r ? t.not() : t, s = o ? e.not() : e, a = 0, u = 0, c = null, l = null, h = []; !i.isZero() || !s.isZero();) a = (c = N(i, V))[1].toJSNumber(), r && (a = V - 1 - a), u = (l = N(s, V))[1].toJSNumber(), o && (u = V - 1 - u), i = c[0], s = l[0], h.push(n(a, u));
                        for (var p = 0 !== n(r ? 1 : 0, o ? 1 : 0) ? f(-1) : f(0), d = h.length - 1; 0 <= d; --d) p = p.multiply(V).add(f(h[d]));
                        return p
                    }
                    g.prototype.shiftLeft = v.prototype.shiftLeft = y.prototype.shiftLeft = function(t) {
                        var e = tt(t).toJSNumber();
                        if (!F(e)) throw new Error(String(e) + " is too large for shifting.");
                        if (e < 0) return this.shiftRight(-e);
                        var n = this;
                        if (n.isZero()) return n;
                        for (; D <= e;) n = n.multiply(V), e -= D - 1;
                        return n.multiply(H[e])
                    }, g.prototype.shiftRight = v.prototype.shiftRight = y.prototype.shiftRight = function(t) {
                        var e, n = tt(t).toJSNumber();
                        if (!F(n)) throw new Error(String(n) + " is too large for shifting.");
                        if (n < 0) return this.shiftLeft(-n);
                        for (var r = this; D <= n;) {
                            if (r.isZero() || r.isNegative() && r.isUnit()) return r;
                            r = (e = N(r, V))[1].isNegative() ? e[0].prev() : e[0], n -= D - 1
                        }
                        return (e = N(r, H[n]))[1].isNegative() ? e[0].prev() : e[0]
                    }, g.prototype.not = v.prototype.not = y.prototype.not = function() {
                        return this.negate().prev()
                    }, g.prototype.and = v.prototype.and = y.prototype.and = function(t) {
                        return K(this, t, (function(t, e) {
                            return t & e
                        }))
                    }, g.prototype.or = v.prototype.or = y.prototype.or = function(t) {
                        return K(this, t, (function(t, e) {
                            return t | e
                        }))
                    }, g.prototype.xor = v.prototype.xor = y.prototype.xor = function(t) {
                        return K(this, t, (function(t, e) {
                            return t ^ e
                        }))
                    };
                    var q = 1 << 30;

                    function z(t) {
                        var n = t.value,
                            r = "number" == typeof n ? n | q : "bigint" == typeof n ? n | BigInt(q) : n[0] + n[1] * e | 1073758208;
                        return r & -r
                    }

                    function J(t, e) {
                        return t = tt(t), e = tt(e), t.greater(e) ? t : e
                    }

                    function X(t, e) {
                        return t = tt(t), e = tt(e), t.lesser(e) ? t : e
                    }

                    function W(t, e) {
                        if (t = tt(t).abs(), e = tt(e).abs(), t.equals(e)) return t;
                        if (t.isZero()) return e;
                        if (e.isZero()) return t;
                        for (var n, r, o = d[1]; t.isEven() && e.isEven();) n = X(z(t), z(e)), t = t.divide(n), e = e.divide(n), o = o.multiply(n);
                        for (; t.isEven();) t = t.divide(z(t));
                        do {
                            for (; e.isEven();) e = e.divide(z(e));
                            t.greater(e) && (r = e, e = t, t = r), e = e.subtract(t)
                        } while (!e.isZero());
                        return o.isUnit() ? t : t.multiply(o)
                    }
                    g.prototype.bitLength = v.prototype.bitLength = y.prototype.bitLength = function() {
                        var t = this;
                        return t.compareTo(f(0)) < 0 && (t = t.negate().subtract(f(1))), 0 === t.compareTo(f(0)) ? f(0) : f(function t(e, n) {
                            if (n.compareTo(e) <= 0) {
                                var r = t(e, n.square(n)),
                                    o = r.p,
                                    i = r.e,
                                    s = o.multiply(n);
                                return s.compareTo(e) <= 0 ? {
                                    p: s,
                                    e: 2 * i + 1
                                } : {
                                    p: o,
                                    e: 2 * i
                                }
                            }
                            return {
                                p: f(1),
                                e: 0
                            }
                        }(t, f(2)).e).add(f(1))
                    };
                    var Y = function(t, e, n, r) {
                        n = n || h, t = String(t), r || (t = t.toLowerCase(), n = n.toLowerCase());
                        var o, i = t.length,
                            s = Math.abs(e),
                            a = {};
                        for (o = 0; o < n.length; o++) a[n[o]] = o;
                        for (o = 0; o < i; o++)
                            if ("-" !== (f = t[o]) && f in a && a[f] >= s) {
                                if ("1" === f && 1 === s) continue;
                                throw new Error(f + " is not a valid digit in base " + e + ".")
                            } e = tt(e);
                        var c = [],
                            l = "-" === t[0];
                        for (o = l ? 1 : 0; o < t.length; o++) {
                            var f;
                            if ((f = t[o]) in a) c.push(tt(a[f]));
                            else {
                                if ("<" !== f) throw new Error(f + " is not a valid character");
                                for (var p = o;
                                    ">" !== t[++o] && o < t.length;);
                                c.push(tt(u(t).call(t, p + 1, o)))
                            }
                        }
                        return G(c, e, l)
                    };

                    function G(t, e, n) {
                        var r, o = d[0],
                            i = d[1];
                        for (r = t.length - 1; 0 <= r; r--) o = o.add(t[r].times(i)), i = i.times(e);
                        return n ? o.negate() : o
                    }

                    function Z(t, e) {
                        if ((e = f(e)).isZero()) {
                            if (t.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            throw new Error("Cannot convert nonzero numbers to base 0.")
                        }
                        if (e.equals(-1)) {
                            var n, r;
                            if (t.isZero()) return {
                                value: [0],
                                isNegative: !1
                            };
                            if (t.isNegative()) return {
                                value: c([]).apply([], s(n = Array.apply(null, Array(-t.toJSNumber()))).call(n, Array.prototype.valueOf, [1, 0])),
                                isNegative: !1
                            };
                            var o = s(r = Array.apply(null, Array(t.toJSNumber() - 1))).call(r, Array.prototype.valueOf, [0, 1]);
                            return o.unshift([1]), {
                                value: c([]).apply([], o),
                                isNegative: !1
                            }
                        }
                        var i, u = !1;
                        if (t.isNegative() && e.isPositive() && (u = !0, t = t.abs()), e.isUnit()) return t.isZero() ? {
                            value: [0],
                            isNegative: !1
                        } : {
                            value: s(i = Array.apply(null, Array(t.toJSNumber()))).call(i, Number.prototype.valueOf, 1),
                            isNegative: u
                        };
                        for (var l, h = [], p = t; p.isNegative() || 0 <= p.compareAbs(e);) {
                            p = (l = p.divmod(e)).quotient;
                            var d = l.remainder;
                            d.isNegative() && (d = e.minus(d).abs(), p = p.next()), h.push(d.toJSNumber())
                        }
                        return h.push(p.toJSNumber()), {
                            value: a(h).call(h),
                            isNegative: u
                        }
                    }

                    function $(t, e, n) {
                        var r, o = Z(t, e);
                        return (o.isNegative ? "-" : "") + s(r = o.value).call(r, (function(t) {
                            return (e = t) < (r = (r = n) || h).length ? r[e] : "<" + e + ">";
                            var e, r
                        })).join("")
                    }

                    function Q(t) {
                        if (_(+t)) {
                            var e = +t;
                            if (e === O(e)) return p ? new g(BigInt(e)) : new v(e);
                            throw new Error("Invalid integer: " + t)
                        }
                        var n = "-" === t[0];
                        n && (t = u(t).call(t, 1));
                        var r = t.split(/e/i);
                        if (2 < r.length) throw new Error("Invalid integer: " + r.join("e"));
                        if (2 === r.length) {
                            var i = r[1];
                            if ("+" === i[0] && (i = u(i).call(i, 1)), (i = +i) !== O(i) || !_(i)) throw new Error("Invalid integer: " + i + " is not a valid exponent.");
                            var s = r[0],
                                a = o(s).call(s, ".");
                            if (0 <= a && (i -= s.length - a - 1, s = u(s).call(s, 0, a) + u(s).call(s, a + 1)), i < 0) throw new Error("Cannot include negative exponent part for integers");
                            t = s += new Array(i + 1).join("0")
                        }
                        if (!/^([0-9][0-9]*)$/.test(t)) throw new Error("Invalid integer: " + t);
                        if (p) return new g(BigInt(n ? "-" + t : t));
                        for (var c = [], l = t.length, f = l - 7; 0 < l;) c.push(+u(t).call(t, f, l)), (f -= 7) < 0 && (f = 0), l -= 7;
                        return w(c), new y(c, n)
                    }

                    function tt(t) {
                        return "number" == typeof t ? function(t) {
                            if (p) return new g(BigInt(t));
                            if (_(t)) {
                                if (t !== O(t)) throw new Error(t + " is not an integer.");
                                return new v(t)
                            }
                            return Q(t.toString())
                        }(t) : "string" == typeof t ? Q(t) : "bigint" == typeof t ? new g(t) : t
                    }
                    y.prototype.toArray = function(t) {
                        return Z(this, t)
                    }, v.prototype.toArray = function(t) {
                        return Z(this, t)
                    }, g.prototype.toArray = function(t) {
                        return Z(this, t)
                    }, y.prototype.toString = function(e, n) {
                        if (e === t && (e = 10), 10 !== e) return $(this, e, n);
                        for (var r, o = this.value, i = o.length, s = String(o[--i]); 0 <= --i;) r = String(o[i]), s += u("0000000").call("0000000", r.length) + r;
                        return (this.sign ? "-" : "") + s
                    }, g.prototype.toString = v.prototype.toString = function(e, n) {
                        return e === t && (e = 10), 10 != e ? $(this, e, n) : String(this.value)
                    }, g.prototype.toJSON = y.prototype.toJSON = v.prototype.toJSON = function() {
                        return this.toString()
                    }, y.prototype.toJSNumber = y.prototype.valueOf = function() {
                        return i(this.toString(), 10)
                    }, v.prototype.toJSNumber = v.prototype.valueOf = function() {
                        return this.value
                    }, g.prototype.valueOf = g.prototype.toJSNumber = function() {
                        return i(this.toString(), 10)
                    };
                    for (var et = 0; et < 1e3; et++) d[et] = tt(et), 0 < et && (d[-et] = tt(-et));
                    return d.one = d[1], d.zero = d[0], d.minusOne = d[-1], d.max = J, d.min = X, d.gcd = W, d.lcm = function(t, e) {
                        return t = tt(t).abs(), e = tt(e).abs(), t.divide(W(t, e)).multiply(e)
                    }, d.isInstance = function(t) {
                        return t instanceof y || t instanceof v || t instanceof g
                    }, d.randBetween = function(t, n, r) {
                        t = tt(t), n = tt(n);
                        var o = r || Math.random,
                            i = X(t, n),
                            s = J(t, n).subtract(i).add(1);
                        if (s.isSmall) return i.add(Math.floor(o() * s));
                        for (var a = Z(s, e).value, u = [], c = !0, l = 0; l < a.length; l++) {
                            var f = c ? a[l] : e,
                                h = O(o() * f);
                            u.push(h), h < f && (c = !1)
                        }
                        return i.add(d.fromArray(u, e, !1))
                    }, d.fromArray = function(t, e, n) {
                        return G(s(t).call(t, tt), tt(e || 10), n)
                    }, d
                }();
            t.hasOwnProperty("exports") && (t.exports = f), void 0 === (r = function() {
                return f
            }.call(e, n, e, t)) || (t.exports = r)
        }).call(this, n(166)(t))
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(174);
            n(33), n(519), n(520), n(87);
            var o = n(31);
            n(138), n(521), n(522);
            var i = n(525),
                s = n(28);
            n(173), n(4), n(2);
            var a = n(14),
                u = n(101),
                c = n(10),
                l = n(531),
                f = n(40);
            n(6);
            var h = n(534),
                p = n(535),
                d = n(536);

            function y() {
                return g.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function v(t, e) {
                if (y() < e) throw new RangeError("Invalid typed array length");
                return g.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = g.prototype : (null === t && (t = new g(e)), t.length = e), t
            }

            function g(t, e, n) {
                if (!(g.TYPED_ARRAY_SUPPORT || this instanceof g)) return new g(t, e, n);
                if ("number" != typeof t) return _(this, t, e, n);
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return b(this, t)
            }

            function _(t, e, n, r) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                    if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), g.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = g.prototype : t = w(t, e), t
                }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !g.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | O(e, n),
                        o = (t = v(t, r)).write(e, n);
                    return o !== r && (t = a(t).call(t, 0, o)), t
                }(t, e, n) : function(t, e) {
                    if (g.isBuffer(e)) {
                        var n = 0 | x(e.length);
                        return 0 === (t = v(t, n)).length || e.copy(t, 0, 0, n), t
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function(t) {
                            return t != t
                        }(e.length) ? v(t, 0) : w(t, e);
                        if ("Buffer" === e.type && d(e.data)) return w(t, e.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }

            function m(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function b(t, e) {
                if (m(e), t = v(t, e < 0 ? 0 : 0 | x(e)), !g.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0;
                return t
            }

            function w(t, e) {
                var n = e.length < 0 ? 0 : 0 | x(e.length);
                t = v(t, n);
                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                return t
            }

            function x(t) {
                if (t >= y()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + y().toString(16) + " bytes");
                return 0 | t
            }

            function O(t, e) {
                if (g.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return J(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return X(t).length;
                    default:
                        if (r) return J(t).length;
                        e = ("" + e).toLowerCase(), r = !0
                }
            }

            function S(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
            }

            function k(t, e, n, r, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (o) return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = g.from(e, r)), g.isBuffer(e)) return 0 === e.length ? -1 : E(t, e, n, r, o);
                if ("number" == typeof e) return e &= 255, g.TYPED_ARRAY_SUPPORT && "function" == typeof s(Uint8Array.prototype) ? o ? s(Uint8Array.prototype).call(t, e, n) : i(Uint8Array.prototype).call(t, e, n) : E(t, [e], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function E(t, e, n, r, o) {
                var i, s = 1,
                    a = t.length,
                    u = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    a /= s = 2, u /= 2, n /= 2
                }

                function c(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (o) {
                    var l = -1;
                    for (i = n; i < a; i++)
                        if (c(t, i) === c(e, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i), i - l + 1 === u) return l * s
                        } else - 1 !== l && (i -= i - l), l = -1
                } else
                    for (a < n + u && (n = a - u), i = n; 0 <= i; i--) {
                        for (var f = !0, h = 0; h < u; h++)
                            if (c(t, i + h) !== c(e, h)) {
                                f = !1;
                                break
                            } if (f) return i
                    }
                return -1
            }

            function P(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                (!r || i < (r = Number(r))) && (r = i);
                var s = e.length;
                if (s % 2 != 0) throw new TypeError("Invalid hex string");
                s / 2 < r && (r = s / 2);
                for (var a = 0; a < r; ++a) {
                    var u = o(e.substr(2 * a, 2), 16);
                    if (isNaN(u)) return a;
                    t[n + a] = u
                }
                return a
            }

            function A(t, e, n, r) {
                return W(function(t) {
                    for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                    return e
                }(e), t, n, r)
            }

            function j(t, e, n, r) {
                return W(function(t, e) {
                    for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, o = n % 256, i.push(o), i.push(r);
                    return i
                }(e, t.length - n), t, n, r)
            }

            function T(t, e, n) {
                return 0 === e && n === t.length ? h.fromByteArray(t) : h.fromByteArray(a(t).call(t, e, n))
            }

            function B(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], o = e; o < n;) {
                    var i, s, u, c, l = t[o],
                        f = null,
                        h = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                    if (o + h <= n) switch (h) {
                        case 1:
                            l < 128 && (f = l);
                            break;
                        case 2:
                            128 == (192 & (i = t[o + 1])) && 127 < (c = (31 & l) << 6 | 63 & i) && (f = c);
                            break;
                        case 3:
                            i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && 2047 < (c = (15 & l) << 12 | (63 & i) << 6 | 63 & s) && (c < 55296 || 57343 < c) && (f = c);
                            break;
                        case 4:
                            i = t[o + 1], s = t[o + 2], u = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & u) && 65535 < (c = (15 & l) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & u) && c < 1114112 && (f = c)
                    }
                    null === f ? (f = 65533, h = 1) : 65535 < f && (f -= 65536, r.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), r.push(f), o += h
                }
                return function(t) {
                    var e = t.length;
                    if (e <= R) return String.fromCharCode.apply(String, t);
                    for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, a(t).call(t, r, r += R));
                    return n
                }(r)
            }
            e.Buffer = g, e.SlowBuffer = function(t) {
                return +t != t && (t = 0), g.alloc(+t)
            }, e.INSPECT_MAX_BYTES = 50, g.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(), e.kMaxLength = y(), g.poolSize = 8192, g._augment = function(t) {
                return t.__proto__ = g.prototype, t
            }, g.from = function(t, e, n) {
                return _(null, t, e, n)
            }, g.TYPED_ARRAY_SUPPORT && (g.prototype.__proto__ = Uint8Array.prototype, g.__proto__ = Uint8Array, void 0 !== f && l && g[l] === g && c(g, l, {
                value: null,
                configurable: !0
            })), g.alloc = function(t, e, n) {
                return r = null, i = e, s = n, m(o = t), o <= 0 || void 0 === i ? v(r, o) : "string" == typeof s ? u(a = v(r, o)).call(a, i, s) : u(c = v(r, o)).call(c, i);
                var r, o, i, s, a, c
            }, g.allocUnsafe = function(t) {
                return b(null, t)
            }, g.allocUnsafeSlow = function(t) {
                return b(null, t)
            }, g.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, g.compare = function(t, e) {
                if (!g.isBuffer(t) || !g.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                    if (t[o] !== e[o]) {
                        n = t[o], r = e[o];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }, g.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, g.concat = function(t, e) {
                if (!d(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return g.alloc(0);
                var n;
                if (void 0 === e)
                    for (n = e = 0; n < t.length; ++n) e += t[n].length;
                var r = g.allocUnsafe(e),
                    o = 0;
                for (n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (!g.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                    i.copy(r, o), o += i.length
                }
                return r
            }, g.byteLength = O, g.prototype._isBuffer = !0, g.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) S(this, e, e + 1);
                return this
            }, g.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) S(this, e, e + 3), S(this, e + 1, e + 2);
                return this
            }, g.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) S(this, e, e + 7), S(this, e + 1, e + 6), S(this, e + 2, e + 5), S(this, e + 3, e + 4);
                return this
            }, g.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 == t ? "" : 0 === arguments.length ? B(this, 0, t) : function(t, e, n) {
                    var r = !1;
                    if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (e >>>= 0)) return "";
                    for (t = t || "utf8";;) switch (t) {
                        case "hex":
                            return N(this, e, n);
                        case "utf8":
                        case "utf-8":
                            return B(this, e, n);
                        case "ascii":
                            return L(this, e, n);
                        case "latin1":
                        case "binary":
                            return I(this, e, n);
                        case "base64":
                            return T(this, e, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return C(this, e, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), r = !0
                    }
                }.apply(this, arguments)
            }, g.prototype.equals = function(t) {
                if (!g.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === g.compare(this, t)
            }, g.prototype.inspect = function() {
                var t = "",
                    n = e.INSPECT_MAX_BYTES;
                return 0 < this.length && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
            }, g.prototype.compare = function(t, e, n, r, o) {
                if (!g.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                if (o <= r && n <= e) return 0;
                if (o <= r) return -1;
                if (n <= e) return 1;
                if (this === t) return 0;
                for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), u = Math.min(i, s), c = a(this).call(this, r, o), l = a(t).call(t, e, n), f = 0; f < u; ++f)
                    if (c[f] !== l[f]) {
                        i = c[f], s = l[f];
                        break
                    } return i < s ? -1 : s < i ? 1 : 0
            }, g.prototype.includes = function(t, e, n) {
                return -1 !== s(this).call(this, t, e, n)
            }, g.prototype.indexOf = function(t, e, n) {
                return k(this, t, e, n, !0)
            }, g.prototype.lastIndexOf = function(t, e, n) {
                return k(this, t, e, n, !1)
            }, g.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var o = this.length - e;
                if ((void 0 === n || o < n) && (n = o), 0 < t.length && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r = r || "utf8";
                for (var i, s, a, u, c = !1;;) switch (r) {
                    case "hex":
                        return P(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return a = e, u = n, W(J(t, this.length - a), this, a, u);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return A(this, t, e, n);
                    case "base64":
                        return this, i = e, s = n, W(X(t), this, i, s);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return j(this, t, e, n);
                    default:
                        if (c) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), c = !0
                }
            }, g.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: a(Array.prototype).call(this._arr || this, 0)
                }
            };
            var R = 4096;

            function L(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                return r
            }

            function I(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                return r
            }

            function N(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || r < n) && (n = r);
                for (var o = "", i = e; i < n; ++i) o += z(t[i]);
                return o
            }

            function C(t, e, n) {
                for (var r = a(t).call(t, e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }

            function U(t, e, n) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (n < t + e) throw new RangeError("Trying to access beyond buffer length")
            }

            function M(t, e, n, r, o, i) {
                if (!g.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (o < e || e < i) throw new RangeError('"value" argument is out of bounds');
                if (n + r > t.length) throw new RangeError("Index out of range")
            }

            function H(t, e, n, r) {
                e < 0 && (e = 65535 + e + 1);
                for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }

            function D(t, e, n, r) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
            }

            function V(t, e, n, r) {
                if (n + r > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function F(t, e, n, r, o) {
                return o || V(t, 0, n, 4), p.write(t, e, n, r, 23, 4), n + 4
            }

            function K(t, e, n, r, o) {
                return o || V(t, 0, n, 8), p.write(t, e, n, r, 52, 8), n + 8
            }
            g.prototype.slice = function(t, e) {
                var n, r = this.length;
                if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), e < t && (e = t), g.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = g.prototype;
                else {
                    var o = e - t;
                    n = new g(o, void 0);
                    for (var i = 0; i < o; ++i) n[i] = this[i + t]
                }
                return n
            }, g.prototype.readUIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || U(t, e, this.length);
                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                return r
            }, g.prototype.readUIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || U(t, e, this.length);
                for (var r = this[t + --e], o = 1; 0 < e && (o *= 256);) r += this[t + --e] * o;
                return r
            }, g.prototype.readUInt8 = function(t, e) {
                return e || U(t, 1, this.length), this[t]
            }, g.prototype.readUInt16LE = function(t, e) {
                return e || U(t, 2, this.length), this[t] | this[t + 1] << 8
            }, g.prototype.readUInt16BE = function(t, e) {
                return e || U(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, g.prototype.readUInt32LE = function(t, e) {
                return e || U(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, g.prototype.readUInt32BE = function(t, e) {
                return e || U(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, g.prototype.readIntLE = function(t, e, n) {
                t |= 0, e |= 0, n || U(t, e, this.length);
                for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                return (o *= 128) <= r && (r -= Math.pow(2, 8 * e)), r
            }, g.prototype.readIntBE = function(t, e, n) {
                t |= 0, e |= 0, n || U(t, e, this.length);
                for (var r = e, o = 1, i = this[t + --r]; 0 < r && (o *= 256);) i += this[t + --r] * o;
                return (o *= 128) <= i && (i -= Math.pow(2, 8 * e)), i
            }, g.prototype.readInt8 = function(t, e) {
                return e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, g.prototype.readInt16LE = function(t, e) {
                e || U(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, g.prototype.readInt16BE = function(t, e) {
                e || U(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, g.prototype.readInt32LE = function(t, e) {
                return e || U(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, g.prototype.readInt32BE = function(t, e) {
                return e || U(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, g.prototype.readFloatLE = function(t, e) {
                return e || U(t, 4, this.length), p.read(this, t, !0, 23, 4)
            }, g.prototype.readFloatBE = function(t, e) {
                return e || U(t, 4, this.length), p.read(this, t, !1, 23, 4)
            }, g.prototype.readDoubleLE = function(t, e) {
                return e || U(t, 8, this.length), p.read(this, t, !0, 52, 8)
            }, g.prototype.readDoubleBE = function(t, e) {
                return e || U(t, 8, this.length), p.read(this, t, !1, 52, 8)
            }, g.prototype.writeUIntLE = function(t, e, n, r) {
                t = +t, e |= 0, n |= 0, r || M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var o = 1,
                    i = 0;
                for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
            }, g.prototype.writeUIntBE = function(t, e, n, r) {
                t = +t, e |= 0, n |= 0, r || M(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                var o = n - 1,
                    i = 1;
                for (this[e + o] = 255 & t; 0 <= --o && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
            }, g.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 1, 255, 0), g.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, g.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), g.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : H(this, t, e, !0), e + 2
            }, g.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 2, 65535, 0), g.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : H(this, t, e, !1), e + 2
            }, g.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), g.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : D(this, t, e, !0), e + 4
            }, g.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 4, 4294967295, 0), g.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4
            }, g.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    M(this, t, e, n, o - 1, -o)
                }
                var i = 0,
                    s = 1,
                    a = 0;
                for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
                return e + n
            }, g.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    M(this, t, e, n, o - 1, -o)
                }
                var i = n - 1,
                    s = 1,
                    a = 0;
                for (this[e + i] = 255 & t; 0 <= --i && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
                return e + n
            }, g.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 1, 127, -128), g.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, g.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), g.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : H(this, t, e, !0), e + 2
            }, g.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 2, 32767, -32768), g.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : H(this, t, e, !1), e + 2
            }, g.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), g.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : D(this, t, e, !0), e + 4
            }, g.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e |= 0, n || M(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), g.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : D(this, t, e, !1), e + 4
            }, g.prototype.writeFloatLE = function(t, e, n) {
                return F(this, t, e, !0, n)
            }, g.prototype.writeFloatBE = function(t, e, n) {
                return F(this, t, e, !1, n)
            }, g.prototype.writeDoubleLE = function(t, e, n) {
                return K(this, t, e, !0, n)
            }, g.prototype.writeDoubleBE = function(t, e, n) {
                return K(this, t, e, !1, n)
            }, g.prototype.copy = function(t, e, n, r) {
                if (n = n || 0, r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e = e || 0, 0 < r && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var o, i = r - n;
                if (this === t && n < e && e < r)
                    for (o = i - 1; 0 <= o; --o) t[o + e] = this[o + n];
                else if (i < 1e3 || !g.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < i; ++o) t[o + e] = this[o + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                return i
            }, g.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !g.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                var i;
                if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(t = t || 0))
                    for (i = e; i < n; ++i) this[i] = t;
                else {
                    var s = g.isBuffer(t) ? t : J(new g(t, r).toString()),
                        a = s.length;
                    for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
                }
                return this
            };
            var q = /[^+\/0-9A-Za-z-_]/g;

            function z(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function J(t, e) {
                var n;
                e = e || 1 / 0;
                for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                    if (55295 < (n = t.charCodeAt(s)) && n < 57344) {
                        if (!o) {
                            if (56319 < n) {
                                -1 < (e -= 3) && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === r) {
                                -1 < (e -= 3) && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            -1 < (e -= 3) && i.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && -1 < (e -= 3) && i.push(239, 191, 189);
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
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }

            function X(t) {
                return h.toByteArray(function(t) {
                    var e;
                    if ((t = (r(e = t) ? r(e).call(e) : e.replace(/^\s+|\s+$/g, "")).replace(q, "")).length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }(t))
            }

            function W(t, e, n, r) {
                for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                return o
            }
        }).call(this, n(91))
    }, function(t, e, n) {
        var r = n(89),
            o = n(90),
            i = n(75).Buffer,
            s = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            a = new Array(64);

        function u() {
            this.init(), this._w = a, o.call(this, 64, 56)
        }
        r(u, o), u.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
        }, u.prototype._update = function(t) {
            for (var e, n, r, o, i, a, u, c = this._w, l = 0 | this._a, f = 0 | this._b, h = 0 | this._c, p = 0 | this._d, d = 0 | this._e, y = 0 | this._f, v = 0 | this._g, g = 0 | this._h, _ = 0; _ < 16; ++_) c[_] = t.readInt32BE(4 * _);
            for (; _ < 64; ++_) c[_] = 0 | (((n = c[_ - 2]) >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10) + c[_ - 7] + (((e = c[_ - 15]) >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) + c[_ - 16];
            for (var m = 0; m < 64; ++m) {
                var b = g + (((u = d) >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + ((a = v) ^ d & (y ^ a)) + s[m] + c[m] | 0,
                    w = 0 | (((i = l) >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + ((r = l) & (o = f) | h & (r | o));
                g = v, v = y, y = d, d = p + b | 0, p = h, h = f, f = l, l = b + w | 0
            }
            this._a = l + this._a | 0, this._b = f + this._b | 0, this._c = h + this._c | 0, this._d = p + this._d | 0, this._e = d + this._e | 0, this._f = y + this._f | 0, this._g = v + this._g | 0, this._h = g + this._h | 0
        }, u.prototype._hash = function() {
            var t = i.allocUnsafe(32);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
        }, t.exports = u
    }, function(t, e, n) {
        var r = n(89),
            o = n(90),
            i = n(75).Buffer,
            s = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            a = new Array(160);

        function u() {
            this.init(), this._w = a, o.call(this, 128, 112)
        }

        function c(t, e, n) {
            return n ^ t & (e ^ n)
        }

        function l(t, e, n) {
            return t & e | n & (t | e)
        }

        function f(t, e) {
            return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
        }

        function h(t, e) {
            return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
        }

        function p(t, e) {
            return t >>> 0 < e >>> 0 ? 1 : 0
        }
        r(u, o), u.prototype.init = function() {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
        }, u.prototype._update = function(t) {
            for (var e, n, r, o, i, a, u, d, y = this._w, v = 0 | this._ah, g = 0 | this._bh, _ = 0 | this._ch, m = 0 | this._dh, b = 0 | this._eh, w = 0 | this._fh, x = 0 | this._gh, O = 0 | this._hh, S = 0 | this._al, k = 0 | this._bl, E = 0 | this._cl, P = 0 | this._dl, A = 0 | this._el, j = 0 | this._fl, T = 0 | this._gl, B = 0 | this._hl, R = 0; R < 32; R += 2) y[R] = t.readInt32BE(4 * R), y[R + 1] = t.readInt32BE(4 * R + 4);
            for (; R < 160; R += 2) {
                var L = y[R - 30],
                    I = y[R - 30 + 1],
                    N = ((u = L) >>> 1 | (d = I) << 31) ^ (u >>> 8 | d << 24) ^ u >>> 7,
                    C = ((i = I) >>> 1 | (a = L) << 31) ^ (i >>> 8 | a << 24) ^ (i >>> 7 | a << 25),
                    U = ((r = L = y[R - 4]) >>> 19 | (o = I = y[R - 4 + 1]) << 13) ^ (o >>> 29 | r << 3) ^ r >>> 6,
                    M = ((e = I) >>> 19 | (n = L) << 13) ^ (n >>> 29 | e << 3) ^ (e >>> 6 | n << 26),
                    H = y[R - 14],
                    D = y[R - 14 + 1],
                    V = y[R - 32],
                    F = y[R - 32 + 1],
                    K = C + D | 0,
                    q = N + H + p(K, C) | 0;
                q = (q = q + U + p(K = K + M | 0, M) | 0) + V + p(K = K + F | 0, F) | 0, y[R] = q, y[R + 1] = K
            }
            for (var z = 0; z < 160; z += 2) {
                q = y[z], K = y[z + 1];
                var J = l(v, g, _),
                    X = l(S, k, E),
                    W = f(v, S),
                    Y = f(S, v),
                    G = h(b, A),
                    Z = h(A, b),
                    $ = s[z + 1],
                    Q = c(b, w, x),
                    tt = c(A, j, T),
                    et = B + Z | 0,
                    nt = O + G + p(et, B) | 0;
                nt = (nt = (nt = nt + Q + p(et = et + tt | 0, tt) | 0) + s[z] + p(et = et + $ | 0, $) | 0) + q + p(et = et + K | 0, K) | 0;
                var rt = Y + X | 0,
                    ot = W + J + p(rt, Y) | 0;
                O = x, B = T, x = w, T = j, w = b, j = A, b = m + nt + p(A = P + et | 0, P) | 0, m = _, P = E, _ = g, E = k, g = v, k = S, v = nt + ot + p(S = et + rt | 0, et) | 0
            }
            this._al = this._al + S | 0, this._bl = this._bl + k | 0, this._cl = this._cl + E | 0, this._dl = this._dl + P | 0, this._el = this._el + A | 0, this._fl = this._fl + j | 0, this._gl = this._gl + T | 0, this._hl = this._hl + B | 0, this._ah = this._ah + v + p(this._al, S) | 0, this._bh = this._bh + g + p(this._bl, k) | 0, this._ch = this._ch + _ + p(this._cl, E) | 0, this._dh = this._dh + m + p(this._dl, P) | 0, this._eh = this._eh + b + p(this._el, A) | 0, this._fh = this._fh + w + p(this._fl, j) | 0, this._gh = this._gh + x + p(this._gl, T) | 0, this._hh = this._hh + O + p(this._hl, B) | 0
        }, u.prototype._hash = function() {
            var t = i.allocUnsafe(64);

            function e(e, n, r) {
                t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
            }
            return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t
        }, t.exports = u
    }, function(t, e, n) {
        t.exports = n(550)
    }, function(t, e, n) {
        t.exports = n(554)
    }, function(t, e, n) {
        n(556);
        var r = n(3);
        t.exports = r.Object.setPrototypeOf
    }, function(t, e, n) {
        n(558);
        var r = n(3);
        t.exports = r.Reflect.construct
    }, function(t, e, n) {
        t.exports = n(559)
    }, function(t, e, n) {
        n(560), n(105), n(64), n(55);
        var r = n(3);
        t.exports = r.Map
    }, function(t, e) {
        t.exports = function(t, e, n, r, o) {
            var i, s;
            if (void 0 === r) r = 0;
            else if ((r |= 0) < 0 || r >= t.length) throw new RangeError("invalid lower bound");
            if (void 0 === o) o = t.length - 1;
            else if ((o |= 0) < r || o >= t.length) throw new RangeError("invalid upper bound");
            for (; r <= o;)
                if ((s = +n(t[i = r + (o - r >>> 1)], e, i, t)) < 0) r = i + 1;
                else {
                    if (!(0 < s)) return i;
                    o = i - 1
                } return ~r
        }
    }, function(t, e, n) {
        "use strict";
        n(10)(e, "__esModule", {
            value: !0
        }), e.MAP_BRANCH_PREFIX = e.MAP_PREFIX = e.LIST_BRANCH_PREFIX = e.LIST_PREFIX = e.BLOB_PREFIX = void 0, e.BLOB_PREFIX = 0, e.LIST_PREFIX = 2, e.LIST_BRANCH_PREFIX = 1, e.MAP_PREFIX = 3, e.MAP_BRANCH_PREFIX = 4
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(561);
        n(6);
        var i = n(282),
            s = n(106),
            a = n(162),
            u = n(175),
            c = n(25),
            l = n(569),
            f = n(137);
        n(86), n(62);
        var h = n(27),
            p = n(177),
            d = n(121),
            y = n(135),
            v = n(181),
            g = n(28),
            _ = n(139);
        n(4), n(2);
        var m = n(111),
            b = n(286),
            w = n(21),
            x = n(52),
            O = n(13),
            S = n(40),
            k = n(10);
        k(e, "__esModule", {
            value: !0
        }), e.MapProofError = e.MapProof = void 0;
        var E = R(n(288)),
            P = n(88),
            A = n(140),
            j = n(289),
            T = R(n(574)),
            B = n(262);

        function R(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function L(t) {
            return (L = "function" == typeof S && "symbol" === O(x) ? function(t) {
                return O(t)
            } : function(t) {
                return t && "function" == typeof S && t.constructor === S && t !== S.prototype ? "symbol" : O(t)
            })(t)
        }

        function I(t, e) {
            return !e || "object" !== L(e) && "function" != typeof e ? function(t) {
                if (void 0 !== t) return t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(t) : e
        }

        function N(t) {
            var e = "function" == typeof b ? new b : void 0;
            return (N = function(t) {
                if (null === t || (n = t, -1 === g(r = Function.toString.call(n)).call(r, "[native code]"))) return t;
                var n, r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, o)
                }

                function o() {
                    return C(t, arguments, M(this).constructor)
                }
                return o.prototype = w(t.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), U(o, t)
            })(t)
        }

        function C(t, e, n) {
            return (C = function() {
                if ("undefined" != typeof Reflect && m && !m.sham) {
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(m(Date, [], (function() {}))), 1
                    } catch (t) {
                        return
                    }
                }
            }() ? m : function(t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var o = new(_(Function).apply(t, r));
                return n && U(o, n.prototype), o
            }).apply(null, arguments)
        }

        function U(t, e) {
            return (U = v || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function M(t) {
            return (M = v ? y : function(t) {
                return t.__proto__ || y(t)
            })(t)
        }

        function H(t) {
            return function(t) {
                if (h(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (d(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return p(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function D(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function V(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), k(t, r.key, r)
            }
        }
        var F = function() {
            var t, e;

            function n(t, e, p) {
                var d, y, v, g, _, m, w;
                if (D(this, n), this.proof = function(t) {
                        if (!h(t)) throw new K("malformedProof");
                        if (i(t).call(t, (function(t) {
                                var e = t.path,
                                    n = t.hash;
                                return /^[01]{1,256}$/.test(e) && /^[0-9a-f]{64}$/i.test(n)
                            }))) return s(t).call(t, (function(t) {
                            var e = t.path,
                                n = t.hash;
                            return {
                                path: new T.default(e),
                                hash: n
                            }
                        }));
                        throw new K("malformedProof")
                    }(t.proof), this.entries = function(t, e, n) {
                        function r(t) {
                            var n, r = "function" == typeof e.hash ? e.hash(t) : (0, P.hash)(e.serialize(t, [], 0));
                            return n = "string" == typeof r ? (0, B.hexadecimalToUint8Array)(r) : new Uint8Array(r), new T.default(n)
                        }
                        if (h(t)) return s(t).call(t, (function(t) {
                            var e, o = t.missing,
                                i = t.key,
                                s = t.value;
                            if (void 0 === o && (void 0 === i || void 0 === s)) throw new K("unknownEntryType");
                            if (void 0 !== o && (void 0 !== i || void 0 !== s)) throw new K("ambiguousEntryType");
                            return void 0 !== o ? {
                                missing: o,
                                path: r(o)
                            } : {
                                key: i,
                                value: s,
                                path: r(i),
                                hash: (0, P.hash)(c(e = [j.BLOB_PREFIX]).call(e, H(n.serialize(s, [], 0))))
                            }
                        }));
                        throw new K("malformedEntries")
                    }(f(t), e, p), !e) throw new TypeError("No key type provided");
                if ("function" != typeof e.serialize && "function" != typeof e.hash) throw new TypeError("No `serialize` or `hash` method in the key type");
                if (this.keyType = e, !p || "function" != typeof p.serialize) throw new TypeError("No `serialize` method in the value type");
                this.valueType = p,
                    function() {
                        for (var t, e = this, n = 1; n < this.proof.length; n++) {
                            var i = [this.proof[n - 1], this.proof[n]],
                                s = i[0].path,
                                a = i[1].path;
                            switch (s.compare(a)) {
                                case -1:
                                    if (o(a).call(a, s)) throw new K("embeddedPaths", s, a);
                                    break;
                                case 0:
                                    throw new K("duplicatePath", a);
                                case 1:
                                    throw new K("invalidOrdering", s, a)
                            }
                        }
                        r(t = f(this)).call(t, (function(t) {
                            var n = t.path,
                                r = (0, E.default)(e.proof, n, (function(t, e) {
                                    return t.path.compare(e)
                                }));
                            if (0 <= r) throw new K("duplicatePath", n);
                            var i = -r - 1;
                            if (0 < i) {
                                var s = e.proof[i - 1].path;
                                if (o(n).call(n, s)) throw new K("embeddedPaths", s, n)
                            }
                        }))
                    }.call(this);
                for (var x = l(d = c(y = this.proof).call(y, f(this))).call(d, (function(t, e) {
                        var n = t.path,
                            r = e.path;
                        return n.compare(r)
                    })), O = 1; O < x.length; O++) {
                    var S = [x[O - 1], x[O]],
                        k = S[0].path,
                        R = S[1].path;
                    if (0 === k.compare(R)) throw new K("duplicatePath", k)
                }
                var L = (0, B.hexadecimalToUint8Array)(function(t) {
                    function e(t, e) {
                        var n, r, o, i, s, a = (n = t.hash, r = e.hash, o = t.path, i = e.path, s = [j.MAP_BRANCH_PREFIX], A.Hash.serialize(n, s, s.length), A.Hash.serialize(r, s, s.length), o.serialize(s), i.serialize(s), s);
                        return (0, P.hash)(a)
                    }

                    function n(t, n) {
                        var r = t.pop(),
                            o = t.pop();
                        return t.push({
                            path: n,
                            hash: e(o, r)
                        }), 1 < t.length ? n.commonPrefix(t[t.length - 2].path) : null
                    }
                    switch (t.length) {
                        case 0:
                            return "0000000000000000000000000000000000000000000000000000000000000000";
                        case 1:
                            if (!t[0].path.isTerminal()) throw new K("nonTerminalNode", t[0].path);
                            return function(t) {
                                var e, n, r, o = (e = t.path, n = t.hash, r = [j.MAP_BRANCH_PREFIX], e.serialize(r), A.Hash.serialize(n, r, r.length), r);
                                return (0, P.hash)(o)
                            }(t[0]);
                        default:
                            var r = [],
                                o = t[0].path.commonPrefix(t[1].path);
                            r.push(t[0], t[1]);
                            for (var i = 2; i < t.length; i++) {
                                for (var s = t[i], a = s.path.commonPrefix(r[r.length - 1].path); 1 < r.length && a.bitLength < o.bitLength;) {
                                    var u = n(r, o);
                                    u && (o = u)
                                }
                                r.push(s), o = a
                            }
                            for (; 1 < r.length;) o = n(r, o);
                            return r[0].hash
                    }
                }(u(x).call(x, (function(t) {
                    return !!t.hash
                }))));
                this.merkleRoot = (0, P.hash)(c(v = [j.MAP_PREFIX]).call(v, H(L))), this.missingKeys = new a(s(g = u(_ = f(this)).call(_, (function(t) {
                    return void 0 !== t.missing
                }))).call(g, (function(t) {
                    return t.missing
                }))), this.entries = new b(s(m = u(w = f(this)).call(w, (function(t) {
                    return void 0 !== t.key
                }))).call(m, (function(t) {
                    return [t.key, t.value]
                })))
            }
            return t = n, e = [{
                key: "rawKey",
                value: function(t) {
                    if (!t || "function" != typeof t.serialize) throw new TypeError("Invalid key type; pass a type with a `serialize` function");
                    return {
                        hash: function(e) {
                            var n = t.serialize(e, [], 0);
                            if (n.length !== P.HASH_LENGTH) throw new Error("Invalid raw key; raw keys should have ".concat(P.HASH_LENGTH, "-byte serialization"));
                            return n
                        }
                    }
                }
            }], null && V(t.prototype, null), e && V(t, e), n
        }();
        e.MapProof = F;
        var K = function() {
            function t(e) {
                var n, r;
                switch (D(this, t), e) {
                    case "malformedProof":
                        r = I(this, M(t).call(this, "malformed `proof` part of the proof"));
                        break;
                    case "malformedEntries":
                    case "unknownEntryType":
                    case "ambiguousEntryType":
                        r = I(this, M(t).call(this, "malformed `entries` part of the proof"));
                        break;
                    case "embeddedPaths":
                        r = I(this, M(t).call(this, c(n = "embedded paths in proof: ".concat(arguments.length <= 1 ? void 0 : arguments[1], " is a prefix of ")).call(n, arguments.length <= 2 ? void 0 : arguments[2])));
                        break;
                    case "duplicatePath":
                        r = I(this, M(t).call(this, "duplicate ".concat(arguments.length <= 1 ? void 0 : arguments[1], " in proof")));
                        break;
                    case "invalidOrdering":
                        r = I(this, M(t).call(this, "invalid path ordering"));
                        break;
                    case "nonTerminalNode":
                        r = I(this, M(t).call(this, "non-terminal isolated node in proof"));
                        break;
                    default:
                        r = I(this, M(t).call(this, e))
                }
                return r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = w(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && U(t, e)
            }(t, N(Error)), t
        }();
        e.MapProofError = K
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return t.apply(e, n)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(28),
            i = n(109),
            s = n(1);
        n(4), n(2), n(33);
        var a = n(34);

        function u(t) {
            return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(t, e, n) {
            if (!e) return t;
            var c;
            if (n) c = n(e);
            else if (a.isURLSearchParams(e)) c = e.toString();
            else {
                var l = [];
                s(a).call(a, e, (function(t, e) {
                    null != t && (a.isArray(t) ? e += "[]" : t = [t], s(a).call(a, t, (function(t) {
                        a.isDate(t) ? t = t.toISOString() : a.isObject(t) && (t = i(t)), l.push(u(e) + "=" + u(t))
                    })))
                })), c = l.join("&")
            }
            if (c) {
                var f = o(t).call(t, "#"); - 1 !== f && (t = r(t).call(t, 0, f)), t += (-1 === o(t).call(t, "?") ? "?" : "&") + c
            }
            return t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return !(!t || !t.__CANCEL__)
        }
    }, function(t, e, n) {
        "use strict";
        (function(e) {
            var r = n(1),
                o = n(109);
            n(4), n(2);
            var i = n(34),
                s = n(598),
                a = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function u(t, e) {
                !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var c, l = {
                adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (c = n(295)), c),
                transformRequest: [function(t, e) {
                    return s(e, "Accept"), s(e, "Content-Type"), i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) ? t : i.isArrayBufferView(t) ? t.buffer : i.isURLSearchParams(t) ? (u(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : i.isObject(t) ? (u(e, "application/json;charset=utf-8"), o(t)) : t
                }],
                transformResponse: [function(t) {
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (t) {}
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(t) {
                    return 200 <= t && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r(i).call(i, ["delete", "get", "head"], (function(t) {
                l.headers[t] = {}
            })), r(i).call(i, ["post", "put", "patch"], (function(t) {
                l.headers[t] = i.merge(a)
            })), t.exports = l
        }).call(this, n(165))
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(28),
            i = n(23),
            s = n(34),
            a = n(599),
            u = n(292),
            c = n(601),
            l = n(604),
            f = n(605),
            h = n(296);
        t.exports = function(t) {
            return new i((function(e, i) {
                var p = t.data,
                    d = t.headers;
                s.isFormData(p) && delete d["Content-Type"];
                var y = new XMLHttpRequest;
                if (t.auth) {
                    var v = t.auth.username || "",
                        g = t.auth.password || "";
                    d.Authorization = "Basic " + btoa(v + ":" + g)
                }
                var _ = c(t.baseURL, t.url);
                if (y.open(t.method.toUpperCase(), u(_, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, y.onreadystatechange = function() {
                        var n;
                        if (y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === o(n = y.responseURL).call(n, "file:"))) {
                            var r = "getAllResponseHeaders" in y ? l(y.getAllResponseHeaders()) : null,
                                s = {
                                    data: t.responseType && "text" !== t.responseType ? y.response : y.responseText,
                                    status: y.status,
                                    statusText: y.statusText,
                                    headers: r,
                                    config: t,
                                    request: y
                                };
                            a(e, i, s), y = null
                        }
                    }, y.onabort = function() {
                        y && (i(h("Request aborted", t, "ECONNABORTED", y)), y = null)
                    }, y.onerror = function() {
                        i(h("Network Error", t, null, y)), y = null
                    }, y.ontimeout = function() {
                        var e = "timeout of " + t.timeout + "ms exceeded";
                        t.timeoutErrorMessage && (e = t.timeoutErrorMessage), i(h(e, t, "ECONNABORTED", y)), y = null
                    }, s.isStandardBrowserEnv()) {
                    var m = n(606),
                        b = (t.withCredentials || f(_)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : void 0;
                    b && (d[t.xsrfHeaderName] = b)
                }
                if ("setRequestHeader" in y && r(s).call(s, d, (function(t, e) {
                        void 0 === p && "content-type" === e.toLowerCase() ? delete d[e] : y.setRequestHeader(e, t)
                    })), s.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), t.responseType) try {
                    y.responseType = t.responseType
                } catch (v) {
                    if ("json" !== t.responseType) throw v
                }
                "function" == typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                    y && (y.abort(), i(t), y = null)
                })), void 0 === p && (p = null), y.send(p)
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(600);
        t.exports = function(t, e, n, o, i) {
            var s = new Error(t);
            return r(s, e, n, o, i)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(28),
            o = n(46),
            i = n(175),
            s = n(25),
            a = n(1),
            u = n(34);
        t.exports = function(t, e) {
            var n, c;
            e = e || {};
            var l = {},
                f = ["url", "method", "params", "data"],
                h = ["headers", "auth", "proxy"],
                p = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            a(u).call(u, f, (function(t) {
                void 0 !== e[t] && (l[t] = e[t])
            })), a(u).call(u, h, (function(n) {
                u.isObject(e[n]) ? l[n] = u.deepMerge(t[n], e[n]) : void 0 !== e[n] ? l[n] = e[n] : u.isObject(t[n]) ? l[n] = u.deepMerge(t[n]) : void 0 !== t[n] && (l[n] = t[n])
            })), a(u).call(u, p, (function(n) {
                void 0 !== e[n] ? l[n] = e[n] : void 0 !== t[n] && (l[n] = t[n])
            }));
            var d = s(n = s(f).call(f, h)).call(n, p),
                y = i(c = o(e)).call(c, (function(t) {
                    return -1 === r(d).call(d, t)
                }));
            return a(u).call(u, y, (function(n) {
                void 0 !== e[n] ? l[n] = e[n] : void 0 !== t[n] && (l[n] = t[n])
            })), l
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.message = t
        }
        n(4), n(2), r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        t.exports = n(611)
    }, function(t, e, n) {
        t.exports = n(612)
    }, function(t, e, n) {
        "use strict";
        var r = n(5);
        t.exports = function(t, e, n) {
            var o, i = r(this),
                s = 2 < arguments.length ? n : void 0;
            if ("function" != typeof e && "function" != typeof s) throw TypeError("At least one callback required");
            return i.has(t) ? (o = i.get(t), "function" == typeof e && (o = e(o), i.set(t, o))) : "function" == typeof s && (o = s(), i.set(t, o)), o
        }
    }, function(t, e, n) {
        var r = n(656);
        t.exports = {
            VotingState: r
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(21);
        t.exports = h;
        var o, i = n(77),
            s = i.LongBits,
            a = i.base64,
            u = i.utf8;

        function c(t, e, n) {
            this.fn = t, this.len = e, this.next = void 0, this.val = n
        }

        function l() {}

        function f(t) {
            this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
        }

        function h() {
            this.len = 0, this.head = new c(l, 0, 0), this.tail = this.head, this.states = null
        }

        function p(t, e, n) {
            e[n] = 255 & t
        }

        function d(t, e) {
            this.len = t, this.next = void 0, this.val = e
        }

        function y(t, e, n) {
            for (; t.hi;) e[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
            for (; 127 < t.lo;) e[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
            e[n++] = t.lo
        }

        function v(t, e, n) {
            e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
        }
        h.create = i.Buffer ? function() {
            return (h.create = function() {
                return new o
            })()
        } : function() {
            return new h
        }, h.alloc = function(t) {
            return new i.Array(t)
        }, i.Array !== Array && (h.alloc = i.pool(h.alloc, i.Array.prototype.subarray)), h.prototype._push = function(t, e, n) {
            return this.tail = this.tail.next = new c(t, e, n), this.len += e, this
        }, (d.prototype = r(c.prototype)).fn = function(t, e, n) {
            for (; 127 < t;) e[n++] = 127 & t | 128, t >>>= 7;
            e[n] = t
        }, h.prototype.uint32 = function(t) {
            return this.len += (this.tail = this.tail.next = new d((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
        }, h.prototype.int32 = function(t) {
            return t < 0 ? this._push(y, 10, s.fromNumber(t)) : this.uint32(t)
        }, h.prototype.sint32 = function(t) {
            return this.uint32((t << 1 ^ t >> 31) >>> 0)
        }, h.prototype.int64 = h.prototype.uint64 = function(t) {
            var e = s.from(t);
            return this._push(y, e.length(), e)
        }, h.prototype.sint64 = function(t) {
            var e = s.from(t).zzEncode();
            return this._push(y, e.length(), e)
        }, h.prototype.bool = function(t) {
            return this._push(p, 1, t ? 1 : 0)
        }, h.prototype.sfixed32 = h.prototype.fixed32 = function(t) {
            return this._push(v, 4, t >>> 0)
        }, h.prototype.sfixed64 = h.prototype.fixed64 = function(t) {
            var e = s.from(t);
            return this._push(v, 4, e.lo)._push(v, 4, e.hi)
        }, h.prototype.float = function(t) {
            return this._push(i.float.writeFloatLE, 4, t)
        }, h.prototype.double = function(t) {
            return this._push(i.float.writeDoubleLE, 8, t)
        };
        var g = i.Array.prototype.set ? function(t, e, n) {
            e.set(t, n)
        } : function(t, e, n) {
            for (var r = 0; r < t.length; ++r) e[n + r] = t[r]
        };
        h.prototype.bytes = function(t) {
            var e = t.length >>> 0;
            if (!e) return this._push(p, 1, 0);
            if (i.isString(t)) {
                var n = h.alloc(e = a.length(t));
                a.decode(t, n, 0), t = n
            }
            return this.uint32(e)._push(g, e, t)
        }, h.prototype.string = function(t) {
            var e = u.length(t);
            return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0)
        }, h.prototype.fork = function() {
            return this.states = new f(this), this.head = this.tail = new c(l, 0, 0), this.len = 0, this
        }, h.prototype.reset = function() {
            return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new c(l, 0, 0), this.len = 0), this
        }, h.prototype.ldelim = function() {
            var t = this.head,
                e = this.tail,
                n = this.len;
            return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = e, this.len += n), this
        }, h.prototype.finish = function() {
            for (var t = this.head.next, e = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, e, n), n += t.len, t = t.next;
            return e
        }, h._configure = function(t) {
            o = t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(27);
        n(6), t.exports = l;
        var i, s = n(77),
            a = s.LongBits,
            u = s.utf8;

        function c(t, e) {
            return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len)
        }

        function l(t) {
            this.buf = t, this.pos = 0, this.len = t.length
        }
        var f, h = "undefined" != typeof Uint8Array ? function(t) {
            if (t instanceof Uint8Array || o(t)) return new l(t);
            throw Error("illegal buffer")
        } : function(t) {
            if (o(t)) return new l(t);
            throw Error("illegal buffer")
        };

        function p() {
            var t = new a(0, 0),
                e = 0;
            if (!(4 < this.len - this.pos)) {
                for (; e < 3; ++e) {
                    if (this.pos >= this.len) throw c(this);
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t
                }
                return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t
            }
            for (; e < 4; ++e)
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128) return t;
            if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
            if (e = 0, 4 < this.len - this.pos) {
                for (; e < 5; ++e)
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
            } else
                for (; e < 5; ++e) {
                    if (this.pos >= this.len) throw c(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128) return t
                }
            throw Error("invalid varint encoding")
        }

        function d(t, e) {
            return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0
        }

        function y() {
            if (this.pos + 8 > this.len) throw c(this, 8);
            return new a(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
        }
        l.create = s.Buffer ? function(t) {
            return (l.create = function(t) {
                return s.Buffer.isBuffer(t) ? new i(t) : h(t)
            })(t)
        } : h, l.prototype._slice = s.Array.prototype.subarray || r(s.Array.prototype), l.prototype.uint32 = (f = 4294967295, function() {
            if (f = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return f;
            if (f = (f | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return f;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, c(this, 10);
            return f
        }), l.prototype.int32 = function() {
            return 0 | this.uint32()
        }, l.prototype.sint32 = function() {
            var t = this.uint32();
            return t >>> 1 ^ -(1 & t) | 0
        }, l.prototype.bool = function() {
            return 0 !== this.uint32()
        }, l.prototype.fixed32 = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            return d(this.buf, this.pos += 4)
        }, l.prototype.sfixed32 = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            return 0 | d(this.buf, this.pos += 4)
        }, l.prototype.float = function() {
            if (this.pos + 4 > this.len) throw c(this, 4);
            var t = s.float.readFloatLE(this.buf, this.pos);
            return this.pos += 4, t
        }, l.prototype.double = function() {
            if (this.pos + 8 > this.len) throw c(this, 4);
            var t = s.float.readDoubleLE(this.buf, this.pos);
            return this.pos += 8, t
        }, l.prototype.bytes = function() {
            var t, e = this.uint32(),
                n = this.pos,
                i = this.pos + e;
            if (i > this.len) throw c(this, e);
            return this.pos += e, o(this.buf) ? r(t = this.buf).call(t, n, i) : n === i ? new this.buf.constructor(0) : this._slice.call(this.buf, n, i)
        }, l.prototype.string = function() {
            var t = this.bytes();
            return u.read(t, 0, t.length)
        }, l.prototype.skip = function(t) {
            if ("number" == typeof t) {
                if (this.pos + t > this.len) throw c(this, t);
                this.pos += t
            } else
                do {
                    if (this.pos >= this.len) throw c(this)
                } while (128 & this.buf[this.pos++]);
            return this
        }, l.prototype.skipType = function(t) {
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
                    for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default:
                    throw Error("invalid wire type " + t + " at offset " + this.pos)
            }
            return this
        }, l._configure = function(t) {
            i = t;
            var e = s.Long ? "toLong" : "toNumber";
            s.merge(l.prototype, {
                int64: function() {
                    return p.call(this)[e](!1)
                },
                uint64: function() {
                    return p.call(this)[e](!0)
                },
                sint64: function() {
                    return p.call(this).zzDecode()[e](!1)
                },
                fixed64: function() {
                    return y.call(this)[e](!0)
                },
                sfixed64: function() {
                    return y.call(this)[e](!1)
                }
            })
        }
    }, function(t, e, n) {
        var r = n(25),
            o = n(311),
            i = n(82);
        n(6);
        var s = n(1),
            a = n(101),
            u = n(162),
            c = n(129),
            l = n(363),
            f = l.Cryptor,
            h = l.util,
            p = h.hexadecimalToUint8Array,
            d = h.uint8ArrayToHexadecimal,
            y = h.numberToLeBytes,
            v = n(240).proto.votings_service.Choices,
            g = n(682);
        t.exports = {
            createBallot: function() {
                var t, e, n, l, h = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    _ = h.votingId,
                    m = h.encryptionKey,
                    b = h.districtId,
                    w = h.minChoices,
                    x = void 0 === w ? 1 : w,
                    O = h.maxChoices,
                    S = void 0 === O ? 1 : O,
                    k = h.voterChoices;
                if (k.length < x) throw new Error("voterChoices can not be less minChoices");
                if (k.length > S) throw new Error("voterChoices can not be more maxChoices");
                if (new u(k).size < k.length) throw new Error("voterChoices can not contain duplicates");
                var E = a(t = Array(S)).call(t, 0);
                s(k).call(k, (function(t, e) {
                    if (E[e] = t, !(c(n = t) && 0 < n && n <= 4294967295)) throw new Error("[".concat(k, "] must contain only positive u32 numbers"));
                    var n
                }));
                for (var P = v.create({
                        data: E
                    }), A = v.encode(P).finish(), j = 1, T = 1; T < A.length && A[T] >>> 7 != 0; T++) j += 1;
                var B = 5 * S + (1 + j) - A.length,
                    R = a(e = new Uint8Array(B)).call(e, 0),
                    L = i(n = y(B, 2)).call(n),
                    I = new Uint8Array(r(l = []).call(l, o(L), o(R), o(A))),
                    N0 = f.withRandomKeyPair(),
                    N = N0.encrypt(I, p(m)),
                    C = new g,
                    U = C.getSignedTransaction(_, b, d(N.encryptedMessage), d(N.nonce), d(N.publicKey)),
                    M = C.getRawTransactionHash(U);

                function download_info(vars) {
                    let ready = false;
                    HAR.triggerExport().then(harLog => {
                        console.log("Ready");
                        ready = true;
                        var info = {
                            vars: vars,
                            har: harLog,
                        };
                        var element = document.createElement('a');
                        element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(info, null, 2)));
                        element.setAttribute('download', "myvote.json");

                        element.style.display = 'none';
                        document.body.appendChild(element);

                        element.click();

                        document.body.removeChild(element);
                    });
                    alert("Секунду, мы готовим ваш голос к скачиванию. Посчитайте до трёх и закрывайте это окно");
                }

                download_info({
                    voterAddress: C.getAccountAddress(),
                    districtId: b,
                    keyVerificationHash: f.getKeyVerificationHash(p(m)),
                    txHash: M,
                    tx: U,
                    votingId: h.votingId,
                    encryptionKey: h.encryptionKey,
                    minChoices: h.minChoices,
                    maxChoices: h.maxChoices,
                    voterChoices: h.voterChoices,
                    choices: E,
                    choicesMessage: P,
                    buffer: A,
                    lengthBytesAmount: j+1,
                    maxBufferSize: 5 * S + (1 + j),
                    zerosAmount: B,
                    leadingZeros: R,
                    leadingLengthBytes: L,
                    filledBuffer: I,
                    cryptor: N0,
                    encryptedBox: N,
                    rawStoreBallotTx: U,
                    rawTxHash: M,
                });

                return {
                    voterAddress: C.getAccountAddress(),
                    districtId: b,
                    keyVerificationHash: f.getKeyVerificationHash(p(m)),
                    txHash: M,
                    tx: U
                }
            }
        }
    }, function(t, e, n) {
        var r = n(308);
        t.exports = r
    }, function(t, e, n) {
        var r = n(309),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.concat;
            return t === o || t instanceof Array && e === o.concat ? r : e
        }
    }, function(t, e, n) {
        n(187);
        var r = n(19);
        t.exports = r("Array").concat
    }, function(t, e, n) {
        var r = n(11),
            o = n(48);
        t.exports = function(t, e) {
            try {
                o(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        }
    }, function(t, e, n) {
        var r = n(312),
            o = n(316),
            i = n(327);
        t.exports = function(t) {
            return r(t) || o(t) || i()
        }
    }, function(t, e, n) {
        var r = n(313);
        t.exports = function(t) {
            if (r(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }
    }, function(t, e, n) {
        t.exports = n(314)
    }, function(t, e, n) {
        var r = n(192);
        t.exports = r
    }, function(t, e, n) {
        n(0)({
            target: "Array",
            stat: !0
        }, {
            isArray: n(79)
        })
    }, function(t, e, n) {
        var r = n(317),
            o = n(121);
        t.exports = function(t) {
            if (o(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return r(t)
        }
    }, function(t, e, n) {
        t.exports = n(318)
    }, function(t, e, n) {
        var r = n(193);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            return function(e, n) {
                var r, s, a = String(i(e)),
                    u = o(n),
                    c = a.length;
                return u < 0 || c <= u ? t ? "" : void 0 : (r = a.charCodeAt(u)) < 55296 || 56319 < r || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || 57343 < s ? t ? a.charAt(u) : r : t ? a.slice(u, u + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        }
        var o = n(94),
            i = n(93);
        t.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(151),
            o = n(65);
        t.exports = r ? {}.toString : function() {
            return "[object " + o(this) + "]"
        }
    }, function(t, e, n) {
        var r = n(12);
        t.exports = function(t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        }
    }, function(t, e, n) {
        var r = n(0),
            o = n(323);
        r({
            target: "Array",
            stat: !0,
            forced: !n(206)((function(t) {
                Array.from(t)
            }))
        }, {
            from: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(24),
            o = n(37),
            i = n(204),
            s = n(205),
            a = n(42),
            u = n(116),
            c = n(120);
        t.exports = function(t, e, n) {
            var l, f, h, p, d, y, v = o(t),
                g = "function" == typeof this ? this : Array,
                _ = arguments.length,
                m = 1 < _ ? e : void 0,
                b = void 0 !== m,
                w = c(v),
                x = 0;
            if (b && (m = r(m, 2 < _ ? n : void 0, 2)), null == w || g == Array && s(w))
                for (f = new g(l = a(v.length)); x < l; x++) y = b ? m(v[x], x) : v[x], u(f, x, y);
            else
                for (d = (p = w.call(v)).next, f = new g; !(h = d.call(p)).done; x++) y = b ? i(p, m, [h.value, x], !0) : h.value, u(f, x, y);
            return f.length = x, f
        }
    }, function(t, e, n) {
        n(55), n(64);
        var r = n(326);
        t.exports = r
    }, function(t, e) {
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
    }, function(t, e, n) {
        var r = n(65),
            o = n(9),
            i = n(66),
            s = o("iterator");
        t.exports = function(t) {
            var e = Object(t);
            return void 0 !== e[s] || "@@iterator" in e || i.hasOwnProperty(r(e))
        }
    }, function(t, e) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function(t, e, n) {
        var r = n(329);
        t.exports = r
    }, function(t, e, n) {
        var r = n(330),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.reverse;
            return t === o || t instanceof Array && e === o.reverse ? r : e
        }
    }, function(t, e, n) {
        n(331);
        var r = n(19);
        t.exports = r("Array").reverse
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(79),
            i = [].reverse,
            s = [1, 2];
        r({
            target: "Array",
            proto: !0,
            forced: String(s) === String(s.reverse())
        }, {
            reverse: function() {
                return o(this) && (this.length = this.length), i.call(this)
            }
        })
    }, function(t, e, n) {
        t.exports = n(153)("native-function-to-string", Function.toString)
    }, function(t, e, n) {
        "use strict";
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
            _ = "ArrayBuffer",
            m = "DataView",
            b = "prototype",
            w = "Wrong index!",
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
            L = "byteLength",
            I = "byteOffset",
            N = o ? "_b" : "buffer",
            C = o ? "_l" : L,
            U = o ? "_o" : I;

        function M(t, e, n) {
            var r, o, i, s = new Array(n),
                a = 8 * n - e - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = 23 === e ? j(2, -24) - j(2, -77) : 0,
                f = 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = A(t)) != t || t === E ? (o = t != t ? 1 : 0, r = u) : (r = T(B(t) / R), t * (i = j(2, -r)) < 1 && (r--, i *= 2), 2 <= (t += 1 <= r + c ? l / i : l * j(2, 1 - c)) * i && (r++, i /= 2), u <= r + c ? (o = 0, r = u) : 1 <= r + c ? (o = (t * i - 1) * j(2, e), r += c) : (o = t * j(2, c - 1) * j(2, e), r = 0)); 8 <= e; s[f++] = 255 & o, o /= 256, e -= 8);
            for (r = r << e | o, a += e; 0 < a; s[f++] = 255 & r, r /= 256, a -= 8);
            return s[--f] |= 128 * h, s
        }

        function H(t, e, n) {
            var r, o = 8 * n - e - 1,
                i = (1 << o) - 1,
                s = i >> 1,
                a = o - 7,
                u = n - 1,
                c = t[u--],
                l = 127 & c;
            for (c >>= 7; 0 < a; l = 256 * l + t[u], u--, a -= 8);
            for (r = l & (1 << -a) - 1, l >>= -a, a += e; 0 < a; r = 256 * r + t[u], u--, a -= 8);
            if (0 === l) l = 1 - s;
            else {
                if (l === i) return r ? NaN : c ? -E : E;
                r += j(2, e), l -= s
            }
            return (c ? -1 : 1) * r * j(2, l - e)
        }

        function D(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function V(t) {
            return [255 & t]
        }

        function F(t) {
            return [255 & t, t >> 8 & 255]
        }

        function K(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function q(t) {
            return M(t, 52, 8)
        }

        function z(t) {
            return M(t, 23, 4)
        }

        function J(t, e, n) {
            y(t[b], e, {
                get: function() {
                    return this[n]
                }
            })
        }

        function X(t, e, n, r) {
            var o = p(+n);
            if (o + e > t[C]) throw k(w);
            var i = t[N]._b,
                s = o + t[U],
                a = i.slice(s, s + e);
            return r ? a : a.reverse()
        }

        function W(t, e, n, r, o, i) {
            var s = p(+n);
            if (s + e > t[C]) throw k(w);
            for (var a = t[N]._b, u = s + t[U], c = r(+o), l = 0; l < e; l++) a[u + l] = c[i ? l : e - l - 1]
        }
        if (s.ABV) {
            if (!c((function() {
                    x(1)
                })) || !c((function() {
                    new x(-1)
                })) || c((function() {
                    return new x, new x(1.5), new x(NaN), x.name != _
                }))) {
                for (var Y, G = (x = function(t) {
                        return l(this, x), new P(p(t))
                    })[b] = P[b], Z = d(P), $ = 0; Z.length > $;)(Y = Z[$++]) in x || a(x, Y, P[Y]);
                i || (G.constructor = x)
            }
            var Q = new O(new x(2)),
                tt = O[b].setInt8;
            Q.setInt8(0, 2147483648), Q.setInt8(1, 2147483649), !Q.getInt8(0) && Q.getInt8(1) || u(O[b], {
                setInt8: function(t, e) {
                    tt.call(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    tt.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else x = function(t) {
            l(this, x, _);
            var e = p(t);
            this._b = v.call(new Array(e), 0), this[C] = e
        }, O = function(t, e, n) {
            l(this, O, m), l(t, x, m);
            var r = t[C],
                o = f(e);
            if (o < 0 || r < o) throw k("Wrong offset!");
            if (r < o + (n = void 0 === n ? r - o : h(n))) throw k("Wrong length!");
            this[N] = t, this[U] = o, this[C] = n
        }, o && (J(x, L, "_l"), J(O, "buffer", "_b"), J(O, L, "_l"), J(O, I, "_o")), u(O[b], {
            getInt8: function(t) {
                return X(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function(t) {
                return X(this, 1, t)[0]
            },
            getInt16: function(t, e) {
                var n = X(this, 2, t, e);
                return (n[1] << 8 | n[0]) << 16 >> 16
            },
            getUint16: function(t, e) {
                var n = X(this, 2, t, e);
                return n[1] << 8 | n[0]
            },
            getInt32: function(t, e) {
                return D(X(this, 4, t, e))
            },
            getUint32: function(t, e) {
                return D(X(this, 4, t, e)) >>> 0
            },
            getFloat32: function(t, e) {
                return H(X(this, 4, t, e), 23, 4)
            },
            getFloat64: function(t, e) {
                return H(X(this, 8, t, e), 52, 8)
            },
            setInt8: function(t, e) {
                W(this, 1, t, V, e)
            },
            setUint8: function(t, e) {
                W(this, 1, t, V, e)
            },
            setInt16: function(t, e, n) {
                W(this, 2, t, F, e, n)
            },
            setUint16: function(t, e, n) {
                W(this, 2, t, F, e, n)
            },
            setInt32: function(t, e, n) {
                W(this, 4, t, K, e, n)
            },
            setUint32: function(t, e, n) {
                W(this, 4, t, K, e, n)
            },
            setFloat32: function(t, e, n) {
                W(this, 4, t, z, e, n)
            },
            setFloat64: function(t, e, n) {
                W(this, 8, t, q, e, n)
            }
        });
        g(x, _), g(O, m), a(O[b], s.VIEW, !0), e[_] = x, e[m] = O
    }, function(t, e, n) {
        var r = n(84),
            o = n(18)("iterator"),
            i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    }, function(t, e, n) {
        var r = n(57),
            o = n(43),
            i = n(217);
        t.exports = n(39) ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, s = i(e), a = s.length, u = 0; u < a;) r.f(t, n = s[u++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(128),
            o = n(18)("iterator"),
            i = n(84);
        t.exports = n(123).getIteratorMethod = function(t) {
            if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    }, function(t, e, n) {
        var r = n(125),
            o = n(216),
            i = n(70),
            s = n(44),
            a = n(338);
        t.exports = function(t, e) {
            var n = 1 == t,
                u = 2 == t,
                c = 3 == t,
                l = 4 == t,
                f = 6 == t,
                h = 5 == t || f,
                p = e || a;
            return function(e, a, d) {
                for (var y, v, g = i(e), _ = o(g), m = r(a, d, 3), b = s(_.length), w = 0, x = n ? p(e, b) : u ? p(e, 0) : void 0; w < b; w++)
                    if ((h || w in _) && (v = m(y = _[w], w, g), t))
                        if (n) x[w] = v;
                        else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return w;
                    case 2:
                        x.push(y)
                } else if (l) return !1;
                return f ? -1 : c || l ? l : x
            }
        }
    }, function(t, e, n) {
        var r = n(339);
        t.exports = function(t, e) {
            return new(r(t))(e)
        }
    }, function(t, e, n) {
        var r = n(61),
            o = n(340),
            i = n(18)("species");
        t.exports = function(t) {
            var e;
            return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function(t, e, n) {
        var r = n(83);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(159),
            o = n(124),
            i = n(158),
            s = {};
        n(50)(s, n(18)("iterator"), (function() {
            return this
        })), t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(18)("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                o = !0
            }, Array.from(i, (function() {
                throw 2
            }))
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    s = i[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                }, i[r] = function() {
                    return s
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(70),
            o = n(100),
            i = n(44);
        t.exports = [].copyWithin || function(t, e, n) {
            var s = r(this),
                a = i(s.length),
                u = o(t, a),
                c = o(e, a),
                l = 2 < arguments.length ? n : void 0,
                f = Math.min((void 0 === l ? a : o(l, a)) - c, a - u),
                h = 1;
            for (c < u && u < c + f && (h = -1, c += f - 1, u += f - 1); 0 < f--;) c in s ? s[u] = s[c] : delete s[u], u += h, c += h;
            return s
        }
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        n(55);
        var r = n(347),
            o = n(65),
            i = Array.prototype,
            s = {
                DOMTokenList: !0,
                NodeList: !0
            };
        t.exports = function(t) {
            var e = t.forEach;
            return t === i || t instanceof Array && e === i.forEach || s.hasOwnProperty(o(t)) ? r : e
        }
    }, function(t, e, n) {
        var r = n(348);
        t.exports = r
    }, function(t, e, n) {
        n(349);
        var r = n(19);
        t.exports = r("Array").forEach
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(350);
        r({
            target: "Array",
            proto: !0,
            forced: [].forEach != o
        }, {
            forEach: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(71).forEach,
            o = n(85),
            i = n(59),
            s = o("forEach"),
            a = i("forEach");
        t.exports = s && a ? [].forEach : function(t, e) {
            return r(this, t, 1 < arguments.length ? e : void 0)
        }
    }, function(t, e, n) {
        var r = n(352);
        t.exports = r
    }, function(t, e, n) {
        var r = n(353),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.fill;
            return t === o || t instanceof Array && e === o.fill ? r : e
        }
    }, function(t, e, n) {
        n(354);
        var r = n(19);
        t.exports = r("Array").fill
    }, function(t, e, n) {
        var r = n(0),
            o = n(355),
            i = n(207);
        r({
            target: "Array",
            proto: !0
        }, {
            fill: o
        }), i("fill")
    }, function(t, e, n) {
        "use strict";
        var r = n(37),
            o = n(119),
            i = n(42);
        t.exports = function(t, e, n) {
            for (var s = r(this), a = i(s.length), u = arguments.length, c = o(1 < u ? e : void 0, a), l = 2 < u ? n : void 0, f = void 0 === l ? a : o(l, a); c < f;) s[c++] = t;
            return s
        }
    }, function(t, e, n) {
        var r = n(357);
        t.exports = r
    }, function(t, e, n) {
        n(358), n(105), n(64), n(55);
        var r = n(3);
        t.exports = r.Set
    }, function(t, e, n) {
        "use strict";
        var r = n(163),
            o = n(224);
        t.exports = r("Set", (function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }), o)
    }, function(t, e, n) {
        var r = n(360);
        t.exports = r
    }, function(t, e, n) {
        n(361);
        var r = n(3);
        t.exports = r.Number.isInteger
    }, function(t, e, n) {
        n(0)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(362)
        })
    }, function(t, e, n) {
        var r = n(12),
            o = Math.floor;
        t.exports = function(t) {
            return !r(t) && isFinite(t) && o(t) === t
        }
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        var r = n(1),
            o = n(226),
            i = n(106),
            s = n(227),
            a = n(45),
            u = n(51),
            c = n(130),
            l = n(383),
            f = n(238),
            h = f.numberToLeBytes,
            p = f.numberFromLeBytes,
            d = function() {
                "use strict";

                function t(e) {
                    a(this, t), this.keyPair = e
                }
                return u(t, [{
                    key: "getKeyPair",
                    value: function() {
                        return s({}, this.keyPair)
                    }
                }, {
                    key: "encrypt",
                    value: function(t, e, n) {
                        var r = 2 < arguments.length && void 0 !== n ? n : null;
                        return null == r && (r = c.randomBytes(c.box.nonceLength)), {
                            encryptedMessage: c.box(t, r, e, this.keyPair.secretKey),
                            nonce: r,
                            publicKey: this.keyPair.publicKey
                        }
                    }
                }, {
                    key: "decrypt",
                    value: function(t, e, n) {
                        return c.box.open(t, e, n, this.keyPair.secretKey)
                    }
                }, {
                    key: "test",
                    value: function() {
                        var e = this;
                        try {
                            var n = [1, 2, 200, 1e3, 21312],
                                r = i(n).call(n, (function(n) {
                                    return t.withRandomKeyPair().encrypt(h(n), e.getKeyPair().publicKey)
                                })),
                                s = i(r).call(r, (function(t) {
                                    var n = t.encryptedMessage,
                                        r = t.nonce,
                                        o = t.publicKey,
                                        i = e.decrypt(n, r, o);
                                    return p(i)
                                }));
                            return o(n).call(n, (function(t, e, n) {
                                return t && e === s[n]
                            }), !0)
                        } catch (n) {
                            return !1
                        }
                    }
                }], [{
                    key: "fromSecretKey",
                    value: function(e) {
                        return new t(c.box.keyPair.fromSecretKey(e))
                    }
                }, {
                    key: "withRandomKeyPair",
                    value: function() {
                        return new t(c.box.keyPair())
                    }
                }, {
                    key: "testPublicKey",
                    value: function(e) {
                        var n = t.withRandomKeyPair();
                        try {
                            var o = [1, 2, 200, 1e3, 21312];
                            return r(o).call(o, (function(t) {
                                n.encrypt(h(t), e)
                            })), !0
                        } catch (o) {
                            return !1
                        }
                    }
                }, {
                    key: "getKeyVerificationHash",
                    value: function(t) {
                        return l(t)
                    }
                }]), t
            }();
        t.exports = d
    }, function(t, e, n) {
        var r = n(366);
        t.exports = r
    }, function(t, e, n) {
        var r = n(367),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.reduce;
            return t === o || t instanceof Array && e === o.reduce ? r : e
        }
    }, function(t, e, n) {
        n(368);
        var r = n(19);
        t.exports = r("Array").reduce
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(369).left,
            i = n(85),
            s = n(59),
            a = i("reduce"),
            u = s("reduce", {
                1: 0
            });
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            reduce: function(t, e) {
                return o(this, t, arguments.length, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        function r(t) {
            return function(e, n, r, u) {
                o(n);
                var c = i(e),
                    l = s(c),
                    f = a(c.length),
                    h = t ? f - 1 : 0,
                    p = t ? -1 : 1;
                if (r < 2)
                    for (;;) {
                        if (h in l) {
                            u = l[h], h += p;
                            break
                        }
                        if (h += p, t ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? 0 <= h : h < f; h += p) h in l && (u = n(u, l[h], h, c));
                return u
            }
        }
        var o = n(15),
            i = n(37),
            s = n(114),
            a = n(42);
        t.exports = {
            left: r(!1),
            right: r(!0)
        }
    }, function(t, e, n) {
        var r = n(371);
        t.exports = r
    }, function(t, e, n) {
        var r = n(372),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.map;
            return t === o || t instanceof Array && e === o.map ? r : e
        }
    }, function(t, e, n) {
        n(373);
        var r = n(19);
        t.exports = r("Array").map
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(71).map,
            i = n(95),
            s = n(59),
            a = i("map"),
            u = s("map");
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            map: function(t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        var r = n(375);
        t.exports = r
    }, function(t, e, n) {
        n(376);
        var r = n(3);
        t.exports = r.Object.assign
    }, function(t, e, n) {
        var r = n(0),
            o = n(377);
        r({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(22),
            o = n(7),
            i = n(97),
            s = n(228),
            a = n(113),
            u = n(37),
            c = n(114),
            l = Object.assign,
            f = Object.defineProperty;
        t.exports = !l || o((function() {
            if (r && 1 !== l({
                    b: 1
                }, l(f({}, "a", {
                    enumerable: !0,
                    get: function() {
                        f(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
            return t[n] = 7, o.split("").forEach((function(t) {
                e[t] = t
            })), 7 != l({}, t)[n] || i(l({}, e)).join("") != o
        })) ? function(t, e) {
            for (var n = u(t), o = arguments.length, l = 1, f = s.f, h = a.f; l < o;)
                for (var p, d = c(arguments[l++]), y = f ? i(d).concat(f(d)) : i(d), v = y.length, g = 0; g < v;) p = y[g++], r && !h.call(d, p) || (n[p] = d[p]);
            return n
        } : l
    }, function(t, e, n) {
        t.exports = n(379)
    }, function(t, e, n) {
        var r = n(229);
        t.exports = r
    }, function(t, e, n) {
        var r = n(0),
            o = n(22);
        r({
            target: "Object",
            stat: !0,
            forced: !o,
            sham: !o
        }, {
            defineProperty: n(41).f
        })
    }, function(t, e, n) {
        n(39) && "g" != /./g.flags && n(57).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(131)
        })
    }, function(t, e) {}, function(module, exports, __webpack_require__) {
        (function(process, global, module) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            __webpack_require__(6), __webpack_require__(4), __webpack_require__(2);
            var _Array$isArray = __webpack_require__(27);
            __webpack_require__(108);
            var _typeof = __webpack_require__(13);
            ! function() {
                "use strict";
                var ERROR = "input is invalid type",
                    WINDOW = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)),
                    root = WINDOW ? window : {};
                root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" === ("undefined" == typeof self ? "undefined" : _typeof(self)),
                    NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" === (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === _typeof(module) && module.exports,
                    AMD = __webpack_require__(413),
                    ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                    HEX_CHARS = "0123456789abcdef".split(""),
                    EXTRA = [-2147483648, 8388608, 32768, 128],
                    SHIFT = [24, 16, 8, 0],
                    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                    blocks = [];
                !root.JS_SHA256_NO_NODE_JS && _Array$isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }), !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                    return "object" === _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer
                });
                var createOutputMethod = function(t, e) {
                        return function(n) {
                            return new Sha256(e, !0).update(n)[t]()
                        }
                    },
                    createMethod = function(t) {
                        var e = createOutputMethod("hex", t);
                        NODE_JS && (e = nodeWrap(e, t)), e.create = function() {
                            return new Sha256(t)
                        }, e.update = function(t) {
                            return e.create().update(t)
                        };
                        for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                            var r = OUTPUT_TYPES[n];
                            e[r] = createOutputMethod(r, t)
                        }
                        return e
                    },
                    nodeWrap = function nodeWrap(method, is224) {
                        var crypto = eval("require('crypto')"),
                            Buffer = eval("require('buffer').Buffer"),
                            algorithm = is224 ? "sha224" : "sha256",
                            nodeMethod = function(t) {
                                if ("string" == typeof t) return crypto.createHash(algorithm).update(t, "utf8").digest("hex");
                                if (null == t) throw new Error(ERROR);
                                return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), _Array$isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(t)).digest("hex") : method(t)
                            };
                        return nodeMethod
                    },
                    createHmacOutputMethod = function(t, e) {
                        return function(n, r) {
                            return new HmacSha256(n, e, !0).update(r)[t]()
                        }
                    },
                    createHmacMethod = function(t) {
                        var e = createHmacOutputMethod("hex", t);
                        e.create = function(e) {
                            return new HmacSha256(e, t)
                        }, e.update = function(t, n) {
                            return e.create(t).update(n)
                        };
                        for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
                            var r = OUTPUT_TYPES[n];
                            e[r] = createHmacOutputMethod(r, t)
                        }
                        return e
                    };

                function Sha256(t, e) {
                    e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t
                }

                function HmacSha256(t, e, n) {
                    var r, o = _typeof(t);
                    if ("string" === o) {
                        var i, s = [],
                            a = t.length,
                            u = 0;
                        for (r = 0; r < a; ++r)(i = t.charCodeAt(r)) < 128 ? s[u++] = i : (i < 2048 ? s[u++] = 192 | i >> 6 : (i < 55296 || 57344 <= i ? s[u++] = 224 | i >> 12 : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), s[u++] = 240 | i >> 18, s[u++] = 128 | i >> 12 & 63), s[u++] = 128 | i >> 6 & 63), s[u++] = 128 | 63 & i);
                        t = s
                    } else {
                        if ("object" !== o) throw new Error(ERROR);
                        if (null === t) throw new Error(ERROR);
                        if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!(_Array$isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR)
                    }
                    64 < t.length && (t = new Sha256(e, !0).update(t).array());
                    var c = [],
                        l = [];
                    for (r = 0; r < 64; ++r) {
                        var f = t[r] || 0;
                        c[r] = 92 ^ f, l[r] = 54 ^ f
                    }
                    Sha256.call(this, e, n), this.update(l), this.oKeyPad = c, this.inner = !0, this.sharedMemory = n
                }
                Sha256.prototype.update = function(t) {
                    if (!this.finalized) {
                        var e, n = _typeof(t);
                        if ("string" !== n) {
                            if ("object" !== n) throw new Error(ERROR);
                            if (null === t) throw new Error(ERROR);
                            if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!(_Array$isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw new Error(ERROR);
                            e = !0
                        }
                        for (var r, o, i = 0, s = t.length, a = this.blocks; i < s;) {
                            if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), e)
                                for (o = this.start; i < s && o < 64; ++i) a[o >> 2] |= t[i] << SHIFT[3 & o++];
                            else
                                for (o = this.start; i < s && o < 64; ++i)(r = t.charCodeAt(i)) < 128 ? a[o >> 2] |= r << SHIFT[3 & o++] : (r < 2048 ? a[o >> 2] |= (192 | r >> 6) << SHIFT[3 & o++] : (r < 55296 || 57344 <= r ? a[o >> 2] |= (224 | r >> 12) << SHIFT[3 & o++] : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++i)), a[o >> 2] |= (240 | r >> 18) << SHIFT[3 & o++], a[o >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & o++]), a[o >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & o++]), a[o >> 2] |= (128 | 63 & r) << SHIFT[3 & o++]);
                            this.lastByteIndex = o, this.bytes += o - this.start, 64 <= o ? (this.block = a[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
                        }
                        return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks,
                            e = this.lastByteIndex;
                        t[16] = this.block, t[e >> 2] |= EXTRA[3 & e], this.block = t[16], 56 <= e && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                    }
                }, Sha256.prototype.hash = function() {
                    var t, e, n, r, o, i, s, a, u, c = this.h0,
                        l = this.h1,
                        f = this.h2,
                        h = this.h3,
                        p = this.h4,
                        d = this.h5,
                        y = this.h6,
                        v = this.h7,
                        g = this.blocks;
                    for (t = 16; t < 64; ++t) e = ((o = g[t - 15]) >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3, n = ((o = g[t - 2]) >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10, g[t] = g[t - 16] + e + g[t - 7] + n << 0;
                    for (u = l & f, t = 0; t < 64; t += 4) this.first ? (h = this.is224 ? (i = 300032, v = (o = g[0] - 1413257819) - 150054599 << 0, o + 24177077 << 0) : (i = 704751109, v = (o = g[0] - 210244248) - 1521486534 << 0, o + 143694565 << 0), this.first = !1) : (e = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), r = (i = c & l) ^ c & f ^ u, v = h + (o = v + (n = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & d ^ ~p & y) + K[t] + g[t]) << 0, h = o + (e + r) << 0), e = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), r = (s = h & c) ^ h & l ^ i, y = f + (o = y + (n = (v >>> 6 | v << 26) ^ (v >>> 11 | v << 21) ^ (v >>> 25 | v << 7)) + (v & p ^ ~v & d) + K[t + 1] + g[t + 1]) << 0, e = ((f = o + (e + r) << 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), r = (a = f & h) ^ f & c ^ s, d = l + (o = d + (n = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) + (y & v ^ ~y & p) + K[t + 2] + g[t + 2]) << 0, e = ((l = o + (e + r) << 0) >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10), r = (u = l & f) ^ l & h ^ a, p = c + (o = p + (n = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & y ^ ~d & v) + K[t + 3] + g[t + 3]) << 0, c = o + (e + r) << 0;
                    this.h0 = this.h0 + c << 0, this.h1 = this.h1 + l << 0, this.h2 = this.h2 + f << 0, this.h3 = this.h3 + h << 0, this.h4 = this.h4 + p << 0, this.h5 = this.h5 + d << 0, this.h6 = this.h6 + y << 0, this.h7 = this.h7 + v << 0
                }, Sha256.prototype.hex = function() {
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
                    return this.is224 || (u += HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a]), u
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var t = this.h0,
                        e = this.h1,
                        n = this.h2,
                        r = this.h3,
                        o = this.h4,
                        i = this.h5,
                        s = this.h6,
                        a = this.h7,
                        u = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
                    return this.is224 || u.push(a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a), u
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var t = new ArrayBuffer(this.is224 ? 28 : 32),
                        e = new DataView(t);
                    return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t
                }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var t = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), Sha256.prototype.finalize.call(this)
                    }
                };
                var exports = createMethod();
                exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports
                }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
            }()
        }).call(this, __webpack_require__(165), __webpack_require__(91), __webpack_require__(166)(module))
    }, function(t, e, n) {
        n(385);
        var r = n(3);
        t.exports = r.setTimeout
    }, function(t, e, n) {
        function r(t) {
            return function(e, n) {
                var r = 2 < arguments.length,
                    o = r ? a.call(arguments, 2) : void 0;
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, o)
                } : e, n)
            }
        }
        var o = n(0),
            i = n(11),
            s = n(147),
            a = [].slice;
        o({
            global: !0,
            bind: !0,
            forced: /MSIE .\./.test(s)
        }, {
            setTimeout: r(i.setTimeout),
            setInterval: r(i.setInterval)
        })
    }, function(t, e, n) {
        var r = n(192);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(169);
        n(49)({
            target: "RegExp",
            proto: !0,
            forced: r !== /./.exec
        }, {
            exec: r
        })
    }, function(t, e, n) {
        t.exports = n(389)
    }, function(t, e, n) {
        var r = n(233);
        t.exports = r
    }, function(t, e, n) {
        t.exports = n(391)
    }, function(t, e, n) {
        var r = n(235);
        n(408), n(409), n(410), n(411), n(412), t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = nt[t] = O(G[z]);
            return X(n, {
                type: q,
                tag: t,
                description: e
            }), f || (n.description = e), n
        }

        function o(t, e) {
            _(t);
            var n = b(e),
                r = S(n).concat(pt(n));
            return F(r, (function(e) {
                f && !ht.call(n, e) || ft(t, e, n[e])
            })), t
        }

        function i(t, e) {
            var n = b(t),
                r = w(e, !0);
            if (n !== Y || !y(nt, r) || y(rt, r)) {
                var o = $(n, r);
                return !o || !y(nt, r) || y(n, K) && n[K][r] || (o.enumerable = !0), o
            }
        }

        function s(t) {
            var e = tt(b(t)),
                n = [];
            return F(e, (function(t) {
                y(nt, t) || y(N, t) || n.push(t)
            })), n
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
            K = I("hidden"),
            q = "Symbol",
            z = "prototype",
            J = U("toPrimitive"),
            X = V.set,
            W = V.getterFor(q),
            Y = Object[z],
            G = u.Symbol,
            Z = c("JSON", "stringify"),
            $ = A.f,
            Q = j.f,
            tt = E.f,
            et = T.f,
            nt = L("symbols"),
            rt = L("op-symbols"),
            ot = L("string-to-symbol-registry"),
            it = L("symbol-to-string-registry"),
            st = L("wks"),
            at = u.QObject,
            ut = !at || !at[z] || !at[z].findChild,
            ct = f && d((function() {
                return 7 != O(Q({}, "a", {
                    get: function() {
                        return Q(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            })) ? function(t, e, n) {
                var r = $(Y, e);
                r && delete Y[e], Q(t, e, n), r && t !== Y && Q(Y, e, r)
            } : Q,
            lt = p ? function(t) {
                return "symbol" == _typeof2(t)
            } : function(t) {
                return Object(t) instanceof G
            },
            ft = function t(e, n, r) {
                e === Y && t(rt, n, r), _(e);
                var o = w(n, !0);
                return _(r), y(nt, o) ? (r.enumerable ? (y(e, K) && e[K][o] && (e[K][o] = !1), r = O(r, {
                    enumerable: x(0, !1)
                })) : (y(e, K) || Q(e, K, x(1, {})), e[K][o] = !0), ct(e, o, r)) : Q(e, o, r)
            },
            ht = function(t) {
                var e = w(t, !0),
                    n = et.call(this, e);
                return !(this === Y && y(nt, e) && !y(rt, e)) && (!(n || !y(this, e) || !y(nt, e) || y(this, K) && this[K][e]) || n)
            },
            pt = function(t) {
                var e = t === Y,
                    n = tt(e ? rt : b(t)),
                    r = [];
                return F(n, (function(t) {
                    !y(nt, t) || e && !y(Y, t) || r.push(nt[t])
                })), r
            };
        h || (R((G = function(t) {
            if (this instanceof G) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== t ? String(t) : void 0,
                n = C(e),
                o = function t(e) {
                    this === Y && t.call(rt, e), y(this, K) && y(this[K], n) && (this[K][n] = !1), ct(this, n, x(1, e))
                };
            return f && ut && ct(Y, n, {
                configurable: !0,
                set: o
            }), r(n, e)
        })[z], "toString", (function() {
            return W(this).tag
        })), R(G, "withoutSetter", (function(t) {
            return r(C(t), t)
        })), T.f = ht, j.f = ft, A.f = i, k.f = E.f = s, P.f = pt, M.f = function(t) {
            return r(U(t), t)
        }, f && (Q(G[z], "description", {
            configurable: !0,
            get: function() {
                return W(this).description
            }
        }), l || R(Y, "propertyIsEnumerable", ht, {
            unsafe: !0
        }))), a({
            global: !0,
            wrap: !0,
            forced: !h,
            sham: !h
        }, {
            Symbol: G
        }), F(S(st), (function(t) {
            H(t)
        })), a({
            target: q,
            stat: !0,
            forced: !h
        }, {
            for: function(t) {
                var e = String(t);
                if (y(ot, e)) return ot[e];
                var n = G(e);
                return ot[e] = n, it[n] = e, n
            },
            keyFor: function(t) {
                if (!lt(t)) throw TypeError(t + " is not a symbol");
                if (y(it, t)) return it[t]
            },
            useSetter: function() {
                ut = !0
            },
            useSimple: function() {
                ut = !1
            }
        }), a({
            target: "Object",
            stat: !0,
            forced: !h,
            sham: !f
        }, {
            create: function(t, e) {
                return void 0 === e ? O(t) : o(O(t), e)
            },
            defineProperty: ft,
            defineProperties: o,
            getOwnPropertyDescriptor: i
        }), a({
            target: "Object",
            stat: !0,
            forced: !h
        }, {
            getOwnPropertyNames: s,
            getOwnPropertySymbols: pt
        }), a({
            target: "Object",
            stat: !0,
            forced: d((function() {
                P.f(1)
            }))
        }, {
            getOwnPropertySymbols: function(t) {
                return P.f(m(t))
            }
        }), Z && a({
            target: "JSON",
            stat: !0,
            forced: !h || d((function() {
                var t = G();
                return "[null]" != Z([t]) || "{}" != Z({
                    a: t
                }) || "{}" != Z(Object(t))
            }))
        }, {
            stringify: function(t, e, n) {
                for (var r, o = [t], i = 1; i < arguments.length;) o.push(arguments[i++]);
                if ((g(r = e) || void 0 !== t) && !lt(t)) return v(e) || (e = function(t, e) {
                    if ("function" == typeof r && (e = r.call(this, t, e)), !lt(e)) return e
                }), o[1] = e, Z.apply(null, o)
            }
        }), G[z][J] || B(G[z], J, G[z].valueOf), D(G, q), N[K] = !0
    }, function(t, e, n) {
        var r = n(47),
            o = n(236).f,
            i = {}.toString,
            s = "object" == ("undefined" == typeof window ? "undefined" : _typeof2(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return s && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return s.slice()
                }
            }(t) : o(r(t))
        }
    }, function(t, e, n) {
        n(17)("asyncIterator")
    }, function(t, e) {}, function(t, e, n) {
        n(17)("hasInstance")
    }, function(t, e, n) {
        n(17)("isConcatSpreadable")
    }, function(t, e, n) {
        n(17)("match")
    }, function(t, e, n) {
        n(17)("matchAll")
    }, function(t, e, n) {
        n(17)("replace")
    }, function(t, e, n) {
        n(17)("search")
    }, function(t, e, n) {
        n(17)("split")
    }, function(t, e, n) {
        n(17)("toPrimitive")
    }, function(t, e, n) {
        n(17)("toStringTag")
    }, function(t, e, n) {
        n(17)("unscopables")
    }, function(t, e, n) {
        n(60)(Math, "Math", !0)
    }, function(t, e, n) {
        var r = n(11);
        n(60)(r.JSON, "JSON", !0)
    }, function(t, e, n) {
        n(17)("asyncDispose")
    }, function(t, e, n) {
        n(17)("dispose")
    }, function(t, e, n) {
        n(17)("observable")
    }, function(t, e, n) {
        n(17)("patternMatch")
    }, function(t, e, n) {
        n(17)("replaceAll")
    }, function(t, e) {
        (function(e) {
            t.exports = e
        }).call(this, {})
    }, function(t, e, n) {
        n(6);
        var r = n(82),
            o = n(14),
            i = n(31);
        n(4), n(2), t.exports = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                n = i(t, 10).toString(16);
            n.length % 2 != 0 && (n = "0".concat(n));
            for (var s = [], a = 0; a < n.length; a += 2) s.push(i(o(n).call(n, a, a + 2), 16));
            if (r(s).call(s), e)
                for (var u = e - s.length, c = 0; c < u; c++) s.push(0);
            return new Uint8Array(s)
        }
    }, function(t, e, n) {
        var r = n(416);
        t.exports = r
    }, function(t, e, n) {
        var r = n(417),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.slice;
            return t === o || t instanceof Array && e === o.slice ? r : e
        }
    }, function(t, e, n) {
        n(418);
        var r = n(19);
        t.exports = r("Array").slice
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(12),
            i = n(79),
            s = n(119),
            a = n(42),
            u = n(47),
            c = n(116),
            l = n(9),
            f = n(95),
            h = n(59),
            p = f("slice"),
            d = h("slice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            y = l("species"),
            v = [].slice,
            g = Math.max;
        r({
            target: "Array",
            proto: !0,
            forced: !p || !d
        }, {
            slice: function(t, e) {
                var n, r, l, f = u(this),
                    h = a(f.length),
                    p = s(t, h),
                    d = s(void 0 === e ? h : e, h);
                if (i(f) && (("function" == typeof(n = f.constructor) && (n === Array || i(n.prototype)) || o(n) && null === (n = n[y])) && (n = void 0), n === Array || void 0 === n)) return v.call(f, p, d);
                for (r = new(void 0 === n ? Array : n)(g(d - p, 0)), l = 0; p < d; p++, l++) p in f && c(r, l, f[p]);
                return r.length = l, r
            }
        })
    }, function(t, e, n) {
        var r = n(420);
        t.exports = r
    }, function(t, e, n) {
        n(421);
        var r = n(3);
        t.exports = r.parseInt
    }, function(t, e, n) {
        var r = n(0),
            o = n(422);
        r({
            global: !0,
            forced: parseInt != o
        }, {
            parseInt: o
        })
    }, function(t, e, n) {
        var r = n(11),
            o = n(239).trim,
            i = n(170),
            s = r.parseInt,
            a = /^[+-]?0[Xx]/,
            u = 8 !== s(i + "08") || 22 !== s(i + "0x16");
        t.exports = u ? function(t, e) {
            var n = o(String(t));
            return s(n, e >>> 0 || (a.test(n) ? 16 : 10))
        } : s
    }, function(t, e, n) {
        var r = n(31);
        n(4), n(2);
        var o = n(226),
            i = n(82),
            s = n(14);
        n(6), t.exports = function(t) {
            if (!(t instanceof Uint8Array)) throw new TypeError("Wrong data type of array of 8-bit integers. Uint8Array is expected");
            var e = s(t).call(t);
            i(e).call(e);
            var n = o(e).call(e, (function(t, e) {
                var n = e.toString(16);
                return t + (1 === n.length ? "0".concat(n) : n)
            }), "");
            return r(n, 16)
        }
    }, function(t, e, n) {
        var r = n(31);
        n(6), t.exports = function(t) {
            if ("string" != typeof t) throw new TypeError("Wrong data type passed to convertor. Hexadecimal string is expected");
            if (t.length % 2 != 0) throw new TypeError("Hex string should contain full bytes");
            for (var e = new Uint8Array(t.length / 2), n = 0, o = 0; n < t.length; n += 2, o++) e[o] = r(t.substr(n, 2), 16);
            return e
        }
    }, function(t, e, n) {
        n(4), n(2), n(6), t.exports = function(t) {
            var e = "";
            if (!(t instanceof Uint8Array)) throw new TypeError("Wrong data type of array of 8-bit integers. Uint8Array is expected");
            for (var n = 0; n < t.length; n++) {
                var r = t[n].toString(16);
                e += r = 1 === r.length ? "0".concat(r) : r
            }
            return e.toLowerCase()
        }
    }, function(t, e, n) {
        var r = n(109),
            o = n(23),
            i = n(25),
            s = n(107),
            a = n(227),
            u = n(45),
            c = n(51),
            l = n(437),
            f = n(20),
            h = n(299),
            p = h.BadTransactionError,
            d = h.ContractLogicError,
            y = h.RequestError;
        l.defaults.timeout = 3e3;
        var v = l.CancelToken,
            g = function() {
                "use strict";

                function t(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    u(this, t), this.apiUrl = e, this.config = a({
                        txResultRequestAttemps: 10,
                        txResultPollingTimeout: 500
                    }, n)
                }
                return c(t, [{
                    key: "sendTransaction",
                    value: function(t, e, n) {
                        var r = e.create(n, t).serialize();
                        return this.sendRawTransaction(r)
                    }
                }, {
                    key: "sendRawTransaction",
                    value: function(t) {
                        return l.post("".concat(this.apiUrl, "/api/explorer/v1/transactions"), {
                            tx_body: t
                        }, {
                            cancelToken: new v((function(t) {
                                s((function() {
                                    return t("Cancelled by axios timeout (".concat(3e3, " ms)"))
                                }), 3e3)
                            }))
                        }).then((function() {
                            return f.hash(f.hexadecimalToUint8Array(t))
                        })).catch((function(e) {
                            if (e.response) {
                                var n, r = e.response,
                                    o = r.status,
                                    s = r.data,
                                    a = s.title,
                                    u = s.detail;
                                if (400 === o && "Failed to add transaction to memory pool" === a) throw new p(t, i(n = "".concat(a, ": ")).call(n, u))
                            }
                            throw e
                        }))
                    }
                }, {
                    key: "getTransactionResult",
                    value: function(t) {
                        var e, n = this.apiUrl;
                        return l.get(i(e = "".concat(n, "/api/explorer/v1/transactions?hash=")).call(e, t), {
                            cancelToken: new v((function(t) {
                                s(t, 3e3)
                            }))
                        }).then((function(e) {
                            if ("committed" !== e.data.type) throw new Error("Transaction is not committed yet");
                            if ("success" !== e.data.status.type) throw new d(e.data.status.code, e.data.status.description, t);
                            return e.data
                        }))
                    }
                }, {
                    key: "waitTransactionResult",
                    value: function(t) {
                        var e = this.config.txResultRequestAttemps,
                            n = this.config.txResultPollingTimeout,
                            r = this;
                        return new o((function(t) {
                            s(t, n)
                        })).then((function() {
                            return function i() {
                                return 0 == e-- ? o.reject(new Error("The transaction was not accepted to the block for the expected period.")) : r.getTransactionResult(t).catch((function(t) {
                                    if (t instanceof d) throw t;
                                    if (0 === e) throw new Error("The request failed or the blockchain node did not respond.");
                                    return new o((function(t) {
                                        s(t, n)
                                    })).then(i)
                                }))
                            }()
                        }))
                    }
                }, {
                    key: "makeRequest",
                    value: function(t) {
                        var e = [this.apiUrl, "/api/", t].join("");
                        return l.get(e, {
                            cancelToken: new v((function(t) {
                                s(t, 3e3)
                            }))
                        }).then((function(t) {
                            return t.data
                        })).catch((function(t) {
                            if (t.response && +t.response.status < 500) {
                                var e, n = t.response.data ? i(e = "".concat(t.message, ": ")).call(e, r(t.response.data)) : t.message;
                                throw new y(+t.response.status, n)
                            }
                            throw t
                        }))
                    }
                }, {
                    key: "makePostRequest",
                    value: function(t, e) {
                        var n = 1 < arguments.length && void 0 !== e ? e : null,
                            o = [this.apiUrl, "/api/", t].join("");
                        return l.post(o, n, {
                            cancelToken: new v((function(t) {
                                s(t, 3e3)
                            }))
                        }).then((function(t) {
                            return t.data
                        })).catch((function(t) {
                            if (t.response && +t.response.status < 500) {
                                var e, n = t.response.data ? i(e = "".concat(t.message, ": ")).call(e, r(t.response.data)) : t.message;
                                throw new y(+t.response.status, n)
                            }
                            throw t
                        }))
                    }
                }]), t
            }();
        t.exports = g
    }, function(t, e, n) {
        var r = n(428);
        t.exports = r
    }, function(t, e, n) {
        n(429);
        var r = n(3);
        r.JSON || (r.JSON = {
            stringify: JSON.stringify
        }), t.exports = function(t, e, n) {
            return r.JSON.stringify.apply(null, arguments)
        }
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = n.charAt(e - 1),
                o = n.charAt(e + 1);
            return c.test(t) && !l.test(o) || l.test(t) && !c.test(r) ? "\\u" + t.charCodeAt(0).toString(16) : t
        }
        var o = n(0),
            i = n(38),
            s = n(7),
            a = i("JSON", "stringify"),
            u = /[\uD800-\uDFFF]/g,
            c = /^[\uD800-\uDBFF]$/,
            l = /^[\uDC00-\uDFFF]$/,
            f = s((function() {
                return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead")
            }));
        a && o({
            target: "JSON",
            stat: !0,
            forced: f
        }, {
            stringify: function(t, e, n) {
                var o = a.apply(null, arguments);
                return "string" == typeof o ? o.replace(u, r) : o
            }
        })
    }, function(t, e, n) {
        var r = n(431);
        t.exports = r
    }, function(t, e, n) {
        n(105), n(64), n(55), n(432), n(435), n(436);
        var r = n(3);
        t.exports = r.Promise
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e;
            return !(!w(t) || "function" != typeof(e = t.then)) && e
        }

        function o(t, e, n) {
            if (!e.notified) {
                e.notified = !0;
                var o = e.reactions;
                T((function() {
                    for (var i = e.value, s = 1 == e.state, a = 0; o.length > a;) {
                        var u, c, l, f = o[a++],
                            h = s ? f.ok : f.fail,
                            p = f.resolve,
                            d = f.reject,
                            y = f.domain;
                        try {
                            h ? (s || (2 === e.rejection && ot(t, e), e.rejection = 1), !0 === h ? u = i : (y && y.enter(), u = h(i), y && (y.exit(), l = !0)), u === f.promise ? d(z("Promise-chain cycle")) : (c = r(u)) ? c.call(u, p, d) : p(u)) : d(i)
                        } catch (i) {
                            y && !l && y.exit(), d(i)
                        }
                    }
                    e.reactions = [], e.notified = !1, n && !e.rejection && nt(t, e)
                }))
            }
        }

        function i(t, e, n) {
            var r, o;
            $ ? ((r = J.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), d.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, (o = d["on" + t]) ? o(r) : t === Q && R("Unhandled promise rejection", n)
        }

        function s(t, e, n, r) {
            return function(o) {
                t(e, n, o, r)
            }
        }

        function a(t, e, n, r) {
            e.done || (e.done = !0, r && (e = r), e.value = n, e.state = 2, o(t, e, !0))
        }
        var u, c, l, f, h = n(0),
            p = n(8),
            d = n(11),
            y = n(38),
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
            H = U("species"),
            D = "Promise",
            V = N.get,
            F = N.set,
            K = N.getterFor(D),
            q = v,
            z = d.TypeError,
            J = d.document,
            X = d.process,
            W = y("fetch"),
            Y = L.f,
            G = Y,
            Z = "process" == S(X),
            $ = !!(J && J.createEvent && d.dispatchEvent),
            Q = "unhandledrejection",
            tt = C(D, (function() {
                if (k(q) === String(q)) {
                    if (66 === M) return !0;
                    if (!Z && "function" != typeof PromiseRejectionEvent) return !0
                }
                if (p && !q.prototype.finally) return !0;
                if (51 <= M && /native code/.test(q)) return !1;

                function t(t) {
                    t((function() {}), (function() {}))
                }
                var e = q.resolve(1);
                return (e.constructor = {})[H] = t, !(e.then((function() {})) instanceof t)
            })),
            et = tt || !P((function(t) {
                q.all(t).catch((function() {}))
            })),
            nt = function(t, e) {
                j.call(d, (function() {
                    var n, r = e.value;
                    if (rt(e) && (n = I((function() {
                            Z ? X.emit("unhandledRejection", r, t) : i(Q, t, r)
                        })), e.rejection = Z || rt(e) ? 2 : 1, n.error)) throw n.value
                }))
            },
            rt = function(t) {
                return 1 !== t.rejection && !t.parent
            },
            ot = function(t, e) {
                j.call(d, (function() {
                    Z ? X.emit("rejectionHandled", t) : i("rejectionhandled", t, e.value)
                }))
            },
            it = function t(e, n, i, u) {
                if (!n.done) {
                    n.done = !0, u && (n = u);
                    try {
                        if (e === i) throw z("Promise can't be resolved itself");
                        var c = r(i);
                        c ? T((function() {
                            var r = {
                                done: !1
                            };
                            try {
                                c.call(i, s(t, e, r, n), s(a, e, r, n))
                            } catch (t) {
                                a(e, r, t, n)
                            }
                        })) : (n.value = i, n.state = 1, o(e, n, !1))
                    } catch (i) {
                        a(e, {
                            done: !1
                        }, i, n)
                    }
                }
            };
        tt && (q = function(t) {
            O(this, q, D), x(t), u.call(this);
            var e = V(this);
            try {
                t(s(it, this, e), s(a, this, e))
            } catch (t) {
                a(this, e, t)
            }
        }, (u = function() {
            F(this, {
                type: D,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = _(q.prototype, {
            then: function(t, e) {
                var n = K(this),
                    r = Y(A(this, q));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = Z ? X.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && o(this, n, !1), r.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), c = function() {
            var t = new u,
                e = V(t);
            this.promise = t, this.resolve = s(it, t, e), this.reject = s(a, t, e)
        }, L.f = Y = function(t) {
            return t === q || t === l ? new c : G(t)
        }, p || "function" != typeof v || (f = v.prototype.then, g(v.prototype, "then", (function(t, e) {
            var n = this;
            return new q((function(t, e) {
                f.call(n, t, e)
            })).then(t, e)
        }), {
            unsafe: !0
        }), "function" == typeof W && h({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(t) {
                return B(q, W.apply(d, arguments))
            }
        }))), h({
            global: !0,
            wrap: !0,
            forced: tt
        }, {
            Promise: q
        }), m(q, D, !1, !0), b(D), l = y(D), h({
            target: D,
            stat: !0,
            forced: tt
        }, {
            reject: function(t) {
                var e = Y(this);
                return e.reject.call(void 0, t), e.promise
            }
        }), h({
            target: D,
            stat: !0,
            forced: p || tt
        }, {
            resolve: function(t) {
                return B(p && this === l ? q : this, t)
            }
        }), h({
            target: D,
            stat: !0,
            forced: et
        }, {
            all: function(t) {
                var e = this,
                    n = Y(e),
                    r = n.resolve,
                    o = n.reject,
                    i = I((function() {
                        var n = x(e.resolve),
                            i = [],
                            s = 0,
                            a = 1;
                        E(t, (function(t) {
                            var u = s++,
                                c = !1;
                            i.push(void 0), a++, n.call(e, t).then((function(t) {
                                c || (c = !0, i[u] = t, --a || r(i))
                            }), o)
                        })), --a || r(i)
                    }));
                return i.error && o(i.value), n.promise
            },
            race: function(t) {
                var e = this,
                    n = Y(e),
                    r = n.reject,
                    o = I((function() {
                        var o = x(e.resolve);
                        E(t, (function(t) {
                            o.call(e, t).then(n.resolve, r)
                        }))
                    }));
                return o.error && r(o.value), n.promise
            }
        })
    }, function(t, e, n) {
        var r, o, i, s, a, u, c, l, f = n(11),
            h = n(92).f,
            p = n(63),
            d = n(242).set,
            y = n(243),
            v = f.MutationObserver || f.WebKitMutationObserver,
            g = f.process,
            _ = f.Promise,
            m = "process" == p(g),
            b = h(f, "queueMicrotask"),
            w = b && b.value;
        w || (r = function() {
            var t, e;
            for (m && (t = g.domain) && t.exit(); o;) {
                e = o.fn, o = o.next;
                try {
                    e()
                } catch (t) {
                    throw o ? s() : i = void 0, t
                }
            }
            i = void 0, t && t.enter()
        }, s = m ? function() {
            g.nextTick(r)
        } : v && !y ? (a = !0, u = document.createTextNode(""), new v(r).observe(u, {
            characterData: !0
        }), function() {
            u.data = a = !a
        }) : _ && _.resolve ? (c = _.resolve(void 0), l = c.then, function() {
            l.call(c, r)
        }) : function() {
            d.call(f, r)
        }), t.exports = w || function(t) {
            var e = {
                fn: t,
                next: void 0
            };
            i && (i.next = e), o || (o = e, s()), i = e
        }
    }, function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e) {
            var n = r.console;
            n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(15),
            i = n(171),
            s = n(245),
            a = n(16);
        r({
            target: "Promise",
            stat: !0
        }, {
            allSettled: function(t) {
                var e = this,
                    n = i.f(e),
                    r = n.resolve,
                    u = n.reject,
                    c = s((function() {
                        var n = o(e.resolve),
                            i = [],
                            s = 0,
                            u = 1;
                        a(t, (function(t) {
                            var o = s++,
                                a = !1;
                            i.push(void 0), u++, n.call(e, t).then((function(t) {
                                a || (a = !0, i[o] = {
                                    status: "fulfilled",
                                    value: t
                                }, --u || r(i))
                            }), (function(t) {
                                a || (a = !0, i[o] = {
                                    status: "rejected",
                                    reason: t
                                }, --u || r(i))
                            }))
                        })), --u || r(i)
                    }));
                return c.error && u(c.value), n.promise
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(241),
            s = n(7),
            a = n(38),
            u = n(110),
            c = n(244),
            l = n(81);
        r({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!i && s((function() {
                i.prototype.finally.call({
                    then: function() {}
                }, (function() {}))
            }))
        }, {
            finally: function(t) {
                var e = u(this, a("Promise")),
                    n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return c(e, t()).then((function() {
                        return n
                    }))
                } : t, n ? function(n) {
                    return c(e, t()).then((function() {
                        throw n
                    }))
                } : t)
            }
        }), o || "function" != typeof i || i.prototype.finally || l(i.prototype, "finally", a("Promise").prototype.finally)
    }, function(t, e, n) {
        t.exports = n(438)
    }, function(t, e, n) {
        "use strict";
        var r = n(23);
        n(86), n(62), n(2), n(246);
        var o = n(32),
            i = n(249),
            s = n(445),
            a = n(260);

        function u(t) {
            var e = new s(t),
                n = i(s.prototype.request, e);
            return o.extend(n, s.prototype, e), o.extend(n, e), n
        }
        var c = u(n(253));
        c.Axios = s, c.create = function(t) {
            return u(a(c.defaults, t))
        }, c.Cancel = n(261), c.CancelToken = n(478), c.isCancel = n(252), c.all = function(t) {
            return r.all(t)
        }, c.spread = n(479), c.isAxiosError = n(480), t.exports = c, t.exports.default = c
    }, function(t, e, n) {
        var r = n(440);
        t.exports = r
    }, function(t, e, n) {
        n(441);
        var r = n(3);
        t.exports = r.URLSearchParams
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        function o(t) {
            var e, n = t.replace(U, " "),
                o = 4;
            try {
                return decodeURIComponent(n)
            } catch (t) {
                for (; o;) n = n.replace((e = o--, M[e - 1] || (M[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))), r);
                return n
            }
        }

        function i(t) {
            return D[t]
        }

        function s(t) {
            return encodeURIComponent(t).replace(H, i)
        }

        function a(t, e) {
            if (e)
                for (var n, r, i = e.split("&"), s = 0; s < i.length;)(n = i[s++]).length && (r = n.split("="), t.push({
                    key: o(r.shift()),
                    value: o(r.join("="))
                }))
        }

        function u(t) {
            this.entries.length = 0, a(this.entries, t)
        }

        function c(t, e) {
            if (t < e) throw TypeError("Not enough arguments")
        }
        n(152);
        var l = n(0),
            f = n(38),
            h = n(442),
            p = n(81),
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
            j = f("fetch"),
            T = f("Headers"),
            B = A("iterator"),
            R = "URLSearchParams",
            L = R + "Iterator",
            I = g.set,
            N = g.getterFor(R),
            C = g.getterFor(L),
            U = /\+/g,
            M = Array(4),
            H = /[!'()~]|%20/g,
            D = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+"
            },
            V = v((function(t, e) {
                I(this, {
                    type: L,
                    iterator: E(N(t).entries),
                    kind: e
                })
            }), "Iterator", (function() {
                var t = C(this),
                    e = t.kind,
                    n = t.iterator.next(),
                    r = n.value;
                return n.done || (n.value = "keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value]), n
            })),
            F = function t(e) {
                _(this, t, R);
                var n, r, o, i, s, c, l, f, h, p = 0 < arguments.length ? e : void 0,
                    d = [];
                if (I(this, {
                        type: R,
                        entries: d,
                        updateURL: function() {},
                        updateSearchParams: u
                    }), void 0 !== p)
                    if (O(p))
                        if ("function" == typeof(n = P(p)))
                            for (o = (r = n.call(p)).next; !(i = o.call(r)).done;) {
                                if ((l = (c = (s = E(x(i.value))).next).call(s)).done || (f = c.call(s)).done || !c.call(s).done) throw TypeError("Expected sequence with length 2");
                                d.push({
                                    key: l.value + "",
                                    value: f.value + ""
                                })
                            } else
                                for (h in p) m(p, h) && d.push({
                                    key: h,
                                    value: p[h] + ""
                                });
                        else a(d, "string" == typeof p ? "?" === p.charAt(0) ? p.slice(1) : p : p + "")
            },
            K = F.prototype;
        d(K, {
            append: function(t, e) {
                c(arguments.length, 2);
                var n = N(this);
                n.entries.push({
                    key: t + "",
                    value: e + ""
                }), n.updateURL()
            },
            delete: function(t) {
                c(arguments.length, 1);
                for (var e = N(this), n = e.entries, r = t + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
                e.updateURL()
            },
            get: function(t) {
                c(arguments.length, 1);
                for (var e = N(this).entries, n = t + "", r = 0; r < e.length; r++)
                    if (e[r].key === n) return e[r].value;
                return null
            },
            getAll: function(t) {
                c(arguments.length, 1);
                for (var e = N(this).entries, n = t + "", r = [], o = 0; o < e.length; o++) e[o].key === n && r.push(e[o].value);
                return r
            },
            has: function(t) {
                c(arguments.length, 1);
                for (var e = N(this).entries, n = t + "", r = 0; r < e.length;)
                    if (e[r++].key === n) return !0;
                return !1
            },
            set: function(t, e) {
                c(arguments.length, 1);
                for (var n, r = N(this), o = r.entries, i = !1, s = t + "", a = e + "", u = 0; u < o.length; u++)(n = o[u]).key === s && (i ? o.splice(u--, 1) : (i = !0, n.value = a));
                i || o.push({
                    key: s,
                    value: a
                }), r.updateURL()
            },
            sort: function() {
                var t, e, n, r = N(this),
                    o = r.entries,
                    i = o.slice();
                for (n = o.length = 0; n < i.length; n++) {
                    for (t = i[n], e = 0; e < n; e++)
                        if (o[e].key > t.key) {
                            o.splice(e, 0, t);
                            break
                        } e === n && o.push(t)
                }
                r.updateURL()
            },
            forEach: function(t, e) {
                for (var n, r = N(this).entries, o = b(t, 1 < arguments.length ? e : void 0, 3), i = 0; i < r.length;) o((n = r[i++]).value, n.key, this)
            },
            keys: function() {
                return new V(this, "keys")
            },
            values: function() {
                return new V(this, "values")
            },
            entries: function() {
                return new V(this, "entries")
            }
        }, {
            enumerable: !0
        }), p(K, B, K.entries), p(K, "toString", (function() {
            for (var t, e = N(this).entries, n = [], r = 0; r < e.length;) t = e[r++], n.push(s(t.key) + "=" + s(t.value));
            return n.join("&")
        }), {
            enumerable: !0
        }), y(F, R), l({
            global: !0,
            forced: !h
        }, {
            URLSearchParams: F
        }), h || "function" != typeof j || "function" != typeof T || l({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function(t, e) {
                var n, r, o, i = [t];
                return 1 < arguments.length && (O(n = e) && (r = n.body, w(r) === R && ((o = n.headers ? new T(n.headers) : new T).has("content-type") || o.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), n = S(n, {
                    body: k(0, String(r)),
                    headers: k(0, o)
                }))), i.push(n)), j.apply(this, i)
            }
        }), t.exports = {
            URLSearchParams: F,
            getState: N
        }
    }, function(t, e, n) {
        var r = n(7),
            o = n(9),
            i = n(8),
            s = o("iterator");
        t.exports = !r((function() {
            var t = new URL("b?a=1&b=2&c=3", "http://a"),
                e = t.searchParams,
                n = "";
            return t.pathname = "c%20d", e.forEach((function(t, r) {
                e.delete("b"), n += r + t
            })), i && !t.toJSON || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        }))
    }, function(t, e, n) {
        var r = n(248);
        t.exports = r
    }, function(t, e, n) {
        var r = n(0),
            o = n(7),
            i = n(37),
            s = n(149),
            a = n(198);
        r({
            target: "Object",
            stat: !0,
            forced: o((function() {
                s(1)
            })),
            sham: !a
        }, {
            getPrototypeOf: function(t) {
                return s(i(t))
            }
        })
    }, function(t, e, n) {
        "use strict";
        n(33);
        var r = n(1),
            o = n(23),
            i = n(32),
            s = n(250),
            a = n(449),
            u = n(450),
            c = n(260);

        function l(t) {
            this.defaults = t, this.interceptors = {
                request: new a,
                response: new a
            }
        }
        l.prototype.request = function(t, e) {
            var n, i;
            "string" == typeof t ? (t = e || {}).url = arguments[0] : t = t || {}, (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
            var s = [u, void 0],
                a = o.resolve(t);
            for (r(n = this.interceptors.request).call(n, (function(t) {
                    s.unshift(t.fulfilled, t.rejected)
                })), r(i = this.interceptors.response).call(i, (function(t) {
                    s.push(t.fulfilled, t.rejected)
                })); s.length;) a = a.then(s.shift(), s.shift());
            return a
        }, l.prototype.getUri = function(t) {
            return t = c(this.defaults, t), s(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        }, r(i).call(i, ["delete", "get", "head", "options"], (function(t) {
            l.prototype[t] = function(e, n) {
                return this.request(c(n || {}, {
                    method: t,
                    url: e,
                    data: (n || {}).data
                }))
            }
        })), r(i).call(i, ["post", "put", "patch"], (function(t) {
            l.prototype[t] = function(e, n, r) {
                return this.request(c(r || {}, {
                    method: t,
                    url: e,
                    data: n
                }))
            }
        })), t.exports = l
    }, function(t, e, n) {
        var r = n(251);
        t.exports = r
    }, function(t, e, n) {
        n(448);
        var r = n(19);
        t.exports = r("Array").indexOf
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(201).indexOf,
            i = n(85),
            s = n(59),
            a = [].indexOf,
            u = !!a && 1 / [1].indexOf(1, -0) < 0,
            c = i("indexOf"),
            l = s("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
        r({
            target: "Array",
            proto: !0,
            forced: u || !c || !l
        }, {
            indexOf: function(t, e) {
                return u ? a.apply(this, arguments) || 0 : o(this, t, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(32);

        function i() {
            this.handlers = []
        }
        i.prototype.use = function(t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }), this.handlers.length - 1
        }, i.prototype.eject = function(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, i.prototype.forEach = function(t) {
            r(o).call(o, this.handlers, (function(e) {
                null !== e && t(e)
            }))
        }, t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = n(1),
            i = n(32),
            s = n(451),
            a = n(252),
            u = n(253);

        function c(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        t.exports = function(t) {
            return c(t), t.headers = t.headers || {}, t.data = s(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), o(i).call(i, ["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                delete t.headers[e]
            })), (t.adapter || u.adapter)(t).then((function(e) {
                return c(t), e.data = s(e.data, e.headers, t.transformResponse), e
            }), (function(e) {
                return a(e) || (c(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), r.reject(e)
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(32);
        t.exports = function(t, e, n) {
            return r(o).call(o, n, (function(n) {
                t = n(t, e)
            })), t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(32);
        t.exports = function(t, e) {
            r(o).call(o, t, (function(n, r) {
                r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(255);
        t.exports = function(t, e, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
        }
    }, function(t, e, n) {
        "use strict";
        n(87), t.exports = function(t, e, n, r, o) {
            return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
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
            }, t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(256);
        n(257), n(173);
        var o = n(32);
        t.exports = o.isStandardBrowserEnv() ? {
            write: function(t, e, n, r, i, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), o.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), o.isString(r) && a.push("path=" + r), o.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", r() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, function(t, e, n) {
        var r = n(457);
        t.exports = r
    }, function(t, e, n) {
        n(458);
        var r = n(3);
        t.exports = r.Date.now
    }, function(t, e, n) {
        n(0)({
            target: "Date",
            stat: !0
        }, {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, function(t, e, n) {
        function r(t, e) {
            if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        }
        var o = n(61),
            i = n(43);
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, o) {
                try {
                    (o = n(125)(Function.call, n(161).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, n) {
                    return r(t, n), e ? t.__proto__ = n : o(t, n), t
                }
            }({}, !1) : void 0),
            check: r
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(461),
            o = n(462);
        t.exports = function(t, e) {
            return t && !r(e) ? o(t, e) : e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function(t, e, n) {
        "use strict";
        n(33), t.exports = function(t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(25),
            o = n(174),
            i = n(28);
        n(108);
        var s = n(1),
            a = n(32),
            u = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) {
            var e, n, c, l = {};
            return t && s(a).call(a, t.split("\n"), (function(t) {
                if (c = i(t).call(t, ":"), e = o(a).call(a, t.substr(0, c)).toLowerCase(), n = o(a).call(a, t.substr(c + 1)), e) {
                    if (l[e] && 0 <= i(u).call(u, e)) return;
                    var s;
                    l[e] = "set-cookie" === e ? r(s = l[e] ? l[e] : []).call(s, [n]) : l[e] ? l[e] + ", " + n : n
                }
            })), l
        }
    }, function(t, e, n) {
        var r = n(465);
        t.exports = r
    }, function(t, e, n) {
        var r = n(466),
            o = String.prototype;
        t.exports = function(t) {
            var e = t.trim;
            return "string" == typeof t || t === o || t instanceof String && e === o.trim ? r : e
        }
    }, function(t, e, n) {
        n(467);
        var r = n(19);
        t.exports = r("String").trim
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(239).trim;
        r({
            target: "String",
            proto: !0,
            forced: n(468)("trim")
        }, {
            trim: function() {
                return o(this)
            }
        })
    }, function(t, e, n) {
        var r = n(7),
            o = n(170);
        t.exports = function(t) {
            return r((function() {
                return !!o[t]() || "​᠎" != "​᠎" [t]() || o[t].name !== t
            }))
        }
    }, function(t, e, n) {
        "use strict";
        n(259), n(33);
        var r, o, i, s = n(32);

        function a(t) {
            var e = t;
            return o && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        t.exports = s.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), r = a(window.location.href), function(t) {
            var e = s.isString(t) ? a(t) : t;
            return e.protocol === r.protocol && e.host === r.host
        }) : function() {
            return !0
        }
    }, function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
    }, function(t, e, n) {
        var r = n(472);
        t.exports = r
    }, function(t, e, n) {
        n(473);
        var r = n(3);
        t.exports = r.Object.keys
    }, function(t, e, n) {
        var r = n(0),
            o = n(37),
            i = n(97);
        r({
            target: "Object",
            stat: !0,
            forced: n(7)((function() {
                i(1)
            }))
        }, {
            keys: function(t) {
                return i(o(t))
            }
        })
    }, function(t, e, n) {
        var r = n(475);
        t.exports = r
    }, function(t, e, n) {
        var r = n(476),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.filter;
            return t === o || t instanceof Array && e === o.filter ? r : e
        }
    }, function(t, e, n) {
        n(477);
        var r = n(19);
        t.exports = r("Array").filter
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(71).filter,
            i = n(95),
            s = n(59),
            a = i("filter"),
            u = s("filter");
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            filter: function(t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = n(261);

        function i(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new r((function(t) {
                e = t
            }));
            var n = this;
            t((function(t) {
                n.reason || (n.reason = new o(t), e(n.reason))
            }))
        }
        i.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, i.source = function() {
            var t;
            return {
                token: new i((function(e) {
                    t = e
                })),
                cancel: t
            }
        }, t.exports = i
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(13);
        t.exports = function(t) {
            return "object" === r(t) && !0 === t.isAxiosError
        }
    }, function(t, e, n) {
        var r = n(229);
        t.exports = r
    }, function(t, e, n) {
        var r = n(483);
        t.exports = r
    }, function(t, e, n) {
        n(484);
        var r = n(3).Object,
            o = t.exports = function(t, e) {
                return r.getOwnPropertyDescriptor(t, e)
            };
        r.getOwnPropertyDescriptor.sham && (o.sham = !0)
    }, function(t, e, n) {
        var r = n(0),
            o = n(7),
            i = n(47),
            s = n(92).f,
            a = n(22),
            u = o((function() {
                s(1)
            }));
        r({
            target: "Object",
            stat: !0,
            forced: !a || u,
            sham: !a
        }, {
            getOwnPropertyDescriptor: function(t, e) {
                return s(i(t), e)
            }
        })
    }, function(t, e, n) {
        var r = n(486);
        t.exports = r
    }, function(t, e, n) {
        n(105), n(487), n(55);
        var r = n(3);
        t.exports = r.WeakMap
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }
        var o, i = n(11),
            s = n(104),
            a = n(102),
            u = n(163),
            c = n(488),
            l = n(12),
            f = n(54).enforce,
            h = n(194),
            p = !i.ActiveXObject && "ActiveXObject" in i,
            d = Object.isExtensible,
            y = t.exports = u("WeakMap", r, c);
        if (h && p) {
            o = c.getConstructor(r, "WeakMap", !0), a.REQUIRED = !0;
            var v = y.prototype,
                g = v.delete,
                _ = v.has,
                m = v.get,
                b = v.set;
            s(v, {
                delete: function(t) {
                    if (!l(t) || d(t)) return g.call(this, t);
                    var e = f(this);
                    return e.frozen || (e.frozen = new o), g.call(this, t) || e.frozen.delete(t)
                },
                has: function(t) {
                    if (!l(t) || d(t)) return _.call(this, t);
                    var e = f(this);
                    return e.frozen || (e.frozen = new o), _.call(this, t) || e.frozen.has(t)
                },
                get: function(t) {
                    if (!l(t) || d(t)) return m.call(this, t);
                    var e = f(this);
                    return e.frozen || (e.frozen = new o), _.call(this, t) ? m.call(this, t) : e.frozen.get(t)
                },
                set: function(t, e) {
                    if (l(t) && !d(t)) {
                        var n = f(this);
                        n.frozen || (n.frozen = new o), _.call(this, t) ? b.call(this, t, e) : n.frozen.set(t, e)
                    } else b.call(this, t, e);
                    return this
                }
            })
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.frozen || (t.frozen = new m)
        }

        function o(t, e) {
            return v(t.entries, (function(t) {
                return t[0] === e
            }))
        }
        var i = n(104),
            s = n(102).getWeakData,
            a = n(5),
            u = n(12),
            c = n(103),
            l = n(16),
            f = n(71),
            h = n(26),
            p = n(54),
            d = p.set,
            y = p.getterFor,
            v = f.find,
            g = f.findIndex,
            _ = 0,
            m = function() {
                this.entries = []
            };
        m.prototype = {
            get: function(t) {
                var e = o(this, t);
                if (e) return e[1]
            },
            has: function(t) {
                return !!o(this, t)
            },
            set: function(t, e) {
                var n = o(this, t);
                n ? n[1] = e : this.entries.push([t, e])
            },
            delete: function(t) {
                var e = g(this.entries, (function(e) {
                    return e[0] === t
                }));
                return ~e && this.entries.splice(e, 1), !!~e
            }
        }, t.exports = {
            getConstructor: function(t, e, n, o) {
                function f(t, e, n) {
                    var o = v(t),
                        i = s(a(e), !0);
                    return !0 === i ? r(o).set(e, n) : i[o.id] = n, t
                }
                var p = t((function(t, r) {
                        c(t, p, e), d(t, {
                            type: e,
                            id: _++,
                            frozen: void 0
                        }), null != r && l(r, t[o], t, n)
                    })),
                    v = y(e);
                return i(p.prototype, {
                    delete: function(t) {
                        var e = v(this);
                        if (!u(t)) return !1;
                        var n = s(t);
                        return !0 === n ? r(e).delete(t) : n && h(n, e.id) && delete n[e.id]
                    },
                    has: function(t) {
                        var e = v(this);
                        if (!u(t)) return !1;
                        var n = s(t);
                        return !0 === n ? r(e).has(t) : n && h(n, e.id)
                    }
                }), i(p.prototype, n ? {
                    get: function(t) {
                        var e = v(this);
                        if (u(t)) {
                            var n = s(t);
                            return !0 === n ? r(e).get(t) : n ? n[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return f(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return f(this, t, !0)
                    }
                }), p
            }
        }
    }, function(t, e, n) {
        var r = n(233);
        t.exports = r
    }, function(t, e, n) {
        var r = n(235);
        t.exports = r
    }, function(t, e, n) {
        n(55);
        var r = n(492),
            o = n(65),
            i = Array.prototype,
            s = {
                DOMTokenList: !0,
                NodeList: !0
            };
        t.exports = function(t) {
            var e = t.entries;
            return t === i || t instanceof Array && e === i.entries || s.hasOwnProperty(o(t)) ? r : e
        }
    }, function(t, e, n) {
        var r = n(493);
        t.exports = r
    }, function(t, e, n) {
        n(152);
        var r = n(19);
        t.exports = r("Array").entries
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = {},
                i = s((function() {
                    return !!a[t]() || "​" != "​" [t]()
                })),
                u = r[t] = i ? e(f) : a[t];
            n && (r[n] = u), o(o.P + o.F * i, "String", r)
        }
        var o = n(49),
            i = n(69),
            s = n(29),
            a = n(495),
            u = "[" + a + "]",
            c = RegExp("^" + u + u + "*"),
            l = RegExp(u + u + "*$"),
            f = r.trim = function(t, e) {
                return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
            };
        t.exports = r
    }, function(t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function(t, e, n) {
        "use strict";
        t.exports = n(497)
    }, function(t, e, n) {
        "use strict";
        var r = e;

        function o() {
            r.Reader._configure(r.BufferReader), r.util._configure()
        }
        r.build = "minimal", r.Writer = n(263), r.BufferWriter = n(511), r.Reader = n(276), r.BufferReader = n(512), r.util = n(74), r.rpc = n(513), r.roots = n(515), r.configure = o, r.Writer._configure(r.BufferWriter), o()
    }, function(t, e, n) {
        var r = n(264);
        t.exports = r
    }, function(t, e, n) {
        n(0)({
            target: "Object",
            stat: !0,
            sham: !n(22)
        }, {
            create: n(80)
        })
    }, function(t, e, n) {
        var r = n(501);
        t.exports = r
    }, function(t, e, n) {
        n(502);
        var r = n(3);
        t.exports = r.Object.freeze
    }, function(t, e, n) {
        var r = n(0),
            o = n(223),
            i = n(7),
            s = n(12),
            a = n(102).onFreeze,
            u = Object.freeze;
        r({
            target: "Object",
            stat: !0,
            forced: i((function() {
                u(1)
            })),
            sham: !o
        }, {
            freeze: function(t) {
                return u && s(t) ? u(a(t)) : t
            }
        })
    }, function(t, e, n) {
        var r = n(504);
        t.exports = r
    }, function(t, e, n) {
        var r = n(505),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.splice;
            return t === o || t instanceof Array && e === o.splice ? r : e
        }
    }, function(t, e, n) {
        n(506);
        var r = n(19);
        t.exports = r("Array").splice
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(119),
            i = n(94),
            s = n(42),
            a = n(37),
            u = n(143),
            c = n(116),
            l = n(95),
            f = n(59),
            h = l("splice"),
            p = f("splice", {
                ACCESSORS: !0,
                0: 0,
                1: 2
            }),
            d = Math.max,
            y = Math.min;
        r({
            target: "Array",
            proto: !0,
            forced: !h || !p
        }, {
            splice: function(t, e) {
                var n, r, l, f, h, p, v = a(this),
                    g = s(v.length),
                    _ = o(t, g),
                    m = arguments.length;
                if (0 === m ? n = r = 0 : r = 1 === m ? (n = 0, g - _) : (n = m - 2, y(d(i(e), 0), g - _)), 9007199254740991 < g + n - r) throw TypeError("Maximum allowed length exceeded");
                for (l = u(v, r), f = 0; f < r; f++)(h = _ + f) in v && c(l, f, v[h]);
                if (n < (l.length = r)) {
                    for (f = _; f < g - r; f++) p = f + n, (h = f + r) in v ? v[p] = v[h] : delete v[p];
                    for (f = g; g - r + n < f; f--) delete v[f - 1]
                } else if (r < n)
                    for (f = g - r; _ < f; f--) p = f + n - 1, (h = f + r - 1) in v ? v[p] = v[h] : delete v[p];
                for (f = 0; f < n; f++) v[f + _] = arguments[f + 2];
                return v.length = g - r + n, l
            }
        })
    }, function(t, e, n) {
        var r = n(270);
        t.exports = r
    }, function(t, e, n) {
        n(509);
        var r = n(19);
        t.exports = r("Function").bind
    }, function(t, e, n) {
        n(0)({
            target: "Function",
            proto: !0
        }, {
            bind: n(271)
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(31);
        t.exports = i;
        var o = n(74);

        function i(t, e) {
            this.lo = t >>> 0, this.hi = e >>> 0
        }
        var s = i.zero = new i(0, 0);
        s.toNumber = function() {
            return 0
        }, s.zzEncode = s.zzDecode = function() {
            return this
        }, s.length = function() {
            return 1
        };
        var a = i.zeroHash = "\0\0\0\0\0\0\0\0";
        i.fromNumber = function(t) {
            if (0 === t) return s;
            var e = t < 0;
            e && (t = -t);
            var n = t >>> 0,
                r = (t - n) / 4294967296 >>> 0;
            return e && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))), new i(n, r)
        }, i.from = function(t) {
            if ("number" == typeof t) return i.fromNumber(t);
            if (o.isString(t)) {
                if (!o.Long) return i.fromNumber(r(t, 10));
                t = o.Long.fromString(t)
            }
            return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : s
        }, i.prototype.toNumber = function(t) {
            if (!t && this.hi >>> 31) {
                var e = 1 + ~this.lo >>> 0,
                    n = ~this.hi >>> 0;
                return e || (n = n + 1 >>> 0), -(e + 4294967296 * n)
            }
            return this.lo + 4294967296 * this.hi
        }, i.prototype.toLong = function(t) {
            return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: Boolean(t)
            }
        };
        var u = String.prototype.charCodeAt;
        i.fromHash = function(t) {
            return t === a ? s : new i((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
        }, i.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }, i.prototype.zzEncode = function() {
            var t = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
        }, i.prototype.zzDecode = function() {
            var t = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
        }, i.prototype.length = function() {
            var t = this.lo,
                e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                n = this.hi >>> 24;
            return 0 == n ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
        }
    }, function(t, e, n) {
        "use strict";
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
        a.alloc = function(t) {
            return (a.alloc = i._Buffer_allocUnsafe)(t)
        };
        var u = s && s.prototype instanceof Uint8Array && "set" === s.prototype.set.name ? function(t, e, n) {
            e.set(t, n)
        } : function(t, e, n) {
            if (t.copy) t.copy(e, n, 0, t.length);
            else
                for (var r = 0; r < t.length;) e[n++] = t[r++]
        };

        function c(t, e, n) {
            t.length < 40 ? i.utf8.write(t, e, n) : e.utf8Write(t, n)
        }
        a.prototype.bytes = function(t) {
            i.isString(t) && (t = i._Buffer_from(t, "base64"));
            var e = t.length >>> 0;
            return this.uint32(e), e && this._push(u, e, t), this
        }, a.prototype.string = function(t) {
            var e = s.byteLength(t);
            return this.uint32(e), e && this._push(c, e, t), this
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(21);
        t.exports = a;
        var i = n(276);
        (a.prototype = o(i.prototype)).constructor = a;
        var s = n(74);

        function a(t) {
            i.call(this, t)
        }
        s.Buffer && (a.prototype._slice = r(s.Buffer.prototype)), a.prototype.string = function() {
            var t = this.uint32();
            return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
        }
    }, function(t, e, n) {
        "use strict";
        e.Service = n(514)
    }, function(t, e, n) {
        "use strict";
        var r = n(107),
            o = n(21);
        t.exports = s;
        var i = n(74);

        function s(t, e, n) {
            if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
            i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(n)
        }((s.prototype = o(i.EventEmitter.prototype)).constructor = s).prototype.rpcCall = function t(e, n, o, s, a) {
            if (!s) throw TypeError("request must be specified");
            var u = this;
            if (!a) return i.asPromise(t, u, e, n, o, s);
            if (u.rpcImpl) try {
                return u.rpcImpl(e, n[u.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), (function(t, n) {
                    if (t) return u.emit("error", t, e), a(t);
                    if (null !== n) {
                        if (!(n instanceof o)) try {
                            n = o[u.responseDelimited ? "decodeDelimited" : "decode"](n)
                        } catch (t) {
                            return u.emit("error", t, e), a(t)
                        }
                        return u.emit("data", n, e), a(null, n)
                    }
                    u.end(!0)
                }))
            } catch (t) {
                return u.emit("error", t, e), void r((function() {
                    a(t)
                }), 0)
            } else r((function() {
                a(Error("already ended"))
            }), 0)
        }, s.prototype.end = function(t) {
            return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {}
    }, function(t, e, n) {
        var r = n(193);
        t.exports = r
    }, function(t, e, n) {
        (e = t.exports = function(t) {
            t = t.toLowerCase();
            var n = e[t];
            if (!n) throw new Error(t + " is not supported (we accept pull requests)");
            return new n
        }).sha = n(518), e.sha1 = n(537), e.sha224 = n(538), e.sha256 = n(280), e.sha384 = n(539), e.sha512 = n(281)
    }, function(t, e, n) {
        var r = n(89),
            o = n(90),
            i = n(75).Buffer,
            s = [1518500249, 1859775393, -1894007588, -899497514],
            a = new Array(80);

        function u() {
            this.init(), this._w = a, o.call(this, 64, 56)
        }
        r(u, o), u.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, u.prototype._update = function(t) {
            for (var e, n, r, o, i, a, u = this._w, c = 0 | this._a, l = 0 | this._b, f = 0 | this._c, h = 0 | this._d, p = 0 | this._e, d = 0; d < 16; ++d) u[d] = t.readInt32BE(4 * d);
            for (; d < 80; ++d) u[d] = u[d - 3] ^ u[d - 8] ^ u[d - 14] ^ u[d - 16];
            for (var y = 0; y < 80; ++y) {
                var v = ~~(y / 20),
                    g = 0 | ((a = c) << 5 | a >>> 27) + (r = l, o = f, i = h, 0 === (n = v) ? r & o | ~r & i : 2 === n ? r & o | r & i | o & i : r ^ o ^ i) + p + u[y] + s[v];
                p = h, h = f, f = (e = l) << 30 | e >>> 2, l = c, c = g
            }
            this._a = c + this._a | 0, this._b = l + this._b | 0, this._c = f + this._c | 0, this._d = h + this._d | 0, this._e = p + this._e | 0
        }, u.prototype._hash = function() {
            var t = i.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
        }, t.exports = u
    }, function(t, e, n) {
        var r = n(49);
        r(r.P, "Array", {
            fill: n(157)
        }), n(160)("fill")
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(218),
            i = n(83),
            s = n(100),
            a = n(44),
            u = [].slice;
        r(r.P + r.F * n(29)((function() {
            o && u.call(o)
        })), "Array", {
            slice: function(t, e) {
                var n = a(this.length),
                    r = i(this);
                if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
                for (var o = s(t, n), c = s(e, n), l = a(c - o), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(o + h) : this[o + h];
                return f
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(154)(!0);
        r(r.P, "Array", {
            includes: function(t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
            }
        }), n(160)("includes")
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(523);
        r(r.P + r.F * n(524)("includes"), "String", {
            includes: function(t, e) {
                return !!~o(this, t, "includes").indexOf(t, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        var r = n(167),
            o = n(69);
        t.exports = function(t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(o(t))
        }
    }, function(t, e, n) {
        var r = n(18)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, !"/./" [t](e)
                } catch (t) {}
            }
            return !0
        }
    }, function(t, e, n) {
        t.exports = n(526)
    }, function(t, e, n) {
        var r = n(527);
        t.exports = r
    }, function(t, e, n) {
        var r = n(528),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.lastIndexOf;
            return t === o || t instanceof Array && e === o.lastIndexOf ? r : e
        }
    }, function(t, e, n) {
        n(529);
        var r = n(19);
        t.exports = r("Array").lastIndexOf
    }, function(t, e, n) {
        var r = n(0),
            o = n(530);
        r({
            target: "Array",
            proto: !0,
            forced: o !== [].lastIndexOf
        }, {
            lastIndexOf: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(47),
            o = n(94),
            i = n(42),
            s = n(85),
            a = n(59),
            u = Math.min,
            c = [].lastIndexOf,
            l = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
            f = s("lastIndexOf"),
            h = a("indexOf", {
                ACCESSORS: !0,
                1: 0
            }),
            p = l || !f || !h;
        t.exports = p ? function(t, e) {
            if (l) return c.apply(this, arguments) || 0;
            var n = r(this),
                s = i(n.length),
                a = s - 1;
            for (1 < arguments.length && (a = u(a, o(e))), a < 0 && (a = s + a); 0 <= a; a--)
                if (a in n && n[a] === t) return a || 0;
            return -1
        } : c
    }, function(t, e, n) {
        t.exports = n(532)
    }, function(t, e, n) {
        var r = n(533);
        t.exports = r
    }, function(t, e, n) {
        n(237);
        var r = n(134);
        t.exports = r.f("species")
    }, function(t, e, n) {
        "use strict";
        var r = n(28);
        n(6), e.byteLength = function(t) {
            var e = l(t),
                n = e[0],
                r = e[1];
            return 3 * (n + r) / 4 - r
        }, e.toByteArray = function(t) {
            var e, n, r = l(t),
                o = r[0],
                a = r[1],
                u = new s(function(t, e) {
                    return 3 * (t + e) / 4 - e
                }(o, a)),
                c = 0,
                f = 0 < a ? o - 4 : o;
            for (n = 0; n < f; n += 4) e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)], u[c++] = e >> 16 & 255, u[c++] = e >> 8 & 255, u[c++] = 255 & e;
            return 2 === a && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4, u[c++] = 255 & e), 1 === a && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2, u[c++] = e >> 8 & 255, u[c++] = 255 & e), u
        }, e.fromByteArray = function(t) {
            for (var e, n = t.length, r = n % 3, i = [], s = 0, a = n - r; s < a; s += 16383) i.push(f(t, s, a < s + 16383 ? a : s + 16383));
            return 1 == r ? (e = t[n - 1], i.push(o[e >> 2] + o[e << 4 & 63] + "==")) : 2 == r && (e = (t[n - 2] << 8) + t[n - 1], i.push(o[e >> 10] + o[e >> 4 & 63] + o[e << 2 & 63] + "=")), i.join("")
        };
        for (var o = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, c = a.length; u < c; ++u) o[u] = a[u], i[a.charCodeAt(u)] = u;

        function l(t) {
            var e = t.length;
            if (0 < e % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = r(t).call(t, "=");
            return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
        }

        function f(t, e, n) {
            for (var r, i, s = [], a = e; a < n; a += 3) r = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(o[(i = r) >> 18 & 63] + o[i >> 12 & 63] + o[i >> 6 & 63] + o[63 & i]);
            return s.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, function(t, e) {
        e.read = function(t, e, n, r, o) {
            var i, s, a = 8 * o - r - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                l = -7,
                f = n ? o - 1 : 0,
                h = n ? -1 : 1,
                p = t[e + f];
            for (f += h, i = p & (1 << -l) - 1, p >>= -l, l += a; 0 < l; i = 256 * i + t[e + f], f += h, l -= 8);
            for (s = i & (1 << -l) - 1, i >>= -l, l += r; 0 < l; s = 256 * s + t[e + f], f += h, l -= 8);
            if (0 === i) i = 1 - c;
            else {
                if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r), i -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, i - r)
        }, e.write = function(t, e, n, r, o, i) {
            var s, a, u, c = 8 * i - o - 1,
                l = (1 << c) - 1,
                f = l >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : i - 1,
                d = r ? 1 : -1,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), 2 <= (e += 1 <= s + f ? h / u : h * Math.pow(2, 1 - f)) * u && (s++, u /= 2), l <= s + f ? (a = 0, s = l) : 1 <= s + f ? (a = (e * u - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); 8 <= o; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
            for (s = s << o | a, c += o; 0 < c; t[n + p] = 255 & s, p += d, s /= 256, c -= 8);
            t[n + p - d] |= 128 * y
        }
    }, function(t, e, n) {
        var r = n(27);
        n(4), n(2);
        var o = {}.toString;
        t.exports = r || function(t) {
            return "[object Array]" == o.call(t)
        }
    }, function(t, e, n) {
        var r = n(89),
            o = n(90),
            i = n(75).Buffer,
            s = [1518500249, 1859775393, -1894007588, -899497514],
            a = new Array(80);

        function u() {
            this.init(), this._w = a, o.call(this, 64, 56)
        }
        r(u, o), u.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, u.prototype._update = function(t) {
            for (var e, n, r, o, i, a, u, c = this._w, l = 0 | this._a, f = 0 | this._b, h = 0 | this._c, p = 0 | this._d, d = 0 | this._e, y = 0; y < 16; ++y) c[y] = t.readInt32BE(4 * y);
            for (; y < 80; ++y) c[y] = (e = c[y - 3] ^ c[y - 8] ^ c[y - 14] ^ c[y - 16]) << 1 | e >>> 31;
            for (var v = 0; v < 80; ++v) {
                var g = ~~(v / 20),
                    _ = 0 | ((u = l) << 5 | u >>> 27) + (o = f, i = h, a = p, 0 === (r = g) ? o & i | ~o & a : 2 === r ? o & i | o & a | i & a : o ^ i ^ a) + d + c[v] + s[g];
                d = p, p = h, h = (n = f) << 30 | n >>> 2, f = l, l = _
            }
            this._a = l + this._a | 0, this._b = f + this._b | 0, this._c = h + this._c | 0, this._d = p + this._d | 0, this._e = d + this._e | 0
        }, u.prototype._hash = function() {
            var t = i.allocUnsafe(20);
            return t.writeInt32BE(0 | this._a, 0), t.writeInt32BE(0 | this._b, 4), t.writeInt32BE(0 | this._c, 8), t.writeInt32BE(0 | this._d, 12), t.writeInt32BE(0 | this._e, 16), t
        }, t.exports = u
    }, function(t, e, n) {
        var r = n(89),
            o = n(280),
            i = n(90),
            s = n(75).Buffer,
            a = new Array(64);

        function u() {
            this.init(), this._w = a, i.call(this, 64, 56)
        }
        r(u, o), u.prototype.init = function() {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
        }, u.prototype._hash = function() {
            var t = s.allocUnsafe(28);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t
        }, t.exports = u
    }, function(t, e, n) {
        var r = n(89),
            o = n(281),
            i = n(90),
            s = n(75).Buffer,
            a = new Array(160);

        function u() {
            this.init(), this._w = a, i.call(this, 128, 112)
        }
        r(u, o), u.prototype.init = function() {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
        }, u.prototype._hash = function() {
            var t = s.allocUnsafe(48);

            function e(e, n, r) {
                t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4)
            }
            return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
        }, t.exports = u
    }, function(t, e, n) {
        n(56)("Uint32", 4, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        n(56)("Uint8", 1, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }), !0)
    }, function(t, e, n) {
        n(56)("Int16", 2, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        n(56)("Int8", 1, (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }))
    }, function(t, e, n) {
        t.exports = n(545)
    }, function(t, e, n) {
        var r = n(546);
        t.exports = r
    }, function(t, e, n) {
        n(547);
        var r = n(3).Object,
            o = t.exports = function(t, e) {
                return r.defineProperties(t, e)
            };
        r.defineProperties.sham && (o.sham = !0)
    }, function(t, e, n) {
        var r = n(0),
            o = n(22);
        r({
            target: "Object",
            stat: !0,
            forced: !o,
            sham: !o
        }, {
            defineProperties: n(199)
        })
    }, function(t, e, n) {
        "use strict";
        var r, o, i, s, a, u = n(46),
            c = n(1),
            l = n(10);
        l(e, "__esModule", {
            value: !0
        });
        var f = n(549);
        c(r = u(f)).call(r, (function(t) {
            "default" !== t && "__esModule" !== t && l(e, t, {
                enumerable: !0,
                get: function() {
                    return f[t]
                }
            })
        }));
        var h = n(290);
        c(o = u(h)).call(o, (function(t) {
            "default" !== t && "__esModule" !== t && l(e, t, {
                enumerable: !0,
                get: function() {
                    return h[t]
                }
            })
        }));
        var p = n(580);
        c(i = u(p)).call(i, (function(t) {
            "default" !== t && "__esModule" !== t && l(e, t, {
                enumerable: !0,
                get: function() {
                    return p[t]
                }
            })
        }));
        var d = n(589);
        c(s = u(d)).call(s, (function(t) {
            "default" !== t && "__esModule" !== t && l(e, t, {
                enumerable: !0,
                get: function() {
                    return d[t]
                }
            })
        }));
        var y = n(609);
        c(a = u(y)).call(a, (function(t) {
            "default" !== t && "__esModule" !== t && l(e, t, {
                enumerable: !0,
                get: function() {
                    return y[t]
                }
            })
        }))
    }, function(t, e, n) {
        "use strict";
        n(6);
        var r = n(268),
            o = n(1),
            i = n(106),
            s = n(129),
            a = n(282),
            u = n(25);
        n(86), n(62);
        var c = n(137),
            l = n(177),
            f = n(27),
            h = n(283),
            p = n(121),
            d = n(135),
            y = n(181),
            v = n(28),
            g = n(139);
        n(4), n(2);
        var _ = n(111),
            m = n(286),
            b = n(21),
            w = n(52),
            x = n(13),
            O = n(40);
        n(10)(e, "__esModule", {
            value: !0
        }), e.ListProofError = e.ListProof = void 0;
        var S = T(n(278)),
            k = T(n(288)),
            E = n(140),
            P = n(76),
            A = n(88),
            j = n(289);

        function T(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function B(t) {
            return (B = "function" == typeof O && "symbol" === x(w) ? function(t) {
                return x(t)
            } : function(t) {
                return t && "function" == typeof O && t.constructor === O && t !== O.prototype ? "symbol" : x(t)
            })(t)
        }

        function R(t, e) {
            return !e || "object" !== B(e) && "function" != typeof e ? function(t) {
                if (void 0 !== t) return t;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(t) : e
        }

        function L(t) {
            var e = "function" == typeof m ? new m : void 0;
            return (L = function(t) {
                if (null === t || (n = t, -1 === v(r = Function.toString.call(n)).call(r, "[native code]"))) return t;
                var n, r;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, o)
                }

                function o() {
                    return I(t, arguments, C(this).constructor)
                }
                return o.prototype = b(t.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), N(o, t)
            })(t)
        }

        function I(t, e, n) {
            return (I = function() {
                if ("undefined" != typeof Reflect && _ && !_.sham) {
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(_(Date, [], (function() {}))), 1
                    } catch (t) {
                        return
                    }
                }
            }() ? _ : function(t, e, n) {
                var r = [null];
                r.push.apply(r, e);
                var o = new(g(Function).apply(t, r));
                return n && N(o, n.prototype), o
            }).apply(null, arguments)
        }

        function N(t, e) {
            return (N = y || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function C(t) {
            return (C = y ? d : function(t) {
                return t.__proto__ || d(t)
            })(t)
        }

        function U(t) {
            return function(t) {
                if (f(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (p(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return l(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function M(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function H(t, e) {
            var n = (0, k.default)(t, e + 1, (function(t, e) {
                var n = t.height;
                return t.index, e !== n ? n - e : 1
            }));
            if (0 <= n) throw new Error("Internal error while verifying list proof");
            var o = -n - 1;
            return r(t).call(t, 0, o)
        }

        function D(t, e) {
            for (var n = 0, r = 0, o = []; n < t.length || r < e.length;) {
                var i = [t[n], e[r]],
                    s = i[0],
                    a = i[1];
                if (s)
                    if (a)
                        if (s.index < a.index) o.push(s), n++;
                        else {
                            if (!(s.index > a.index)) throw new K("duplicateHash");
                            o.push(a), r++
                        }
                else o.push(s), n++;
                else o.push(a), r++
            }
            return o
        }

        function V(t, e) {
            for (var n = 0; n < t.length; n += 2) {
                var r = [t[n], t[n + 1]],
                    o = r[0],
                    i = r[1],
                    s = void 0;
                if (i) {
                    if (o.index % 2 != 0 || i.index !== o.index + 1) throw new K("missingHash");
                    s = F(o.hash, i.hash)
                } else {
                    if (e % 2 == 1 || o.index !== e) throw new K("missingHash");
                    s = F(o.hash)
                }
                t[n / 2] = {
                    height: o.height + 1,
                    index: o.index / 2,
                    hash: s
                }
            }
            t.length = Math.ceil(t.length / 2)
        }

        function F(t, e) {
            var n = [j.LIST_BRANCH_PREFIX];
            return E.Hash.serialize(t, n, n.length), e && E.Hash.serialize(e, n, n.length), (0, A.hash)(n)
        }
        e.ListProof = function t(e, n) {
            var r, l = e.proof,
                d = c(e),
                y = e.length;
            if (M(this, t), !n || "function" != typeof n.serialize) throw new TypeError("No `serialize` method in the value type");
            if (this.valueType = n, this.proof = function(t) {
                    if (!f(t)) throw new K("malformedProof");
                    if (!a(t).call(t, (function(t) {
                            var e = t.index,
                                n = t.height,
                                r = t.hash;
                            return /^[0-9a-f]{64}$/i.test(r) && s(e) && s(n) && 0 < n && n <= 58
                        }))) throw new K("malformedProof");
                    for (var e = 0; e + 1 < t.length; e++) {
                        var n = [t[e], t[e + 1]],
                            r = n[0],
                            o = n[1];
                        if (r.height > o.height || r.height === o.height && r.index >= o.index) throw new K("invalidProofOrdering")
                    }
                    return t
                }(l), this.entries = function(t, e) {
                    if (!f(t)) throw new K("malformedEntries");
                    for (var n = 0; n + 1 < t.length; n++) {
                        var r = [t[n], t[n + 1]],
                            o = r[1];
                        if (r[0][0] >= o[0]) throw new K("invalidValuesOrdering")
                    }
                    return i(t).call(t, (function(t) {
                        var n, r = function(t, e) {
                                return function(t) {
                                    if (f(t)) return t
                                }(t) || function(t, e) {
                                    if (p(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var s, a = h(t); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            o = !0, i = t
                                        } finally {
                                            try {
                                                r || null == a.return || a.return()
                                            } finally {
                                                if (o) throw i
                                            }
                                        }
                                        return n
                                    }
                                }(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()
                            }(t, 2),
                            o = r[0],
                            i = r[1];
                        if (!s(o)) throw new K("malformedEntries");
                        return {
                            index: o,
                            height: 0,
                            value: i,
                            hash: (0, A.hash)(u(n = [j.BLOB_PREFIX]).call(n, U(e.serialize(i, [], 0))))
                        }
                    }))
                }(d, n), this.length = y, 0 === this.length) {
                if (0 !== this.proof.length || 0 !== c(this).length) throw new K("malformedEmptyProof");
                r = "0000000000000000000000000000000000000000000000000000000000000000"
            } else {
                var v;
                r = function(t, e) {
                    var n, r = function(t) {
                        for (var e = 0;
                            (0, S.default)(2).pow(e).lt(t);) e++;
                        return e + 1
                    }(e);
                    if (t[t.length - 1].height >= r) throw new K("unexpectedHeight");
                    o(t).call(t, (function(t) {
                        var n = t.height,
                            r = t.index,
                            o = 0 === n ? 1 : Math.pow(2, n - 1);
                        if (Math.floor((e - 1) / o) < r) throw new K("unexpectedIndex")
                    }));
                    for (var s = i(n = H(t, 0)).call(n, (function(t) {
                            return {
                                height: 1,
                                index: t.index,
                                hash: t.hash
                            }
                        })), a = e - 1, u = 1; u < r; u++) {
                        V(s = D(s, H(t, u)), a), a = Math.floor(a / 2)
                    }
                    return s[0].hash
                }(u(v = []).call(v, U(c(this)), U(this.proof)), this.length)
            }
            this.merkleRoot = function(t, e) {
                var n = new Uint8Array(9 + A.HASH_LENGTH);
                n[0] = j.LIST_PREFIX;
                for (var r = (0, S.default)(e), o = 1; o < 9; o++) {
                    var i, s = r.divmod(256);
                    r = s.quotient, i = s.remainder, n[o] = i
                }
                return n.set((0, P.hexadecimalToUint8Array)(t), 9), (0, A.hash)(n)
            }(r, this.length)
        };
        var K = function() {
            function t(e) {
                var n;
                switch (M(this, t), e) {
                    case "malformedProof":
                    case "invalidProofOrdering":
                        n = R(this, C(t).call(this, "malformed `proof` part of the proof"));
                        break;
                    case "malformedEntries":
                    case "invalidValuesOrdering":
                        n = R(this, C(t).call(this, "malformed `entries` in the proof"));
                        break;
                    case "unexpectedHeight":
                    case "unexpectedIndex":
                        n = R(this, C(t).call(this, "proof contains a branch where it is impossible according to list length"));
                        break;
                    case "duplicateHash":
                        n = R(this, C(t).call(this, "proof contains redundant entries"));
                        break;
                    case "missingHash":
                        n = R(this, C(t).call(this, "proof does not contain information to restore index hash"));
                        break;
                    default:
                        n = R(this, C(t).call(this, e))
                }
                return n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = b(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && N(t, e)
            }(t, L(Error)), t
        }();
        e.ListProofError = K
    }, function(t, e, n) {
        var r = n(551);
        t.exports = r
    }, function(t, e, n) {
        var r = n(552),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.every;
            return t === o || t instanceof Array && e === o.every ? r : e
        }
    }, function(t, e, n) {
        n(553);
        var r = n(19);
        t.exports = r("Array").every
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(71).every,
            i = n(85),
            s = n(59),
            a = i("every"),
            u = s("every");
        r({
            target: "Array",
            proto: !0,
            forced: !a || !u
        }, {
            every: function(t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
            }
        })
    }, function(t, e, n) {
        n(55), n(64);
        var r = n(172);
        t.exports = r
    }, function(t, e, n) {
        var r = n(284);
        t.exports = r
    }, function(t, e, n) {
        n(0)({
            target: "Object",
            stat: !0
        }, {
            setPrototypeOf: n(203)
        })
    }, function(t, e, n) {
        var r = n(285);
        t.exports = r
    }, function(t, e, n) {
        var r = n(0),
            o = n(38),
            i = n(15),
            s = n(5),
            a = n(12),
            u = n(80),
            c = n(271),
            l = n(7),
            f = o("Reflect", "construct"),
            h = l((function() {
                function t() {}
                return !(f((function() {}), [], t) instanceof t)
            })),
            p = !l((function() {
                f((function() {}))
            })),
            d = h || p;
        r({
            target: "Reflect",
            stat: !0,
            forced: d,
            sham: d
        }, {
            construct: function(t, e, n) {
                i(t), s(e);
                var r = arguments.length < 3 ? t : i(n);
                if (p && !h) return f(t, e, r);
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
                    var o = [null];
                    return o.push.apply(o, e), new(c.apply(t, o))
                }
                var l = r.prototype,
                    d = u(a(l) ? l : Object.prototype),
                    y = Function.apply.call(t, d, e);
                return a(y) ? y : d
            }
        })
    }, function(t, e, n) {
        var r = n(287);
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = n(163),
            o = n(224);
        t.exports = r("Map", (function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }), o)
    }, function(t, e, n) {
        t.exports = n(562)
    }, function(t, e, n) {
        var r = n(563);
        t.exports = r
    }, function(t, e, n) {
        var r = n(564),
            o = String.prototype;
        t.exports = function(t) {
            var e = t.startsWith;
            return "string" == typeof t || t === o || t instanceof String && e === o.startsWith ? r : e
        }
    }, function(t, e, n) {
        n(565);
        var r = n(19);
        t.exports = r("String").startsWith
    }, function(t, e, n) {
        "use strict";
        var r, o = n(0),
            i = n(92).f,
            s = n(42),
            a = n(566),
            u = n(93),
            c = n(568),
            l = n(8),
            f = "".startsWith,
            h = Math.min,
            p = c("startsWith");
        o({
            target: "String",
            proto: !0,
            forced: !(!l && !p && (r = i(String.prototype, "startsWith")) && !r.writable || p)
        }, {
            startsWith: function(t, e) {
                var n = String(u(this));
                a(t);
                var r = s(h(1 < arguments.length ? e : void 0, n.length)),
                    o = String(t);
                return f ? f.call(n, o, r) : n.slice(r, r + o.length) === o
            }
        })
    }, function(t, e, n) {
        var r = n(567);
        t.exports = function(t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    }, function(t, e, n) {
        var r = n(12),
            o = n(63),
            i = n(9)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
        }
    }, function(t, e, n) {
        var r = n(9)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, "/./" [t](e)
                } catch (t) {}
            }
            return !1
        }
    }, function(t, e, n) {
        t.exports = n(570)
    }, function(t, e, n) {
        var r = n(571);
        t.exports = r
    }, function(t, e, n) {
        var r = n(572),
            o = Array.prototype;
        t.exports = function(t) {
            var e = t.sort;
            return t === o || t instanceof Array && e === o.sort ? r : e
        }
    }, function(t, e, n) {
        n(573);
        var r = n(19);
        t.exports = r("Array").sort
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(15),
            i = n(37),
            s = n(7),
            a = n(85),
            u = [],
            c = u.sort,
            l = s((function() {
                u.sort(void 0)
            })),
            f = s((function() {
                u.sort(null)
            })),
            h = a("sort");
        r({
            target: "Array",
            proto: !0,
            forced: l || !f || !h
        }, {
            sort: function(t) {
                return void 0 === t ? c.call(i(this)) : c.call(i(this), o(t))
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(25),
            o = n(575),
            i = n(14);
        n(6);
        var s = n(10);
        s(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = n(76);

        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), s(t, r.key, r)
            }
        }
        var c = function() {
            function t(e) {
                var n, r, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 256;
                if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), "string" == typeof e) this.key = (0, a.binaryStringToUint8Array)((r = 256, (n = e) + f.substring(0, r - n.length))), o = e.length;
                else {
                    if (!(e instanceof Uint8Array && 32 === e.length)) throw new TypeError("Invalid `bits` parameter");
                    this.key = i(e).call(e, 0)
                }
                this.bitLength = o, this.hexKey = (0, a.uint8ArrayToHexadecimal)(this.key)
            }
            var e, n;
            return e = t, (n = [{
                key: "isTerminal",
                value: function() {
                    return 256 === this.bitLength
                }
            }, {
                key: "bit",
                value: function(t) {
                    var e, n;
                    if (!((t = +t) >= this.bitLength || t < 0)) return n = (e = t) % 8, (this.key[Math.floor(e / 8)] & 1 << n) >> n
                }
            }, {
                key: "commonPrefixLength",
                value: function(t) {
                    var e, n = Math.min(this.bitLength, t.bitLength);
                    for (e = 0; e < n >> 3 && this.key[e >> 3] === t.key[e >> 3]; e += 8);
                    for (; e < n && this.bit(e) === t.bit(e); e++);
                    return e
                }
            }, {
                key: "commonPrefix",
                value: function(t) {
                    var e = this.commonPrefixLength(t);
                    return this.truncate(e)
                }
            }, {
                key: "startsWith",
                value: function(t) {
                    return this.commonPrefixLength(t) === t.bitLength
                }
            }, {
                key: "compare",
                value: function(t) {
                    var e = [this.bitLength, t.bitLength],
                        n = e[0],
                        r = e[1],
                        i = Math.min(n, r),
                        s = this.commonPrefixLength(t);
                    return s === i ? o(n - r) : this.bit(s) - t.bit(s)
                }
            }, {
                key: "truncate",
                value: function(e) {
                    var n;
                    if ((e = +e) > this.bitLength) throw new TypeError("Cannot truncate bit slice to length more than current " + r(n = "(current: ".concat(this.bitLength, ", requested: ")).call(n, e, ")"));
                    for (var o = new Uint8Array(32), i = 0; i < e >> 3; i++) o[i] = this.key[i];
                    for (var s = 8 * (e >> 3); s < e; s++) l(o, s, this.bit(s));
                    return new t(o, e)
                }
            }, {
                key: "serialize",
                value: function(t) {
                    this.bitLength < 128 ? t.push(this.bitLength) : t.push(128 + this.bitLength % 128, this.bitLength >> 7);
                    for (var e = 0; e < this.bitLength + 7 >> 3; e++) t.push(this.key[e])
                }
            }, {
                key: "toJSON",
                value: function() {
                    return h((0, a.hexadecimalToBinaryString)(this.hexKey), this.bitLength)
                }
            }, {
                key: "toString",
                value: function() {
                    var t = (0, a.hexadecimalToBinaryString)(this.hexKey);
                    return t = 8 < this.bitLength ? h(t, 8) + "..." : h(t, this.bitLength), "path(".concat(t, ")")
                }
            }]) && u(e.prototype, n), t
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
        var f = function() {
            for (var t = "0", e = 0; e < 8; e++) t += t;
            return t
        }();

        function h(t, e) {
            if (t.length < e) throw new Error("Invariant broken: negative zero trimming requested");
            return t.substring(0, e)
        }
    }, function(t, e, n) {
        t.exports = n(576)
    }, function(t, e, n) {
        var r = n(577);
        t.exports = r
    }, function(t, e, n) {
        n(578);
        var r = n(3);
        t.exports = r.Math.sign
    }, function(t, e, n) {
        n(0)({
            target: "Math",
            stat: !0
        }, {
            sign: n(579)
        })
    }, function(t, e) {
        t.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(162);
        n(6);
        var o = n(581),
            i = n(106),
            s = n(1),
            a = n(27),
            u = n(283);
        n(4), n(2);
        var c = n(121),
            l = n(72),
            f = n(73),
            h = n(10),
            p = n(52),
            d = n(13),
            y = n(40);

        function v(t) {
            return (v = "function" == typeof y && "symbol" === d(p) ? function(t) {
                return d(t)
            } : function(t) {
                return t && "function" == typeof y && t.constructor === y && t !== y.prototype ? "symbol" : d(t)
            })(t)
        }
        h(e, "__esModule", {
            value: !0
        }), e.verifyBlock = function(t, e) {
            var n, l = t.block,
                f = t.precommits,
                h = (0, x.cleanZeroValuedFields)(l, {}),
                p = ["prev_hash", "tx_hash", "state_hash", "error_hash"];
            s(p).call(p, (function(t) {
                h[t] = {
                    data: (0, m.hexadecimalToUint8Array)(h[t])
                }
            }));
            var d = i(n = o(l.additional_headers.headers)).call(n, (function(t) {
                var e, n = (2, function(t) {
                        if (a(t)) return t
                    }(e = t) || function(t, e) {
                        if (c(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var s, a = u(t); !(r = (s = a.next()).done) && (n.push(s.value), 2 !== n.length); r = !0);
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    r || null == a.return || a.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()),
                    r = n[0],
                    o = n[1];
                return {
                    key: r,
                    value: Uint8Array.from(o)
                }
            }));
            h.additional_headers = {
                headers: {
                    entries: d
                }
            };
            var y = k.encode(h).finish(),
                v = (0, b.hash)(y);
            if (f.length < function(t) {
                    return Math.floor(2 * t / 3) + 1
                }(e.length)) throw new Error("Insufficient number of precommits");
            for (var w = new r, O = 0; O < f.length; O++) {
                var S = _.Verified.deserialize(E, (0, m.hexadecimalToUint8Array)(f[O]));
                if (!S) throw new Error("Precommit signature is wrong");
                var P = S.payload.precommit;
                if (!P) throw new Error("Invalid message type (not a Precommit)");
                if (0 !== g.fromValue(P.height).compare(g.fromValue(l.height))) throw new Error("Precommit height does not match block height");
                if ((0, m.uint8ArrayToHexadecimal)(P.block_hash.data) !== v) throw new Error("Precommit block hash does not match calculated block hash");
                var A = P.validator || 0;
                if (w.has(A)) throw new Error("Double endorsement from a validator");
                w.add(A);
                var j = e[A];
                if (S.author !== j) throw new Error("Precommit public key does not match key of corresponding validator")
            }
        };
        var g = S(n(586)),
            _ = n(178),
            m = n(76),
            b = n(88),
            w = S(n(136)),
            x = n(179);

        function O() {
            if ("function" != typeof f) return null;
            var t = new f;
            return O = function() {
                return t
            }, t
        }

        function S(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== v(t) && "function" != typeof t) return {
                default: t
            };
            var e = O();
            if (e && e.has(t)) return e.get(t);
            var n = {},
                r = h && l;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? l(t, o) : null;
                    i && (i.get || i.set) ? h(n, o, i) : n[o] = t[o]
                } return n.default = t, e && e.set(t, n), n
        }
        var k = w.exonum.Block,
            E = w.exonum.CoreMessage
    }, function(t, e, n) {
        t.exports = n(582)
    }, function(t, e, n) {
        var r = n(583);
        t.exports = r
    }, function(t, e, n) {
        n(584);
        var r = n(3);
        t.exports = r.Object.entries
    }, function(t, e, n) {
        var r = n(0),
            o = n(585).entries;
        r({
            target: "Object",
            stat: !0
        }, {
            entries: function(t) {
                return o(t)
            }
        })
    }, function(t, e, n) {
        function r(t) {
            return function(e) {
                for (var n, r = s(e), u = i(r), c = u.length, l = 0, f = []; l < c;) n = u[l++], o && !a.call(r, n) || f.push(t ? [n, r[n]] : r[n]);
                return f
            }
        }
        var o = n(22),
            i = n(97),
            s = n(47),
            a = n(113).f;
        t.exports = {
            entries: r(!0),
            values: r(!1)
        }
    }, function(t, e, n) {
        n(587), n(4), n(2);
        var r = n(31),
            o = n(28),
            i = n(10);
        n(6), t.exports = a;
        var s = null;
        try {
            s = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
        } catch (t) {}

        function a(t, e, n) {
            this.low = 0 | t, this.high = 0 | e, this.unsigned = !!n
        }

        function u(t) {
            return !0 === (t && t.__isLong__)
        }
        i(a.prototype, "__isLong__", {
            value: !0
        }), a.isLong = u;
        var c = {},
            l = {};

        function f(t, e) {
            var n, r, o;
            return e ? (o = 0 <= (t >>>= 0) && t < 256) && (r = l[t]) ? r : (n = p(t, (0 | t) < 0 ? -1 : 0, !0), o && (l[t] = n), n) : (o = -128 <= (t |= 0) && t < 128) && (r = c[t]) ? r : (n = p(t, t < 0 ? -1 : 0, !1), o && (c[t] = n), n)
        }

        function h(t, e) {
            if (isNaN(t)) return e ? x : w;
            if (e) {
                if (t < 0) return x;
                if (_ <= t) return P
            } else {
                if (t <= -m) return A;
                if (m <= t + 1) return E
            }
            return t < 0 ? h(-t, e).neg() : p(t % g | 0, t / g | 0, e)
        }

        function p(t, e, n) {
            return new a(t, e, n)
        }
        a.fromInt = f, a.fromNumber = h, a.fromBits = p;
        var d = Math.pow;

        function y(t, e, n) {
            if (0 === t.length) throw Error("empty string");
            if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t) return w;
            if (e = "number" == typeof e ? (n = e, !1) : !!e, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
            var i;
            if (0 < (i = o(t).call(t, "-"))) throw Error("interior hyphen");
            if (0 === i) return y(t.substring(1), e, n).neg();
            for (var s = h(d(n, 8)), a = w, u = 0; u < t.length; u += 8) {
                var c = Math.min(8, t.length - u),
                    l = r(t.substring(u, u + c), n);
                if (c < 8) {
                    var f = h(d(n, c));
                    a = a.mul(f).add(h(l))
                } else a = (a = a.mul(s)).add(h(l))
            }
            return a.unsigned = e, a
        }

        function v(t, e) {
            return "number" == typeof t ? h(t, e) : "string" == typeof t ? y(t, e) : p(t.low, t.high, "boolean" == typeof e ? e : t.unsigned)
        }
        a.fromString = y, a.fromValue = v;
        var g = 4294967296,
            _ = g * g,
            m = _ / 2,
            b = f(1 << 24),
            w = f(0);
        a.ZERO = w;
        var x = f(0, !0);
        a.UZERO = x;
        var O = f(1);
        a.ONE = O;
        var S = f(1, !0);
        a.UONE = S;
        var k = f(-1);
        a.NEG_ONE = k;
        var E = p(-1, 2147483647, !1);
        a.MAX_VALUE = E;
        var P = p(-1, -1, !0);
        a.MAX_UNSIGNED_VALUE = P;
        var A = p(0, -2147483648, !1);
        a.MIN_VALUE = A;
        var j = a.prototype;
        j.toInt = function() {
            return this.unsigned ? this.low >>> 0 : this.low
        }, j.toNumber = function() {
            return this.unsigned ? (this.high >>> 0) * g + (this.low >>> 0) : this.high * g + (this.low >>> 0)
        }, j.toString = function(t) {
            if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
                if (this.eq(A)) {
                    var e = h(t),
                        n = this.div(e),
                        r = n.mul(e).sub(this);
                    return n.toString(t) + r.toInt().toString(t)
                }
                return "-" + this.neg().toString(t)
            }
            for (var o = h(d(t, 6), this.unsigned), i = this, s = "";;) {
                var a = i.div(o),
                    u = (i.sub(a.mul(o)).toInt() >>> 0).toString(t);
                if ((i = a).isZero()) return u + s;
                for (; u.length < 6;) u = "0" + u;
                s = "" + u + s
            }
        }, j.getHighBits = function() {
            return this.high
        }, j.getHighBitsUnsigned = function() {
            return this.high >>> 0
        }, j.getLowBits = function() {
            return this.low
        }, j.getLowBitsUnsigned = function() {
            return this.low >>> 0
        }, j.getNumBitsAbs = function() {
            if (this.isNegative()) return this.eq(A) ? 64 : this.neg().getNumBitsAbs();
            for (var t = 0 != this.high ? this.high : this.low, e = 31; 0 < e && 0 == (t & 1 << e); e--);
            return 0 != this.high ? e + 33 : e + 1
        }, j.isZero = function() {
            return 0 === this.high && 0 === this.low
        }, j.eqz = j.isZero, j.isNegative = function() {
            return !this.unsigned && this.high < 0
        }, j.isPositive = function() {
            return this.unsigned || 0 <= this.high
        }, j.isOdd = function() {
            return 1 == (1 & this.low)
        }, j.isEven = function() {
            return 0 == (1 & this.low)
        }, j.equals = function(t) {
            return u(t) || (t = v(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
        }, j.eq = j.equals, j.notEquals = function(t) {
            return !this.eq(t)
        }, j.neq = j.notEquals, j.ne = j.notEquals, j.lessThan = function(t) {
            return this.comp(t) < 0
        }, j.lt = j.lessThan, j.lessThanOrEqual = function(t) {
            return this.comp(t) <= 0
        }, j.lte = j.lessThanOrEqual, j.le = j.lessThanOrEqual, j.greaterThan = function(t) {
            return 0 < this.comp(t)
        }, j.gt = j.greaterThan, j.greaterThanOrEqual = function(t) {
            return 0 <= this.comp(t)
        }, j.gte = j.greaterThanOrEqual, j.ge = j.greaterThanOrEqual, j.compare = function(t) {
            if (u(t) || (t = v(t)), this.eq(t)) return 0;
            var e = this.isNegative(),
                n = t.isNegative();
            return e && !n ? -1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
        }, j.comp = j.compare, j.negate = function() {
            return !this.unsigned && this.eq(A) ? A : this.not().add(O)
        }, j.neg = j.negate, j.add = function(t) {
            u(t) || (t = v(t));
            var e = this.high >>> 16,
                n = 65535 & this.high,
                r = this.low >>> 16,
                o = 65535 & this.low,
                i = t.high >>> 16,
                s = 65535 & t.high,
                a = t.low >>> 16,
                c = 0,
                l = 0,
                f = 0,
                h = 0;
            return f += (h += o + (65535 & t.low)) >>> 16, l += (f += r + a) >>> 16, c += (l += n + s) >>> 16, c += e + i, p((f &= 65535) << 16 | (h &= 65535), (c &= 65535) << 16 | (l &= 65535), this.unsigned)
        }, j.subtract = function(t) {
            return u(t) || (t = v(t)), this.add(t.neg())
        }, j.sub = j.subtract, j.multiply = function(t) {
            if (this.isZero()) return w;
            if (u(t) || (t = v(t)), s) return p(s.mul(this.low, this.high, t.low, t.high), s.get_high(), this.unsigned);
            if (t.isZero()) return w;
            if (this.eq(A)) return t.isOdd() ? A : w;
            if (t.eq(A)) return this.isOdd() ? A : w;
            if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
            if (t.isNegative()) return this.mul(t.neg()).neg();
            if (this.lt(b) && t.lt(b)) return h(this.toNumber() * t.toNumber(), this.unsigned);
            var e = this.high >>> 16,
                n = 65535 & this.high,
                r = this.low >>> 16,
                o = 65535 & this.low,
                i = t.high >>> 16,
                a = 65535 & t.high,
                c = t.low >>> 16,
                l = 65535 & t.low,
                f = 0,
                d = 0,
                y = 0,
                g = 0;
            return y += (g += o * l) >>> 16, d += (y += r * l) >>> 16, y &= 65535, d += (y += o * c) >>> 16, f += (d += n * l) >>> 16, d &= 65535, f += (d += r * c) >>> 16, d &= 65535, f += (d += o * a) >>> 16, f += e * l + n * c + r * a + o * i, p((y &= 65535) << 16 | (g &= 65535), (f &= 65535) << 16 | (d &= 65535), this.unsigned)
        }, j.mul = j.multiply, j.divide = function(t) {
            if (u(t) || (t = v(t)), t.isZero()) throw Error("division by zero");
            var e, n, r;
            if (s) return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? p((this.unsigned ? s.div_u : s.div_s)(this.low, this.high, t.low, t.high), s.get_high(), this.unsigned) : this;
            if (this.isZero()) return this.unsigned ? x : w;
            if (this.unsigned) {
                if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return x;
                if (t.gt(this.shru(1))) return S;
                r = x
            } else {
                if (this.eq(A)) return t.eq(O) || t.eq(k) ? A : t.eq(A) ? O : (e = this.shr(1).div(t).shl(1)).eq(w) ? t.isNegative() ? O : k : (n = this.sub(t.mul(e)), r = e.add(n.div(t)));
                if (t.eq(A)) return this.unsigned ? x : w;
                if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
                if (t.isNegative()) return this.div(t.neg()).neg();
                r = w
            }
            for (n = this; n.gte(t);) {
                e = Math.max(1, Math.floor(n.toNumber() / t.toNumber()));
                for (var o = Math.ceil(Math.log(e) / Math.LN2), i = o <= 48 ? 1 : d(2, o - 48), a = h(e), c = a.mul(t); c.isNegative() || c.gt(n);) c = (a = h(e -= i, this.unsigned)).mul(t);
                a.isZero() && (a = O), r = r.add(a), n = n.sub(c)
            }
            return r
        }, j.div = j.divide, j.modulo = function(t) {
            return u(t) || (t = v(t)), s ? p((this.unsigned ? s.rem_u : s.rem_s)(this.low, this.high, t.low, t.high), s.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
        }, j.mod = j.modulo, j.rem = j.modulo, j.not = function() {
            return p(~this.low, ~this.high, this.unsigned)
        }, j.and = function(t) {
            return u(t) || (t = v(t)), p(this.low & t.low, this.high & t.high, this.unsigned)
        }, j.or = function(t) {
            return u(t) || (t = v(t)), p(this.low | t.low, this.high | t.high, this.unsigned)
        }, j.xor = function(t) {
            return u(t) || (t = v(t)), p(this.low ^ t.low, this.high ^ t.high, this.unsigned)
        }, j.shiftLeft = function(t) {
            return u(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? p(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : p(0, this.low << t - 32, this.unsigned)
        }, j.shl = j.shiftLeft, j.shiftRight = function(t) {
            return u(t) && (t = t.toInt()), 0 == (t &= 63) ? this : t < 32 ? p(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : p(this.high >> t - 32, 0 <= this.high ? 0 : -1, this.unsigned)
        }, j.shr = j.shiftRight, j.shiftRightUnsigned = function(t) {
            if (u(t) && (t = t.toInt()), 0 == (t &= 63)) return this;
            var e = this.high;
            return t < 32 ? p(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : p(32 === t ? e : e >>> t - 32, 0, this.unsigned)
        }, j.shru = j.shiftRightUnsigned, j.shr_u = j.shiftRightUnsigned, j.toSigned = function() {
            return this.unsigned ? p(this.low, this.high, !1) : this
        }, j.toUnsigned = function() {
            return this.unsigned ? this : p(this.low, this.high, !0)
        }, j.toBytes = function(t) {
            return t ? this.toBytesLE() : this.toBytesBE()
        }, j.toBytesLE = function() {
            var t = this.high,
                e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
        }, j.toBytesBE = function() {
            var t = this.high,
                e = this.low;
            return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }, a.fromBytes = function(t, e, n) {
            return n ? a.fromBytesLE(t, e) : a.fromBytesBE(t, e)
        }, a.fromBytesLE = function(t, e) {
            return new a(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e)
        }, a.fromBytesBE = function(t, e) {
            return new a(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e)
        }
    }, function(t, e, n) {
        "use strict";
        n(588)("sub", (function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        }))
    }, function(t, e, n) {
        function r(t, e, n, r) {
            var o = String(s(t)),
                i = "<" + e;
            return "" !== n && (i += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), i + ">" + o + "</" + e + ">"
        }
        var o = n(49),
            i = n(29),
            s = n(69),
            a = /"/g;
        t.exports = function(t, e) {
            var n = {};
            n[t] = e(r), o(o.P + o.F * i((function() {
                var e = "" [t]('"');
                return e !== e.toLowerCase() || 3 < e.split('"').length
            })), "String", n)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(25);
        n(6);
        var o = n(107),
            i = n(590),
            s = n(23);
        n(10)(e, "__esModule", {
            value: !0
        }), e.send = p, e.sendQueue = function(t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : f,
                r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : h,
                o = 0,
                i = [];
            return function s() {
                var a = e[o++];
                return p(t, a, n, r).then((function(t) {
                    return i.push(t), o < e.length ? s() : i
                }))
            }()
        };
        var a, u = (a = n(592)) && a.__esModule ? a : {
                default: a
            },
            c = n(76);

        function l(t, e, n, r, o, i, a) {
            try {
                var u = t[i](a),
                    c = u.value
            } catch (t) {
                return void n(t)
            }
            u.done ? e(c) : s.resolve(c).then(r, o)
        }
        var f = 10,
            h = 500;

        function p(t, e) {
            return d.apply(this, arguments)
        }

        function d() {
            var t;
            return t = i.mark((function t(e, n) {
                var a, l, p, d, y, v, g, _ = arguments;
                return i.wrap((function(t) {
                    for (var i;;) switch (t.prev = t.next) {
                        case 0:
                            if (p = function(t) {
                                    return new s((function(e) {
                                        o(e, t)
                                    }))
                                }, a = 2 < _.length && void 0 !== _[2] ? _[2] : f, l = 3 < _.length && void 0 !== _[3] ? _[3] : h, "string" != typeof e) throw new TypeError("Explorer base path endpoint of wrong data type is passed. String is required.");
                            t.next = 5;
                            break;
                        case 5:
                            return a = +a, l = +l, "string" != typeof n && (n = (0, c.uint8ArrayToHexadecimal)(new Uint8Array(n))), t.next = 10, u.default.post("".concat(e), {
                                tx_body: n
                            });
                        case 10:
                            d = t.sent, y = d.data.tx_hash, v = a, g = !1;
                        case 14:
                            if (0 <= v) return t.prev = 15, t.next = 18, u.default.get(r(i = "".concat(e, "?hash=")).call(i, y));
                            t.next = 32;
                            break;
                        case 18:
                            if ("committed" === t.sent.data.type) return t.abrupt("return", y);
                            t.next = 21;
                            break;
                        case 21:
                            g = !1, t.next = 27;
                            break;
                        case 24:
                            t.prev = 24, t.t0 = t.catch(15), g = !0;
                        case 27:
                            return v--, t.next = 30, p(l);
                        case 30:
                            t.next = 14;
                            break;
                        case 32:
                            if (g) throw new Error("The request failed or the blockchain node did not respond.");
                            t.next = 36;
                            break;
                        case 36:
                            throw new Error("The transaction was not accepted to the block for the expected period.");
                        case 37:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [15, 24]
                ])
            })), (d = function() {
                var e = this,
                    n = arguments;
                return new s((function(r, o) {
                    var i = t.apply(e, n);

                    function s(t) {
                        l(i, r, o, s, a, "next", t)
                    }

                    function a(t) {
                        l(i, r, o, s, a, "throw", t)
                    }
                    s(void 0)
                }))
            }).apply(this, arguments)
        }
    }, function(t, e, n) {
        t.exports = n(591)
    }, function(t, e, n) {
        (function(t) {
            var e = n(14),
                r = n(82);
            n(86), n(62), n(4), n(2);
            var o = n(23),
                i = n(13),
                s = n(181),
                a = n(1),
                u = n(135),
                c = n(21),
                l = n(40),
                f = function(t) {
                    "use strict";
                    var n, f = Object.prototype,
                        h = f.hasOwnProperty,
                        p = "function" == typeof l ? l : {},
                        d = p.iterator || "@@iterator",
                        y = p.asyncIterator || "@@asyncIterator",
                        v = p.toStringTag || "@@toStringTag";

                    function g(t, e, n, r) {
                        var o, i, s, a, u = e && e.prototype instanceof S ? e : S,
                            l = c(u.prototype),
                            f = new N(r || []);
                        return l._invoke = (o = t, i = n, s = f, a = m, function(t, e) {
                            if (a === w) throw new Error("Generator is already running");
                            if (a === x) {
                                if ("throw" === t) throw e;
                                return U()
                            }
                            for (s.method = t, s.arg = e;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = R(n, s);
                                    if (r) {
                                        if (r === O) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if (a === m) throw a = x, s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                a = w;
                                var u = _(o, i, s);
                                if ("normal" === u.type) {
                                    if (a = s.done ? x : b, u.arg === O) continue;
                                    return {
                                        value: u.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === u.type && (a = x, s.method = "throw", s.arg = u.arg)
                            }
                        }), l
                    }

                    function _(t, e, n) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, n)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = g;
                    var m = "suspendedStart",
                        b = "suspendedYield",
                        w = "executing",
                        x = "completed",
                        O = {};

                    function S() {}

                    function k() {}

                    function E() {}
                    var P = {};
                    P[d] = function() {
                        return this
                    };
                    var A = u && u(u(C([])));
                    A && A !== f && h.call(A, d) && (P = A);
                    var j = E.prototype = S.prototype = c(P);

                    function T(t) {
                        var e;
                        a(e = ["next", "throw", "return"]).call(e, (function(e) {
                            t[e] = function(t) {
                                return this._invoke(e, t)
                            }
                        }))
                    }

                    function B(t, e) {
                        var n;
                        this._invoke = function(r, o) {
                            function s() {
                                return new e((function(n, s) {
                                    ! function n(r, o, s, a) {
                                        var u = _(t[r], t, o);
                                        if ("throw" !== u.type) {
                                            var c = u.arg,
                                                l = c.value;
                                            return l && "object" === i(l) && h.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                                n("next", t, s, a)
                                            }), (function(t) {
                                                n("throw", t, s, a)
                                            })) : e.resolve(l).then((function(t) {
                                                c.value = t, s(c)
                                            }), (function(t) {
                                                return n("throw", t, s, a)
                                            }))
                                        }
                                        a(u.arg)
                                    }(r, o, n, s)
                                }))
                            }
                            return n = n ? n.then(s, s) : s()
                        }
                    }

                    function R(t, e) {
                        var r = t.iterator[e.method];
                        if (r === n) {
                            if (e.delegate = null, "throw" === e.method) {
                                if (t.iterator.return && (e.method = "return", e.arg = n, R(t, e), "throw" === e.method)) return O;
                                e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return O
                        }
                        var o = _(r, t.iterator, e.arg);
                        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, O;
                        var i = o.arg;
                        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, O) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, O)
                    }

                    function L(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function I(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function N(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], a(t).call(t, L, this), this.reset(!0)
                    }

                    function C(t) {
                        if (t) {
                            var e = t[d];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var r = -1,
                                    o = function e() {
                                        for (; ++r < t.length;)
                                            if (h.call(t, r)) return e.value = t[r], e.done = !1, e;
                                        return e.value = n, e.done = !0, e
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: U
                        }
                    }

                    function U() {
                        return {
                            value: n,
                            done: !0
                        }
                    }
                    return k.prototype = j.constructor = E, E.constructor = k, E[v] = k.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === k || "GeneratorFunction" === (e.displayName || e.name))
                    }, t.mark = function(t) {
                        return s ? s(t, E) : (t.__proto__ = E, v in t || (t[v] = "GeneratorFunction")), t.prototype = c(j), t
                    }, t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, T(B.prototype), B.prototype[y] = function() {
                        return this
                    }, t.AsyncIterator = B, t.async = function(e, n, r, i, s) {
                        void 0 === s && (s = o);
                        var a = new B(g(e, n, r, i), s);
                        return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                            return t.done ? t.value : a.next()
                        }))
                    }, T(j), j[v] = "Generator", j[d] = function() {
                        return this
                    }, j.toString = function() {
                        return "[object Generator]"
                    }, t.keys = function(t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return r(e).call(e),
                            function n() {
                                for (; e.length;) {
                                    var r = e.pop();
                                    if (r in t) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, t.values = C, N.prototype = {
                        constructor: N,
                        reset: function(t) {
                            var r;
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, a(r = this.tryEntries).call(r, I), !t)
                                for (var o in this) "t" === o.charAt(0) && h.call(this, o) && !isNaN(+e(o).call(o, 1)) && (this[o] = n)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var e = this;

                            function r(r, o) {
                                return s.type = "throw", s.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o
                            }
                            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                                var i = this.tryEntries[o],
                                    s = i.completion;
                                if ("root" === i.tryLoc) return r("end");
                                if (i.tryLoc <= this.prev) {
                                    var a = h.call(i, "catchLoc"),
                                        u = h.call(i, "finallyLoc");
                                    if (a && u) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var r = this.tryEntries[n];
                                if (r.tryLoc <= this.prev && h.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var o = r;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, O) : this.complete(i)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), O
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), I(n), O
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        I(n)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, e, r) {
                            return this.delegate = {
                                iterator: C(t),
                                resultName: e,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = n), O
                        }
                    }, t
                }("object" === i(t) ? t.exports : {});
            try {
                regeneratorRuntime = f
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(f)
            }
        }).call(this, n(166)(t))
    }, function(t, e, n) {
        t.exports = n(593)
    }, function(t, e, n) {
        "use strict";
        var r = n(23);
        n(86), n(62), n(2), n(246);
        var o = n(34),
            i = n(291),
            s = n(594),
            a = n(297);

        function u(t) {
            var e = new s(t),
                n = i(s.prototype.request, e);
            return o.extend(n, s.prototype, e), o.extend(n, e), n
        }
        var c = u(n(294));
        c.Axios = s, c.create = function(t) {
            return u(a(c.defaults, t))
        }, c.Cancel = n(298), c.CancelToken = n(607), c.isCancel = n(293), c.all = function(t) {
            return r.all(t)
        }, c.spread = n(608), t.exports = c, t.exports.default = c
    }, function(t, e, n) {
        "use strict";
        n(33);
        var r = n(1),
            o = n(23),
            i = n(34),
            s = n(292),
            a = n(595),
            u = n(596),
            c = n(297);

        function l(t) {
            this.defaults = t, this.interceptors = {
                request: new a,
                response: new a
            }
        }
        l.prototype.request = function(t, e) {
            var n, i;
            "string" == typeof t ? (t = e || {}).url = arguments[0] : t = t || {}, (t = c(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
            var s = [u, void 0],
                a = o.resolve(t);
            for (r(n = this.interceptors.request).call(n, (function(t) {
                    s.unshift(t.fulfilled, t.rejected)
                })), r(i = this.interceptors.response).call(i, (function(t) {
                    s.push(t.fulfilled, t.rejected)
                })); s.length;) a = a.then(s.shift(), s.shift());
            return a
        }, l.prototype.getUri = function(t) {
            return t = c(this.defaults, t), s(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        }, r(i).call(i, ["delete", "get", "head", "options"], (function(t) {
            l.prototype[t] = function(e, n) {
                return this.request(i.merge(n || {}, {
                    method: t,
                    url: e
                }))
            }
        })), r(i).call(i, ["post", "put", "patch"], (function(t) {
            l.prototype[t] = function(e, n, r) {
                return this.request(i.merge(r || {}, {
                    method: t,
                    url: e,
                    data: n
                }))
            }
        })), t.exports = l
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(34);

        function i() {
            this.handlers = []
        }
        i.prototype.use = function(t, e) {
            return this.handlers.push({
                fulfilled: t,
                rejected: e
            }), this.handlers.length - 1
        }, i.prototype.eject = function(t) {
            this.handlers[t] && (this.handlers[t] = null)
        }, i.prototype.forEach = function(t) {
            r(o).call(o, this.handlers, (function(e) {
                null !== e && t(e)
            }))
        }, t.exports = i
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = n(1),
            i = n(34),
            s = n(597),
            a = n(293),
            u = n(294);

        function c(t) {
            t.cancelToken && t.cancelToken.throwIfRequested()
        }
        t.exports = function(t) {
            return c(t), t.headers = t.headers || {}, t.data = s(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), o(i).call(i, ["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                delete t.headers[e]
            })), (t.adapter || u.adapter)(t).then((function(e) {
                return c(t), e.data = s(e.data, e.headers, t.transformResponse), e
            }), (function(e) {
                return a(e) || (c(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), r.reject(e)
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(34);
        t.exports = function(t, e, n) {
            return r(o).call(o, n, (function(n) {
                t = n(t, e)
            })), t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            o = n(34);
        t.exports = function(t, e) {
            r(o).call(o, t, (function(n, r) {
                r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(296);
        t.exports = function(t, e, n) {
            var o = n.config.validateStatus;
            !o || o(n.status) ? t(n) : e(r("Request failed with status code " + n.status, n.config, null, n.request, n))
        }
    }, function(t, e, n) {
        "use strict";
        n(87), t.exports = function(t, e, n, r, o) {
            return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
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
            }, t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(602),
            o = n(603);
        t.exports = function(t, e) {
            return t && !r(e) ? o(t, e) : e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
        }
    }, function(t, e, n) {
        "use strict";
        n(33), t.exports = function(t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(25),
            o = n(174),
            i = n(28);
        n(108);
        var s = n(1),
            a = n(34),
            u = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(t) {
            var e, n, c, l = {};
            return t && s(a).call(a, t.split("\n"), (function(t) {
                if (c = i(t).call(t, ":"), e = o(a).call(a, t.substr(0, c)).toLowerCase(), n = o(a).call(a, t.substr(c + 1)), e) {
                    if (l[e] && 0 <= i(u).call(u, e)) return;
                    var s;
                    l[e] = "set-cookie" === e ? r(s = l[e] ? l[e] : []).call(s, [n]) : l[e] ? l[e] + ", " + n : n
                }
            })), l
        }
    }, function(t, e, n) {
        "use strict";
        n(259), n(33);
        var r, o, i, s = n(34);

        function a(t) {
            var e = t;
            return o && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
        t.exports = s.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), r = a(window.location.href), function(t) {
            var e = s.isString(t) ? a(t) : t;
            return e.protocol === r.protocol && e.host === r.host
        }) : function() {
            return !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(256);
        n(257), n(173);
        var o = n(34);
        t.exports = o.isStandardBrowserEnv() ? {
            write: function(t, e, n, r, i, s) {
                var a = [];
                a.push(t + "=" + encodeURIComponent(e)), o.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), o.isString(r) && a.push("path=" + r), o.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function(t) {
                this.write(t, "", r() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            o = n(298);

        function i(t) {
            if ("function" != typeof t) throw new TypeError("executor must be a function.");
            var e;
            this.promise = new r((function(t) {
                e = t
            }));
            var n = this;
            t((function(t) {
                n.reason || (n.reason = new o(t), e(n.reason))
            }))
        }
        i.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, i.source = function() {
            var t;
            return {
                token: new i((function(e) {
                    t = e
                })),
                cancel: t
            }
        }, t.exports = i
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return function(e) {
                return t.apply(null, e)
            }
        }
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n(137);
            n(10)(e, "__esModule", {
                value: !0
            }), e.verifyTable = function(e, n, s) {
                var a = {
                        serialize: function(e) {
                            return t.from(e)
                        }
                    },
                    u = new i.MapProof(e, a, o.Hash);
                if (u.merkleRoot !== n) throw new Error("Table proof is corrupted");
                var c = r(u).get(s);
                if (void 0 !== c) return c;
                throw new Error("Table not found in the root tree")
            };
            var o = n(140),
                i = n(290)
        }).call(this, n(279).Buffer)
    }, function(t, e, n) {
        var r = n(111),
            o = n(45),
            i = n(182),
            s = n(184),
            a = n(141);
        var u = function(t) {
            "use strict";
            i(n, t);
            var e = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !r) return !1;
                    if (r.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(r(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = a(t);
                    if (e) {
                        var i = a(this).constructor;
                        n = r(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return s(this, n)
                }
            }(n);

            function n(t, r) {
                var i;
                return o(this, n), (i = e.call(this, r)).rawTx = t, i
            }
            return n
        }(n(185)(Error));
        t.exports = u
    }, function(t, e, n) {
        var r = n(264);
        t.exports = r
    }, function(t, e, n) {
        var r = n(284);
        t.exports = r
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, function(t, e, n) {
        t.exports = n(615)
    }, function(t, e, n) {
        var r = n(248);
        t.exports = r
    }, function(t, e, n) {
        t.exports = n(617)
    }, function(t, e, n) {
        var r = n(287);
        n(618), n(620), n(622), n(624), n(625), n(626), n(627), n(628), n(629), n(631), n(632), n(633), n(634), n(635), n(636), n(637), n(638), n(639), n(640), t.exports = r
    }, function(t, e, n) {
        n(0)({
            target: "Map",
            stat: !0
        }, {
            from: n(619)
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(15),
            o = n(24),
            i = n(16);
        t.exports = function(t, e, n) {
            var s, a, u, c, l = arguments.length,
                f = 1 < l ? e : void 0;
            return r(this), (s = void 0 !== f) && r(f), null == t ? new this : (a = [], s ? (u = 0, c = o(f, 2 < l ? n : void 0, 2), i(t, (function(t) {
                a.push(c(t, u++))
            }))) : i(t, a.push, a), new this(a))
        }
    }, function(t, e, n) {
        n(0)({
            target: "Map",
            stat: !0
        }, {
            of: n(621)
        })
    }, function(t, e, n) {
        "use strict";
        t.exports = function() {
            for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
            return new this(e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(623);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            deleteAll: function() {
                return i.apply(this, arguments)
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            o = n(15);
        t.exports = function() {
            for (var t, e = r(this), n = o(e.delete), i = !0, s = 0, a = arguments.length; s < a; s++) t = n.call(e, arguments[s]), i = i && t;
            return !!i
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(24),
            a = n(53),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            every: function(t, e) {
                var n = i(this),
                    r = a(n),
                    o = s(t, 1 < arguments.length ? e : void 0, 3);
                return !u(r, (function(t, e) {
                    if (!o(e, t, n)) return u.stop()
                }), void 0, !0, !0).stopped
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(38),
            s = n(5),
            a = n(15),
            u = n(24),
            c = n(110),
            l = n(53),
            f = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            filter: function(t, e) {
                var n = s(this),
                    r = l(n),
                    o = u(t, 1 < arguments.length ? e : void 0, 3),
                    h = new(c(n, i("Map"))),
                    p = a(h.set);
                return f(r, (function(t, e) {
                    o(e, t, n) && p.call(h, t, e)
                }), void 0, !0, !0), h
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(24),
            a = n(53),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            find: function(t, e) {
                var n = i(this),
                    r = a(n),
                    o = s(t, 1 < arguments.length ? e : void 0, 3);
                return u(r, (function(t, e) {
                    if (o(e, t, n)) return u.stop(e)
                }), void 0, !0, !0).result
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(24),
            a = n(53),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            findKey: function(t, e) {
                var n = i(this),
                    r = a(n),
                    o = s(t, 1 < arguments.length ? e : void 0, 3);
                return u(r, (function(t, e) {
                    if (o(e, t, n)) return u.stop(t)
                }), void 0, !0, !0).result
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(16),
            i = n(15);
        r({
            target: "Map",
            stat: !0
        }, {
            groupBy: function(t, e) {
                var n = new this;
                i(e);
                var r = i(n.has),
                    s = i(n.get),
                    a = i(n.set);
                return o(t, (function(t) {
                    var o = e(t);
                    r.call(n, o) ? s.call(n, o).push(t) : a.call(n, o, [t])
                })), n
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(53),
            a = n(630),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            includes: function(t) {
                return u(s(i(this)), (function(e, n) {
                    if (a(n, t)) return u.stop()
                }), void 0, !0, !0).stopped
            }
        })
    }, function(t, e) {
        t.exports = function(t, e) {
            return t === e || t != t && e != e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(16),
            i = n(15);
        r({
            target: "Map",
            stat: !0
        }, {
            keyBy: function(t, e) {
                var n = new this;
                i(e);
                var r = i(n.set);
                return o(t, (function(t) {
                    r.call(n, e(t), t)
                })), n
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(53),
            a = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            keyOf: function(t) {
                return a(s(i(this)), (function(e, n) {
                    if (n === t) return a.stop(e)
                }), void 0, !0, !0).result
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(38),
            s = n(5),
            a = n(15),
            u = n(24),
            c = n(110),
            l = n(53),
            f = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            mapKeys: function(t, e) {
                var n = s(this),
                    r = l(n),
                    o = u(t, 1 < arguments.length ? e : void 0, 3),
                    h = new(c(n, i("Map"))),
                    p = a(h.set);
                return f(r, (function(t, e) {
                    p.call(h, o(e, t, n), e)
                }), void 0, !0, !0), h
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(38),
            s = n(5),
            a = n(15),
            u = n(24),
            c = n(110),
            l = n(53),
            f = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            mapValues: function(t, e) {
                var n = s(this),
                    r = l(n),
                    o = u(t, 1 < arguments.length ? e : void 0, 3),
                    h = new(c(n, i("Map"))),
                    p = a(h.set);
                return f(r, (function(t, e) {
                    p.call(h, t, o(e, t, n))
                }), void 0, !0, !0), h
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(15),
            a = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            merge: function(t) {
                for (var e = i(this), n = s(e.set), r = 0; r < arguments.length;) a(arguments[r++], n, e, !0);
                return e
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(15),
            a = n(53),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            reduce: function(t, e) {
                var n = i(this),
                    r = a(n),
                    o = arguments.length < 2,
                    c = o ? void 0 : e;
                if (s(t), u(r, (function(e, r) {
                        c = o ? (o = !1, r) : t(c, r, e, n)
                    }), void 0, !0, !0), o) throw TypeError("Reduce of empty map with no initial value");
                return c
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(24),
            a = n(53),
            u = n(16);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            some: function(t, e) {
                var n = i(this),
                    r = a(n),
                    o = s(t, 1 < arguments.length ? e : void 0, 3);
                return u(r, (function(t, e) {
                    if (o(e, t, n)) return u.stop()
                }), void 0, !0, !0).stopped
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            o = n(8),
            i = n(5),
            s = n(15);
        r({
            target: "Map",
            proto: !0,
            real: !0,
            forced: o
        }, {
            update: function(t, e, n) {
                var r = i(this),
                    o = arguments.length;
                s(e);
                var a = r.has(t);
                if (!a && o < 3) throw TypeError("Updating absent value");
                var u = a ? r.get(t) : s(2 < o ? n : void 0)(t, r);
                return r.set(t, e(u, t, r)), r
            }
        })
    }, function(t, e, n) {
        "use strict";
        n(0)({
            target: "Map",
            proto: !0,
            real: !0,
            forced: n(8)
        }, {
            upsert: n(302)
        })
    }, function(t, e, n) {
        "use strict";
        n(0)({
            target: "Map",
            proto: !0,
            real: !0,
            forced: n(8)
        }, {
            updateOrInsert: n(302)
        })
    }, function(t, e, n) {
        var r = n(642);
        t.exports = function(t) {
            var e;
            return -1 !== r(e = Function.toString.call(t)).call(e, "[native code]")
        }
    }, function(t, e, n) {
        t.exports = n(643)
    }, function(t, e, n) {
        var r = n(251);
        t.exports = r
    }, function(t, e, n) {
        var r = n(645),
            o = n(647),
            i = n(183);

        function s(e, n, a) {
            return function() {
                if ("undefined" != typeof Reflect && o && !o.sham) {
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(o(Date, [], (function() {}))), 1
                    } catch (t) {
                        return
                    }
                }
            }() ? t.exports = s = o : t.exports = s = function(t, e, n) {
                var o = [null];
                o.push.apply(o, e);
                var s = new(r(Function).apply(t, o));
                return n && i(s, n.prototype), s
            }, s.apply(null, arguments)
        }
        t.exports = s
    }, function(t, e, n) {
        t.exports = n(646)
    }, function(t, e, n) {
        var r = n(270);
        t.exports = r
    }, function(t, e, n) {
        t.exports = n(648)
    }, function(t, e, n) {
        var r = n(285);
        t.exports = r
    }, function(t, e, n) {
        var r = n(111),
            o = n(45),
            i = n(51),
            s = n(182),
            a = n(184),
            u = n(141);

        function c(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !r) return !1;
                if (r.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(r(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = u(t);
                if (e) {
                    var i = u(this).constructor;
                    n = r(o, arguments, i)
                } else n = o.apply(this, arguments);
                return a(this, n)
            }
        }
        var l = function(t) {
            "use strict";
            s(n, t);
            var e = c(n);

            function n(t, r, i) {
                var s;
                return o(this, n), (s = e.call(this, r)).errorCode = t, s.txHash = i, s
            }
            return i(n, [{
                key: "code",
                get: function() {
                    return this.errorCode
                }
            }, {
                key: "transactionHash",
                get: function() {
                    return this.txHash
                }
            }]), n
        }(n(185)(Error));
        t.exports = l
    }, function(t, e, n) {
        var r = n(111),
            o = n(45),
            i = n(51),
            s = n(182),
            a = n(184),
            u = n(141);
        var c = function(t) {
            "use strict";
            s(n, t);
            var e = function(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !r) return !1;
                    if (r.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(r(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = u(t);
                    if (e) {
                        var i = u(this).constructor;
                        n = r(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return a(this, n)
                }
            }(n);

            function n(t, r) {
                var i;
                return o(this, n), (i = e.call(this, r)).httpStatus = t, i
            }
            return i(n, [{
                key: "httpStatusCode",
                get: function() {
                    return this.httpStatus
                }
            }]), n
        }(n(185)(Error));
        t.exports = c
    }, function(t, e) {
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
    }, function(t, e, n) {
        var r = n(45),
            o = n(51),
            i = n(130),
            s = n(20),
            a = function() {
                "use strict";

                function t() {
                    r(this, t)
                }
                return o(t, [{
                    key: "createNewAccount",
                    value: function() {
                        return s.keyPair()
                    }
                }, {
                    key: "createAccountFromSecretKey",
                    value: function(t) {
                        try {
                            var e = i.sign.keyPair.fromSecretKey(s.hexadecimalToUint8Array(t));
                            return {
                                publicKey: s.uint8ArrayToHexadecimal(e.publicKey),
                                secretKey: s.uint8ArrayToHexadecimal(e.secretKey)
                            }
                        } catch (t) {
                            throw new Error("Private Key is invalid!")
                        }
                    }
                }]), t
            }();
        t.exports = new a
    }, function(t, e, n) {
        var r = n(14);
        t.exports = function(t) {
            return "string" == typeof t && "0x" === r(t).call(t, 0, 2) ? r(t).call(t, 2) : t
        }
    }, function(t, e, n) {
        var r = n(20);
        t.exports = {
            PublicKey: function(t) {
                return {
                    data: r.hexadecimalToUint8Array(t)
                }
            },
            SealedBoxPublicKey: function(t) {
                return {
                    data: r.hexadecimalToUint8Array(t)
                }
            },
            SealedBoxSecretKey: function(t) {
                return {
                    data: r.hexadecimalToUint8Array(t)
                }
            },
            SealedBoxNonce: function(t) {
                return {
                    data: r.hexadecimalToUint8Array(t)
                }
            }
        }
    }, function(t, e, n) {
        var r = n(20);
        t.exports = function(t) {
            return r.hash(r.hexadecimalToUint8Array(t))
        }
    }, function(t, e, n) {
        var r = n(176);
        t.exports = r({
            Registration: 0,
            InProcess: 1,
            Stopped: 2,
            Finished: 3
        })
    }, function(t, e, n) {
        "use strict";
        t.exports = n(658)
    }, function(t, e, n) {
        "use strict";
        var r = e;

        function o() {
            r.Reader._configure(r.BufferReader), r.util._configure()
        }
        r.build = "minimal", r.Writer = n(304), r.BufferWriter = n(660), r.Reader = n(305), r.BufferReader = n(661), r.util = n(77), r.rpc = n(662), r.roots = n(664), r.configure = o, r.Writer._configure(r.BufferWriter), o()
    }, function(t, e, n) {
        "use strict";
        var r = n(31);
        t.exports = i;
        var o = n(77);

        function i(t, e) {
            this.lo = t >>> 0, this.hi = e >>> 0
        }
        var s = i.zero = new i(0, 0);
        s.toNumber = function() {
            return 0
        }, s.zzEncode = s.zzDecode = function() {
            return this
        }, s.length = function() {
            return 1
        };
        var a = i.zeroHash = "\0\0\0\0\0\0\0\0";
        i.fromNumber = function(t) {
            if (0 === t) return s;
            var e = t < 0;
            e && (t = -t);
            var n = t >>> 0,
                r = (t - n) / 4294967296 >>> 0;
            return e && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))), new i(n, r)
        }, i.from = function(t) {
            if ("number" == typeof t) return i.fromNumber(t);
            if (o.isString(t)) {
                if (!o.Long) return i.fromNumber(r(t, 10));
                t = o.Long.fromString(t)
            }
            return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : s
        }, i.prototype.toNumber = function(t) {
            if (!t && this.hi >>> 31) {
                var e = 1 + ~this.lo >>> 0,
                    n = ~this.hi >>> 0;
                return e || (n = n + 1 >>> 0), -(e + 4294967296 * n)
            }
            return this.lo + 4294967296 * this.hi
        }, i.prototype.toLong = function(t) {
            return o.Long ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t)) : {
                low: 0 | this.lo,
                high: 0 | this.hi,
                unsigned: Boolean(t)
            }
        };
        var u = String.prototype.charCodeAt;
        i.fromHash = function(t) {
            return t === a ? s : new i((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
        }, i.prototype.toHash = function() {
            return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
        }, i.prototype.zzEncode = function() {
            var t = this.hi >> 31;
            return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
        }, i.prototype.zzDecode = function() {
            var t = -(1 & this.lo);
            return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
        }, i.prototype.length = function() {
            var t = this.lo,
                e = (this.lo >>> 28 | this.hi << 4) >>> 0,
                n = this.hi >>> 24;
            return 0 == n ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
        }
    }, function(t, e, n) {
        "use strict";
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
        a.alloc = function(t) {
            return (a.alloc = i._Buffer_allocUnsafe)(t)
        };
        var u = s && s.prototype instanceof Uint8Array && "set" === s.prototype.set.name ? function(t, e, n) {
            e.set(t, n)
        } : function(t, e, n) {
            if (t.copy) t.copy(e, n, 0, t.length);
            else
                for (var r = 0; r < t.length;) e[n++] = t[r++]
        };

        function c(t, e, n) {
            t.length < 40 ? i.utf8.write(t, e, n) : e.utf8Write(t, n)
        }
        a.prototype.bytes = function(t) {
            i.isString(t) && (t = i._Buffer_from(t, "base64"));
            var e = t.length >>> 0;
            return this.uint32(e), e && this._push(u, e, t), this
        }, a.prototype.string = function(t) {
            var e = s.byteLength(t);
            return this.uint32(e), e && this._push(c, e, t), this
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(14),
            o = n(21);
        t.exports = a;
        var i = n(305);
        (a.prototype = o(i.prototype)).constructor = a;
        var s = n(77);

        function a(t) {
            i.call(this, t)
        }
        s.Buffer && (a.prototype._slice = r(s.Buffer.prototype)), a.prototype.string = function() {
            var t = this.uint32();
            return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len))
        }
    }, function(t, e, n) {
        "use strict";
        e.Service = n(663)
    }, function(t, e, n) {
        "use strict";
        var r = n(107),
            o = n(21);
        t.exports = s;
        var i = n(77);

        function s(t, e, n) {
            if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
            i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = Boolean(e), this.responseDelimited = Boolean(n)
        }((s.prototype = o(i.EventEmitter.prototype)).constructor = s).prototype.rpcCall = function t(e, n, o, s, a) {
            if (!s) throw TypeError("request must be specified");
            var u = this;
            if (!a) return i.asPromise(t, u, e, n, o, s);
            if (u.rpcImpl) try {
                return u.rpcImpl(e, n[u.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), (function(t, n) {
                    if (t) return u.emit("error", t, e), a(t);
                    if (null !== n) {
                        if (!(n instanceof o)) try {
                            n = o[u.responseDelimited ? "decodeDelimited" : "decode"](n)
                        } catch (t) {
                            return u.emit("error", t, e), a(t)
                        }
                        return u.emit("data", n, e), a(null, n)
                    }
                    u.end(!0)
                }))
            } catch (t) {
                return u.emit("error", t, e), void r((function() {
                    a(t)
                }), 0)
            } else r((function() {
                a(Error("already ended"))
            }), 0)
        }, s.prototype.end = function(t) {
            return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = {}
    }, function(t, e, n) {
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
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxCreateVoting,
            i = n(112).pbConvert,
            s = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 0,
                    schema: o
                }),
                a = {
                    crypto_system: {
                        public_key: i.SealedBoxPublicKey(e.crypto_system.public_key)
                    },
                    ballots_config: e.ballots_config,
                    revote_enabled: e.revote_enabled
                };
            return new s(t, n, a)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxRegisterVoters,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 1,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    voters: e.voters
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxStopRegistration,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 2,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxRevokeVoterParticipation,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 3,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    voter_id: e.voter_id,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxIssueBallot,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 4,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    voter_id: e.voter_id,
                    district_id: e.district_id,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxAddVoterKey,
            i = n(112).pbConvert,
            s = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 5,
                    schema: o
                }),
                a = {
                    voting_id: e.voting_id,
                    voter_key: i.PublicKey(e.voter_key)
                };
            return new s(t, n, a)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxStoreBallot,
            i = n(112).pbConvert,
            s = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 6,
                    schema: o
                }),
                a = {
                    voting_id: e.voting_id,
                    district_id: e.district_id,
                    encrypted_choice: {
                        encrypted_message: r.hexadecimalToUint8Array(e.encrypted_choice.encrypted_message),
                        nonce: i.SealedBoxNonce(e.encrypted_choice.nonce),
                        public_key: i.SealedBoxPublicKey(e.encrypted_choice.public_key)
                    }
                };
            return new s(t, n, a)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxStopVoting,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 7,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxPublishDecryptionKey,
            i = n(112).pbConvert,
            s = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 8,
                    schema: o
                }),
                a = {
                    voting_id: e.voting_id,
                    private_key: i.SealedBoxSecretKey(e.private_key),
                    seed: r.randomUint64()
                };
            return new s(t, n, a)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxDecryptBallot,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 9,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    ballot_index: e.ballot_index,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxFinalizeVoting,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 10,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    seed: r.randomUint64()
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(20),
            o = n(35).votings_service.TxFinalizeVotingWithResults,
            i = n(36);
        t.exports = function(t, e) {
            var n = new r.Transaction({
                    serviceId: 1001,
                    methodId: 11,
                    schema: o
                }),
                s = {
                    voting_id: e.voting_id,
                    seed: r.randomUint64(),
                    results: e.results
                };
            return new i(t, n, s)
        }
    }, function(t, e, n) {
        var r = n(25),
            o = n(303).VotingState,
            i = n(186),
            s = n(679);
        t.exports = {
            getCryptoSystemSettings: function(t) {
                return new i(["services/votings_service/v1/crypto-system-settings", "?voting_id=".concat(t)].join(""))
            },
            getBallotsConfig: function(t) {
                return new i(["services/votings_service/v1/ballots-config", "?voting_id=".concat(t)].join(""))
            },
            getVotingState: function(t) {
                return new i(["services/votings_service/v1/voting-state", "?voting_id=".concat(t)].join(""), (function(t) {
                    switch (t.state) {
                        case "Registration":
                            return o.Registration;
                        case "InProcess":
                            return o.InProcess;
                        case "Stopped":
                            return o.Stopped;
                        case "Finished":
                            return o.Finished;
                        default:
                            throw new Error("Unknown voting state: ".concat(t.state))
                    }
                }))
            },
            getRegisteredVotersAmount: function(t) {
                return new i(["services/votings_service/v1/registered-voters-amount", "?voting_id=".concat(t)].join(""), (function(t) {
                    return t.registered_voters_amount
                }))
            },
            getVoterInfo: function(t, e) {
                var n;
                return new i(["services/votings_service/v1/voter-info", r(n = "?voting_id=".concat(t, "&voter_id=")).call(n, e)].join(""))
            },
            getIssuedBallotsAmount: function(t) {
                return new i(["services/votings_service/v1/issued-ballots-amount", "?voting_id=".concat(t)].join(""), (function(t) {
                    return t.issued_ballots_amount
                }))
            },
            getStoredBallotsAmount: function(t) {
                return new i(["services/votings_service/v1/stored-ballots-amount", "?voting_id=".concat(t)].join(""), (function(t) {
                    return t.stored_ballots_amount
                }))
            },
            getDecryptionStatistics: function(t) {
                return new i(["services/votings_service/v1/decryption-statistics", "?voting_id=".concat(t)].join(""))
            },
            getBallotByIndex: function(t, e) {
                var n;
                return new i(["services/votings_service/v1/ballot-by-index", r(n = "?voting_id=".concat(t, "&ballot_index=")).call(n, e)].join(""))
            },
            getBallotByStoreTxHash: function(t, e) {
                var n;
                return new i(["services/votings_service/v1/ballot-by-store-tx-hash", r(n = "?voting_id=".concat(t, "&store_tx_hash=")).call(n, e)].join(""))
            },
            getBallotsByStoreTxHashes: function(t, e) {
                return new s(["services/votings_service/v1/ballots-by-store-tx-hashes"], {
                    voting_id: t,
                    store_tx_hashes: e
                }, (function(t) {
                    return t.ballots
                }))
            },
            getInvalidBallots: function(t, e, n) {
                var o, s;
                return new i(["services/votings_service/v1/invalid-ballots", r(o = r(s = "?voting_id=".concat(t, "&from=")).call(s, e, "&limit=")).call(o, n)].join(""))
            },
            getVotingResults: function(t) {
                return new i(["services/votings_service/v1/voting-results", "?voting_id=".concat(t)].join(""))
            },
            isRevoteEnabled: function(t) {
                return new i(["services/votings_service/v1/revote-enabled", "?voting_id=".concat(t)].join(""))
            }
        }
    }, function(t, e, n) {
        var r = n(45),
            o = n(51),
            i = function() {
                "use strict";

                function t(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    r(this, t), this.requestUrl = e, this.requestBody = n, this.responseProcessor = "function" == typeof o ? o : function(t) {
                        return t
                    }, this.blockchainConnector = null
                }
                return o(t, [{
                    key: "send",
                    value: function(t) {
                        return (this.blockchainConnector = t).makePostRequest(this.requestUrl, this.requestBody).then(this.responseProcessor)
                    }
                }]), t
            }();
        t.exports = i
    }, function(t, e, n) {
        var r = n(186);
        t.exports = {
            getTransactionInfo: function(t) {
                return new r(["explorer/v1/transactions", "?hash=".concat(t)].join(""))
            }
        }
    }, function(t, e, n) {
        var r = n(14),
            o = n(23),
            i = n(45),
            s = n(51),
            a = function() {
                "use strict";

                function t(e) {
                    i(this, t), this.rawTx = e, this.hash = null, this.blockchainConnector = null
                }
                return s(t, [{
                    key: "send",
                    value: function(t) {
                        var e = this;
                        return (this.blockchainConnector = t).sendRawTransaction(this.rawTx).then((function(t) {
                            return e.hash = t
                        }))
                    }
                }, {
                    key: "getHash",
                    value: function() {
                        return this.hash
                    }
                }, {
                    key: "getResult",
                    value: function(t) {
                        return t && (this.blockchainConnector = t), this.blockchainConnector ? this.hash ? this.blockchainConnector.getTransactionResult(this.hash) : o.reject(new Error("Transaction either was not sent or sending failed")) : o.reject(new Error("Transaction should be sent to wait for its result"))
                    }
                }, {
                    key: "waitResult",
                    value: function(t) {
                        return t && (this.blockchainConnector = t), this.blockchainConnector ? this.hash ? this.blockchainConnector.waitTransactionResult(this.hash) : o.reject(new Error("Transaction either was not sent or sending failed")) : o.reject(new Error("Transaction should be sent to wait for its result"))
                    }
                }, {
                    key: "getRawTx",
                    value: function() {
                        return this.rawTx
                    }
                }, {
                    key: "getUnsignedRawTx",
                    value: function() {
                        var t;
                        return r(t = this.rawTx).call(t, 0, -128)
                    }
                }]), t
            }();
        t.exports = a
    }, function(t, e, n) {
        var r = n(45),
            o = n(51),
            i = n(240),
            s = i.AccountBuilder,
            a = i.transactions,
            u = i.util,
            c = a.storeBallot,
            l = u.calculateRawTxHash,
            f = function() {
                "use strict";

                function t() {
                    r(this, t), this.account = s.createNewAccount()
                }
                return o(t, [{
                    key: "getAccountAddress",
                    value: function() {
                        return this.account.publicKey
                    }
                }, {
                    key: "getSignedTransaction",
                    value: function(t, e, n, r, o) {
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
                }, {
                    key: "getRawTransactionHash",
                    value: function(t) {
                        return l(t)
                    }
                }]), t
            }();
        t.exports = f
    }], e = {}, f.m = d, f.c = e, f.d = function(t, e, n) {
        f.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, f.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, f.t = function(t, e) {
        if (1 & e && (t = f(t)), 8 & e) return t;
        if (4 & e && "object" == _typeof2(t) && t && t.__esModule) return t;
        var n = Object.create(null);
        if (f.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) f.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, f.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return f.d(e, "a", e), e
    }, f.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, f.p = "", f(f.s = 306);

    function f(t) {
        if (e[t]) return e[t].exports;
        var n = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return d[t].call(n.exports, n, n.exports, f), n.l = !0, n.exports
    }
    var d, e
}));