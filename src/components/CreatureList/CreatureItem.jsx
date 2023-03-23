import axios from 'axios'

function creatureItem({ creature , creatureName, fetchCreatureList}){
    
    //This same pattern can be used for udate 
    // i.e. marking as complete
    const removeCreature = (e)=> {
        console.log(`removeCreature ${creature.id}`)
        axios.delete(`/creature/${creature.id}`)
        .then((response)=>{
            //Fetch creatureList
            fetchCreatureList()
        }).catch((error)=>{console.log(`error in removeCreature ${error}`)
    alert('something went wrong')})
 }   
//conditional rendering
//This is much easier after creating a CreatureItem component
 const getDecoration = () => {
    if(creature.name === 'Otis'){
        return 'line-through'
    }else {
        return 'none'
    }
 }

 return(
        <>
 {/*what we wanter to render*/}
            <li style={{textDecoration: getDecoration() }}>
            {creatureName} is from {creature.origin}
            <button onClick={(e => removeCreature(e))}>Delete</button>
            </li>

        </>
    )
}

export default creatureItem