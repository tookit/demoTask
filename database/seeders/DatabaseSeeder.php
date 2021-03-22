<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $admin = User::factory()->create(['username'=>'admin']);

        $project1 = Project::factory()->create(['name'=>'demo project 1']);
        $project2 = Project::factory()->create(['name'=>'demo project 2']);

        $demo1Task  = Task::factory(2)->create(['project_id'=>$project1->id,'user_id'=>$admin->id]);
        $demo2Task  = Task::factory(2)->create(['project_id'=>$project2->id,'user_id'=>$admin->id]);


    }
}
