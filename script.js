document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearFeedback();

        if (validateForm()) {

            console.log('Username:', username.value);
            console.log('Password:', password.value);

            alert('Login successful!');
        }
    });

    function validateForm() {
        let isValid = true;

        if (username.value.trim() === '') {
            showError(username, 'Username is required');
            isValid = false;
        }

        if (password.value.trim() === '') {
            showError(password, 'Password is required');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.innerText = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add('input-error');
    }

    function clearFeedback() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(function(element) {
            element.remove();
        });

        const inputElements = document.querySelectorAll('.input-error');
        inputElements.forEach(function(element) {
            element.classList.remove('input-error');
        });
    }
});
