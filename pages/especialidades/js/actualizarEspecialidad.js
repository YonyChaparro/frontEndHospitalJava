document.addEventListener('DOMContentLoaded', function () {
    const formularioEspecialidad = document.getElementById('formulario-editarEspecialidad');
    formularioEspecialidad.addEventListener('submit', function (event) {
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const nombre = document.getElementById('nombreEspecialidadInput').value;
        const datosActualizados = {
            nombre: nombre
        };
        actualizarEspecialidad(id, datosActualizados);
    });
});

function actualizarEspecialidad(id, datosActualizados) {
    fetch(`http://localhost:8080/especialidades/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosActualizados),
    })
    .then((response) => response.json())
    .then((especiadlidadActualizada) => {
        alert('Especialidad actualizada correctamente');
    })
    .catch((error) => {
        alert('Hubo un error al actualizar la especialidad');
    });
}
