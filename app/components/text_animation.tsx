'use client'
import { useState, useEffect, useMemo } from "react";

const TypingAnimationWithPause = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);
  const textArray = useMemo(() => ["React Developer", "Javascript Developer", "Frontend Developer"], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[index];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setDelay(100);
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      } else {
        setDisplayedText(() => currentText.slice(0, charIndex + 1));
        if (displayedText === currentText) {
          setDelay(2000);
          setIsDeleting(true);
        } else {
          setDelay(100);
        }
      }
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    };

    const timer = setTimeout(handleTyping, delay);
    return () => clearTimeout(timer);
  }, [displayedText, charIndex, isDeleting, delay, textArray, index]);

  return (
    <div style={{ fontFamily: "monospace", fontSize: "24px", color: 'var(--theme-font-color)' }}>
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimationWithPause;