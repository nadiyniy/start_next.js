export const getAllPosts = async () => {
  const response = await fetch(
    // "https://jsonplaceholder.typicode.com/posts"
    "api/posts"
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    // `https://jsonplaceholder.typicode.com/posts?q=${search}`
    `api/posts?query=${search}`
    // { next: { revalidate: 60 } }
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
