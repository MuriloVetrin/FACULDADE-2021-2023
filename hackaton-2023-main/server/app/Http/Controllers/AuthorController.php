<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
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
        
        $author = Author::create($request->all());
        return response()->json($author, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $author = Author::findOrFail($id);
        return response()->json($author);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        
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
            'phone' => 'required',
        ]);
    
        $author = Author::findOrFail($id);
        $author->update($validatedData);
    
        return response()->json($author, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //falta tbm, deixar aluno inativo" ->
        $author = Author::findOrFail($id);
        $author->delete();
        return response()->json(null, 204);
    }
}
