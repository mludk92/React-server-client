import { useState } from 'react'




function ClickCounter () {
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
        <div>
          <p>You clicked {counter} Times</p>
          <button onClick={increaseClickCounter}>Increase</button>
          <button onClick={decreaseClickCounter}>Decrease</button>
        </div>
    ) 
    }
    
    // All components must export 
    export default ClickCounter