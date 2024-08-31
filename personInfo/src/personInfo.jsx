import React from "react"


const personInfo = (props) => {
    return(
        
        <>
        <h1>{props.name}</h1>
        <h1>{props.lastname}</h1>
        <h1>{props.mail}</h1>
        </>
 
    )
}

export default personInfo