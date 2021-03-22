<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Task;
class TaskTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_create_task()
    {

        $task  = Task::factory()->make();
        $response = $this->postJson('/api/task', $task->toArray());
        $response->assertStatus(201);
    }

    public function test_create_fail() 
    {
        $task  = Task::factory()->make(['name'=> '']);
        $response = $this->postJson('/api/task', $task->toArray());
        $response->assertStatus(422);
    }

    public function test_update_task()
    {
        $task  = Task::factory()->create();
        $task->name = 'renamed task';
        $response = $this->putJson('/api/task/'.$task->id, $task->toArray());
        $response->assertStatus(200);
        $response->assertSee('renamed task');
    }


    public function test_delete_task()
    {
        $task  = Task::factory()->create();
        $response = $this->delete('/api/task/'.$task->id);
        $response->assertSee(['message'=>'Task deleted']);
        $response->assertStatus(200);

    }    
}
