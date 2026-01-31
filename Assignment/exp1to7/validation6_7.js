function validateForm() {
    var name = document.getElementById("name").value.trim();
    var pass = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    var namePattern = /^[A-Za-z ]+$/;
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var phonePattern = /^[0-9]{10}$/;

    if (name.length < 6 || !namePattern.test(name)) {
        alert("Name should have only alphabets and at least 6 characters.");
        return false;
    }

    if (pass.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter a valid email like name@domain.com.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    alert("Registration successful.");
    return true;
}
