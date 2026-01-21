import { Section, Container } from "@/components/ds";

export const Hero = () => {
  return (
    <Section>
      <Container>
        <h1 className="">brijr/web-starter</h1>
        <p className="text-muted-foreground">
          A minimal typescript website starter with next.js, velite, tailwind, and shadcn/ui.{" "}
        </p>
      </Container>
    </Section>
  );
};
