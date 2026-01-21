import { Section, Container } from "@/components/ds";
import { formatDate } from "@/lib/mdx";
import { CopyButton } from "./copy-button";
import Link from "next/link";

interface MetaProps {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  slug?: string;
}

export function Meta({ title, description, date, author }: MetaProps) {
  return (
    <Section className="border-b">
      <Container>
        <div className="flex justify-between items-start mb-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            &larr; Back
          </Link>
          <CopyButton />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">{title}</h1>
        {description && <p className="text-muted-foreground mb-4">{description}</p>}
        {(date || author) && (
          <div className="text-sm text-muted-foreground">
            {date && <time dateTime={date}>{formatDate(date)}</time>}
            {date && author && <span> · </span>}
            {author && <span>{author}</span>}
          </div>
        )}
      </Container>
    </Section>
  );
}
