---
title: Markdown Blogs
slug: markdown-blog
excerpt: A few comments on the features of markdown blogs.
imageUrl: /images/coding.jpeg
date: "2026-02-23"
---


## Markdown Blogs

When I was creating this website to share my portfolio, I wanted to add a blog section. There's a few different ways to achieve this, and I wanted something that is easy to implement and still professional. A markdown blog achieves this. Here's how and why one might want to implement one in a Next.js project.

## Motivation
Like all projects, scope is important. I chose this solution, because it strikes a balance of using only commercial off the shelf products, and creating everything from scratch. I considered using one of several blogging websites, but didn't like the thought of making people create a new account just to read a blog.

## Markdown And How Its Used
[Markdown](https://en.wikipedia.org/wiki/Markdown) looks very close to basic text, and was designed to be processed to HTML. Its original purpose was indeed to provide a more writer friendly way to publish formatted text on the internet, and was made by a guy named ~Mark~ **John Gruber**. 

## This Site's implementation

Here, markdown blogs are stored in a `content` directory, read and interpreted programmatically, and rendered as individual pages. Creating the processor is relatively straightforward. Essentially all the work was done a long time ago, and developers only need to create a processor with the features they choose.

Here is the processor used to create this blog:

```jsx
export default async function BlogPage({ params }: Params) {
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
```

And creating a string of HTML would be as simple as:

```jsx
const htmlContent = (await processor.process(content)).toString()
```

## Inspiration 
When I started this project, I wanted to create a blog like the YouTuber [ProgrammingWithHarry](https://www.youtube.com/watch?v=OAVOl-aSOJc) made. During development, I got excited about adding a number of additional features, such as making the site more mobile friendly.

[Skaparelos' minimal-blog-starter](https://github.com/skaparelos/minimal-blog-starter) features slick svgs, and I took the vertical line svg and some layout features from their project. 

[Ondrej Sevcik](https://ondrejsevcik.com/blog/building-perfect-markdown-processor-for-my-blog) also wrote a great article about pure markdown blogs, which also explains exactly how to configure a markdown processor and goes into greater detail.


## Future Work
There are many more features that could be added to this blog, including:
 - **Pagination** for when the number of blog posts becomes too large to conveniently fit on one screen
 - **Hosting the blogs in a separate space** such as:
    - A database
    - A public github repo
    - Object storage
 - **Allowing users to interact or comment**

While these features sound compelling to me, I don't consider myself a professional writer, and strongly prefer to limit the scope of this project to something more easily achievable. Overall, I think the current implementation offers enriching features without being over-engineered. I don't have any current plans to develop this blog further, and am happy to save my time and motivation for other higher impact projects.
