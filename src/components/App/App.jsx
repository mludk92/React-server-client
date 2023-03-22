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

  const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center"}
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
      <p style={styleObj}> just for an example double headers </p>
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
