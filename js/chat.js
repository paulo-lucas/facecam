// inserir url do server
/*
const websocket = new WebSocket("ws://projectapi/sockets/messages.php");
const messages = document.querySelector("#messages");
const send = document.querySelector("#send");

function showMessage(messageHTML, messageType){
    const div = document.createElement("div");
    div.classList.add("message");
    div.classList.add(messageType);
    div.innerHTML = messageHTML;
    messages.appendChild(div);
}

websocket.onopen = function(event){
    showMessage("Você ingressou na conversa", "blue-message");
}

websocket.onmessage = function(event){
    let data = JSON.parse(event.data);
    if(data.chat_user == 123456)
        showMessage(data.message, "green-message");
    else
        showMessage(data.message, "grey-message");
    takePicture();
}

websocket.onerror = function(event){
    showMessage("Something went wrong", "red-message");
}

websocket.onclose = function(event){
    // ainda sem log off
}

send.addEventListener("submit", function(event){
    event.preventDefault();
    let messageJSON = {
        chat_user: 123456,
        chat_message: send.messageTXT.value
    };
    websocket.send(JSON.stringify(messageJSON));
    // showMessage(send.messageTXT.value, "green-message");
    send.messageTXT.value = "";
});
*/

