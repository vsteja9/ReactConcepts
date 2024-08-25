import "./FunctionalComponentCss.css";
import styles from "./FunctionalComponent.module.css";
import { useEffect, useState } from "react";

export default function FunctionalComponentExample() {
  const [renderName, setRenderName] = useState<boolean>(true);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const productsList = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
  ];
  useEffect(() => {
    console.log(
      "useeffect is happened when the page refreshes with empty dependency.."
    );
    //fetchdata
    console.log("from FunctionalComponents", styles);
    // setRenderName(false);
  }, []);
  

  const handleList = (obj: any) => {
    return <li className={styles.EachListStyles}>{obj.name}</li>;
  };
  function handleincrement() {
    setCount1(count1 + 1);
  }
  return (
    <>
      <div className="firstdiv">
        <h1>Functional Components example</h1>
        <div>{renderName ? <>Hello Sai Teja </> : <>Hello </>}</div>
        <button onClick={() => setRenderName(true)}>Clickme to get Name</button>
        <div>
          <button onClick={handleincrement}>Increment me</button>
          <p>the count is {count1}</p>
          <button onClick={() => setCount2(count2 + 1)}>Increment me</button>
          <p>the count is {count2}</p>
        </div>
        {/* <div style={{background:"black"}}>{productsList.map((obj) => handleList(obj))}</div> */}
        <div> {productsList.map((obj) => handleList(obj))}</div>
      </div>
    </>
  );
}
