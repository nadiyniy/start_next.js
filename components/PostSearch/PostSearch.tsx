"use client";
import { usePosts } from "@/app/store";
import React, { FormEventHandler, useState } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
};

export default PostSearch;
