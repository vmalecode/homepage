import { Metadata } from "next";
import { BlogType, getBlogs } from "@/lib/api";
import Container from "@/components/container";
import { BlogPreview } from "@/components/blog-preview";
import PageTitle from "@/components/page-title";


const blogs: BlogType[] = getBlogs();

const BlogList = () => {
  return (
    <Container>
      {/* Main message */}
      <div className="sm:text-center">
        <PageTitle title="Blogs">
          <h2 className="text-lg ">A random collection of projects, guides, and things that interest me</h2>
          <h3 className="text-sm text-muted-foreground">I do not use AI to write or assist with writing</h3>
          <h3 className="text-sm text-muted-foreground">For development purposes, I added a bunch of generated blogs, but will delete them before v1</h3>
        </PageTitle>
      </div>
      {/* Posts */}
      <div className="relative sm:pb-12 max-w-xl mx-auto">

        {/* vertical line */}
        <div className="hidden absolute top-3 bottom-4 right-full mr-7 md:mr-[3.25rem] w-px bg-secondary sm:block" />

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
