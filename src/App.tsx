import "./App.css";
import EsVersions from "./Components/EsVersions";
import Reactfund from "./Components/ReactFundamentals";
import { ExternalSite } from "./Components/ExternalSite";
import { useState } from "react";
import ReactPage from "./Components/ReactPage";
import ClassComponentExample from "./Components/ClassComponents";
import FunctionalComponentExample from "./Components/FunctionalComponents";
import DatafetchingComponent from "./Components/DataFetchingFromApi";
import GlobalWrapperComponent from "./Contexts";
import ContextButtonComponent from "./Components/ContextButtonComponent";
import ContextTextComponent from "./Components/ContextTextComponent";
import MainPage from "./TODOApp";
import InputForm from "./Forms/InputElements";
import FormExample from "./Forms/FormExample";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import { Route, Routes } from "react-router-dom";
import RecipeList from "./Router-Dom/RecipeList";
import CommentsList from "./Router-Dom/CommentsList";
import RouterDom from "./Router-Dom/Example";
import RouterExample2 from "./Router-Dom/Example2";
import QueryExample from "./ReactQuery/QueryExample";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DummyPage2 } from "./Components/Dummy";

function App() {
  // this is used to cache the fetched data

  // need to initialize one list with the cards and
  //inside the component iterate them and render them
  const [esVersionsPageClick, setEsVersionsPageClick] =
    useState<boolean>(false);
  const [fundamentalPageClick, setFundamentalPageClick] = useState(false);
  const [id, setid] = useState(0);

  var flag = true;
  console.log("from app.tsx");

  return (
    <>
      <MainPage />
      {esVersionsPageClick ? (
        <>
          <button onClick={() => setEsVersionsPageClick(false)}>X</button>
          <ExternalSite />
        </>
      ) : (
        <>
          <div className="Cards">
            <EsVersions dummymethod={setEsVersionsPageClick} />
            <Reactfund dummy={setFundamentalPageClick} />
          </div>
        </>
      )}
      {fundamentalPageClick ? (
        <>
          <button onClick={() => setFundamentalPageClick(false)}>X</button>
          <ReactPage />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;

//<>
// <div className="App">React Complete Tutorial 2024
//   {flag ? <ClassComponentExample/> : null}
{
  /* <RouterDom/> */
}
{
  /* <RouterExample2 /> */
}
//   {esVersionsPageClick ? (
//     <>
//       <button onClick={() => setEsVersionsPageClick(false)}>X</button>
//       <ExternalSite />
//     </>
//   ) : (
//     <>
//       <div className="Cards">
//         <EsVersions dummymethod={setEsVersionsPageClick} />
//         <Reactfund dummy={setFundamentalPageClick} />
//       </div>
//     </>
//   )}
//   {fundamentalPageClick ? (
//     <>
//       <button onClick={() => setFundamentalPageClick(false)}>X</button>
//       <ReactPage />
//     </>
//   ) : (
//     <></>
//   )}
// </>

// {
//   /* <FunctionalComponentExample /> */
// }
// {
//   /* <DatafetchingComponent/> */
// }
// {
//   /* <GlobalWrapperComponent>
//         <ContextButtonComponent/>
//         <ContextTextComponent/>
//       </GlobalWrapperComponent> */
// }
// {
//   /* <MainPage /> */
// }
// {
//   /* <InputForm/> */
// }
// {
//   /* <FormExample/> */
