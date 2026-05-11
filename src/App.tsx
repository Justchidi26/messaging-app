import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { initialConversations } from "./data/conversations";
import type {
  Conversation,
  Message,
} from "./types/chat";

export default function App() {

  // CONVERSATIONS

  const [
    conversations,
    setConversations,
  ] = useState<Conversation[]>(
    initialConversations
  );

  // SELECTED CHAT

  const [
    selectedConversationId,
    setSelectedConversationId,
  ] = useState(1);

  // MESSAGE INPUT

  const [message, setMessage] =
    useState("");

  // MOBILE SIDEBAR

  const [showSidebar, setShowSidebar] =
    useState(false);

  // CURRENT CONVERSATION

  const selectedConversation = useMemo(
    () =>
      conversations.find(
        (conversation) =>
          conversation.id ===
          selectedConversationId
      )!,
    [
      conversations,
      selectedConversationId,
    ]
  );

  // SEND MESSAGE

  const sendMessage = () => {

    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: message,
      sender: "You",
      timestamp:
        new Date().toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
      status: "Sent",
    };

    setConversations((prev) =>
      prev.map((conversation) => {

        if (
          conversation.id ===
          selectedConversationId
        ) {
          return {
            ...conversation,
            messages: [
              ...conversation.messages,
              newMessage,
            ],
          };
        }

        return conversation;
      })
    );

    setMessage("");
  };

  return (
    <div className="h-screen overflow-hidden bg-[#020817]">

      <div className="grid h-full md:grid-cols-[420px_1fr]">
        <div
          className={`${
            showSidebar
              ? "flex"
              : "hidden"
          } absolute z-50 h-full w-full md:relative md:flex md:w-auto`}
        >
          <Sidebar
            conversations={conversations}
            setConversations={
              setConversations
            }
            selectedConversationId={
              selectedConversationId
            }
            setSelectedConversationId={(
              id
            ) => {

              setSelectedConversationId(
                id
              );

              setShowSidebar(false);
            }}
          />
        </div>
        <div className="flex flex-col bg-[#020817]">

          <div className="flex items-center justify-between border-b border-[#24324D] p-4 md:hidden">

            <button
              onClick={() =>
                setShowSidebar(true)
              }
              className="rounded-xl bg-[#1C2942] px-4 py-2 text-white"
            >
              ☰ Chats
            </button>
          </div>
          <ChatHeader
            conversation={
              selectedConversation
            }
          />
          <ChatWindow
            conversation={
              selectedConversation
            }
          />
          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}