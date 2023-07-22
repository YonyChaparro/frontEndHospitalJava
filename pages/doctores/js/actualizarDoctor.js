document.addEventListener('DOMContentLoaded', function(){
    const formularioDoctor = document.getElementById('formulario-editarDoctor');
    formularioDoctor.addEventListener('submit', function(event){
        event.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        const nombre = document.getElementById('nombreDoctorInput').value;
        const apellido = document.getElementById('apellidoDoctorInput').value;
        const consultorio = document.getElementById('consultorioInput').value;
        const email = document.getElementById('emailInput').value;
        const especialidadSelect = document.getElementById('especialidadDoctorInput');
        const especialidadId = especialidadSelect.value;
        const especialidadNombre = especialidadSelect.options[especialidadSelect.selectedIndex].text;

        const datosActualizados = {
            nombre: nombre,
            apellido: apellido,
            consultorio: consultorio,
            email: email,
            especialidad :{
                id: Number(especialidadId),
                nombre: especialidadNombre
            }
        };
        console.log(id);
        actualizarDoctor(id, datosActualizados);
    });
});

function actualizarDoctor(id, datosActualizados){
    fetch(`http://localhost:8080/doctores/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosActualizados),
    })
    .then((response) => response.json())
    .then((doctorActualizado) => {
        alert('Doctor actualizado correctamente');
    })
    .catch((error) => {
        alert('Hubo un error al actualizar el doctor');
    });
}
