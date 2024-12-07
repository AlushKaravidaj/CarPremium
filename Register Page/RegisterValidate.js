document.getElementById("registerForm").addEventListener("submit", function (event) {
    var firstName = document.getElementById("First Name").value;
    var surname = document.getElementById("Surname").value;
    var email = document.getElementById("Email").value;
    var phoneNumber = document.getElementById("Phone Number").value;
    var remember = document.getElementById("remember").checked;

    if (firstName === "") {
        alert("First Name is required.");
        event.preventDefault();
        return false;
    }

    if (surname === "") {
        alert("Surname is required.");
        event.preventDefault();
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return false;
    }

    var phonePattern = /^[0-9]{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault();
        return false;
    }

    if (!remember) {
        alert("Please check the 'Remember Me' option.");
        event.preventDefault();
        return false;
    }

    return true;
});