<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Note::all();

        return response()->json([
            "status" => "success",
            "message" => "all notes",
            "data" => [
                "notes" => $notes,
            ],
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $note = Note::create([
            'title' => request('title'),
            'text' => request('text'),
        ]);

        return response()->json([
            "status" => "success",
            "message" => "note created",
            "data" => [
                "note" => $note,
            ],
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        return response()->json([
            "status" => "success",
            "message" => "single note",
            "data" => [
                "note" => $note,
            ],
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        $note->title = request('title') ? request('title') : $note->title;
        $note->text = request('text') ? request('text') : $note->text;

        $note->save();

        return response()->json([
            "status" => "success",
            "message" => "note updated",
            "data" => [
                "note" => $note,
            ],
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        $note->delete();

        return response()->json([
            "status" => "success",
            "message" => "note deleted",
            "data" => null,
        ], 200);
    }
}
