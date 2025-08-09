import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { X, MessageCircle, Send, User, Bot, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import faqData from '@/data/faq.json';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isOptions?: boolean;
  options?: string[];
}

interface FAQ {
  id: number;
  keywords: string[];
  question: string;
  answer: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [awaitingName, setAwaitingName] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const faqOptions = useMemo(() => [
    "Admissions Process",
    "School Location",
    "Academic Curriculum",
    "Sports Facilities",
    "Contact Information",
    "Talk to a person"
  ], []);

  const addBotMessage = useCallback((text: string, isOptions: boolean = false, options: string[] = [], delayMultiplier: number = 1) => {
    setIsTyping(true);
    const delay = 500 + Math.random() * 500 * delayMultiplier;
    
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now(),
        text,
        sender: 'bot',
        timestamp: new Date(),
        isOptions,
        options
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
      setTimeout(scrollToBottom, 100);
    }, delay);
  }, [scrollToBottom]);

  const addUserMessage = useCallback((text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

const findFAQMatch = useCallback((userInput: string): FAQ | null => {
  const input = userInput.toLowerCase();
  return faqData.faqs.find(faq =>
    faq.keywords.some(keyword => input.includes(keyword.toLowerCase()))
  ) || null;
}, []);

  const handleSendMessage = useCallback((messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    addUserMessage(text);
    setInputValue('');
    inputRef.current?.focus();

    // Handle name collection
    if (awaitingName) {
      setUserName(text);
      setAwaitingName(false);
      addBotMessage(`Nice to meet you, ${text}! 😊 How can I assist you today?`, true, faqOptions);
      return;
    }

    // Handle special options
    switch (text.toLowerCase()) {
      case 'talk to a person':
        addBotMessage("I'd be happy to connect you with our school team! 😊 Please choose how you'd like to reach us:", true, [
          "Facebook Messenger",
          "WhatsApp",
          "Back to FAQ"
        ]);
        return;
      
      case 'facebook messenger':
        addBotMessage(
          "Great choice! Our team is ready to assist you on Facebook Messenger. Would you like to open Messenger now?",
          true,
          ["Open Messenger", "Back to FAQ"]
        );
        return;
      
      case 'whatsapp':
        const phoneNumber = "9779857033108";
        const whatsappMessage = "Hi! I'd like to get more information about your services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        addBotMessage(
          "Perfect! Our WhatsApp support team is available to help. Would you like to start a chat?",
          true,
          ["Open WhatsApp", "Back to FAQ"]
        );
        
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
        return;
      
      case 'open messenger':
        const fb = (window as any).FB;
        if (fb && fb.CustomerChat) {
          fb.CustomerChat.showDialog();
        } else {
          window.open('https://m.me/your-page-id', '_blank');
        }
        addBotMessage("Opening Facebook Messenger... If it didn't open, please check your popup settings. Feel free to ask anything else!", true, faqOptions);
        return;
      
      case 'open whatsapp':
        const whatsappPhone = "9779876543210";
        const whatsappMsg = "Hi! I'd like to get more information about your services.";
        const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMsg)}`;
        window.open(whatsappLink, '_blank');
        addBotMessage("Opening WhatsApp... If it didn't open, please check your popup settings. How else can I assist you today?", true, faqOptions);
        return;
      
      case 'back to faq':
        addBotMessage("Sure! What else would you like to know?", true, faqOptions);
        return;
      
      case 'ask another question':
        addBotMessage("I'd be happy to help with another question! What would you like to know?", true, faqOptions);
        return;
      
      case 'close chat':
        addBotMessage("Thank you for chatting! If you have more questions later, I'm always here to help. Have a wonderful day! 😊");
        setTimeout(() => setIsOpen(false), 2000);
        return;
      
      default:
        const faqMatch = findFAQMatch(text);
        if (faqMatch) {
          // Add typing delay based on answer length
          const delayMultiplier = Math.min(faqMatch.answer.length / 100, 3);
          addBotMessage(faqMatch.answer, true, [
            "Ask another question",
            "Talk to a person",
            "Close chat"
          ], delayMultiplier);
        } else {
          addBotMessage("That's an interesting question! While I'm designed to assist with common inquiries, I'd be happy to connect you with our team who can provide a more detailed answer. How would you like to proceed?", true, [
            "Try rephrasing my question",
            "Talk to a person",
            "See FAQ options"
          ]);
        }
    }
  }, [inputValue, addUserMessage, addBotMessage, findFAQMatch, faqOptions, awaitingName]);

  const handleOptionClick = useCallback((option: string) => {
    handleSendMessage(option);
  }, [handleSendMessage]);

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello there! 👋 I'm SEBS Assistant, your AI-powered guide to Siddhartha English Boarding School. May I know your name?", false, [], 1.5);
        setAwaitingName(true);
      }, 800);
    }
  }, [isOpen, messages.length, addBotMessage]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-20 right-8 z-50 animate-fade-in-up">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 flex items-center justify-center relative group"
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse">
            Live
          </span>
          <span className="absolute -bottom-10 right-0 bg-black/80 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Ask me anything!
          </span>
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[32rem]'}`}>
      <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-t-lg cursor-pointer"
          onClick={toggleMinimize}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium">SEBS Assistant</h3>
              <p className="text-xs opacity-90">AI-powered school support</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleSendMessage('close chat');
              }}
              className="text-white hover:bg-white/20"
              aria-label="Close chatbot"
            >
              <X className="w-4 h-4" />
            </Button>
            <ChevronDown 
              className={`w-4 h-4 text-white transition-transform duration-200 ${isMinimized ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="p-0 flex-1 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`fade-in ${message.sender === 'user' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}
                    >
                      <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className="flex items-start gap-2 max-w-[85%]">
                          {message.sender === 'bot' && (
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <Bot className="w-3 h-3 text-white" />
                            </div>
                          )}
                          <div className="space-y-1">
                            <div className={`p-3 rounded-2xl transition-all duration-200 ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-br-none'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
                            }`}>
                              <p className="text-sm whitespace-pre-line">{message.text}</p>
                            </div>
                            
                            {message.isOptions && message.options && (
                              <div className="grid gap-1 mt-2">
                                {message.options.map((option, index) => (
                                  <Button
                                    key={index}
                                    variant={message.sender === 'bot' ? "outline" : "secondary"}
                                    size="sm"
                                    onClick={() => handleOptionClick(option)}
                                    className={`w-full text-left justify-start text-xs transition-all hover:scale-[1.02] ${
                                      message.sender === 'bot' 
                                        ? 'hover:bg-blue-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
                                        : 'bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50'
                                    }`}
                                  >
                                    {option}
                                  </Button>
                                ))}
                              </div>
                            )}
                            
                            <p className="text-xs text-gray-500 dark:text-gray-400 pl-1">
                              {formatTime(message.timestamp)}
                            </p>
                          </div>
                          {message.sender === 'user' && (
                            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <User className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start fade-in">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-2xl rounded-bl-none">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={awaitingName ? "Type your name..." : "Ask anything about SEBS..."}
                      className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700 focus-visible:ring-blue-500"
                      autoFocus
                    />
                    <Button 
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 transition-all shadow-md"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                    Powered by Adspire AI
                  </p>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default React.memo(Chatbot);