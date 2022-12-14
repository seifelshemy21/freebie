function formlogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var text = "";


    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "please enter valid email!";
        error2.innerHTML = text;
        return false;

    }
    else if (password.length < 8) {
        text = "password lower than 8!";
        error2.innerHTML = text;
        return false;
    }
    else {
        return true;
    }
}
function DarkMode() {
    document.body.classList.toggle("dark");
}