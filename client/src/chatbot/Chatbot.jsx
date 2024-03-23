import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const MODEL_NAME = "gemini-1.0-pro";
const apiKey = "AIzaSyA6yVuZ1DDIUYwjbaQTAbr2Wlkm7IqshAo"; // **Security Warning:** Don't store API key directly in code

function GenerateText() {
  const [messages, setMessages] = useState([]); // State for chat messages
  const inputRef = useRef(null); // Ref for user input

  const generateText = async (prompt) => {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [prompt] }],
        generationConfig,
        safetySettings,
      });
      setMessages([...messages, { user: false, text: result.response.text() }]);
    } catch (error) {
      console.error(error);
      alert('An error occurred during generation.');
    }
  };

  const sendMessage = () => {
    const userPrompt = inputRef.current.value;
    if (!userPrompt) return;

    setMessages([...messages, { user: true, text: userPrompt }]);
    generateText(userPrompt);
    inputRef.current.value = '';
  };

  console.log(messages)

  return (
    <div className="chat-container">
      <h2>Chat with Generative AI</h2>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" ref={inputRef} placeholder="Enter your message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default GenerateText;
