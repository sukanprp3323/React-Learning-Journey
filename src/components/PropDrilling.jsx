export const ParentComponent = () => {
  return (
    <section
      className={`p-4 h-lvh text-5xl font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>Component A</h1>

      <ChildComponent data="React JS" />
    </section>
  );
};

const ChildComponent = (props) => {
    return(
      <>
        <h1>Hello, I am Grand Commponent B</h1>
        <GrandChildComponent data={props.data} />
      </>
    )
};

const GrandChildComponent = (props) => {
    return(
      <>
        <h1>Hello, I am GrandGrandChildComponent C</h1>
        <GrandGrandChildComponent data={props.data} />
      </>
    )
};

const GrandGrandChildComponent = (props) => {
    return(
      <>
        <h1>Hello, I Love {props.data}</h1>
        
      </>
    )
};
