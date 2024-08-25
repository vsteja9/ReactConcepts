import { Fragment } from "react/jsx-runtime";

export default function DummyPage() {
  return <>Dummypage</>;
}

export function DummyPage2() {
  return (
    <Fragment>
      <h1>Dummy</h1>
      <h2>method</h2>
    </Fragment>
  );
}
