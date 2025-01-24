'use client'
import { useState, useEffect } from "react";

const TypingAnimationWithPause = () => {
    const textArray = ["React Developer", "Javascript Developer", "Frontend Developer"];
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState(100);
  
    useEffect(() => {
      const handleTyping = () => {
        const currentText = textArray[index];
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, prev.length - 1));
          setDelay(100); // Faster speed when deleting
          if (displayedText === "") {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          }
        } else {
          setDisplayedText((prev) => currentText.slice(0, charIndex + 1));
          if (displayedText === currentText) {
            setDelay(2000); // Pause before deleting
            setIsDeleting(true);
          } else {
            setDelay(100); // Typing speed
          }
        }
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      };
  
      const timer = setTimeout(handleTyping, delay);
      return () => clearTimeout(timer);
    }, [displayedText, charIndex, isDeleting, delay, textArray, index]);
  
    return (
      <div style={{ fontFamily: "monospace", fontSize: "24px", color: 'violet' }}>
        {displayedText}
        <span className="cursor">|</span>
      </div>
    );
  };
  
export default TypingAnimationWithPause;