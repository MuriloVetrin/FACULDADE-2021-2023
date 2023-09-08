<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Student;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function login(String $ra)
    {

        $student = Student::where('ra', $ra)->first();

        if ($student) {

            return response()->json(['id' => $student->id,'ra' => $student->ra, 'message' => 'RA permitido']);
        }
        return response()->json(['id' => false, 'message' => 'RA não cadastrado'], 404);
    }


    public function getBooks()
    {
        $books = Book::with('author', 'publisher')->get();
        return response()->json($books);
    }

    public function getBookDetails(string $id)
    {
        $books = Book::with('author', 'publisher',)->findOrFail($id);
        return response()->json($books);
    }

    public function getBooksReservationByUserId(string $id)
    {
        $books = Book::with('author', 'publisher')->whereHas('reservation', function ($query) use ($id) {
            $query->where('student_id', $id);
        })->get();

        return response()->json($books);
    }

    public function getMe(string $id)
    {
        $me = Student::with('course')->whereHas('reservation', function ($query) use ($id) {
            $query->where('student_id', $id);
        })->first();;

        return response()->json($me);
    }
    

}