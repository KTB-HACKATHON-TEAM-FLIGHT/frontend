export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white rounded-full p-2 ml-3 hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
