import type { Conversation } from '../types/chat';

interface Props {
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  active,
  onClick,
}: Props) {
  const initials = conversation.name
    .split(' ')
    .map((name) => name[0])
    .join('');

  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-all ${
        active ? 'bg-[#1C2942]' : 'hover:bg-[#141F33]'
      }`}
    >
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-400 text-xl font-bold text-white">
          {initials}
        </div>

        {conversation.online && (
          <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#0B1120] bg-green-400" />
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">
          {conversation.name}
        </h3>

        <p className="text-sm text-gray-400">
          {conversation.messages.length > 0
            ? conversation.messages[
                conversation.messages.length - 1
              ].text
            : 'No messages yet'}
        </p>
      </div>
    </div>
  );
}