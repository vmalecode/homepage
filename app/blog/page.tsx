// import SampleBlogs from "@/config/sampleblogs";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import { BlogType, getBlogs } from "@/lib/api";
import Container from "@/components/container";
import { BlogPreview } from "@/components/blog-preview";
import { Separator } from "@/components/ui/separator";


const blogs: BlogType[] = getBlogs();

const BlogList = () => {
  return (
    <Container>
      {/* Main message */}
      <div className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ">Blogs</h1>
        <h2 className="text-lg ">A random collection of projects, guides, and things that interest me</h2>
        <h3 className="text-sm text-muted-foreground">I do not use AI to write or assist with writing</h3>
        <Separator className="max-w-xl mx-auto mt-4" />
      </div>
      {/* Posts */}
      <div className="relative sm:pb-12 max-w-xl mx-auto">

        {/* vertical line */}
        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 sm:block" />

        <div className="space-y-16">
          {blogs.map((blog) => (
            <BlogPreview {...blog} key={blog.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Aaron\'s blogs',
}


export default BlogList;
