import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const Password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, Password.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <BeforeReact19 label="username" ref={username} />
        <BeforeReact19 label="Password" ref={Password} />
        <button>Submit</button>
      </form>
    </>
  );
};

//? Creating BeforeReact19 component on the same page
// const BeforeReact19 = forwardRef((props, ref) => {
//   const id = useId();
//   return (
//     <>
//       <div>
//         <label htmlFor={id}>{props.label}</label>
//         <input type="text" ref={ref} />

//       </div>
//     </>
//   );
// });

//? Creating After React19 component on the same page

const BeforeReact19 = ({label,ref}) => {
  const id = useId();
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" ref={ref} />
      </div>
    </>
  );
};
0