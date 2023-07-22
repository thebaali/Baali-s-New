import { useState } from "react";
import Exampchild from "./exampchild";
export default function Exampchild() {
    const [data, statedata] = useState([])
    const [username, setusername] = useState("")
    const [age, setage] = useState("")
    const adduser = () => {
        let obj = {
            id: data.length + 1,
            fname: username,
            age: age,   
        }
        statedata(data.concat(obj))
    }

    return(<>
            <div>
                <input type="text" placeholder="Enter name" value={username} onChange={(e) => setusername(e.target.value)} />
                <input type="number" value={age} onChange={(e) => setage(e.target.value)} />
                <button onClick={adduser}>add</button>
                {
                   data.length!==0 && data.map((ele) => {
                        return <>
                            <Exampchild info={ele} />
                            <button>edit</button>
                            <button>remove</button>
                        </>
                    })
                }
            </div>
            </>
    );
        

            
}