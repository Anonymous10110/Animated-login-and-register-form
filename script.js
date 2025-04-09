
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        setTimeout(() => {
            registerForm.classList.add('active');
            // Trigger the slide-in animation for the Register text
            document.querySelector('#registerForm h2').style.animation = "textSlideIn 1s ease-out";
        }, 500); // Delay before showing register form
    } else {
        registerForm.classList.remove('active');
        setTimeout(() => {
            loginForm.classList.add('active');
            // Trigger the fade-in animation for the Login text
            document.querySelector('#loginForm h2').style.animation = "textFadeIn 1s ease-out";
        }, 500); // Delay before showing login form
    }
}

function validateLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username === "" || password === "") {
        alert("Please fill out both fields.");
        return false;
    }
    alert("Login successful!");
    return false; // For demo purposes, prevent actual form submission
}

function validateRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (username === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return false;
    }
    alert("Registration successful!");
    return false; // For demo purposes, prevent actual form submission
}

// Initially display login form
document.getElementById('loginForm').classList.add('active');

