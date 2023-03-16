// Source in our stylesheet
import "./App.css";
// start with npm run client
// useState updates DOM when a variable changes
import { useState } from "react";
import Header from "../Header/Header.jsx";
import ClickCounter from "../ClickCounter/ClickCounter.jsx";
import CreatureList from "../CreatureList/CreatureList.jsx";
import InputExample from "../InputExample/InputExample";

function App() {
  // Our functions and variables will go here
  let firstName = "Mitch";
  //     name    function     default val

  return (
    // This looks like HTML but is really JSX
    <div>
      <Header />
      <p>Hello World! {firstName}</p>
      <ClickCounter />
      <InputExample/>
      <CreatureList />
    </div>
  );
}

export default App;
