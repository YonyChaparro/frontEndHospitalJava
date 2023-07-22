function obtenerPaciente(idPaciente) {
    fetch(`http://localhost:8080/pacientes/${idPaciente}`)
        .then((response) => response.json())
        .then((datosPaciente) => {
            cargarDatosEnFormulario(datosPaciente);
        })
        .catch((error) => {
            console.error('Error al obtener los datos del paciente:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idPaciente = urlParams.get('id');

    obtenerPaciente(idPaciente);
});

function cargarDatosEnFormulario(datosPaciente) {
    console.log(datosPaciente);
    const nombreInput = document.getElementById('nombrePacienteInput');
    const apellidoInput = document.getElementById('apellidoPacienteInput');
    const celularInput = document.getElementById('celularPacienteInput');
    const edadInput = document.getElementById('edadPacienteInput');
    const numeroInput = document.getElementById('numeroPacienteInput');

    if (nombreInput && apellidoInput && celularInput && edadInput && numeroInput) {
        nombreInput.value = datosPaciente.nombre;
        apellidoInput.value = datosPaciente.apellido;
        celularInput.value = datosPaciente.numeroTelefono;
        edadInput.value = datosPaciente.edad;
        numeroInput.value = datosPaciente.numeroIdentificacion;
    } else {
        console.error('Error al cargar los datos del paciente: los elementos del formulario no existen en el DOM');
    }
}