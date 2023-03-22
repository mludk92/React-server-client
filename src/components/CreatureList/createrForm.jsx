import axios from 'axios'
//import props from CreatureList Here
function CreatureForm({creatureName,setCreatureName,
                        creatureOrigin,setCreatueOrigin,
                        fetchCreatureList}) {

    const submitForm = (event) => {
        event.preventDefault();
        axios.post('/creature', {
            //Using values from our var in state
            name: creatureName,
            origin: creatureOrigin,
        }).then((response)=>{
            //clear out input fields
            setCreatureName('')
            setCreatueOrigin('')
            // react version of get() after function
            fetchCreatureList()
        }).catch((error)=>{
            console.log(`Error in POST ${error}`)
            alert('Something Went Wrong')
        })
    }

    return (
        <>
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
        
        </>
    )
} 

export default CreatureForm