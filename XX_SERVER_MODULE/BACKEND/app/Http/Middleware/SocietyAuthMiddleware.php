<?php

namespace App\Http\Middleware;

use App\Models\Society;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class SocietyAuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->bearerToken();
        $society = $token ? Society::where('login_tokens', $token)->first() : null;

        if (!$token || !$society) {
            return response()->json([
                'message' => 'Unauthorized user'
            ], 401);
        }

        $request->setUserResolver(function () use ($society) {
            return $society;
        });

        return $next($request);
    }
}
