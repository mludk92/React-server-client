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
  //let firstName = "Mitch";
  //     name    function     default val
  const [headerText, setHeaderText] = useState('Welcome to React!!!')
  return (
    // This looks like HTML but is really JSX
    <div>
      {/**headerTextProp is name of prop
       * {headerText} is value to be assigned 
       */}
      <Header 
      headerTextProp = {headerText}
      textColor="brown"
      />
      <p> just for an example double headers </p>
      <Header 
      headerTextProp = {headerText}
      textColor="gold"
      />
      <p>Hello World!?</p>
      <ClickCounter />
      <InputExample/>
      <CreatureList />
    </div>
  );
}

export default App;
