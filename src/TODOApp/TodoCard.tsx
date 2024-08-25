import { useState } from "react";
import { Button, Card, CardActions, CardContent, Dialog } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import "./TodoCard.css";
import DialogTodo from "./DialogTodo";

export default function TodoCard({ todo }: any) {
  const [dialogData, setDialogData] = useState(null);

  async function handleClick() {
    const response = await fetch(`https://dummyjson.com/todos/${todo.id}`);
    const val = await response.json();
    console.log("value", val);
    setDialogData(val);
  }

  const renderDialog = () =>{
   return (dialogData ? (
      <DialogTodo object={dialogData} setMethod={ setDialogData}  />
    ) : null);}

  return (
    <Fragment>
      <Card
        style={{
          display: "inline-block",
          margin: "20px",
          width: "25%",
        }}
        className="cardStyle"
      >
        <CardContent>{todo.todo}</CardContent>
        <CardActions key={todo.id}>
          <Button onClick={handleClick}>Expand</Button>
        </CardActions>
        {renderDialog()}
      </Card>
    </Fragment>
  );
}
