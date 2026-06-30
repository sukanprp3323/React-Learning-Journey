import { useReducer, useState } from "react";

export const ReducerCompo = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "Increment") {
    //   return state + 1;
    // }
    // if (action.type === "Decrement") {
    //   return state - 1;
    // }
    // if (action.type === "Reset") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "Increment":
        return {
          ...state,
          count: state.count + 2,
        };

      case "Decrement":
        return {
          ...state, 
          count: state.count - 2,
        };
 
      case "Reset":
        return { ...state, count: 0 };

      default:
        return state;
        break;
    }
  };

  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center text-danger">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>RESET</button>
    </div>
  );
};
