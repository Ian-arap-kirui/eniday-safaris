import { useState } from "react";
import { FiSend, FiMessageSquare } from "react-icons/fi";

const AITravelAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your Kenya travel assistant. Ask me about destinations, tours, or travel tips!",
      user: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, user: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const responses = {
        safari:
          "For safaris, I recommend our Maasai Mara packages during July-October for the Great Migration.",
        beach:
          "Diani Beach is our top coastal destination with perfect white sands and water sports!",
        culture:
          "Lamu Island offers incredible Swahili culture experiences with stone architecture and donkey transport.",
        budget:
          "We have great value options in Tsavo East with amazing wildlife at lower prices.",
        family:
          "Amboseli is perfect for families with easy elephant sightings and Kilimanjaro views.",
      };

      const aiResponse =
        responses[
          Object.keys(responses).find((key) =>
            input.toLowerCase().includes(key)
          ) || "default"
        ] ||
        "I'd love to help! We offer amazing safaris, beach vacations, and cultural tours in Kenya. Could you tell me more about what interests you?";

      setMessages((prev) => [...prev, { text: aiResponse, user: false }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col">
          <div className="bg-green-700 text-white p-3 flex justify-between items-center">
            <h3 className="font-bold">Kenya Travel Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto h-60 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex ${
                  msg.user ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.user
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about Kenya travel..."
              className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700"
            >
              <FiSend />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 flex items-center gap-3 group"
        >
          <div className="relative">
            <FiMessageSquare
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-200"></span>
            </span>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium leading-tight">
              AI Travel Assistant
            </p>
            <p className="text-xs opacity-90">Available 24/7</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default AITravelAssistant;
