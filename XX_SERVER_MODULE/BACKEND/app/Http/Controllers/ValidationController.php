<?php

namespace App\Http\Controllers;

use App\Models\Validation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as ValidatorFacade;

class ValidationController extends Controller
{
    public function store(Request $request)
    {
        $society = $request->user();
        if (Validation::where('society_id', $society->id)->exists()) {
            return response()->json([
                'message' => 'You have already requested data validation'
            ], 401);
        }

        $validator = ValidatorFacade::make($request->all(), [
            'job' => 'nullable|string',
            'job_description' => 'nullable|string',
            'income' => 'nullable|integer|min:0',
            'reason_accepted' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validator->errors(),
            ], 401);
        }

        Validation::create([
            'society_id' => $society->id,
            'status' => 'pending', 
            'job' => $request->job,
            'job_description' => $request->job_description,
            'income' => $request->income,
            'reason_accepted' => $request->reason_accepted,
        ]);

        return response()->json([
            'message' => 'Request data validation sent successful'
        ], 200);
    }

    public function index(Request $request)
    {
        $validation = Validation::with('validator')
            ->where('society_id', $request->user()->id)
            ->first();
        if (!$validation) {
            return response()->json(['validation' => null], 200);
        }

        return response()->json([
            'validation' => [
                'id' => $validation->id,
                'status' => $validation->status === 'declined' ? 'rejected' : $validation->status,
                'job' => $validation->job,
                'job_description' => $validation->job_description,
                'income' => $validation->income,
                'reason_accepted' => $validation->reason_accepted,
                'validator_notes' => $validation->validator_notes,
                'validator' => $validation->validator,
            ]
        ], 200);
    }
}
