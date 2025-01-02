function MessageDisplay({ messages }: { messages: string[] }) {
  return (
    <div className="flex-1 w-full p-4 flex flex-col gap-2 items-start">
      {messages.map((message) => (
        <span
          className="text-white break-words bg-slate-900 px-4 py-1 rounded-md max-w-[350px]"
          key={message}
        >
          {message}
        </span>
      ))}
    </div>
  );
}

export default MessageDisplay;
