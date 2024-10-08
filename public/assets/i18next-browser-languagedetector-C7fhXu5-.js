import {
    _ as v,
    G as m
} from "./date-fns-DGsxi8Uo.js";
var p = [],
    w = p.forEach,
    k = p.slice;

function S(i) {
    return w.call(k.call(arguments, 1), function(o) {
        if (o)
            for (var e in o) i[e] === void 0 && (i[e] = o[e])
    }), i
}
var g = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    x = function(o, e, t) {
        var n = t || {};
        n.path = n.path || "/";
        var a = encodeURIComponent(e),
            r = "".concat(o, "=").concat(a);
        if (n.maxAge > 0) {
            var u = n.maxAge - 0;
            if (Number.isNaN(u)) throw new Error("maxAge should be a Number");
            r += "; Max-Age=".concat(Math.floor(u))
        }
        if (n.domain) {
            if (!g.test(n.domain)) throw new TypeError("option domain is invalid");
            r += "; Domain=".concat(n.domain)
        }
        if (n.path) {
            if (!g.test(n.path)) throw new TypeError("option path is invalid");
            r += "; Path=".concat(n.path)
        }
        if (n.expires) {
            if (typeof n.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
            r += "; Expires=".concat(n.expires.toUTCString())
        }
        if (n.httpOnly && (r += "; HttpOnly"), n.secure && (r += "; Secure"), n.sameSite) {
            var l = typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite;
            switch (l) {
                case !0:
                    r += "; SameSite=Strict";
                    break;
                case "lax":
                    r += "; SameSite=Lax";
                    break;
                case "strict":
                    r += "; SameSite=Strict";
                    break;
                case "none":
                    r += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
        }
        return r
    },
    f = {
        create: function(o, e, t, n) {
            var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            t && (a.expires = new Date, a.expires.setTime(a.expires.getTime() + t * 60 * 1e3)), n && (a.domain = n), document.cookie = x(o, encodeURIComponent(e), a)
        },
        read: function(o) {
            for (var e = "".concat(o, "="), t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                for (var a = t[n]; a.charAt(0) === " ";) a = a.substring(1, a.length);
                if (a.indexOf(e) === 0) return a.substring(e.length, a.length)
            }
            return null
        },
        remove: function(o) {
            this.create(o, "", -1)
        }
    },
    y = {
        name: "cookie",
        lookup: function(o) {
            var e;
            if (o.lookupCookie && typeof document < "u") {
                var t = f.read(o.lookupCookie);
                t && (e = t)
            }
            return e
        },
        cacheUserLanguage: function(o, e) {
            e.lookupCookie && typeof document < "u" && f.create(e.lookupCookie, o, e.cookieMinutes, e.cookieDomain, e.cookieOptions)
        }
    },
    L = {
        name: "querystring",
        lookup: function(o) {
            var e;
            if (typeof window < "u") {
                var t = window.location.search;
                !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (t = window.location.hash.substring(window.location.hash.indexOf("?")));
                for (var n = t.substring(1), a = n.split("&"), r = 0; r < a.length; r++) {
                    var u = a[r].indexOf("=");
                    if (u > 0) {
                        var l = a[r].substring(0, u);
                        l === o.lookupQuerystring && (e = a[r].substring(u + 1))
                    }
                }
            }
            return e
        }
    },
    s = null,
    d = function() {
        if (s !== null) return s;
        try {
            s = window !== "undefined" && window.localStorage !== null;
            var o = "i18next.translate.boo";
            window.localStorage.setItem(o, "foo"), window.localStorage.removeItem(o)
        } catch {
            s = !1
        }
        return s
    },
    b = {
        name: "localStorage",
        lookup: function(o) {
            var e;
            if (o.lookupLocalStorage && d()) {
                var t = window.localStorage.getItem(o.lookupLocalStorage);
                t && (e = t)
            }
            return e
        },
        cacheUserLanguage: function(o, e) {
            e.lookupLocalStorage && d() && window.localStorage.setItem(e.lookupLocalStorage, o)
        }
    },
    c = null,
    h = function() {
        if (c !== null) return c;
        try {
            c = window !== "undefined" && window.sessionStorage !== null;
            var o = "i18next.translate.boo";
            window.sessionStorage.setItem(o, "foo"), window.sessionStorage.removeItem(o)
        } catch {
            c = !1
        }
        return c
    },
    D = {
        name: "sessionStorage",
        lookup: function(o) {
            var e;
            if (o.lookupSessionStorage && h()) {
                var t = window.sessionStorage.getItem(o.lookupSessionStorage);
                t && (e = t)
            }
            return e
        },
        cacheUserLanguage: function(o, e) {
            e.lookupSessionStorage && h() && window.sessionStorage.setItem(e.lookupSessionStorage, o)
        }
    },
    C = {
        name: "navigator",
        lookup: function(o) {
            var e = [];
            if (typeof navigator < "u") {
                if (navigator.languages)
                    for (var t = 0; t < navigator.languages.length; t++) e.push(navigator.languages[t]);
                navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
            }
            return e.length > 0 ? e : void 0
        }
    },
    I = {
        name: "htmlTag",
        lookup: function(o) {
            var e, t = o.htmlTag || (typeof document < "u" ? document.documentElement : null);
            return t && typeof t.getAttribute == "function" && (e = t.getAttribute("lang")), e
        }
    },
    U = {
        name: "path",
        lookup: function(o) {
            var e;
            if (typeof window < "u") {
                var t = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                if (t instanceof Array)
                    if (typeof o.lookupFromPathIndex == "number") {
                        if (typeof t[o.lookupFromPathIndex] != "string") return;
                        e = t[o.lookupFromPathIndex].replace("/", "")
                    } else e = t[0].replace("/", "")
            }
            return e
        }
    },
    F = {
        name: "subdomain",
        lookup: function(o) {
            var e = typeof o.lookupFromSubdomainIndex == "number" ? o.lookupFromSubdomainIndex + 1 : 1,
                t = typeof window < "u" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
            if (t) return t[e]
        }
    };

function T() {
    return {
        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
        lookupQuerystring: "lng",
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng",
        caches: ["localStorage"],
        excludeCacheFor: ["cimode"],
        convertDetectedLanguage: function(o) {
            return o
        }
    }
}
var A = function() {
    function i(o) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        m(this, i), this.type = "languageDetector", this.detectors = {}, this.init(o, e)
    }
    return v(i, [{
        key: "init",
        value: function(e) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.services = e || {
                languageUtils: {}
            }, this.options = S(t, this.options || {}, T()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(a) {
                return a.replace("-", "_")
            }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = n, this.addDetector(y), this.addDetector(L), this.addDetector(b), this.addDetector(D), this.addDetector(C), this.addDetector(I), this.addDetector(U), this.addDetector(F)
        }
    }, {
        key: "addDetector",
        value: function(e) {
            return this.detectors[e.name] = e, this
        }
    }, {
        key: "detect",
        value: function(e) {
            var t = this;
            e || (e = this.options.order);
            var n = [];
            return e.forEach(function(a) {
                if (t.detectors[a]) {
                    var r = t.detectors[a].lookup(t.options);
                    r && typeof r == "string" && (r = [r]), r && (n = n.concat(r))
                }
            }), n = n.map(function(a) {
                return t.options.convertDetectedLanguage(a)
            }), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
        }
    }, {
        key: "cacheUserLanguage",
        value: function(e, t) {
            var n = this;
            t || (t = this.options.caches), t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach(function(a) {
                n.detectors[a] && n.detectors[a].cacheUserLanguage(e, n.options)
            }))
        }
    }]), i
}();
A.type = "languageDetector";
export {
    A as B
};
//# sourceMappingURL=i18next-browser-languagedetector-C7fhXu5-.js.map