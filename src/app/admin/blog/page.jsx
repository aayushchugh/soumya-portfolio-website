"use client";

import React, { useEffect, useState, useMemo } from "react";
import BlogCard from "@/components/ui/BlogCard";
import onlyAdmin from "@/lib/onlyAdmin";

function CategoryClient({ category }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const searchedBlogs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.keywords.some((keyword) => keyword.toLowerCase().includes(term)),
    );
  }, [searchTerm, blogs]);

  return (
    <section className="min-h-screen text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-[#2C2D33] px-4 py-12 md:px-10 flex flex-col items-center pt-24">
      <div className="w-full max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-orange-500 text-3xl sm:text-4xl md:text-5xl font-bold capitalize">
            Blogs
          </h1>
        </div>

        <div className="mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-gray-300"
            placeholder="Search blogs by title or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading && (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
          </div>
        )}

        {!loading && searchedBlogs.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
                customCTA={"Edit"}
                customHref={`/admin/blog/${blog.slug}/edit`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default onlyAdmin(CategoryClient);
