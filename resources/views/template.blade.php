{{-- <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/> --}}
<title>{{$order->user_name . ' - ' . $order->order_number}}</title>
            <link rel="stylesheet"
            href="{{asset('template-css.css')}}"/>

@foreach ($order->tickets as $ticket)

<div class="ticket">
	<div class="left">
		<div class="image" style="background-image: url('{{asset('events-images/'.$ticket->event->image)}}?fm=webp&w=600&h=600');">
			<p class="admit-one">
				<span>WEBOOK</span>
				<span>WEBOOK</span>
				<span>WEBOOK</span>
			</p>
			<div class="ticket-number">
				<p>
					#{{$order->order_number}}
				</p>
			</div>
		</div>
		<div class="ticket-info">
			<p class="date">
				<span>{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("F")}}</span>
				<span class="june-29">{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("F j")}}TH</span>
				<span>{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("Y")}}</span>
			</p>
			<div class="show-name">
				<h1>{{$ticket->event->title}}</h1>
				<h2>{{$order->user_name}}</h2>
			</div>
			<div class="time">
				<p>{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("g:i A")}} <span>TO</span>
                    {{\Carbon\Carbon::create($ticket->event->date)->addHour(2)->format('g:i A')}}</p>
				<p>DOORS <span>@</span> {{\Carbon\Carbon::create($ticket->event->date)->subHour(2)->format('g:i A')}}</p>
			</div>
			<p class="location"><span><strong>{{$order->tickets[0]->event->location}}</strong></span>
				<span class="separator"><i class="far fa-smile"></i></span><span>{{$ticket->name . ' : '}}{{$ticket->price . ' SAR'}}</span>
			</p>
		</div>
	</div>
	<div class="right">
		<p class="admit-one">
			<span>WEBOOK</span>
			<span>WEBOOK</span>
			<span>WEBOOK</span>
		</p>
		<div class="right-info-container">
			<div class="show-name">
				<h1>{{$order->user_name}}</h1>
			</div>
			<div class="time">
				<p>{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("g:i A")}} <span>TO</span> {{\Carbon\Carbon::create($ticket->event->date)->addHour(2)->format('g:i A')}}</p>
				<p>DOORS <span>@</span> {{\Carbon\Carbon::create($ticket->event->date)->subHour(2)->format('g:i A')}}</p>
			</div>
			<div class="barcode">
{{--				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code">--}}
				@php
                        $qr =  QrCode::size(100)->generate('https://webook-sa.com/main-event/'.$ticket->event->id);

				@endphp
                <div>{{$qr}}</div>
			</div>
			<p class="ticket-number">
				#{{$order->order_number}}
			</p>
		</div>
	</div>
</div>
    <br>
    <br>
@endforeach

<p style="font-family: Tajawal,sans-serif;font-size: 18px;direction: rtl;padding: 100px 50px 50px 50px;float: right;font-weight: bold">
    الشروط الأحكام

    بشراء هذه التذكرة، فأنت توافق على جميع الشروط والأحكام والقيود التي قد يضعها المنظم قبل أو اثناء الفعالية:

    يجب شراء تذكرة لكل شخص منفرد.
    يسمح بدخول الأطفال من 12 سنوات وأكبر.
    سعر التذكرة غير مسترد.
    في حال تم بيع التذكرة خارج إطار منصة Webook سيتم إلغاء التذكرة دون إرجاع المبالغ
    في حالة تم إلغاء، تأجيل، أو تغيير تاريخ الفعالية من قِبل الجهة المنظمة فإنه سيتم إعادة قيمة التذكرة.
    حامل التذكرة مسؤول عن التحقق من تاريخ الفعالية ووقتها ومكانها والعمر المفروض لحضورها كما يجب على حاملي التذكرة الوصول باكراً إلى موقع الفعالية، ويحق للجهة المنظمة أن ترفض دخول الأشخاص المتأخرين، وفي هذه الحالة لن يجوز لحامل التذكرة أن يطالب باسترداد سعر التذكرة أو طلب تعويض من أي نوع كان.
    في حال مغادرة المبنى، لا يسمح بالعودة مجدداً.
    قد يتم تفتيش حاملي التذاكر ومقتنياتهم الشخصية عند دخول موقع الفعالية، وسوف يتم مصادرة المواد المحظورة والخطرة، كما ستتم مصادرة كل مادة ترى الجهة المنظمة أو الجهاز الأمني في مقر الفعالية أنها خطرة أو يمكن أن يتم استخدامها لإلحاق الضرر بالمكان أو إفساد الفعالية.
    لا يسمح بدخول المأكولات والمشروبات من الخارج. سيتم توفير عربات بيع الطعام والشراب داخل الفعالية.
    لا يسمح باصطحاب الحيوانات.
    لا يسمح باستخدام آلات التصوير والتسجيل المتخصصة في موقع الفعالية.
    يوافق حامل التذكرة بصفته الحاضر لمكان الفعالية على الصور الفوتوغرافية ومقاطع الفيديو والمقاطع الصوتية المسجلة التي قد يتم استخدامها كمطبوعات أو نسخ الكترونية أو نشرها على شبكة الأنترنت.
    التدخين غير مسموح به في المبنى، بما في ذلك السجائر الإلكترونية. ولا يسمح أيضاُ باستخدام القداحات وأعواد الكبريت داخل الموقع، الا في الموقع المخصصة للتدخين.
    لا تتحمل الجهة المنظمة مسؤولية الإصابات الجسدية أو الأمراض أو وفاة أي زائر (بما في ذلك حامل التذكرة) أو فقدان أو تضرر المقتنيات لأسباب ناجمة عن الفعالية أو مرتبطة بها.
    للجهة المنظمة الحق في إخراج من يصدر عنه تصرف يعتبر برأي الجهة المنظمة مخالف.
    الالتزام بقواعد الذوق العام بما يتماشى مع ثقافة وقيم وتقاليد المملكة العربية السعودية.
    في حال وجود شكوى، يجب تقديمها إلى "بوابة الترفيه" بزيارة الموقع الالكتروني (cx.gea.gov.sa) خلال 3 أيام كحد أقصى من تاريخ وقوعها.


</p>

<img src="http://127.0.0.1:8000/images/app/logo-new.svg" style="display: block;margin: auto" width="150" height="46" alt="webook.com">
