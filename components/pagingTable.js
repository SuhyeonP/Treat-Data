import image from "next/image";

const PagingTable=({album})=>{


    const showImage=()=>{
        const id=document.getElementById('selectImg')
        console.log("Asdf",id.src)
        id.src=''
        id.src=album.img
    }
    const eraseImage=()=>{
        const id=document.getElementById('selectImg')
        id.src='https://i.stack.imgur.com/DAwB5.png'
    }


    return (
        <tr>
            <td>{album.id}</td>
            <td onMouseOver={showImage} onMouseLeave={eraseImage}>{album.title}</td>
            <td>{album.when}</td>
            <td>{album.part}</td>
        </tr>
    )
}
export default PagingTable;