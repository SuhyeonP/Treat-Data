import React,{useEffect,useCallback,useRef,useState,useMemo} from 'react';
import axios from 'axios'
import Link from "next/link";
import PagingTable from "../components/pagingTable";
import PgButton from "../components/pgbtn";
const Paging=()=>{
    const [post,setPost]=useState([])
    const [tft,setTft]=useState(false)


    const [total,setTotal]=useState(0)
    const [currentPage,setCurrentPage]=useState(1)
    const [goF,setGoF]=useState(false)
    const [goB,setGoB]=useState(true)


    useEffect(()=>{
        const hi=async()=>{
            setTft(true)
            const res=await axios.get("http://api.honeyhyoni.shop/album")
            setPost(res.data.slice(0,3))
            setTft(false)
            setTotal(Math.ceil(res.data.length/3))
        }
        hi();
    },[])

    console.log(total)
    if(tft){
        return (<p>just a moment</p>)
    }

    return (
       <>
           <div className="heh">
               <div className="flllex">
                   <Link href="/"><a>Home</a></Link>
                   <br/>
                   <Link href="/paging"><a>Paging</a></Link>
               </div>
           </div>
           <div className="img-zone">
               <img src="https://i.stack.imgur.com/DAwB5.png" id="selectImg"/>
           </div>
           <div className="paging-table">
               <table>
                   <thead>
                   <tr>
                       <td>Num</td>
                       <td>Title</td>
                       <td>When</td>
                       <td>Part</td>
                   </tr>
                   </thead>
                   <tbody>
                   {post.map((ele)=>{
                       return <PagingTable key={ele.id} album={ele}/>
                   })}
                   </tbody>
               </table>
           </div>
           <div className="page-button">
               <ul>
                   {goF?<li>◁</li>:null}
                   <PgButton numb={total} current={currentPage}/>
                   {goB?<li>▷</li>:null}
               </ul>
           </div>
       </>
    )
}
export default Paging;