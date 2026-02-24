import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export interface BlogType {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  imageUrl?: string;
  id: string;
};

const dirContent = fs.readdirSync("content", "utf-8")
const blogs: BlogType[] = dirContent.map(file => {
  const fileContent = readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent)
  const value: BlogType = {
    slug: data.slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    imageUrl: data?.imageUrl,
    id: crypto.randomUUID()
  }
  return value
});
export function getBlog(slug: string): BlogType {
  const blog = blogs.find(blog => blog.slug === slug);
  return blog ?? {
    slug: '',
    title: '',
    date: '',
    excerpt: '',
    id: '',
  }
}
export function getBlogs(): BlogType[] {
  return dirContent.map(file => {
    const fileContent = readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent)
    const value: BlogType = {
      slug: data.slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      imageUrl: data?.imageUrl,
      id: crypto.randomUUID()
    }
    return value
  }).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
