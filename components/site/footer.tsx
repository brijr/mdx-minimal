import { Section, Container } from "@/components/ds";

export const Footer = () => {
  return (
    <footer className="border-t">
      <Section className="py-6">
        <Container className="text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} brijr/mdx</p>
        </Container>
      </Section>
    </footer>
  );
};
