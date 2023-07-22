import { useState } from "react";

function State(){
    const [text,settext]=useState('hello')
    return(
        <>
        <p>{text}</p>
        <button onClick={()=>settext('welcome')}>change</button>
        </>
    )
}
export default State;