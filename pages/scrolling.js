import {useEffect,useState,useRef} from 'react';
import { dummyDataScrolling} from '../config/dummy'
import PostCard from "../components/scrollingCard";
import Link from "next/link";

const Scrolling=()=>{
    const [posts,setPosts]=useState(dummyDataScrolling(8))
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
        if(15<countE){
            console.log('will be')
            setMore(false)
        }
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    },[posts.length])


    return (
        <>
            <ul>
                {more?posts.map((post,ind)=>(<PostCard key={post.id} ind={ind} post={post}/>))
                    :
                    (
                        <div>
                            Too many scroll~~~~Stop
                            <br/>
                            <Link href="/"><a>Home</a></Link>
                            <br/>
                            <Link href="/paging"><a>Paging</a></Link>
                        </div>
                    )
                }
            </ul>
        </>
    )
}
export default Scrolling;