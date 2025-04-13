window.onload = function() {
    console.log('El archivo script.js está cargado');

    // Este código se ejecuta cuando el formulario se envía
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Muestra el mensaje de "enviando"
        document.getElementById('loadingMessage').style.display = 'block';

        // Simula el proceso de envío con un retraso de 2 segundos
        setTimeout(function() {
            // Después de 2 segundos, oculta el mensaje de "enviando" y muestra una alerta de éxito
            document.getElementById('loadingMessage').style.display = 'none';
            alert('Formulario enviado exitosamente!');

            // Limpia los campos del formulario
            document.getElementById('contactForm').reset(); // Limpia todos los campos del formulario
        }, 2000);
    });
};
