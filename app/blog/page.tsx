import { Metadata } from "next";
import Posts from "@/components/Posts/Posts";
import PostSearch from "@/components/PostSearch/PostSearch";

export const metadata: Metadata = {
  title: "Blog | Start Next.js",
};

export default function Blog() {
  return (
    <>
      <h1>page Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
