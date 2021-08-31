import React, {useState, useEffect} from "react";
import Header from "./components/header";
import HashLoader from "react-spinners/HashLoader";
import {Initialise} from "./styles/initialise"

function App() {
  // Setting up the intial loader
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 3000)
  }, []);


  return (
    <div className="App">
      {/* condition for loading screen      */}
      { loader?<Initialise><HashLoader color={"#B8E986"} loading={loader} size={150} /></Initialise>:
    <Header/>}
  </div>);
}

export default App;
