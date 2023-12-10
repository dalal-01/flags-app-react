import "./input.css";
function Input({ type, placeholder, icon, value, setValue }) {
  return (
    <div className="input py-3 d-flex align-items-center ">
      {icon}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control border-0"
        type={type}
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  );
}

export default Input;
