// manageadminprofile.js - Only profile-specific functionality

// Form Functionality
function initializeAdminFormFunctionality() {
    // Admin data model
    const admin = {
        id: 1,
        firstName: "Admin",
        lastName: "User",
        phone: "1234567890",
        email: "admin@activitybooking.com",
        password: '',
        avatarUrl: ''
    };
    
    // Store original admin data for cancel functionality
    const originalAdminData = JSON.parse(JSON.stringify(admin));
    
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
    
    // Initialize form with admin data
    populateAdminForm(admin, formElements);
    
    // Set up event listeners
    setupAdminFormListeners(admin, formElements, originalAdminData);
    
    // Clear any validation errors on page load
    clearValidationErrors();
}

// Populate form with admin data
function populateAdminForm(admin, elements) {
    elements.firstName.value = admin.firstName || '';
    elements.lastName.value = admin.lastName || '';
    elements.phone.value = admin.phone || '';
    elements.email.value = admin.email || '';
    elements.password.value = '';
    
    // Set profile picture
    updateProfilePicture(admin.avatarUrl, elements.profilePicture, admin.firstName);
}

// Update profile picture display
function updateProfilePicture(avatarUrl, profileElement, firstName) {
    if (avatarUrl) {
        profileElement.style.backgroundImage = `url(${avatarUrl})`;
        profileElement.textContent = '';
        profileElement.style.backgroundSize = 'cover';
        profileElement.style.backgroundPosition = 'center';
        profileElement.style.backgroundColor = '#D9D9D9';
    } else {
        profileElement.style.backgroundImage = '';
        profileElement.textContent = firstName ? firstName[0].toUpperCase() : 'A';
        profileElement.style.fontSize = '80px';
        profileElement.style.color = '#fff';
        profileElement.style.backgroundColor = '#EF233C';
        profileElement.style.display = 'flex';
        profileElement.style.alignItems = 'center';
        profileElement.style.justifyContent = 'center';
    }
}

// Set up form event listeners
function setupAdminFormListeners(admin, elements, originalAdminData) {
    // Cancel button - reset form to original admin data
    elements.cancelBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
            // Reset admin object to original values
            Object.assign(admin, JSON.parse(JSON.stringify(originalAdminData)));
            
            // Reset form with original data
            populateAdminForm(admin, elements);
            
            // Clear validation errors
            clearValidationErrors();
        }
    });
    
    // Save button - save admin profile
    elements.saveBtn.addEventListener('click', function() {
        saveAdminProfile(admin, elements, originalAdminData);
    });
    
    // Profile picture upload
    elements.profilePicture.addEventListener('click', function() {
        handleImageUpload(function(dataUrl) {
            admin.avatarUrl = dataUrl;
            updateProfilePicture(dataUrl, elements.profilePicture, admin.firstName);
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

// Save admin profile
function saveAdminProfile(admin, elements, originalAdminData) {
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
    
    // Password validation - only if user entered a password
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
    
    // Update admin data
    admin.firstName = elements.firstName.value.trim();
    admin.lastName = elements.lastName.value.trim();
    admin.phone = elements.phone.value.trim();
    admin.email = elements.email.value.trim();
    
    // If password is provided, update it
    if (elements.password.value) {
        admin.password = elements.password.value;
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
        
        // Update the original admin data to the current state
        Object.assign(originalAdminData, JSON.parse(JSON.stringify(admin)));
        originalAdminData.password = ''; // Don't store password in original data
        
        // In a real app, you would send the data to a server here
        console.log('Admin data saved:', {
            firstName: admin.firstName,
            lastName: admin.lastName,
            phone: admin.phone,
            email: admin.email,
            hasNewPassword: !!admin.password,
            hasAvatar: !!admin.avatarUrl
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
        // Remove any initial validation styling
        input.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
        
        input.addEventListener('blur', function(event) {
            const target = event.target;
            // Only show error styling if field is required and empty
            if (target.value.trim() === '' && (target.id === 'firstName' || target.id === 'lastName' || target.id === 'email')) {
                target.style.boxShadow = '0 0 4px #EF233C';
            } else {
                target.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
            }
        });
        
        input.addEventListener('focus', function(event) {
            event.target.style.boxShadow = '0 0 6px rgba(0,0,0,0.15)';
        });
        
        // Real-time validation for email - only after user starts typing
        if (input.id === 'email') {
            let userHasInteracted = false;
            
            input.addEventListener('input', function() {
                userHasInteracted = true;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (userHasInteracted && input.value && !emailRegex.test(input.value)) {
                    input.style.boxShadow = '0 0 4px #EF233C';
                } else {
                    input.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
                }
            });
        }
        
        // Real-time validation for password - only if user starts typing
        if (input.id === 'password') {
            let userHasInteracted = false;
            
            input.addEventListener('input', function() {
                userHasInteracted = true;
                if (userHasInteracted && input.value && input.value.length < 6) {
                    input.style.boxShadow = '0 0 4px #EF233C';
                } else {
                    input.style.boxShadow = '0 0 4px rgba(0,0,0,0.12)';
                }
            });
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminFormFunctionality();
});
