import path from "path";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecipeList from "./RecipeList";
import CommentsList from "./CommentsList";

export default function RouterExample2() {
    // inorder to render the child component the <outlet/> component is used.
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RouterExample2 />,
//     },
//     {
//       path: "/recipe",
//       element: <RecipeList />,
//     },
//     {
//       path: "/comment",
//       element: <CommentsList />,
//     },
//   ]);

  return (
    <>
      React router dom example 2

      {/* <RouterProvider router={router} /> */}
    </>
  );
}
