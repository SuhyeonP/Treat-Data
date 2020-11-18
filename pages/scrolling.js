import {useEffect,useState,useRef} from 'react';
import { dummyDataScrolling} from '../config/dummy'
import PostCard from "../components/scrollingCard";
import Link from "next/link";

const Scrolling=()=>{
    const [posts,setPosts]=useState(dummyDataScrolling(10))
    const [countE,setCountE]=useState(1)
    const [more,setMore]=useState(true)
    useEffect(()=>{
        function onScroll(){
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200){
                setPosts((prev)=>{
                    return prev.concat(dummyDataScrolling(2))
                })
                setCountE((prev)=>{return prev+1})
            }
        }
        window.addEventListener('scroll', onScroll);
        console.log(countE)
        if(30<countE){
            console.log('will be')
            setMore(false)


        }
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    },[posts.length])

    const changePage=()=>{
        location.reload()
    }

    return (
        <>

            <ul>
                {more?posts.map((post,ind)=>(
                    <>
                        <p className="fixed-ment">약 {33-countE}번 내려가면 화면이 바뀔거에용~~</p>
                        <PostCard key={post.id} ind={ind} post={post}/>
                    </>
                    ))
                    :
                    (
                        <div>
                            Too many scroll~~~~Stop
                            <br/>
                            <Link href="/"><a>Home</a></Link>
                            <br/>
                            <Link href="/paging"><a>Paging</a></Link>
                            <p className="change-ment" onClick={changePage}>다시하고싶다면 저를 클릭해 주세용</p>
                        </div>
                    )
                }
            </ul>
        </>
    )
}
export default Scrolling;