import type { Conversation } from '../types/chat';

interface Props {
  conversation: Conversation;
}

export default function ChatHeader({ conversation }: Props) {
  const initials = conversation.name
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <div className="flex items-center gap-4 border-b border-[#24324D] p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 text-2xl font-bold text-white">
        {initials}
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white">
          {conversation.name}
        </h2>

        <p className="text-gray-400">
          {conversation.online ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}