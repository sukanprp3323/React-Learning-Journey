import { memo, useCallback, useState } from "react";

const Button = memo(({ onclick, children }) => {
  console.log(`rendering button:${children}`);

  return (
    <button
      onClick={onclick}
      className={`mb-4 py-2 px-5 ${children === "Increment" ? "bg-green-500" : "bg-red-500"}`}
    >
      {children}
    </button>
  );
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("increment Inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("decrement Inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-4">Count: {count}</h1>
      <Button onclick={increment}>Increment</Button>
      <Button onclick={decrement}>Decrement</Button>
    </div>
  );
}
