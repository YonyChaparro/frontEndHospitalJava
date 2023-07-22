fetch("includes/main.html")
  .then((response) => response.text())
  .then((data) => {
    const headerContainer = document.getElementById("main-container");
    headerContainer.innerHTML = data;
  });
