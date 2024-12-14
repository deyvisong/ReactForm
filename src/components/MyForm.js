import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
  // 3 Data management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 1 - Form creation */}
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Insert your name"
            onChange={handleName}
          />
        </div>
        <label>
          {/* 4 - Simplify state manipulation */}
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            placeholder="Insert your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input className="buttondek" type="submit" value="Register!" />
      </form>
    </div>
  );
};

export default MyForm;
