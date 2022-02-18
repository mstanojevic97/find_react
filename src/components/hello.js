import react from 'react'
import { useState, useEffect} from 'react'

const Hello = ()=>{
    const [initialState, setInitialState] = useState()

    useEffect(()=>{
        fetch('/auth/role').then(res =>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => {
            setInitialState(jsonResponse)})
    },[])
    console.log(initialState);
    return(
    <div>
        <ul>
        <li>{initialState? (initialState[0].roleName) : "dadasd"}</li>
        <li>{initialState? (initialState[1].roleName) : "dadasd"}</li>
        </ul>
    </div>
    )
}


export default Hello;