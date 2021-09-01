import React, {useState, useEffect} from "react";
import Header from "./components/header";
import Todo from "./components/todo"
import HashLoader from "react-spinners/HashLoader";
import {Initialise} from "./styles/initialise";

function App() {
  // Setting up the intial loader
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 1500)
  }, []);


  return (
    <div className="App">
    {loader?<Initialise><HashLoader color={"#8BFF0E"} size={150} /></Initialise>:
    <>
    <Header/>
    <Todo/>
    </>}
  </div>);
}

export default App;
