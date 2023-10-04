document.getElementById('formulario').addEventListener('submit'), (event) => {
    // Prevenir la acción que viene por defecto
    event.preventDefault()

    // Validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, ingrese su nombre'
        errorNombre.classList.add('error-messge')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-messge')
    }

    // Validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, ingrese un email válido'
        emailError.classList.add('error-messge')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-messge')
    }

    // Validar la contraseña
    let contraseñaEntrada = document.getElementById('password')
    let contraseñaError = document.getElementById('passwordError')

    if (contraseñaEntrada.value.legth < 8) {
        contraseñaError.textContent = 'La contraseña debe tener 8 caracteres'
        contraseñaError.classList.add('error-messge')
    } else {
        contraseñaError.textContent = ''
        contraseñaError.classList.remove('error-messge')
    }

    // Si todos los campos son válidos enviar formulario
}