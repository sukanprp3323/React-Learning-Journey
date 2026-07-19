//* new way using React JS
import "tailwindcss";
import Button from "./components/hooks/memo/UseCallback";
import { useState } from "react";

export const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const increment = () => {
    console.log("increment Inside");
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-4">Count: {count}</h1>
      <Button onclick={increment}>Increment</Button>
      <Button onclick={decrement}>Decrement</Button>
    </div>
  );
}
