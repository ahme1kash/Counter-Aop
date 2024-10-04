import { useState, useEffect, useCallback } from "react";

import "./App.css";
// 'children' Prop understanding
// function Button(props) {
//   console.log(props.onClick);
//   console.log(props.children);
//   return <button onClick={props.onClick}>{props.children}</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <Button onClick={increment}>+</Button>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This runs after the component updates, similar to componentDidUpdate
    console.log("The component updated with someValue:", count);
  }, [count]); // This array indicates that the effect runs when someValue changes
  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const subtract = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };
  const zero = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <main className="container">
        <div>
          <h1>Simple Counter</h1>
          <div className="calculate">
            <button aria-label="add" style={{ width: "1em" }} onClick={add}>
              +
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp; {count}&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              aria-label="subtract"
              style={{ width: "1em" }}
              onClick={subtract}
            >
              -
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              aria-label="subtract"
              style={{ width: "3em" }}
              onClick={zero}
            >
              Zero
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
