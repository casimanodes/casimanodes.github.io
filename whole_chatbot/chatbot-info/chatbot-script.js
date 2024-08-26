
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
document.querySelector('.chatInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Listen for click event on the send button
document.querySelector('.message_send').addEventListener('click', function() {
    sendMessage();
});

// Function to display messages in the chat window
function displayMessage(message, className) {
    const chatbotText = document.querySelector('.chatbot_answer_contianer .chatbotText_bot');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatbotText.appendChild(messageElement);
    chatbotText.scrollTop = chatbotText.scrollHeight; // Auto-scroll to the bottom
}

// Function to send a message
function sendMessage() {
    const chatInput = document.querySelector('.chatInput');
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return; // Prevent sending empty messages

    // Display the user's message in the chat window
    console.log("userMessage: ", userMessage);
    displayMessage(userMessage, 'user-message');
    chatInput.value = ''; // Clear the input field

    // Show spinner (indicating a loading state)
    document.querySelector('.pos_spinner').style.display = "block";

    // Retrieve the thread ID from localStorage (if available)
    let threadId = localStorage.getItem('threadId');

    // Send the message along with the thread ID to the server
    fetch('/api/server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage, threadId: threadId }) // Send threadId if it exists
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Store the thread ID if it was created in this request
        if (data.threadId) {
            localStorage.setItem('threadId', data.threadId);
        }

        // Display the assistant's response in the chat window
        displayMessage(data.message, 'bot-message');
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('Error: Could not retrieve the response.', 'bot-message');
    })
    .finally(() => {
        // Hide spinner
        document.querySelector('.pos_spinner').style.display = "none";
    });
    console.log("threadId: ", threadId);

}
