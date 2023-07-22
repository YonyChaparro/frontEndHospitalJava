function obtenerDoctor(id){
    fetch(`http://localhost:8080/doctores/${id}`)
    .then((response)=>response.json())
    .then((datosDoctor)=>{
        cargarDatosEnFormulario(datosDoctor);
    })
    .catch((error)=>{
        console.error('Error al obtener los datos del doctor:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    if (id) {
      obtenerDoctor(id);
    } else {
      console.error('Error al cargar los datos de la especialidad: el ID no está presente en la URL');
    }
  });

  function cargarDatosEnFormulario(datosDoctor) {
    const nombreInput = document.getElementById('nombreDoctorInput');
    const apellidoInput = document.getElementById('apellidoDoctorInput');
    const consultorioInput = document.getElementById('consultorioInput');
    const emailInput = document.getElementById('emailInput');
    const especialidadSelect = document.getElementById('especialidadDoctorInput');
  
    if (datosDoctor) {
      nombreInput.value = datosDoctor.nombre;
      apellidoInput.value = datosDoctor.apellido;
      consultorioInput.value = datosDoctor.consultorio;
      emailInput.value = datosDoctor.email;
  
      // Aquí asumimos que en datosDoctor.especialidad tienes el objeto de la especialidad del doctor.
      // Si no es así, deberás ajustar este código.
      especialidadSelect.value = datosDoctor.especialidad.id;
    } else {
      console.error('Error al cargar los datos del doctor: los elementos del formulario no existen en el DOM');
    }
  }