import React from "react";
import Form from "./Form";
import "./App.css"
import { BrowserRouter } from "react-router";
import { Routers,Route } from "react-router";
const App = () => {
  return (<>
  <Routers>
    <Route path="/" element = {<Form />} />
  </Routers>
    <BrowserRouter>
      < Form />
    </BrowserRouter>
  </>)
}
export default App;