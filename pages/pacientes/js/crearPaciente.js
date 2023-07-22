const formulario = document.getElementById('formulario-paciente');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario
  const numeroIdentificacion = document.getElementById('numeroPacienteInput').value;
  const nombre = document.getElementById('nombrePacienteInput').value;
  const apellido = document.getElementById('apellidoPacienteInput').value;
  const edad = document.getElementById('edadPacienteInput').value;
  const numeroTelefono = document.getElementById('celularPacienteInput').value;

  // Crear el objeto de paciente con los datos del formulario
  const nuevoPaciente = {
    numeroIdentificacion : Number(numeroIdentificacion),
    nombre: nombre,
    apellido: apellido,
    edad: parseInt(edad),
    numeroTelefono:  Number(numeroTelefono)
  };
  console.log('Datos del paciente:', nuevoPaciente);
  // Realizar la solicitud POST al backend para crear el paciente
  fetch('http://localhost:8080/pacientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoPaciente)
  })
    .then(function(response) {
      if (response.ok) {
        // La solicitud fue exitosa, puedes mostrar un mensaje de éxito o redirigir a otra página
        alert('Paciente creado exitosamente');
        window.location.href = 'http://127.0.0.1:5500/pages/pacientes/consultarPacientes.html';
      } else {
        // Si ocurrió un error en la solicitud, muestra un mensaje de error
        alert('Error al crear el paciente');
        console.error(response);
      }
    })
    .catch(function(error) {
      // Si ocurrió un error en la solicitud, muestra un mensaje de error
      alert('Error al crear el paciente');
      console.error(error);
    });
});