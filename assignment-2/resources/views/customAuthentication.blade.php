<h1>login</h1>

@if (count($errors->login) > 0)
	<div>
		<ul>
			@foreach ($errors->login->all() as $error)
			<P>{{ $error }}</p>
			@endforeach
		</ul>
	</div>
@endif

@if (Session::has('message'))
	<div>{{ Session::get('message') }}</div>
@endif

<form action="/login" method="POST">
	@csrf
	<label><b>phone</b></label>
	<input name="phone" type="text"	placeholder="Enter phone" required>
	<label><b>Password</b></label>
	<input name="password" type="password" placeholder="Enter Password" required>
	<input type="submit" value="Login">
	<input type="checkbox" name="remember" checked="checked"> Remember me
</form>

<hr>

<h1>sign-in</h1>

@if (count($errors->register) > 0)
	<div>
		<ul>
			@foreach ($errors->register->all() as $error)
			<P>{{ $error }}</p>
			@endforeach
		</ul>
	</div>
@endif

<form action="/register" method="POST" id="regForm">
	@csrf
	<label><b>phone</b></label>
	<input type="text" name="phone" placeholder="Enter Phone Number" value="{{ old('phone') }}" required>
	<label><b>Password</b></label>
	<input required type="password" name="password" placeholder="Enter Password">
	<label><b>Confirm Password</b></label>
	<input required type="password" name="password_confirmation" placeholder="Enter Password">
	<button type="submit">SignUp</button>
</form>
