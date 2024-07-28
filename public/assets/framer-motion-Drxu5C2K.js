import {
    r as y,
    R as Rs
} from "./vendor-DR5RWKqR.js";
const $e = y.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    }),
    ae = y.createContext({}),
    le = y.createContext(null),
    ce = typeof document < "u",
    jt = ce ? y.useLayoutEffect : y.useEffect,
    Ls = y.createContext({
        strict: !1
    }),
    Ke = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    Ji = "framerAppearId",
    Es = "data-" + Ke(Ji);

function Qi(t, e, n, s) {
    const {
        visualElement: i
    } = y.useContext(ae), o = y.useContext(Ls), r = y.useContext(le), a = y.useContext($e).reducedMotion, l = y.useRef();
    s = s || o.renderer, !l.current && s && (l.current = s(t, {
        visualState: e,
        parent: i,
        props: n,
        presenceContext: r,
        blockInitialAnimation: r ? r.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const c = l.current;
    y.useInsertionEffect(() => {
        c && c.update(n, r)
    });
    const u = y.useRef(!!(n[Es] && !window.HandoffComplete));
    return jt(() => {
        c && (c.render(), u.current && c.animationState && c.animationState.animateChanges())
    }), y.useEffect(() => {
        c && (c.updateFeatures(), !u.current && c.animationState && c.animationState.animateChanges(), u.current && (u.current = !1, window.HandoffComplete = !0))
    }), c
}

function gt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function tr(t, e, n) {
    return y.useCallback(s => {
        s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : gt(n) && (n.current = s))
    }, [e])
}

function kt(t) {
    return typeof t == "string" || Array.isArray(t)
}

function ue(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const _e = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Xe = ["initial", ..._e];

function fe(t) {
    return ue(t.animate) || Xe.some(e => kt(t[e]))
}

function Bs(t) {
    return !!(fe(t) || t.variants)
}

function er(t, e) {
    if (fe(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || kt(n) ? n : void 0,
            animate: kt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function nr(t) {
    const {
        initial: e,
        animate: n
    } = er(t, y.useContext(ae));
    return y.useMemo(() => ({
        initial: e,
        animate: n
    }), [xn(e), xn(n)])
}

function xn(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Pn = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Ot = {};
for (const t in Pn) Ot[t] = {
    isEnabled: e => Pn[t].some(n => !!e[n])
};

function sr(t) {
    for (const e in t) Ot[e] = { ...Ot[e],
        ...t[e]
    }
}
const Ye = y.createContext({}),
    Fs = y.createContext({}),
    ir = Symbol.for("motionComponentSymbol");

function rr({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: s,
    Component: i
}) {
    t && sr(t);

    function o(a, l) {
        let c;
        const u = { ...y.useContext($e),
                ...a,
                layoutId: or(a)
            },
            {
                isStatic: f
            } = u,
            h = nr(a),
            d = s(a, f);
        if (!f && ce) {
            h.visualElement = Qi(i, d, u, e);
            const p = y.useContext(Fs),
                m = y.useContext(Ls).strict;
            h.visualElement && (c = h.visualElement.loadFeatures(u, m, t, p))
        }
        return y.createElement(ae.Provider, {
            value: h
        }, c && h.visualElement ? y.createElement(c, {
            visualElement: h.visualElement,
            ...u
        }) : null, n(i, a, tr(d, h.visualElement, l), d, f, h.visualElement))
    }
    const r = y.forwardRef(o);
    return r[ir] = i, r
}

function or({
    layoutId: t
}) {
    const e = y.useContext(Ye).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function ar(t) {
    function e(s, i = {}) {
        return rr(t(s, i))
    }
    if (typeof Proxy > "u") return e;
    const n = new Map;
    return new Proxy(e, {
        get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
    })
}
const lr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function qe(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(lr.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const Jt = {};

function cr(t) {
    Object.assign(Jt, t)
}
const It = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ft = new Set(It);

function ks(t, {
    layout: e,
    layoutId: n
}) {
    return ft.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Jt[t] || t === "opacity")
}
const j = t => !!(t && t.getVelocity),
    ur = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    fr = It.length;

function hr(t, {
    enableHardwareAcceleration: e = !0,
    allowTransformNone: n = !0
}, s, i) {
    let o = "";
    for (let r = 0; r < fr; r++) {
        const a = It[r];
        if (t[a] !== void 0) {
            const l = ur[a] || a;
            o += `${l}(${t[a]}) `
        }
    }
    return e && !t.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(t, s ? "" : o) : n && s && (o = "none"), o
}
const Os = t => e => typeof e == "string" && e.startsWith(t),
    js = Os("--"),
    Le = Os("var(--"),
    dr = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    pr = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    et = (t, e, n) => Math.min(Math.max(n, t), e),
    ht = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    Dt = { ...ht,
        transform: t => et(0, 1, t)
    },
    Gt = { ...ht,
        default: 1
    },
    Rt = t => Math.round(t * 1e5) / 1e5,
    he = /(-)?([\d]*\.?[\d])+/g,
    Is = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    mr = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function Ut(t) {
    return typeof t == "string"
}
const Wt = t => ({
        test: e => Ut(e) && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    Z = Wt("deg"),
    $ = Wt("%"),
    b = Wt("px"),
    gr = Wt("vh"),
    yr = Wt("vw"),
    Tn = { ...$,
        parse: t => $.parse(t) / 100,
        transform: t => $.transform(t * 100)
    },
    bn = { ...ht,
        transform: Math.round
    },
    Us = {
        borderWidth: b,
        borderTopWidth: b,
        borderRightWidth: b,
        borderBottomWidth: b,
        borderLeftWidth: b,
        borderRadius: b,
        radius: b,
        borderTopLeftRadius: b,
        borderTopRightRadius: b,
        borderBottomRightRadius: b,
        borderBottomLeftRadius: b,
        width: b,
        maxWidth: b,
        height: b,
        maxHeight: b,
        size: b,
        top: b,
        right: b,
        bottom: b,
        left: b,
        padding: b,
        paddingTop: b,
        paddingRight: b,
        paddingBottom: b,
        paddingLeft: b,
        margin: b,
        marginTop: b,
        marginRight: b,
        marginBottom: b,
        marginLeft: b,
        rotate: Z,
        rotateX: Z,
        rotateY: Z,
        rotateZ: Z,
        scale: Gt,
        scaleX: Gt,
        scaleY: Gt,
        scaleZ: Gt,
        skew: Z,
        skewX: Z,
        skewY: Z,
        distance: b,
        translateX: b,
        translateY: b,
        translateZ: b,
        x: b,
        y: b,
        z: b,
        perspective: b,
        transformPerspective: b,
        opacity: Dt,
        originX: Tn,
        originY: Tn,
        originZ: b,
        zIndex: bn,
        fillOpacity: Dt,
        strokeOpacity: Dt,
        numOctaves: bn
    };

function Ze(t, e, n, s) {
    const {
        style: i,
        vars: o,
        transform: r,
        transformOrigin: a
    } = t;
    let l = !1,
        c = !1,
        u = !0;
    for (const f in e) {
        const h = e[f];
        if (js(f)) {
            o[f] = h;
            continue
        }
        const d = Us[f],
            p = pr(h, d);
        if (ft.has(f)) {
            if (l = !0, r[f] = p, !u) continue;
            h !== (d.default || 0) && (u = !1)
        } else f.startsWith("origin") ? (c = !0, a[f] = p) : i[f] = p
    }
    if (e.transform || (l || s ? i.transform = hr(t.transform, n, u, s) : i.transform && (i.transform = "none")), c) {
        const {
            originX: f = "50%",
            originY: h = "50%",
            originZ: d = 0
        } = a;
        i.transformOrigin = `${f} ${h} ${d}`
    }
}
const Je = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Ws(t, e, n) {
    for (const s in e) !j(e[s]) && !ks(s, n) && (t[s] = e[s])
}

function vr({
    transformTemplate: t
}, e, n) {
    return y.useMemo(() => {
        const s = Je();
        return Ze(s, e, {
            enableHardwareAcceleration: !n
        }, t), Object.assign({}, s.vars, s.style)
    }, [e])
}

function xr(t, e, n) {
    const s = t.style || {},
        i = {};
    return Ws(i, s, t), Object.assign(i, vr(t, e, n)), t.transformValues ? t.transformValues(i) : i
}

function Pr(t, e, n) {
    const s = {},
        i = xr(t, e, n);
    return t.drag && t.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = i, s
}
const Tr = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Qt(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Tr.has(t)
}
let Ns = t => !Qt(t);

function br(t) {
    t && (Ns = e => e.startsWith("on") ? !Qt(e) : t(e))
}
try {
    br(require("@emotion/is-prop-valid").default)
} catch {}

function Vr(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Ns(i) || n === !0 && Qt(i) || !e && !Qt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}

function Vn(t, e, n) {
    return typeof t == "string" ? t : b.transform(e + n * t)
}

function Sr(t, e, n) {
    const s = Vn(e, t.x, t.width),
        i = Vn(n, t.y, t.height);
    return `${s} ${i}`
}
const Ar = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Cr = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function wr(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const o = i ? Ar : Cr;
    t[o.offset] = b.transform(-s);
    const r = b.transform(e),
        a = b.transform(n);
    t[o.array] = `${r} ${a}`
}

function Qe(t, {
    attrX: e,
    attrY: n,
    attrScale: s,
    originX: i,
    originY: o,
    pathLength: r,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
}, u, f, h) {
    if (Ze(t, c, u, h), f) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: d,
        style: p,
        dimensions: m
    } = t;
    d.transform && (m && (p.transform = d.transform), delete d.transform), m && (i !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = Sr(m, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && wr(d, r, a, l, !1)
}
const zs = () => ({ ...Je(),
        attrs: {}
    }),
    tn = t => typeof t == "string" && t.toLowerCase() === "svg";

function Mr(t, e, n, s) {
    const i = y.useMemo(() => {
        const o = zs();
        return Qe(o, e, {
            enableHardwareAcceleration: !1
        }, tn(s), t.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [e]);
    if (t.style) {
        const o = {};
        Ws(o, t.style, t), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function Dr(t = !1) {
    return (n, s, i, {
        latestValues: o
    }, r) => {
        const l = (qe(n) ? Mr : Pr)(s, o, r, n),
            u = { ...Vr(s, typeof n == "string", t),
                ...l,
                ref: i
            },
            {
                children: f
            } = s,
            h = y.useMemo(() => j(f) ? f.get() : f, [f]);
        return y.createElement(n, { ...u,
            children: h
        })
    }
}

function Hs(t, {
    style: e,
    vars: n
}, s, i) {
    Object.assign(t.style, e, i && i.getProjectionStyles(s));
    for (const o in n) t.style.setProperty(o, n[o])
}
const Gs = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function $s(t, e, n, s) {
    Hs(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(Gs.has(i) ? i : Ke(i), e.attrs[i])
}

function en(t, e) {
    const {
        style: n
    } = t, s = {};
    for (const i in n)(j(n[i]) || e.style && j(e.style[i]) || ks(i, t)) && (s[i] = n[i]);
    return s
}

function Ks(t, e) {
    const n = en(t, e);
    for (const s in t)
        if (j(t[s]) || j(e[s])) {
            const i = It.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            n[i] = t[s]
        }
    return n
}

function nn(t, e, n, s = {}, i = {}) {
    return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), e
}

function Nt(t) {
    const e = y.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const te = t => Array.isArray(t),
    Rr = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    Lr = t => te(t) ? t[t.length - 1] || 0 : t;

function Xt(t) {
    const e = j(t) ? t.get() : t;
    return Rr(e) ? e.toValue() : e
}

function Er({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onMount: n
}, s, i, o) {
    const r = {
        latestValues: Br(s, i, o, t),
        renderState: e()
    };
    return n && (r.mount = a => n(s, a, r)), r
}
const _s = t => (e, n) => {
    const s = y.useContext(ae),
        i = y.useContext(le),
        o = () => Er(t, e, s, i);
    return n ? o() : Nt(o)
};

function Br(t, e, n, s) {
    const i = {},
        o = s(t, {});
    for (const h in o) i[h] = Xt(o[h]);
    let {
        initial: r,
        animate: a
    } = t;
    const l = fe(t),
        c = Bs(t);
    e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || r === !1;
    const f = u ? a : r;
    return f && typeof f != "boolean" && !ue(f) && (Array.isArray(f) ? f : [f]).forEach(d => {
        const p = nn(t, d);
        if (!p) return;
        const {
            transitionEnd: m,
            transition: x,
            ...T
        } = p;
        for (const v in T) {
            let g = T[v];
            if (Array.isArray(g)) {
                const P = u ? g.length - 1 : 0;
                g = g[P]
            }
            g !== null && (i[v] = g)
        }
        for (const v in m) i[v] = m[v]
    }), i
}
const L = t => t;
class Sn {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(e) {
        if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
    }
    remove(e) {
        const n = this.order.indexOf(e);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function Fr(t) {
    let e = new Sn,
        n = new Sn,
        s = 0,
        i = !1,
        o = !1;
    const r = new WeakSet,
        a = {
            schedule: (l, c = !1, u = !1) => {
                const f = u && i,
                    h = f ? e : n;
                return c && r.add(l), h.add(l) && f && i && (s = e.order.length), l
            },
            cancel: l => {
                n.remove(l), r.delete(l)
            },
            process: l => {
                if (i) {
                    o = !0;
                    return
                }
                if (i = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
                    for (let c = 0; c < s; c++) {
                        const u = e.order[c];
                        u(l), r.has(u) && (a.schedule(u), t())
                    }
                i = !1, o && (o = !1, a.process(l))
            }
        };
    return a
}
const $t = ["prepare", "read", "update", "preRender", "render", "postRender"],
    kr = 40;

function Or(t, e) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = $t.reduce((f, h) => (f[h] = Fr(() => n = !0), f), {}),
        r = f => o[f].process(i),
        a = () => {
            const f = performance.now();
            n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, kr), 1), i.timestamp = f, i.isProcessing = !0, $t.forEach(r), i.isProcessing = !1, n && e && (s = !1, t(a))
        },
        l = () => {
            n = !0, s = !0, i.isProcessing || t(a)
        };
    return {
        schedule: $t.reduce((f, h) => {
            const d = o[h];
            return f[h] = (p, m = !1, x = !1) => (n || l(), d.schedule(p, m, x)), f
        }, {}),
        cancel: f => $t.forEach(h => o[h].cancel(f)),
        state: i,
        steps: o
    }
}
const {
    schedule: A,
    cancel: G,
    state: F,
    steps: ye
} = Or(typeof requestAnimationFrame < "u" ? requestAnimationFrame : L, !0), jr = {
    useVisualState: _s({
        scrapeMotionValuesFromProps: Ks,
        createRenderState: zs,
        onMount: (t, e, {
            renderState: n,
            latestValues: s
        }) => {
            A.read(() => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), A.render(() => {
                Qe(n, s, {
                    enableHardwareAcceleration: !1
                }, tn(e.tagName), t.transformTemplate), $s(e, n)
            })
        }
    })
}, Ir = {
    useVisualState: _s({
        scrapeMotionValuesFromProps: en,
        createRenderState: Je
    })
};

function Ur(t, {
    forwardMotionProps: e = !1
}, n, s) {
    return { ...qe(t) ? jr : Ir,
        preloadedFeatures: n,
        useRender: Dr(e),
        createVisualElement: s,
        Component: t
    }
}

function _(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}
const Xs = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

function de(t, e = "page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
const Wr = t => e => Xs(e) && t(e, de(e));

function X(t, e, n, s) {
    return _(t, e, Wr(n), s)
}
const Nr = (t, e) => n => e(t(n)),
    tt = (...t) => t.reduce(Nr);

function Ys(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        };
        return e === null ? (e = t, n) : !1
    }
}
const An = Ys("dragHorizontal"),
    Cn = Ys("dragVertical");

function qs(t) {
    let e = !1;
    if (t === "y") e = Cn();
    else if (t === "x") e = An();
    else {
        const n = An(),
            s = Cn();
        n && s ? e = () => {
            n(), s()
        } : (n && n(), s && s())
    }
    return e
}

function Zs() {
    const t = qs(!0);
    return t ? (t(), !1) : !0
}
class st {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}

function wn(t, e) {
    const n = "pointer" + (e ? "enter" : "leave"),
        s = "onHover" + (e ? "Start" : "End"),
        i = (o, r) => {
            if (o.pointerType === "touch" || Zs()) return;
            const a = t.getProps();
            t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[s] && A.update(() => a[s](o, r))
        };
    return X(t.current, n, i, {
        passive: !t.getProps()[s]
    })
}
class zr extends st {
    mount() {
        this.unmount = tt(wn(this.node, !0), wn(this.node, !1))
    }
    unmount() {}
}
class Hr extends st {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = tt(_(this.node.current, "focus", () => this.onFocus()), _(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Js = (t, e) => e ? t === e ? !0 : Js(t, e.parentElement) : !1;

function ve(t, e) {
    if (!e) return;
    const n = new PointerEvent("pointer" + t);
    e(n, de(n))
}
class Gr extends st {
    constructor() {
        super(...arguments), this.removeStartListeners = L, this.removeEndListeners = L, this.removeAccessibleListeners = L, this.startPointerPress = (e, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const s = this.node.getProps(),
                o = X(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: c,
                        onTapCancel: u,
                        globalTapTarget: f
                    } = this.node.getProps();
                    A.update(() => {
                        !f && !Js(this.node.current, a.target) ? u && u(a, l) : c && c(a, l)
                    })
                }, {
                    passive: !(s.onTap || s.onPointerUp)
                }),
                r = X(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(s.onTapCancel || s.onPointerCancel)
                });
            this.removeEndListeners = tt(o, r), this.startPress(e, n)
        }, this.startAccessiblePress = () => {
            const e = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const r = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || ve("up", (l, c) => {
                            const {
                                onTap: u
                            } = this.node.getProps();
                            u && A.update(() => u(l, c))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = _(this.node.current, "keyup", r), ve("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = _(this.node.current, "keydown", e),
                s = () => {
                    this.isPressing && ve("cancel", (o, r) => this.cancelPress(o, r))
                },
                i = _(this.node.current, "blur", s);
            this.removeAccessibleListeners = tt(n, i)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {
            onTapStart: s,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && A.update(() => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Zs()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: s
        } = this.node.getProps();
        s && A.update(() => s(e, n))
    }
    mount() {
        const e = this.node.getProps(),
            n = X(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(e.onTapStart || e.onPointerStart)
            }),
            s = _(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = tt(n, s)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Ee = new WeakMap,
    xe = new WeakMap,
    $r = t => {
        const e = Ee.get(t.target);
        e && e(t)
    },
    Kr = t => {
        t.forEach($r)
    };

function _r({
    root: t,
    ...e
}) {
    const n = t || document;
    xe.has(n) || xe.set(n, {});
    const s = xe.get(n),
        i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(Kr, {
        root: t,
        ...e
    })), s[i]
}

function Xr(t, e, n) {
    const s = _r(e);
    return Ee.set(t, n), s.observe(t), () => {
        Ee.delete(t), s.unobserve(t)
    }
}
const Yr = {
    some: 0,
    all: 1
};
class qr extends st {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: o
        } = e, r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : Yr[i]
        }, a = l => {
            const {
                isIntersecting: c
            } = l;
            if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: u,
                onViewportLeave: f
            } = this.node.getProps(), h = c ? u : f;
            h && h(l)
        };
        return Xr(this.node.current, r, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Zr(e, n)) && this.startObserver()
    }
    unmount() {}
}

function Zr({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const Jr = {
    inView: {
        Feature: qr
    },
    tap: {
        Feature: Gr
    },
    focus: {
        Feature: Hr
    },
    hover: {
        Feature: zr
    }
};

function Qs(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}

function Qr(t) {
    const e = {};
    return t.values.forEach((n, s) => e[s] = n.get()), e
}

function to(t) {
    const e = {};
    return t.values.forEach((n, s) => e[s] = n.getVelocity()), e
}

function pe(t, e, n) {
    const s = t.getProps();
    return nn(s, e, n !== void 0 ? n : s.custom, Qr(t), to(t))
}
let eo = L,
    ee = L;
const ut = t => t * 1e3,
    Y = t => t / 1e3,
    no = {
        current: !1
    },
    ti = t => Array.isArray(t) && typeof t[0] == "number";

function ei(t) {
    return !!(!t || typeof t == "string" && ni[t] || ti(t) || Array.isArray(t) && t.every(ei))
}
const Mt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
    ni = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Mt([0, .65, .55, 1]),
        circOut: Mt([.55, 0, 1, .45]),
        backIn: Mt([.31, .01, .66, -.59]),
        backOut: Mt([.33, 1.53, .69, .99])
    };

function si(t) {
    if (t) return ti(t) ? Mt(t) : Array.isArray(t) ? t.map(si) : ni[t]
}

function so(t, e, n, {
    delay: s = 0,
    duration: i,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: a,
    times: l
} = {}) {
    const c = {
        [e]: n
    };
    l && (c.offset = l);
    const u = si(a);
    return Array.isArray(u) && (c.easing = u), t.animate(c, {
        delay: s,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    })
}

function io(t, {
    repeat: e,
    repeatType: n = "loop"
}) {
    const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
    return t[s]
}
const ii = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    ro = 1e-7,
    oo = 12;

function ao(t, e, n, s, i) {
    let o, r, a = 0;
    do r = e + (n - e) / 2, o = ii(r, s, i) - t, o > 0 ? n = r : e = r; while (Math.abs(o) > ro && ++a < oo);
    return r
}

function zt(t, e, n, s) {
    if (t === e && n === s) return L;
    const i = o => ao(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : ii(i(o), e, s)
}
const lo = zt(.42, 0, 1, 1),
    co = zt(0, 0, .58, 1),
    ri = zt(.42, 0, .58, 1),
    uo = t => Array.isArray(t) && typeof t[0] != "number",
    oi = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    ai = t => e => 1 - t(1 - e),
    sn = t => 1 - Math.sin(Math.acos(t)),
    li = ai(sn),
    fo = oi(sn),
    ci = zt(.33, 1.53, .69, .99),
    rn = ai(ci),
    ho = oi(rn),
    po = t => (t *= 2) < 1 ? .5 * rn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Mn = {
        linear: L,
        easeIn: lo,
        easeInOut: ri,
        easeOut: co,
        circIn: sn,
        circInOut: fo,
        circOut: li,
        backIn: rn,
        backInOut: ho,
        backOut: ci,
        anticipate: po
    },
    Dn = t => {
        if (Array.isArray(t)) {
            ee(t.length === 4);
            const [e, n, s, i] = t;
            return zt(e, n, s, i)
        } else if (typeof t == "string") return ee(Mn[t] !== void 0), Mn[t];
        return t
    },
    on = (t, e) => n => !!(Ut(n) && mr.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
    ui = (t, e, n) => s => {
        if (!Ut(s)) return s;
        const [i, o, r, a] = s.match(he);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    mo = t => et(0, 255, t),
    Pe = { ...ht,
        transform: t => Math.round(mo(t))
    },
    ct = {
        test: on("rgb", "red"),
        parse: ui("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + Pe.transform(t) + ", " + Pe.transform(e) + ", " + Pe.transform(n) + ", " + Rt(Dt.transform(s)) + ")"
    };

function go(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Be = {
        test: on("#"),
        parse: go,
        transform: ct.transform
    },
    yt = {
        test: on("hsl", "hue"),
        parse: ui("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + $.transform(Rt(e)) + ", " + $.transform(Rt(n)) + ", " + Rt(Dt.transform(s)) + ")"
    },
    O = {
        test: t => ct.test(t) || Be.test(t) || yt.test(t),
        parse: t => ct.test(t) ? ct.parse(t) : yt.test(t) ? yt.parse(t) : Be.parse(t),
        transform: t => Ut(t) ? t : t.hasOwnProperty("red") ? ct.transform(t) : yt.transform(t)
    },
    R = (t, e, n) => -n * t + n * e + t;

function Te(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function yo({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        o = 0,
        r = 0;
    if (!e) i = o = r = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        i = Te(l, a, t + 1 / 3), o = Te(l, a, t), r = Te(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}
const be = (t, e, n) => {
        const s = t * t;
        return Math.sqrt(Math.max(0, n * (e * e - s) + s))
    },
    vo = [Be, ct, yt],
    xo = t => vo.find(e => e.test(t));

function Rn(t) {
    const e = xo(t);
    let n = e.parse(t);
    return e === yt && (n = yo(n)), n
}
const fi = (t, e) => {
    const n = Rn(t),
        s = Rn(e),
        i = { ...n
        };
    return o => (i.red = be(n.red, s.red, o), i.green = be(n.green, s.green, o), i.blue = be(n.blue, s.blue, o), i.alpha = R(n.alpha, s.alpha, o), ct.transform(i))
};

function Po(t) {
    var e, n;
    return isNaN(t) && Ut(t) && (((e = t.match(he)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Is)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const hi = {
        regex: dr,
        countKey: "Vars",
        token: "${v}",
        parse: L
    },
    di = {
        regex: Is,
        countKey: "Colors",
        token: "${c}",
        parse: O.parse
    },
    pi = {
        regex: he,
        countKey: "Numbers",
        token: "${n}",
        parse: ht.parse
    };

function Ve(t, {
    regex: e,
    countKey: n,
    token: s,
    parse: i
}) {
    const o = t.tokenised.match(e);
    o && (t["num" + n] = o.length, t.tokenised = t.tokenised.replace(e, s), t.values.push(...o.map(i)))
}

function ne(t) {
    const e = t.toString(),
        n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && Ve(n, hi), Ve(n, di), Ve(n, pi), n
}

function mi(t) {
    return ne(t).values
}

function gi(t) {
    const {
        values: e,
        numColors: n,
        numVars: s,
        tokenised: i
    } = ne(t), o = e.length;
    return r => {
        let a = i;
        for (let l = 0; l < o; l++) l < s ? a = a.replace(hi.token, r[l]) : l < s + n ? a = a.replace(di.token, O.transform(r[l])) : a = a.replace(pi.token, Rt(r[l]));
        return a
    }
}
const To = t => typeof t == "number" ? 0 : t;

function bo(t) {
    const e = mi(t);
    return gi(t)(e.map(To))
}
const nt = {
        test: Po,
        parse: mi,
        createTransformer: gi,
        getAnimatableNone: bo
    },
    yi = (t, e) => n => `${n>0?e:t}`;

function vi(t, e) {
    return typeof t == "number" ? n => R(t, e, n) : O.test(t) ? fi(t, e) : t.startsWith("var(") ? yi(t, e) : Pi(t, e)
}
const xi = (t, e) => {
        const n = [...t],
            s = n.length,
            i = t.map((o, r) => vi(o, e[r]));
        return o => {
            for (let r = 0; r < s; r++) n[r] = i[r](o);
            return n
        }
    },
    Vo = (t, e) => {
        const n = { ...t,
                ...e
            },
            s = {};
        for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = vi(t[i], e[i]));
        return i => {
            for (const o in s) n[o] = s[o](i);
            return n
        }
    },
    Pi = (t, e) => {
        const n = nt.createTransformer(e),
            s = ne(t),
            i = ne(e);
        return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers ? tt(xi(s.values, i.values), n) : yi(t, e)
    },
    Pt = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s
    },
    Ln = (t, e) => n => R(t, e, n);

function So(t) {
    return typeof t == "number" ? Ln : typeof t == "string" ? O.test(t) ? fi : Pi : Array.isArray(t) ? xi : typeof t == "object" ? Vo : Ln
}

function Ao(t, e, n) {
    const s = [],
        i = n || So(t[0]),
        o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let a = i(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || L : e;
            a = tt(l, a)
        }
        s.push(a)
    }
    return s
}

function me(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const o = t.length;
    if (ee(o === e.length), o === 1) return () => e[0];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const r = Ao(e, s, i),
        a = r.length,
        l = c => {
            let u = 0;
            if (a > 1)
                for (; u < t.length - 2 && !(c < t[u + 1]); u++);
            const f = Pt(t[u], t[u + 1], c);
            return r[u](f)
        };
    return n ? c => l(et(t[0], t[o - 1], c)) : l
}

function Co(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = Pt(0, e, s);
        t.push(R(n, 1, i))
    }
}

function Ti(t) {
    const e = [0];
    return Co(e, t.length - 1), e
}

function wo(t, e) {
    return t.map(n => n * e)
}

function Mo(t, e) {
    return t.map(() => e || ri).splice(0, t.length - 1)
}

function se({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = uo(s) ? s.map(Dn) : Dn(s),
        o = {
            done: !1,
            value: e[0]
        },
        r = wo(n && n.length === e.length ? n : Ti(e), t),
        a = me(r, e, {
            ease: Array.isArray(i) ? i : Mo(e, i)
        });
    return {
        calculatedDuration: t,
        next: l => (o.value = a(l), o.done = l >= t, o)
    }
}

function an(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Do = 5;

function bi(t, e, n) {
    const s = Math.max(e - Do, 0);
    return an(n - t(s), e - s)
}
const Se = .001,
    Ro = .01,
    Lo = 10,
    Eo = .05,
    Bo = 1;

function Fo({
    duration: t = 800,
    bounce: e = .25,
    velocity: n = 0,
    mass: s = 1
}) {
    let i, o, r = 1 - e;
    r = et(Eo, Bo, r), t = et(Ro, Lo, Y(t)), r < 1 ? (i = c => {
        const u = c * r,
            f = u * t,
            h = u - n,
            d = Fe(c, r),
            p = Math.exp(-f);
        return Se - h / d * p
    }, o = c => {
        const f = c * r * t,
            h = f * n + n,
            d = Math.pow(r, 2) * Math.pow(c, 2) * t,
            p = Math.exp(-f),
            m = Fe(Math.pow(c, 2), r);
        return (-i(c) + Se > 0 ? -1 : 1) * ((h - d) * p) / m
    }) : (i = c => {
        const u = Math.exp(-c * t),
            f = (c - n) * t + 1;
        return -Se + u * f
    }, o = c => {
        const u = Math.exp(-c * t),
            f = (n - c) * (t * t);
        return u * f
    });
    const a = 5 / t,
        l = Oo(i, o, a);
    if (t = ut(t), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: t
    }; {
        const c = Math.pow(l, 2) * s;
        return {
            stiffness: c,
            damping: r * 2 * Math.sqrt(s * c),
            duration: t
        }
    }
}
const ko = 12;

function Oo(t, e, n) {
    let s = n;
    for (let i = 1; i < ko; i++) s = s - t(s) / e(s);
    return s
}

function Fe(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const jo = ["duration", "bounce"],
    Io = ["stiffness", "damping", "mass"];

function En(t, e) {
    return e.some(n => t[n] !== void 0)
}

function Uo(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!En(t, Io) && En(t, jo)) {
        const n = Fo(t);
        e = { ...e,
            ...n,
            mass: 1
        }, e.isResolvedFromDuration = !0
    }
    return e
}

function Vi({
    keyframes: t,
    restDelta: e,
    restSpeed: n,
    ...s
}) {
    const i = t[0],
        o = t[t.length - 1],
        r = {
            done: !1,
            value: i
        },
        {
            stiffness: a,
            damping: l,
            mass: c,
            duration: u,
            velocity: f,
            isResolvedFromDuration: h
        } = Uo({ ...s,
            velocity: -Y(s.velocity || 0)
        }),
        d = f || 0,
        p = l / (2 * Math.sqrt(a * c)),
        m = o - i,
        x = Y(Math.sqrt(a / c)),
        T = Math.abs(m) < 5;
    n || (n = T ? .01 : 2), e || (e = T ? .005 : .5);
    let v;
    if (p < 1) {
        const g = Fe(x, p);
        v = P => {
            const V = Math.exp(-p * x * P);
            return o - V * ((d + p * x * m) / g * Math.sin(g * P) + m * Math.cos(g * P))
        }
    } else if (p === 1) v = g => o - Math.exp(-x * g) * (m + (d + x * m) * g);
    else {
        const g = x * Math.sqrt(p * p - 1);
        v = P => {
            const V = Math.exp(-p * x * P),
                w = Math.min(g * P, 300);
            return o - V * ((d + p * x * m) * Math.sinh(w) + g * m * Math.cosh(w)) / g
        }
    }
    return {
        calculatedDuration: h && u || null,
        next: g => {
            const P = v(g);
            if (h) r.done = g >= u;
            else {
                let V = d;
                g !== 0 && (p < 1 ? V = bi(v, g, P) : V = 0);
                const w = Math.abs(V) <= n,
                    M = Math.abs(o - P) <= e;
                r.done = w && M
            }
            return r.value = r.done ? o : P, r
        }
    }
}

function Bn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: a,
    max: l,
    restDelta: c = .5,
    restSpeed: u
}) {
    const f = t[0],
        h = {
            done: !1,
            value: f
        },
        d = S => a !== void 0 && S < a || l !== void 0 && S > l,
        p = S => a === void 0 ? l : l === void 0 || Math.abs(a - S) < Math.abs(l - S) ? a : l;
    let m = n * e;
    const x = f + m,
        T = r === void 0 ? x : r(x);
    T !== x && (m = T - f);
    const v = S => -m * Math.exp(-S / s),
        g = S => T + v(S),
        P = S => {
            const C = v(S),
                U = g(S);
            h.done = Math.abs(C) <= c, h.value = h.done ? T : U
        };
    let V, w;
    const M = S => {
        d(h.value) && (V = S, w = Vi({
            keyframes: [h.value, p(h.value)],
            velocity: bi(g, S, h.value),
            damping: i,
            stiffness: o,
            restDelta: c,
            restSpeed: u
        }))
    };
    return M(0), {
        calculatedDuration: null,
        next: S => {
            let C = !1;
            return !w && V === void 0 && (C = !0, P(S), M(S)), V !== void 0 && S > V ? w.next(S - V) : (!C && P(S), h)
        }
    }
}
const Wo = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => A.update(e, !0),
            stop: () => G(e),
            now: () => F.isProcessing ? F.timestamp : performance.now()
        }
    },
    Fn = 2e4;

function kn(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Fn;) e += n, s = t.next(e);
    return e >= Fn ? 1 / 0 : e
}
const No = {
    decay: Bn,
    inertia: Bn,
    tween: se,
    keyframes: se,
    spring: Vi
};

function ie({
    autoplay: t = !0,
    delay: e = 0,
    driver: n = Wo,
    keyframes: s,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: r = 0,
    repeatType: a = "loop",
    onPlay: l,
    onStop: c,
    onComplete: u,
    onUpdate: f,
    ...h
}) {
    let d = 1,
        p = !1,
        m, x;
    const T = () => {
        x = new Promise(D => {
            m = D
        })
    };
    T();
    let v;
    const g = No[i] || se;
    let P;
    g !== se && typeof s[0] != "number" && (P = me([0, 100], s, {
        clamp: !1
    }), s = [0, 100]);
    const V = g({ ...h,
        keyframes: s
    });
    let w;
    a === "mirror" && (w = g({ ...h,
        keyframes: [...s].reverse(),
        velocity: -(h.velocity || 0)
    }));
    let M = "idle",
        S = null,
        C = null,
        U = null;
    V.calculatedDuration === null && o && (V.calculatedDuration = kn(V));
    const {
        calculatedDuration: dt
    } = V;
    let z = 1 / 0,
        K = 1 / 0;
    dt !== null && (z = dt + r, K = z * (o + 1) - r);
    let k = 0;
    const pt = D => {
            if (C === null) return;
            d > 0 && (C = Math.min(C, D)), d < 0 && (C = Math.min(D - K / d, C)), S !== null ? k = S : k = Math.round(D - C) * d;
            const Vt = k - e * (d >= 0 ? 1 : -1),
                mn = d >= 0 ? Vt < 0 : Vt > K;
            k = Math.max(Vt, 0), M === "finished" && S === null && (k = K);
            let gn = k,
                yn = V;
            if (o) {
                const ge = Math.min(k, K) / z;
                let Ht = Math.floor(ge),
                    it = ge % 1;
                !it && ge >= 1 && (it = 1), it === 1 && Ht--, Ht = Math.min(Ht, o + 1), !!(Ht % 2) && (a === "reverse" ? (it = 1 - it, r && (it -= r / z)) : a === "mirror" && (yn = w)), gn = et(0, 1, it) * z
            }
            const St = mn ? {
                done: !1,
                value: s[0]
            } : yn.next(gn);
            P && (St.value = P(St.value));
            let {
                done: vn
            } = St;
            !mn && dt !== null && (vn = d >= 0 ? k >= K : k <= 0);
            const Zi = S === null && (M === "finished" || M === "running" && vn);
            return f && f(St.value), Zi && bt(), St
        },
        B = () => {
            v && v.stop(), v = void 0
        },
        q = () => {
            M = "idle", B(), m(), T(), C = U = null
        },
        bt = () => {
            M = "finished", u && u(), B(), m()
        },
        mt = () => {
            if (p) return;
            v || (v = n(pt));
            const D = v.now();
            l && l(), S !== null ? C = D - S : (!C || M === "finished") && (C = D), M === "finished" && T(), U = C, S = null, M = "running", v.start()
        };
    t && mt();
    const pn = {
        then(D, Vt) {
            return x.then(D, Vt)
        },
        get time() {
            return Y(k)
        },
        set time(D) {
            D = ut(D), k = D, S !== null || !v || d === 0 ? S = D : C = v.now() - D / d
        },
        get duration() {
            const D = V.calculatedDuration === null ? kn(V) : V.calculatedDuration;
            return Y(D)
        },
        get speed() {
            return d
        },
        set speed(D) {
            D === d || !v || (d = D, pn.time = Y(k))
        },
        get state() {
            return M
        },
        play: mt,
        pause: () => {
            M = "paused", S = k
        },
        stop: () => {
            p = !0, M !== "idle" && (M = "idle", c && c(), q())
        },
        cancel: () => {
            U !== null && pt(U), q()
        },
        complete: () => {
            M = "finished"
        },
        sample: D => (C = 0, pt(D))
    };
    return pn
}

function zo(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const Ho = zo(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Go = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    Kt = 10,
    $o = 2e4,
    Ko = (t, e) => e.type === "spring" || t === "backgroundColor" || !ei(e.ease);

function _o(t, e, {
    onUpdate: n,
    onComplete: s,
    ...i
}) {
    if (!(Ho() && Go.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let r = !1,
        a, l, c = !1;
    const u = () => {
        l = new Promise(g => {
            a = g
        })
    };
    u();
    let {
        keyframes: f,
        duration: h = 300,
        ease: d,
        times: p
    } = i;
    if (Ko(e, i)) {
        const g = ie({ ...i,
            repeat: 0,
            delay: 0
        });
        let P = {
            done: !1,
            value: f[0]
        };
        const V = [];
        let w = 0;
        for (; !P.done && w < $o;) P = g.sample(w), V.push(P.value), w += Kt;
        p = void 0, f = V, h = w - Kt, d = "linear"
    }
    const m = so(t.owner.current, e, f, { ...i,
            duration: h,
            ease: d,
            times: p
        }),
        x = () => {
            c = !1, m.cancel()
        },
        T = () => {
            c = !0, A.update(x), a(), u()
        };
    return m.onfinish = () => {
        c || (t.set(io(f, i)), s && s(), T())
    }, {
        then(g, P) {
            return l.then(g, P)
        },
        attachTimeline(g) {
            return m.timeline = g, m.onfinish = null, L
        },
        get time() {
            return Y(m.currentTime || 0)
        },
        set time(g) {
            m.currentTime = ut(g)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(g) {
            m.playbackRate = g
        },
        get duration() {
            return Y(h)
        },
        play: () => {
            r || (m.play(), G(x))
        },
        pause: () => m.pause(),
        stop: () => {
            if (r = !0, m.playState === "idle") return;
            const {
                currentTime: g
            } = m;
            if (g) {
                const P = ie({ ...i,
                    autoplay: !1
                });
                t.setWithVelocity(P.sample(g - Kt).value, P.sample(g).value, Kt)
            }
            T()
        },
        complete: () => {
            c || m.finish()
        },
        cancel: T
    }
}

function Xo({
    keyframes: t,
    delay: e,
    onUpdate: n,
    onComplete: s
}) {
    const i = () => (n && n(t[t.length - 1]), s && s(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: L,
        pause: L,
        stop: L,
        then: o => (o(), Promise.resolve()),
        cancel: L,
        complete: L
    });
    return e ? ie({
        keyframes: [0, 1],
        duration: 0,
        delay: e,
        onComplete: i
    }) : i()
}
const Yo = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    qo = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Zo = {
        type: "keyframes",
        duration: .8
    },
    Jo = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Qo = (t, {
        keyframes: e
    }) => e.length > 2 ? Zo : ft.has(t) ? t.startsWith("scale") ? qo(e[1]) : Yo : Jo,
    ke = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (nt.test(e) || e === "0") && !e.startsWith("url(")),
    ta = new Set(["brightness", "contrast", "saturate", "opacity"]);

function ea(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(he) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let o = ta.has(e) ? 1 : 0;
    return s !== n && (o *= 100), e + "(" + o + i + ")"
}
const na = /([a-z-]*)\(.*?\)/g,
    Oe = { ...nt,
        getAnimatableNone: t => {
            const e = t.match(na);
            return e ? e.map(ea).join(" ") : t
        }
    },
    sa = { ...Us,
        color: O,
        backgroundColor: O,
        outlineColor: O,
        fill: O,
        stroke: O,
        borderColor: O,
        borderTopColor: O,
        borderRightColor: O,
        borderBottomColor: O,
        borderLeftColor: O,
        filter: Oe,
        WebkitFilter: Oe
    },
    ln = t => sa[t];

function Si(t, e) {
    let n = ln(t);
    return n !== Oe && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Ai = t => /^0[^.\s]+$/.test(t);

function ia(t) {
    if (typeof t == "number") return t === 0;
    if (t !== null) return t === "none" || t === "0" || Ai(t)
}

function ra(t, e, n, s) {
    const i = ke(e, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const r = s.from !== void 0 ? s.from : t.get();
    let a;
    const l = [];
    for (let c = 0; c < o.length; c++) o[c] === null && (o[c] = c === 0 ? r : o[c - 1]), ia(o[c]) && l.push(c), typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (a = o[c]);
    if (i && l.length && a)
        for (let c = 0; c < l.length; c++) {
            const u = l[c];
            o[u] = Si(e, a)
        }
    return o
}

function oa({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: o,
    repeatType: r,
    repeatDelay: a,
    from: l,
    elapsed: c,
    ...u
}) {
    return !!Object.keys(u).length
}

function cn(t, e) {
    return t[e] || t.default || t
}
const aa = {
        skipAnimations: !1
    },
    un = (t, e, n, s = {}) => i => {
        const o = cn(s, t) || {},
            r = o.delay || s.delay || 0;
        let {
            elapsed: a = 0
        } = s;
        a = a - ut(r);
        const l = ra(e, t, n, o),
            c = l[0],
            u = l[l.length - 1],
            f = ke(t, c),
            h = ke(t, u);
        let d = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: p => {
                e.set(p), o.onUpdate && o.onUpdate(p)
            },
            onComplete: () => {
                i(), o.onComplete && o.onComplete()
            }
        };
        if (oa(o) || (d = { ...d,
                ...Qo(t, d)
            }), d.duration && (d.duration = ut(d.duration)), d.repeatDelay && (d.repeatDelay = ut(d.repeatDelay)), !f || !h || no.current || o.type === !1 || aa.skipAnimations) return Xo(d);
        if (!s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
            const p = _o(e, t, d);
            if (p) return p
        }
        return ie(d)
    };

function re(t) {
    return !!(j(t) && t.add)
}
const Ci = t => /^\-?\d*\.?\d+$/.test(t);

function fn(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function hn(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class dn {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return fn(this.subscriptions, e), () => hn(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const la = t => !isNaN(parseFloat(t)),
    Lt = {
        current: void 0
    };
class ca {
    constructor(e, n = {}) {
        this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (s, i = !0) => {
            this.prev = this.current, this.current = s;
            const {
                delta: o,
                timestamp: r
            } = F;
            this.lastUpdated !== r && (this.timeDelta = o, this.lastUpdated = r, A.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => A.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: s
        }) => {
            s !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = la(this.current), this.owner = n.owner
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new dn);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(), A.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n), this.prev = e, this.timeDelta = s
    }
    jump(e) {
        this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return Lt.current && Lt.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? an(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function H(t, e) {
    return new ca(t, e)
}
const wi = t => e => e.test(t),
    ua = {
        test: t => t === "auto",
        parse: t => t
    },
    Mi = [ht, b, $, Z, yr, gr, ua],
    At = t => Mi.find(wi(t)),
    fa = [...Mi, O, nt],
    ha = t => fa.find(wi(t));

function da(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, H(n))
}

function pa(t, e) {
    const n = pe(t, e);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...o
    } = n ? t.makeTargetAnimatable(n, !1) : {};
    o = { ...o,
        ...s
    };
    for (const r in o) {
        const a = Lr(o[r]);
        da(t, r, a)
    }
}

function ma(t, e, n) {
    var s, i;
    const o = Object.keys(e).filter(a => !t.hasValue(a)),
        r = o.length;
    if (r)
        for (let a = 0; a < r; a++) {
            const l = o[a],
                c = e[l];
            let u = null;
            Array.isArray(c) && (u = c[0]), u === null && (u = (i = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !== null && i !== void 0 ? i : e[l]), u != null && (typeof u == "string" && (Ci(u) || Ai(u)) ? u = parseFloat(u) : !ha(u) && nt.test(c) && (u = Si(l, c)), t.addValue(l, H(u, {
                owner: t
            })), n[l] === void 0 && (n[l] = u), u !== null && t.setBaseTarget(l, u))
        }
}

function ga(t, e) {
    return e ? (e[t] || e.default || e).from : void 0
}

function ya(t, e, n) {
    const s = {};
    for (const i in t) {
        const o = ga(i, e);
        if (o !== void 0) s[i] = o;
        else {
            const r = n.getValue(i);
            r && (s[i] = r.get())
        }
    }
    return s
}

function va({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function xa(t, e) {
    const n = t.get();
    if (Array.isArray(e)) {
        for (let s = 0; s < e.length; s++)
            if (e[s] !== n) return !0
    } else return n !== e
}

function Di(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    let {
        transition: o = t.getDefaultTransition(),
        transitionEnd: r,
        ...a
    } = t.makeTargetAnimatable(e);
    const l = t.getValue("willChange");
    s && (o = s);
    const c = [],
        u = i && t.animationState && t.animationState.getState()[i];
    for (const f in a) {
        const h = t.getValue(f),
            d = a[f];
        if (!h || d === void 0 || u && va(u, f)) continue;
        const p = {
            delay: n,
            elapsed: 0,
            ...cn(o || {}, f)
        };
        if (window.HandoffAppearAnimations) {
            const T = t.getProps()[Es];
            if (T) {
                const v = window.HandoffAppearAnimations(T, f, h, A);
                v !== null && (p.elapsed = v, p.isHandoff = !0)
            }
        }
        let m = !p.isHandoff && !xa(h, d);
        if (p.type === "spring" && (h.getVelocity() || p.velocity) && (m = !1), h.animation && (m = !1), m) continue;
        h.start(un(f, h, d, t.shouldReduceMotion && ft.has(f) ? {
            type: !1
        } : p));
        const x = h.animation;
        re(l) && (l.add(f), x.then(() => l.remove(f))), c.push(x)
    }
    return r && Promise.all(c).then(() => {
        r && pa(t, r)
    }), c
}

function je(t, e, n = {}) {
    const s = pe(t, e, n.custom);
    let {
        transition: i = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(Di(t, s, n)) : () => Promise.resolve(),
        r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: u,
                staggerDirection: f
            } = i;
            return Pa(t, e, c + l, u, f, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
        return l().then(() => c())
    } else return Promise.all([o(), r(n.delay)])
}

function Pa(t, e, n = 0, s = 0, i = 1, o) {
    const r = [],
        a = (t.variantChildren.size - 1) * s,
        l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
    return Array.from(t.variantChildren).sort(Ta).forEach((c, u) => {
        c.notify("AnimationStart", e), r.push(je(c, e, { ...o,
            delay: n + l(u)
        }).then(() => c.notify("AnimationComplete", e)))
    }), Promise.all(r)
}

function Ta(t, e) {
    return t.sortNodePosition(e)
}

function ba(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => je(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = je(t, e, n);
    else {
        const i = typeof e == "function" ? pe(t, e, n.custom) : e;
        s = Promise.all(Di(t, i, n))
    }
    return s.then(() => t.notify("AnimationComplete", e))
}
const Va = [..._e].reverse(),
    Sa = _e.length;

function Aa(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => ba(t, n, s)))
}

function Ca(t) {
    let e = Aa(t);
    const n = Ma();
    let s = !0;
    const i = (l, c) => {
        const u = pe(t, c);
        if (u) {
            const {
                transition: f,
                transitionEnd: h,
                ...d
            } = u;
            l = { ...l,
                ...d,
                ...h
            }
        }
        return l
    };

    function o(l) {
        e = l(t)
    }

    function r(l, c) {
        const u = t.getProps(),
            f = t.getVariantContext(!0) || {},
            h = [],
            d = new Set;
        let p = {},
            m = 1 / 0;
        for (let T = 0; T < Sa; T++) {
            const v = Va[T],
                g = n[v],
                P = u[v] !== void 0 ? u[v] : f[v],
                V = kt(P),
                w = v === c ? g.isActive : null;
            w === !1 && (m = T);
            let M = P === f[v] && P !== u[v] && V;
            if (M && s && t.manuallyAnimateOnMount && (M = !1), g.protectedKeys = { ...p
                }, !g.isActive && w === null || !P && !g.prevProp || ue(P) || typeof P == "boolean") continue;
            let C = wa(g.prevProp, P) || v === c && g.isActive && !M && V || T > m && V,
                U = !1;
            const dt = Array.isArray(P) ? P : [P];
            let z = dt.reduce(i, {});
            w === !1 && (z = {});
            const {
                prevResolvedValues: K = {}
            } = g, k = { ...K,
                ...z
            }, pt = B => {
                C = !0, d.has(B) && (U = !0, d.delete(B)), g.needsAnimating[B] = !0
            };
            for (const B in k) {
                const q = z[B],
                    bt = K[B];
                if (p.hasOwnProperty(B)) continue;
                let mt = !1;
                te(q) && te(bt) ? mt = !Qs(q, bt) : mt = q !== bt, mt ? q !== void 0 ? pt(B) : d.add(B) : q !== void 0 && d.has(B) ? pt(B) : g.protectedKeys[B] = !0
            }
            g.prevProp = P, g.prevResolvedValues = z, g.isActive && (p = { ...p,
                ...z
            }), s && t.blockInitialAnimation && (C = !1), C && (!M || U) && h.push(...dt.map(B => ({
                animation: B,
                options: {
                    type: v,
                    ...l
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(v => {
                const g = t.getBaseTarget(v);
                g !== void 0 && (T[v] = g)
            }), h.push({
                animation: T
            })
        }
        let x = !!h.length;
        return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (x = !1), s = !1, x ? e(h) : Promise.resolve()
    }

    function a(l, c, u) {
        var f;
        if (n[l].isActive === c) return Promise.resolve();
        (f = t.variantChildren) === null || f === void 0 || f.forEach(d => {
            var p;
            return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c)
        }), n[l].isActive = c;
        const h = r(u, l);
        for (const d in n) n[d].protectedKeys = {};
        return h
    }
    return {
        animateChanges: r,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n
    }
}

function wa(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Qs(e, t) : !1
}

function rt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ma() {
    return {
        animate: rt(!0),
        whileInView: rt(),
        whileHover: rt(),
        whileTap: rt(),
        whileDrag: rt(),
        whileFocus: rt(),
        exit: rt()
    }
}
class Da extends st {
    constructor(e) {
        super(e), e.animationState || (e.animationState = Ca(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        this.unmount(), ue(e) && (this.unmount = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let Ra = 0;
class La extends st {
    constructor() {
        super(...arguments), this.id = Ra++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n,
            custom: s
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const o = this.node.animationState.setActive("exit", !e, {
            custom: s ? ? this.node.getProps().custom
        });
        n && !e && o.then(() => n(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Ea = {
        animation: {
            Feature: Da
        },
        exit: {
            Feature: La
        }
    },
    On = (t, e) => Math.abs(t - e);

function Ba(t, e) {
    const n = On(t.x, e.x),
        s = On(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class Ri {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = Ce(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    d = Ba(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !d) return;
                const {
                    point: p
                } = f, {
                    timestamp: m
                } = F;
                this.history.push({ ...p,
                    timestamp: m
                });
                const {
                    onStart: x,
                    onMove: T
                } = this.handlers;
                h || (x && x(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, h) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Ae(h, this.transformPagePoint), A.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, h) => {
                this.end();
                const {
                    onEnd: d,
                    onSessionEnd: p,
                    resumeAnimation: m
                } = this.handlers;
                if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = Ce(f.type === "pointercancel" ? this.lastMoveEventInfo : Ae(h, this.transformPagePoint), this.history);
                this.startEvent && d && d(f, x), p && p(f, x)
            }, !Xs(e)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
        const r = de(e),
            a = Ae(r, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: c
            } = F;
        this.history = [{ ...l,
            timestamp: c
        }];
        const {
            onSessionStart: u
        } = n;
        u && u(e, Ce(a, this.history)), this.removeListeners = tt(X(this.contextWindow, "pointermove", this.handlePointerMove), X(this.contextWindow, "pointerup", this.handlePointerUp), X(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), G(this.updatePoint)
    }
}

function Ae(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function jn(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function Ce({
    point: t
}, e) {
    return {
        point: t,
        delta: jn(t, Li(e)),
        offset: jn(t, Fa(e)),
        velocity: ka(e, .1)
    }
}

function Fa(t) {
    return t[0]
}

function Li(t) {
    return t[t.length - 1]
}

function ka(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = Li(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > ut(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const o = Y(i.timestamp - s.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function I(t) {
    return t.max - t.min
}

function Ie(t, e = 0, n = .01) {
    return Math.abs(t - e) <= n
}

function In(t, e, n, s = .5) {
    t.origin = s, t.originPoint = R(e.min, e.max, t.origin), t.scale = I(n) / I(e), (Ie(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = R(n.min, n.max, t.origin) - t.originPoint, (Ie(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}

function Et(t, e, n, s) {
    In(t.x, e.x, n.x, s ? s.originX : void 0), In(t.y, e.y, n.y, s ? s.originY : void 0)
}

function Un(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + I(e)
}

function Oa(t, e, n) {
    Un(t.x, e.x, n.x), Un(t.y, e.y, n.y)
}

function Wn(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + I(e)
}

function Bt(t, e, n) {
    Wn(t.x, e.x, n.x), Wn(t.y, e.y, n.y)
}

function ja(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? R(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? R(n, t, s.max) : Math.min(t, n)), t
}

function Nn(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function Ia(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: Nn(t.x, n, i),
        y: Nn(t.y, e, s)
    }
}

function zn(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function Ua(t, e) {
    return {
        x: zn(t.x, e.x),
        y: zn(t.y, e.y)
    }
}

function Wa(t, e) {
    let n = .5;
    const s = I(t),
        i = I(e);
    return i > s ? n = Pt(e.min, e.max - s, t.min) : s > i && (n = Pt(t.min, t.max - i, e.min)), et(0, 1, n)
}

function Na(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const Ue = .35;

function za(t = Ue) {
    return t === !1 ? t = 0 : t === !0 && (t = Ue), {
        x: Hn(t, "left", "right"),
        y: Hn(t, "top", "bottom")
    }
}

function Hn(t, e, n) {
    return {
        min: Gn(t, e),
        max: Gn(t, n)
    }
}

function Gn(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const $n = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    vt = () => ({
        x: $n(),
        y: $n()
    }),
    Kn = () => ({
        min: 0,
        max: 0
    }),
    E = () => ({
        x: Kn(),
        y: Kn()
    });

function N(t) {
    return [t("x"), t("y")]
}

function Ei({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function Ha({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function Ga(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function we(t) {
    return t === void 0 || t === 1
}

function We({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !we(t) || !we(e) || !we(n)
}

function ot(t) {
    return We(t) || Bi(t) || t.z || t.rotate || t.rotateX || t.rotateY
}

function Bi(t) {
    return _n(t.x) || _n(t.y)
}

function _n(t) {
    return t && t !== "0%"
}

function oe(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function Xn(t, e, n, s, i) {
    return i !== void 0 && (t = oe(t, i, s)), oe(t, n, s) + e
}

function Ne(t, e = 0, n = 1, s, i) {
    t.min = Xn(t.min, e, n, s, i), t.max = Xn(t.max, e, n, s, i)
}

function Fi(t, {
    x: e,
    y: n
}) {
    Ne(t.x, e.translate, e.scale, e.originPoint), Ne(t.y, n.translate, n.scale, n.originPoint)
}

function $a(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let o, r;
    for (let a = 0; a < i; a++) {
        o = n[a], r = o.projectionDelta;
        const l = o.instance;
        l && l.style && l.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && xt(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Fi(t, r)), s && ot(o.latestValues) && xt(t, o.latestValues))
    }
    e.x = Yn(e.x), e.y = Yn(e.y)
}

function Yn(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}

function Q(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function qn(t, e, [n, s, i]) {
    const o = e[i] !== void 0 ? e[i] : .5,
        r = R(t.min, t.max, o);
    Ne(t, e[n], e[s], r, e.scale)
}
const Ka = ["x", "scaleX", "originX"],
    _a = ["y", "scaleY", "originY"];

function xt(t, e) {
    qn(t.x, e, Ka), qn(t.y, e, _a)
}

function ki(t, e) {
    return Ei(Ga(t.getBoundingClientRect(), e))
}

function Xa(t, e, n) {
    const s = ki(t, n),
        {
            scroll: i
        } = e;
    return i && (Q(s.x, i.offset.x), Q(s.y, i.offset.y)), s
}
const Oi = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    Ya = new WeakMap;
class qa {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = E(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: s
        } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = u => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(de(u, "page").point)
            },
            o = (u, f) => {
                const {
                    drag: h,
                    dragPropagation: d,
                    onDragStart: p
                } = this.getProps();
                if (h && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = qs(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), N(x => {
                    let T = this.getAxisMotionValue(x).get() || 0;
                    if ($.test(T)) {
                        const {
                            projection: v
                        } = this.visualElement;
                        if (v && v.layout) {
                            const g = v.layout.layoutBox[x];
                            g && (T = I(g) * (parseFloat(T) / 100))
                        }
                    }
                    this.originPoint[x] = T
                }), p && A.update(() => p(u, f), !1, !0);
                const {
                    animationState: m
                } = this.visualElement;
                m && m.setActive("whileDrag", !0)
            },
            r = (u, f) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: d,
                    onDirectionLock: p,
                    onDrag: m
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: x
                } = f;
                if (d && this.currentDirection === null) {
                    this.currentDirection = Za(x), this.currentDirection !== null && p && p(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, x), this.updateAxis("y", f.point, x), this.visualElement.render(), m && m(u, f)
            },
            a = (u, f) => this.stop(u, f),
            l = () => N(u => {
                var f;
                return this.getAnimationState(u) === "paused" && ((f = this.getAxisMotionValue(u).animation) === null || f === void 0 ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new Ri(e, {
            onSessionStart: i,
            onStart: o,
            onMove: r,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            contextWindow: Oi(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(), !s) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && A.update(() => o(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !_t(e, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = ja(r, this.constraints[e], this.elastic[e])), o.set(r)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: n,
            dragElastic: s
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
        n && gt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Ia(i.layoutBox, n) : this.constraints = !1, this.elastic = za(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && N(r => {
            this.getAxisMotionValue(r) && (this.constraints[r] = Na(i.layoutBox[r], this.constraints[r]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !gt(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = Xa(s, i.root, this.visualElement.getTransformPagePoint());
        let r = Ua(i.layout.layoutBox, o);
        if (n) {
            const a = n(Ha(r));
            this.hasMutatedConstraints = !!a, a && (r = Ei(a))
        }
        return r
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, c = N(u => {
            if (!_t(u, n, this.currentDirection)) return;
            let f = l && l[u] || {};
            r && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                d = i ? 40 : 1e7,
                p = {
                    type: "inertia",
                    velocity: s ? e[u] : 0,
                    bounceStiffness: h,
                    bounceDamping: d,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(u, p)
        });
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return s.start(un(e, s, 0, n))
    }
    stopAnimation() {
        N(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        N(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = "_drag" + e.toUpperCase(),
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        N(n => {
            const {
                drag: s
            } = this.getProps();
            if (!_t(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: r,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(e[n] - R(r, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!gt(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        N(r => {
            const a = this.getAxisMotionValue(r);
            if (a) {
                const l = a.get();
                i[r] = Wa({
                    min: l,
                    max: l
                }, this.constraints[r])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), N(r => {
            if (!_t(r, e, null)) return;
            const a = this.getAxisMotionValue(r),
                {
                    min: l,
                    max: c
                } = this.constraints[r];
            a.set(R(l, c, i[r]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Ya.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = X(e, "pointerdown", l => {
                const {
                    drag: c,
                    dragListener: u = !0
                } = this.getProps();
                c && u && this.start(l)
            }),
            s = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                gt(l) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
        const r = _(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (N(u => {
                    const f = this.getAxisMotionValue(u);
                    f && (this.originPoint[u] += l[u].translate, f.set(f.get() + l[u].translate))
                }), this.visualElement.render())
            });
        return () => {
            r(), n(), o(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: r = Ue,
                dragMomentum: a = !0
            } = e;
        return { ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: a
        }
    }
}

function _t(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function Za(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class Ja extends st {
    constructor(e) {
        super(e), this.removeGroupControls = L, this.removeListeners = L, this.controls = new qa(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || L
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Zn = t => (e, n) => {
    t && A.update(() => t(e, n))
};
class Qa extends st {
    constructor() {
        super(...arguments), this.removePointerDownListener = L
    }
    onPointerDown(e) {
        this.session = new Ri(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Oi(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Zn(e),
            onStart: Zn(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session, i && A.update(() => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = X(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function tl() {
    const t = y.useContext(le);
    if (t === null) return [!0, null];
    const {
        isPresent: e,
        onExitComplete: n,
        register: s
    } = t, i = y.useId();
    return y.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0]
}
const Yt = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Jn(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Ct = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (b.test(t)) t = parseFloat(t);
                else return t;
            const n = Jn(t, e.target.x),
                s = Jn(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    el = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = nt.parse(t);
            if (i.length > 5) return s;
            const o = nt.createTransformer(t),
                r = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            i[0 + r] /= a, i[1 + r] /= l;
            const c = R(a, l, .5);
            return typeof i[2 + r] == "number" && (i[2 + r] /= c), typeof i[3 + r] == "number" && (i[3 + r] /= c), o(i)
        }
    };
class nl extends Rs.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: o
        } = e;
        cr(sl), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Yt.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: o
        } = this.props, r = s.projection;
        return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || A.postRender(() => {
            const a = r.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), queueMicrotask(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function ji(t) {
    const [e, n] = tl(), s = y.useContext(Ye);
    return Rs.createElement(nl, { ...t,
        layoutGroup: s,
        switchLayoutGroup: y.useContext(Fs),
        isPresent: e,
        safeToRemove: n
    })
}
const sl = {
        borderRadius: { ...Ct,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Ct,
        borderTopRightRadius: Ct,
        borderBottomLeftRadius: Ct,
        borderBottomRightRadius: Ct,
        boxShadow: el
    },
    Ii = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    il = Ii.length,
    Qn = t => typeof t == "string" ? parseFloat(t) : t,
    ts = t => typeof t == "number" || b.test(t);

function rl(t, e, n, s, i, o) {
    i ? (t.opacity = R(0, n.opacity !== void 0 ? n.opacity : 1, ol(s)), t.opacityExit = R(e.opacity !== void 0 ? e.opacity : 1, 0, al(s))) : o && (t.opacity = R(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let r = 0; r < il; r++) {
        const a = `border${Ii[r]}Radius`;
        let l = es(e, a),
            c = es(n, a);
        if (l === void 0 && c === void 0) continue;
        l || (l = 0), c || (c = 0), l === 0 || c === 0 || ts(l) === ts(c) ? (t[a] = Math.max(R(Qn(l), Qn(c), s), 0), ($.test(c) || $.test(l)) && (t[a] += "%")) : t[a] = c
    }(e.rotate || n.rotate) && (t.rotate = R(e.rotate || 0, n.rotate || 0, s))
}

function es(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const ol = Ui(0, .5, li),
    al = Ui(.5, .95, L);

function Ui(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(Pt(t, e, s))
}

function ns(t, e) {
    t.min = e.min, t.max = e.max
}

function W(t, e) {
    ns(t.x, e.x), ns(t.y, e.y)
}

function ss(t, e, n, s, i) {
    return t -= e, t = oe(t, 1 / n, s), i !== void 0 && (t = oe(t, 1 / i, s)), t
}

function ll(t, e = 0, n = 1, s = .5, i, o = t, r = t) {
    if ($.test(e) && (e = parseFloat(e), e = R(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let a = R(o.min, o.max, s);
    t === o && (a -= e), t.min = ss(t.min, e, n, a, i), t.max = ss(t.max, e, n, a, i)
}

function is(t, e, [n, s, i], o, r) {
    ll(t, e[n], e[s], e[i], e.scale, o, r)
}
const cl = ["x", "scaleX", "originX"],
    ul = ["y", "scaleY", "originY"];

function rs(t, e, n, s) {
    is(t.x, e, cl, n ? n.x : void 0, s ? s.x : void 0), is(t.y, e, ul, n ? n.y : void 0, s ? s.y : void 0)
}

function os(t) {
    return t.translate === 0 && t.scale === 1
}

function Wi(t) {
    return os(t.x) && os(t.y)
}

function fl(t, e) {
    return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
}

function Ni(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}

function as(t) {
    return I(t.x) / I(t.y)
}
class hl {
    constructor() {
        this.members = []
    }
    add(e) {
        fn(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (hn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function ls(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        o = t.y.translate / e.y;
    if ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            rotate: l,
            rotateX: c,
            rotateY: u
        } = n;
        l && (s += `rotate(${l}deg) `), c && (s += `rotateX(${c}deg) `), u && (s += `rotateY(${u}deg) `)
    }
    const r = t.x.scale * e.x,
        a = t.y.scale * e.y;
    return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || "none"
}
const dl = (t, e) => t.depth - e.depth;
class pl {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        fn(this.children, e), this.isDirty = !0
    }
    remove(e) {
        hn(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(dl), this.isDirty = !1, this.children.forEach(e)
    }
}

function ml(t, e) {
    const n = performance.now(),
        s = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= e && (G(s), t(o - e))
        };
    return A.read(s, !0), () => G(s)
}

function gl(t) {
    window.MotionDebug && window.MotionDebug.record(t)
}

function yl(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}

function vl(t, e, n) {
    const s = j(t) ? t : H(t);
    return s.start(un("", s, e, n)), s.animation
}
const cs = ["", "X", "Y", "Z"],
    xl = {
        visibility: "hidden"
    },
    us = 1e3;
let Pl = 0;
const at = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function zi({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(r = {}, a = e == null ? void 0 : e()) {
            this.id = Pl++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0, this.nodes.forEach(Vl), this.nodes.forEach(Ml), this.nodes.forEach(Dl), this.nodes.forEach(Sl), gl(at)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new pl)
        }
        addEventListener(r, a) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new dn), this.eventHandlers.get(r).add(a)
        }
        notifyListeners(r, ...a) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...a)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = yl(r), this.instance = r;
            const {
                layoutId: l,
                layout: c,
                visualElement: u
            } = this.options;
            if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), t) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                t(r, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = ml(h, 250), Yt.hasAnimatedSinceResize && (Yt.hasAnimatedSinceResize = !1, this.nodes.forEach(hs))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: d,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || u.getDefaultTransition() || Fl,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: T
                    } = u.getProps(),
                    v = !this.targetLayout || !Ni(this.targetLayout, p) || d,
                    g = !h && d;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (v || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, g);
                    const P = { ...cn(m, "layout"),
                        onPlay: x,
                        onComplete: T
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P)
                } else h || hs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, G(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Rl), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: r
            } = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const f = this.path[u];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fs);
                return
            }
            this.isUpdating || this.nodes.forEach(Cl), this.isUpdating = !1, this.nodes.forEach(wl), this.nodes.forEach(Tl), this.nodes.forEach(bl), this.clearAllSnapshots();
            const a = performance.now();
            F.delta = et(0, 1e3 / 60, a - F.timestamp), F.timestamp = a, F.isProcessing = !0, ye.update.process(F), ye.preRender.process(F), ye.render.process(F), F.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Al), this.sharedNodes.forEach(Ll)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, A.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            A.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = E(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && (this.scroll = {
                animationId: this.root.animationId,
                phase: r,
                isRoot: s(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const r = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !Wi(this.projectionDelta),
                l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0,
                u = c !== this.prevTransformTemplateValue;
            r && (a || ot(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(r = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return r && (l = this.removeTransform(l)), kl(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return E();
            const a = r.measureViewportBox(),
                {
                    scroll: l
                } = this.root;
            return l && (Q(a.x, l.offset.x), Q(a.y, l.offset.y)), a
        }
        removeElementScroll(r) {
            const a = E();
            W(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l],
                    {
                        scroll: u,
                        options: f
                    } = c;
                if (c !== this.root && u && f.layoutScroll) {
                    if (u.isRoot) {
                        W(a, r);
                        const {
                            scroll: h
                        } = this.root;
                        h && (Q(a.x, -h.offset.x), Q(a.y, -h.offset.y))
                    }
                    Q(a.x, u.offset.x), Q(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(r, a = !1) {
            const l = E();
            W(l, r);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && xt(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), ot(u.latestValues) && xt(l, u.latestValues)
            }
            return ot(this.latestValues) && xt(l, this.latestValues), l
        }
        removeTransform(r) {
            const a = E();
            W(a, r);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !ot(c.latestValues)) continue;
                We(c.latestValues) && c.updateSnapshot();
                const u = E(),
                    f = c.measurePageBox();
                W(u, f), rs(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return ot(this.latestValues) && rs(a, this.latestValues), a
        }
        setTargetDelta(r) {
            this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = { ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(f || h))) {
                if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const d = this.getClosestProjectingParent();
                    d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Bt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Oa(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : W(this.target, this.layout.layoutBox), Fi(this.target, this.targetDelta)) : W(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const d = this.getClosestProjectingParent();
                        d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Bt(this.relativeTargetOrigin, this.target, d.target), W(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    at.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || We(this.parent.latestValues) || Bi(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var r;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === F.timestamp && (c = !1), c) return;
            const {
                layout: u,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || f)) return;
            W(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                d = this.treeScale.y;
            $a(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {
                target: p
            } = a;
            if (!p) {
                this.projectionTransform && (this.projectionDelta = vt(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = vt(), this.projectionDeltaWithTransform = vt());
            const m = this.projectionTransform;
            Et(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = ls(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== h || this.treeScale.y !== d) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), at.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), r) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(r, a = !1) {
            const l = this.snapshot,
                c = l ? l.latestValues : {},
                u = { ...this.latestValues
                },
                f = vt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = E(),
                d = l ? l.source : void 0,
                p = this.layout ? this.layout.source : void 0,
                m = d !== p,
                x = this.getStack(),
                T = !x || x.members.length <= 1,
                v = !!(m && !T && this.options.crossfade === !0 && !this.path.some(Bl));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = P => {
                const V = P / 1e3;
                ds(f.x, r.x, V), ds(f.y, r.y, V), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Bt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), El(this.relativeTarget, this.relativeTargetOrigin, h, V), g && fl(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = E()), W(g, this.relativeTarget)), m && (this.animationValues = u, rl(u, c, this.latestValues, V, v, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = V
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (G(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = A.update(() => {
                Yt.hasAnimatedSinceResize = !0, this.currentAnimation = vl(0, us, { ...r,
                    onUpdate: a => {
                        this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a)
                    },
                    onComplete: () => {
                        r.onComplete && r.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(us), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: c,
                latestValues: u
            } = r;
            if (!(!a || !l || !c)) {
                if (this !== r && this.layout && c && Hi(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || E();
                    const f = I(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min, l.x.max = l.x.min + f;
                    const h = I(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min, l.y.max = l.y.min + h
                }
                W(a, l), xt(a, u), Et(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(r, a) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new hl), this.sharedNodes.get(r).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this
        }
        getPrevLead() {
            var r;
            const {
                layoutId: a
            } = this.options;
            return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: r
            } = this.options;
            if (r) return this.root.sharedNodes.get(r)
        }
        promote({
            needsReset: r,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return;
            let a = !1;
            const {
                latestValues: l
            } = r;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a) return;
            const c = {};
            for (let u = 0; u < cs.length; u++) {
                const f = "rotate" + cs[u];
                l[f] && (c[f] = l[f], r.setStaticValue(f, 0))
            }
            r.render();
            for (const u in c) r.setStaticValue(u, c[u]);
            r.scheduleRender()
        }
        getProjectionStyles(r) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return xl;
            const c = {
                    visibility: ""
                },
                u = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, c.opacity = "", c.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const m = {};
                return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Xt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), c.transform = ls(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
            const {
                x: d,
                y: p
            } = this.projectionDelta;
            c.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, f.animationValues ? c.opacity = f === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const m in Jt) {
                if (h[m] === void 0) continue;
                const {
                    correct: x,
                    applyTo: T
                } = Jt[m], v = c.transform === "none" ? h[m] : x(h[m], f);
                if (T) {
                    const g = T.length;
                    for (let P = 0; P < g; P++) c[T[P]] = v
                } else c[m] = v
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? Xt(r == null ? void 0 : r.pointerEvents) || "" : "none"), c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => {
                var a;
                return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(fs), this.root.sharedNodes.clear()
        }
    }
}

function Tl(t) {
    t.updateLayout()
}

function bl(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: s,
            measuredBox: i
        } = t.layout, {
            animationType: o
        } = t.options, r = n.source !== t.layout.source;
        o === "size" ? N(f => {
            const h = r ? n.measuredBox[f] : n.layoutBox[f],
                d = I(h);
            h.min = s[f].min, h.max = h.min + d
        }) : Hi(o, n.layoutBox, s) && N(f => {
            const h = r ? n.measuredBox[f] : n.layoutBox[f],
                d = I(s[f]);
            h.max = h.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + d)
        });
        const a = vt();
        Et(a, s, n.layoutBox);
        const l = vt();
        r ? Et(l, t.applyTransform(i, !0), n.measuredBox) : Et(l, s, n.layoutBox);
        const c = !Wi(a);
        let u = !1;
        if (!t.resumeFrom) {
            const f = t.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: d
                } = f;
                if (h && d) {
                    const p = E();
                    Bt(p, n.layoutBox, h.layoutBox);
                    const m = E();
                    Bt(m, s, d.layoutBox), Ni(p, m) || (u = !0), f.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = f)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: s
        } = t.options;
        s && s()
    }
    t.options.transition = void 0
}

function Vl(t) {
    at.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function Sl(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function Al(t) {
    t.clearSnapshot()
}

function fs(t) {
    t.clearMeasurements()
}

function Cl(t) {
    t.isLayoutDirty = !1
}

function wl(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function hs(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function Ml(t) {
    t.resolveTargetDelta()
}

function Dl(t) {
    t.calcProjection()
}

function Rl(t) {
    t.resetRotation()
}

function Ll(t) {
    t.removeLeadSnapshot()
}

function ds(t, e, n) {
    t.translate = R(e.translate, 0, n), t.scale = R(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function ps(t, e, n, s) {
    t.min = R(e.min, n.min, s), t.max = R(e.max, n.max, s)
}

function El(t, e, n, s) {
    ps(t.x, e.x, n.x, s), ps(t.y, e.y, n.y, s)
}

function Bl(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const Fl = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    ms = t => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t),
    gs = ms("applewebkit/") && !ms("chrome/") ? Math.round : L;

function ys(t) {
    t.min = gs(t.min), t.max = gs(t.max)
}

function kl(t) {
    ys(t.x), ys(t.y)
}

function Hi(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !Ie(as(e), as(n), .2)
}
const Ol = zi({
        attachResizeListener: (t, e) => _(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Me = {
        current: void 0
    },
    Gi = zi({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Me.current) {
                const t = new Ol({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Me.current = t
            }
            return Me.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    jl = {
        pan: {
            Feature: Qa
        },
        drag: {
            Feature: Ja,
            ProjectionNode: Gi,
            MeasureLayout: ji
        }
    },
    Il = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function Ul(t) {
    const e = Il.exec(t);
    if (!e) return [, ];
    const [, n, s] = e;
    return [n, s]
}

function ze(t, e, n = 1) {
    const [s, i] = Ul(t);
    if (!s) return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return Ci(r) ? parseFloat(r) : r
    } else return Le(i) ? ze(i, e, n + 1) : i
}

function Wl(t, { ...e
}, n) {
    const s = t.current;
    if (!(s instanceof Element)) return {
        target: e,
        transitionEnd: n
    };
    n && (n = { ...n
    }), t.values.forEach(i => {
        const o = i.get();
        if (!Le(o)) return;
        const r = ze(o, s);
        r && i.set(r)
    });
    for (const i in e) {
        const o = e[i];
        if (!Le(o)) continue;
        const r = ze(o, s);
        r && (e[i] = r, n || (n = {}), n[i] === void 0 && (n[i] = o))
    }
    return {
        target: e,
        transitionEnd: n
    }
}
const Nl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    $i = t => Nl.has(t),
    zl = t => Object.keys(t).some($i),
    vs = t => t === ht || t === b,
    xs = (t, e) => parseFloat(t.split(", ")[e]),
    Ps = (t, e) => (n, {
        transform: s
    }) => {
        if (s === "none" || !s) return 0;
        const i = s.match(/^matrix3d\((.+)\)$/);
        if (i) return xs(i[1], e); {
            const o = s.match(/^matrix\((.+)\)$/);
            return o ? xs(o[1], t) : 0
        }
    },
    Hl = new Set(["x", "y", "z"]),
    Gl = It.filter(t => !Hl.has(t));

function $l(t) {
    const e = [];
    return Gl.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e.length && t.render(), e
}
const Tt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: Ps(4, 13),
    y: Ps(5, 14)
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const Kl = (t, e, n) => {
        const s = e.measureViewportBox(),
            i = e.current,
            o = getComputedStyle(i),
            {
                display: r
            } = o,
            a = {};
        r === "none" && e.setStaticValue("display", t.display || "block"), n.forEach(c => {
            a[c] = Tt[c](s, o)
        }), e.render();
        const l = e.measureViewportBox();
        return n.forEach(c => {
            const u = e.getValue(c);
            u && u.jump(a[c]), t[c] = Tt[c](l, o)
        }), t
    },
    _l = (t, e, n = {}, s = {}) => {
        e = { ...e
        }, s = { ...s
        };
        const i = Object.keys(e).filter($i);
        let o = [],
            r = !1;
        const a = [];
        if (i.forEach(l => {
                const c = t.getValue(l);
                if (!t.hasValue(l)) return;
                let u = n[l],
                    f = At(u);
                const h = e[l];
                let d;
                if (te(h)) {
                    const p = h.length,
                        m = h[0] === null ? 1 : 0;
                    u = h[m], f = At(u);
                    for (let x = m; x < p && h[x] !== null; x++) d ? ee(At(h[x]) === d) : d = At(h[x])
                } else d = At(h);
                if (f !== d)
                    if (vs(f) && vs(d)) {
                        const p = c.get();
                        typeof p == "string" && c.set(parseFloat(p)), typeof h == "string" ? e[l] = parseFloat(h) : Array.isArray(h) && d === b && (e[l] = h.map(parseFloat))
                    } else f != null && f.transform && (d != null && d.transform) && (u === 0 || h === 0) ? u === 0 ? c.set(d.transform(u)) : e[l] = f.transform(h) : (r || (o = $l(t), r = !0), a.push(l), s[l] = s[l] !== void 0 ? s[l] : e[l], c.jump(h))
            }), a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                c = Kl(e, t, a);
            return o.length && o.forEach(([u, f]) => {
                t.getValue(u).set(f)
            }), t.render(), ce && l !== null && window.scrollTo({
                top: l
            }), {
                target: c,
                transitionEnd: s
            }
        } else return {
            target: e,
            transitionEnd: s
        }
    };

function Xl(t, e, n, s) {
    return zl(e) ? _l(t, e, n, s) : {
        target: e,
        transitionEnd: s
    }
}
const Yl = (t, e, n, s) => {
        const i = Wl(t, e, s);
        return e = i.target, s = i.transitionEnd, Xl(t, e, n, s)
    },
    He = {
        current: null
    },
    Ki = {
        current: !1
    };

function ql() {
    if (Ki.current = !0, !!ce)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => He.current = t.matches;
            t.addListener(e), e()
        } else He.current = !1
}

function Zl(t, e, n) {
    const {
        willChange: s
    } = e;
    for (const i in e) {
        const o = e[i],
            r = n[i];
        if (j(o)) t.addValue(i, o), re(s) && s.add(i);
        else if (j(r)) t.addValue(i, H(o, {
            owner: t
        })), re(s) && s.remove(i);
        else if (r !== o)
            if (t.hasValue(i)) {
                const a = t.getValue(i);
                !a.hasAnimated && a.set(o)
            } else {
                const a = t.getStaticValue(i);
                t.addValue(i, H(a !== void 0 ? a : o, {
                    owner: t
                }))
            }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e
}
const Ts = new WeakMap,
    _i = Object.keys(Ot),
    Jl = _i.length,
    bs = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Ql = Xe.length;
class tc {
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        visualState: o
    }, r = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => A.render(this.render, !1, !0);
        const {
            latestValues: a,
            renderState: l
        } = o;
        this.latestValues = a, this.baseTarget = { ...a
        }, this.initialValues = n.initial ? { ...a
        } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = r, this.isControllingVariants = fe(n), this.isVariantNode = Bs(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: c,
            ...u
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in u) {
            const h = u[f];
            a[f] !== void 0 && j(h) && (h.set(a[f], !1), re(c) && c.add(f))
        }
    }
    scrapeMotionValuesFromProps(e, n) {
        return {}
    }
    mount(e) {
        this.current = e, Ts.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Ki.current || ql(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : He.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Ts.delete(this.current), this.projection && this.projection.unmount(), G(this.notifyUpdate), G(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) this.features[e].unmount();
        this.current = null
    }
    bindToMotionValue(e, n) {
        const s = ft.has(e),
            i = n.on("change", r => {
                this.latestValues[e] = r, this.props.onUpdate && A.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
            i(), o()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    loadFeatures({
        children: e,
        ...n
    }, s, i, o) {
        let r, a;
        for (let l = 0; l < Jl; l++) {
            const c = _i[l],
                {
                    isEnabled: u,
                    Feature: f,
                    ProjectionNode: h,
                    MeasureLayout: d
                } = Ot[c];
            h && (r = h), u(n) && (!this.features[c] && f && (this.features[c] = new f(this)), d && (a = d))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && r) {
            this.projection = new r(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: l,
                layout: c,
                drag: u,
                dragConstraints: f,
                layoutScroll: h,
                layoutRoot: d
            } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: c,
                alwaysMeasureLayout: !!u || f && gt(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: o,
                layoutScroll: h,
                layoutRoot: d
            })
        }
        return a
    }
    updateFeatures() {
        for (const e in this.features) {
            const n = this.features[e];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    makeTargetAnimatable(e, n = !0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, n)
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < bs.length; s++) {
            const i = bs[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = e["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = Zl(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(e = !1) {
        if (e) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const s = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (s.initial = this.props.initial), s
        }
        const n = {};
        for (let s = 0; s < Ql; s++) {
            const i = Xe[s],
                o = this.props[i];
            (kt(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get()
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = H(n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e) {
        var n;
        return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options)
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {
            initial: s
        } = this.props, i = typeof s == "string" || typeof s == "object" ? (n = nn(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
        if (s && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, e);
        return o !== void 0 && !j(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new dn), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Xi extends tc {
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
    makeTargetAnimatableFromInstance({
        transition: e,
        transitionEnd: n,
        ...s
    }, {
        transformValues: i
    }, o) {
        let r = ya(s, e || {}, this);
        if (i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o) {
            ma(this, s, r);
            const a = Yl(this, s, r, n);
            n = a.transitionEnd, s = a.target
        }
        return {
            transition: e,
            transitionEnd: n,
            ...s
        }
    }
}

function ec(t) {
    return window.getComputedStyle(t)
}
class nc extends Xi {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(e, n) {
        if (ft.has(n)) {
            const s = ln(n);
            return s && s.default || 0
        } else {
            const s = ec(e),
                i = (js(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return ki(e, n)
    }
    build(e, n, s, i) {
        Ze(e, n, s, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n) {
        return en(e, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        j(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(e, n, s, i) {
        Hs(e, n, s, i)
    }
}
class sc extends Xi {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ft.has(n)) {
            const s = ln(n);
            return s && s.default || 0
        }
        return n = Gs.has(n) ? n : Ke(n), e.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return E()
    }
    scrapeMotionValuesFromProps(e, n) {
        return Ks(e, n)
    }
    build(e, n, s, i) {
        Qe(e, n, s, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, s, i) {
        $s(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = tn(e.tagName), super.mount(e)
    }
}
const ic = (t, e) => qe(t) ? new sc(e, {
        enableHardwareAcceleration: !1
    }) : new nc(e, {
        enableHardwareAcceleration: !0
    }),
    rc = {
        layout: {
            ProjectionNode: Gi,
            MeasureLayout: ji
        }
    },
    oc = { ...Ea,
        ...Jr,
        ...jl,
        ...rc
    },
    _c = ar((t, e) => Ur(t, e, oc, ic));

function Yi() {
    const t = y.useRef(!1);
    return jt(() => (t.current = !0, () => {
        t.current = !1
    }), []), t
}

function ac() {
    const t = Yi(),
        [e, n] = y.useState(0),
        s = y.useCallback(() => {
            t.current && n(e + 1)
        }, [e]);
    return [y.useCallback(() => A.postRender(s), [s]), e]
}
class lc extends y.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function cc({
    children: t,
    isPresent: e
}) {
    const n = y.useId(),
        s = y.useRef(null),
        i = y.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return y.useInsertionEffect(() => {
        const {
            width: o,
            height: r,
            top: a,
            left: l
        } = i.current;
        if (e || !s.current || !o || !r) return;
        s.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [e]), y.createElement(lc, {
        isPresent: e,
        childRef: s,
        sizeRef: i
    }, y.cloneElement(t, {
        ref: s
    }))
}
const De = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: s,
    custom: i,
    presenceAffectsLayout: o,
    mode: r
}) => {
    const a = Nt(uc),
        l = y.useId(),
        c = y.useMemo(() => ({
            id: l,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: u => {
                a.set(u, !0);
                for (const f of a.values())
                    if (!f) return;
                s && s()
            },
            register: u => (a.set(u, !1), () => a.delete(u))
        }), o ? void 0 : [n]);
    return y.useMemo(() => {
        a.forEach((u, f) => a.set(f, !1))
    }, [n]), y.useEffect(() => {
        !n && !a.size && s && s()
    }, [n]), r === "popLayout" && (t = y.createElement(cc, {
        isPresent: n
    }, t)), y.createElement(le.Provider, {
        value: c
    }, t)
};

function uc() {
    return new Map
}

function fc(t) {
    return y.useEffect(() => () => t(), [])
}
const lt = t => t.key || "";

function hc(t, e) {
    t.forEach(n => {
        const s = lt(n);
        e.set(s, n)
    })
}

function dc(t) {
    const e = [];
    return y.Children.forEach(t, n => {
        y.isValidElement(n) && e.push(n)
    }), e
}
const Xc = ({
    children: t,
    custom: e,
    initial: n = !0,
    onExitComplete: s,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: r = "sync"
}) => {
    const a = y.useContext(Ye).forceRender || ac()[0],
        l = Yi(),
        c = dc(t);
    let u = c;
    const f = y.useRef(new Map).current,
        h = y.useRef(u),
        d = y.useRef(new Map).current,
        p = y.useRef(!0);
    if (jt(() => {
            p.current = !1, hc(c, d), h.current = u
        }), fc(() => {
            p.current = !0, d.clear(), f.clear()
        }), p.current) return y.createElement(y.Fragment, null, u.map(v => y.createElement(De, {
        key: lt(v),
        isPresent: !0,
        initial: n ? void 0 : !1,
        presenceAffectsLayout: o,
        mode: r
    }, v)));
    u = [...u];
    const m = h.current.map(lt),
        x = c.map(lt),
        T = m.length;
    for (let v = 0; v < T; v++) {
        const g = m[v];
        x.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0)
    }
    return r === "wait" && f.size && (u = []), f.forEach((v, g) => {
        if (x.indexOf(g) !== -1) return;
        const P = d.get(g);
        if (!P) return;
        const V = m.indexOf(g);
        let w = v;
        if (!w) {
            const M = () => {
                f.delete(g);
                const S = Array.from(d.keys()).filter(C => !x.includes(C));
                if (S.forEach(C => d.delete(C)), h.current = c.filter(C => {
                        const U = lt(C);
                        return U === g || S.includes(U)
                    }), !f.size) {
                    if (l.current === !1) return;
                    a(), s && s()
                }
            };
            w = y.createElement(De, {
                key: lt(P),
                isPresent: !1,
                onExitComplete: M,
                custom: e,
                presenceAffectsLayout: o,
                mode: r
            }, P), f.set(g, w)
        }
        u.splice(V, 0, w)
    }), u = u.map(v => {
        const g = v.key;
        return f.has(g) ? v : y.createElement(De, {
            key: lt(v),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: r
        }, v)
    }), y.createElement(y.Fragment, null, f.size ? u : u.map(v => y.cloneElement(v)))
};

function pc(t) {
    const e = Nt(() => H(t)),
        {
            isStatic: n
        } = y.useContext($e);
    if (n) {
        const [, s] = y.useState(t);
        y.useEffect(() => e.on("change", s), [])
    }
    return e
}
const mc = t => t && typeof t == "object" && t.mix,
    gc = t => mc(t) ? t.mix : void 0;

function yc(...t) {
    const e = !Array.isArray(t[0]),
        n = e ? 0 : -1,
        s = t[0 + n],
        i = t[1 + n],
        o = t[2 + n],
        r = t[3 + n],
        a = me(i, o, {
            mixer: gc(o[0]),
            ...r
        });
    return e ? a(s) : a
}

function qi(t, e) {
    const n = pc(e()),
        s = () => n.set(e());
    return s(), jt(() => {
        const i = () => A.update(s, !1, !0),
            o = t.map(r => r.on("change", i));
        return () => {
            o.forEach(r => r()), G(s)
        }
    }), n
}

function vc(t) {
    Lt.current = [], t();
    const e = qi(Lt.current, t);
    return Lt.current = void 0, e
}

function Yc(t, e, n, s) {
    if (typeof t == "function") return vc(t);
    const i = typeof e == "function" ? e : yc(e, n, s);
    return Array.isArray(t) ? Vs(t, i) : Vs([t], ([o]) => i(o))
}

function Vs(t, e) {
    const n = Nt(() => []);
    return qi(t, () => {
        n.length = 0;
        const s = t.length;
        for (let i = 0; i < s; i++) n[i] = t[i].get();
        return e(n)
    })
}

function xc(t, e, n) {
    return typeof t == "string" ? t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
}
const qt = new WeakMap;
let J;

function Pc(t, e) {
    if (e) {
        const {
            inlineSize: n,
            blockSize: s
        } = e[0];
        return {
            width: n,
            height: s
        }
    } else return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
        width: t.offsetWidth,
        height: t.offsetHeight
    }
}

function Tc({
    target: t,
    contentRect: e,
    borderBoxSize: n
}) {
    var s;
    (s = qt.get(t)) === null || s === void 0 || s.forEach(i => {
        i({
            target: t,
            contentSize: e,
            get size() {
                return Pc(t, n)
            }
        })
    })
}

function bc(t) {
    t.forEach(Tc)
}

function Vc() {
    typeof ResizeObserver > "u" || (J = new ResizeObserver(bc))
}

function Sc(t, e) {
    J || Vc();
    const n = xc(t);
    return n.forEach(s => {
        let i = qt.get(s);
        i || (i = new Set, qt.set(s, i)), i.add(e), J == null || J.observe(s)
    }), () => {
        n.forEach(s => {
            const i = qt.get(s);
            i == null || i.delete(e), i != null && i.size || J == null || J.unobserve(s)
        })
    }
}
const Zt = new Set;
let Ft;

function Ac() {
    Ft = () => {
        const t = {
                width: window.innerWidth,
                height: window.innerHeight
            },
            e = {
                target: window,
                size: t,
                contentSize: t
            };
        Zt.forEach(n => n(e))
    }, window.addEventListener("resize", Ft)
}

function Cc(t) {
    return Zt.add(t), Ft || Ac(), () => {
        Zt.delete(t), !Zt.size && Ft && (Ft = void 0)
    }
}

function wc(t, e) {
    return typeof t == "function" ? Cc(t) : Sc(t, e)
}
const Mc = 50,
    Ss = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    Dc = () => ({
        time: 0,
        x: Ss(),
        y: Ss()
    }),
    Rc = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function As(t, e, n, s) {
    const i = n[e],
        {
            length: o,
            position: r
        } = Rc[e],
        a = i.current,
        l = n.time;
    i.current = t["scroll" + r], i.scrollLength = t["scroll" + o] - t["client" + o], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = Pt(0, i.scrollLength, i.current);
    const c = s - l;
    i.velocity = c > Mc ? 0 : an(i.current - a, c)
}

function Lc(t, e, n) {
    As(t, "x", e, n), As(t, "y", e, n), e.time = n
}

function Ec(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let s = t;
    for (; s && s !== e;)
        if (s instanceof HTMLElement) n.x += s.offsetLeft, n.y += s.offsetTop, s = s.offsetParent;
        else if (s.tagName === "svg") {
        const i = s.getBoundingClientRect();
        s = s.parentElement;
        const o = s.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (s instanceof SVGGraphicsElement) {
        const {
            x: i,
            y: o
        } = s.getBBox();
        n.x += i, n.y += o;
        let r = null,
            a = s.parentNode;
        for (; !r;) a.tagName === "svg" && (r = a), a = s.parentNode;
        s = r
    } else break;
    return n
}
const Bc = {
        Enter: [
            [0, 1],
            [1, 1]
        ],
        Exit: [
            [0, 0],
            [1, 0]
        ],
        Any: [
            [1, 0],
            [0, 1]
        ],
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    Ge = {
        start: 0,
        center: .5,
        end: 1
    };

function Cs(t, e, n = 0) {
    let s = 0;
    if (Ge[t] !== void 0 && (t = Ge[t]), typeof t == "string") {
        const i = parseFloat(t);
        t.endsWith("px") ? s = i : t.endsWith("%") ? t = i / 100 : t.endsWith("vw") ? s = i / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? s = i / 100 * document.documentElement.clientHeight : t = i
    }
    return typeof t == "number" && (s = e * t), n + s
}
const Fc = [0, 0];

function kc(t, e, n, s) {
    let i = Array.isArray(t) ? t : Fc,
        o = 0,
        r = 0;
    return typeof t == "number" ? i = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? i = t.split(" ") : i = [t, Ge[t] ? t : "0"]), o = Cs(i[0], n, s), r = Cs(i[1], e), o - r
}
const Oc = {
    x: 0,
    y: 0
};

function jc(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function Ic(t, e, n) {
    let {
        offset: s = Bc.All
    } = n;
    const {
        target: i = t,
        axis: o = "y"
    } = n, r = o === "y" ? "height" : "width", a = i !== t ? Ec(i, t) : Oc, l = i === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : jc(i), c = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[o].offset.length = 0;
    let u = !e[o].interpolate;
    const f = s.length;
    for (let h = 0; h < f; h++) {
        const d = kc(s[h], c[r], l[r], a[o]);
        !u && d !== e[o].interpolatorOffsets[h] && (u = !0), e[o].offset[h] = d
    }
    u && (e[o].interpolate = me(e[o].offset, Ti(s)), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = e[o].interpolate(e[o].current)
}

function Uc(t, e = t, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
        let s = e;
        for (; s && s !== t;) n.x.targetOffset += s.offsetLeft, n.y.targetOffset += s.offsetTop, s = s.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
}

function Wc(t, e, n, s = {}) {
    return {
        measure: () => Uc(t, s.target, n),
        update: i => {
            Lc(t, n, i), (s.offset || s.target) && Ic(t, n, s)
        },
        notify: () => e(n)
    }
}
const wt = new WeakMap,
    ws = new WeakMap,
    Re = new WeakMap,
    Ms = t => t === document.documentElement ? window : t;

function Nc(t, {
    container: e = document.documentElement,
    ...n
} = {}) {
    let s = Re.get(e);
    s || (s = new Set, Re.set(e, s));
    const i = Dc(),
        o = Wc(e, t, i, n);
    if (s.add(o), !wt.has(e)) {
        const a = () => {
                for (const h of s) h.measure()
            },
            l = () => {
                for (const h of s) h.update(F.timestamp)
            },
            c = () => {
                for (const h of s) h.notify()
            },
            u = () => {
                A.read(a, !1, !0), A.read(l, !1, !0), A.update(c, !1, !0)
            };
        wt.set(e, u);
        const f = Ms(e);
        window.addEventListener("resize", u, {
            passive: !0
        }), e !== document.documentElement && ws.set(e, wc(e, u)), f.addEventListener("scroll", u, {
            passive: !0
        })
    }
    const r = wt.get(e);
    return A.read(r, !1, !0), () => {
        var a;
        G(r);
        const l = Re.get(e);
        if (!l || (l.delete(o), l.size)) return;
        const c = wt.get(e);
        wt.delete(e), c && (Ms(e).removeEventListener("scroll", c), (a = ws.get(e)) === null || a === void 0 || a(), window.removeEventListener("resize", c))
    }
}

function Ds(t, e) {
    eo(!!(!e || e.current))
}
const zc = () => ({
    scrollX: H(0),
    scrollY: H(0),
    scrollXProgress: H(0),
    scrollYProgress: H(0)
});

function qc({
    container: t,
    target: e,
    layoutEffect: n = !0,
    ...s
} = {}) {
    const i = Nt(zc);
    return (n ? jt : y.useEffect)(() => (Ds("target", e), Ds("container", t), Nc(({
        x: r,
        y: a
    }) => {
        i.scrollX.set(r.current), i.scrollXProgress.set(r.progress), i.scrollY.set(a.current), i.scrollYProgress.set(a.progress)
    }, { ...s,
        container: (t == null ? void 0 : t.current) || void 0,
        target: (e == null ? void 0 : e.current) || void 0
    })), [t, e, JSON.stringify(s.offset)]), i
}
const Hc = (t, e, n) => {
    const s = e - t;
    return ((n - t) % s + s) % s + t
};

function Zc(...t) {
    const e = y.useRef(0),
        [n, s] = y.useState(t[e.current]),
        i = y.useCallback(o => {
            e.current = typeof o != "number" ? Hc(0, t.length, e.current + 1) : o, s(t[e.current])
        }, [t.length, ...t]);
    return [n, i]
}
export {
    Xc as A, qc as a, Yc as b, _c as m, Zc as u
};
//# sourceMappingURL=framer-motion-Drxu5C2K.js.map