<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function show(){
        return Task::all();
    }
    
    public function getById(Task $task){
        return $task;
    }

    public function create(Request $request){
        return Task::create([
            'name' => $request->name,
            'is_done' => false
        ]);
    }

    public function edit(Request $request, Task $task){
        return $task->update([
            'name' => $request->name,
            'is_done' => $request->isDone ?? $task->is_done
        ]);
    }

    public function updateDoneStatus(Task $task){
        return $task->update([
            'is_done' => !$task->is_done
        ]);
    }

    public function delete(Task $task){
        return $task->delete();
    }
}
