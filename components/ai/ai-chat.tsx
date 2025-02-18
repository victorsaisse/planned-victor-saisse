"use client";

import { SendHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4 items-end">
      {isOpen && <Chat />}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-4 bg-black rounded-full hover:bg-gray-800 transition-colors cursor-pointer group shadow-md"
      >
        <Sparkles
          size={24}
          className="text-white group-hover:scale-110 transition-transform"
        />
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="w-[350px] h-[400px] bg-white rounded-2xl shadow-md border-[1px] border-[#E0E0E0] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="bg-[#F2F2F3] rounded-md p-4 text-black text-sm font-light self-start max-w-[90%]">
            <p>Hello, how can I help you today?</p>
          </div>
          <div className="bg-black rounded-md p-4 text-white text-sm font-light self-end max-w-[90%]">
            <p>
              Hi,I&apos;m looking for a place to stay in Paris. Hi,I&apos;m
              looking for a place to stay in Paris.
            </p>
          </div>
          <div className="bg-[#F2F2F3] rounded-md p-4 text-black text-sm font-light self-start max-w-[90%]">
            <p>Hello, how can I help you today?</p>
          </div>
          <div className="bg-black rounded-md p-4 text-white text-sm font-light self-end max-w-[90%]">
            <p>
              Hi,I&apos;m looking for a place to stay in Paris. Hi,I&apos;m
              looking for a place to stay in Paris.
            </p>
          </div>
          <div className="bg-[#F2F2F3] rounded-md p-4 text-black text-sm font-light self-start max-w-[90%]">
            <p>Hello, how can I help you today?</p>
          </div>
          <div className="bg-black rounded-md p-4 text-white text-sm font-light self-end max-w-[90%]">
            <p>
              Hi,I&apos;m looking for a place to stay in Paris. Hi,I&apos;m
              looking for a place to stay in Paris.
            </p>
          </div>
          <div className="bg-[#F2F2F3] rounded-md p-4 text-black text-sm font-light self-start max-w-[90%]">
            <p>Hello, how can I help you today?</p>
          </div>
          <div className="bg-black rounded-md p-4 text-white text-sm font-light self-end max-w-[90%]">
            <p>
              Hi,I&apos;m looking for a place to stay in Paris. Hi,I&apos;m
              looking for a place to stay in Paris.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-2 border-t border-[#E0E0E0]">
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full p-2 rounded-md border-[1px] border-[#E0E0E0] text-sm"
        />
        <button className="p-2 rounded-md border-[1px] border-[#E0E0E0] text-sm hover:bg-gray-100 transition-colors">
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}
