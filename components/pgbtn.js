const PgButton=({numb,current})=>{
    const arr=[];
    for(let i=current;i<=numb;i++){
        arr.push(i)
    }
    return (
        <>
            {arr.map((ele)=>{
                return <li key={ele.id}>{ele}</li>
            })}
        </>
    )

}

export default PgButton;