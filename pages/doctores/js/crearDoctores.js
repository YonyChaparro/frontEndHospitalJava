const formulario = document.getElementById('formulario-doctores');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombreDoctorInput').value;
    const apellido = document.getElementById('apellidoDoctorInput').value;
    const consultorio = document.getElementById('consultorioInput').value;
    const email = document.getElementById('emailInput').value;
    const especialidadSelect = document.getElementById('especialidadDoctorInput');
    const especialidadId = especialidadSelect.value;
    const especialidadNombre = especialidadSelect.options[especialidadSelect.selectedIndex].text;

    const nuevoDoctor = {
        nombre: nombre,
        apellido: apellido,
        consultorio: consultorio,
        email: email,
        especialidad :{
            id: Number(especialidadId),
            nombre: especialidadNombre
        }
    };
    console.log('Datos del doctor:',nuevoDoctor);
    fetch('http://localhost:8080/doctores',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(nuevoDoctor)
    }).then(function(response) {
        if (response.ok) {
          // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
          alert('Doctor creado exitosamente');
          window.location.href = 'http://127.0.0.1:5500/pages/doctores/consultarDoctores.html';
        } else {
          // Si ocurrió un error en la solicitud, muestra un mensaje de error
          alert('Error al crear el doctor');
          console.error(response);
        }
      })
      .catch(function(error) {
        // Si ocurrió un error en la solicitud, muestra un mensaje de error
        alert('Error al crear el doctor');
        console.error(error);
      });

})