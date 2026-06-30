import { createContext, use, useState } from "react";

export const ThemeContext = createContext(); // context returns a COmponent

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//!---  Creating a component

export const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);

  return (
    <div
      className={`p-4 h-lvh  flex flex-col justify-center items-center
        ${theme === "dark" ? "bg-gray-800" : "bg-white "}
      `}
    >
      <h1
        className={` m-8 text-4xl
        ${theme === "light" ? "text-gray-800" : "text-white "}
      `}
      >
        DarkLight Mode Website
      </h1>
      <p
        className={`text-2xl m-8
        ${theme === "light" ? "text-gray-800" : "text-white "}
      `}
      >
        Hello From USE Context 🫶
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 text-3xl hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "dark" ? "Switch to light Mode" : "Switch to dark Mode"}
      </button>
    </div>
  );
};
