import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.css";
import TodoCard from "./TodoCard";

export default function MainPage() {
  const [toDoList, setToDoList] = useState([]);
  const [fetchflag, setFetchflag] = useState(false);
  async function handleClick() {
    setFetchflag(true);
    const response = await fetch("https://dummyjson.com/todos");
    const json = await response.json();
    setFetchflag(false);
    setToDoList(json?.todos);

    // setButtonClicked(false)
    console.log(json.todos);
  }
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>To Do App </h1>
      <Box className={styles.maindiv}>
        <Typography>Get all the ToDos</Typography>
        <Button onClick={handleClick}>Get Now</Button>
      </Box>
      {fetchflag && <h2>Fetching data</h2>}
      {toDoList.map((todo) => {
        return <TodoCard todo={todo} />;
      })}
    </Box>
  );
}
