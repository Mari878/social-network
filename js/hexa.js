let session = new Session();
session = session.getSession();


if(session !== "") {
	alert('ulogovan si');
} else{
	window.location.href = "/";
}