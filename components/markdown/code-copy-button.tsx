"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setHasCopied(true);
      toast.success("Code copied to clipboard");
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error("Failed to copy code");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      onClick={copyToClipboard}
      title={hasCopied ? "Copied" : "Copy code"}
      className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
    >
      {hasCopied ? <Check /> : <Copy />}
    </Button>
  );
}
