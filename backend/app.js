// Servidor básico / lógica de la aplicación Poligastos
console.log("Aplicación Poligastos iniciada correctamente.");

// Ejemplo de controlador básico para manejo de eventos
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-gasto");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Gasto registrado localmente.");
        });
    }
});