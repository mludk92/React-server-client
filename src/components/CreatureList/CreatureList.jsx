import { useState, useEffect } from 'react'
// We must import axios in each component where we want to use it
import axios from 'axios'
import CreatureForm from './createrForm'


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


    return (
        <div>
            {/**Sending the props to creatureForm as Var here */}
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatueOrigin={setCreatueOrigin}
                fetchCreatureList={fetchCreatureList}
            />
            <h2>Creature List </h2>
            {/* //use for testing {
                //this turn our Array into a string
                JSON.stringify(listOfCreatures)
            } */}

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