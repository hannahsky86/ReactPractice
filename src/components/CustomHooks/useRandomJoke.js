import React, {useState, useEffect} from 'react';



function UseRandomJoke(firstName, lastName, version) {
   const [joke, setJoke] = useState("");

    useEffect(()=> {
        const fetchJoke = async () =>
            await fetch(
                `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
            )
                .then((res)=>res.json())
                .then((data) => {
                    setJoke(data.value.joke)
                });

        fetchJoke();
    },[firstName, lastName, version]);

    return joke;
}

export default UseRandomJoke;