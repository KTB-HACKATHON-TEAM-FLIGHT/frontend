export default function BotChat({ text }) {
  return (
    <div className="flex items-start">
      <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
}
