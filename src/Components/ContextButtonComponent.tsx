import { Button } from "@mui/material";
import { useContext } from "react";
import { globalContext } from "../Contexts";

export default function ContextButtonComponent() {
  const { flag, setFlag } = useContext(globalContext);
  return (
    <>
      <Button onClick={() => setFlag(!flag)}>Click me</Button>
    </>
  );
}
