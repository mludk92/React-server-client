// Source in our stylesheet
import './App.css';
// useState updates DOM when a variable changes
import {useState} from 'react'



function App () {
  // Our functions and variables will go here
let firstName = 'Mitch'
//     name    function     default val
const [counter,setCounter] = useState(0)
//funtion to increase click counter
let increaseClickCounter = () =>{
  //counter += 1 do not modify state directly
  setCounter(counter + 1)
  console.log(counter)
}
let decreaseClickCounter = () => {
  setCounter(counter - 1)
}
  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        <h1>Welcome to React! <br/>{counter}</h1>
      </header>
      <p>Hello World! {firstName}</p>
      <p>You clicked {counter} Times</p>
      <button onClick={increaseClickCounter}>Increase</button>
      <button onClick={decreaseClickCounter}>Decrease</button>
    </div>
    
  );
}

export default App
