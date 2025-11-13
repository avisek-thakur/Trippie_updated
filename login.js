
// Login form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const goToSignup = document.getElementById('goToSignup');
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validation checks
        if (!email || !password) {
            showAlert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.');
            return;
        }
        
        if (password.length < 6) {
            showAlert('Password must be at least 6 characters.');
            return;
        }
        
        // If all validations pass
        handleSuccessfulLogin();
    });
    
    // Signup navigation
    goToSignup.addEventListener('click', function() {
        window.location.href = "signup.html";
    });
    
    // Email validation helper
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
        return emailPattern.test(email);
    }
    
    // Alert helper function
    function showAlert(message) {
        alert(message);
    }
    
    // Successful login handler
    function handleSuccessfulLogin() {
        showAlert('Login successful! Redirecting...');
        window.location.href = "homepage.html";
    }
});
