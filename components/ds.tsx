import { cn } from "@/lib/utils";

type DSProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  dangerouslySetInnerHTML?: { __html: string };
};

export const Section = ({ children, className, id, style }: DSProps) => (
  <section className={cn("py-8", className)} id={id} style={style}>
    {children}
  </section>
);

export const Container = ({ children, className, id, style }: DSProps) => (
  <div className={cn("max-w-2xl mx-auto px-6", className)} id={id} style={style}>
    {children}
  </div>
);

export const Layout = ({ children, className, style }: DSProps) => (
  <html lang="en" suppressHydrationWarning className={cn(className)} style={style}>
    {children}
  </html>
);

export const Main = ({ children, className, id, style }: DSProps) => (
  <main className={cn(className)} id={id} style={style}>
    {children}
  </main>
);

export const Prose = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
  style,
}: DSProps) => (
  <article
    className={cn(
      "prose prose-neutral dark:prose-invert max-w-none",
      "[&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:mb-4",
      "[&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-8 [&_h2]:mb-4",
      "[&_h3]:text-xl [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-3",
      "[&_p]:leading-7 [&_p]:mb-4",
      "[&_a]:underline [&_a]:underline-offset-4",
      "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4",
      "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4",
      "[&_li]:mb-1",
      "[&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:text-muted-foreground",
      "[&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm",
      "[&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4",
      "[&_img]:rounded [&_img]:my-4",
      "[&_hr]:my-8 [&_hr]:border-border",
      className
    )}
    id={id}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    style={style}
  >
    {children}
  </article>
);
