import { createContext, useState } from "react";

const initialState = {
  flag: false,
  setFlag: (val: any) => {},
};
export const globalContext = createContext(initialState);

export default function GlobalWrapperComponent({ children }: any) {
  const [flag, setFlag] = useState(false);

  return (
    <globalContext.Provider value={{ flag, setFlag }}>
      {children}
    </globalContext.Provider>
  );
}
