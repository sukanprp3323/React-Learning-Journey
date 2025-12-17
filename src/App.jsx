// import React from "react";

// import { EventHandling } from "./components/EventHandling";
import { DerivedState } from "./components/DerivedState";
import { EventPropagation } from "./components/EventPropagation";
import { EventProps } from "./components/EventProps";
import { State } from "./components/hooks/State";
import { LiftStateUp } from "./components/LiftStateUp";
import { ToggleSwitch } from "./Projects/ToggleSwitch Project/ToggleSwitch";
// import NetflixSeries from "./components/NetflixSeries" //named Exp import
// import "./components/Netflix.module.css"
// import { Practices } from "./Practices";
// import "./components/netflix.module.css"


//* new way using React JS


export const App = () => {
  return (
    <section className="container">
      {/* <EventHandling /> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedState/> */}
      {/* <LiftStateUp/> */}
      <ToggleSwitch/>

      
      {/* <h1 className="card-heading"
        style={headerStyle}>List of Best netflix series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <Practices/> */}
      {/* <MyCompo /> */}
    </section>
  )
};

