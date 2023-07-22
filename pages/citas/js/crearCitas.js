const formulario = document.getElementById('formulario-citas');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const pacienteSelect = document.getElementById('pacienteCitaInput');
    const especialidadSelect = document.getElementById('especialidadCitaInput');
    const pacienteId = pacienteSelect.value;
    const pacienteNombre = pacienteSelect.options[pacienteSelect.selectedIndex].text;
    const especialidadId = especialidadSelect.value;
    const especialidadNombre = especialidadSelect.options[especialidadSelect.selectedIndex].text;

    const nuevaCita = {
        paciente: {
            numeroIdentificacion: Number(pacienteId),
            nombre: pacienteNombre
        },
        especialidad: {
            id: Number(especialidadId),
            nombre: especialidadNombre
        }
    };
console.log('Datos de la cita:', nuevaCita);
fetch('http://localhost:8080/citas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevaCita)
}).then(function (response) {
    if (response.ok) {
        alert('Cita creada exitosamente');
        window.location.href = 'http://127.0.0.1:5500/pages/citas/consultarCitas.html';
    } else {
        alert('Error al crear la cita');
        console.error(response);
    }
})
    .catch(function (error) {
        alert('Error al crear la cita');
        console.error(error);
    });
});