import MaxWidthWrapper from '@/components/max-width-wrapper'
import React from 'react'
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeSlug from 'rehype-slug'
import rehypeStringify from "rehype-stringify"
import matter from "gray-matter"
import fs from "fs"
import Onthispage from '@/components/on-this-page'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypePrettyCode } from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Metadata, ResolvingMetadata } from 'next'
import Container from '@/components/container'
import Link from 'next/link'


type Props = {
  params: { slug: string, title: string, description: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type Params = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Params) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    },
    )
    .use(rehypeAutolinkHeadings)

  const { slug } = await params
  const filePath = `content/${slug}.md`
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent)

  const htmlContent = (await processor.process(content)).toString()
  return (
    <Container>
      <div className="grid grid-cols-5 gap-6 md:gap-12 pt-32 ">

        {/* left sidebar */}
        <div className="col-span-5 lg:col-span-1">
          <div className="pt-8">
            <Link href="/">
              <p className="text-sm text-slate-400">← Back to Blog</p>
            </Link>
          </div>
        </div>

        {/* middle */}
        <div className="col-span-5 md:col-span-3">
          <article className="pb-32">
            <h1 className="pt-2 pb-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {data.title}
            </h1>

            <div className="max-w-xl mx-auto prose dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
          </article>
        </div>

        {/* right sidebar */}
        <div className="col-span-5 md:col-span-1" >
        </div>

      </div>
    </Container>

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
