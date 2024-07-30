<!doctype html>
<html lang="ar" dir="rtl" translate="no">

<head>
    <title>@yield('title')</title>
    <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="google" content="notranslate" />
    <link rel="icon" href="https://webook.com/favicon.ico" />
    <link rel="manifest" href="https://webook.com/manifest.json" />
    <link rel="apple-touch-icon" href="https://webook.com/icons/apple-touch-icon.png" />
    <link rel="font"  defer="defer" href="https://webook.com/fonts/vazirmatn/variable.ttf" >
    <!-- <link
      rel="preload"
      href="/fonts/inter/variable.ttf"
      as="font"
      type="font/ttf"
      crossorigin="anonymous"
    /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="apple-itunes-app"
          content="app-id=6468667896, app-argument=https://apps.apple.com/sa/app/webook-com-fun-things-to-do/id6468667896" />
    <meta property="al:ios:app_store_id" content="6468667896" />
    <meta property="al:ios:url" content="https://apps.apple.com/sa/app/webook-com-fun-things-to-do/id6468667896" />
    <meta property="al:ios:app_name" content="webook.com" />
    <meta property="al:android:package" content="com.webook.android" />
    <meta property="al:android:url" content="https://play.google.com/store/apps/details?id=com.webook.android" />
    <meta property="al:android:app_name" content="webook.com" />



{{--    <script  src="{{asset('assets/index-Dvk-m9y7.js')}}"></script>--}}
    <link rel="script" defer="defer" href="{{asset('assets/index-Dvk-m9y7.js')}}">
    <link rel="script" defer="defer" href="{{asset('assets/vendor-DR5RWKqR.js')}}">
    <link rel="script" defer="defer" href="{{asset('assets/@wbk/logger-B2PJ36TD.js')}}">
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/svg-Bfdm4PIA.js')}}">--}}
    <link rel="script" defer="defer" href="{{asset('assets/embla-carousel-react-BzYB0_h2.js')}}">
{{--    <link rel="script" defer="defer" href="{{asset('assets/date-fns-BtDWlEzX.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/ui-CyHpM1kR.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/react-hook-form-4Is_Po-Y.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/analytics-BQky3x7x.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/hooks-DLzdNyzN.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/auth-CKGQqgCY.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@hy/experiences-DjqdbvJK.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/i18next-CIEwNdMy.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/i18next-http-backend-Dv63VUCH.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/i18next-browser-languagedetector-BlRDQQ4L.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/react-i18next-wEu7J75T.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/contentful-13WVeXE2.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/react-hot-toast-BeOYc3BL.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@contentful/rich-text-react-renderer-DDXKQ87Q.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@contentful/rich-text-types-Ck9EBoAh.js')}}">--}}
    <link rel="script" defer="defer" href="{{asset('assets/embla-carousel-autoplay-0OO14Ffu.js')}}">
{{--    <link rel="script" defer="defer" href="{{asset('assets/react-helmet-DfrvNBiT.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/ticketing-DrPp9T8X.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/framer-motion-CjpMPw5U.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/queue-4u0RQ_Ck.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/@wbk/packages-idCpq8Dw.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/react-share-DTvmqVZ7.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/markdown-to-jsx-CuotGn2z.js')}}">--}}
    <link rel="stylesheet" defer="defer" href="{{asset('assets/@wbk/ui-DNC_QbDw.css')}}">
    <link rel="stylesheet" defer="defer" href="{{asset('assets/index-CTFtIb-a.css')}}">

    @yield('links')
    <style type="text/css">
        [vaul-drawer] {
            touch-action: none;
            will-change: transform;
            transition: transform .5s cubic-bezier(.32, .72, 0, 1)
        }

        [vaul-drawer][vaul-drawer-direction=bottom] {
            transform: translate3d(0, 100%, 0)
        }

        [vaul-drawer][vaul-drawer-direction=top] {
            transform: translate3d(0, -100%, 0)
        }

        [vaul-drawer][vaul-drawer-direction=left] {
            transform: translate3d(-100%, 0, 0)
        }

        [vaul-drawer][vaul-drawer-direction=right] {
            transform: translate3d(100%, 0, 0)
        }

        .vaul-dragging .vaul-scrollable [vault-drawer-direction=top] {
            overflow-y: hidden !important
        }

        .vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom] {
            overflow-y: hidden !important
        }

        .vaul-dragging .vaul-scrollable [vault-drawer-direction=left] {
            overflow-x: hidden !important
        }

        .vaul-dragging .vaul-scrollable [vault-drawer-direction=right] {
            overflow-x: hidden !important
        }

        [vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top] {
            transform: translate3d(0, var(--snap-point-height, 0), 0)
        }

        [vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom] {
            transform: translate3d(0, var(--snap-point-height, 0), 0)
        }

        [vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left] {
            transform: translate3d(var(--snap-point-height, 0), 0, 0)
        }

        [vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right] {
            transform: translate3d(var(--snap-point-height, 0), 0, 0)
        }

        [vaul-overlay] {
            opacity: 0;
            transition: opacity .5s cubic-bezier(.32, .72, 0, 1)
        }

        [vaul-overlay][vaul-drawer-visible=true] {
            opacity: 1
        }

        [vaul-drawer]::after {
            content: '';
            position: absolute;
            background: inherit;
            background-color: inherit
        }

        [vaul-drawer][vaul-drawer-direction=top]::after {
            top: initial;
            bottom: 100%;
            left: 0;
            right: 0;
            height: 200%
        }

        [vaul-drawer][vaul-drawer-direction=bottom]::after {
            top: 100%;
            bottom: initial;
            left: 0;
            right: 0;
            height: 200%
        }

        [vaul-drawer][vaul-drawer-direction=left]::after {
            left: initial;
            right: 100%;
            top: 0;
            bottom: 0;
            width: 200%
        }

        [vaul-drawer][vaul-drawer-direction=right]::after {
            left: 100%;
            right: initial;
            top: 0;
            bottom: 0;
            width: 200%
        }

        [vaul-handle] {
            display: block;
            position: relative;
            opacity: .8;
            margin-left: auto;
            margin-right: auto;
            height: 5px;
            width: 56px;
            border-radius: 1rem;
            touch-action: pan-y;
            cursor: grab
        }

        [vaul-handle]:active,
        [vaul-handle]:hover {
            opacity: 1
        }

        [vaul-handle]:active {
            cursor: grabbing
        }

        [vaul-handle-hitarea] {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: max(100%, 2.75rem);
            height: max(100%, 2.75rem);
            touch-action: inherit
        }

        [vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]) {
            opacity: 0
        }

        [vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]) {
            opacity: 1
        }

        @media (hover:hover) and (pointer:fine) {
            [vaul-drawer] {
                user-select: none
            }
        }

        @media (pointer:fine) {
            [vaul-handle-hitarea]: {
                width: 100%;
                height: 100%
            }
        }
    </style>

    <style id="_goober">
        @keyframes go2264125279 {
            from {
                transform: scale(0) rotate(45deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(45deg);
                opacity: 1;
            }
        }

        @keyframes go3020080000 {
            from {
                transform: scale(0);
                opacity: 0;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes go463499852 {
            from {
                transform: scale(0) rotate(90deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(90deg);
                opacity: 1;
            }
        }

        @keyframes go1268368563 {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes go1310225428 {
            from {
                transform: scale(0) rotate(45deg);
                opacity: 0;
            }

            to {
                transform: scale(1) rotate(45deg);
                opacity: 1;
            }
        }

        @keyframes go651618207 {
            0% {
                height: 0;
                width: 0;
                opacity: 0;
            }

            40% {
                height: 0;
                width: 6px;
                opacity: 1;
            }

            100% {
                opacity: 1;
                height: 10px;
            }
        }

        @keyframes go901347462 {
            from {
                transform: scale(0.6);
                opacity: 0.4;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        .go4109123758 {
            z-index: 9999;
        }

        .go4109123758>* {
            pointer-events: auto;
        }

        .go2072408551 {
            display: flex;
            align-items: center;
            background: #fff;
            color: #363636;
            line-height: 1.3;
            will-change: transform;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
            max-width: 350px;
            pointer-events: auto;
            padding: 8px 10px;
            border-radius: 8px;
        }

        .go3958317564 {
            display: flex;
            justify-content: center;
            margin: 4px 10px;
            color: inherit;
            flex: 1 1 auto;
            white-space: pre-line;
        }

        @keyframes go2645569136 {
            0% {
                transform: translate3d(0, 200%, 0) scale(.6);
                opacity: .5;
            }

            100% {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 1;
            }
        }
    </style>

    <link rel="" as="script" crossorigin="" href="webook.com/assets/index-DlNI-4Fn.js">
    <link rel="" as="script" crossorigin="" href="/assets/BookingPageSkeleton-BGvz8kC6.js">
    <link rel="" as="script" crossorigin="" href="/assets/BookingHeader-6JOpXXuf.js">
    <link rel="" as="script" crossorigin="" href="/assets/BackButton-WupiqBfd.js">
    <link rel="" as="script" crossorigin="" href="/assets/OtherItemsWrapper-TXJXXTj1.js">
</head>

<body>


<!-- code start here -->

<div id="root">

    <script
        type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"webook.com","url":"https://webook.com","image":"https://images.ctfassets.net/vy53kjqs34an/13PQrZYbGClYRvRraBIbB6/3375a350c282b4e81b373ff6913191e6/webook-seo-image.png","email":"support@webook.com"}</script>
    <script
        type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","url":"https://webook.com","potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://webook.com/search?q={search_term_string}"},"query-input":"required name=search_term_string"}}</script>
    <div id="hiring-marquee"
         class="border-body-lighter/50 bg-body text-primary relative z-40 overflow-hidden border-b"
         style="height: auto;">
        <div style="transform: translateX(80.432px) translateZ(0px);"><a
                class="flex gap-12 whitespace-nowrap px-4 py-1.5" href="https://www.careers-page.com/supertech-2"
                target="_blank" rel="noreferrer">
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
                <p>محتاجين مبدعين معنا 🔥 قدّم الحين 💪🇸🇦🚀</p>
            </a></div>
    </div>
    <header class="border-body-lighter/50 sticky top-0 z-40 w-full border-b bg-black">
        <nav class="container flex items-center justify-between py-3">
            <div class="flex grow items-center gap-1 md:gap-4"><a
                    class="logo-image relative z-20 block shrink-0 hover:opacity-90" data-location="header"
                    aria-label="webook.com Logo" href="{{ route('home') }}"><img class="max-w-[90px] md:max-w-none"
                                                                 src="https://images.ctfassets.net/vy53kjqs34an/eXew8vB8pyCzk1szp26Kk/4917173fb0b2aabd0575c48585b1a3ed/Esports-Logo-animation-high-res-12-sec_2GIF.gif"
                                                                 width="89" height="42" alt=""></a>
{{--                <ul class="hidden shrink-0 items-center gap-2 text-sm md:flex lg:flex xl:flex" role="menu">--}}
{{--                    <li role="presentation"><a--}}
{{--                            class="hover:bg-text/5 active:bg-text/10 ring-text focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center disabled:bg-input/10 focus:outline-none disabled:cursor-not-allowed rounded-md whitespace-nowrap p-1 text-[13px] text-gray-400 transition hover:text-gray-100 disabled:text-white/30 sm:text-[15px]"--}}
{{--                            aria-label="استكشف" data-title="استكشف" data-location="header" role="menuitem"--}}
{{--                            data-category="استكشف" href="/ar/explore"> استكشف</a></li>--}}
{{--                </ul>--}}
                <div class="hidden w-full max-w-md md:block"></div>
            </div>
{{--            <ul class="flex items-center justify-end gap-2 text-sm xl:gap-2 xl:text-base" role="menu">--}}
{{--                <li role="presentation" class="hidden lg:flex"><a--}}
{{--                        class="hover:bg-text/5 active:bg-text/10 ring-text focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center disabled:bg-input/10 focus:outline-none disabled:cursor-not-allowed rounded-md whitespace-nowrap p-1 text-[13px] text-gray-400 transition hover:text-gray-100 disabled:text-white/30 sm:text-[15px]"--}}
{{--                        aria-label="webook.com للأعمال" data-title="webook.com للأعمال" data-location="header"--}}
{{--                        role="menuitem" data-category="webook.com للأعمال" href="/ar/business"> webook.com--}}
{{--                        للأعمال</a></li>--}}
{{--                <li class="z-40 shrink-0 [&amp;>button]:px-1 [&amp;>button]:text-xs md:[&amp;>button]:px-2 [&amp;>button]:xl:text-base [&amp;>button]:ltr:lg:text-sm"--}}
{{--                    role="presentation"><button--}}
{{--                        class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md gap-1 py-1 uppercase underline-offset-2 hover:underline"--}}
{{--                        data-testid="lang-switcher" data-location="header" data-target-language="en"--}}
{{--                        role="menuitem"> <span--}}
{{--                            class="ltr:font-vazirmatn rtl:font-inter hidden md:block">English</span><span--}}
{{--                            class="ltr:font-vazirmatn rtl:font-inter md:hidden">English</span></button></li>--}}
{{--                <li class="relative shrink-0 text-sm" role="presentation"><a--}}
{{--                        class="border-text hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 border focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full !px-1.5 !py-1.5 md:!px-2.5"--}}
{{--                        data-testid="login-profile" data-location="header" role="menuitem"--}}
{{--                        href="/ar/login?redirect=/ar">--}}
{{--                        <p class="hidden sm:block">دخول / تسجيل</p>--}}
{{--                        <div class="block shrink-0 rounded-full md:hidden"><img class="shrink-0"--}}
{{--                                                                                src="{{asset('/icons/profile/user-large.svg')}}" width="20" height="20" alt="user icon"></div>--}}
{{--                    </a></li>--}}
{{--            </ul>--}}
        </nav>
    </header>
    <main id="main">
        @yield('content')
    </main>
    <footer class="border-t border-white/20">
        <div class="container px-6 pb-6">
            <div class="flex flex-col items-center space-y-8 py-6 xl:flex-row xl:justify-between xl:space-y-0">
                <div class="flex grow flex-col items-center gap-4 space-y-4 lg:flex-row lg:gap-6 lg:space-y-0">
                    <figure class="shrink-0"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/3zOlXwzG8mnkgOFKwogIjR/12f91cfef6a36c3e280b19e755b4dc43/logo-new.svg"
                            width="150" height="46" alt="webook.com"></figure>
                    <ul class="flex shrink-0 items-center">
                        <li class="rounded-md"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed social_media_follow overflow-hidden rounded-md !p-1"
                                rel="noreferrer noopener" aria-label="https://www.facebook.com/webookfun/"
                                data-location="footer" href="https://www.facebook.com/webookfun/" target="_blank">
                                <img src="https://images.ctfassets.net/vy53kjqs34an/12dxmhGOwDp0O60rGkGaoU/2316038e3becb17702597cf2782052f1/Button-1.png?fit=pad&amp;w=55&amp;h=55"
                                     width="55" height="55" alt=""></a></li>
                        <li class="rounded-md"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed social_media_follow overflow-hidden rounded-md !p-1"
                                rel="noreferrer noopener" aria-label="https://twitter.com/webook"
                                data-location="footer" href="https://twitter.com/webook" target="_blank"> <img
                                    src="https://images.ctfassets.net/vy53kjqs34an/7FPODYVihpzuYzN2hoDlD2/1e889247bc73807bd4844d210f91e2db/Button.png?fit=pad&amp;w=55&amp;h=55"
                                    width="55" height="55" alt=""></a></li>
                        <li class="rounded-md"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed social_media_follow overflow-hidden rounded-md !p-1"
                                rel="noreferrer noopener" aria-label="https://www.instagram.com/webookfun"
                                data-location="footer" href="https://www.instagram.com/webookfun" target="_blank">
                                <img src="https://images.ctfassets.net/vy53kjqs34an/6vlq9w8miTqnUyvaPVTGlt/c7098a6a02a829656ad0150412caa439/Button-2.png?fit=pad&amp;w=55&amp;h=55"
                                     width="55" height="55" alt=""></a></li>
                        <li class="rounded-md"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed social_media_follow overflow-hidden rounded-md !p-1"
                                rel="noreferrer noopener" aria-label="https://www.linkedin.com/company/webookcom/"
                                data-location="footer" href="https://www.linkedin.com/company/webookcom/"
                                target="_blank"> <img
                                    src="https://images.ctfassets.net/vy53kjqs34an/6n6QzSnYYtkpeEze0BopUH/0798b4cb06244541752bfcc91d87b375/linkedin.png?fit=pad&amp;w=55&amp;h=55"
                                    width="55" height="55" alt=""></a></li>
                        <li class="rounded-md"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed social_media_follow overflow-hidden rounded-md !p-1"
                                rel="noreferrer noopener"
                                aria-label="https://www.youtube.com/channel/UCicg1LL4uwg1FPq-m9kZwVg"
                                data-location="footer"
                                href="https://www.youtube.com/channel/UCicg1LL4uwg1FPq-m9kZwVg" target="_blank">
                                <img src="https://images.ctfassets.net/vy53kjqs34an/1BahN7ZNIsnzgSsgsNmKG6/8e6b02bd0f4d4f26778a14a043386f37/youtube-1.png?fit=pad&amp;w=55&amp;h=55"
                                     width="55" height="55" alt=""></a></li>
                    </ul>
                </div>
                <div class="flex w-full flex-col items-center justify-center gap-2 lg:flex-row xl:justify-end">
                    <p class="text-center text-sm">حمل تطبيق webook.com الآن</p>
                    <div class="flex items-center"><a
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md"
                            rel="noopener noreferrer" aria-label="Download App"
                            href="https://apps.apple.com/us/app/webook-com-fun-things-to-do/id6468667896"
                            target="_blank"> <img
                                src="https://images.ctfassets.net/vy53kjqs34an/6L7jX6HJDHPBObRDSDO7OA/92521d5009d9bd7ccd49e58679df3419/app-store.svg?fit=pad&amp;w=105&amp;h=35"
                                width="105" height="35" alt=""></a><a
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md"
                            rel="noopener noreferrer" aria-label="Download App"
                            href="https://play.google.com/store/apps/details?id=com.webook.android" target="_blank">
                            <img src="https://images.ctfassets.net/vy53kjqs34an/3QXil2sNpz4OaaqZeNHiM5/4d27c2062f81424d3b58c283e222dc11/google-play.svg?fit=pad&amp;w=112&amp;h=34"
                                 width="112" height="34" alt=""></a><a
                            class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md"
                            rel="noopener noreferrer" aria-label="Download App"
                            href="https://appgallery.huawei.com/app/C109536445" target="_blank"> <img
                                src="https://images.ctfassets.net/vy53kjqs34an/3KYMflvrov5gfZ1v7wK9Ue/50b584fe2c8aed284475c1a87de655f0/huawei_app.svg?fit=pad&amp;w=107&amp;h=33"
                                width="107" height="33" alt=""></a></div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-between border-t border-gray-500/50 pt-5 xl:flex-row">
                <nav class="flex flex-wrap justify-center py-2 pb-8 text-xs md:p-4">
                    <ul class="flex flex-row flex-wrap items-center justify-center gap-2 space-y-0" role="menu">
                        <li role="presentation"><button
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center overflow-hidden px-4 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md gap-1 py-1 uppercase underline-offset-2 hover:underline"
                                data-testid="lang-switcher" data-location="header" data-target-language="en"
                                role="menuitem"> <span
                                    class="ltr:font-vazirmatn rtl:font-inter hidden md:block">English</span><span
                                    class="ltr:font-vazirmatn rtl:font-inter md:hidden">English</span></button></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="فرص وظيفية" role="menuitem"
                                data-location="footer" data-category="فرص وظيفية"
                                href="https://www.careers-page.com/supertech-2" target="_blank"> فرص وظيفية</a></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="تواصل معنا" role="menuitem"
                                data-location="footer" data-category="تواصل معنا" href="/ar/contact-us"> تواصل
                                معنا</a></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="الإعلان على webook" role="menuitem"
                                data-location="footer" data-category="الإعلان على webook" href="/ar/advertise">
                                الإعلان على webook</a></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="سياسة الخصوصية" role="menuitem"
                                data-location="footer" data-category="سياسة الخصوصية" href="/ar/privacy"> سياسة
                                الخصوصية</a></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="شروط الإستخدام" role="menuitem"
                                data-location="footer" data-category="شروط الإستخدام" href="/ar/terms"> شروط
                                الإستخدام</a></li>
                        <li role="presentation"><a
                                class="hover:bg-text/5 active:bg-text/10 ring-text text-white focus:ring-1 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md px-2.5 py-1"
                                rel="noreferrer noopener" aria-label="اسئلة متكررة" role="menuitem"
                                data-location="footer" data-category="اسئلة متكررة" href="https://wbk.zendesk.com/"
                                target="_blank"> اسئلة متكررة</a></li>
                    </ul>
                </nav>
                <div class="flex flex-col flex-wrap gap-4 xl:flex-row">
                    <div class="flex flex-col items-center gap-2 text-xs text-gray-400 md:flex-row">
                        <p>خيارات دفع متعددة</p>
                        <div class="flex items-center gap-4 scale-95">
                            <div class=""><img src="{{asset('icons/payments/mada.svg')}}" width="41" height="15"
                                               alt="Mada Payment Logo"></div>
                            <div class=""><img src="{{asset('icons/payments/apple-pay.svg')}}" width="41" height="17"
                                               alt="Apple Payment Logo"></div>
                            <div class=""><img src="{{asset('icons/payments/visa.svg')}}" width="24" height="23"
                                               alt="Visa Payment Logo"></div>
                            <div class=""><img src="{{asset('icons/payments/mastercard.svg')}}" width="29" height="23"
                                               alt="Mastercard Payment Logo"></div>
                            <div class=""><img src="{{asset('icons/payments/american-express.svg')}}" width="24" height="23"
                                               alt="American Express Logo"></div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center text-[13px] text-zinc-100">
                        <span class="md:text-center">© 2024 webook.com</span></div>
                </div>
            </div>
        </div>
    </footer>
</div>


<!-- code end here -->



</body>

@yield('scripts')

</html>
