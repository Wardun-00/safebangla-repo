/* ==========================================
        GEMINI API
========================================== */

const GEMINI_API_KEY = "api_key";




/* ==========================================
        AI ASSIST
========================================== */

const aiBtn = document.getElementById("aiAssistBtn");
const aiChat = document.getElementById("aiChat");
const closeAi = document.getElementById("closeAi");


aiBtn.addEventListener("click", () => {

    aiChat.classList.remove("hidden");

});

closeAi.addEventListener("click", () => {

    aiChat.classList.add("hidden");

});

/* ==========================================
        AI ASSIST - CHAT SYSTEM
========================================== */

const aiInput = document.getElementById("aiInput");
const sendAi = document.getElementById("sendAi");
const chatMessages = document.getElementById("chatMessages");

function addMessage(message, sender) {

    const messageBox = document.createElement("div");

    if (sender === "user") {

        messageBox.className =
            "flex justify-end mb-4";

        messageBox.innerHTML = `

        <div class="bg-green-600 text-white px-4 py-3 rounded-2xl max-w-[80%] break-words">

            ${message.replace(/\n/g,"<br>")}

        </div>

        `;

    }

    else {

        messageBox.className =
            "flex justify-start mb-4";

        messageBox.innerHTML = `

        <div class="bg-white border px-4 py-3 rounded-2xl max-w-[85%] break-words shadow-sm">

            ${message.replace(/\n/g,"<br>")}

        </div>

        `;

    }

    chatMessages.appendChild(messageBox);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}



function typingAnimation() {

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "flex justify-start mb-4";

    typing.innerHTML = `

<div class="bg-white border rounded-2xl px-5 py-4 shadow-sm">

<div class="flex gap-2">

<span class="w-2 h-2 rounded-full bg-green-500 animate-bounce"></span>

<span class="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:0.2s]"></span>

<span class="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:0.4s]"></span>

</div>

</div>

`;

    chatMessages.appendChild(typing);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}




function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) typing.remove();

}




async function fakeReply(userMessage) {

    typingAnimation();

    try {

       const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": GEMINI_API_KEY
        },

        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: `
You are Safe Bangla AI Assist.

User Question:

${userMessage}
`
                        }
                    ]
                }
            ]
        })
    }
);

        const data = await response.json();

        

        removeTyping();

        if (
    data.candidates &&
    data.candidates.length > 0 &&
    data.candidates[0].content &&
    data.candidates[0].content.parts &&
    data.candidates[0].content.parts.length > 0
) {

            const reply = data.candidates[0].content.parts[0].text;

            addMessage(reply, "ai");

        } else {

            console.log(data);

            addMessage("Sorry! No response from AI.", "ai");

        }

    }

    catch (error) {

        removeTyping();

        console.error(error);

        addMessage("Connection Failed!", "ai");

    }

}




























function sendMessage() {

    const message = aiInput.value.trim();

    if (!message) return;

    addMessage(message, "user");

    aiInput.value = "";

    fakeReply(message);

}

sendAi.addEventListener("click", sendMessage);

aiInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});










/* ==========================================
        AI SUGGESTION BUTTON
========================================== */

document.querySelectorAll(".aiSuggestion").forEach(button => {

    button.addEventListener("click", () => {

        aiInput.value = button.innerText;

        sendMessage();

    });

});