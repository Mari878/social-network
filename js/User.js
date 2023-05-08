class User {
	user_id = '';
	username = '';
	email = '';
	password = '';
	api_url = 'https://64423d3476540ce225874f8e.mockapi.io';

	create(){
		let data = {
			username: this.username,
			email: this.email,
			password: this.password
		}

		data = JSON.stringify(data);

		fetch(this.api_url + '/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		})
		.then(response => response.json())
		.then(data => {
			let session = new Session();
			session.user_id = data.id;
			session.startSession();




			window.location.href = 'hexa.html';
		})

	}
}