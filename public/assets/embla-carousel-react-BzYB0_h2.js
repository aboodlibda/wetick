import {
    r as _
} from "./vendor-DR5RWKqR.js";

function Xt(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function Ct(t) {
    return Xt(t) || Array.isArray(t)
}

function Yt() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function Lt(t, n) {
    const r = Object.keys(t),
        s = Object.keys(n);
    if (r.length !== s.length) return !1;
    const i = JSON.stringify(Object.keys(t.breakpoints || {})),
        e = JSON.stringify(Object.keys(n.breakpoints || {}));
    return i !== e ? !1 : r.every(o => {
        const u = t[o],
            c = n[o];
        return typeof u == "function" ? `${u}` == `${c}` : !Ct(u) || !Ct(c) ? u === c : Lt(u, c)
    })
}

function kt(t) {
    return t.concat().sort((n, r) => n.name > r.name ? 1 : -1).map(n => n.options)
}

function _t(t, n) {
    if (t.length !== n.length) return !1;
    const r = kt(t),
        s = kt(n);
    return r.every((i, e) => {
        const o = s[e];
        return Lt(i, o)
    })
}

function vt(t) {
    return typeof t == "number"
}

function xt(t) {
    return typeof t == "string"
}

function It(t) {
    return typeof t == "boolean"
}

function Nt(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function D(t) {
    return Math.abs(t)
}

function Tt(t) {
    return Math.sign(t)
}

function ct(t, n) {
    return D(t - n)
}

function Zt(t, n) {
    if (t === 0 || n === 0 || D(t) <= D(n)) return 0;
    const r = ct(D(t), D(n));
    return D(r / t)
}

function ut(t) {
    return ft(t).map(Number)
}

function G(t) {
    return t[lt(t)]
}

function lt(t) {
    return Math.max(0, t.length - 1)
}

function Ot(t, n) {
    return n === lt(t)
}

function Vt(t, n = 0) {
    return Array.from(Array(t), (r, s) => n + s)
}

function ft(t) {
    return Object.keys(t)
}

function zt(t, n) {
    return [t, n].reduce((r, s) => (ft(s).forEach(i => {
        const e = r[i],
            o = s[i],
            u = Nt(e) && Nt(o);
        r[i] = u ? zt(e, o) : o
    }), r), {})
}

function Et(t, n) {
    return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent
}

function Wt(t, n) {
    const r = {
        start: s,
        center: i,
        end: e
    };

    function s() {
        return 0
    }

    function i(c) {
        return e(c) / 2
    }

    function e(c) {
        return n - c
    }

    function o(c, f) {
        return xt(t) ? r[t](c) : t(n, c, f)
    }
    return {
        measure: o
    }
}

function at() {
    let t = [];

    function n(i, e, o, u = {
        passive: !0
    }) {
        let c;
        if ("addEventListener" in i) i.addEventListener(e, o, u), c = () => i.removeEventListener(e, o, u);
        else {
            const f = i;
            f.addListener(o), c = () => f.removeListener(o)
        }
        return t.push(c), s
    }

    function r() {
        t = t.filter(i => i())
    }
    const s = {
        add: n,
        clear: r
    };
    return s
}

function tn(t, n, r, s) {
    const i = at(),
        e = 1e3 / 60;
    let o = null,
        u = 0,
        c = 0;

    function f() {
        i.add(t, "visibilitychange", () => {
            t.hidden && d()
        })
    }

    function h() {
        x(), i.clear()
    }

    function l(S) {
        if (!c) return;
        o || (o = S);
        const a = S - o;
        for (o = S, u += a; u >= e;) r(), u -= e;
        const g = D(u / e);
        s(g), c && n.requestAnimationFrame(l)
    }

    function m() {
        c || (c = n.requestAnimationFrame(l))
    }

    function x() {
        n.cancelAnimationFrame(c), o = null, u = 0, c = 0
    }

    function d() {
        o = null, u = 0
    }
    return {
        init: f,
        destroy: h,
        start: m,
        stop: x,
        update: r,
        render: s
    }
}

function nn(t, n) {
    const r = n === "rtl",
        s = t === "y",
        i = s ? "y" : "x",
        e = s ? "x" : "y",
        o = !s && r ? -1 : 1,
        u = h(),
        c = l();

    function f(d) {
        const {
            height: p,
            width: S
        } = d;
        return s ? p : S
    }

    function h() {
        return s ? "top" : r ? "right" : "left"
    }

    function l() {
        return s ? "bottom" : r ? "left" : "right"
    }

    function m(d) {
        return d * o
    }
    return {
        scroll: i,
        cross: e,
        startEdge: u,
        endEdge: c,
        measureSize: f,
        direction: m
    }
}

function et(t = 0, n = 0) {
    const r = D(t - n);

    function s(f) {
        return f < t
    }

    function i(f) {
        return f > n
    }

    function e(f) {
        return s(f) || i(f)
    }

    function o(f) {
        return e(f) ? s(f) ? t : n : f
    }

    function u(f) {
        return r ? f - r * Math.ceil((f - n) / r) : f
    }
    return {
        length: r,
        max: n,
        min: t,
        constrain: o,
        reachedAny: e,
        reachedMax: i,
        reachedMin: s,
        removeOffset: u
    }
}

function Bt(t, n, r) {
    const {
        constrain: s
    } = et(0, t), i = t + 1;
    let e = o(n);

    function o(m) {
        return r ? D((i + m) % i) : s(m)
    }

    function u() {
        return e
    }

    function c(m) {
        return e = o(m), l
    }

    function f(m) {
        return h().set(u() + m)
    }

    function h() {
        return Bt(t, u(), r)
    }
    const l = {
        get: u,
        set: c,
        add: f,
        clone: h
    };
    return l
}

function en(t, n, r, s, i, e, o, u, c, f, h, l, m, x, d, p, S, a, g) {
    const {
        cross: b,
        direction: L
    } = t, I = ["INPUT", "SELECT", "TEXTAREA"], M = {
        passive: !1
    }, E = at(), v = at(), O = et(50, 225).constrain(x.measure(20)), A = {
        mouse: 300,
        touch: 400
    }, w = {
        mouse: 500,
        touch: 600
    }, N = d ? 43 : 25;
    let X = !1,
        z = 0,
        $ = 0,
        Z = !1,
        U = !1,
        Y = !1,
        K = !1;

    function W(y) {
        if (!g) return;

        function T(C) {
            (It(g) || g(y, C)) && V(C)
        }
        const F = n;
        E.add(F, "dragstart", C => C.preventDefault(), M).add(F, "touchmove", () => {}, M).add(F, "touchend", () => {}).add(F, "touchstart", T).add(F, "mousedown", T).add(F, "touchcancel", k).add(F, "contextmenu", k).add(F, "click", rt, !0)
    }

    function Q() {
        E.clear(), v.clear()
    }

    function ot() {
        const y = K ? r : n;
        v.add(y, "touchmove", R, M).add(y, "touchend", k).add(y, "mousemove", R, M).add(y, "mouseup", k)
    }

    function J(y) {
        const T = y.nodeName || "";
        return I.includes(T)
    }

    function st() {
        return (d ? w : A)[K ? "mouse" : "touch"]
    }

    function it(y, T) {
        const F = l.add(Tt(y) * -1),
            C = h.byDistance(y, !d).distance;
        return d || D(y) < O ? C : S && T ? C * .5 : h.byIndex(F.get(), 0).distance
    }

    function V(y) {
        const T = Et(y, s);
        K = T, Y = d && T && !y.buttons && X, X = ct(i.get(), o.get()) >= 2, !(T && y.button !== 0) && (J(y.target) || (Z = !0, e.pointerDown(y), f.useFriction(0).useDuration(0), i.set(o), ot(), z = e.readPoint(y), $ = e.readPoint(y, b), m.emit("pointerDown")))
    }

    function R(y) {
        if (!Et(y, s) && y.touches.length >= 2) return k(y);
        const F = e.readPoint(y),
            C = e.readPoint(y, b),
            q = ct(F, z),
            j = ct(C, $);
        if (!U && !K && (!y.cancelable || (U = q > j, !U))) return k(y);
        const H = e.pointerMove(y);
        q > p && (Y = !0), f.useFriction(.3).useDuration(.75), u.start(), i.add(L(H)), y.preventDefault()
    }

    function k(y) {
        const F = h.byDistance(0, !1).index !== l.get(),
            C = e.pointerUp(y) * st(),
            q = it(L(C), F),
            j = Zt(C, q),
            H = N - 10 * j,
            tt = a + j / 50;
        U = !1, Z = !1, v.clear(), f.useDuration(H).useFriction(tt), c.distance(q, !d), K = !1, m.emit("pointerUp")
    }

    function rt(y) {
        Y && (y.stopPropagation(), y.preventDefault(), Y = !1)
    }

    function B() {
        return Z
    }
    return {
        init: W,
        destroy: Q,
        pointerDown: B
    }
}

function on(t, n) {
    let s, i;

    function e(l) {
        return l.timeStamp
    }

    function o(l, m) {
        const d = `client${(m||t.scroll)==="x"?"X":"Y"}`;
        return (Et(l, n) ? l : l.touches[0])[d]
    }

    function u(l) {
        return s = l, i = l, o(l)
    }

    function c(l) {
        const m = o(l) - o(i),
            x = e(l) - e(s) > 170;
        return i = l, x && (s = l), m
    }

    function f(l) {
        if (!s || !i) return 0;
        const m = o(i) - o(s),
            x = e(l) - e(s),
            d = e(l) - e(i) > 170,
            p = m / x;
        return x && !d && D(p) > .1 ? p : 0
    }
    return {
        pointerDown: u,
        pointerMove: c,
        pointerUp: f,
        readPoint: o
    }
}

function rn() {
    function t(r) {
        const {
            offsetTop: s,
            offsetLeft: i,
            offsetWidth: e,
            offsetHeight: o
        } = r;
        return {
            top: s,
            right: i + e,
            bottom: s + o,
            left: i,
            width: e,
            height: o
        }
    }
    return {
        measure: t
    }
}

function sn(t) {
    function n(s) {
        return t * (s / 100)
    }
    return {
        measure: n
    }
}

function cn(t, n, r, s, i, e, o) {
    let u, c, f = [],
        h = !1;

    function l(p) {
        return i.measureSize(o.measure(p))
    }

    function m(p) {
        if (!e) return;
        c = l(t), f = s.map(l);

        function S(g) {
            for (const b of g) {
                const L = b.target === t,
                    I = s.indexOf(b.target),
                    M = L ? c : f[I],
                    E = l(L ? t : s[I]);
                if (D(E - M) >= .5) {
                    r.requestAnimationFrame(() => {
                        p.reInit(), n.emit("resize")
                    });
                    break
                }
            }
        }
        u = new ResizeObserver(g => {
            h || (It(e) || e(p, g)) && S(g)
        }), [t].concat(s).forEach(g => u.observe(g))
    }

    function x() {
        u && u.disconnect(), h = !0
    }
    return {
        init: m,
        destroy: x
    }
}

function un(t, n, r, s, i) {
    let e = 0,
        o = 0,
        u = s,
        c = i,
        f = t.get(),
        h = 0;

    function l() {
        const I = r.get() - t.get(),
            M = !u;
        let E = 0;
        return M ? (e = 0, t.set(r), E = I) : (e += I / u, e *= c, f += e, t.add(e), E = f - h), o = Tt(E), h = f, L
    }

    function m() {
        const I = r.get() - n.get();
        return D(I) < .001
    }

    function x() {
        return u
    }

    function d() {
        return o
    }

    function p() {
        return e
    }

    function S() {
        return g(s)
    }

    function a() {
        return b(i)
    }

    function g(I) {
        return u = I, L
    }

    function b(I) {
        return c = I, L
    }
    const L = {
        direction: d,
        duration: x,
        velocity: p,
        seek: l,
        settled: m,
        useBaseFriction: a,
        useBaseDuration: S,
        useFriction: b,
        useDuration: g
    };
    return L
}

function fn(t, n, r, s, i) {
    const e = i.measure(10),
        o = i.measure(50),
        u = et(.1, .99);
    let c = !1;

    function f() {
        return !(c || !t.reachedAny(r.get()) || !t.reachedAny(n.get()))
    }

    function h(x) {
        if (!f()) return;
        const d = t.reachedMin(n.get()) ? "min" : "max",
            p = D(t[d] - n.get()),
            S = r.get() - n.get(),
            a = u.constrain(p / o);
        r.subtract(S * a), !x && D(S) < e && (r.set(t.constrain(r.get())), s.useDuration(25).useBaseFriction())
    }

    function l(x) {
        c = !x
    }
    return {
        constrain: h,
        toggleActive: l
    }
}

function an(t, n, r, s, i) {
    const e = et(-n + t, 0),
        o = l(),
        u = h(),
        c = m();

    function f(d, p) {
        return ct(d, p) < 1
    }

    function h() {
        const d = o[0],
            p = G(o),
            S = o.lastIndexOf(d),
            a = o.indexOf(p) + 1;
        return et(S, a)
    }

    function l() {
        return r.map((d, p) => {
            const {
                min: S,
                max: a
            } = e, g = e.constrain(d), b = !p, L = Ot(r, p);
            return b ? a : L || f(S, g) ? S : f(a, g) ? a : g
        }).map(d => parseFloat(d.toFixed(3)))
    }

    function m() {
        if (n <= t + i) return [e.max];
        if (s === "keepSnaps") return o;
        const {
            min: d,
            max: p
        } = u;
        return o.slice(d, p)
    }
    return {
        snapsContained: c,
        scrollContainLimit: u
    }
}

function ln(t, n, r) {
    const s = n[0],
        i = r ? s - t : G(n);
    return {
        limit: et(i, s)
    }
}

function dn(t, n, r, s) {
    const e = n.min + .1,
        o = n.max + .1,
        {
            reachedMin: u,
            reachedMax: c
        } = et(e, o);

    function f(m) {
        return m === 1 ? c(r.get()) : m === -1 ? u(r.get()) : !1
    }

    function h(m) {
        if (!f(m)) return;
        const x = t * (m * -1);
        s.forEach(d => d.add(x))
    }
    return {
        loop: h
    }
}

function pn(t) {
    const {
        max: n,
        length: r
    } = t;

    function s(e) {
        const o = e - n;
        return r ? o / -r : 0
    }
    return {
        get: s
    }
}

function mn(t, n, r, s, i) {
    const {
        startEdge: e,
        endEdge: o
    } = t, {
        groupSlides: u
    } = i, c = l().map(n.measure), f = m(), h = x();

    function l() {
        return u(s).map(p => G(p)[o] - p[0][e]).map(D)
    }

    function m() {
        return s.map(p => r[e] - p[e]).map(p => -D(p))
    }

    function x() {
        return u(f).map(p => p[0]).map((p, S) => p + c[S])
    }
    return {
        snaps: f,
        snapsAligned: h
    }
}

function gn(t, n, r, s, i, e) {
    const {
        groupSlides: o
    } = i, {
        min: u,
        max: c
    } = s, f = h();

    function h() {
        const m = o(e),
            x = !t || n === "keepSnaps";
        return r.length === 1 ? [e] : x ? m : m.slice(u, c).map((d, p, S) => {
            const a = !p,
                g = Ot(S, p);
            if (a) {
                const b = G(S[0]) + 1;
                return Vt(b)
            }
            if (g) {
                const b = lt(e) - G(S)[0] + 1;
                return Vt(b, G(S)[0])
            }
            return d
        })
    }
    return {
        slideRegistry: f
    }
}

function hn(t, n, r, s, i) {
    const {
        reachedAny: e,
        removeOffset: o,
        constrain: u
    } = s;

    function c(d) {
        return d.concat().sort((p, S) => D(p) - D(S))[0]
    }

    function f(d) {
        const p = t ? o(d) : u(d),
            S = n.map((g, b) => ({
                diff: h(g - p, 0),
                index: b
            })).sort((g, b) => D(g.diff) - D(b.diff)),
            {
                index: a
            } = S[0];
        return {
            index: a,
            distance: p
        }
    }

    function h(d, p) {
        const S = [d, d + r, d - r];
        if (!t) return d;
        if (!p) return c(S);
        const a = S.filter(g => Tt(g) === p);
        return a.length ? c(a) : G(S) - r
    }

    function l(d, p) {
        const S = n[d] - i.get(),
            a = h(S, p);
        return {
            index: d,
            distance: a
        }
    }

    function m(d, p) {
        const S = i.get() + d,
            {
                index: a,
                distance: g
            } = f(S),
            b = !t && e(S);
        if (!p || b) return {
            index: a,
            distance: d
        };
        const L = n[a] - g,
            I = d + h(L, 0);
        return {
            index: a,
            distance: I
        }
    }
    return {
        byDistance: m,
        byIndex: l,
        shortcut: h
    }
}

function Sn(t, n, r, s, i, e, o) {
    function u(l) {
        const m = l.distance,
            x = l.index !== n.get();
        e.add(m), m && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())), x && (r.set(n.get()), n.set(l.index), o.emit("select"))
    }

    function c(l, m) {
        const x = i.byDistance(l, m);
        u(x)
    }

    function f(l, m) {
        const x = n.clone().set(l),
            d = i.byIndex(x.get(), m);
        u(d)
    }
    return {
        distance: c,
        index: f
    }
}

function yn(t, n, r, s, i, e, o) {
    let u = 0;

    function c() {
        e.add(document, "keydown", f, !1), n.forEach(h)
    }

    function f(m) {
        m.code === "Tab" && (u = new Date().getTime())
    }

    function h(m) {
        const x = () => {
            if (new Date().getTime() - u > 10) return;
            t.scrollLeft = 0;
            const S = n.indexOf(m),
                a = r.findIndex(g => g.includes(S));
            vt(a) && (i.useDuration(0), s.index(a, 0), o.emit("slideFocus"))
        };
        e.add(m, "focus", x, {
            passive: !0,
            capture: !0
        })
    }
    return {
        init: c
    }
}

function pt(t) {
    let n = t;

    function r() {
        return n
    }

    function s(c) {
        n = o(c)
    }

    function i(c) {
        n += o(c)
    }

    function e(c) {
        n -= o(c)
    }

    function o(c) {
        return vt(c) ? c : c.get()
    }
    return {
        get: r,
        set: s,
        add: i,
        subtract: e
    }
}

function jt(t, n) {
    const r = t.scroll === "x" ? e : o,
        s = n.style;
    let i = !1;

    function e(l) {
        return `translate3d(${l}px,0px,0px)`
    }

    function o(l) {
        return `translate3d(0px,${l}px,0px)`
    }

    function u(l) {
        i || (s.transform = r(t.direction(l)))
    }

    function c(l) {
        i = !l
    }

    function f() {
        i || (s.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
    }
    return {
        clear: f,
        to: u,
        toggleActive: c
    }
}

function bn(t, n, r, s, i, e, o, u, c) {
    const h = ut(i),
        l = ut(i).reverse(),
        m = a().concat(g());

    function x(E, v) {
        return E.reduce((O, A) => O - i[A], v)
    }

    function d(E, v) {
        return E.reduce((O, A) => x(O, v) > 0 ? O.concat([A]) : O, [])
    }

    function p(E) {
        return e.map((v, O) => ({
            start: v - s[O] + .5 + E,
            end: v + n - .5 + E
        }))
    }

    function S(E, v, O) {
        const A = p(v);
        return E.map(w => {
            const N = O ? 0 : -r,
                X = O ? r : 0,
                z = O ? "end" : "start",
                $ = A[w][z];
            return {
                index: w,
                loopPoint: $,
                slideLocation: pt(-1),
                translate: jt(t, c[w]),
                target: () => u.get() > $ ? N : X
            }
        })
    }

    function a() {
        const E = o[0],
            v = d(l, E);
        return S(v, r, !1)
    }

    function g() {
        const E = n - o[0] - 1,
            v = d(h, E);
        return S(v, -r, !0)
    }

    function b() {
        return m.every(({
            index: E
        }) => {
            const v = h.filter(O => O !== E);
            return x(v, n) <= .1
        })
    }

    function L() {
        m.forEach(E => {
            const {
                target: v,
                translate: O,
                slideLocation: A
            } = E, w = v();
            w !== A.get() && (O.to(w), A.set(w))
        })
    }

    function I() {
        m.forEach(E => E.translate.clear())
    }
    return {
        canLoop: b,
        clear: I,
        loop: L,
        loopPoints: m
    }
}

function xn(t, n, r) {
    let s, i = !1;

    function e(c) {
        if (!r) return;

        function f(h) {
            for (const l of h)
                if (l.type === "childList") {
                    c.reInit(), n.emit("slidesChanged");
                    break
                }
        }
        s = new MutationObserver(h => {
            i || (It(r) || r(c, h)) && f(h)
        }), s.observe(t, {
            childList: !0
        })
    }

    function o() {
        s && s.disconnect(), i = !0
    }
    return {
        init: e,
        destroy: o
    }
}

function En(t, n, r, s) {
    const i = {};
    let e = null,
        o = null,
        u, c = !1;

    function f() {
        u = new IntersectionObserver(d => {
            c || (d.forEach(p => {
                const S = n.indexOf(p.target);
                i[S] = p
            }), e = null, o = null, r.emit("slidesInView"))
        }, {
            root: t.parentElement,
            threshold: s
        }), n.forEach(d => u.observe(d))
    }

    function h() {
        u && u.disconnect(), c = !0
    }

    function l(d) {
        return ft(i).reduce((p, S) => {
            const a = parseInt(S),
                {
                    isIntersecting: g
                } = i[a];
            return (d && g || !d && !g) && p.push(a), p
        }, [])
    }

    function m(d = !0) {
        if (d && e) return e;
        if (!d && o) return o;
        const p = l(d);
        return d && (e = p), d || (o = p), p
    }
    return {
        init: f,
        destroy: h,
        get: m
    }
}

function Ln(t, n, r, s, i, e) {
    const {
        measureSize: o,
        startEdge: u,
        endEdge: c
    } = t, f = r[0] && i, h = d(), l = p(), m = r.map(o), x = S();

    function d() {
        if (!f) return 0;
        const g = r[0];
        return D(n[u] - g[u])
    }

    function p() {
        if (!f) return 0;
        const g = e.getComputedStyle(G(s));
        return parseFloat(g.getPropertyValue(`margin-${c}`))
    }

    function S() {
        return r.map((g, b, L) => {
            const I = !b,
                M = Ot(L, b);
            return I ? m[b] + h : M ? m[b] + l : L[b + 1][u] - g[u]
        }).map(D)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: x,
        startGap: h,
        endGap: l
    }
}

function vn(t, n, r, s, i, e, o, u, c) {
    const {
        startEdge: f,
        endEdge: h,
        direction: l
    } = t, m = vt(r);

    function x(a, g) {
        return ut(a).filter(b => b % g === 0).map(b => a.slice(b, b + g))
    }

    function d(a) {
        return a.length ? ut(a).reduce((g, b, L) => {
            const I = G(g) || 0,
                M = I === 0,
                E = b === lt(a),
                v = i[f] - e[I][f],
                O = i[f] - e[b][h],
                A = !s && M ? l(o) : 0,
                w = !s && E ? l(u) : 0,
                N = D(O - w - (v + A));
            return L && N > n + c && g.push(b), E && g.push(a.length), g
        }, []).map((g, b, L) => {
            const I = Math.max(L[b - 1] || 0);
            return a.slice(I, g)
        }) : []
    }

    function p(a) {
        return m ? x(a, r) : d(a)
    }
    return {
        groupSlides: p
    }
}

function In(t, n, r, s, i, e, o) {
    const {
        align: u,
        axis: c,
        direction: f,
        startIndex: h,
        loop: l,
        duration: m,
        dragFree: x,
        dragThreshold: d,
        inViewThreshold: p,
        slidesToScroll: S,
        skipSnaps: a,
        containScroll: g,
        watchResize: b,
        watchSlides: L,
        watchDrag: I
    } = e, M = 2, E = rn(), v = E.measure(n), O = r.map(E.measure), A = nn(c, f), w = A.measureSize(v), N = sn(w), X = Wt(u, w), z = !l && !!g, $ = l || !!g, {
        slideSizes: Z,
        slideSizesWithGaps: U,
        startGap: Y,
        endGap: K
    } = Ln(A, v, O, r, $, i), W = vn(A, w, S, l, v, O, Y, K, M), {
        snaps: Q,
        snapsAligned: ot
    } = mn(A, X, v, O, W), J = -G(Q) + G(U), {
        snapsContained: st,
        scrollContainLimit: it
    } = an(w, J, ot, g, M), V = z ? st : ot, {
        limit: R
    } = ln(J, V, l), k = Bt(lt(V), h, l), rt = k.clone(), B = ut(r), P = ({
        dragHandler: nt,
        scrollBody: yt,
        scrollBounds: bt,
        options: {
            loop: dt
        }
    }) => {
        dt || bt.constrain(nt.pointerDown()), yt.seek()
    }, y = ({
        scrollBody: nt,
        translate: yt,
        location: bt,
        offsetLocation: dt,
        scrollLooper: qt,
        slideLooper: $t,
        dragHandler: Ut,
        animation: Kt,
        eventHandler: Pt,
        options: {
            loop: Qt
        }
    }, Jt) => {
        const wt = nt.velocity(),
            Ft = nt.settled();
        Ft && !Ut.pointerDown() && (Kt.stop(), Pt.emit("settle")), Ft || Pt.emit("scroll"), dt.set(bt.get() - wt + wt * Jt), Qt && (qt.loop(nt.direction()), $t.loop()), yt.to(dt.get())
    }, T = tn(s, i, () => P(St), nt => y(St, nt)), F = .68, C = V[k.get()], q = pt(C), j = pt(C), H = pt(C), tt = un(q, j, H, m, F), gt = hn(l, V, J, R, H), ht = Sn(T, k, rt, tt, gt, H, o), At = pn(R), Dt = at(), Gt = En(n, r, o, p), {
        slideRegistry: Mt
    } = gn(z, g, V, it, W, B), Rt = yn(t, r, Mt, ht, tt, Dt, o), St = {
        ownerDocument: s,
        ownerWindow: i,
        eventHandler: o,
        containerRect: v,
        slideRects: O,
        animation: T,
        axis: A,
        dragHandler: en(A, t, s, i, H, on(A, i), q, T, ht, tt, gt, k, o, N, x, d, a, F, I),
        eventStore: Dt,
        percentOfView: N,
        index: k,
        indexPrevious: rt,
        limit: R,
        location: q,
        offsetLocation: j,
        options: e,
        resizeHandler: cn(n, o, i, r, A, b, E),
        scrollBody: tt,
        scrollBounds: fn(R, j, H, tt, N),
        scrollLooper: dn(J, R, j, [q, j, H]),
        scrollProgress: At,
        scrollSnapList: V.map(At.get),
        scrollSnaps: V,
        scrollTarget: gt,
        scrollTo: ht,
        slideLooper: bn(A, w, J, Z, U, Q, V, j, r),
        slideFocus: Rt,
        slidesHandler: xn(n, o, L),
        slidesInView: Gt,
        slideIndexes: B,
        slideRegistry: Mt,
        slidesToScroll: W,
        target: H,
        translate: jt(A, n)
    };
    return St
}

function Tn() {
    let t = {},
        n;

    function r(f) {
        n = f
    }

    function s(f) {
        return t[f] || []
    }

    function i(f) {
        return s(f).forEach(h => h(n, f)), c
    }

    function e(f, h) {
        return t[f] = s(f).concat([h]), c
    }

    function o(f, h) {
        return t[f] = s(f).filter(l => l !== h), c
    }

    function u() {
        t = {}
    }
    const c = {
        init: r,
        emit: i,
        off: o,
        on: e,
        clear: u
    };
    return c
}
const On = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0
};

function An(t) {
    function n(e, o) {
        return zt(e, o || {})
    }

    function r(e) {
        const o = e.breakpoints || {},
            u = ft(o).filter(c => t.matchMedia(c).matches).map(c => o[c]).reduce((c, f) => n(c, f), {});
        return n(e, u)
    }

    function s(e) {
        return e.map(o => ft(o.breakpoints || {})).reduce((o, u) => o.concat(u), []).map(t.matchMedia)
    }
    return {
        mergeOptions: n,
        optionsAtMedia: r,
        optionsMediaQueries: s
    }
}

function Dn(t) {
    let n = [];

    function r(e, o) {
        return n = o.filter(({
            options: u
        }) => t.optionsAtMedia(u).active !== !1), n.forEach(u => u.init(e, t)), o.reduce((u, c) => Object.assign(u, {
            [c.name]: c
        }), {})
    }

    function s() {
        n = n.filter(e => e.destroy())
    }
    return {
        init: r,
        destroy: s
    }
}

function mt(t, n, r) {
    const s = t.ownerDocument,
        i = s.defaultView,
        e = An(i),
        o = Dn(e),
        u = at(),
        c = Tn(),
        {
            mergeOptions: f,
            optionsAtMedia: h,
            optionsMediaQueries: l
        } = e,
        {
            on: m,
            off: x,
            emit: d
        } = c,
        p = w;
    let S = !1,
        a, g = f(On, mt.globalOptions),
        b = f(g),
        L = [],
        I, M, E;

    function v() {
        const {
            container: P,
            slides: y
        } = b;
        M = (xt(P) ? t.querySelector(P) : P) || t.children[0];
        const F = xt(y) ? M.querySelectorAll(y) : y;
        E = [].slice.call(F || M.children)
    }

    function O(P) {
        const y = In(t, M, E, s, i, P, c);
        if (P.loop && !y.slideLooper.canLoop()) {
            const T = Object.assign({}, P, {
                loop: !1
            });
            return O(T)
        }
        return y
    }

    function A(P, y) {
        S || (g = f(g, P), b = h(g), L = y || L, v(), a = O(b), l([g, ...L.map(({
            options: T
        }) => T)]).forEach(T => u.add(T, "change", w)), b.active && (a.translate.to(a.location.get()), a.animation.init(), a.slidesInView.init(), a.slideFocus.init(), a.eventHandler.init(B), a.resizeHandler.init(B), a.slidesHandler.init(B), a.options.loop && a.slideLooper.loop(), M.offsetParent && E.length && a.dragHandler.init(B), I = o.init(B, L)))
    }

    function w(P, y) {
        const T = Q();
        N(), A(f({
            startIndex: T
        }, P), y), c.emit("reInit")
    }

    function N() {
        a.dragHandler.destroy(), a.eventStore.clear(), a.translate.clear(), a.slideLooper.clear(), a.resizeHandler.destroy(), a.slidesHandler.destroy(), a.slidesInView.destroy(), a.animation.destroy(), o.destroy(), u.clear()
    }

    function X() {
        S || (S = !0, u.clear(), N(), c.emit("destroy"), c.clear())
    }

    function z(P, y, T) {
        !b.active || S || (a.scrollBody.useBaseFriction().useDuration(y === !0 ? 0 : b.duration), a.scrollTo.index(P, T || 0))
    }

    function $(P) {
        const y = a.index.add(1).get();
        z(y, P, -1)
    }

    function Z(P) {
        const y = a.index.add(-1).get();
        z(y, P, 1)
    }

    function U() {
        return a.index.add(1).get() !== Q()
    }

    function Y() {
        return a.index.add(-1).get() !== Q()
    }

    function K() {
        return a.scrollSnapList
    }

    function W() {
        return a.scrollProgress.get(a.location.get())
    }

    function Q() {
        return a.index.get()
    }

    function ot() {
        return a.indexPrevious.get()
    }

    function J() {
        return a.slidesInView.get()
    }

    function st() {
        return a.slidesInView.get(!1)
    }

    function it() {
        return I
    }

    function V() {
        return a
    }

    function R() {
        return t
    }

    function k() {
        return M
    }

    function rt() {
        return E
    }
    const B = {
        canScrollNext: U,
        canScrollPrev: Y,
        containerNode: k,
        internalEngine: V,
        destroy: X,
        off: x,
        on: m,
        emit: d,
        plugins: it,
        previousScrollSnap: ot,
        reInit: p,
        rootNode: R,
        scrollNext: $,
        scrollPrev: Z,
        scrollProgress: W,
        scrollSnapList: K,
        scrollTo: z,
        selectedScrollSnap: Q,
        slideNodes: rt,
        slidesInView: J,
        slidesNotInView: st
    };
    return A(n, r), setTimeout(() => c.emit("init"), 0), B
}
mt.globalOptions = void 0;

function Ht(t = {}, n = []) {
    const r = _.useRef(t),
        s = _.useRef(n),
        [i, e] = _.useState(),
        [o, u] = _.useState(),
        c = _.useCallback(() => {
            i && i.reInit(r.current, s.current)
        }, [i]);
    return _.useEffect(() => {
        if (Yt() && o) {
            mt.globalOptions = Ht.globalOptions;
            const f = mt(o, r.current, s.current);
            return e(f), () => f.destroy()
        } else e(void 0)
    }, [o, e]), _.useEffect(() => {
        Lt(r.current, t) || (r.current = t, c())
    }, [t, c]), _.useEffect(() => {
        _t(s.current, n) || (s.current = n, c())
    }, [n, c]), [u, i]
}
Ht.globalOptions = void 0;
export {
    Ht as u
};
//# sourceMappingURL=embla-carousel-react-BzYB0_h2.js.map