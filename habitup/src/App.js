import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Todo from "./components/todo"
import Authentication from "./Authentication";
import HashLoader from "react-spinners/HashLoader";
import { Initialise } from "./styles/initialise";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  // Setting up the intial loader
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 500)
  }, []);


  return (
    <div className="App">
      {loader ? <Initialise><HashLoader color={"#8BFF0E"} size={150} /></Initialise> :
        <>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* <Authentication /> */}
              </Route>
              <Route path="/todo-list">
                <Todo />
              </Route>
              <Route path="/dashboard">

              </Route>
            </Switch>
          </Router>

        </>}
    </div>);
}

export default App;
