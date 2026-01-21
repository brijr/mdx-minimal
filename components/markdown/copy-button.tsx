"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const article = document.querySelector("article");
    if (article) {
      await navigator.clipboard.writeText(article.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Button variant="outline" size="icon-sm" onClick={handleCopy} title={copied ? "Copied" : "Copy"}>
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}
