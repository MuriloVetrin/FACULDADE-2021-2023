<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
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
            'title' => 'required',
            'subtitle' => 'required',
            'image' => 'required',
            'place' => 'required',
            'year' => 'required|integer',
            'publisher_id' => 'required|exists:publishers,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        if (empty($isbn)) {
            $isbn = Str::uuid()->toString();
            $validatedData['isbn'] = $isbn;
        }

        $book = Book::create($validatedData);
        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book);
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
            'title' => 'required',
            'subtitle' => 'required',
            'image' => 'required',
            'place' => 'required',
            'year' => 'required|integer',
            'publisher_id' => 'required|exists:publishers,id',
            'author_id' => 'required|exists:authors,id',
        ]);

        $book = Book::findOrFail($id);
        $book->update($validatedData);
        return response()->json($book, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
}
