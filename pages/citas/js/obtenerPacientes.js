fetch("http://localhost:8080/pacientes")
.then((response) => response.json())
.then((data)=>{
    const selectPaciente = document.getElementById("pacienteCitaInput");
    data.forEach((paciente)=>{
        const option = document.createElement("option");
        option.value = paciente.numeroIdentificacion;
        option.textContent = paciente.nombre;
        selectPaciente.appendChild(option);
    });
});