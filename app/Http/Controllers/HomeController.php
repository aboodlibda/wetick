<?php

namespace App\Http\Controllers;

use App\Models\Event;
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
        $data = $request->input('data');
        // Process the array data
        // For example, save it to the database or perform other operations

        return response()->json(['message' => 'Array received successfully!', 'data' => $data]);
    }

}
