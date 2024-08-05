@extends('master')

@section('title')
    {{'ويبوك.كوم | احجز تذاكر المباريات، فعاليات، مسرحيات، مطاعم، تجارب وأكثر'}}
@endsection

@section('content')

    <section class="container max-w-4xl space-y-4 pt-8 md:space-y-2 xl:!px-4">
        <h1 class="text-center text-xl font-semibold md:text-3xl">احجز أفضل الفعاليات والتجارب والمسرحيات في
            السعودية</h1>
        <form class="relative z-20 mx-auto hidden w-full max-w-xl overflow-hidden p-1 md:block" type="button"
              aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1:" data-state="closed"><img
                src="{{asset('/icons/common/search.svg')}}"
                class="absolute top-1/2 -translate-y-1/2 transform opacity-60 ltr:left-3 rtl:right-3" width="20"
                height="20" alt=""><input type="search" inputmode="search"
                                          class="focus:ring-primary focus:border-primary bg-input/10 h-12 w-full rounded-md border-none border-transparent text-sm ltr:pl-8 rtl:pr-8"
                                          placeholder="ابحث عن الفعاليات والتجارب والمطاعم والفنانين" value=""><button type="submit"
                                                                                                                       aria-label="Search"
                                                                                                                       class="bg-primary absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-start justify-center rounded-md ltr:right-3 rtl:left-3"><img
                    class="h-full" src="{{asset('/icons/common/search.svg')}}" width="18" height="18" alt="Search"></button>
        </form>
    </section>
    <section>
{{--        <video autoplay="" loop="" playsinline="" disablepictureinpicture=""--}}
{{--               class="pointer-events-none absolute inset-0 z-[-1] h-full w-full select-none object-cover opacity-50">--}}
{{--            <source--}}
{{--                src="assets/Gold_Burst_03-1.m4v"--}}
{{--                type="video/mp4">--}}
{{--        </video>--}}
        <div class="embla">
            <div class="embla__viewport py-8">
                <div class="embla__container" style="transform: translate3d(2432px, 0px, 0px);">
                    <div class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl"
                         style="transform: translate3d(0px, 0px, 0px);"><a
                            class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                            to="/ar/explore-jeddah-season?utm_source=r1-1&amp;utm_medium=hero_banner&amp;utm_campaign=Explore Jeddah Season"
                            href="/ar/explore-jeddah-season?utm_source=r1-1&amp;utm_medium=hero_banner&amp;utm_campaign=Explore Jeddah Season">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/1K4VXsjB0Vf825bKqfZ7py/9be95a7d589d6134e7c2de237584487b/jeddah-season-banner-ar.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/4DWNp5rHCXoIclGVKbocPO/00ca112ff576d2fae1787207460855e2/js-app-banner.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">استكشف موسم جدة</p>
                                    <p class="text-xs text-gray-400">8 يونيو - 17 أغسطس 2024</p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">استكشف موسم جدة</p>
                                    <p class="text-xs text-gray-400">8 يونيو - 17 أغسطس 2024</p>
                                </div>
                            </div>
                        </a></div>
                    <div class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl"
                         style="transform: translate3d(0px, 0px, 0px);"><a
                            class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                            to="/ar/kingdom-tour?utm_source=r1-2&amp;utm_medium=hero_banner&amp;utm_campaign=Kingdom Tour"
                            href="/ar/kingdom-tour?utm_source=r1-2&amp;utm_medium=hero_banner&amp;utm_campaign=Kingdom Tour">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/79iJfw6dRGxC0mqoW94Ek6/5a33666342d4856137eefa7e8e226679/kingdom-tour-banner-ar.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/7rVi8D3Lb6YS9o4kURJjn4/59e25f198d939ef5a684529f6d0281f5/kt-app-banner.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">جولة المملكة</p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">جولة المملكة</p>
                                </div>
                            </div>
                        </a></div>
                    <div
                        class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl">
                        <a class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-100 lg:scale-[1.03] 2xl:scale-[1.05]"
                           to="/ar/events/esports-world-cup?utm_source=r1-3&amp;utm_medium=hero_banner&amp;utm_campaign=esports-world-cup-event"
                           href="/ar/events/esports-world-cup?utm_source=r1-3&amp;utm_medium=hero_banner&amp;utm_campaign=esports-world-cup-event">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5GcvgRvAZPOJ8jKaHC7ZMI/12c0a2267a60dd03b5ef27643c08c273/Option_6_-_Arabic-03.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/6CWtimQjYhK8CkPfQZ5kn9/e9dc2f343ee9242413da3a697ea7af6e/Option-6---Arabic-01.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">كأس العالم للرياضات
                                        الإلكترونية </p>
                                    <p class="text-xs text-gray-400">3 يوليو 2024</p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">كأس العالم للرياضات
                                        الإلكترونية </p>
                                    <p class="text-xs text-gray-400">3 يوليو 2024</p>
                                </div>
                            </div>
                        </a></div>
                    <div
                        class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl">
                        <a class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                           to="/ar/events/wta-finals-tickets?utm_source=r1-4&amp;utm_medium=hero_banner&amp;utm_campaign=WTA Finals"
                           href="/ar/events/wta-finals-tickets?utm_source=r1-4&amp;utm_medium=hero_banner&amp;utm_campaign=WTA Finals">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/YA5To54mNjiBxGkO4sbe0/48f370c3b4deab26113bdfbadbecb66b/240625_Webook_KV_1280x426.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/4FrMyIjUNxfjWOvn052Agc/74b3adb2c1b19bfcac1e3b5e2f904bef/240625_Webook_KV_1280x1280-1.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">نهائيات رابطة اللاعبات
                                        المحترفات</p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> أبلغني</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">نهائيات رابطة اللاعبات
                                        المحترفات</p>
                                </div>
                            </div>
                        </a></div>
                    <div
                        class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl">
                        <a class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                           to="/ar/events/after-is-here-mdlbeast-tickets?utm_source=r1-5&amp;utm_medium=hero_banner&amp;utm_campaign=AFTER is Here!"
                           href="/ar/events/after-is-here-mdlbeast-tickets?utm_source=r1-5&amp;utm_medium=hero_banner&amp;utm_campaign=AFTER is Here!">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5Nzi560yhQS67zQQg0ohvn/88e0e6c2baec6e9321dd94302178a56c/after-mdlbeast-ewc1280x426_ARB.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/3cgNssi3tElwzgnaP4cbr5/08cdb94d49dca52e67bdf14d039b0907/after-mdlbeast-ewc_1280x1280_ARB.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">آفتـ ر وصل!</p>
                                    <p class="text-xs">يبدأ من 149 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">آفتـ ر وصل!</p>
                                    <p class="text-xs">يبدأ من 149 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div>
                            </div>
                        </a></div>
                    <div
                        class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl">
                        <a class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                           to="/ar/events/nation-khaliji-1-tickets-873465?utm_source=r1-6&amp;utm_medium=hero_banner&amp;utm_campaign=Nation Khaliji mona and saif"
                           href="/ar/events/nation-khaliji-1-tickets-873465?utm_source=r1-6&amp;utm_medium=hero_banner&amp;utm_campaign=Nation Khaliji mona and saif">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/15eNt8H6Q3wHyQ9pexaJY8/5fd32e2450aaa3c5ef9e6416ea01dc17/nation_khaligi_-_mona_and_saif.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/1Z5cNH7f9ztG1dY4T1Kcgh/a7d2964487c57e8e031c6b1443800279/nation_khaligi_-_mona_and_saif_.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">نيشن خليجي</p>
                                    <p class="text-xs">يبدأ من 130 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">نيشن خليجي</p>
                                    <p class="text-xs">يبدأ من 130 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div>
                            </div>
                        </a></div>
                    <div
                        class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl">
                        <a class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                           to="/ar/shows/musical-school?utm_source=r1-7&amp;utm_medium=hero_banner&amp;utm_campaign=Musical School"
                           href="/ar/shows/musical-school?utm_source=r1-7&amp;utm_medium=hero_banner&amp;utm_campaign=Musical School">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/17Z8DbsekKvI228Vw1s8hl/e4b3a7ba480f8e19ffcfe212065aafdb/ramadan-musical-school-show-1280x426.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/DeSIA2pkuiwJGo38xarL7/8d0daf89099f11908b8ebd96d4a5dde1/ramadan-musical-school-show-1280x1280.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">ميوزيكال سكول</p>
                                    <p class="text-xs">يبدأ من 75 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">ميوزيكال سكول</p>
                                    <p class="text-xs">يبدأ من 75 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div>
                            </div>
                        </a></div>
                    <div class="embla__slide flex h-full w-full shrink-0 py-4 md:mx-auto md:w-[85%] md:max-w-screen-xl"
                         style="transform: translate3d(0px, 0px, 0px);"><a
                            class="text-text focus:ring-1 ring-offset-body inline-flex items-center gap-1 overflow-hidden py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md bg-body-light relative h-full flex-col justify-between !py-0 px-0 ring-white/50 sm:basis-[98%] md:rounded-lg md:scale-[0.95] lg:scale-[0.96] 2xl:scale-[0.90]"
                            to="/ar/shows/doctor-play?utm_source=r1-8&amp;utm_medium=hero_banner&amp;utm_campaign=Doctor"
                            href="/ar/shows/doctor-play?utm_source=r1-8&amp;utm_medium=hero_banner&amp;utm_campaign=Doctor">
                            <div class="aspect-1 h-full w-full md:aspect-[3/1]"><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5Uc8EctniBBIjeo5bIqUX8/1bf96e0e60bba7f9c9872550786ebeaf/el_doctor.jpg?fm=webp"
                                    class="hidden h-full w-full overflow-hidden object-contain object-center md:block"
                                    width="100%" height="100%" alt="" data-loaded="true" srcset=""><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/1ZOy7Bav62CaYQ672vx4lD/50d9ed15135509632bad87f4bde2d1ef/1280x1280.jpg?w=600&amp;h=600&amp;fm=webp&amp;fit=thumb"
                                    class="h-full w-full overflow-hidden object-contain object-center md:hidden"
                                    width="600" height="600" alt="" data-loaded="true" srcset=""></div>
                            <div class="hidden w-full items-center justify-between p-4 pt-2 md:flex">
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">مسرحية الدكتور</p>
                                    <p class="text-xs">يبدأ من 75 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div><button
                                    class="bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast focus:ring-1 ring-offset-2 ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md w-full max-w-xs"
                                    tabindex="-1"> احجز التذاكر</button>
                            </div>
                            <div
                                class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-black/5 via-black/10 to-black/95 to-90% p-4 md:hidden">
                                <div></div>
                                <div class="space-y-1 text-start">
                                    <p class="line-clamp-2 text-xl font-semibold">مسرحية الدكتور</p>
                                    <p class="text-xs">يبدأ من 75 ر.س <span
                                            class="mx-0.5 text-[10px] text-gray-400">شامل ضريبة القيمة
                                                    المضافة</span></p>
                                </div>
                            </div>
                        </a></div>
                </div>
            </div>
            <div
                class="absolute left-1/2 top-1/2 w-full max-w-screen-2xl -translate-x-1/2 ltr:[&amp;>button:first-of-type]:left-0 rtl:[&amp;>button:first-of-type]:right-0 ltr:[&amp;>button:last-of-type]:right-0 rtl:[&amp;>button:last-of-type]:left-0">
                <button
                    class="embla__button embla__button--prev border-body bg-body-light ring-primary ring-offset-body hover:bg-body-lighter rounded-full border-2 focus:outline-none focus:ring-2"
                    type="button" aria-label="Previous"><svg width="32" height="32" viewBox="0 0 32 32"
                                                             fill="none" class="embla__button__svg fill-text rtl:rotate-180">
                        <path
                            d="M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z">
                        </path>
                    </svg></button><button
                    class="embla__button embla__button--next border-body bg-body-light ring-primary ring-offset-body hover:bg-body-lighter rounded-full border-2 focus:outline-none focus:ring-2"
                    type="button" aria-label="Next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                         class="embla__button__svg fill-text rotate-180 rtl:rotate-0">
                        <path
                            d="M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z">
                        </path>
                    </svg></button></div>
            <div class="embla__dots bg-text/10 absolute mx-auto w-fit rounded-full p-1.5">
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
                <div class="embla__dot transition after:bg-text/40"></div>
            </div>
        </div>
    </section>
    <div
        class="relative z-20 mx-auto flex min-h-[122px] max-w-full items-center justify-center overflow-hidden py-4 [&amp;>div]:mx-auto">
        <div id="home/lb"></div>
    </div>

    <section class="container space-y-8 py-12">
        <h2 class="text-2xl font-semibold text-gray-100">استكشف حسب الفئة</h2>
        <div class="embla">
            <div class="embla__viewport">
                <div class="embla__container" style="transform: translate3d(0px, 0px, 0px);">
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="الفعاليات" style="--color: #5c3cc5; --highlight: #5c3cc530;"
                           href=""><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/UYWGEQHmu9zJkiYJrI9Rg/96b5ce6f73a4ccb9d860eceff235d87d/event_categoy_icon.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="الفعاليات">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">الفعاليات
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/6MvAgcHMJDrWMOSy5RY7Vz/799d92f25e2c16a4950873bfc9f924be/events_category.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="&nbsp;التجارب" style="--color: #22c55e; --highlight: #22c55e30;"
                           href="/ar/explore?type=experiences&amp;utm_source=r3-2&amp;utm_medium=Categories&amp;utm_campaign=Explore Experiences"><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/25Q7iEz7ycm8nwdizfYAVn/bbd289214a520fe75a9e523c69c134b4/experiences_icon.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="&nbsp;التجارب">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">
                                &nbsp;التجارب</div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5OlwAbuDG93SaTHQwkefJO/929a833e4db3c9a1a6374451d5ba4dde/experiences.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="المطاعم" style="--color: #e36914; --highlight: #e3691430;"
                           href="/ar/explore?type=restaurants&amp;utm_source=r3-3&amp;utm_medium=Categories&amp;utm_campaign=Explore Restaurant "><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/3N5biTMbx6lgYKrXheqCt4/3a3d04ecc2ddc8fd382bf86839b094aa/restaurant.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="المطاعم">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">المطاعم
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/5QL7veN3eC4RzfUmK5lKQG/8fc69d3e1897c2b3855ec9bf9b98092a/restaurant.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="المسرحيات" style="--color: #ef4444; --highlight: #ef444430;"
                           href="/ar/explore?type=shows&amp;utm_source=r3-4&amp;utm_medium=Categories&amp;utm_campaign=Explore Shows"><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/6CqmOdUfKkCKtAAfUsbiyw/3d43eeb4071a1d1f735a7475039840e6/Experience_type_icon.png?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="المسرحيات">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">المسرحيات
                            </div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/27Epg26E0g8m0Ustep9K7Q/86b3ea43180973e751aa62d8b9dfbe03/Ellipse_3.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                    <div
                        class="embla__slide flex max-w-sm shrink-0 basis-[80%] px-2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                        <a class="group relative flex h-36 w-full items-center overflow-hidden rounded-[14px] border-2 border-[var(--color)] text-[var(--color)]"
                           aria-label="كأس العالم للرياضات الإلكترونية"
                           style="--color: #907c4b; --highlight: #907c4b30;"
                           href="/ar/events/esports-world-cup?utm_source=r3-5&amp;utm_medium=Categories&amp;utm_campaign=EWC"><span
                                class="absolute top-0 ltr:left-0 rtl:right-0 rtl:-scale-x-100"><svg width="60"
                                                                                                    height="51" viewBox="0 0 60 51" fill="none"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    class="text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4]">
                                            <path
                                                d="M-3.36978 -37.733C16.0635 -51.6447 39.6225 -37.9962 52.4968 -15.4198C65.3711 7.15655 61.2321 33.7701 43.2521 44.0233C25.2721 54.2765 -0.425292 54.3771 -12.6145 21.7102C-24.8038 -10.9566 -22.803 -23.8212 -3.36978 -37.733Z"
                                                fill="currentColor"></path>
                                        </svg></span><img
                                src="https://images.ctfassets.net/vy53kjqs34an/PCLoYRXNe5Qqek21BMNxf/f145bc0d2483f6dd6c176a107b48589b/game.svg?w=20&amp;h=20"
                                width="20" height="20"
                                class="absolute top-3 z-[3] ltr:left-4 rtl:right-4 rtl:-scale-x-100"
                                alt="كأس العالم للرياضات الإلكترونية">
                            <div class="relative z-[3] px-4 text-2xl font-semibold tracking-[-0.5px]">كأس العالم
                                للرياضات الإلكترونية</div>
                            <div class="absolute bottom-0 z-[2] ltr:-right-2 rtl:-left-2 rtl:-scale-x-100"><svg
                                    width="153" height="113" viewBox="0 0 153 113" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute bottom-0 text-[var(--highlight)] transition-transform duration-500 ease-in-out group-hover:scale-[4] ltr:-right-1 rtl:-left-1">
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        class="fill-body"></path>
                                    <path
                                        d="M201.555 58.721C218.78 109.537 77.0242 112.925 40.011 112.925C2.99775 112.925 0 76.4149 0 48.5577C0 20.7006 8.06097 1.759e-05 67.0478 0C126.035 -1.759e-05 184.331 7.90475 201.555 58.721Z"
                                        fill="currentColor"></path>
                                </svg><img
                                    src="https://images.ctfassets.net/vy53kjqs34an/eaECxtSAnM18XcVqzEhC3/89374744ef03554602527058c2f1ebd9/ewc_category.png?fm=webp&amp;w=120&amp;h=120"
                                    width="120" height="120" class="relative" alt=""></div>
                        </a></div>
                </div>
            </div>
        </div>
    </section>
    <section class="container space-y-8 py-12">
        <div class="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
                <h2>أحلى احتفالات الصيف! </h2>
            </div>
            <div class="flex gap-2"><button
                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                    aria-label="Previous"> <img src="{{asset('/icons/common/arrow.svg')}}" class="ltr:rotate-180" alt=""
                                                width="24" height="24"></button><button
                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                    aria-label="Next"> <img src="{{asset('/icons/common/arrow.svg')}}" class="rtl:rotate-180" alt=""
                                            width="24" height="24"></button></div>
        </div>
        <div class="embla">
            <div class="embla__viewport p-1">
                <div class="embla__container" style="transform: translate3d(0px, 0px, 0px);">

                    @php
                        $events = \App\Models\Event::query()->where('status','=','active')->latest()->paginate(10);
                    @endphp
                    @foreach($events as $event)
                        <div
                            class="xs:mr-3 xs:basis-1/2 relative mr-2 shrink-0 basis-[85%] md:basis-[28%] lg:basis-[22%] xl:basis-[18%]">
                            <a class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                               to=""
                               href="{{ route('main-event',$event->id) }}">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="{{asset('events-images/'.$event->image)}}?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600" alt="كاظم الساهر" data-loaded="true" srcset="">
                                    </div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400"><span>فعالية</span><span> ·
{{--                                                    12 يوليو</span>--}}
                                                {{\Carbon\Carbon::create($event->date)->locale("ar_SA")->translatedFormat("j F")}}</span>

                                        </div>
                                        <p class="line-clamp-2">{{$event->title}}</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">{{$event->tickets->min('price')}} ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    @endforeach

                </div>
            </div>
        </div>
        <div class="flex items-center justify-center gap-4"></div>
    </section>

    <section class="container relative py-12">
        <div class="flex items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
                <h2>احجز مبكرًا: بطولة كأس العالم للرياضات الإلكترونية تنتظرك!</h2>
            </div>
            <div class="flex gap-2"><button
                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                    aria-label="Previous"> <img src="{{asset('/icons/common/arrow.svg')}}" class="ltr:rotate-180" alt=""
                                                width="24" height="24"></button><button
                    class="hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-zinc-600 focus:ring-1 ring-offset-body relative gap-1 overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-white/30 p-0"
                    aria-label="Next"> <img src="{{asset('/icons/common/arrow.svg')}}" class="rtl:rotate-180" alt=""
                                            width="24" height="24"></button></div>
        </div>
        <div class="embla">
            <div class="embla__viewport py-0.5">
                <div class="embla__container" style="transform: translate3d(-549px, 0px, 0px);">
                    <div class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]"
                         style="transform: translate3d(0px, 0px, 0px);">
                        <div class="flex h-full w-full" style="transform: translateX(0%) scale(1);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/pubg-mobile-ewc-tickets?utm_source=r7-1&amp;utm_medium=ESWC&amp;utm_content=PUBG MOBILE World Cup x Esports World Cup"
                                href="/ar/events/pubg-mobile-ewc-tickets?utm_source=r7-1&amp;utm_medium=ESWC&amp;utm_content=PUBG MOBILE World Cup x Esports World Cup">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/1EwoK8GfrQlmTYVoIGUhsR/c4e72429595dcc4ecf3744f343aeb40f/PUBG_Mobile_Ar_1280x1280.jpg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="PUBG MOBILE World Cup x Esports World Cup" data-loaded="true"
                                            srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 19 يوليو</span></div>
                                        <p class="line-clamp-2">PUBG MOBILE World Cup x Esports World Cup</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">25 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]"
                         style="transform: translate3d(0px, 0px, 0px);">
                        <div class="flex h-full w-full" style="transform: translateX(5.4423%) scale(0.875303);">
                            <a class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                               to="/ar/events/fortnite-ewc-tikects?utm_source=r7-2&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Featuring Fortnite"
                               href="/ar/events/fortnite-ewc-tikects?utm_source=r7-2&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Featuring Fortnite">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/6K3z1wNlQvXh14CZBAqUtu/59a7c4ded1cb4f01ab959e01b7404e57/Fortnite_1280x1280_Ar.jpg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Fortnite في كأس العالم للرياضات الإلكترونية" data-loaded="true"
                                            srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 08 أغسطس</span></div>
                                        <p class="line-clamp-2">Fortnite في كأس العالم للرياضات الإلكترونية</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]"
                         style="transform: translate3d(0px, 0px, 0px);">
                        <div class="flex h-full w-full"
                             style="transform: translateX(21.8397%) scale(0.750202);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/apex-legends-ewc-tickets?utm_source=r7-3&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Apex Legends"
                                href="/ar/events/apex-legends-ewc-tickets?utm_source=r7-3&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Apex Legends">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/z6HutNF56HexGlH2OI2fF/838cdd535b982dfc1ffdaa5b47fcd705/Apex_Legends_1280x1280_Ar.jpeg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Apex Legends في كأس العالم للرياضات الإلكترونية"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 01 أغسطس</span></div>
                                        <p class="line-clamp-2">Apex Legends في كأس العالم للرياضات الإلكترونية
                                        </p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div
                        class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]">
                        <div class="flex h-full w-full"
                             style="transform: translateX(49.1923%) scale(0.625101);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/overwatch-2-ewc-tickets?utm_source=r7-4&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Overwatch 2"
                                href="/ar/events/overwatch-2-ewc-tickets?utm_source=r7-4&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Overwatch 2">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/4sKC4UZXSmCgQeWqlgVD5s/22bcc7161795a9f54ada3f22d2a740ce/Overwatch_ara_1280x1280.jpeg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Overwatch 2 في كأس العالم للرياضات الإلكترونية"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 25 يوليو</span></div>
                                        <p class="line-clamp-2">Overwatch 2 في كأس العالم للرياضات الإلكترونية
                                        </p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">25 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div
                        class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]">
                        <div class="flex h-full w-full" style="transform: translateX(87.5%) scale(0.5);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/rainbow-six-ewc-tickets?utm_source=r7-5&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Rainbow Six"
                                href="/ar/events/rainbow-six-ewc-tickets?utm_source=r7-5&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Rainbow Six">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/6CSu0BnMkb1hhqt3Pa9ont/e9b81179c85b26415b0a90129cfac686/Rainbow_6_Ar_1280x1280.jpg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Rainbow Six Siege في كأس العالم للرياضات الإلكترونية"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 01 أغسطس</span></div>
                                        <p class="line-clamp-2">Rainbow Six Siege في كأس العالم للرياضات
                                            الإلكترونية</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div
                        class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]">
                        <div class="flex h-full w-full"
                             style="transform: translateX(136.763%) scale(0.374899);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/street-fighter-6-ewc-tickets?utm_source=r7-6&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Street Fighter 6"
                                href="/ar/events/street-fighter-6-ewc-tickets?utm_source=r7-6&amp;utm_medium=ESWC&amp;utm_content=Esports World Cup: Street Fighter 6">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/7qexetG9Pt7cXTQTJZcX5C/3ad8d2e98d2b4c638549b5773f6fe696/SF6_Ar_1280x1280.png?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Street Fighter 6 في كأس العالم للرياضات الإلكترونية"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 08 أغسطس</span></div>
                                        <p class="line-clamp-2">Street Fighter 6 في كأس العالم للرياضات
                                            الإلكترونية</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]"
                         style="transform: translate3d(2478px, 0px, 0px);">
                        <div class="flex h-full w-full"
                             style="transform: translateX(-21.9103%) scale(0.749798);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/honor-of-kings-ewc-tickets?utm_source=r7-7&amp;utm_medium=ESWC&amp;utm_content=HoK Invitational Midseason x Esports World Cup"
                                href="/ar/events/honor-of-kings-ewc-tickets?utm_source=r7-7&amp;utm_medium=ESWC&amp;utm_content=HoK Invitational Midseason x Esports World Cup">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/1D1ESykKQD9GTudiRyWJ3H/e95569e900e280bccffdf734d58091b4/Honor_of_Kings_1280x1280_Ar.jpg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Honor of Kings في كأس العالم للرياضات الإلكترونية"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 01 أغسطس</span></div>
                                        <p class="line-clamp-2">Honor of Kings في كأس العالم للرياضات
                                            الإلكترونية</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                    <div class="embla__slide xs:basis-1/2 flex shrink-0 basis-[85%] px-2 py-4 md:basis-[28%] lg:basis-[22%]"
                         style="transform: translate3d(2478px, 0px, 0px);">
                        <div class="flex h-full w-full"
                             style="transform: translateX(-5.47758%) scale(0.874899);"><a
                                class="ring-transparent text-text ring-offset-2 inline-flex items-center justify-center overflow-hidden text-center transition disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed rounded-md group relative h-full w-full gap-0 bg-transparent p-px ring-offset-white focus:ring-1"
                                to="/ar/events/mobile-legends-bang-bang-women-ewc-tickets?utm_source=r7-8&amp;utm_medium=ESWC&amp;utm_content=Mobile Legends: Bang Bang Women's Invitational 2024  x Esports World Cup"
                                href="/ar/events/mobile-legends-bang-bang-women-ewc-tickets?utm_source=r7-8&amp;utm_medium=ESWC&amp;utm_content=Mobile Legends: Bang Bang Women's Invitational 2024  x Esports World Cup">
                                <div class="flex h-full w-full flex-col items-start overflow-hidden rounded-md">
                                    <div class="relative w-full overflow-hidden rounded-md "><img
                                            src="https://images.ctfassets.net/vy53kjqs34an/gnGapxBxYreoWaGsa6KFt/ce91b2d007598e967b1df1b795ed3dc5/MLBB_ara_1280x1280_.jpg?fm=webp&amp;fit=thumb&amp;w=600&amp;h=600"
                                            class="aspect-1 h-full object-cover transition duration-300 group-hover:scale-[1.02] group-focus:scale-[1.02]"
                                            width="600" height="600"
                                            alt="Mobile Legends: Bang Bang Women's Invitational 2024  x Esports World Cup"
                                            data-loaded="true" srcset=""></div>
                                    <div class="text-text space-y-0.5 pt-2 text-start">
                                        <div class="text-sm leading-none text-gray-400">
                                            <span>فعالية</span><span> · 24 يوليو</span></div>
                                        <p class="line-clamp-2">Mobile Legends: Bang Bang Women's Invitational
                                            2024 x Esports World Cup</p>
                                        <div>
                                            <div class="flex items-center gap-1">
                                                <p class="text-sm text-gray-400">يبدأ من</p>
                                                <p class="font-semibold">15 ر.س</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-1 rounded-md text-xs py-1">
                                            <div style="color: rgb(186, 229, 0);"><svg width="24" height="24"
                                                                                       viewBox="0 0 24 24" fill="none" class="h-4 w-4"
                                                                                       xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M11 19.5229C11 20.265 11.9624 20.5564 12.374 19.9389L18.2227 11.166C18.5549 10.6676 18.1976 10 17.5986 10H13V4.47708C13 3.73503 12.0376 3.44363 11.626 4.06106L5.77735 12.834C5.44507 13.3324 5.80237 14 6.40139 14H11V19.5229Z"
                                                          fill="currentColor"></path>
                                                </svg></div>
                                            <p class="leading-none text-gray-400">حجز فوري</p>
                                        </div>
                                    </div>
                                </div>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="container space-y-8 py-12">
        <h2>شركاء ويبوك</h2>
        <div class="space-y-6 text-center">
            <div class="mx-auto space-y-2 max-w-full">
                <div class="flex flex-wrap items-center justify-center gap-6"><a
                        href="https://book.visitsaudi.com/sa-ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/7CHCFVXSQRhDZxtKejvRHd/c3dc56299e04fa6ae8ea603b6b44958b/visit_saudi.png"
                            alt="visit saudi" width="167" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.victoryarena.com/ar/tickets" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/7z8tI15IMXFliKRrJxWixy/88ea98030676362c4630f4ba97431a50/alawal.png"
                            alt="Alawaal" width="290" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://sfadomes.com/ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/6SGrUWqrT6YehussBYmaRQ/d8677fa7a38e49b50e2d7cffde7da0e1/sfa.png"
                            alt="sfa dom" width="146" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.jarir.com/sa-ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/ZynThXKVomCfgAnaHkNtb/8d6a52974df2c618a6b8db4b76afc1c1/jarir.png"
                            alt="jarir" width="249" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.saudiarabiangp.com/ar" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/6nMklmV7nR24nEpOZKZ2vn/20c5a88975e951a6bed6ce23b732643e/sagp.png"
                            alt="sagp" width="176" height="80" class="h-full max-h-[80px]"></a><a
                        href="https://tickets.saudigames.sa/" target="_blank" rel="noreferrer"
                        class="transition hover:scale-105"><img
                            src="https://images.ctfassets.net/vy53kjqs34an/747ilctbzylTyQA71o4FHx/9e0e300030bc1f38dbd199b9124001b3/saudi_games.png"
                            alt="saudi games" width="88" height="79" class="h-full max-h-[80px]"></a></div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="my-10 flex flex-col overflow-hidden rounded-[24px] bg-violet-500 lg:flex-row lg:gap-6">
            <div
                class="border-b border-white/30 bg-[url(/images/app/pattern.png)] bg-[100%_50%] lg:border-none rtl:bg-[0%_50%]">
                <img class="mx-auto" src="{{asset('/images/app/iphones.png')}}" alt=""></div>
            <div class="flex-1 self-center p-4 lg:pb-8">
                <div class="lg:py-4">
                    <h2 class="mb-4 text-2xl font-semibold leading-tight text-gray-100 xl:text-5xl">حمل التطبيق
                        لدخول السحب على جوائز آيفون أسبوعية!</h2>
                    <div class="flex flex-row items-center gap-2 xl:gap-4"><a class="hover:opacity-80"
                                                                              href="https://apps.apple.com/us/app/webook-com-fun-things-to-do/id6468667896"
                                                                              target="_blank" rel="noopener noreferrer"><img src="{{asset('/images/app/appstore.svg')}}"
                                                                                                                             alt="appstore" width="105" height="35"></a><a class="hover:opacity-80"
                                                                                                                                                                           href="https://play.google.com/store/apps/details?id=com.webook.android"
                                                                                                                                                                           target="_blank" rel="noopener noreferrer"><img src="{{asset('/images/app/playstore.svg')}}"
                                                                                                                                                                                                                          alt="playstore" width="115" height="35"></a><a class="hover:opacity-80"
                                                                                                                                                                                                                                                                         href="https://appgallery.huawei.com/app/C109536445" target="_blank"
                                                                                                                                                                                                                                                                         rel="noopener noreferrer"><img src="{{asset('/images/app/huawei.svg')}}" alt="playstore"
                                                                                                                                                                                                                                                                                                        width="115" height="35"></a></div>
                </div>
                <div class="my-5 hidden h-px bg-white/20 lg:block"></div>
                <div class="hidden items-center gap-6 lg:flex">
                    <div class="flex items-center justify-center rounded-xl bg-white p-3"><img
                            src="{{asset('/images/app/qr-code.png')}}" alt="QR Code" width="110" height="110"></div>
                    <div class="text-gray-100">امسح الرمز للتحميل</div>
                </div>
            </div>
        </div>
    </section>

@endsection
