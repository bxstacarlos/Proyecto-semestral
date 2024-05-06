document.addEventListener("DOMContentLoaded", function() {
    const rutInput = document.getElementById("rut");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const telefonoInput = document.getElementById("telefono");
    const regionesInput = document.getElementById("regiones");
    const nivelEducativoInput = document.getElementById("nivelEducativo");
    const guardarBtn = document.getElementById("guardarBtn");

    guardarBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        if (!validarRut(rutInput.value)) {
            alert("El rut ingresado no es válido.");
            return;
        }

        if (nombreInput.value.trim() === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        if (apellidoInput.value.trim() === "") {
            alert("Por favor, ingresa tu apellido.");
            return;
        }

        if (fechaNacimientoInput.value === "") {
            alert("Por favor, selecciona tu fecha de nacimiento.");
            return;
        }

        if (!validarTelefono(telefonoInput.value)) {
            alert("Por favor, ingresa un número de teléfono válido (9 dígitos y solo números).");
            return;
        }

        if (regionesInput.value === "") {
            alert("Por favor, selecciona tu región.");
            return;
        }

        if (nivelEducativoInput.value === "") {
            alert("Por favor, selecciona tu nivel educativo.");
            return;
        }

        // Si todas las validaciones pasan, puedes enviar el formulario aquí
        alert("¡Formulario válido! Los datos pueden ser enviados.");
    });

    function validarRut(rut) {
        // Limpia el rut de puntos y guiones y convierte la 'k' en minúscula
        rut = rut.replace(/[.-]/g, "").toLowerCase();
        
        // Extrae el dígito verificador del rut
        const dv = rut.slice(-1);
        // Extrae el cuerpo del rut (sin el dígito verificador)
        const cuerpo = rut.slice(0, -1);

        // Calcula el dígito verificador esperado
        let suma = 0;
        let multiplicador = 2;
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo.charAt(i)) * multiplicador;
            multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
        const dvEsperado = 11 - (suma % 11);
        const dvCalculado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "k" : dvEsperado.toString();

        // Compara el dígito verificador esperado con el ingresado
        return dv === dvCalculado;
    }

    function validarTelefono(telefono) {
        // Validar que el teléfono tenga exactamente 9 dígitos y sean números
        return /^\d{9}$/.test(telefono);
    }
});
