import React from "react";
import Router from "shared/Router";
import GlobalStyle from "GlobalStyle";
import { useState } from "react";
import dummy from "fakeData.json"


function App() {
    const [Heroes, setHeroes] = useState(dummy)
  return (
    <>
      <GlobalStyle/>
      <Router 
       Heroes={Heroes} 
       setHeroes={setHeroes}/>
    </>
  );
}

export default App;
