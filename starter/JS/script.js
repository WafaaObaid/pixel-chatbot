
const input = document.querySelector("#userInput");
const chat = document.querySelector("#chatBody");
const btn = document.querySelector("#sendBtn");

btn.onclick = () => {
    sendMsg();
}
input.onkeyup = (e) => {
    if (e.key === "Enter") sendMsg();
}
// User Message
const sendMsg = () => {
    const message = input.value.trim();
    if (message === "") return;

    const userMsg = document.createElement('div');
    userMsg.className = "max-w-[75%] px-4 py-2 rounded-xl bg-[#378ADD] text-white self-end";
    userMsg.textContent = message;
    chat.appendChild(userMsg);
    input.value = '';


    // Bot reply
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = "max-w-[75%] px-4 py-2 rounded-xl bg-gray-100 text-gray-800 self-start";
        botMsg.textContent = botReply(message);
        chat.appendChild(botMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 500);
};


const responses = {
    "hello": "Hi ! how can I help you today?",
    "how are you": "I am good, thank you for asking!",
    "what is your name": "My name is Pixel, your AI assistant",
    "bye": "Goodbye, have a great day"
}

const botReply = (msg) => {
    msg = msg.toLowerCase();
    const key = Object.keys(responses).find(k => msg.includes(k));
    return responses[key] || "I'm still learning! Can you rephrase that?"

}


