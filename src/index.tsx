import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RouterExample2 from "./Router-Dom/Example2";
import CommentsList from "./Router-Dom/CommentsList";
import RecipeList from "./Router-Dom/RecipeList";
import Reactfund from "./Components/ReactFundamentals";
import EsVersion from "./Components/EsVersions";
import FunctionalComponentExample from "./Components/FunctionalComponents";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterExample2 />,
  },
  {
    path: "/recipe",
    element: <RecipeList />,
  },
  {
    path: "/comment",
    element: <CommentsList />,
  },
  {
    path: "/react",
    element: <FunctionalComponentExample />,
  },
  {
    path: "*",
    element: <>Page Not Found </>,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <>
    {/* // <BrowserRouter> */}
    {/* <React.StrictMode> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <App />
    </QueryClientProvider>
    {/* </React.StrictMode> */}
  </>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
