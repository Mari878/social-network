class Session{
	user_id = '';

	startSession() {
		const d = new Date();
		d.setTime(d.getTime() + (2*24*60*60*1000));
		let expires = "expires=" + d.toUTCString();
		document.cookie = "user_id=" +this.user_id + ";" +expires;
	}


	getSession() {
	let name = 'user_id=';
	let ca = document.cookie.split(';');

	for(let i = 0; i < ca.lenght; i++){
		let c = ca[i];
		while (c.chartAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.lenght, c.lenght);
		}
	}
	return "";

	}


	destroySession() {
		let cookies = document.cookie.split(';');

		for (let i = 0; i < cookie.lenght; i++) {
			let cookie = cookies[i];
			let eqPos = cookie.indexOf("=");
			let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}

	}

}