import { getAllPosts } from "@/app/services/getposts";
import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const post = await getData(slug);

  return { title: post.title };
}
export default async function Post({ params: { slug } }: Props) {
  const post = await getData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
