function obtenerEspecialidad(id) {
    fetch(`http://localhost:8080/especialidades/${id}`)
      .then((response) => response.json())
      .then((datosEspecialidad) => {
        cargarDatosEnFormulario(datosEspecialidad);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la especialidad:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    if (id) {
      obtenerEspecialidad(id);
    } else {
      console.error('Error al cargar los datos de la especialidad: el ID no está presente en la URL');
    }
  });
  
  function cargarDatosEnFormulario(datosEspecialidad) {
    const nombre = document.getElementById('nombreEspecialidadInput');
  
    if (nombre) {
      nombre.value = datosEspecialidad.nombre;
    } else {
      console.error('Error al cargar los datos de la especialidad: los elementos del formulario no existen en el DOM');
    }
  }
  