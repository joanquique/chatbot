// Mapeo de posibles preguntas y respuestas del chatbot
const responses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "cómo estás?": "Estoy bien, gracias por preguntar. ¿Y tú?",
    "qué puedes hacer?": "Puedo responder preguntas simples o tener una charla amigable.",
    "adiós": "¡Adiós! Espero hablar contigo pronto.",
    "default": "Lo siento, no entiendo esa pregunta. ¿Puedes intentarlo de nuevo?"
};

// Función para agregar un mensaje al contenedor del chat
function addMessage(content, className) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerText = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplaza hacia abajo el chat
}

// Función para manejar el envío de mensajes
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim().toLowerCase(); // Obtener y normalizar el input del usuario

    if (message) {
        // Agregar el mensaje del usuario al chat
        addMessage(message, 'user-message');
        
        // Generar la respuesta del chatbot
        const botResponse = responses[message] || responses['default'];
        addMessage(botResponse, 'bot-message');
        
        // Limpiar el input del usuario
        userInput.value = '';
    }
}

// Agregar el evento de clic al botón de enviar
document.getElementById('send-btn').addEventListener('click', sendMessage);

// Permitir enviar con la tecla Enter
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
