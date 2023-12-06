"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/getposts";
import Posts from "@/components/Posts/Posts";

export const metadata: Metadata = {
  title: "Blog | Start Next.js",
};
export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>page Blog</h1>
      {isLoading ? <p>Loading 2...</p> : <Posts posts={posts} />}
    </>
  );
}
