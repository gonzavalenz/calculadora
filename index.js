// Obtener el input y los botones
const input = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// Agregar evento "click" a los botones
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Obtener el valor del boton
    let value = button.getAttribute("value");
  
    // Modificar el input dependiendo del boton presionado
    switch (value) {
      case "=":
        try {
          if (eval(input.value) === "undefined" || eval(input.value) === "NaN"){
            throw miExcepcionUsuario;
          }
          input.value = eval(input.value);
        } catch (error) {
          // Se produjo un error al evaluar la expresión
          input.value = ""
          alert("Error: Expresión no válida");
        }
        break;
      case "C":
        input.value = "";   
        break;
      default:
        input.value += value;          
      }
  });
});

