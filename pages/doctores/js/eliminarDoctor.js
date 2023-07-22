function eliminarDoctor(idDoctor){
    fetch(`http://localhost:8080/doctores/${idDoctor}`,{
        method:'DELETE'
    })
    .then(response =>{
        if(response.ok){
            obtenerDoctores();
            mostrarMensaje('Doctor eliminada con éxito.');
        }else{
            mostrarMensaje('Error al eliminar el doctor', true);
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