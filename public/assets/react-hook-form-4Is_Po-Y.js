import {
    R as m
} from "./vendor-DR5RWKqR.js";
var fe = e => e.type === "checkbox",
    ie = e => e instanceof Date,
    U = e => e == null;
const et = e => typeof e == "object";
var T = e => !U(e) && !Array.isArray(e) && et(e) && !ie(e),
    tt = e => T(e) && e.target ? fe(e.target) ? e.target.checked : e.target.value : e,
    xt = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
    rt = (e, s) => e.has(xt(s)),
    mt = e => {
        const s = e.constructor && e.constructor.prototype;
        return T(s) && s.hasOwnProperty("isPrototypeOf")
    },
    Re = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";

function p(e) {
    let s;
    const t = Array.isArray(e);
    if (e instanceof Date) s = new Date(e);
    else if (e instanceof Set) s = new Set(e);
    else if (!(Re && (e instanceof Blob || e instanceof FileList)) && (t || T(e)))
        if (s = t ? [] : {}, !t && !mt(e)) s = e;
        else
            for (const u in e) e.hasOwnProperty(u) && (s[u] = p(e[u]));
    else return e;
    return s
}
var ce = e => Array.isArray(e) ? e.filter(Boolean) : [],
    w = e => e === void 0,
    f = (e, s, t) => {
        if (!s || !T(e)) return t;
        const u = ce(s.split(/[,[\].]+?/)).reduce((n, l) => U(n) ? n : n[l], e);
        return w(u) || u === e ? w(e[s]) ? t : e[s] : u
    },
    j = e => typeof e == "boolean",
    Te = e => /^\w*$/.test(e),
    st = e => ce(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
    x = (e, s, t) => {
        let u = -1;
        const n = Te(s) ? [s] : st(s),
            l = n.length,
            y = l - 1;
        for (; ++u < l;) {
            const h = n[u];
            let D = t;
            if (u !== y) {
                const S = e[h];
                D = T(S) || Array.isArray(S) ? S : isNaN(+n[u + 1]) ? {} : []
            }
            if (h === "__proto__") return;
            e[h] = D, e = e[h]
        }
        return e
    };
const _e = {
        BLUR: "blur",
        FOCUS_OUT: "focusout",
        CHANGE: "change"
    },
    W = {
        onBlur: "onBlur",
        onChange: "onChange",
        onSubmit: "onSubmit",
        onTouched: "onTouched",
        all: "all"
    },
    z = {
        max: "max",
        min: "min",
        maxLength: "maxLength",
        minLength: "minLength",
        pattern: "pattern",
        required: "required",
        validate: "validate"
    },
    it = m.createContext(null),
    Le = () => m.useContext(it),
    Wt = e => {
        const {
            children: s,
            ...t
        } = e;
        return m.createElement(it.Provider, {
            value: t
        }, s)
    };
var ut = (e, s, t, u = !0) => {
        const n = {
            defaultValues: s._defaultValues
        };
        for (const l in e) Object.defineProperty(n, l, {
            get: () => {
                const y = l;
                return s._proxyFormState[y] !== W.all && (s._proxyFormState[y] = !u || W.all), t && (t[y] = !0), e[y]
            }
        });
        return n
    },
    B = e => T(e) && !Object.keys(e).length,
    at = (e, s, t, u) => {
        t(e);
        const {
            name: n,
            ...l
        } = e;
        return B(l) || Object.keys(l).length >= Object.keys(s).length || Object.keys(l).find(y => s[y] === (!u || W.all))
    },
    he = e => Array.isArray(e) ? e : [e],
    lt = (e, s, t) => !e || !s || e === s || he(e).some(u => u && (t ? u === s : u.startsWith(s) || s.startsWith(u)));

function Oe(e) {
    const s = m.useRef(e);
    s.current = e, m.useEffect(() => {
        const t = !e.disabled && s.current.subject && s.current.subject.subscribe({
            next: s.current.next
        });
        return () => {
            t && t.unsubscribe()
        }
    }, [e.disabled])
}

function Dt(e) {
    const s = Le(),
        {
            control: t = s.control,
            disabled: u,
            name: n,
            exact: l
        } = e || {},
        [y, h] = m.useState(t._formState),
        D = m.useRef(!0),
        S = m.useRef({
            isDirty: !1,
            isLoading: !1,
            dirtyFields: !1,
            touchedFields: !1,
            validatingFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        }),
        _ = m.useRef(n);
    return _.current = n, Oe({
        disabled: u,
        next: v => D.current && lt(_.current, v.name, l) && at(v, S.current, t._updateFormState) && h({ ...t._formState,
            ...v
        }),
        subject: t._subjects.state
    }), m.useEffect(() => (D.current = !0, S.current.isValid && t._updateValid(!0), () => {
        D.current = !1
    }), [t]), ut(y, t, S.current, !1)
}
var $ = e => typeof e == "string",
    nt = (e, s, t, u, n) => $(e) ? (u && s.watch.add(e), f(t, e, n)) : Array.isArray(e) ? e.map(l => (u && s.watch.add(l), f(t, l))) : (u && (s.watchAll = !0), t);

function wt(e) {
    const s = Le(),
        {
            control: t = s.control,
            name: u,
            defaultValue: n,
            disabled: l,
            exact: y
        } = e || {},
        h = m.useRef(u);
    h.current = u, Oe({
        disabled: l,
        subject: t._subjects.values,
        next: _ => {
            lt(h.current, _.name, y) && S(p(nt(h.current, t._names, _.values || t._formValues, !1, n)))
        }
    });
    const [D, S] = m.useState(t._getWatch(u, n));
    return m.useEffect(() => t._removeUnmounted()), D
}

function Et(e) {
    const s = Le(),
        {
            name: t,
            disabled: u,
            control: n = s.control,
            shouldUnregister: l
        } = e,
        y = rt(n._names.array, t),
        h = wt({
            control: n,
            name: t,
            defaultValue: f(n._formValues, t, f(n._defaultValues, t, e.defaultValue)),
            exact: !0
        }),
        D = Dt({
            control: n,
            name: t
        }),
        S = m.useRef(n.register(t, { ...e.rules,
            value: h,
            ...j(e.disabled) ? {
                disabled: e.disabled
            } : {}
        }));
    return m.useEffect(() => {
        const _ = n._options.shouldUnregister || l,
            v = (N, H) => {
                const L = f(n._fields, N);
                L && (L._f.mount = H)
            };
        if (v(t, !0), _) {
            const N = p(f(n._options.defaultValues, t));
            x(n._defaultValues, t, N), w(f(n._formValues, t)) && x(n._formValues, t, N)
        }
        return () => {
            (y ? _ && !n._state.action : _) ? n.unregister(t): v(t, !1)
        }
    }, [t, n, y, l]), m.useEffect(() => {
        f(n._fields, t) && n._updateDisabledField({
            disabled: u,
            fields: n._fields,
            name: t,
            value: f(n._fields, t)._f.value
        })
    }, [u, t, n]), {
        field: {
            name: t,
            value: h,
            ...j(u) || D.disabled ? {
                disabled: D.disabled || u
            } : {},
            onChange: m.useCallback(_ => S.current.onChange({
                target: {
                    value: tt(_),
                    name: t
                },
                type: _e.CHANGE
            }), [t]),
            onBlur: m.useCallback(() => S.current.onBlur({
                target: {
                    value: f(n._formValues, t),
                    name: t
                },
                type: _e.BLUR
            }), [t, n]),
            ref: _ => {
                const v = f(n._fields, t);
                v && _ && (v._f.ref = {
                    focus: () => _.focus(),
                    select: () => _.select(),
                    setCustomValidity: N => _.setCustomValidity(N),
                    reportValidity: () => _.reportValidity()
                })
            }
        },
        formState: D,
        fieldState: Object.defineProperties({}, {
            invalid: {
                enumerable: !0,
                get: () => !!f(D.errors, t)
            },
            isDirty: {
                enumerable: !0,
                get: () => !!f(D.dirtyFields, t)
            },
            isTouched: {
                enumerable: !0,
                get: () => !!f(D.touchedFields, t)
            },
            isValidating: {
                enumerable: !0,
                get: () => !!f(D.validatingFields, t)
            },
            error: {
                enumerable: !0,
                get: () => f(D.errors, t)
            }
        })
    }
}
const Ht = e => e.render(Et(e));
var St = (e, s, t, u, n) => s ? { ...t[e],
        types: { ...t[e] && t[e].types ? t[e].types : {},
            [u]: n || !0
        }
    } : {},
    Ke = e => ({
        isOnSubmit: !e || e === W.onSubmit,
        isOnBlur: e === W.onBlur,
        isOnChange: e === W.onChange,
        isOnAll: e === W.all,
        isOnTouch: e === W.onTouched
    }),
    Ge = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some(u => e.startsWith(u) && /^\.\w+/.test(e.slice(u.length))));
const oe = (e, s, t, u) => {
    for (const n of t || Object.keys(e)) {
        const l = f(e, n);
        if (l) {
            const {
                _f: y,
                ...h
            } = l;
            if (y) {
                if (y.refs && y.refs[0] && s(y.refs[0], n) && !u) break;
                if (y.ref && s(y.ref, y.name) && !u) break;
                oe(h, s)
            } else T(h) && oe(h, s)
        }
    }
};
var kt = (e, s, t) => {
        const u = ce(f(e, t));
        return x(u, "root", s[t]), x(e, t, u), e
    },
    Ue = e => e.type === "file",
    X = e => typeof e == "function",
    be = e => {
        if (!Re) return !1;
        const s = e ? e.ownerDocument : 0;
        return e instanceof(s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    },
    ve = e => $(e),
    pe = e => e.type === "radio",
    Ve = e => e instanceof RegExp;
const ze = {
        value: !1,
        isValid: !1
    },
    Je = {
        value: !0,
        isValid: !0
    };
var ot = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const s = e.filter(t => t && t.checked && !t.disabled).map(t => t.value);
            return {
                value: s,
                isValid: !!s.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !w(e[0].attributes.value) ? w(e[0].value) || e[0].value === "" ? Je : {
            value: e[0].value,
            isValid: !0
        } : Je : ze
    }
    return ze
};
const Qe = {
    isValid: !1,
    value: null
};
var ft = e => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
    isValid: !0,
    value: t.value
} : s, Qe) : Qe;

function Xe(e, s, t = "validate") {
    if (ve(e) || Array.isArray(e) && e.every(ve) || j(e) && !e) return {
        type: t,
        message: ve(e) ? e : "",
        ref: s
    }
}
var se = e => T(e) && !Ve(e) ? e : {
        value: e,
        message: ""
    },
    Ye = async (e, s, t, u, n) => {
        const {
            ref: l,
            refs: y,
            required: h,
            maxLength: D,
            minLength: S,
            min: _,
            max: v,
            pattern: N,
            validate: H,
            name: L,
            valueAsNumber: xe,
            mount: J,
            disabled: Q
        } = e._f, V = f(s, L);
        if (!J || Q) return {};
        const K = y ? y[0] : l,
            G = b => {
                u && K.reportValidity && (K.setCustomValidity(j(b) ? "" : b || ""), K.reportValidity())
            },
            k = {},
            ee = pe(l),
            de = fe(l),
            Y = ee || de,
            te = (xe || Ue(l)) && w(l.value) && w(V) || be(l) && l.value === "" || V === "" || Array.isArray(V) && !V.length,
            P = St.bind(null, L, t, k),
            ye = (b, F, C, O = z.maxLength, q = z.minLength) => {
                const I = b ? F : C;
                k[L] = {
                    type: b ? O : q,
                    message: I,
                    ref: l,
                    ...P(b ? O : q, I)
                }
            };
        if (n ? !Array.isArray(V) || !V.length : h && (!Y && (te || U(V)) || j(V) && !V || de && !ot(y).isValid || ee && !ft(y).isValid)) {
            const {
                value: b,
                message: F
            } = ve(h) ? {
                value: !!h,
                message: h
            } : se(h);
            if (b && (k[L] = {
                    type: z.required,
                    message: F,
                    ref: K,
                    ...P(z.required, F)
                }, !t)) return G(F), k
        }
        if (!te && (!U(_) || !U(v))) {
            let b, F;
            const C = se(v),
                O = se(_);
            if (!U(V) && !isNaN(V)) {
                const q = l.valueAsNumber || V && +V;
                U(C.value) || (b = q > C.value), U(O.value) || (F = q < O.value)
            } else {
                const q = l.valueAsDate || new Date(V),
                    I = le => new Date(new Date().toDateString() + " " + le),
                    ue = l.type == "time",
                    ae = l.type == "week";
                $(C.value) && V && (b = ue ? I(V) > I(C.value) : ae ? V > C.value : q > new Date(C.value)), $(O.value) && V && (F = ue ? I(V) < I(O.value) : ae ? V < O.value : q < new Date(O.value))
            }
            if ((b || F) && (ye(!!b, C.message, O.message, z.max, z.min), !t)) return G(k[L].message), k
        }
        if ((D || S) && !te && ($(V) || n && Array.isArray(V))) {
            const b = se(D),
                F = se(S),
                C = !U(b.value) && V.length > +b.value,
                O = !U(F.value) && V.length < +F.value;
            if ((C || O) && (ye(C, b.message, F.message), !t)) return G(k[L].message), k
        }
        if (N && !te && $(V)) {
            const {
                value: b,
                message: F
            } = se(N);
            if (Ve(b) && !V.match(b) && (k[L] = {
                    type: z.pattern,
                    message: F,
                    ref: l,
                    ...P(z.pattern, F)
                }, !t)) return G(F), k
        }
        if (H) {
            if (X(H)) {
                const b = await H(V, s),
                    F = Xe(b, K);
                if (F && (k[L] = { ...F,
                        ...P(z.validate, F.message)
                    }, !t)) return G(F.message), k
            } else if (T(H)) {
                let b = {};
                for (const F in H) {
                    if (!B(b) && !t) break;
                    const C = Xe(await H[F](V, s), K, F);
                    C && (b = { ...C,
                        ...P(F, C.message)
                    }, G(C.message), t && (k[L] = b))
                }
                if (!B(b) && (k[L] = {
                        ref: K,
                        ...b
                    }, !t)) return k
            }
        }
        return G(!0), k
    };

function Ct(e, s) {
    const t = s.slice(0, -1).length;
    let u = 0;
    for (; u < t;) e = w(e) ? u++ : e[s[u++]];
    return e
}

function Rt(e) {
    for (const s in e)
        if (e.hasOwnProperty(s) && !w(e[s])) return !1;
    return !0
}

function R(e, s) {
    const t = Array.isArray(s) ? s : Te(s) ? [s] : st(s),
        u = t.length === 1 ? e : Ct(e, t),
        n = t.length - 1,
        l = t[n];
    return u && delete u[l], n !== 0 && (T(u) && B(u) || Array.isArray(u) && Rt(u)) && R(e, t.slice(0, -1)), e
}
var Se = () => {
        let e = [];
        return {
            get observers() {
                return e
            },
            next: n => {
                for (const l of e) l.next && l.next(n)
            },
            subscribe: n => (e.push(n), {
                unsubscribe: () => {
                    e = e.filter(l => l !== n)
                }
            }),
            unsubscribe: () => {
                e = []
            }
        }
    },
    Fe = e => U(e) || !et(e);

function Z(e, s) {
    if (Fe(e) || Fe(s)) return e === s;
    if (ie(e) && ie(s)) return e.getTime() === s.getTime();
    const t = Object.keys(e),
        u = Object.keys(s);
    if (t.length !== u.length) return !1;
    for (const n of t) {
        const l = e[n];
        if (!u.includes(n)) return !1;
        if (n !== "ref") {
            const y = s[n];
            if (ie(l) && ie(y) || T(l) && T(y) || Array.isArray(l) && Array.isArray(y) ? !Z(l, y) : l !== y) return !1
        }
    }
    return !0
}
var ct = e => e.type === "select-multiple",
    Tt = e => pe(e) || fe(e),
    ke = e => be(e) && e.isConnected,
    dt = e => {
        for (const s in e)
            if (X(e[s])) return !0;
        return !1
    };

function Ae(e, s = {}) {
    const t = Array.isArray(e);
    if (T(e) || t)
        for (const u in e) Array.isArray(e[u]) || T(e[u]) && !dt(e[u]) ? (s[u] = Array.isArray(e[u]) ? [] : {}, Ae(e[u], s[u])) : U(e[u]) || (s[u] = !0);
    return s
}

function yt(e, s, t) {
    const u = Array.isArray(e);
    if (T(e) || u)
        for (const n in e) Array.isArray(e[n]) || T(e[n]) && !dt(e[n]) ? w(s) || Fe(t[n]) ? t[n] = Array.isArray(e[n]) ? Ae(e[n], []) : { ...Ae(e[n])
        } : yt(e[n], U(s) ? {} : s[n], t[n]) : t[n] = !Z(e[n], s[n]);
    return t
}
var ge = (e, s) => yt(e, s, Ae(s)),
    gt = (e, {
        valueAsNumber: s,
        valueAsDate: t,
        setValueAs: u
    }) => w(e) ? e : s ? e === "" ? NaN : e && +e : t && $(e) ? new Date(e) : u ? u(e) : e;

function Ce(e) {
    const s = e.ref;
    if (!(e.refs ? e.refs.every(t => t.disabled) : s.disabled)) return Ue(s) ? s.files : pe(s) ? ft(e.refs).value : ct(s) ? [...s.selectedOptions].map(({
        value: t
    }) => t) : fe(s) ? ot(e.refs).value : gt(w(s.value) ? e.ref.value : s.value, e)
}
var Lt = (e, s, t, u) => {
        const n = {};
        for (const l of e) {
            const y = f(s, l);
            y && x(n, l, y._f)
        }
        return {
            criteriaMode: t,
            names: [...e],
            fields: n,
            shouldUseNativeValidation: u
        }
    },
    ne = e => w(e) ? e : Ve(e) ? e.source : T(e) ? Ve(e.value) ? e.value.source : e.value : e,
    Ot = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);

function Ze(e, s, t) {
    const u = f(e, t);
    if (u || Te(t)) return {
        error: u,
        name: t
    };
    const n = t.split(".");
    for (; n.length;) {
        const l = n.join("."),
            y = f(s, l),
            h = f(e, l);
        if (y && !Array.isArray(y) && t !== l) return {
            name: t
        };
        if (h && h.type) return {
            name: l,
            error: h
        };
        n.pop()
    }
    return {
        name: t
    }
}
var Ut = (e, s, t, u, n) => n.isOnAll ? !1 : !t && n.isOnTouch ? !(s || e) : (t ? u.isOnBlur : n.isOnBlur) ? !e : (t ? u.isOnChange : n.isOnChange) ? e : !0,
    pt = (e, s) => !ce(f(e, s)).length && R(e, s);
const Mt = {
    mode: W.onSubmit,
    reValidateMode: W.onChange,
    shouldFocusError: !0
};

function Bt(e = {}) {
    let s = { ...Mt,
            ...e
        },
        t = {
            submitCount: 0,
            isDirty: !1,
            isLoading: X(s.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            validatingFields: {},
            errors: s.errors || {},
            disabled: s.disabled || !1
        },
        u = {},
        n = T(s.defaultValues) || T(s.values) ? p(s.defaultValues || s.values) || {} : {},
        l = s.shouldUnregister ? {} : p(n),
        y = {
            action: !1,
            mount: !1,
            watch: !1
        },
        h = {
            mount: new Set,
            unMount: new Set,
            array: new Set,
            watch: new Set
        },
        D, S = 0;
    const _ = {
            isDirty: !1,
            dirtyFields: !1,
            validatingFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1
        },
        v = {
            values: Se(),
            array: Se(),
            state: Se()
        },
        N = Ke(s.mode),
        H = Ke(s.reValidateMode),
        L = s.criteriaMode === W.all,
        xe = r => i => {
            clearTimeout(S), S = setTimeout(r, i)
        },
        J = async r => {
            if (_.isValid || r) {
                const i = s.resolver ? B((await Y()).errors) : await P(u, !0);
                i !== t.isValid && v.state.next({
                    isValid: i
                })
            }
        },
        Q = (r, i) => {
            (_.isValidating || _.validatingFields) && ((r || Array.from(h.mount)).forEach(a => {
                a && (i ? x(t.validatingFields, a, i) : R(t.validatingFields, a))
            }), v.state.next({
                validatingFields: t.validatingFields,
                isValidating: !B(t.validatingFields)
            }))
        },
        V = (r, i = [], a, d, c = !0, o = !0) => {
            if (d && a) {
                if (y.action = !0, o && Array.isArray(f(u, r))) {
                    const g = a(f(u, r), d.argA, d.argB);
                    c && x(u, r, g)
                }
                if (o && Array.isArray(f(t.errors, r))) {
                    const g = a(f(t.errors, r), d.argA, d.argB);
                    c && x(t.errors, r, g), pt(t.errors, r)
                }
                if (_.touchedFields && o && Array.isArray(f(t.touchedFields, r))) {
                    const g = a(f(t.touchedFields, r), d.argA, d.argB);
                    c && x(t.touchedFields, r, g)
                }
                _.dirtyFields && (t.dirtyFields = ge(n, l)), v.state.next({
                    name: r,
                    isDirty: b(r, i),
                    dirtyFields: t.dirtyFields,
                    errors: t.errors,
                    isValid: t.isValid
                })
            } else x(l, r, i)
        },
        K = (r, i) => {
            x(t.errors, r, i), v.state.next({
                errors: t.errors
            })
        },
        G = r => {
            t.errors = r, v.state.next({
                errors: t.errors,
                isValid: !1
            })
        },
        k = (r, i, a, d) => {
            const c = f(u, r);
            if (c) {
                const o = f(l, r, w(a) ? f(n, r) : a);
                w(o) || d && d.defaultChecked || i ? x(l, r, i ? o : Ce(c._f)) : O(r, o), y.mount && J()
            }
        },
        ee = (r, i, a, d, c) => {
            let o = !1,
                g = !1;
            const A = {
                    name: r
                },
                E = !!(f(u, r) && f(u, r)._f.disabled);
            if (!a || d) {
                _.isDirty && (g = t.isDirty, t.isDirty = A.isDirty = b(), o = g !== A.isDirty);
                const M = E || Z(f(n, r), i);
                g = !!(!E && f(t.dirtyFields, r)), M || E ? R(t.dirtyFields, r) : x(t.dirtyFields, r, !0), A.dirtyFields = t.dirtyFields, o = o || _.dirtyFields && g !== !M
            }
            if (a) {
                const M = f(t.touchedFields, r);
                M || (x(t.touchedFields, r, a), A.touchedFields = t.touchedFields, o = o || _.touchedFields && M !== a)
            }
            return o && c && v.state.next(A), o ? A : {}
        },
        de = (r, i, a, d) => {
            const c = f(t.errors, r),
                o = _.isValid && j(i) && t.isValid !== i;
            if (e.delayError && a ? (D = xe(() => K(r, a)), D(e.delayError)) : (clearTimeout(S), D = null, a ? x(t.errors, r, a) : R(t.errors, r)), (a ? !Z(c, a) : c) || !B(d) || o) {
                const g = { ...d,
                    ...o && j(i) ? {
                        isValid: i
                    } : {},
                    errors: t.errors,
                    name: r
                };
                t = { ...t,
                    ...g
                }, v.state.next(g)
            }
        },
        Y = async r => {
            Q(r, !0);
            const i = await s.resolver(l, s.context, Lt(r || h.mount, u, s.criteriaMode, s.shouldUseNativeValidation));
            return Q(r), i
        },
        te = async r => {
            const {
                errors: i
            } = await Y(r);
            if (r)
                for (const a of r) {
                    const d = f(i, a);
                    d ? x(t.errors, a, d) : R(t.errors, a)
                } else t.errors = i;
            return i
        },
        P = async (r, i, a = {
            valid: !0
        }) => {
            for (const d in r) {
                const c = r[d];
                if (c) {
                    const {
                        _f: o,
                        ...g
                    } = c;
                    if (o) {
                        const A = h.array.has(o.name);
                        Q([d], !0);
                        const E = await Ye(c, l, L, s.shouldUseNativeValidation && !i, A);
                        if (Q([d]), E[o.name] && (a.valid = !1, i)) break;
                        !i && (f(E, o.name) ? A ? kt(t.errors, E, o.name) : x(t.errors, o.name, E[o.name]) : R(t.errors, o.name))
                    }
                    g && await P(g, i, a)
                }
            }
            return a.valid
        },
        ye = () => {
            for (const r of h.unMount) {
                const i = f(u, r);
                i && (i._f.refs ? i._f.refs.every(a => !ke(a)) : !ke(i._f.ref)) && me(r)
            }
            h.unMount = new Set
        },
        b = (r, i) => (r && i && x(l, r, i), !Z(Me(), n)),
        F = (r, i, a) => nt(r, h, { ...y.mount ? l : w(i) ? n : $(r) ? {
                [r]: i
            } : i
        }, a, i),
        C = r => ce(f(y.mount ? l : n, r, e.shouldUnregister ? f(n, r, []) : [])),
        O = (r, i, a = {}) => {
            const d = f(u, r);
            let c = i;
            if (d) {
                const o = d._f;
                o && (!o.disabled && x(l, r, gt(i, o)), c = be(o.ref) && U(i) ? "" : i, ct(o.ref) ? [...o.ref.options].forEach(g => g.selected = c.includes(g.value)) : o.refs ? fe(o.ref) ? o.refs.length > 1 ? o.refs.forEach(g => (!g.defaultChecked || !g.disabled) && (g.checked = Array.isArray(c) ? !!c.find(A => A === g.value) : c === g.value)) : o.refs[0] && (o.refs[0].checked = !!c) : o.refs.forEach(g => g.checked = g.value === c) : Ue(o.ref) ? o.ref.value = "" : (o.ref.value = c, o.ref.type || v.values.next({
                    name: r,
                    values: { ...l
                    }
                })))
            }(a.shouldDirty || a.shouldTouch) && ee(r, c, a.shouldTouch, a.shouldDirty, !0), a.shouldValidate && le(r)
        },
        q = (r, i, a) => {
            for (const d in i) {
                const c = i[d],
                    o = `${r}.${d}`,
                    g = f(u, o);
                (h.array.has(r) || !Fe(c) || g && !g._f) && !ie(c) ? q(o, c, a) : O(o, c, a)
            }
        },
        I = (r, i, a = {}) => {
            const d = f(u, r),
                c = h.array.has(r),
                o = p(i);
            x(l, r, o), c ? (v.array.next({
                name: r,
                values: { ...l
                }
            }), (_.isDirty || _.dirtyFields) && a.shouldDirty && v.state.next({
                name: r,
                dirtyFields: ge(n, l),
                isDirty: b(r, o)
            })) : d && !d._f && !U(o) ? q(r, o, a) : O(r, o, a), Ge(r, h) && v.state.next({ ...t
            }), v.values.next({
                name: y.mount ? r : void 0,
                values: { ...l
                }
            })
        },
        ue = async r => {
            y.mount = !0;
            const i = r.target;
            let a = i.name,
                d = !0;
            const c = f(u, a),
                o = () => i.type ? Ce(c._f) : tt(r),
                g = A => {
                    d = Number.isNaN(A) || A === f(l, a, A)
                };
            if (c) {
                let A, E;
                const M = o(),
                    re = r.type === _e.BLUR || r.type === _e.FOCUS_OUT,
                    Vt = !Ot(c._f) && !s.resolver && !f(t.errors, a) && !c._f.deps || Ut(re, f(t.touchedFields, a), t.isSubmitted, H, N),
                    we = Ge(a, h, re);
                x(l, a, M), re ? (c._f.onBlur && c._f.onBlur(r), D && D(0)) : c._f.onChange && c._f.onChange(r);
                const Ee = ee(a, M, re, !1),
                    Ft = !B(Ee) || we;
                if (!re && v.values.next({
                        name: a,
                        type: r.type,
                        values: { ...l
                        }
                    }), Vt) return _.isValid && J(), Ft && v.state.next({
                    name: a,
                    ...we ? {} : Ee
                });
                if (!re && we && v.state.next({ ...t
                    }), s.resolver) {
                    const {
                        errors: je
                    } = await Y([a]);
                    if (g(M), d) {
                        const At = Ze(t.errors, u, a),
                            $e = Ze(je, u, At.name || a);
                        A = $e.error, a = $e.name, E = B(je)
                    }
                } else Q([a], !0), A = (await Ye(c, l, L, s.shouldUseNativeValidation))[a], Q([a]), g(M), d && (A ? E = !1 : _.isValid && (E = await P(u, !0)));
                d && (c._f.deps && le(c._f.deps), de(a, E, A, Ee))
            }
        },
        ae = (r, i) => {
            if (f(t.errors, i) && r.focus) return r.focus(), 1
        },
        le = async (r, i = {}) => {
            let a, d;
            const c = he(r);
            if (s.resolver) {
                const o = await te(w(r) ? r : c);
                a = B(o), d = r ? !c.some(g => f(o, g)) : a
            } else r ? (d = (await Promise.all(c.map(async o => {
                const g = f(u, o);
                return await P(g && g._f ? {
                    [o]: g
                } : g)
            }))).every(Boolean), !(!d && !t.isValid) && J()) : d = a = await P(u);
            return v.state.next({ ...!$(r) || _.isValid && a !== t.isValid ? {} : {
                    name: r
                },
                ...s.resolver || !r ? {
                    isValid: a
                } : {},
                errors: t.errors
            }), i.shouldFocus && !d && oe(u, ae, r ? c : h.mount), d
        },
        Me = r => {
            const i = { ...y.mount ? l : n
            };
            return w(r) ? i : $(r) ? f(i, r) : r.map(a => f(i, a))
        },
        Be = (r, i) => ({
            invalid: !!f((i || t).errors, r),
            isDirty: !!f((i || t).dirtyFields, r),
            isTouched: !!f((i || t).touchedFields, r),
            isValidating: !!f((i || t).validatingFields, r),
            error: f((i || t).errors, r)
        }),
        ht = r => {
            r && he(r).forEach(i => R(t.errors, i)), v.state.next({
                errors: r ? t.errors : {}
            })
        },
        Pe = (r, i, a) => {
            const d = (f(u, r, {
                    _f: {}
                })._f || {}).ref,
                c = f(t.errors, r) || {},
                {
                    ref: o,
                    message: g,
                    type: A,
                    ...E
                } = c;
            x(t.errors, r, { ...E,
                ...i,
                ref: d
            }), v.state.next({
                name: r,
                errors: t.errors,
                isValid: !1
            }), a && a.shouldFocus && d && d.focus && d.focus()
        },
        vt = (r, i) => X(r) ? v.values.subscribe({
            next: a => r(F(void 0, i), a)
        }) : F(r, i, !0),
        me = (r, i = {}) => {
            for (const a of r ? he(r) : h.mount) h.mount.delete(a), h.array.delete(a), i.keepValue || (R(u, a), R(l, a)), !i.keepError && R(t.errors, a), !i.keepDirty && R(t.dirtyFields, a), !i.keepTouched && R(t.touchedFields, a), !i.keepIsValidating && R(t.validatingFields, a), !s.shouldUnregister && !i.keepDefaultValue && R(n, a);
            v.values.next({
                values: { ...l
                }
            }), v.state.next({ ...t,
                ...i.keepDirty ? {
                    isDirty: b()
                } : {}
            }), !i.keepIsValid && J()
        },
        Ie = ({
            disabled: r,
            name: i,
            field: a,
            fields: d,
            value: c
        }) => {
            if (j(r) && y.mount || r) {
                const o = r ? void 0 : w(c) ? Ce(a ? a._f : f(d, i)._f) : c;
                x(l, i, o), ee(i, o, !1, !1, !0)
            }
        },
        De = (r, i = {}) => {
            let a = f(u, r);
            const d = j(i.disabled);
            return x(u, r, { ...a || {},
                _f: { ...a && a._f ? a._f : {
                        ref: {
                            name: r
                        }
                    },
                    name: r,
                    mount: !0,
                    ...i
                }
            }), h.mount.add(r), a ? Ie({
                field: a,
                disabled: i.disabled,
                name: r,
                value: i.value
            }) : k(r, !0, i.value), { ...d ? {
                    disabled: i.disabled
                } : {},
                ...s.progressive ? {
                    required: !!i.required,
                    min: ne(i.min),
                    max: ne(i.max),
                    minLength: ne(i.minLength),
                    maxLength: ne(i.maxLength),
                    pattern: ne(i.pattern)
                } : {},
                name: r,
                onChange: ue,
                onBlur: ue,
                ref: c => {
                    if (c) {
                        De(r, i), a = f(u, r);
                        const o = w(c.value) && c.querySelectorAll && c.querySelectorAll("input,select,textarea")[0] || c,
                            g = Tt(o),
                            A = a._f.refs || [];
                        if (g ? A.find(E => E === o) : o === a._f.ref) return;
                        x(u, r, {
                            _f: { ...a._f,
                                ...g ? {
                                    refs: [...A.filter(ke), o, ...Array.isArray(f(n, r)) ? [{}] : []],
                                    ref: {
                                        type: o.type,
                                        name: r
                                    }
                                } : {
                                    ref: o
                                }
                            }
                        }), k(r, !1, void 0, o)
                    } else a = f(u, r, {}), a._f && (a._f.mount = !1), (s.shouldUnregister || i.shouldUnregister) && !(rt(h.array, r) && y.action) && h.unMount.add(r)
                }
            }
        },
        Ne = () => s.shouldFocusError && oe(u, ae, h.mount),
        _t = r => {
            j(r) && (v.state.next({
                disabled: r
            }), oe(u, (i, a) => {
                const d = f(u, a);
                d && (i.disabled = d._f.disabled || r, Array.isArray(d._f.refs) && d._f.refs.forEach(c => {
                    c.disabled = d._f.disabled || r
                }))
            }, 0, !1))
        },
        qe = (r, i) => async a => {
            let d;
            a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
            let c = p(l);
            if (v.state.next({
                    isSubmitting: !0
                }), s.resolver) {
                const {
                    errors: o,
                    values: g
                } = await Y();
                t.errors = o, c = g
            } else await P(u);
            if (R(t.errors, "root"), B(t.errors)) {
                v.state.next({
                    errors: {}
                });
                try {
                    await r(c, a)
                } catch (o) {
                    d = o
                }
            } else i && await i({ ...t.errors
            }, a), Ne(), setTimeout(Ne);
            if (v.state.next({
                    isSubmitted: !0,
                    isSubmitting: !1,
                    isSubmitSuccessful: B(t.errors) && !d,
                    submitCount: t.submitCount + 1,
                    errors: t.errors
                }), d) throw d
        },
        bt = (r, i = {}) => {
            f(u, r) && (w(i.defaultValue) ? I(r, p(f(n, r))) : (I(r, i.defaultValue), x(n, r, p(i.defaultValue))), i.keepTouched || R(t.touchedFields, r), i.keepDirty || (R(t.dirtyFields, r), t.isDirty = i.defaultValue ? b(r, p(f(n, r))) : b()), i.keepError || (R(t.errors, r), _.isValid && J()), v.state.next({ ...t
            }))
        },
        We = (r, i = {}) => {
            const a = r ? p(r) : n,
                d = p(a),
                c = B(r),
                o = c ? n : d;
            if (i.keepDefaultValues || (n = a), !i.keepValues) {
                if (i.keepDirtyValues)
                    for (const g of h.mount) f(t.dirtyFields, g) ? x(o, g, f(l, g)) : I(g, f(o, g));
                else {
                    if (Re && w(r))
                        for (const g of h.mount) {
                            const A = f(u, g);
                            if (A && A._f) {
                                const E = Array.isArray(A._f.refs) ? A._f.refs[0] : A._f.ref;
                                if (be(E)) {
                                    const M = E.closest("form");
                                    if (M) {
                                        M.reset();
                                        break
                                    }
                                }
                            }
                        }
                    u = {}
                }
                l = e.shouldUnregister ? i.keepDefaultValues ? p(n) : {} : p(o), v.array.next({
                    values: { ...o
                    }
                }), v.values.next({
                    values: { ...o
                    }
                })
            }
            h = {
                mount: i.keepDirtyValues ? h.mount : new Set,
                unMount: new Set,
                array: new Set,
                watch: new Set,
                watchAll: !1,
                focus: ""
            }, y.mount = !_.isValid || !!i.keepIsValid || !!i.keepDirtyValues, y.watch = !!e.shouldUnregister, v.state.next({
                submitCount: i.keepSubmitCount ? t.submitCount : 0,
                isDirty: c ? !1 : i.keepDirty ? t.isDirty : !!(i.keepDefaultValues && !Z(r, n)),
                isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
                dirtyFields: c ? [] : i.keepDirtyValues ? i.keepDefaultValues && l ? ge(n, l) : t.dirtyFields : i.keepDefaultValues && r ? ge(n, r) : {},
                touchedFields: i.keepTouched ? t.touchedFields : {},
                errors: i.keepErrors ? t.errors : {},
                isSubmitSuccessful: i.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
                isSubmitting: !1
            })
        },
        He = (r, i) => We(X(r) ? r(l) : r, i);
    return {
        control: {
            register: De,
            unregister: me,
            getFieldState: Be,
            handleSubmit: qe,
            setError: Pe,
            _executeSchema: Y,
            _getWatch: F,
            _getDirty: b,
            _updateValid: J,
            _removeUnmounted: ye,
            _updateFieldArray: V,
            _updateDisabledField: Ie,
            _getFieldArray: C,
            _reset: We,
            _resetDefaultValues: () => X(s.defaultValues) && s.defaultValues().then(r => {
                He(r, s.resetOptions), v.state.next({
                    isLoading: !1
                })
            }),
            _updateFormState: r => {
                t = { ...t,
                    ...r
                }
            },
            _disableForm: _t,
            _subjects: v,
            _proxyFormState: _,
            _setErrors: G,
            get _fields() {
                return u
            },
            get _formValues() {
                return l
            },
            get _state() {
                return y
            },
            set _state(r) {
                y = r
            },
            get _defaultValues() {
                return n
            },
            get _names() {
                return h
            },
            set _names(r) {
                h = r
            },
            get _formState() {
                return t
            },
            set _formState(r) {
                t = r
            },
            get _options() {
                return s
            },
            set _options(r) {
                s = { ...s,
                    ...r
                }
            }
        },
        trigger: le,
        register: De,
        handleSubmit: qe,
        watch: vt,
        setValue: I,
        getValues: Me,
        reset: He,
        resetField: bt,
        clearErrors: ht,
        unregister: me,
        setError: Pe,
        setFocus: (r, i = {}) => {
            const a = f(u, r),
                d = a && a._f;
            if (d) {
                const c = d.refs ? d.refs[0] : d.ref;
                c.focus && (c.focus(), i.shouldSelect && c.select())
            }
        },
        getFieldState: Be
    }
}

function jt(e = {}) {
    const s = m.useRef(),
        t = m.useRef(),
        [u, n] = m.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: X(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: X(e.defaultValues) ? void 0 : e.defaultValues
        });
    s.current || (s.current = { ...Bt(e),
        formState: u
    });
    const l = s.current.control;
    return l._options = e, Oe({
        subject: l._subjects.state,
        next: y => {
            at(y, l._proxyFormState, l._updateFormState, !0) && n({ ...l._formState
            })
        }
    }), m.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]), m.useEffect(() => {
        if (l._proxyFormState.isDirty) {
            const y = l._getDirty();
            y !== u.isDirty && l._subjects.state.next({
                isDirty: y
            })
        }
    }, [l, u.isDirty]), m.useEffect(() => {
        e.values && !Z(e.values, t.current) ? (l._reset(e.values, l._options.resetOptions), t.current = e.values, n(y => ({ ...y
        }))) : l._resetDefaultValues()
    }, [e.values, l]), m.useEffect(() => {
        e.errors && l._setErrors(e.errors)
    }, [e.errors, l]), m.useEffect(() => {
        l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState
        })), l._removeUnmounted()
    }), m.useEffect(() => {
        e.shouldUnregister && l._subjects.values.next({
            values: l._getWatch()
        })
    }, [e.shouldUnregister, l]), s.current.formState = ut(u, l), s.current
}
export {
    Ht as C, Wt as F, Le as a, jt as u
};
//# sourceMappingURL=react-hook-form-4Is_Po-Y.js.map