import { useCustomBioContext } from "./Index";

export const Services = () => {
  const { myName, myAge } = useCustomBioContext();
  return (
    <section
      className={`p-4 h-lvh text-5xl font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>Hello ContextAPI (Services) from HOME Component</h1>
      <h2>My Services is = {myName}</h2>
      <h2>My Services is = {myAge}</h2>
    </section>
  );
};
