import { useEffect, useState } from "react";

const useRainbowText = (text) => {
  const [rainbowText, setRainbowText] = useState("");
  const colors = ["red", "orange", "green", "blue", "indigo", "violet"];

  useEffect(() => {
    let colorIndex = 0;
    const intervalId = setInterval(() => {
      let coloredText = "";
      for (let i = 0; i < text.length; i++) {
        coloredText += `<span style="color:${colors[(i + colorIndex) % colors.length]}">${text[i]}</span>`;
      }
      setRainbowText(coloredText);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500); // Change color every 500ms

    return () => clearInterval(intervalId);
  }, [text, colors]);

  return rainbowText;
};

export default useRainbowText;
