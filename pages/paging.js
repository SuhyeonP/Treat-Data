import React,{useEffect,useCallback,useRef,useState,useMemo} from 'react';
import axios from 'axios'
import HeadLink from '../components/headMenu'
import PagingTable from "../components/pagingTable";
import PgButton from "../components/pgbtn";
const Paging=()=>{
    const [post,setPost]=useState([])
    const [tft,setTft]=useState(false)


    const [total,setTotal]=useState(3)
    const [currentI,setCurrentI]=useState(0)
    const [currentPage,setCurrentPage]=useState(1)
    const [goF,setGoF]=useState(false)
    const [goB,setGoB]=useState(true)
    const [after,setAfter]=useState(0)
    useEffect(()=>{
        const hi=async()=>{
            setTft(true)
            const res=await axios.get("http://api.honeyhyoni.shop/album")
            const post3data=res.data.slice(currentI*3,currentPage*3)
            setPost(post3data)
            console.log("NowData",post3data)
            setTft(false)
            setAfter(res.data.length%3)
            console.log(after)
            setTotal(Math.ceil(res.data.length/3))
            if(currentI===total){
                const lastData=res.data.slice(currentI*3,after+currentI*3)
                setPost(lastData)
                console.log("NowData",lastData)
            }
        }
        hi();
    },[currentPage])

    if(tft){
        return (<p>just a moment</p>)
    }
    const goToP=(num)=> {
        if(num===total){//todo 마지막에 남은갯수만큼 페이지 보이는거 안됨
            setGoB(false)
            setGoF(true)
            return(
                setCurrentPage(num),
                setCurrentI(num-1)
            )
        }
        if(num===1){//첨으로 가는건 잘됨
            setGoB(true)
            return(
                setCurrentPage(1),
                setCurrentI(0)
            )
        }else{
            setGoF(true)
            return(
                setCurrentPage(num),
                    setCurrentI(num-1)
            )
        }
    }


    return (
       <>
           <HeadLink/>
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
                   {goF?<li onClick={()=>goToP(1)}>◁</li>:null}
                   <PgButton numb={total} goToP={goToP}  current={currentPage}/>
                   {goB?<li onClick={()=>goToP(total)}>▷</li>:null}
               </ul>
           </div>
       </>
    )
}
export default Paging;