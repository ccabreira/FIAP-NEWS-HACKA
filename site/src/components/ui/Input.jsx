export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border-none rounded"
      style={{
        backgroundColor: "#f2f2f2",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px"
      }}
    />
  );
}
