import React, {useCallback,useEffect,useState} from 'react'

const PgButton=({numb,current,setCurrentPage,goToP})=>{
    const pageArr=[]
    for(let i=current;i<=numb;i++){
        pageArr.push(i)
    }


    return (
        <>
            {pageArr.map((ele)=>{
                if(ele===current){
                    return <li key={ele.id} className="now-btn">{ele}</li>
                }else{
                    return <li key={ele.id}  onClick={()=>goToP(ele)} >{ele}</li>
                }
            })}
        </>
    )



}

export default PgButton;