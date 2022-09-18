<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->tinyInteger('mfa_flag')->default(0)->after('password')->comment('MFAフラグ');
            $table->tinyInteger('mfa_type')->nullable()->after('mfa_flag')->comment('MFAタイプ');
            $table->string('google2fa_secret')->nullable()->after('mfa_type')->comment('google2FAシークレット');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('mfa_flag');
            $table->dropColumn('mfa_type');
            $table->dropColumn('google2fa_secret');
        });
    }
};
