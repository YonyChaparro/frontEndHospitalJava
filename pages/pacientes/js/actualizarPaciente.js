document.addEventListener('DOMContentLoaded', function () {
    
    const formularioPaciente = document.getElementById('formulario-editarPaciente');
    formularioPaciente.addEventListener('submit', function (event) {
      event.preventDefault(); 
      const nombre = document.getElementById('nombrePacienteInput').value;
      const apellido = document.getElementById('apellidoPacienteInput').value;
      const numeroIdentificacion = document.getElementById('numeroPacienteInput').value;
      const edad = document.getElementById('edadPacienteInput').value;
      const numeroTelefono = document.getElementById('celularPacienteInput').value;
      const datosActualizados = {
        nombre: nombre,
        apellido: apellido,
        numeroIdentificacion: Number(numeroIdentificacion),
        edad: parseInt(edad),
        numeroTelefono: Number(numeroTelefono),
      };
      console.log(numeroIdentificacion);
      actualizarPaciente(numeroIdentificacion, datosActualizados);
    });
  });
  
  function actualizarPaciente(numeroIdentificacion, datosActualizados) {

    fetch(`http://localhost:8080/pacientes/${numeroIdentificacion}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datosActualizados),
    })
      .then((response) => response.json())
      .then((pacienteActualizado) => {
        console.log('Paciente actualizado:', pacienteActualizado);
        alert('Paciente actualizado correctamente');
      })
      .catch((error) => {
        console.error('Error al actualizar el paciente:', error);
        alert('Hubo un error al actualizar el paciente');
      });
  }