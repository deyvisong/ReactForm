import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Data management
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending form");
    console.log(name, email);
  };

  return (
    <div>
      {/* 5 - send form */}
      {/* 1 - Form creation */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Insert your name"
            onChange={handleName}
            value={name}
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
            value={email}
          />
        </label>
        <input className="buttondek" type="submit" value="Register!" />
      </form>
    </div>
  );
};

export default MyForm;
