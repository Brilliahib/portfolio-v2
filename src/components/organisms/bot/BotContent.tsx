"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    {
      text: string;
      sender: "user" | "bot";
    }[]
  >([]);

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      return data.data;
    },
    onSuccess: (data) => {
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (
          lastMessage &&
          lastMessage.sender === "user" &&
          lastMessage.text === message
        ) {
          return [...prevMessages, { text: data, sender: "bot" }];
        }
        return prevMessages;
      });
      setMessage("");
    },
    onError: (error: any) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: " + error.message, sender: "bot" },
      ]);
    },
  });

  const handleSend = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);
      mutate(message);
    }
  };

  useEffect(() => {
    setMessages([
      {
        text: "👋 Hai! Aku assitant bot buatan Brilly, Senang bisa bertemu denganmu! Ada yang bisa saya bantu?",
        sender: "bot",
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col space-y-4 md:min-h-[70vh] md:space-y-8">
      <div className="space-y-4">
        <h2 className="mb-4 text-xl font-semibold">🤖 My Assistant Bot</h2>
        <p className="hidden md:flex">
          I have created an assistant bot using generative AI to serve you
        </p>
      </div>

      <ScrollArea className="h-[50vh] md:h-[60vh]">
        <div className="mb-4 flex-grow overflow-y-auto pr-4">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs rounded-xl px-4 py-3 text-sm ${msg.sender === "user" ? "bg-zinc-100 dark:bg-zinc-900" : "bg-gray-200 text-black"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-center space-x-2 p-4">
        <div className="flex w-full max-w-sm space-x-2 bg-white dark:bg-black">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full rounded-md border"
          />
          <Button onClick={handleSend} disabled={isPending}>
            <SendHorizonal className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
