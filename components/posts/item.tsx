import Link from "next/link";
import { formatDate } from "@/lib/mdx";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
}

export const Item = ({ slug, title, date }: PostItemProps) => (
  <li>
    <Link href={`/${slug}`} className="block group">
      <div className="flex justify-between items-baseline gap-3">
        <h3 className="min-w-0 flex-1">{title}</h3>
        <time dateTime={date} className="text-muted-foreground shrink-0">
          {formatDate(date)}
        </time>
      </div>
    </Link>
  </li>
);
