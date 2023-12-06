import Link from "next/link";
import React from "react";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
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
