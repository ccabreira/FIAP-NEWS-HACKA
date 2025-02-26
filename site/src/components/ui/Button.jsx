export default function Button({ children, onClick, className = "" }) {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded ${className}`}
      style={{ transition: "background 0.3s ease-in-out" }}
    >
      {children}
    </button>
  );
}
