import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Button variant="outline" size="icon-sm" asChild title="Back">
      <Link href="/">
        <ArrowLeft />
      </Link>
    </Button>
  );
}
