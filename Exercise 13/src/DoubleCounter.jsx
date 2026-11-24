// DoubleCounter.jsx
import { useReducer } from "react";

const initialState = { counterA: 0, counterB: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, counterA: state.counterA + 1 };
    case "decrementA":
      return { ...state, counterA: state.counterA - 1 };
    case "incrementB":
      return { ...state, counterB: state.counterB + 1 };
    case "decrementB":
      return { ...state, counterB: state.counterB - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <section>
        <h1>Double Counter</h1>
        <h2>Counter A: {state.counterA} </h2>
        <button onClick={() => dispatch({ type: "decrementA" })}>A-</button>
        <span> </span>
        <button onClick={() => dispatch({ type: "incrementA" })}>A+</button>
      </section>
      <section>
        <h2>Counter B: {state.counterB} </h2>
        <button onClick={() => dispatch({ type: "decrementB" })}>B-</button>
        <span> </span>
        <button onClick={() => dispatch({ type: "incrementB" })}>B+</button>
      </section>{" "}
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset Both</button>
    </div>
  );
};

export default DoubleCounter;
