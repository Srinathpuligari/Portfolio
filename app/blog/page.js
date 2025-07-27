'use client';

import { useEffect, useState } from "react";
import { personalData } from "../../utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
        const data = await res.json();
        const filtered = data.filter(blog => blog?.cover_image);
        setBlogs(filtered);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    }

    getBlogs();
  }, []);

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
}
