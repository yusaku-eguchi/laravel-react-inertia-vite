<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage)
                ->subject('会員登録完了のお知らせ')
                ->greeting('会員登録いただきありがとうございます')
                ->line('メール確認ボタンを押下いただき、メールアドレスの確認を完了してください')
                ->action('メールアドレスを確認する', $url);
        });

        ResetPassword::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage)
                ->subject('パスワードの再設定')
                ->greeting('パスワード再設定')
                ->line('パスワード再設定ボタンを押下いただき、パスワードの再設定を行ってください')
                ->action('パスワード再設定', $url)
                ->line('このリンクの有効期限は60秒です。');
        });
    }
}
