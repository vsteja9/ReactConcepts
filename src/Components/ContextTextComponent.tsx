import { useContext } from "react";
import { globalContext } from "../Contexts";

export default function ContextTextComponent() {
  const { flag } = useContext(globalContext);
  return (
    <>
      <h1
        style={{
          background: flag ? "blue" : "white",
          fontSize: flag ? "100px" : "50px",
        }}
      >
        V Sai Teja Sagar
      </h1>
    </>
  );
}
