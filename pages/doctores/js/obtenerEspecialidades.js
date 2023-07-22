fetch("http://localhost:8080/especialidades")
.then((response) => response.json())
.then((data) => {
  const selectEspecialidad = document.getElementById("especialidadDoctorInput");
  data.forEach((especialidad) => {
    const option = document.createElement("option");
    option.value = especialidad.id; 
    option.textContent = especialidad.nombre; 
    selectEspecialidad.appendChild(option);
  });
});