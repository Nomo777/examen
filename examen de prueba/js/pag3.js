
/*
Autor:keyla reynoza
*/



    // Función que lanza la alerta con un número
    
    function mostrarAlerta() {

        const texto = "pagina 3"; 

        alert(texto);
      }

              // Función que se ejecuta cuando se presiona una tecla

              function detectarTecla(event) {

                const teclaPresionada = event.key; // Obtiene la tecla presionada

                document.getElementById('resultado').textContent = `Tecla presionada: ${teclaPresionada}`;
            }
    
            // Escuchar el evento 'keydown' para detectar la tecla presionada
            
            window.addEventListener('keydown', detectarTecla);