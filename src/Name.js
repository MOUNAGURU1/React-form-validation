import React,{useState} from "react";

function Name({ value, onChange }) {
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const name = e.target.value;
        if (!name) {
          setError("Name is required");
        } else if (name.length < 4) {
          setError("Name must be at least 4 characters long");
        } else {
          setError("");
        }
        onChange(name);
      };



return (
    <div>
      <label>Name:</label>
      <input type="text" value={value} onChange={handleChange} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default Name;