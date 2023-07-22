function obtenerDoctores(){
    fetch('http://localhost:8080/doctores')
    .then(response => response.json())
    .then(doctores=>{
        const tbody = document.querySelector('#doctores-table tbody');
        tbody.innerHTML = '';
        doctores.forEach(doctor => {
            const row = ` 
            <tr>
                <td>${doctor.nombre}</td>
                <td>${doctor.apellido}</td>
                <td>${doctor.consultorio}</td>
                <td>${doctor.email}</td>
                <td>${doctor.especialidad.nombre}</td>
                <td>
                    <button class="btn btn-primary" onclick="obtenerDoctor(${doctor.id})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarDoctor(${doctor.id})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row; 
        });
    })
    .catch(error => console.error('Error al obtener la lista de doctores'));
}

obtenerDoctores();

function obtenerDoctor(id){
    window.location.href = `http://127.0.0.1:5500/pages/doctores/editarDoctor.html?id=${id}`;
}