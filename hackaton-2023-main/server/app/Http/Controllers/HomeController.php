<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use App\Models\Course;
use App\Models\Publisher;
use App\Models\Reservation;
use App\Models\Student;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function generalInfo()
    {
        $books = Book::count();
        $authors = Author::count();
        $courses = Course::count();
        $students = Student::count();
        $reservations = Reservation::count();
        $publishers = Publisher::count();
        $data = [
            'books' => $books,
            'authors' => $authors,
            'courses' => $courses,
            'students' => $students,
            'reservations' => $reservations,
            'publishers' => $publishers,
        ];
        return response()->json($data);
    }

}
