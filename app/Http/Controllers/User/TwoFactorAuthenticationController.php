<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use PragmaRX\Google2FA\Google2FA;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;

class TwoFactorAuthenticationController extends Controller
{
    /**
     * return tfa qr image
     *
     * @param Request $request
     * @return void
     */
    public function showQRCode(Request $request)
    {
        $user = $request->user();

        $google2fa = new Google2FA();
        $user->google2fa_secret = $google2fa->generateSecretKey();

        $user->save();
        $qrCodeUrl = $google2fa->getQRCodeUrl(
            $user->name,
            $user->email,
            $user->google2fa_secret
        );

        $writer = new Writer(
            new ImageRenderer(
                new RendererStyle(200),
                new ImagickImageBackEnd()
            )
        );
        $qrCodeImg = base64_encode($writer->writeString($qrCodeUrl));

        return response()->json(['qrCodeImg' => $qrCodeImg]);
    }


    /**
     * enable google2fa
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $secret = $request->secret;

        $google2fa = new Google2FA();
        $valid = $google2fa->verifyKey($user->getGoogle2FASecret(), $secret);

        \Log::warning($valid);
        if ($valid)
        {
            $user->setMfaType(User::MFA_TOTP);
            $user->setMfaFlag(true);
            $user->save();
        }

        return back()->with('message', '二要素認証の登録が完了しました。');
    }
}
