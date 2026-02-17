"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Loader2 } from "lucide-react";
import { personalInfo, skills, projects, education } from "@/constants/data";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const quickQuestions = [
  "Who are you?",
  "What can you do?",
  "Show me your projects",
  "How do I reach you?"
];

const generateResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase();
  
  // About the person
  if (lowerQuestion.includes("who") && lowerQuestion.includes("you") || lowerQuestion.includes("about")) {
    return `Hi! I'm ${personalInfo.name}, a passionate Software Engineer based in Santa Rosa, Laguna, Philippines. I specialize in building scalable applications and love creating efficient solutions using modern technologies like Go, Python, React, and more. I'm currently pursuing my BS in Information Technology and I'm always eager to learn and take on new challenges!`;
  }
  
  // Skills
  if (lowerQuestion.includes("skill") || lowerQuestion.includes("tech") || lowerQuestion.includes("expertise")) {
    const skillCategories = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill.name);
      return acc;
    }, {} as Record<string, string[]>);
    
    let response = "Here are my technical skills:\n\n";
    Object.entries(skillCategories).forEach(([category, names]) => {
      response += `${category}: ${names.join(", ")}\n`;
    });
    return response;
  }
  
  // Projects
  if (lowerQuestion.includes("project") || lowerQuestion.includes("work")) {
    let response = "I've worked on several exciting projects:\n\n";
    projects.forEach((project, index) => {
      response += `${index + 1}. ${project.title} - ${project.category}\n   ${project.description.substring(0, 100)}...\n   Tech: ${project.technologies.join(", ")}\n\n`;
    });
    response += `You can view more details on my GitHub: ${personalInfo.github}`;
    return response;
  }
  
  // Education
  if (lowerQuestion.includes("education") || lowerQuestion.includes("degree") || lowerQuestion.includes("school")) {
    const edu = education[0];
    return `I'm currently studying at ${edu.institution} pursuing a ${edu.degree}. I'm expected to graduate in ${edu.endDate}. I've maintained excellent academic standing with notable achievements.`;
  }
  
  // Contact
  if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || lowerQuestion.includes("reach")) {
    return `You can reach me through:\n\n Email: ${personalInfo.email}\n Phone: ${personalInfo.phone}\n\nI'm always open to new opportunities and collaborations!`;
  }
  
  // Availability
  if (lowerQuestion.includes("available") || lowerQuestion.includes("hire") || lowerQuestion.includes("job") || lowerQuestion.includes("work")) {
    return "Yes! I'm currently open to new opportunities. Whether you're looking for a full-time position, contract work, or a collaboration on a project, I'd love to hear from you. Feel free to reach out via email or phone!";
  }
  
  // Experience
  if (lowerQuestion.includes("experience") || lowerQuestion.includes("years")) {
    return "I have 4+ years of experience in software development. I've worked on various projects ranging from full-stack web applications to desktop applications. My focus is on building efficient, scalable, and user-friendly solutions.";
  }
  
  // Default response
  return `I'd be happy to tell you more about myself! Here are some things I can help you with:\n\n About me\n My skills\n Projects I've worked on\n How to contact me\n Job opportunities\n\nJust ask me anything!`;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hi there! 👋 I'm ${personalInfo.name}. Thanks for visiting my portfolio! Feel free to ask me anything about my skills, projects, or how to get in touch with me.`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-violet-600 hover:bg-violet-700 rounded-full shadow-lg shadow-violet-500/30 transition-all hover:scale-110 overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="/pfp.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-violet-600" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "600px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-[380px] md:w-[420px] bg-card border border-card-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-600 to-violet-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30">
                  <img src="/pfp.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{personalInfo.name}</h3>
                  <p className="text-white/70 text-xs">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border border-violet-500/30">
                          <img src="/pfp.jpg" alt="AI" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-violet-600 text-white rounded-br-md"
                            : "bg-card border border-card-border rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        <span className={`text-xs mt-1 block ${message.role === "user" ? "text-white/60" : "text-muted-foreground"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      {message.role === "user" && (
                        <div className="w-8 h-8 bg-violet-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-violet-400" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border border-violet-500/30">
                        <img src="/pfp.jpg" alt={personalInfo.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-card border border-card-border p-3 rounded-2xl rounded-bl-md">
                        <Loader2 className="w-4 h-4 text-violet-400 animate-spin" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                <div className="px-4 py-2 border-t border-card-border bg-background/50">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="px-3 py-1.5 text-xs bg-violet-600/10 hover:bg-violet-600/20 text-violet-400 rounded-full border border-violet-600/20 whitespace-nowrap transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-card-border bg-background">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 bg-background border border-card-border rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-foreground placeholder:text-muted-foreground"
                    />
                    <motion.button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="p-3 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-600/50 disabled:cursor-not-allowed rounded-xl transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
