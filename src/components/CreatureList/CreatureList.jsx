import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'



function CreatureList() {
    const [creatureName, setCreatureName] = useState('')
    const [creatureOrigin, setCreatueOrigin] = useState('')
    const [listOfCreatures, setListofCreatures]= useState([])
    // All Components return what you want them to display
//GET
const fetchCreatureList = () => {
    axios.get('/creature').then((response)=>{
        setListofCreatures(response.data)
    }).catch((error)=>{
        console.log(`Error in GET ${error}`)
        alert('Something Went Wrong')
    })
}
useEffect(()=> {
    // At this point, React is Ready!
    fetchCreatureList()
},[]) //!Remember the empty array
const submitForm = (event) => {
    event.preventDefault();
    axios.post('/creature'), {
        name: creatureName,
        origin: creatureOrigin,
    }.then((response)=>{
        //clear out input fields
        setCreatureName('')
        setCreatueOrigin('')
        fetchCreatureList()
    }).catch((error)=>{
        console.log(`Error in POST ${error}`)
        alert('Something Went Wrong')
    })
}
    return (
        <div>
            <h2>Creature List </h2>
            {/* //use for testing {
                //this turn our Array into a string
                JSON.stringify(listOfCreatures)
            } */}
            <form onSubmit={submitForm}>
                Name: 
                <input type="text" value={creatureName}
                onChange={(event)=> setCreatureName(event.target.value)}> 
                </input>
                <br />
                Origin: 
                <input type="text" value={creatureOrigin}
                onChange={(event)=>setCreatueOrigin(event.target.value)}>     
                </input>
                <input type="submit"></input>
            </form>
            <ul>
                {
                    listOfCreatures.map((creature)=>(
                        //what we wanter to render
                        <li key={creature.id}>
                            {creature.name} from {creature.origin}</li>
                    ))
                }
            </ul>
        </div>
    ) 
}

// All components must export 
export default CreatureList