import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../Forms/Login";
import Register from "../Forms/Register";
import CommentsList from "./CommentsList";
import RecipeList from "./RecipeList";
import { Button } from "@mui/material";
import NoPageFound from "./NoPageFound";
import DynamicPage from "./dynamicpage";

export default function RouterDom() {
  
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Router Dom example</h1>
      <div style={{ textAlign: "center", display: "-ms-flexbox" }}>
        <Button
          style={{
            background: "black",
            color: "white",
            alignContent: "center",
            margin: "10px",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          style={{
            background: "black",
            color: "white",
            alignContent: "center",
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Register
        </Button>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/recipe" element={<RecipeList />}></Route>
        <Route path="/comment" element={<CommentsList />}></Route>
        <Route path="*" element={<NoPageFound />}></Route>
        <Route path=":id" element={<DynamicPage />}></Route>{" "}
      </Routes>
    </>
  );
}
