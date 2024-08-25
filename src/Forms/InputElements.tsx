import { useState } from "react";
import "./InputForm.css";
import { Button } from "@mui/material";

export default function InputForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [render, setRender] = useState(false);
  return (
    <>
      <div style={{ textAlign: "center" }}>Basic Inputs Example 2024</div>
      <div className="Inputdiv">
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
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setRender(true);
          }}
        >
          Submit
        </Button>
        <Button
          onClick={() => {
            setRender(false);
          }}
        >
          cancel
        </Button>
        {render ? (
          <h2>
            email {email} and password {password}
          </h2>
        ) : null}
      </div>
    </>
  );
}
