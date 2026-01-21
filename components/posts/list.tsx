import { Section, Container } from "@/components/ds";
import { Item } from "@/components/posts/item";

import type { Post } from "#site/content";

export const List = ({ posts }: { posts: Post[] }) => {
  return (
    <Section>
      <Container>
        <h2 className="text-xl font-medium mb-4">Posts</h2>
        {posts.length > 0 ? (
          <ul className="border divide-y rounded">
            {posts.map((post) => (
              <Item
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.description}
              />
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">No posts yet.</p>
        )}
      </Container>
    </Section>
  );
};
