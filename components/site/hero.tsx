import { Section, Container } from "@/components/ds";

export const Hero = () => {
  return (
    <Section className="border-b">
      <Container>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">MDX Starter</h1>
        <p className="text-muted-foreground">
          A minimal MDX starter with Next.js and Tailwind.{" "}
          <a href="https://github.com/brijr/mdx" className="underline underline-offset-4">
            View on GitHub
          </a>
        </p>
      </Container>
    </Section>
  );
};
