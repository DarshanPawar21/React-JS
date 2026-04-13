import React from "react";
import Form from "./Component/Form";
import "./App.css"
import { BrowserRouter } from "react-router";
import "./Component/Nev"
import Nev from "./Component/Nev";

// import { Routes,Route } from "react-router";
import User from "./Component/user";
const App = () => {
  return (<>
    <Nev />
    <User />
  </>)
}
export default App;