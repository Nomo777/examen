
/*
Autor:keyla reynoza
*/



    // Función que lanza la alerta con un número
    
    function mostrarAlerta() {

        const texto = "pagina 5"; 

        alert(texto);
      }

         // Función para cambiar el color de fondo según la tecla presionada
         function cambiarColorFondo(event) {
            const tecla = event.key.toLowerCase(); // Obtener la tecla presionada (en minúsculas)

            switch(tecla) {

                case 'a':
        
                    document.body.style.backgroundColor = 'red'; // Cambiar a rojo
                    break;
                case 's':
                    document.body.style.backgroundColor = 'green'; // Cambiar a verde
                    break;
                case 'd':
                    document.body.style.backgroundColor = 'blue'; // Cambiar a azul
                    break;
                case 'f':
                    document.body.style.backgroundColor = 'yellow'; // Cambiar a amarillo
                    break;
                case 'g':
                    document.body.style.backgroundColor = 'purple'; // Cambiar a púrpura
                    break;
                default:
                    // No hacer nada si se presionan otras teclas
                    break;
            }
        }

        // Escuchar el evento 'keydown' para detectar las teclas presionadas
        window.addEventListener('keydown', cambiarColorFondo);