import MaxWidthWrapper from '@/components/max-width-wrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import rehypeImgSize from "rehype-img-size"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import rehypeExternalLinks from "rehype-external-links"
import matter from "gray-matter"
import fs from "fs"
import Onthispage from '@/components/on-this-page'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import Container from '@/components/container'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import DateFormatter from '@/components/date-formatter'
import { getBlog, getBlogs } from '@/lib/api'


type Props = {
  params: { slug: string, title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type Params = {
  params: {
    slug: string;
  };
};
export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeImgSize, { dir: "public" })
  .use(rehypeExternalLinks, {
    target: "_blank",
    rel: ["nofollow", "noopener", "noreferrer"]
  })
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings)
  .use(rehypePrettyCode, {
    theme: "github-dark",
    transformers: [
      transformerCopyButton({
        feedbackDuration: 1_000,
      }),
    ],
  })
  .use(rehypeStringify)

export default async function BlogPage({ params }: Params) {

  const { slug } = await params
  const filePath = `content/${slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent)

  const blog = getBlog(slug);

  const htmlContent = (await processor.process(content)).toString()
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-1 pt-2 lg:pt-30">
        {/* left sidebar */}
        <div className="">
          <div className="pt-5">
            <Link href="/blog">
              <p className="text-sm text-muted-foreground mb-3">← Back to Blog</p>
            </Link>
          </div>
        </div>

        {/* middle */}
        <div className="">
          <div className="mx-auto max-w-xl justify-items-center prose dark:prose-invert">
            <h1 className='text-4xl lg:text-5xl font-bold mb-5 '>{data.title}</h1>
            <dd className='whitespace-nowrap text-sm text-muted-foreground pl-0 '>
              <DateFormatter dateString={blog.date} />
            </dd>
            <Separator className="mt-5 mb-5" />
          </div>
          <article className="pb-32">
            <div className="max-w-xl mx-auto prose dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
          </article>
        </div>

        {/* right sidebar */}
        <div className="hidden lg:block " >
          <Onthispage className="prose dark:prose-invert text-sm max-w" htmlContent={htmlContent} />
        </div>
      </div>
    </Container >

    // <MaxWidthWrapper className='prose dark:prose-invert'>
    //   <div className='flex '>
    //     <div className='px-16'>
    //       <h1 className='text-2xl font-bold'>{data.title}</h1>
    //       <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    //     </div>
    //     <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent} />
    //   </div>
    //
    // </MaxWidthWrapper>
  )
}
