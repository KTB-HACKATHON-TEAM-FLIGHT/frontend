export default function ListItem({ text, isClicked, onClick }) {
  return (
    <li>
      <div
        className={`block px-4 py-2 text-white rounded-md ${
          isClicked ? "bg-blue-600" : "hover:bg-gray-800"
        }`}
        onClick={onClick}
      >
        {text}
      </div>
    </li>
  );
}
