import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorClassName?: string;
  delay?: number;
  startDelay?: number;
}

export function TypewriterText({ 
  text, 
  className, 
  cursorClassName,
  delay = 100,
  startDelay = 500
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, started]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className={cn("animate-pulse text-primary ml-1", cursorClassName)}>_</span>
    </span>
  );
}
