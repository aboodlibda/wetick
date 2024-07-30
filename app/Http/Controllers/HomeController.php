<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use PhpParser\JsonDecoder;

class HomeController extends Controller
{

    public function home()
    {
        return view('index');
    }
    public function index()
    {
        return view('admin.index');
    }

    public function event($id)
    {
        $event = Event::query()->findOrFail($id);
        return view('event',compact('event'));
    }

    public function book($id)
    {
        $event = Event::query()->findOrFail($id);
        return view('book',compact('event'));
    }

    public function confirm_booking(Request $request)
    {
//        sleep(3);
        // Extract ticket data from the request
        $ticketData = $request->input('data');

        $orderNumber = $this->generateOrderNumber();

        // Create a new order
        $order = Order::create([
            'order_number' => $orderNumber,
            'status' => 'Pending',
        ]);

        // Prepare data for syncing
        $syncData = [];
        foreach ($ticketData as $item) {
            $ticketId = $item[0];
            $count = $item[1];
            $syncData[$ticketId] = ['count' => $count];
        }

        // Sync the tickets with the order using a custom pivot table field
        $order->tickets()->sync($syncData);

        return response()->json([
            'message' => 'Tickets have been attached to the order successfully.',
            'data' => $order->id
        ]);
    }


    public function generateOrderNumber()
    {
        // Get the latest order number from the database
        $latestOrder = DB::table('orders')
            ->where('order_number', 'LIKE', 'ORD-' . date('Y') . '-%')
            ->orderBy('order_number', 'desc')
            ->first();

        // Extract the latest number and increment it
        $latestNumber = $latestOrder ? (int) substr($latestOrder->order_number, -3) : 0;
        $newNumber = str_pad($latestNumber + 1, 3, '0', STR_PAD_LEFT);

        // Create the new order number
        return 'ORD-' . date('Y') . '-' . $newNumber;
    }

    public function create_order(Request $request)
    {
        $request->validate([
           'user_name' => 'required',
           'email' => 'required|email',
           'phone' => 'required'
        ]);
        $data = $request->only([
           'user_name','email','phone'
        ]);
        $order = Order::query()->findOrFail($request->orderId);
        $order->update($data);
        if ($order){
            return \redirect()->route('pay')->with('order',$order);
        }else{
            return \redirect()->back();
        }
    }

    public function pay(Request $request)
    {
        return view('pay');
    }

    public function confirm_pay(Request $request)
    {
        return response()->json([
            'message' => 'abood libda . org.',
            'status' => 200,
            'data' => $request->all()
        ]);
    }

}
