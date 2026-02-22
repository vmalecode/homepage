---
title: Demo Blog
slug: demo-blog
excerpt: This blog demonstrates markdown blog features
imageUrl: /images/coding.jpeg
date: "2026-02-22"
---

In this blog, parsing and formatting features are demonstrated.

## Headings Look Like This

On desktop, they are also automatically linked in the 'On This Page' section.

### A sub heading looks like this

- **This text is bold**: This is also what a bulleted list looks like.
- **This text is bold**: This is also what a bulleted list looks like.
- **This text is bold**: This is also what a bulleted list looks like.

A numbered list looks like this:

1. **Bold text**: regular text.
2. **Bold text**: regular text.
3. **Bold text**: regular text.


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

The current implementation of images has limited support for sizing and managing aspect ratio.

![Alt text](/images/toad.jpg)

## One Final Heading
These are all the major features in the markdown blog. It is very convenient and easy to write new blogs, and doesn't require making a new .tsx page for every new article.
