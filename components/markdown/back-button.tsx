"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackButton() {
  return (
    <Link
      href="/"
      title="Back"
      className={cn(buttonVariants({ variant: "outline", size: "icon-sm" }))}
    >
      <ArrowLeft />
    </Link>
  );
}

