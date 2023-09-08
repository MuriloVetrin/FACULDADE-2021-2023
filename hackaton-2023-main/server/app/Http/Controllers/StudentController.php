<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return response()->json($students);
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
            'ra' => 'required|unique:students',
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'uf' => 'required',
            'phone' => 'required',
            'course_id' => 'required|exists:courses,id',
        ]);

        $student = Student::create($validatedData);
        return response()->json($student, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::findOrFail($id);
        return response()->json($student);
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
        //falta o update no aluno
        $validatedData = $request->validate([
            'ra' => 'required|unique:students,ra,' . $id,
            'name' => 'required',
            'address' => 'required',
            'city' => 'required',
            'uf' => 'required',
            'phone' => 'required',
            'course_id' => 'required|exists:courses,id',
        ]);
    
        $student = Student::findOrFail($id);
        $student->update($validatedData);
    
        return response()->json($student, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::findOrFail($id);
        $student->delete();
        return response()->json(null, 204);
    }
}
