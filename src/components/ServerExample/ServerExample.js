import { useEffect, useState } from "react";
import axios from "axios";
import Child from '../example/exampchild'
function LoadData() {
    const [data, setData] = useState([]);
    const [loading,setloading] = useState()
    function serverCall() {
        setloading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .finally(() => {
                setloading(false)
            })
            .then((res) => {
                setData(res.data)
            })
            .catch(() => {
                setData([])
            })
    }
          useEffect(function(){
            serverCall();
          },[])
    return (
        <>
            <button onClick={serverCall}>LoadData</button>
            {data.length === 0 && <p>No data found</p>}
            {loading && <p>...loading...</p>}
            {
                data.map((ele) => {
                    return <Child information={ele} />
                })
            }
        </>
    )
}
export default LoadData 