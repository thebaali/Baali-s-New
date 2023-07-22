import axios from "axios";
import { Component } from "react";
class BasicComponent extends Component{
    constructor(){
        super();
        this.state={
            data:"BasicComponents"
        }
      
    }
    ChangeHandler(){
        this.setState({
            data:"welcome"
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .finally(()=>{

        })
        .then((res)=>{
            this.setState({
                dara:res.data
            })
        })
        .catch(()=>{
            this.setState({
                data:[]
            })
        })

    }
    render(){
        return<>
    <h1>{this.state.data}</h1>
    <button onClick={()=>this.ChangeHandler()}>Change</button>
        </>
    }
}
export default BasicComponent;