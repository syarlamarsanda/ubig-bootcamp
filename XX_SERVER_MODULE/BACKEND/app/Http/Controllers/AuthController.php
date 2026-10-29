<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\Society;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $society = Society::with('regional')
            ->where('id_card_number', $request->id_card_number)
            ->where('password', $request->password)
            ->first();

        if (!$society) {
            return response()->json([
                'message' => 'ID Card Number or Password incorrect'
            ], 401);
        }

        $token = md5($society->id_card_number . microtime() . uniqid());

        $society->update([
            'login_tokens' => $token
        ]);

        $userData = $society->toArray();
        $regionalData = $society->regional ? [
            'regional' => [
                'id' => $society->regional->id,
                'province' => $society->regional->province,
                'district' => $society->regional->district,
            ]
        ] : [];

        unset(
            $userData['id'],
            $userData['id_card_number'],
            $userData['regional_id'],
            $userData['login_tokens'],
            $userData['regional']
        );

        $responseData = array_merge(
            $userData,
            ['token' => $token],
            $regionalData
        );

        return response()->json($responseData, 200);
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();

        $society = $token ? Society::where('login_tokens', $token)->first() : null;

        if (!$token || !$society) {
            return response()->json([
                'message' => 'Invalid token'
            ], 401);
        }

        $society->update([
            'login_tokens' => null
        ]);

        return response()->json([
            'message' => 'Logout success'
        ], 200);
    }
}
