document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error message
        errorMessage.textContent = '';
        
        // Validate email
        if (!emailInput.value) {
            showError('Por favor, ingrese su correo electrónico.');
            return;
        }
        
        if (!isValidEmail(emailInput.value)) {
            showError('Por favor, ingrese un correo electrónico válido.');
            return;
        }
        
        // Validate password
        if (!passwordInput.value) {
            showError('Por favor, ingrese su contraseña.');
            return;
        }
        
        if (passwordInput.value.length < 6) {
            showError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        
        // If all validations pass, you would typically send the login request to your server here
        console.log('Login attempt', { email: emailInput.value, password: passwordInput.value });
        
        // For demo purposes, we'll just show a success message
        showError('Inicio de sesión exitoso!', false);
    });

    function showError(message, isError = true) {
        errorMessage.textContent = message;
        errorMessage.style.color = isError ? '#ff0000' : '#008000';
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});