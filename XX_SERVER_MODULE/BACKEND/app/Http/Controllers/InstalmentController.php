<?php

namespace App\Http\Controllers;

use App\Models\Installment;

class InstalmentController extends Controller
{
    private function formatCar(Installment $car)
    {
        return [
            'id' => $car->id,
            'car' => $car->cars,
            'brand' => $car->brand?->brand,
            'price' => (string) $car->price,
            'description' => $car->description,
            'available_month' => $car->availableMonths->map(function ($month) {
                return [
                    'month' => $month->month,
                    'description' => $month->description,
                    'nominal' => $month->nominal,
                ];
            }),
        ];
    }

    public function index()
    {
        $cars = Installment::with(['brand', 'availableMonths'])->get();
        return response()->json([
            'cars' => $cars->map(fn ($car) => $this->formatCar($car)),
        ], 200);
    }

    public function show($id)
    {
        $car = Installment::with(['brand', 'availableMonths'])->find($id);

        if (!$car) {
            return response()->json([
                'message' => 'Instalment not found'
            ], 404);
        }

        return response()->json([
            'instalment' => $this->formatCar($car),
        ], 200);
    }
}
