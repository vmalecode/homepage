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
  description: string;
  imageUrl?: string;
  id: string;
};

const dirContent = fs.readdirSync("content", "utf-8")

export function getBlogs(): BlogType[] {
  return dirContent.map(file => {
    const fileContent = readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent)
    const value: BlogType = {
      slug: data.slug,
      title: data.title,
      date: data.date,
      description: data.description,
      imageUrl: data?.imageUrl,
      id: crypto.randomUUID()
    }
    return value
  })
}
