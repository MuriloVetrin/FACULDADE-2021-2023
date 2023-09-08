<?php

namespace App\Http\Controllers;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    //lista os cursos cadastrados
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
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
            'coordinator' => 'required',
            'duration' => 'required|integer',
        ]);

        $course = Course::create($validatedData);
        return response()->json($course, 201);
    }

    /**
     * Display the specified resource.
     */

    //Serve como se fosse uma especie de "Botão de Detalhes"
    public function show(string $id)
    {
        $course = Course::findOrFail($id);
        return response()->json($course);
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
            'coordinator' => 'required',
            'duration' => 'required|integer',
        ]);

        $course = Course::findOrFail($id);
        $course->update($validatedData);
        return response()->json($course, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $course = Course::findOrFail($id);
        $course->delete();
        return response()->json(null, 204);
    }
}
