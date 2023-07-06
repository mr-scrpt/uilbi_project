import React from "react";
import "./Counter.scss";

export const Counter = (props: {}) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <button onClick={increment} className="button">
        Increment
      </button>
    </div>
  );
};
