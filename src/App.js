import React, { useState } from "react";
import "./styles.css";

var emojiDatabase = {
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐": "Sagittarius",
  "♑": "Capricorn",
  "♒": "Aquarius",
  "♓": "Pisces"
};

var emojisInDB = Object.keys(emojiDatabase);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDatabase[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our DataBase for now";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDatabase[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 Style={{ backgroundColor: "red" }}> EMOJIPEDIA </h1>
      <input
        style={{ padding: "2rem", fontSize: "large" }}
        placeHolder="Enter an emoji"
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2>
      <h3>
        <u> or </u>
      </h3>
      <h3>Click on the emojis to know the meaning</h3>
      {emojisInDB.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: ".8rem", fontSize: "2.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// use these also to check the program      😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩
