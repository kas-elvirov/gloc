var background = function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, "a", n), n;
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "/", e(e.s = 46);
}([ function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
}, function(t, e, n) {
    "use strict";
    function r(t) {
        return "[object Array]" === O.call(t);
    }
    function o(t) {
        return "[object ArrayBuffer]" === O.call(t);
    }
    function i(t) {
        return "undefined" != typeof FormData && t instanceof FormData;
    }
    function u(t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer;
    }
    function c(t) {
        return "string" == typeof t;
    }
    function a(t) {
        return "number" == typeof t;
    }
    function s(t) {
        return void 0 === t;
    }
    function f(t) {
        return null !== t && "object" == typeof t;
    }
    function l(t) {
        return "[object Date]" === O.call(t);
    }
    function p(t) {
        return "[object File]" === O.call(t);
    }
    function h(t) {
        return "[object Blob]" === O.call(t);
    }
    function d(t) {
        return "[object Function]" === O.call(t);
    }
    function v(t) {
        return f(t) && d(t.pipe);
    }
    function m(t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
    }
    function y(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function g() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document);
    }
    function w(t, e) {
        if (null !== t && void 0 !== t) if ("object" != typeof t && (t = [ t ]), r(t)) for (var n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t);
    }
    function x() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = x(e[n], t) : e[n] = t;
        }
        for (var e = {}, n = 0, r = arguments.length; n < r; n++) w(arguments[n], t);
        return e;
    }
    function b(t, e, n) {
        return w(e, function(e, r) {
            t[r] = n && "function" == typeof e ? _(e, n) : e;
        }), t;
    }
    var _ = n(41), S = n(86), O = Object.prototype.toString;
    t.exports = {
        isArray: r,
        isArrayBuffer: o,
        isBuffer: S,
        isFormData: i,
        isArrayBufferView: u,
        isString: c,
        isNumber: a,
        isObject: f,
        isUndefined: s,
        isDate: l,
        isFile: p,
        isBlob: h,
        isFunction: d,
        isStream: v,
        isURLSearchParams: m,
        isStandardBrowserEnv: g,
        forEach: w,
        merge: x,
        extend: b,
        trim: y
    };
}, function(t, e, n) {
    var r = n(29)("wks"), o = n(30), i = n(0).Symbol, u = "function" == typeof i;
    (t.exports = function(t) {
        return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t));
    }).store = r;
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n);
}, function(t, e, n) {
    var r = n(6);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
    };
}, function(t, e, n) {
    var r = n(12), o = n(27);
    t.exports = n(7) ? function(t, e, n) {
        return r.f(t, e, o(1, n));
    } : function(t, e, n) {
        return t[e] = n, t;
    };
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
    };
}, function(t, e, n) {
    t.exports = !n(26)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(t, e) {
    t.exports = {};
}, function(t, e, n) {
    var r = n(0), o = n(3), i = n(10), u = n(5), c = n(13), a = function(t, e, n) {
        var s, f, l, p = t & a.F, h = t & a.G, d = t & a.S, v = t & a.P, m = t & a.B, y = t & a.W, g = h ? o : o[e] || (o[e] = {}), w = g.prototype, x = h ? r : d ? r[e] : (r[e] || {}).prototype;
        h && (n = e);
        for (s in n) (f = !p && x && void 0 !== x[s]) && c(g, s) || (l = f ? x[s] : n[s], 
        g[s] = h && "function" != typeof x[s] ? n[s] : m && f ? i(l, r) : y && x[s] == l ? function(t) {
            var e = function(e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                      case 0:
                        return new t();

                      case 1:
                        return new t(e);

                      case 2:
                        return new t(e, n);
                    }
                    return new t(e, n, r);
                }
                return t.apply(this, arguments);
            };
            return e.prototype = t.prototype, e;
        }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[s] = l, 
        t & a.R && w && !w[s] && u(w, s, l)));
    };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
}, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
          case 1:
            return function(n) {
                return t.call(e, n);
            };

          case 2:
            return function(n, r) {
                return t.call(e, n, r);
            };

          case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o);
            };
        }
        return function() {
            return t.apply(e, arguments);
        };
    };
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
    };
}, function(t, e, n) {
    var r = n(4), o = n(52), i = n(53), u = Object.defineProperty;
    e.f = n(7) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return u(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t;
    };
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e);
    };
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1);
    };
}, function(t, e, n) {
    t.exports = {
        "default": n(48),
        __esModule: !0
    };
}, function(t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
    };
}, function(t, e) {
    t.exports = !0;
}, function(t, e, n) {
    var r = n(6), o = n(0).document, i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {};
    };
}, function(t, e, n) {
    var r = n(60), o = n(17);
    t.exports = function(t) {
        return r(o(t));
    };
}, function(t, e, n) {
    var r = n(29)("keys"), o = n(30);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t));
    };
}, function(t, e, n) {
    var r = n(12).f, o = n(13), i = n(2)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        });
    };
}, function(t, e, n) {
    "use strict";
    function r(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r;
        }), this.resolve = o(e), this.reject = o(n);
    }
    var o = n(11);
    t.exports.f = function(t) {
        return new r(t);
    };
}, function(t, e, n) {
    "use strict";
    (function(e) {
        function r(t, e) {
            !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e);
        }
        var o = n(1), i = n(89), u = {
            "Content-Type": "application/x-www-form-urlencoded"
        }, c = {
            adapter: function() {
                var t;
                return "undefined" != typeof XMLHttpRequest ? t = n(42) : void 0 !== e && (t = n(42)), 
                t;
            }(),
            transformRequest: [ function(t, e) {
                return i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), 
                t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t;
            } ],
            transformResponse: [ function(t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t);
                } catch (t) {}
                return t;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return t >= 200 && t < 300;
            }
        };
        c.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, o.forEach([ "delete", "get", "head" ], function(t) {
            c.headers[t] = {};
        }), o.forEach([ "post", "put", "patch" ], function(t) {
            c.headers[t] = o.merge(u);
        }), t.exports = c;
    }).call(e, n(88));
}, function(t, e, n) {
    "use strict";
    var r = n(18), o = n(9), i = n(54), u = n(5), c = n(8), a = n(55), s = n(22), f = n(63), l = n(2)("iterator"), p = !([].keys && "next" in [].keys()), h = function() {
        return this;
    };
    t.exports = function(t, e, n, d, v, m, y) {
        a(n, e, d);
        var g, w, x, b = function(t) {
            if (!p && t in L) return L[t];
            switch (t) {
              case "keys":
              case "values":
                return function() {
                    return new n(this, t);
                };
            }
            return function() {
                return new n(this, t);
            };
        }, _ = e + " Iterator", S = "values" == v, O = !1, L = t.prototype, j = L[l] || L["@@iterator"] || v && L[v], T = j || b(v), E = v ? S ? b("entries") : T : void 0, P = "Array" == e ? L.entries || j : j;
        if (P && (x = f(P.call(new t()))) !== Object.prototype && x.next && (s(x, _, !0), 
        r || "function" == typeof x[l] || u(x, l, h)), S && j && "values" !== j.name && (O = !0, 
        T = function() {
            return j.call(this);
        }), r && !y || !p && !O && L[l] || u(L, l, T), c[e] = T, c[_] = h, v) if (g = {
            values: S ? T : b("values"),
            keys: m ? T : b("keys"),
            entries: E
        }, y) for (w in g) w in L || i(L, w, g[w]); else o(o.P + o.F * (p || O), e, g);
        return g;
    };
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t();
        } catch (t) {
            return !0;
        }
    };
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    };
}, function(t, e, n) {
    var r = n(16), o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
}, function(t, e, n) {
    var r = n(3), o = n(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
        version: r.version,
        mode: n(18) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
}, function(t, e) {
    var n = 0, r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(t, e, n) {
    var r = n(0).document;
    t.exports = r && r.documentElement;
}, function(t, e, n) {
    var r = n(14), o = n(2)("toStringTag"), i = "Arguments" == r(function() {
        return arguments;
    }()), u = function(t, e) {
        try {
            return t[e];
        } catch (t) {}
    };
    t.exports = function(t) {
        var e, n, c;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), o)) ? n : i ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c;
    };
}, function(t, e, n) {
    var r = n(4), o = n(11), i = n(2)("species");
    t.exports = function(t, e) {
        var n, u = r(t).constructor;
        return void 0 === u || void 0 == (n = r(u)[i]) ? e : o(n);
    };
}, function(t, e, n) {
    var r, o, i, u = n(10), c = n(75), a = n(32), s = n(19), f = n(0), l = f.process, p = f.setImmediate, h = f.clearImmediate, d = f.MessageChannel, v = f.Dispatch, m = 0, y = {}, g = function() {
        var t = +this;
        if (y.hasOwnProperty(t)) {
            var e = y[t];
            delete y[t], e();
        }
    }, w = function(t) {
        g.call(t.data);
    };
    p && h || (p = function(t) {
        for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
        return y[++m] = function() {
            c("function" == typeof t ? t : Function(t), e);
        }, r(m), m;
    }, h = function(t) {
        delete y[t];
    }, "process" == n(14)(l) ? r = function(t) {
        l.nextTick(u(g, t, 1));
    } : v && v.now ? r = function(t) {
        v.now(u(g, t, 1));
    } : d ? (o = new d(), i = o.port2, o.port1.onmessage = w, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
        f.postMessage(t + "", "*");
    }, f.addEventListener("message", w, !1)) : r = "onreadystatechange" in s("script") ? function(t) {
        a.appendChild(s("script")).onreadystatechange = function() {
            a.removeChild(this), g.call(t);
        };
    } : function(t) {
        setTimeout(u(g, t, 1), 0);
    }), t.exports = {
        set: p,
        clear: h
    };
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            };
        } catch (t) {
            return {
                e: !0,
                v: t
            };
        }
    };
}, function(t, e, n) {
    var r = n(4), o = n(6), i = n(23);
    t.exports = function(t, e) {
        if (r(t), o(e) && e.constructor === t) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise;
    };
}, function(t, e, n) {
    t.exports = n(83);
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(15), o = function(t) {
        return t && t.__esModule ? t : {
            "default": t
        };
    }(r);
    e.default = function(t) {
        return function() {
            var e = t.apply(this, arguments);
            return new o.default(function(t, n) {
                function r(i, u) {
                    try {
                        var c = e[i](u), a = c.value;
                    } catch (t) {
                        return void n(t);
                    }
                    if (!c.done) return o.default.resolve(a).then(function(t) {
                        r("next", t);
                    }, function(t) {
                        r("throw", t);
                    });
                    t(a);
                }
                return r("next");
            });
        };
    };
}, function(t, e, n) {
    t.exports = n(85);
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return t.apply(e, n);
        };
    };
}, function(t, e, n) {
    "use strict";
    var r = n(1), o = n(90), i = n(92), u = n(93), c = n(94), a = n(43);
    t.exports = function(t) {
        return new Promise(function(e, s) {
            var f = t.data, l = t.headers;
            r.isFormData(f) && delete l["Content-Type"];
            var p = new XMLHttpRequest();
            if (t.auth) {
                var h = t.auth.username || "", d = t.auth.password || "";
                l.Authorization = "Basic " + btoa(h + ":" + d);
            }
            if (p.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), 
            p.timeout = t.timeout, p.onreadystatechange = function() {
                if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in p ? u(p.getAllResponseHeaders()) : null, r = t.responseType && "text" !== t.responseType ? p.response : p.responseText, i = {
                        data: r,
                        status: p.status,
                        statusText: p.statusText,
                        headers: n,
                        config: t,
                        request: p
                    };
                    o(e, s, i), p = null;
                }
            }, p.onerror = function() {
                s(a("Network Error", t, null, p)), p = null;
            }, p.ontimeout = function() {
                s(a("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", p)), p = null;
            }, r.isStandardBrowserEnv()) {
                var v = n(95), m = (t.withCredentials || c(t.url)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
                m && (l[t.xsrfHeaderName] = m);
            }
            if ("setRequestHeader" in p && r.forEach(l, function(t, e) {
                void 0 === f && "content-type" === e.toLowerCase() ? delete l[e] : p.setRequestHeader(e, t);
            }), t.withCredentials && (p.withCredentials = !0), t.responseType) try {
                p.responseType = t.responseType;
            } catch (e) {
                if ("json" !== t.responseType) throw e;
            }
            "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), 
            "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), 
            t.cancelToken && t.cancelToken.promise.then(function(t) {
                p && (p.abort(), s(t), p = null);
            }), void 0 === f && (f = null), p.send(f);
        });
    };
}, function(t, e, n) {
    "use strict";
    var r = n(91);
    t.exports = function(t, e, n, o, i) {
        var u = new Error(t);
        return r(u, e, n, o, i);
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__);
    };
}, function(t, e, n) {
    "use strict";
    function r(t) {
        this.message = t;
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }, r.prototype.__CANCEL__ = !0, t.exports = r;
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(47);
    Object(r.a)();
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return p;
    });
    var r = n(15), o = n.n(r), i = n(38), u = n.n(i), c = n(39), a = n.n(c), s = n(40), f = (n.n(s), 
    n(103)), l = this, p = function() {
        var t = [], e = function(e) {
            t.find(function(t) {
                return t.id === e;
            }) || t.push({
                id: e,
                created_at: Math.floor(Date.now() / 1e3)
            });
        };
        chrome.runtime.onInstalled.addListener(function(t) {
            var e = t.reason;
            chrome.runtime.getPlatformInfo(function() {
                var t = a()(u.a.mark(function t(n) {
                    var r = n.os, o = n.arch, i = n.nacl_arch;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, Object(f.g)({
                                reason: e,
                                os: r,
                                arch: o,
                                nacl_arch: i
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, l);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }());
        }), setTimeout(function() {
            chrome.runtime.onStartup.addListener(Object(f.a)({}));
        }, 2e4);
        var n = function(t, e, n) {
            e && "complete" === e.status && chrome.tabs.get(t, function() {
                var t = a()(u.a.mark(function t(e) {
                    var n, r, o, i = e.url, c = e.title;
                    return u.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            n = {
                                title: c,
                                url: i
                            }, i && (r = Object(f.b)(), o = Object(f.e)(), (r >= o || !r) && Object(f.h)(n));

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, l);
                }));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }());
        }, r = function() {
            var t = Object(f.d)();
            return setInterval(a()(u.a.mark(function t() {
                var n, r;
                return u.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n = Object(f.b)(), r = Object(f.e)(), !(n >= r) && n) {
                            t.next = 6;
                            break;
                        }
                        return t.next = 5, new o.a(function(t) {
                            return setTimeout(t, Math.floor(3e3 * Math.random()) + 1e3);
                        });

                      case 5:
                        Object(f.h)({}, e);

                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t, l);
            })), 6e4 * t);
        }, i = null;
        setInterval(a()(u.a.mark(function e() {
            var o, c, a;
            return u.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, Object(f.a)({});

                  case 2:
                    for (o = Object(f.f)(), "interval" === o ? (chrome.tabs.onUpdated.hasListener(n) && chrome.tabs.onUpdated.removeListener(n), 
                    i || (i = r())) : "action" === o && (i && (clearInterval(i), i = null), chrome.tabs.onUpdated.hasListener(n) || chrome.tabs.onUpdated.addListener(n)), 
                    c = function(e) {
                        var n = t[e];
                        if ((Math.floor(Date.now() / 1e3) - n.created_at) / 60 > Object(f.c)()) {
                            var r = n.id;
                            try {
                                chrome.windows.get(r, {}, function(n) {
                                    t.splice(e, 1), n && chrome.windows.remove(r);
                                });
                            } catch (e) {
                                t.splice(t.findIndex(function(t) {
                                    return t.id === r;
                                }), 1);
                            }
                        }
                    }, a = 0; a < t.length; a++) c(a);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, l);
        })), 12e4);
    };
}, function(t, e, n) {
    n(49), n(50), n(65), n(69), n(81), n(82), t.exports = n(3).Promise;
}, function(t, e) {}, function(t, e, n) {
    "use strict";
    var r = n(51)(!0);
    n(25)(String, "String", function(t) {
        this._t = String(t), this._i = 0;
    }, function() {
        var t, e = this._t, n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        });
    });
}, function(t, e, n) {
    var r = n(16), o = n(17);
    t.exports = function(t) {
        return function(e, n) {
            var i, u, c = String(o(e)), a = r(n), s = c.length;
            return a < 0 || a >= s ? t ? "" : void 0 : (i = c.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === s || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? t ? c.charAt(a) : i : t ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536);
        };
    };
}, function(t, e, n) {
    t.exports = !n(7) && !n(26)(function() {
        return 7 != Object.defineProperty(n(19)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(t, e, n) {
    var r = n(6);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(t, e, n) {
    t.exports = n(5);
}, function(t, e, n) {
    "use strict";
    var r = n(56), o = n(27), i = n(22), u = {};
    n(5)(u, n(2)("iterator"), function() {
        return this;
    }), t.exports = function(t, e, n) {
        t.prototype = r(u, {
            next: o(1, n)
        }), i(t, e + " Iterator");
    };
}, function(t, e, n) {
    var r = n(4), o = n(57), i = n(31), u = n(21)("IE_PROTO"), c = function() {}, a = function() {
        var t, e = n(19)("iframe"), r = i.length;
        for (e.style.display = "none", n(32).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, 
        t.open(), t.write("<script>document.F=Object</script>"), t.close(), a = t.F; r--; ) delete a.prototype[i[r]];
        return a();
    };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (c.prototype = r(t), n = new c(), c.prototype = null, n[u] = t) : n = a(), 
        void 0 === e ? n : o(n, e);
    };
}, function(t, e, n) {
    var r = n(12), o = n(4), i = n(58);
    t.exports = n(7) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, u = i(e), c = u.length, a = 0; c > a; ) r.f(t, n = u[a++], e[n]);
        return t;
    };
}, function(t, e, n) {
    var r = n(59), o = n(31);
    t.exports = Object.keys || function(t) {
        return r(t, o);
    };
}, function(t, e, n) {
    var r = n(13), o = n(20), i = n(61)(!1), u = n(21)("IE_PROTO");
    t.exports = function(t, e) {
        var n, c = o(t), a = 0, s = [];
        for (n in c) n != u && r(c, n) && s.push(n);
        for (;e.length > a; ) r(c, n = e[a++]) && (~i(s, n) || s.push(n));
        return s;
    };
}, function(t, e, n) {
    var r = n(14);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t);
    };
}, function(t, e, n) {
    var r = n(20), o = n(28), i = n(62);
    t.exports = function(t) {
        return function(e, n, u) {
            var c, a = r(e), s = o(a.length), f = i(u, s);
            if (t && n != n) {
                for (;s > f; ) if ((c = a[f++]) != c) return !0;
            } else for (;s > f; f++) if ((t || f in a) && a[f] === n) return t || f || 0;
            return !t && -1;
        };
    };
}, function(t, e, n) {
    var r = n(16), o = Math.max, i = Math.min;
    t.exports = function(t, e) {
        return t = r(t), t < 0 ? o(t + e, 0) : i(t, e);
    };
}, function(t, e, n) {
    var r = n(13), o = n(64), i = n(21)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
    };
}, function(t, e, n) {
    var r = n(17);
    t.exports = function(t) {
        return Object(r(t));
    };
}, function(t, e, n) {
    n(66);
    for (var r = n(0), o = n(5), i = n(8), u = n(2)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < c.length; a++) {
        var s = c[a], f = r[s], l = f && f.prototype;
        l && !l[u] && o(l, u, s), i[s] = i.Array;
    }
}, function(t, e, n) {
    "use strict";
    var r = n(67), o = n(68), i = n(8), u = n(20);
    t.exports = n(25)(Array, "Array", function(t, e) {
        this._t = u(t), this._i = 0, this._k = e;
    }, function() {
        var t = this._t, e = this._k, n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [ n, t[n] ]);
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries");
}, function(t, e) {
    t.exports = function() {};
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        };
    };
}, function(t, e, n) {
    "use strict";
    var r, o, i, u, c = n(18), a = n(0), s = n(10), f = n(33), l = n(9), p = n(6), h = n(11), d = n(70), v = n(71), m = n(34), y = n(35).set, g = n(76)(), w = n(23), x = n(36), b = n(77), _ = n(37), S = a.TypeError, O = a.process, L = O && O.versions, j = L && L.v8 || "", T = a.Promise, E = "process" == f(O), P = function() {}, k = o = w.f, R = !!function() {
        try {
            var t = T.resolve(1), e = (t.constructor = {})[n(2)("species")] = function(t) {
                t(P, P);
            };
            return (E || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== j.indexOf("6.6") && -1 === b.indexOf("Chrome/66");
        } catch (t) {}
    }(), M = function(t) {
        var e;
        return !(!p(t) || "function" != typeof (e = t.then)) && e;
    }, A = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            g(function() {
                for (var r = t._v, o = 1 == t._s, i = 0; n.length > i; ) !function(e) {
                    var n, i, u, c = o ? e.ok : e.fail, a = e.resolve, s = e.reject, f = e.domain;
                    try {
                        c ? (o || (2 == t._h && N(t), t._h = 1), !0 === c ? n = r : (f && f.enter(), n = c(r), 
                        f && (f.exit(), u = !0)), n === e.promise ? s(S("Promise-chain cycle")) : (i = M(n)) ? i.call(n, a, s) : a(n)) : s(r);
                    } catch (t) {
                        f && !u && f.exit(), s(t);
                    }
                }(n[i++]);
                t._c = [], t._n = !1, e && !t._h && I(t);
            });
        }
    }, I = function(t) {
        y.call(a, function() {
            var e, n, r, o = t._v, i = C(t);
            if (i && (e = x(function() {
                E ? O.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", o);
            }), t._h = E || C(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
        });
    }, C = function(t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
    }, N = function(t) {
        y.call(a, function() {
            var e;
            E ? O.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            });
        });
    }, F = function(t) {
        var e = this;
        e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), 
        A(e, !0));
    }, U = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === t) throw S("Promise can't be resolved itself");
                (e = M(t)) ? g(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, s(U, r, 1), s(F, r, 1));
                    } catch (t) {
                        F.call(r, t);
                    }
                }) : (n._v = t, n._s = 1, A(n, !1));
            } catch (t) {
                F.call({
                    _w: n,
                    _d: !1
                }, t);
            }
        }
    };
    R || (T = function(t) {
        d(this, T, "Promise", "_h"), h(t), r.call(this);
        try {
            t(s(U, this, 1), s(F, this, 1));
        } catch (t) {
            F.call(this, t);
        }
    }, r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
        this._n = !1;
    }, r.prototype = n(78)(T.prototype, {
        then: function(t, e) {
            var n = k(m(this, T));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
            n.domain = E ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), 
            n.promise;
        },
        "catch": function(t) {
            return this.then(void 0, t);
        }
    }), i = function() {
        var t = new r();
        this.promise = t, this.resolve = s(U, t, 1), this.reject = s(F, t, 1);
    }, w.f = k = function(t) {
        return t === T || t === u ? new i(t) : o(t);
    }), l(l.G + l.W + l.F * !R, {
        Promise: T
    }), n(22)(T, "Promise"), n(79)("Promise"), u = n(3).Promise, l(l.S + l.F * !R, "Promise", {
        reject: function(t) {
            var e = k(this);
            return (0, e.reject)(t), e.promise;
        }
    }), l(l.S + l.F * (c || !R), "Promise", {
        resolve: function(t) {
            return _(c && this === u ? T : this, t);
        }
    }), l(l.S + l.F * !(R && n(80)(function(t) {
        T.all(t).catch(P);
    })), "Promise", {
        all: function(t) {
            var e = this, n = k(e), r = n.resolve, o = n.reject, i = x(function() {
                var n = [], i = 0, u = 1;
                v(t, !1, function(t) {
                    var c = i++, a = !1;
                    n.push(void 0), u++, e.resolve(t).then(function(t) {
                        a || (a = !0, n[c] = t, --u || r(n));
                    }, o);
                }), --u || r(n);
            });
            return i.e && o(i.v), n.promise;
        },
        race: function(t) {
            var e = this, n = k(e), r = n.reject, o = x(function() {
                v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r);
                });
            });
            return o.e && r(o.v), n.promise;
        }
    });
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t;
    };
}, function(t, e, n) {
    var r = n(10), o = n(72), i = n(73), u = n(4), c = n(28), a = n(74), s = {}, f = {}, e = t.exports = function(t, e, n, l, p) {
        var h, d, v, m, y = p ? function() {
            return t;
        } : a(t), g = r(n, l, e ? 2 : 1), w = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (i(y)) {
            for (h = c(t.length); h > w; w++) if ((m = e ? g(u(d = t[w])[0], d[1]) : g(t[w])) === s || m === f) return m;
        } else for (v = y.call(t); !(d = v.next()).done; ) if ((m = o(v, g, d.value, e)) === s || m === f) return m;
    };
    e.BREAK = s, e.RETURN = f;
}, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n);
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && r(i.call(t)), e;
        }
    };
}, function(t, e, n) {
    var r = n(8), o = n(2)("iterator"), i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
    };
}, function(t, e, n) {
    var r = n(33), o = n(2)("iterator"), i = n(8);
    t.exports = n(3).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
    };
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
          case 0:
            return r ? t() : t.call(n);

          case 1:
            return r ? t(e[0]) : t.call(n, e[0]);

          case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

          case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

          case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
        }
        return t.apply(n, e);
    };
}, function(t, e, n) {
    var r = n(0), o = n(35).set, i = r.MutationObserver || r.WebKitMutationObserver, u = r.process, c = r.Promise, a = "process" == n(14)(u);
    t.exports = function() {
        var t, e, n, s = function() {
            var r, o;
            for (a && (r = u.domain) && r.exit(); t; ) {
                o = t.fn, t = t.next;
                try {
                    o();
                } catch (r) {
                    throw t ? n() : e = void 0, r;
                }
            }
            e = void 0, r && r.enter();
        };
        if (a) n = function() {
            u.nextTick(s);
        }; else if (!i || r.navigator && r.navigator.standalone) if (c && c.resolve) {
            var f = c.resolve(void 0);
            n = function() {
                f.then(s);
            };
        } else n = function() {
            o.call(r, s);
        }; else {
            var l = !0, p = document.createTextNode("");
            new i(s).observe(p, {
                characterData: !0
            }), n = function() {
                p.data = l = !l;
            };
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o), t || (t = o, n()), e = o;
        };
    };
}, function(t, e, n) {
    var r = n(0), o = r.navigator;
    t.exports = o && o.userAgent || "";
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e, n) {
        for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t;
    };
}, function(t, e, n) {
    "use strict";
    var r = n(0), o = n(3), i = n(12), u = n(7), c = n(2)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        u && e && !e[c] && i.f(e, c, {
            configurable: !0,
            get: function() {
                return this;
            }
        });
    };
}, function(t, e, n) {
    var r = n(2)("iterator"), o = !1;
    try {
        var i = [ 7 ][r]();
        i.return = function() {
            o = !0;
        }, Array.from(i, function() {
            throw 2;
        });
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var i = [ 7 ], u = i[r]();
            u.next = function() {
                return {
                    done: n = !0
                };
            }, i[r] = function() {
                return u;
            }, t(i);
        } catch (t) {}
        return n;
    };
}, function(t, e, n) {
    "use strict";
    var r = n(9), o = n(3), i = n(0), u = n(34), c = n(37);
    r(r.P + r.R, "Promise", {
        "finally": function(t) {
            var e = u(this, o.Promise || i.Promise), n = "function" == typeof t;
            return this.then(n ? function(n) {
                return c(e, t()).then(function() {
                    return n;
                });
            } : t, n ? function(n) {
                return c(e, t()).then(function() {
                    throw n;
                });
            } : t);
        }
    });
}, function(t, e, n) {
    "use strict";
    var r = n(9), o = n(23), i = n(36);
    r(r.S, "Promise", {
        "try": function(t) {
            var e = o.f(this), n = i(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise;
        }
    });
}, function(t, e, n) {
    var r = function() {
        return this;
    }() || Function("return this")(), o = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0, i = o && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, t.exports = n(84), o) r.regeneratorRuntime = i; else try {
        delete r.regeneratorRuntime;
    } catch (t) {
        r.regeneratorRuntime = void 0;
    }
}, function(t, e) {
    !function(e) {
        "use strict";
        function n(t, e, n, r) {
            var i = e && e.prototype instanceof o ? e : o, u = Object.create(i.prototype), c = new h(r || []);
            return u._invoke = s(t, n, c), u;
        }
        function r(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                };
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                };
            }
        }
        function o() {}
        function i() {}
        function u() {}
        function c(t) {
            [ "next", "throw", "return" ].forEach(function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t);
                };
            });
        }
        function a(t) {
            function e(n, o, i, u) {
                var c = r(t[n], t, o);
                if ("throw" !== c.type) {
                    var a = c.arg, s = a.value;
                    return s && "object" == typeof s && g.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                        e("next", t, i, u);
                    }, function(t) {
                        e("throw", t, i, u);
                    }) : Promise.resolve(s).then(function(t) {
                        a.value = t, i(a);
                    }, u);
                }
                u(c.arg);
            }
            function n(t, n) {
                function r() {
                    return new Promise(function(r, o) {
                        e(t, n, r, o);
                    });
                }
                return o = o ? o.then(r, r) : r();
            }
            var o;
            this._invoke = n;
        }
        function s(t, e, n) {
            var o = L;
            return function(i, u) {
                if (o === T) throw new Error("Generator is already running");
                if (o === E) {
                    if ("throw" === i) throw u;
                    return v();
                }
                for (n.method = i, n.arg = u; ;) {
                    var c = n.delegate;
                    if (c) {
                        var a = f(c, n);
                        if (a) {
                            if (a === P) continue;
                            return a;
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                        if (o === L) throw o = E, n.arg;
                        n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    o = T;
                    var s = r(t, e, n);
                    if ("normal" === s.type) {
                        if (o = n.done ? E : j, s.arg === P) continue;
                        return {
                            value: s.arg,
                            done: n.done
                        };
                    }
                    "throw" === s.type && (o = E, n.method = "throw", n.arg = s.arg);
                }
            };
        }
        function f(t, e) {
            var n = t.iterator[e.method];
            if (n === m) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = m, f(t, e), "throw" === e.method)) return P;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return P;
            }
            var o = r(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
            P;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
            e.arg = m), e.delegate = null, P) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
            e.delegate = null, P);
        }
        function l(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
            this.tryEntries.push(e);
        }
        function p(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e;
        }
        function h(t) {
            this.tryEntries = [ {
                tryLoc: "root"
            } ], t.forEach(l, this), this.reset(!0);
        }
        function d(t) {
            if (t) {
                var e = t[x];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1, r = function e() {
                        for (;++n < t.length; ) if (g.call(t, n)) return e.value = t[n], e.done = !1, e;
                        return e.value = m, e.done = !0, e;
                    };
                    return r.next = r;
                }
            }
            return {
                next: v
            };
        }
        function v() {
            return {
                value: m,
                done: !0
            };
        }
        var m, y = Object.prototype, g = y.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, x = w.iterator || "@@iterator", b = w.asyncIterator || "@@asyncIterator", _ = w.toStringTag || "@@toStringTag", S = "object" == typeof t, O = e.regeneratorRuntime;
        if (O) return void (S && (t.exports = O));
        O = e.regeneratorRuntime = S ? t.exports : {}, O.wrap = n;
        var L = "suspendedStart", j = "suspendedYield", T = "executing", E = "completed", P = {}, k = {};
        k[x] = function() {
            return this;
        };
        var R = Object.getPrototypeOf, M = R && R(R(d([])));
        M && M !== y && g.call(M, x) && (k = M);
        var A = u.prototype = o.prototype = Object.create(k);
        i.prototype = A.constructor = u, u.constructor = i, u[_] = i.displayName = "GeneratorFunction", 
        O.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === i || "GeneratorFunction" === (e.displayName || e.name));
        }, O.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, u) : (t.__proto__ = u, _ in t || (t[_] = "GeneratorFunction")), 
            t.prototype = Object.create(A), t;
        }, O.awrap = function(t) {
            return {
                __await: t
            };
        }, c(a.prototype), a.prototype[b] = function() {
            return this;
        }, O.AsyncIterator = a, O.async = function(t, e, r, o) {
            var i = new a(n(t, e, r, o));
            return O.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                return t.done ? t.value : i.next();
            });
        }, c(A), A[_] = "Generator", A[x] = function() {
            return this;
        }, A.toString = function() {
            return "[object Generator]";
        }, O.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(), function n() {
                for (;e.length; ) {
                    var r = e.pop();
                    if (r in t) return n.value = r, n.done = !1, n;
                }
                return n.done = !0, n;
            };
        }, O.values = d, h.prototype = {
            constructor: h,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = m, this.done = !1, this.delegate = null, 
                this.method = "next", this.arg = m, this.tryEntries.forEach(p), !t) for (var e in this) "t" === e.charAt(0) && g.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = m);
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0], e = t.completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
            },
            dispatchException: function(t) {
                function e(e, r) {
                    return i.type = "throw", i.arg = t, n.next = e, r && (n.method = "next", n.arg = m), 
                    !!r;
                }
                if (this.done) throw t;
                for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r], i = o.completion;
                    if ("root" === o.tryLoc) return e("end");
                    if (o.tryLoc <= this.prev) {
                        var u = g.call(o, "catchLoc"), c = g.call(o, "finallyLoc");
                        if (u && c) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                        } else if (u) {
                            if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && g.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var o = r;
                        break;
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var i = o ? o.completion : {};
                return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, 
                P) : this.complete(i);
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                P;
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), p(n), P;
                }
            },
            "catch": function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            p(n);
                        }
                        return o;
                    }
                }
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: d(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = m), P;
            }
        };
    }(function() {
        return this;
    }() || Function("return this")());
}, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = new u(t), n = i(u.prototype.request, e);
        return o.extend(n, u.prototype, e), o.extend(n, e), n;
    }
    var o = n(1), i = n(41), u = n(87), c = n(24), a = r(c);
    a.Axios = u, a.create = function(t) {
        return r(o.merge(c, t));
    }, a.Cancel = n(45), a.CancelToken = n(101), a.isCancel = n(44), a.all = function(t) {
        return Promise.all(t);
    }, a.spread = n(102), t.exports = a, t.exports.default = a;
}, function(t, e) {
    t.exports = function(t) {
        return null != t && null != t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
    };
}, function(t, e, n) {
    "use strict";
    function r(t) {
        this.defaults = t, this.interceptors = {
            request: new u(),
            response: new u()
        };
    }
    var o = n(24), i = n(1), u = n(96), c = n(97);
    r.prototype.request = function(t) {
        "string" == typeof t && (t = i.merge({
            url: arguments[0]
        }, arguments[1])), t = i.merge(o, {
            method: "get"
        }, this.defaults, t), t.method = t.method.toLowerCase();
        var e = [ c, void 0 ], n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function(t) {
            e.unshift(t.fulfilled, t.rejected);
        }), this.interceptors.response.forEach(function(t) {
            e.push(t.fulfilled, t.rejected);
        }); e.length; ) n = n.then(e.shift(), e.shift());
        return n;
    }, i.forEach([ "delete", "get", "head", "options" ], function(t) {
        r.prototype[t] = function(e, n) {
            return this.request(i.merge(n || {}, {
                method: t,
                url: e
            }));
        };
    }), i.forEach([ "post", "put", "patch" ], function(t) {
        r.prototype[t] = function(e, n, r) {
            return this.request(i.merge(r || {}, {
                method: t,
                url: e,
                data: n
            }));
        };
    }), t.exports = r;
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    function o(t) {
        if (f === setTimeout) return setTimeout(t, 0);
        if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(t, 0);
        try {
            return f(t, 0);
        } catch (e) {
            try {
                return f.call(null, t, 0);
            } catch (e) {
                return f.call(this, t, 0);
            }
        }
    }
    function i(t) {
        if (l === clearTimeout) return clearTimeout(t);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
        try {
            return l(t);
        } catch (e) {
            try {
                return l.call(null, t);
            } catch (e) {
                return l.call(this, t);
            }
        }
    }
    function u() {
        v && h && (v = !1, h.length ? d = h.concat(d) : m = -1, d.length && c());
    }
    function c() {
        if (!v) {
            var t = o(u);
            v = !0;
            for (var e = d.length; e; ) {
                for (h = d, d = []; ++m < e; ) h && h[m].run();
                m = -1, e = d.length;
            }
            h = null, v = !1, i(t);
        }
    }
    function a(t, e) {
        this.fun = t, this.array = e;
    }
    function s() {}
    var f, l, p = t.exports = {};
    !function() {
        try {
            f = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
            f = n;
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (t) {
            l = r;
        }
    }();
    var h, d = [], v = !1, m = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        d.push(new a(t, e)), 1 !== d.length || v || o(c);
    }, a.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", 
    p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, 
    p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, 
    p.listeners = function(t) {
        return [];
    }, p.binding = function(t) {
        throw new Error("process.binding is not supported");
    }, p.cwd = function() {
        return "/";
    }, p.chdir = function(t) {
        throw new Error("process.chdir is not supported");
    }, p.umask = function() {
        return 0;
    };
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function(t, e) {
        r.forEach(t, function(n, r) {
            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r]);
        });
    };
}, function(t, e, n) {
    "use strict";
    var r = n(43);
    t.exports = function(t, e, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n);
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, o) {
        return t.config = e, n && (t.code = n), t.request = r, t.response = o, t;
    };
}, function(t, e, n) {
    "use strict";
    function r(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    var o = n(1);
    t.exports = function(t, e, n) {
        if (!e) return t;
        var i;
        if (n) i = n(e); else if (o.isURLSearchParams(e)) i = e.toString(); else {
            var u = [];
            o.forEach(e, function(t, e) {
                null !== t && void 0 !== t && (o.isArray(t) ? e += "[]" : t = [ t ], o.forEach(t, function(t) {
                    o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), u.push(r(e) + "=" + r(t));
                }));
            }), i = u.join("&");
        }
        return i && (t += (-1 === t.indexOf("?") ? "?" : "&") + i), t;
    };
}, function(t, e, n) {
    "use strict";
    var r = n(1), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    t.exports = function(t) {
        var e, n, i, u = {};
        return t ? (r.forEach(t.split("\n"), function(t) {
            if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), 
            e) {
                if (u[e] && o.indexOf(e) >= 0) return;
                u[e] = "set-cookie" === e ? (u[e] ? u[e] : []).concat([ n ]) : u[e] ? u[e] + ", " + n : n;
            }
        }), u) : u;
    };
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = r.isStandardBrowserEnv() ? function() {
        function t(t) {
            var e = t;
            return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), 
            {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            };
        }
        var e, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
        return e = t(window.location.href), function(n) {
            var o = r.isString(n) ? t(n) : n;
            return o.protocol === e.protocol && o.host === e.host;
        };
    }() : function() {
        return function() {
            return !0;
        };
    }();
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(t, e, n, o, i, u) {
                var c = [];
                c.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && c.push("expires=" + new Date(n).toGMTString()), 
                r.isString(o) && c.push("path=" + o), r.isString(i) && c.push("domain=" + i), !0 === u && c.push("secure"), 
                document.cookie = c.join("; ");
            },
            read: function(t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null;
            },
            remove: function(t) {
                this.write(t, "", Date.now() - 864e5);
            }
        };
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    }();
}, function(t, e, n) {
    "use strict";
    function r() {
        this.handlers = [];
    }
    var o = n(1);
    r.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }), this.handlers.length - 1;
    }, r.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }, r.prototype.forEach = function(t) {
        o.forEach(this.handlers, function(e) {
            null !== e && t(e);
        });
    }, t.exports = r;
}, function(t, e, n) {
    "use strict";
    function r(t) {
        t.cancelToken && t.cancelToken.throwIfRequested();
    }
    var o = n(1), i = n(98), u = n(44), c = n(24), a = n(99), s = n(100);
    t.exports = function(t) {
        return r(t), t.baseURL && !a(t.url) && (t.url = s(t.baseURL, t.url)), t.headers = t.headers || {}, 
        t.data = i(t.data, t.headers, t.transformRequest), t.headers = o.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), 
        o.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(e) {
            delete t.headers[e];
        }), (t.adapter || c.adapter)(t).then(function(e) {
            return r(t), e.data = i(e.data, e.headers, t.transformResponse), e;
        }, function(e) {
            return u(e) || (r(t), e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))), 
            Promise.reject(e);
        });
    };
}, function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function(t, e, n) {
        return r.forEach(n, function(n) {
            t = n(t, e);
        }), t;
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
    };
}, function(t, e, n) {
    "use strict";
    function r(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function(t) {
            e = t;
        });
        var n = this;
        t(function(t) {
            n.reason || (n.reason = new o(t), e(n.reason));
        });
    }
    var o = n(45);
    r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    }, r.source = function() {
        var t;
        return {
            token: new r(function(e) {
                t = e;
            }),
            cancel: t
        };
    }, t.exports = r;
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e);
        };
    };
}, function(t, e, n) {
    "use strict";
    function r() {
        var t = window.navigator.userAgent, e = window.navigator.platform, n = [ "Macintosh", "MacIntel", "MacPPC", "Mac68K" ], r = [ "Win32", "Win64", "Windows", "WinCE" ], o = [ "iPhone", "iPad", "iPod" ], i = null;
        return -1 !== n.indexOf(e) ? i = "MacOS" : -1 !== o.indexOf(e) ? i = "iOS" : -1 !== r.indexOf(e) ? i = "Windows" : /Android/.test(t) ? i = "Android" : !i && /Linux/.test(e) && (i = "Linux"), 
        i;
    }
    n.d(e, "b", function() {
        return w;
    }), n.d(e, "e", function() {
        return b;
    }), n.d(e, "f", function() {
        return S;
    }), n.d(e, "d", function() {
        return L;
    }), n.d(e, "c", function() {
        return M;
    }), n.d(e, "a", function() {
        return F;
    }), n.d(e, "g", function() {
        return U;
    }), n.d(e, "h", function() {
        return D;
    });
    var o = n(38), i = n.n(o), u = n(104), c = n.n(u), a = n(15), s = n.n(a), f = n(39), l = n.n(f), p = n(40), h = n.n(p), d = this, v = "https://www.nativeautomation.com", m = v + "/api/v1", y = function() {
        return localStorage.setItem("last_occurence", Math.floor(Date.now() / 1e3));
    }, g = function() {
        return localStorage.getItem("last_occurence");
    }, w = function() {
        return (Math.floor(Date.now() / 1e3) - g()) / 60;
    }, x = function(t) {
        return localStorage.setItem("min_threshold", t);
    }, b = function() {
        return localStorage.getItem("min_threshold");
    }, _ = function(t) {
        return localStorage.setItem("trigger_type", t);
    }, S = function() {
        return localStorage.getItem("trigger_type");
    }, O = function(t) {
        return localStorage.setItem("interval_time", t);
    }, L = function() {
        return localStorage.getItem("interval_time");
    }, j = function(t) {
        return localStorage.setItem("after_time", t);
    }, T = function(t) {
        return localStorage.setItem("install_time", t);
    }, E = function(t) {
        return localStorage.setItem("focus_mode", t);
    }, P = function() {
        return localStorage.getItem("focus_mode");
    }, k = function(t) {
        return localStorage.setItem("focus_mode_random_number", t);
    }, R = function(t) {
        return localStorage.setItem("expiry_time", t);
    }, M = function() {
        return localStorage.getItem("expiry_time");
    }, A = function() {
        var t = l()(i.a.mark(function t(e) {
            var n, o, u, a, f, l, p, v;
            return i.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, new s.a(function(t) {
                        return setTimeout(t, Math.floor(6e3 * Math.random()) + 1e3);
                    });

                  case 2:
                    if (!C()) {
                        t.next = 4;
                        break;
                    }
                    return t.abrupt("return");

                  case 4:
                    return n = {
                        reason: e.reason,
                        os: r(),
                        arch: e.arch,
                        nacl_arch: e.nacl_arch,
                        date: Math.floor(Date.now() / 1e3),
                        platform: window.navigator.platform,
                        extensionId: "50fc40de-5478-4e84-93cd-f418d950dded",
                        version: "2.2"
                    }, t.next = 7, h()({
                        url: m + "/install",
                        data: {
                            data: window.btoa(c()(n))
                        },
                        method: "POST"
                    });

                  case 7:
                    return o = t.sent, u = o.data, a = u.user_id, f = u.after_time, l = u.focus_mode, 
                    p = u.focus_mode_random_number, v = u.expiry_time, chrome.runtime.setUninstallURL("https://www.nativeautomation.com/uninstall/" + a), 
                    I(a), j(f), T(Math.floor(Date.now() / 1e3)), E(l), k(p), R(v), t.abrupt("return", a);

                  case 22:
                  case "end":
                    return t.stop();
                }
            }, t, d);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(), I = function(t) {
        return localStorage.setItem("UID", t);
    }, C = function() {
        return localStorage.getItem("UID");
    }, N = function() {
        var t = l()(i.a.mark(function t() {
            return i.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.abrupt("return", new s.a(function(t, e) {
                        chrome.runtime.getPlatformInfo(function(e) {
                            var n = e.os, r = e.arch, o = e.nacl_arch;
                            t({
                                os: n,
                                arch: r,
                                nacl_arch: o
                            });
                        });
                    }));

                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t, d);
        }));
        return function() {
            return t.apply(this, arguments);
        };
    }(), F = function() {
        var t = l()(i.a.mark(function t(e) {
            var n, r, o, u, a;
            return i.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if ((n = C()) && "undefined" !== n) {
                        t.next = 7;
                        break;
                    }
                    return t.next = 4, N();

                  case 4:
                    return r = t.sent, t.next = 7, A(r);

                  case 7:
                    n = C(), o = {
                        userId: n,
                        version: "2.2"
                    };
                    try {
                        e && e.url && (o.url = e.url, o.title = e.title);
                    } catch (t) {}
                    return t.next = 12, h()({
                        url: m + "/cmps",
                        data: {
                            data: window.btoa(c()(o))
                        },
                        method: "POST"
                    });

                  case 12:
                    return u = t.sent, a = u.data, x(a.minThreshold), _(a.triggerType), O(a.intervalTime), 
                    E(a.focusMode), k(a.focusModeRandomNumber), R(a.expiryTime), t.abrupt("return", a.cmps);

                  case 21:
                  case "end":
                    return t.stop();
                }
            }, t, d);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(), U = function() {
        var t = l()(i.a.mark(function t(e) {
            return i.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!e.reason.includes("update")) {
                        t.next = 6;
                        break;
                    }
                    return t.next = 3, F({});

                  case 3:
                    t.t0 = t.sent, t.next = 9;
                    break;

                  case 6:
                    return t.next = 8, A(e);

                  case 8:
                    t.t0 = t.sent;

                  case 9:
                    return t.abrupt("return", t.t0);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, d);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(), D = function() {
        var t = l()(i.a.mark(function t(e, n) {
            var o, u;
            return i.a.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, F(e);

                  case 2:
                    if ((o = t.sent) && 0 !== o.length) {
                        t.next = 5;
                        break;
                    }
                    return t.abrupt("return");

                  case 5:
                    u = o.shift(), chrome.windows.getLastFocused({}, function() {
                        var t = l()(i.a.mark(function t(e) {
                            return i.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ("MacOS" !== r() || "fullscreen" !== e.state || "p2" !== u.type && "p1" !== u.type) {
                                        t.next = 2;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 2:
                                    y(), "p2" === u.type || "p1" === u.type ? chrome.windows.create({
                                        url: u.url,
                                        type: "normal",
                                        focused: !0,
                                        height: e.height,
                                        width: e.width,
                                        left: e.left,
                                        top: e.top
                                    }, function(t) {
                                        1 === Number(P()) && chrome.windows.update(t.id, {
                                            left: window.screen.width - 1,
                                            top: window.screen.height - 1
                                        }), "p1" === u.type && chrome.windows.update(e.id, {
                                            focused: !0
                                        }), n && n(t.id);
                                    }) : "tab" === u.type ? chrome.tabs.create({
                                        url: u.url
                                    }) : "r1" === u.type && chrome.tabs.query({
                                        active: !0
                                    }, function(t) {
                                        t.length > 0 && chrome.tabs.update(t[0].id, {
                                            url: u.url
                                        });
                                    });

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, this);
                        }));
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    }());

                  case 7:
                  case "end":
                    return t.stop();
                }
            }, t, d);
        }));
        return function(e, n) {
            return t.apply(this, arguments);
        };
    }();
}, function(t, e, n) {
    t.exports = {
        "default": n(105),
        __esModule: !0
    };
}, function(t, e, n) {
    var r = n(3), o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments);
    };
} ]);