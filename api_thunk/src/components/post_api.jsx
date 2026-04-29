import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import fetchaip from "../slices/api.js"

const Post = ()=>{
    const {posts,status,error} = useSelector((state)=>state.posts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchaip());
    },[dispatch]);

    return(
        <div>
            {
                posts.map((post,i)=>{
                    <div key={i}>
                        <h1>{post.titile}</h1>
                    </div>
                })
            }
        </div>
    )
}
export default Post;
