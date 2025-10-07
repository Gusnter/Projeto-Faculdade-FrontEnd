const chatButton = document.getElementById("chatbot-button");
const chatWindow = document.getElementById("chatbot-window");
const closeBtn = document.getElementById("close-btn");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chatbot-body");


chatButton.onclick = () => chatWindow.style.display = "flex";
closeBtn.onclick = () => chatWindow.style.display = "none";

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.textContent = text;
  chatBody.appendChild(userMsg);
  userInput.value = "";

 
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.textContent = getBotReply(text);
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}


function getBotReply(message) {
  message = message.toLowerCase();
  if (message.includes("oi") || message.includes("olá"))
    return "Olá! Tudo bem? 😊";
  if (message.includes("horário"))
    return "Estamos disponíveis de segunda a sexta, das 8h às 18h.";
  if (message.includes("contato"))
    return "Você pode falar conosco pelo e-mail: suporte@exemplo.com";
  return "Desculpe, não entendi. Pode repetir?";
}
