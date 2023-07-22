import React, {useState,useEffect} from "react";
import "../Page/page.css"
import axios from "axios";

function Page(){
    const [post,setpost] = useState([]);

    const [perPage,setperPage]=useState([10]);
    const [currentPage,setCurrentPage]=useState(1);


    const numOfTotalPages=Math.ceil(post.length/perPage);
    const pages=[...Array( numOfTotalPages + 1).keys()].slice(1);

    const indexOfLastPage= currentPage * perPage;
    const indexOfFirstPage=indexOfLastPage - perPage;

    const visiblePage =post.slice(indexOfFirstPage,indexOfLastPage)
    const pervPageHandler =() =>{
        if (currentPage !== 1)setCurrentPage(currentPage-1)
    }
    const nextPageHandler =() =>{
        if (currentPage !== numOfTotalPages)setCurrentPage(currentPage+1)
    }
    


    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .finally(() =>{

        }).then((res)=>{
            setpost(res.data);

        })
    },[]);
    const [push,setpush]=useState()
    const [trigger,settrigger]=useState(false)
    const postdata=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",{title:push})
        .then((r)=>setpost([...post,r.data])).then(()=>(!trigger))
        setpush("")

       
    }
    return(
        <>
        <div className="ibbox">
            <input className="input" type="text" value={push} placeholder="TYPEHERE" onChange={ e => setpush(e.target.value)}/>
                                                             
            <button onClick={postdata}>Submit</button>
        </div>
          <div className="flexbox">
            {
                visiblePage.map(post => <p className="card" key={post.id}> <i class="bi bi-moon-stars-fill"></i> {post.title}</p>)
            }
          </div>
          <div className="flexbtn">
          <button className="button bt" onClick={pervPageHandler}>Prev</button>
            <p>{pages.map(page => <button key={page} onClick={()=>setCurrentPage(page)}
            className={`${currentPage === page ? "activee":" " } button `}>{`${page} `}</button>)}</p>
            <button className="button bt"onClick={nextPageHandler}>next</button>
          </div>
        </>
    )
}
export default  Page;