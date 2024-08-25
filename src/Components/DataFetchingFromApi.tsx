import { useEffect, useState } from "react";
import styles from "./FunctionalComponent.module.css";

export default function DatafetchingComponent() {
  const [usersData, setUsersData] = useState([]);
  const [tempflag, setTempFlag] = useState(false);
  async function fetchData() {
    // try {
    //   const response = await fetch("https://dummyjson.com/users");
    //   const jsonobj = await response.json();
    //   console.log(jsonobj);
    // } catch (err) {
    //   console.log(err);
    // }

    fetch("https://dummyjson.com/users")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((res) => setUsersData(res?.users))
      .catch((err) => console.log(err));
  }
  // here i fetched the data based on the tempflag change.
  useEffect(() => {
    fetchData();
  }, [tempflag]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Data Fetching component</h1>
      <button onClick={() => setTempFlag(!tempflag)}>flagchange</button>
      {usersData.map((obj: any) => {
        return (
          <li className={styles.EachListStyles}>
            {obj.firstName} and {obj.lastName}
          </li>
        );
      })}
    </>
  );
}
