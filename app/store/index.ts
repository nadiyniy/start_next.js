import { create } from "zustand";
import { getPostsBySearch } from "./../services/getposts";
import { getAllPosts } from "../services/getposts";

type usePosts = {
  posts: any[];
  isLoading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<usePosts>()((set) => ({
  posts: [],
  isLoading: false,
  getAllPosts: async () => {
    set({ isLoading: true });
    const posts = await getAllPosts();
    set({ posts, isLoading: false });
  },
  getPostsBySearch: async (search) => {
    set({ isLoading: true });
    const posts = await getPostsBySearch(search);
    set({ posts, isLoading: false });
  },
}));
