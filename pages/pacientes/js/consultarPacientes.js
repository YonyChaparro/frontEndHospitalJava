function obtenerPacientes() {
    fetch('http://localhost:8080/pacientes')
        .then(response => response.json())
        .then(pacientes => {
            const tbody = document.querySelector('#pacientes-table tbody');
            tbody.innerHTML = '';
            pacientes.forEach(paciente => {
                const row = `
                    <tr>
                        <td>${paciente.numeroIdentificacion}</td>
                        <td>${paciente.nombre}</td>
                        <td>${paciente.apellido}</td>
                        <td>${paciente.edad}</td>
                        <td>${paciente.numeroTelefono}</td>
                        <td>
                            <button class="btn btn-primary" onclick="obtenerPaciente(${paciente.numeroIdentificacion})">Editar</button>
                            <button class="btn btn-danger" onclick="eliminarPaciente(${paciente.numeroIdentificacion})">Eliminar</button>
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error al obtener la lista de pacientes:', error));
}


obtenerPacientes();

function obtenerPaciente(idPaciente){
    window.location.href = `http://127.0.0.1:5500/pages/pacientes/editarPacientes.html?id=${idPaciente}`;
}