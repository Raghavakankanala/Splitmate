import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";

let confirmationResult;

window.sendOTP = function () {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const recaptchaContainer = document.getElementById("recaptcha-container");

    // Show reCAPTCHA
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
    });

    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
        .then((result) => {
            confirmationResult = result;
            document.getElementById("status").innerText = "OTP Sent!";
        })
        .catch((error) => {
            document.getElementById("status").innerText = "Error: " + error.message;
        });
};

window.verifyOTP = function () {
    const otpCode = document.getElementById("otpCode").value;

    confirmationResult
        .confirm(otpCode)
        .then((result) => {
            document.getElementById("status").innerText = "Login Successful!";
            // Redirect to dashboard
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            document.getElementById("status").innerText = "Invalid OTP!";
        });
};