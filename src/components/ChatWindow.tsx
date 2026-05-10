import type { Conversation } from '../types/chat';
import MessageBubble from './MessageBubble';

interface Props {
  conversation: Conversation;
}

export default function ChatWindow({ conversation }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      {conversation.messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-4xl text-gray-500">
          Say hi to start the conversation.
        </div>
      ) : (
        conversation.messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))
      )}
    </div>
  );
}