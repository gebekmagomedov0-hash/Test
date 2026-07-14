function answer(text) {
    let chat = document.getElementById("chat");

    let message = document.createElement("div");
    message.className = "answer";
    message.innerHTML = "<b>Ты:</b><br>" + text;

    chat.appendChild(message);
}
