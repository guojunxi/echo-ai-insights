
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { MessageSquare, Send, Mic, BookOpen, RefreshCw } from "lucide-react";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Welcome to echoMind! I'm here to help you with podcast note-taking and knowledge management. How can I assist you today?",
      timestamp: new Date(),
    },
    {
      type: "reminder",
      content: "📚 Time to review: 'The Science of Productivity' podcast - you listened to this 3 times last week. Would you like me to create a summary?",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          content: message,
          timestamp: new Date(),
        },
        {
          type: "ai",
          content: "I understand you'd like to explore that topic. Let me help you find relevant podcast clips and create connections with your existing knowledge base.",
          timestamp: new Date(),
        },
      ]);
      setMessage("");
    }
  };

  const generatePodcastPrompts = [
    "Create a podcast about productivity tips from my saved clips",
    "Generate insights from my technology podcast notes",
    "Connect my health and wellness learning into a discussion",
    "Synthesize my business strategy knowledge into a narrative",
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="border-b border-blue-200 bg-white/80 backdrop-blur-sm p-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-blue-600" />
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-semibold text-blue-800">AI Chat Assistant</h1>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-blue-200 bg-white/60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Card className="border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
            <CardContent className="p-3 text-center">
              <RefreshCw className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-blue-700 font-medium">Review Suggestions</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
            <CardContent className="p-3 text-center">
              <BookOpen className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-blue-700 font-medium">Knowledge Insights</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
            <CardContent className="p-3 text-center">
              <Mic className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-blue-700 font-medium">Generate Podcast</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
            <CardContent className="p-3 text-center">
              <MessageSquare className="h-5 w-5 text-blue-600 mx-auto mb-1" />
              <p className="text-sm text-blue-700 font-medium">Chat History</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Generate Podcast Prompts */}
      <div className="p-4 border-b border-blue-200 bg-gradient-to-r from-blue-100 to-indigo-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 AI Podcast Generation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {generatePodcastPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-left justify-start h-auto p-3 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-blue-700"
              onClick={() => setMessage(prompt)}
            >
              <span className="text-sm">{prompt}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                msg.type === "user"
                  ? "bg-blue-600 text-white"
                  : msg.type === "reminder"
                  ? "bg-amber-100 border border-amber-200 text-amber-800"
                  : "bg-white border border-blue-200 text-blue-800"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-blue-200 bg-white/80 backdrop-blur-sm p-4">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about your podcasts, request summaries, or generate new content..."
            className="flex-1 border-blue-200 focus:border-blue-400"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-blue-200 hover:border-blue-300">
            <Mic className="h-4 w-4 text-blue-600" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
