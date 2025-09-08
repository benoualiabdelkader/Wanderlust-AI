// Handle Chat Functionality
function setupChat() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');
    const quickPromptBtns = document.querySelectorAll('.quick-prompt-btn');

    const sendMessage = async () => {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message to chat
        chatBox.innerHTML += `
            <div class="flex items-start gap-3 flex-row-reverse">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" class="w-8 h-8 rounded-full">
                <div class="w-full flex flex-col items-end">
                     <div class="chat-bubble-user p-3 rounded-lg mt-1 text-left max-w-md"><p>${message}</p></div>
                </div>
            </div>`;
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Add typing indicator
        chatBox.innerHTML += `
             <div id="typing-indicator" class="flex items-start gap-3">
                <div class="bg-purple-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"><i class="fas fa-robot"></i></div>
                <div class="chat-bubble-ai p-4 rounded-lg max-w-md">
                    <p class="italic">typing...</p>
                </div>
            </div>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate Gemini API call
        try {
             const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
             const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: message }] }] })
             });
             if (!response.ok) throw new Error('Gemini API request failed');
             const result = await response.json();
             const aiResponse = result.candidates[0].content.parts[0].text;
             
             document.getElementById('typing-indicator')?.remove();
             chatBox.innerHTML += `
                <div class="flex items-start gap-3">
                    <div class="bg-purple-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"><i class="fas fa-robot"></i></div>
                    <div class="chat-bubble-ai p-4 rounded-lg max-w-md">
                        <p>${aiResponse.replace(/\*/g, '')}</p> 
                    </div>
                </div>`;

        } catch(error) {
            console.error("Gemini API Error:", error);
            document.getElementById('typing-indicator')?.remove();
            chatBox.innerHTML += `
                <div class="flex items-start gap-3">
                    <div class="bg-purple-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"><i class="fas fa-robot"></i></div>
                    <div class="chat-bubble-ai p-4 rounded-lg max-w-md bg-red-100 text-red-700">
                        <p>Sorry, I'm having trouble connecting. Please try again later.</p> 
                    </div>
                </div>`;
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    };
    
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => e.key === 'Enter' && sendMessage());
    quickPromptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chatInput.value = btn.textContent;
            sendMessage();
        });
    });
}
