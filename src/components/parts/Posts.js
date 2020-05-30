import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../parts/PostItem";
import Pagination from "../parts/Pagination";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const postItems = posts.map((post) => <PostItem post={post} />);

  return (
    <>
      <div class="col-lg-8">
        <div class="blog-box list-style">
          {postItems}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Posts;
