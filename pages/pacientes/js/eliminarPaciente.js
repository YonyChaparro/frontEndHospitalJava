function eliminarPaciente(idPaciente) {
    fetch(`http://localhost:8080/pacientes/${idPaciente}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                obtenerPacientes();
                mostrarMensaje('Paciente eliminado con éxito.');
            } else {
                mostrarMensaje('Error al eliminar el paciente.', true);
            }
        })
        .catch(error => {
            mostrarMensaje('Error en la solicitud de eliminación.', true);
        });

        function mostrarMensaje(mensaje, tipo) {
            const mensajeDiv = document.getElementById('mensaje');
            mensajeDiv.innerText = mensaje;
            mensajeDiv.classList.remove('alert-success', 'alert-danger', 'd-none');
            mensajeDiv.classList.add(`alert-${tipo}`);
        }
}