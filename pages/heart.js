import HeadLink from '../components/headMenu'
import LsJoin from "../components/album/loginAndJoin";
import AlbumList from '../components/album/albumList'
import Cart from '../components/album/albumCart'
const Heart=()=>{


    return (
        <>
            <HeadLink/>
            <LsJoin/>
            <AlbumList/>
            <Cart/>
        </>
    )
}
export default Heart;