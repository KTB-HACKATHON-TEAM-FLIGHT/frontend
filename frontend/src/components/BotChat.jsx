export default function BotChat({ text }) {
  return (
    <div className="flex items-start">
      <img
        src="https://via.placeholder.com/40"
        className="w-10 h-10 rounded-full mr-3"
        alt="User Avatar"
      />
      <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
        <p className="text-gray-800">{text}</p>
      </div>
    </div>
  );
}
