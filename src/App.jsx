// import React from "react";

// import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
// import NetflixSeries from "./components/NetflixSeries" //named Exp import
// import "./components/Netflix.module.css"
// import { Practices } from "./Practices";

import "./components/netflix.module.css"

//* new way using React JS
// const headerStyle = {
//   marginBottom: "2rem",
//   color: "darkred",
//   fontSize: "2rem"
// }

export const App = () => {
  return (
    <section className="container">
      {/* <EventHandling /> */}
      <EventProps/>
      {/* <h1 className="card-heading"
        style={headerStyle}>List of Best netflix series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <Practices/> */}
      {/* <MyCompo /> */}
    </section>
  )
};

