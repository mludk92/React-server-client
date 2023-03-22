//import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
//import axios from 'axios'

//props are passed into our funciton 
//componenet as an argument 

function Header (props) {
return (
    <header>
    <h1 style={{color: props.textColor}}>{props.headerTextProp}</h1> 
    </header>
    
) 
}

// All components must export 
export default Header

//Destructering example 
// const {textColor, headerText } = props
// function Header({ textColor, headerText}) {

//     return (
//         <header>
//             <h1 style={{color: textColor}}>
//                 {headerText}
//             </h1>
//         </header>
//     );
// }

// export default Header;