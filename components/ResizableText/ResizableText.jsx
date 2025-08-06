import React, { useState, useRef, useEffect } from "react";

const ResizableText = ({ text, containerWidth, containerHeight, maxFontSize = 40 }) => {
  const [fontSize, setFontSize] = useState(maxFontSize);
  const textRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const containerW = containerWidth;
      const containerH = containerHeight;

      let currentFontSize = fontSize;
      let textWidth = textRef.current.scrollWidth;
      let textHeight = textRef.current.scrollHeight;
      while ((textWidth > containerW || textHeight > containerH) && currentFontSize > 5) {
        currentFontSize -= 1;
        textRef.current.style.fontSize = `${currentFontSize}px`;
        textRef.current.style.marginTop = `-${currentFontSize}px`;
        textWidth = textRef.current.scrollWidth;
        textHeight = textRef.current.scrollHeight;
      }

      setFontSize(currentFontSize);
    };

    adjustFontSize();

    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [text, containerWidth, containerHeight, fontSize]);

  return (
    <p
      ref={textRef}
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {text}
    </p>
  );
};

export default ResizableText;
