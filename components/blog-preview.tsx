import Link from "next/link";
import { Icons } from "./icons";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export function BlogPreview({
  title,
  date,
  description,
  slug,
}: Props) {
  return (
    <article key={slug} className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-accent dark:group-hover:bg-input/50" />
      <Icons.dot className="hidden absolute right-full mr-6 top-2 text-slate-200  md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block" />
      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight pt-8 lg:pt-0">
          {title}
        </h3>
        <div
          className="mt-2 mb-4 line-clamp-2"
        >{description}</div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dt className="sr-only">Date</dt>
          <dd className='whitespace-nowrap text-sm leading-6 text-muted-foreground '>
            <DateFormatter dateString={date} />
          </dd>
        </dl>
      </div>
      <Link
        href={`/blogpost/${slug}`}
        className="flex items-center text-sm font-medium"
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl" />
        <span className="relative">
          Read <span className="sr-only">, {title}</span>
        </span>
        <Icons.rightArrow className="relative mt-px overflow-visible ml-2.5" />
      </Link>
    </article>
  );
}
