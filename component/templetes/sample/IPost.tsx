// make component that returns ipost list using useAppSelector and useAppDispatch
import { useAppDispatch, useAppSelector } from "@/redux";
import { fetchPosts } from "@/redux/slices/IPostSlice";
import { FunctionComponent } from "react";
import { IPost } from "@/models/IPost";

const IPost: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.iPostSlice.posts);
  const loading = useAppSelector((state) => state.iPostSlice.loading);
  const clickFetchPosts = () => {
    dispatch(fetchPosts());
  };
  return (
    <>
      <button onClick={clickFetchPosts}>Fetch Posts</button>
      {loading && <p>Loading...</p>}
      <ul>
        {posts.map((post: IPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default IPost;
