document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    var loginForm = document.querySelector('.login-box form');

    // Add submit event listener to the form
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the username and password entered by the user
        var username = document.querySelector('.login-box input[type="text"]').value;
        var password = document.querySelector('.login-box input[type="password"]').value;

        // Check if username and password are not empty
        if (username.trim() !== '' && password.trim() !== '') {
            // Store the username and password in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // Redirect the user to the home page
            window.location.href = 'http://127.0.0.1:3000/home.html';
        } else {
            alert('Please enter both username and password.');
        }
    });
});
