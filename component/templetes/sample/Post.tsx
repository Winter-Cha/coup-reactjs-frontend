// make component that returns post list using useAppSelector and useAppDispatch
import { useAppDispatch, useAppSelector } from "@/redux";
import { fetchPosts } from "@/redux/slices/postSlice";
import { FunctionComponent } from "react";
import { Post } from "@/models/Post";

const Post: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);
  const loading = useAppSelector((state) => state.post.loading);
  const clickFetchPosts = () => {
    dispatch(fetchPosts());
  };
  return (
    <>
      <button onClick={clickFetchPosts}>Fetch Posts</button>
      {loading && <p>Loading...</p>}
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;
