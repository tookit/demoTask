<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Task as Model;
use App\Http\Requests\TaskRequest as ValidateRequest;
use App\Http\Resources\TaskResource as Resource;


use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class TaskController extends Controller
{
  /**
     * Display a listing of resource.
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $builder = QueryBuilder::for(Model::ordered())
            ->with(['owner','project'])
            ->allowedFilters([
                'name',
                AllowedFilter::exact('project_id')
            ]);

        return Resource::collection(

            $request->get('pageSize') !== '-1'
                ?
                $builder->paginate($request->get('pageSize'), ['*'], 'page')
                :
                $builder->get()

        );
    }

    /**
     * create a new resource.
     *
     * @param  ValidateRequest $request
     * @return Resource
     */
    public function store(ValidateRequest $request): Resource
    {
        $item = Model::create($request->validated());
        $resoure = new Resource($item);
        return $resoure
            ->additional(
                [
                    'meta' =>
                    [
                        'message' => 'Task created',
                    ]
                ]
            );
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id): Resource
    {
        $item = Model::with([])->findOrFail($id);
        return new Resource($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ValidateRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(ValidateRequest $request, $id)
    {
        $item = Model::findOrFail($id);
        $item->update($request->validated());
        $resource = new Resource($item);
        return $resource
            ->additional(
                [
                    'meta' =>
                    [
                        'message' => 'Task updated',
                    ]
                ]
            );
    }

    /**
     * Remove the specified Task from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Model::findOrFail($id);
        $item->delete();
        $resource = new Resource($item);
        return $resource
        ->additional(
            [
                'meta' =>
                [
                    'message' => 'Task deleted',
                ]
            ]
        );
    }

    public function swapOrder(Request $request)
    {
        $source = Model::find($request->get('source'));
        $target = Model::find($request->get('target'));
        $sourceOrder = $source->priority;
        $targetOrder = $target->priority;
        $source->priority  = $targetOrder;
        $target->priority  = $sourceOrder;
        $source->save();
        $target->save();
        $resource = new Resource([]);
        return $resource
        ->additional(
            [
                'meta' =>
                [
                    'message' => 'Task order updated',
                ]
            ]
        );
    }    

}
