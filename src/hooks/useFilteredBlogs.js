import { useMemo } from "react";

export const useFilteredBlogs = (blogs, search, sort, category) => {
  const filteredBlogs = useMemo(() => {
    if (!blogs) return [];

    return blogs
      .filter((blog) =>
        (category === "All" || blog.category === category) &&
        (
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.content.toLowerCase().includes(search.toLowerCase())
        )
      )
      .sort((a, b) => {
        if (sort === "latest") return b.id - a.id;
        if (sort === "oldest") return a.id - b.id;
        if (sort === "title") return a.title.localeCompare(b.title);
        return 0;
      });
  }, [blogs, search, sort, category]);

  return filteredBlogs;
};