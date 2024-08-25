import { useState } from "react";
import "./InputForm.css";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e);
    // we need to save the data in db.
  }
  return (
    <>
      <h1>Form Example with 2 Input Elements</h1>
      <form onSubmit={handleSubmit}>
        <div className="Inputdiv" autoCapitalize="true">
          <input
            id="email"
            name="email"
            placeholder="Enter the Email"
            type="email"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <input
            id="password"
            name="password"
            placeholder="Enter the Password"
            type="password"
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
          <button type="submit">submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
}
