const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        //window.location.href = "../Quiz_Service/Quiz.html";
		window.location.href = "http://192.168.64.142:30000/Quiz.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


