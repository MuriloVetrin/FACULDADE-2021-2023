<?php

namespace App\Http\Controllers;

use App\Models\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publishers = Publisher::all();
        return response()->json($publishers);
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
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'uf' => 'required',
            'phone' => 'required|integer',
        ]);

        $publisher = Publisher::create($validatedData);
        return response()->json($publisher, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $publisher = Publisher::findOrFail($id);
        return response()->json($publisher);
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
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'uf' => 'required',
            'phone' => 'required|integer',
        ]);

        $publisher = Publisher::findOrFail($id);
        $publisher->update($validatedData);
        return response()->json($publisher, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $publisher = Publisher::findOrFail($id);
        $publisher->delete();
        return response()->json(null, 204);
    }
}
