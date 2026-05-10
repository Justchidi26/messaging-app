import type { Message } from '../types/chat';

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  return (
    <div
      className={`mb-4 flex ${
        message.sender === 'You'
          ? 'justify-end'
          : 'justify-start'
      }`}
    >
      <div
        className={`max-w-md rounded-3xl px-5 py-4 ${
          message.sender === 'You'
            ? 'bg-blue-600 text-white'
            : 'bg-[#1C2942] text-white'
        }`}
      >
        <p>{message.text}</p>

        <div className="mt-2 flex justify-between text-xs text-gray-300">
          <span>{message.timestamp}</span>
          <span>{message.status}</span>
        </div>
      </div>
    </div>
  );
}