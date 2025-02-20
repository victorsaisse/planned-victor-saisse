"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsDemo } from "@/hooks/use-is-demo";
import { useUserData } from "@/hooks/use-user-data";
import { useChatStore } from "@/store/use-chat-store";
import { useDemoStore } from "@/store/use-demo-store";
import { SendHorizontal, Sparkles } from "lucide-react";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function AiChat() {
  const { user } = useUserData();
  const { demo } = useDemoStore();
  const isDemo = useIsDemo();
  const { messages, addMessage } = useChatStore();
  const [prompt, setPrompt] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const context = isDemo ? demo.memories : user?.memories;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAskAI = async (prompt: string) => {
    const response = await fetch("/api/call-open-ai", {
      method: "POST",
      body: JSON.stringify({ prompt: prompt, context: context }),
    });
    const data = await response.json();
    addMessage({
      content: data.message,
      role: "assistant",
    });
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    addMessage({
      content: message,
      role: "user",
    });
    setPrompt("");
    handleAskAI(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(prompt);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(scrollToBottom, 100);
    }
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-end">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="flex items-center justify-center p-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer group shadow-md">
          <Sparkles
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 rounded-lg overflow-hidden">
          <div className="w-[350px] h-[400px] bg-white relative">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`rounded-md p-4 text-sm font-light max-w-[90%] ${
                        message.role === "assistant"
                          ? "bg-[#F2F2F3] text-black self-start"
                          : "bg-black text-white self-end"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs mt-2 opacity-50">
                        {moment(message.createdAt).format("HH:mm")}
                      </p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-2 border-t border-[#E0E0E0] bg-white">
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleKeyPress}
                  type="text"
                  placeholder="Type your question here..."
                  className="w-full p-2 rounded-md border-[1px] border-[#E0E0E0] text-sm"
                />
                <button
                  onClick={() => handleSendMessage(prompt)}
                  className="p-2 rounded-md border-[1px] border-[#E0E0E0] text-sm hover:bg-gray-100 transition-colors"
                >
                  <SendHorizontal size={20} />
                </button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
