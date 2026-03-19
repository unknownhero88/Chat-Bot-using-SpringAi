import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BASEURL } from "./config/AxiosHelper";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const App = () => {
  const textareaRef = useRef(null);
  const chatBoxRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const currentUser = "You";

  const handleInput = () => {
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    const loadChats = async () => {
      try {
        const res = await fetch(`${BASEURL}/chat/show`);

        if (res.status === 204) return;

        const data = await res.json();
        const formatted = [];

        data.forEach((item) => {
          formatted.push({ sender: "You", content: item.prompt });
          formatted.push({ sender: "AI", content: item.content });
        });

        setMessages(formatted);
      } catch (err) {
        console.log("Failed to load chat");
      }
    };

    loadChats();
  }, []);

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) {
      toast.error("Message is empty");
      return;
    }

    const userMsg = {
      sender: currentUser,
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);

    const question = input;
    setInput("");

    try {
      const res = await fetch(
        `${BASEURL}/chat?q=${encodeURIComponent(question)}`,
      );

      const aiText = await res.text();

      const aiMsg = {
        sender: "AI",
        content: aiText,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      toast.error("Failed to get response");
    }
  };

  return (
    <div className="h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col">
      <Toaster />

      {/* Header */}
      <header className="p-4 text-center text-2xl font-bold border-b border-gray-700 shadow-md text-blue-950">
        🤖 AI Chat
      </header>

      {/* Chat Area */}
      <main
        ref={chatBoxRef}
        className="flex-1 overflow-auto px-6 py-4 space-y-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === currentUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-md shadow-md ${
                message.sender === currentUser
                  ? "bg-green-500 text-black"
                  : "bg-gray-700 text-white"
              }`}
            >
              <p className="text-xs opacity-70 mb-1">{message.sender}</p>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </main>

      {/* Input Area */}
      <footer className="p-4 border-t border-gray-700 bg-gray-900">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 shadow-lg">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="1"
            onInput={handleInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 resize-none max-h-40 overflow-auto"
          />

          <button
            onClick={sendMessage}
            className="ml-3 bg-green-500 hover:bg-green-600 text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold transition"
          >
            ➤
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
