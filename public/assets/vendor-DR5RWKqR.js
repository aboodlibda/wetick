function Zs(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, l);
                    o && Object.defineProperty(e, l, o.get ? o : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Bv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function qs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var bs = {
        exports: {}
    },
    Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il = Symbol.for("react.element"),
    Vd = Symbol.for("react.portal"),
    Hd = Symbol.for("react.fragment"),
    Wd = Symbol.for("react.strict_mode"),
    Qd = Symbol.for("react.profiler"),
    Kd = Symbol.for("react.provider"),
    Yd = Symbol.for("react.context"),
    Xd = Symbol.for("react.forward_ref"),
    Gd = Symbol.for("react.suspense"),
    Jd = Symbol.for("react.memo"),
    Zd = Symbol.for("react.lazy"),
    xa = Symbol.iterator;

function qd(e) {
    return e === null || typeof e != "object" ? null : (e = xa && e[xa] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ec = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    tc = Object.assign,
    nc = {};

function ir(e, t, n) {
    this.props = e, this.context = t, this.refs = nc, this.updater = n || ec
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
ir.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function rc() {}
rc.prototype = ir.prototype;

function cu(e, t, n) {
    this.props = e, this.context = t, this.refs = nc, this.updater = n || ec
}
var fu = cu.prototype = new rc;
fu.constructor = cu;
tc(fu, ir.prototype);
fu.isPureReactComponent = !0;
var Ca = Array.isArray,
    lc = Object.prototype.hasOwnProperty,
    du = {
        current: null
    },
    oc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ic(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) lc.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: il,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: du.current
    }
}

function bd(e, t) {
    return {
        $$typeof: il,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function pu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === il
}

function ep(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Pa = /\/+/g;

function jo(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ep("" + e.key) : t.toString(36)
}

function Ol(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case il:
                case Vd:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + jo(i, 0) : r, Ca(l) ? (n = "", e != null && (n = e.replace(Pa, "$&/") + "/"), Ol(l, t, n, "", function(s) {
        return s
    })) : l != null && (pu(l) && (l = bd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Pa, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Ca(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var a = r + jo(o, u);
            i += Ol(o, t, n, a, l)
        } else if (a = qd(e), typeof a == "function")
            for (e = a.call(e), u = 0; !(o = e.next()).done;) o = o.value, a = r + jo(o, u++), i += Ol(o, t, n, a, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function gl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Ol(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function tp(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Fe = {
        current: null
    },
    Il = {
        transition: null
    },
    np = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: Il,
        ReactCurrentOwner: du
    };

function uc() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: gl,
    forEach: function(e, t, n) {
        gl(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return gl(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return gl(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!pu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = ir;
Q.Fragment = Hd;
Q.Profiler = Qd;
Q.PureComponent = cu;
Q.StrictMode = Wd;
Q.Suspense = Gd;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
Q.act = uc;
Q.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = tc({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = du.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (a in t) lc.call(t, a) && !oc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        u = Array(a);
        for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
        r.children = u
    }
    return {
        $$typeof: il,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
Q.createContext = function(e) {
    return e = {
        $$typeof: Yd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Kd,
        _context: e
    }, e.Consumer = e
};
Q.createElement = ic;
Q.createFactory = function(e) {
    var t = ic.bind(null, e);
    return t.type = e, t
};
Q.createRef = function() {
    return {
        current: null
    }
};
Q.forwardRef = function(e) {
    return {
        $$typeof: Xd,
        render: e
    }
};
Q.isValidElement = pu;
Q.lazy = function(e) {
    return {
        $$typeof: Zd,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: tp
    }
};
Q.memo = function(e, t) {
    return {
        $$typeof: Jd,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Q.startTransition = function(e) {
    var t = Il.transition;
    Il.transition = {};
    try {
        e()
    } finally {
        Il.transition = t
    }
};
Q.unstable_act = uc;
Q.useCallback = function(e, t) {
    return Fe.current.useCallback(e, t)
};
Q.useContext = function(e) {
    return Fe.current.useContext(e)
};
Q.useDebugValue = function() {};
Q.useDeferredValue = function(e) {
    return Fe.current.useDeferredValue(e)
};
Q.useEffect = function(e, t) {
    return Fe.current.useEffect(e, t)
};
Q.useId = function() {
    return Fe.current.useId()
};
Q.useImperativeHandle = function(e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
};
Q.useInsertionEffect = function(e, t) {
    return Fe.current.useInsertionEffect(e, t)
};
Q.useLayoutEffect = function(e, t) {
    return Fe.current.useLayoutEffect(e, t)
};
Q.useMemo = function(e, t) {
    return Fe.current.useMemo(e, t)
};
Q.useReducer = function(e, t, n) {
    return Fe.current.useReducer(e, t, n)
};
Q.useRef = function(e) {
    return Fe.current.useRef(e)
};
Q.useState = function(e) {
    return Fe.current.useState(e)
};
Q.useSyncExternalStore = function(e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
};
Q.useTransition = function() {
    return Fe.current.useTransition()
};
Q.version = "18.3.1";
bs.exports = Q;
var P = bs.exports;
const rp = qs(P),
    lp = Zs({
        __proto__: null,
        default: rp
    }, [P]);
var ac = {
        exports: {}
    },
    Xe = {},
    sc = {
        exports: {}
    },
    cc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, j) {
        var B = R.length;
        R.push(j);
        e: for (; 0 < B;) {
            var J = B - 1 >>> 1,
                Z = R[J];
            if (0 < l(Z, j)) R[J] = j, R[B] = Z, B = J;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var j = R[0],
            B = R.pop();
        if (B !== j) {
            R[0] = B;
            e: for (var J = 0, Z = R.length, ut = Z >>> 1; J < ut;) {
                var $e = 2 * (J + 1) - 1,
                    Ve = R[$e],
                    Ne = $e + 1,
                    Je = R[Ne];
                if (0 > l(Ve, B)) Ne < Z && 0 > l(Je, Ve) ? (R[J] = Je, R[Ne] = B, J = Ne) : (R[J] = Ve, R[$e] = B, J = $e);
                else if (Ne < Z && 0 > l(Je, B)) R[J] = Je, R[Ne] = B, J = Ne;
                else break e
            }
        }
        return j
    }

    function l(R, j) {
        var B = R.sortIndex - j.sortIndex;
        return B !== 0 ? B : R.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var a = [],
        s = [],
        c = 1,
        d = null,
        p = 3,
        E = !1,
        S = !1,
        w = !1,
        N = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        f = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(R) {
        for (var j = n(s); j !== null;) {
            if (j.callback === null) r(s);
            else if (j.startTime <= R) r(s), j.sortIndex = j.expirationTime, t(a, j);
            else break;
            j = n(s)
        }
    }

    function x(R) {
        if (w = !1, m(R), !S)
            if (n(a) !== null) S = !0, Ft(L);
            else {
                var j = n(s);
                j !== null && Ot(x, j.startTime - R)
            }
    }

    function L(R, j) {
        S = !1, w && (w = !1, h(T), T = -1), E = !0;
        var B = p;
        try {
            for (m(j), d = n(a); d !== null && (!(d.expirationTime > j) || R && !K());) {
                var J = d.callback;
                if (typeof J == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var Z = J(d.expirationTime <= j);
                    j = e.unstable_now(), typeof Z == "function" ? d.callback = Z : d === n(a) && r(a), m(j)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var ut = !0;
            else {
                var $e = n(s);
                $e !== null && Ot(x, $e.startTime - j), ut = !1
            }
            return ut
        } finally {
            d = null, p = B, E = !1
        }
    }
    var D = !1,
        v = null,
        T = -1,
        I = 5,
        F = -1;

    function K() {
        return !(e.unstable_now() - F < I)
    }

    function ce() {
        if (v !== null) {
            var R = e.unstable_now();
            F = R;
            var j = !0;
            try {
                j = v(!0, R)
            } finally {
                j ? oe() : (D = !1, v = null)
            }
        } else D = !1
    }
    var oe;
    if (typeof f == "function") oe = function() {
        f(ce)
    };
    else if (typeof MessageChannel < "u") {
        var we = new MessageChannel,
            it = we.port2;
        we.port1.onmessage = ce, oe = function() {
            it.postMessage(null)
        }
    } else oe = function() {
        N(ce, 0)
    };

    function Ft(R) {
        v = R, D || (D = !0, oe())
    }

    function Ot(R, j) {
        T = N(function() {
            R(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
        R.callback = null
    }, e.unstable_continueExecution = function() {
        S || E || (S = !0, Ft(L))
    }, e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(R) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = p
        }
        var B = p;
        p = j;
        try {
            return R()
        } finally {
            p = B
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, j) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var B = p;
        p = R;
        try {
            return j()
        } finally {
            p = B
        }
    }, e.unstable_scheduleCallback = function(R, j, B) {
        var J = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? J + B : J) : B = J, R) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = B + Z, R = {
            id: c++,
            callback: j,
            priorityLevel: R,
            startTime: B,
            expirationTime: Z,
            sortIndex: -1
        }, B > J ? (R.sortIndex = B, t(s, R), n(a) === null && R === n(s) && (w ? (h(T), T = -1) : w = !0, Ot(x, B - J))) : (R.sortIndex = Z, t(a, R), S || E || (S = !0, Ft(L))), R
    }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(R) {
        var j = p;
        return function() {
            var B = p;
            p = j;
            try {
                return R.apply(this, arguments)
            } finally {
                p = B
            }
        }
    }
})(cc);
sc.exports = cc;
var op = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip = P,
    Ye = op;

function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var fc = new Set,
    $r = {};

function Cn(e, t) {
    Zn(e, t), Zn(e + "Capture", t)
}

function Zn(e, t) {
    for ($r[e] = t, e = 0; e < t.length; e++) fc.add(t[e])
}
var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    pi = Object.prototype.hasOwnProperty,
    up = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    _a = {},
    Ra = {};

function ap(e) {
    return pi.call(Ra, e) ? !0 : pi.call(_a, e) ? !1 : up.test(e) ? Ra[e] = !0 : (_a[e] = !0, !1)
}

function sp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function cp(e, t, n, r) {
    if (t === null || typeof t > "u" || sp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Oe(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Pe[e] = new Oe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Pe[t] = new Oe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Pe[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Pe[e] = new Oe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Pe[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Pe[e] = new Oe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Pe[e] = new Oe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Pe[e] = new Oe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Pe[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var hu = /[\-:]([a-z])/g;

function mu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(hu, mu);
    Pe[t] = new Oe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(hu, mu);
    Pe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(hu, mu);
    Pe[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Pe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Pe.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Pe[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function vu(e, t, n, r) {
    var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cp(t, n, l, r) && (n = null), r || l === null ? ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var zt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wl = Symbol.for("react.element"),
    zn = Symbol.for("react.portal"),
    Mn = Symbol.for("react.fragment"),
    yu = Symbol.for("react.strict_mode"),
    hi = Symbol.for("react.profiler"),
    dc = Symbol.for("react.provider"),
    pc = Symbol.for("react.context"),
    gu = Symbol.for("react.forward_ref"),
    mi = Symbol.for("react.suspense"),
    vi = Symbol.for("react.suspense_list"),
    wu = Symbol.for("react.memo"),
    $t = Symbol.for("react.lazy"),
    hc = Symbol.for("react.offscreen"),
    La = Symbol.iterator;

function vr(e) {
    return e === null || typeof e != "object" ? null : (e = La && e[La] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ae = Object.assign,
    Ao;

function Rr(e) {
    if (Ao === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ao = t && t[1] || ""
    }
    return `
` + Ao + e
}
var Bo = !1;

function $o(e, t) {
    if (!e || Bo) return "";
    Bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (s) {
                    var r = s
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (s) {
                    r = s
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (s) {
                r = s
            }
            e()
        }
    } catch (s) {
        if (s && r && typeof s.stack == "string") {
            for (var l = s.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== o[u]) {
                                var a = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        Bo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Rr(e) : ""
}

function fp(e) {
    switch (e.tag) {
        case 5:
            return Rr(e.type);
        case 16:
            return Rr("Lazy");
        case 13:
            return Rr("Suspense");
        case 19:
            return Rr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = $o(e.type, !1), e;
        case 11:
            return e = $o(e.type.render, !1), e;
        case 1:
            return e = $o(e.type, !0), e;
        default:
            return ""
    }
}

function yi(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Mn:
            return "Fragment";
        case zn:
            return "Portal";
        case hi:
            return "Profiler";
        case yu:
            return "StrictMode";
        case mi:
            return "Suspense";
        case vi:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case pc:
            return (e.displayName || "Context") + ".Consumer";
        case dc:
            return (e._context.displayName || "Context") + ".Provider";
        case gu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case wu:
            return t = e.displayName || null, t !== null ? t : yi(e.type) || "Memo";
        case $t:
            t = e._payload, e = e._init;
            try {
                return yi(e(t))
            } catch {}
    }
    return null
}

function dp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return yi(t);
        case 8:
            return t === yu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function tn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function mc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function pp(e) {
    var t = mc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Sl(e) {
    e._valueTracker || (e._valueTracker = pp(e))
}

function vc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Yl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function gi(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Ta(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = tn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function yc(e, t) {
    t = t.checked, t != null && vu(e, "checked", t, !1)
}

function wi(e, t) {
    yc(e, t);
    var n = tn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Si(e, t.type, n) : t.hasOwnProperty("defaultValue") && Si(e, t.type, tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Na(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Si(e, t, n) {
    (t !== "number" || Yl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Lr = Array.isArray;

function Qn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + tn(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function Ei(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Da(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(C(92));
            if (Lr(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: tn(n)
    }
}

function gc(e, t) {
    var n = tn(t.value),
        r = tn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function za(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function wc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ki(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? wc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var El, Sc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (El = El || document.createElement("div"), El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = El.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Vr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
    hp.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e]
    })
});

function Ec(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px"
}

function kc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ec(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var mp = ae({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function xi(e, t) {
    if (t) {
        if (mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(C(62))
    }
}

function Ci(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Pi = null;

function Su(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var _i = null,
    Kn = null,
    Yn = null;

function Ma(e) {
    if (e = sl(e)) {
        if (typeof _i != "function") throw Error(C(280));
        var t = e.stateNode;
        t && (t = xo(t), _i(e.stateNode, e.type, t))
    }
}

function xc(e) {
    Kn ? Yn ? Yn.push(e) : Yn = [e] : Kn = e
}

function Cc() {
    if (Kn) {
        var e = Kn,
            t = Yn;
        if (Yn = Kn = null, Ma(e), t)
            for (e = 0; e < t.length; e++) Ma(t[e])
    }
}

function Pc(e, t) {
    return e(t)
}

function _c() {}
var Vo = !1;

function Rc(e, t, n) {
    if (Vo) return e(t, n);
    Vo = !0;
    try {
        return Pc(e, t, n)
    } finally {
        Vo = !1, (Kn !== null || Yn !== null) && (_c(), Cc())
    }
}

function Hr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = xo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n
}
var Ri = !1;
if (Lt) try {
    var yr = {};
    Object.defineProperty(yr, "passive", {
        get: function() {
            Ri = !0
        }
    }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr)
} catch {
    Ri = !1
}

function vp(e, t, n, r, l, o, i, u, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, s)
    } catch (c) {
        this.onError(c)
    }
}
var zr = !1,
    Xl = null,
    Gl = !1,
    Li = null,
    yp = {
        onError: function(e) {
            zr = !0, Xl = e
        }
    };

function gp(e, t, n, r, l, o, i, u, a) {
    zr = !1, Xl = null, vp.apply(yp, arguments)
}

function wp(e, t, n, r, l, o, i, u, a) {
    if (gp.apply(this, arguments), zr) {
        if (zr) {
            var s = Xl;
            zr = !1, Xl = null
        } else throw Error(C(198));
        Gl || (Gl = !0, Li = s)
    }
}

function Pn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Lc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Fa(e) {
    if (Pn(e) !== e) throw Error(C(188))
}

function Sp(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Pn(e), t === null) throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Fa(l), e;
                if (o === r) return Fa(l), t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u;) {
                    if (u === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(C(189))
            }
        }
        if (n.alternate !== r) throw Error(C(190))
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t
}

function Tc(e) {
    return e = Sp(e), e !== null ? Nc(e) : null
}

function Nc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Nc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Dc = Ye.unstable_scheduleCallback,
    Oa = Ye.unstable_cancelCallback,
    Ep = Ye.unstable_shouldYield,
    kp = Ye.unstable_requestPaint,
    fe = Ye.unstable_now,
    xp = Ye.unstable_getCurrentPriorityLevel,
    Eu = Ye.unstable_ImmediatePriority,
    zc = Ye.unstable_UserBlockingPriority,
    Jl = Ye.unstable_NormalPriority,
    Cp = Ye.unstable_LowPriority,
    Mc = Ye.unstable_IdlePriority,
    wo = null,
    St = null;

function Pp(e) {
    if (St && typeof St.onCommitFiberRoot == "function") try {
        St.onCommitFiberRoot(wo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Lp,
    _p = Math.log,
    Rp = Math.LN2;

function Lp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_p(e) / Rp | 0) | 0
}
var kl = 64,
    xl = 4194304;

function Tr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Zl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Tr(u) : (o &= i, o !== 0 && (r = Tr(o)))
    } else i = n & ~l, i !== 0 ? r = Tr(i) : o !== 0 && (r = Tr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - pt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Tp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Np(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - pt(o),
            u = 1 << i,
            a = l[i];
        a === -1 ? (!(u & n) || u & r) && (l[i] = Tp(u, t)) : a <= t && (e.expiredLanes |= u), o &= ~u
    }
}

function Ti(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Fc() {
    var e = kl;
    return kl <<= 1, !(kl & 4194240) && (kl = 64), e
}

function Ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ul(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n
}

function Dp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - pt(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function ku(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - pt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var G = 0;

function Oc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ic, xu, Uc, jc, Ac, Ni = !1,
    Cl = [],
    Yt = null,
    Xt = null,
    Gt = null,
    Wr = new Map,
    Qr = new Map,
    Ht = [],
    zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ia(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Yt = null;
            break;
        case "dragenter":
        case "dragleave":
            Xt = null;
            break;
        case "mouseover":
        case "mouseout":
            Gt = null;
            break;
        case "pointerover":
        case "pointerout":
            Wr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Qr.delete(t.pointerId)
    }
}

function gr(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = sl(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Mp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Yt = gr(Yt, e, t, n, r, l), !0;
        case "dragenter":
            return Xt = gr(Xt, e, t, n, r, l), !0;
        case "mouseover":
            return Gt = gr(Gt, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Wr.set(o, gr(Wr.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Qr.set(o, gr(Qr.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Bc(e) {
    var t = fn(e.target);
    if (t !== null) {
        var n = Pn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Lc(n), t !== null) {
                    e.blockedOn = t, Ac(e.priority, function() {
                        Uc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ul(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Pi = r, n.target.dispatchEvent(r), Pi = null
        } else return t = sl(n), t !== null && xu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ua(e, t, n) {
    Ul(e) && n.delete(t)
}

function Fp() {
    Ni = !1, Yt !== null && Ul(Yt) && (Yt = null), Xt !== null && Ul(Xt) && (Xt = null), Gt !== null && Ul(Gt) && (Gt = null), Wr.forEach(Ua), Qr.forEach(Ua)
}

function wr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Fp)))
}

function Kr(e) {
    function t(l) {
        return wr(l, e)
    }
    if (0 < Cl.length) {
        wr(Cl[0], e);
        for (var n = 1; n < Cl.length; n++) {
            var r = Cl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Yt !== null && wr(Yt, e), Xt !== null && wr(Xt, e), Gt !== null && wr(Gt, e), Wr.forEach(t), Qr.forEach(t), n = 0; n < Ht.length; n++) r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null);) Bc(n), n.blockedOn === null && Ht.shift()
}
var Xn = zt.ReactCurrentBatchConfig,
    ql = !0;

function Op(e, t, n, r) {
    var l = G,
        o = Xn.transition;
    Xn.transition = null;
    try {
        G = 1, Cu(e, t, n, r)
    } finally {
        G = l, Xn.transition = o
    }
}

function Ip(e, t, n, r) {
    var l = G,
        o = Xn.transition;
    Xn.transition = null;
    try {
        G = 4, Cu(e, t, n, r)
    } finally {
        G = l, Xn.transition = o
    }
}

function Cu(e, t, n, r) {
    if (ql) {
        var l = Di(e, t, n, r);
        if (l === null) bo(e, t, r, bl, n), Ia(e, r);
        else if (Mp(l, e, t, n, r)) r.stopPropagation();
        else if (Ia(e, r), t & 4 && -1 < zp.indexOf(e)) {
            for (; l !== null;) {
                var o = sl(l);
                if (o !== null && Ic(o), o = Di(e, t, n, r), o === null && bo(e, t, r, bl, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else bo(e, t, r, null, n)
    }
}
var bl = null;

function Di(e, t, n, r) {
    if (bl = null, e = Su(r), e = fn(e), e !== null)
        if (t = Pn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Lc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return bl = e, null
}

function $c(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (xp()) {
                case Eu:
                    return 1;
                case zc:
                    return 4;
                case Jl:
                case Cp:
                    return 16;
                case Mc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Qt = null,
    Pu = null,
    jl = null;

function Vc() {
    if (jl) return jl;
    var e, t = Pu,
        n = t.length,
        r, l = "value" in Qt ? Qt.value : Qt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return jl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Al(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Pl() {
    return !0
}

function ja() {
    return !1
}

function Ge(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pl : ja, this.isPropagationStopped = ja, this
    }
    return ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pl)
        },
        persist: function() {},
        isPersistent: Pl
    }), t
}
var ur = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    _u = Ge(ur),
    al = ae({}, ur, {
        view: 0,
        detail: 0
    }),
    Up = Ge(al),
    Wo, Qo, Sr, So = ae({}, al, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ru,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Wo = e.screenX - Sr.screenX, Qo = e.screenY - Sr.screenY) : Qo = Wo = 0, Sr = e), Wo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Qo
        }
    }),
    Aa = Ge(So),
    jp = ae({}, So, {
        dataTransfer: 0
    }),
    Ap = Ge(jp),
    Bp = ae({}, al, {
        relatedTarget: 0
    }),
    Ko = Ge(Bp),
    $p = ae({}, ur, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Vp = Ge($p),
    Hp = ae({}, ur, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Wp = Ge(Hp),
    Qp = ae({}, ur, {
        data: 0
    }),
    Ba = Ge(Qp),
    Kp = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Yp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Xp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Gp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1
}

function Ru() {
    return Gp
}
var Jp = ae({}, al, {
        key: function(e) {
            if (e.key) {
                var t = Kp[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ru,
        charCode: function(e) {
            return e.type === "keypress" ? Al(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Zp = Ge(Jp),
    qp = ae({}, So, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    $a = Ge(qp),
    bp = ae({}, al, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ru
    }),
    eh = Ge(bp),
    th = ae({}, ur, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    nh = Ge(th),
    rh = ae({}, So, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    lh = Ge(rh),
    oh = [9, 13, 27, 32],
    Lu = Lt && "CompositionEvent" in window,
    Mr = null;
Lt && "documentMode" in document && (Mr = document.documentMode);
var ih = Lt && "TextEvent" in window && !Mr,
    Hc = Lt && (!Lu || Mr && 8 < Mr && 11 >= Mr),
    Va = " ",
    Ha = !1;

function Wc(e, t) {
    switch (e) {
        case "keyup":
            return oh.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Qc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Fn = !1;

function uh(e, t) {
    switch (e) {
        case "compositionend":
            return Qc(t);
        case "keypress":
            return t.which !== 32 ? null : (Ha = !0, Va);
        case "textInput":
            return e = t.data, e === Va && Ha ? null : e;
        default:
            return null
    }
}

function ah(e, t) {
    if (Fn) return e === "compositionend" || !Lu && Wc(e, t) ? (e = Vc(), jl = Pu = Qt = null, Fn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Hc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var sh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Wa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sh[e.type] : t === "textarea"
}

function Kc(e, t, n, r) {
    xc(r), t = eo(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Fr = null,
    Yr = null;

function ch(e) {
    rf(e, 0)
}

function Eo(e) {
    var t = Un(e);
    if (vc(t)) return e
}

function fh(e, t) {
    if (e === "change") return t
}
var Yc = !1;
if (Lt) {
    var Yo;
    if (Lt) {
        var Xo = "oninput" in document;
        if (!Xo) {
            var Qa = document.createElement("div");
            Qa.setAttribute("oninput", "return;"), Xo = typeof Qa.oninput == "function"
        }
        Yo = Xo
    } else Yo = !1;
    Yc = Yo && (!document.documentMode || 9 < document.documentMode)
}

function Ka() {
    Fr && (Fr.detachEvent("onpropertychange", Xc), Yr = Fr = null)
}

function Xc(e) {
    if (e.propertyName === "value" && Eo(Yr)) {
        var t = [];
        Kc(t, Yr, e, Su(e)), Rc(ch, t)
    }
}

function dh(e, t, n) {
    e === "focusin" ? (Ka(), Fr = t, Yr = n, Fr.attachEvent("onpropertychange", Xc)) : e === "focusout" && Ka()
}

function ph(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Eo(Yr)
}

function hh(e, t) {
    if (e === "click") return Eo(t)
}

function mh(e, t) {
    if (e === "input" || e === "change") return Eo(t)
}

function vh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var mt = typeof Object.is == "function" ? Object.is : vh;

function Xr(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!pi.call(t, l) || !mt(e[l], t[l])) return !1
    }
    return !0
}

function Ya(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Xa(e, t) {
    var n = Ya(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ya(n)
    }
}

function Gc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Jc() {
    for (var e = window, t = Yl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Yl(e.document)
    }
    return t
}

function Tu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function yh(e) {
    var t = Jc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Tu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Xa(n, o);
                var i = Xa(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var gh = Lt && "documentMode" in document && 11 >= document.documentMode,
    On = null,
    zi = null,
    Or = null,
    Mi = !1;

function Ga(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Mi || On == null || On !== Yl(r) || (r = On, "selectionStart" in r && Tu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Or && Xr(Or, r) || (Or = r, r = eo(zi, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = On)))
}

function _l(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var In = {
        animationend: _l("Animation", "AnimationEnd"),
        animationiteration: _l("Animation", "AnimationIteration"),
        animationstart: _l("Animation", "AnimationStart"),
        transitionend: _l("Transition", "TransitionEnd")
    },
    Go = {},
    Zc = {};
Lt && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation), "TransitionEvent" in window || delete In.transitionend.transition);

function ko(e) {
    if (Go[e]) return Go[e];
    if (!In[e]) return e;
    var t = In[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Zc) return Go[e] = t[n];
    return e
}
var qc = ko("animationend"),
    bc = ko("animationiteration"),
    ef = ko("animationstart"),
    tf = ko("transitionend"),
    nf = new Map,
    Ja = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function rn(e, t) {
    nf.set(e, t), Cn(t, [e])
}
for (var Jo = 0; Jo < Ja.length; Jo++) {
    var Zo = Ja[Jo],
        wh = Zo.toLowerCase(),
        Sh = Zo[0].toUpperCase() + Zo.slice(1);
    rn(wh, "on" + Sh)
}
rn(qc, "onAnimationEnd");
rn(bc, "onAnimationIteration");
rn(ef, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(tf, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Eh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));

function Za(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, wp(r, t, void 0, e), e.currentTarget = null
}

function rf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        a = u.instance,
                        s = u.currentTarget;
                    if (u = u.listener, a !== o && l.isPropagationStopped()) break e;
                    Za(l, u, s), o = a
                } else
                    for (i = 0; i < r.length; i++) {
                        if (u = r[i], a = u.instance, s = u.currentTarget, u = u.listener, a !== o && l.isPropagationStopped()) break e;
                        Za(l, u, s), o = a
                    }
        }
    }
    if (Gl) throw e = Li, Gl = !1, Li = null, e
}

function b(e, t) {
    var n = t[ji];
    n === void 0 && (n = t[ji] = new Set);
    var r = e + "__bubble";
    n.has(r) || (lf(t, e, 2, !1), n.add(r))
}

function qo(e, t, n) {
    var r = 0;
    t && (r |= 4), lf(n, e, r, t)
}
var Rl = "_reactListening" + Math.random().toString(36).slice(2);

function Gr(e) {
    if (!e[Rl]) {
        e[Rl] = !0, fc.forEach(function(n) {
            n !== "selectionchange" && (Eh.has(n) || qo(n, !1, e), qo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Rl] || (t[Rl] = !0, qo("selectionchange", !1, t))
    }
}

function lf(e, t, n, r) {
    switch ($c(t)) {
        case 1:
            var l = Op;
            break;
        case 4:
            l = Ip;
            break;
        default:
            l = Cu
    }
    n = l.bind(null, t, n, e), l = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function bo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var a = i.tag;
                    if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
                    i = i.return
                }
            for (; u !== null;) {
                if (i = fn(u), i === null) return;
                if (a = i.tag, a === 5 || a === 6) {
                    r = o = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Rc(function() {
        var s = o,
            c = Su(n),
            d = [];
        e: {
            var p = nf.get(e);
            if (p !== void 0) {
                var E = _u,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (Al(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        E = Zp;
                        break;
                    case "focusin":
                        S = "focus", E = Ko;
                        break;
                    case "focusout":
                        S = "blur", E = Ko;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        E = Ko;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        E = Aa;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        E = Ap;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        E = eh;
                        break;
                    case qc:
                    case bc:
                    case ef:
                        E = Vp;
                        break;
                    case tf:
                        E = nh;
                        break;
                    case "scroll":
                        E = Up;
                        break;
                    case "wheel":
                        E = lh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        E = Wp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        E = $a
                }
                var w = (t & 4) !== 0,
                    N = !w && e === "scroll",
                    h = w ? p !== null ? p + "Capture" : null : p;
                w = [];
                for (var f = s, m; f !== null;) {
                    m = f;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x, h !== null && (x = Hr(f, h), x != null && w.push(Jr(f, x, m)))), N) break;
                    f = f.return
                }
                0 < w.length && (p = new E(p, S, null, n, c), d.push({
                    event: p,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", p && n !== Pi && (S = n.relatedTarget || n.fromElement) && (fn(S) || S[Tt])) break e;
                if ((E || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, E ? (S = n.relatedTarget || n.toElement, E = s, S = S ? fn(S) : null, S !== null && (N = Pn(S), S !== N || S.tag !== 5 && S.tag !== 6) && (S = null)) : (E = null, S = s), E !== S)) {
                    if (w = Aa, x = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (w = $a, x = "onPointerLeave", h = "onPointerEnter", f = "pointer"), N = E == null ? p : Un(E), m = S == null ? p : Un(S), p = new w(x, f + "leave", E, n, c), p.target = N, p.relatedTarget = m, x = null, fn(c) === s && (w = new w(h, f + "enter", S, n, c), w.target = m, w.relatedTarget = N, x = w), N = x, E && S) t: {
                        for (w = E, h = S, f = 0, m = w; m; m = Nn(m)) f++;
                        for (m = 0, x = h; x; x = Nn(x)) m++;
                        for (; 0 < f - m;) w = Nn(w),
                        f--;
                        for (; 0 < m - f;) h = Nn(h),
                        m--;
                        for (; f--;) {
                            if (w === h || h !== null && w === h.alternate) break t;
                            w = Nn(w), h = Nn(h)
                        }
                        w = null
                    }
                    else w = null;
                    E !== null && qa(d, p, E, w, !1), S !== null && N !== null && qa(d, N, S, w, !0)
                }
            }
            e: {
                if (p = s ? Un(s) : window, E = p.nodeName && p.nodeName.toLowerCase(), E === "select" || E === "input" && p.type === "file") var L = fh;
                else if (Wa(p))
                    if (Yc) L = mh;
                    else {
                        L = ph;
                        var D = dh
                    }
                else(E = p.nodeName) && E.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (L = hh);
                if (L && (L = L(e, s))) {
                    Kc(d, L, n, c);
                    break e
                }
                D && D(e, p, s),
                e === "focusout" && (D = p._wrapperState) && D.controlled && p.type === "number" && Si(p, "number", p.value)
            }
            switch (D = s ? Un(s) : window, e) {
                case "focusin":
                    (Wa(D) || D.contentEditable === "true") && (On = D, zi = s, Or = null);
                    break;
                case "focusout":
                    Or = zi = On = null;
                    break;
                case "mousedown":
                    Mi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Mi = !1, Ga(d, n, c);
                    break;
                case "selectionchange":
                    if (gh) break;
                case "keydown":
                case "keyup":
                    Ga(d, n, c)
            }
            var v;
            if (Lu) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Fn ? Wc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (Hc && n.locale !== "ko" && (Fn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Fn && (v = Vc()) : (Qt = c, Pu = "value" in Qt ? Qt.value : Qt.textContent, Fn = !0)), D = eo(s, T), 0 < D.length && (T = new Ba(T, e, null, n, c), d.push({
                event: T,
                listeners: D
            }), v ? T.data = v : (v = Qc(n), v !== null && (T.data = v)))),
            (v = ih ? uh(e, n) : ah(e, n)) && (s = eo(s, "onBeforeInput"), 0 < s.length && (c = new Ba("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: s
            }), c.data = v))
        }
        rf(d, t)
    })
}

function Jr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function eo(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = Hr(e, n), o != null && r.unshift(Jr(e, o, l)), o = Hr(e, t), o != null && r.push(Jr(e, o, l))), e = e.return
    }
    return r
}

function Nn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function qa(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            a = u.alternate,
            s = u.stateNode;
        if (a !== null && a === r) break;
        u.tag === 5 && s !== null && (u = s, l ? (a = Hr(n, o), a != null && i.unshift(Jr(n, a, u))) : l || (a = Hr(n, o), a != null && i.push(Jr(n, a, u)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var kh = /\r\n?/g,
    xh = /\u0000|\uFFFD/g;

function ba(e) {
    return (typeof e == "string" ? e : "" + e).replace(kh, `
`).replace(xh, "")
}

function Ll(e, t, n) {
    if (t = ba(t), ba(e) !== t && n) throw Error(C(425))
}

function to() {}
var Fi = null,
    Oi = null;

function Ii(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0,
    Ch = typeof clearTimeout == "function" ? clearTimeout : void 0,
    es = typeof Promise == "function" ? Promise : void 0,
    Ph = typeof queueMicrotask == "function" ? queueMicrotask : typeof es < "u" ? function(e) {
        return es.resolve(null).then(e).catch(_h)
    } : Ui;

function _h(e) {
    setTimeout(function() {
        throw e
    })
}

function ei(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Kr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Kr(t)
}

function Jt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ts(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ar = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + ar,
    Zr = "__reactProps$" + ar,
    Tt = "__reactContainer$" + ar,
    ji = "__reactEvents$" + ar,
    Rh = "__reactListeners$" + ar,
    Lh = "__reactHandles$" + ar;

function fn(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Tt] || n[wt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ts(e); e !== null;) {
                    if (n = e[wt]) return n;
                    e = ts(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function sl(e) {
    return e = e[wt] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33))
}

function xo(e) {
    return e[Zr] || null
}
var Ai = [],
    jn = -1;

function ln(e) {
    return {
        current: e
    }
}

function ee(e) {
    0 > jn || (e.current = Ai[jn], Ai[jn] = null, jn--)
}

function q(e, t) {
    jn++, Ai[jn] = e.current, e.current = t
}
var nn = {},
    Te = ln(nn),
    je = ln(!1),
    gn = nn;

function qn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Ae(e) {
    return e = e.childContextTypes, e != null
}

function no() {
    ee(je), ee(Te)
}

function ns(e, t, n) {
    if (Te.current !== nn) throw Error(C(168));
    q(Te, t), q(je, n)
}

function of (e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(C(108, dp(e) || "Unknown", l));
    return ae({}, n, r)
}

function ro(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, gn = Te.current, q(Te, e), q(je, je.current), !0
}

function rs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? (e = of (e, t, gn), r.__reactInternalMemoizedMergedChildContext = e, ee(je), ee(Te), q(Te, e)) : ee(je), q(je, n)
}
var xt = null,
    Co = !1,
    ti = !1;

function uf(e) {
    xt === null ? xt = [e] : xt.push(e)
}

function Th(e) {
    Co = !0, uf(e)
}

function on() {
    if (!ti && xt !== null) {
        ti = !0;
        var e = 0,
            t = G;
        try {
            var n = xt;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            xt = null, Co = !1
        } catch (l) {
            throw xt !== null && (xt = xt.slice(e + 1)), Dc(Eu, on), l
        } finally {
            G = t, ti = !1
        }
    }
    return null
}
var An = [],
    Bn = 0,
    lo = null,
    oo = 0,
    be = [],
    et = 0,
    wn = null,
    Ct = 1,
    Pt = "";

function sn(e, t) {
    An[Bn++] = oo, An[Bn++] = lo, lo = e, oo = t
}

function af(e, t, n) {
    be[et++] = Ct, be[et++] = Pt, be[et++] = wn, wn = e;
    var r = Ct;
    e = Pt;
    var l = 32 - pt(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - pt(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ct = 1 << 32 - pt(t) + l | n << l | r, Pt = o + e
    } else Ct = 1 << o | n << l | r, Pt = e
}

function Nu(e) {
    e.return !== null && (sn(e, 1), af(e, 1, 0))
}

function Du(e) {
    for (; e === lo;) lo = An[--Bn], An[Bn] = null, oo = An[--Bn], An[Bn] = null;
    for (; e === wn;) wn = be[--et], be[et] = null, Pt = be[--et], be[et] = null, Ct = be[--et], be[et] = null
}
var Ke = null,
    Qe = null,
    le = !1,
    dt = null;

function sf(e, t) {
    var n = nt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ls(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Qe = Jt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Qe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? {
                id: Ct,
                overflow: Pt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Qe = null, !0) : !1;
        default:
            return !1
    }
}

function Bi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function $i(e) {
    if (le) {
        var t = Qe;
        if (t) {
            var n = t;
            if (!ls(e, t)) {
                if (Bi(e)) throw Error(C(418));
                t = Jt(n.nextSibling);
                var r = Ke;
                t && ls(e, t) ? sf(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Ke = e)
            }
        } else {
            if (Bi(e)) throw Error(C(418));
            e.flags = e.flags & -4097 | 2, le = !1, Ke = e
        }
    }
}

function os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ke = e
}

function Tl(e) {
    if (e !== Ke) return !1;
    if (!le) return os(e), le = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps)), t && (t = Qe)) {
        if (Bi(e)) throw cf(), Error(C(418));
        for (; t;) sf(e, t), t = Jt(t.nextSibling)
    }
    if (os(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Qe = Jt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Qe = null
        }
    } else Qe = Ke ? Jt(e.stateNode.nextSibling) : null;
    return !0
}

function cf() {
    for (var e = Qe; e;) e = Jt(e.nextSibling)
}

function bn() {
    Qe = Ke = null, le = !1
}

function zu(e) {
    dt === null ? dt = [e] : dt.push(e)
}
var Nh = zt.ReactCurrentBatchConfig;

function Er(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(C(309));
                var r = n.stateNode
            }
            if (!r) throw Error(C(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, e))
    }
    return e
}

function Nl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function is(e) {
    var t = e._init;
    return t(e._payload)
}

function ff(e) {
    function t(h, f) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [f], h.flags |= 16) : m.push(f)
        }
    }

    function n(h, f) {
        if (!e) return null;
        for (; f !== null;) t(h, f), f = f.sibling;
        return null
    }

    function r(h, f) {
        for (h = new Map; f !== null;) f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling;
        return h
    }

    function l(h, f) {
        return h = en(h, f), h.index = 0, h.sibling = null, h
    }

    function o(h, f, m) {
        return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < f ? (h.flags |= 2, f) : m) : (h.flags |= 2, f)) : (h.flags |= 1048576, f)
    }

    function i(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function u(h, f, m, x) {
        return f === null || f.tag !== 6 ? (f = ai(m, h.mode, x), f.return = h, f) : (f = l(f, m), f.return = h, f)
    }

    function a(h, f, m, x) {
        var L = m.type;
        return L === Mn ? c(h, f, m.props.children, x, m.key) : f !== null && (f.elementType === L || typeof L == "object" && L !== null && L.$$typeof === $t && is(L) === f.type) ? (x = l(f, m.props), x.ref = Er(h, f, m), x.return = h, x) : (x = Kl(m.type, m.key, m.props, null, h.mode, x), x.ref = Er(h, f, m), x.return = h, x)
    }

    function s(h, f, m, x) {
        return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = si(m, h.mode, x), f.return = h, f) : (f = l(f, m.children || []), f.return = h, f)
    }

    function c(h, f, m, x, L) {
        return f === null || f.tag !== 7 ? (f = yn(m, h.mode, x, L), f.return = h, f) : (f = l(f, m), f.return = h, f)
    }

    function d(h, f, m) {
        if (typeof f == "string" && f !== "" || typeof f == "number") return f = ai("" + f, h.mode, m), f.return = h, f;
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case wl:
                    return m = Kl(f.type, f.key, f.props, null, h.mode, m), m.ref = Er(h, null, f), m.return = h, m;
                case zn:
                    return f = si(f, h.mode, m), f.return = h, f;
                case $t:
                    var x = f._init;
                    return d(h, x(f._payload), m)
            }
            if (Lr(f) || vr(f)) return f = yn(f, h.mode, m, null), f.return = h, f;
            Nl(h, f)
        }
        return null
    }

    function p(h, f, m, x) {
        var L = f !== null ? f.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return L !== null ? null : u(h, f, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case wl:
                    return m.key === L ? a(h, f, m, x) : null;
                case zn:
                    return m.key === L ? s(h, f, m, x) : null;
                case $t:
                    return L = m._init, p(h, f, L(m._payload), x)
            }
            if (Lr(m) || vr(m)) return L !== null ? null : c(h, f, m, x, null);
            Nl(h, m)
        }
        return null
    }

    function E(h, f, m, x, L) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(m) || null, u(f, h, "" + x, L);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case wl:
                    return h = h.get(x.key === null ? m : x.key) || null, a(f, h, x, L);
                case zn:
                    return h = h.get(x.key === null ? m : x.key) || null, s(f, h, x, L);
                case $t:
                    var D = x._init;
                    return E(h, f, m, D(x._payload), L)
            }
            if (Lr(x) || vr(x)) return h = h.get(m) || null, c(f, h, x, L, null);
            Nl(f, x)
        }
        return null
    }

    function S(h, f, m, x) {
        for (var L = null, D = null, v = f, T = f = 0, I = null; v !== null && T < m.length; T++) {
            v.index > T ? (I = v, v = null) : I = v.sibling;
            var F = p(h, v, m[T], x);
            if (F === null) {
                v === null && (v = I);
                break
            }
            e && v && F.alternate === null && t(h, v), f = o(F, f, T), D === null ? L = F : D.sibling = F, D = F, v = I
        }
        if (T === m.length) return n(h, v), le && sn(h, T), L;
        if (v === null) {
            for (; T < m.length; T++) v = d(h, m[T], x), v !== null && (f = o(v, f, T), D === null ? L = v : D.sibling = v, D = v);
            return le && sn(h, T), L
        }
        for (v = r(h, v); T < m.length; T++) I = E(v, h, T, m[T], x), I !== null && (e && I.alternate !== null && v.delete(I.key === null ? T : I.key), f = o(I, f, T), D === null ? L = I : D.sibling = I, D = I);
        return e && v.forEach(function(K) {
            return t(h, K)
        }), le && sn(h, T), L
    }

    function w(h, f, m, x) {
        var L = vr(m);
        if (typeof L != "function") throw Error(C(150));
        if (m = L.call(m), m == null) throw Error(C(151));
        for (var D = L = null, v = f, T = f = 0, I = null, F = m.next(); v !== null && !F.done; T++, F = m.next()) {
            v.index > T ? (I = v, v = null) : I = v.sibling;
            var K = p(h, v, F.value, x);
            if (K === null) {
                v === null && (v = I);
                break
            }
            e && v && K.alternate === null && t(h, v), f = o(K, f, T), D === null ? L = K : D.sibling = K, D = K, v = I
        }
        if (F.done) return n(h, v), le && sn(h, T), L;
        if (v === null) {
            for (; !F.done; T++, F = m.next()) F = d(h, F.value, x), F !== null && (f = o(F, f, T), D === null ? L = F : D.sibling = F, D = F);
            return le && sn(h, T), L
        }
        for (v = r(h, v); !F.done; T++, F = m.next()) F = E(v, h, T, F.value, x), F !== null && (e && F.alternate !== null && v.delete(F.key === null ? T : F.key), f = o(F, f, T), D === null ? L = F : D.sibling = F, D = F);
        return e && v.forEach(function(ce) {
            return t(h, ce)
        }), le && sn(h, T), L
    }

    function N(h, f, m, x) {
        if (typeof m == "object" && m !== null && m.type === Mn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case wl:
                    e: {
                        for (var L = m.key, D = f; D !== null;) {
                            if (D.key === L) {
                                if (L = m.type, L === Mn) {
                                    if (D.tag === 7) {
                                        n(h, D.sibling), f = l(D, m.props.children), f.return = h, h = f;
                                        break e
                                    }
                                } else if (D.elementType === L || typeof L == "object" && L !== null && L.$$typeof === $t && is(L) === D.type) {
                                    n(h, D.sibling), f = l(D, m.props), f.ref = Er(h, D, m), f.return = h, h = f;
                                    break e
                                }
                                n(h, D);
                                break
                            } else t(h, D);
                            D = D.sibling
                        }
                        m.type === Mn ? (f = yn(m.props.children, h.mode, x, m.key), f.return = h, h = f) : (x = Kl(m.type, m.key, m.props, null, h.mode, x), x.ref = Er(h, f, m), x.return = h, h = x)
                    }
                    return i(h);
                case zn:
                    e: {
                        for (D = m.key; f !== null;) {
                            if (f.key === D)
                                if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                                    n(h, f.sibling), f = l(f, m.children || []), f.return = h, h = f;
                                    break e
                                } else {
                                    n(h, f);
                                    break
                                }
                            else t(h, f);
                            f = f.sibling
                        }
                        f = si(m, h.mode, x),
                        f.return = h,
                        h = f
                    }
                    return i(h);
                case $t:
                    return D = m._init, N(h, f, D(m._payload), x)
            }
            if (Lr(m)) return S(h, f, m, x);
            if (vr(m)) return w(h, f, m, x);
            Nl(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(h, f.sibling), f = l(f, m), f.return = h, h = f) : (n(h, f), f = ai(m, h.mode, x), f.return = h, h = f), i(h)) : n(h, f)
    }
    return N
}
var er = ff(!0),
    df = ff(!1),
    io = ln(null),
    uo = null,
    $n = null,
    Mu = null;

function Fu() {
    Mu = $n = uo = null
}

function Ou(e) {
    var t = io.current;
    ee(io), e._currentValue = t
}

function Vi(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Gn(e, t) {
    uo = e, Mu = $n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null)
}

function lt(e) {
    var t = e._currentValue;
    if (Mu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, $n === null) {
            if (uo === null) throw Error(C(308));
            $n = e, uo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else $n = $n.next = e;
    return t
}
var dn = null;

function Iu(e) {
    dn === null ? dn = [e] : dn.push(e)
}

function pf(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Iu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Nt(e, r)
}

function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Vt = !1;

function Uu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function hf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function _t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Zt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Nt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, Iu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Nt(e, n)
}

function Bl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n)
    }
}

function us(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ao(e, t, n, r) {
    var l = e.updateQueue;
    Vt = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var a = u,
            s = a.next;
        a.next = null, i === null ? o = s : i.next = s, i = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, u = c.lastBaseUpdate, u !== i && (u === null ? c.firstBaseUpdate = s : u.next = s, c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var d = l.baseState;
        i = 0, c = s = a = null, u = o;
        do {
            var p = u.lane,
                E = u.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: E,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var S = e,
                        w = u;
                    switch (p = t, E = n, w.tag) {
                        case 1:
                            if (S = w.payload, typeof S == "function") {
                                d = S.call(E, d, p);
                                break e
                            }
                            d = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = w.payload, p = typeof S == "function" ? S.call(E, d, p) : S, p == null) break e;
                            d = ae({}, d, p);
                            break e;
                        case 2:
                            Vt = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u))
            } else E = {
                eventTime: E,
                lane: p,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, c === null ? (s = c = E, a = d) : c = c.next = E, i |= p;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = c, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        En |= i, e.lanes = i, e.memoizedState = d
    }
}

function as(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(C(191, l));
                l.call(r)
            }
        }
}
var cl = {},
    Et = ln(cl),
    qr = ln(cl),
    br = ln(cl);

function pn(e) {
    if (e === cl) throw Error(C(174));
    return e
}

function ju(e, t) {
    switch (q(br, t), q(qr, e), q(Et, cl), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e)
    }
    ee(Et), q(Et, t)
}

function tr() {
    ee(Et), ee(qr), ee(br)
}

function mf(e) {
    pn(br.current);
    var t = pn(Et.current),
        n = ki(t, e.type);
    t !== n && (q(qr, e), q(Et, n))
}

function Au(e) {
    qr.current === e && (ee(Et), ee(qr))
}
var ie = ln(0);

function so(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ni = [];

function Bu() {
    for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null;
    ni.length = 0
}
var $l = zt.ReactCurrentDispatcher,
    ri = zt.ReactCurrentBatchConfig,
    Sn = 0,
    ue = null,
    he = null,
    ye = null,
    co = !1,
    Ir = !1,
    el = 0,
    Dh = 0;

function _e() {
    throw Error(C(321))
}

function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!mt(e[n], t[n])) return !1;
    return !0
}

function Vu(e, t, n, r, l, o) {
    if (Sn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $l.current = e === null || e.memoizedState === null ? Oh : Ih, e = n(r, l), Ir) {
        o = 0;
        do {
            if (Ir = !1, el = 0, 25 <= o) throw Error(C(301));
            o += 1, ye = he = null, t.updateQueue = null, $l.current = Uh, e = n(r, l)
        } while (Ir)
    }
    if ($l.current = fo, t = he !== null && he.next !== null, Sn = 0, ye = he = ue = null, co = !1, t) throw Error(C(300));
    return e
}

function Hu() {
    var e = el !== 0;
    return el = 0, e
}

function gt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ue.memoizedState = ye = e : ye = ye.next = e, ye
}

function ot() {
    if (he === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = he.next;
    var t = ye === null ? ue.memoizedState : ye.next;
    if (t !== null) ye = t, he = e;
    else {
        if (e === null) throw Error(C(310));
        he = e, e = {
            memoizedState: he.memoizedState,
            baseState: he.baseState,
            baseQueue: he.baseQueue,
            queue: he.queue,
            next: null
        }, ye === null ? ue.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}

function tl(e, t) {
    return typeof t == "function" ? t(e) : t
}

function li(e) {
    var t = ot(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = he,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var u = i = null,
            a = null,
            s = o;
        do {
            var c = s.lane;
            if ((Sn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
            }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
            else {
                var d = {
                    lane: c,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                };
                a === null ? (u = a = d, i = r) : a = a.next = d, ue.lanes |= c, En |= c
            }
            s = s.next
        } while (s !== null && s !== o);
        a === null ? i = r : a.next = u, mt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, ue.lanes |= o, En |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function oi(e) {
    var t = ot(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        mt(o, t.memoizedState) || (Ue = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function vf() {}

function yf(e, t) {
    var n = ue,
        r = ot(),
        l = t(),
        o = !mt(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ue = !0), r = r.queue, Wu(Sf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048, nl(9, wf.bind(null, n, r, l, t), void 0, null), ge === null) throw Error(C(349));
        Sn & 30 || gf(n, t, l)
    }
    return l
}

function gf(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function wf(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ef(t) && kf(e)
}

function Sf(e, t, n) {
    return n(function() {
        Ef(t) && kf(e)
    })
}

function Ef(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !mt(e, n)
    } catch {
        return !0
    }
}

function kf(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1)
}

function ss(e) {
    var t = gt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Fh.bind(null, ue, e), [t.memoizedState, e]
}

function nl(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function xf() {
    return ot().memoizedState
}

function Vl(e, t, n, r) {
    var l = gt();
    ue.flags |= e, l.memoizedState = nl(1 | t, n, void 0, r === void 0 ? null : r)
}

function Po(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (he !== null) {
        var i = he.memoizedState;
        if (o = i.destroy, r !== null && $u(r, i.deps)) {
            l.memoizedState = nl(t, n, o, r);
            return
        }
    }
    ue.flags |= e, l.memoizedState = nl(1 | t, n, o, r)
}

function cs(e, t) {
    return Vl(8390656, 8, e, t)
}

function Wu(e, t) {
    return Po(2048, 8, e, t)
}

function Cf(e, t) {
    return Po(4, 2, e, t)
}

function Pf(e, t) {
    return Po(4, 4, e, t)
}

function _f(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Rf(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Po(4, 4, _f.bind(null, t, e), n)
}

function Qu() {}

function Lf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Tf(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Nf(e, t, n) {
    return Sn & 21 ? (mt(n, t) || (n = Fc(), ue.lanes |= n, En |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n)
}

function zh(e, t) {
    var n = G;
    G = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = ri.transition;
    ri.transition = {};
    try {
        e(!1), t()
    } finally {
        G = n, ri.transition = r
    }
}

function Df() {
    return ot().memoizedState
}

function Mh(e, t, n) {
    var r = bt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, zf(e)) Mf(t, n);
    else if (n = pf(e, t, n, r), n !== null) {
        var l = Me();
        ht(n, e, r, l), Ff(n, t, r)
    }
}

function Fh(e, t, n) {
    var r = bt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (zf(e)) Mf(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                u = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, mt(u, i)) {
                var a = t.interleaved;
                a === null ? (l.next = l, Iu(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = pf(e, t, l, r), n !== null && (l = Me(), ht(n, e, r, l), Ff(n, t, r))
    }
}

function zf(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function Mf(e, t) {
    Ir = co = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ff(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n)
    }
}
var fo = {
        readContext: lt,
        useCallback: _e,
        useContext: _e,
        useEffect: _e,
        useImperativeHandle: _e,
        useInsertionEffect: _e,
        useLayoutEffect: _e,
        useMemo: _e,
        useReducer: _e,
        useRef: _e,
        useState: _e,
        useDebugValue: _e,
        useDeferredValue: _e,
        useTransition: _e,
        useMutableSource: _e,
        useSyncExternalStore: _e,
        useId: _e,
        unstable_isNewReconciler: !1
    },
    Oh = {
        readContext: lt,
        useCallback: function(e, t) {
            return gt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: lt,
        useEffect: cs,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Vl(4194308, 4, _f.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Vl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Vl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = gt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = gt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Mh.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = gt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ss,
        useDebugValue: Qu,
        useDeferredValue: function(e) {
            return gt().memoizedState = e
        },
        useTransition: function() {
            var e = ss(!1),
                t = e[0];
            return e = zh.bind(null, e[1]), gt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                l = gt();
            if (le) {
                if (n === void 0) throw Error(C(407));
                n = n()
            } else {
                if (n = t(), ge === null) throw Error(C(349));
                Sn & 30 || gf(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, cs(Sf.bind(null, r, o, e), [e]), r.flags |= 2048, nl(9, wf.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = gt(),
                t = ge.identifierPrefix;
            if (le) {
                var n = Pt,
                    r = Ct;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = el++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Dh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Ih = {
        readContext: lt,
        useCallback: Lf,
        useContext: lt,
        useEffect: Wu,
        useImperativeHandle: Rf,
        useInsertionEffect: Cf,
        useLayoutEffect: Pf,
        useMemo: Tf,
        useReducer: li,
        useRef: xf,
        useState: function() {
            return li(tl)
        },
        useDebugValue: Qu,
        useDeferredValue: function(e) {
            var t = ot();
            return Nf(t, he.memoizedState, e)
        },
        useTransition: function() {
            var e = li(tl)[0],
                t = ot().memoizedState;
            return [e, t]
        },
        useMutableSource: vf,
        useSyncExternalStore: yf,
        useId: Df,
        unstable_isNewReconciler: !1
    },
    Uh = {
        readContext: lt,
        useCallback: Lf,
        useContext: lt,
        useEffect: Wu,
        useImperativeHandle: Rf,
        useInsertionEffect: Cf,
        useLayoutEffect: Pf,
        useMemo: Tf,
        useReducer: oi,
        useRef: xf,
        useState: function() {
            return oi(tl)
        },
        useDebugValue: Qu,
        useDeferredValue: function(e) {
            var t = ot();
            return he === null ? t.memoizedState = e : Nf(t, he.memoizedState, e)
        },
        useTransition: function() {
            var e = oi(tl)[0],
                t = ot().memoizedState;
            return [e, t]
        },
        useMutableSource: vf,
        useSyncExternalStore: yf,
        useId: Df,
        unstable_isNewReconciler: !1
    };

function st(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Hi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var _o = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Pn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            l = bt(e),
            o = _t(r, l);
        o.payload = t, n != null && (o.callback = n), t = Zt(e, o, l), t !== null && (ht(t, e, l, r), Bl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            l = bt(e),
            o = _t(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Zt(e, o, l), t !== null && (ht(t, e, l, r), Bl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me(),
            r = bt(e),
            l = _t(n, r);
        l.tag = 2, t != null && (l.callback = t), t = Zt(e, l, r), t !== null && (ht(t, e, r, n), Bl(t, e, r))
    }
};

function fs(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(l, o) : !0
}

function Of(e, t, n) {
    var r = !1,
        l = nn,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = lt(o) : (l = Ae(t) ? gn : Te.current, r = t.contextTypes, o = (r = r != null) ? qn(e, l) : nn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _o, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function ds(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _o.enqueueReplaceState(t, t.state, null)
}

function Wi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Uu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = lt(o) : (o = Ae(t) ? gn : Te.current, l.context = qn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _o.enqueueReplaceState(l, l.state, null), ao(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function nr(e, t) {
    try {
        var n = "",
            r = t;
        do n += fp(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function ii(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Qi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var jh = typeof WeakMap == "function" ? WeakMap : Map;

function If(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ho || (ho = !0, tu = r), Qi(e, t)
    }, n
}

function Uf(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Qi(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Qi(e, t), typeof r != "function" && (qt === null ? qt = new Set([this]) : qt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function ps(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new jh;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = qh.bind(null, e, t, n), t.then(e, e))
}

function hs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function ms(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Zt(n, t, 1))), n.lanes |= 1), e)
}
var Ah = zt.ReactCurrentOwner,
    Ue = !1;

function ze(e, t, n, r) {
    t.child = e === null ? df(t, null, n, r) : er(t, e.child, n, r)
}

function vs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Gn(t, l), r = Vu(e, t, n, r, o, l), n = Hu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (le && n && Nu(t), t.flags |= 1, ze(e, t, r, l), t.child)
}

function ys(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !bu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, jf(e, t, o, r, l)) : (e = Kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xr, n(i, r) && e.ref === t.ref) return Dt(e, t, l)
    }
    return t.flags |= 1, e = en(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function jf(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Xr(o, r) && e.ref === t.ref)
            if (Ue = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (Ue = !0);
            else return t.lanes = e.lanes, Dt(e, t, l)
    }
    return Ki(e, t, n, r, l)
}

function Af(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(Hn, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, q(Hn, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, q(Hn, We), We |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, q(Hn, We), We |= r;
    return ze(e, t, l, n), t.child
}

function Bf(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ki(e, t, n, r, l) {
    var o = Ae(n) ? gn : Te.current;
    return o = qn(t, o), Gn(t, l), n = Vu(e, t, n, r, o, l), r = Hu(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Dt(e, t, l)) : (le && r && Nu(t), t.flags |= 1, ze(e, t, n, l), t.child)
}

function gs(e, t, n, r, l) {
    if (Ae(n)) {
        var o = !0;
        ro(t)
    } else o = !1;
    if (Gn(t, l), t.stateNode === null) Hl(e, t), Of(t, n, r), Wi(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var a = i.context,
            s = n.contextType;
        typeof s == "object" && s !== null ? s = lt(s) : (s = Ae(n) ? gn : Te.current, s = qn(t, s));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || a !== s) && ds(t, i, r, s), Vt = !1;
        var p = t.memoizedState;
        i.state = p, ao(t, r, i, l), a = t.memoizedState, u !== r || p !== a || je.current || Vt ? (typeof c == "function" && (Hi(t, n, c, r), a = t.memoizedState), (u = Vt || fs(t, n, u, r, p, a, s)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = s, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, hf(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : st(t.type, u), i.props = s, d = t.pendingProps, p = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = lt(a) : (a = Ae(n) ? gn : Te.current, a = qn(t, a));
        var E = n.getDerivedStateFromProps;
        (c = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || p !== a) && ds(t, i, r, a), Vt = !1, p = t.memoizedState, i.state = p, ao(t, r, i, l);
        var S = t.memoizedState;
        u !== d || p !== S || je.current || Vt ? (typeof E == "function" && (Hi(t, n, E, r), S = t.memoizedState), (s = Vt || fs(t, n, s, r, p, S, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = a, r = s) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Yi(e, t, n, r, o, l)
}

function Yi(e, t, n, r, l, o) {
    Bf(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && rs(t, n, !1), Dt(e, t, o);
    r = t.stateNode, Ah.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = er(t, e.child, null, o), t.child = er(t, null, u, o)) : ze(e, t, u, o), t.memoizedState = r.state, l && rs(t, n, !0), t.child
}

function $f(e) {
    var t = e.stateNode;
    t.pendingContext ? ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ns(e, t.context, !1), ju(e, t.containerInfo)
}

function ws(e, t, n, r, l) {
    return bn(), zu(l), t.flags |= 256, ze(e, t, n, r), t.child
}
var Xi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Gi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Vf(e, t, n) {
    var r = t.pendingProps,
        l = ie.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), q(ie, l & 1), e === null) return $i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = To(i, r, 0, null), e = yn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Gi(n), t.memoizedState = Xi, e) : Ku(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Bh(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = en(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = en(u, o) : (o = yn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Gi(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Xi, r
    }
    return o = e.child, e = o.sibling, r = en(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ku(e, t) {
    return t = To({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Dl(e, t, n, r) {
    return r !== null && zu(r), er(t, e.child, null, n), e = Ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Bh(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ii(Error(C(422))), Dl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = To({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = yn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && er(t, e.child, null, i), t.child.memoizedState = Gi(i), t.memoizedState = Xi, o);
    if (!(t.mode & 1)) return Dl(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, o = Error(C(419)), r = ii(o, r, void 0), Dl(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, Ue || u) {
        if (r = ge, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Nt(e, l), ht(r, e, l, -1))
        }
        return qu(), r = ii(Error(C(421))), Dl(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Qe = Jt(l.nextSibling), Ke = t, le = !0, dt = null, e !== null && (be[et++] = Ct, be[et++] = Pt, be[et++] = wn, Ct = e.id, Pt = e.overflow, wn = t), t = Ku(t, r.children), t.flags |= 4096, t)
}

function Ss(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vi(e.return, t, n)
}

function ui(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Hf(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (ze(e, t, r.children, n), r = ie.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ss(e, n, t);
            else if (e.tag === 19) Ss(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (q(ie, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && so(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ui(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && so(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            ui(t, !0, n, null, o);
            break;
        case "together":
            ui(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Hl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Dt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), En |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = en(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function $h(e, t, n) {
    switch (t.tag) {
        case 3:
            $f(t), bn();
            break;
        case 5:
            mf(t);
            break;
        case 1:
            Ae(t.type) && ro(t);
            break;
        case 4:
            ju(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            q(io, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(ie, ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vf(e, t, n) : (q(ie, ie.current & 1), e = Dt(e, t, n), e !== null ? e.sibling : null);
            q(ie, ie.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Hf(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), q(ie, ie.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Af(e, t, n)
    }
    return Dt(e, t, n)
}
var Wf, Ji, Qf, Kf;
Wf = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ji = function() {};
Qf = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, pn(Et.current);
        var o = null;
        switch (n) {
            case "input":
                l = gi(e, l), r = gi(e, r), o = [];
                break;
            case "select":
                l = ae({}, l, {
                    value: void 0
                }), r = ae({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = Ei(e, l), r = Ei(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = to)
        }
        xi(n, r);
        var i;
        n = null;
        for (s in l)
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
                if (s === "style") {
                    var u = l[s];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && ($r.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
        for (s in r) {
            var a = r[s];
            if (u = l != null ? l[s] : void 0, r.hasOwnProperty(s) && a !== u && (a != null || u != null))
                if (s === "style")
                    if (u) {
                        for (i in u) !u.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in a) a.hasOwnProperty(i) && u[i] !== a[i] && (n || (n = {}), n[i] = a[i])
                    } else n || (o || (o = []), o.push(s, n)), n = a;
            else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && ($r.hasOwnProperty(s) ? (a != null && s === "onScroll" && b("scroll", e), o || u === a || (o = [])) : (o = o || []).push(s, a))
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4)
    }
};
Kf = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function kr(e, t) {
    if (!le) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Vh(e, t, n) {
    var r = t.pendingProps;
    switch (Du(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Re(t), null;
        case 1:
            return Ae(t.type) && no(), Re(t), null;
        case 3:
            return r = t.stateNode, tr(), ee(je), ee(Te), Bu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (lu(dt), dt = null))), Ji(e, t), Re(t), null;
        case 5:
            Au(t);
            var l = pn(br.current);
            if (n = t.type, e !== null && t.stateNode != null) Qf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(C(166));
                    return Re(t), null
                }
                if (e = pn(Et.current), Tl(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[wt] = t, r[Zr] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Nr.length; l++) b(Nr[l], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            Ta(r, o), b("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, b("invalid", r);
                            break;
                        case "textarea":
                            Da(r, o), b("invalid", r)
                    }
                    xi(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Ll(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Ll(r.textContent, u, e), l = ["children", "" + u]) : $r.hasOwnProperty(i) && u != null && i === "onScroll" && b("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Sl(r), Na(r, o, !0);
                            break;
                        case "textarea":
                            Sl(r), za(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = to)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[Zr] = r, Wf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Ci(n, r), n) {
                            case "dialog":
                                b("cancel", e), b("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Nr.length; l++) b(Nr[l], e);
                                l = r;
                                break;
                            case "source":
                                b("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), l = r;
                                break;
                            case "details":
                                b("toggle", e), l = r;
                                break;
                            case "input":
                                Ta(e, r), l = gi(e, r), b("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = ae({}, r, {
                                    value: void 0
                                }), b("invalid", e);
                                break;
                            case "textarea":
                                Da(e, r), l = Ei(e, r), b("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        xi(n, l),
                        u = l;
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var a = u[o];
                                o === "style" ? kc(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sc(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Vr(e, a) : typeof a == "number" && Vr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($r.hasOwnProperty(o) ? a != null && o === "onScroll" && b("scroll", e) : a != null && vu(e, o, a, i))
                            }
                        switch (n) {
                            case "input":
                                Sl(e), Na(e, r, !1);
                                break;
                            case "textarea":
                                Sl(e), za(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + tn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Qn(e, !!r.multiple, o, !1) : r.defaultValue != null && Qn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = to)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Re(t), null;
        case 6:
            if (e && t.stateNode != null) Kf(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                if (n = pn(br.current), pn(Et.current), Tl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (o = r.nodeValue !== n) && (e = Ke, e !== null)) switch (e.tag) {
                        case 3:
                            Ll(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ll(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r
            }
            return Re(t), null;
        case 13:
            if (ee(ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (le && Qe !== null && t.mode & 1 && !(t.flags & 128)) cf(), bn(), t.flags |= 98560, o = !1;
                else if (o = Tl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(C(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
                        o[wt] = t
                    } else bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Re(t), o = !1
                } else dt !== null && (lu(dt), dt = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ie.current & 1 ? me === 0 && (me = 3) : qu())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
        case 4:
            return tr(), Ji(e, t), e === null && Gr(t.stateNode.containerInfo), Re(t), null;
        case 10:
            return Ou(t.type._context), Re(t), null;
        case 17:
            return Ae(t.type) && no(), Re(t), null;
        case 19:
            if (ee(ie), o = t.memoizedState, o === null) return Re(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) kr(o, !1);
                else {
                    if (me !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = so(e), i !== null) {
                                for (t.flags |= 128, kr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return q(ie, ie.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && fe() > rr && (t.flags |= 128, r = !0, kr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = so(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !le) return Re(t), null
                    } else 2 * fe() - o.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, kr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = fe(), t.sibling = null, n = ie.current, q(ie, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
        case 22:
        case 23:
            return Zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}

function Hh(e, t) {
    switch (Du(t), t.tag) {
        case 1:
            return Ae(t.type) && no(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return tr(), ee(je), ee(Te), Bu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Au(t), null;
        case 13:
            if (ee(ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(C(340));
                bn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ee(ie), null;
        case 4:
            return tr(), null;
        case 10:
            return Ou(t.type._context), null;
        case 22:
        case 23:
            return Zu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var zl = !1,
    Le = !1,
    Wh = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function Vn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            se(e, t, r)
        } else n.current = null
}

function Zi(e, t, n) {
    try {
        n()
    } catch (r) {
        se(e, t, r)
    }
}
var Es = !1;

function Qh(e, t) {
    if (Fi = ql, e = Jc(), Tu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    u = -1,
                    a = -1,
                    s = 0,
                    c = 0,
                    d = e,
                    p = null;
                t: for (;;) {
                    for (var E; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (a = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (E = d.firstChild) !== null;) p = d, d = E;
                    for (;;) {
                        if (d === e) break t;
                        if (p === n && ++s === l && (u = i), p === o && ++c === r && (a = i), (E = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = E
                }
                n = u === -1 || a === -1 ? null : {
                    start: u,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Oi = {
            focusedElem: e,
            selectionRange: n
        }, ql = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var w = S.memoizedProps,
                                    N = S.memoizedState,
                                    h = t.stateNode,
                                    f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : st(t.type, w), N);
                                h.__reactInternalSnapshotBeforeUpdate = f
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                    }
                } catch (x) {
                    se(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return S = Es, Es = !1, S
}

function Ur(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Zi(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function Ro(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function qi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Yf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[Zr], delete t[ji], delete t[Rh], delete t[Lh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Xf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ks(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Xf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function bi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = to));
    else if (r !== 4 && (e = e.child, e !== null))
        for (bi(e, t, n), e = e.sibling; e !== null;) bi(e, t, n), e = e.sibling
}

function eu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (eu(e, t, n), e = e.sibling; e !== null;) eu(e, t, n), e = e.sibling
}
var xe = null,
    ct = !1;

function At(e, t, n) {
    for (n = n.child; n !== null;) Gf(e, t, n), n = n.sibling
}

function Gf(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
        St.onCommitFiberUnmount(wo, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Le || Vn(n, t);
        case 6:
            var r = xe,
                l = ct;
            xe = null, At(e, t, n), xe = r, ct = l, xe !== null && (ct ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
            break;
        case 18:
            xe !== null && (ct ? (e = xe, n = n.stateNode, e.nodeType === 8 ? ei(e.parentNode, n) : e.nodeType === 1 && ei(e, n), Kr(e)) : ei(xe, n.stateNode));
            break;
        case 4:
            r = xe, l = ct, xe = n.stateNode.containerInfo, ct = !0, At(e, t, n), xe = r, ct = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Zi(n, t, i), l = l.next
                } while (l !== r)
            }
            At(e, t, n);
            break;
        case 1:
            if (!Le && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                se(n, t, u)
            }
            At(e, t, n);
            break;
        case 21:
            At(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, At(e, t, n), Le = r) : At(e, t, n);
            break;
        default:
            At(e, t, n)
    }
}

function xs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Wh), t.forEach(function(r) {
            var l = em.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function at(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            xe = u.stateNode, ct = !1;
                            break e;
                        case 3:
                            xe = u.stateNode.containerInfo, ct = !0;
                            break e;
                        case 4:
                            xe = u.stateNode.containerInfo, ct = !0;
                            break e
                    }
                    u = u.return
                }
                if (xe === null) throw Error(C(160));
                Gf(o, i, l), xe = null, ct = !1;
                var a = l.alternate;
                a !== null && (a.return = null), l.return = null
            } catch (s) {
                se(l, t, s)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Jf(t, e), t = t.sibling
}

function Jf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (at(t, e), yt(e), r & 4) {
                try {
                    Ur(3, e, e.return), Ro(3, e)
                } catch (w) {
                    se(e, e.return, w)
                }
                try {
                    Ur(5, e, e.return)
                } catch (w) {
                    se(e, e.return, w)
                }
            }
            break;
        case 1:
            at(t, e), yt(e), r & 512 && n !== null && Vn(n, n.return);
            break;
        case 5:
            if (at(t, e), yt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Vr(l, "")
                } catch (w) {
                    se(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    u === "input" && o.type === "radio" && o.name != null && yc(l, o), Ci(u, i);
                    var s = Ci(u, o);
                    for (i = 0; i < a.length; i += 2) {
                        var c = a[i],
                            d = a[i + 1];
                        c === "style" ? kc(l, d) : c === "dangerouslySetInnerHTML" ? Sc(l, d) : c === "children" ? Vr(l, d) : vu(l, c, d, s)
                    }
                    switch (u) {
                        case "input":
                            wi(l, o);
                            break;
                        case "textarea":
                            gc(l, o);
                            break;
                        case "select":
                            var p = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var E = o.value;
                            E != null ? Qn(l, !!o.multiple, E, !1) : p !== !!o.multiple && (o.defaultValue != null ? Qn(l, !!o.multiple, o.defaultValue, !0) : Qn(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Zr] = o
                } catch (w) {
                    se(e, e.return, w)
                }
            }
            break;
        case 6:
            if (at(t, e), yt(e), r & 4) {
                if (e.stateNode === null) throw Error(C(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (w) {
                    se(e, e.return, w)
                }
            }
            break;
        case 3:
            if (at(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kr(t.containerInfo)
            } catch (w) {
                se(e, e.return, w)
            }
            break;
        case 4:
            at(t, e), yt(e);
            break;
        case 13:
            at(t, e), yt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Gu = fe())), r & 4 && xs(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (s = Le) || c, at(t, e), Le = s) : at(t, e), yt(e), r & 8192) {
                if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !c && e.mode & 1)
                    for (z = e, c = e.child; c !== null;) {
                        for (d = z = c; z !== null;) {
                            switch (p = z, E = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ur(4, p, p.return);
                                    break;
                                case 1:
                                    Vn(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (w) {
                                            se(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Vn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Ps(d);
                                        continue
                                    }
                            }
                            E !== null ? (E.return = p, z = E) : Ps(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                l = d.stateNode, s ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Ec("display", i))
                            } catch (w) {
                                se(e, e.return, w)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = s ? "" : d.memoizedProps
                        } catch (w) {
                            se(e, e.return, w)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            at(t, e), yt(e), r & 4 && xs(e);
            break;
        case 21:
            break;
        default:
            at(t, e), yt(e)
    }
}

function yt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Xf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Vr(l, ""), r.flags &= -33);
                    var o = ks(e);
                    eu(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = ks(e);
                    bi(e, u, i);
                    break;
                default:
                    throw Error(C(161))
            }
        }
        catch (a) {
            se(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Kh(e, t, n) {
    z = e, Zf(e)
}

function Zf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var l = z,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || zl;
            if (!i) {
                var u = l.alternate,
                    a = u !== null && u.memoizedState !== null || Le;
                u = zl;
                var s = Le;
                if (zl = i, (Le = a) && !s)
                    for (z = l; z !== null;) i = z, a = i.child, i.tag === 22 && i.memoizedState !== null ? _s(l) : a !== null ? (a.return = i, z = a) : _s(l);
                for (; o !== null;) z = o, Zf(o), o = o.sibling;
                z = l, zl = u, Le = s
            }
            Cs(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, z = o) : Cs(e)
    }
}

function Cs(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Le || Ro(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Le)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && as(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            as(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var s = t.alternate;
                            if (s !== null) {
                                var c = s.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Kr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                }
                Le || t.flags & 512 && qi(t)
            } catch (p) {
                se(t, t.return, p)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Ps(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function _s(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ro(4, t)
                    } catch (a) {
                        se(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            se(t, l, a)
                        }
                    }
                    var o = t.return;
                    try {
                        qi(t)
                    } catch (a) {
                        se(t, o, a)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        qi(t)
                    } catch (a) {
                        se(t, i, a)
                    }
            }
        } catch (a) {
            se(t, t.return, a)
        }
        if (t === e) {
            z = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, z = u;
            break
        }
        z = t.return
    }
}
var Yh = Math.ceil,
    po = zt.ReactCurrentDispatcher,
    Yu = zt.ReactCurrentOwner,
    rt = zt.ReactCurrentBatchConfig,
    X = 0,
    ge = null,
    pe = null,
    Ce = 0,
    We = 0,
    Hn = ln(0),
    me = 0,
    rl = null,
    En = 0,
    Lo = 0,
    Xu = 0,
    jr = null,
    Ie = null,
    Gu = 0,
    rr = 1 / 0,
    kt = null,
    ho = !1,
    tu = null,
    qt = null,
    Ml = !1,
    Kt = null,
    mo = 0,
    Ar = 0,
    nu = null,
    Wl = -1,
    Ql = 0;

function Me() {
    return X & 6 ? fe() : Wl !== -1 ? Wl : Wl = fe()
}

function bt(e) {
    return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : Nh.transition !== null ? (Ql === 0 && (Ql = Fc()), Ql) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $c(e.type)), e) : 1
}

function ht(e, t, n, r) {
    if (50 < Ar) throw Ar = 0, nu = null, Error(C(185));
    ul(e, n, r), (!(X & 2) || e !== ge) && (e === ge && (!(X & 2) && (Lo |= n), me === 4 && Wt(e, Ce)), Be(e, r), n === 1 && X === 0 && !(t.mode & 1) && (rr = fe() + 500, Co && on()))
}

function Be(e, t) {
    var n = e.callbackNode;
    Np(e, t);
    var r = Zl(e, e === ge ? Ce : 0);
    if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Oa(n), t === 1) e.tag === 0 ? Th(Rs.bind(null, e)) : uf(Rs.bind(null, e)), Ph(function() {
            !(X & 6) && on()
        }), n = null;
        else {
            switch (Oc(r)) {
                case 1:
                    n = Eu;
                    break;
                case 4:
                    n = zc;
                    break;
                case 16:
                    n = Jl;
                    break;
                case 536870912:
                    n = Mc;
                    break;
                default:
                    n = Jl
            }
            n = od(n, qf.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function qf(e, t) {
    if (Wl = -1, Ql = 0, X & 6) throw Error(C(327));
    var n = e.callbackNode;
    if (Jn() && e.callbackNode !== n) return null;
    var r = Zl(e, e === ge ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = vo(e, r);
    else {
        t = r;
        var l = X;
        X |= 2;
        var o = ed();
        (ge !== e || Ce !== t) && (kt = null, rr = fe() + 500, vn(e, t));
        do try {
            Jh();
            break
        } catch (u) {
            bf(e, u)
        }
        while (!0);
        Fu(), po.current = o, X = l, pe !== null ? t = 0 : (ge = null, Ce = 0, t = me)
    }
    if (t !== 0) {
        if (t === 2 && (l = Ti(e), l !== 0 && (r = l, t = ru(e, l))), t === 1) throw n = rl, vn(e, 0), Wt(e, r), Be(e, fe()), n;
        if (t === 6) Wt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Xh(l) && (t = vo(e, r), t === 2 && (o = Ti(e), o !== 0 && (r = o, t = ru(e, o))), t === 1)) throw n = rl, vn(e, 0), Wt(e, r), Be(e, fe()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    cn(e, Ie, kt);
                    break;
                case 3:
                    if (Wt(e, r), (r & 130023424) === r && (t = Gu + 500 - fe(), 10 < t)) {
                        if (Zl(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            Me(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Ui(cn.bind(null, e, Ie, kt), t);
                        break
                    }
                    cn(e, Ie, kt);
                    break;
                case 4:
                    if (Wt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - pt(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ui(cn.bind(null, e, Ie, kt), r);
                        break
                    }
                    cn(e, Ie, kt);
                    break;
                case 5:
                    cn(e, Ie, kt);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return Be(e, fe()), e.callbackNode === n ? qf.bind(null, e) : null
}

function ru(e, t) {
    var n = jr;
    return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = vo(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && lu(t)), e
}

function lu(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e)
}

function Xh(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!mt(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Wt(e, t) {
    for (t &= ~Xu, t &= ~Lo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - pt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Rs(e) {
    if (X & 6) throw Error(C(327));
    Jn();
    var t = Zl(e, 0);
    if (!(t & 1)) return Be(e, fe()), null;
    var n = vo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ti(e);
        r !== 0 && (t = r, n = ru(e, r))
    }
    if (n === 1) throw n = rl, vn(e, 0), Wt(e, t), Be(e, fe()), n;
    if (n === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, cn(e, Ie, kt), Be(e, fe()), null
}

function Ju(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (rr = fe() + 500, Co && on())
    }
}

function kn(e) {
    Kt !== null && Kt.tag === 0 && !(X & 6) && Jn();
    var t = X;
    X |= 1;
    var n = rt.transition,
        r = G;
    try {
        if (rt.transition = null, G = 1, e) return e()
    } finally {
        G = r, rt.transition = n, X = t, !(X & 6) && on()
    }
}

function Zu() {
    We = Hn.current, ee(Hn)
}

function vn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Ch(n)), pe !== null)
        for (n = pe.return; n !== null;) {
            var r = n;
            switch (Du(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && no();
                    break;
                case 3:
                    tr(), ee(je), ee(Te), Bu();
                    break;
                case 5:
                    Au(r);
                    break;
                case 4:
                    tr();
                    break;
                case 13:
                    ee(ie);
                    break;
                case 19:
                    ee(ie);
                    break;
                case 10:
                    Ou(r.type._context);
                    break;
                case 22:
                case 23:
                    Zu()
            }
            n = n.return
        }
    if (ge = e, pe = e = en(e.current, null), Ce = We = t, me = 0, rl = null, Xu = Lo = En = 0, Ie = jr = null, dn !== null) {
        for (t = 0; t < dn.length; t++)
            if (n = dn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        dn = null
    }
    return e
}

function bf(e, t) {
    do {
        var n = pe;
        try {
            if (Fu(), $l.current = fo, co) {
                for (var r = ue.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                co = !1
            }
            if (Sn = 0, ye = he = ue = null, Ir = !1, el = 0, Yu.current = null, n === null || n.return === null) {
                me = 1, rl = t, pe = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    a = t;
                if (t = Ce, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var s = a,
                        c = u,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var E = hs(i);
                    if (E !== null) {
                        E.flags &= -257, ms(E, i, u, o, t), E.mode & 1 && ps(o, s, t), t = E, a = s;
                        var S = t.updateQueue;
                        if (S === null) {
                            var w = new Set;
                            w.add(a), t.updateQueue = w
                        } else S.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ps(o, s, t), qu();
                            break e
                        }
                        a = Error(C(426))
                    }
                } else if (le && u.mode & 1) {
                    var N = hs(i);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256), ms(N, i, u, o, t), zu(nr(a, u));
                        break e
                    }
                }
                o = a = nr(a, u),
                me !== 4 && (me = 2),
                jr === null ? jr = [o] : jr.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var h = If(o, a, t);
                            us(o, h);
                            break e;
                        case 1:
                            u = a;
                            var f = o.type,
                                m = o.stateNode;
                            if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (qt === null || !qt.has(m)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var x = Uf(o, u, t);
                                us(o, x);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            nd(n)
        } catch (L) {
            t = L, pe === n && n !== null && (pe = n = n.return);
            continue
        }
        break
    } while (!0)
}

function ed() {
    var e = po.current;
    return po.current = fo, e === null ? fo : e
}

function qu() {
    (me === 0 || me === 3 || me === 2) && (me = 4), ge === null || !(En & 268435455) && !(Lo & 268435455) || Wt(ge, Ce)
}

function vo(e, t) {
    var n = X;
    X |= 2;
    var r = ed();
    (ge !== e || Ce !== t) && (kt = null, vn(e, t));
    do try {
        Gh();
        break
    } catch (l) {
        bf(e, l)
    }
    while (!0);
    if (Fu(), X = n, po.current = r, pe !== null) throw Error(C(261));
    return ge = null, Ce = 0, me
}

function Gh() {
    for (; pe !== null;) td(pe)
}

function Jh() {
    for (; pe !== null && !Ep();) td(pe)
}

function td(e) {
    var t = ld(e.alternate, e, We);
    e.memoizedProps = e.pendingProps, t === null ? nd(e) : pe = t, Yu.current = null
}

function nd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Hh(n, t), n !== null) {
                n.flags &= 32767, pe = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                me = 6, pe = null;
                return
            }
        } else if (n = Vh(n, t, We), n !== null) {
            pe = n;
            return
        }
        if (t = t.sibling, t !== null) {
            pe = t;
            return
        }
        pe = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}

function cn(e, t, n) {
    var r = G,
        l = rt.transition;
    try {
        rt.transition = null, G = 1, Zh(e, t, n, r)
    } finally {
        rt.transition = l, G = r
    }
    return null
}

function Zh(e, t, n, r) {
    do Jn(); while (Kt !== null);
    if (X & 6) throw Error(C(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Dp(e, o), e === ge && (pe = ge = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ml || (Ml = !0, od(Jl, function() {
            return Jn(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = rt.transition, rt.transition = null;
        var i = G;
        G = 1;
        var u = X;
        X |= 4, Yu.current = null, Qh(e, n), Jf(n, e), yh(Oi), ql = !!Fi, Oi = Fi = null, e.current = n, Kh(n), kp(), X = u, G = i, rt.transition = o
    } else e.current = n;
    if (Ml && (Ml = !1, Kt = e, mo = l), o = e.pendingLanes, o === 0 && (qt = null), Pp(n.stateNode), Be(e, fe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (ho) throw ho = !1, e = tu, tu = null, e;
    return mo & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === nu ? Ar++ : (Ar = 0, nu = e) : Ar = 0, on(), null
}

function Jn() {
    if (Kt !== null) {
        var e = Oc(mo),
            t = rt.transition,
            n = G;
        try {
            if (rt.transition = null, G = 16 > e ? 16 : e, Kt === null) var r = !1;
            else {
                if (e = Kt, Kt = null, mo = 0, X & 6) throw Error(C(331));
                var l = X;
                for (X |= 4, z = e.current; z !== null;) {
                    var o = z,
                        i = o.child;
                    if (z.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var a = 0; a < u.length; a++) {
                                var s = u[a];
                                for (z = s; z !== null;) {
                                    var c = z;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ur(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, z = d;
                                    else
                                        for (; z !== null;) {
                                            c = z;
                                            var p = c.sibling,
                                                E = c.return;
                                            if (Yf(c), c === s) {
                                                z = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = E, z = p;
                                                break
                                            }
                                            z = E
                                        }
                                }
                            }
                            var S = o.alternate;
                            if (S !== null) {
                                var w = S.child;
                                if (w !== null) {
                                    S.child = null;
                                    do {
                                        var N = w.sibling;
                                        w.sibling = null, w = N
                                    } while (w !== null)
                                }
                            }
                            z = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, z = i;
                    else e: for (; z !== null;) {
                        if (o = z, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ur(9, o, o.return)
                        }
                        var h = o.sibling;
                        if (h !== null) {
                            h.return = o.return, z = h;
                            break e
                        }
                        z = o.return
                    }
                }
                var f = e.current;
                for (z = f; z !== null;) {
                    i = z;
                    var m = i.child;
                    if (i.subtreeFlags & 2064 && m !== null) m.return = i, z = m;
                    else e: for (i = f; z !== null;) {
                        if (u = z, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ro(9, u)
                            }
                        } catch (L) {
                            se(u, u.return, L)
                        }
                        if (u === i) {
                            z = null;
                            break e
                        }
                        var x = u.sibling;
                        if (x !== null) {
                            x.return = u.return, z = x;
                            break e
                        }
                        z = u.return
                    }
                }
                if (X = l, on(), St && typeof St.onPostCommitFiberRoot == "function") try {
                    St.onPostCommitFiberRoot(wo, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            G = n, rt.transition = t
        }
    }
    return !1
}

function Ls(e, t, n) {
    t = nr(n, t), t = If(e, t, 1), e = Zt(e, t, 1), t = Me(), e !== null && (ul(e, 1, t), Be(e, t))
}

function se(e, t, n) {
    if (e.tag === 3) Ls(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ls(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qt === null || !qt.has(r))) {
                    e = nr(n, e), e = Uf(t, e, 1), t = Zt(t, e, 1), e = Me(), t !== null && (ul(t, 1, e), Be(t, e));
                    break
                }
            }
            t = t.return
        }
}

function qh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, ge === e && (Ce & n) === n && (me === 4 || me === 3 && (Ce & 130023424) === Ce && 500 > fe() - Gu ? vn(e, 0) : Xu |= n), Be(e, t)
}

function rd(e, t) {
    t === 0 && (e.mode & 1 ? (t = xl, xl <<= 1, !(xl & 130023424) && (xl = 4194304)) : t = 1);
    var n = Me();
    e = Nt(e, t), e !== null && (ul(e, t, n), Be(e, n))
}

function bh(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), rd(e, n)
}

function em(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(C(314))
    }
    r !== null && r.delete(t), rd(e, n)
}
var ld;
ld = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || je.current) Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, $h(e, t, n);
            Ue = !!(e.flags & 131072)
        }
    else Ue = !1, le && t.flags & 1048576 && af(t, oo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Hl(e, t), e = t.pendingProps;
            var l = qn(t, Te.current);
            Gn(t, n), l = Vu(null, t, r, e, l, n);
            var o = Hu();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (o = !0, ro(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uu(t), l.updater = _o, t.stateNode = l, l._reactInternals = t, Wi(t, r, e, n), t = Yi(null, t, r, !0, o, n)) : (t.tag = 0, le && o && Nu(t), ze(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Hl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = nm(r), e = st(r, e), l) {
                    case 0:
                        t = Ki(null, t, r, e, n);
                        break e;
                    case 1:
                        t = gs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ys(null, t, r, st(r.type, e), n);
                        break e
                }
                throw Error(C(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), Ki(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), gs(e, t, r, l, n);
        case 3:
            e: {
                if ($f(t), e === null) throw Error(C(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                hf(e, t),
                ao(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = nr(Error(C(423)), t), t = ws(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = nr(Error(C(424)), t), t = ws(e, t, r, n, l);
                    break e
                } else
                    for (Qe = Jt(t.stateNode.containerInfo.firstChild), Ke = t, le = !0, dt = null, n = df(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (bn(), r === l) {
                        t = Dt(e, t, n);
                        break e
                    }
                    ze(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return mf(t), e === null && $i(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ii(r, l) ? i = null : o !== null && Ii(r, o) && (t.flags |= 32), Bf(e, t), ze(e, t, i, n), t.child;
        case 6:
            return e === null && $i(t), null;
        case 13:
            return Vf(e, t, n);
        case 4:
            return ju(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : ze(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), vs(e, t, r, l, n);
        case 7:
            return ze(e, t, t.pendingProps, n), t.child;
        case 8:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ze(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, q(io, r._currentValue), r._currentValue = i, o !== null)
                    if (mt(o.value, i)) {
                        if (o.children === l.children && !je.current) {
                            t = Dt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var a = u.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = _t(-1, n & -n), a.tag = 2;
                                            var s = o.updateQueue;
                                            if (s !== null) {
                                                s = s.shared;
                                                var c = s.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), s.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Vi(o.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(C(341));
                                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Vi(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                ze(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Gn(t, n), l = lt(l), r = r(l), t.flags |= 1, ze(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = st(r, t.pendingProps), l = st(r.type, l), ys(e, t, r, l, n);
        case 15:
            return jf(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : st(r, l), Hl(e, t), t.tag = 1, Ae(r) ? (e = !0, ro(t)) : e = !1, Gn(t, n), Of(t, r, l), Wi(t, r, l, n), Yi(null, t, r, !0, e, n);
        case 19:
            return Hf(e, t, n);
        case 22:
            return Af(e, t, n)
    }
    throw Error(C(156, t.tag))
};

function od(e, t) {
    return Dc(e, t)
}

function tm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function nt(e, t, n, r) {
    return new tm(e, t, n, r)
}

function bu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function nm(e) {
    if (typeof e == "function") return bu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === gu) return 11;
        if (e === wu) return 14
    }
    return 2
}

function en(e, t) {
    var n = e.alternate;
    return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Kl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") bu(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Mn:
            return yn(n.children, l, o, t);
        case yu:
            i = 8, l |= 8;
            break;
        case hi:
            return e = nt(12, n, t, l | 2), e.elementType = hi, e.lanes = o, e;
        case mi:
            return e = nt(13, n, t, l), e.elementType = mi, e.lanes = o, e;
        case vi:
            return e = nt(19, n, t, l), e.elementType = vi, e.lanes = o, e;
        case hc:
            return To(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case dc:
                    i = 10;
                    break e;
                case pc:
                    i = 9;
                    break e;
                case gu:
                    i = 11;
                    break e;
                case wu:
                    i = 14;
                    break e;
                case $t:
                    i = 16, r = null;
                    break e
            }
            throw Error(C(130, e == null ? e : typeof e, ""))
    }
    return t = nt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function yn(e, t, n, r) {
    return e = nt(7, e, r, t), e.lanes = n, e
}

function To(e, t, n, r) {
    return e = nt(22, e, r, t), e.elementType = hc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ai(e, t, n) {
    return e = nt(6, e, null, t), e.lanes = n, e
}

function si(e, t, n) {
    return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function rm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function ea(e, t, n, r, l, o, i, u, a) {
    return e = new rm(e, t, n, u, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = nt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Uu(o), e
}

function lm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: zn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function id(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
        if (Pn(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ae(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ae(n)) return of(e, n, t)
    }
    return t
}

function ud(e, t, n, r, l, o, i, u, a) {
    return e = ea(n, r, !0, e, l, o, i, u, a), e.context = id(null), n = e.current, r = Me(), l = bt(n), o = _t(r, l), o.callback = t ? ? null, Zt(n, o, l), e.current.lanes = l, ul(e, l, r), Be(e, r), e
}

function No(e, t, n, r) {
    var l = t.current,
        o = Me(),
        i = bt(l);
    return n = id(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zt(l, t, i), e !== null && (ht(e, l, i, o), Bl(e, l, i)), i
}

function yo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ts(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ta(e, t) {
    Ts(e, t), (e = e.alternate) && Ts(e, t)
}

function om() {
    return null
}
var ad = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function na(e) {
    this._internalRoot = e
}
Do.prototype.render = na.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    No(e, t, null, null)
};
Do.prototype.unmount = na.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        kn(function() {
            No(null, e, null, null)
        }), t[Tt] = null
    }
};

function Do(e) {
    this._internalRoot = e
}
Do.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
        Ht.splice(n, 0, e), n === 0 && Bc(e)
    }
};

function ra(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ns() {}

function im(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var s = yo(i);
                o.call(s)
            }
        }
        var i = ud(t, r, e, 0, null, !1, !1, "", Ns);
        return e._reactRootContainer = i, e[Tt] = i.current, Gr(e.nodeType === 8 ? e.parentNode : e), kn(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var s = yo(a);
            u.call(s)
        }
    }
    var a = ea(e, 0, !1, null, null, !1, !1, "", Ns);
    return e._reactRootContainer = a, e[Tt] = a.current, Gr(e.nodeType === 8 ? e.parentNode : e), kn(function() {
        No(t, a, n, r)
    }), a
}

function Mo(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var a = yo(i);
                u.call(a)
            }
        }
        No(t, i, e, l)
    } else i = im(n, t, e, l, r);
    return yo(i)
}
Ic = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Tr(t.pendingLanes);
                n !== 0 && (ku(t, n | 1), Be(t, fe()), !(X & 6) && (rr = fe() + 500, on()))
            }
            break;
        case 13:
            kn(function() {
                var r = Nt(e, 1);
                if (r !== null) {
                    var l = Me();
                    ht(r, e, 1, l)
                }
            }), ta(e, 1)
    }
};
xu = function(e) {
    if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
            var n = Me();
            ht(t, e, 134217728, n)
        }
        ta(e, 134217728)
    }
};
Uc = function(e) {
    if (e.tag === 13) {
        var t = bt(e),
            n = Nt(e, t);
        if (n !== null) {
            var r = Me();
            ht(n, e, t, r)
        }
        ta(e, t)
    }
};
jc = function() {
    return G
};
Ac = function(e, t) {
    var n = G;
    try {
        return G = e, t()
    } finally {
        G = n
    }
};
_i = function(e, t, n) {
    switch (t) {
        case "input":
            if (wi(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = xo(r);
                        if (!l) throw Error(C(90));
                        vc(r), wi(r, l)
                    }
                }
            }
            break;
        case "textarea":
            gc(e, n);
            break;
        case "select":
            t = n.value, t != null && Qn(e, !!n.multiple, t, !1)
    }
};
Pc = Ju;
_c = kn;
var um = {
        usingClientEntryPoint: !1,
        Events: [sl, Un, xo, xc, Cc, Ju]
    },
    xr = {
        findFiberByHostInstance: fn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    am = {
        bundleType: xr.bundleType,
        version: xr.version,
        rendererPackageName: xr.rendererPackageName,
        rendererConfig: xr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: zt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Tc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: xr.findFiberByHostInstance || om,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fl.isDisabled && Fl.supportsFiber) try {
        wo = Fl.inject(am), St = Fl
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = um;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ra(t)) throw Error(C(200));
    return lm(e, t, null, n)
};
Xe.createRoot = function(e, t) {
    if (!ra(e)) throw Error(C(299));
    var n = !1,
        r = "",
        l = ad;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ea(e, 1, !1, null, null, n, !1, r, l), e[Tt] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new na(t)
};
Xe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
    return e = Tc(t), e = e === null ? null : e.stateNode, e
};
Xe.flushSync = function(e) {
    return kn(e)
};
Xe.hydrate = function(e, t, n) {
    if (!zo(t)) throw Error(C(200));
    return Mo(null, e, t, !0, n)
};
Xe.hydrateRoot = function(e, t, n) {
    if (!ra(e)) throw Error(C(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = ad;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = ud(t, null, e, 1, n ? ? null, l, !1, o, i), e[Tt] = t.current, Gr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Do(t)
};
Xe.render = function(e, t, n) {
    if (!zo(t)) throw Error(C(200));
    return Mo(null, e, t, !1, n)
};
Xe.unmountComponentAtNode = function(e) {
    if (!zo(e)) throw Error(C(40));
    return e._reactRootContainer ? (kn(function() {
        Mo(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Tt] = null
        })
    }), !0) : !1
};
Xe.unstable_batchedUpdates = Ju;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zo(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return Mo(e, t, n, !1, r)
};
Xe.version = "18.3.1-next-f1338f8080-20240426";

function sd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd)
    } catch (e) {
        console.error(e)
    }
}
sd(), ac.exports = Xe;
var cd = ac.exports;
const sm = qs(cd),
    cm = Zs({
        __proto__: null,
        default: sm
    }, [cd]);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ne() {
    return ne = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ne.apply(this, arguments)
}
var de;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(de || (de = {}));
const Ds = "popstate";

function fm(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: o,
            search: i,
            hash: u
        } = r.location;
        return ll("", {
            pathname: o,
            search: i,
            hash: u
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : xn(l)
    }
    return pm(t, n, null, e)
}

function W(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function lr(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function dm() {
    return Math.random().toString(36).substr(2, 8)
}

function zs(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function ll(e, t, n, r) {
    return n === void 0 && (n = null), ne({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? un(t) : t, {
        state: n,
        key: t && t.key || r || dm()
    })
}

function xn(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function un(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function pm(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: o = !1
    } = r, i = l.history, u = de.Pop, a = null, s = c();
    s == null && (s = 0, i.replaceState(ne({}, i.state, {
        idx: s
    }), ""));

    function c() {
        return (i.state || {
            idx: null
        }).idx
    }

    function d() {
        u = de.Pop;
        let N = c(),
            h = N == null ? null : N - s;
        s = N, a && a({
            action: u,
            location: w.location,
            delta: h
        })
    }

    function p(N, h) {
        u = de.Push;
        let f = ll(w.location, N, h);
        s = c() + 1;
        let m = zs(f, s),
            x = w.createHref(f);
        try {
            i.pushState(m, "", x)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError") throw L;
            l.location.assign(x)
        }
        o && a && a({
            action: u,
            location: w.location,
            delta: 1
        })
    }

    function E(N, h) {
        u = de.Replace;
        let f = ll(w.location, N, h);
        s = c();
        let m = zs(f, s),
            x = w.createHref(f);
        i.replaceState(m, "", x), o && a && a({
            action: u,
            location: w.location,
            delta: 0
        })
    }

    function S(N) {
        let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
            f = typeof N == "string" ? N : xn(N);
        return f = f.replace(/ $/, "%20"), W(h, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, h)
    }
    let w = {
        get action() {
            return u
        },
        get location() {
            return e(l, i)
        },
        listen(N) {
            if (a) throw new Error("A history only accepts one active listener");
            return l.addEventListener(Ds, d), a = N, () => {
                l.removeEventListener(Ds, d), a = null
            }
        },
        createHref(N) {
            return t(l, N)
        },
        createURL: S,
        encodeLocation(N) {
            let h = S(N);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: p,
        replace: E,
        go(N) {
            return i.go(N)
        }
    };
    return w
}
var re;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(re || (re = {}));
const hm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function mm(e) {
    return e.index === !0
}

function ou(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((l, o) => {
        let i = [...n, o],
            u = typeof l.id == "string" ? l.id : i.join("-");
        if (W(l.index !== !0 || !l.children, "Cannot specify children on an index route"), W(!r[u], 'Found a route id collision on id "' + u + `".  Route id's must be globally unique within Data Router usages`), mm(l)) {
            let a = ne({}, l, t(l), {
                id: u
            });
            return r[u] = a, a
        } else {
            let a = ne({}, l, t(l), {
                id: u,
                children: void 0
            });
            return r[u] = a, l.children && (a.children = ou(l.children, t, i, r)), a
        }
    })
}

function Wn(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? un(t) : t,
        l = sr(r.pathname || "/", n);
    if (l == null) return null;
    let o = fd(e);
    ym(o);
    let i = null;
    for (let u = 0; i == null && u < o.length; ++u) {
        let a = Tm(l);
        i = _m(o[u], a)
    }
    return i
}

function vm(e, t) {
    let {
        route: n,
        pathname: r,
        params: l
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: l,
        data: t[n.id],
        handle: n.handle
    }
}

function fd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let l = (o, i, u) => {
        let a = {
            relativePath: u === void 0 ? o.path || "" : u,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: i,
            route: o
        };
        a.relativePath.startsWith("/") && (W(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let s = Rt([r, a.relativePath]),
            c = n.concat(a);
        o.children && o.children.length > 0 && (W(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + s + '".')), fd(o.children, t, c, s)), !(o.path == null && !o.index) && t.push({
            path: s,
            score: Cm(s, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, i) => {
        var u;
        if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
        else
            for (let a of dd(o.path)) l(o, i, a)
    }), t
}

function dd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [o, ""] : [o];
    let i = dd(r.join("/")),
        u = [];
    return u.push(...i.map(a => a === "" ? o : [o, a].join("/"))), l && u.push(...i), u.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function ym(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Pm(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const gm = /^:[\w-]+$/,
    wm = 3,
    Sm = 2,
    Em = 1,
    km = 10,
    xm = -2,
    Ms = e => e === "*";

function Cm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ms) && (r += xm), t && (r += Sm), n.filter(l => !Ms(l)).reduce((l, o) => l + (gm.test(o) ? wm : o === "" ? Em : km), r)
}

function Pm(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function _m(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, l = "/", o = [];
    for (let i = 0; i < n.length; ++i) {
        let u = n[i],
            a = i === n.length - 1,
            s = l === "/" ? t : t.slice(l.length) || "/",
            c = Rm({
                path: u.relativePath,
                caseSensitive: u.caseSensitive,
                end: a
            }, s);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = u.route;
        o.push({
            params: r,
            pathname: Rt([l, c.pathname]),
            pathnameBase: zm(Rt([l, c.pathnameBase])),
            route: d
        }), c.pathnameBase !== "/" && (l = Rt([l, c.pathnameBase]))
    }
    return o
}

function Rm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Lm(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0],
        i = o.replace(/(.)\/+$/, "$1"),
        u = l.slice(1);
    return {
        params: r.reduce((s, c, d) => {
            let {
                paramName: p,
                isOptional: E
            } = c;
            if (p === "*") {
                let w = u[d] || "";
                i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const S = u[d];
            return E && !S ? s[p] = void 0 : s[p] = (S || "").replace(/%2F/g, "/"), s
        }, {}),
        pathname: o,
        pathnameBase: i,
        pattern: e
    }
}

function Lm(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), lr(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, a) => (r.push({
            paramName: u,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r]
}

function Tm(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return lr(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function sr(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function Nm(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? un(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Dm(n, t) : t,
        search: Mm(r),
        hash: Fm(l)
    }
}

function Dm(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function ci(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function pd(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function la(e, t) {
    let n = pd(e);
    return t ? n.map((r, l) => l === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function oa(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = un(e) : (l = ne({}, e), W(!l.pathname || !l.pathname.includes("?"), ci("?", "pathname", "search", l)), W(!l.pathname || !l.pathname.includes("#"), ci("#", "pathname", "hash", l)), W(!l.search || !l.search.includes("#"), ci("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "",
        i = o ? "/" : l.pathname,
        u;
    if (i == null) u = n;
    else {
        let d = t.length - 1;
        if (!r && i.startsWith("..")) {
            let p = i.split("/");
            for (; p[0] === "..";) p.shift(), d -= 1;
            l.pathname = p.join("/")
        }
        u = d >= 0 ? t[d] : "/"
    }
    let a = Nm(l, u),
        s = i && i !== "/" && i.endsWith("/"),
        c = (o || i === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || c) && (a.pathname += "/"), a
}
const Rt = e => e.join("/").replace(/\/\/+/g, "/"),
    zm = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Mm = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Fm = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e,
    $v = function(t, n) {
        n === void 0 && (n = 302);
        let r = n;
        typeof r == "number" ? r = {
            status: r
        } : typeof r.status > "u" && (r.status = 302);
        let l = new Headers(r.headers);
        return l.set("Location", t), new Response(null, ne({}, r, {
            headers: l
        }))
    };
class ia {
    constructor(t, n, r, l) {
        l === void 0 && (l = !1), this.status = t, this.statusText = n || "", this.internal = l, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function ua(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const hd = ["post", "put", "patch", "delete"],
    Om = new Set(hd),
    Im = ["get", ...hd],
    Um = new Set(Im),
    jm = new Set([301, 302, 303, 307, 308]),
    Am = new Set([307, 308]),
    fi = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Bm = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Cr = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    aa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    $m = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    md = "remix-router-transitions";

function Vm(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    W(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let l;
    if (e.mapRouteProperties) l = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let y = e.detectErrorBoundary;
        l = g => ({
            hasErrorBoundary: y(g)
        })
    } else l = $m;
    let o = {},
        i = ou(e.routes, l, void 0, o),
        u, a = e.basename || "/",
        s = e.unstable_dataStrategy || Km,
        c = ne({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            unstable_skipActionErrorRevalidation: !1
        }, e.future),
        d = null,
        p = new Set,
        E = null,
        S = null,
        w = null,
        N = e.hydrationData != null,
        h = Wn(i, e.history.location, a),
        f = null;
    if (h == null) {
        let y = qe(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: g,
                route: k
            } = Hs(i);
        h = g, f = {
            [k.id]: y
        }
    }
    let m, x = h.some(y => y.route.lazy),
        L = h.some(y => y.route.loader);
    if (x) m = !1;
    else if (!L) m = !0;
    else if (c.v7_partialHydration) {
        let y = e.hydrationData ? e.hydrationData.loaderData : null,
            g = e.hydrationData ? e.hydrationData.errors : null,
            k = _ => _.route.loader ? typeof _.route.loader == "function" && _.route.loader.hydrate === !0 ? !1 : y && y[_.route.id] !== void 0 || g && g[_.route.id] !== void 0 : !0;
        if (g) {
            let _ = h.findIndex(M => g[M.route.id] !== void 0);
            m = h.slice(0, _ + 1).every(k)
        } else m = h.every(k)
    } else m = e.hydrationData != null;
    let D, v = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: h,
            initialized: m,
            navigation: fi,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || f,
            fetchers: new Map,
            blockers: new Map
        },
        T = de.Pop,
        I = !1,
        F, K = !1,
        ce = new Map,
        oe = null,
        we = !1,
        it = !1,
        Ft = [],
        Ot = [],
        R = new Map,
        j = 0,
        B = -1,
        J = new Map,
        Z = new Set,
        ut = new Map,
        $e = new Map,
        Ve = new Set,
        Ne = new Map,
        Je = new Map,
        Oo = !1;

    function Rd() {
        if (d = e.history.listen(y => {
                let {
                    action: g,
                    location: k,
                    delta: _
                } = y;
                if (Oo) {
                    Oo = !1;
                    return
                }
                lr(Je.size === 0 || _ != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let M = wa({
                    currentLocation: v.location,
                    nextLocation: k,
                    historyAction: g
                });
                if (M && _ != null) {
                    Oo = !0, e.history.go(_ * -1), hl(M, {
                        state: "blocked",
                        location: k,
                        proceed() {
                            hl(M, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: k
                            }), e.history.go(_)
                        },
                        reset() {
                            let V = new Map(v.blockers);
                            V.set(M, Cr), He({
                                blockers: V
                            })
                        }
                    });
                    return
                }
                return an(g, k)
            }), n) {
            lv(t, ce);
            let y = () => ov(t, ce);
            t.addEventListener("pagehide", y), oe = () => t.removeEventListener("pagehide", y)
        }
        return v.initialized || an(de.Pop, v.location, {
            initialHydration: !0
        }), D
    }

    function Ld() {
        d && d(), oe && oe(), p.clear(), F && F.abort(), v.fetchers.forEach((y, g) => pl(g)), v.blockers.forEach((y, g) => ga(g))
    }

    function Td(y) {
        return p.add(y), () => p.delete(y)
    }

    function He(y, g) {
        g === void 0 && (g = {}), v = ne({}, v, y);
        let k = [],
            _ = [];
        c.v7_fetcherPersist && v.fetchers.forEach((M, V) => {
            M.state === "idle" && (Ve.has(V) ? _.push(V) : k.push(V))
        }), [...p].forEach(M => M(v, {
            deletedFetchers: _,
            unstable_viewTransitionOpts: g.viewTransitionOpts,
            unstable_flushSync: g.flushSync === !0
        })), c.v7_fetcherPersist && (k.forEach(M => v.fetchers.delete(M)), _.forEach(M => pl(M)))
    }

    function cr(y, g, k) {
        var _, M;
        let {
            flushSync: V
        } = k === void 0 ? {} : k, U = v.actionData != null && v.navigation.formMethod != null && ft(v.navigation.formMethod) && v.navigation.state === "loading" && ((_ = y.state) == null ? void 0 : _._isRedirect) !== !0, O;
        g.actionData ? Object.keys(g.actionData).length > 0 ? O = g.actionData : O = null : U ? O = v.actionData : O = null;
        let H = g.loaderData ? $s(v.loaderData, g.loaderData, g.matches || [], g.errors) : v.loaderData,
            $ = v.blockers;
        $.size > 0 && ($ = new Map($), $.forEach((A, te) => $.set(te, Cr)));
        let Se = I === !0 || v.navigation.formMethod != null && ft(v.navigation.formMethod) && ((M = y.state) == null ? void 0 : M._isRedirect) !== !0;
        u && (i = u, u = void 0), we || T === de.Pop || (T === de.Push ? e.history.push(y, y.state) : T === de.Replace && e.history.replace(y, y.state));
        let Ee;
        if (T === de.Pop) {
            let A = ce.get(v.location.pathname);
            A && A.has(y.pathname) ? Ee = {
                currentLocation: v.location,
                nextLocation: y
            } : ce.has(y.pathname) && (Ee = {
                currentLocation: y,
                nextLocation: v.location
            })
        } else if (K) {
            let A = ce.get(v.location.pathname);
            A ? A.add(y.pathname) : (A = new Set([y.pathname]), ce.set(v.location.pathname, A)), Ee = {
                currentLocation: v.location,
                nextLocation: y
            }
        }
        He(ne({}, g, {
            actionData: O,
            loaderData: H,
            historyAction: T,
            location: y,
            initialized: !0,
            navigation: fi,
            revalidation: "idle",
            restoreScrollPosition: Ea(y, g.matches || v.matches),
            preventScrollReset: Se,
            blockers: $
        }), {
            viewTransitionOpts: Ee,
            flushSync: V === !0
        }), T = de.Pop, I = !1, K = !1, we = !1, it = !1, Ft = [], Ot = []
    }
    async function da(y, g) {
        if (typeof y == "number") {
            e.history.go(y);
            return
        }
        let k = iu(v.location, v.matches, a, c.v7_prependBasename, y, c.v7_relativeSplatPath, g == null ? void 0 : g.fromRouteId, g == null ? void 0 : g.relative),
            {
                path: _,
                submission: M,
                error: V
            } = Fs(c.v7_normalizeFormMethod, !1, k, g),
            U = v.location,
            O = ll(v.location, _, g && g.state);
        O = ne({}, O, e.history.encodeLocation(O));
        let H = g && g.replace != null ? g.replace : void 0,
            $ = de.Push;
        H === !0 ? $ = de.Replace : H === !1 || M != null && ft(M.formMethod) && M.formAction === v.location.pathname + v.location.search && ($ = de.Replace);
        let Se = g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
            Ee = (g && g.unstable_flushSync) === !0,
            A = wa({
                currentLocation: U,
                nextLocation: O,
                historyAction: $
            });
        if (A) {
            hl(A, {
                state: "blocked",
                location: O,
                proceed() {
                    hl(A, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: O
                    }), da(y, g)
                },
                reset() {
                    let te = new Map(v.blockers);
                    te.set(A, Cr), He({
                        blockers: te
                    })
                }
            });
            return
        }
        return await an($, O, {
            submission: M,
            pendingError: V,
            preventScrollReset: Se,
            replace: g && g.replace,
            enableViewTransition: g && g.unstable_viewTransition,
            flushSync: Ee
        })
    }

    function Nd() {
        if (Io(), He({
                revalidation: "loading"
            }), v.navigation.state !== "submitting") {
            if (v.navigation.state === "idle") {
                an(v.historyAction, v.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            an(T || v.historyAction, v.navigation.location, {
                overrideNavigation: v.navigation
            })
        }
    }
    async function an(y, g, k) {
        F && F.abort(), F = null, T = y, we = (k && k.startUninterruptedRevalidation) === !0, Ad(v.location, v.matches), I = (k && k.preventScrollReset) === !0, K = (k && k.enableViewTransition) === !0;
        let _ = u || i,
            M = k && k.overrideNavigation,
            V = Wn(_, g, a),
            U = (k && k.flushSync) === !0;
        if (!V) {
            let A = qe(404, {
                    pathname: g.pathname
                }),
                {
                    matches: te,
                    route: ve
                } = Hs(_);
            Uo(), cr(g, {
                matches: te,
                loaderData: {},
                errors: {
                    [ve.id]: A
                }
            }, {
                flushSync: U
            });
            return
        }
        if (v.initialized && !it && qm(v.location, g) && !(k && k.submission && ft(k.submission.formMethod))) {
            cr(g, {
                matches: V
            }, {
                flushSync: U
            });
            return
        }
        F = new AbortController;
        let O = Dn(e.history, g, F.signal, k && k.submission),
            H;
        if (k && k.pendingError) H = [Br(V).route.id, {
            type: re.error,
            error: k.pendingError
        }];
        else if (k && k.submission && ft(k.submission.formMethod)) {
            let A = await Dd(O, g, k.submission, V, {
                replace: k.replace,
                flushSync: U
            });
            if (A.shortCircuited) return;
            H = A.pendingActionResult, M = di(g, k.submission), U = !1, O = Dn(e.history, O.url, O.signal)
        }
        let {
            shortCircuited: $,
            loaderData: Se,
            errors: Ee
        } = await zd(O, g, V, M, k && k.submission, k && k.fetcherSubmission, k && k.replace, k && k.initialHydration === !0, U, H);
        $ || (F = null, cr(g, ne({
            matches: V
        }, Vs(H), {
            loaderData: Se,
            errors: Ee
        })))
    }
    async function Dd(y, g, k, _, M) {
        M === void 0 && (M = {}), Io();
        let V = nv(g, k);
        He({
            navigation: V
        }, {
            flushSync: M.flushSync === !0
        });
        let U, O = au(_, g);
        if (!O.route.action && !O.route.lazy) U = {
            type: re.error,
            error: qe(405, {
                method: y.method,
                pathname: g.pathname,
                routeId: O.route.id
            })
        };
        else if (U = (await dr("action", y, [O], _))[0], y.signal.aborted) return {
            shortCircuited: !0
        };
        if (mn(U)) {
            let H;
            return M && M.replace != null ? H = M.replace : H = js(U.response.headers.get("Location"), new URL(y.url), a) === v.location.pathname + v.location.search, await fr(y, U, {
                submission: k,
                replace: H
            }), {
                shortCircuited: !0
            }
        }
        if (hn(U)) throw qe(400, {
            type: "defer-action"
        });
        if (tt(U)) {
            let H = Br(_, O.route.id);
            return (M && M.replace) !== !0 && (T = de.Push), {
                pendingActionResult: [H.route.id, U]
            }
        }
        return {
            pendingActionResult: [O.route.id, U]
        }
    }
    async function zd(y, g, k, _, M, V, U, O, H, $) {
        let Se = _ || di(g, M),
            Ee = M || V || Ks(Se),
            A = u || i,
            [te, ve] = Os(e.history, v, k, Ee, g, c.v7_partialHydration && O === !0, c.unstable_skipActionErrorRevalidation, it, Ft, Ot, Ve, ut, Z, A, a, $);
        if (Uo(Y => !(k && k.some(De => De.route.id === Y)) || te && te.some(De => De.route.id === Y)), B = ++j, te.length === 0 && ve.length === 0) {
            let Y = va();
            return cr(g, ne({
                matches: k,
                loaderData: {},
                errors: $ && tt($[1]) ? {
                    [$[0]]: $[1].error
                } : null
            }, Vs($), Y ? {
                fetchers: new Map(v.fetchers)
            } : {}), {
                flushSync: H
            }), {
                shortCircuited: !0
            }
        }
        if (!we && (!c.v7_partialHydration || !O)) {
            ve.forEach(De => {
                let Ze = v.fetchers.get(De.key),
                    ke = Pr(void 0, Ze ? Ze.data : void 0);
                v.fetchers.set(De.key, ke)
            });
            let Y;
            $ && !tt($[1]) ? Y = {
                [$[0]]: $[1].data
            } : v.actionData && (Object.keys(v.actionData).length === 0 ? Y = null : Y = v.actionData), He(ne({
                navigation: Se
            }, Y !== void 0 ? {
                actionData: Y
            } : {}, ve.length > 0 ? {
                fetchers: new Map(v.fetchers)
            } : {}), {
                flushSync: H
            })
        }
        ve.forEach(Y => {
            R.has(Y.key) && Ut(Y.key), Y.controller && R.set(Y.key, Y.controller)
        });
        let hr = () => ve.forEach(Y => Ut(Y.key));
        F && F.signal.addEventListener("abort", hr);
        let {
            loaderResults: jt,
            fetcherResults: Rn
        } = await pa(v.matches, k, te, ve, y);
        if (y.signal.aborted) return {
            shortCircuited: !0
        };
        F && F.signal.removeEventListener("abort", hr), ve.forEach(Y => R.delete(Y.key));
        let Ln = Ws([...jt, ...Rn]);
        if (Ln) {
            if (Ln.idx >= te.length) {
                let Y = ve[Ln.idx - te.length].key;
                Z.add(Y)
            }
            return await fr(y, Ln.result, {
                replace: U
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: Tn,
            errors: vt
        } = Bs(v, k, te, jt, $, ve, Rn, Ne);
        Ne.forEach((Y, De) => {
            Y.subscribe(Ze => {
                (Ze || Y.done) && Ne.delete(De)
            })
        }), c.v7_partialHydration && O && v.errors && Object.entries(v.errors).filter(Y => {
            let [De] = Y;
            return !te.some(Ze => Ze.route.id === De)
        }).forEach(Y => {
            let [De, Ze] = Y;
            vt = Object.assign(vt || {}, {
                [De]: Ze
            })
        });
        let ml = va(),
            vl = ya(B),
            yl = ml || vl || ve.length > 0;
        return ne({
            loaderData: Tn,
            errors: vt
        }, yl ? {
            fetchers: new Map(v.fetchers)
        } : {})
    }

    function Md(y, g, k, _) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        R.has(y) && Ut(y);
        let M = (_ && _.unstable_flushSync) === !0,
            V = u || i,
            U = iu(v.location, v.matches, a, c.v7_prependBasename, k, c.v7_relativeSplatPath, g, _ == null ? void 0 : _.relative),
            O = Wn(V, U, a);
        if (!O) {
            pr(y, g, qe(404, {
                pathname: U
            }), {
                flushSync: M
            });
            return
        }
        let {
            path: H,
            submission: $,
            error: Se
        } = Fs(c.v7_normalizeFormMethod, !0, U, _);
        if (Se) {
            pr(y, g, Se, {
                flushSync: M
            });
            return
        }
        let Ee = au(O, H);
        if (I = (_ && _.preventScrollReset) === !0, $ && ft($.formMethod)) {
            Fd(y, g, H, Ee, O, M, $);
            return
        }
        ut.set(y, {
            routeId: g,
            path: H
        }), Od(y, g, H, Ee, O, M, $)
    }
    async function Fd(y, g, k, _, M, V, U) {
        if (Io(), ut.delete(y), !_.route.action && !_.route.lazy) {
            let ke = qe(405, {
                method: U.formMethod,
                pathname: k,
                routeId: g
            });
            pr(y, g, ke, {
                flushSync: V
            });
            return
        }
        let O = v.fetchers.get(y);
        It(y, rv(U, O), {
            flushSync: V
        });
        let H = new AbortController,
            $ = Dn(e.history, k, H.signal, U);
        R.set(y, H);
        let Se = j,
            A = (await dr("action", $, [_], M))[0];
        if ($.signal.aborted) {
            R.get(y) === H && R.delete(y);
            return
        }
        if (c.v7_fetcherPersist && Ve.has(y)) {
            if (mn(A) || tt(A)) {
                It(y, Bt(void 0));
                return
            }
        } else {
            if (mn(A))
                if (R.delete(y), B > Se) {
                    It(y, Bt(void 0));
                    return
                } else return Z.add(y), It(y, Pr(U)), fr($, A, {
                    fetcherSubmission: U
                });
            if (tt(A)) {
                pr(y, g, A.error);
                return
            }
        }
        if (hn(A)) throw qe(400, {
            type: "defer-action"
        });
        let te = v.navigation.location || v.location,
            ve = Dn(e.history, te, H.signal),
            hr = u || i,
            jt = v.navigation.state !== "idle" ? Wn(hr, v.navigation.location, a) : v.matches;
        W(jt, "Didn't find any matches after fetcher action");
        let Rn = ++j;
        J.set(y, Rn);
        let Ln = Pr(U, A.data);
        v.fetchers.set(y, Ln);
        let [Tn, vt] = Os(e.history, v, jt, U, te, !1, c.unstable_skipActionErrorRevalidation, it, Ft, Ot, Ve, ut, Z, hr, a, [_.route.id, A]);
        vt.filter(ke => ke.key !== y).forEach(ke => {
            let mr = ke.key,
                ka = v.fetchers.get(mr),
                $d = Pr(void 0, ka ? ka.data : void 0);
            v.fetchers.set(mr, $d), R.has(mr) && Ut(mr), ke.controller && R.set(mr, ke.controller)
        }), He({
            fetchers: new Map(v.fetchers)
        });
        let ml = () => vt.forEach(ke => Ut(ke.key));
        H.signal.addEventListener("abort", ml);
        let {
            loaderResults: vl,
            fetcherResults: yl
        } = await pa(v.matches, jt, Tn, vt, ve);
        if (H.signal.aborted) return;
        H.signal.removeEventListener("abort", ml), J.delete(y), R.delete(y), vt.forEach(ke => R.delete(ke.key));
        let Y = Ws([...vl, ...yl]);
        if (Y) {
            if (Y.idx >= Tn.length) {
                let ke = vt[Y.idx - Tn.length].key;
                Z.add(ke)
            }
            return fr(ve, Y.result)
        }
        let {
            loaderData: De,
            errors: Ze
        } = Bs(v, v.matches, Tn, vl, void 0, vt, yl, Ne);
        if (v.fetchers.has(y)) {
            let ke = Bt(A.data);
            v.fetchers.set(y, ke)
        }
        ya(Rn), v.navigation.state === "loading" && Rn > B ? (W(T, "Expected pending action"), F && F.abort(), cr(v.navigation.location, {
            matches: jt,
            loaderData: De,
            errors: Ze,
            fetchers: new Map(v.fetchers)
        })) : (He({
            errors: Ze,
            loaderData: $s(v.loaderData, De, jt, Ze),
            fetchers: new Map(v.fetchers)
        }), it = !1)
    }
    async function Od(y, g, k, _, M, V, U) {
        let O = v.fetchers.get(y);
        It(y, Pr(U, O ? O.data : void 0), {
            flushSync: V
        });
        let H = new AbortController,
            $ = Dn(e.history, k, H.signal);
        R.set(y, H);
        let Se = j,
            A = (await dr("loader", $, [_], M))[0];
        if (hn(A) && (A = await wd(A, $.signal, !0) || A), R.get(y) === H && R.delete(y), !$.signal.aborted) {
            if (Ve.has(y)) {
                It(y, Bt(void 0));
                return
            }
            if (mn(A))
                if (B > Se) {
                    It(y, Bt(void 0));
                    return
                } else {
                    Z.add(y), await fr($, A);
                    return
                }
            if (tt(A)) {
                pr(y, g, A.error);
                return
            }
            W(!hn(A), "Unhandled fetcher deferred data"), It(y, Bt(A.data))
        }
    }
    async function fr(y, g, k) {
        let {
            submission: _,
            fetcherSubmission: M,
            replace: V
        } = k === void 0 ? {} : k;
        g.response.headers.has("X-Remix-Revalidate") && (it = !0);
        let U = g.response.headers.get("Location");
        W(U, "Expected a Location header on the redirect Response"), U = js(U, new URL(y.url), a);
        let O = ll(v.location, U, {
            _isRedirect: !0
        });
        if (n) {
            let te = !1;
            if (g.response.headers.has("X-Remix-Reload-Document")) te = !0;
            else if (aa.test(U)) {
                const ve = e.history.createURL(U);
                te = ve.origin !== t.location.origin || sr(ve.pathname, a) == null
            }
            if (te) {
                V ? t.location.replace(U) : t.location.assign(U);
                return
            }
        }
        F = null;
        let H = V === !0 ? de.Replace : de.Push,
            {
                formMethod: $,
                formAction: Se,
                formEncType: Ee
            } = v.navigation;
        !_ && !M && $ && Se && Ee && (_ = Ks(v.navigation));
        let A = _ || M;
        if (Am.has(g.response.status) && A && ft(A.formMethod)) await an(H, O, {
            submission: ne({}, A, {
                formAction: U
            }),
            preventScrollReset: I
        });
        else {
            let te = di(O, _);
            await an(H, O, {
                overrideNavigation: te,
                fetcherSubmission: M,
                preventScrollReset: I
            })
        }
    }
    async function dr(y, g, k, _) {
        try {
            let M = await Ym(s, y, g, k, _, o, l);
            return await Promise.all(M.map((V, U) => {
                if (bm(V)) {
                    let O = V.result;
                    return {
                        type: re.redirect,
                        response: Jm(O, g, k[U].route.id, _, a, c.v7_relativeSplatPath)
                    }
                }
                return Gm(V)
            }))
        } catch (M) {
            return k.map(() => ({
                type: re.error,
                error: M
            }))
        }
    }
    async function pa(y, g, k, _, M) {
        let [V, ...U] = await Promise.all([k.length ? dr("loader", M, k, g) : [], ..._.map(O => {
            if (O.matches && O.match && O.controller) {
                let H = Dn(e.history, O.path, O.controller.signal);
                return dr("loader", H, [O.match], O.matches).then($ => $[0])
            } else return Promise.resolve({
                type: re.error,
                error: qe(404, {
                    pathname: O.path
                })
            })
        })]);
        return await Promise.all([Qs(y, k, V, V.map(() => M.signal), !1, v.loaderData), Qs(y, _.map(O => O.match), U, _.map(O => O.controller ? O.controller.signal : null), !0)]), {
            loaderResults: V,
            fetcherResults: U
        }
    }

    function Io() {
        it = !0, Ft.push(...Uo()), ut.forEach((y, g) => {
            R.has(g) && (Ot.push(g), Ut(g))
        })
    }

    function It(y, g, k) {
        k === void 0 && (k = {}), v.fetchers.set(y, g), He({
            fetchers: new Map(v.fetchers)
        }, {
            flushSync: (k && k.flushSync) === !0
        })
    }

    function pr(y, g, k, _) {
        _ === void 0 && (_ = {});
        let M = Br(v.matches, g);
        pl(y), He({
            errors: {
                [M.route.id]: k
            },
            fetchers: new Map(v.fetchers)
        }, {
            flushSync: (_ && _.flushSync) === !0
        })
    }

    function ha(y) {
        return c.v7_fetcherPersist && ($e.set(y, ($e.get(y) || 0) + 1), Ve.has(y) && Ve.delete(y)), v.fetchers.get(y) || Bm
    }

    function pl(y) {
        let g = v.fetchers.get(y);
        R.has(y) && !(g && g.state === "loading" && J.has(y)) && Ut(y), ut.delete(y), J.delete(y), Z.delete(y), Ve.delete(y), v.fetchers.delete(y)
    }

    function Id(y) {
        if (c.v7_fetcherPersist) {
            let g = ($e.get(y) || 0) - 1;
            g <= 0 ? ($e.delete(y), Ve.add(y)) : $e.set(y, g)
        } else pl(y);
        He({
            fetchers: new Map(v.fetchers)
        })
    }

    function Ut(y) {
        let g = R.get(y);
        W(g, "Expected fetch controller: " + y), g.abort(), R.delete(y)
    }

    function ma(y) {
        for (let g of y) {
            let k = ha(g),
                _ = Bt(k.data);
            v.fetchers.set(g, _)
        }
    }

    function va() {
        let y = [],
            g = !1;
        for (let k of Z) {
            let _ = v.fetchers.get(k);
            W(_, "Expected fetcher: " + k), _.state === "loading" && (Z.delete(k), y.push(k), g = !0)
        }
        return ma(y), g
    }

    function ya(y) {
        let g = [];
        for (let [k, _] of J)
            if (_ < y) {
                let M = v.fetchers.get(k);
                W(M, "Expected fetcher: " + k), M.state === "loading" && (Ut(k), J.delete(k), g.push(k))
            }
        return ma(g), g.length > 0
    }

    function Ud(y, g) {
        let k = v.blockers.get(y) || Cr;
        return Je.get(y) !== g && Je.set(y, g), k
    }

    function ga(y) {
        v.blockers.delete(y), Je.delete(y)
    }

    function hl(y, g) {
        let k = v.blockers.get(y) || Cr;
        W(k.state === "unblocked" && g.state === "blocked" || k.state === "blocked" && g.state === "blocked" || k.state === "blocked" && g.state === "proceeding" || k.state === "blocked" && g.state === "unblocked" || k.state === "proceeding" && g.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + g.state);
        let _ = new Map(v.blockers);
        _.set(y, g), He({
            blockers: _
        })
    }

    function wa(y) {
        let {
            currentLocation: g,
            nextLocation: k,
            historyAction: _
        } = y;
        if (Je.size === 0) return;
        Je.size > 1 && lr(!1, "A router only supports one blocker at a time");
        let M = Array.from(Je.entries()),
            [V, U] = M[M.length - 1],
            O = v.blockers.get(V);
        if (!(O && O.state === "proceeding") && U({
                currentLocation: g,
                nextLocation: k,
                historyAction: _
            })) return V
    }

    function Uo(y) {
        let g = [];
        return Ne.forEach((k, _) => {
            (!y || y(_)) && (k.cancel(), g.push(_), Ne.delete(_))
        }), g
    }

    function jd(y, g, k) {
        if (E = y, w = g, S = k || null, !N && v.navigation === fi) {
            N = !0;
            let _ = Ea(v.location, v.matches);
            _ != null && He({
                restoreScrollPosition: _
            })
        }
        return () => {
            E = null, w = null, S = null
        }
    }

    function Sa(y, g) {
        return S && S(y, g.map(_ => vm(_, v.loaderData))) || y.key
    }

    function Ad(y, g) {
        if (E && w) {
            let k = Sa(y, g);
            E[k] = w()
        }
    }

    function Ea(y, g) {
        if (E) {
            let k = Sa(y, g),
                _ = E[k];
            if (typeof _ == "number") return _
        }
        return null
    }

    function Bd(y) {
        o = {}, u = ou(y, l, void 0, o)
    }
    return D = {
        get basename() {
            return a
        },
        get future() {
            return c
        },
        get state() {
            return v
        },
        get routes() {
            return i
        },
        get window() {
            return t
        },
        initialize: Rd,
        subscribe: Td,
        enableScrollRestoration: jd,
        navigate: da,
        fetch: Md,
        revalidate: Nd,
        createHref: y => e.history.createHref(y),
        encodeLocation: y => e.history.encodeLocation(y),
        getFetcher: ha,
        deleteFetcher: Id,
        dispose: Ld,
        getBlocker: Ud,
        deleteBlocker: ga,
        _internalFetchControllers: R,
        _internalActiveDeferreds: Ne,
        _internalSetRoutes: Bd
    }, D
}

function Hm(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function iu(e, t, n, r, l, o, i, u) {
    let a, s;
    if (i) {
        a = [];
        for (let d of t)
            if (a.push(d), d.route.id === i) {
                s = d;
                break
            }
    } else a = t, s = t[t.length - 1];
    let c = oa(l || ".", la(a, o), sr(e.pathname, n) || e.pathname, u === "path");
    return l == null && (c.search = e.search, c.hash = e.hash), (l == null || l === "" || l === ".") && s && s.route.index && !sa(c.search) && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (c.pathname = c.pathname === "/" ? n : Rt([n, c.pathname])), xn(c)
}

function Fs(e, t, n, r) {
    if (!r || !Hm(r)) return {
        path: n
    };
    if (r.formMethod && !tv(r.formMethod)) return {
        path: n,
        error: qe(405, {
            method: r.formMethod
        })
    };
    let l = () => ({
            path: n,
            error: qe(400, {
                type: "invalid-body"
            })
        }),
        o = r.formMethod || "get",
        i = e ? o.toUpperCase() : o.toLowerCase(),
        u = yd(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!ft(i)) return l();
            let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((E, S) => {
                let [w, N] = S;
                return "" + E + w + "=" + N + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: i,
                    formAction: u,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: p
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!ft(i)) return l();
            try {
                let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: i,
                        formAction: u,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: p,
                        text: void 0
                    }
                }
            } catch {
                return l()
            }
        }
    }
    W(typeof FormData == "function", "FormData is not available in this environment");
    let a, s;
    if (r.formData) a = uu(r.formData), s = r.formData;
    else if (r.body instanceof FormData) a = uu(r.body), s = r.body;
    else if (r.body instanceof URLSearchParams) a = r.body, s = As(a);
    else if (r.body == null) a = new URLSearchParams, s = new FormData;
    else try {
        a = new URLSearchParams(r.body), s = As(a)
    } catch {
        return l()
    }
    let c = {
        formMethod: i,
        formAction: u,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: s,
        json: void 0,
        text: void 0
    };
    if (ft(c.formMethod)) return {
        path: n,
        submission: c
    };
    let d = un(n);
    return t && d.search && sa(d.search) && a.append("index", ""), d.search = "?" + a, {
        path: xn(d),
        submission: c
    }
}

function Wm(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(l => l.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function Os(e, t, n, r, l, o, i, u, a, s, c, d, p, E, S, w) {
    let N = w ? tt(w[1]) ? w[1].error : w[1].data : void 0,
        h = e.createURL(t.location),
        f = e.createURL(l),
        m = w && tt(w[1]) ? w[0] : void 0,
        x = m ? Wm(n, m) : n,
        L = w ? w[1].statusCode : void 0,
        D = i && L && L >= 400,
        v = x.filter((I, F) => {
            let {
                route: K
            } = I;
            if (K.lazy) return !0;
            if (K.loader == null) return !1;
            if (o) return typeof K.loader != "function" || K.loader.hydrate ? !0 : t.loaderData[K.id] === void 0 && (!t.errors || t.errors[K.id] === void 0);
            if (Qm(t.loaderData, t.matches[F], I) || a.some(we => we === I.route.id)) return !0;
            let ce = t.matches[F],
                oe = I;
            return Is(I, ne({
                currentUrl: h,
                currentParams: ce.params,
                nextUrl: f,
                nextParams: oe.params
            }, r, {
                actionResult: N,
                unstable_actionStatus: L,
                defaultShouldRevalidate: D ? !1 : u || h.pathname + h.search === f.pathname + f.search || h.search !== f.search || vd(ce, oe)
            }))
        }),
        T = [];
    return d.forEach((I, F) => {
        if (o || !n.some(it => it.route.id === I.routeId) || c.has(F)) return;
        let K = Wn(E, I.path, S);
        if (!K) {
            T.push({
                key: F,
                routeId: I.routeId,
                path: I.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let ce = t.fetchers.get(F),
            oe = au(K, I.path),
            we = !1;
        p.has(F) ? we = !1 : s.includes(F) ? we = !0 : ce && ce.state !== "idle" && ce.data === void 0 ? we = u : we = Is(oe, ne({
            currentUrl: h,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: f,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: N,
            unstable_actionStatus: L,
            defaultShouldRevalidate: D ? !1 : u
        })), we && T.push({
            key: F,
            routeId: I.routeId,
            path: I.path,
            matches: K,
            match: oe,
            controller: new AbortController
        })
    }), [v, T]
}

function Qm(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        l = e[n.route.id] === void 0;
    return r || l
}

function vd(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function Is(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function Us(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let l = n[e.id];
    W(l, "No route found in manifest");
    let o = {};
    for (let i in r) {
        let a = l[i] !== void 0 && i !== "hasErrorBoundary";
        lr(!a, 'Route "' + l.id + '" has a static property "' + i + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + i + '" will be ignored.')), !a && !hm.has(i) && (o[i] = r[i])
    }
    Object.assign(l, o), Object.assign(l, ne({}, t(l), {
        lazy: void 0
    }))
}

function Km(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function Ym(e, t, n, r, l, o, i, u) {
    let a = r.reduce((d, p) => d.add(p.route.id), new Set),
        s = new Set,
        c = await e({
            matches: l.map(d => {
                let p = a.has(d.route.id);
                return ne({}, d, {
                    shouldLoad: p,
                    resolve: S => (s.add(d.route.id), p ? Xm(t, n, d, o, i, S, u) : Promise.resolve({
                        type: re.data,
                        result: void 0
                    }))
                })
            }),
            request: n,
            params: l[0].params,
            context: u
        });
    return l.forEach(d => W(s.has(d.route.id), '`match.resolve()` was not called for route id "' + d.route.id + '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')), c.filter((d, p) => a.has(l[p].route.id))
}
async function Xm(e, t, n, r, l, o, i) {
    let u, a, s = c => {
        let d, p = new Promise((w, N) => d = N);
        a = () => d(), t.signal.addEventListener("abort", a);
        let E = w => typeof c != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + e + '" [routeId: ' + n.route.id + "]"))) : c({
                request: t,
                params: n.params,
                context: i
            }, ...w !== void 0 ? [w] : []),
            S;
        return o ? S = o(w => E(w)) : S = (async () => {
            try {
                return {
                    type: "data",
                    result: await E()
                }
            } catch (w) {
                return {
                    type: "error",
                    result: w
                }
            }
        })(), Promise.race([S, p])
    };
    try {
        let c = n.route[e];
        if (n.route.lazy)
            if (c) {
                let d, [p] = await Promise.all([s(c).catch(E => {
                    d = E
                }), Us(n.route, l, r)]);
                if (d !== void 0) throw d;
                u = p
            } else if (await Us(n.route, l, r), c = n.route[e], c) u = await s(c);
        else if (e === "action") {
            let d = new URL(t.url),
                p = d.pathname + d.search;
            throw qe(405, {
                method: t.method,
                pathname: p,
                routeId: n.route.id
            })
        } else return {
            type: re.data,
            result: void 0
        };
        else if (c) u = await s(c);
        else {
            let d = new URL(t.url),
                p = d.pathname + d.search;
            throw qe(404, {
                pathname: p
            })
        }
        W(u.result !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (c) {
        return {
            type: re.error,
            result: c
        }
    } finally {
        a && t.signal.removeEventListener("abort", a)
    }
    return u
}
async function Gm(e) {
    let {
        result: t,
        type: n,
        status: r
    } = e;
    if (gd(t)) {
        let i;
        try {
            let u = t.headers.get("Content-Type");
            u && /\bapplication\/json\b/.test(u) ? t.body == null ? i = null : i = await t.json() : i = await t.text()
        } catch (u) {
            return {
                type: re.error,
                error: u
            }
        }
        return n === re.error ? {
            type: re.error,
            error: new ia(t.status, t.statusText, i),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: re.data,
            data: i,
            statusCode: t.status,
            headers: t.headers
        }
    }
    if (n === re.error) return {
        type: re.error,
        error: t,
        statusCode: ua(t) ? t.status : r
    };
    if (ev(t)) {
        var l, o;
        return {
            type: re.deferred,
            deferredData: t,
            statusCode: (l = t.init) == null ? void 0 : l.status,
            headers: ((o = t.init) == null ? void 0 : o.headers) && new Headers(t.init.headers)
        }
    }
    return {
        type: re.data,
        data: t,
        statusCode: r
    }
}

function Jm(e, t, n, r, l, o) {
    let i = e.headers.get("Location");
    if (W(i, "Redirects returned/thrown from loaders/actions must have a Location header"), !aa.test(i)) {
        let u = r.slice(0, r.findIndex(a => a.route.id === n) + 1);
        i = iu(new URL(t.url), u, l, !0, i, o), e.headers.set("Location", i)
    }
    return e
}

function js(e, t, n) {
    if (aa.test(e)) {
        let r = e,
            l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
            o = sr(l.pathname, n) != null;
        if (l.origin === t.origin && o) return l.pathname + l.search + l.hash
    }
    return e
}

function Dn(e, t, n, r) {
    let l = e.createURL(yd(t)).toString(),
        o = {
            signal: n
        };
    if (r && ft(r.formMethod)) {
        let {
            formMethod: i,
            formEncType: u
        } = r;
        o.method = i.toUpperCase(), u === "application/json" ? (o.headers = new Headers({
            "Content-Type": u
        }), o.body = JSON.stringify(r.json)) : u === "text/plain" ? o.body = r.text : u === "application/x-www-form-urlencoded" && r.formData ? o.body = uu(r.formData) : o.body = r.formData
    }
    return new Request(l, o)
}

function uu(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function As(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function Zm(e, t, n, r, l, o) {
    let i = {},
        u = null,
        a, s = !1,
        c = {},
        d = r && tt(r[1]) ? r[1].error : void 0;
    return n.forEach((p, E) => {
        let S = t[E].route.id;
        if (W(!mn(p), "Cannot handle redirect results in processLoaderData"), tt(p)) {
            let w = p.error;
            d !== void 0 && (w = d, d = void 0), u = u || {}; {
                let N = Br(e, S);
                u[N.route.id] == null && (u[N.route.id] = w)
            }
            i[S] = void 0, s || (s = !0, a = ua(p.error) ? p.error.status : 500), p.headers && (c[S] = p.headers)
        } else hn(p) ? (l.set(S, p.deferredData), i[S] = p.deferredData.data, p.statusCode != null && p.statusCode !== 200 && !s && (a = p.statusCode), p.headers && (c[S] = p.headers)) : (i[S] = p.data, p.statusCode && p.statusCode !== 200 && !s && (a = p.statusCode), p.headers && (c[S] = p.headers))
    }), d !== void 0 && r && (u = {
        [r[0]]: d
    }, i[r[0]] = void 0), {
        loaderData: i,
        errors: u,
        statusCode: a || 200,
        loaderHeaders: c
    }
}

function Bs(e, t, n, r, l, o, i, u) {
    let {
        loaderData: a,
        errors: s
    } = Zm(t, n, r, l, u);
    for (let c = 0; c < o.length; c++) {
        let {
            key: d,
            match: p,
            controller: E
        } = o[c];
        W(i !== void 0 && i[c] !== void 0, "Did not find corresponding fetcher result");
        let S = i[c];
        if (!(E && E.signal.aborted))
            if (tt(S)) {
                let w = Br(e.matches, p == null ? void 0 : p.route.id);
                s && s[w.route.id] || (s = ne({}, s, {
                    [w.route.id]: S.error
                })), e.fetchers.delete(d)
            } else if (mn(S)) W(!1, "Unhandled fetcher revalidation redirect");
        else if (hn(S)) W(!1, "Unhandled fetcher deferred data");
        else {
            let w = Bt(S.data);
            e.fetchers.set(d, w)
        }
    }
    return {
        loaderData: a,
        errors: s
    }
}

function $s(e, t, n, r) {
    let l = ne({}, t);
    for (let o of n) {
        let i = o.route.id;
        if (t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && o.route.loader && (l[i] = e[i]), r && r.hasOwnProperty(i)) break
    }
    return l
}

function Vs(e) {
    return e ? tt(e[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {}
}

function Br(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function Hs(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function qe(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: l,
        type: o
    } = t === void 0 ? {} : t, i = "Unknown Server Error", u = "Unknown @remix-run/router error";
    return e === 400 ? (i = "Bad Request", l && n && r ? u = "You made a " + l + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? u = "defer() is not supported in actions" : o === "invalid-body" && (u = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden", u = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (i = "Not Found", u = 'No route matches URL "' + n + '"') : e === 405 && (i = "Method Not Allowed", l && n && r ? u = "You made a " + l.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')), new ia(e || 500, i, new Error(u), !0)
}

function Ws(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (mn(n)) return {
            result: n,
            idx: t
        }
    }
}

function yd(e) {
    let t = typeof e == "string" ? un(e) : e;
    return xn(ne({}, t, {
        hash: ""
    }))
}

function qm(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function bm(e) {
    return gd(e.result) && jm.has(e.result.status)
}

function hn(e) {
    return e.type === re.deferred
}

function tt(e) {
    return e.type === re.error
}

function mn(e) {
    return (e && e.type) === re.redirect
}

function ev(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function gd(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function tv(e) {
    return Um.has(e.toLowerCase())
}

function ft(e) {
    return Om.has(e.toLowerCase())
}
async function Qs(e, t, n, r, l, o) {
    for (let i = 0; i < n.length; i++) {
        let u = n[i],
            a = t[i];
        if (!a) continue;
        let s = e.find(d => d.route.id === a.route.id),
            c = s != null && !vd(s, a) && (o && o[a.route.id]) !== void 0;
        if (hn(u) && (l || c)) {
            let d = r[i];
            W(d, "Expected an AbortSignal for revalidating fetcher deferred result"), await wd(u, d, l).then(p => {
                p && (n[i] = p || n[i])
            })
        }
    }
}
async function wd(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: re.data,
                data: e.deferredData.unwrappedData
            }
        } catch (l) {
            return {
                type: re.error,
                error: l
            }
        }
        return {
            type: re.data,
            data: e.deferredData.data
        }
    }
}

function sa(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function au(e, t) {
    let n = typeof t == "string" ? un(t).search : t.search;
    if (e[e.length - 1].route.index && sa(n || "")) return e[e.length - 1];
    let r = pd(e);
    return r[r.length - 1]
}

function Ks(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: l,
        formData: o,
        json: i
    } = e;
    if (!(!t || !n || !r)) {
        if (l != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: l
        };
        if (o != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: o,
            json: void 0,
            text: void 0
        };
        if (i !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: i,
            text: void 0
        }
    }
}

function di(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function nv(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Pr(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function rv(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Bt(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function lv(e, t) {
    try {
        let n = e.sessionStorage.getItem(md);
        if (n) {
            let r = JSON.parse(n);
            for (let [l, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(l, new Set(o || []))
        }
    } catch {}
}

function ov(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, l] of t) n[r] = [...l];
        try {
            e.sessionStorage.setItem(md, JSON.stringify(n))
        } catch (r) {
            lr(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function go() {
    return go = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, go.apply(this, arguments)
}
const Fo = P.createContext(null),
    Sd = P.createContext(null),
    _n = P.createContext(null),
    ca = P.createContext(null),
    Mt = P.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Ed = P.createContext(null);

function iv(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    fl() || W(!1);
    let {
        basename: r,
        navigator: l
    } = P.useContext(_n), {
        hash: o,
        pathname: i,
        search: u
    } = Cd(e, {
        relative: n
    }), a = i;
    return r !== "/" && (a = i === "/" ? r : Rt([r, i])), l.createHref({
        pathname: a,
        search: u,
        hash: o
    })
}

function fl() {
    return P.useContext(ca) != null
}

function dl() {
    return fl() || W(!1), P.useContext(ca).location
}

function kd(e) {
    P.useContext(_n).static || P.useLayoutEffect(e)
}

function xd() {
    let {
        isDataRoute: e
    } = P.useContext(Mt);
    return e ? wv() : uv()
}

function uv() {
    fl() || W(!1);
    let e = P.useContext(Fo),
        {
            basename: t,
            future: n,
            navigator: r
        } = P.useContext(_n),
        {
            matches: l
        } = P.useContext(Mt),
        {
            pathname: o
        } = dl(),
        i = JSON.stringify(la(l, n.v7_relativeSplatPath)),
        u = P.useRef(!1);
    return kd(() => {
        u.current = !0
    }), P.useCallback(function(s, c) {
        if (c === void 0 && (c = {}), !u.current) return;
        if (typeof s == "number") {
            r.go(s);
            return
        }
        let d = oa(s, JSON.parse(i), o, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Rt([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, i, o, e])
}
const av = P.createContext(null);

function sv(e) {
    let t = P.useContext(Mt).outlet;
    return t && P.createElement(av.Provider, {
        value: e
    }, t)
}

function Vv() {
    let {
        matches: e
    } = P.useContext(Mt), t = e[e.length - 1];
    return t ? t.params : {}
}

function Cd(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = P.useContext(_n), {
        matches: l
    } = P.useContext(Mt), {
        pathname: o
    } = dl(), i = JSON.stringify(la(l, r.v7_relativeSplatPath));
    return P.useMemo(() => oa(e, JSON.parse(i), o, n === "path"), [e, i, o, n])
}

function cv(e, t, n, r) {
    fl() || W(!1);
    let {
        navigator: l
    } = P.useContext(_n), {
        matches: o
    } = P.useContext(Mt), i = o[o.length - 1], u = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let s = dl(),
        c;
    c = s;
    let d = c.pathname || "/",
        p = d;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        p = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let E = Wn(e, {
        pathname: p
    });
    return mv(E && E.map(w => Object.assign({}, w, {
        params: Object.assign({}, u, w.params),
        pathname: Rt([a, l.encodeLocation ? l.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? a : Rt([a, l.encodeLocation ? l.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r)
}

function fv() {
    let e = gv(),
        t = ua(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: l
    }, n) : null, null)
}
const dv = P.createElement(fv, null);
class pv extends P.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? P.createElement(Mt.Provider, {
            value: this.props.routeContext
        }, P.createElement(Ed.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function hv(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, l = P.useContext(Fo);
    return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), P.createElement(Mt.Provider, {
        value: t
    }, r)
}

function mv(e, t, n, r) {
    var l;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null
    }
    let i = e,
        u = (l = n) == null ? void 0 : l.errors;
    if (u != null) {
        let c = i.findIndex(d => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0);
        c >= 0 || W(!1), i = i.slice(0, Math.min(i.length, c + 1))
    }
    let a = !1,
        s = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < i.length; c++) {
            let d = i[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = c), d.route.id) {
                let {
                    loaderData: p,
                    errors: E
                } = n, S = d.route.loader && p[d.route.id] === void 0 && (!E || E[d.route.id] === void 0);
                if (d.route.lazy || S) {
                    a = !0, s >= 0 ? i = i.slice(0, s + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((c, d, p) => {
        let E, S = !1,
            w = null,
            N = null;
        n && (E = u && d.route.id ? u[d.route.id] : void 0, w = d.route.errorElement || dv, a && (s < 0 && p === 0 ? (S = !0, N = null) : s === p && (S = !0, N = d.route.hydrateFallbackElement || null)));
        let h = t.concat(i.slice(0, p + 1)),
            f = () => {
                let m;
                return E ? m = w : S ? m = N : d.route.Component ? m = P.createElement(d.route.Component, null) : d.route.element ? m = d.route.element : m = c, P.createElement(hv, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: m
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0) ? P.createElement(pv, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: E,
            children: f(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : f()
    }, null)
}
var Pd = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(Pd || {}),
    or = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(or || {});

function vv(e) {
    let t = P.useContext(Fo);
    return t || W(!1), t
}

function _d(e) {
    let t = P.useContext(Sd);
    return t || W(!1), t
}

function yv(e) {
    let t = P.useContext(Mt);
    return t || W(!1), t
}

function fa(e) {
    let t = yv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || W(!1), n.route.id
}

function Hv() {
    let e = _d(or.UseLoaderData),
        t = fa(or.UseLoaderData);
    if (e.errors && e.errors[t] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + t + ")");
        return
    }
    return e.loaderData[t]
}

function gv() {
    var e;
    let t = P.useContext(Ed),
        n = _d(or.UseRouteError),
        r = fa(or.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function wv() {
    let {
        router: e
    } = vv(Pd.UseNavigateStable), t = fa(or.UseNavigateStable), n = P.useRef(!1);
    return kd(() => {
        n.current = !0
    }), P.useCallback(function(l, o) {
        o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, go({
            fromRouteId: t
        }, o)))
    }, [e, t])
}

function Wv(e) {
    return sv(e.context)
}

function Sv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = de.Pop,
        navigator: o,
        static: i = !1,
        future: u
    } = e;
    fl() && W(!1);
    let a = t.replace(/^\/*/, "/"),
        s = P.useMemo(() => ({
            basename: a,
            navigator: o,
            static: i,
            future: go({
                v7_relativeSplatPath: !1
            }, u)
        }), [a, u, o, i]);
    typeof r == "string" && (r = un(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: p = "",
        state: E = null,
        key: S = "default"
    } = r, w = P.useMemo(() => {
        let N = sr(c, a);
        return N == null ? null : {
            location: {
                pathname: N,
                search: d,
                hash: p,
                state: E,
                key: S
            },
            navigationType: l
        }
    }, [a, c, d, p, E, S, l]);
    return w == null ? null : P.createElement(_n.Provider, {
        value: s
    }, P.createElement(ca.Provider, {
        children: n,
        value: w
    }))
}
new Promise(() => {});

function Ev(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ol() {
    return ol = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ol.apply(this, arguments)
}

function kv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, o;
    for (o = 0; o < r.length; o++) l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function xv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Cv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !xv(e)
}

function su(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(l => [n, l]) : [
            [n, r]
        ])
    }, []))
}

function Pv(e, t) {
    let n = su(e);
    return t && t.forEach((r, l) => {
        n.has(l) || t.getAll(l).forEach(o => {
            n.append(l, o)
        })
    }), n
}
const _v = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Rv = "6";
try {
    window.__reactRouterVersion = Rv
} catch {}

function Qv(e, t) {
    return Vm({
        basename: void 0,
        future: ol({}, void 0, {
            v7_prependBasename: !0
        }),
        history: fm({
            window: void 0
        }),
        hydrationData: Lv(),
        routes: e,
        mapRouteProperties: Ev,
        unstable_dataStrategy: void 0,
        window: void 0
    }).initialize()
}

function Lv() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = ol({}, t, {
        errors: Tv(t.errors)
    })), t
}

function Tv(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, l] of t)
        if (l && l.__type === "RouteErrorResponse") n[r] = new ia(l.status, l.statusText, l.data, l.internal === !0);
        else if (l && l.__type === "Error") {
        if (l.__subType) {
            let o = window[l.__subType];
            if (typeof o == "function") try {
                let i = new o(l.message);
                i.stack = "", n[r] = i
            } catch {}
        }
        if (n[r] == null) {
            let o = new Error(l.message);
            o.stack = "", n[r] = o
        }
    } else n[r] = l;
    return n
}
const Nv = P.createContext({
        isTransitioning: !1
    }),
    Dv = P.createContext(new Map),
    zv = "startTransition",
    Ys = lp[zv],
    Mv = "flushSync",
    Xs = cm[Mv];

function Fv(e) {
    Ys ? Ys(e) : e()
}

function _r(e) {
    Xs ? Xs(e) : e()
}
class Ov {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function Kv(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [l, o] = P.useState(n.state), [i, u] = P.useState(), [a, s] = P.useState({
        isTransitioning: !1
    }), [c, d] = P.useState(), [p, E] = P.useState(), [S, w] = P.useState(), N = P.useRef(new Map), {
        v7_startTransition: h
    } = r || {}, f = P.useCallback(v => {
        h ? Fv(v) : v()
    }, [h]), m = P.useCallback((v, T) => {
        let {
            deletedFetchers: I,
            unstable_flushSync: F,
            unstable_viewTransitionOpts: K
        } = T;
        I.forEach(oe => N.current.delete(oe)), v.fetchers.forEach((oe, we) => {
            oe.data !== void 0 && N.current.set(we, oe.data)
        });
        let ce = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != "function";
        if (!K || ce) {
            F ? _r(() => o(v)) : f(() => o(v));
            return
        }
        if (F) {
            _r(() => {
                p && (c && c.resolve(), p.skipTransition()), s({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: K.currentLocation,
                    nextLocation: K.nextLocation
                })
            });
            let oe = n.window.document.startViewTransition(() => {
                _r(() => o(v))
            });
            oe.finished.finally(() => {
                _r(() => {
                    d(void 0), E(void 0), u(void 0), s({
                        isTransitioning: !1
                    })
                })
            }), _r(() => E(oe));
            return
        }
        p ? (c && c.resolve(), p.skipTransition(), w({
            state: v,
            currentLocation: K.currentLocation,
            nextLocation: K.nextLocation
        })) : (u(v), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: K.currentLocation,
            nextLocation: K.nextLocation
        }))
    }, [n.window, p, c, N, f]);
    P.useLayoutEffect(() => n.subscribe(m), [n, m]), P.useEffect(() => {
        a.isTransitioning && !a.flushSync && d(new Ov)
    }, [a]), P.useEffect(() => {
        if (c && i && n.window) {
            let v = i,
                T = c.promise,
                I = n.window.document.startViewTransition(async () => {
                    f(() => o(v)), await T
                });
            I.finished.finally(() => {
                d(void 0), E(void 0), u(void 0), s({
                    isTransitioning: !1
                })
            }), E(I)
        }
    }, [f, i, c, n.window]), P.useEffect(() => {
        c && i && l.location.key === i.location.key && c.resolve()
    }, [c, p, l.location, i]), P.useEffect(() => {
        !a.isTransitioning && S && (u(S.state), s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: S.currentLocation,
            nextLocation: S.nextLocation
        }), w(void 0))
    }, [a.isTransitioning, S]), P.useEffect(() => {}, []);
    let x = P.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: v => n.navigate(v),
            push: (v, T, I) => n.navigate(v, {
                state: T,
                preventScrollReset: I == null ? void 0 : I.preventScrollReset
            }),
            replace: (v, T, I) => n.navigate(v, {
                replace: !0,
                state: T,
                preventScrollReset: I == null ? void 0 : I.preventScrollReset
            })
        }), [n]),
        L = n.basename || "/",
        D = P.useMemo(() => ({
            router: n,
            navigator: x,
            static: !1,
            basename: L
        }), [n, x, L]);
    return P.createElement(P.Fragment, null, P.createElement(Fo.Provider, {
        value: D
    }, P.createElement(Sd.Provider, {
        value: l
    }, P.createElement(Dv.Provider, {
        value: N.current
    }, P.createElement(Nv.Provider, {
        value: a
    }, P.createElement(Sv, {
        basename: L,
        location: l.location,
        navigationType: l.historyAction,
        navigator: x,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, l.initialized || n.future.v7_partialHydration ? P.createElement(Iv, {
        routes: n.routes,
        future: n.future,
        state: l
    }) : t))))), null)
}

function Iv(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return cv(t, void 0, r, n)
}
const Uv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    jv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Yv = P.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: o,
            replace: i,
            state: u,
            target: a,
            to: s,
            preventScrollReset: c,
            unstable_viewTransition: d
        } = t, p = kv(t, _v), {
            basename: E
        } = P.useContext(_n), S, w = !1;
        if (typeof s == "string" && jv.test(s) && (S = s, Uv)) try {
            let m = new URL(window.location.href),
                x = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
                L = sr(x.pathname, E);
            x.origin === m.origin && L != null ? s = L + x.search + x.hash : w = !0
        } catch {}
        let N = iv(s, {
                relative: l
            }),
            h = Av(s, {
                replace: i,
                state: u,
                target: a,
                preventScrollReset: c,
                relative: l,
                unstable_viewTransition: d
            });

        function f(m) {
            r && r(m), m.defaultPrevented || h(m)
        }
        return P.createElement("a", ol({}, p, {
            href: S || N,
            onClick: w || o ? r : f,
            ref: n,
            target: a
        }))
    });
var Gs;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Gs || (Gs = {}));
var Js;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Js || (Js = {}));

function Av(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: u
    } = t === void 0 ? {} : t, a = xd(), s = dl(), c = Cd(e, {
        relative: i
    });
    return P.useCallback(d => {
        if (Cv(d, n)) {
            d.preventDefault();
            let p = r !== void 0 ? r : xn(s) === xn(c);
            a(e, {
                replace: p,
                state: l,
                preventScrollReset: o,
                relative: i,
                unstable_viewTransition: u
            })
        }
    }, [s, a, c, r, l, n, e, o, i, u])
}

function Xv(e) {
    let t = P.useRef(su(e)),
        n = P.useRef(!1),
        r = dl(),
        l = P.useMemo(() => Pv(r.search, n.current ? null : t.current), [r.search]),
        o = xd(),
        i = P.useCallback((u, a) => {
            const s = su(typeof u == "function" ? u(l) : u);
            n.current = !0, o("?" + s, a)
        }, [o, l]);
    return [l, i]
}
export {
    sm as $, Yv as L, Wv as O, rp as R, cd as a, lp as b, Bv as c, xd as d, dl as e, Xv as f, qs as g, $v as h, Hv as i, Qv as j, Kv as k, P as r, Vv as u
};
//# sourceMappingURL=vendor-DR5RWKqR.js.map