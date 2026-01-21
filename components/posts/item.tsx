import Link from "next/link";
import { formatDate } from "@/lib/mdx";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export const Item = ({ slug, title, date, excerpt }: PostItemProps) => {
  return (
    <li>
      <Link href={`/${slug}`} className="block p-4 hover:bg-muted/50 transition-colors">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-medium">{title}</h3>
            {excerpt && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{excerpt}</p>
            )}
          </div>
          <time dateTime={date} className="text-sm text-muted-foreground shrink-0">
            {formatDate(date)}
          </time>
        </div>
      </Link>
    </li>
  );
};
