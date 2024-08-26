
// // JETZT JETZT NUERER CODE 
// document.querySelector('.chatInput').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// });
// // BUTTON 
// document.querySelector('.message_send').addEventListener('click', function() {
//     sendMessage();
// });

// function displayMessage(message, className) {
//     const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
//     const messageElement = document.createElement('div');
//     messageElement.className = `message ${className}`;
//     messageElement.textContent = message;
//     chatbotText.appendChild(messageElement);
//     chatbotText.scrollTop = chatbotText.scrollHeight;
// }

// function sendMessage() {
//     const chatInput = document.querySelector('.chatInput');
//     const userMessage = chatInput.value.trim();
//     if (userMessage === '') return;

//     console.log("userMessage: ", userMessage);
//     displayMessage(userMessage, 'user-message');
//     chatInput.value = '';

//     // Show spinner
//     document.querySelector('.pos_spinner').style.display = "block";

//     fetch('/api/server', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message: userMessage })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         displayMessage(data.message, 'bot-message');
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         displayMessage('Error: Could not retrieve the response.', 'bot-message');
//     })
//     .finally(() => {
//         // Hide spinner
//         document.querySelector('.pos_spinner').style.display = "none";
//     });
// }


// Listen for Enter key press in the input field
// This part remains in the frontend, typically in your main.js or app.js file
document.querySelector('.chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.querySelector('.message_send').addEventListener('click', function() {
    sendMessage();
});

function displayMessage(message, className) {
    const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotText.appendChild(messageElement);
    chatbotText.scrollTop = chatbotText.scrollHeight;
}

function sendMessage() {
    const chatInput = document.querySelector('.chatInput');
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    displayMessage(userMessage, 'user-message');
    chatInput.value = '';

    document.querySelector('.pos_spinner').style.display = "block";

    let threadId = localStorage.getItem('threadId');

    fetch('/api/server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage, threadId: threadId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.threadId) {
            localStorage.setItem('threadId', data.threadId);
        }
        displayMessage(data.message, 'bot-message');
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error: Could not retrieve the response.', 'bot-message');
    })
    .finally(() => {
        document.querySelector('.pos_spinner').style.display = "none";
    });
}
