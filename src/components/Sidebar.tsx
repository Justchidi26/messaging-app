import ConversationItem from './ConversationItem';
import type { Conversation } from '../types/chat';

interface Props {
  conversations: Conversation[];
  selectedConversationId: number;
  setSelectedConversationId: (id: number) => void;
}

export default function Sidebar({
  conversations,
  selectedConversationId,
  setSelectedConversationId,
}: Props) {
  return (
    <div className="flex h-screen flex-col border-r border-[#24324D] bg-[#0B1120] p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">Chats</h1>

        
      </div>

      <input
        type="text"
        placeholder="Search chats or messages"
        className="mb-6 rounded-2xl border border-[#24324D] bg-[#020817] px-5 py-4 text-white outline-none"
      />


      <div className="space-y-2 overflow-y-auto">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            active={selectedConversationId === conversation.id}
            onClick={() =>
              setSelectedConversationId(conversation.id)
            }
          />
        ))}
      </div>
    </div>
  );
}