{{-- <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/> --}}
<title>{{$order->order_number}}</title>
            <link rel="stylesheet"
            href="{{asset('template-css.css')}}"/>

@foreach ($order->tickets as $ticket)

<div class="ticket">
	<div class="left">
		<div class="image">
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
				<h2>Olivia Rodrigo</h2>
			</div>
			<div class="time">
				<p>{{\Carbon\Carbon::create($ticket->event->date)->locale("en")->translatedFormat("g:i A")}} <span>TO</span> 11:00 PM</p>
				<p>DOORS <span>@</span> 7:00 PM</p>
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
				<p>8:00 PM <span>TO</span> 11:00 PM</p>
				<p>DOORS <span>@</span> 7:00 PM</p>
			</div>
			<div class="barcode">
				<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code">
			</div>
			<p class="ticket-number">
				#{{$order->order_number}}
			</p>
		</div>
	</div>
</div>

@endforeach