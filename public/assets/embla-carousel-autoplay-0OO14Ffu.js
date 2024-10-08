const M = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};

function v(d = {}) {
    let e, n, r, o = !1,
        l = !0,
        c = !1,
        f = 0;

    function w(t, p) {
        n = t;
        const {
            mergeOptions: u,
            optionsAtMedia: g
        } = p, D = u(M, v.globalOptions), L = u(D, d);
        if (e = g(L), n.scrollSnapList().length <= 1) return;
        c = e.jump, r = !1;
        const {
            eventStore: a,
            ownerDocument: k
        } = n.internalEngine(), O = n.rootNode(), I = e.rootNode && e.rootNode(O) || O, b = n.containerNode();
        n.on("pointerDown", i), e.stopOnInteraction || n.on("pointerUp", s), e.stopOnMouseEnter && (a.add(I, "mouseenter", () => {
            l = !1, i()
        }), e.stopOnInteraction || a.add(I, "mouseleave", () => {
            l = !0, s()
        })), e.stopOnFocusIn && (a.add(b, "focusin", i), e.stopOnInteraction || a.add(b, "focusout", s)), a.add(k, "visibilitychange", E), e.playOnInit && !y() && s()
    }

    function x() {
        n.off("pointerDown", i).off("pointerUp", s), i(), r = !0, o = !1
    }

    function s() {
        if (r || !l) return;
        o || n.emit("autoplay:play");
        const {
            ownerWindow: t
        } = n.internalEngine();
        t.clearInterval(f), f = t.setInterval(A, e.delay), o = !0
    }

    function i() {
        if (r) return;
        o && n.emit("autoplay:stop");
        const {
            ownerWindow: t
        } = n.internalEngine();
        t.clearInterval(f), f = 0, o = !1
    }

    function E() {
        if (y()) return l = o, i();
        l && s()
    }

    function y() {
        const {
            ownerDocument: t
        } = n.internalEngine();
        return t.visibilityState === "hidden"
    }

    function m(t) {
        typeof t < "u" && (c = t), l = !0, s()
    }

    function N() {
        o && i()
    }

    function S() {
        o && m()
    }

    function h() {
        return o
    }

    function A() {
        const {
            index: t
        } = n.internalEngine(), p = t.clone().add(1).get(), u = n.scrollSnapList().length - 1;
        e.stopOnLastSnap && p === u && i(), n.canScrollNext() ? n.scrollNext(c) : n.scrollTo(0, c)
    }
    return {
        name: "autoplay",
        options: d,
        init: w,
        destroy: x,
        play: m,
        stop: N,
        reset: S,
        isPlaying: h
    }
}
v.globalOptions = void 0;
export {
    v as A
};
//# sourceMappingURL=embla-carousel-autoplay-0OO14Ffu.js.map