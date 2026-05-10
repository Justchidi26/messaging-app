interface Props {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: () => void;
}

export default function MessageInput({
  message,
  setMessage,
  sendMessage,
}: Props) {
  return (
    <div className="border-t border-[#24324D] p-6">
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 rounded-3xl bg-[#020817] px-6 py-5 text-xl text-white outline-none"
        />

        <button
          onClick={sendMessage}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-500 text-2xl text-white"
        >
          ➤
        </button>
      </div>
    </div>
  );
}