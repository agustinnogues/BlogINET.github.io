document.addEventListener("DOMContentLoaded", () => {
  // Validación de formulario Bootstrap con feedback visual
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      // Muestra los valores en la barra de direcciones (GET)
      form.action = window.location.pathname; 
    }
    form.classList.add("was-validated");
  });
});
