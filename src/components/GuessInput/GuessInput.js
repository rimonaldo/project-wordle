import React, { useState } from "react";

function GuessInput({ input, setInput, submitGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(ev) => {
        ev.preventDefault();
        submitGuess();
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        value={input}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(ev) => {
          const guess = ev.target.value;
          if (guess.length - 1 === 5) {
            return;
          } else {
            setInput(ev.target.value.toUpperCase());
          }
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
