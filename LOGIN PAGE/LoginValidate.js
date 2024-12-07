document.getElementById("loginForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "") {
        alert("Username is required.");
        event.preventDefault();
        return false;
    }

    if (password === "") {
        alert("Password is required.");
        event.preventDefault();
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return false;
    }

    return true;

    
});