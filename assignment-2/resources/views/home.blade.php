<form action="/update" method="POST">
		@csrf
		<label><b>phone</b></label>
		<input type="text" name="phone" placeholder="Enter Phone Number" value="{{ $phone }}" required>
		<label><b>New Password</b></label>
		<input required type="password" name="password" placeholder="Enter Password">
		<label><b>Confirm Password</b></label>
		<input required type="password" name="password_confirmation" placeholder="Enter Password">
		<button type="submit">save changes</button>
</form>

<hr>

<form action="/delete" method="POST">
		@csrf
		<button type="submit">Delete</button>
</form>

