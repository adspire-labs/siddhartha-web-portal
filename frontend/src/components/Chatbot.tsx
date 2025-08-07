import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { X, MessageCircle, Send, User, Bot } from 'lucide-react';
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const faqOptions = useMemo(() => [
    "What are your services?",
    "Do you offer courses?",
    "How can I contact you?",
    "Talk to a person"
  ], []);

  const addBotMessage = useCallback((text: string, isOptions: boolean = false, options: string[] = []) => {
    setIsTyping(true);
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
    }, 500);
  }, []);

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

    // Handle "Talk to a person" option
    if (text.toLowerCase().includes('talk to a person')) {
      addBotMessage(faqData.defaultResponses.talkToPerson, true, [
        "Facebook Messenger",
        "WhatsApp",
        "Back to FAQ"
      ]);
      return;
    }

    // Handle contact method selection
    if (text === "Facebook Messenger") {
      addBotMessage(
        "Great! Click the button below to continue on Facebook Messenger:",
        true,
        ["Open Messenger", "Back to FAQ"]
      );
      return;
    }

    if (text === "WhatsApp") {
      const phoneNumber = "9779857033108";
      const whatsappMessage = "Hi! I'd like to get more information about your services.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      addBotMessage(
        "Perfect! Click the button below to chat with us on WhatsApp:",
        true,
        ["Open WhatsApp", "Back to FAQ"]
      );
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
      return;
    }

    if (text === "Open Messenger") {
      const fb = (window as any).FB;
      if (fb && fb.CustomerChat) {
        fb.CustomerChat.showDialog();
      } else {
        window.open('https://m.me/your-page-id', '_blank');
      }
      addBotMessage("Opening Facebook Messenger... If it didn't open automatically, please check your popup blocker.");
      return;
    }

    if (text === "Open WhatsApp") {
      const phoneNumber = "9779876543210";
      const whatsappMessage = "Hi! I'd like to get more information about your services.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      addBotMessage("Opening WhatsApp... If it didn't open automatically, please check your popup blocker.");
      return;
    }

    if (text === "Back to FAQ") {
      addBotMessage(faqData.defaultResponses.welcome, true, faqOptions);
      return;
    }

    const faqMatch = findFAQMatch(text);
    
    if (faqMatch) {
      addBotMessage(faqMatch.answer, true, [
        "Ask another question",
        "Talk to a person",
        "Close chat"
      ]);
    } else {
      addBotMessage(faqData.defaultResponses.notFound, true, [
        "What are your services?",
        "Where are you located?",
        "Talk to a person"
      ]);
    }
  }, [inputValue, addUserMessage, addBotMessage, findFAQMatch, faqOptions]);

  const handleOptionClick = useCallback((option: string) => {
    if (option === "Ask another question") {
      addBotMessage("What else would you like to know?", true, faqOptions);
    } else if (option === "Close chat") {
      setIsOpen(false);
    } else {
      handleSendMessage(option);
    }
  }, [addBotMessage, handleSendMessage, faqOptions]);

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(faqData.defaultResponses.welcome, true, faqOptions);
    }
  }, [isOpen, messages.length, addBotMessage, faqOptions]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="bg-card border border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-primary-foreground">SEBS Assistant</h3>
              <p className="text-xs opacity-90 text-primary-foreground">We're here to help!</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Messages */}
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="fade-in">
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-start gap-2 max-w-[80%]">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary/10 text-foreground border border-border'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                      
                      {message.isOptions && message.options && (
                        <div className="space-y-1">
                          {message.options.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleOptionClick(option)}
                              className="w-full text-left justify-start text-xs hover:bg-primary/10 text-foreground border-border"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-xs text-muted-foreground">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-primary" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start fade-in">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-secondary/10 text-foreground p-3 rounded-lg border border-border">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-card text-foreground border-border"
              />
              <Button 
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by Adspire Labs
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(Chatbot);