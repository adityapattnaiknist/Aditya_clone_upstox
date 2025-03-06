// script.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        const userIdInput = document.querySelector('.user[type="tel"]');
        const passwordInput = document.querySelector('.user[type="password"]');

        // Check if User ID is valid
        if (!userIdInput.value.trim()) {
            alert('Please enter your User ID.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if Password is valid
        if (!passwordInput.value.trim()) {
            alert('Please enter your password.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // If both fields are valid, allow submission
        alert('Login successful!'); // Replace with actual login logic
    });
});