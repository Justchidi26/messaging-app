import { useMemo, useState } from "react";
import ConversationItem from "./ConversationItem";
import type { Conversation } from "../types/chat";

interface Props {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  selectedConversationId: number;
  setSelectedConversationId: (id: number) => void;
}

export default function Sidebar({
  conversations,
  setConversations,
  selectedConversationId,
  setSelectedConversationId,
}: Props) {
  // SHOW / HIDE CARD

  const [showNewConversation, setShowNewConversation] = useState(false);

  // NEW CONTACT NAME

  const [contactName, setContactName] = useState("");

  // SEARCH

  const [search, setSearch] = useState("");

  // FILTER CONVERSATIONS

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) =>
      conversation.name
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
    );
  }, [conversations, search]);

  // CREATE NEW CONVERSATION

  const createConversation = () => {
    if (!contactName.trim()) return;

    const newConversation: Conversation = {
      id: Date.now(),
      name: contactName.trim(),
      online: true,
      messages: [],
    };

    // ADD CHAT

    setConversations((prev) => [...prev, newConversation]);

    // SELECT CHAT

    setSelectedConversationId(newConversation.id);

    // RESET INPUT

    setContactName("");

    // CLOSE CARD

    setShowNewConversation(false);
  };

  return (
    <div className="flex h-screen flex-col border-r border-[#24324D] bg-[#0B1120] p-6">
      {/* HEADER */}

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Chats</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setShowNewConversation(!showNewConversation)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-3xl text-black"
          >
            +
          </button>
        </div>
      </div>

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search chats or messages"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 rounded-2xl border border-[#24324D] bg-[#020817] px-5 py-4 text-white outline-none"
      />

      {/* NEW CONVERSATION CARD */}

      {showNewConversation && (
        <div className="mb-8 rounded-3xl border border-[#24324D] p-5">
          <h2 className="mb-4 text-xl text-gray-300">New conversation</h2>

          <input
            type="text"
            placeholder="Contact name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className="mb-5 w-full rounded-2xl bg-[#020817] px-5 py-4 text-white outline-none"
          />

          <div className="flex justify-end gap-4">
            <button
              onClick={() => setShowNewConversation(false)}
              className="text-lg text-gray-400"
            >
              Cancel
            </button>

            <button
              onClick={createConversation}
              className="rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-black"
            >
              Create
            </button>
          </div>
        </div>
      )}

      {/* CONVERSATIONS */}

      <div className="space-y-2 overflow-y-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              active={selectedConversationId === conversation.id}
              onClick={() => setSelectedConversationId(conversation.id)}
            />
          ))
        ) : (
          <p className="mt-4 text-center text-gray-400">
            No conversations found
          </p>
        )}
      </div>
    </div>
  );
}
