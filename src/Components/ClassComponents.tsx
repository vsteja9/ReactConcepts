// for reference please refere the below link
// <!-- https://www.freecodecamp.org/news/function-component-vs-class-component-in-react/ -->

import { Component, ReactNode } from "react";

export default class ClassComponentExample extends Component {
  state = {
    count: 2,
  };
  constructor(props: any) {
    super(props);
  }
  // this method will be invoked when the component is created.
  componentDidMount(): void {
    console.log("log from componentDidmount");
  }
  // this method is invoked when the props or states are changed.
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("log from the componentDidupdate");
    // we can't change the state in the componentDidmount,if we do that the infinite loop will happens.
    // this.setState({
    //   count: this.state.count + 1,
    // });
  }
  // this method is invoked when the component is destroyed...
  componentWillUnmount(): void {
    console.log("log from the componentWillUnmount");
  }
  //UI method
  render(): ReactNode {
    return (
      <>
        <h1>Hello world</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          add 1 by clicking me
        </button>
        <h2>the count is{this.state.count}</h2>
      </>
    );
  }
}


// conclusion of the difference between class components and functional components is 
//we have the statemanagement in class components by default. and lifecycle methods exceutions and rerenders.good to handle complex logics.
// the functional components are the state-less and presentational and static. with the help of hooks, the functional comp are competing on par with 
// the class components. and mostly in the industry the functional components are used.
// with class component Performance Optimization: Class components offer optimization opportunities through the use of PureComponent or
// manual implementation of shouldComponentUpdate (a lifecycle method in React). These optimizations can help prevent unnecessary re-renders and 
//improve performance in certain scenarios.
