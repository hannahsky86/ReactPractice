import useRandomJoke from "./useRandomJoke";
import React, {useState, useRef} from "react";

function CustomHook() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    
    const [initialized, setInitialized] = useState(false);
    
    const [firstName, setFirstName] = useState('Hannah');
    const [lastName, setLastName] = useState('Roach');
    const [versionNumber, setVersion] = useState(0);

    const joke = useRandomJoke(firstName, lastName, versionNumber);


    
  
    const generateJoke = (e) => {
      e.preventDefault();
      setFirstName(firstNameRef.current.value);
      setLastName(lastNameRef.current.value);
      setInitialized(true);
      setVersion(versionNumber+1);
  };
 
  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{initialized&&joke}</h2>
          <form>
              <input placeholder="first name" ref={firstNameRef}/>
              <input placeholder="last name" ref={lastNameRef}/>
              <button type="submit" onClick={generateJoke}>Generate Joke</button>
          </form>
      </center>
    </div>
  );
}

export default CustomHook;
