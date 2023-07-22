function eliminarEspecialidad(idEspecialidad){
    fetch(`http://localhost:8080/especialidades/${idEspecialidad}`,{
        method :'DELETE'
    })
        .then(response =>{
            if(response.ok){
                obtenerEspecialidades();
                mostrarMensaje('Especialidad eliminada con éxito.');
            }else{
                mostrarMensaje('Error al eliminar la especialidad', true);
            }
        })
        .catch(error => {
            mostrarMensaje('Error en la solicitud de eliminación', true);
        });

        function mostrarMensaje(mensaje, tipo){
            const mensajeDiv = document.getElementById('mensaje');
            mensajeDiv.innerText = mensaje;
            mensajeDiv.classList.remove('alert-success', 'alert-danger', 'd-none');
            mensajeDiv.classList.add(`alert-${tipo}`);
        }
}