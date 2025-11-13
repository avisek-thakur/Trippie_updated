// manageprofile.js - Only manageprofile-specific functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeFormFunctionality();
});

// Form Functionality
function initializeFormFunctionality() {
    // User data model
    const user = {
        id: 123,
        firstName: 'Lebron',
        lastName: 'James',
        phone: '9861421989',
        email: 'example@example.com',
        password: '',
        avatarUrl: ''
    };
    
    // Form elements
    const formElements = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        phone: document.getElementById('phone'),
        email: document.getElementById('email'),
        password: document.getElementById('password'),
        profilePicture: document.getElementById('profilePicture'),
        saveBtn: document.getElementById('saveBtn'),
        cancelBtn: document.getElementById('cancelBtn'),
        passwordToggle: document.getElementById('passwordToggle'),
        successMessage: document.getElementById('successMessage')
    };
    
    // Initialize form with user data
    populateForm(user, formElements);
    
    // Set up event listeners
    setupFormListeners(user, formElements);
}

// Populate form with user data
function populateForm(user, elements) {
    elements.firstName.value = user.firstName || '';
    elements.lastName.value = user.lastName || '';
    elements.phone.value = user.phone || '';
    elements.email.value = user.email || '';
    elements.password.value = '';
    
    // Set profile picture
    updateProfilePicture(user.avatarUrl, elements.profilePicture, user.firstName);
}

// Update profile picture display
function updateProfilePicture(avatarUrl, profileElement, firstName) {
    if (avatarUrl) {
        profileElement.style.backgroundImage = `url(${avatarUrl})`;
        profileElement.textContent = '';
        profileElement.style.backgroundSize = 'cover';
        profileElement.style.backgroundPosition = 'center';
    } else {
        profileElement.style.backgroundImage = '';
        profileElement.textContent = firstName ? firstName[0].toUpperCase() : 'U';
        profileElement.style.fontSize = '80px';
        profileElement.style.color = '#fff';
        profileElement.style.background = '#EF233C';
        profileElement.style.display = 'flex';
        profileElement.style.alignItems = 'center';
        profileElement.style.justifyContent = 'center';
    }
}

// Set up form event listeners
function setupFormListeners(user, elements) {
    // Cancel button - reset form to original user data
    elements.cancelBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            populateForm(user, elements);
            clearValidationErrors();
        }
    });
    
    // Save button - save user profile
    elements.saveBtn.addEventListener('click', function() {
        saveUserProfile(user, elements);
    });
    
    // Profile picture upload
    elements.profilePicture.addEventListener('click', function() {
        handleImageUpload(function(dataUrl) {
            user.avatarUrl = dataUrl;
            updateProfilePicture(dataUrl, elements.profilePicture, user.firstName);
        });
    });
    
    // Password visibility toggle
    elements.passwordToggle.addEventListener('click', function() {
        togglePasswordVisibility(elements.password, elements.passwordToggle);
    });
    
    // Input validation styling
    setupInputValidation(elements);
}

// Toggle password visibility
function togglePasswordVisibility(passwordField, toggleButton) {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordField.type = 'password';
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Handle image upload
function handleImageUpload(callback) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size too large. Please select an image under 5MB.');
                return;
            }
            
            // Check file type
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file.');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                callback(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    fileInput.click();
}

// Save user profile
function saveUserProfile(user, elements) {
    // Clear previous errors
    clearValidationErrors();
    
    // Validate form
    let isValid = true;
    
    // First name validation
    if (!elements.firstName.value.trim()) {
        showError(elements.firstName, 'firstNameError', 'First name is required');
        isValid = false;
    }
    
    // Last name validation
    if (!elements.lastName.value.trim()) {
        showError(elements.lastName, 'lastNameError', 'Last name is required');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!elements.email.value.trim()) {
        showError(elements.email, 'emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(elements.email.value)) {
        showError(elements.email, 'emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (basic)
    if (elements.phone.value && !/^\d+$/.test(elements.phone.value.replace(/\s/g, ''))) {
        showError(elements.phone, 'phoneError', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Password validation
    if (elements.password.value && elements.password.value.length < 6) {
        showError(elements.password, 'passwordError', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    elements.saveBtn.classList.add('loading');
    elements.saveBtn.textContent = 'Saving...';
    
    // Update user data
    user.firstName = elements.firstName.value.trim();
    user.lastName = elements.lastName.value.trim();
    user.phone = elements.phone.value.trim();
    user.email = elements.email.value.trim();
    
    // If password is provided, update it
    if (elements.password.value) {
        user.password = elements.password.value;
    }
    
    // Simulate API call with timeout
    setTimeout(function() {
        // Clear password field for security
        elements.password.value = '';
        
        // Reset button state
        elements.saveBtn.classList.remove('loading');
        elements.saveBtn.textContent = 'Save Changes';
        
        // Show success message
        showSuccessMessage(elements.successMessage);
        
        // In a real app, you would send the data to a server here
        console.log('User data saved:', {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            hasNewPassword: !!user.password,
            hasAvatar: !!user.avatarUrl
        });
    }, 1500);
}

// Show error message
function showError(inputElement, errorId, message) {
    inputElement.classList.add('error');
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Clear all validation errors
function clearValidationErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
    
    const errorInputs = document.querySelectorAll('.field input.error, .pw-field input.error');
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// Show success message
function showSuccessMessage(successElement) {
    successElement.classList.add('show');
    setTimeout(function() {
        successElement.classList.remove('show');
    }, 3000);
}

// Input validation styling
function setupInputValidation(elements) {
    const inputs = document.querySelectorAll('.field input, .pw-field input');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function(event) {
            const target = event.target;
            if (target.value.trim() === '' && (target.id === 'firstName' || target.id === 'lastName' || target.id === 'email')) {
                target.style.boxShadow = '0 0 4px #EF233C';
            } else {
                target.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
            }
        });
        
        input.addEventListener('focus', function(event) {
            event.target.style.boxShadow = '0 0 6px rgba(0,0,0,0.15)';
        });
        
        // Real-time validation for email
        if (input.id === 'email') {
            input.addEventListener('input', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (input.value && !emailRegex.test(input.value)) {
                    input.style.boxShadow = '0 0 4px #EF233C';
                } else {
                    input.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
                }
            });
        }
    });
}
