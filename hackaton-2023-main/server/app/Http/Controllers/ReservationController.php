<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservations = Reservation::join('students', 'reservations.student_id', '=', 'students.id')
        ->join('books', 'reservations.book_id', '=', 'books.id')
        ->select('reservations.*', 'students.name as student_name', 'books.title as book_title')
        ->get();

        return response()->json($reservations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'student_id' => 'required|exists:students,id',
            'book_id' => 'required|exists:books,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $reservation = Reservation::create($validatedData);
        return response()->json($reservation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        return response()->json($reservation);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'student_id' => 'required|exists:students,id',
            'book_id' => 'required|exists:books,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $reservation = Reservation::findOrFail($id);
        $reservation->update($validatedData);
        return response()->json($reservation, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->delete();
        return response()->json(null, 204);
    }
}
