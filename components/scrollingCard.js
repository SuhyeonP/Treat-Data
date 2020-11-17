import {useEffect} from 'react';
const PostCard=({post,ind})=>{


    return (
        <>
            <li>
                <p>{ind+1}</p>
                <p>{post.firstName}</p>
                <p>{post.content}</p>
            </li>
        </>
    )
}
export default PostCard;