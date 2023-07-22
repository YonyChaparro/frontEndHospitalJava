function obtenerCitas(){
    fetch('http://localhost:8080/citas')
    .then(response => response.json())
    .then(citas=>{
        const tbody = document.querySelector('#citas-table tbody');
        tbody.innerHTML = '';
        citas.forEach(cita => {
            const row = ` 
            <tr>
                <td>${cita.paciente.nombre}</td>
                <td>${cita.paciente.apellido}</td>
                <td>${cita.doctor.consultorio}</td>
                <td>${cita.doctor.nombre}</td>
                <td>${cita.especialidad.nombre}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminarCita(${cita.id})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row; 
        });
    })
    .catch(error => console.error('Error al obtener la lista de citas'));
}

obtenerCitas();