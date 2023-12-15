"use client";
import { usePosts } from "@/app/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";
import Loader from "../Loader/Loader";

const Posts = () => {
  const [posts, isLoading, getAllPosts] = usePosts(
    (state) => [state.posts, state.isLoading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return isLoading ? (
    <Loader />
  ) : !posts.length ? (
    <p>no posts</p>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
