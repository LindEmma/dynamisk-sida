import React from "react";
import "./EasterEgg.css";

export default function TypingEasterEgg() {
  const konamiCode = ["r", "o", "l", "l"];
  const EasterEgg = require("react-easter");
  return (
    <EasterEgg
      keys={konamiCode}
      timeout={10000}
    >
      <div className="easter-overlay">
        <iframe
          className="easter-egg"
          src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1&mute=1"
          frameborder="0"
          allowfullscreen
        />
      </div>
    </EasterEgg>
  );
}
