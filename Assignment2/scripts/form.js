function submitForm() {
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
	var message = document.getElementById("message").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
    alert("Name: " + name + "\nMessage: " + message);
    return false;
  }