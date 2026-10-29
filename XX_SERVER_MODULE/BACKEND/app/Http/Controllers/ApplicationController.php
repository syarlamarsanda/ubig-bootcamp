<?php

namespace App\Http\Controllers;

use App\Models\AvailableMonth;
use App\Models\InstallmentApplySociety;
use App\Models\InstallmentApplyStatus;
use App\Models\Validation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator as ValidatorFacade;


class ApplicationController extends Controller
{
   
    public function store(Request $request)
    {
        $society = $request->user();
        $validation = Validation::where('society_id', $society->id)->first();
        if (!$validation || $validation->status !== 'accepted') {
            return response()->json([
                'message' => 'Your data validator must be accepted by validator before'
            ], 401);
        }

        $validator = ValidatorFacade::make($request->all(), [
            'instalment_id' => 'required|integer|exists:installment,id',
            'months' => 'required|integer',
            'notes' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validator->errors(),
            ], 401);
        }

        if (InstallmentApplySociety::where('society_id', $society->id)->exists()) {
            return response()->json([
                'message' => 'Application for a instalment can only be once'
            ], 401);
        }

        $availableMonth = AvailableMonth::where('installment_id', $request->instalment_id)
            ->where('month', $request->months)
            ->first();

        if (!$availableMonth) {
            return response()->json([
                'message' => 'Invalid field',
                'errors' => [
                    'months' => ['The selected months is not available for this instalment.']
                ],
            ], 401);
        }

        DB::transaction(function () use ($request, $society, $availableMonth) {
            $apply = InstallmentApplySociety::create([
                'notes' => $request->notes,
                'available_month_id' => $availableMonth->id,
                'date' => now()->toDateString(),
                'society_id' => $society->id,
                'installment_id' => $request->instalment_id,
            ]);

            InstallmentApplyStatus::create([
                'date' => now()->toDateString(),
                'society_id' => $society->id,
                'installment_id' => $request->instalment_id,
                'available_month_id' => $availableMonth->id,
                'installment_apply_societies_id' => $apply->id,
                'status' => 'pending',
            ]);
        });

        return response()->json([
            'message' => 'Applying for Instalment successful'
        ], 200);
    }

    public function index(Request $request)
    {
        $applies = InstallmentApplySociety::with([
                'installment.brand',
                'availableMonth',
                'applyStatus',
            ])
            ->where('society_id', $request->user()->id)
            ->get();

        $instalments = $applies->groupBy('installment_id')->map(function ($group) {
            $car = $group->first()->installment;

            return [
                'id' => $car->id,
                'car' => $car->cars,
                'brand' => $car->brand?->brand,
                'price' => (string) $car->price,
                'description' => $car->description,
                'applications' => $group->map(function ($apply) {
                    return [
                        'month' => (string) $apply->availableMonth?->month,
                        'nominal' => (string) $apply->availableMonth?->nominal,
                        'apply_status' => $apply->applyStatus?->status ?? 'pending',
                        'notes' => $apply->notes,
                        'date' => $apply->date, 
                    ];
                })->values(),
            ];
        })->values();

        return response()->json([
            'instalments' => $instalments,
        ], 200);
    }
}
