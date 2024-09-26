import React, { useEffect } from "react";

const Piano = () => {
 
  function playSound(key) {
    const audio = new Audio(`/piano/src/assets/key${key}.mp3`);

  
    if (audio.canPlayType("audio/mpeg") !== "") {
      audio.play().catch((error) => console.error("Error playing audio", error));
    } else {
      console.error("Audio format not supported");
    }
  }

  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case "w":
          playSound(1);
          break;
        case "a":
          playSound(2);
          break;
        case "s":
          playSound(3);
          break;
        case "d":
          playSound(4);
          break;
        case "e":
          playSound(5);
          break;
        case "r":
          playSound(6);
          break;
        case "t":
          playSound(7);
          break;
        case "f":
          playSound(8);
          break;
        case "g":
          playSound(9);
          break;
        case "y":
          playSound(10);
          break;
        case "h":
          playSound(11);
          break;
        case "j":
          playSound(12);
          break;
        case "1":
          playSound(13);
          break;
        case "2":
          playSound(14);
          break;
        case "3":
          playSound(15);
          break;
        case "4":
          playSound(16);
          break;
        case "5":
          playSound(17);
          break;
        case "6":
          playSound(18);
          break;
        case "7":
          playSound(19);
          break;
        case "8":
          playSound(20);
          break;
        case "9":
          playSound(21);
          break;
        case "0":
          playSound(22);
          break;
        case "z":
          playSound(23);
          break;
        case "x":
          playSound(24);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown); 
    };
  }, []);

  return (
    <div>
      <h1>Play the piano 🎹</h1>
      <p>Press the key or click the buttons to play a sound!</p>
      <div className="container">
        <div className="blackKeys">
          <button onClick={() => playSound(1)}>w</button>
          <button onClick={() => playSound(2)}>a</button>
          <button onClick={() => playSound(3)}>s</button>
          <button onClick={() => playSound(4)}>d</button>
          <button onClick={() => playSound(5)}>e</button>
          <button onClick={() => playSound(6)}>r</button>
          <button onClick={() => playSound(7)}>t</button>
          <button onClick={() => playSound(8)}>f</button>
          <button onClick={() => playSound(9)}>g</button>
          <button onClick={() => playSound(10)}>y</button>
          <button onClick={() => playSound(11)}>h</button>
          <button onClick={() => playSound(12)}>j</button>
        </div>
        <div className="whiteKeys">
          <button onClick={() => playSound(13)}>1</button>
          <button onClick={() => playSound(14)}>2</button>
          <button onClick={() => playSound(15)}>3</button>
          <button onClick={() => playSound(16)}>4</button>
          <button onClick={() => playSound(17)}>5</button>
          <button onClick={() => playSound(18)}>6</button>
          <button onClick={() => playSound(19)}>7</button>
          <button onClick={() => playSound(20)}>8</button>
          <button onClick={() => playSound(21)}>9</button>
          <button onClick={() => playSound(22)}>0</button>
          <button onClick={() => playSound(23)}>z</button>
          <button onClick={() => playSound(24)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Piano;
