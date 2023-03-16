import { useState } from "react"


function InputExample() {
    // databinding -- binding the var to an input 
    const [firstName, setFirstName] =useState('Mitch')
    return (
        <>
            <h2>Input Example</h2>
            <p>You have typed: {firstName}</p>
            <input value={firstName}
            //this event happens when the field changes
            onChange={(event)=> setFirstName(event.target.value)}
            type="text" />
        </>
    )
}

export default InputExample