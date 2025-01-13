import React, { useEffect } from "react";
import sound1 from "./assets/key1.mp3";
import sound2 from "./assets/key2.mp3";
import sound3 from "./assets/key3.mp3";
import sound4 from "./assets/key4.mp3";
import sound5 from "./assets/key5.mp3";
import sound6 from "./assets/key6.mp3";
import sound7 from "./assets/key7.mp3";
import sound8 from "./assets/key8.mp3";
import sound9 from "./assets/key9.mp3";
import sound10 from "./assets/key10.mp3";
import sound11 from "./assets/key11.mp3";
import sound12 from "./assets/key12.mp3";
import sound13 from "./assets/key13.mp3";
import sound14 from "./assets/key14.mp3";
import sound15 from "./assets/key15.mp3";
import sound16 from "./assets/key16.mp3";
import sound17 from "./assets/key17.mp3";
import sound18 from "./assets/key18.mp3";
import sound19 from "./assets/key19.mp3";
import sound20 from "./assets/key20.mp3";
import sound21 from "./assets/key21.mp3";
import sound22 from "./assets/key22.mp3";
import sound23 from "./assets/key23.mp3";
import sound24 from "./assets/key24.mp3";

const sounds = {
  1: sound1,
  2: sound2,
  3: sound3,
  4: sound4,
  5: sound5,
  6: sound6,
  7: sound7,
  8: sound8,
  9: sound9,
  10: sound10,
  11: sound11,
  12: sound12,
  13: sound13,
  14: sound14,
  15: sound15,
  16: sound16,
  17: sound17,
  18: sound18,
  19: sound19,
  20: sound20,
  21: sound21,
  22: sound22,
  23: sound23,
  24: sound24,
};

const Piano = () => {
  function playSound(key) {
   
 
    const audio = new Audio(sounds[key]);  
    audio.play();
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
      <div className="piano">
        <div className="blackKeys">
          <button className="btn" onClick={() => playSound(1)}>w</button>
          <button className="btn" onClick={() => playSound(2)}>a</button>
          <button onClick={() => playSound(3)}>s</button>
          <button onClick={() => playSound(4)}>d</button>
          <button onClick={() => playSound(5)}>e</button>
          <button onClick={() => playSound(6)}>r</button>
          <button onClick={() => playSound(7)}>t</button>
          <button onClick={() => playSound(8)}>f</button>
          <button onClick={() => playSound(9)}>g</button>
          <button onClick={() => playSound(10)}>y</button>
          <button onClick={() => playSound(11)}>h</button>
        
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

      <h2 className="drum" >Play Drums here : <a href="https://suadpllana.github.io/drums" target="_blank">Drums</a></h2>
    </div>
     
  );
};

export default Piano;
