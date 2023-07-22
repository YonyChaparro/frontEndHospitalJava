const formulario = document.getElementById('formulario-especialidad');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombreEspecialidadInput').value;

    const nuevaEspecialidad = {
        nombre: nombre
    };
    fetch('http://localhost:8080/especialidades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaEspecialidad)
    })
        .then(function (response) {
            if (response.ok) {
                alert('Especialidad creada exitosamente');
                window.location.href = 'http://127.0.0.1:5500/pages/especialidades/consultarEspecialidades.html';
            } else {
                alert('Error al crear la especialidad');
                console.error(response);
            }
        })
        .catch(function (error) {
            alert('Error al crear la especialidad');
            console.error(error);

        });
});
