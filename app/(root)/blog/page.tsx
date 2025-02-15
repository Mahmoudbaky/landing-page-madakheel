import Image from "next/image";
import { getAllBlogPosts } from "@/lib/actions/blog.actions";
import BlogCard from "@/components/ui/blog-card";
// import { createClient } from "contentful";
// import { useEffect, useState } from "react";
// import { Blog } from "@/lib/types";

const BlogPage = async () => {
  const posts = await getAllBlogPosts();

  return (
    <>
      <div className="bg-muted">
        <div
          className="flex justify-between items-center flex-col-reverse md:flex-row min-h-[300px] wrapper"
          dir="rtl"
        >
          <div className="flex flex-col w-[50%] gap-7">
            <h1 className="h1-bold"> بلوج </h1>
            <p className="text-justify">
              يمكنكم متابعة اخبارنا من خلال المدونة
            </p>
          </div>
          <div className="">
            <Image
              src="/images/Mailbox-bro.png"
              alt="Picture of the author"
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-20 wrapper my-5">
        {posts.map((post) => (
          <BlogCard key={post.sys.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
