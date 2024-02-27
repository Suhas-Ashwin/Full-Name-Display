import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [displayFullName, setDiaplayFullName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiaplayFullName(true);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Full Name Display </h1>
        <div className="label">
          <label htmlFor="firstName"> First Name: </label>
          <input
            type="text"
            id="firstName"
            required
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="label">
          <label htmlFor="lastName" className="label">
            {" "}
            Last Name:{" "}
          </label>
          <input
            type="text"
            id="lastName"
            required
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
      {displayFullName && (
        <p>
          {" "}
          Full Name: {fName} {lName}{" "}
        </p>
      )}
    </div>
  );
}
