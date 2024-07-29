<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Order;
use Illuminate\Http\Request;

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
        sleep(3);
        // Extract ticket data from the request
        $ticketData = $request->input('data');

        // Define or find the order to attach tickets
        $orderId = 1; // Replace this with your actual logic to determine the order ID
        $order = Order::findOrFail($orderId);

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
            'data' => $order->tickets
        ]);

//        return response()->json(['message' => 'Array received successfully!', 'data' => $syncData]);
    }

}
