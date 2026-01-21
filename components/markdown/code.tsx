"use client";

import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

interface CodeProps {
  children: string;
  className?: string;
  language?: string;
}

export function Code({
  children,
  className,
  language = "typescript",
}: CodeProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a default theme during SSR to prevent hydration mismatch
  // After mount, use the resolved theme
  const isDark = mounted ? resolvedTheme === "dark" : false;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setHasCopied(true);
      toast.success("Code copied to clipboard");
      setTimeout(() => setHasCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error("Failed to copy code");
    }
  };

  const renderCode = ({ style, tokens, getLineProps, getTokenProps }: any) => {
    const isEmptyLine = (line: typeof tokens[0]) => {
      if (line.length === 0) return true;
      const content = line.map(t => t.content).join('');
      return !content.trim();
    };
    
    let start = 0;
    while (start < tokens.length && isEmptyLine(tokens[start])) start++;
    
    let end = tokens.length;
    while (end > start && isEmptyLine(tokens[end - 1])) end--;
    
    const filteredTokens = tokens.slice(start, end);
    
    return (
      <pre
        className={cn(
          "overflow-x-auto rounded bg-muted/30 p-2 text-sm font-mono",
          "[&_code>div:first-child]:!mt-0 [&_code>div:first-child]:!pt-0",
          "[&_code>div:last-child]:!mb-0 [&_code>div:last-child]:!pb-0",
          className
        )}
        style={style}
      >
        <code>
          {filteredTokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            return (
              <div 
                key={i} 
                {...lineProps}
                style={{
                  ...lineProps.style,
                  ...(i === 0 && { marginTop: 0, paddingTop: 0 }),
                  ...(i === filteredTokens.length - 1 && { marginBottom: 0, paddingBottom: 0 }),
                }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            );
          })}
        </code>
      </pre>
    );
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-muted-foreground hover:text-foreground"
        aria-label="Copy code"
      >
        {hasCopied ? (
          <Check className="h-3 w-3" />
        ) : (
          <Copy className="h-3 w-3" />
        )}
      </button>

      {!mounted ? (
        <Highlight
          theme={themes.github}
          code={children.trim()}
          language={language}
        >
          {renderCode}
        </Highlight>
      ) : (
        <Highlight
          theme={isDark ? themes.vsDark : themes.github}
          code={children.trim()}
          language={language}
        >
          {renderCode}
        </Highlight>
      )}
    </div>
  );
}
