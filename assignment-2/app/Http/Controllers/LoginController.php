<?php

namespace App\Http\Controllers;

use App\User;
use Auth;
use Hash;
use Illuminate\Http\Request;
use Redirect;
use Session;
use Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $rules = array(
            'phone' => 'required',
            'password' => 'required',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return back()->withErrors($validator, 'login')->withInput();
        } else {

            if (Auth::attempt(array(
                'phone' => $request->get('phone'),
                'password' => $request->get('password'),
            ))) {
                session([
                    'phone' => $request->get('phone'),
                ]);
                return Redirect::home();
            } else {
                Session::flash('message', "Invalid Credentials , Please try again.");
                return back();
            }
        }
    }

    public function register(Request $request)
    {
        $rules = array(
            'phone' => 'required|unique:users',
            'password' => 'required|min:6|confirmed',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return Redirect::back()->withErrors($validator, 'register')->withInput();
        } else {
            $user = new User();
            $user->phone = $request->get('phone');
            $user->password = Hash::make($request->get('password'));
            $user->remember_token = $request->get('_token');

            $user->save();
            return Redirect::home();
        }
    }


    public function update(Request $request)
    {
        $rules = array(
            'phone' => 'required|unique:users',
            'password' => 'required|min:6|confirmed',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return back()->withErrors($validator, 'register')->withInput();
        } else {
            $user = Auth::user();
            $user->phone = $request->get('phone');
            $user->password = Hash::make($request->get('password'));
            $user->remember_token = $request->get('_token');

            $user->save();
            return back();
        }
    }


    public function delete()
    {
        $user = Auth::user();
        $user->delete();
        return redirect()->route('login');
    }

    public function logout()
    {
        Session::flush();
        Auth::logout();
        return back();
    }
}
