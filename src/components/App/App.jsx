// Source in our stylesheet

// start with npm run client 

import './App.css';
// useState updates DOM when a variable changes
import {useState} from 'react'
import CreatureList from '../CreatureList/CreatureList.jsx'
import Header from './Header.jsx'
import ClickCounter from './ClickCounter.jsx'

function App () {
  // Our functions and variables will go here
let firstName = 'Mitch'
//     name    function     default val

  return (
    // This looks like HTML but is really JSX
    <div>
      <Header />
      <p>Hello World! {firstName}</p>
      <ClickCounter />    
    </div>
    
  );
}

export default App
