import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Data management
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending form");
    console.log(name + "\n" + email + "\n" + bio);

    // validation
    // sent

    // 7 - Clean form
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - send form */}
      {/* 1 - Form creation */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Insert your name"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label with input */}
        <label htmlFor="email">
          {/* 4 - Simplify state manipulation */}
          <span>E-mail: </span>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Insert your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <span>Bio:</span>
        <textarea
          id="bio"
          name="bio"
          placeholder="User description"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
        <input className="buttondek" type="submit" value="Register!" />
      </form>
    </div>
  );
};

export default MyForm;
