import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";

function Posts() {
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
 
  useEffect(() => {
    dispath(getTimelinePosts(user._id));
  },[]);
  if(!posts) return 'No Posts';
  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
}

export default Posts;
