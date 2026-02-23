---
title: Markdown Blogs
slug: markdown-blog
excerpt: A few comments on the features of markdown blogs.
imageUrl: /images/coding.jpeg
date: "2026-02-23"
---


## Markdown Blogs

When I was creating my website to share my portfolio, I wanted to add a blog section. There's a few different ways to achieve this. Here's what a md blog is, and why I went with it.

### Markdown Blogs
[Markdown](https://en.wikipedia.org/wiki/Markdown) is a simple syntax that most are familiar with. As a brief reminder, md looks very close to basic text, and is designed to be easily compiled to HTML. Its original purpose was indeed for a more writer friendly way to publish formatted text on the internet.


## Code Blocks

Its essential to have support for code blocks for tutorials or blogs about development.
For example, the code that generates this page looks like this:

```jsx
export default async function BlogPage({ params }: Params) {
  const processor = unified()
    .use(remarkParse)
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

## images
An image looks like this:

![Alt text](/images/dolla.png)

The current implementation of images has limited support for managing size and aspect ratio.

![Alt text](/images/toad.jpg)

## One Final Heading
*Italics looks like this.* These are the major features in the markdown blog, but other common markdown formatting features are also supported.
