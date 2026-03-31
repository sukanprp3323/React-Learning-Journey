import { useId } from "react";

export const UseID = () => {
  //   const UserNameID = useId();
  //   const EmailId = useId();
  //   const PassWordID = useId();

  //   return (
  //     <form>
  //       <div>
  //         <label htmlFor={UserNameID}>UserName : </label>
  //         <input type="text" id={UserNameID} name="UserName" />
  //       </div>
  //       <div>
  //         <label htmlFor={PassWordID}>PassWord : </label>
  //         <input type="text" id={PassWordID} name="PassWordID" />
  //       </div>
  //       <div>
  //         <label htmlFor={EmailId}>Email : </label>
  //         <input type="password" id={EmailId} name="Email" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );

  // this allows US to Not rewrite the code for multiple form using single UID

  const ID = useId();

  return (
    <form>
      <div>
        <label htmlFor={ID + "UserNameID"}>UserName : </label>
        <input type="text" id={ID + "UserNameID"} name="UserName" />
      </div>
      <div>
        <label htmlFor={ID + "PassWordID"}>PassWord : </label>
        <input type="text" id={ID + "PassWordID"} name="PassWordID" />
      </div>
      <div>
        <label htmlFor={ID + "EmailId"}>Email : </label>
        <input type="password" id={ID + "EmailId"} name="Email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
