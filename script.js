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

    // Validar la contraseña

    // Si todos los campos son válidos enviar formulario
}