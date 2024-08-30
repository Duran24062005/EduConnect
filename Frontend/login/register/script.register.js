document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const errorMensaje = document.getElementById('errorMensaje');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetear mensaje de error
        errorMensaje.textContent = '';
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmarPassword = document.getElementById('confirmarPassword').value;
        const tipoUsuario = document.getElementById('tipoUsuario').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const terminos = document.getElementById('terminos').checked;

        // Validaciones
        if (nombre === '') {
            mostrarError('Por favor, ingrese su nombre completo.');
            return;
        }

        if (email === '' || !isValidEmail(email)) {
            mostrarError('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (password.length < 8) {
            mostrarError('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (password !== confirmarPassword) {
            mostrarError('Las contraseñas no coinciden.');
            return;
        }

        if (tipoUsuario === '') {
            mostrarError('Por favor, seleccione un tipo de usuario.');
            return;
        }

        if (fechaNacimiento === '') {
            mostrarError('Por favor, ingrese su fecha de nacimiento.');
            return;
        }

        if (!terminos) {
            mostrarError('Debe aceptar los términos y condiciones.');
            return;
        }

        // Si todas las validaciones pasan, aquí se enviaría el formulario al servidor
        console.log('Formulario enviado', { nombre, email, tipoUsuario, fechaNacimiento });
        alert('Registro exitoso. Bienvenido a EduConnect!');
        form.reset();
    });

    function mostrarError(mensaje) {
        errorMensaje.textContent = mensaje;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});