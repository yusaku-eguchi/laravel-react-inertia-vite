<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Post;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    /**
     * mfa totp
     */
    public const MFA_TOTP = '1';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'mfa_flag',
        'mfa_type',
        'google2fa_secret',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'mfa_flag' => 'boolean',
    ];

    /**
     * 投稿を取得
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    /**
     * get google 2fa secret
     *
     * @return string
     */
    public function getGoogle2FASecret() : string
    {
        return $this->google2fa_secret;
    }

    /**
     * set mfa type
     *
     * @param string
     * @return void
     */
    public function setMfaType(string $mfaType) : void
    {
        $this->mfa_type = $mfaType;
    }

    /**
     * set mfa flag
     *
     * @param bool
     * @return void
     */
    public function setMfaFlag(bool $mfaFlag)
    {
        $this->mfa_flag = $mfaFlag;
    }

}
