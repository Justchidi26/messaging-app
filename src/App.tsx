import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { initialConversations } from "./data/conversations";
import type { Conversation, Message } from "./types/chat";

export default function App() {
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);

  const [selectedConversationId, setSelectedConversationId] = useState(1);

  const [message, setMessage] = useState("");

  const selectedConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === selectedConversationId,
      )!,
    [conversations, selectedConversationId],
  );

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Sent",
    };

    setConversations((prev) =>
      prev.map((conversation) => {
        if (conversation.id === selectedConversationId) {
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          };
        }

        return conversation;
      }),
    );

    setMessage("");
  };

  return (
    <div className="grid h-screen grid-cols-[420px_1fr] bg-[#020817]">
      <Sidebar
        conversations={conversations}
        setConversations={setConversations}
        selectedConversationId={selectedConversationId}
        setSelectedConversationId={setSelectedConversationId}
      />

      <div className="flex flex-col bg-[#020817]">
        <ChatHeader conversation={selectedConversation} />

        <ChatWindow conversation={selectedConversation} />

        <MessageInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
