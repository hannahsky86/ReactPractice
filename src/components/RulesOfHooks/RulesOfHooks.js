import { useEffect, useState } from "react";
import React from 'react';


//only call at the top level
//not inside loops, conditions, or functions


function RulesOfHooks() {
  const [windowWidth, updateWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  
  //On every reader
  useEffect(()=>{
    console.log("I re-rendered");
    window.addEventListener("resize", updateWindowWidth);
  }); 
  
  //On first render/mount only! - componentDidMount Alternative
  useEffect(()=> {
    console.log("The component mounted");
  }, []); 
  
  //On first render + whenever dependancy changes - componentDidUpdate Alternative
  useEffect(()=> {
    //console.log(`The name changed: ${name}`);
  }, [name]);
  
  //Follows the same rules, except this handles the unmounting on a component - componentWillUnmount Alternative
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  
  
  return (
    <div>
      <center>
        <h1>The UseEffect Hook</h1>
        <h2>The window width is: {windowWidth}</h2>
        <input value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Enter a name"
        />
      </center>
    </div>
  );
}

export default RulesOfHooks;
