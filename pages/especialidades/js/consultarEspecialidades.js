function obtenerEspecialidades() {
    fetch('http://localhost:8080/especialidades')
        .then(response => response.json())
        .then(especialidades => {
            const tbody = document.querySelector('#especialidades-table tbody');
            tbody.innerHTML = '';
            especialidades.forEach(especialidad => {
                const row = ` 
                    <tr>
                        <td>${especialidad.id}</td>
                        <td>${especialidad.nombre}</td>
                        <td>
                            <button class="btn btn-primary" onclick="obtenerEspecialidad(${especialidad.id})">Editar</button>
                            <button class="btn btn-danger" onclick="eliminarEspecialidad(${especialidad.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
        })
        .catch(error => console.error('Error al obtener la lista de especialiades'));
}

obtenerEspecialidades();

function obtenerEspecialidad(id){
    window.location.href = `http://127.0.0.1:5500/pages/especialidades/editarEspecialidad.html?id=${id}`;
}