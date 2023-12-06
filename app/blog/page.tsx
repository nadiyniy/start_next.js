import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("Error 404 - custom");
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Start Next.js",
};
export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>This is Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
