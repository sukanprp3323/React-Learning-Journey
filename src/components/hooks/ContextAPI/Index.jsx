import { createContext, use, useContext } from "react";

//* Step 1 Created Context
export const BioContext = createContext();

//* Step 2 Created Provider Component
export const BioProvider = ({ children }) => {
  const myName = "Sukan";
  const myAge = 21;
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

//!- Custom HOOKS

export const useCustomBioContext = () => {
  const Context = use(BioContext);
  if (Context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return Context;
};
