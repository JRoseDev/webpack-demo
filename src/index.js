const message = "I came from javascript";

const messageElement = document.createElement("h1");
messageElement.textContent = message;

const body = document.getElementsByTagName("body")[0];

body.appendChild(messageElement);
