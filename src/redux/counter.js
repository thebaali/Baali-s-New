import { useDispatch,useSelector } from "react-redux"
import { selectCount,incremeant,decremennt } from "./counterReducer"

function Counter(){
    const dispatch =useDispatch();
    const reduxData =useSelector(selectCount)
    return (
        <>
        <p>{reduxData}</p>
        <button onClick={()=>dispatch(incremeant())}>Increment</button>
        <button onClick={()=>dispatch(decremennt())}>Decrement</button>
        
        </>
    )
}
export default Counter