import React, { useEffect, useState } from "react";
import { sounds } from "./sounds";
import { whiteKeys } from "./whiteKeys";
const Piano = () => {
  const [activeKey, setActiveKey] = useState();

  const playSound = (key) => {
    const audio = new Audio(sounds[key]);
    audio.play();
    setActiveKey(key);
    setTimeout(() => setActiveKey(null), 300);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case "w":
        case "a":
        case "s":
        case "d":
        case "e":
        case "r":
        case "t":
        case "f":
        case "g":
        case "y":
        case "h":
        case "z":
        case "x":
          playSound(e.key);
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          playSound(Number(e.key));
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div>
      <h1>Play the piano 🎹</h1>
      <p>Press the key or click the buttons to play a sound!</p>
      <div className="piano">
        <div className="blackKeys">
          {["w", "a", "s", "d", "e", "r", "t", "f", "g", "h"].map((key, idx) => (
            <button
              key={key}
              className={activeKey === key ? "active " : ""}
              onClick={() => playSound(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="whiteKeys">
          {whiteKeys.map((key) => (
            <button
              key={key}
              className={activeKey === key ? "activeWhite" : ""}
              onClick={() => playSound(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      <h2>
        Play Drums here:
        <a href="https://suadpllana.github.io/drums" target="_blank" >
          Drums
        </a>
      </h2>
    </div>
  );
};

export default Piano;
