document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Perform login validation here
            // For simplicity, let's assume the validation is successful
            alert("Login Successful!");
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Perform signup validation here
            // For simplicity, let's assume the validation is successful
            alert("Sign Up Successful!");
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Perform forgot password validation here
            // For simplicity, let's assume the validation is successful
            alert("Password Reset Email Sent!");
        });
    }
});
