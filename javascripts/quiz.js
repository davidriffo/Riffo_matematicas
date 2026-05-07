function verificarRespuesta(nombrePregunta, idFeedback) {
    // Buscar todas las opciones de la pregunta
    const opciones = document.getElementsByName(nombrePregunta);
    let seleccion = null;
    
    // Ver cuál está marcada
    for (let opcion of opciones) {
        if (opcion.checked) {
            seleccion = opcion;
            break;
        }
    }
    
    const feedback = document.getElementById(idFeedback);
    
    // Si no marcó nada
    if (!seleccion) {
        feedback.innerHTML = "<span style='color:#f57c00;'>⚠️ Por favor selecciona una alternativa.</span>";
        return;
    }
    
    // Verificar si el valor es el correcto
    if (seleccion.value === "correcta") {
        feedback.innerHTML = "<span style='color:#4caf50;'>✔️ ¡Correcto! Muy bien hecho.</span>";
    } else {
        feedback.innerHTML = "<span style='color:#f44336;'>❌ Incorrecto. Revisa tus cálculos e inténtalo de nuevo.</span>";
    }
}