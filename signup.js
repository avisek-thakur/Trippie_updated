
// Signup form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const goToLogin = document.getElementById('goToLogin');
    
    // Form submission handler
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstname = document.getElementById('firstname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmpassword = document.getElementById('confirmpassword').value.trim();
        const accountType = document.getElementById('accountType').value;
        
        // Validation checks
        if (!firstname || !phone || !email || !password || !confirmpassword || !accountType) {
            showAlert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.');
            return;
        }
        
        if (!isValidPhone(phone)) {
            showAlert('Please enter a valid phone number.');
            return;
        }
        
        if (password.length < 6) {
            showAlert('Password must be at least 6 characters long.');
            return;
        }
        
        if (password !== confirmpassword) {
            showAlert('Passwords do not match.');
            return;
        }
        
        // If all validations pass
        handleSuccessfulSignup();
    });
    
    // Login navigation
    goToLogin.addEventListener('click', function() {
        window.location.href = "login.html";
    });
    
    // Email validation helper
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
        return emailPattern.test(email);
    }
    
    // Phone validation helper
    function isValidPhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone.replace(/\D/g, ''));
    }
    
    // Alert helper function
    function showAlert(message) {
        alert(message);
    }
    
    // Successful signup handler
    function handleSuccessfulSignup() {
        showAlert('Account created successfully! Redirecting to login...');
        window.location.href = "login.html";
    }
});
