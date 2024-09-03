// script.js

document.addEventListener('DOMContentLoaded', function() {
    const textoElement = document.getElementById('sobre-mi-texto');
    const texto = textoElement.textContent;
    textoElement.textContent = ''; // Limpiamos el contenido inicial
    let index = 0;

    function escribirTexto() {
        if (index < texto.length) {
            textoElement.textContent += texto.charAt(index);
            index++;
            setTimeout(escribirTexto, 50); // Velocidad de escritura (ajustable)
        }
    }

    escribirTexto();
});
